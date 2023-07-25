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
        label: 'Alaskan/Hawaiian Time Zone',
        options: [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii', disabled: true },
        ],
    },
    {
        label: 'Pacific Time Zone',
        options: [
            { value: 'CA', label: 'California' },
            { value: 'NV', label: 'Nevada' },
            { value: 'OR', label: 'Oregon' },
            { value: 'WA', label: 'Washington' },
        ],
    },
    {
        label: 'Mountain Time Zone',
        options: [
            { value: 'AZ', label: 'Arizona' },
            { value: 'CO', label: 'Colorado' },
            { value: 'ID', label: 'Idaho' },
            { value: 'MT', label: 'Montana' },
            { value: 'NE', label: 'Nebraska' },
            { value: 'NM', label: 'New Mexico' },
            { value: 'ND', label: 'North Dakota' },
            { value: 'UT', label: 'Utah' },
            { value: 'WY', label: 'Wyoming' },
        ],
    },
    {
        label: 'Central Time Zone',
        options: [
            { value: 'AL', label: 'Alabama' },
            { value: 'AR', label: 'Arkansas' },
            { value: 'IL', label: 'Illinois' },
            { value: 'IA', label: 'Iowa' },
            { value: 'KS', label: 'Kansas' },
            { value: 'KY', label: 'Kentucky' },
            { value: 'LA', label: 'Louisiana' },
            { value: 'MN', label: 'Minnesota' },
            { value: 'MS', label: 'Mississippi' },
            { value: 'MO', label: 'Missouri' },
            { value: 'OK', label: 'Oklahoma' },
            { value: 'SD', label: 'South Dakota' },
            { value: 'TX', label: 'Texas' },
            { value: 'TN', label: 'Tennessee' },
            { value: 'WI', label: 'Wisconsin' },
        ],
    },
    {
        label: 'Eastern Time Zone',
        options: [
            { value: 'CT', label: 'Connecticut' },
            { value: 'DE', label: 'Delaware' },
            { value: 'FL', label: 'Florida' },
            { value: 'GA', label: 'Georgia' },
            { value: 'IN', label: 'Indiana' },
            { value: 'ME', label: 'Maine' },
            { value: 'MD', label: 'Maryland' },
            { value: 'MA', label: 'Massachusetts' },
            { value: 'MI', label: 'Michigan' },
            { value: 'NH', label: 'New Hampshire' },
            { value: 'NJ', label: 'New Jersey' },
            { value: 'NY', label: 'New York' },
            { value: 'NC', label: 'North Carolina' },
            { value: 'OH', label: 'Ohio' },
            { value: 'PA', label: 'Pennsylvania' },
            { value: 'RI', label: 'Rhode Island' },
            { value: 'SC', label: 'South Carolina' },
            { value: 'VT', label: 'Vermont' },
            { value: 'VA', label: 'Virginia' },
            { value: 'WV', label: 'West Virginia' },
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