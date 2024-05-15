"use strict";

// Getting the html class selectors to be changed using JS
const firstComment = document.querySelector(".one");
const secondComment = document.querySelector(".two");
const thirdComment = document.querySelector(".three");
const fourthComment = document.querySelector(".four");
const fifthComment = document.querySelector(".five");
const commentContainer = document.querySelector(".comments");
const allComments = document.querySelectorAll(".boss");
const textAlert = document.querySelector(".in--comming-text");
const logOutAlert = document.querySelector(".logging-out-text");
const overlay = document.querySelector(".overlay");
const loginButton = document.querySelector(".submit--button");
const loginPage = document.querySelector(".main--1");
const userName = document.querySelector(".input--field");
// client page
const clientPage = document.querySelector(".main--2");
const overlay2 = document.querySelector(".overlay2");
const modal = document.querySelector(".modal--About-panda");
const closeModalButton = document.querySelector(".close--modal");
const aboutPandaButton = document.querySelector(".About--Panda");
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".heade-container");
const headerLogo = document.querySelector(".head");
const instructionsBtn = document.querySelector(".Instructions-btn");
const gameInstructionsPage = document.querySelector(".game-instructions");
const gamesPage = document.querySelector(".main--3-body");
const startGameBtn = document.querySelector(".Start--Game");
const gameScore = document.querySelector(".score-value");
const gameHighScore = document.querySelector(".high-score-value");
const gameMessage = document.querySelector(".display-text");
const gamePlayer = document.querySelector(".game-player");
const gameReadyBtn = document.querySelector(".button");
const gameTimer = document.querySelector(".timer");
const playAgain = document.querySelector(".retry");
const gameEndNotification = document.querySelector(".summary--notification");
// Hiding the html elements
allComments.forEach((comm) => comm.classList.add("hidden--comment"));
textAlert.classList.add("hidden--comment");
logOutAlert.classList.add("hidden--comment");
overlay.classList.add("hidden--comment");
// client page
clientPage.classList.add("hidden--clientPage");
modal.classList.add("hidden--clientPage");
overlay2.classList.add("hidden--clientPage");

// Making the html elements appear after a certain time interval
const form = document.querySelector(".form");
const formMessage = function () {
  setTimeout(function () {
    textAlert.classList.remove("hidden--comment");
  }, 3000);
  setTimeout(function () {
    textAlert.classList.add("hidden--comment");
  }, 4500);
  setTimeout(function () {
    overlay.classList.remove("hidden--comment");
    firstComment.classList.remove("hidden--comment");
  }, 5500);
  setTimeout(function () {
    firstComment.style.opacity = 0.7;
    secondComment.classList.remove("hidden--comment");
  }, 10000);
  setTimeout(function () {
    firstComment.classList.add("hidden--comment");
    secondComment.classList.remove("hidden--comment");
    secondComment.style.opacity = 0.7;
    thirdComment.classList.remove("hidden--comment");
  }, 13000);
  setTimeout(function () {
    secondComment.classList.add("hidden--comment");
    thirdComment.classList.remove("hidden--comment");
    thirdComment.style.opacity = 0.7;
    fourthComment.classList.remove("hidden--comment");
  }, 16000);
  setTimeout(function () {
    thirdComment.classList.add("hidden--comment");
    fourthComment.classList.remove("hidden--comment");
    fourthComment.style.opacity = 0.7;
    fifthComment.classList.remove("hidden--comment");
  }, 19000);
  setTimeout(function () {
    fourthComment.classList.add("hidden--comment");
    fifthComment.classList.add("hidden--comment");
    overlay.classList.add("hidden--comment");
  }, 22000);
  setTimeout(function () {
    logOutAlert.classList.remove("hidden--comment");
  }, 23500);
  setTimeout(function () {
    logOutAlert.classList.add("hidden--comment");
  }, 25500);

  form.removeEventListener("mouseenter", formMessage);
};
form.addEventListener("mouseenter", formMessage);

const body = document.querySelector("body");
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `linear-gradient(to top right, rgba(${randomNumber(90, 255)}, ${randomNumber(
    90,
    255
  )}, ${randomNumber(0, 255)}, 1), 
            rgba(${randomNumber(90, 255)}, ${randomNumber(
    90,
    255
  )}, ${randomNumber(0, 255)}, 1),
            rgba(${randomNumber(90, 255)}, ${randomNumber(
    90,
    255
  )}, ${randomNumber(0, 255)}, 1))`;

const bodyColorChange = setInterval(function () {
  //   body.style.background = randomColor();
}, 1500);

// Adding an event listner to the login button
let user;
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  user = userName.value;
  const errorMessage = document.querySelector(".login--notification");
  if (isFinite(user)) {
    console.log("I'm  IN");
    form.removeEventListener("mouseenter", formMessage);
    errorMessage.classList.add("login--notification-animation");
    setTimeout(function () {
      errorMessage.classList.remove("login--notification-animation");
    }, 3000);
  } else {
    loginPage.style.opacity = 0;
    setTimeout(function () {
      clientPage.classList.remove("hidden--clientPage");
    }, 1200);

    // Welcome message
    const welcomeMessage = document.querySelector(".welcome--notification");
    document.querySelector(".client").textContent = user;

    setTimeout(function () {
      welcomeMessage.classList.add("welcome--notification-animation");
    }, 1500);
    setTimeout(function () {
      welcomeMessage.classList.remove("welcome--notification-animation");
    }, 7700);
  }
  userName.value = "";
});

