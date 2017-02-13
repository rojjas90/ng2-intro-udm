import { Component } from "angular2/core";
import { CoursesComponent } from "./courses.component";
import { AuthorComponent } from "./author.component";
import {ExerciseComponent} from "./exercise.component";

@Component({
    selector: "my-app",
    template: `
    <h1>{{title}}</h1>
    <!-- Property binding -->
    <h2 [textContent]="title"></h2>

    <!-- ways to rendering content -->
    <img src="{{imageUrl}}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />

    <courses></courses>
    <authors></authors>
    <exercise></exercise>
    `,
    directives: [
        CoursesComponent,
        AuthorComponent,
        ExerciseComponent
    ]
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200";
}
