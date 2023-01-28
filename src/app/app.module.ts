import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketComponent } from './components/rockets/rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
