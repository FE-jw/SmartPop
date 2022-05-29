/**
 * Version: 1
 * Web: 
 * Github: https://github.com/FE-jw/smartPop
 * Released: 
*/

function SmartPop(options){
	var btns = document.getElementsByClassName(options.btnClass);

	for(var idx = 0; idx < btns.length; idx++){
		btns[idx].addEventListener('click', function(e){
			var original_btn = this;
			var pop_id = (this.hash || this.dataset.popup).replace('#', '');
			var pop = document.getElementById(pop_id);
			var tag = this.tagName.toLowerCase();
			if(tag === 'a'){
				e.preventDefault();
			}

			//Open
			function openPop(){
				pop.style.display = 'block';
				
				//Keyboard Accessibility
				pop.style.outline = 'none';
				pop.tabIndex = 0;
				pop.focus();
			}

			//Close
			function closePop(){
				pop.removeAttribute('tabindex');
				pop.style.display = 'none';
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