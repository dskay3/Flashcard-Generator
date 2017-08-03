// NPM installs
const chalk = require('chalk');

// ClozeCard constructor
var ClozeCard = function (text, cloze) {
    if (this instanceof ClozeCard) {
        // Contains the full text
        this.fullText = text;

        // Contains the cloze-deleted portion of the text
        this.cloze = cloze;

        // Contains the partial text
        this.partial(this.fullText, this.cloze);

        // Checks to see if there is a cloze in the text
        this.clozeChecker(this.fullText, this.cloze);
    } else {
        return new ClozeCard(text, cloze);
    }
}

// Partial property that only contains the partial text
ClozeCard.prototype.partial = function(text, cloze) {
    this.partial = (text).replace(cloze, '...');
}

// Throws an error if a cloze is not present in the text
ClozeCard.prototype.clozeChecker = function(text, cloze) {
    if (!text.includes(cloze)) {
        console.log(chalk.red("Error: Cloze is not present in the text."));
    }
}

module.exports = ClozeCard;