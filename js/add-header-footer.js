function addHeader() {
    //get the tag to put all the elements inside
    const HEADER_TAG = document.getElementById("header");

    //****inistantiate elements and give them atributes*****

    //Index icon
    const INDEX_ICON = document.createElement('a');
    INDEX_ICON.id = 'index-icon';
    INDEX_ICON.href = 'index.html'

    const ICON_IMG = document.createElement('img');
    ICON_IMG.classList.add('header-icon');
    ICON_IMG.src = 'imgs/icon-imgs/lcj-icon.jpg';
    ICON_IMG.alt = 'icon';

    INDEX_ICON.appendChild(ICON_IMG);



    //Index Sections conatiner
    const SECTIONS_CONTAINER = document.createElement('div');
    SECTIONS_CONTAINER.classList.add('header-sections');

    //Index Sections
    const SECTIONS = [
        { href: 'html/games.html', text: 'Games' },
        { href: 'html/contacts.html', text: 'Contacts' },
        { href: 'html/about-me.html', text: 'About Me' },
    ];

    for (let i = 0; i < SECTIONS.length; i++) {
        SECTIONS[i] = document.createElement('div');
        SECTIONS[i].classList.add('header-section');

        const C = document.createElement('a');
        sectionLink.href = SECTIONS[i].href;

        const sectionText = document.createElement('p');
        sectionText.textContent = SECTIONS[i];

        sectionLink.appendChild(sectionText);
        sectionDiv.appendChild(sectionLink);
        headerSections.appendChild(sectionDiv);
    }

    //******************************************************

}