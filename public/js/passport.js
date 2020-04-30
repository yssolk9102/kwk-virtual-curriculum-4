let relativeURL = window.location.pathname;

document.addEventListener("DOMContentLoaded", function() {
  const logOutForm = document.querySelector('.logout-form');
  const logInForm = document.querySelector('.login-form');

  function checkLocation() {
    const check = localStorage.getItem('loggedIn') || 'false';
    const isStaff = localStorage.getItem('isStaff') || false;

    if (relativeURL === '/kwk-virtual-curriculum/login/' && check === 'true') {
      showLinks(isStaff);
      displayLogout();
    } else if (relativeURL === '/kwk-virtual-curriculum/login/' && check === 'false') {
      displayLogin();
      var loginBtn = document.querySelector("#login-submit");
      loginBtn.addEventListener('click', logIn);
    } else if (relativeURL !== '/kwk-virtual-curriculum/login/' && check === 'true') {
      showLinks();
    } else if (relativeURL !== '/kwk-virtual-curriculum/login/' && check === 'false') {
      window.location.replace('/kwk-virtual-curriculum/login/');
    }

  }

  checkLocation();

  function displayLogin() {
    logOutForm.style.display = 'none';
    logInForm.style.display = 'block';
  }

  function displayLogout() {
    logOutForm.style.display = 'block';
    logInForm.style.display = 'none';
    logOutForm.addEventListener('submit', logOut);
  }

  function showLinks(isStaff) {
    var links = document.querySelectorAll(".navbar-navigation--links .curriculum-links");
    console.log("links:", links);
    if (isStaff) {
      console.log("in isStaff");
      for (var i = 0; i < links.length; i++) {
        links[i].style.display = 'block';
      }
    } else {
      console.log("else isStaff");
      console.log("1", links[1], "2", links[1]);
      links[1].style.display = 'block';
      links[2].style.display = 'block';
    }
  }

  function logIn(event) {
    event.preventDefault();

    let login = document.getElementById("login").value.trim();
    let password = document.getElementById("password").value.trim();

    debugger;
    if (checkLogin(login) && checkPassword(password)) {
      localStorage.setItem('loggedIn', 'true');
      window.location.replace("/kwk-virtual-curriculum/");
      showLinks(false);
    } else if (checkStaffLogin(login) && checkStaffPassword(password)) {
      debugger;
      console.log("IN STAFF LOGIN");
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('isStaff', 'true');
      window.location.replace("/kwk-virtual-curriculum/");
      showLinks(true);
    } else {
      alert("Sorry! Try again.");

    }
  }

  function hideLinks() {
    var links = document.querySelectorAll(".navbar-navigation--links .curriculum-links");
    for (var i = 0; i < 2; i++) {
      links[i].style.display = 'none';
    }
  }

  function checkLogin(login) {
    return login === "kwk";
  }

  function checkPassword(password) {
    return password === "boss";
  }

  function checkStaffLogin(login) {
    return login === "kwk2020";
  }

  function checkStaffPassword(password) {
    return password === "campteam";
  }

  function logOut(event) {
    event.preventDefault();
    localStorage.setItem('loggedIn', 'false');
    window.location.replace("/kwk-virtual-curriculum/login/");
    hideLinks();
  }

});
