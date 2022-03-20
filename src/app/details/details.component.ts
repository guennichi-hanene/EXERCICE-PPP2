import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countryParam : any;
  dataTable:any = COUNTRIES ;
  countryDetail:any;
  Languages : any;
  constructor(private route : ActivatedRoute) { }
    
   ngOnInit(): void {
    this.countryParam = this.route.snapshot.paramMap.get('id')!; 

    this.countryDetail = this.dataTable.filter((ct:any)=> {
      return ct.name.common == this.countryParam;
    });     
    this.Languages = this.countryDetail[0].languages;
    console.log("lang", this.Languages);
}
}


