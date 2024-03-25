// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { ModulesComponent } from './modules/modules.component';
import { FormationComponent } from './formation/formation.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CompteComponent } from './compte/compte.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
 
  { path: 'contact', component: ContactComponent },
  { path: 'testimonial', component:TestimonialComponent },
  { path: 'team', component:TeamComponent },
 { path: 'login', component:LoginComponent},
 { path: 'compte', component:CompteComponent},

 { path: 'modules', component: ModulesComponent },
 { path: 'formation', component: FormationComponent },
 { path: 'categorie', component: CategorieComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
