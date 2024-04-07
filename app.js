function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }


    const serviceID = "service_2btdkx1";
    const templateID = "template_tgfd3cr";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Email sent!!")
            }
        ).catch(err => console.log(err))
}


