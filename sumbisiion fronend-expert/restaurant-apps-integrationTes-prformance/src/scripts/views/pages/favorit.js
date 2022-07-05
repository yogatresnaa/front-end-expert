import FavoriteRestodb from '../../data/favoriteresto-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
        <div class="artic">
        <h2>Restoran Favorit</h2>
        <div class="item-produk">
        
        </div>
        </div>
    
        `;
  },
  async afterRender() {
    const restoran = await FavoriteRestodb.getAllResto();
    const restoranContainer = document.querySelector('.item-produk');
    restoran.forEach((resto) => {
      restoranContainer.innerHTML += createMovieItemTemplate(resto);
    });
  },
};

export default favorite;
