import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipes.service';
import { Observable } from 'rxjs/Rx';


@Component({
	moduleId: module.id,
	selector: "recipe-list",
	templateUrl: "recipe-list.component.html",
	providers: [ RecipeService ]

})

export class RecipeListComponent implements OnInit {
	recipes: Recipe[];
	errorMessage: string;
	mode = "Observable";

	constructor (
		private recipeService: RecipeService
		){}

	ngOnInit(){
		let timer = Observable.timer(0,)
		timer.subscribe(() => this.getRecipes());
	}
	getRecipes(){
		this.recipeService.getRecipes()
			.subscribe(
				recipes => this.recipes = recipes,
				error => this.errorMessage = <any>error
				);
		}
	}

