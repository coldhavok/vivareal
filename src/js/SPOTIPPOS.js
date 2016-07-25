import $ from 'jquery';
import SpotipposDataParser from './SpotipposDataParser';
import SpotipposViewCreator from './SpotipposViewCreator';
import SpotipposFilter from './SpotipposFilter';

window.$ = $;

class SPOTIPPOS {
  
	constructor (el, options = {}) {
		this.timeout = null;
		this.dataParser = new SpotipposDataParser();
		this.viewCreator = new SpotipposViewCreator();
		this.filterProps = new SpotipposFilter();
		
		this.init();
		this.generalBinds();
	}

	init() {
		this.dataParser.getProperties(0);

		let self = this;

		$.when( this.dataParser.getProperties(0) ).then(
			function(  ) {
				let views = '';
				_.forEach(self.dataParser.propsMerged, (prop, i) =>{
					if(i<20){
						views += self.viewCreator.create(prop);						
					}
				})
				$('.ads__wrapper').html('').append(views).trigger('content:added');
				$('.filters__element input').prop({disabled:false});
			}
		);
	}

	filter(){
		let views = '';
		_.forEach(this.filterProps.filter(this.dataParser.propsMerged), (prop, i) =>{
			if(i<20){
				views += this.viewCreator.create(prop);						
			}
		});
		if(views !== ''){
			$('.ads__wrapper').html('').append(views).trigger('content:added');			
		}else{
			$('.ads__wrapper').html('').append('<p class="ads__nocontent">Nenhum resultado encontrado</p>').trigger('content:added');						
		}
	}

	generalBinds(){
		
		$(document).on('content:added', (e) =>{
			$('body').css('height', 'auto').css('height', $(document).height());
		});

		$('.filters__element input')
			.on('keyup',(e) =>{
				clearTimeout(this.timeout);
				this.filterProps.buildFilters();
				this.timeout = setTimeout(() =>{
					this.filter(); 
				},50);

			})
			.on('keypress',(e) =>{
				if (e.which < 48 || e.which > 57){
					e.preventDefault();
				}
			});		
	}
  
}

export default SPOTIPPOS;