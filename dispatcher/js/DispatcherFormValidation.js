const form = document.querySelector("form");

if (form) {
    console.log("Dispatcher Form Validation Connected !");

    form.addEventListener("submit", function (event) {
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        const employeeId = document.getElementById("employee_id").value.trim();
        const department = document.getElementById("department").value;
        const shift = document.getElementById("shift").value;
        const experience = document.getElementById("experience").value;
        const terms = document.getElementById("terms").checked;

        let errors = [];

        
        if (name === "") {
            errors.push("Full Name is required.");
        }

        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            errors.push("Email Address is required.");
        } else if (!emailRegex.test(email)) {
            errors.push("Please enter a valid email address.");
        }

       
        const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
        if (phone === "") {
            errors.push("Phone Number is required.");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Please enter a valid phone number (10-15 digits).");
        }

        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password === "") {
            errors.push("Account Password is required.");
        } else if (!passwordRegex.test(password)) {
            errors.push("Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.");
        }

        
        if (confirmPassword === "") {
            errors.push("Please confirm your password.");
        } else if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }

        
        if (employeeId === "") {
            errors.push("Proposed Employee ID is required.");
        }

       
        if (department === "") {
            errors.push("Please select a preferred department/operations unit.");
        }

        
        if (shift === "") {
            errors.push("Please select a shift preference.");
        }

        
        if (experience === "" || isNaN(experience)) {
            errors.push("Years of experience must be a valid number.");
        } else {
            const expNum = parseInt(experience, 10);
            if (expNum < 0 || expNum > 40) {
                errors.push("Experience must be between 0 and 40 years.");
            }
        }

        
        if (!terms) {
            errors.push("You must certify the details and agree to RideFlow Operational Guidelines.");
        }

        
        if (errors.length > 0) {
            event.preventDefault();
            alert("Please correct the following errors:\n\n- " + errors.join("\n- "));
        }
    });
}