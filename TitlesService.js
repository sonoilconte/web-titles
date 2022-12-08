/**
 * TODO: need something to validate that titles read into the service are valid
 * timestamps must always increase in the array
 * a start of a title cannot precede the end of a previous title
 */

const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(titles) {
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.currentText = '';
    }

    start() {
        const intervalID = setInterval(() => {
            if (this.currentIndex < this.titles.length) {
                if (this.timeElapsed === this.titles[this.currentIndex].start) {
                    // Event — start showing of title
                    this.currentText = this.titles[this.currentIndex].text;
                    // console.log(`\n\nTime: ${this.timeElapsed} START ${this.currentText} #${this.currentIndex}`);
                } else if (this.timeElapsed === this.titles[this.currentIndex].end) {
                    // Event = end showing of title
                    // console.log(`\n\nTime: ${this.timeElapsed} END ${this.currentText} #${this.currentIndex}`);
                    this.currentText = '';
                    this.currentIndex += 1; // advance to the next title
                }
                console.log(
                    `Time: ${this.timeElapsed} currentIndex: ${this.currentIndex} currentText: ${this.currentText}, length: ${this.titles.length}`
                );
                this.timeElapsed += INTERVAL_LENGTH;
            } else {
                console.log('All titles have been run');
                clearInterval(intervalID);
            }
        }, INTERVAL_LENGTH);
    }

    add(title) {
        this.titles.push(title);
        this.titles.sort((a, b) => a.start - b.start);
        // console.log('LENGTH', this.titles.length);
    }
}

const sampleTitles = require('./sampleTitles');
const svc = new TitlesService(sampleTitles);

setTimeout(() => {
    console.log('NEW ADD!');
    svc.add({
        start: 7000,
        end: 8000,
        text: 'Hey I am an inserted title',
    });
}, 3000);

svc.start();
