import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number, multiplier:string): number {

    let mul=parseFloat(multiplier);
    return value*mul;
  }

}
