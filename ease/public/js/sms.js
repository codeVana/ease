
function isIosDevice() {
    var agent = navigator.userAgent.toLowerCase();
    return !!(agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1);
}

function sendSMSMessage(number, message) {
    // Open the phone's default SMS app and populate it with phone number and message
    var url;
    if (isIosDevice) {
        url = 'sms:' + number + '&body=' + encodeURIComponent(message);
    } else {
        url = 'sms:' + number + '?body=' + encodeURIComponent(message);
    }
    window.open(url, '_blank');
}
