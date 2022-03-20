import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/data/countries';
import {CountryPipe} from '../country.pipe';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  countinentParam! : string ;
  dataTable:any = COUNTRIES ;
  countriesByContinent:any;
  countryName : string = "";
  public country: any = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countinentParam = this.route.snapshot.paramMap.get('id')!; 
    this.countriesByContinent = this.dataTable.filter((ct:any)=> {
        return ct.region == this.countinentParam!;
      });     
      console.log("countryname", this.countryName)
  }

/*
  SearchCountry(){
    this.countriesByContinent = this.countriesByContinent.filter((country:any)=>{
      return country.name.official == this.countryName;
    })
  }
  onSearchChange(newValue :any): void {  
   // console.log(searchValue.value);
   this.countryName = newValue;
    console.log("df", this.countryName);
    this.SearchCountry()
    
  }
*/
}
