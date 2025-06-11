  /*============== Change-Theme =============*/
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
}

  /*============== Contact-Me =============*/
document.getElementById("send_message").onclick = function() {

    // Variables for clearing the form data
    const inputValueName = document.getElementById("name");
    const inputValueEmail = document.getElementById("email");
    const inputValueMessage = document.getElementById("message");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = encodeURIComponent("Enter Your Subject");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${document.getElementById("message").value}`);

    if((!name || !email)) {
        alert("Please enter both name and email.");
    }
    else {
        window.location.href = `mailto:ardogra1999@gmail.com?subject=${subject}&body=${body}`;  // Use backticks (``) for template literal
    }

    // Clearing the form data
    inputValueName.value = "";
    inputValueEmail.value = "";
    inputValueMessage.value = "";
};

// Nav-Menu 
const navLinks = document.querySelectorAll('.nav__link');

// Add click event to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});