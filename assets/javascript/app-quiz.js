
//Object holding all of our questions, answers, and Q/A metadata
var questionsObject = {

	q1a: {

		question: "On their perfect weekend, will your gift recipient be with their squad or flying solo?",
		answerA: {
			id: "Q1aA",
			text: "Squad"
		},
		answerB: {
			id: "Q1aB",
			text: "Solo"
		}

	},

	q2a: {

		question: "Now, on that perfect weekend with their friends, is your gift recipient more likely to be hanging out in the great outdoors or in the comfort of their own home?",
		answerA: {
			id: "Q2aA",
			text: "Outdoors"
		},
		answerB: {
			id: "Q2aB",
			text: "Home"
		}

	},

	q2b: {

		question: "How far in advance does your gift recipient book their schedule?",
		answerA: {
			id: "Q2bA",
			text: "3 Weeks"
		},
		answerB: {
			id: "Q2bB",
			text: "3 Minutes"
		}

	},

	q3a: {

		question: "Does your gift recipient spend mroe time fidgeting or daydreaming?",
		answerA: {
			id: "Q3aA",
			text: "Fidgeting"
		},
		answerB: {
			id: "Q3aB",
			text: "Daydreaming"
		}

	},

	q3b: {

		question: "Now, who will they invite over to their home first, friends or family?",
		answerA: {
			id: "Q3bA",
			text: "Friends"
		},
		answerB: {
			id: "Q3bB",
			text: "Family"
		}

	},

	q3c: {

		question: "Is their schedule booked because they've made plans to meet someone new or because they'vemade plans on their own?",
		answerA: {
			id: "Q3cA",
			text: "Someone New"
		},
		answerB: {
			id: "Q3cB",
			text: "On Their Own"
		}

	},

	q3d: {

		question: "Does your gift recipient prefer the finer things in life or living the simple life?",
		answerA: {
			id: "Q3dA",
			text: "Finer Things"
		},
		answerB: {
			id: "Q3dB",
			text: "Simple Life"
		}

	},

	q4a: {

		question: "Which is more important to your gift recipient: playing to win or making sure everyone has a good time?",
		answerA: {
			id: "Q4aA",
			text: "Play to Win"
		},
		answerB: {
			id: "Q4aB",
			text: "Have a Good Time"
		}

	},

	q4b: {

		question: "Is your gift recipient more in tune with how they're feeling or with how others are feeling?",
		answerA: {
			id: "Q4bA",
			text: "Themselves"
		},
		answerB: {
			id: "Q4bB",
			text: "Others"
		}

	},

	q4c: {

		question: "In a movie production, would your gift recipient prefer to play the starring role or to call the shots as the director?",
		answerA: {
			id: "Q4cA",
			text: "Star"
		},
		answerB: {
			id: "Q4cB",
			text: "Director"
		}

	},

	q4d: {

		question: "Is your gift recipient more likely to make a mess or to clean it up?",
		answerA: {
			id: "Q4dA",
			text: "Make the Mess"
		},
		answerB: {
			id: "Q4dB",
			text: "Clean it Up"
		}

	},

	q4e: {

		question: "Your gift recipient is taking a weekend trip. Is it more likely for business or for fun",
		answerA: {
			id: "Q4eA",
			text: "Business"
		},
		answerB: {
			id: "Q4eB",
			text: "Fun"
		}

	},

	q4f: {

		question: "Which does your gift recipient enjoy more: losing themselves or finding themselves?",
		answerA: {
			id: "Q4fA",
			text: "Losing Themselves"
		},
		answerB: {
			id: "Q4fB",
			text: "Finding Themselves"
		}

	},

	q4g: {

		question: "What does your gift recipient value more in those finer things: form or function?",
		answerA: {
			id: "Q4gA",
			text: "Form"
		},
		answerB: {
			id: "Q4gB",
			text: "Function"
		}

	},

	q4h: {

		question: "Now, does your gift recipient's idea of enjoying the simple life involve napping or learning something new?",
		answerA: {
			id: "Q4hA",
			text: "Napping"
		},
		answerB: {
			id: "Q4hB",
			text: "Learning Something"
		}

	}

};

