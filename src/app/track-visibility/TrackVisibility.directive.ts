import {
    Directive,
    Output,
    EventEmitter,
    ElementRef,
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    Input
  } from "@angular/core";
  import { BehaviorSubject } from "rxjs";
  import { filter, take } from "rxjs/operators";
  
  type VisibilityChange =
    | {
        isVisible: true;
        target: HTMLElement;
      }
    | {
        isVisible: false;
        target: HTMLElement | undefined;
      };
  
  @Directive({
    selector: "[visibility]"
  })
  export class TrackVisibility
    implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    /**
     * Becomes "true" once the view is initialized.
     */
    private afterViewInit$ = new BehaviorSubject<boolean>(false);
  
    /**
     * The IntersectionObserver for this element.
     */
    private observer: IntersectionObserver | undefined;
  
    /**
     * Last known visibility for this element.
     * Initially, we don't know.
     */
    private isVisible: boolean = undefined;
  
    /**
     * If false, once the element becomes visible there will be one emission and then nothing.
     * If true, the directive continuously listens to the element and emits whenever it becomes visible or not visible.
     */
    @Input() visibilityMonitor = false;
  
    /**
     * Notifies the listener when the element has become visible.
     * If "visibilityMonitor" is true, it continuously notifies the listener when the element goes in/out of view.
     */
    @Output() visibilityChange = new EventEmitter<VisibilityChange>();
  
    constructor(private element: ElementRef) {}
  
    ngOnInit(): void {
      this.reconnectObserver();
    }
  
    ngOnChanges(): void {
      this.reconnectObserver();
    }
  
    ngAfterViewInit(): void {
      this.afterViewInit$.next(true);
    }
  
    ngOnDestroy(): void {
      // Avoid Leaks
      this.afterViewInit$.complete();
      // Disconnect and if visibilityMonitor is true, notify the listener
      this.disconnectObserver();
      if (this.visibilityMonitor) {
        this.visibilityChange.emit({
          isVisible: false,
          target: undefined
        });
      }
    }
  
    private reconnectObserver(): void {
      // Disconnect an existing observer
      this.disconnectObserver();
      // Sets up a new observer
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const { isIntersecting: isVisible, target } = entry;
          const hasChangedVisibility = isVisible !== this.isVisible;
          const shouldEmit = isVisible || (!isVisible && this.visibilityMonitor);
          if (hasChangedVisibility && shouldEmit) {
            this.visibilityChange.emit({
              isVisible,
              target: target as HTMLElement
            });
            this.isVisible = isVisible;
          }
          // If visilibilyMonitor is false, once the element is visible we stop.
          if (isVisible && !this.visibilityMonitor) {
            observer.disconnect();
          }
        });
      },{threshold:0.50});
      // Start observing once the view is initialized
      this.afterViewInit$
        .pipe(
          filter(Boolean),
          take(1)
        )
        .subscribe(() => {
          if (this.observer) {
            this.observer.observe(this.element.nativeElement);
          }
        });
    }
  
    private disconnectObserver(): void {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = undefined;
      }
    }
  }
  