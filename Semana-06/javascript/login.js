window.onload = function () {
    var email = document.querySelector('input[type="email"]');
    var password = document.querySelector('input[type="password"]');
    var button = document.getElementById('btn-login');
    var passwordFormat = /(?=.*[a-z])(?=.*[0-9])/;
    var emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    email.addEventListener('blur', () => {
        validation(email);
    });

    email.addEventListener('focus', () => {
        reset(email);
    })

    password.addEventListener('blur', () => {
        validation(password);
    });

    password.addEventListener('focus', () => {
        reset(password);
    })
    
    function validation (type) {
        if (type == email) {
            if (email.value === '') {                
                showError(email,'Please insert an email');
                return true;
            };
            if (!emailFormat.test(email.value)){               
                showError(email,'Please insert a valid email');
                return true;
            };
        } else {       
            if (password.value == '') {                
                showError(password,'Please insert a password');
                return true;
            }; 
            if (!passwordFormat.test(password.value)){                
                showError(password,'Please insert a valid password. It must contain numbers and letters');
                return true;
            };
        };
    };

    function showError (input,message) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        text.textContent = message;
        container.className = 'status-control error';
    }

    function reset (input) {
        var container = input.parentElement;
        container.className = 'status-control';
    }
   
    button.addEventListener('click',function(e){
        e.preventDefault();
        validation(email);
        validation(password);

        if (validation(email) || validation(password)) {
            alert('Please enter data correctly.');
        } else {
            alert('Login succesfully! \n Email: '+email.value+'\n Password: '+password.value);
        }
    });
}