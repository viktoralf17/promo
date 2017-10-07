import { Component } from "@angular/core";
import { config } from './../services/config';

@Component({
  	selector: 'home',
	templateUrl: "../views/home.html"
})
export class HomeComponent{
	public title:string;

	constructor(){
		this.title = config.name;
	}
}			