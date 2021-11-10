import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: Date | moment.Moment | string): any {
    if (!value) return 'No information';

    const newDate = moment(value, 'DD-MM-YYYY');
    return moment().diff(newDate, 'years') + ' Years';
  }
}
