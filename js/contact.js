// Send Email --------------------------------------
// Clicking on send message button, 
// send form from input email to receiver's email.
// Meanwhile telling customer that message has been sent succesfully.
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "youGmailID",
        Password : "password",
        To : 'receiverEmail@example.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById('fName').value
            + " " + document.getElementById('lName').value 
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Message: " + document.getElementById('message').value

    }).then(
      message => alert("Message Sent Successfully")
    );

    const successMessage = document.getElementById('success');
    successMessage.textContent = 'Send Successfully';
}