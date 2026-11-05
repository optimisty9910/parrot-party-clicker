// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
'use strict';

const state = {
    clickCount: 0,
    
};

const clickParrot = () => {
    state.clickCount += 1;
    const counter = document.getElementById('counter');
    counter.textContent = `Clicks: ${state.clickCount}`;

    if (state.clickCount === 8) {
        const parrotImg = document.getElementById('parrot-img');
        parrotImg.style.width = '200px';
    }
};

const resetCounter = () => {
    state.clickCount = 0;
    const counter = document.getElementById('counter');
    counter.textContent = `Clicks: ${state.clickCount}`;
};

const registerEventHandles = () => {
    const newClick = document.getElementById('parrot-img');
    newClick.addEventListener('click', clickParrot);

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetCounter);
};

const onLoad = () => {
    registerEventHandles();
};

onLoad();
