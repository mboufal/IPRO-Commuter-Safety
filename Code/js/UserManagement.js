// this class saves and retrieves user data to the session storage in the browser
// the data is cleared from the browser's storage when the tab/window is closed 
class UserSession {
  
  constructor(username, id, type) {
    this.username = username;
    this.id = id;
    this.type = type;
  };

  setUsername(username) {
    sessionStorage.setItem("username", username);
  }

  setUserId(id) {
    sessionStorage.setItem("id", id);
  }

  setUserType(type) {
    sessionStorage.setItem("type", type);
  }

  getUsername() {
    return sessionStorage.getItem("username");
  }

  getUserId() {
    return sessionStorage.getItem("id");
  }

  getUserType() {
    return sessionStorage.getItem("type");
  }
}

// hardocded user ids
let userIds = {
  "guest" : "12345",
  "member" : "98765",
  "security" : "54321"
}

// make admin button and add to nav
function showAdminButton() {
  const nav = document.getElementById("myTopnav");

  const adminBtn = document.createElement("a");
  const href = document.createAttribute("href");
  const id = document.createAttribute("id");

  adminBtn.innerHTML = "Admin";
  href.value = "admin.html";
  id.value = "admin-btn";

  adminBtn.setAttributeNode(href);
  adminBtn.setAttributeNode(id);

  nav.insertBefore(adminBtn, nav.children[6]);
}

// remove admin button from nav
function removeAdminButton() {
  document.getElementById("admin-btn").remove();
}

// implementing the above UserSession class to change the user
const log = console.log; 
const userSelect = document.querySelector(`[id="user-select"]`); 

// create UserSession object
let uSession = new UserSession();

// on first open of the page, set the session user to default (ie. guest)
if(uSession.getUserType() == undefined || uSession.getUserType() == null) {
  // get the default selected option from the user dropdown (guest)
  uSession.username = userSelect.selectedOptions[0].text;
  uSession.type = userSelect.value;

  // set the session storage with the default (guest)
  uSession.setUsername(uSession.username);
  uSession.setUserType(uSession.type);
  uSession.setUserId(userIds[uSession.type]);

  log("Default user:", uSession.getUserType());
} else if(uSession.getUserType() == "security") {
  showAdminButton();
}

// set the welcome message 
document.getElementById("user-select-label").innerHTML = "Hello " + uSession.getUsername();

// set the dropdown to the current user type
userSelect.value = uSession.getUserType();

// event listener - runs when a different user is selected in the dropdown
userSelect.addEventListener("change", (e) => {
  // log(`e.target`, e.target);
  const select = e.target;
  const value = select.value;
  const desc = select.selectedOptions[0].text;

  // set session data with selected user data
  uSession.setUsername(desc);
  uSession.setUserType(value);
  uSession.setUserId(userIds[value]);
  log("Username:", uSession.getUsername(), "--- Type:", uSession.getUserType(), "--- Id:", uSession.getUserId());

  // update the welcome message
  document.getElementById("user-select-label").innerHTML = "Hello " + uSession.getUsername();

  // add or remove admin button
  if(value == "security") {
    showAdminButton();
  } else {
    removeAdminButton();
  }
});
