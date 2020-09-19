import { Component, OnInit } from '@angular/core';
import { voteCount} from '../../services/candidateService';
import { MatDialog } from '@angular/material/dialog';
import { AdminPageComponent } from '../../components/admin-page/admin-page.component';
import { LoginService} from '../../services/Loginservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public _countService:voteCount,public dialog: MatDialog, public _loginService:LoginService,private _router:Router) {
   }

  ngOnInit(): void {
  }
  openDialog():void{
    const dialogRef = this.dialog.open(AdminPageComponent, {
      width: '400px',
      height: '300px',
      data: { Name: "Mihir", animal:"Dog"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed');
    });

  }
  logout(){
    this._loginService.loggedinAdmin=null;
    this._router.navigate[('login-page')];
  }

}
