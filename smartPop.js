/**
 * Version: 1
 * Web: 
 * Github: https://github.com/FE-jw/smartPop
 * Released: 
*/

function smartPop(options){
	var smart_btns = options.btns;

	for(var idx = 0; idx < smart_btns.length; idx++){
		smart_btns[idx].addEventListener('click', function(e){
			var original_btn = this;
			var pop_id = (this.hash || this.dataset.smartpop).replace('#', '');
			var pop = document.getElementById(pop_id);
			var tag = this.tagName.toLowerCase();

			if(tag === 'a'){
				e.preventDefault();
			}

			//Open
			function openPop(){
				if(options.cssModeClass){
					pop.classList.add(options.cssModeClass);
				}else{
					pop.style.display = 'block';
				}
				
				//Keyboard Accessibility
				pop.style.outline = 'none';
				pop.tabIndex = 0;
				pop.focus();
			}

			//Close
			function closePop(){
				pop.removeAttribute('tabindex');

				if(options.cssModeClass){
					pop.classList.remove(options.cssModeClass);
				}else{
					pop.style.display = 'none';
				}
				
				pop.style.outline = '';
				original_btn.focus();
			}

			//Close Popup
			var btn_close = options.popClose || 'btn-close';
			pop.querySelector('.' + btn_close).addEventListener('click', function(){
				closePop();
			});
			
			//Keyboard Event
			pop.addEventListener('keydown', function(k_1){
				//ESC
				if(k_1.keyCode == 27){
					closePop();
				}

				//Prevent the popup from losing focus before it closes
				pop.querySelector('.' + btn_close).addEventListener('keydown', function(k_2){
					//Tab
					if(k_2.keyCode == 9){
						k_2.preventDefault();
						pop.focus();
					}
				});
			});

			openPop();
		});
	}
}

NodeList.prototype.smartPop = function(options){
	var settings = {
		btns: this,
		popClose: typeof options !== 'undefined' ? options.popClose : 'btn-close',
		cssModeClass: typeof options !== 'undefined' ? options.cssModeClass : ''
	};

	smartPop(settings);
};