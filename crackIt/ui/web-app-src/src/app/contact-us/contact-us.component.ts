import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title: string;
  createForm: FormGroup;
  inputList = [
    "Administrative",
    "Executive Staffing",
    "IT Staffing",
    "Human Resources",
    "Healthcare",
    "Sales  Marketing",
    "Industrial / Manufacturing"
  ];
  constructor(private _fB: FormBuilder, private api: ApiServiceService,
    private router: Router,
    public dialog: MatDialog) { }

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
    if (this.createForm.valid) {
      this.showPopup('Mail sent successfully');
      // this.api.create(this.createForm.value).subscribe(data => {
      // });;
    } else {

    }
  }

  showPopup(data) {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: 'auto',
      width: '25%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home'],{ skipLocationChange: true });
    });
  }
}
