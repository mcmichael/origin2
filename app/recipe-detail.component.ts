import { Component, Input , OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
	selector: 'my-recipe-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-details.component.css']
	
})

export class RecipeDetailComponent implements OnInit {
	@Input()
	recipe: Recipe;

	constructor(
		private _recipeService: RecipeService,
		private _routeParams: RouteParams) {

	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._recipeService.getRecipe(id)
			.then(recipe => this.recipe = recipe);
	}

	goBack() {
		window.history.back();
	}


}