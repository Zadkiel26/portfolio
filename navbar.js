/* 
    Title: Zadkiel Rodriguez - Navbar
    File Name: navbar.js
    Author: Zadkiel Rodriguez Alvarado 
    Date: 12/07/2023
    Description: Personal portfolio includes projects, api tests, diagrams, about me, and resume.
    Resources:
        GitHub: https://github.com/Zadkiel26/web-330/blob/main/week-5/assignment-1/cart-component.js
*/
class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="/index.html">Home</a>
                <a href="/about.html">About</a>
                <a href="/projects.html">Project</a>
                <div class="dropdown">
                    <a href="#">Extra</a>
                    <div class="dropdown-content">
                        <a href="/database.html">Database Diagrams</a>
                        <a href="/api-unit-test.html">API Unit Test</a>
                        <a href="/resume.html">Resume</a>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}

customElements.define('navbar-component', NavBar);