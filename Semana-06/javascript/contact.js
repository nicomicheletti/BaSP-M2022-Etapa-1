window.onload = function () {
    var name = document.querySelector('input[type="name"]');
    var email = document.querySelector('input[type="email"]');
    var button = document.getElementById('send-message');
    var nameFormat = /(?=.*[a-z])/;
    var emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    name.addEventListener('blur', () => {
        validation(name);
    });

    name.addEventListener('focus', () => {
        reset(name);
    })

    email.addEventListener('blur', () => {
        validation(email);
    });

    email.addEventListener('focus', () => {
        reset(email);
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
            if (name.value == '') {                
                showError(name,'Please insert your name');
                return true;
            }; 
            if (!nameFormat.test(name.value)){                
                showError(name,'Please insert a valid name');
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
        validation(name);
        validation(email);

        if (validation(email) || validation(name)) {
            alert('Please enter data correctly.');
        } else {
            alert('Message sent succesfully! \n Email: '+email.value+'\n Name: '+name.value);
        }
    });
}