// JavaScript implementation for Uniboard functionality

// Define a constructor for Uniboard
function Uniboard() {
    this.items = [];
}

// Method to add an item to the Uniboard
Uniboard.prototype.addItem = function(item) {
    this.items.push(item);
};

// Method to remove an item from the Uniboard
Uniboard.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
        this.items.splice(index, 1);
    }
};

// Method to display items on the Uniboard
Uniboard.prototype.displayItems = function() {
    console.log('Uniboard Items:');
    this.items.forEach(function(item) {
        console.log(item);
    });
};

// Example usage
const myBoard = new Uniboard();
myBoard.addItem('Task 1');
myBoard.displayItems();