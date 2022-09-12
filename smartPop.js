/**
 * @author JW <zaixu91@gmail.com>
 * @tutorial https://github.com/FE-jw/smartPop
 * @version 1
 * @released 2022-##-##
 */

NodeList.prototype.smartPop = function(options){
	if(window.NodeList && !NodeList.prototype.forEach){
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	var settings = {
		btns: this,
		popClose: typeof options !== 'undefined' ? options.popClose : 'btn-close',
		cssModeClass: typeof options !== 'undefined' ? options.cssModeClass : ''
	};

	var onInit = function(){
		settings.btns.forEach(function(e){
			var pop_id = (e.hash || e.dataset.smartpop).replace('#', '');
			var pop = document.getElementById(pop_id);
			var tag = e.tagName.toLowerCase();

			//Open
			function openPop(e){
				if(tag === 'a'){
					e.preventDefault();
				}

				if(settings.cssModeClass){
					pop.classList.add(settings.cssModeClass);
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

				if(settings.cssModeClass){
					pop.classList.remove(settings.cssModeClass);
				}else{
					pop.style.display = 'none';
				}
				
				pop.style.outline = '';
				e.focus();
			}

			//Close Popup
			var btn_close = settings.popClose || 'btn-close';
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

			//Pop Open
			e.addEventListener('click', function(e){
				openPop(e);
			});
		});
	};

	onInit();
};