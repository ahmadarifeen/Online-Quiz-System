// Sample questions array with MCQs, dropdowns, and fill-in-the-blank questions
const questions = [
    {
        type: "mcq",
        question: `
            <strong>DIRECTIONS:</strong> Study the information and graphic, read each question, and choose the best answer.<br><br>
            The periodic table organizes all of the elements. Each box of the periodic table presents information about the atoms that comprise an element. For example, each atom of element "X" in the example box below has an atomic number of "A" and an average atomic mass of "Z". The atomic number is the number of protons per atom. The atomic mass is the mass of one atom of the element expressed in atomic mass units.
        `,
        image: "1.jpeg",
        additionalText: "What information about silicon is provided by the excerpt from the periodic table?",
        options: ["A. An atom of silicon has 14 protons.", "B. There is an average of 14 protons in each silicon atom.", "C. There are 28.09 protons in each silicon atom.", "D. Each silicon atom has 28.09 neutrons."],
        correct: "A. An atom of silicon has 14 protons."
    },
    {
        type: "mcq",
        question: "Why is atomic mass an average?",
        options: ["A. The number of neutrons is variable.", "B. The number of protons is variable", "C. The mass of electrons is variable", "D. The mass of protons is variable."],
        correct: "A. The number of neutrons is variable."
    },

    {
        type: "mcq",
        question: `
            <strong>DIRECTIONS:</strong> Read the passage and Question, and choose the <b>best </b> answer. <br><br>
            Work is directly proportional to both force and distance, so decreasing force while increasing distance- or vice versa-results in the same amount of work. This is the idea behind simple machines. The amount of work needed to lift an object, for example, would be the same whether it is lifted straight upward or carried up a ramp. Using the ramp requires more distance, but less force. A ramp is a type of simple machine.<br><br>
            Simple machines make work easier by changing the magnitude or direction of the force needed to perform the work. That difference in force is called mechanical advantage, or MA. The equation for calculating mechanical advantage is:
            

        `,
        image: "3.jpeg",
        additionalText: "A pulley is a simple machine. A system of pulleys is installed in a factory to allow a worker to lift heavy crates. If the worker exerts a force of 600 newtons (N) on the pulley system to lift a crate that weighs 1,800 N, what is the mechanical advantage of the pulley system?",
        options: ["A.18", "B.6", "C.3", "D.0.3"],
        correct: "C.3"
    },
    {
        type: "mcq",
        question: `
            <strong>DIRECTIONS:</strong> Study the model, read the questions, and choose the <b>best </b> answer. <br><br>
        `,
        image: "4.jpeg",
        additionalText: "A pulley is a simple machine. A system of pulleys is installed in a factory to allow a worker to lift heavy crates. If the worker exerts a force of 600 newtons (N) on the pulley system to lift a crate that weighs 1,800 N, what is the mechanical advantage of the pulley system?",
        options: ["A.18", "B.6", "C.3", "D.0.3"],
        correct: "C.3"
    },
    { type: "dropdown", question: "Select the largest planet.", options: ["Earth", "Jupiter", "Mars"], correct: "Jupiter" },
    { type: "fill", question: "Fill in: The color of the sky is ___", correct: "blue" }
];

// Timer setup
let timeRemaining = 5400; // 90 minutes in seconds
const timerElement = document.getElementById("time-remaining");
const timerInterval = setInterval(() => {
    let hours = Math.floor(timeRemaining / 3600); // Calculate hours
    let minutes = Math.floor((timeRemaining % 3600) / 60); // Calculate minutes
    let seconds = timeRemaining % 60; // Calculate seconds

    // Format hours, minutes, and seconds
    timerElement.textContent = `Time remaining: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeRemaining--;

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        submitExam(); // Auto-submit when time is up
    }
}, 1000);

// Display questions
const questionsContainer = document.getElementById("questions-container");
questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.style.padding = "10px"; // Add padding between questions
    questionDiv.style.marginBottom = "20px"; // Space between questions

    // Create and add question text
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    // Add image if it exists
    if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Question Image";
        img.style.width = "300px"; // Set desired width
        img.style.height = "auto"; // Keep aspect ratio

        questionDiv.appendChild(img);
    }
    if (q.additionalText) {
        const additionalText = document.createElement("p");
        additionalText.innerHTML = q.additionalText;
        questionDiv.appendChild(additionalText);
    }
    // Display options based on question type
    if (q.type === "mcq") {
        q.options.forEach(option => {
            questionDiv.innerHTML += `<div><input type="radio" name="q${index}" value="${option}"> ${option}</div>`;
        });
    } else if (q.type === "dropdown") {
        const select = document.createElement("select");
        select.name = `q${index}`;
        q.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
        questionDiv.appendChild(select);
    } else if (q.type === "fill") {
        questionDiv.innerHTML += `<input type="text" name="q${index}" placeholder="Type answer here">`;
    }

    questionsContainer.appendChild(questionDiv);
});

// Submit exam and calculate score
function submitExam() {
    clearInterval(timerInterval);
    let score = 0;
    const mistakes = [];

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`[name="q${index}"]:checked`)?.value ||
            document.querySelector(`[name="q${index}"]`)?.value;

        if (userAnswer?.toLowerCase() === q.correct.toLowerCase()) {
            score++;
        } else {
            mistakes.push({ question: q.question, correctAnswer: q.correct, userAnswer });
        }
    });

    document.getElementById("score").textContent = `${score} / ${questions.length}`;
    document.getElementById("result").style.display = "block";

    // Only show "Show Mistakes" if there are mistakes
    if (mistakes.length > 0) {
        document.getElementById("show-mistakes-btn").style.display = "block";
    }

    // Store mistakes for later viewing
    displayMistakes(mistakes);
}

// Function to display mistakes
function displayMistakes(mistakes) {
    const mistakesList = document.getElementById("mistakes-list");
    mistakesList.innerHTML = "";
    mistakes.forEach(mistake => {
        const mistakeItem = document.createElement("li");
        mistakeItem.textContent = `Q: ${mistake.question} | Correct: ${mistake.correctAnswer} | Your Answer: ${mistake.userAnswer || "No answer"}`;
        mistakesList.appendChild(mistakeItem);
    });
}

// Function to show mistakes
function showMistakes() {
    document.getElementById("mistakes").style.display = "block";
}
