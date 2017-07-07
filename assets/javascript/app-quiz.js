//Object holding all of our questions, answers, and Q/A metadata
var questionsObject = {
    q1a: {
        question: "Who would the gift recipient spend a perfect weekend with?", //On the perfect weekend, will your gift recipient be with their squad or flying solo?
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
        question: "Where is the gift recipient's perfect weekend likely to take place?" //During that perfect weekend with their friends, is your gift recipient more likely to be hanging out in the great outdoors or in the comfort of their own home?",
        answerA: {
            id: "Q2aA",
            text: "The Great Outdoors"
        },
        answerB: {
            id: "Q2aB",
            text: "The Comfort of Home"
        }
    },
    q2b: {
        question: "How far in advance does the gift recipient plan events?",
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
        question: "What does the gift recipient spend more time doing?",
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
        question: "Who would the gift recipient invite to his/her home first?",
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
        question: "Which would most likely be in the gift recipient's schedule?", //Is their schedule booked because they've made plans to meet someone new or because they'vemade plans on their own?
        answerA: {
            id: "Q3cA",
            text: "Meeting Someone New"
        },
        answerB: {
            id: "Q3cB",
            text: "Spending Time Alone"
        }
    },
    q3d: {
        question: "Which lifestyle is the gift recipient drawn to?", //Does your gift recipient prefer the finer things in life or living the simple life?
        answerA: {
            id: "Q3dA",
            text: "The Finer Things in Life"
        },
        answerB: {
            id: "Q3dB",
            text: "The Simple Life"
        }
    },
    q4a: {
        question: "Which is more important to the gift recipient?",
        answerA: {
            id: "Q4aA",
            text: "Playing to Win"
        },
        answerB: {
            id: "Q4aB",
            text: "Making Sure Everyone Has a Good Time"
        }
    },
    q4b: {
        question: "Who's feelings is the gift recipient more in tune with?", //Is your gift recipient more in tune with how they're feeling or with how others are feeling?
        answerA: {
            id: "Q4bA",
            text: "Their Own"
        },
        answerB: {
            id: "Q4bB",
            text: "Others"
        }
    },
    q4c: {
        question: "In a movie production, what role would the gift recipient prefer?",
        answerA: {
            id: "Q4cA",
            text: "The Star"
        },
        answerB: {
            id: "Q4cB",
            text: "The Director"
        }
    },
    q4d: {
        question: "Is the gift recipient more likely to make a mess or to clean it up?",
        answerA: {
            id: "Q4dA",
            text: "Make a Mess"
        },
        answerB: {
            id: "Q4dB",
            text: "Clean it Up"
        }
    },
    q4e: {
        question: "What is most likely the reason for the gift recipient's trip?" //Your gift recipient is taking a weekend trip. Is it more likely for business or for fun",
        answerA: {
            id: "Q4eA",
            text: "Business"
        },
        answerB: {
            id: "Q4eB",
            text: "Pleasure"
        }
    },
    q4f: {
        question: "Which does the gift recipient enjoy more?",
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
        question: "What does the gift recipient value more in those finer things?",
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
        question: "The gift recipient's idea of the simple life involves which of the following?", //Does your gift recipient's idea of enjoying the simple life involve napping or learning something new?
        answerA: {
            id: "Q4hA",
            text: "Napping"
        },
        answerB: {
            id: "Q4hB",
            text: "Learning Something New"
        }
    }
};

