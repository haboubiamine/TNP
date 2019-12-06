import { Component, OnInit } from '@angular/core';
import{ MotoService } from '../moto.service';
import{ Cloth } from '../Cloth';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  mescloth: Cloth [];
  

  cloth:String;
  

  constructor(private motoservice: MotoService) { }

  ngOnInit() {
    this.mescloth = this.motoservice.clothing;
    
  }
  

}
