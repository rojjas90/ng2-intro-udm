// my solution
// import {Component, Input, Output} from "angular2/core";
//
// @Component({
//     selector: "favorite",
//     templateUrl: "app/favorite.template.html",
//     styles: [`
//       .glyphicon-heart{
//         color: deeppink;
//       }
//
//       .glyphicon-heart-empty{
//         color: #ccc;
//       }
//
//       .cursor{
//         cursor: pointer;
//       }
//       `]
//
// })
// export class FavoriteComponent {
//     @Input() favorite = false;
//
//     counterLikes = 10;
//
//     onClick() {
//         this.favorite = !this.favorite;
//
//         if (this.favorite)
//             this.counterLikes++;
//         else
//             this.counterLikes--;
//     }
// }

// Mosh solution
import {Component, Input, Output} from "angular2/core";

@Component({
    selector: "favorite",
    templateUrl: "app/favorite.template.html",
    styles: [`
      .glyphicon-heart{
        color: #ccc;
        cursor: pointer;
      }

      .highlighted{
        color: deeppink;
      }
      `]

})
export class FavoriteComponent {
    @Input() favorite = false;
    @Input() counterLikes = 0;

    onClick() {
        this.favorite = !this.favorite;

        this.counterLikes += this.favorite ? 1 : -1;
    }
}
