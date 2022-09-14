![Smart Layer Popup](/img/SP_logo.jpg)

# **Smart Layer Popup [Demo](https://fe-jw.github.io/smartPop)**

This is a smart layer popup plugin.  
It is useful to expose a particular layer popup when clicking an element.

---

## **How To Use**

1. When applying as a tag: set the ID value of the popup to be connected to href
	```html
	<a href="#SMARTpop-1" class="your-class">...</a>
	```

2. When applying as a button tag: set the ID value of the popup to be connected to data-smartpop _(other tags are also possible)_
	```html
	<button type="button" class="your-class" data-smartpop="#SMARTpop-2">...</button>
	```

## **Get Started**

```html
<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
<script src="https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/smartPop/smartPop.js"></script>
```

```javascript
//Be sure to use querySelectorAll()
document.querySelectorAll('.your-class').smartPop({
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
* 22####
	* Released Ver 1
