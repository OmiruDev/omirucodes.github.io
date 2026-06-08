/*=============== EMAILJS INITIALIZATION ===============*/
(function() {
    emailjs.init("Lhp-T8HWK2eYiSFGO"); 
})();

/*=============== FORM SUBMISSION LOGIC ===============*/
// Wait until the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // This is the line that stops the ?user_name=... in the URL
            event.preventDefault(); 

            // Sends the data
            emailjs.sendForm('service_y3cbi8o', 'template_nhuhmai', this)
                .then(() => {
                    alert('Message sent successfully! 💙');
                    contactForm.reset();
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('Oops! Something went wrong. Please try again.');
                });
        });
    } else {
        console.error("Could not find element with id 'contact-form'");
    }
});