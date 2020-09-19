import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { leader } from '../../Models/leaders';
import { admin } from '../../services/adminService';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-edit-leader',
  templateUrl: './edit-leader.component.html',
  styleUrls: ['./edit-leader.component.scss']
})
export class EditLeaderComponent implements OnInit {
  leaderdetails: leader=new leader();
  constructor(private _router:Router, private _adminService: admin, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this._activatedRoute.params.subscribe(para=>{
      let id= parseInt(para['id']);
      let leader: Array<leader>=this._adminService.leaderLists.filter(s=>s.id == id);
      if(leader!=null && leader.length>0){
        this.leaderdetails = leader[0];
      }
    })
  }
  saveChanges(){
    this._adminService.Edit(this.leaderdetails);
    this.leaderdetails=new leader();
    this._router.navigate(['admin-page2']);
  }
  Cancel(){
    this._router.navigate(['admin-page2']);
  }
}
