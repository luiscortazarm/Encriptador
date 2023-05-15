
const textArea = document.querySelector(".text_area");
const messageArea = document.querySelector(".message");
const btnCopy = document.querySelector(".copy");
textArea.focus(); 

function encrypt(textEncrypted){

    var text = textEncrypted;
    var regex1 = text.search(/[A-Z]/gm);
    var regex2 = text.search(/[áéíóúÁÉÍÓÚ]/gm);

    if (regex1 < 0 && regex2 < 0){
    var textEncrypt = text  .replace(/e/igm,"enter")
                            .replace(/o/igm,"ober")
                            .replace(/i/igm,"imes")
                            .replace(/a/igm,"ai")
                            .replace(/u/igm,"ufat")
    } else {
        alert("Escriba el texto sólo con minúsculas y sin acento");
        location.reload();
        return false;
    }
    
    return textEncrypt;
}

function decrypt(textDecrypted){

    var text = textDecrypted;
    var regex1 = text.search(/[A-Z]/gm);
    var regex2 = text.search(/[áéíóúÁÉÍÓÚ]/gm);

    if (regex1 < 0 && regex2 < 0){
    var textEncrypt = text  .replace(/enter/igm,"e")
                            .replace(/ober/igm,"o")
                            .replace(/imes/igm,"i")
                            .replace(/ai/igm,"a")
                            .replace(/ufat/igm,"u")
    } else {
        alert("Escriba el texto sólo con minúsculas y sin acento");
        location.reload();
        return false;
    }

    return textEncrypt
}

function copy(){
    
    navigator.clipboard.writeText(messageArea.value);
    alert("!Texto copiado¡");
    messageArea.value = "";
    textArea.focus();        
}

function btnEncrypt(){
   
    const encryptedText = encrypt(textArea.value);
    messageArea.value = encryptedText;
    textArea.value = "";
    messageArea.style.backgroundImage = "none";
    btnCopy.focus();  
}

function btnDecrypt(){
    const decryptedText = decrypt(textArea.value);
    messageArea.value = decryptedText;
    textArea.value = "";
    btnCopy.focus();
}