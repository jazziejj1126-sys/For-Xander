Const letters = {

    1: {
        Title: “Before I Knew You”,
        Content: `
            <p>Dear you,</p>

            <p>
            Write your first letter here.
            Talk about who you were before you met him,
            And how you never expected someone like him
            To become important to you.
            </p>

            <p>
            Write everything you want him to know.
            </p>

            <p>— yours</p>
        `
    },

    2: {
        Title: “The Way You Make Me Feel”,
        Content: `
            <p>Dear you,</p>

            <p>
            Write about the way he makes you feel.
            The comfort, excitement, safety, happiness,
            Or even the little nervous feelings.
            </p>

            <p>— yours</p>
        `
    },

    3: {
        Title: “Things I Never Say”,
        Content: `
            <p>Dear you,</p>

            <p>
            These are the things I think about
            But sometimes don’t know how to say.
            </p>

            <p>— yours</p>
        `
    },

    4: {
        Title: “On Ordinary Days”,
        Content: `
            <p>Dear you,</p>

            <p>
            Write about the small things you love.
            The conversations, jokes, messages,
            Habits, expressions, and ordinary moments.
            </p>

            <p>— yours</p>
        `
    },

    5: {
        Title: “I Remember This”,
        Content: `
            <p>Dear you,</p>

            <p>
            Write about one specific memory
            That you never want to forget.
            </p>

            <p>— yours</p>
        `
    },

    6: {
        Title: “If You Could Read My Mind”,
        Content: `
            <p>Dear you,</p>

            <p>
            If you could see everything that goes
            Through my mind about you, this is what
            You would find.
            </p>

            <p>— yours</p>
        `
    },

    7: {
        Title: “For Your Difficult Days”,
        Content: `
            <p>Dear you,</p>

            <p>
            For the days when everything feels heavy,
            I want you to remember this.
            </p>

            <p>— yours</p>
        `
    },

    8: {
        Title: “Thank You”,
        Content: `
            <p>Dear you,</p>

            <p>
            Thank you for the things you probably
            Don’t even realize you do.
            </p>

            <p>— yours</p>
        `
    },

    9: {
        Title: “The Things I Love”,
        Content: `
            <p>Dear you,</p>

            <p>
            Here is a list of the little things
            I love about you.
            </p>

            <p>— yours</p>
        `
    },

    10: {
        Title: “If We Ever Get Lost”,
        Content: `
            <p>Dear you,</p>

            <p>
            If life ever gets complicated,
            I hope you remember what we were
            And what we meant to each other.
            </p>

            <p>— yours</p>
        `
    },

    11: {
        Title: “What I Hope For Us”,
        Content: `
            <p>Dear you,</p>

            <p>
            Here are the things I quietly hope
            Life gives us.
            </p>

            <p>— yours</p>
        `
    },

    12: {
        Title: “One More Thing”,
        Content: `
            <p>Dear you,</p>

            <p>
            If you remember nothing else from
            These letters, remember this.
            </p>

            <p>— yours</p>
        `
    }

};


Let currentLetter = 1;


Function openLetters() {

    Document.getElementById(“letters”)
        .scrollIntoView({
            Behavior: “smooth”
        });

}


Function openLetter(number) {

    currentLetter = number;

    document.getElementById(“letters”)
        .style.display = “none”;

    Document.getElementById(“home”)
        .style.display = “none”;

    Document.getElementById(“reader”)
        .classList.add(“active”);

    showLetter(number);

}


Function showLetter(number) {

    Const letter = letters[number];

    Document.getElementById(“letterNumber”)
        .textContent = “LETTER “ + String(number).padStart(2, “0”);

    Document.getElementById(“letterTitle”)
        .textContent = letter.title;

    Document.getElementById(“letterContent”)
        .innerHTML = letter.content;

    Window.scrollTo(0, 0);

}


Function closeLetter() {

    Document.getElementById(“reader”)
        .classList.remove(“active”);

    Document.getElementById(“letters”)
        .style.display = “block”;

    Document.getElementById(“home”)
        .style.display = “flex”;

    Document.getElementById(“letters”)
        .scrollIntoView({
            Behavior: “smooth”
        });

}


Function nextLetter() {

    If (currentLetter < 12) {
        currentLetter++;
        showLetter(currentLetter);
    }

}


Function previousLetter() {

    If (currentLetter > 1) {
        currentLetter--;
        showLetter(currentLetter);
    }

}
