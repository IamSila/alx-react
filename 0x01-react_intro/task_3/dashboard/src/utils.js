function getFullYear() {
    const fullYear = new Date().getFullYear()
    return (fullYear);
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return("ALX");
    }
    else {
        return ("ALX main dashboard");
    }
}

function getLatestNotifications() {
    return("<strong>Urgent requirement</strong> - complete by EOD");
}

export { getFooterCopy, getFullYear, getLatestNotifications };
