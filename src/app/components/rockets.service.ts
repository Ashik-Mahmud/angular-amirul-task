import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  loadingRocket = false;
  rockets: any[] = [];
  async getRockets(params: any) {
    this.loadingRocket = true;
    const data = await fetch('https://api.spacexdata.com/v3/launches');
    const rockets = await data.json();
    this.rockets = rockets;
    console.log(params);
    if (params.q) {
      this.rockets = this.rockets.filter((rocket: any) => {
        return (
          rocket.mission_name.toLowerCase().includes(params.q.toLowerCase()) ||
          rocket.rocket.rocket_name
            .toLowerCase()
            .includes(params.q.toLowerCase())
        );
      });
    }
    if (params.upcoming) {
      this.rockets = this.rockets.filter((rocket: any) => {
        return rocket.upcoming === JSON.parse(params.upcoming);
      });
    }
    if (params.launch_success) {
      this.rockets = this.rockets.filter((rocket: any) => {
        return rocket.launch_success === JSON.parse(params.launch_success);
      });
    }
    this.loadingRocket = false;
    return this.rockets;
  }

  ngOnInit() {
    console.log('first');
  }

  constructor() {}
}
