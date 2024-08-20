const catForm = document.getElementById("catForm");
const catImagePreview = document.getElementById("catImagePreview");
const imageUrlInput = document.getElementById("imageUrlInput");
const catImageInput = document.getElementById("catImage");

catForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const catName = document.getElementById("catName").value;
  const catAge = document.getElementById("catAge").value;
  const catDescription = document.getElementById("catDescription").value;
  const catColor = document.getElementById("catColor").value;

  const cat = {
    name: catName,
    age: catAge,
    description: catDescription,
    image: catImageInput.value,
    color: catColor,
  };

  console.log(cat);
});

imageUrlInput.addEventListener("input", (event) => {
  const urlValue = event.target.value;
  catImagePreview.src = urlValue;
});

catImageInput.addEventListener("input", () => {
  imageUrlInput.value = catImageInput.value;
  catImagePreview.src = catImageInput.value;
});