// Adding an event listners to the About Panda Button
aboutPandaButton.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden--clientPage");
  overlay2.classList.remove("hidden--clientPage");

  setTimeout(function () {
    modal.classList.add("hidden--clientPage");
    overlay2.classList.add("hidden--clientPage");
  }, 60000);
});
const hideModal = function () {
  modal.classList.add("hidden--clientPage");
  overlay2.classList.add("hidden--clientPage");
};
closeModalButton.addEventListener("click", function (e) {
  e.preventDefault();
  hideModal();
});
overlay2.addEventListener("click", function () {
  if (overlay2) {
    overlay2.classList.add("hidden--clientPage");
    hideModal();
  }
});
// clientPage.addEventListener("keydown", function (e) {
//   e.preventDefault();

//   if (e.key === "Escape") {
//     hideModal();
//   }
// });

// Styling the header in a nice way
const headerFunction = function (e, opacity, color) {
  if (e.target.classList.contains("nav--btn")) {
    const headerComponents = e.target;
    const allHeaderComponents = headerComponents
      .closest(".header")
      .querySelectorAll(".nav--btn");
    allHeaderComponents.forEach((e) => {
      if (e !== headerComponents) {
        e.style.backgroundColor = color;
        headerLogo.style.opacity = opacity;
      }
    });
  }
};
header.addEventListener("mouseover", function (e) {
  e.preventDefault();
  headerFunction(e, 0.8, "rgba(91, 95, 151, 0.228)");
});
header.addEventListener("mouseout", function (e) {
  e.preventDefault();
  headerFunction(e, 1, "");
});

// Smooth scrolling
instructionsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  gameInstructionsPage.scrollIntoView({ behavior: "smooth" });
});

// instruction btn
const firstGame = document.querySelector(".first-game");
const secondGame = document.querySelector(".second-game");
const thirdGame = document.querySelector(".third-game");
const selectGameNotification = document.querySelector(
  ".select-game-notification"
);
selectGameNotification.classList.add("select-game-notification-inactive");
startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  gamePlayer.textContent = user;
  document.querySelector(".guess-player").textContent = user;
  document.querySelector(".word-game-player").textContent = user;
  document.querySelector(".ng-player-name").textContent = user;
  document.querySelector(".ng-user").textContent = user;
  document.querySelector(".ng-panel").classList.add("ng-panel-diplay-inactive");
  setTimeout(() => {
    selectGameNotification.classList.remove(
      "select-game-notification-inactive"
    );
  }, 100);
  firstGame.addEventListener("click", () => {
    gamesPage.scrollIntoView({ behavior: "smooth" });
    selectGameNotification.classList.add("select-game-notification-inactive");
  });
  secondGame.addEventListener("click", () => {
    document
      .querySelector(".main-body-4")
      .scrollIntoView({ behavior: "smooth" });
    selectGameNotification.classList.add("select-game-notification-inactive");
  });

  thirdGame.addEventListener("click", () => {
    document
      .querySelector(".main-body-5")
      .scrollIntoView({ behavior: "smooth" });
    selectGameNotification.classList.add("select-game-notification-inactive");
  });
});

// Instructions tab
const instructionBtnContainer = document.querySelector(".instruction--buttons");
const instructionsBtns = document.querySelectorAll(".instruction--btn");
const instructionMessages = document.querySelectorAll(".Instruction");

instructionBtnContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".instruction--btn");
  if (!clicked) return;
  instructionsBtns.forEach((btn) =>
    btn.classList.remove("instruction--btn-active")
  );
  clicked.classList.add("instruction--btn-active");

  instructionMessages.forEach((message) =>
    message.classList.add("Instruction--message-inactive")
  );
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.message--${clicked.dataset.tab}`)
    .classList.remove("Instruction--message-inactive");
});

// Implementing a slider
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const rightBtn = document.querySelector(".right--btn");
const leftBtn = document.querySelector(".left--btn");

// Implementing dots on slider
const dotsContainer = document.querySelector(".dots");
const createDots = function () {
  slides.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="dot" data-slide=${i}></div>`
    )
  );
};
createDots(); // creates the dots based on the number of slides

const activeDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((d) => d.classList.remove("dot--active"));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};
activeDot(0); // activates the dots based on the number of slides

let currentSlide = 0;
const maxSlides = slides.length;
const goToSlide = function (currentSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${105 * (index - currentSlide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
};
rightBtn.addEventListener("click", nextSlide);

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
};
leftBtn.addEventListener("click", previousSlide);

// clicking the dots change slides
dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activeDot(slide);
  }
});

// Adding some notifications to the Instructions page
const pandaTextGame = document.querySelector(".boss--panda-text");
const gameNotification = document.querySelector(".instruction--notification");
pandaTextGame.classList.add("disable--game-notification");
gameNotification.classList.add("disable--game-notification");

