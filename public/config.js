/* ============================================================
   SITE CONFIG — the ONE place to edit placeholder links.
   ============================================================ */
// TODO: replace '#' with the real Facebook group URL.
var FACEBOOK_URL = 'https://www.facebook.com/groups/1140814578388183';
// TODO: replace with the real address that should receive signup requests
// (or swap the signup form for a real email-list provider later).
var SIGNUP_EMAIL = 'hello@example.com';
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
      // TODO: no backend yet — opens the visitor's mail app addressed to SIGNUP_EMAIL.
      window.location.href = 'mailto:' + SIGNUP_EMAIL +
        '?subject=' + encodeURIComponent('Silver Guard: keep me in the loop') +
        '&body=' + encodeURIComponent('Please add ' + email + ' to the Silver Guard updates list.');
      msg.textContent = 'Thanks! Your email app should open to finish signing up.';
    });
  }
})();
