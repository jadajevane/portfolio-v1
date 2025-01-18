export default function setupScrollBtn() {
    const backToTopButton = document.getElementById("backToTop");
    if (!backToTopButton) {
        console.error("Button with ID 'backToTop' not found");
        return;
    }
    
    console.log("Back to top button found");
    
    window.addEventListener("scroll", function () {
        const heroHeight = 450;
        const scrollTop = window.scrollY;
        
        if (scrollTop > heroHeight) {
            console.log("Showing back to top button");
            backToTopButton.style.display = "block";
        } else {
            console.log("Hiding back to top button");
            backToTopButton.style.display = "none";
        }
    });
    
    backToTopButton.addEventListener("click", function () {
        console.log("Back to top button clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
