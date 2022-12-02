![Smart Layer Popup](https://fe-jw.github.io/SmartPop/img/SP_logo.jpg)

# **Smart Layer Popup [Demo](https://fe-jw.github.io/SmartPop)**

This is a smart layer popup plugin.  
It is useful to expose a particular layer popup when clicking an element.

---

## **How To Use**

1. When applying as `<a>` tag: set the ID value of the popup to be connected to href
	```html
	<a href="#SMARTpop-1" class="your-class">...</a>
	```

2. When applying as a `<button>` tag: set the ID value of the popup to be connected to data-smartpop _(other tags are also possible)_
	```html
	<button type="button" class="your-class" data-smartpop="#SMARTpop-2">...</button>
	```

## **Get Started**

```html
<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
<script src="https://cdn.jsdelivr.net/gh/fe-jw/SmartPop/SmartPop.min.js"></script>
```

```javascript
//Be sure to use querySelectorAll()
document.querySelectorAll('.your-class').SmartPop({
	popClose: 'your-close',	//Close button class name (default is btn-close)
	cssModeClass: 'on'	//Popup none or block class name (if you do not write down the option, handle none/block with style property)
});
```

## **Features**
* It is very easy to expose the layer popup.
* When you open the popup, the focus moves to the popup, making the information search order natural.
* You can close the popup by pressing ESC key.
* When the TAB key is pressed by mistake from the close button, the focus moves back to the popup to prevent losing focus before closing the popup.
* When you close the popup, the focus moves to the button you pressed, allowing you to continue searching for information.

## **Change Log**
* 221202 v1.1.0
	* When tags other than `<a>` and `<button>` are used, tabindex and role attributes are added to enable keyboard access. I recommend you use the `<button>` tag.
* 221016 v1.0.0
	* Change Repository, files, method name(smartPop => SmartPop).
* 220916 v1.0.0
	* Released Ver 1