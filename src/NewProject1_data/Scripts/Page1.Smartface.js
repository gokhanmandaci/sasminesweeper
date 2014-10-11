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
    counter = 0;
    Pages.Page1.Container1.touchEnabled = true;
    Pages.Page1.Container1.clear();
    randomNmrGen();
}