const gameNotificationDisplay = function () {
  document.querySelector(".user").textContent = user;
  setTimeout(function () {
    pandaTextGame.classList.remove("disable--game-notification");
  }, 3000);
  setTimeout(function () {
    pandaTextGame.classList.add("disable--game-notification");
  }, 5000);
  setTimeout(function () {
    gameNotification.classList.remove("disable--game-notification");
  }, 5300);
  setTimeout(function () {
    gameNotification.classList.add("game--notification-animation");
  }, 7700);
  setTimeout(function () {
    gameNotification.classList.remove("game--notification-animation");
  }, 15700);
  setTimeout(function () {
    gameNotification.classList.add("disable--game-notification");
  }, 18300);

  document
    .querySelector(".main--content")
    .removeEventListener("click", gameNotificationDisplay);
};
document
  .querySelector(".main--content")
  .addEventListener("click", gameNotificationDisplay);

// moving the header on scrolling
// const headerSliderPage = document.querySelector(".main--2-headerPage");
// const hh = document.querySelector(".header").getBoundingClientRect().height;
// console.log(hh);
// const stickyHeader = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     header.classList.add("sticky--header");
//   } else {
//     header.classList.remove("sticky--header");
//   }
// };

// const headerObserver = new IntersectionObserver(stickyHeader, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${hh}px`,
// });
// headerObserver.observe(headerSliderPage);

const hhh = gameInstructionsPage.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  if (window.scrollY >= 608) {
    header.classList.add("sticky--header");
  } else {
    header.classList.remove("sticky--header");
  }
});

// const initialS1Coordinates = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialS1Coordinates.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

//////////////////////////////////////////////////////////////
// WORKING ON GUESS THE NUMBER GAME

// taking the players guess
const guessInput = document.querySelector(".guess-input");
const checkGuessBtn = document.querySelector(".check");
let randomSecretNumber = Math.trunc(Math.random() * 50) + 1;
let guessedNumber;
console.log(randomSecretNumber);
let score = 100;
let highScore = 0;
const logic = function () {
  guessedNumber = Number(guessInput.value);
  if (!guessedNumber) {
    gameMessage.textContent = "You Didn't Enter a Number";
  } else if (guessedNumber !== randomSecretNumber) {
    score = score - 5;
    if (score > 0) {
      gameMessage.textContent =
        guessedNumber < randomSecretNumber
          ? "Your guess is LOW"
          : "Your guess is HIGH";
    } else if (score === 0) {
      gameMessage.textContent = "You LOST!";
      gameScore.textContent = 0;
      document.querySelector(".hidden-guess").textContent = randomSecretNumber;
    }
  } else if (guessedNumber === randomSecretNumber) {
    gameMessage.textContent = "You WON!";
    document.querySelector(".hidden-guess").textContent = randomSecretNumber;
    checkGuessBtn.classList.add("check-inactive");
  }
  gameScore.textContent = score;
  guessInput.value = "";
};

// the start game button which activates the timer ---------
checkGuessBtn.classList.add("check-inactive");
gameReadyBtn.classList.add("click-once");
document.querySelector(".retry").classList.add("retry-inactive");
let clickCounts = 0;
const timerExecution = function () {
  let idealTime = 35;
  const ticks = function () {
    const minutes = String(Math.trunc(idealTime / 60)).padStart(2, "0");
    const seconds = String(Math.trunc(idealTime % 60)).padStart(2, "0");

    gameTimer.textContent = `${minutes}:${seconds}`;
    if (idealTime <= 10) {
      gameTimer.classList.add("timer-ending");
    }
    if (idealTime === 0) {
      clearInterval(tickingTimer);
      if (guessedNumber === randomSecretNumber) {
        clickCounts = 0;
        gameMessage.textContent = "You WON!";

        if (score >= 95) {
          gameEndNotify();
        }
      } else if (guessedNumber !== randomSecretNumber) {
        gameMessage.textContent = "You LOST!";
        if (0 < clickCounts < 4) {
          gameEndNotify();
        }
      } else {
        gameMessage.textContent = "-------------";
      }
      document.querySelector(".hidden-guess").textContent = randomSecretNumber;
      document.querySelector(".button").classList.add("button-inactive");
      document.querySelector(".retry").classList.remove("retry-inactive");
      gameScore.textContent = 0;
      setTimeout(function () {
        gameTimer.classList.remove("timer-ending");
        checkGuessBtn.classList.add("check-inactive");
      }, 100);

      if (guessedNumber === randomSecretNumber) {
        if (score > highScore) {
          highScore = score;
          gameHighScore.textContent = highScore;
        }
      }
    }
    idealTime--;
  };

  ticks();
  const tickingTimer = setInterval(ticks, 1000);
};

gameReadyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clickCounts++;
  document.querySelector(".hidden-guess").textContent = "?";
  checkGuessBtn.classList.remove("check-inactive");
  gameReadyBtn.classList.remove("click-once");
  gameMessage.textContent = "Start Guessing ...";

  setTimeout(function () {
    gameReadyBtn.classList.add("click-once");
  }, 35000);

  timerExecution();
});

checkGuessBtn.addEventListener("click", function (e) {
  e.preventDefault();
  logic();
});

