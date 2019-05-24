export class Header {
    constructor(element) {
        this.element = element;
        this.init();
    }

    async init() {
        this.element.innerHTML = await this.fetchFile('src/common/header/header.html');
        this.element.getElementsByClassName('ej-doc-hamburger-icon')[0].addEventListener('click', this.onHamBurgerClick.bind(this))
        let style = document.createElement('style');
        style.textContent = await this.fetchFile('src/common/header/header.css');
        this.element.appendChild(style)
    }
    async fetchFile(path) {
        let response = await fetch(path);
        let data = await response.text();
        return data;
    }

    onHamBurgerClick() {
        if (window.matchMedia('(max-width:550px)').matches) {
            let mobileOverlay = document.querySelector('.mobile-overlay');
            let mobileSideBar = document.querySelector('ej-sidebar');
            if (mobileSideBar.classList.contains('ej-doc-toc-mobile-slide-left')) {
                mobileSideBar.classList.remove('ej-doc-toc-mobile-slide-left');
                mobileOverlay.classList.add('e-hidden');
            } else {
                mobileSideBar.classList.add('ej-doc-toc-mobile-slide-left');
                mobileOverlay.classList.remove('e-hidden');
            }
        } else {
            let desktopSidebar = document.querySelector('.ej-doc-main-parent-content');
            let classFn = desktopSidebar.classList.contains('ej-doc-toc-slide-left') ? 'remove' : 'add';
            desktopSidebar.classList[classFn]('ej-doc-toc-slide-left');
        }
    }
}