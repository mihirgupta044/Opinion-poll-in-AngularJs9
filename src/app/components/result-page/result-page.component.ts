import { Component, OnInit } from '@angular/core';
import { results } from '../../Models/result';
import { basicDetail } from '../../Models/basicInfo';
import { voteCount} from 'src/app/services/candidateService';
import { MatTableDataSource } from '@angular/material/table';
import { admin } from '../../services/adminService';
import { leader } from 'src/app/Models/leaders';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  nameList:Array<results>=new Array<results>();//Array of (result class) whose Array's name is nameList.
  writerName: results;//[class (result)] assign in a variable
  leaderName:leader;
  

  votingDetails:Array<basicDetail>=new Array<basicDetail>();
  voterAndleaderList:MatTableDataSource<basicDetail>=new MatTableDataSource();

  
  displayedColumns2:Array<string>= ['Voter Name', 'Voted to'];

  c1:number;
  c2:number;
  c3:number;
  c4:number;

  name1:String;
  name2:String;
  name3:String;
  name4:String;

  count:number=1;
  count1:number=0;
  constructor(private _countService:voteCount,private _adminObj: admin) { 
    //this.c1=this._adminObj.count1;
    debugger;
    for(let i=0;i<this._adminObj.leaderLists.length;i++)
    {
      let name=this._adminObj.leaderLists;
      this.leaderName=name[i];
      if(this.leaderName.id==1)
        this.nameList.push({aName:this.leaderName.ledr,counts:this._adminObj.count1}as results);
      else if(this.leaderName.id==2)
        this.nameList.push({aName:this.leaderName.ledr,counts:this._adminObj.count2}as results);
      else if(this.leaderName.id==3)
        this.nameList.push({aName:this.leaderName.ledr,counts:this._adminObj.count3}as results);
      else if(this.leaderName.id==4)
        this.nameList.push({aName:this.leaderName.ledr,counts:this._adminObj.count4}as results);
    }
    
    //this.nameList.push({aName:this._adminObj.leaderLists[3].ledr,counts:this.c4}as results);

    this.getmaxVote(this.nameList);
    
  }
  ngOnInit(): void {
    if(this._countService.count==this._countService.registrationCount)
    {
      this.votingDetails=this._countService.CandidateandLeaderLists;
      this.voterAndleaderList= new MatTableDataSource(this._countService.CandidateandLeaderLists);
    }
    this._countService.list1.subscribe(data=>{
    this.votingDetails=data;  
    this.voterAndleaderList=new MatTableDataSource(data);
    });
  }
  
  getmaxVote(arr_names:results[]):void{
    debugger;
    for(var i=0;i<arr_names.length;i++)
    {
      console.log(this.nameList[i].counts);
    }
    let max:number=0;       
    for(let i:number=0;i<arr_names.length;i++) 
    {
       if(this.nameList[i].counts>max)
        {
          max=this.nameList[i].counts;
        }
    }
    for(let i:number=0;i<arr_names.length;i++)
    {
      if(this.nameList[i].counts==max)
      {
        let name=this.nameList;
        if(name!=null && name.length>0)
        {
          this.writerName=name[i];
          if(this.count==1)
          {
            this.name1=this.writerName.aName;
            this.count++;
          }
          else if(this.count==2){
          this.name2=this.writerName.aName;
          this.count++;
          }
          else if(this.count==3){
            this.name3=this.writerName.aName;
            this.count++;
          }
          else if(this.count==4){
            this.name4=this.writerName.aName;
            this.count++;
          }
        }
      }
    }
    this.count1++;
  }
}
