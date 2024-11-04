function saveFormData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;

    var formData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function showSavedData() {
    
    var savedData = localStorage.getItem('formData');

    if (savedData) {
        
        var parsedData = JSON.parse(savedData);

        alert('Saved Data:\nName: ' + parsedData.name + '\nEmail: ' + parsedData.email + '\nPhone: ' + parsedData.phone + '\nAddress: ' + parsedData.address);
    } else {
        alert('No saved data found.');
    }
}