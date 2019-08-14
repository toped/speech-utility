import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trailingSpace'
})
export class TrailingSpacePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value + ' ';
    }

}
