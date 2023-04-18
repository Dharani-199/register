import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reg-page';

  todayISOString: string = new Date().toISOString();
  event_form = new FormGroup({
    First_name: new FormControl('', [Validators.required]),
    Last_name: new FormControl('', [Validators.required]),
    BusinessEmail: new FormControl('', [Validators.required]),
    CompanyName: new FormControl('', [Validators.required]),
    Companysize: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    check: new FormControl('', [Validators.required]),

  });
}
