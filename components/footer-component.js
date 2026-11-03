class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <footer class="footer-baby py-5 mt-auto" id="seccion-equipo">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="h3 fw-bold mb-1">Equipo de Rescate</h2>
          <p class="text-muted">Integrantes del proyecto</p>
        </div>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 text-center justify-content-center"
        >
          </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
