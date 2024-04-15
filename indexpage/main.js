
// svg

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// svg

// alert

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let emailInput = document.getElementById("validationCustom01");
  let email = emailInput.value;

  if (!emailInput.checkValidity()) {
    // If email is not valid, show Bootstrap validation
    emailInput.classList.add('is-invalid');
    return;
  }

  // SweetAlert confirmation
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to subscribe with this email?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, subscribe!'
  }).then((result) => {
    if (result.isConfirmed) {
      // SweetAlert success message
      Swal.fire(
        'Subscribed!',
        'You are now subscribed.',
        'success'
      );
      
      // Here you can add your subscription logic or form submission
      console.log("Subscribed with email: " + email);

      // Reset the form after successful subscription
      document.getElementById("subscribeForm").reset();
      emailInput.classList.remove('is-invalid');
    } else {
      // SweetAlert error message
      Swal.fire({
        title: 'Subscription Cancelled',
        text: 'You have cancelled the subscription.',
        icon: 'error'
      });
    }
  });
});

// alert

// register

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("flightForm");
  const validationMessage = document.getElementById("validationMessage");
  const bookNowBtn = document.getElementById("bookNowBtn");

  bookNowBtn.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    const flightSelect = document.getElementById("flightSelect");
    const peopleInput = document.getElementById("peopleInput");
    const budgetInput = document.getElementById("budgetInput");
    const totalCost = parseInt(flightSelect.options[flightSelect.selectedIndex].dataset.price) * parseInt(peopleInput.value);

    if (form.checkValidity() === false) {
      validationMessage.innerHTML = '<div class="alert alert-danger" role="alert">Please complete all fields correctly.</div>';
    } else if (totalCost > parseInt(budgetInput.value)) {
      validationMessage.innerHTML = '<div class="alert alert-danger" role="alert">Total cost exceeds budget. Please adjust the number of people or select a different flight.</div>';
    } else {
      // Form is valid, you can handle form submission here
      validationMessage.innerHTML = `<div class="alert alert-success" role="alert">Thank you for your visit! Your ticket will be processed within 3 days. Total Cost: $${totalCost}</div>`;
    }

    form.classList.add("was-validated");
  });
});

// register

// contact

document.getElementById('contactForm').addEventListener('contact', function(event) {
  event.preventDefault();
  if (this.checkValidity() === false) {
    event.stopPropagation();
  } else {
    var name = document.getElementById('nameInput').value;
    var phone = document.getElementById('phoneInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    if (!message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the message!',
      });
    } else {
      // Submit the form (you can send it to server or do other actions here)
      Swal.fire({
        icon: 'success',
        title: 'Thank You!',
        text: 'Thanks for your contact with us.',
      });
      // You can also reset the form after successful submission
      document.getElementById('contactForm').reset();
    }
  }
  this.classList.add('was-validated');
});


document.getElementById('subscriptionForm').addEventListener('subcribe', function(event) {
  event.preventDefault();
  var email = document.getElementById('exampleInputEmail1').value;

  if (!email) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your email!',
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Thank you for subscribing!',
    });
    // Reset the form after successful subscription
    document.getElementById('subscriptionForm').reset();
  }
});