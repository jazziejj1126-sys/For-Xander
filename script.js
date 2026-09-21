const letters = {

    1: {
        title: "Before I Knew You",
        content: `
            <p>Dear you,</p>

            <p>
            Write your first letter here.
            Talk about who you were before you met him,
            and how you never expected someone like him
            to become important to you.
            </p>

            <p>
            Write everything you want him to know.
            </p>

            <p>— yours</p>
        `
    },

    2: {
        title: "The Way You Make Me Feel",
        content: `
            <p>Dear you,</p>

            <p>
            Write about the way he makes you feel.
            The comfort, excitement, safety, happiness,
            or even the little nervous feelings.
            </p>

            <p>— yours</p>
        `
    },

    3: {
        title: "Things I Never Say",
        content: `
            <p>Dear you,</p>

            <p>
            These are the things I think about
            but sometimes don't know how to say.
            </p>

            <p>— yours</p>
        `
    },

    4: {
        title: "On Ordinary Days",
        content: `
            <p>Dear you,</p>

            <p>
            Write about the small things you love.
            The conversations, jokes, messages,
            habits, expressions, and ordinary moments.
            </p>

            <p>— yours</p>
        `
    },

    5: {
        title: "I Remember This",
        content: `
            <p>Dear you,</p>

            <p>
            Write about one specific memory
            that you never want to forget.
            </p>

            <p>— yours</p>
        `
    },

    6: {
        title: "If You Could Read My Mind",
        content: `
            <p>Dear you,</p>

            <p>
            If you could see everything that goes
            through my mind about you, this is what
            you would find.
            </p>

            <p>— yours</p>
        `
    },

    7: {
        title: "For Your Difficult Days",
        content: `
            <p>Dear you,</p>

            <p>
            For the days when everything feels heavy,
            I want you to remember this.
            </p>

            <p>— yours</p>
        `
    },

    8: {
        title: "Thank You",
        content: `
            <p>Dear you,</p>

            <p>
            Thank you for the things you probably
            don't even realize you do.
            </p>

            <p>— yours</p>
        `
    },

    9: {
        title: "The Things I Love",
        content: `
            <p>Dear you,</p>

            <p>
            Here is a list of the little things
            I love about you.
            </p>

            <p>— yours</p>
        `
    },

    10: {
        title: "If We Ever Get Lost",
        content: `
            <p>Dear you,</p>

            <p>
            If life ever gets complicated,
            I hope you remember what we were
            and what we meant to each other.
            </p>

            <p>— yours</p>
        `
    },

    11: {
        title: "What I Hope For Us",
        content: `
            <p>Dear you,</p>

            <p>
            Here are the things I quietly hope
            life gives us.
            </p>

            <p>— yours</p>
        `
    },

    12: {
        title: "One More Thing",
        content: `
            <p>Dear you,</p>

            <p>
            If you remember nothing else from
            these letters, remember this.
            </p>

            <p>— yours</p>
        `
    }

};


let currentLetter = 1;


function openLetters() {

    document.getElementById("letters")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function openLetter(number) {

    currentLetter = number;

    document.getElementById("letters")
        .style.display = "none";

    document.getElementById("home")
        .style.display = "none";

    document.getElementById("reader")
        .classList.add("active");

    showLetter(number);

}


function showLetter(number) {

    const letter = letters[number];

    document.getElementById("letterNumber")
        .textContent = "LETTER " + String(number).padStart(2, "0");

    document.getElementById("letterTitle")
        .textContent = letter.title;

    document.getElementById("letterContent")
        .innerHTML = letter.content;

    window.scrollTo(0, 0);

}


function closeLetter() {

    document.getElementById("reader")
        .classList.remove("active");

    document.getElementById("letters")
        .style.display = "block";

    document.getElementById("home")
        .style.display = "flex";

    document.getElementById("letters")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function nextLetter() {

    if (currentLetter < 12) {
        currentLetter++;
        showLetter(currentLetter);
    }

}


function previousLetter() {

    if (currentLetter > 1) {
        currentLetter--;
        showLetter(currentLetter);
    }

}
