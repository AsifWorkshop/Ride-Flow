
const form = document.querySelector("form");

if (form) {
    console.log('Form Validation Connected !');

    form.addEventListener("submit", function (event) {
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value.trim();
        const role = document.getElementById("role").value;
        const status = document.getElementById("status").value;
        const employeeId = document.getElementById("employee_id").value.trim();
        const department = document.getElementById("department").value;
        const shift = document.getElementById("shift").value;
        const experience = document.getElementById("experience").value;
        const officeLocation = document.getElementById("office_location").value.trim();
        const accessLevel = document.getElementById("access_level").value;

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


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            errors.push("Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.");
        }



        const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
        if (phone === "") {
            errors.push("Phone Number is required.");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Please enter a valid phone number (at least 10 digits).");
        }


        if (role === "") {
            errors.push("Please select a valid user role.");
        }


        if (status === "") {
            errors.push("Please select an account status.");
        }


        if (employeeId === "") {
            errors.push("Employee ID is required.");
        }


        if (department === "") {
            errors.push("Please select a department.");
        }


        if (shift === "") {
            errors.push("Please select a work shift.");
        }


        if (experience === "" || isNaN(experience)) {
            errors.push("Experience level must be a valid number.");
        } else {
            const expNum = parseInt(experience, 10);
            if (expNum < 0 || expNum > 40) {
                errors.push("Experience level must be between 0 and 40 years.");
            }
        }


        if (officeLocation === "") {
            errors.push("Office Location/Station is required.");
        }


        if (accessLevel === "") {
            errors.push("Please select a security clearance level.");
        }


        if (errors.length > 0) {
            event.preventDefault();
            alert("Please correct the following errors:\n\n- " + errors.join("\n- "));
        }
    });
}