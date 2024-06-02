// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
  // Open the modal
  function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    
}

// Function to change the theme
function changeTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme'); // Remove existing themes
    document.body.classList.add(theme + '-theme'); // Add the selected theme
  }
  
  // Function to increase font size
  function increaseFontSize() {
    var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + 'px'; // Increase font size by 1px
  }
  
  // Function to decrease font size
  function decreaseFontSize() {
    var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize - 1) + 'px'; // Decrease font size by 1px
  }

  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate HTML with fetched data
    const postsContainer = document.getElementById('posts-container');
    data.posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  // Assuming you have a form with id 'my-form' and a div with id 'form-message'
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Serialize form data
  const formData = new FormData(this);

  // Send form data using AJAX
  fetch('submit-form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      formMessage.textContent = 'Form submitted successfully!';
      form.reset(); // Reset form fields
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    formMessage.textContent = 'Error submitting form';
    console.error('Error submitting form:', error);
  });
});

toastr.success('Success message');
toastr.error('Error message');


  