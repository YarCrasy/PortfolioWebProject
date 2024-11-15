var originalPortrait;
var portraitDisplay;

function changePortrait(element, portraitId) {
    const portrait = document.getElementById(portraitId);
    if (portrait) {
        portrait.src = element.src;
    }
}

function rstPortrait() {
    // Logic to reset the portrait image if needed
}