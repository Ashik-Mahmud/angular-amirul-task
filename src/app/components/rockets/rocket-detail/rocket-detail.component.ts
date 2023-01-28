import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RocketsService } from '../../rockets.service';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss'],
})
export class RocketDetailComponent {
  rocket: any = {};
  number: number | string | undefined;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  // get rocket by flight number
  async getRocketByFlightNumber() {
    this.isLoading = true;
    const data = await fetch(
      `https://api.spacexdata.com/v3/launches/${this.number}`
    );
    const rocket = await data.json();
    this.isLoading = false;
    return rocket;
  }

  onGoBack() {
    this.router.navigate(['/']);
  }
  async ngOnInit() {
    // get the rocket id from the route
    const rocketId = this.router.url.split('/')[2];
    this.number = Number(rocketId);
    const data = await this.getRocketByFlightNumber();
    this.rocket = data;
  }
}
