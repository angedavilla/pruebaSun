import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { MunicipalityComponent } from './pages/municipality/municipality.component';
import { HeadquartersComponent } from './pages/headquarters/headquarters.component';
import { GroupsComponent } from './pages/groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionsComponent,
    MunicipalityComponent,
    HeadquartersComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
