import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatDialogModule} from '@angular/material/dialog';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { voteCount } from '../app/services/candidateService';
import { VotePageComponent } from './components/vote-page/vote-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminPage2Component } from './components/admin-page2/admin-page2.component';
import { EditLeaderComponent } from './components/edit-leader/edit-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    VoterListComponent,
    VotePageComponent,
    LoginPageComponent,
    ResultPageComponent,
    SignUpFormComponent,
    AdminPageComponent,
    AdminPage2Component,
    EditLeaderComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule, WavesModule,
    InputsModule, ButtonsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  entryComponents:[SignUpFormComponent],
  providers: [voteCount],
  bootstrap: [AppComponent]
})
export class AppModule { }


