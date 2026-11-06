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
  clicked: false,
  counter: document.getElementById('counter'),
  parrotImg: document.getElementById('parrot-img'),
  resetButton: document.getElementById('reset'),
  box1: document.getElementById('box-one'),
  box2: document.getElementById('box-two'),
  box3: document.getElementById('box-three'),
  box4: document.getElementById('box-four'),
};

const updateCounter = (operation) => {
  if (operation === 'click') {
    state.clickCount += 1;
    if (state.clickCount >= 8) {
      state.parrotImg.classList.add('large');
    }
  } else if (operation === 'reset') {
    state.clickCount = 0;
    state.parrotImg.classList.remove('large');
  }
  state.counter.textContent = `Clicks: ${state.clickCount}`;
};

const hoverBox1 = () => {
  state.box1.style.backgroundColor = 'pink';
};

const hoverLeaveBox1 = () => {
  state.box1.style.backgroundColor = '';
};

const updateBox2 = (event, action) => {
  if (action === 'keydown' && event.keyCode === 32) {
    state.box2.textContent = '🍮';
    state.box2.classList.add('pressed');
  } else if (action === 'keyup' && event.keyCode === 32) {
    state.box2.textContent = 'press space';
    state.box2.classList.remove('pressed');
  }
};

const clickBox3 = () => {
  if (!state.clicked) {
    state.box3.classList.add('clicked');
    state.clicked = true;
  } else {
    state.box3.classList.remove('clicked');
    state.clicked = false;
  }
};

const doubleClickBox4 = () => {
  alert('Box 4 was double-clicked!');
};

const registerEventHandles = () => {
  state.parrotImg.addEventListener('click', () => updateCounter('click'));

  state.resetButton.addEventListener('click', () => updateCounter('reset'));

  state.box1.addEventListener('mouseenter', hoverBox1);
  state.box1.addEventListener('mouseleave', hoverLeaveBox1);

  document.addEventListener('keydown', (event) => updateBox2(event, 'keydown'));
  document.addEventListener('keyup', (event) => updateBox2(event, 'keyup'));

  state.box3.addEventListener('click', clickBox3);

  state.box4.addEventListener('dblclick', doubleClickBox4);
};

const onLoad = () => {
  registerEventHandles();
};

onLoad();
