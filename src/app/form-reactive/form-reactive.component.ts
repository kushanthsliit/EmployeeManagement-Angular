import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';   //replace both 2 as form builder
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   userName : new FormControl(''),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // });
 
  registrationForm = this.fb.group({
    userName : ['Kushan', [Validators.required, Validators.minLength(5)]],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : ['']
    })
  });

  // get userName(){                                     //
  //   return this.registrationForm.get('userName');
  // }

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  loadApiData(){
    // this.registrationForm.setValue({     //using the setValue method must pass values to all the fields
    //   userName : 'Kushanth Nego',
    //   password : 'abc123',
    //   confirmPassword : 'abc123',
    //   address : {
    //     city : 'Mannar',
    //     state : 'Pesalai',
    //     postalCode : '41000'
    //   }
    // });

    this.registrationForm.patchValue({  //using the setValue method must pass values to selected fields
      userName : 'Kushanth Nego',
      password : 'abc123',
      confirmPassword : 'abc123'
    });
  }
}
