import { Injectable } from '@angular/core';
import { Moto } from './Moto';
import { Employe } from './Employe';
import { Cloth } from './Cloth';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  lesmoto=[
    new Moto ('123DE','Harley-Davidson','IRON 883', new Date ("11/25/2019"),8.999,'../assets/moto/M1.JPG','Air-cooling',11.3,259,true),
    new Moto ('5435F','BMW','BMW S 1000 RR', new Date ("02/16/2019"),16.995,'../assets/moto/M9.JPG','Air-cooling',12,190,true),
    new Moto ('43SFG','Kawasaki','Ninja H2 Carbon', new Date ("07/05/2019"),32.599,'../assets/moto/M3.JPG','liquid_cooling',17,238,true),
    new Moto ('123ZE','Harley-Davidson','Roadster', new Date ("11/20/2019"),11.499,'../assets/moto/M2.JPG','Air-cooling, ',11.3,256,true),
    new Moto ('34FRG','Kawasaki','Z900 RS CAFE', new Date ("09/06/2018"),11.779,'../assets/moto/M4.JPG','liquid_cooling',17,216,false),
    new Moto ('5435F','Peugeot','P2X Cafe Racer ', new Date ("02/06/2019"),5.999,'../assets/moto/M6.JPG','Air-cooling',12,200,true),
    new Moto ('DF3F4','Yamaha','Ténéré 700', new Date ("03/14/2017"),2.589,'../assets/moto/M5.JPG','liquid_cooling',16,204,false),
    new Moto ('534JF','Yamaha','Tech Max ', new Date ("02/10/2018"),13.699,'../assets/moto/M7.JPG','liquid_cooling',15,213,false),
    new Moto ('KF947','Indian','Scout Bobber ', new Date ("05/15/2019"),11.999,'../assets/moto/M8.JPG','liquid_cooling',12,209,true),
  ]
  clothing=[
    new Cloth ('7DJR8','Leather Jacket',503.49,'../assets/clothing/C2.JPG','L/m/s','Alpinestars','Jacket'),
    new Cloth ('FGR76','tech-air Race',949.99,'../assets/clothing/C3.JPG','L/m/s','Alpinestars','Jacket'),
    new Cloth ('JD0UR','Racing 3',429.95,'../assets/clothing/F2.JPG','L/m/s','Dainese','Jacket'),
    new Cloth ('48FUR','Melbourne air 2.0',94.99,'../assets/clothing/C4.JPG','L/m/s','Oxford','Jacket'),
    new Cloth ('BVHF7','Waterproof jaket',39.99,'../assets/clothing/C6.JPG','L/m/s','RST','Jacket'),
    new Cloth ('ODUR5','full face mask',9.99,'../assets/clothing/M1.JPG','L/m/s','Zan headgear','Helmet'),
    new Cloth ('8DJFK','Warhawk ',111.99,'../assets/clothing/H1.JPG','L/m/s','OnEil','Helmet'),
    new Cloth ('MXTN4','Golden state ',170.99,'../assets/clothing/H2.JPG','L/m/s','Scorpion','Helmet'),
    new Cloth ('NDDL0','Belfast',199.95,'../assets/clothing/H3.JPG','L/m/s','Scorpion','Helmet'),
    new Cloth ('FHZ84','Nucleon KR-2',105.44,'../assets/clothing/P1.JPG','L/m/s','Alpinestars','protection'),
    new Cloth ('FHZ84','AIR-bag vest',379.95,'../assets/clothing/P2.JPG','L/m/s','Ixon','protection'),
  ]
  lesemployes =[
    new Employe('1','amine',123,'../../assets/haboubi.jpg'),
    new Employe('2','ameni',123,'../../assets/ameni.jpg'),
    new Employe('3','ahmed',123,'../../assets/.jpg'),
  ];

  loginuser=[
    new Employe('admin','admin',0,'../../assets/admin.jpg'),
  ];

  

  

  constructor() { }
 
  
 loginemploye(username:String,img:String){
   const emp = this.getEmployeByIDD('admin');
   
   emp.set_img(img);
   emp.set_user(username);
   
 }


  getMotoByID(ID : String):Moto
    {
      var i:number;
      for(i=0;i<this.lesmoto.length;i++)
      {
        if(ID==this.lesmoto[i]._ID)
        return this.lesmoto[i];
      }
      return null;

    }
    getclothByID(ID : String):Cloth
    {
      var i:number;
      for(i=0;i<this.clothing.length;i++)
      {
        if(ID==this.clothing[i]._ID)
        return this.clothing[i];
      }
      return null;

    }

    getEmployeByID(ID : String):Employe
    {
      var i:number;
      for(i=0;i<this.lesemployes.length;i++)
      {
        if(ID==this.lesemployes[i]._ID)
        return this.lesemployes[i];
      }
      return null;

    }
    getEmployeByIDD(ID : String):Employe
    {
      var i:number;
      for(i=0;i<this.loginuser.length;i++)
      {
        if(ID==this.loginuser[i]._ID)
        return this.loginuser[i];
      }
      return null;

    }

    public addMoto( ID:String, Home:String,name:String,date:Date,prix:Number,image:String,cooling:String,Fuel:Number,Weight:Number,condition:Boolean):boolean
  {
   
   if(this.getMotoByID(ID)==null)
      {this.lesmoto.push(new Moto(ID,Home,name,date,prix,image,cooling,Fuel,Weight,condition));
        return true;
      }    
      return false;
  }
  public addcloth( ID:String, name:String,prix:Number,image:String,taille:String,mark:String,type:String):boolean
  {
   
   if(this.getclothByID(ID)==null)
      {this.clothing.push(new Cloth(ID,name,prix,image,taille,mark,type));
        return true;
      }    
      return false;
  }

  DeleteMoto(ID:Moto)
  {
   
   this.lesmoto.splice(this.lesmoto.indexOf(ID),1);
  }
  Deletecloth(ID:Cloth)
  {
   
   this.clothing.splice(this.clothing.indexOf(ID),1);
  }
}
