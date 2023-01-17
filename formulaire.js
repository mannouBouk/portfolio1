function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        téléphone: document.getElementById("téléphone").value,
        message: document.getElementById("message").value,

    };
}


emailjs
    .send("service_118fkr9","template_ey55xry", params)
    .then( function(res){
        alert("your message sent successfuly");
    })
    