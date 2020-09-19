import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { voteCount } from 'src/app/services/candidateService';
import { details } from '../../Models/basicDetail';
import { LoginService } from '../../services/Loginservice'; 
import { admin } from '../../services/adminService';  
import { leader } from 'src/app/Models/leaders';
@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {
  voterDetail:details;
  nameOfAuthors: any;
  name1:String;
  mob1:number;
  add1:String;
  city1:String;
  leaderNames: Array<leader>=new Array<leader>();
  //authrs: any=[
  //  'Miguel de Cervantes',
  //  'Charles Dickens',
  //  'J.R.R. Tolkien',
  //  'Antoine de Saint-Exuper'
  //]; // array of authors name
  constructor(private _adminObj: admin, private _router:Router, 
  private _countService:voteCount,private _LoginserVice:LoginService)
  { 
    this.showleaderNames(this._adminObj.leaderLists);
    this.getLoggedInDetails(this._countService.candiList);
  }

  showleaderNames(array_names:leader[]):void{
    debugger;
    for(let i=0; i<this._adminObj.leaderLists.length; i++)
    {
      let name=this._adminObj.leaderLists;
      this.leaderNames.push(name[i] as leader);
    }
  }
  getLoggedInDetails(arr_names:details[]):void
  {
    for(let i:number=0;i<this._countService.candiList.length;i++)
    {
      if(this._countService.candiList[i].id==this._LoginserVice.loggedinUser.id)
      {
        let name=this._countService.candiList;
        this.voterDetail=name[i];
        this.name1=this.voterDetail.name;
        this.mob1=this.voterDetail.mobNo;
        this.add1=this.voterDetail.Add;
        this.city1=this.voterDetail.city;
      }
    }
  }
  Submit()
  {
    for(let i:number=0;i<this._countService.candiList.length;i++)
    {
      if(this._countService.candiList[i].id==this._LoginserVice.loggedinUser.id)
      {
        if(this._countService.candiList[i].count<1)
        {
          let name=this._countService.candiList;
          this.voterDetail=name[i];
          this._adminObj.ValidateAuthorCount(this.nameOfAuthors);
          let name1=this._adminObj.ValidateAuthorName(this.nameOfAuthors);
          this._countService.leaderandCandidate(name1,this.voterDetail.name);
          this._countService.candiList[i].count++;
            alert('Thanks for your Contribution.');
          this.nameOfAuthors=null;
        }
        else
        {
          alert("Sorry, You have already voted.");
        }  
      }
    }
    for(let i:number=0;i<this._countService.candiList.length;i++)
    {
      if(this._countService.candiList[i].id==this._LoginserVice.loggedinUser.id)
    {
      if(this._countService.candiList[i].count<1)
      {
      //this._countService.deletedVotedPerson(this.voterDetail.id);    
        alert('Thanks for your Contribution.');
      }
    }
  }
  this._router.navigate(['login-page']);
}
  

  ngOnInit(): void {
  }

}
