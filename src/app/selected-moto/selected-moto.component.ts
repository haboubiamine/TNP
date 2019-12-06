import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from'@angular/router';
import{ MotoService } from '../moto.service';
import{ Moto } from '../Moto';
import{Router}from'@angular/router';

@Component({
  selector: 'app-selected-moto',
  templateUrl: './selected-moto.component.html',
  styleUrls: ['./selected-moto.component.css']
})
export class SelectedMotoComponent implements OnInit {
  info:Moto;
  identifiant:String;
  constructor(private activatedRoute:ActivatedRoute,private motoService:MotoService,private router:Router) { }

  onback(){
    this.router.navigate(['/Motocycle']);
  }

  ngOnInit() {
    this.identifiant=this.activatedRoute.snapshot.params['ID'];
    this.info=this.motoService.getMotoByID(this.identifiant);
  }
  
}
