import throttle from 'lodash.throttle';

const formData = {};

let refs ={
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
}
refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

populateOnFormInput();

function formSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

    console.clear();
    console.log(formData);

}
function formInput(event){
    formData[event.target.name]=event.target.value; 
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function populateOnFormInput(){
    let savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedMessage && Object.values !== []){
        refs.email.value = savedMessage.email;
        refs.message.value = savedMessage.message;
        formData.email = savedMessage.email;
        formData.message = savedMessage.message;
        console.log(savedMessage);
    }
    else {
        formData.email = '';
        formData.message = '' ;
    }
}