window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition;
recognition.interimResults = true;
recognition.lang = "en-US";

let p = document.createElement('p');
let firstp=document.querySelector('p')
// words = document.querySelector('.word');
words =  document.getElementById("wordText")
words.appendChild(p);

recognition.addEventListener('result', e=>{

    console.log(e.results);
    const transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('');

    firstp.textContent += " " + e.results[0][0].transcript;


    // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    // p.textContent = poopScript;

    console.log(poopScript);


    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p)
    }
})


recognition.addEventListener('end', recognition.start)

recognition.start();