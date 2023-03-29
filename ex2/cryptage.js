const txtMessage = document.f.txtMessage;
const txtCrypte = document.f.txtCrypte;
const txtDate = document.f.txtDate;
const btnCrypter = document.f.btnCrypter;
const rdDate = document.f.rdDate;
const btnEnvoyer = document.f.btnEnvoyer;
const form_f = document.f;

// setp 1
function tester(txt) {
  const text_value = txtMessage.value;
  if (!text_value) {
    txtMessage.style.backgroundColor = "yellow";
  } else {
    txtMessage.style.backgroundColor = "white";
  }
}

// step 2
//crypterChaine
function crypterChaine(ch) {
  // replace the e with "?!"
  ch = ch.replace("e", "?!");
  // change string to array of caracters
  ch_arr = [...ch];
  // reverse the array and the return it
  ch = ch_arr.reverse().join("");
  return ch;
}

function crypterDate(date) {
  let date_arr = date.split("-");
  // aaaa-mm-jj
  let anne = Number(date_arr[0]) + 30;
  let mois = Number(date_arr[1]) + 40;
  let jour = Number(date_arr[2]) + 50;
  // jjmmaaaa
  const result = [jour, mois, anne].join("");
  return result;
}

function crypterMessage() {
  const date = txtDate.value;
  const message = txtMessage.value;
  const debut = rdDate.value;
  const chaine_encript = crypterChaine(message);
  const date_encript = crypterDate(date);
  let result;
  switch (debut) {
    case "Début":
      result = "*" + date_encript + chaine_encript;
      break;

    case "Fin":
      result = chaine_encript + date_encript + "*";
      break;

    default:
      result = "error";
      break;
  }
  return result;
}

// step 3
btnCrypter.addEventListener("click", () => {
  txtCrypte.value = null;
  const crypt_msg = crypterMessage();
  txtCrypte.value = crypt_msg;
  btnEnvoyer.disabled = false;
});

// setp 4
form_f.addEventListener("reset", () => reset);

function reset() {
  btnEnvoyer.disabled = true;
}
