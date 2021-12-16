var imgdatauri;
var encodedurl;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
    };
  }
  reader.readAsDataURL(input.files[0]);
}


function decode(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
          console.log(steg.decode(e.target.result));
          data = steg.decode(e.target.result);
          console.log(data);
        
        document.querySelector('#decoded').innerText = decrypt(data);
      };
    }
    reader.readAsDataURL(input.files[0]);
  }


function hideText() {  
  document.querySelector("#image2").src = steg.encode(encrypt(document.querySelector('#text').value), imgdatauri);
  encodedurl = document.querySelector("#image2").src;
}

function DownloadImage() {    
  document.getElementById("imageurl").href = encodedurl;     
}

const encrypt = (message)=>{
  let encryptedMessage;

  const messageArr = message.split("");
  //console.log('messafe array', messageArr);

let encryptedMessageArr = [];

for(i=0; i<messageArr.length; i++){
  let letter;
  switch(messageArr[i]){
    case "a":
      letter = "!";
      break;

      case "e":
      letter = "@";
      break;

      case "i":
      letter = "#";
      break;

      case "o":
      letter = "$";
      break;

      case "u":
      letter = "%";
      break;

      default:
      letter = messageArr[i];
      break;   
  }
encryptedMessageArr.push(letter);
//console.log("encrypted message array", encryptedMessageArr)

}
encryptedMessage = encryptedMessageArr.join("");
return encryptedMessage;
};

const decrypt = (message)=>{
  let decryptedMessage;

  const messageArr = message.split("");
  //console.log('messafe array', messageArr);

let decryptedMessageArr = [];

for(i=0; i<messageArr.length; i++){
  let letter;
  switch(messageArr[i]){
    case "!":
      letter = "a";
      break;

      case "@":
      letter = "e";
      break;

      case "#":
      letter = "i";
      break;

      case "$":
      letter = "o";
      break;

      case "%":
      letter = "u";
      break;

      default:
      letter = messageArr[i];
      break;   
  }
decryptedMessageArr.push(letter);
//console.log("encrypted message array", encryptedMessageArr)

}
decryptedMessage = decryptedMessageArr.join("");
return decryptedMessage;
};

// function sendEmail() {        
//   var emailid = document.querySelector('#enteremail').value; 
//   var params = {
//     to_email: emailid,
//     link: encodedurl    
//   };
//   emailjs.send("steganography", 'template_c383rxe', params)
//   .then(function(res){
//     console.log('success', res.status);
//   })
// }

function SendMail() {
  var emailid = document.querySelector('#enteremail').value;
  var subject = ""; // Add your Subject here
  var body = ""; // Add your body here

  window.open('https:\\mail.google.com/mail/u/0/?fs=1&to='+emailid+'&su='+subject+'&body='+body+'&tf=cm','_blank');
}
