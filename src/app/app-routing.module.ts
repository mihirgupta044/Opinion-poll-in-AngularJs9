import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { VoterListComponent } from '../app/components/voter-list/voter-list.component';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { VotePageComponent } from '../app/components/vote-page/vote-page.component';
import { ResultPageComponent } from '../app/components/result-page/result-page.component';
import { SignUpFormComponent } from '../app/components/sign-up-form/sign-up-form.component';
import { AdminPageComponent } from '../app/components/admin-page/admin-page.component';
import { AdminPage2Component } from '../app/components/admin-page2/admin-page2.component';
import { EditLeaderComponent} from '../app/components/edit-leader/edit-leader.component';
const routes: Routes = [
  {path:'',redirectTo:'/sign-up',pathMatch:'full'},
  {path:'sign-up',component: SignUpComponent},
  {path:'voter-list',component: VoterListComponent},
  {path:'login-page',component: LoginPageComponent},
  {path:'vote-page',component: VotePageComponent},
  {path:'result-page',component: ResultPageComponent},
  {path:'sign-up-form',component: SignUpFormComponent},
  {path:'admin-page',component:AdminPageComponent},
  {path:'admin-page2',component:AdminPage2Component},
  {path:'Editleader/:id',component:EditLeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
