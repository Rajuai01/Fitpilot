let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code 

const typed = new Typed('.muliple-text', {
    strings: [ 'Bodybuilding', 'Yoga','Healthy', 'Fitness', 'Mental Health', 'Wellness'],
    typeSpeed: 50,
    backdelay: 1000,
    loop: true
  });

  

 

  // Modal functionality
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const closeLogin = document.getElementById('close-login');
  const closeSignup = document.getElementById('close-signup');
  const openSignup = document.getElementById('open-signup');
  const openLogin = document.getElementById('open-login');
  document.getElementById('join-us-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-modal').style.display = 'block';
});

  
  
  loginBtn.onclick = function() {
      loginModal.style.display = 'block';
      document.body.classList.add('modal-open'); // Add class to body
  }
  
  signupBtn.onclick = function() {
      signupModal.style.display = 'block';
      document.body.classList.add('modal-open'); // Add class to body
  }
  
  closeLogin.onclick = function() {
      loginModal.style.display = 'none';
      document.body.classList.remove('modal-open'); // Remove class from body
  }
  
  closeSignup.onclick = function() {
      signupModal.style.display = 'none';
      document.body.classList.remove('modal-open'); // Remove class from body
  }
  
  openSignup.onclick = function() {
      loginModal.style.display = 'none';
      signupModal.style.display = 'block';
  }
  
  openLogin.onclick = function() {
      signupModal.style.display = 'none';
      loginModal.style.display = 'block';
  }
  
  window.onclick = function(event) {
      if (event.target == loginModal) {
          loginModal.style.display = 'none';
          document.body.classList.remove('modal-open'); // Remove class from body
      }
      if (event.target == signupModal) {
          signupModal.style.display = 'none';
          document.body.classList.remove('modal-open'); // Remove class from body
      }
  }