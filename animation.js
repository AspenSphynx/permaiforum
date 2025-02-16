document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    const cards = document.querySelector(".cards");

    if (!banner || !cards) {
        console.error("Banner or cards element not found!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            // At the top → Expand banner & increase margin for cards
            banner.classList.remove("shrink");
            cards.classList.remove("shrink-margin");
        } else {
            // Scrolling down → Shrink banner & reduce margin for cards
            banner.classList.add("shrink");
            cards.classList.add("shrink-margin");
        }
    });
});
