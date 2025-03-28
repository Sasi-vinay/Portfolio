// Simple scroll-to-top functionality
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "Scroll to Top";
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.padding = "10px 15px";
    scrollTopBtn.style.backgroundColor = "#333";
    scrollTopBtn.style.color = "#fff";
    scrollTopBtn.style.border = "none";
    scrollTopBtn.style.cursor = "pointer";
    scrollTopBtn.style.display = "none";
    document.body.appendChild(scrollTopBtn);

    // Show/Hide button based on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
