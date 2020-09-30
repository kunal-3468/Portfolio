import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { Covid19TrackerComponent } from './work/covid19-tracker/covid19-tracker.component';
import { ShoppingSiteComponent } from './work/shopping-site/shopping-site.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, data : { animationState: 'home' }},
  {path: 'about', component: AboutComponent, data : { animationState: 'about' }},
  {path: 'academics', component: AcademicsComponent, data : { animationState: 'academic' }},
  {path: 'contact', component: ContactComponent, data : { animationState: 'contact' }},
  {path: 'skills', component: SkillsComponent, data : { animationState: 'skill' }},
  {path: 'work', component: WorkComponent, data : { animationState: 'work' }},
  {path: 'covid', component: Covid19TrackerComponent},
  {path: 'shopping', component: ShoppingSiteComponent},
  {path:'**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
