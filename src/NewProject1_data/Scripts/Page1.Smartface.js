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
    randomNmrGen();
}
function Page1_TextButton1_OnPressed(e){
    if(Pages.Page1.EditBox1.text == "")
    {
    mayinSayisi = 10;
    }else{
    mayinSayisi = parseInt(Pages.Page1.EditBox1.text);
    }
    counter = 0;
    Pages.Page1.Container1.touchEnabled = true;
    Pages.Page1.Container1.clear();
    controlArr = [];
    arroundArr = [];
    randomNmrGen();
}
function Page1_EditBox1_OnExit(e){
    Page1_TextButton1_OnPressed();
}