import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-gugan',
  templateUrl: './gugan.component.html',
  styleUrls: ['./gugan.component.css']
})
export class GuganComponent implements OnInit {
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit(): void {
  }

}
