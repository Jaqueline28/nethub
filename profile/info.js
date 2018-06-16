document.querySelectorAll('#info .item label').forEach(label => {
    var input = document.querySelector('#'+label.getAttribute('for'));

    if(input.id !== 'bioinfo'){

        
        input.value = "";
        
        input.oninput = () => {
            input.setAttribute('value', input.value);
            
        };
        
        input.onfocus = () => {
            label.classList.add('focus-input');
            
        };
        
        input.addEventListener('focusout', () =>{
            
            if(input.value === ""){
                label.classList.remove('focus-input');
            }
        });
    }
});