import {Component} from "angular2/core";

// my way
// @Component({
//     selector: "exercise",
//     template: `
//   <div>
//   <i class={{class}} (click)="favoriteMark()"></i>
//   </div>
//   `
// })
// export class ExerciseComponent {
//     favorite = true;
//     class = "glyphicon glyphicon-star";
//     favoriteMark() {
//         this.class = "";
//         if (this.favorite) {
//             this.favorite = false;
//             this.class = "glyphicon glyphicon-star-empty";
//         }
//         else {
//             this.favorite = true;
//             this.class = "glyphicon glyphicon-star";
//         }
//     }
// };

// solution from Mosh
@Component({
    selector: "exercise",
    template: `
  <div>
  <i
  class="glyphicon"
  [class.glyphicon-star]="favorite"
  [class.glyphicon-star-empty]="!favorite"
  (click)="onClick()"
  >
  </i>
  </div>
  `
})
export class ExerciseComponent {
    favorite = false;

    onClick() {
        this.favorite = !this.favorite;
    }
};
