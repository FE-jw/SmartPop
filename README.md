# **Smart Layer Popup(개발중)**

스마트한 레이어 팝업 플러그인  
요소 클릭 시 특정 팝업을 노출시킬 때 유용하다.

## **How To Use**

1. a 태그로 적용하는 경우: 연결할 팝업의 ID값을 href에 설정
	```html
	<a href="#SMARTpop-1" class="your-class">...</a>
	```

2. button 태그로 적용하는 경우: 연결할 팝업의 ID값을 data-smartpop에 설정(다른 태그도 가능)
	```html
	<button type="button" class="your-class" data-smartpop="#SMARTpop-2">...</button>
	```

## **Get Stated**

```html
<script src="https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/smartPop/smartPop.js"></script>
```

```javascript
document.querySelectorAll('.your-class').smartPop({
	//option
	popClose: 'your-close',	//닫기 버튼 class명(기본값은 btn-close)
	cssModeClass: 'on'	//팝업 none or block class명(옵션을 적지 않을 경우 style 속성으로 none/block 처리)
});
```

## **Features**
1. ESC key를 눌러 팝업을 닫을 수 있다.
2. 팝업을 열면 포커스가 팝업으로 이동하여 정보의 순서가 자연스럽다.
3. 닫기 버튼에서 실수로 Tab key를 눌렀을 때 다시 팝업으로 포커스가 이동하여 팝업을 닫기 전 포커스 이탈을 방지한다.
4. 팝업을 닫으면 눌렀던 버튼으로 포커스가 이동하여 정보를 이어서 탐색할 수 있다.

## **Change Log**