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

// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyA64v8sLoyVKl8-AXLRw23jllF8t1th0-w",
  authDomain: "bettergifts-61657.firebaseapp.com",
  databaseURL: "https://bettergifts-61657.firebaseio.com",
  projectId: "bettergifts-61657",
  storageBucket: "bettergifts-61657.appspot.com",
 messagingSenderId: "68593109442"
};
firebase.initializeApp(config);*/



//var cats = ["Books"];

//etsy(cats);
//ebay(cats);
//amazon(cats);


//****** ETSY CALL ************************************************************************
//****** categories= accessories, jewelry, supplies, art, Paper Goods, Housewares, weddings
//****** tags or keywords for sub categories *******************************************************************************************

//var TEST = ["Accessories", "Cell Phone"];
//etsy(TEST);

function etsy(p) {
    // passes 'p' an array of search terms with p[0] being the main category and p[1] being the keyword
    //tag to search for in category
    var tag = "";
    //category of items to grab
    var category = p[0];
    var keyword = p[1];
    //number of items to get
    var itemLimit = 8;

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
            limit: itemLimit,
            //include an image of the listing
            includes: "MainImage",
            //taxonomy_path: "Jewelry",
            category: category,
            //keywords: "whiskey"
            keywords: keyword
                //tags: tag
        }
    }).done(function(response) {
        // add the image to the page, add the price to the page, add the url to the page 
        for (i = 0; i < itemLimit; i++) {
            //image
            document.getElementById("etsy" + i).src = response.results[i].MainImage.url_570xN;
            //url
            document.getElementById("giftURL" + i).href = response.results[i].url;

            //price
            if (response.results[i].price == null)
                document.getElementById("priceItem" + i).text = 'go to site';
            else
                $(".priceItem" + i).html("$" + response.results[i].price);
            //mouse-over details
            var details = document.querySelector('.showDetails' + i);
            details.setAttribute('data-balloon', response.results[i].title + " - CLICK TO BUY ITEM");
        } //end for loop
    }); // end .done function
}
/*for (i = 0; i < itemLimit; i++) { 
   console.log(response.results[i].title);
   $(".giftTitle" + i).html(response.results[i].title);
}*/
//******* END ETSY API *********************************************************************
//******************************************************************************************
//** response.results["0"].MainImage.url_75x75
//** response.results["0"].url
//** response.results["0"].price

//****** EBAY CALL *************************************************************************
//******************************************************************************************
//******************************************************************************************

