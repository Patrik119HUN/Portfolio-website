import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  monitor = true;
  @Output() state: EventEmitter<boolean> = new EventEmitter();
  visibilityChange(e) {
    this.state.emit(e.isVisible);
  }
}
