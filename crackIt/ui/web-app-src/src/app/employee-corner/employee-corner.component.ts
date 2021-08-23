import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    { value: 'Agro', viewValue: 'Agro &amp; Seeds' },
    { value: 'Banking', viewValue: 'Banking &amp; finance' },
    { value: 'GeneralAdmin', viewValue: '	General Administration' },
    { value: 'HR', viewValue: 'Human Resources' }
];
  constructor(private _fB: FormBuilder) { }

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
  }

}
