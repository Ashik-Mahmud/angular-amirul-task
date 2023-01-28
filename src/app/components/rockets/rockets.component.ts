import { Component } from '@angular/core';
import { RocketsService } from '../rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent {
  rockets: any[] = [];
  loadingRocket = false;
  search: string = '';
  isComingSoon: boolean | null = null;
  isLaunchSuccess: boolean | null = null;

  constructor(private rocketService: RocketsService) {}

  // onchange event for search input
  async onSearchChange(search: any) {
    this.search = search.target.value;
    this.rockets = await this.rocketService.getRockets({
      q: this.search,
      upcoming: this.isComingSoon,
      launch_success: this.isLaunchSuccess,
    });
  }

  // onchange event for coming soon checkbox
  async onComingSoonChange(comingSoon: any) {
    this.isComingSoon = comingSoon.target.value;
    this.rockets = await this.rocketService.getRockets({
      q: this.search,
      upcoming: this.isComingSoon,
      launch_success: this.isLaunchSuccess,
    });
  }

  // onchange event for launch success checkbox
  async onLaunchSuccessChange(launchSuccess: any) {
    this.isLaunchSuccess = launchSuccess.target.value;
    this.rockets = await this.rocketService.getRockets({
      q: this.search,
      upcoming: this.isComingSoon,
      launch_success: this.isLaunchSuccess,
    });
  }

  async ngOnInit() {
    this.rockets = await this.rocketService.getRockets({
      q: this.search,
      upcoming: this.isComingSoon,
      launch_success: this.isLaunchSuccess,
    });

    this.loadingRocket = this.rocketService.loadingRocket;
  }
}
