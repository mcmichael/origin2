System.register(['angular2/core', 'angular2/router', './recipe', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_1, recipe_service_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_recipeService, _routeParams) {
                    this._recipeService = _recipeService;
                    this._routeParams = _routeParams;
                }
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._recipeService.getRecipe(id)
                        .then(function (recipe) { return _this.recipe = recipe; });
                };
                RecipeDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', recipe_1.Recipe)
                ], RecipeDetailComponent.prototype, "recipe", void 0);
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-detail',
                        templateUrl: 'app/hero-detail.component.html',
                        styleUrls: ['app/hero-details.component.css']
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.RouteParams])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});
//# sourceMappingURL=recipe-detail.component.js.map