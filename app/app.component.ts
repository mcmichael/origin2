import { Component } from 'angular2/core';
import { RecipeService } from './recipe.service';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { DashBoardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'my-recipes',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Recipes']">Recipes</a>
			<router-outlet></router-outlet>
		</nav>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [ ROUTER_PROVIDERS, 
				 RecipeService
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashBoardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'RecipeDetail',
		component: RecipeDetailComponent
	},
	{
		path: '/recipes',
		name: 'Recipes',
		component: RecipesComponent
	}
	
])

export class AppComponent {
	title = 'List of recipes';
}