import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from'@angular/router';
import{Router}from'@angular/router';
import{ MotoService } from '../moto.service';
import{ Cloth } from '../Cloth';

@Component({
  selector: 'app-selected-clothing',
  templateUrl: './selected-clothing.component.html',
  styleUrls: ['./selected-clothing.component.css']
})
export class SelectedClothingComponent implements OnInit {
  info:Cloth;
  identifiant:String;
  constructor(private activatedRoute:ActivatedRoute,private motoService:MotoService,private router:Router) { }

  onback(){
    this.router.navigate(['/cloth']);
  }
  ngOnInit() {
    this.identifiant=this.activatedRoute.snapshot.params['ID'];
    this.info=this.motoService.getclothByID(this.identifiant);
  }

}
