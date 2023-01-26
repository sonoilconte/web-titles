/**
 * TODO: need something to validate that titles read into the service are valid
 * timestamps must always increase in the array
 * a start of a title cannot precede the end of a previous title
 */

const INTERVAL_LENGTH = 100; // ms

class TitlesService {
    constructor(viewNode, titles, onReset) {
        this.viewNode = viewNode;
        this.titles = titles || [];
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.currentText = '';
        this.intervalID = '';
        this.onReset = onReset;
    }

    start() {
        this.intervalID = setInterval(() => {
            if (this.currentIndex < this.titles.length) {
                if (
                    // start showing of title
                    this.timeElapsed === this.titles[this.currentIndex].start
                ) {
                    this.currentText = this.titles[this.currentIndex].text;
                } else if (
                    // end showing of title
                    this.timeElapsed === this.titles[this.currentIndex].end
                ) {
                    this.currentText = '';
                    this.currentIndex += 1; // advance to the next title
                }
                this.viewNode.textContent = this.currentText;
                this.log();
                this.timeElapsed += INTERVAL_LENGTH;
            } else {
                console.log('All titles have been run...resetting player');
                this.reset();
                this.onReset();
            }
        }, INTERVAL_LENGTH);

        console.log('Started title service with intervalID', this.intervalID);
    }

    stop() {
        console.log(
            'Stopping playing of titles...click start to restart player where you left off'
        );
        clearInterval(this.intervalID);
    }

    reset() {
        console.log('Resetting titles service');
        clearInterval(this.intervalID);
        console.log('Interval cleared: ', this.intervalID);
        this.timeElapsed = 0;
        this.currentIndex = 0;
        this.viewNode.textContent = '';
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
            if (
                title.start > this.titles[i].start
                && title.start < this.titles[i].end
            ) {
                return true;
            }
            if (
                title.end < this.titles[i].end
                && title.end > this.titles[i].start
            ) {
                return true;
            }
            // sharing a start or end point is always going to be overlapping
            if (
                title.start === this.titles[i].start
                || title.end === this.titles[i].end
            ) {
                return true;
            }
        }
        return false;
    }

    log() {
        let statement = '';
        statement += `time: ${this.timeElapsed}\n`;
        statement += `text: ${this.currentText}\n`;
        statement += `index: ${this.currentIndex}\n`;
        statement += `array len: ${this.titles.length}\n`;
        console.log(statement);
    }
}

export default TitlesService;
