document.getElementById('language-dropdown').addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage) {
        window.location.href = selectedLanguage;
    }
});
