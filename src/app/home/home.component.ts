import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import{ Employe } from '../Employe';
import{ MotoService } from '../moto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin: Employe;

  constructor(private motoService:MotoService) { }
 
  
  
  ngOnInit() {
  
    this.admin = this.motoService.getEmployeByIDD('admin');
   

  }

}
