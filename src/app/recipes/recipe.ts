export class Recipe {
	constructor(
		public id?: number,
		public recipe_name: string,
		public prep_time?: number,
		public cook_time?: number,
		public total_time?: number,
		public ingredients: string, 
		public steps: string
	) {}
}

// 1,"Chicken parm", 20, 30, 50, "bread chicken parm sauce","cook chicken, cook sauce , put chicken and sauce together "