export class Employe {
    public ID:String;
    public username:String;
    public password:Number;
    public img:String;

    constructor(ID:String,username:String,password:Number,img:String){
        this.username = username;
        this.password = password;
        this.ID=ID;
        this.img=img;
    
    }

    public get _ID():String{return this.ID;}
    public get _user():String{return this.username;}
    public get _pass():Number{return this.password;}
    public get _img():String{return this.img;}

    public set_ID(value:String){this.ID=value;}
    public set_user(value:String){this.username=value;}
    public set_pass(value:Number){this.password=value;}
    public set_img(value:String){this.img=value;}
}