//Array of personality objects with information to display on the results page and seed API calls
var personalitiesArray = [

    {
        key: "Q1aAQ2aAQ3aAQ4aA",
        name: "The Mover",
        description: "The Mover has a spark for life and a passion for action & adventure that can barely be contained — give a gift to help burn off some of that extra energy.",
        amazonKeyword: ["Sporting Goods"],
        ebayKeyword: ["Sports equipment"],
        etsyKeyword: ["Clothing", "exercise"]
    },
    {
        key: "Q1aAQ2aAQ3aAQ4aB",
        name: "The Labrador Retriever",
        description: "The Labrador Retriever loves his/her friends, family, and bright summer days — give a gift that doubles as the perfect excuse for an afternoon at the park.",
        amazonKeyword: ["Lawn Games"],
        ebayKeyword: ["Lawn Games"],
        etsyKeyword: ["Toys", "lawn game"]
    },
    {
        key: "Q1aAQ2aAQ3aAQ4bA",
        name: "The Creator",
        description: "The Creator marches to the beat of his/her own drum, and everyone else stops to listen — give a gift that will help express himself/herself for all to hear.",
        amazonKeyword: ["Musical Instruments"],
        ebayKeyword: ["Musical Instruments"],
        etsyKeyword: ["Music", "instrument"]
    },
    {
        key: "Q1aAQ2aAQ3aBQ4bB",
        name: "The Instigator",
        description: "The Instigator is great at thinking on his/her feet in social situations, sometimes for good and sometimes for bad — give a gift to help him/her flex a social muscle.",
        amazonKeyword: ["Board Games"],
        ebayKeyword: ["Board Games"],
        etsyKeyword: ["Toys", "board game"]
    },
    {
        key: "Q1aAQ2aBQ3bAQ4cA",
        name: "The Trendsetter",
        description: "The Trendsetter is the life of the party and the center of attention everywhere — give a gift that will leave everyone in the room wanting to copy his/her look.",
        amazonKeyword: ["Fashion Accessories"],
        ebayKeyword: ["Clothing Accessories"],
        etsyKeyword: ["Clothing", "elegant"]
    },
    {
        key: "Q1aAQ2aBQ3bAQ4cB",
        name: "The Entertainer",
        description: "Friendly, outgoing, and inviting, the Entertainer's home is your home — give a gift that will help take his/her next dinner party to the next level.",
        amazonKeyword: ["Kitchen tools"],
        ebayKeyword: ["Kitchen gadget"],
        etsyKeyword: ["Housewares", "kitchen"]
    },
    {
        key: "Q1aAQ2aBQ3bBQ4dA",
        name: "The Inner Child",
        description: "Young or old, the Inner Child appreciates novelty — give a gift that will keep his/her youthful mind entertained.",
        amazonKeyword: ["Stuffed Animals"],
        ebayKeyword: ["retro toy"],
        etsyKeyword: ["toys", "vintage"]
    },
    {
        key: "Q1aAQ2aBQ3bBQ4dB",
        name: "The Nester",
        description: "Warm and kindhearted, the Nester likes to make sure everyone around feels comfy and cozy — give a gift that will help guests feel at ease.",
        amazonKeyword: ["Home decor"],
        ebayKeyword: ["decorative piece"],
        etsyKeyword: ["Art", "decor"]
    },
    {
        key: "Q1aBQ2bAQ3cAQ4eA",
        name: "The Executive",
        description: "A real go-getter, the Executive is always planning his/her next big move — give a gift to help keep track of all his/her exciting ventures.",
        amazonKeyword: ["Office Supplies"],
        ebayKeyword: ["Office Supplies"],
        etsyKeyword: ["Supplies", "planner"]
    },
    {
        key: "Q1aBQ2bAQ3cAQ4eB",
        name: "The Butterfly",
        description: "Always on the move, the Butterfly loves to share his/her life with friends near and far — give a gift that will add style to his/her next social media update.",
        amazonKeyword: ["Mobile Accessories"],
        ebayKeyword: ["Mobile Accessories"],
        etsyKeyword: ["Accessories", "Cell Phone"]
    },
    {
        key: "Q1aBQ2bAQ3cBQ4fA",
        name: "The Nomad",
        description: "The Nomad's heart lies in many places at once — give a gift that will add some pep to his/her step as he/she tracks it down.",
        amazonKeyword: ["Travel Gear"],
        ebayKeyword: ["Mobile Accessories"],
        etsyKeyword: ["Accesories", "phone"]
    },
    {
        key: "Q1aBQ2bAQ3cBQ4fB",
        name: "The Hermit",
        description: "Peaceful and thoughtful, the Hermit enjoys time to explore his/her own mind — give a gift that will start his/her on another new journey.",
        amazonKeyword: ["Books"],
        ebayKeyword: ["Books"],
        etsyKeyword: ["Books and Zines", "zine"]
    },
    {
        key: "Q1aBQ2bBQ3dAQ4gA",
        name: "The Magician",
        description: "Full of wit and curiosity, the Magician can make anything possible with the right tools or the right tech toys — give a gift to help expand his/her arsenal.",
        amazonKeyword: ["Electronics"],
        ebayKeyword: ["Travel Gear"],
        etsyKeyword: ["Accessories", "travel"]
    },
    {
        key: "Q1aBQ2bBQ3dAQ4gB",
        name: "The Monarch",
        description: "Colorful and confident, the Monarch appreciates the finer things and life — give a gift that reflects his/her refined sense of style.",
        amazonKeyword: ["Jewelry"],
        ebayKeyword: ["Jewelry"],
        etsyKeyword: ["Jewelry", "vintage"]
    },
    {
        key: "Q1aBQ2bBQ3dBQ4hA",
        name: "The Feline",
        description: "The Feline knows how to unwind with a good stretch, a good nap, and a good snack — give a gift they'll reach for on his/her next lazy Sunday.",
        amazonKeyword: ["Snacks"],
        ebayKeyword: ["Snack care package"],
        etsyKeyword: ["Supplies", "snack"]
    },
    {
        key: "Q1aBQ2bBQ3dBQ4hB",
        name: "The Nurturer",
        description: "The Nurturer has an uncanny ability to make something out of nothing — give a gift that will help seed his/her next project.",
        amazonKeyword: ["Crafting How-to"],
        ebayKeyword: ["Crafting How-to"],
        etsyKeyword: ["Supplies", "craft"]
    }

];

