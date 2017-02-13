import {Component, Input, Output} from "angular2/core";

@Component({
    selector: "favorite",
    templateUrl: "app/favorite.template.html",
    styles: [`
      .glyphicon-heart{
        color: deeppink;
      }

      .glyphicon-heart-empty{
        color: #ccc;
      }

      .cursor{
        cursor: pointer;
      }
      `]

})
export class FavoriteComponent {
    @Input() favorite = false;

    counterLikes = 10;

    onClick() {
        this.favorite = !this.favorite;

        if (this.favorite)
            this.counterLikes++;
        else
            this.counterLikes--;
    }
}
