System.register(['angular2/core', 'angular2/router', './recipe-detail.component', './recipe.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, recipe_detail_component_1, recipe_service_1;
    var RecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent(_router, _recipeService) {
                    this._router = _router;
                    this._recipeService = _recipeService;
                }
                RecipesComponent.prototype.getRecipes = function () {
                    var _this = this;
                    //this.recipes = this._recipeService.getRecipes();
                    this._recipeService.getRecipes().then(function (recipes) { return _this.recipes = recipes; });
                };
                RecipesComponent.prototype.ngOnInit = function () {
                    this.getRecipes();
                };
                RecipesComponent.prototype.onSelect = function (recipe) { this.selectedRecipe = recipe; };
                RecipesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['RecipeDetail', { id: this.selectedRecipe.id }]);
                };
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        templateUrl: 'app/recipes.component.html',
                        styleUrls: ['app/recipes.component.css'],
                        directives: [recipe_detail_component_1.RecipeDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, recipe_service_1.RecipeService])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});
//# sourceMappingURL=recipes.component.js.map