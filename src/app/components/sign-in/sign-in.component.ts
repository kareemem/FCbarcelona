import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  constructor(private _Router:Router,private _MainserviceService:MainserviceService){}
  loginForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
})
ngOnInit(): void {
  this._MainserviceService.showNav.next(true)
}
login(loginForm :FormGroup){
  if(loginForm.valid){
    this._Router.navigate(['home'])
  }
}
}
