import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html'
})

export class DashBoardComponent implements OnInit {

	recipes: Recipe[] = [];

	constructor(
		private _router: Router,
		private _recipeService: RecipeService) { }

	ngOnInit(){
		this._recipeService.getRecipes().then(recipes => this.recipes = recipes.slice(1, 5));
	}

	gotoDetail(recipe: Recipe) {
		let link = ['RecipeDetail', { id: recipe.id }];
		this._router.navigate(link);
	}

}