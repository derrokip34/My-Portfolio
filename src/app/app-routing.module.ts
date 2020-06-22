import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { HobbiesComponent } from './hobbies/hobbies.component'
import { ProjectsComponent } from './projects/projects.component'
import { SkillsComponent } from './skills/skills.component'


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'hobbies', component: HobbiesComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
