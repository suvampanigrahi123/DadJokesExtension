fetch('https://icanhazdadjoke.com/slack')
     .then(data=>data.json())
     .then(jokeData=>{
         const jokeText=jokeData.attachments[0].text;
         const JokeElement=document.getElementById('JokeElement');
         JokeElement.innerHTML=jokeText;
     })

// const obj={
//     "attachments":[
//        {
//           "fallback":"\u2018Put the cat out\u2019 \u2026 \u2018I didn\u2019t realize it was on fire",
//           "footer":"<https://icanhazdadjoke.com/j/8UnrHe2T0g|permalink> - <https://icanhazdadjoke.com|icanhazdadjoke.com>",
//           "text":"\u2018Put the cat out\u2019 \u2026 \u2018I didn\u2019t realize it was on fire"
//        }
//     ],
//     "response_type":"in_channel",
//     "username":"icanhazdadjoke"
//  };
 