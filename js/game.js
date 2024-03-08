const button = document.getElementById("draggableButton");

button.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

button.addEventListener("dragend", () => {
  console.log("Button was dropped!");
});