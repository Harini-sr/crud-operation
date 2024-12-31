 import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { editDetails } from '../../model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
userForm!: FormGroup;
  activeData : any;
  constructor(private employee : EmployeeService){

    
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

getid : any;
viewall: any;
firstName: any;
lastName: any;
emailId: any;
phone: any;
ageNo: any;

ngOnInit(): void {

  this.employee.editAllData(this.getid).subscribe((res: any) => {
    this.viewall = res.response;
    this.firstName = this.viewall.fname;
    this.lastName = this.viewall.lname;
    this.emailId = this.viewall.email;
    this.phone = this.viewall.number;
    this.ageNo = this.viewall.age;
console.log(res);

});
this.employee.getallactiverole().subscribe((res: any) => {
  this.activeData = res.response;
  console.log(res);

})

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
onsubmit(){
 let submitModel : editDetails = {
   fname: this.userForm.value.fname,
   lname: this.userForm.value.lname,
   email: this.userForm.value.email,
   number: this.userForm.value.number,
   age: this.userForm.value.age,
   _id: undefined
 }
console.log(this.userForm.value);


this.employee.editDetails(submitModel).subscribe((res: any) => {
  this.activeData = res; 
//  console.log(res);
         
});
}

reset(){

}
}