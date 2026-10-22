document.getElementById('year').textContent = new Date().getFullYear();

const partnerForm = document.querySelector('.partner-form');

partnerForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!partnerForm.reportValidity()) return;

  const details = new FormData(partnerForm);
  const name = details.get('name').trim();
  const email = details.get('email').trim();
  const subject = 'I-Rova partnership enquiry';
  const body = `Hello I-Rova,\r\n\r\nI am interested in hosting an I-Rova kiosk.\r\n\r\nName: ${name}\r\nWork email: ${email}\r\n`;

  window.location.href = `${partnerForm.action}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
