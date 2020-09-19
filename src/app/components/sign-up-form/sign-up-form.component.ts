import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { details } from '../../Models/basicDetail';
import { voteCount } from '../../services/candidateService';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  candidateDetails: details=new details();
  registrationForm: FormGroup;
  constructor(public _countService:voteCount, private _router:Router, public dialogRef: MatDialogRef<SignUpFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder:FormBuilder) 
    {
      console.log(data);
      this.registrationForm=formBuilder.group({

        name: new FormControl('',[Validators.required]),
        Mobno: new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(12)]),
        psw: new FormControl('',[Validators.required, Validators.maxLength(8)]),
        citie: new FormControl('',[Validators.required]),
        Addres: new FormControl('',[Validators.required])
      });
     }
     get name() { return this.registrationForm.get('name'); }
     get Mobno() { return this.registrationForm.get('Mobno'); }
     get psw() { return this.registrationForm.get('psw'); }
     get citie() { return this.registrationForm.get('citie'); }
     get Addres() { return this.registrationForm.get('Addres'); }

  ngOnInit(): void {
  }
  submit()
  {

    if(this._countService.registrationCount<this._countService.maxRegistration.maxReg)
    {
      this._countService.Addcandidate(this.candidateDetails);
      this.candidateDetails=new details();
      this._router.navigate(['sign-up']);
      this.dialogRef.close();
    }
    else
    {
      alert("Vote Limit Exceeded by your fixed value.");             
    }
  }
}
