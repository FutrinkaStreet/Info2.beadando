function megnyit() {
    window.location.href = 'quiz.html'; // a kvízoldal elérési útvonala
}

document.getElementById('quizButton').addEventListener('click', megnyit);

const quizData = [
    {
        question: "Mit mond mindig Mézga Gézáné?",
        options: ["„Ma akciós volt a farhát a piacon.”", "„Pszt! Mindjárt kezdődik a tévében a Szulejmán.”", "„Ábel! Gyere, vegyük be a Fluimucilt!”", "„Bárcsak a Hufnágel Pistihez mentem volna feleségül!”"],
        answer: "„Bárcsak a Hufnágel Pistihez mentem volna feleségül!”",
    },

    {
        question: "Hogy hívják a Frakk, a macskák réme c. rajzfilm macskáit?",
        options: ["Cirmi és Mirr-Murr.", "Mazsola és Tádé.", "Lukrécia és Szerénke.", "Cat1 és Cat2."],
        answer: "Lukrécia és Szerénke.",
    },

    {
        question: "Mit szeret a világon legjobban Gombóc Artúr?", 
        options: ["Csokoládét.", "GitHubot.", "Közpénzt.", "Bolzano-tételt."],
        answer: "Csokoládét.",
    },

    {
        question: "Milyen állat a Kérem a következőt! c. rajzfilm Ursula nővére?",
        options: ["Racka juh.", "Vörös szájú denevérhal.", "Medve.", "Hippogriff."],
        answer: "Medve.",
    },

    {
        question: "Melyik mese szereplője Safranek?",
        options: ["Gusztáv.", "Macskafogó.", "Misi Mókus kalandjai.", "A legkisebb ugrifüles."],
        answer: "Macskafogó.",
    },

    {
        question: "Ki Lolka és Bolka?",
        options: ["Két testvér.", "Adóellenőrök.", "Apa és fia.", "Tini Nindzsa Teknőcök."],
        answer: "Két testvér.",
    },

    {
        question: "Hová utazik Nils Holgersson a vadludakkal?",
        options: ["Brüsszelbe.", "Azahriah-koncertre.", "Ököritófülpösre.", "Lappföldre."],
        answer: "Lappföldre.",
    },

    {
        question: "Hogy hívják Kukori feleségét?",
        options: ["Tyúkanyó.", "Asszony.", "Kotkoda.", "Bözsi néni."],
        answer: "Kotkoda.",
    },

    {
        question: "Hol él a kockásfülű nyúl?",
        options: ["A BME H épületében.", "Egy bőröndben.", "A Futrinka utcában.", "Sándor-palota pincéjében."],
        answer: "Egy bőröndben.",
    },

    {
        question: "Minek a rövidítése a Vuk név?",
        options: ["Vacsora után kocsma.", "Vadászom, utamból kotródj!", "Vörös, ukrán kutya.", "Vétóra uszító koma."],
        answer: "Vadászom, utamból kotródj!",
    },

    {
        question: "Milyen anyagból készült Sebaj Tóbiás?",
        options: ["Gyurma.", "Parafa.", "H2O", "Borjúbél."],
        answer: "Gyurma.",
    },

    {
        question: "Kinek köszönhetjük - többek között - a Frédi és Béni c. rajzfilm magyar rímjeit?",
        options: ["Karinthy Frigyesnek.", "Szabó T. Annának.", "Romhányi Józsefnek.", "Petri Györgynek."],
        answer: "Romhányi Józsefnek.",
    },


    {
        question: "Melyik a legtraumatizálóbb Kisvakond-epizód?",
        options: ["Amikor a vakond lemarad a Fradi-meccsről.", "Amikor a Kisvakond visszafizeti a diákhitelt.", "Amikor a vakond segédkezik nyuszimama ellésénél.", "Amikor az állatok közösen begombáznak az erdő közepén."],
        answer: "Amikor a vakond segédkezik nyuszimama ellésénél.",
    },

    {
        question: "Mi a feladata Mikrobinak?",
        options: ["Vezesse a galaktikus küldetést, illetve háborúzzon a csillagokkal!", "Mosson, főzzön, takarítson, vigyázzon a gyerekekre!", "Mindent tudjon a mikrobiológiáról!", "Gyártson apró robotokat egy kínai gyárban!"],
        answer: "Mosson, főzzön, takarítson, vigyázzon a gyerekekre!",
    },

    {
        question: "Melyik királyról vannak mesék?",
        options: ["Zámbó Jimmy-ről.", "III. Istvánról", "III. Andrásról.", "Mátyás királyról."],
        answer: "Mátyás királyról.",
    },

    {
        question: "Milyen színű lábbelit hord Hókuszpók?",
        options: ["Pirosat.", "Hupikéket.", "Feketét.", "Zöldet."],
        answer: "Pirosat.",
    },

    {
        question: "A budapesti Bem rakparton található miniszobor melyik mesehősnek állít emléket?",
        options: ["Főkukacnak.", "Vízipók-csodapóknak.", "Kippkoppnak.", "Rumcájsznak."],
        answer: "Főkukacnak.",
    },

    {
        question: "Hogy hívják Babar király állandó ellenlábasát?",
        options: ["Pompadúrnak.", "Csibészkének.", "Kíváncsi Fáncsinak.", "Lord Retexisznek."],
        answer: "Lord Retexisznek.",
    },

    {
        question: "A Varázsceruza c. rajzfilmsorozatot melyik ország alkotói készítették?",
        options: ["Törökország.", "Magyarország.", "Lengyelország.", "Szenegál."],
        answer: "Lengyelország.",
    },

    {
        question: "Ki áll bosszút Döbrögin?",
        options: ["Dr. Máris Ottokár.", "Ludas Matyi.", "Szmöre.", "Teknőc Ernő."],
        answer: "Ludas Matyi.",
    },
]

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function goBack() {
  window.location.href = 'index.html';
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    quizContainer.appendChild(imageElement); // Kép hozzáadása
    quizContainer.appendChild(questionElement);
  
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('div');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsContainer.appendChild(option);
    }
  
    quizContainer.appendChild(optionsContainer);
  }
  

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();
