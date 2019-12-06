export class Cloth {
    public ID:String;
    public name:String;
    public prix:Number;
    public image:String;
    public taille:String;
    public mark:String;
    public type:String;
    
    
        constructor(ID:String,name:String,prix:Number,image:String,taille:String,mark:String,type:String){
            this.ID = ID;
            this.name = name;
            this.prix = prix;
            this.image = image;
           
            this.taille=taille;
            this.mark = mark;
            this.type= type;
        }

    public get _ID():String{return this.ID;}
    public get _name():String{return this.name;}
    public get _image():String{return this.image;}
    public get _prix():Number{return this.prix;}
    public get _taille():String{return this.taille;}
    public get _mark():String{return this.mark;}
    public get _type():String{return this.type;}

    public set_ID(value:String){this.ID=value;}
    public set_name(value:String){this.name=value;}
    public set_image(value:String){this.image=value;}
    public set_prix(value:Number){this.prix=value;}
    public set_taille(value:String){this.taille=value;}
    public set_mark(value:String){this.mark=value;}
    public set_type(value:String){this. type=value;}
    
}