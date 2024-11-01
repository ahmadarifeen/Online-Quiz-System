// Sample questions array with MCQs, dropdowns, fill-in-the-blank questions, and drag-and-drop
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
        additionalText: "The model indicates that a carbon dioxide molecule is formed when",
        options: ["A.one carbon atom loses electrons and two oxygen atoms gain electrons.", "B.two oxygen atoms lose electrons and one carbon atom gains electrons.", "C.one carbon atom and two oxygen atoms share electrons.", "D.a carbon atom is connected to two oxygen atoms by rods."],
        correct: "C. Explnation "
    },
    {
        type: "mcq",
        question: `
            <strong>DIRECTIONS:</strong> Study the information and table.Then read the question. <br><br>
Alisha is conducting an investigation with two unlabeled powders. She is certain that one is copper sulfate and the other is sodium chloride. She performs an experiment where she mixes both powders with water.<br><br> 
        `,
        image: "5.jpeg",
        additionalText: "<b>Observations </b> <br> <ul> <li>Powder A: Disappears quickly when stirred in water.</li><li>Powder B: Turns the water blue and makes the beaker warm.</li></ul><br>Based on the following observations, which powder is most likely copper sulfate?",
        options: ["A.Powder A", "B.Powder B", "C.Both Powders", "D.Neither powder"],
        correct: "B.Powder B Explanation: Powder B turns the water blue and makes the beaker warm, which suggests a chemical reaction typical of copper sulfate. Sodium chloride would not cause such a reaction."
    },

    {
        type: "mcq",
        question: "<strong>DIRECTIONS:</strong> Read the passage and Question, and choose the <b>best </b> answer. <br> During a chemical reaction, energy can be released or absorbed. An exothermic chemical reaction produces thermal energy, or thermal energy. During an exothermic reaction, chemical energy changes to thermal energy. An endothermic chemical reaction absorbs thermal energy. During an endothermic reaction, thermal energy is absorbed from the environment to drive the reaction. Thermal energy changes to chemical energy.",
        additionalText: "Which event demonstrates an endothermic reaction?",
        options: ["A. On a camping trip, a family enjoys a campfire.", "B.  A student combines citric acid and baking soda in a plastic bag, and the bag feels cooler.", "C. A construction worker uses hand warmers while on a break.", "D. A student combines sugar, water, and sulfuric acid in a beaker, and the reaction produces thermal energy, steam, and an odor."],
        correct: "B.  A student combines citric acid and baking soda in a plastic bag, and the bag feels cooler."
    },
    {
        type: "mcq",
        question: "<strong>DIRECTIONS:</strong> Read the passage and Question, and choose the <b>best </b> answer. <br> A student in a science classroom conducts an investigation to test the transfer of thermal energy as heat. She creates equal size dots of candle wax, places the dots of wax equal distances apart on a copper rod, and then inserts one end of the rod into a flame. She observes as the dots of wax melt in order from the dot closest to the heat source to the dot farthest from the heat source. Her observation supports her hypothesis.",
        additionalText: "What hypothesis is the student <b>most likely</b> testing?",
        options: ["A. Thermal energy is transferred from warmer parts of a solid to cooler parts of a solid. ", "B.  Thermal energy is transferred from warmer parts of a metal object to cooler parts of a metal object.", "C. Copper is a better conductor than other metals.", "D. Bringing about energy transfer by radiation is an effective method for melting objects."],
        correct: "B.  Thermal energy is transferred from warmer parts of a metal object to cooler parts of a metal object."
    },
    {
        type: "mcq",
        question: "Another student attempts to repeat the investigation. He also uses wax from a candle and a copper rod, but he observes that one dot of wax appears to begin to melt before a dot of wax that is closer to the flame. What is a likely source of error in his investigation?",
        options: ["A. The flame produces higher temperatures later in the investigation.", "B. The copper rod is longer than that used in the first investigation.", "C. The two dots are different types of wax.", "D. The dots are not equal in size."],
        correct: "D. The dots are not equal in size."
    },
    {
        type: "mcq",
        question: "Which investigation design would be best for testing differences in conductivity among metals?",
        options: ["A. Insert two equal size rods-one copper, one aluminum-into a flame for equal amounts of time, and observe the difference in their temperatures.", "B. Insert two copper rods of different thicknesses into a flame for equal amounts of time, and observe the difference in their temperatures.", "C. Insert two equal size rods-one copper, one glass-into a flame for equal amounts of time, and observe the difference in their temperatures.", "D. Place wax dots on a copper rod and an aluminum rod, insert the rods into a flame, and observe whether the wax dots melt in order on each rod."],
        correct: "A. Insert two equal size rods-one copper, one aluminum-into a flame for equal amounts of time, and observe the difference in their temperatures."
    },

    {
        type: "mcq",
        question: "<strong>DIRECTIONS:</strong> Read the passage. Then read each question and choose the <b>best </b> answer. <br> When dry nitrogen triiodide (NI<sub>3</sub>) is touched with a feather, it explodes and gives off a violet cloud of iodine (I<sub>2</sub>).",
        additionalText: "Which statement describes evidence that this is a chemical reaction?",
        options: ["A. Thermal energy is transferred from warmer parts of a solid to cooler parts of a solid. ", "B.  Thermal energy is transferred from warmer parts of a metal object to cooler parts of a metal object.", "C. Copper is a better conductor than other metals.", "D. Bringing about energy transfer by radiation is an effective method for melting objects."],
        correct: "B.  Thermal energy is transferred from warmer parts of a metal object to cooler parts of a metal object."
    },
    {
        type: "mcq",
        question: "Which chemical equation represents the reaction described?",
        options: ["A. I<sub>2</sub> + N<sub>2</sub> + O<sub>2</sub> → 2NI<sub>3</sub><br>", "B. N<sub>2</sub> + 3I<sub>2</sub> → 2NI<sub>3</sub><br>", "C. NI<sub>3</sub> → N<sub>2</sub> + I<sub>2</sub> + O<sub>2</sub><br>", "D. 2NI<sub>3</sub> → N<sub>2</sub> + 3I<sub>2</sub>"],
        correct: "D. 2NI<sub>3</sub> → N<sub>2</sub> + 3I<sub>2</sub>"
    },
    {
        type: "mcq",
        question: "Which type of reaction is described?",
        options: ["A. decomposition", "B. synthesis", "C. single displacement", "D. double displacement"],
        correct: "A. decomposition"
    },

    { type: "fill", question: " <strong>DIRECTIONS:</strong> Read the passage for answering <b> question 17 to 19</b> <br> <br> If the velocity of an object is increasing, its acceleration is positive. If its velocity is decreasing, its acceleration is negative. Negative acceleration is also called deceleration. For example, when a car's brakes are applied, the car decelerates. The calculation for deceleration is the same as that for acceleration: Subtract the initial velocity from the final velocity and divide that number by time. If the object's velocity is constant, its acceleration is zero.", additionalText: "The velocity of a car changes from 5 meters per second (m/s) to 35 m/s in 5 seconds (s). What is the car's acceleration?", correct: "6" },
    { type: "fill", question: "A car going 20 m/s takes 10 s to come to a complete stop. What is the car's deceleration?", correct: "-2" },
    { type: "fill", question: "A car is moving at a constant velocity of 20 m/s for 60 s. What is its acceleration over that period of time?", correct: "0" },
    { type: "dropdown", question: " <strong>DIRECTIONS:</strong> Read the passage for answering <b> question 23 to 25</b> <br> <br>", image: "22.jpeg", additionalText: "Roller-coaster cars, like all moving objects, have _________ energy ", options: ["kinetic", "chemical", "thermal", "electrical"], correct: "kinetic" },
    { type: "dropdown", question: " The roller-coaster car has the most ______ energy when it is at Point A.", options: ["mechanical", "chemical", "potential", "kinetic"], correct: "potential" },
    { type: "dropdown", question: " As it descends toward Point B, the energy of the car is", options: ["being lost to momentum", "changing from kinetic energy to potential energy", "being changed to gravitational energy", "changing from potential energy to kinetic energy"], correct: "changing from potential energy to kinetic energy" },
    { type: "dropdown", question: " The car has the least potential energy and the most kinetic energy at Point", options: ["A", "B", "C", "D"], correct: "C" },
    {
        type: "drag-drop",
        question: "<strong>DIRECTIONS:</strong> Read the passage and Question, and then use the drag-and-drop options to complete the table.<br> Thermal energy is a form of kinetic energy...",
        additionalText: "Determine whether each <b>drag-and-drop</b> option describes a condition...",
        options: [
            { id: "opt1", text: "Particles speed up" },
            { id: "opt2", text: "Temperature drops" },
            { id: "opt3", text: "Energy is transferred in" },
            { id: "opt4", text: "Volume is increased" },
            { id: "opt5", text: "Particle slows down" },
            { id: "opt6", text: "Energy is transferred out" },
            { id: "opt7", text: "Volume is reduced" },
            { id: "opt8", text: "Temperature is increased" }
        ],
        correct: {
            increase: ["opt1", "opt3", "opt4", "opt8"],
            decrease: ["opt2", "opt5", "opt6", "opt7"]
        }
    },

    {
        type: "mcq",
        question: "Why is atomic mass an average?",
        options: ["A. The number of neutrons is variable.", "B. The number of protons is variable", "C. The mass of electrons is variable", "D. The mass of protons is variable."],
        correct: "A. The number of neutrons is variable."
    },

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
    questionDiv.style.padding = "10px";
    questionDiv.style.marginBottom = "20px";

    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Question Image";
        img.style.width = "300px";
        questionDiv.appendChild(img);
    }

    if (q.additionalText) {
        const additionalText = document.createElement("p");
        additionalText.innerHTML = q.additionalText;
        questionDiv.appendChild(additionalText);
    }

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
    } else if (q.type === "drag-drop") {
        // Add drag-and-drop options and drop zones within the question
        const dragDropContainer = document.createElement("div");
        dragDropContainer.className = "drag-drop-container";

        const dragOptionsDiv = document.createElement("div");
        dragOptionsDiv.id = `drag-options-${index}`;
        dragOptionsDiv.className = "drag-options";
        q.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.className = "drag-item";
            optionDiv.id = option.id;
            optionDiv.draggable = true;
            optionDiv.textContent = option.text;
            optionDiv.ondragstart = drag;
            dragOptionsDiv.appendChild(optionDiv);
        });
        dragDropContainer.appendChild(dragOptionsDiv);

        // Add table for drag and drop targets
        const tableContainer = document.createElement("div");
        tableContainer.className = "table-container";
        const tableHTML = `
            <table class="drag-drop-table">
                <thead>
                    <tr>
                        <th>Increase in Kinetic Energy</th>
                        <th>Decrease in Kinetic Energy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="increase-${index}" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                        <td id="decrease-${index}" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
                    </tr>
                </tbody>
            </table>
        `;
        tableContainer.innerHTML = tableHTML;
        dragDropContainer.appendChild(tableContainer);

        questionDiv.appendChild(dragDropContainer);
    }

    questionsContainer.appendChild(questionDiv);
});

