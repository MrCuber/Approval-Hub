// form label and placeholder animations
const contactInputs = document.querySelectorAll('.contact-input');

function labelActive()
{
    this.previousElementSibling.classList.add('contact-label-active');
    this.removeAttribute('placeholder');
}

function labelInactive()
{
    if(this.value.length === 0)
    {
        this.previousElementSibling.classList.remove('contact-label-active'); 
    }
    this.setAttribute('placeholder', this.previousElementSibling.innerHTML);
}

contactInputs.forEach(input => {
    input.addEventListener('focus', labelActive);
    input.addEventListener('blur', labelInactive);  
}); 


// page slide out animation and confirmation
const page = document.querySelector('#contact-form');
const contactForm = page.querySelector('form');
const sendBtn = page.querySelector('#send-btn');
const envelope = document.querySelector('.env-body');
const note = document.querySelector('.note');

function sendMailer(e)
{
    e.preventDefault();
    page.classList.add('form-sent');
    envelope.classList.add('confirm-active');
    note.innerHTML = "Your request is<br><span class='bigger'>on its way!</span>";
}

contactForm.addEventListener('submit', sendMailer);

function selectRole(role)
{
    document.getElementsByClassName('requests').classList.remove('active');
    document.getElementsByClassName('status').classList.remove('active');
    document.getElementsByClassName('active').classList.remove('active');

    document.getElementsByClassName(role + '-link').classList.add('active');
}