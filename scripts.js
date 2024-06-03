document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can implement your form submission logic here
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });
});



























// Add any necessary JavaScript functionality here
// This can include features such as smooth scrolling, dynamic content loading, etc.

//document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
  //  const navLinks = document.querySelectorAll('nav ul li a');

    //navLinks.forEach(link => {
      //  link.addEventListener('click', function(e) {
        //    e.preventDefault();
          //  const targetId = this.getAttribute('href').substring(1);
            //const targetSection = document.getElementById(targetId);

           // window.scrollTo({
             //   top: targetSection.offsetTop,
               // behavior: 'smooth'
            //});
        //});
  //  });
//});
