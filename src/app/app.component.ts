import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import data from 'src/assets/json/data.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  Data: any = (data as any); 
  
  constructor(public matDialog: MatDialog) { }

  openLogoutModal() {
    const userId = "user01";
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "1000px";
    dialogConfig.data = {
      name: "logout",
      title: "Are you sure you want to logout?",
      description: "Pretend this is a convincing argument on why you shouldn't logout jsdjfjgfdsjhsldgsdlghl",
      actionButtonText: "Logout",
      userId: userId
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  ngOnInit(){
    console.log(data);
  }
}
