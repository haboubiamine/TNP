import { Component, OnInit } from '@angular/core';
import{ MotoService } from '../moto.service';
import{ Moto } from '../moto';
@Component({
  selector: 'app-motocycle',
  templateUrl: './motocycle.component.html',
  styleUrls: ['./motocycle.component.css']
})
export class MotocycleComponent implements OnInit {
mesmoto: Moto [];
  constructor(private motoservice: MotoService) { }
  search1;
  search2;
  ngOnInit() {
    this.mesmoto = this.motoservice.lesmoto;
  }

}
