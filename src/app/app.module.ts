import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './continents/continents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaysComponent } from './pays/pays.component';
import { CountryPipe } from './country.pipe';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    NavbarComponent,
    PaysComponent,
    CountryPipe,
    DetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
