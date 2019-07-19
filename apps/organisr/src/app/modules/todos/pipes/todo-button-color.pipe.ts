import {Pipe, PipeTransform} from '@angular/core';
import {themeType} from '@organisr/data';

@Pipe({
  name: 'todoButtonColor'
})
export class TodoButtonColorPipe implements PipeTransform {

  transform(isComplete: boolean): themeType {
    let color: themeType;
    isComplete ?
      color = 'primary' :
      color = 'accent';
    return color;
  }

}
