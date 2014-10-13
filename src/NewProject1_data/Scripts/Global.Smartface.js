//TODO: long touch 0 larin patlatilmasi algoritması
//Gorsellik
//Basari listesi
var mayinSayisi = 10;
var redArr = [];
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
var myIndex1;
function squareGenerator() {
    var i,
    j;
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            var lbl = new SMF.UI.Label({
                    fillColor : "white",
                    textAlignment : SMF.UI.Alignment.center,
                    height : "10%",
                    width : "10%",
                    text : "",
                    borderWidth : 1,
                    name : counter,
                    backgroundTransparent : false,
                    onTouch: function (e) {
                    myIndex1 = Pages.Page1.Container1.controls.indexOf(this);
                    },
                    onTouchEnded : function (e) {
                        myIndex1 = Pages.Page1.Container1.controls.indexOf(this);
                        if(redArr.indexOf(myIndex1) != -1){
                        return;
                        }
                        if (rndArr.indexOf(parseInt(this.name, 10)) != -1) {
                            Pages.Page1.Container1.touchEnabled = false;
                            this.text = "X";
                            var q;
                            for (q = 0; q < mayinSayisi; q++) {
                                Pages.Page1.Container1.controls[rndArr[q]].text = "X";
                            }                           
                        } else {                           
                            reqFonk(myIndex1);
                        }
                    }
                });
            lbl.top = (i * 10) + "%";
            lbl.left = (j * 10) + "%";
            Pages.Page1.Container1.add(lbl);
            Pages.Page1.Container1.controls[counter].addGesture({
             id:"0",
             type:"tap",
             requiredTaps:2,
             requiredTouches:1,
             callback:function(e){
             //alert(Pages.Page1.Container1.controls[myIndex1].fillColor);
             if(Pages.Page1.Container1.controls[myIndex1].fillColor != "#FF0000"){
             Pages.Page1.Container1.controls[myIndex1].fillColor = "#FF0000";
             redArr.push(myIndex1);
             }else{
             Pages.Page1.Container1.controls[myIndex1].fillColor = "white";
             redArr.splice(redArr.indexOf(myIndex1),1);
             }
             }
            });
            counter++;
        }
    }
}
var mineCounter = 0;
var arroundArr = [];
var controlArr = [];
var indArr = [];
function reqFonk(myIndex) {
    if(redArr.indexOf(myIndex) != -1){
    mineCounter = 0;
    indArr = [];   
    arroundArr.shift();
    if(arroundArr.length > 0){   
          reqFonk(arroundArr[0]);
    }
    return;
    }
     Pages.Page1.Container1.controls[myIndex].touchEnabled = false;
    mineCounter = 0;
    indArr = [];   
    arroundArr.shift();
                            if (myIndex % 10 == 0 && controlArr.indexOf(myIndex) == -1) {
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
                            } else if (myIndex % 10 == 9 && controlArr.indexOf(myIndex) == -1) {
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
                            } else if (controlArr.indexOf(myIndex) == -1) {
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
                            
                            
    var i;
    for (i = 0; i < indArr.length; i++) {
        if (rndArr.indexOf(parseInt(Pages.Page1.Container1.controls[indArr[i]].name, 10)) != -1) {
            mineCounter++;
        }
    }
    Pages.Page1.Container1.controls[myIndex].text = mineCounter;
    if(mineCounter == 0){
        controlArr.push(myIndex);
        Pages.Page1.Container1.controls[myIndex].text = "";
        Pages.Page1.Container1.controls[myIndex].fillColor = "#CACACA";
        var tempArr = [];
        tempArr = arroundArr.concat(indArr);
        arroundArr = tempArr.slice(0);     
    }
    if(arroundArr.length > 0){   
          reqFonk(arroundArr[0]);
       }
}
var rndArr = [];
function randomNmrGen() {
    rndArr = [];
    var a = 0;
    while (a < mayinSayisi) {
        var genNum = Math.floor((Math.random() * 99) + 1);
        if(rndArr.indexOf(genNum)==-1){
        rndArr.push(genNum);
        a++;
        }
    }
    squareGenerator();
}