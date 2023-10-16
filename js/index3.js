function SignInBTN(){
        document.getElementById('loginCard').classList.add('d-none');
        document.getElementById('headerRight').classList.add('d-none');
        document.getElementById('SignInCard').classList.remove('d-none');
}

function backToMain(){
    document.getElementById('loginCard').classList.remove('d-none');
    document.getElementById('headerRight').classList.remove('d-none');
    document.getElementById('SignInCard').classList.add('d-none');
    document.getElementById('ForgotMyPasswordCard').classList.add('d-none');
}

function ForgotMyPasswordBTN(){
    document.getElementById('loginCard').classList.add('d-none');
    document.getElementById('headerRight').classList.add('d-none');
    document.getElementById('ForgotMyPasswordCard').classList.remove('d-none');   
}