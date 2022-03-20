import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  continents : Array<string> = ["Africa","Americas","Asia","Europe","Oceanas"]
  constructor() { }

  ngOnInit(): void {
  }

}
