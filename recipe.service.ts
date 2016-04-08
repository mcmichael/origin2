import {Injectable} from 'angular2/core';

import {Recipe} from './recipe';
import {Recipes} from './mock-recipes';

@Injectable()
export class RecipeService {
	getRecipes() {
		//return Recipes;
		return Promise.resolve(Recipes);
	}

	getRecipesSlowly() {
		return new Promise<Recipe[]>(resolve =>
			setTimeout(() => resolve(Recipes), 2000)
		);
	}
}