function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    /*
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Page1");
    header.setRightItem("Click");
    header.setLeftItem();
    /**/
     Pages.Page1.EditBox1.text = 10;
    randomNmrGen();
}
function Page1_TextButton1_OnPressed(e){
    if(tempSayi == "")
    {
    mayinSayisi = 10;
    Pages.Page1.EditBox1.text = 10;
    }else{
    mayinSayisi = tempSayi;
    Pages.Page1.EditBox1.text = tempSayi;
    }
    counter = 0;
    Pages.Page1.Container1.touchEnabled = true;
    Pages.Page1.Container1.clear();
    finishArr = [];
    controlArr = [];
    arroundArr = [];
    randomNmrGen();
    mineCounter = 0;
    indArr = [];
    redArr = [];
}
var tempSayi = 10;
function Page1_EditBox1_OnExit(e){
    tempSayi = Pages.Page1.EditBox1.text;
    Page1_TextButton1_OnPressed();
}