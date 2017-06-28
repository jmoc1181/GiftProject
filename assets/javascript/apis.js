//******************************************************************************************
// API FUNCTIONS INCLUDE: etsy(array), ebay(array), amazon(array)
// Support functions include: logCategories(response), createURL(ARRAY, BOOL), createTS(),createHase(URL, awssecret)
//******************************************************************************************
//INCLUDE BEFORE THIS INCLUDE: 
//<script type="text/javascript" src="assets/javascript/hmac-sha256.js"></script>
//<script type="text/javascript" src="assets/javascript/enc-base64.js"></script>
//<script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
//
//******************************************************************************************
//<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
//<script>
// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyA64v8sLoyVKl8-AXLRw23jllF8t1th0-w",
//    authDomain: "bettergifts-61657.firebaseapp.com",
//    databaseURL: "https://bettergifts-61657.firebaseio.com",
//    projectId: "bettergifts-61657",
//    storageBucket: "bettergifts-61657.appspot.com",
//   messagingSenderId: "68593109442"
//  };
//  firebase.initializeApp(config);
//</script>

var cats = ["Beauty", "brush"];
var itemLimit = 5;
etsy(cats);
//ebay(cats);
//amazon(cats);

//****** ETSY CALL ************************************************************************
//****** categories= accessories, jewelry, supplies, art, Paper Goods, Housewares, weddings
//****** tags or keywords for sub categories *******************************************************************************************

function etsy(p) {
    // passes 'p' an array of search terms with p[0] being the main category
    //tag to search for in category
    var tag = "";
    //category of items to grab
    var category = p[0];
    for (i = 1; i < p.length; i++) {
        if (i == 1)
            tag = p[i];
        else
            tag += " " + p[i];
    }
    //private etsy api key
    var key = "1sx4uxkv5201v3q6lkmsgqr6";
    //etsy listing api url
    var queryURL = "https://openapi.etsy.com/v2/listings/active?"
    $.ajax({
        url: queryURL,
        //api data perams
        data: {
            api_key: key,
            //number of items to return (max 100)
            limit: 5000,
            limit: itemLimit,
            //include an image of the listing
            includes: "MainImage",
            taxonomy_path: "Jewelry",
            //category: category,
            //tags: tag
        }
    }).done(function(response) {
        console.log(response);
        logCategories(response);
    });
}
//******* END ETSY API *********************************************************************
//******************************************************************************************


//****** EBAY CALL *************************************************************************
//******************************************************************************************
function ebay(p) {
    var URL = "http://svcs.ebay.com/services/search/FindingService/v1";
    URL += "?OPERATION-NAME=findItemsByKeywords";
    URL += "&SERVICE-VERSION=1.0.0";
    URL += "&SECURITY-APPNAME=JordanPe-gifts-PRD-eb7edec1b-39308d8d";
    URL += "&GLOBAL-ID=EBAY-US";
    URL += "&RESPONSE-DATA-FORMAT=JSON";
    URL += "&REST-PAYLOAD";
    URL += "&keywords=comb";
    URL += "&paginationInput.entriesPerPage=" + itemLimit;
    $.ajax({
        url: URL,
        method: "GET"
    }).done(function(response) {
        var newresponse = JSON.parse(response);
        console.log(newresponse.findItemsByKeywordsResponse[0].searchResult[0].item);
        for (i = 0; i < newresponse.findItemsByKeywordsResponse[0].searchResult[0].item.length; i++) {
            console.log(newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].title[0]);
        }
    });
}
//*********** END EBAY API *****************************************************************
//***********.findItemsByKeywordsResponse["0"].searchResult["0"].item for response array ***

//********* AMAZON API CALL ****************************************************************
//******************************************************************************************
function amazon(p) {
    //HMAC SHA256 HASH signature of url + secret key
    var signature = "";
    var awssecret = "PULL FROM FIREBASE";

    var signature = createHash(createURL(p, true), awssecret);
    var URL = createURL(p, false);
    URL += "Signature=" + signature;

    console.log("Unsigned URL: " + createURL(p, true));
    console.log("Signed URL: " + URL);
    console.log("signature: " + signature);


    // TEST CASE, SHOULD OUTPUT j7bZM0LXZ9eXeZruTqWm2DIvDYVUU3wxPPpp%2BiXxzQc%3D AS HASH
    //*********************************************************************************************
    // URL = "GET" + "\n" +
    //     "webservices.amazon.com" + "\n" +
    //     "/onca/xml" + "\n" +
    //     "AWSAccessKeyId=&PULL FROM FIREBASE=PULL FROM FIREBASE&ItemId=0679722769&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews&Service=AWSECommerceService&Timestamp=" + createTS() + "&Version=2013-08-01"

    // awssecret = "PULL FROM FIREBASE";
    // var show = createHash(URL, awssecret);
    // console.log(show);
    // // i fuckin did it

    // URL="http://webservices.amazon.com/onca/xml?AWSAccessKeyId=PULL FROM FIREBASE&AssociateTag=PULL FROM FIREBASE&ItemId=0679722769&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews&Service=AWSECommerceService&Timestamp=" + createTS() + "&Version=2013-08-01&Signature="+show;
    // console.log(URL);

    // $.ajax({
    //     url: URL,
    //     //type: "POST",
    //     //dataType: 'jsonp'
    // }).done(function(response) {
    //     console.log(response);
    // });
    // it works
    //***** END TEST CASE ( RETURNED QUERY WAS A #DOCUMENT NEEDED CORS TO ACCESS ) ****************

}
//******* END AMAZON API **********************************************************************
//*********************************************************************************************

