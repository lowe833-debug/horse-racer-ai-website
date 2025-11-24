document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#beta-signup-form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Custom email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Custom phone validation (optional field)
    function isValidPhone(phone) {
        if (!phone) return true; // Optional field
        const phoneRegex = /^\+?[\d\s-()]+$/;
        return phoneRegex.test(phone);
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        
        let feedback = formControl.querySelector('.invalid-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            formControl.appendChild(feedback);
        }
        feedback.textContent = message;
        
        // Add shake animation
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 820);
    }

    function showSuccess(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }

    // Real-time validation
    form.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
    });

    function validateField(input) {
        const value = input.value.trim();
        
        switch(input.id) {
            case 'name':
                if (value === '') {
                    showError(input, 'Name is required');
                } else if (value.length < 2) {
                    showError(input, 'Name must be at least 2 characters');
                } else {
                    showSuccess(input);
                }
                break;
                
            case 'email':
                if (value === '') {
                    showError(input, 'Email is required');
                } else if (!isValidEmail(value)) {
                    showError(input, 'Please enter a valid email address');
                } else {
                    showSuccess(input);
                }
                break;
                
            case 'phone':
                if (value !== '' && !isValidPhone(value)) {
                    showError(input, 'Please enter a valid phone number');
                } else {
                    showSuccess(input);
                }
                break;
                
            case 'reason':
                if (value === '') {
                    showError(input, 'Please tell us why you want to join the beta');
                } else if (value.length < 10) {
                    showError(input, 'Please provide more details (at least 10 characters)');
                } else {
                    showSuccess(input);
                }
                break;
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        form.querySelectorAll('.form-control').forEach(input => {
            validateField(input);
            if (input.classList.contains('is-invalid')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            submitButton.classList.add('shake');
            setTimeout(() => submitButton.classList.remove('shake'), 820);
            return;
        }

        // Prepare the data for API
        const formData = {
            name: form.querySelector('#name').value.trim(),
            email: form.querySelector('#email').value.trim(),
            device: form.querySelector('#device').value,
            experience: form.querySelector('#experience').value,
            agreeTesting: form.querySelector('#agreeTesting').checked,
            agreeUpdates: form.querySelector('#agreeUpdates')?.checked || false
        };

        // Show loading state
        submitButton.disabled = true;
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing up...';
        
        // Submit to API
        fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json().then(data => ({ status: response.status, data })))
        .then(({ status, data }) => {
            if (status === 201) {
                // Success - redirect to thank you page
                window.location.href = 'thank-you.html';
            } else if (status === 409) {
                // Duplicate email
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                showError(form.querySelector('#email'), 'This email has already been registered');
            } else {
                // Other error
                throw new Error(data.error || 'Unknown error');
            }
        })
        .catch(error => {
            console.error('Signup error:', error);
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            alert('❌ Error signing up. Please make sure the server is running and try again.');
        });
    });
});