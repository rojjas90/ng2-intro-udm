import { Component } from "angular2/core";
import { CoursesComponent } from "./courses.component";
import { AuthorComponent } from "./author.component";
import { ExerciseComponent } from "./exercise.component";
import { FavoriteComponent } from "./favorite.component";
import { VoteComponent } from "./vote.component";
import { TwitListComponent } from "./twit-list.component";
import { SummaryPipe } from "./summary.pipe";

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
    <exercise [favorite]="post.favorite" (changeCustom)="onFavoriteChange($event)"></exercise>
    <favorite [favorite]="likes.favorite" [counterLikes]="likes.totalLike"></favorite>

    <!-- My solution -->
    <!-- <votes [voteCount]="votes.voteCount" [myVote]="votes.myVote" (vote)="votation($event)"></votes>-->

    <!-- Mosh solution -->
    <votes
    [voteCount]="votes.voteCount"
    [myVote]="votes.myVote"
    (vote)="onVote($event)"></votes>

    <br>
    <br>
    <twits></twits>
    <br>
    <br>

<!-- using *ngIf directive -->
    <div *ngIf="courses.length > 0">
      List of courses
    </div>
    <div *ngIf="courses.length === 0">
      You don't have any courses yet.
    </div>
    <br>
    <!-- using hidden property -->
    <div [hidden]="courses.length === 0">
      List of courses
    </div>
    <div [hidden]="courses.length > 0">
      You don't have any courses yet.
    </div>

    <br>
    <br>

    <!-- ngSwitch review -->
    <ul class="nav nav-pills">
         <li [class.active]="viewMode==='map'"><a (click)="viewMode = 'map'">Map view</a></li>
         <li [class.active]="viewMode==='list'"><a (click)="viewMode = 'list'">List view</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
         <template [ngSwitchWhen]="'map'">Map view content</template>
         <template [ngSwitchWhen]="'list'">List view content</template>
         <template ngSwitchDefault>Default view</template>
    </div>

    <br>
    <br>
    <!-- ngFor review -->
    <ul>
         <li *ngFor="#course of courses1, #i = index">
              {{i + 1}} - {{ course }}
         </li>
    </ul>

    <br>
    <br>
    <!-- Pipes review -->
    {{data.title | uppercase | lowercase}}
    <br>
    {{data.students | number }}
    <br>
    {{data.rating | number: '2.2-2' }}
    <br>
    {{data.price | currency:'MXN':true:'2.2-2'}}
    <br>
    {{data.releaseDate | date:'dd MM yyyy'}}
    <br>
    {{data | json}}
    <br>
    <br>
    <br>

    {{post1.title}}
    <br>
    {{post1.body |summary:10 }}
    <br>

    `,
    directives: [
        CoursesComponent,
        AuthorComponent,
        ExerciseComponent,
        FavoriteComponent,
        VoteComponent,
        TwitListComponent
    ],
    pipes: [
        SummaryPipe
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

    votes = {
        voteCount: 10,
        myVote: 0
    };

    // *ngIf
    courses = [];

    // [ngSwitch] directive
    viewMode = "map";

    // *ngFor
    courses1 = [
        "courses1",
        "courses2",
        "courses3"
    ];

    // Pipes; concept which is used to format data
    data = {
        title: "Angular",
        rating: 3.437654,
        students: 5434,
        price: 99.34,
        releaseDate: new Date(2017, 2, 4)
    };

    // Custom pipes
    post1 = {
        title: "Angular tutorial",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };


    onFavoriteChange($event) {
        console.log($event);
    }

    // // My solutions
    // votation($event) {
    //     console.log($event);
    // }

    // Mosh solution
    onVote($event) {
        console.log($event);
    }

}
