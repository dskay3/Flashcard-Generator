// BasicCard constructor
var BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
        // Text on the front card
        this.front = front;

        // Text on the back card
        this.back = back;
    } else {
        return new BasicCard(front, back);
    }
}

module.exports = BasicCard;