document.querySelector(".retry").addEventListener("click", function (e) {
  e.preventDefault();
  playAgain.classList.add("retry-inactive");
  gameReadyBtn.classList.remove("button-inactive");
  document.querySelector(".hidden-guess").textContent = "?";
  gameMessage.textContent = "-------------";
  guessInput.value = "";
  score = 100;
  document.querySelector(".score-value").textContent = "---";
  randomSecretNumber = Math.trunc(Math.random() * 50) + 1;
  console.log(randomSecretNumber);
  document.querySelector(
    ".summary-info"
  ).textContent = `YOU WON THE GUESS THE NUMBER CHALLENGE BY ${score}/100`;
  document.querySelector(
    ".final-game-message"
  ).textContent = `WOW! YOU PROOVED TO ME INDEED YOU SAW ME COMING, CONGRATULATIONS ${user}`;
});

// congratulating the user notification
gameEndNotification.classList.add("summary--notification-inactive");
const gameEndNotify = function () {
  if (guessedNumber === randomSecretNumber) {
    document.querySelector(
      ".final-game-message"
    ).textContent = `WOW! YOU PROOVED TO ME INDEED YOU SAW ME COMING, CONGRATULATIONS💐 ${user}`;
    document.querySelector(
      ".summary-info"
    ).textContent = `YOU WON THE GUESS THE NUMBER CHALLENGE BY ${score}/100`;
    console.log(score);
  } else {
    document.querySelector(".summary-info").textContent =
      "SORRY YOU LOST THE GAME, I THOUGHT YOU WERE FAST!";
    if (clickCounts === 1) {
      document.querySelector(
        ".final-game-message"
      ).textContent = `OOWWW! SO SOON 😂😂 TOLD YOU I'M DIFFICULT TO BE BEATEN RIGHT? ${user}`;
    } else if (clickCounts === 2) {
      document.querySelector(
        ".final-game-message"
      ).textContent = `😂😂 ... HAHAHAHA!! YOU LOST AGAIN! I THOUGHT U HAD THE BALLS TO STAND THIS CHALLENGE ${user}`;
    } else if (clickCounts === 3) {
      document.querySelector(
        ".final-game-message"
      ).textContent = `😂😂😂😂 ... HEHEHEHEHE! INDEED YOU WILL NEVER SEE ME COMING ${user}`;
      clickCounts = 0;
    }
  }
  setTimeout(function () {
    gameEndNotification.classList.remove("summary--notification-inactive");
    document.querySelector(".retry").classList.add("retry-inactive");
  }, 2000);
  setTimeout(function () {
    gameEndNotification.classList.add("summary--notification-inactive");
    document.querySelector(".retry").classList.remove("retry-inactive");
  }, 17000);
};

// END OF GUESS THE NUMBER GAME
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// WORD SCRAMBLE GAME

const colorDots1 = document.querySelectorAll(".animation-dot-1");
const colorDots2 = document.querySelectorAll(".animation-dot-2");
const Dots1colors = ["chocolate", "white"];
const Dots2colors = ["white", "chocolate"];
const Dots1bgChange = ["blueviolet", "white"];
const Dots2bgChange = ["White", "blueviolet"];
let dotTimer = 1;
let bgChange = 0;
setInterval(() => {
  colorDots1.forEach(
    (dot) => (dot.style.backgroundColor = Dots1colors[dotTimer])
  );
  colorDots2.forEach(
    (dot) => (dot.style.backgroundColor = Dots2colors[dotTimer])
  );
  dotTimer--;
  if (bgChange === 2) {
    colorDots1.forEach(
      (dot) =>
        (dot.style.backgroundColor = Dots1bgChange[dotTimer === 1 ? 0 : 1])
    );
    colorDots2.forEach(
      (dot) =>
        (dot.style.backgroundColor = Dots2bgChange[dotTimer === 1 ? 0 : 1])
    );
    bgChange = 0;
  }
  if (dotTimer < 0) {
    dotTimer = 1;
    bgChange++;
  }
}, 1000);

