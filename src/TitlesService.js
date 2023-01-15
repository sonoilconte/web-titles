/**
 * TODO: need something to validate that titles read into the service are valid
 * timestamps must always increase in the array
 * a start of a title cannot precede the end of a previous title
 */

const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(titleNode, titles) {
        this.titleNode = titleNode;
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.currentText = '';
        this.intervalID = '';
    }

    start() {
        this.intervalID = setInterval(() => {
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
                console.log('All titles have been run...resetting player');
                this.reset();
            }
        }, INTERVAL_LENGTH);

        console.log('Started title service with intervalID', this.intervalID);
    }

    stop() {
        console.log('Stopping playing of titles...click start to restart player where you left off');
        clearInterval(this.intervalID);
    }

    reset() {
        console.log('Resetting titles service');
        clearInterval(this.intervalID);
        console.log('Interval cleared: ', this.intervalID);
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.titleNode.textContent = '';
        this.currentText = '';
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

export default TitlesService;
