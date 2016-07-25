import $ from 'jquery';
import _ from 'lodash';

import sections from '../json/map.json';

window.$ = $;

class SpotipposDataParser {
  
	constructor (el, options = {}) {
		this.props = [];
		this.propsMerged = {};
		this.index = 0;
		this.def = $.Deferred();
	}

	getProperties (index) {
		if (index > (sections.coords.length -1)) return

		let	coord = sections.coords[index],
			url = `http://spotippos.vivareal.com/properties?ax=${coord.ax}&ay=${coord.ay}&bx=${coord.bx}&by=${coord.by}`;

		$.get(url, (function(res){
			this.props.push(res.properties);
			this.mergeProperties();
		}).bind(this));
		
		return this.def.promise();
	}

	mergeProperties () {
		this.index++;
		
		if (this.index < sections.coords.length){
			this.getProperties (this.index);			
		}else{
			this.propsMerged = _.flattenDeep(this.props);
			return this.def.resolve(this.propsMerged);
		}

	}


}

export default SpotipposDataParser;