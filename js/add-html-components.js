function addComponent(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(elementId + "", error));
}


addComponent("html-components/header.html", "header");
addComponent("html-components/footer.html", "footer");