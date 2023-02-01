// ###################### LIKED ITEMS #######################
/* liked items functionality:
added a tick next to the chosen (liked) game
lso added funtionality for user to "unlike" a game
more functionality is needed to only allow the user to vote once and on only one item.*/

// select different elements with given IDs
const form = document.querySelector("#like-form");
const select = document.querySelector("#hobby-select");
const likeButton = document.querySelector("#like-button");
const unlikeButton = document.querySelector("#unlike-button");

// click event listener to the like button variable.
likeButton.addEventListener("click", function (event) {
  // prevent form submission
  event.preventDefault();
  const selectedHobbyId = select.value;
  const selectedHobby = document.querySelector(`#${selectedHobbyId}`);
  // create a span item and set the inner HTML to the chceckmark emoji
  const tick = document.createElement("span");
  tick.innerHTML = "✅";
  selectedHobby.appendChild(tick);
});

// similar to the likebutton event above
unlikeButton.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedHobbyId = select.value;
  const selectedHobby = document.querySelector(`#${selectedHobbyId}`);
  const tick = selectedHobby.querySelector("span");
  selectedHobby.removeChild(tick);
});

// ####################### Comment Section ########################

// Get reference to the form elements
const commentBox = document.querySelector("textarea.form-control");
const submitBtn = document.querySelector("button.submit-button");

// Attach click event listener to the submit button
submitBtn.addEventListener("click", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Show an alert to the user
  alert("Comment received!");

  // Clear the comment box
  commentBox.value = "";
});

// ####################### Contact Me ##########################
// Some functionality added but no real results getting as I need a database to store messages.

// Get the form element
const contactForm = document.getElementById("contact-form");
// Get the submit button
const submitButton = document.getElementById("submit-btn");
// Add submit event listener to the form
contactForm.addEventListener("submit", (e) => {
  // Prevent default form submit behavior
  e.preventDefault();
  // Validate form inputs
  // If all inputs are valid, submit the form
  form.submit();
});
