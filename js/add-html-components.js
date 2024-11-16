function addComponent(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(elementId + "", error));
}

function addComponentScripts() {
    const SCRIPT_PATHS = ["../../js/footer-scripts", "../../js/header-scripts"];
    const HTML_DIV = document.getElementById("scripts");

    scriptFolders.forEach(folder => {
        fetch(folder)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, 'text/html');
                let scriptTags = doc.querySelectorAll('script');
                scriptTags.forEach(script => {
                    let newScript = document.createElement('script');
                    newScript.src = script.src;
                    HTML_DIV.appendChild(newScript);
                });
            })
            .catch(error => console.error("Error loading scripts from " + folder, error));
    });
}

addComponent("html-components/header.html", "header");
addComponent("html-components/footer.html", "footer");
addComponentScripts();