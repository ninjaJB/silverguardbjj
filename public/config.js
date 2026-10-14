/* ============================================================
   SITE CONFIG — the ONE place to edit placeholder links.
   ============================================================ */
// TODO: replace '#' with the real Facebook group URL.
var FACEBOOK_URL = 'https://www.facebook.com/groups/1140814578388183';
// TODO: replace with the real address that should receive signup requests
// (or swap the signup form for a real email-list provider later).
var SIGNUP_EMAIL = 'hello@silverguardbjj.com';
var INSTAGRAM_URL = 'https://instagram.com/silverguardbjj';
var X_URL = 'https://x.com/silverguardbjj';

(function () {
  function set(sel, url) {
    document.querySelectorAll(sel).forEach(function (a) {
      a.href = url;
      if (url === '#') { a.setAttribute('aria-disabled', 'true'); a.title = 'Coming soon'; }
    });
  }
  set('[data-link="facebook"]', FACEBOOK_URL);
  set('[data-link="instagram"]', INSTAGRAM_URL);
  set('[data-link="x"]', X_URL);
  var form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      var msg = document.getElementById('signup-msg');
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var fd = new FormData();
      fd.append('entry.1140105683', email);
      fetch('https://docs.google.com/forms/d/e/1FAIpQLSfVfklxzyC9oCRT5dhzeky2o3-eDEUXVjrGNwcgXq_y4YeVyw/formResponse', { method: 'POST', mode: 'no-cors', body: fd })
        .then(function () { msg.textContent = "You're on the list. Welcome to the guard."; form.reset(); })
        .catch(function () { msg.textContent = 'Something went wrong. Email hello@silverguardbjj.com instead.'; });
      return;
      msg.textContent = 'Thanks! Your email app should open to finish signing up.';
    });
  }
})();
