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
    return("<p><strong>Urgent requirement</strong> - complete by EOD</p>");
}

export { getFooterCopy, getFullYear, getLatestNotifications };
