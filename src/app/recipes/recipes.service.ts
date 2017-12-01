import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Recipe } from './recipe';

@Injectable()

export class RecipeService{
private recipesUrl = 'http://localhost:3001/recipes.json';

	constructor(
			private http : Http
		){}

	
	getRecipes(): Observable<Recipe[]>{
		return this.http.get(this.recipesUrl)
						.map((response: Response)=> <Recipe[]>response.json())
						.catch(this.handleError);
	}

	getRecipe(id:number){
		
	}



	//  error handling code for API
	private handleError (error: Response | any) {
    
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
	}	
}