/**
 * Version: 1.1.0
 * Web: https://fe-jw.github.io/SmartPop
 * Github: https://github.com/FE-jw/SmartPop
 * Released: 2022-12-02
*/

NodeList.prototype.SmartPop = function(options){
	if(window.NodeList && !NodeList.prototype.forEach){
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	var settings = {
		btns: this,
		popClose: 'btn-close',
		cssModeClass: ''
	};

	if(options){
		settings.popClose = typeof options.popClose != 'undefined' ? options.popClose : settings.popClose;
		settings.cssModeClass = typeof options.cssModeClass != 'undefined' ? options.cssModeClass : settings.cssModeClass;
	}

	var onInit = function(){
		settings.btns.forEach(function(e){
			var pop_id = (e.hash || e.dataset.smartpop).replace('#', '');
			var pop = document.getElementById(pop_id);
			var tag = e.tagName.toLowerCase();

			//A11Y
			if(tag != 'button' && tag != 'a'){
				e.tabIndex = 0;
				e.role = 'button';
				e.style.cursor = 'pointer';

				e.addEventListener('keydown', function(k){
					if(k.keyCode == 13){
						e.click();
					}
				});
			}

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
