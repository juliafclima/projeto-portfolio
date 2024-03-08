const template = document.createElement("template");

template.innerHTML = `
  <style>
  .card img {
    max-width: 100%;
    cursor: zoom-in;
    transition: 0.6s;
    margin: auto;
  }
  
  .card {
    background-color: var(--cor-4);
    border-radius: 0.938rem;
    margin: 1.875rem 0.625rem 0 0.625rem;
    color: #fefefe;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .card--titulo {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .img--card {
    max-width: 100%;
    height: 190px; 
    cursor: zoom-in;
    object-fit: contain;
    transition: 0.6s;
    margin: auto;
    display: block;

    &:hover {
      outline: 0.25rem dashed #7c7cbf;
    }
  }

  @media only screen and (max-width: 600px) {
    .card {
      height: auto;
      margin: 1rem 0.625rem; 
    }
  
    .img--card {
      height: auto;
    }
  }
  
  </style>

  <div class="card">
    <h3 class="card--titulo"></h3>
    <a target="_blank" rel="noopener noreferrer">
      <video loading="lazy" class="img--card" alt="Thumbnail do site Links" controls muted>
        <source type="video/mp4">
      </video>
    </a>
  </div>
`;

class ProjetoCardVideo extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.$titulo = shadowRoot.querySelector(".card--titulo");
    this.$video = shadowRoot.querySelector(".img--card");
  }

  connectedCallback() {
    this.$titulo.textContent =
      this.getAttribute("titulo") || "carregando...";
    const source = this.$video.querySelector("source");
    source.setAttribute("src", this.getAttribute("video") || "");
    this.$video.load(); 
  }  
}

customElements.define("card-video", ProjetoCardVideo);