let words = [
  "ABSTINENCE",
  "ACCELERATION",
  "AMPERSAND",
  "APPRENTICE",
  "ARSENAL",
  "BALCONY",
  "BARBARIAN",
  "BEAUTIFUL",
  "BILATERAL",
  "BLASPHEMY",
  "CACHE",
  "CALCULUS",
  "CHRONICLE",
  "CARETAKER",
  "CATALYST",
  "COMPROMISE",
  "DECEPTION",
  "DEFENDANT",
  "DESCRIPTION",
  "DIABOLIC",
  "DISGUISE",
  "EARNEST",
  "ELECTROLYTE",
  "EMINENCE",
  "EMPIRICAL",
  "ETERNITY",
  "EXTRAVAGANT",
  "FAHRENHEIT",
  "FAMISHED",
  "FERVENT",
  "FOLKLORE",
  "FORTHCOMING",
  "FRACTION",
  "GALORE",
  "GENEALOGY",
  "GEOMETRY",
  "GRUELLING",
  "GUZZLE",
  "HAPHAZARD",
  "HEARSE",
  "HEROINE",
  "HISTORIC",
  "HYPOTHESIS",
  "ILLICIT",
  "IMPOSTER",
  "INCENTIVE",
  "INCESSANT",
  "INFECTIOUS",
  "IRRATIONAL",
  "JAUNT",
  "JURISDICTION",
  "JUPITER",
  "JUDGEMENT",
  "JEHOVAH",
  "KIDNEY",
  "KNIGHT",
  "KINDNESS",
  "KEEN",
  "KARATE",
  "LANGUAGE",
  "LEISURE",
  "LEVERAGE",
  "LIFETIME",
  "LOYAL",
  "MALICIOUS",
  "MANOEUVRE",
  "MARKETING",
  "MASSAGE",
  "MECENARY",
  "MILLENNIUM",
  "MYTHOLOGY",
  "NECESSITY",
  "NAUGHTY",
  "NETWORK",
  "NOCTURNAL",
  "NOTHING",
  "NOTORIOUS",
  "OBSERVATION",
  "OBTUSE",
  "ODYSSEY",
  "OHM",
  "OMNIPOTENT",
  "OPERA",
  "ORATOR",
  "PAIN",
  "PARADOX",
  "PATCH",
  "PENSIVE",
  "PHOBIA",
  "POTENTIAL",
  "PUZZLE",
  "QUALITATIVE",
  "QUESTION",
  "QUICK",
  "QUIVER",
  "QUOTATION",
  "RACISM",
  "RARE",
  "RAY",
  "RECLINE",
  "REHEARSE",
  "REVENGE",
  "RUTHLESS",
  "SACRAMENT",
  "SCALE",
  "SCEPTICAL",
  "SCHEME",
  "SEDUCE",
  "SHADOW",
  "SYSTEMATIC",
  "TEMPTATION",
  "TERTIARY",
  "TIME",
  "TOLERATE",
  "TRIGONOMETRY",
  "UNDERSTAND",
  "UPDATE",
  "VACUUM",
  "VELOCITY",
  "VERIFY",
  "WATERPROOF",
  "WEBSITE",
  "WISH",
  "WORD",
  "WORTHY",
  "YOUTH",
  "ZINC",
];

let wordsMeaning = [
  "delibrately not doing something you enjoy",
  "the rate at which the speed of something is increasing",
  "a character meaning AND",
  " a person who works for a period of time with a skilled craftsman to learn a skill or trade",
  " a place where weapons and ammunition are stored or produced",
  "a platform on the outside of a building with a wall or railing around it",
  "a member of a wild or uncivilised people",
  "very attractive or pleasing",
  "an agreement made between two people or countries",
  "a speech or behaviour that shows disrespect for God or religion",
  "a store of things hidden away",
  "a branch of mathematics concerned with amount and rates that change",
  "a record of series of events descrcibed in the order which they happened ",
  "having an important position for a short time until a new person is appointed",
  "something that cause change to happen",
  "an agreement in which people accept less than they originally wanted",
  "something that is intended to trick someone",
  "a person who has been accused of crime in the court of law",
  "an account or picture of something in words",
  "extremely wicked or cruel",
  "to change the appearance of something so that people do not recognise it",
  "sincere in what you do or say",
  "a substance that electricity can pass through",
  "the quality of being well know and respected for what you do",
  "something based on practical experiences than theories",
  "a state of existing outside time or time without time",
  "spending more money than is reasonable or affordable",
  "a scale of temperature in which the freezing point of water is 32 degrees",
  "very hungry",
  "showing strong sincere, and enthusiastic feeling",
  "traditional beliefs and stories of a community",
  "planned to happen soon",
  "a part of a whole number",
  "in very large numbers",
  "the study of the history of families or a particular family",
  "a branch of mathematics that deals with lines, angles, curves and spaces",
  "difficult and tiring",
  "to eat or drink something greedily and quickly",
  "not organised or planned",
  "a large car that carries a coffin at a funeral",
  "the main female character in a book, film or play",
  "important in the past or likely to be seen as important in the future",
  "an explanation or theory which has not yet been proved or correct",
  "not allowed by the law or not approved by the society",
  "a person who pretends to be someone else in order to get things they want",
  "something that encourages you to do something",
  "continuing something without stopping",
  "spreading from one person to the other",
  "something not based on logical reasoning",
  "a journey or trip you go on for pleasure",
  "power or authority",
  "the largest planet in the solar system and fifth from the sun",
  "an opinion or decision based on evidence",
  "the name of God in the old testament",
  "an organ in the body that remove waste from the blood",
  'a man who has been given the title "sir" by a king or queen',
  "the quality of being considerate towards others",
  "quick to notice or understand",
  "a sport in which people fight with their hands, elbows, feets and legs",
  "a system of words people use to communicate with each other",
  "a period of time during which you do not have to work, and can do what u enjoy doing",
  "knowledge of something that you can use to make someone do some thing you want",
  "a period of time during which you are alive",
  "firm in your friendship or support for someone or something",
  "something that is intended to harm someone",
  "a clever move you make in order to change a situation to your advantage",
  "part of business concerned with the way a product is sold",
  "a treatment which involves rubbing the body",
  "a soldier who is paid to fight for a forign country",
  "a period of 1000 years",
  "stories that have been made in the past to explain natural phenomena",
  "the need to do something",
  "behaving badly",
  "a large number of lines which cross each other at many points",
  "active at night",
  "nil",
  "well known for something bad",
  "something you have seen or noticed",
  "someone who is stupid or slow in understanding things",
  "a long and eventful journey",
  "a unit of electrical resistance",
  "having very great or unlimited power",
  "a play in which words are sung rather than spoken",
  "omeone who is good at making speeches",
  "unpleasant feeling",
  "something that conain two ideas that seem to contradict each other",
  "a piece of material used to cover a hole",
  "deep in thought",
  "a great fear or hatred for something",
  "you ability to achieve success in the future",
  "to confuse you and take away your understanding",
  "relating to the quality of something",
  "a problem that need to be discussed",
  "happening without any delay",
  "to tremble",
  "an extract from a book or speech",
  "treatment of some people as inferior because of their race",
  "does not happen often",
  "a beam of light",
  "to lie or lean back at something",
  "to practice in preparation for an actual event",
  "retaliation",
  "very harsh or cruel",
  "an important ceremony such as baptism, marriage",
  "size or extent",
  "to have doubts about something",
  "a plan or arrangements",
  "persuaded to do something beacuse it is attractive",
  "caused by light not reaching a place",
  "following a fixed plan that is done in an efficient way",
  "something you want to do or have even though it might be wrong or harmful",
  "third in order of importance",
  "to mean a particular period or point",
  "endure",
  "a branch of mathematics concerned with measuring angles",
  "to know the WHY about the happening of something",
  "to make something modern",
  "a space sontaining no air",
  "the speed at which something is moving in a particular direction",
  "to check that it is true",
  "not letting water to pass through",
  "a publication of the world wide web which contains information about a particular subject",
  "longing or desire for something",
  " a single unit of language that has meaning",
  "to deserve something",
  "a period in ones life before full maturiry into adulthooh",
  "a mettalic element used in alloys and coat metal surfaces to prevent rusting",
];

