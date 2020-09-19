import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../services/Loginservice';
import { Router } from '@angular/router';
import { leader} from '../../Models/leaders';
import { admin } from '../../services/adminService';
import { MatTableDataSource } from '@angular/material/table';
import { voteCount} from '../../services/candidateService';
import { EditLeaderComponent } from '../../components/edit-leader/edit-leader.component';
import { MatDialog } from '@angular/material/dialog';
import {RegCount} from '../../Models/regCount';
@Component({
  selector: 'app-admin-page2',
  templateUrl: './admin-page2.component.html',
  styleUrls: ['./admin-page2.component.scss']
})
export class AdminPage2Component implements OnInit {
  leaderNme:leader=new leader();
  regCounts: RegCount=new RegCount();

  localList:MatTableDataSource<leader>=new MatTableDataSource<leader>();
  displayedColumns:Array<string> = ['ID','FullName','Actions'];

  //leaderlists:Array<leader>=new Array<leader>();

  constructor(public _loginService:LoginService,
  private _adminService: admin, private _router:Router, 
  private _voteCount: voteCount, public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.leaderlists=this._adminService.leaderLists;
    this.localList=new MatTableDataSource(this._adminService.leaderLists);

    this._adminService.list.subscribe(data=>{
      this.localList=new MatTableDataSource(data);
    })
  }
  onSubmit()
  {
    this._voteCount.updateRegistrationCount(this.regCounts);
    this.regCounts=new RegCount();
  }
  Deletename(leaderId:number){
    this._adminService.Delete(leaderId);
  }
  Editleader(ldr:leader):void{
    this._router.navigate(['Editleader', ldr.id]);
  } 
}
