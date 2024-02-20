module.exports = class BottomMenu {
    get login() {
        return $('//*[@content-desc="Login"]');
    }

    get dragAndDrop() {
        return $('//android.widget.TextView[@text="Drag"]');
    }
}