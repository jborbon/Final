import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';

@Component({
	moduleId: module.id,
	selector: 'recipe-show',
	templateUrl: "recipe-show.component.html"

})

export class RecipeShowComponent implements Oninit {
	id: number;
	routeId: any;

	constructor(
		private route: ActivatedRoute
		){}

	ngOnInit(): void {
		this.routeId = this.route.params.subscribe(
			params => {
				this.id = +params['id'];
			}
		)
	}
}