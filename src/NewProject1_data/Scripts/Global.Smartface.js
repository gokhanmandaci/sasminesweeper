//TODO: long touch 0 larin patlatilmasi algoritması
//Gorsellik
//Basari listesi

function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        alert(lang.applicationError);
        break;
    }
}
var counter = 0;
function squareGenerator() {
    var i,
    j;
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            var lbl = new SMF.UI.Label({
                    fillColor : "#CACACA",
                    textAlignment : SMF.UI.Alignment.center,
                    height : "10%",
                    width : "10%",
                    text : "",
                    borderWidth : 1,
                    name : counter,
                    onTouchEnded : function (e) {
                        var myIndex = Pages.Page1.Container1.controls.indexOf(this);
                        if (rndArr.indexOf(parseInt(this.name, 10)) != -1) {
                            this.text = "X";
                            var q;
                            for (q = 0; q < 10; q++) {
                                Pages.Page1.Container1.controls[rndArr[q]].text = "X";
                            }
                            Pages.Page1.Container1.touchEnabled = false;
                        } else {
                            var q;    
                            var indArr = [];
                            if (myIndex % 10 == 0) {
                                if (myIndex + 1 >= 0 && myIndex + 1 <= 99)
                                    indArr.push(myIndex + 1);
                                if (myIndex - 9 >= 0 && myIndex - 9 <= 99)
                                    indArr.push(myIndex - 9);
                                if (myIndex - 10 >= 0 && myIndex - 10 <= 99)
                                    indArr.push(myIndex - 10);
                                if (myIndex + 10 >= 0 && myIndex + 10 <= 99)
                                    indArr.push(myIndex + 10);
                                if (myIndex + 11 >= 0 && myIndex + 11 <= 99)
                                    indArr.push(myIndex + 11);
                            } else if (myIndex % 10 == 9) {
                                if (myIndex - 1 >= 0 && myIndex - 1 <= 99)
                                    indArr.push(myIndex - 1);
                                if (myIndex - 10 >= 0 && myIndex - 10 <= 99)
                                    indArr.push(myIndex - 10);
                                if (myIndex + 10 >= 0 && myIndex + 10 <= 99)
                                    indArr.push(myIndex + 10);
                                if (myIndex + 9 >= 0 && myIndex + 9 <= 99)
                                    indArr.push(myIndex + 9);
                                if (myIndex - 11 >= 0 && myIndex - 11 <= 99)
                                    indArr.push(myIndex - 11);
                            } else {
                                if (myIndex - 1 >= 0 && myIndex - 1 <= 99)
                                    indArr.push(myIndex - 1);
                                if (myIndex - 9 >= 0 && myIndex - 9 <= 99)
                                    indArr.push(myIndex - 9);
                                if (myIndex - 10 >= 0 && myIndex - 10 <= 99)
                                    indArr.push(myIndex - 10);
                                if (myIndex - 11 >= 0 && myIndex - 11 <= 99)
                                    indArr.push(myIndex - 11);
                                if (myIndex + 1 >= 0 && myIndex + 1 <= 99)
                                    indArr.push(myIndex + 1);
                                if (myIndex + 9 >= 0 && myIndex + 9 <= 99)
                                    indArr.push(myIndex + 9);
                                if (myIndex + 10 >= 0 && myIndex + 10 <= 99)
                                    indArr.push(myIndex + 10);
                                if (myIndex + 11 >= 0 && myIndex + 11 <= 99)
                                    indArr.push(myIndex + 11);
                            }
                            this.text = reqFonk(indArr);
                        }
                    }
                });
            lbl.top = (i * 10) + "%";
            lbl.left = (j * 10) + "%";
            Pages.Page1.Container1.add(lbl);
            counter++;
        }
    }
}
var mineCounter = 0;
function reqFonk(indexArr) {
    mineCounter = 0;
    var i;
    for (i = 0; i < indexArr.length; i++) {
        if (rndArr.indexOf(parseInt(Pages.Page1.Container1.controls[indexArr[i]].name, 10)) != -1) {
            mineCounter++;
        }
    }
    return mineCounter;
}
var rndArr = [];
function randomNmrGen() {
    rndArr = [];
    var a = 0;
    while (a < 10) {
        rndArr.push(Math.floor((Math.random() * 100) + 1));
        a++;
    }
    squareGenerator();
}