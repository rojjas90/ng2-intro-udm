import { Component, Input } from "angular2/core";

@Component({
    selector: "zippy",
    template: `
    <div class="main-container">
      <div class="section-container custom-container" (click)="clicked()">
      {{title}} <i class="pull-right glyphicon" [ngClass]="{
        'glyphicon-chevron-down': !zippyOpen,
        'glyphicon-chevron-up': zippyOpen
      }"></i>
      </div>
      <div class="custom-container" [hidden]="!zippyOpen">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .main-container {
      border: 1px #cbcbcb solid;
      width: 800px;
      margin: 0 auto;
    }

    .section-container{
      font-weight: bold;
    }

    .section-container:hover{
      background-color: #e0e0e0;
    }

    .custom-container {
      padding: 25px;
    }
    `]
})
export class ZippyComponent {
    @Input() title: string;
    zippyOpen = false;

    clicked() {
        this.zippyOpen = !this.zippyOpen;
    }
}
