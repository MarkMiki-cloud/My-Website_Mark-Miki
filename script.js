// Filter Templates by Type
function filterTemplates() {
  const filter = document.getElementById("filterSelect").value;
  const cards = document.querySelectorAll(".category-card");
  cards.forEach(card => {
    if (filter === "all" || card.classList.contains(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Search Templates
function searchTemplates() {
  // Your search functionality goes here
  alert("Searching templates..."); // Example functionality
}

// Function to change button color randomly
function randomColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
  const button = document.querySelector('.animated-search-button');
  button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Change the color every 500ms
setInterval(randomColor, 500);




// // Show Preview Modal with Download Link
function showPreview(templateName) {
  document.getElementById("previewModal").style.display = "flex";
  document.getElementById("templateTitle").textContent = templateName;
  document.getElementById("templateDescription").textContent = 
    "This is a preview for " + templateName + ". Click download to get started!";

  // Set download link based on template name
  let downloadLink = document.getElementById("downloadLink");
  switch (templateName) {
    case 'Word Template 1':
      downloadLink.href = "downloads/word-template-1.docx"; // Path to Word template
      break;
    case 'Excel Template 1':
      downloadLink.href = "downloads/excel-template-1.xlsx"; // Path to Excel template
      break;
    case 'PowerPoint Template 1':
      downloadLink.href = "downloads/powerpoint-template-1.pptx"; // Path to PowerPoint template
      break;
    default:
      downloadLink.href = "#"; // Default or error case
  }
}


// Close Preview Modal
function closePreview() {
  document.getElementById("previewModal").style.display = "none";
}







