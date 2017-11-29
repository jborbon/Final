import { Component } from '@angular/core';
import { Document } from './document';


@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls:['documents.component.css']
})

export class DocumentsComponent{
	pageTitle: string = "Documents Dashboard"

	documents: Document[] = [{
		title:"My first doc",
		description:"this is the my first Angular project",
		file_url: "http://google.com",
		updated_at:"12/01/17",
		image_url:"https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
		},
		{
		title:"My Second doc",
		description:" you already know , im going to knock it out of the park ",
		file_url: "http://google.com",
		updated_at:"12/05/17",
		image_url:"https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
		},
		{
		title:"My Third doc",
		description:"yurpp  thats right Angular project on a role, yup yup ",
		file_url: "http://google.com",
		updated_at:"12/09/17",
		image_url:"https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
		}
	]
}