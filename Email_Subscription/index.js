  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHDH0KiATn6wN-t4qPBIJACNZgZ8LfET2C35X2Df0kX7U9cNeNT9orlCdkjFDiYZBX/exec'
  const form = document.forms["submit-to-google-sheet"]
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Thank You For Subscribing!";
            setTimeout(function(){
                msg.innerHTML = "";
            },5000);
            form.reset(); /* to clear the form for next entries (empty after entering)*/
      })
      .catch(error => console.error('Error!', error.message))
  })