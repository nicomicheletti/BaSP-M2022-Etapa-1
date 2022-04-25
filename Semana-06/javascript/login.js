window.onload = function () {
    var email = document.querySelector('input[type="email"]');
    var password = document.querySelector('input[type="password"]');
    var button = document.getElementById('btn-login');
    var passwordFormat = /(?=.*[a-z])(?=.*[0-9])/;
    var emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    email.addEventListener('blur', () => {
        // email validation
        validation(email);
    });

    email.addEventListener('focus', () => {
        //reset properties
        reset(email);
    })

    password.addEventListener('blur', () => {
        // password validation
        validation(password);
    });

    password.addEventListener('focus', () => {
        //reset properties
        reset(password);
    })
    
    // function validation
    function validation (type) {
        if (type == email) {
            if (email.value === '') {
                //show error with message
                showError(email,'Please insert an email');
                return true;
            };
            if (!emailFormat.test(email.value)){
                //show error with message
                showError(email,'Please insert a valid email');
                return true;
            };
        } else {       
            if (password.value == '') {
                //show error with message
                showError(password,'Please insert a password');
                return true;
            }; 
            if (!passwordFormat.test(password.value)){
                //show error with message
                showError(password,'Please insert a valid password. It must contain numbers and letters');
                return true;
            };
        };
    };

    function showError (input,message) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        //add error message
        text.textContent = message;
        //add error class
        container.className = 'status-control error';
    }

    function reset (input) {
        var container = input.parentElement;
        //reset class name
        container.className = 'status-control';
    }
   
    //Button login functionality
    button.addEventListener('click',function(e){
        e.preventDefault();
        //run the validations
        validation(email);
        validation(password);
        //alerts in case of error or success
        if (validation(email) || validation(password)) {
            alert('An error has ocurred. Please enter the data correctly.');
        } else {
            alert('All the info submitted succesfully! \n Email: '+email.value+'\n Password: '+password.value);
        }
    });
}