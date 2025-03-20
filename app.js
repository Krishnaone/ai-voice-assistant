const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
let userName = '';

function speak(text, callback = null, delay = 0) {
    setTimeout(() => {
        const text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;
        text_speak.onend = () => {
            if (callback) callback(); // Execute callback after speech ends
        };
        window.speechSynthesis.speak(text_speak);
    }, delay);
}

function wishMe() {
    let hour = new Date().getHours();
    let greeting = (hour < 12) ? "Good Morning!" : (hour < 17) ? "Good Afternoon!" : "Good Evening!";
    return greeting;
}

// Asking for Name when button is clicked
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    
    speak("Initializing JARVIS....", () => {
        speak(wishMe(), () => {
            speak("What is your name?", () => {
                recognition.start(); // Start speech recognition only after speaking
            });
        });
    });
});

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("Your browser does not support speech recognition. Please use Google Chrome.");
} 

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

recognition.onstart = () => {
    console.log("Voice recognition activated...");
    content.textContent = "Listening...";
};

recognition.onspeechend = () => {
    console.log("Speech ended. Stopping recognition.");
    recognition.stop();
};

recognition.onerror = (event) => {
    console.error("Recognition error:", event.error);
    speak("Sorry, I didn't catch that. Please try again.");
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    content.textContent = transcript;
    console.log("Recognized Speech:", transcript);

    setTimeout(() => {
        if (!userName) {
            setUserName(transcript);
        } else {
            takeCommand(transcript);
        }
    }, 500);
};

function setUserName(name) {
    userName = name.toLowerCase().trim();
    console.log("User name recognized as:", userName);

    if (userName.includes('harshita')) {
        speak("Hello, babygurl! Bestie mode activated!");
    } else {
        speak("Hello, Master! How can I assist you today?");
    }
}

// Handling User Commands
function takeCommand(message) {
    console.log(`User command: ${message}`);
    
    if (message.includes('hey') || message.includes('hello')) {
        speak(userName.includes('harshita') ? "Hey babygurl! How's your day going? 😊" : "Hey Master! How can I help you?");
    } 
    else if (message.includes('how are you')) {
        speak(userName.includes('harshita') ? "I'm doing great, babygurl! How about you? 😊" : "I'm doing well, Master! Thank you for asking.");
    } 
    else if (message.includes('feeling down')) {
        speak("Oh no, bestie! Let’s find something fun to do! 💕");
    } 
    else if (message.includes('motivation')) {
        const motivationalQuotes = [
            "You’re stronger than you think, babygurl! 💪",
            "Every day is a new beginning, bestie! 🌈",
            "Believe in yourself, babygurl! You got this! 🌟"
        ];
        speak(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
    } 
    else if (message.includes("open google")) {
        speak("Opening Google...");
        setTimeout(() => {
            window.open("https://www.google.com", "_blank");
        }, 1000);
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        setTimeout(() => {
            let win = window.open("https://www.youtube.com", "_blank");
            if (!win) alert("Please allow popups for this site.");
        }, 1000);
    } 
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        let query = message.replace(" ", "+");
        speak(`Searching for ${message} on Google`);
        setTimeout(() => {
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
        }, 1000);
    } 
    else if (message.includes('wikipedia')) {
        let query = message.replace("wikipedia", "").trim();
        speak(`Searching Wikipedia for ${query}`);
        setTimeout(() => {
            window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
        }, 1000);
    } 
    else if (message.includes('time')) {
        let time = new Date().toLocaleTimeString();
        speak(`The time is ${time}`);
    } 
    else if (message.includes('date')) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } 
    else {
        speak(userName.includes('harshita') ? "I’m here for you! What’s on your mind? 💖" : "I’m here for you, Master! What can I assist you with?");
    }
}
