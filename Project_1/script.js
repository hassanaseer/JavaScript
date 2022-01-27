// Retriving HTML elements from the DOM
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Function to update class and message for error
function showError(input, message){
    // Get the parent element of the input feild from HTML (.form-control)
    const formControl = input.parentElement;
    // replace the class - add error
    formControl.className = 'form-control error';
    // get the small element for the error message 
    const small = formControl.querySelector('small');
    // replace the text for the small element using the input message
    small.innerText = message;
}

// Function to update class for success

function showSuccess (input){
    // Get the parent element of the input feild from HTML (.form-control)
    const formControl = input.parentElement;
    // replace the class - add success
    formControl.className = 'form-control Success';

}

// Event Listners
// Create event listner for submit button
form.addEventListener('submit', function(e) {
    // Stop page from reloding on submit
    e.preventDefault();
    
    // check if username input is empty
    if(userName.value === ''){
        showError(userName, 'User Name is Required');

    } else {
        showSuccess(userName)
    }

    if(email.value === ''){
        showError(email, 'Email is Required');

    } else {
        showSuccess(email)
    }
    if(password.value === ''){
        showError(password, 'Password is Required');

    } else {
        showSuccess(password)
    }

    if(password2.value === ''){
        showError(password2, 'Password is Required');

    } else {
        showSuccess(password2)
    }

    
});