// mixing the letters of the random word generated
let randomWordIndex = Math.trunc(Math.random() * words.length) + 1;
console.log(words[randomWordIndex], wordsMeaning[randomWordIndex]);
let generatedWord = words[randomWordIndex];
let generatedMeaning = wordsMeaning[randomWordIndex];
let sameWord = [...generatedWord];
let evenLetters = [];
let oddLetters = [];
let otherLetters = [];

// word mixing engine
function mixingWordEngine() {
  let scrambleWord = [];
  document.querySelector(".display-1").textContent = "";
  sameWord.forEach((letter, index) => {
    if (index % 2 === 0) {
      evenLetters.push(letter);
    } else if (index % 3 === 0) {
      oddLetters.push(letter);
    } else {
      otherLetters.push(letter);
    }
  });
  scrambleWord.push(...otherLetters, ...evenLetters, ...oddLetters);

  // updating the UI with the mixed letters of the random word
  scrambleWord.forEach((sl, i) => {
    document
      .querySelector(".display-1")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="letter" data="${i}">${sl}</div>`
      );
  });
  // updating the UI with the meaning of the random word
  document.querySelector(".meaning").textContent = `" ${generatedMeaning} "`;
}
mixingWordEngine();

// user word input
let guessedWordInput;
const wordInput = document.querySelector(".guessed-word");
const wordInputBtn = document.querySelector(".user-inputs-check");
wordInputBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".user-inputs-display-offest").textContent = "";
  const wordInputArray = [];
  guessedWordInput = wordInput.value.toUpperCase();
  wordInputArray.push(...guessedWordInput);
  wordInputArray.forEach((letter, index) => {
    document
      .querySelector(".user-inputs-display-offest")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="guessed-letter" >${letter}</div>`
      );

    let ggg = [];
    if (index % 2 === 0) {
      ggg.push(letter);
    } else;
  });
  wordInput.value = "";

  wordGuessEngine();
});

// implementing a timer
let idealTime;
function idealTimeCheck() {
  if (generatedWord.length <= 5) {
    idealTime = 25;
  } else if (generatedWord.length > 5 && generatedWord.length <= 10) {
    idealTime = 40;
  } else if (generatedWord.length > 10) {
    idealTime = 45;
  }
}
idealTimeCheck();
const wgPlayAgain = document.querySelector(".user-inputs-play-again");
wgPlayAgain.style.display = "none";
function wgTimer() {
  function wgTicks() {
    const min = String(Math.trunc(idealTime / 60)).padStart(2, "0");
    const sec = String(Math.trunc(idealTime % 60)).padStart(2, "0");
    document.querySelector(".count-down-time").textContent = `${min}:${sec}`;
    if (idealTime <= 10) {
      document
        .querySelector(".count-down-time")
        .classList.add("count-down-time-ending");
    }
    if (idealTime === 0) {
      if (guessedWordInput === generatedWord) {
        wordInput.style.transform = "translateY(0%)";
      }
      clearInterval(ff);
      wordInput.value = "";
      wordInputBtn.style.display = "none";
      wgPlayAgain.style.display = "unset";

      setTimeout(() => {
        document
          .querySelector(".count-down-time")
          .classList.remove("count-down-time-ending");
      }, 100);

      setTimeout(() => {
        wgNotify();
      }, 3000);

      setTimeout(() => {
        wgNotification.style.display = "none";
        wgPlayAgain.style.display = "unset";
      }, 15000);

      document.querySelector(".display-1").textContent = "";
      [...generatedWord].forEach((sl, i) => {
        document
          .querySelector(".display-1")
          .insertAdjacentHTML(
            "beforeend",
            `<div class="letter" data="${i}">${sl}</div>`
          );
      });

      // implementing the play again button user-inputs-play-again
      wgPlayAgain.addEventListener("click", () => {
        wgReady.style.display = "unset";
        wgPlayAgain.style.display = "none";
        wordInput.value = "";
        wordInputBtn.style.display = "none";
        document.querySelector(".user-inputs-display-offest").textContent = "";
        document.querySelector(
          ".change-message"
        ).textContent = `you are to guess the right word before the timer
        stops or you lose!`;
        randomWordIndex = Math.trunc(Math.random() * words.length) + 1;
        console.log(randomWordIndex);
        generatedWord = words[randomWordIndex];
        generatedMeaning = wordsMeaning[randomWordIndex];
        sameWord = [...generatedWord];
        idealTimeCheck();
        // word mixing engine
        let x = [];
        let y = [];
        let z = [];
        let scrambleWord = [];
        document.querySelector(".display-1").textContent = "";
        sameWord.forEach((letter, index) => {
          if (index % 2 === 0) {
            x.push(letter);
          } else if (index % 3 === 0) {
            y.push(letter);
          } else {
            z.push(letter);
          }
        });
        scrambleWord.push(...z, ...x, ...y);

        // updating the UI with the mixed letters of the random word
        scrambleWord.forEach((sl, i) => {
          document
            .querySelector(".display-1")
            .insertAdjacentHTML(
              "beforeend",
              `<div class="letter" data="${i}">${sl}</div>`
            );
        });
        // updating the UI with the meaning of the random word
        document.querySelector(
          ".meaning"
        ).textContent = `" ${generatedMeaning} "`;
        console.log(words[randomWordIndex], wordsMeaning[randomWordIndex]);
      });
    }
    idealTime--;
  }
  wgTicks();
  const ff = setInterval(wgTicks, 1000);
}

