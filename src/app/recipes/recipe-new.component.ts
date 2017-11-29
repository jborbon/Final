import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
	moduleId: module.id,
	selector: 'recipe-new',
	templateUrl: 'recipe-new.component.html',
	styleUrls: ['recipe-new.compenent.css']

})

export class RecipeNewComponent {
	recipe = new Recipe;

}