import { Pipe, PipeTransform } from '@angular/core';
import{ Moto } from './moto';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(moto:Moto[] , search1: String):Moto[] {
    if (!moto){
      return moto;
    }
    

    

    if (!search1){return moto;}
    else return  moto.filter(Moto => Moto.Home.toLowerCase().indexOf(search1.toLowerCase()) !== -1)  ;

        

     

 

    
}
}


