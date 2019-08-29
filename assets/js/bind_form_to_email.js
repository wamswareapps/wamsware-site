
const button = 
document.querySelector('sendMessageButton');

button.addEventListener('click', bind_form_to_email);

function bind_form_to_email() {
  
    // alert("bind_form_to_email was called")
    
    var message = document.getElementById("message").value; 
    
    var email = "wamswarecontact@gmail.com"; 

    var subject = document.getElementById("name").value); 

    document.call.action = "mailto:"+email+"?subject="+subject.replace(" ","%20")+"?body="+message.replace(" ","_"); 
    
    // alert("bind_form_to_email was called: " + email + " " + subject + " " + message);
}