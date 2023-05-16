function toggleLoginPrompt() {
    var loginPrompt = document.getElementById("login-prompt");
    if (loginPrompt.style.display === "block") {
      loginPrompt.style.display = "none";
    } else {
      loginPrompt.style.display = "block";
    }
  }
  
  function loginAsRetailer() {
    // Retailer login logic
    console.log("Retailer Login");
    // Redirect or perform any retailer-specific actions
  }
  
  function loginAsResident() {
    // Resident login logic
    console.log("Resident Login");
    // Redirect or perform any resident-specific actions
  }
  