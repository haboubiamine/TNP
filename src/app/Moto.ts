export class Moto {
public ID:String;
public name:String;
public prix:Number;
public image:String;
public condition:Boolean;
public Fuel:Number;
public Weight:Number;
public Home:String;
public date:Date;
public cooling:String;

    constructor(ID:String,Home:String,name:String,date:Date,prix:Number,image:String,cooling:String,Fuel:Number,Weight:Number,condition:Boolean){
            this.ID=ID;
            this.name=name;
            this.prix=prix;
            this.image=image;
            this.condition=condition;
            this.Fuel=Fuel;
            this.Weight=Weight;
            this.Home=Home;
            this.date=date;
            this.cooling=cooling;

    }
    public get _ID():String{return this.ID;}
    public get _name():String{return this.name;}
    public get _image():String{return this.image;}
    public get _Home():String{return this.Home;}
    public get _cooling():String{return this.cooling;}
    public get _prix():Number{return this.prix;}
    public get _Weight():Number{return this.Weight;}
    public get _Fuel():Number{return this.Fuel;}
    public get _condition():Boolean{return this.condition;}
    public get _date():Date{return this.date;}

    public set_ID(value:String){this.ID=value;}
    public set_name(value:String){this.name=value;}
    public set_image(value:String){this.image=value;}
    public set_Home(value:String){this.Home=value;}
    public set_cooling(value:String){this.cooling=value;}
    public set_date(value:Date){this.date=value;}
    public set_prix(value:Number){this.prix=value;}
    public set_Weight(value:Number){this.Weight=value;}
    public set_Fuel(value:Number){this.Fuel=value;}
    public set_condition(value:Boolean){this.condition=value;}


    
}