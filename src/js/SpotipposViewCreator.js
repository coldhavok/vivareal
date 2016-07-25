import $ from 'jquery';
import _ from 'lodash';

import sections from '../json/map.json';

window.$ = $;

class SpotipposViewCreator {
  
	constructor (el, options = {}) {
		this.props = [];
		this.propsMerged = {};
		this.index = 0;
		this.def = $.Deferred();
	}

	formatPrice (val) {
		return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	}

	create (obj) {
		let view = `<div class="ad__item">
		  <div class="ad__imgwrapper">
			<span class="ad__price">R$ ${this.formatPrice(obj.price)}</span>
			<img src="/static/img/ad.jpg" alt="" class="ad__img"/>
		  </div>
		  <div class="ad__info">
			<div class="ad__description">
			  <span class="ad__id">ID. ${obj.id}</span>
			  <h3 class="ad__title">${obj.title}</h3>
			  <p class="ad__details">${obj.description}</p>
			</div>
			<div class="ad__features">
				<ul class="ad__featureslist">
					<li class="ad__feature">
						<span class="ad__featureIco ad__featureIco--area"></span>
						${obj.squareMeters} M&sup2;
					</li>
					<li class="ad__feature">
						<span class="ad__featureIco ad__featureIco--bed"></span>
						${obj.beds} quartos
					</li>
					<li class="ad__feature">
						<span class="ad__featureIco ad__featureIco--bath"></span>
						${obj.baths} banheiros
					</li>
				</ul>

				<a href="" title="Vizualizar Anúncio" class="ad__showDetail">Vizualizar Anúncio</a>
			</div>
		  </div>
		</div>`;

		return view;	
	}

	


}

export default SpotipposViewCreator;