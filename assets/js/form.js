
/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 * emailjs.init('ojZj8ZhHGIGV035IG');
emailjs.sendForm('contact_service', 'contact_form', this)
 */
 const btn = document.getElementById('submit');

 document.getElementById('email-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.init('ojZj8ZhHGIGV035IG');
 
    btn.value = 'Sending...';
 
    const serviceID = 'service_hzus4au';
    const templateID = 'contact_form';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send';
       alert('Thank you for your feedback!')
       
     }, (err) => {
       btn.value = 'Send';
       alert(JSON.stringify(err));
     });
 });