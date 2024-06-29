const buttonEncrypt = document.querySelector('.button-encrypt');
const buttonDecrypt = document.querySelector('.button-decrypt');
const decryptor = document.getElementById('decryptor');
const decryptorWindow = document.getElementById('decryptor-window');
const btCopy = document.getElementById('bt-copy');

const defaultWindow = () => {
    decryptorWindow.innerHTML = `
    <img  class="image" src="img/Muñeco.png" alt="Persona con lupa">
    <p class="decryptor-title">Ningún mensaje fue encontrado</p>
    <p class="decryptor-text">Ingresa el texto que desees encriptar o desencriptar.</p>`;
    btCopy.classList.add('d-none');
    decryptorWindow.classList.remove('decryptor-window-grow')
};
defaultWindow();

const encryptText = () => {
    const inputUser = document.getElementById('input-user').value;

    if(!inputUser) {
        defaultWindow();
    }else{
        const result = inputUser.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        decryptor.classList.add("decryptor-nd")
        btCopy.classList.remove("d-none")
        decryptorWindow.innerHTML = `<p class="text-grey" id="text-decrypt">${result}</p>`
    }
};

const decryptText = () => {
    const decryptedText = document.getElementById('input-user').value;

    if(!decryptedText){
        defaultWindow();
    } else{
        const result = decryptedText.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        decryptor.classList.add("decryptor-nd")
        btCopy.classList.remove("d-none")
        decryptorWindow.innerHTML = `<p class="text-grey">${result}</p>`
    }
};

const CopyText = () => {
    const textDecrypt = document.getElementById('text-decrypt').innerText;

    navigator.clipboard.writeText(textDecrypt)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}



buttonEncrypt.addEventListener('click', encryptText);
buttonDecrypt.addEventListener('click', decryptText);
btCopy.addEventListener('click', CopyText);