import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeNewComponent } from './recipes/recipe-new.component';
import { RecipeShowComponent} from './recipes/recipe-show.component';

import { AccountComponent } from './account/account.component';
import { KitchenComponent } from './kitchen/kitchen.component';


const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomepageComponent },
	{path: 'documents', component: DocumentsComponent},

	{path: 'recipes', component: RecipeListComponent},
	{path: 'recipes/new', component: RecipeNewComponent},
	{path: 'recipe/:id', component: RecipeShowComponent},

	{path: 'account', component: AccountComponent},
	{path: 'kitchen', component: KitchenComponent},
]

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ] 
})

export class AppRoutingModule {}