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
