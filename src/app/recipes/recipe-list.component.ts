import { Component } from '@angular/core';
import { Recipe } from './recipe';


@Component({
	moduleId: module.id,
	selector: "recipe-list",
	templateUrl: "recipe-list.component.html"
})


export class RecipeListComponent {
	recipeOne: Recipe = new Recipe(1,"Chicken parm", 20, 30, 50, "bread chicken parm sauce","cook chicken, cook sauce , put chicken and sauce together ")
	recipeTwo: Recipe = new Recipe(2,"Chicken ", 10, 10, 20, "bread chicken parm sauce","cook chicken, cook sauce , put chicken and sauce together ")
	recipeThree: Recipe = new Recipe(3,"Parm", 5, 10, 15, "bread chicken parm sauce","cook chicken, cook sauce , put chicken and sauce together ")


recipes: Recipe[] = [
this.recipeOne,
this.recipeTwo,
this.recipeThree
]
}

