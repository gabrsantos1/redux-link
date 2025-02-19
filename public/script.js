function shorten() {
  let url = document.getElementById("url").value;
  if (!url) {
    alert("Insira um URL válido");
    return;
  }

  let headersRequest = {
    "Content-Type": "application/json",
    apiKey: "009faae6455449ea9f921f984a993219",
  };

  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  };

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headersRequest,
    body: JSON.stringify(linkRequest),
  })
    .then(response => response.json())
    .then(json => {
        console.log(json);
      let urlInput = document.getElementById("url");
      url.value = json.shorten;
    });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let data = {
      nome: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("subject").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyUs9y5PFDc7fYn1_Ee7_ErcFVFoi49YH8Cz_FX-PxMPTyNRsDjJdE-JOUjuEir4zE/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
      alert("Mensagem enviada com sucesso!");
  })
  .catch(error => {
      alert("Erro ao enviar: " + error);
  });
});
