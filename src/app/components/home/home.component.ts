import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { Achievements } from 'src/app/interfaces/achievements';
import { Gallery } from 'src/app/gallery';
import { RouterLink } from '@angular/router';
import { Sponsrs } from 'src/app/sponsrs';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allAchievements:Achievements[]=[]
gallery:Gallery[]=[]
allSponsrs:Sponsrs[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  sponsrsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  constructor(private _MainserviceService:MainserviceService,private _NgwWowService:NgwWowService){}
  ngOnInit(): void {
    this._MainserviceService.showNav.next(true)
    this.getAchievements()
    this.getGallery()
    this.getSponsrs()
    this._NgwWowService.init()
  }
  getAchievements(){
    this.allAchievements=this._MainserviceService.achievements
  }
  getGallery(){
    this.gallery=this._MainserviceService.gallery
  }
  getSponsrs(){
    this.allSponsrs=this._MainserviceService.sponsrs
  }

}
