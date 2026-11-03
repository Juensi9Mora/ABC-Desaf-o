class AlphabetComponent extends HTMLElement {
  connectedCallback() {
    const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    const row = document.createElement("div");
    row.className =
      "row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center";

    letters.forEach((letter) => {
      const item = document.createElement("letter-component");
      item.className = "col";
      item.setAttribute("letter", letter);
      item.setAttribute("img-frontal", `assets/frotal/letter_${letter.toLowerCase()}.webp`);
      item.setAttribute("img-lateral", `assets/lateral/letter_${letter.toLowerCase()}.png`);
      row.appendChild(item);
    });

    this.appendChild(row);
  }
}

customElements.define("alphabet-component", AlphabetComponent);
