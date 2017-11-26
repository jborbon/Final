import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'recipe-new',
	templateUrl: 'recipe-new.component.html'

})

export class RecipeNewComponent {
	recipe = new Recipe;

}