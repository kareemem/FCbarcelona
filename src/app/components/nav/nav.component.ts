import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  show:boolean=true
constructor(private _MainserviceService:MainserviceService){}
ngOnInit(): void {
    this._MainserviceService.showNav.subscribe({
      next:(response)=>{
        this.show=response
      }
    })
}
}
