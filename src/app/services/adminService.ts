import { Injectable } from '@angular/core';
import { leader} from '../Models/leaders';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class admin{
leaderLists:Array<leader>=new Array<leader>();
list:Subject<Array<leader>> = new Subject<Array<leader>>();
writerList: leader;

    count1:number=null;
    count2:number=null;
    count3:number=null;
    count4:number=null;

constructor()
{
    this.leaderLists.push({ id:1, ledr:"Miguel de CervantesM"} as leader);
    this.leaderLists.push({ id:2, ledr:"Charles Dickens"} as leader);
    this.leaderLists.push({ id:3, ledr:"J.R.R. Tolkien"} as leader);
    this.leaderLists.push({ id:4, ledr:"Antoine de Saint-Exuper"} as leader);

    this.list.next(this.leaderLists);   
}

ValidateAuthorCount(author1: String):void{
    let names=this.leaderLists.filter(s=>s.ledr==author1);
    if(names!=null && names.length>0)
    {
        this.writerList=names[0];
        let Id=this.writerList.id;
        if(Id==1)
            this.count1++;
        else if(Id==2)
            this.count2++;
        else if(Id==3)
            this.count3++;
        else if(Id==4)
            this.count4++;
    }
}
ValidateAuthorName(author2:String):String{
        let names=this.leaderLists.filter(s=>s.ledr==author2)
        this.writerList=names[0];
        let name=this.writerList.ledr;
        return name;
}
addLeaders(leaderName:leader)
{
    let leaderId=0;
    if(this.leaderLists!=null && this.leaderLists.length>0)
    {
        for(let i=0;i<this.leaderLists.length;i++)
        {
            if(this.leaderLists[i].id>leaderId)
            {
                leaderId=this.leaderLists[i].id;
            }
        }
    }
    leaderName.id=leaderId+1;
    this.leaderLists.push(leaderName);
    this.list.next(this.leaderLists);
}
Delete(ldrId:number)
{
    this.leaderLists=this.leaderLists.filter(s=>s.id != ldrId);
    this.list.next(this.leaderLists);
}
Edit(ldr:leader){
    debugger;
    this.leaderLists=this.leaderLists.filter(s=>s.id != ldr.id);
    this.leaderLists.push(ldr);
    this.list.next(this.leaderLists);
}

}
