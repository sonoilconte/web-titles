/**
 * TODO: need something to validate that titles read into the service are valid
 * timestamps must always increase in the array
 * a start of a title cannot precede the end of a previous title
 */
const sampleTitles = [
    {
        start: 1000, // timestamp in ms
        end: 3000,
        text: 'Once upon a time',
    },
    {
        start: 5000,
        end: 6000,
        text: 'not so long ago...',
    },
    {
        start: 7000,
        end: 9000,
        text: 'duh duh duh duh',
    },
];

const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(titleNode, titles) {
        this.titleNode = titleNode;
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.currentText = '';
    }

    start() {
        const intervalID = setInterval(() => {
            if (this.currentIndex < this.titles.length) {
                // console.log(this);
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
                this.titleNode.textContent = this.currentText;
                console.log(
                    `Time: ${this.timeElapsed} currentIndex: ${this.currentIndex} titles array length: ${this.titles.length} currentText: ${this.currentText}`
                );
                this.timeElapsed += INTERVAL_LENGTH;
            } else {
                console.log('All titles have been run');
                clearInterval(intervalID);
            }
        }, INTERVAL_LENGTH);
    }

    add(title) {
        if (this.isOverLapping(title)) {
            console.log('Cannot add');
            return;
        }
        this.titles.push(title);
        this.titles.sort((a, b) => a.start - b.start);
    }

    // A new incoming Title should never overlap with the existing titles
    isOverLapping(title) {
        for (let i = 0; i < this.titles.length; i += 1) {
            if (title.start > this.titles[i].start && title.start < this.titles[i].end) {
                return true;
            }
            if (title.end < this.titles[i].end && title.end > this.titles[i].start) {
                return true;
            }
            // sharing a start or end point is always going to be overlapping
            if (title.start === this.titles[i].start || title.end === this.titles[i].end) {
                return true;
            }
        }
        return false;
    }
}

const titleNode = document.getElementById('title-el');
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    const svc = new TitlesService(titleNode, sampleTitles);
    console.log(svc);
    svc.start();
    setTimeout(() => {
        console.log('NEW ADD!');
        svc.add({
            start: 6100,
            end: 6800,
            text: 'Hey I am an inserted title',
        });
    }, 6000);
});
