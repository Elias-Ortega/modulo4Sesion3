
 const botonEnviar = document.querySelector("#btnEnviar");

botonEnviar.addEventListener('click', function(){
    
    const Para = document.querySelector("#Para").textContent;
    const inputPara = document.querySelector("#inputPara").value;
    const inputTitulo = document.querySelector("#inputTitulo").value;
    const inputMensaje = document.querySelector("#inputMensaje").value;
    const De = document.querySelector("#De").textContent;
    const inputDe = document.querySelector("#inputDe").value;
    const CC = document.querySelector("#CC").textContent;
    const ccmailUno = document.querySelector("#ccEmailUno").value;
    const ccmailDos = document.querySelector("#ccEmailDos").value;
    const ccmailTres = document.querySelector("#ccEmailTres").value;
    const ccmailCuatro = document.querySelector("#ccEmailCuatro").value;
    const ccmailCinco = document.querySelector("#ccEmailCinco").value;
    const ccmailSeis = document.querySelector("#ccEmailSeis").value;
  
    
    console.log(`${Para} ${inputPara}`);
    console.log(inputTitulo);
    console.log(inputMensaje);
    console.log(` ${De} ${inputDe}`);
    console.log(CC);
    const ccMails = [ccmailUno, ccmailDos, ccmailTres, ccmailCuatro, ccmailCinco, ccmailSeis];
    
    mostrarParametrosRest(...ccMails);

});

function mostrarParametrosRest(...ccMails){
    for (const mail of ccMails) {
        console.log(mail);
    }
}






 


