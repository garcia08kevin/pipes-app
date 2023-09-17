import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform{
  transform(value: boolean): 'vuela' | 'no vuela' {
    // if(toUpper) return value.toUpperCase();
    // return value.toLowerCase();
    return (value)
     ? 'vuela'
     : 'no vuela';
  }
}
