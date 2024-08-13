function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
    } else {
        menu.classList.add("show-menu");
    }
}

//this code is for the typing effect you see on the hero of homepage.
document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-effect');
  const text = textElement.innerText;
  textElement.innerText = ' '; // Clear the initial text

  let index = 0;
  const speed = 70; // Adjust typing speed (milliseconds per character)
  const delay = 6000; // Delay before restarting typing effect (10 seconds)

  function type() {
      if (index < text.length) {
          textElement.innerText += text.charAt(index);
          index++;
          setTimeout(type, speed);
      } else {
          // Reset index and text after typing is complete
          setTimeout(function() {
              textElement.innerText = ' '; // Clear the text
              index = 0; // Reset index
              type(); // Restart typing effect
          }, delay);
      }
  }

  type();
});
//this code is for about us page :
document.addEventListener('DOMContentLoaded', () => {
    // Select all .text elements inside the #about-us section
    const textElements = document.querySelectorAll('#about-us .text');

    // Function to handle intersection events
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            // Check if the element is in view
            if (entry.isIntersecting) {
                // Add the 'animate' class to trigger the CSS animation
                entry.target.classList.add('animate');
                // Optionally stop observing the element if you only want the animation to happen once
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an IntersectionObserver instance with the callback function
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Observe the viewport
        rootMargin: '0px', // No margin around the viewport
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing each .text element
    textElements.forEach(text => observer.observe(text));
});

//this code is for bod members section
function showYear(year) {
  // Hide all year groups
  document.querySelectorAll('.year-group').forEach(group => {
    group.style.display = 'none';
  });

  // Show the selected year group
  document.querySelector(`.${year}-year`).style.display = 'flex';

  // Remove 'active' class from all buttons
  var buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button
  var clickedButton = event.target;
  clickedButton.classList.add('active');
}

// Show the latest year by default
document.addEventListener('DOMContentLoaded', () => {
  showYear('latest');
});
//for the alert message when user clicks the submit button
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('This function is currently under maintenance. Please email or use the contact number instead.');
});
  