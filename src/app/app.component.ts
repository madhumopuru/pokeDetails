import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit{
  title = 'pokeapiProject';
  public search: string;
  constructor(private http: HttpClient, private spinner: SpinnerVisibilityService) { }
  pokeArry=[];
  pokeNewArry=[]

  public spinkit = Spinkit;
 
  ngOnInit() {
    this.spinner.show();
    this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    .subscribe(data => {
      // console.log(data["results"])
      this.pokeArry=data["results"];
      for(let i=0;i<this.pokeArry.length;i++){
        let suburl=this.pokeArry[i].url
        this.http.get(suburl)
        .subscribe(data => {
          // console.log(data)
          let pokeID=data["id"];
          let pokename = this.pokeArry[i].name;
          let pokeimgUrl = "https://pokeres.bastionbot.org/images/pokemon/"+pokeID+".png";
          // console.log(pokeID);
          // console.log(pokename);
          // console.log(pokeimgUrl);
          let pokeobj={
            pokeID:pokeID,
            pokename:pokename,
            pokeimgUrl:pokeimgUrl
          }
          this.pokeNewArry.push(pokeobj)
          this.spinner.hide();
          //console.log(this.pokeNewArry)
        })
      }
    })   
  }

  public searchpokedata(name: string) {
    this.search = name;
  }
 
}
