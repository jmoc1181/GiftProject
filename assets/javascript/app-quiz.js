
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

//Array of personalities

var personalitiesArray = [

	{
		key: "Q1aAQ2aAQ3aAQ4aA",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aAQ3aBQ4bB",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aBQ3bAQ4cA",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aBQ3bAQ4cB",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aBQ3bBQ4dA",
		name: "",
		description: ""

	},

	{
		key: "Q1aAQ2aBQ3bBQ4dB",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bAQ3cAQ4eA",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bAQ3cAQ4eB",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bAQ3cBQ4fA",
		name: "",
		description: ,""

	},

	{
		key: "Q1aBQ2bAQ3cBQ4fB",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bBQ3dBQ4hA",
		name: "",
		description: ""

	},

	{
		key: "Q1aBQ2bBQ3dBQ4hB",
		name: "",
		description: ""

	},

];

//Global variable that will hold our current user's personality ID, which will correspond to a specific API call to display a curated set of gifts
var userPersonalityKey = "";

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


$(document).on("click", ".JS-answer-choice", function(){

	var tempAnswerId = $(this).data("answerId");

	if ( userPersonalityKey.length < 16 ){

		userPersonalityKey = userPersonalityKey+tempAnswerId;
	}

	//User sees Question 2
	if (tempAnswerId === "Q1aA"){

		nextQuestion("q2a");

	}

	if (tempAnswerId === "Q1aB"){

		nextQuestion("q2b");

	}

	//User sees Question 3
	if (tempAnswerId === "Q2aA"){

		nextQuestion("q3a");

	}

	if (tempAnswerId === "Q2aB"){

		nextQuestion("q3b");

	}

	if (tempAnswerId === "Q2bA"){

		nextQuestion("q3c");

	}

	if (tempAnswerId === "Q2bB"){

		nextQuestion("q3d");

	}

	//USer sees Question 4
	if (tempAnswerId === "Q3aA"){

		nextQuestion("q4a");

	}

	if (tempAnswerId === "Q3aB"){

		nextQuestion("q4b");

	}

	if (tempAnswerId === "Q3bA"){

		nextQuestion("q4c");

	}

	if (tempAnswerId === "Q3bB"){

		nextQuestion("q4d");

	}

	if (tempAnswerId === "Q3cA"){

		nextQuestion("q4e");

	}

	if (tempAnswerId === "Q3cB"){

		nextQuestion("q4f");

	}

	if (tempAnswerId === "Q3dA"){

		nextQuestion("q4g");

	}

	if (tempAnswerId === "Q3dB"){

		nextQuestion("q4h");

	}

	//User sees their final personality page
	if (tempAnswerId === "Q4aA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4aB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4bA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4bB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4cA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4cB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4dA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4dB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4eA"){

		alert(personalityId);
	}

	if (tempAnswerId === "Q4eB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4fA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4fB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4gA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4gB"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4hA"){

		alert(personalityId);

	}

	if (tempAnswerId === "Q4hB"){

		alert(personalityId);

	}

});