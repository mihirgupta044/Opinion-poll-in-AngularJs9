import { Component, OnInit } from '@angular/core';
import { Login } from '../../Models/login';
import { Router } from '@angular/router';
import { LoginService } from '../../services/Loginservice';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  candidateId: Login=new Login();
  validationForm: FormGroup;
  constructor(private _router:Router,private _loginService:LoginService, private formBuilder:FormBuilder)
   { 
      this.validationForm=formBuilder.group({

        userId: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
        pswrd: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),

      });
    }

    get userId() { return this.validationForm.get('userId'); }
    get pswrd() { return this.validationForm.get('pswrd'); }
  
  ngOnInit(): void {
  }
  goHere()
  {
    if(this._loginService.validateLogin(this.candidateId))
    {
      let x=this._loginService.getRole(this.candidateId)
      if(x>0)
        this._router.navigate(['vote-page']); 
        this.candidateId=new Login(); 
    }
    else
    {
      alert('Invalid credentials.');
      this.candidateId=new Login(); 
    }
  }
  Back()
  {
    this._router.navigate(['sign-up']);
  }

}
