import { Pipe, PipeTransform } from '@angular/core';
import{ Cloth } from '../Cloth';

@Pipe({
  name: 'helmet'
})
export class HelmetPipe implements PipeTransform {

  hel="Helmet";

  transform(helmet:Cloth[] , test:Boolean):Cloth[] {
    if (!helmet){
      return helmet;
    }
    
    if (!test){return helmet;}
    else return  helmet.filter(helmet =>helmet.type.toLowerCase().indexOf(this.hel.toLowerCase()) !== -1)  ;
        

     

 

    
}

}
