import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/user/login/login.component';
import { RegisterComponent } from './componants/user/register/register.component';
import { ListComponent } from './componants/outils/list/list.component';
import { NotfoundComponent } from './componants/outils/notfound/notfound.component';
import { NavComponent } from './componants/nav/nav.component';

const routes: Routes = [
  {path: "" , component: LoginComponent},
  {path: "register" , component: RegisterComponent},
  {path: "list" , component: ListComponent},
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
  {path: "nav" , component: NavComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
