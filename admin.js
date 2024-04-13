document.addEventListener('DOMContentLoaded', function() {
    var userDataDiv = document.getElementById('userData');

    // Retrieve and display all user data from localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('userData')) {
            var jsonData = localStorage.getItem(key);
            var userData = JSON.parse(jsonData);
            userDataDiv.innerHTML += `<p>Name: ${userData.name}, Age: ${userData.age}, Gender: ${userData.gender}</p>`;
        }
    }
});
