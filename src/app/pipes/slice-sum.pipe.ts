import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceSum'
})
export class SliceSumPipe implements PipeTransform {

  transform(value: any): string {
    return (value + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "")
  }
}
