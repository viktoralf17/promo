import { Component } from "@angular/core";
import { config } from './../services/config';


@Component({
  	selector: 'magister',
	templateUrl: "../views/magister/home.html",
	styleUrls:[
		'./../css/magister.css',
	],
})

export class MagitserComponent{
	public title:string;

	constructor(){
		this.upConfig();
		this.title = config.name;
	}
	upConfig(){
		config.setConfig();
	}
}			