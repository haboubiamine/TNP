import { Pipe, PipeTransform } from '@angular/core';
import{ Cloth } from '../Cloth';

@Pipe({
  name: 'clothfilter'
})
export class ClothfilterPipe implements PipeTransform {

  jack="Jacket";
  hel="Helmet";
  pro="protection";


  transform(cloth:Cloth[] , c:String):Cloth[] {
    if (!cloth || !c ){
      return cloth;
    }
    else return cloth.filter(cloth =>cloth.type.toLowerCase().indexOf(c.toLowerCase()) !== -1)  ;
    
   /* if ((!j && !h && !p) ||  (j && h && p)) {return cloth;}
    else if (j && !h && !p) {return cloth.filter(cloth =>cloth.type.toLowerCase().indexOf(this.jack.toLowerCase()) !== -1)  ;}
    else if (j && (!h || !p)) {return cloth;}
    else if (h && !j && !p) {return cloth.filter(cloth =>cloth.type.toLowerCase().indexOf(this.hel.toLowerCase()) !== -1)  ;}
    else if (h && (!j || !p)){return cloth;}
    else if (p && !j && !h) {return cloth.filter(cloth =>cloth.type.toLowerCase().indexOf(this.pro.toLowerCase()) !== -1)  ;}
    else if (p && (!j || !h)){return cloth;}
    */
    
        

     

 

    
}

}
