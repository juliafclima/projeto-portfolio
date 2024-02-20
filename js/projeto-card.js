const template = document.createElement('template');

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
    height: auto; 
    cursor: zoom-in;
    object-fit: contain;
    transition: 0.6s;
    margin: auto;
    display: block;

    &:hover {
      outline: 0.25rem dashed #7c7cbf;
    }
  }
  
  .card--botao {
    padding: 0.5rem 1rem;
    background-color: #fefefe;
    border-radius: 0.9rem;
    font-size: 0.9rem;
    font-weight: 700;
    margin: 10px;
    color: #303057;
    text-align: center;
    transition: background-color 0.6s, color 0.6s;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #30305743;
      color: #fefefe;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
  
  .container--botao {
    margin-top: 0.625rem;
    display: flex;
    justify-content: center;
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
      <img loading="lazy" class="img--card" alt="Thumbnail do site Links" />
    </a>
    <div class="container--botao">
      <a target="_blank" rel="noopener noreferrer" class="card--botao">
        <img
        loading="lazy"
        style="height: 20px"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt=""
        />
      </a>
      
      <a target="_blank" rel="noopener noreferrer" class="card--botao">
        <img
          loading="lazy"
          class="imagemTroca"
          style="height: 20px"
          src="../images/iconinternet.png"
          alt=""
        />
      </a>
    </div>
  </div>
`;

class ProjetoCard extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.$titulo = shadowRoot.querySelector('.card--titulo');
    this.$imagem = shadowRoot.querySelector('.img--card');
    this.$linkImagem = shadowRoot.querySelector('.card a');
    this.$botao1 = shadowRoot.querySelector('.card--botao:nth-child(1)');
    this.$botao2 = shadowRoot.querySelector('.card--botao:nth-child(2)');
  }

  connectedCallback() {
    this.$titulo.textContent = this.getAttribute('titulo') || 'em construção...';
    this.$imagem.src = this.getAttribute('imagem') || '../images/aguarde.jpg';
    this.$linkImagem.href = this.getAttribute('link') || 'https://www.linkedin.com/in/juliafclima/';
    this.$botao1.href = this.getAttribute('botao1') || 'https://github.com/juliafclima';
    this.$botao2.href = this.getAttribute('botao2') || 'https://www.linkedin.com/in/juliafclima/';
  }
}

customElements.define('projeto-card', ProjetoCard);