import { Component, OnInit } from '@angular/core';
import { voteCount} from '../../services/candidateService';
import { details } from '../../Models/basicDetail'; 
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss']
})
export class VoterListComponent implements OnInit {
  localList:Array<details>=new Array<details>();
  localCandidateList:MatTableDataSource<details>=new MatTableDataSource();
  displayedColumns:Array<string> = ['ID','FullName','Mobile-No','Address', 'City'];
  
  constructor(private _countService:voteCount) { }

  ngOnInit(): void {
    this.localList=this._countService.candiList;
    this.localCandidateList= new MatTableDataSource(this._countService.candiList);
    this._countService.list.subscribe(data=>{
      this.localList=data;
      this.localCandidateList=new MatTableDataSource(data);
    });
  }
}