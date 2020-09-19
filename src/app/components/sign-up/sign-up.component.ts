import { Component, OnInit } from '@angular/core';
//import { voteCount } from '../../services/candidateService';
//import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog():void{
    const dialogRef = this.dialog.open(SignUpFormComponent, {
      width: '520px',
      height: '492px',
      data: { Name: "Mihir", animal:"Dog"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed');
    });

  }
}
