import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title: string;
  createForm: FormGroup;

  constructor(private _fB: FormBuilder) { }

  ngOnInit(): void {
    this.title = 'Contact Us';
    this.createForm = this._fB.group({
      name: '',
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(6), Validators.maxLength(10)]],
      subject: '',
      message: ''
    });
  }
  onContinueToReview() {
    if(this.createForm.valid){
      console.log(this.createForm.value);
    } else {
      
    }
   }
}
