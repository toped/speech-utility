import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
	name: 'myEllipsis'
})
export class MyEllipsisPipe implements PipeTransform {

	transform(value: any, ...args: any): any {
		value = String(value);
		length = Number(args[0]);

		if ( value.length <= length) {
			return value.slice(0, length);
		} else {
			return value.slice(0, length) + '...';
		}


	}

}
