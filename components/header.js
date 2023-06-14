class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      nav {
        display:flex;
        justify-content:center;
          background-color: #242424;
        height: 48.8px;
      }
      #a{
        color: #ffbb00;
        text-decoration: none;
        margin:auto 20px;
        font-size: 1.3rem;
        font-weight: bold;
      }
      @media (max-width: 300px) {
        #a{
          margin: auto 2.2px;
          font-size: 0.7rem;
        }
      }
      @media (min-width: 300px) and (max-width: 768px) {
        #a{
          margin: auto 5px;
          font-size: 0.9rem;
        }
      }
      </style>
      <header>
      <nav class="navbar">
        <a id="a" href="index.html">Home</a>
        <!-- <a id="a" href="#">Portfolio</a> -->
        <a id="a" href="Resume_page.html">Resume</a>
        <a id="a" href="Contacts_page.html">Contact</a>
        <a id="a" href="projects.html">projects</a>
        <a id="a"href="#">About</a>
      </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);