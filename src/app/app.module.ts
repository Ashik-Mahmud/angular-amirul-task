import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketComponent } from './components/rockets/rocket/rocket.component';
import { RocketDetailComponent } from './components/rockets/rocket-detail/rocket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    RocketComponent,
    RocketDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
