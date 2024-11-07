const slides = document.querySelectorAll(".slide");
console.log(slides);
var counter = 0;

// Position each slide
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  if (counter == -1) {
    counter = 4;
  }
  console.log(counter);
  slideImage();
};

const goNext = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  console.log(counter);
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Automatically move to the next slide every 3 seconds
setInterval(goNext, 3000); // 3000 milliseconds = 3 seconds

//form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");
  const errorMsg = document.getElementById("error-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = [];

    // Validate name
    if (!/^[a-zA-Z ]+$/.test(nameInput.value)) {
      errors.push("Name can only contain letters and spaces.");
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(mobileInput.value)) {
      errors.push("Please Enter Valid Mobile Number .");
    }

    if (errors.length > 0) {
      errorMsg.innerHTML = errors.join("<br>");
    } else {
      errorMsg.innerHTML = "Form submitted successfully!";
      submitForm();
      // You can proceed with form submission or further processing here
    }
  });
});

//submit form
function submitForm() {
  const form = document.querySelector("form");
  const newLocal = (form.innerHTML =
    "<center><img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmUzemdla3U5emw5MHptbHdrajhvcGNieGRjNjhoajQ1NG9yYW0wNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lwdArutvbQTeuBDEBZ/giphy.gif'></center>");
}
