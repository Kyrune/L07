function regexChecker() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var regex = /^\b[A-Z][a-z]+$/;

    if (firstName.match(regex) && lastName.match(regex)) {
        alert('Yay! Your inputs were all correct!');
    }
    else {
        alert('Oh no! Thats an invalid format!');
    }
}