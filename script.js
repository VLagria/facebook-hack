// Set the duration for the progress to complete (in milliseconds)
const duration = 5000; // 5 seconds

// Function to update the progress bar
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  
  let startTime = Date.now();
  
  function update() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min((elapsedTime / duration) * 100, 100);
    
    progressBar.style.width = progress + "%";
    progressText.textContent = Math.floor(progress) + "%";
    
    if (progress < 100) {
      requestAnimationFrame(update);
    } else {
      // Redirect to another page when progress is complete
      window.location.href = "main.html";
    }
  }
  
  update();
}

// Start the progress bar when the page loads
window.onload = updateProgress;
