import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-employee-corner',
  templateUrl: './employee-corner.component.html',
  styleUrls: ['./employee-corner.component.scss']
})
export class EmployeeCornerComponent implements OnInit {
  createForm: FormGroup;
  services = [
    {value: 'Contract', viewValue: 'Contract'},
    {value: 'Permanent', viewValue: 'Permanent'},
    {value: 'ITContract', viewValue: 'IT Contract Staffing'},
    {value: 'RPO', viewValue: 'RPO'}
  ];
  Sectors = [
    { value: 'Agro', viewValue: 'Agro & Seeds' },
    { value: 'Banking', viewValue: 'Banking & finance' },
    { value: 'GeneralAdmin', viewValue: '	General Administration' },
    { value: 'HR', viewValue: 'Human Resources' }
];
constructor(private _fB: FormBuilder, private api: ApiServiceService,
  private router: Router,
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm = this._fB.group({
      name: '',
      lastName: '',
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(6), Validators.maxLength(10)]],
      destination: '',
      company: '',
      service: '',
      jobtitle: '',
      sector: '',
      jobSpecification: ''
    });
  }

  onSubmit(){
    console.log(this.createForm.value);
    if (this.createForm.valid) {
      this.showPopup('Fprm sent successfully');
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
