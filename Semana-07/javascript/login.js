window.onload = function () {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('btn-login');
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    email.addEventListener('blur', function() {
        validation(email);
    });

    email.addEventListener('focus', function() {
        reset(email);
    })

    password.addEventListener('blur', function() {
        validation(password);
    });

    password.addEventListener('focus', function() {
        reset(password);
    })
    
    function validation (type) {
        if (type == email) {
            if (checkInput(email)) {
                return 'Email field incomplete';
            } else if (!emailFormat.test(email.value)){
                showError(email,'Please insert a valid email.');
                return 'Invalid email';
            } else {
                return '';
            };
        } else {
            if (checkInput(password)) {
                return 'Password field incomplete';
            } else if (!formatValidator(password.value) || !isNaN(password.value) || isASymbol(password.value)){
                showError(password,'Please insert a valid password. It must contain numbers and letters.');
                return 'Invalid password';
            } else {
                return '';
            };
        };
    };

    function checkInput (input) {
        if (input.value === '') {
            showError(input,'Please complete this field.');
            return true;
        };
    };

    function formatValidator (string) {
        string = string.split(" ").join("");
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            };
        };
        return (control !== 0);
    };

    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'"+" ";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (symbols.includes(string[i])) {
                    control ++;
            };
        };
        return (control !== 0);
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
   
    function displayError(res) {
        var alertError = [];
        if (res.hasOwnProperty('errors')) {
            Object.entries(res.errors).forEach(element => {
                alertError += '\n' + element[1].msg;
            });
        alert('Sorry, an error has occurred. Please check this items: '+alertError);
        } else {
            alert('Sorry, an error has occurred: '+ res.msg);
        };
    };

    button.addEventListener('click', function(e){
        e.preventDefault();
        validation(email);
        validation(password);
        if (validation(email) == '' && validation(password) == '') {
            alert('Succesful login! \n Email: '+email.value+'\n Password: '+password.value);
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value
            + '&password=' + password.value)
            .then(function (response) {
                return response.json()
            })
            .then(function (jsonResponse) {
                if (jsonResponse.success) {
                    alert('The request was successful: '+jsonResponse.msg)
                } else {
                throw jsonResponse
                }
            })
            .catch(function (error) {
                displayError(error);
            });
        } else {
            alert('An error has ocurred. Please enter the data correctly.'+'\n'+validation(email) +'\n'+ validation(password));
        };

    });
}