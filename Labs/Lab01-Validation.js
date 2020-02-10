// alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed) 

function validateTxtName() {
//    const originalError = document.getElementById("txtNameSpan");
   
    if (document.getElementById("txtName").value != "") {
        if (!(isNaN(document.getElementById("txtName").value))) {
            document.getElementById("txtName").className = "error span6";
            document.getElementById("txtNameSpan").style.display = "inline";
            document.getElementById("txtNameSpan").innerText = "Name can't be a number!";
        } else {
            document.getElementById("txtName").className = "valid span6";
            document.getElementById("txtNameSpan").style.display = "none";
        }
    } else {
        document.getElementById("txtName").className = "error span6";
        document.getElementById("txtNameSpan").style.display = "inline";
        // document.getElementById("txtNameSpan") = originalError.textContent;
    }
    

}

function validateTxtAge() {
    if (document.getElementById("txtAge").value != "" && document.getElementById("txtAge").value < 1) {
        document.getElementById("txtAge").className = "error span6";
        document.getElementById("txtAgeSpan").style.display = "inline";
        document.getElementById("txtAgeSpan").innerText = "Age can't be smaller than 1!";
    } else if (document.getElementById("txtAge").value != "" && document.getElementById("txtAge").value > 120) {
        document.getElementById("txtAge").className = "error span6";
        document.getElementById("txtAgeSpan").style.display = "inline";
        document.getElementById("txtAgeSpan").innerText = "Age not valid";
    } else if (isNaN(document.getElementById("txtAge").value)) {
        document.getElementById("txtAge").className = "error span6";
        document.getElementById("txtAgeSpan").style.display = "inline";
        document.getElementById("txtAgeSpan").innerText = "Age must be a number!";
    } else {
        document.getElementById("txtAge").className = "valid span6";
        document.getElementById("txtAgeSpan").style.display = "none";
    }
    

}
//add email validation!
function validateTxtEmail() {
    if (document.getElementById("txtEmail").value != "") {
        if (!(isNaN(document.getElementById("txtEmail").value))) {
            document.getElementById("txtEmail").className = "error span6";
            document.getElementById("txtEmailSpan").style.display = "inline";
        } else {
            document.getElementById("txtEmail").className = "valid span6";
            document.getElementById("txtEmailSpan").style.display = "none";
        }
    } else {
        document.getElementById("txtEmail").className = "error span6";
        document.getElementById("txtEmailSpan").style.display = "inline";
    }

}

function validateTxtPassword() {
    if (document.getElementById("txtPassword").value != "") {
        if (document.getElementById("txtPassword").value.length < 6) {
            document.getElementById("txtPassword").className = "error span6";
            document.getElementById("txtPasswordSpan").style.display = "inline";
            document.getElementById("txtPasswordSpan").innerText = "Password has to be at least 6 characters";
        } else {
            document.getElementById("txtPassword").className = "valid span6";
            document.getElementById("txtPasswordSpan").style.display = "none";
        }
    } else {
        document.getElementById("txtPassword").className = "error span6";
        document.getElementById("txtPasswordSpan").style.display = "inline";
    }

}

function validateTxtRepeatPassword() {
    if (document.getElementById("txtRepeatPassword").value != "") {
        if (document.getElementById("txtRepeatPassword").value != document.getElementById("txtPassword").value) {
            document.getElementById("txtRepeatPassword").className = "error span6";
            document.getElementById("txtRepeatPasswordSpan").style.display = "inline";
            document.getElementById("txtRepeatPasswordSpan").innerText = "Password doesn't match!";
        } else {
            document.getElementById("txtRepeatPassword").className = "valid span6";
            document.getElementById("txtRepeatPasswordSpan").style.display = "none";
        }
    } else {
        document.getElementById("txtRepeatPassword").className = "error span6";
        document.getElementById("txtRepeatPasswordSpan").style.display = "inline";
    }

}

function validateTxtIdCode() {
    if (document.getElementById("txtIdCode").value != "" && isNaN(document.getElementById("txtIdCode").value)) {
        document.getElementById("txtIdCode").className = "error span6";
        document.getElementById("txtIdCodeSpan").style.display = "inline";
    } else if (document.getElementById("txtIdCode").value != "" && document.getElementById("txtIdCode").value.length != 11) {
        document.getElementById("txtIdCode").className = "error span6";
        document.getElementById("txtIdCodeSpan").style.display = "inline";
        document.getElementById("txtIdCodeSpan").innerText = "Not a valid ID-code!";
    } else {
        document.getElementById("txtIdCode").className = "valid span6";
        document.getElementById("txtIdCodeSpan").style.display = "none";
    }
}

function validateTxtEvenNumber() {
    if (document.getElementById("txtEvenNumber").value != "" && isNaN(document.getElementById("txtEvenNumber").value)) {
        document.getElementById("txtEvenNumber").className = "error span6";
        document.getElementById("txtEvenNumberSpan").style.display = "inline";
        document.getElementById("txtEvenNumberSpan").innerText = "Has to be a number";
    } else if (document.getElementById("txtEvenNumber").value != "" && parseInt(document.getElementById("txtEvenNumber").value) % 2 != 0) {
        // check if number % 2 equals = 0 => it's EVEN!
        document.getElementById("txtEvenNumber").className = "error span6";
        document.getElementById("txtEvenNumberSpan").style.display = "inline";
        document.getElementById("txtEvenNumberSpan").innerText = "This number is not even";
    } else {
        document.getElementById("txtEvenNumber").className = "valid span6";
        document.getElementById("txtEvenNumberSpan").style.display = "none";
    }
}

function validateTxtCreditCard() {
    if (document.getElementById("txtCreditCard").value != "" && isNaN(document.getElementById("txtCreditCard").value)) {
        document.getElementById("txtCreditCard").className = "error span6";
        document.getElementById("txtCreditCardSpan").style.display = "inline";
        document.getElementById("txtCreditCardSpan").innerText = "Has to be a number";
    } else if (document.getElementById("txtCreditCard").value != "" && document.getElementById("txtCreditCard").value.length != 16) {
        document.getElementById("txtCreditCard").className = "error span6";
        document.getElementById("txtCreditCardSpan").style.display = "inline";
        document.getElementById("txtCreditCardSpan").innerText = "Should have inserted 16 numbers";
    } else {
        document.getElementById("txtCreditCard").className = "valid span6";
        document.getElementById("txtCreditCardSpan").style.display = "none";
    }
}

function validateTxtIsbn() {
    if (document.getElementById("txtIsbn").value != "" && isNaN(document.getElementById("txtIsbn").value)) {
        document.getElementById("txtIsbn").className = "error span6";
        document.getElementById("txtIsbnSpan").style.display = "inline";
        document.getElementById("txtIsbnSpan").innerText = "Has to be a number";
    } else if (document.getElementById("txtIsbn").value != "" && document.getElementById("txtIsbn").value.length != 13) {
        document.getElementById("txtIsbn").className = "error span6";
        document.getElementById("txtIsbnSpan").style.display = "inline";
        document.getElementById("txtIsbnSpan").innerText = "Should have inserted 13 numbers";
    } else {
        document.getElementById("txtIsbn").className = "valid span6";
        document.getElementById("txtIsbnSpan").style.display = "none";
    }
}

function validateSubmission() {
    validateTxtName();
    validateTxtAge();
    validateTxtEmail();
    validateTxtPassword();
    validateTxtRepeatPassword();
    validateTxtIdCode();
    validateTxtEvenNumber();
    validateTxtCreditCard();
    validateTxtIsbn();
    // save button - check all forms one more time!

}


