document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('.load-more');
    const moreBlogs = document.querySelector('.more-blogs');

    // Hide the extra blog titles initially
    moreBlogs.style.display = 'none';

    // Add event listener to the Load More button
    loadMoreButton.addEventListener('click', () => {
        // Toggle visibility of the extra blog titles
        if (moreBlogs.style.display === 'none') {
            moreBlogs.style.display = 'block';
            loadMoreButton.textContent = 'Show Less'; // Change the button text
        } else {
            moreBlogs.style.display = 'none';
            loadMoreButton.textContent = 'Load More Posts'; // Reset the button text
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to a server

    // Hide the form
    document.querySelector(".contact-form").style.display = "none";

    // Show the confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // You can add more code here to actually send the form data via AJAX if needed!
});


            setTimeout(() => {
                sparkle.remove();
            }, 1000);  // Sparkles disappear after 1 second
        }
    }
});
