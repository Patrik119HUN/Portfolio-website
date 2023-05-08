import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactComponent],
})
export class ContactModule {}
