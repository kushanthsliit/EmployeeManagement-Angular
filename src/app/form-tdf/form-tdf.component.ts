import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-form-tdf',
  templateUrl: './form-tdf.component.html',
  styleUrls: ['./form-tdf.component.css']
})
export class FormTdfComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue']
  userModel = new User('', 'kushan@test.com', 46354343, '', 'morning', true);

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel);
  }
}