//Array of personality objects with information to display on the results page and seed API calls
var personalitiesArray = [

	{
		key: "Q1aAQ2aAQ3aAQ4aA",
		name: "The Mover",
		description: "The Mover has a spark for life and a passion for action & adventure they can barely contain — give them a gift to help burn off some of that extra energy.",
		amazonKeyword: "",
		ebayKeyword: ["]Sporting Goods"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "The Labrador Retriever",
		description: "The Labrador Retriever loves their friends, their family, and bright summer days — give them a gift that doubles as the perfect excuse for an afternoon at the park.",
		amazonKeyword: "",
		ebayKeyword: ["Lawn Games"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aAQ2aAQ3aAQ4aB",
		name: "The Creator",
		description: "The Creator marches to the beat of their own drum, and everyone else stops to listen — give them a gift that will help them express themselves for all to hear.",
		amazonKeyword: "",
		ebayKeyword: ["Musical Instruments"],
		etsyKeyword: ["Music"]
	},

	{
		key: "Q1aAQ2aAQ3aBQ4bB",
		name: "The Instigator",
		description: "The Instigator is great at thinking on their feet in social situations, sometimes for good and sometimes for bad — give them a gift to help them flex their social muscle.",
		amazonKeyword: "",
		ebayKeyword: ["Board Games"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aAQ2aBQ3bAQ4cA",
		name: "The Trendsetter",
		description: "The Trendsetter is the life of the party and the center of attention wherever they go — give them a gift that will leave everyone in the room wanting to copy their look.",
		amazonKeyword: "",
		ebayKeyword: ["Clothing Accessories"],
		etsyKeyword: ["Accessories", "Hair"]
	},

	{
		key: "Q1aAQ2aBQ3bAQ4cB",
		name: "The Entertainer",
		description: "Friendly, outgoing, and inviting, the Entertainer's home is your home — give them a gift that will help them take their next dinner party to the next level.",
		amazonKeyword: "",
		ebayKeyword: ["Kitchen Goods"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aAQ2aBQ3bBQ4dA",
		name: "The Inner Child",
		description: "Young or old, the Inner Child appreciates novelty — give them a gift that will keep their youthful mind entertained.",
		amazonKeyword: "",
		ebayKeyword: ["Stuffed Animals"],
		etsyKeyword: ["Toys"]
	},

	{
		key: "Q1aAQ2aBQ3bBQ4dB",
		name: "The Nester",
		description: "Warm and kindhearted, the Nester likes to make sure everyone around them feels comfy and cozy — give them a gift that will do half the work for them.",
		amazonKeyword: "",
		ebayKeyword: ["Home Decor"],
		etsyKeyword: ["Home decor"]
	},

	{
		key: "Q1aBQ2bAQ3cAQ4eA",
		name: "The Executive",
		description: "A real go-getter, the Executive is always planning their next big move — give them a gift to help keep track of all their exciting venture.",
		amazonKeyword: "",
		ebayKeyword: ["Office Supplies"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aBQ2bAQ3cAQ4eB",
		name: "The Butterfly",
		description: "Always on the move, the Butterfly loves to share their life with friends near and far— give them a gift that will add some style to their next social media update.",
		amazonKeyword: "",
		ebayKeyword: ["Mobile Accessories"],
		etsyKeyword: ["Accessories", "Cell Phone"]
	},

	{
		key: "Q1aBQ2bAQ3cBQ4fA",
		name: "The Nomad",
		description: "The Nomad's heart lies in many places at once — give them a gift that will add some pep to their step as they track it down.",
		amazonKeyword: "",
		ebayKeyword: ["Travel Gear"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aBQ2bAQ3cBQ4fB",
		name: "The Hermit",
		description: "Peaceful and thoughtful, the Hermit enjoys time to explore their own mind — give them a gift that will start them on another new journey.",
		amazonKeyword: "",
		ebayKeyword: ["Books"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "The Magician",
		description: "Full of wit and curiosity, the Magician can make anything possible with the right tools — or the right tech toys. Give them a gift to help expand their arsenal.",
		amazonKeyword: "",
		ebayKeyword: ["Tech"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aBQ2bBQ3dAQ4gA",
		name: "The Monarch",
		description: "Colorful and confident, the Monarch appreciates the finer things and life — give them a gift that reflects their refined sense of style.",
		amazonKeyword: "",
		ebayKeyword: ["Jewelry"],
		etsyKeyword: ["Jewelry"]
	},

	{
		key: "Q1aBQ2bBQ3dBQ4hA",
		name: "The Feline",
		description: "The Feline knows how to unwind with a good stretch, a good nap, and a good snack — give them a gift they'll reach for on their next lazy Sunday.",
		amazonKeyword: "",
		ebayKeyword: ["Food and Drink"],
		etsyKeyword: [""]
	},

	{
		key: "Q1aBQ2bBQ3dBQ4hB",
		name: "The Nurturer",
		description: "The Nurturer has an uncanny ability to make something out of nothing — give them a gift that will help seed their next project.",
		amazonKeyword: "",
		ebayKeyword: ["Crafting"],
		etsyKeyword: ["Supplies"]
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
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4aB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[1];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4bA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[2];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4bB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[3];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4cA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[4];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4cB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[5];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4dA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[6];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4dB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[7];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4eA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[8];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4eB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[9];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4fA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[10];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4fB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[11];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4gA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[12];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4gB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[13];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4hA" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[14];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

	if (tempAnswerId === "Q4hB" && currentQuestionNumber === 4 ){

		userPersonalityAssignment = personalitiesArray[15];
		currentQuestionNumber = 0;
		console.log("PERSONALITY: " + userPersonalityAssignment.name);
		console.log(userPersonalityAssignment.description);
	}

});