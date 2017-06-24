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

	}

};

var personalityId= "";

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

//=====================================================
$("#question-div").html(questionsObject.q1a.question);
$("#answer-a-div").html(questionsObject.q1a.answerA.text);
$("#answer-a-div").data( "answerId",  questionsObject.q1a.answerA.id);
$("#answer-b-div").html(questionsObject.q1a.answerB.text);
$("#answer-b-div").data( "answerId",  questionsObject.q1a.answerB.id);

$(document).on("click", ".JS-answer-choice", function(){

	var tempAnswerId = $(this).data("answerId");
	personalityId = personalityId+tempAnswerId;

	if (tempAnswerId === "Q1aA"){

		nextQuestion("q2a");

	}

	if (tempAnswerId === "Q1aB"){

		nextQuestion("q2b");

	}

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


});