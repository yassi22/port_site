import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projecten', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent }
];

