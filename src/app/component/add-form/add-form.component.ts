import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { addDetails } from '../../model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit {
  userForm!: FormGroup;
  activeData : any
  constructor(private employee : EmployeeService){ }


ngOnInit(){

  this.employee.getAllData().subscribe((res : any) =>{
    this.activeData = res.response;
   // console.log(res);
})

  this.userForm = new FormGroup({
    fname: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    lname: new FormControl('',[
      Validators.required,
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    number: new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]*$'), // Only numbers
      Validators.minLength(10)
    ]),
    age: new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]*$'), // Only numbers
    ]),

});
}
get fname(){
  return this.userForm.get("fname");
}
get lname(){
  return this.userForm.get("lname");
}
get email(){
  return this.userForm.get("email");
}
get number(){
  return this.userForm.get("number");
}
get age(){
  return this.userForm.get("age");
}
onSubmit(){
 let submitModel : addDetails = {
  fname : this.fname?.value,
  lname : this.lname?.value,
  email: this.email?.value,
  number : this.number?.value,
  age : this.age?.value 
 }
console.log(this.userForm.value);

this.employee.addDetails(submitModel).subscribe((res: any) => {
  this.activeData = res.response; 
//  console.log(res);
         
});



}


reset(){
  this.userForm.reset()
}

isVissible : boolean = false; 
open(){
  this.isVissible = true;
}
}
 
