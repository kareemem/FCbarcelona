import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
constructor(private _Router:Router,private _MainserviceService:MainserviceService){}
  registerForm=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  confirmPassword:new FormControl(null,[Validators.required,Validators.minLength(5)])
},{validators:this.confirmPasswordMatch})
ngOnInit(): void {
  this._MainserviceService.showNav.next(true)
}
confirmPasswordMatch(form:any){
  let password =form.get('password')
  let confirmPassword =form.get('confirmPassword')
  if(password.value == confirmPassword.value){
    return null;
  }else{
    confirmPassword.setErrors({confirmPasswordMatch:'confirm password not matched'})
    return {confirmPasswordMatch:'confirm password not matched'}
  }
}
handleRegister(registerForm :FormGroup){
  if(registerForm.valid){
    this._Router.navigate(['signIn'])
  }
}
}
