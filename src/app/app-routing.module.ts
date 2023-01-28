import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketDetailComponent } from './components/rockets/rocket-detail/rocket-detail.component';
import { RocketsComponent } from './components/rockets/rockets.component';

const routes: Routes = [
  { path: '', component: RocketsComponent },
  { path: 'home', component: RocketsComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'rockets/:id', component: RocketDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
