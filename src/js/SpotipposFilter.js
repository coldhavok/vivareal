import $ from 'jquery';
import _ from 'lodash';

import sections from '../json/map.json';

window.$ = $;

class SpotipposFilter {
  
	constructor (el, options = {}) {
		this.filters = {};
		this.filterPrice = {};
		this.filterTimeout = null;
	}

	filter (obj) {
		let res = {};

		res = _.filter(obj, _.matches(this.filters));		
		
		return res;
	}

	buildFilters (){
		this.filters = {};
		this.filtersPrice = {};
		$('.filters__element input').each((i,field) =>{
			let val = $(field).val(),
				nome = $(field).attr('name');

			if(val.length > 0){
				if(nome == 'max' || nome == 'min'){
					this.filtersPrice[nome] = val;
				}else{
					this.filters[nome] = val; 					
				}

			}
		});
	}
}

export default SpotipposFilter;