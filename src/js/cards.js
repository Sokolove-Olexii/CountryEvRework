export function renderCards(e) {
  console.log(e);
  const ul = document.querySelector('.events');
  const markup = e
    .map(item => {
      // col-3 mb-4 mx-3
      // <img src="${item.images[0].url}" class="card-img-top" alt="${item.name}" id="${item.id}">
      return `
        <li class="card1">  
         <div class="card-img-container" style="background-image: url('${item.images[0].url}')"></div>
         <div class="pink"></div>
          <div class="card-body">
            <h2 class="card-title">${item.name}</h2>
            <p class="card-text">${item.dates.start.localDate}</p>
            <p class="card-text2">${item._embedded.venues[0].name}</p>
          </div>
        </li>
        `;
    })
    .join('');
  ul.innerHTML = markup;
}
