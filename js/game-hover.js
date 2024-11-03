var originalPortrait;
    var portraitDisplay;
    function changePortrait(element, portraitId) {
      var newImage = element.src;
      portraitDisplay = document.getElementById(portraitId);
      originalPortrait = portraitDisplay.src;
      portraitDisplay.src = newImage;
    }
    function rstPortrait() {
      portraitDisplay.src = originalPortrait;
    }