import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kg'
})
export class KgPipe implements PipeTransform {

  transform(value: any): any {
    return value+" Kg";
  }

}
