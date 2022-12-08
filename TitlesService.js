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
        start: 10000,
        end: 14000,
        text: 'duh duh duh duh',
    },
];

const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(titles) {
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.currentText = '';
    }

    start(titleNode) {
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
                titleNode.textContent = this.currentText;
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
        this.titles.push(title);
        this.titles.sort((a, b) => a.start - b.start);
    }
}

const titleNode = document.getElementById('title-el');
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    const svc = new TitlesService(sampleTitles);
    svc.start(titleNode);
    setTimeout(() => {
        console.log('NEW ADD!');
        svc.add({
            start: 7000,
            end: 8000,
            text: 'Hey I am an inserted title',
        });
    }, 3000);
});
