document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(formData); 
    });