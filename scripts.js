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
  const textElements = document.querySelectorAll('.text');

  if (textElements.length === 0) {
      console.error('No .text elements found.');
      return;
  }

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add class to trigger the animation
              entry.target.classList.add('show');
          } else {
              // Remove class when not in view
              entry.target.classList.remove('show');
          }
      });
  }, observerOptions);

  textElements.forEach(text => observer.observe(text));
});

//this code is for gallery section.
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          const img = item.querySelector('img');
          const imgSrc = img.src;
          const imgAlt = img.alt;

          lightboxImg.src = imgSrc;
          caption.textContent = imgAlt;
          lightbox.style.display = 'flex';
      });
  });

  closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
          lightbox.style.display = 'none';
      }
  });
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


  
  
  //this code is for the contact form . after submitting the message , prompt shows a message that the form  was submitted. 
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting us.');
});

  
  