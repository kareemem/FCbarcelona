import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit{
constructor(private _MainserviceService:MainserviceService){}
ngOnInit(): void {
  this._MainserviceService.showNav.next(false)
}
}
