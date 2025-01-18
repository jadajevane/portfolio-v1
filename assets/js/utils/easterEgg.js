export function setupEasterEgg() {
  let clickCount = 0;
  
  
  const icon = document.getElementById("icon");
  const easterEgg = document.getElementById("easter-egg");
  
  icon.addEventListener("click", () => {
    clickCount += 1;
    console.log("klik" + clickCount);
    if (clickCount === 10) {
      easterEgg.classList.remove("hidden");
      easterEgg.classList.add("block");
      
      clickCount = 0;
      
    }
  });
}