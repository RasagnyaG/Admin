import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css'],
})
export class CreateplanComponent {
  constructor(private location: Location) {}
  back = () => {
    this.location.back();
  };
}
