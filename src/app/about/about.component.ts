import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  monitor = true;
  @Output() state: EventEmitter<boolean> = new EventEmitter();
  visibilityChange(e) {
    this.state.emit(e.isVisible);
  }
}
