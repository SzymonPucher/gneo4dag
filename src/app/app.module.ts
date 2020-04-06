import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularNeo4jModule } from 'angular-neo4j';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowGraphComponent } from './show-graph/show-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularNeo4jModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
