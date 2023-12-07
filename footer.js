/* 
    Title: Zadkiel Rodriguez - Footer
    File Name: footer.js
    Author: Zadkiel Rodriguez Alvarado 
    Date: 12/07/2023
    Description: Personal portfolio includes projects, api tests, diagrams, about me, and resume.
    Resources:
        GitHub: https://github.com/Zadkiel26/web-330/blob/main/week-5/assignment-1/cart-component.js
*/
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="links-container">
                <a href="https://github.com/Zadkiel26?tab=repositories" target="_blank"><span class="fa fa-github-square"></span>GitHub</a>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank"><span class="fa fa-university"></span>Bellevue's Web Development Degree</a>
                <a href="https://www.youtube.com/c/bellevueuniversity" target="_blank"><span class="fa fa-youtube-play"></span>Bellevue's Youtube</a>
                <a href="https://github.com/buwebdev" target="_blank"><span class="fa fa-github-square"></span>Bellevue's GitHub</a>
            </div>
            <div class="copyright"><br />&copy; Copyright 2023 Zadkiel </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);