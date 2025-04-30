document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // PREVENT FORM FROM SUBMITTING TO SERVER

    // HIDE FORM
    document.querySelector(".contact-form").style.display = "none";

    // SHOW CONFIRMATION MESSAGE 
    document.getElementById("confirmationMessage").style.display = "block";
});

        // CAROUSEL LOGIC
        let currentIndex = 0;
        const slides = document.querySelectorAll('.game-card');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('show', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // INITIALISE CAROUSEL
        showSlide(currentIndex);

        // FILTERING
        function filterGames(category) {
            document.querySelectorAll('.game-item').forEach(game => {
                if (category === 'all' || game.classList.contains(category)) {
                    game.classList.add('show');
                } else {
                    game.classList.remove('show');
                }
            });
        }

        // DEFAULT TO SHOW ALL GAMES
        filterGames('all');


