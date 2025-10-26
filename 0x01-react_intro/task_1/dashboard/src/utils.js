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

export { getFooterCopy, getFullYear };
