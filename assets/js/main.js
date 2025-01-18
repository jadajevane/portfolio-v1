import { setupEasterEgg } from "./utils/easterEgg.js";
import { setupSmoothScrolling } from "./utils/smoothScroll.js";
import setupScrollBtn from "./utils/scrollBtn.js";
import { setupProgress } from "./utils/progress.js";

window.addEventListener('load', () => {
    console.log('JS is running');

    setupEasterEgg();
    setupSmoothScrolling();
    setupScrollBtn();
    setupProgress();
});
