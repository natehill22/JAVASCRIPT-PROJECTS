function validateForm() { //Creating variables that pull in the values given by the user in the HTML form
    let firstname = document.forms["contactForm"]["firstname"].value;
    let lastname = document.forms["contactForm"]["lastname"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phonenum = document.forms["contactForm"]["PhoneNumber"].value;

    let isValid = true;

    //Hides error messages so that they only show upon the proper conditions
    document.getElementById('error1').textContent = '';
    document.getElementById('error2').textContent = '';
    document.getElementById('error3').textContent = '';
    document.getElementById('error4').textContent = '';

    
    if (firstname === "") { //Empty field validation for the firstname field
          document.getElementById('error1').textContent = 'First name cannot be empty.';
          isValid = false;
    }
    if (lastname === "") { //Empty field validation for the lastname field
        document.getElementById('error2').textContent  = 'Last name cannot be empty.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regex character sequence that ensures that an email format must be given
    if (!emailRegex.test(email)) {
        document.getElementById('error3').textContent = 'Email needs proper formatting.';
        isValid = false;
    }
    
    const phonenumRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; //Regex character sequence that ensures that an phone number format must be given
    if (!phonenumRegex.test(phonenum)) {
        document.getElementById('error4').textContent = 'Phone Number needs proper formatting.';
        isValid = false;
    }

    if (email === "") { //Empty field validation for the email field. These two are placed below to correct the order of operations in error messaging--I want the empty field validations to show before incorrect formatting ones upon a blank input (even though blank matches an incorrect format)
        document.getElementById('error3').textContent = 'Email cannot be empty.';
        isValid = false;
    }
    if (phonenum === "") { //Empty field validation for the phone number field
        document.getElementById('error4').textContent = 'Phone Number cannot be empty.';
        isValid = false;
    }
        return isValid;
}