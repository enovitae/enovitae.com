import{r as se}from"./index.ed373d49.js";var ne={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=se,me=Symbol.for("react.element"),xe=Symbol.for("react.fragment"),Me=Object.prototype.hasOwnProperty,ye=ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_e={key:!0,ref:!0,__self:!0,__source:!0};function re(s,e,t){var n,r={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Me.call(e,n)&&!_e.hasOwnProperty(n)&&(r[n]=e[n]);if(s&&s.defaultProps)for(n in e=s.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:me,type:s,key:i,ref:o,props:r,_owner:ye.current}}T.Fragment=xe;T.jsx=re;T.jsxs=re;ne.exports=T;var m=ne.exports;function E(s){return Array.isArray?Array.isArray(s):ce(s)==="[object Array]"}const be=1/0;function ve(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-be?"-0":e}function Ee(s){return s==null?"":ve(s)}function b(s){return typeof s=="string"}function ie(s){return typeof s=="number"}function we(s){return s===!0||s===!1||Se(s)&&ce(s)=="[object Boolean]"}function oe(s){return typeof s=="object"}function Se(s){return oe(s)&&s!==null}function x(s){return s!=null}function D(s){return!s.trim().length}function ce(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Ie="Incorrect 'index' type",Ae=s=>`Invalid value for key ${s}`,Le=s=>`Pattern length exceeds max of ${s}.`,Re=s=>`Missing ${s} property in key`,Ne=s=>`Property 'weight' in key '${s}' must be a positive integer`,J=Object.prototype.hasOwnProperty;class ke{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let r=ae(n);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ae(s){let e=null,t=null,n=null,r=1,i=null;if(b(s)||E(s))n=s,e=X(s),t=K(s);else{if(!J.call(s,"name"))throw new Error(Re("name"));const o=s.name;if(n=o,J.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(Ne(o));e=X(o),t=K(o),i=s.getFn}return{path:e,id:t,weight:r,src:n,getFn:i}}function X(s){return E(s)?s:s.split(".")}function K(s){return E(s)?s.join("."):s}function je(s,e){let t=[],n=!1;const r=(i,o,c)=>{if(x(i))if(!o[c])t.push(i);else{let a=o[c];const l=i[a];if(!x(l))return;if(c===o.length-1&&(b(l)||ie(l)||we(l)))t.push(Ee(l));else if(E(l)){n=!0;for(let h=0,d=l.length;h<d;h+=1)r(l[h],o,c+1)}else o.length&&r(l,o,c+1)}};return r(s,b(e)?e.split("."):e,0),n?t:t[0]}const Ce={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Oe={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},$e={location:0,threshold:.6,distance:100},Fe={useExtendedSearch:!1,getFn:je,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Oe,...Ce,...$e,...Fe};const Te=/[^ ]+/g;function Pe(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(Te).length;if(t.has(i))return t.get(i);const o=1/Math.pow(i,.5*s),c=parseFloat(Math.round(o*n)/n);return t.set(i,c),c},clear(){t.clear()}}}class Y{constructor({getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){this.norm=Pe(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,b(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();b(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!x(e)||D(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(x(o)){if(E(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(x(h))if(b(h)&&!D(h)){let d={v:h,i:l,n:this.norm.get(h)};c.push(d)}else E(h)&&h.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}n.$[i]=c}else if(b(o)&&!D(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function le(s,e,{getFn:t=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new Y({getFn:t,fieldNormWeight:n});return r.setKeys(s.map(ae)),r.setSources(e),r.create(),r}function ze(s,{getFn:e=u.getFn,fieldNormWeight:t=u.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new Y({getFn:e,fieldNormWeight:t});return i.setKeys(n),i.setIndexRecords(r),i}function $(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const o=e/s.length;if(i)return o;const c=Math.abs(n-t);return r?o+c/r:c?1:o}function De(s=[],e=u.minMatchCharLength){let t=[],n=-1,r=-1,i=0;for(let o=s.length;i<o;i+=1){let c=s[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&t.push([n,r]),n=-1)}return s[i-1]&&i-n>=e&&t.push([n,i-1]),t}const R=32;function Ke(s,e,t,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>R)throw new Error(Le(R));const h=e.length,d=s.length,f=Math.max(0,Math.min(n,d));let p=i,g=f;const M=c>1||a,A=M?Array(d):[];let v;for(;(v=s.indexOf(e,g))>-1;){let y=$(e,{currentLocation:v,expectedLocation:f,distance:r,ignoreLocation:l});if(p=Math.min(y,p),g=v+h,M){let w=0;for(;w<h;)A[v+w]=1,w+=1}}g=-1;let N=[],L=1,C=h+d;const pe=1<<h-1;for(let y=0;y<h;y+=1){let w=0,S=C;for(;w<S;)$(e,{errors:y,currentLocation:f+S,expectedLocation:f,distance:r,ignoreLocation:l})<=p?w=S:C=S,S=Math.floor((C-w)/2+w);C=S;let V=Math.max(1,f-S+1),z=o?d:Math.min(f+S,d)+h,k=Array(z+2);k[z+1]=(1<<y)-1;for(let _=z;_>=V;_-=1){let O=_-1,Q=t[s.charAt(O)];if(M&&(A[O]=+!!Q),k[_]=(k[_+1]<<1|1)&Q,y&&(k[_]|=(N[_+1]|N[_])<<1|1|N[_+1]),k[_]&pe&&(L=$(e,{errors:y,currentLocation:O,expectedLocation:f,distance:r,ignoreLocation:l}),L<=p)){if(p=L,g=O,g<=f)break;V=Math.max(1,2*f-g)}}if($(e,{errors:y+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:l})>p)break;N=k}const P={isMatch:g>=0,score:Math.max(.001,L)};if(M){const y=De(A,c);y.length?a&&(P.indices=y):P.isMatch=!1}return P}function Be(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const r=s.charAt(t);e[r]=(e[r]||0)|1<<n-t-1}return e}class he{constructor(e,{location:t=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,p)=>{this.chunks.push({pattern:f,alphabet:Be(f),startIndex:p})},d=this.pattern.length;if(d>R){let f=0;const p=d%R,g=d-p;for(;f<g;)h(this.pattern.substr(f,R),f),f+=R;if(p){const M=d-R;h(this.pattern.substr(M),M)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:M,startIndex:A})=>{const{isMatch:v,score:N,indices:L}=Ke(e,g,M,{location:r+A,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});v&&(f=!0),d+=N,v&&L&&(h=[...h,...L])});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&n&&(p.indices=h),p}}class I{constructor(e){this.pattern=e}static isMultiMatch(e){return Z(e,this.multiRegex)}static isSingleMatch(e){return Z(e,this.singleRegex)}search(){}}function Z(s,e){const t=s.match(e);return t?t[1]:null}class We extends I{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Ge extends I{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class He extends I{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Ue extends I{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Ye extends I{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Ve extends I{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ue extends I{constructor(e,{location:t=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new he(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class de extends I{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+i,r.push([n,t-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const B=[We,de,He,Ue,Ve,Ye,Ge,ue],q=B.length,Qe=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Je="|";function Xe(s,e={}){return s.split(Je).map(t=>{let n=t.trim().split(Qe).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let a=!1,l=-1;for(;!a&&++l<q;){const h=B[l];let d=h.isMultiMatch(c);d&&(r.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<q;){const h=B[l];let d=h.isSingleMatch(c);if(d){r.push(new h(d,e));break}}}return r})}const Ze=new Set([ue.type,de.type]);class qe{constructor(e,{isCaseSensitive:t=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:c=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=Xe(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=t.length;a<l;a+=1){const h=t[a];o.length=0,i=0;for(let d=0,f=h.length;d<f;d+=1){const p=h[d],{isMatch:g,indices:M,score:A}=p.search(e);if(g){if(i+=1,c+=A,n){const v=p.constructor.type;Ze.has(v)?o=[...o,...M]:o.push(M)}}else{c=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return n&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const W=[];function et(...s){W.push(...s)}function G(s,e){for(let t=0,n=W.length;t<n;t+=1){let r=W[t];if(r.condition(s,e))return new r(s,e)}return new he(s,e)}const F={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},U=s=>!!(s[F.AND]||s[F.OR]),tt=s=>!!s[H.PATH],st=s=>!E(s)&&oe(s)&&!U(s),ee=s=>({[F.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function fe(s,e,{auto:t=!0}={}){const n=r=>{let i=Object.keys(r);const o=tt(r);if(!o&&i.length>1&&!U(r))return n(ee(r));if(st(r)){const a=o?r[H.PATH]:i[0],l=o?r[H.PATTERN]:r[a];if(!b(l))throw new Error(Ae(a));const h={keyId:K(a),pattern:l};return t&&(h.searcher=G(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];E(l)&&l.forEach(h=>{c.children.push(n(h))})}),c};return U(s)||(s=ee(s)),n(s)}function nt(s,{ignoreFieldNorm:e=u.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),t.score=n})}function rt(s,e){const t=s.matches;e.matches=[],x(t)&&t.forEach(n=>{if(!x(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function it(s,e){e.score=s.score}function ot(s,e,{includeMatches:t=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return t&&r.push(rt),n&&r.push(it),s.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class j{constructor(e,t={},n){this.options={...u,...t},this.options.useExtendedSearch,this._keyStore=new ke(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Y))throw new Error(Ie);this._myIndex=t||le(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=b(e)?b(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return nt(a,{ignoreFieldNorm:c}),i&&a.sort(o),ie(t)&&t>-1&&(a=a.slice(0,t)),ot(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=G(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=t.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:h}]})}),r}_searchLogical(e){const t=fe(e,this.options),n=(c,a,l)=>{if(!c.children){const{keyId:d,searcher:f}=c,p=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return p&&p.length?[{idx:l,item:a,matches:p}]:[]}const h=[];for(let d=0,f=c.children.length;d<f;d+=1){const p=c.children[d],g=n(p,a,l);if(g.length)h.push(...g);else if(c.operator===F.AND)return[]}return h},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(x(c)){let l=n(t,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),o}_searchObjectList(e){const t=G(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!x(o))return;let a=[];n.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:t}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:t,searcher:n}){if(!x(t))return[];let r=[];if(E(t))t.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=n.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:o,norm:c,indices:h})});else{const{v:i,n:o}=t,{isMatch:c,score:a,indices:l}=n.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:l})}return r}}j.version="7.0.0";j.createIndex=le;j.parseIndex=ze;j.config=u;j.parseQuery=fe;et(qe);const ct="it",te={en:{"site.title":"Unveiling Flavors, Rankings, and Pairings","site.desc":"Discover the world of wine through reviews, rankings, and comparisons. Find your perfect vinous companion on this site rich in flavors and traditions.","site.search.placeholder":"Search for anything...","site.search.title":"Please type at least three characters","site.search.result":"result","site.search.results":"results","site.search.resultFound":"Found","site.search.resultsFound":"Found","app.changeLocale":"Change language","blog.recent_text":"Recent articles","blog.recent_subtext":"Most recent posts for wine world","post.fromuser":"By","post.published":"published","post.specification":"Specification","post.reasons":"Reasons","post.reasons.tobuy":"To buy","post.reasons.toavoid":"To avoid","post.review":"Review","post.button":"Buy","footer.company.name":"enovitae","footer.company.desc":"Providing reliable review since 2023","footer.nav.pages":"Pages","footer.nav.legal":"Legal","footer.newsletter.label":"Don't miss updates, enter your email addres here","footer.newsletter.button":"Subscribe","page.guide.index.title":"Guides","page.standing.index.title":"Standings","page.comparison.index.title":"Comparisons","page.guide.index.desc":"Guides","page.standing.index.desc":"Standings","page.comparison.index.desc":"Comparisons","page.tags.title":"Filtering for tag:","page.tags.subtitle":"Most relevant articles"},it:{"site.title":"Esplora Sapori, Classifiche e Abbinamenti","site.desc":"Esplora il mondo del vino con recensioni, classifiche e comparazioni. Trova il tuo perfetto compagno enologico su questo sito ricco di sapori e tradizioni.","site.search.placeholder":"Cerca qualsiasi cosa...","site.search.title":"Digita almeno tre caratteri","site.search.result":"risulato","site.search.results":"risultati","site.search.resultFound":"Trovato","site.search.resultsFound":"Trovati","app.changeLocale":"Change language","blog.recent_text":"Articoli recenti","blog.recent_subtext":"Articoli più recenti sul mondo del vino","post.fromuser":"Dall'utente","post.published":"pubblicato il","post.specification":"Specifiche tecniche","post.reasons":"Motivazioni","post.reasons.tobuy":"Per comprare","post.reasons.toavoid":"Per evitare","post.review":"Recensione","post.button":"Acquista","footer.company.name":"enovitae","footer.company.desc":"Fornisce recensioni affidabili dal 2023","footer.nav.pages":"Pagine","footer.nav.legal":"Privacy","footer.newsletter.label":"Resta aggiornato, inserisci il tuo indirizzo email","footer.newsletter.button":"Invia","page.guide.index.title":"Guide","page.standing.index.title":"Classifiche","page.comparison.index.title":"Comparazioni","page.guide.index.desc":"Lista guide","page.standing.index.desc":"Lista classifiche","page.comparison.index.desc":"Lista comparazioni","page.tags.title":"Filtrando per tag:","page.tags.subtitle":"Articoli più rilevanti"}};function at(s){return function(t){return te[s][t]||te[ct][t]}}const lt={keys:["data.title","data.description","slug"],includeMatches:!0,minMatchCharLength:3,threshold:.5};function dt({searchList:s,lang:e}){const t=at(e),n=new j(s,lt),[r,i]=se.useState(""),o=n.search(r).map(a=>a.item).slice(0,10);function c({target:a}){const{value:l}=a;i(l)}return m.jsxs("div",{className:"h-full",children:[m.jsxs("div",{className:"join w-full overflow-hidden",children:[m.jsx("button",{className:"btn join-item rounded-r-full",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),m.jsx("input",{className:"input join-item input-bordered w-full invalid:border-pink-500 invalid:text-pink-600 focus:outline-none",pattern:".{3,}",required:!0,"aria-autocomplete":"both","aria-labelledby":"search-label",id:"search-input",name:"search-input",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:"go",spellCheck:"false",placeholder:t("site.search.placeholder"),maxLength:32,type:"search","aria-activedescendant":"item-0","aria-controls":"list",value:r,onChange:c}),m.jsx("button",{className:"btn join-item",type:"reset","aria-label":"Cancel",children:m.jsx("kbd",{className:"kbd",children:"ESC"})})]}),m.jsxs("div",{id:"results",className:"prose overflow-y-scroll h-5/6",children:[m.jsx("div",{className:"text-center",children:r.length>2?m.jsxs("span",{children:[o.length===1?`${t("site.search.resultFound")} ${o.length} ${t("site.search.result")}`:`${t("site.search.resultsFound")} ${o.length} ${t("site.search.results")}`," ","per '",r,"'"]}):t("site.search.title")}),m.jsx("div",{children:m.jsx("table",{className:"table",children:m.jsx("tbody",{children:o&&r.length>2&&o.map((a,l)=>m.jsx("tr",{className:"hover:bg-base-200",children:m.jsx("td",{children:m.jsxs("a",{className:"no-underline",href:`${a.slug}`,children:[a.data.title,m.jsx("p",{className:"opacity-50 text-xs",children:a.data.description})]})})},l))})})})]})]})}export{dt as default};
