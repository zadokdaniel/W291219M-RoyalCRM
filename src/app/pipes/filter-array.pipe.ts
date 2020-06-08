import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: Array<object>, property: string, term: string): Array<any> {
    return value.filter((item) => item[property].includes(term));
  }
}
