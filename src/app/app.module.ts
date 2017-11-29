import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HomepageComponent } from  './homepage/homepage.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { AccountComponent } from './account/account.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeNewComponent } from './recipes/recipe-new.component';
import { RecipeShowComponent } from './recipes/recipe-show.component';

import { KitchenComponent } from './kitchen/kitchen.component';



@NgModule({
  
imports: [ 
	BrowserModule,
	AppRoutingModule,
  FormsModule,
  MDBBootstrapModule.forRoot()
   ],
declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    AccountComponent,
    RecipesComponent,
    KitchenComponent,
    RecipeListComponent,
    RecipeNewComponent,
    RecipeShowComponent


  ],

  providers: [],

  bootstrap: [
AppComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
 
})
export class AppModule { }
