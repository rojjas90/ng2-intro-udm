import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "votes",
    template: `
<div class="sizeContainer">
  <i class="glyphicon glyphicon-menu-up" [class.vote]="myVote>0" (click)="positiveVote()"></i>
  <span>{{voteCount}}</span>
  <i class="glyphicon glyphicon-menu-down" [class.vote]="myVote<0" (click)="negativeVote()"></i>
</div>
  `,
    styles: [
        `
    .sizeContainer{
      width: 25px;
      text-align: center;
      font-size: 20px;
    }

    .vote{
      color: orange;
    }
    `
    ]
})
export class VoteComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    positiveVote() {
        this.voteCount += this.myVote === 0 || this.myVote === -1 ? 1 : 0;
        this.myVote += this.myVote <= 0 ? 1 : 0;

        this.vote.emit({ myVote: this.myVote });
    }

    negativeVote() {
        this.voteCount -= this.myVote === 0 || this.myVote === 1 ? 1 : 0;
        this.myVote -= this.myVote >= 0 ? 1 : 0;

        this.vote.emit({ myVote: this.myVote });
    }
}
