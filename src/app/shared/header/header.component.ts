import { Component } from '@angular/core';
import { Select2Option, Select2UpdateEvent } from 'ng-select2-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'angulardemos';
  overlay = false;
  data1:any= [
    {
        options: [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii'},
        ],
    },
];
change(key: string, event: Event) {
  console.log(key, event);
}
search(text: string) {
  this.data1 = text
      ? (JSON.parse(JSON.stringify(this.data1)) as Select2Option[]).filter(
            option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1,
        )
      : JSON.parse(JSON.stringify(this.data1));
}
update(key: string, event: Select2UpdateEvent<any>) {
  console.log(event.value);
}
value1 = 'CA';
}