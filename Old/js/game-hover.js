let originalPortrait;
let portraitDisplay;

function changePortrait(element, portraitId) {
    portraitDisplay = document.getElementById(portraitId);
    originalPortrait = portraitDisplay.src;
    portraitDisplay.src = element.src;

    portraitDisplay = document.getElementById(portraitId);
    if (portraitDisplay) {
        portraitDisplay.src = element.src;
    }
}

function rstPortrait() {
    portraitDisplay.src = originalPortrait;
}