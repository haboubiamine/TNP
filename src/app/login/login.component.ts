import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import{ MotoService } from '../moto.service';
import{ Employe } from '../Employe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private motoservice: MotoService) { }

   mesemploye:Employe[];
  
   message="";

 verif(user:String,pass:Number){
    var i:number;
  for (i=0;i<this.mesemploye.length;i++){
  if ((user.toLowerCase() == this.mesemploye[i]._user) && (pass == this.mesemploye[i]._pass)){
    this.router.navigate(['/Home']);
    this.motoservice.loginemploye(this.mesemploye[i]._user,this.mesemploye[i]._img);
  }
  else this.message="Login incorrect try again";

}
   }

  ngOnInit(){
    this.mesemploye=this.motoservice.lesemployes;
  }

}
