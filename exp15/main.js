const name = document.getElementById('name');
const age = document.getElementById('age');
const address = document.getElementById('address');
const favouriteSubject = document.getElementById('favourite-subject');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (parseFloat(age.value) < 1 || parseFloat(age.value) > 150 || age.value === '') {
        messages.push('Age should be between 1 and 150');
    }

    if (address.value === '' || address.value == null) {
        messages.push('Address is required');
    }

    if (favouriteSubject.value === '' || favouriteSubject.value == null) {
        messages.push('Favourite subject is required');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