// function TO SEE WHAT CATEGORIES ETSY USES ****************************************
function logCategories(r) {

    var categories = [];
    var subcats = [];
    for (i = 0; i < r.results.length; i++) {
        for (j = 0; j < r.results[i].category_path.length; j++) {
            if (categories.indexOf(r.results[i].category_path[j]) == -1 && j == 0)
                categories.push(r.results[i].category_path[j]);
            else if (subcats.indexOf(r.results[i].category_path[j]) == -1 && j > 0)
                subcats.push(r.results[i].category_path[j]);
        }
    }
    console.log("main categories: " + categories);
    console.log("sub categories: " + subcats);
}
 // END LOGCATEGORIES ****************************************************************



// CREATES THE URL STRING DEPENDING ON "B" (TRUE FOR SIGNATURE URL, FALSE FOR SIGNED URL)
function createURL(p, b) {
    //amazon aws key
    var awskey = "USE FIREBASE TO PULL"
    //amazon aws secret key
    var awssecret = "USE FIREBASE TO PULL"
    //amazon associate site id
    var awsassociate = "USE FIREBASE TO PULL"
    //keywords to search
    var tag = "";
    //item category
    var category = p[0];
    //timestamp for api signature
    var timestamp = createTS();

    for (i = 1; i < p.length; i++) {
        if (i == 1)
            tag = p[i];
        else
            tag += " " + p[i];
    }
    //NEED TO FORCE THE NEW LINE USING "\n" BECAUSE HASHING FOR AMAZON PROPERLY IS IMPORTANT
    if (b) {
        URL = "GET" + "\n";
        URL += "http://webservices.amazon.com" + "\n"
        URL += "/onca/xml" + "\n";
        URL += "AWSAccessKeyId=" + awskey + "&";
        URL += "AssociateTag=" + awsassociate + "&";
        URL += "Keywords=" + tag + "&";
        URL += "Operation=ItemSearch&";
        URL += "ResponseGroup=Images%2CItemAttributes%2COffers&";
        URL += "SearchIndex=" + category + "&";
        URL += "Service=AWSECommerceService&";
        URL += "Timestamp=" + timestamp + "&";
        console.log("String to Sign: " + URL);
        return URL;
    } else { // REWRITE THE URL TO FIT AJAX REQUEST
        URL = "http://webservices.amazon.com";
        URL += "/onca/xml?";
        URL += "AWSAccessKeyId=" + awskey + "&";
        URL += "AssociateTag=" + awsassociate + "&";
        URL += "Keywords=" + tag + "&";
        URL += "Operation=ItemSearch&";
        URL += "ResponseGroup=Images%2CItemAttributes%2COffers&";
        URL += "SearchIndex=" + category + "&";
        URL += "Service=AWSECommerceService&";
        URL += "Timestamp=" + timestamp + "&";
        return URL;
    }

}

//function creates an amazon api approved timestamp
function createTS() {
    //create utc date using moment.js
    var date = moment(new Date()).valueOf();
    //format said date to amazon standards
    var newtimestamp = moment(date).toISOString();
    //3 variables needed to replace illegal chars in date string
    var left = "";
    var right = "";
    var mid = "000";

    //loop through string to remove ':' and the miliseconds from timestamp
    for (i = 0; i < newtimestamp.length; i++) {
        if (newtimestamp[i] == ":") {
            newtimestamp = newtimestamp.replace(':', '%3A');
        }
        if (newtimestamp[i] == ".") {
            //finds '.' in the string and removes the 3 chars to the right of it
            // to be replaced with "000" or mid
            // left side of '.'
            left = newtimestamp.slice(0, i + 1);
            // right side of '.' 3 chars to the right
            right = newtimestamp.slice(i + 4, newtimestamp.length);
        }
    }
    //concat left mid and right into full timestamp
    newtimestamp = left + mid + right;
    return newtimestamp;
}

// CREATE A HMAC SHA256 HASH STRING TO USE AS SIGNATURE FOR AMAZON STUPID ASS API THAT FOR SOME REASON DOESNT LIKE TO POST EXAMPLES FOR JAVASCRIPT
function createHash(a, b) {
    // THIS HASH IS IN BASE 32 SO YOU NEED TO CONVERT IT TO BINARy THEN TO 64 
    var hash = CryptoJS.HmacSHA256(a, b);
    // CONVERT HASH TO BASE 64
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    // AMAZON DOESNT LIKE + OR = IN THEIR HASHES SO CONVERT THOSE TO THEIR HEX COUNTERPARTS
    for (i = 0; i < hashInBase64.length; i++) {
        if (hashInBase64[i] == "+") {
            hashInBase64 = hashInBase64.replace('+', '%2B');
        }
        if (hashInBase64[i] == "=") {
            hashInBase64 = hashInBase64.replace('=', '%3D');
        }
        if (hashInBase64[i] == "/") {
            hashInBase64 = hashInBase64.replace('/', '%2F');
        }
    }
    // RETURN THE SIGNATURE
    return hashInBase64;
}