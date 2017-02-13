import {Component, Input, Output, EventEmitter} from "angular2/core"; // EventEmitter is a class to publish events

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
    templateUrl: "app/exercise.template.html"
    // ,
    //   inputs: ["favorite"]  // No. 2: other way to declare INPUT property, but when we do refactoring or change name property, we have to come here and rename the string
    // ,
    // outputs: ["change"] // component metadata; No. 2
})
export class ExerciseComponent {
    @Input() favorite = false; // No 1: decorator; the private property becomes to INPUT property, now it's part of public API of our Component,
    //also we can add alias name to our public property such as: @Input('namePublicProperty') favorite = false; and then
    // we have to change the name where our component is called, in this case instead of: <exercise [favorite]="post.favorite"></exercise>
    // change to: <exercise [namePublicProperty]="post.favorite"></exercise>
    // favorite = false; // No 2:

    @Output() change = new EventEmitter(); //  No 1. decorator Output and import it, similar to Input

    onClick() {
        this.favorite = !this.favorite;

        this.change.emit({ newValue: this.favorite });
    }
};
