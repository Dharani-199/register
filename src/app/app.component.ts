// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   title = 'reg-page';
//   event_form:any
//   todayISOString: string = new Date().toISOString();
//   ngOnInit(){
//     this.event_form = new FormGroup({
//       First_name: new FormControl('', [Validators.required]),
//       Last_name: new FormControl('', [Validators.required]),
//       BusinessEmail: new FormControl('', [Validators.required]),
//       CompanyName: new FormControl('', [Validators.required]),
//       Companysize: new FormControl('', [Validators.required]),
//       message: new FormControl('', [Validators.required]),
//       check: new FormControl('', [Validators.required]),
//       selectoptionValue: new FormControl('',[Validators.required])
  
//     });
//   }

 
// }
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todayISOString : string = new Date().toISOString();
  event_form = new FormGroup({
    First_name : new FormControl('',[Validators.required]),
    Last_name : new FormControl('',[Validators.required]),
    BusinessEmail : new FormControl('',[Validators.required]),
    CompanyName : new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required]),
    check: new FormControl('',[Validators.required])


    })

  languages: any = "Angular";
  @Input() inputData: any
  @Output() datas = new EventEmitter()

  ngOnInit() {

  }

  onclick() {
    this.datas.emit(this.languages)
  }


}