//Array holding holiday-specific shortcuts for displaying gift options
var holidaysArray = [

	{
        key: "h00",
        name: "Anniversary Gifts",
        description: "Whether you've been together for 1 year or 100, give your partner-in-crime a gift to help express the way you still feel about them.",
        amazonKeyword: ["anniversary gift"],
        ebayKeyword: ["anniversary gift"],
        etsyKeyword: ["Art", "Anniversary"]
    },
    {
        key: "h01",
        name: "Baby Shower Gifts",
        description: "Give your loved on a gift to help prepare them for their little bundle of joy.",
        amazonKeyword: ["parenting book"],
        ebayKeyword: [""],
        etsyKeyword: ["Housewares", "Baby Shower"]
    },
    {
        key: "h02",
        name: "Birthday Gifts",
        description: "Another year older, another year wiser — give a gift that will help them mark the occasion, reach their nex milestone, and ",
        amazonKeyword: ["birthday journal"],
        ebayKeyword: [""],
        etsyKeyword: ["Art", "Birthday"]
    },
    {
        key: "h03",
        name: "Christmas Gifts",
        description: "&#39;Tis the season for generosity, joy, and egg nog — give a gift that will help keep your recipient in the holiday spirit.",
        amazonKeyword: ["christmas decor"],
        ebayKeyword: [""],
        etsyKeyword: ["Housewares", "Christmas decoration"]
    },
    {
        key: "h04",
<<<<<<< HEAD
        name: "Condolence Gifts",
        description: ["grieving book"],
=======
        name: "Expressing Condolences",
        description: "In this time of grief, here are some suggestions for items to help express your sympathy for the bereaved.",
        amazonKeyword: ["grieving book"],
>>>>>>> 605b7cffb349342396f1efcaedadf2e6d0d0b288
        ebayKeyword: [""],
        etsyKeyword: ["Everything Else", "sympathy"]
    },
    {
        key: "h05",
        name: "Father's Day Gifts",
        description: "He raised you and made you the person you are today — give your dad a gift that shows him he's on your mind this Father's Day.",
        amazonKeyword: ["thanks dad"],
        ebayKeyword: ["father gift"],
        etsyKeyword: ["Books and zines", "fatherhood"]
    },
    {
        key: "h06",
        name: "Graduation Gifts",
        description: "Big new things are on the horizon for your grad — give them a gift that will help them remember the good times and reach their next step.",
        amazonKeyword: ["tablet"],
        ebayKeyword: [""],
        etsyKeyword: ["housewares", "photo frame"]
    },
    {
        key: "h07",
<<<<<<< HEAD
        name: "Hannukah Gifts",
        description: "",
=======
        name: "Hannukah",
        description: "Give your loved one a gift to mark this special time of the year.",
>>>>>>> 605b7cffb349342396f1efcaedadf2e6d0d0b288
        amazonKeyword:["channukah gift wrap"],
        ebayKeyword: ["judaism book"],
        etsyKeyword: ["Housewares", "Hannukah"]
    },
    {
        key: "h08",
        name: "House Warming Gifts",
        description: "In this time of new beginnings and empty walls, give a gift that helps make a house a home.",
        amazonKeyword: ["Furniture"],
        ebayKeyword: ["Kitchen gadget"],
        etsyKeyword: ["Art", "decor"]
    },
    {
        key: "h09",
        name: "Mother's Day Gifts",
        description: "Whether you're celebrating your mom or another special mother in your life, give a gift to help show her she's on your mind this season.",
        amazonKeyword: ["Motherhood book"],
        ebayKeyword: ["mom Jewelry"],
        etsyKeyword: ["art", "mother's day"]
    },
    {
        key: "h10",
        name: "Valentine's Day Gifts",
        description: "Love is in the air — give your special someone a gift to help express your feelings when words are not enough.",
        amazonKeyword: ["romantic gift"],
        ebayKeyword: ["couples gift set"],
        etsyKeyword: ["Vintage", "Valentine's Day"]
    },
    {
        key: "h11",
<<<<<<< HEAD
        name: "Wedding Gifts",
=======
        name: "Weddings",
>>>>>>> 605b7cffb349342396f1efcaedadf2e6d0d0b288
        description: "On this joyous day, give the happy couple a gift to help them celebrate and start their new journey together.",
        amazonKeyword: ["home appliance"],
        ebayKeyword: ["wedding"],
        etsyKeyword: ["Housewares", "Wedding"]
    },
    
];

