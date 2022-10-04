
/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
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
       document.getElementById('email-form').reset();
       
      thankYou();
       
     }, (err) => {
       btn.value = 'Send';
       alert(JSON.stringify(err));
     });
 });

 function thankYou() {
    let message = `
      <div class = 'thank-you'>
        <img src="/assets/images/spock_thanks.webp" alt = "Spock giving the Vulcan salute">
        <p>Thank you for your feedback!<br>May you live long and prosper!</p>
      </div>
      <form id ="form-home">
        <button id ="home" class="btn btn--sec" type="submit" formaction="index.html">Home</button>
      </form>`;

      document.getElementById('form-area').innerHTML = message;
 }