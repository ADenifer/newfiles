function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  if (!username || !password) {
         alert("Please provide both username and password.");
        return false; // Prevent form submission
    }
}
