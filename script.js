// Select the button and message elements
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add a click event to the button
button.addEventListener('click', () => {
  
  message.textContent = 'You clicked the button!';
  message.style.color = 'green';

    // Set a timeout to hide the message after 5 seconds
    setTimeout(() => {
        message.textContent = ''; // Clear the message
      }, 5000); 
      
});
