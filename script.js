function saveData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var userData = {
        name: name,
        age: age,
        gender: gender
    };

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(userData);

    // Save data to localStorage with a unique key
    var key = 'userData_' + Date.now();
    localStorage.setItem(key, jsonData);

    // Open admin page
    var adminPage = window.open('admin.html', '_blank');
}
