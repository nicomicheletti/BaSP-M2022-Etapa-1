window.onload = function(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('comments');
    var options = document.querySelector('select');
    var sendButton = document.getElementById('send-message');
    var resetButton = document.getElementById('btn-reset');

    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    name.addEventListener('blur', function() {
        checkName();
    });

    name.addEventListener('focus', function() {
        reset(name);
    });

    email.addEventListener('blur', function() {
        checkEmail();
    });

    email.addEventListener('focus', function() {
        reset(email);
    });

    message.addEventListener('blur', function() {  
        checkMessage();
    });

    message.addEventListener('focus', function() {
        reset(message);
    });

    function checkInput (input) {
        if (input.value === '') {
            showError(input,'Incomplete fields');
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
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            for(var x=0;x < symbols.length;x++) {
                if (string[i] == symbols[x]) {
                    control ++;
                };
            }
        };
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    function checkName (){
        if (checkInput(name)) {
            return 'Name field incomplete';
        } else if (name.value.length < 3) {
            showError(name,'It must contain at least 3 characters.');
            return 'Name too short.';
        } else if (formatValidator(name.value) || isASymbol(name.value)) {
            showError(name,'Please insert a valid format. It must not contain numbers or symbols.');
            return 'Invalid name format';
        } else {
            return '';
        }
    };

    function checkEmail () {
        if (checkInput(email)) {
            return 'Email field incomplete';
        } else if (!emailFormat.test(email.value)){
            showError(email,'Please insert a valid email.');
            return 'Invalid Email format';
        } else {
            return '';
        };
    };

    function checkMessage(){
        if(checkInput(message)){
            return 'Message field incomplete';
        } else if (message.value.length < 3){
            showError(message,'It must contain at least 3 characters.');
            return 'The message is too short';
        } else if (isASymbol(message.value)){
            showError(message,'Please insert a valid message.');
            return 'Invalid message format';
        } else {
            return '';
        };
    };

    function showError (input,textError) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        text.textContent = textError;
        container.className = 'verification done';
    };

    function reset (input) {
        var container = input.parentElement;
        container.className = 'verification';
    };

    sendButton.addEventListener('click', function(e) {
        e.preventDefault();
        checkName();
        checkEmail();
        checkMessage();
        if (checkName() == '' && checkEmail() == '' && checkMessage()== '') {
            alert('Message sent successfully! \n Name: '+ name.value + '\n Email: '+email.value+'\n Contact area: '+options.value+'\n Message: '+message.value);
        } else {
            alert('An error has ocurred. Please enter the data correctly.'+'\n'+checkName()+'\n'+checkEmail()+'\n'+ checkMessage());
        }
    });

    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        reset(name);
        name.value='';
        reset(email);
        email.value='';
        reset(message);
        message.value='';
    });
}