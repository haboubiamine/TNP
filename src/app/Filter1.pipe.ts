import { Pipe, PipeTransform } from '@angular/core';
import{ Moto } from './moto';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(moto:Moto[] , search2: Number):Moto[] {
    if (!moto){
      return moto;
    }
    if (!search2){return moto;}
    else  return  moto.filter(Moto => Moto.prix <= search2);

}
}
