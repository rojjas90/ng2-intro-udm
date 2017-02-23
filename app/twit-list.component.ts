import {Component, OnInit, Input, Output} from "angular2/core";

import { Twit } from "./twit";
import { TwitService } from "./twit.service";
import { FavoriteComponent } from "./favorite.component";

@Component({
    selector: "twits",
    template: `
    <div class="media" *ngFor="#twit of twitList">
         <div class="media-left">
              <a href="#">
                   <img class="media-object" src="{{twit.avatar}}" alt="contact">
              </a>
         </div>
         <div class="media-body">
              <h4 class="media-heading">{{twit.name}} <span>{{twit.username}}</span></h4>
              {{twit.comment}}
              <favorite [favorite]="false" [counterLikes]="twit.counterLikes"></favorite>
         </div>
    </div>
  `,
    styles: [`
      .media-heading {
        font-weight: bold;
      }

      .media-heading span {
        color: #8b8b8b;
      }

      .media-object {
        border-radius: 10%;
      }
    `],
    directives: [
        FavoriteComponent
    ],
    providers: [
        TwitService
    ]
})
export class TwitListComponent implements OnInit {

    twitList: Twit[];

    constructor(private twits: TwitService) { }

    ngOnInit() {
        this.twitList = this.twits.getTwits();
    }

}
