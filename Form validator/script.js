const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passwordag=document.getElementById('passwordag');
function showError(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message; 

}
function showSuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success';
    
}
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }
    else{
        showError(input,'Email not valid');
    }
}
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim()==='')
        {
            showError(input,`${input.id} is required`);

    }
    else{
      showSuccess(input);  
    }
    });

}
function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Password dont match');
    }
    
}
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.id} less than ${min} entered `);
    }
    if(input.value.length>max){
        showError(input,`${input.id} exceeding maximum limit ${max}`);
    }
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,passwordag]);
    checkLength(username,3,15);
    checkLength(password,6,12);
    validateEmail(email);
    checkPassword(password,passwordag);
})