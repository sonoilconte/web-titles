const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(titles) {
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
    }

    start() {
        const intervalID = setInterval(() => {
            console.log('beat!!!');
            this.timeElapsed += INTERVAL_LENGTH;
            if (this.currentIndex < this.titles.length) {
                if (this.titles[this.currentIndex].ts === this.timeElapsed) {
                    console.log(`\n\n${this.titles[this.currentIndex].text} #${this.currentIndex}`);
                    console.log(this.timeElapsed);
                    this.currentIndex += 1;
                }
            } else {
                clearInterval(intervalID);
            }
        }, INTERVAL_LENGTH);
    }

    add(title) {
        this.titles.push(title);
        this.titles.sort((a, b) => a.ts - b.ts);
    }
}

const sampleTitles = require('./sampleTitles');
const svc = new TitlesService(sampleTitles);

svc.add({ ts: 3000, text: 'Hey I am an inserted title' });

console.log(svc);

svc.start();

svc.add({ ts: 5000, text: 'Hey I am ANOTHER inserted title' });
