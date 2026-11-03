class LetterComponent extends HTMLElement {
  connectedCallback() {
    const letter = this.getAttribute("letter") ?? "A";
    const imgFrontal = this.getAttribute("img-frontal") ?? "";
    const imgLateral = this.getAttribute("img-lateral") ?? "";

    this.innerHTML = `
      <div class="card h-100 letter-card" data-letter="${letter}"
          role="button" tabindex="0" aria-label="Letra ${letter}: toca para voltear">
        <div class="card-inner">
          <div class="card-frontal">
            <img src="${imgFrontal}" alt="Letra ${letter} con su dibujo" loading="lazy">
          </div>
          <div class="card-lateral">
            <img src="${imgLateral}" alt="Sílabas de la letra ${letter}" loading="lazy">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("letter-component", LetterComponent);
