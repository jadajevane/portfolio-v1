export function setupProgress() {
  console.log("setupProgress is running");

  document.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const progress = (scrollTop / scrollHeight) * 100;

      progressBar.style.width = `${progress}%`;
    } else {
      console.warn("Progress bar element not found.");
    }
  });
}