function ebay(p) {
    var itemLimit = 8;
    var URL = "https://svcs.ebay.com/services/search/FindingService/v1";
    URL += "?OPERATION-NAME=findItemsByKeywords";
    URL += "&SERVICE-VERSION=1.0.0";
    URL += "&SECURITY-APPNAME=JordanPe-gifts-PRD-eb7edec1b-39308d8d";
    URL += "&GLOBAL-ID=EBAY-US";
    URL += "&RESPONSE-DATA-FORMAT=JSON";
    URL += "&REST-PAYLOAD";
    URL += "&keywords=" + p[0];
    URL += "&paginationInput.entriesPerPage=" + itemLimit;
    $.ajax({
        url: URL,
        method: "GET",
        data: {
            outputSelector: "PictureURLLarge"
        }
    }).done(function(response) {
            var newresponse = JSON.parse(response);
            console.log(newresponse.findItemsByKeywordsResponse[0].searchResult[0].item);
            for (i = 0; i < newresponse.findItemsByKeywordsResponse[0].searchResult[0].item.length; i++) {
                //picture
                if (typeof newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].pictureURLLarge["0"] != "undefined")
                    document.getElementById("ebay" + i).src = newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].pictureURLLarge["0"];
                else{
                    document.getElementById("ebay" + i).src = newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].galleryURL["0"];
                    //put class change here
                }
                //URL
                document.getElementById("giftURLEbay" + i).href = newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].viewItemURL[0];
                //price
                $(".priceItemEbay" + i).html("$" + newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].sellingStatus["0"].convertedCurrentPrice["0"].__value__);
                //title
                var details = document.querySelector('.showDetailsEbay' + i);
                details.setAttribute('data-balloon', newresponse.findItemsByKeywordsResponse[0].searchResult[0].item[i].title[0] + " - CLICK TO BUY ITEM");
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

    //amazon Category
    //var index = p[0];
    //index = index[0].toUpperCase() + index.slice(1);
    //amazon keyword
    var keyword = p[0];
    keyword = keyword[0].toUpperCase() + keyword.slice(1);
    //NO SPACES ALLOWED IN AMAZON API CALLS BUD
    for (i = 0; i < keyword.length; i++) {
        if (keyword[i] == ' ')
            keyword = keyword.replace(' ', '%20');
    }
    //amazon aws key
    var awskey = "GET FROM FIREBASE";
    //amazon aws secret key
    var awssecret = "GET FROM FIREBASE";
    //amazon associate site id
    var awsassociate = "GET FROM FIREBASE";
    //number of items we want
    var limit = 8;
    //get keys from firebase using syncronis 
    //awskey = getKey(awskey);
    getDB(1).then(function(key) {
        awskey = key;
        getDB(2).then(function(secret) {
            awssecret = secret;
            getDB(3).then(function(associate) {
                awsassociate = associate;
                //CREATE THE AMAZON AJAX URL AND SIGNATURE
                var signature = createHash(createURL(keyword, true, awskey, awssecret, awsassociate), awssecret);
                var URL = createURL(keyword, false, awskey, awssecret, awsassociate);
                URL += "&Signature=" + signature;
                //AMAZON API CALL
                $.ajax({
                    url: URL,
                }).done(function(response) {
                    //AMAZON RESPONSE IS AN XML DOCUMENT, TURNING IT UNTO A JSON STRING
                    var pls = xml2json(response, "");
                    //PARSE THE JSON STRING INTO AN OBJECT
                    var newresponse = JSON.parse(pls);
                    console.log(newresponse);
                    //place the response on screen
                    console.log(newresponse.ItemSearchResponse.Items.Item.length);
                    for (i = 0; i < limit; i++) {
                        //image
                        if (typeof newresponse.ItemSearchResponse.Items.Item[i].LargeImage != "undefined")
                            document.getElementById("amazon" + i).src = newresponse.ItemSearchResponse.Items.Item[i].LargeImage.URL;

                        //url
                        document.getElementById("giftURLAmazon" + i).href = newresponse.ItemSearchResponse.Items.Item[i].DetailPageURL;
                        //price
                        if (typeof newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.ListPrice.FormattedPrice != "undefined")
                        //document.getElementById("amazonprice" + i).innerHTML = newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.ListPrice.FormattedPrice;
                            $(".priceItemAmazon" + i).html(newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.ListPrice.FormattedPrice);

                        //title
                        //document.getElementById("amazontitle" + i).innerHTML = newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.Binding + " - " + newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.Title;            
                        var details = document.querySelector('.showDetailsAmazon' + i);
                        details.setAttribute('data-balloon', newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.Binding + " - " + newresponse.ItemSearchResponse.Items.Item[i].ItemAttributes.Title + " - CLICK TO BUY ITEM");
                    }
                }); //end ajax call
            }); //end getDB(3)
        }); // end getDB(2)
    }); // end getDB(1)

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
function createURL(p, b, k, s, a) {
    //keywords to search
    var tag = "";
    //item category
    //var category = p[0];
    //timestamp for api signature
    var timestamp = createTS();
    //keyword
    var keyword = p;
    // URL TO SIGN
    if (b) {
        URL = "GET" + "\n";
        URL += "webservices.amazon.com" + "\n"
        URL += "/onca/xml" + "\n";
        URL += "AWSAccessKeyId=" + k + "&";
        URL += "AssociateTag=" + a + "&";
        URL += "ItemPage=5&";
        URL += "Keywords=" + p + "&";
        URL += "Operation=ItemSearch&";
        URL += "ResponseGroup=Images%2CItemAttributes%2COffers&";
        URL += "SearchIndex=All&";
        URL += "Service=AWSECommerceService&";
        //URL += "Sort=price&"
        URL += "Timestamp=" + timestamp;
        // console.log("String to Sign: " + URL);
        return URL;
    } else { // REWRITE THE URL TO FIT AJAX REQUEST
        URL = "https://webservices.amazon.com";
        URL += "/onca/xml?";
        URL += "AWSAccessKeyId=" + k + "&";
        URL += "AssociateTag=" + a + "&";
        URL += "ItemPage=5&";
        URL += "Keywords=" + p + "&";
        URL += "Operation=ItemSearch&";
        URL += "ResponseGroup=Images%2CItemAttributes%2COffers&";
        URL += "SearchIndex=All&";
        URL += "Service=AWSECommerceService&";
        //URL += "Sort=price&"
        URL += "Timestamp=" + timestamp;
        return URL;
    }
} //end create url

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
// return amazon keys from firebase
//  1 getDB(1).then(function(key) { console.log(key); }); to call
function getKey(snapshot) {
    var returnme = snapshot.val().amazonkey;
    return returnme;
}
// 2 getDB(2).then(function(secret) { console.log(secret); }); to call
function getSecret(snapshot) {
    var returnme = snapshot.val().amazonsecretkey;
    return returnme;
}
// 3 getDB(3).then(function(associate) { console.log(associate); }); to call
function getAssociate(snapshot) {
    var returnme = snapshot.val().amazonassociate;
    return returnme;
}
// return snapshot of database
function getDB(n) {
    if (n == 1) {
        var config = {
            apiKey: "AIzaSyA64v8sLoyVKl8-AXLRw23jllF8t1th0-w",
            authDomain: "bettergifts-61657.firebaseapp.com",
            databaseURL: "https://bettergifts-61657.firebaseio.com",
            projectId: "bettergifts-61657",
            storageBucket: "bettergifts-61657.appspot.com",
            messagingSenderId: "68593109442"
        };
        firebase.initializeApp(config);
    }
    var database = firebase.database();
    if (n == 1)
        return database.ref().once('value').then(getKey);
    if (n == 2)
        return database.ref().once('value').then(getSecret);
    if (n == 3)
        return database.ref().once('value').then(getAssociate);

}


