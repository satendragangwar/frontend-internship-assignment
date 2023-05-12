import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'front-end-internship-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Books Library App';
  // newdata:any;
  // constructor(private _apiservice:ApiService){}
  // ngOnInit(){
  //   this._apiservice.getNewdata().subscribe((response: any) => {
  //     this.newdata=response;
  //   })
  // }
}
