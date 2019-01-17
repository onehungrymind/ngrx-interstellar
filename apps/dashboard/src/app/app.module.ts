import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';

import { CoreDataModule } from '@interstellar/core-data';
import { CoreStateModule } from '@interstellar/core-state';
import { MaterialModule } from '@interstellar/material';
import { UiLoginModule } from '@interstellar/ui-login';
import { UiToolbarModule } from '@interstellar/ui-toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectsListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    LayoutModule,
    NxModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    UiLoginModule,
    UiToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
