
//Object holding all of our questions, answers, and Q/A metadata
var questionsObject = {

	q1a: {

		question: "Question 1 Text",
		answerA: {
			id: "Q1aA",
			text: "A: 1a.a"
		},
		answerB: {
			id: "Q1aB",
			text: "B: 1a.b"
		}

	},

	q2a: {

		question: "Question 2a Text",
		answerA: {
			id: "Q2aA",
			text: "A: 2a.a"
		},
		answerB: {
			id: "Q2aB",
			text: "B: 2a.b"
		}

	},

	q2b: {

		question: "Question 2b Text",
		answerA: {
			id: "Q2bA",
			text: "A: 2b.a"
		},
		answerB: {
			id: "Q2bB",
			text: "B: 2b.b"
		}

	},

	q3a: {

		question: "Question 3a Text",
		answerA: {
			id: "Q3aA",
			text: "A: 3a.a"
		},
		answerB: {
			id: "Q3aB",
			text: "B: 3a.b"
		}

	},

	q3b: {

		question: "Question 3b Text",
		answerA: {
			id: "Q3bA",
			text: "A: 3b.a"
		},
		answerB: {
			id: "Q3bB",
			text: "B: 3b.b"
		}

	},

	q3c: {

		question: "Question 3c Text",
		answerA: {
			id: "Q3cA",
			text: "A: 3c.a"
		},
		answerB: {
			id: "Q3cB",
			text: "B: 3c.b"
		}

	},

	q3d: {

		question: "Question 3d Text",
		answerA: {
			id: "Q3dA",
			text: "A: 3d.a"
		},
		answerB: {
			id: "Q3dB",
			text: "B: 3d.b"
		}

	},

	q4a: {

		question: "Question 4a Text",
		answerA: {
			id: "Q4aA",
			text: "A: 4a.a"
		},
		answerB: {
			id: "Q4aB",
			text: "B: 4a.b"
		}

	},

	q4b: {

		question: "Question 4b Text",
		answerA: {
			id: "Q4bA",
			text: "A: 4b.a"
		},
		answerB: {
			id: "Q4bB",
			text: "B: 4b.b"
		}

	},

	q4c: {

		question: "Question 4c Text",
		answerA: {
			id: "Q4cA",
			text: "A: 4c.a"
		},
		answerB: {
			id: "Q4cB",
			text: "B: 4c.b"
		}

	},

	q4d: {

		question: "Question 4d Text",
		answerA: {
			id: "Q4dA",
			text: "A: 4d.a"
		},
		answerB: {
			id: "Q4dB",
			text: "B: 4d.b"
		}

	},

	q4e: {

		question: "Question 4e Text",
		answerA: {
			id: "Q4eA",
			text: "A: 4e.a"
		},
		answerB: {
			id: "Q4eB",
			text: "B: 4e.b"
		}

	},

	q4f: {

		question: "Question 4f Text",
		answerA: {
			id: "Q4fA",
			text: "A: 4f.a"
		},
		answerB: {
			id: "Q4fB",
			text: "B: 4f.b"
		}

	},

	q4g: {

		question: "Question 4g Text",
		answerA: {
			id: "Q4gA",
			text: "A: 4g.a"
		},
		answerB: {
			id: "Q4gB",
			text: "B: 4g.b"
		}

	},

	q4h: {

		question: "Question 4h Text",
		answerA: {
			id: "Q4hA",
			text: "A: 4h.a"
		},
		answerB: {
			id: "Q4hB",
			text: "B: 4h.b"
		}

	}

};

