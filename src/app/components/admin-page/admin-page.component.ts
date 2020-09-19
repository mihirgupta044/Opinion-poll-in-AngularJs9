import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { adminInfo } from '../../Models/adminDetail';
import { Router } from '@angular/router';
import {LoginService} from '../../services/Loginservice'
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  adminDetails: adminInfo=new adminInfo();
  LoginForm: FormGroup;
  constructor(private _router:Router, public dialogRef: MatDialogRef<AdminPageComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
  private formBuilder:FormBuilder,private _loginService:LoginService) {
    console.log(data);
    this.LoginForm=formBuilder.group({
      id:new FormControl('',[Validators.required]),
      psw:new FormControl('',[Validators.required,Validators.maxLength(6)])
    });
    //this._loginService.loggedinAdmin.userId
   }
   get id() { return this.LoginForm.get('id'); }
   get psw() { return this.LoginForm.get('psw'); }
  
   Login()
   {
     if(this._loginService.validateAdminLogin(this.adminDetails))
     {
      let role=this._loginService.getRole1(this.adminDetails);
      if(role==1)
        this._router.navigate(['admin-page2']);
        this.dialogRef.close();
     }
     else
     {
       alert("invalid credentials.");
     }
   }
  
  ngOnInit(): void {
  }

}
