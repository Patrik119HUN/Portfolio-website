import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup;
  succes:boolean;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
  get email() {
    return this.myForm.get('email');
  }
  get name() {
    return this.myForm.get('name');
  }
  get message() {
    return this.myForm.get('message');
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ts4q8gk',
        'template_2vfgp7b',
        e.target as HTMLFormElement,
        'Znb5BU-9C8V4EbUJQ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.myForm.reset();
          this.succes = true;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
