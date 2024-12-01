import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from 'src/app/store';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
store:Store[]=[]
page:number=1
total:any
constructor(private _MainserviceService:MainserviceService,private _NgwWowService:NgwWowService){}
ngOnInit(): void {
  this._MainserviceService.showNav.next(true)
  this.getAllStore()
}
getAllStore(){
  this.store=this._MainserviceService.store
  this.total=this.store.length
  this._NgwWowService.init()
}
changePage(event:any){
  this.page=event
}
}
