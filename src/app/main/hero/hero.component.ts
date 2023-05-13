import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  monitor = true;
  @Output() state: EventEmitter<boolean> = new EventEmitter();
  visibilityChange(e) {
    this.state.emit(e.isVisible);
  }
}
