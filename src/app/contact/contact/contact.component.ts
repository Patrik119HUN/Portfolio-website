import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  monitor = true;
  @Output() state: EventEmitter<boolean> = new EventEmitter();
  visibilityChange(e) {
    this.state.emit(e.isVisible);
  }
}
