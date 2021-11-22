import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports : [
      SharedModule,
      ReactiveFormsModule,
      RecipesRoutingModule
  ],
// * Here we have already used these components in RecipesRoutingModule and we are not using it in any other module elsewhere, thus we don't need to export it.
//   exports: [
//     RecipeComponent,
//     RecipeListComponent,
//     RecipeItemComponent,
//     RecipeDetailComponent,
//     RecipeStartComponent,
//     RecipeEditComponent,
//   ]
})
export class RecipesModule {}