//Array of personality objects with information to display on the results page and seed API calls
var personalitiesArray = [

	{
		key: "Q1aAQ2aAQ3aAQ4aA",
		name: "The Mover",
		description: "The Mover has a spark for life and a passion for action & adventure they can barely contain — ",
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "The Trendsetter",
		description: "The Trendsetter is the life of the party and the center of attention wherever they go — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "The Creator",
		description: "The Creator has a mind of their own and a penchant for the arts — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aAQ3aBQ4bB",
		name: "The Labrador Retriever",
		description: "The Labrador Retriever loves their friends, their family, and sunny days — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aBQ3bAQ4cA",
		name: "The Peacekeeper",
		description: "The Peacekeeper description"
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aBQ3bAQ4cB",
		name: "The Entertainer",
		description: "Friendly, warm, and inviting, the Entertainer's home is your home — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aBQ3bBQ4dA",
		name: "The Nester",
		description: "The Nester — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aAQ2aBQ3bBQ4dB",
		name: "The Inner Child",
		description: " The Inner Child — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bAQ3cAQ4eA",
		name: "The Nomad",
		description: "The Nomad's heart is in many places at once — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bAQ3cAQ4eB",
		name: "The Executive",
		description: "The Executive is always planning their next big move— "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bAQ3cBQ4fA",
		name: "The Butterfly",
		description: "The Butterfly — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bAQ3cBQ4fB",
		name: "The Monarch",
		description: "The Monarch — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "The Magician",
		description: "The Magician can make anything possible with the right tools— "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "The Feline",
		description: "The Feline knows how to unwind with a good stretch, a good nap, and a good snack — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bBQ3dBQ4hA",
		name: "The Hermit",
		description: "The Hermit enjoys the peace and quiet of a good night in— "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

	{
		key: "Q1aBQ2bBQ3dBQ4hB",
		name: "The Nurturer",
		description: "The Nurturer — "
		amazonKeyword: "",
		ebayKeyword: "",
		etsyKeyword: ""
	},

];

//Global variable that will hold our current user's personality ID, which will correspond to a specific API call to display a curated set of gifts
var userPersonalityKey = "";

//Global variable that will hold our user's final personality assignment by storing the key string, unique to each object in our personalitiesArray 
var userPersonalityAssignment;

//
var currentQuestionNumber = 0;

//function that takes in a questionID string, displays the corresponding text on the html page, and changes the corresponding html elements' data attribute
function nextQuestion(questionId){

	var tempQuestion = eval("questionsObject." + questionId + ".question");
	var tempAnswerA = eval("questionsObject." + questionId + ".answerA.text");
	var tempAnswerADataAttr = eval("questionsObject." + questionId + ".answerA.id");
	var tempAnswerB = eval("questionsObject." + questionId + ".answerB.text");
	var tempAnswerBDataAttr = eval("questionsObject." + questionId + ".answerB.id");

	$("#question-div").html(tempQuestion);
	$("#answer-a-div").html(tempAnswerA);
	$("#answer-a-div").data( "answerId",  tempAnswerADataAttr);
	$("#answer-b-div").html(tempAnswerB);
	$("#answer-b-div").data( "answerId",  tempAnswerBDataAttr);
	
};

/*============================================================================================
==============================================================================================*/

//User sees question 1
nextQuestion("q1a");
currentQuestionNumber++;


$(document).on("click", ".JS-answer-choice", function(){

	var tempAnswerId = $(this).data("answerId");

	if ( userPersonalityKey.length < 16 ){

		userPersonalityKey = userPersonalityKey+tempAnswerId;
	}

	//User sees Question 2
	if (tempAnswerId === "Q1aA"){

		nextQuestion("q2a");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q1aB"){

		nextQuestion("q2b");
		currentQuestionNumber++;

	}

	//User sees Question 3
	else if (tempAnswerId === "Q2aA"){

		nextQuestion("q3a");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q2aB"){

		nextQuestion("q3b");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q2bA"){

		nextQuestion("q3c");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q2bB"){

		nextQuestion("q3d");
		currentQuestionNumber++;

	}

	//USer sees Question 4
	else if (tempAnswerId === "Q3aA"){

		nextQuestion("q4a");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3aB"){

		nextQuestion("q4b");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3bA"){

		nextQuestion("q4c");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3bB"){

		nextQuestion("q4d");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3cA"){

		nextQuestion("q4e");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3cB"){

		nextQuestion("q4f");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3dA"){

		nextQuestion("q4g");
		currentQuestionNumber++;

	}

	else if (tempAnswerId === "Q3dB"){

		nextQuestion("q4h");
		currentQuestionNumber++;

	}

	//User sees their final personality page
	if (tempAnswerId === "Q4aA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[0];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4aB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[1];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4bA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[2];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4bB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[3];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4cA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[4];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4cB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[5];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4dA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[6];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4dB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[7];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4eA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[8];
	}

	if (tempAnswerId === "Q4eB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[9];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4fA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[10];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4fB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[11];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4gA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[12];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4gB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[13];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4hA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[14];
		currentQuestionNumber = 0;
	}

	if (tempAnswerId === "Q4hB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[15];
		currentQuestionNumber = 0;
	}

});