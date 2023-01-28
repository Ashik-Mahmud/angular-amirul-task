import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
})
export class RocketComponent {
  @Input() rocket: any;
  @Input() index: number | undefined;
  constructor() {}
  ngOnInit() {}
}
