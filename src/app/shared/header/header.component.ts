import { Component } from '@angular/core';
import { Select2Option, Select2UpdateEvent } from 'ng-select2-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'PMS';
  overlay = false;
  companydata:any= [
    {
        options: [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii'},
            { value: 'CA', label: 'California' },
            { value: 'NV', label: 'Nevada' },
        ],
    },
];
change(key: string, event: Event) {
  console.log(key, event);
}
search(text: string) {
  this.companydata = text
      ? (JSON.parse(JSON.stringify(this.companydata)) as Select2Option[]).filter(
            option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1,
        )
      : JSON.parse(JSON.stringify(this.companydata));
}
update(key: string, event: Select2UpdateEvent<any>) {
  console.log(event.value);
}
companyvalue = 'CA';
}