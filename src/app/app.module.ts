import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { Er404Component } from './er404/er404.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { ModulesComponent } from './modules/modules.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CategorieComponent } from './categorie/categorie.component';
import { EmploiComponent } from './emploi/emploi.component';
import { CompteComponent } from './compte/compte.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent,
    ContactComponent,
    Er404Component,
    TestimonialComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ModulesComponent,
    FormationComponent,
    EtudiantComponent,
    EnseignantComponent,
    CategorieComponent,
    EmploiComponent,
    CompteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }