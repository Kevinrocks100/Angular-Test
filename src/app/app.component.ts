import { Component } from '@angular/core';
import data from 'src/assets/json/data.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  appId : String; 
  traceId : String; 
  errorCode : String; 
  message : String; 
  messageTimestamp : String; 
  constructor() {
    this.appId = data.msgContext.appId; 
    this.traceId = data.traceId; 
    this.errorCode = data.additionalInfo.errorCode; 
    this.message = data.message; 
    this.messageTimestamp = data.additionalInfo.messageTimestamp; 
  }
}
