
function validateForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    if (!isValidEmail(email)) {
        alert('Invalid email address');
        return false;
    }

    if (!isValidTurkishPhone(phone)) {
        alert('Invalid Turkish phone number');
        return false;
    }

    alert('Form is submitted');
    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidTurkishPhone(phone) {
    var phoneRegex = /^\+90\d{10}$/;
    return phoneRegex.test(phone);
}

function fetchCompany() {
    const Compani = document.getElementById('company');
    const url = "https://run.mocky.io/v3/c2454332-a306-4a29-a906-d4e2a26d0b20";
    fetch(url).then(async (res) => {
        const items = await res.json();
        items.forEach(item => { generateOption(item.id, item.Companies, Compani) });
    });
}

function fetchSubject() {
    const Subje = document.getElementById('subject');
    const url = "https://run.mocky.io/v3/9e9f290c-e13e-47a8-8c80-0a1d0ca7dd4f";
    fetch(url).then(async (res) => {
        const items = await res.json();
        items.forEach(item => { generateOption(item.id, item.Subjects, Subje) });
    });
}

function generateOption(value, text, selectDom) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectDom.appendChild(option);
}

window.addEventListener('load', () => {
    fetchCompany();
});
window.addEventListener('load', () => {
    fetchSubject();
});
