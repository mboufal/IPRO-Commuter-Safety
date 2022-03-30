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

// implementing the above class to change the user
const log = console.log; 
const userSelect = document.querySelector(`[id="user-select"]`); 

// create UserSession object
let uSession = new UserSession();

// on first open of the website, set the session user to default (ie. guest)
if(uSession.getUserType() == undefined || uSession.getUserType() == null) {
  // get the default selected option from the user dropdown (guest)
  uSession.username = userSelect.selectedOptions[0].text;
  uSession.type = userSelect.value;

  // set the session storage with the default (guest)
  uSession.setUsername(uSession.username);
  uSession.setUserType(uSession.type);
  uSession.setUserId(userIds[uSession.type]);

  log("Default user:", uSession.getUserType());
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
});