// implementing the ready button
const wgReady = document.querySelector(".user-inputs-ready");
wordInputBtn.classList.add("user-inputs-check-inactive");
wgReady.addEventListener("click", () => {
  wgTimer();
  wgReady.style.display = "none";
  wordInput.value = "";
  wordInputBtn.style.display = "unset";
});

// checking if the user's word guess is correct
function wordGuessEngine() {
  if (guessedWordInput === generatedWord) {
    document.querySelector(".change-message").textContent =
      "Congratulations! that was a nice and fast move there!";
    wordInputBtn.style.display = "none";
    wordInput.style.transform = "translateY(50%)";
  } else if (guessedWordInput === "") {
    document.querySelector(".change-message").textContent =
      " you didn't enter a word or letter";
  } else {
    document.querySelector(".change-message").textContent =
      " your guess is wrong. Try again";
  }
}

// displaying message on congratulating the player
const wgNotification = document.querySelector(".wg-notification");
wgNotification.style.display = "none";
function wgNotify() {
  wgNotification.style.display = "unset";
  wgPlayAgain.style.display = "none";
  document.querySelector(".wg-message-word").textContent = generatedWord;
  document.querySelector(".wg-message-meaning").textContent = generatedMeaning;

  if (guessedWordInput === generatedWord) {
    document.querySelector(
      ".wg-boss-panda-msg"
    ).textContent = `Wow that was great! i hope you learnt something new today`;
    document.querySelector(
      ".wg-score-msg"
    ).textContent = `${user}, you won the game. indeed you saw boss panda coming!`;
  } else {
    document.querySelector(
      ".wg-boss-panda-msg"
    ).textContent = `oh you lost! but i hope you learnt something new today`;
    document.querySelector(
      ".wg-score-msg"
    ).textContent = `${user}, you lost the game. we thought you had stamina to face boss panda`;
  }
}

// END OF THE SCAMBLE WORD GAME
///////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// PANDA FAST CLICKS

// generating the number randomly with the colors to emphasize the current index
const ngBoxes = document.querySelectorAll(".ng-number-box");
// diplaying the options when panda clicks btn is clicked
const ngReadybtn = document.querySelector(".ng-click-ready");
const ngPlayAgainBtn = document.querySelector(".ng-play-again");
const ngPanel = document.querySelector(".ng-panel");
const ngSelectMode = document.querySelector(".ng-select-game-mode");
const ngGameModeBtns = document.querySelectorAll(".ng-select-game-mode-btn");
const ngPanelClose = document.querySelector(".ng-panel-close");
const ngNotification = document.querySelector(".ng-notification");
ngNotification.classList.add("ng-notification-inactive");
ngPanelClose.style.display = "none";
ngPlayAgainBtn.style.display = "none";
ngReadybtn.style.display = "none";
ngPanel.classList.add("ng-panel-diplay-inactive");
let randomBoxNumber;
let seconds;

// implementing the timer
function ngTimer() {
  let ngIdealTime = 30;
  function ngTicks() {
    let min = String(Math.trunc(ngIdealTime / 60)).padStart(2, "0");
    let sec = String(Math.trunc(ngIdealTime % 60)).padStart(2, "0");

    document.querySelector(".ng-timer-countdown").textContent = `${min}:${sec}`;

    if (ngIdealTime <= 10) {
      document.querySelector(".ng-timer-countdown").style.color = "crimson";
    }
    if (ngIdealTime === 0) {
      clearInterval(ngDisplayTimer);
      randomBoxNumber = 100;
      setTimeout(() => {
        document.querySelector(".ng-timer-countdown").style.color = "black";
        document.querySelector(".ng-clicked-number").textContent = "00";
      }, 500);
    }
    ngIdealTime--;
  }
  ngTicks();
  let ngDisplayTimer = setInterval(ngTicks, 1000);
}

