const form = document.querySelector("form");

if (form) {
    console.log("Login Form Validation Connected !");

    form.addEventListener("submit", function (event) {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const loginMessage = document.getElementById("login-message");

        let errors = [];

        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            errors.push("Email address is required.");
        } else if (!emailRegex.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        
        if (password === "") {
            errors.push("Password is required.");
        }

        
        if (errors.length > 0) {
            event.preventDefault();
            
            
            if (loginMessage) {
                loginMessage.style.color = "#d9534f";
                loginMessage.textContent = errors[0]; 
            } else {
                alert("Please correct the following errors:\n\n- " + errors.join("\n- "));
            }
        }
    });
}