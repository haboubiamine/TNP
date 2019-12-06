import { Component, OnInit } from '@angular/core';
import{ Employe } from '../Employe';
import{ MotoService } from '../moto.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  admin: Employe;

  constructor(private motoService:MotoService) { }
 
  
  
  ngOnInit() {
  
    this.admin = this.motoService.getEmployeByIDD('admin');
   

  }

}
