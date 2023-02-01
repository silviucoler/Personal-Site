// SORRY if I did not understand the first 4 bulletpoints of the PDF files. To me it seems like you wanted to be able to save specific items on my main web page, into a separatate folder (Website) which is what I did. Hopefully this is fine.

// Code to listen for a click event on all elements with the class .save-btn
const saveBtns = document.querySelectorAll(".save-btn");
saveBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Get the hobby name from the clicked element and remove the ❤️ emoji
    const hobby = event.target.parentElement.textContent.replace("❤️", "");
    let savedItems = JSON.parse(localStorage.getItem("hobbies")) || [];
    // check if the hobby has been saved. Show an alert if it has and do not save it again.
    if (savedItems.includes(hobby)) {
      alert(`You have already saved ${hobby}!`);
      return;
    }
    savedItems.push(hobby);
    // If the hobby has not been saved, save it to local storage
    localStorage.setItem("hobbies", JSON.stringify(savedItems));
    alert(
      `You have saved ${hobby}. You now have ${savedItems.length} items saved.`
    );
  });
});

// Get the saved hobby from local storage and display it on the page
const savedItems = JSON.parse(localStorage.getItem("hobbies")) || [];
const itemContainer = document.querySelector("#item-list");
savedItems.forEach((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;
  itemContainer.appendChild(li);
});

// Function to delte saved items
// More functionality needed
function deleteItems() {
  localStorage.clear();
  itemContainer.innerHTML = "";
}
