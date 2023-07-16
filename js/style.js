const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');
const $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle('active');
    $signUp.classList.toggle('active');
  }
});
/*Funcion para los botones cuales redigiren a local o externos*/
/*Local*/
function redirectToLogin(){
  window.location.href = '/html/Principal.html'
}
/*Externo */
function redirectSocialIng(){
  window.location.href =  'https://instagram.com/osmaldokr?igshid=NGExMmI2YTkyZg==' 
}
function redirectSocialFb(){
  window.location.href =  'https://www.facebook.com/profile.php?id=100093133827196' 
}
function redirectSocialTT(){
  window.location.href =  'https://www.tiktok.com/@osmaldo.16?_t=8dwQZMNUDt0&_r=1' 
}