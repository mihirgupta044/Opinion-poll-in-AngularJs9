import { Injectable } from '@angular/core';
import { author } from '../Models/author';
import { details } from '../Models/basicDetail';
import { basicDetail } from '../Models/basicInfo';
import { Subject } from 'rxjs';
import {RegCount} from '../Models/regCount';
@Injectable({
    providedIn:'root'
})
export class voteCount{
    //AuthorList: Array<author>=new Array<author>();
    writerList: author;
    
    candiList: Array<details>=new Array<details>();//All details
    CandidateandLeaderLists:Array<basicDetail>=new Array<basicDetail>();//Voter and Leader

    list:Subject<Array<details>> = new Subject<Array<details>>();
    list1:Subject<Array<basicDetail>> = new Subject<Array<basicDetail>>();

    registrationCount:number=0;
    maxRegistration: RegCount;

    count:number=0;
    constructor()
    {
        this.list.next(this.candiList);   
        this.list1.next(this.CandidateandLeaderLists);

     //   this.AuthorList.push({aName:"Miguel de Cervantes",role:1}as author);
    }
    Addcandidate(candi:details)
    {
        debugger;
        let candId=1100;
        if(this.candiList!=null && this.candiList.length>0)
        {
            for(let i=0;i<this.candiList.length;i++)
            {
                if(this.candiList[i].id>candId)
                {
                    candId=this.candiList[i].id;
                }
            }
        }
        candi.id=candId+1;
        this.candiList.push(candi);
        this.list.next(this.candiList);
        this.registrationCount++;
    }
    leaderandCandidate(leader:String,candi:String)
    {   
        this.CandidateandLeaderLists.push({voterName:candi,leaderName:leader}as basicDetail);   
        this.list1.next(this.CandidateandLeaderLists);
        this.count++;
    }
    updateRegistrationCount(number: RegCount)
    {
        this.maxRegistration=number;
    }
}