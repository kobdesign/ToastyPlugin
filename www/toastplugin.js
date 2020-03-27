//Empty Constructor
function ToastyPlugin(){};

ToastyPlugin.prototype.show = function (message, duration, successCallback, errorCallback) {
    var option = {};
    option.message = message;
    option.duration = duration;
    cordova.exec(successCallback, errorCallback, 'ToastyPlugin','show', [options]);
}

    //Install constructor that binds Toasty to window
ToastyPlugin.install = function () {
    if(!window.plugin){
        window.plugin = {};
    }
    window.plugin.toastyPlugin = new ToastyPlugin();
    return window.plugin.toastyPlugin;
};

cordova.addConstructor(ToastyPlugin.install);

