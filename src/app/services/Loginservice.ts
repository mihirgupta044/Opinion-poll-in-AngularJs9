import{ Injectable} from '@angular/core';
import{ voteCount } from '../services/candidateService';
import{ Login } from '../Models/login';
import { adminInfo } from '../Models/adminDetail';
@Injectable({
    providedIn:'root'
})
export class LoginService{
    loggedinUser:Login;

    loggedinAdmin:adminInfo;
    signupUserList:Array<adminInfo>=new Array<adminInfo>();
    constructor(private _countService:voteCount)
    {
        this.signupUserList.push({
            userId:3639,password:"qwerty",role:1}as adminInfo);    
    }
    
    validateLogin(loginCheck:Login):boolean
    {
        let users=this._countService.candiList.filter(s=>s.id==loginCheck.id && s.password==loginCheck.password); 
        if(users!=null && users.length>0)
        {
            this.loggedinUser=users[0];
            return true;    
        }
        return false;
    }
    validateAdminLogin(loginCheck1:adminInfo):boolean
    {
        let adminUsers=this.signupUserList.filter(s=>s.userId==loginCheck1.userId && s.password==loginCheck1.password); 
        if(adminUsers!=null && adminUsers.length>0)
            {
                this.loggedinAdmin=adminUsers[0];
                return true;
            }
        return false;
    }
    getRole(logincheck:Login)
    {
        
        return this.loggedinUser.id;
    }
    getRole1(loginCheck1:adminInfo)
    {
        return this.loggedinAdmin.role;
    }
}