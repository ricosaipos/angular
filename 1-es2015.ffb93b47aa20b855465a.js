(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5RNC":function(t,e,i){"use strict";i.d(e,"a",(function(){return k})),i.d(e,"b",(function(){return y}));var s=i("ofXK"),r=i("fXoL"),a=i("FKr1"),n=i("8LU1"),l=i("FtGj"),o=i("3Pt+"),h=i("R1ws"),d=i("nLfN"),c=i("jqqC"),m=i("u47x"),u=i("cH1L");const b=["sliderWrapper"],p=Object(d.f)({passive:!1}),_={provide:o.k,useExisting:Object(r.U)(()=>k),multi:!0};class v{}class g{constructor(t){this._elementRef=t}}const f=Object(a.y)(Object(a.u)(Object(a.w)(g),"accent"));let k=(()=>{class t extends f{constructor(t,e,i,s,a,n,l,o){super(t),this._focusMonitor=e,this._changeDetectorRef=i,this._dir=s,this._ngZone=n,this._animationMode=o,this._invert=!1,this._max=100,this._min=0,this._step=1,this._thumbLabel=!1,this._tickInterval=0,this._value=null,this._vertical=!1,this.change=new r.n,this.input=new r.n,this.valueChange=new r.n,this.onTouched=()=>{},this._percent=0,this._isSliding=!1,this._isActive=!1,this._tickIntervalPercent=0,this._sliderDimensions=null,this._controlValueAccessorChangeFn=()=>{},this._dirChangeSubscription=c.a.EMPTY,this._pointerDown=t=>{this.disabled||this._isSliding||!x(t)&&0!==t.button||this._ngZone.run(()=>{const e=this.value,i=w(t);this._isSliding=!0,this._lastPointerEvent=t,t.preventDefault(),this._focusHostElement(),this._onMouseenter(),this._bindGlobalEvents(t),this._focusHostElement(),this._updateValueFromPosition(i),this._valueOnSlideStart=this.value,this._pointerPositionOnStart=i,e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent())})},this._pointerMove=t=>{if(this._isSliding){t.preventDefault();const e=this.value;this._lastPointerEvent=t,this._updateValueFromPosition(w(t)),e!=this.value&&this._emitInputEvent()}},this._pointerUp=t=>{if(this._isSliding){const e=this._pointerPositionOnStart,i=w(t);t.preventDefault(),this._removeGlobalEvents(),this._valueOnSlideStart=this._pointerPositionOnStart=this._lastPointerEvent=null,this._isSliding=!1,this._valueOnSlideStart==this.value||this.disabled||!e||e.x===i.x&&e.y===i.y||this._emitChangeEvent()}},this._windowBlur=()=>{this._lastPointerEvent&&this._pointerUp(this._lastPointerEvent)},this._document=l,this.tabIndex=parseInt(a)||0,n.runOutsideAngular(()=>{const e=t.nativeElement;e.addEventListener("mousedown",this._pointerDown,p),e.addEventListener("touchstart",this._pointerDown,p)})}get invert(){return this._invert}set invert(t){this._invert=Object(n.b)(t)}get max(){return this._max}set max(t){this._max=Object(n.e)(t,this._max),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get min(){return this._min}set min(t){this._min=Object(n.e)(t,this._min),null===this._value&&(this.value=this._min),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get step(){return this._step}set step(t){this._step=Object(n.e)(t,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set thumbLabel(t){this._thumbLabel=Object(n.b)(t)}get tickInterval(){return this._tickInterval}set tickInterval(t){this._tickInterval="auto"===t?"auto":"number"==typeof t||"string"==typeof t?Object(n.e)(t,this._tickInterval):0}get value(){return null===this._value&&(this.value=this._min),this._value}set value(t){if(t!==this._value){let e=Object(n.e)(t);this._roundToDecimal&&(e=parseFloat(e.toFixed(this._roundToDecimal))),this._value=e,this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(n.b)(t)}get displayValue(){return this.displayWith?this.displayWith(this.value):this._roundToDecimal&&this.value&&this.value%1!=0?this.value.toFixed(this._roundToDecimal):this.value||0}focus(t){this._focusHostElement(t)}blur(){this._blurHostElement()}get percent(){return this._clamp(this._percent)}get _invertAxis(){return this.vertical?!this.invert:this.invert}get _isMinValue(){return 0===this.percent}get _thumbGap(){return this.disabled?7:this._isMinValue&&!this.thumbLabel?this._isActive?10:7:0}get _trackBackgroundStyles(){const t=this.vertical?`1, ${1-this.percent}, 1`:1-this.percent+", 1, 1";return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"-":""}${this._thumbGap}px) scale3d(${t})`}}get _trackFillStyles(){const t=this.percent,e=this.vertical?`1, ${t}, 1`:t+", 1, 1";return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"":"-"}${this._thumbGap}px) scale3d(${e})`,display:0===t?"none":""}}get _ticksContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"-":""}${this._tickIntervalPercent/2*100}%)`}}get _ticksStyles(){let t=100*this._tickIntervalPercent,e={backgroundSize:this.vertical?`2px ${t}%`:t+"% 2px",transform:`translateZ(0) translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"":"-"}${t/2}%)${this.vertical||"rtl"!=this._getDirection()?"":" rotate(180deg)"}`};if(this._isMinValue&&this._thumbGap){let t;t=this.vertical?this._invertAxis?"Bottom":"Top":this._invertAxis?"Right":"Left",e["padding"+t]=this._thumbGap+"px"}return e}get _thumbContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(-${100*(("rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis)?this.percent:1-this.percent)}%)`}}_shouldInvertMouseCoords(){return"rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis}_getDirection(){return this._dir&&"rtl"==this._dir.value?"rtl":"ltr"}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{this._isActive=!!t&&"keyboard"!==t,this._changeDetectorRef.detectChanges()}),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngOnDestroy(){const t=this._elementRef.nativeElement;t.removeEventListener("mousedown",this._pointerDown,p),t.removeEventListener("touchstart",this._pointerDown,p),this._lastPointerEvent=null,this._removeGlobalEvents(),this._focusMonitor.stopMonitoring(this._elementRef),this._dirChangeSubscription.unsubscribe()}_onMouseenter(){this.disabled||(this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent())}_onFocus(){this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent()}_onBlur(){this.onTouched()}_onKeydown(t){if(this.disabled||Object(l.s)(t))return;const e=this.value;switch(t.keyCode){case l.l:this._increment(10);break;case l.k:this._increment(-10);break;case l.e:this.value=this.max;break;case l.h:this.value=this.min;break;case l.i:this._increment("rtl"==this._getDirection()?1:-1);break;case l.p:this._increment(1);break;case l.m:this._increment("rtl"==this._getDirection()?-1:1);break;case l.d:this._increment(-1);break;default:return}e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent()),this._isSliding=!0,t.preventDefault()}_onKeyup(){this._isSliding=!1}_getWindow(){return this._document.defaultView||window}_bindGlobalEvents(t){const e=this._document,i=x(t),s=i?"touchend":"mouseup";e.addEventListener(i?"touchmove":"mousemove",this._pointerMove,p),e.addEventListener(s,this._pointerUp,p),i&&e.addEventListener("touchcancel",this._pointerUp,p);const r=this._getWindow();void 0!==r&&r&&r.addEventListener("blur",this._windowBlur)}_removeGlobalEvents(){const t=this._document;t.removeEventListener("mousemove",this._pointerMove,p),t.removeEventListener("mouseup",this._pointerUp,p),t.removeEventListener("touchmove",this._pointerMove,p),t.removeEventListener("touchend",this._pointerUp,p),t.removeEventListener("touchcancel",this._pointerUp,p);const e=this._getWindow();void 0!==e&&e&&e.removeEventListener("blur",this._windowBlur)}_increment(t){this.value=this._clamp((this.value||0)+this.step*t,this.min,this.max)}_updateValueFromPosition(t){if(!this._sliderDimensions)return;let e=this._clamp(((this.vertical?t.y:t.x)-(this.vertical?this._sliderDimensions.top:this._sliderDimensions.left))/(this.vertical?this._sliderDimensions.height:this._sliderDimensions.width));if(this._shouldInvertMouseCoords()&&(e=1-e),0===e)this.value=this.min;else if(1===e)this.value=this.max;else{const t=this._calculateValue(e),i=Math.round((t-this.min)/this.step)*this.step+this.min;this.value=this._clamp(i,this.min,this.max)}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.value),this.valueChange.emit(this.value),this.change.emit(this._createChangeEvent())}_emitInputEvent(){this.input.emit(this._createChangeEvent())}_updateTickIntervalPercent(){if(this.tickInterval&&this._sliderDimensions)if("auto"==this.tickInterval){let t=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,e=Math.ceil(30/(t*this.step/(this.max-this.min)));this._tickIntervalPercent=e*this.step/t}else this._tickIntervalPercent=this.tickInterval*this.step/(this.max-this.min)}_createChangeEvent(t=this.value){let e=new v;return e.source=this,e.value=t,e}_calculatePercentage(t){return((t||0)-this.min)/(this.max-this.min)}_calculateValue(t){return this.min+t*(this.max-this.min)}_clamp(t,e=0,i=1){return Math.max(e,Math.min(t,i))}_getSliderDimensions(){return this._sliderWrapper?this._sliderWrapper.nativeElement.getBoundingClientRect():null}_focusHostElement(t){this._elementRef.nativeElement.focus(t)}_blurHostElement(){this._elementRef.nativeElement.blur()}writeValue(t){this.value=t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.l),r.Mb(m.h),r.Mb(r.h),r.Mb(u.b,8),r.Wb("tabindex"),r.Mb(r.A),r.Mb(s.d),r.Mb(h.a,8))},t.\u0275cmp=r.Gb({type:t,selectors:[["mat-slider"]],viewQuery:function(t,e){var i;1&t&&r.Gc(b,!0),2&t&&r.oc(i=r.Zb())&&(e._sliderWrapper=i.first)},hostAttrs:["role","slider",1,"mat-slider","mat-focus-indicator"],hostVars:28,hostBindings:function(t,e){1&t&&r.Yb("focus",(function(){return e._onFocus()}))("blur",(function(){return e._onBlur()}))("keydown",(function(t){return e._onKeydown(t)}))("keyup",(function(){return e._onKeyup()}))("mouseenter",(function(){return e._onMouseenter()}))("selectstart",(function(t){return t.preventDefault()})),2&t&&(r.Ub("tabIndex",e.tabIndex),r.Bb("aria-disabled",e.disabled)("aria-valuemax",e.max)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-orientation",e.vertical?"vertical":"horizontal"),r.Eb("mat-slider-disabled",e.disabled)("mat-slider-has-ticks",e.tickInterval)("mat-slider-horizontal",!e.vertical)("mat-slider-axis-inverted",e._invertAxis)("mat-slider-invert-mouse-coords",e._shouldInvertMouseCoords())("mat-slider-sliding",e._isSliding)("mat-slider-thumb-label-showing",e.thumbLabel)("mat-slider-vertical",e.vertical)("mat-slider-min-value",e._isMinValue)("mat-slider-hide-last-tick",e.disabled||e._isMinValue&&e._thumbGap&&e._invertAxis)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",color:"color",tabIndex:"tabIndex",invert:"invert",max:"max",min:"min",value:"value",step:"step",thumbLabel:"thumbLabel",tickInterval:"tickInterval",vertical:"vertical",displayWith:"displayWith"},outputs:{change:"change",input:"input",valueChange:"valueChange"},exportAs:["matSlider"],features:[r.zb([_]),r.xb],decls:13,vars:6,consts:[[1,"mat-slider-wrapper"],["sliderWrapper",""],[1,"mat-slider-track-wrapper"],[1,"mat-slider-track-background",3,"ngStyle"],[1,"mat-slider-track-fill",3,"ngStyle"],[1,"mat-slider-ticks-container",3,"ngStyle"],[1,"mat-slider-ticks",3,"ngStyle"],[1,"mat-slider-thumb-container",3,"ngStyle"],[1,"mat-slider-focus-ring"],[1,"mat-slider-thumb"],[1,"mat-slider-thumb-label"],[1,"mat-slider-thumb-label-text"]],template:function(t,e){1&t&&(r.Rb(0,"div",0,1),r.Rb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"div",4),r.Qb(),r.Rb(5,"div",5),r.Nb(6,"div",6),r.Qb(),r.Rb(7,"div",7),r.Nb(8,"div",8),r.Nb(9,"div",9),r.Rb(10,"div",10),r.Rb(11,"span",11),r.Cc(12),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.Ab(3),r.ic("ngStyle",e._trackBackgroundStyles),r.Ab(1),r.ic("ngStyle",e._trackFillStyles),r.Ab(1),r.ic("ngStyle",e._ticksContainerStyles),r.Ab(1),r.ic("ngStyle",e._ticksStyles),r.Ab(1),r.ic("ngStyle",e._thumbContainerStyles),r.Ab(5),r.Dc(e.displayValue))},directives:[s.n],styles:['.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n'],encapsulation:2,changeDetection:0}),t})();function x(t){return"t"===t.type[0]}function w(t){const e=x(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.clientX,y:e.clientY}}let y=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[s.c,a.h],a.h]}),t})()}}]);