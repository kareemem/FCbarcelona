import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Squad } from 'src/app/squad';
import { Coach } from 'src/app/coach';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
goalKeepers:Squad[]=[]
defeenders:Squad[]=[]
midfielders:Squad[]=[]
forwards:Squad[]=[]
coach:Coach[]=[]
constructor(private _MainserviceService:MainserviceService,private _NgwWowService:NgwWowService){}
ngOnInit(): void {
  this._MainserviceService.showNav.next(true)
  this.getAllSquad()
  this._NgwWowService.init()
}
getAllSquad(){
  this.goalKeepers=this._MainserviceService.goolKeepers
  this.defeenders=this._MainserviceService.defeenders
  this.midfielders=this._MainserviceService.midfielders
  this.forwards=this._MainserviceService.forwards
  this.coach=this._MainserviceService.coach
}
}
