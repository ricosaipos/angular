!function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{nEud:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var r=i("fXoL"),a=i("sYmb"),l=function(){var t=function(){function t(n,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=n,this.translate=e,n.nativeElement.style.textAlign="he"===e.currentLang?"right":"left",n.nativeElement.style.direction="he"===e.currentLang?"rtl":"ltr"}var e,i,r;return e=t,(i=[{key:"ngOnInit",value:function(){var n=this;this.subscription=this.translate.onLangChange.subscribe((function(t){n.el.nativeElement.style.textAlign="he"===t.lang?"right":"left",n.el.nativeElement.style.direction="he"===t.lang?"rtl":"ltr"}))}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe()}}])&&n(e.prototype,i),r&&n(e,r),t}();return t.\u0275fac=function(n){return new(n||t)(r.Mb(r.l),r.Mb(a.d))},t.\u0275dir=r.Hb({type:t,selectors:[["","rtl",""]]}),t}()}}])}();