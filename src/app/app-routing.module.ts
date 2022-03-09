import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { MunicipalityComponent } from './pages/municipality/municipality.component';
import { HeadquartersComponent } from './pages/headquarters/headquarters.component';
import { GroupsComponent } from './pages/groups/groups.component';



const routes: Routes = [
  {
    path: 'home',
    component: InstitutionsComponent
  },
  {
    path: 'home/instituciones/:dane',
    component: MunicipalityComponent
  },
  {
    path: 'home/instituciones/:dane/sedes/:dane',
    component: HeadquartersComponent
  },
  {
    path: 'home/instituciones/:dane/sedes/:dane/grupos/:dane',
    component: GroupsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