// Submit exam and calculate score
function submitExam() {
    clearInterval(timerInterval);
    let score = 0;
    const mistakes = [];

    questions.forEach((q, index) => {
        let userAnswer;

        if (q.type === "drag-drop") {
            const increaseZone = document.getElementById(`increase-${index}`).children;
            const decreaseZone = document.getElementById(`decrease-${index}`).children;
            const increaseIds = Array.from(increaseZone).map(el => el.id);
            const decreaseIds = Array.from(decreaseZone).map(el => el.id);

            if (JSON.stringify(increaseIds.sort()) === JSON.stringify(q.correct.increase.sort()) &&
                JSON.stringify(decreaseIds.sort()) === JSON.stringify(q.correct.decrease.sort())) {
                score++;
            } else {
                mistakes.push({
                    questionNumber: index + 1,
                    correctAnswer: 'Correct increase options: ' + q.correct.increase.join(', ') +
                        ', Correct decrease options: ' + q.correct.decrease.join(', '),
                    userAnswer: 'Your increase options: ' + increaseIds.join(', ') +
                        ', Your decrease options: ' + decreaseIds.join(', ')
                });
            }
        } else {
            userAnswer = document.querySelector(`[name="q${index}"]:checked`)?.value ||
                document.querySelector(`[name="q${index}"]`)?.value;

            if (userAnswer?.toLowerCase() === q.correct.toLowerCase()) {
                score++;
            } else {
                mistakes.push({
                    questionNumber: index + 1,
                    correctAnswer: q.correct,
                    userAnswer
                });
            }
        }
    });

    // Calculate raw score
    const totalQuestions = questions.length;
    const rawPercentage = (score / totalQuestions) * 100;
    const gedScore = 100 + rawPercentage;

    // Display scores
    document.getElementById("score").textContent = `${score} / ${totalQuestions}`;
    document.getElementById("ged-score").textContent = `GED Score: ${gedScore.toFixed(2)}`;
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
        mistakeItem.textContent = `Q${mistake.questionNumber}: Correct: ${mistake.correctAnswer} | Your Answer: ${mistake.userAnswer || "No answer"}`;
        mistakesList.appendChild(mistakeItem);
    });
}

// Function to show mistakes
function showMistakes() {
    document.getElementById("mistakes").style.display = "block";
}

// Enable the drop target
function allowDrop(ev) {
    ev.preventDefault();
}

// Handle the drag event
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Handle the drop event
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    ev.target.appendChild(draggableElement);
}
