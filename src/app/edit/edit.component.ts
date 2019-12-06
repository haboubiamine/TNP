import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ MotoService } from '../moto.service';
import { Moto } from '../Moto';
import { Cloth } from '../cloth';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
 


  constructor(private motoservice: MotoService) { }
  ID:String;
  home:String;
  name:String;
  prix:Number;
  img:String="../assets/moto/.JPG";
  date:Date;
  fuel:Number;
  Weight:Number;
  cool:String;
  condition:Boolean;

  IDdelete:String;

  editID:String;
  edithome:String;
  editname:String;
  editprix:Number;
  editimg:String;
  editdate:Date;
  editfuel:Number;
  editWeight:Number;
  editcool:String;
  editcondition:Boolean;
  
  cID:String;
  cname:String;
  cprix:Number;
  cimag:String= "../assets/clothing/.JPG ";
  ctaille:String;
  cmark:String;
  ctype:String;

  ceID:String;
  cename:String;
  ceprix:Number;
  ceimag:String;
  cetaille:String;
  cemark:String;
  cetype:String;

  CIDdelete:String;

  messageaddmoto="";
  messagedelmoto="";
  messageupmoto="";

  messageaddcloth="";
  messagedelcloth="";
  messageupcloth="";

  cloth:Cloth[];
  
  ngOnInit() {

    this.cloth=this.motoservice.clothing;
  }
  

  onSubmit(f:NgForm){ 
  if (this.motoservice.addMoto(this.ID,this.home,this.name,this.date,this.prix,this.img,this.cool,this.fuel,this.Weight,this.condition)) {
    this.messageaddmoto="Moto Added";
  }
  else this. messageaddmoto="ID Not found"; 
  }

  onUpdate(u:NgForm){
    if (this.motoservice.getMotoByID(this.editID) !== null){
   const moto =this.motoservice.getMotoByID(this.editID);
   if (this.edithome!=undefined){moto.set_Home(this.edithome);}
   if (this.editname!=undefined){moto.set_name(this.editname);}
   if(this.editprix!=undefined){moto.set_prix(this.editprix);}
   if (this.editimg!=undefined){moto.set_image(this.editimg);}
   if (this.editdate!=undefined){moto.set_date(this.editdate);}
   if (this.editfuel!=undefined){moto.set_Fuel(this.editfuel);}
   if (this.editWeight!=undefined){ moto.set_Weight(this.editWeight);}
   if (this.editcool!=undefined){moto.set_cooling(this.editcool);}
   if (this.editcondition!=undefined){moto.set_condition(this.editcondition);}
   this.messageupmoto="Moto Updated";
  }
    else  this.messageupmoto="ID Not found";
}
  ondelete(d:NgForm){
    if (this.motoservice.getMotoByID(this.IDdelete) !== null){
    const moto =this.motoservice.getMotoByID(this.IDdelete);
    this.motoservice.DeleteMoto(moto);
    this.messagedelmoto="Moto Deleted";
    }
    else  this.messagedelmoto="ID Not found";
}

  onSubmitcloth(c:NgForm){ 
    if(this.motoservice.addcloth(this.cID,this.cname,this.cprix,this.cimag,this.ctaille,this.cmark,this.ctype)){
     this.messageaddcloth="Cloth Added";
    }
    else this. messageaddcloth="ID Not found";
    }

  onUpdatecloth(c1:NgForm){ 
    if (this.motoservice.getclothByID(this.ceID) !== null){
    const cloth = this.motoservice.getclothByID(this.ceID)
    if (this.cename!=undefined){cloth.set_name(this.cename);}
    if (this.ceprix!=undefined){cloth.set_prix(this.ceprix);}
    if (this.cemark!=undefined){cloth.set_mark(this.cemark);}
    if (this.ceimag!=undefined){cloth.set_image(this.ceimag);}
    if (this.cetaille!=undefined){cloth.set_taille(this.cetaille);}
    if (this.cetype!=undefined){cloth.set_type(this.cetype);}
    this.messageupcloth="Cloth Updated";
    }
    else  this.messageupcloth="ID Not found";
}

  ondeletecloth(c3:NgForm){
    if (this.motoservice.getclothByID(this.CIDdelete) !== null){
    const cloth = this.motoservice.getclothByID(this.CIDdelete);
    this.motoservice.Deletecloth(cloth);
    this.messagedelcloth="Cloth Deleted";
    }
    else  this.messagedelcloth="ID Not found";

  }

  sold(P : any){
   var R = P*0.5 ;
   var S = P-R;
     return S ;
  }

  goblack(){
    var i:number;
  for (i=0;i<this.cloth.length;i++){
   
  this.cloth[i].set_prix(this.sold(this.cloth[i]._prix));
  }

  }
}