//OPEN SOURCE XML TO JSON FUNCTION
function xml2json(xml, tab) {
    var X = {
        toObj: function(xml) {
            var o = {};
            if (xml.nodeType == 1) { // element node ..
                if (xml.attributes.length) // element with attributes  ..
                    for (var i = 0; i < xml.attributes.length; i++)
                    o["@" + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();
                if (xml.firstChild) { // element has child nodes ..
                    var textChild = 0,
                        cdataChild = 0,
                        hasElementChild = false;
                    for (var n = xml.firstChild; n; n = n.nextSibling) {
                        if (n.nodeType == 1) hasElementChild = true;
                        else if (n.nodeType == 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) textChild++; // non-whitespace text
                        else if (n.nodeType == 4) cdataChild++; // cdata section node
                    }
                    if (hasElementChild) {
                        if (textChild < 2 && cdataChild < 2) { // structured element with evtl. a single text or/and cdata node ..
                            X.removeWhite(xml);
                            for (var n = xml.firstChild; n; n = n.nextSibling) {
                                if (n.nodeType == 3) // text node
                                    o["#text"] = X.escape(n.nodeValue);
                                else if (n.nodeType == 4) // cdata node
                                    o["#cdata"] = X.escape(n.nodeValue);
                                else if (o[n.nodeName]) { // multiple occurence of element ..
                                    if (o[n.nodeName] instanceof Array)
                                        o[n.nodeName][o[n.nodeName].length] = X.toObj(n);
                                    else
                                        o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                                } else // first occurence of element..
                                    o[n.nodeName] = X.toObj(n);
                            }
                        } else { // mixed content
                            if (!xml.attributes.length)
                                o = X.escape(X.innerXml(xml));
                            else
                                o["#text"] = X.escape(X.innerXml(xml));
                        }
                    } else if (textChild) { // pure text
                        if (!xml.attributes.length)
                            o = X.escape(X.innerXml(xml));
                        else
                            o["#text"] = X.escape(X.innerXml(xml));
                    } else if (cdataChild) { // cdata
                        if (cdataChild > 1)
                            o = X.escape(X.innerXml(xml));
                        else
                            for (var n = xml.firstChild; n; n = n.nextSibling)
                                o["#cdata"] = X.escape(n.nodeValue);
                    }
                }
                if (!xml.attributes.length && !xml.firstChild) o = null;
            } else if (xml.nodeType == 9) { // document.node
                o = X.toObj(xml.documentElement);
            } else
                alert("unhandled node type: " + xml.nodeType);
            return o;
        },
        toJson: function(o, name, ind) {
            var json = name ? ("\"" + name + "\"") : "";
            if (o instanceof Array) {
                for (var i = 0, n = o.length; i < n; i++)
                    o[i] = X.toJson(o[i], "", ind + "\t");
                json += (name ? ":[" : "[") + (o.length > 1 ? ("\n" + ind + "\t" + o.join(",\n" + ind + "\t") + "\n" + ind) : o.join("")) + "]";
            } else if (o == null)
                json += (name && ":") + "null";
            else if (typeof(o) == "object") {
                var arr = [];
                for (var m in o)
                    arr[arr.length] = X.toJson(o[m], m, ind + "\t");
                json += (name ? ":{" : "{") + (arr.length > 1 ? ("\n" + ind + "\t" + arr.join(",\n" + ind + "\t") + "\n" + ind) : arr.join("")) + "}";
            } else if (typeof(o) == "string")
                json += (name && ":") + "\"" + o.toString() + "\"";
            else
                json += (name && ":") + o.toString();
            return json;
        },
        innerXml: function(node) {
            var s = ""
            if ("innerHTML" in node)
                s = node.innerHTML;
            else {
                var asXml = function(n) {
                    var s = "";
                    if (n.nodeType == 1) {
                        s += "<" + n.nodeName;
                        for (var i = 0; i < n.attributes.length; i++)
                            s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue || "").toString() + "\"";
                        if (n.firstChild) {
                            s += ">";
                            for (var c = n.firstChild; c; c = c.nextSibling)
                                s += asXml(c);
                            s += "</" + n.nodeName + ">";
                        } else
                            s += "/>";
                    } else if (n.nodeType == 3)
                        s += n.nodeValue;
                    else if (n.nodeType == 4)
                        s += "<![CDATA[" + n.nodeValue + "]]>";
                    return s;
                };
                for (var c = node.firstChild; c; c = c.nextSibling)
                    s += asXml(c);
            }
            return s;
        },
        escape: function(txt) {
            return txt.replace(/[\\]/g, "\\\\")
                .replace(/[\"]/g, '\\"')
                .replace(/[\n]/g, '\\n')
                .replace(/[\r]/g, '\\r');
        },
        removeWhite: function(e) {
            e.normalize();
            for (var n = e.firstChild; n;) {
                if (n.nodeType == 3) { // text node
                    if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) { // pure whitespace text node
                        var nxt = n.nextSibling;
                        e.removeChild(n);
                        n = nxt;
                    } else
                        n = n.nextSibling;
                } else if (n.nodeType == 1) { // element node
                    X.removeWhite(n);
                    n = n.nextSibling;
                } else // any other node
                    n = n.nextSibling;
            }
            return e;
        }
    };
    if (xml.nodeType == 9) // document node
        xml = xml.documentElement;
    var json = X.toJson(X.toObj(X.removeWhite(xml)), xml.nodeName, "\t");
    return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
} // END XML2JSON
