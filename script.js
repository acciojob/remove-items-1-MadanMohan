// Get the dropdown
const select = document.getElementById("colorSelect");

// Get the button (first input of type button)
const button = document.getElementsByTagName("input")[0];

// Add click event to the button
button.addEventListener("click", () => {
  // Find the selected option
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex); // remove that option
  }
});
