const _0xabc1=["\x73\x70\x65\x61\x6B","\x72\x61\x74\x65","\x76\x6F\x6C\x75\x6D\x65","\x70\x69\x74\x63\x68","\x73\x70\x65\x65\x63\x68\x53\x79\x6E\x74\x68\x65\x73\x69\x73","\x73\x70\x65\x61\x6B\x53\x79\x6E\x74\x68\x65\x73\x69\x73","\x51\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x74\x61\x6C\x6B","\x2E\x63\x6F\x6E\x74\x65\x6E\x74","\x6C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x72\x69\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x68\x61\x72\x73\x68\x69\x74\x61","\x62\x61\x62\x79\x67\x75\x72\x6C","\x4D\x61\x73\x74\x65\x72","\x48\x6F\x77\x20\x63\x61\x6E\x20\x49\x20\x61\x73\x73\x69\x73\x74\x20\x79\x6F\x75\x20\x74\x6F\x64\x61\x79\x3F","\x47\x6F\x6F\x64\x20\x4D\x6F\x72\x6E\x69\x6E\x67\x21","\x47\x6F\x6F\x64\x20\x41\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x21","\x47\x6F\x6F\x64\x20\x45\x76\x65\x6E\x69\x6E\x67\x21","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x69\x6E\x67\x20\x4A\x41\x52\x56\x49\x53\x2E\x2E\x2E","\x57\x68\x61\x74\x20\x69\x73\x20\x79\x6F\x75\x72\x20\x6E\x61\x6D\x65\x3F","\x57\x65\x62\x4B\x69\x74\x53\x70\x65\x65\x63\x68\x52\x65\x63\x6F\x67\x6E\x69\x74\x69\x6F\x6E","\x77\x65\x62\x6B\x69\x74\x53\x70\x65\x65\x63\x68\x52\x65\x63\x6F\x67\x6E\x69\x74\x69\x6F\x6E","\x53\x6F\x72\x72\x79\x2C\x20\x49\x20\x64\x69\x64\x6E\x27\x74\x20\x63\x61\x74\x63\x68\x20\x74\x68\x61\x74\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E","\x63\x6C\x69\x63\x6B","\x4C\x69\x73\x74\x65\x6E\x69\x6E\x67\x2E\x2E\x2E"];const btn=document[_0xabc1[6]](_0xabc1[7]);const content=document[_0xabc1[6]](_0xabc1[8]);let userName=``;function speak(text){const text_speak=new SpeechSynthesisUtterance(text);text_speak[_0xabc1[1]]=1;text_speak[_0xabc1[2]]=1;text_speak[_0xabc1[3]]=1;window[_0xabc1[4]][_0xabc1[5]](text_speak)}function askForName(){speak(_0xabc1[20])}function setUserName(name){userName=name[_0xabc1[9]]()[_0xabc1[10]]();console[_0xabc1[0]](_0xabc1[21],userName);if(userName[_0xabc1[11]](_0xabc1[12])){speak(_0xabc1[13])}else {speak(_0xabc1[14])}}function wishMe(){let hour=new Date().getHours();let greeting=(hour<12)?_0xabc1[16]:(hour<17)?_0xabc1[17]:_0xabc1[18];speak(greeting)}window.addEventListener(`load`,()=>{speak(_0xabc1[19]);askForName()});const recognition=new (window[_0xabc1[22]]||window[_0xabc1[23]])();recognition.onresult=(event)=>{const transcript=event.results[event.resultIndex][0].transcript.toLowerCase().trim();content.textContent=transcript;setTimeout(()=>{if(!userName){console[_0xabc1[0]](`Recognized name: ${transcript}`);setUserName(transcript)}else {takeCommand(transcript)}},500)};recognition.onerror=(event)=>{content.textContent=_0xabc1[24]};btn.addEventListener(_0xabc1[25],()=>{content.textContent=_0xabc1[26];recognition.start()});
