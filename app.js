    const btn = document.querySelector('.talk');
    const content = document.querySelector('.content');
    let userName = '';

    function speak(text) {
        const text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;

        window.speechSynthesis.speak(text_speak);
    }

    function askForName() {
        speak("What is your name?");
    }

    function setUserName(name) {
        userName = name.toLowerCase().trim(); // Convert to lowercase and trim spaces
        console.log("User name recognized as:", userName); // Debugging output

        if (userName.includes('harshita')) { // Use includes() for flexibility
            speak("Hello, babygurl! Bestie mode activated!");
        } else {
            speak("Hello, Master! How can I assist you today?");
        }
    }

    function wishMe() {
        let hour = new Date().getHours();
        let greeting = (hour < 12) ? "Good Morning!" : (hour < 17) ? "Good Afternoon!" : "Good Evening!";
        speak(greeting);
    }

    window.addEventListener('load', () => {
        speak("Initializing JARVIS....");
        askForName();
    });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.toLowerCase().trim();
        content.textContent = transcript;

        setTimeout(() => {
            if (!userName) {
                console.log(`Recognized name: ${transcript}`); // Debugging output
                setUserName(transcript);
            } else {
                takeCommand(transcript);
            }
        }, 500);
    };

    recognition.onerror = (event) => {
        content.textContent = "Sorry, I didn't catch that. Please try again.";
    };

    btn.addEventListener('click', () => {
        content.textContent = "Listening....";
        recognition.start();
    });

    function takeCommand(message) {
        console.log(`User command: ${message}`); // Debugging output
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
            const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
            speak(randomQuote);
        } 
        else if (message.includes("open google")) {
            speak("Opening Google...");
            setTimeout(() => {
                window.open("https://www.google.com", "_blank");
                speak("I've opened Google for you.");
            }, 1000);
        } 
        else if (message.includes("open youtube")) {
            speak("Opening YouTube...");
            setTimeout(() => {
                let win = window.open("https://www.youtube.com", "_blank");
                if (!win) alert("Please allow popups for this site.");
                else speak("I've opened YouTube for you.");
            }, 1000);
        } 
        else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            let query = message.replace(" ", "+");
            speak(`Searching for ${message} on Google`);
            setTimeout(() => {
                window.open(`https://www.google.com/search?q=${query}`, "_blank");
                speak(`I found some results for ${message}.`);
            }, 1000);
        } 
        else if (message.includes('wikipedia')) {
            let query = message.replace("wikipedia", "").trim();
            speak(`Searching Wikipedia for ${query}`);
            setTimeout(() => {
                window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
                speak(`I found some results for ${query} on Wikipedia.`);
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
