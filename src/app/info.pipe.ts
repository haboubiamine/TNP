import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {

  transform(value: any): any {
    return +value+" Liters";
  }

}
