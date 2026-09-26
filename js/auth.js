document.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
if (signupForm) {

        signupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim().toLowerCase();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!name || !email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            let users = JSON.parse(localStorage.getItem("animeflixUsers")) || [];

            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                alert("An account with this email already exists.");
                return;
            }

            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password
            };

            users.push(newUser);

            localStorage.setItem(
                "animeflixUsers",
                JSON.stringify(users)
            );

            localStorage.setItem("animeflixCurrentUser", JSON.stringify({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }));

            alert("Account created successfully!");
            window.location.href = "index.html";
        });
    }
if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value.trim().toLowerCase();
            const password = document.getElementById("password").value;

            const users =
                JSON.parse(localStorage.getItem("animeflixUsers")) || [];

            const user = users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );

            if (!user) {
                alert("Invalid email or password.");
                return;
            }

            localStorage.setItem(
                "animeflixCurrentUser",
                JSON.stringify({
                    id: user.id,
                    name: user.name,
                    email: user.email
                })
            );

            alert("Welcome back, " + user.name + "!");

            window.location.href = "index.html";
        });
    }
const passwordToggle =
        document.getElementById("passwordToggle");

    const password =
        document.getElementById("password");

    if (passwordToggle && password) {

        passwordToggle.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";

                passwordToggle.innerHTML =
                    '<i class="bi bi-eye-slash"></i>';

            } else {

                password.type = "password";

                passwordToggle.innerHTML =
                    '<i class="bi bi-eye"></i>';
            }

        });
    }

});
if (!document.getElementById("loginForm") && !document.getElementById("signupForm")) {
    document.addEventListener("DOMContentLoaded", () => {
        const signIn = document.querySelector(".sign-in");
        const currentUser = JSON.parse(localStorage.getItem("animeflixCurrentUser") || "null");
        if (signIn && currentUser) {
            const label = signIn.querySelector(".sign-in-text");
            if (label) label.textContent = currentUser.name || "Account";
            signIn.href = "#";
            signIn.addEventListener("click", (e) => {
                e.preventDefault();
                if (confirm("Sign out of AnimeFlix?")) {
                    localStorage.removeItem("animeflixCurrentUser");
                    window.location.reload();
                }
            });
        }
    });
}
