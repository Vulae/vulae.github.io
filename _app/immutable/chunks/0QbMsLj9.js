import{X as m,Y as w,Z as O,F as N,_ as W,a0 as C,I as Y,a1 as k,a2 as j,a3 as q,a4 as B,a5 as T,a6 as b,a7 as I,a8 as H,c as v,a9 as x,aa as F,ab as X,ac as $,ad as z,ae as G,af as U,a as Z,h as S,q as J,e as K,s as Q}from"./BpVL0dV8.js";import{r as ee,b as te}from"./CtrfGrvp.js";function de(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function fe(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _e(e){return e=e.toLowerCase(),ae[e]??e}const oe=["touchstart","touchmove"];function ne(e){return oe.includes(e)}const ie=["textarea","script","style","title"];function pe(e){return ie.includes(e)}function se(e){var t=O,a=N;m(null),w(null);try{return e()}finally{m(t),w(a)}}const V=new Set,A=new Set;function he(e,t,a,s={}){function i(r){if(s.capture||y.call(t,r),!r.cancelBubble)return se(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,i,s)}):t.addEventListener(e,i,s),i}function ve(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of A)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,i=((R=e.composedPath)==null?void 0:R.call(e))||[],r=i[0]||e.target,l=0,_=e.__root;if(_){var d=i.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=i.indexOf(t);if(p===-1)return;d<=p&&(l=d)}if(r=i[l]||e.target,r!==t){C(e,"currentTarget",{configurable:!0,get(){return r||a}});var E=O,u=N;m(null),w(null);try{for(var o,n=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!=null&&(!r.disabled||e.target===r))if(Y(f)){var[M,...P]=f;M.apply(r,[e,...P])}else f.call(r,e)}catch(g){o?n.push(g):o=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(o){for(let g of n)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,m(E),w(u)}}}function ye(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function ue(e,t){return D(e,t)}function ge(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=S,i=v;try{for(var r=j(a);r&&(r.nodeType!==8||r.data!==q);)r=B(r);if(!r)throw T;b(!0),I(r),H();const l=D(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==x)throw F(),T;return b(!1),l}catch(l){if(l===T)return t.recover===!1&&X(),k(),$(a),b(!1),ue(e,t);throw l}finally{b(s),I(i),ee()}}const h=new Map;function D(e,{target:t,anchor:a,props:s={},events:i,context:r,intro:l=!0}){k();var _=new Set,d=u=>{for(var o=0;o<u.length;o++){var n=u[o];if(!_.has(n)){_.add(n);var c=ne(n);t.addEventListener(n,y,{passive:c});var f=h.get(n);f===void 0?(document.addEventListener(n,y,{passive:c}),h.set(n,1)):h.set(n,f+1)}}};d(z(V)),A.add(d);var p=void 0,E=G(()=>{var u=a??t.appendChild(U());return Z(()=>{if(r){J({});var o=K;o.c=r}i&&(s.$$events=i),S&&te(u,null),p=e(u,s)||{},S&&(N.nodes_end=v),r&&Q()}),()=>{var c;for(var o of _){t.removeEventListener(o,y);var n=h.get(o);--n===0?(document.removeEventListener(o,y),h.delete(o)):h.set(o,n)}A.delete(d),u!==a&&((c=u.parentNode)==null||c.removeChild(u))}});return L.set(p,E),p}let L=new WeakMap;function be(e,t){const a=L.get(e);return a?(L.delete(e),a(t)):Promise.resolve()}export{de as a,fe as b,he as c,ve as d,ge as h,pe as i,ue as m,_e as n,ye as s,be as u};
