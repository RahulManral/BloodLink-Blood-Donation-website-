document.getElementById('donationForm').addEventListener('submit', function(event) {
    let isValid = true;
    const form = event.target;

    // Validate Full Name
    const name = form.name.value.trim();
    if (name === '') {
        alert('Full Name is required.');
        isValid = false;
    }

    // Validate Gender
    const gender = form.gender.value;
    if (gender === '') {
        alert('Please select a gender.');
        isValid = false;
    }

    // Validate Age
    const age = form.age.value;
    if (age === '' || age <= 0) {
        alert('Please enter a valid age.');
        isValid = false;
    }

    // Validate State
    const state = form.state.value;
    if (state === '') {
        alert('Please select a state.');
        isValid = false;
    }

    // Validate Blood Group
    const bloodGroup = form['blood-group'].value;
    if (bloodGroup === '') {
        alert('Please select a blood group.');
        isValid = false;
    }

    // Validate Contact Number
    const contact = form.contact.value.trim();
    if (contact === '') {
        alert('Contact Number is required.');
        isValid = false;
    }

    // Validate Email
    const email = form.email.value.trim();
    if (email === '') {
        alert('Email is required.');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
