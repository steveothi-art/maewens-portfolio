/* =========================================
   AUTHENTIFICATION (liaison avec le PHP)
   À inclure APRÈS siteGl.js :
   <script src="siteGl.js"></script>
   <script src="auth.js"></script>
========================================= */

async function envoyer(url, form) {
    const reponse = await fetch(url, {
        method: "POST",
        body: new FormData(form)
    });
    return reponse.json();
}

/* ----- Connexion ----- */
document.getElementById("loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.target;

    try {
        const data = await envoyer("login.php", form);
        alert(data.message);
        if (data.success) location.reload();
    } catch (e) {
        alert("Impossible de contacter le serveur.");
    }
});

/* ----- Inscription ----- */
document.getElementById("registerForm").addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.target;

    try {
        const data = await envoyer("register.php", form);
        alert(data.message);
        if (data.success) location.reload();
    } catch (e) {
        alert("Impossible de contacter le serveur.");
    }
});

/* ----- Afficher l'utilisateur connecté ----- */
fetch("me.php")
    .then(r => r.json())
    .then(data => {
        if (!data.logged_in) return;

        const actions = document.querySelector(".header-actions");
        document.getElementById("openLogin").style.display = "none";
        document.getElementById("openRegister").style.display = "none";

        const salut = document.createElement("span");
        salut.textContent = "Bonjour, " + data.user.prenom;
        salut.style.marginRight = "12px";

        const bouton = document.createElement("button");
        bouton.className = "btn-login";
        bouton.textContent = "Déconnexion";
        bouton.addEventListener("click", async () => {
            await fetch("logout.php");
            location.reload();
        });

        actions.prepend(bouton);
        actions.prepend(salut);
    });