// Calculator logic for button-based UI
// Version: 1.0 - Basic calculator with funky messages
console.log('🚀 Calculator script loaded! Console is working!');

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let currentInput = '';

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function calculate(expression) {
  console.log('🧮 Calculating expression:', expression);
  // Replace ^ with ** for exponentiation
  const safeExpression = expression.replace(/\^/g, '**');
  try {
    // Evaluate the expression
    const result = eval(safeExpression);
    console.log('✅ Calculation result:', result);
    return result;
  } catch (error) {
    console.log('❌ Calculation error:', error);
    return 'Error';
  }
}

const funkyMessages = [
  "Wowsies! You just made a calculation! 🎉✨",
  "Math magic in action! 🧙‍♂️🔢",
  "Boom! Numbers crunched! 💥🧮",
  "You did the math! 🏆🧠",
  "Calculation complete! 🚀😎",
  "Whoa, you're a mathlete! 🏅🤓",
  "Digits dancing! 💃🕺",
  "That was numberwang! 🔢🎲",
  "You're on fire! 🔥🔥",
  "Math wizardry! 🧙‍♀️✨",
  "You cracked the code! 🕵️‍♂️🔓",
  "Numbers bow to you! 🙇‍♂️🔢",
  "You just calculated greatness! 🌟📈",
  "That's some sharp math! 🦈✏️",
  "You're a human calculator! 🤖🧮",
  "Math: 0, You: 1! 🥇😄",
  "You just flexed your brain! 💪🧠",
  "Calculation sensation! 🎶🔢",
  "You're a math rockstar! 🎸🤩",
  "That's how it's done! 👏🎯"
];

const funkyMessageDiv = document.getElementById('funky-message');

function showFunkyMessage() {
  console.log('🎉 showFunkyMessage called!');
  const msg = funkyMessages[Math.floor(Math.random() * funkyMessages.length)];
  console.log('📝 Selected message:', msg);
  funkyMessageDiv.textContent = msg;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    console.log('🔘 Button clicked:', value);
    if (value === 'C') {
      currentInput = '';
      updateDisplay();
      funkyMessageDiv.textContent = '';
    } else if (value === '=') {
      console.log('🟰 Equals button pressed, starting calculation...');
      const result = calculate(currentInput);
      currentInput = result.toString();
      updateDisplay();
      showFunkyMessage();
    } else {
      currentInput += value;
      updateDisplay();
    }
  });
});

// Keyboard support
const allowedKeys = '0123456789+-*/^().';
document.addEventListener('keydown', (e) => {
  if (allowedKeys.includes(e.key)) {
    console.log('⌨️ Key pressed:', e.key);
    currentInput += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    console.log('↩️ Enter key pressed, starting calculation...');
    const result = calculate(currentInput);
    currentInput = result.toString();
    updateDisplay();
    showFunkyMessage();
  } else if (e.key === 'Backspace') {
    console.log('⌫ Backspace pressed');
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === 'c') {
    console.log('🧹 Clear key pressed');
    currentInput = '';
    updateDisplay();
    funkyMessageDiv.textContent = '';
  }
});

// Initialize display
updateDisplay(); 