//Global variable that will hold our current user's personality ID, which will correspond to a specific API call to display a curated set of gifts
var userPersonalityKey = "";
//Global variable that will hold our user's final personality assignment by storing the key string, unique to each object in our personalitiesArray
var userPersonalityAssignment;
//
var currentQuestionNumber = 0;
//function that takes in a questionID string, displays the corresponding text on the html page, and changes the corresponding html elements' data attribute

function displayResults(personalityObject){

	var personalityDescription = $("<p></p>")
	personalityDescription.html(personalityObject.description);
	$("#questionnaire-header-title").html("Gifts for " + personalityObject.name);
	$("#duestionnaire-header-description").html("");
	$("#question-div").html(personalityObject.name);
	$("#answers-row").prepend(personalityDescription);
	$("#answer-a-div").remove();
	$("#answer-b-div").remove();

}


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

function runAPICalls(personalityobject){

	amazon(personalityobject.amazonKeyword);
    etsy(personalityobject.etsyKeyword);
    ebay(personalityobject.ebayKeyword);


}

/*============================================================================================
==============================================================================================*/

function loadQuestion1() {

	//User sees question 1
	nextQuestion("q1a");
	currentQuestionNumber = 0;
	currentQuestionNumber++;
	$("#questionnaire-header-title").html("Questionnaire");
	$("#questionnaire-header-description").html("Narrow down your options by answering the following questions about the gift receiver.");

}

function clearResults(){

	//remove old buttons
    $("#answer-a-div").remove();
	$("#answer-b-div").remove();
	$("#questionnaire-header-title").html("");
	$("#questionnaire-header-description").html("");
	$("#answers-row").html("");

}

function reload() {
    document.getElementById("bar").style.width = "0%";
    clearResults();

    //recreate buttons and print them to the page
    var newContainerA = $("<div id='answer-a-container' class='col-md-6 col-sm-12 pad-10-20'></div>");
    var newContainerB = $("<div id='answer-b-container' class='col-md-6 col-sm-12 pad-10-20'></div>");
    var newButtonA = $("<div id='answer-a-div' data-answerId='null' class='JS-answer-choice question-button'></div>");
    var newButtonB = $("<div id='answer-b-div' data-answerId='null' class='JS-answer-choice question-button'></div>");
    newContainerA.append(newButtonA);
    newContainerB.append(newButtonB);
	$("#answers-row").append(newContainerA);
	$("#answers-row").append(newContainerB);
    loadQuestion1();
}

//Initialize Personality Quiz
loadQuestion1();

