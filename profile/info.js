document.querySelectorAll('#info .item label').forEach(label => {
    var input = document.querySelector('#' + label.getAttribute('for'));

    if (input.id !== 'bioinfo') {


        input.value = "";

        input.oninput = () => {
            input.setAttribute('value', input.value);

        };

        input.onfocus = () => {
            label.classList.add('focus-input');

        };

        input.addEventListener('focusout', () => {

            if (input.value === "") {
                label.classList.remove('focus-input');
            }
        });
    }
});


var passwordConfirm = document.querySelector('#password-confirm');

passwordConfirm.disabled = 'disabled';

var password = document.querySelector('#password');

password.oninput = () => {
    passwordConfirm.removeAttribute('disabled');
    if(password.value === ""){
        console.log('a');
        passwordConfirm.value = "";   
        passwordConfirm.disabled = 'disabled';

        return;
    }
    
    if(passwordConfirm.value !== password.value){
        passwordConfirm.classList.add('incorrect');
    }else{
        passwordConfirm.classList.remove('incorrect');
    }

}
passwordConfirm.oninput = function(){
    if(passwordConfirm.value !== password.value){
        passwordConfirm.classList.add('incorrect');
    }else{
        passwordConfirm.classList.remove('incorrect');
    }
}