function eee() {
  let ccc = setInterval(() => {
    randomBoxNumber = Math.trunc(Math.random() * 60) + 1;
    ngBoxes.forEach((box, i) => {
      if (i + 1 === randomBoxNumber) {
        box.style.backgroundColor = "rgb(0, 139, 139)";
        box.style.color = "white";
        setTimeout(() => {
          box.style.backgroundColor = "white";
          box.style.color = "black";
        }, seconds - (seconds / 10 >= 100 ? 100 : 10));
      }
    });
  }, seconds);

  // implementing click on the boxes
  ngBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      document.querySelector(".ng-clicked-number").textContent = String(
        box.dataset.secretNumber
      ).padStart(2, "0");
      if (Number(box.dataset.secretNumber) === randomBoxNumber) {
        clearInterval(ccc);
        document.querySelector(".ng-notification-pfc-msg").textContent =
          "DAMMN! THAT WAS A FAST MOVE THERE. I THOUGHT YOU WILL NEVER CATCH THE BOX... CONGRATULATIONS";
        document.querySelector(
          ".ng-notification-bp-msg"
        ).textContent = `...I WAS FAST BUT WITH YOUR CLICKS YOU ARE FASTER. WELL DONE ${user}`;
      } else {
        document.querySelector(".ng-notification-pfc-msg").textContent =
          "SORRY YOU LOST TO BOSS PANDA. IF YOU THINK YOU ARE FASTER THAN MILLI SECONDS, THEN TRY AGAIN!!";
        document.querySelector(
          ".ng-notification-bp-msg"
        ).textContent = `...HAHAHAHA 😂😂😂 JUST LIKE THIN AIR, YOU WILL NEVER SEE ME COMING ${user}. INDEED I'M THE BOSS OF THE BAMBOOS`;
      }
    });

    setTimeout(() => {
      document.querySelectorAll(".ng-number-box").forEach((box) => {
        box.style.opacity = "0.7";
      });
      ngNotification.classList.remove("ng-notification-inactive");
    }, 32000);
    setTimeout(() => {
      ngNotification.classList.add("ng-notification-inactive");
      document.querySelectorAll(".ng-number-box").forEach((box) => {
        box.style.opacity = "1";
      });
    }, 42000);
    setTimeout(() => {
      ngPanel.classList.remove("ng-panel-diplay-inactive");
    }, 42500);

    setTimeout(() => {
      clearInterval(ccc);
    }, 29800);
  });
}

ngReadybtn.addEventListener("mouseenter", () => {
  ngPanel.classList.add("ng-panel-in");
});
ngReadybtn.addEventListener("mouseout", () => {
  ngPanel.classList.add("ng-panel-out");
  ngPanel.classList.remove("ng-panel-in");
});

ngPlayAgainBtn.addEventListener("mouseenter", () => {
  ngPanel.classList.add("ng-panel-in");
});
ngPlayAgainBtn.addEventListener("mouseout", () => {
  ngPanel.classList.add("ng-panel-out");
  ngPanel.classList.remove("ng-panel-in");
});

ngReadybtn.addEventListener("click", () => {
  ngPlayAgainBtn.style.display = "unset";
  ngPanelClose.style.display = "unset";
  ngReadybtn.style.display = "none";
  ngPanel.classList.add("ng-panel-diplay-inactive");
  ngTimer();
  eee();
});
ngPlayAgainBtn.addEventListener("click", () => {
  ngPlayAgainBtn.style.display = "none";
  ngSelectMode.style.display = "unset";
  ngPanelClose.style.display = "none";
});
ngPanelClose.addEventListener("click", () => {
  ngPanel.classList.add("ng-panel-diplay-inactive");
});

ngGameModeBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    ngPanel.classList.add("ng-panel-in");
  });
  btn.addEventListener("mouseout", () => {
    ngPanel.classList.add("ng-panel-out");
    ngPanel.classList.remove("ng-panel-in");
  });

  btn.addEventListener("click", () => {
    ngReadybtn.style.display = "unset";
    ngSelectMode.style.display = "none";

    if (Number(btn.dataset.mode) === 1) {
      seconds = 1000;
    } else if (Number(btn.dataset.mode) === 2) {
      seconds = 700;
    } else if (Number(btn.dataset.mode) === 3) {
      seconds = 400;
    }
    console.log(seconds);
  });

  thirdGame.addEventListener("click", () => {
    setTimeout(() => {
      ngPanel.classList.remove("ng-panel-diplay-inactive");
    }, 1500);
  });
});

window.onresize = screen;
window.onload = screen;
const hideUI = document.querySelector(".hide-UI-notification");
hideUI.style.display = "none";

function screen() {
  let myWidth = window.innerWidth;
  console.log(myWidth);
  if (myWidth < 1200) {
    hideUI.style.display = "unset";
    loginPage.style.display = "none";
    clientPage.classList.add("page-2-hide");
    document.querySelectorAll(".ng-number-box").forEach((box) => {
      box.style.padding = "0";
    });
  } else {
    loginPage.style.display = "unset";
    clientPage.classList.remove("page-2-hide");
    hideUI.style.display = "none";
  }
}