//Display gift options when a user clicks on a holiday button
$(document).on("click", ".JS-holiday-button", function(){

	var holidayID = parseInt(this.id.slice(-2), 10);
	clearResults();
	displayResults(holidaysArray[holidayID]);
	runAPICalls(holidaysArray[holidayID]);


});

//Update progress bar, and display either next question or results when the user clicks on an answer choice in the personality quiz panel
$(document).on("click", ".JS-answer-choice", function(){

    var tempAnswerId = $(this).data("answerId");

    if ( userPersonalityKey.length < 16 ){
        userPersonalityKey = userPersonalityKey+tempAnswerId;
    }

    /*
    <===================================================================================================>
    User sees Question 2
    */
    if (tempAnswerId === "Q1aA"){

        nextQuestion("q2a");
        currentQuestionNumber++;

        var buttons = (questionsObject.q1a.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));


        document.getElementById("bar").style.width = "25%";

    }


    else if (tempAnswerId === "Q1aB"){

        nextQuestion("q2b");
        currentQuestionNumber++;

        var buttons = (questionsObject.q1a.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "25%";

    }

    /*
    <===================================================================================================>
    User sees Question 3
    */
    else if (tempAnswerId === "Q2aA"){

        nextQuestion("q3a");
        currentQuestionNumber++;


        var buttons = (questionsObject.q2a.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "50%";


    }

    else if (tempAnswerId === "Q2aB"){

        nextQuestion("q3b");
        currentQuestionNumber++;

        var buttons = (questionsObject.q2a.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "50%";

    }

    else if (tempAnswerId === "Q2bA"){

        nextQuestion("q3c");
        currentQuestionNumber++;

        var buttons = (questionsObject.q2b.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "50%";

    }

    else if (tempAnswerId === "Q2bB"){

        nextQuestion("q3d");
        currentQuestionNumber++;

        var buttons = (questionsObject.q2b.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "50%";


    }

    /*
    <===================================================================================================>
    User sees Question 4
    */
    else if (tempAnswerId === "Q3aA"){

        nextQuestion("q4a");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3a.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";


    }

    else if (tempAnswerId === "Q3aB"){

        nextQuestion("q4b");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3a.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";


    }

    else if (tempAnswerId === "Q3bA"){

        nextQuestion("q4c");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3b.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    else if (tempAnswerId === "Q3bB"){

        nextQuestion("q4d");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3b.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    else if (tempAnswerId === "Q3cA"){

        nextQuestion("q4e");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3c.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    else if (tempAnswerId === "Q3cB"){

        nextQuestion("q4f");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3c.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    else if (tempAnswerId === "Q3dA"){

        nextQuestion("q4g");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3d.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    else if (tempAnswerId === "Q3dB"){

        nextQuestion("q4h");
        currentQuestionNumber++;

        var buttons = (questionsObject.q3d.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        document.getElementById("bar").style.width = "75%";

    }

    /*
    <===================================================================================================>
    User sees their final personality page
    */
    if (tempAnswerId === "Q4aA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[0];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4a.answerA.id); 
        console.log(buttons); 
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4aB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[1];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4a.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4bA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[2];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4b.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4bB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[3];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4b.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4cA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[4];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4c.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4cB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[5];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4c.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4dA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[6];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4d.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4dB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[7];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4d.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));


    }

    if (tempAnswerId === "Q4eA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[8];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4e.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4eB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[9];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4e.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4fA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[10];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4f.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4fB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[11];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4f.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4gA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[12];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4g.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4gB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[13];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4g.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4hA" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[14];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

        //Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4h.answerA.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

    }

    if (tempAnswerId === "Q4hB" && currentQuestionNumber === 4 ){

        userPersonalityAssignment = personalitiesArray[15];
        currentQuestionNumber = 0;

        //Progress Bar display at 100%
        document.getElementById("bar").style.width = "100%";

        //Dispay Personality Results
        displayResults(userPersonalityAssignment);

      	//Run API Calls
      	runAPICalls(userPersonalityAssignment);

        var buttons = (questionsObject.q4h.answerB.id);
        console.log(buttons);
        localStorage.setItem("choice", JSON.stringify(buttons));

        
    }

});
