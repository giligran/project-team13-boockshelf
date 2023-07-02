import"./styles-ee14eca9.js";const l=document.getElementById("book-list"),i=JSON.parse(localStorage.getItem(shoppingListBooks));function r(s,o,e){const t=(s-1)*o,a=t+o;return e.slice(t,a)}if(i&&i.length>0)r(1,3,i).forEach(o=>{const e=document.createElement("li");e.classList.add("book-item"),e.innerHTML=`
    
       <li class="book-item">
            <div class="book-card">
              <div>
                <img
                  src="${o.image}"
                  alt="Зображення обгортки книги"
                  class="img-title-book"
                />
              </div>
              <div class="book-info">
                <h2 class="book-title">${o.title}</h2>
                <h3 class="book-category">${o.category}</h3>
                <p class="book-description">${o.description}</p>
                <div class="buying-list">
                  <p class="book-author">${o.author}</p>
                  <ul class="book-retailers">
                  ${boor.retailers.map(t=>"")}
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/amazon.png"
                          class="retailer-logo amazon-logo"
                      /></a>
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/ibook.png"
                          class="retailer-logo ibook-logo"
                      /></a>
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="../img/logo-partners/bookshop.png"
                          class="retailer-logo bookshop-logo"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button type="button" class="remove-book" data-item-remove>
              <svg class="remove-book-item" width="28" height="28">
                <use href="../img/symbol-defs.svg#icon-dump"></use>
              </svg>
            </button>
          </li>

      <img src="${o.image}" alt="Зображення обгортки книги">
      <h2 class="book-title">${o.title}</h2>
      <h3 class="book-category">${o.category}</h3>
      <p class="book-description">${o.description}</p>
      <p class="book-author">${o.author}</p>
      <ul class="book-retailers">
        ${o.retailers.map(t=>`<li><a href="${t.link}"></a></li>`).join("")}
      </ul>
      <button class="remove-button">Видалити зі списку покупок</button>
      
    `,l.appendChild(e)});else{const s=document.createElement("img");s.src="../img/blocks.png",s.alt="Зображення порожнього списку покупок",l.appendChild(s)}
