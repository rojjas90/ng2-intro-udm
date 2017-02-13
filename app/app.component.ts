import { Component } from "angular2/core";
import { CoursesComponent } from "./courses.component";
import { AuthorComponent } from "./author.component";
import {ExerciseComponent} from "./exercise.component";
import {FavoriteComponent} from "./favorite.component";

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
    <i class="glyphicon glyphicon-star"></i>
    <exercise [favorite]="post.favorite" (change)="onFavoriteChange($event)"></exercise>
    <favorite [favorite]="likes.favorite" [counterLikes]="likes.totalLike"></favorite>
    `,
    directives: [
        CoursesComponent,
        AuthorComponent,
        ExerciseComponent,
        FavoriteComponent
    ]
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200";

    post = {
        title: "favorite",
        favorite: true
    };

    likes = {
        title: "favorite",
        favorite: true,
        totalLike: 10
    };

    onFavoriteChange($event) {
        console.log($event);
    }

}
