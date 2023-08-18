document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'redoan@gmail.com' && password === 'redoan'){
        window.location.href = 'bank.html'
    }else{
        alert('your so motherfucker you forget a password')
    }
})