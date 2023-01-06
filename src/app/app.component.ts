import { Component } from '@angular/core';
import data from 'src/assets/json/data.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  Data : any = data;  
}
