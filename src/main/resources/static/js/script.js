document.addEventListener("DOMContentLoaded", function () {
    fetchUser();

    
    const themeToggle = document.getElementById("toggleTheme");
    const themeStylesheet = document.getElementById("themeStylesheet");


    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        themeStylesheet.setAttribute("href", savedTheme);
        themeToggle.checked = savedTheme.includes("style1.css");
    }

    themeToggle.addEventListener("change", function () {
        const newTheme = themeToggle.checked ? "css/style1.css" : "css/style.css";
        themeStylesheet.setAttribute("href", newTheme);
        localStorage.setItem("selectedTheme", newTheme);
    });
});

function fetchUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];

            document.getElementById("userImage").src = user.picture.large;
            document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById("gender").textContent = user.gender;
            document.getElementById("email").textContent = user.email;
            document.getElementById("phone").textContent = user.phone;
            document.getElementById("location").textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
            document.getElementById("dob").textContent = `${user.dob.date.split("T")[0]} (Age: ${user.dob.age})`;
            document.getElementById("registered").textContent = user.registered.date.split("T")[0];
            document.getElementById("id").textContent = user.id.value || "N/A";
            document.getElementById("username").textContent = user.login.username;
            document.getElementById("password").textContent = user.login.password; 
            document.getElementById("nationality").textContent = user.nat;
            document.getElementById("timezone").textContent = `${user.location.timezone.offset}, ${user.location.timezone.description}`;
        })
        .catch(error => console.error("Error fetching user:", error));
}
