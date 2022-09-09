//  ================= selector ===========================
const $ = function (selectorName) {
    return document.querySelector(selectorName)
};


// ================ selector all =======================


const $a = function (selectorName) {
    return document.querySelectorAll(selectorName)
};


// ===================== create dynamic element ===========================

const crElement = function (tagName, className, contentt) {
    const nwElwmwnt = document.createElement(tagName);
    if (className) {
        nwElwmwnt.setAttribute("class", className);
    }
    if (contentt) {
        nwElwmwnt.innerHTML = contentt;
    }
    return nwElwmwnt;
}