import { Twit } from "./twit";
export class TwitService {
    twits: Twit[];

    getTwits() {
        this.twits = [
            {
                avatar: "http://lorempixel.com/100/100/people?1",
                name: "Rojas",
                username: "@grojas",
                comment: "Looking for ...",
                counterLikes: 10
            },
            {
                avatar: "http://lorempixel.com/100/100/people?2",
                name: "Cadete",
                username: "@dcadete",
                comment: "Do something ...",
                counterLikes: 15
            },
            {
                avatar: "http://lorempixel.com/100/100/people?3",
                name: "Rangel",
                username: "@arangel",
                comment: "A new challenge ...",
                counterLikes: 1
            }
        ];

        return this.twits;
    }
}
