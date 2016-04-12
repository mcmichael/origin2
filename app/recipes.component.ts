import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Recipe} from './recipe';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeService} from './recipe.service';

@Component({
	selector: 'my-recipes',
	templateUrl: 'app/recipes.component.html',
	styleUrls: ['app/recipes.component.css'],
	directives: [RecipeDetailComponent]
	
})
export class RecipesComponent implements OnInit {
	//title = 'Recipes';
	//recipes = Recipes;
	recipes: Recipe[];
	selectedRecipe: Recipe;

	constructor(
		private _router: Router,
		private _recipeService: RecipeService) { }

	getRecipes() {
		//this.recipes = this._recipeService.getRecipes();
		this._recipeService.getRecipes().then(recipes => this.recipes = recipes);
	}

	ngOnInit() {
		this.getRecipes();
	}

	onSelect(recipe: Recipe) { this.selectedRecipe = recipe; }

	gotoDetail(){
		this._router.navigate(['RecipeDetail', { id: this.selectedRecipe.id}]);
	}

}


