/*!
 * jQuery JavaScript Library v1.12.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:07Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){
// Support: iOS 8.2 (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var b=!!a&&"length"in a&&a.length,c=na.type(a);return"function"===c||na.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}
// Implement the identical functionality for filter and not
function d(a,b,c){if(na.isFunction(b))return na.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return na.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(xa.test(b))return na.filter(b,a,c);b=na.filter(b,a)}return na.grep(a,function(a){return na.inArray(a,b)>-1!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}
// Convert String-formatted options into Object-formatted ones
function f(a){var b={};return na.each(a.match(Da)||[],function(a,c){b[c]=!0}),b}/**
 * Clean-up method for dom ready events
 */
function g(){da.addEventListener?(da.removeEventListener("DOMContentLoaded",h),a.removeEventListener("load",h)):(da.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}/**
 * The ready event handler and self cleanup method
 */
function h(){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(da.addEventListener||"load"===a.event.type||"complete"===da.readyState)&&(g(),na.ready())}function i(a,b,c){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(Ia,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:Ha.test(c)?na.parseJSON(c):c}catch(e){}
// Make sure we set the data so it isn't changed later
na.data(a,b,c)}else c=void 0}return c}
// checks a cache object for emptiness
function j(a){var b;for(b in a)
// if the public data object is empty, the private is still empty
if(("data"!==b||!na.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(Ga(a)){var e,f,g=na.expando,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
h=a.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
i=h?na.cache:a,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
j=h?a[g]:a[g]&&g;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoid exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// First Try to find as-is property data
// Test for null|undefined property data
// Try to find the camelCased property
return j||(j=h?a[g]=ca.pop()||na.guid++:g),i[j]||(i[j]=h?{}:{toJSON:na.noop}),"object"!=typeof b&&"function"!=typeof b||(d?i[j]=na.extend(i[j],b):i[j].data=na.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[na.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[na.camelCase(b)])):e=f,e}}function l(a,b,c){if(Ga(a)){var d,e,f=a.nodeType,
// See jQuery.data for more information
g=f?na.cache:a,h=f?a[na.expando]:na.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){
// Support array or space separated string names for data keys
na.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
b=b.concat(na.map(b,na.camelCase)):
// try the string as a key before any manipulation
b in d?b=[b]:(b=na.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(c?!j(d):!na.isEmptyObject(d))return}
// See jQuery.data for more information
(c||(delete g[h].data,j(g[h])))&&(
// Destroy the cache
f?na.cleanData([a],!0):la.deleteExpando||g!=g.window?/* jshint eqeqeq: true */
delete g[h]:g[h]=void 0)}}}function m(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return na.css(a,b,"")},i=h(),j=c&&c[3]||(na.cssNumber[b]?"":"px"),
// Starting value computation is required for potential unit mismatches
k=(na.cssNumber[b]||"px"!==j&&+i)&&Ka.exec(na.css(a,b));if(k&&k[3]!==j){
// Trust units reported by jQuery.css
j=j||k[3],
// Make sure we update the tween properties later on
c=c||[],
// Iteratively approximate from a nonzero starting point
k=+i||1;do f=f||".5",k/=f,na.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}
// Apply relative offset (+=/-=) if specified
return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function n(a){var b=Sa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function o(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||na.nodeName(d,b)?f.push(d):na.merge(f,o(d,b));return void 0===b||b&&na.nodeName(a,b)?na.merge([a],f):f}
// Mark scripts as having already been evaluated
function p(a,b){for(var c,d=0;null!=(c=a[d]);d++)na._data(c,"globalEval",!b||na._data(b[d],"globalEval"))}function q(a){Oa.test(a.type)&&(a.defaultChecked=a.checked)}function r(a,b,c,d,e){for(var f,g,h,i,j,k,l,m=a.length,
// Ensure a safe fragment
r=n(b),s=[],t=0;m>t;t++)if(g=a[t],g||0===g)
// Add nodes directly
if("object"===na.type(g))na.merge(s,g.nodeType?[g]:g);else if(Ua.test(g)){for(i=i||r.appendChild(b.createElement("div")),
// Deserialize a standard representation
j=(Pa.exec(g)||["",""])[1].toLowerCase(),l=Ta[j]||Ta._default,i.innerHTML=l[1]+na.htmlPrefilter(g)+l[2],
// Descend through wrappers to the right content
f=l[0];f--;)i=i.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!la.leadingWhitespace&&Ra.test(g)&&s.push(b.createTextNode(Ra.exec(g)[0])),!la.tbody)for(
// String was a <table>, *may* have spurious <tbody>
g="table"!==j||Va.test(g)?"<table>"!==l[1]||Va.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;f--;)na.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k);
// Fix #12392 for oldIE
for(na.merge(s,i.childNodes),
// Fix #12392 for WebKit and IE > 9
i.textContent="";i.firstChild;)i.removeChild(i.firstChild);
// Remember the top-level container for proper cleanup
i=r.lastChild}else s.push(b.createTextNode(g));for(
// Fix #11356: Clear elements from fragment
i&&r.removeChild(i),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
la.appendChecked||na.grep(o(s,"input"),q),t=0;g=s[t++];)
// Skip elements already in the context collection (trac-4087)
if(d&&na.inArray(g,d)>-1)e&&e.push(g);else
// Capture executables
if(h=na.contains(g.ownerDocument,g),i=o(r.appendChild(g),"script"),h&&p(i),c)for(f=0;g=i[f++];)Qa.test(g.type||"")&&c.push(g);return i=null,r}function s(){return!0}function t(){return!1}
// Support: IE9
// See #13393 for more info
function u(){try{return da.activeElement}catch(a){}}function v(a,b,c,d,e,f){var g,h;
// Types can be a map of types/handlers
if("object"==typeof b){
// ( types-Object, selector, data )
"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)v(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=t;else if(!e)return a;
// Use same guid so caller can remove using origFn
return 1===f&&(g=e,e=function(a){return na().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=na.guid++)),a.each(function(){na.event.add(this,b,e,d,c)})}
// Support: IE<8
// Manipulating tables requires a tbody
function w(a,b){return na.nodeName(a,"table")&&na.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function x(a){return a.type=(null!==na.find.attr(a,"type"))+"/"+a.type,a}function y(a){var b=eb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function z(a,b){if(1===b.nodeType&&na.hasData(a)){var c,d,e,f=na._data(a),g=na._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)na.event.add(b,c,h[c][d])}
// make the cloned public data object a copy from the original
g.data&&(g.data=na.extend({},g.data))}}function A(a,b){var c,d,e;
// We do not need to do anything for non-Elements
if(1===b.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(c=b.nodeName.toLowerCase(),!la.noCloneEvent&&b[na.expando]){e=na._data(b);for(d in e.events)na.removeEvent(b,d,e.handle);
// Event data gets referenced instead of copied if the expando gets copied too
b.removeAttribute(na.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===c&&b.text!==a.text?(x(b).text=a.text,y(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
la.html5Clone&&a.innerHTML&&!na.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Oa.test(a.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
b.defaultChecked=b.checked=a.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function B(a,b,c,d){
// Flatten any nested arrays
b=fa.apply([],b);var e,f,g,h,i,j,k=0,l=a.length,m=l-1,n=b[0],p=na.isFunction(n);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||l>1&&"string"==typeof n&&!la.checkClone&&db.test(n))return a.each(function(e){var f=a.eq(e);p&&(b[0]=n.call(this,e,f.html())),B(f,b,c,d)});if(l&&(j=r(b,a[0].ownerDocument,!1,a,d),e=j.firstChild,1===j.childNodes.length&&(j=e),e||d)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(h=na.map(o(j,"script"),x),g=h.length;l>k;k++)f=j,k!==m&&(f=na.clone(f,!0,!0),g&&na.merge(h,o(f,"script"))),c.call(a[k],f,k);if(g)
// Evaluate executable scripts on first document insertion
for(i=h[h.length-1].ownerDocument,na.map(h,y),k=0;g>k;k++)f=h[k],Qa.test(f.type||"")&&!na._data(f,"globalEval")&&na.contains(i,f)&&(f.src?na._evalUrl&&na._evalUrl(f.src):na.globalEval((f.text||f.textContent||f.innerHTML||"").replace(fb,"")));
// Fix #11809: Avoid leaking memory
j=e=null}return a}function C(a,b,c){for(var d,e=b?na.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||na.cleanData(o(d)),d.parentNode&&(c&&na.contains(d.ownerDocument,d)&&p(o(d,"script")),d.parentNode.removeChild(d));return a}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function D(a,b){var c=na(b.createElement(a)).appendTo(b.body),d=na.css(c[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return c.detach(),d}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function E(a){var b=da,c=jb[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return c||(c=D(a,b),"none"!==c&&c||(ib=(ib||na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(ib[0].contentWindow||ib[0].contentDocument).document,b.write(),b.close(),c=D(a,b),ib.detach()),jb[a]=c),c}function F(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// return a css property mapped to a potentially vendor prefixed property
function G(a){
// shortcut for names that are not vendor prefixed
if(a in yb)return a;for(
// check for vendor prefixed names
var b=a.charAt(0).toUpperCase()+a.slice(1),c=xb.length;c--;)if(a=xb[c]+b,a in yb)return a}function H(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=na._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Ma(d)&&(f[g]=na._data(d,"olddisplay",E(d.nodeName)))):(e=Ma(d),(c&&"none"!==c||!e)&&na._data(d,"olddisplay",e?c:na.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function I(a,b,c){var d=ub.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function J(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:"width"===b?1:0,g=0;4>f;f+=2)
// both box models exclude margin, so add it if we want it
"margin"===c&&(g+=na.css(a,c+La[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=na.css(a,"padding"+La[f],!0,e)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=na.css(a,"border"+La[f]+"Width",!0,e))):(g+=na.css(a,"padding"+La[f],!0,e),"padding"!==c&&(g+=na.css(a,"border"+La[f]+"Width",!0,e)));return g}function K(b,c,d){
// Start with offset property, which is equivalent to the border-box value
var e=!0,f="width"===c?b.offsetWidth:b.offsetHeight,g=ob(b),h=la.boxSizing&&"border-box"===na.css(b,"boxSizing",!1,g);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(
// Support: IE11 only
// In IE 11 fullscreen elements inside of an iframe have
// 100x too small dimensions (gh-1764).
da.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(f=Math.round(100*b.getBoundingClientRect()[c])),0>=f||null==f){
// Computed unit is not pixels. Stop here and return.
if(f=pb(b,c,g),(0>f||null==f)&&(f=b.style[c]),lb.test(f))return f;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
e=h&&(la.boxSizingReliable()||f===b.style[c]),
// Normalize "", auto, and prepare for extra
f=parseFloat(f)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return f+J(b,c,d||(h?"border":"content"),e,g)+"px"}function L(a,b,c,d,e){return new L.prototype.init(a,b,c,d,e)}
// Animations created synchronously will run synchronously
function M(){return a.setTimeout(function(){zb=void 0}),zb=na.now()}
// Generate parameters to create a standard animation
function N(a,b){var c,d={height:a},e=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;4>e;e+=2-b)c=La[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function O(a,b,c){for(var d,e=(R.tweeners[b]||[]).concat(R.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))
// we're done with this property
return d}function P(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ma(a),p=na._data(a,"fxshow");
// handle queue: false promises
c.queue||(h=na._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,na.queue(a,"fx").length||h.empty.fire()})})),
// height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[n.overflow,n.overflowX,n.overflowY],j=na.css(a,"display"),k="none"===j?na._data(a,"olddisplay")||E(a.nodeName):j,"inline"===k&&"none"===na.css(a,"float")&&(la.inlineBlockNeedsLayout&&"inline"!==E(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",la.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],Bb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){
// If there is dataShow left over from a stopped hide or show
// and we are going to proceed with show, we should pretend to be hidden
if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||na.style(a,d)}else j=void 0;if(na.isEmptyObject(m))"inline"===("none"===j?E(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=na._data(a,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
f&&(p.hidden=!o),o?na(a).show():l.done(function(){na(a).hide()}),l.done(function(){var b;na._removeData(a,"fxshow");for(b in m)na.style(a,b,m[b])});for(d in m)g=O(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Q(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=na.camelCase(c),e=b[d],f=a[c],na.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=na.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function R(a,b,c){var d,e,f=0,g=R.prefilters.length,h=na.Deferred().always(function(){
// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=zb||M(),c=Math.max(0,j.startTime+j.duration-b),
// Support: Android 2.3
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:na.extend({},b),opts:na.extend(!0,{specialEasing:{},easing:na.easing._default},c),originalProperties:b,originalOptions:c,startTime:zb||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=na.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);
// resolve when we played the last frame
// otherwise, reject
return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Q(k,j.opts.specialEasing);g>f;f++)if(d=R.prefilters[f].call(j,a,k,j.opts))return na.isFunction(d.stop)&&(na._queueHooks(j.elem,j.opts.queue).stop=na.proxy(d.stop,d)),d;
// attach callbacks from options
return na.map(k,O,j),na.isFunction(j.opts.start)&&j.opts.start.call(a,j),na.fx.timer(na.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function S(a){return na.attr(a,"class")||""}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function T(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Da)||[];if(na.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function U(a,b,c,d){function e(h){var i;return f[h]=!0,na.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Zb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function V(a,b){var c,d,e=na.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&na.extend(!0,a,c),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function W(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}
// Or just use first one
f=f||d}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function X(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])// jscs:ignore requireDotNotation
b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Y(a){return a.style&&a.style.display||na.css(a,"display")}function Z(a){for(;a&&1===a.nodeType;){if("none"===Y(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}function $(a,b,c,d){var e;if(na.isArray(b))
// Serialize array item.
na.each(b,function(b,e){c||cc.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
$(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==na.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)$(a+"["+e+"]",b[e],c,d)}
// Functions to create xhrs
function _(){try{return new a.XMLHttpRequest}catch(b){}}function aa(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}/**
 * Gets a window from an element
 */
function ba(a){return na.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var ca=[],da=a.document,ea=ca.slice,fa=ca.concat,ga=ca.push,ha=ca.indexOf,ia={},ja=ia.toString,ka=ia.hasOwnProperty,la={},ma="1.12.1",
// Define a local copy of jQuery
na=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new na.fn.init(a,b)},
// Support: Android<4.1, IE<9
// Make sure we trim BOM and NBSP
oa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
pa=/^-ms-/,qa=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
ra=function(a,b){return b.toUpperCase()};na.fn=na.prototype={
// The current version of jQuery being used
jquery:ma,constructor:na,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return ea.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=a?0>a?this[a+this.length]:this[a]:ea.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=na.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
each:function(a){return na.each(this,a)},map:function(a){return this.pushStack(na.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ea.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ga,sort:ca.sort,splice:ca.splice},na.extend=na.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||na.isFunction(g)||(g={}),
// extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);i>h;h++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[h]))
// Extend the base object
for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(na.isPlainObject(c)||(b=na.isArray(c)))?(b?(b=!1,f=a&&na.isArray(a)?a:[]):f=a&&na.isPlainObject(a)?a:{},g[d]=na.extend(j,f,c)):void 0!==c&&(g[d]=c));
// Return the modified object
return g},na.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(ma+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return"function"===na.type(a)},isArray:Array.isArray||function(a){return"array"===na.type(a)},isWindow:function(a){/* jshint eqeqeq: false */
return null!=a&&a==a.window},isNumeric:function(a){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
var b=a&&a.toString();return!na.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!a||"object"!==na.type(a)||a.nodeType||na.isWindow(a))return!1;try{
// Not own constructor property must be Object
if(a.constructor&&!ka.call(a,"constructor")&&!ka.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Support: IE<9
// Handle iteration over inherited properties before own properties.
if(!la.ownFirst)for(b in a)return ka.call(a,b);
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
for(b in a);return void 0===b||ka.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ia[ja.call(a)]||"object":typeof a},
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(b){b&&na.trim(b)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(a.execScript||function(b){a.eval.call(a,b)})(b)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(pa,"ms-").replace(qa,ra)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,e=0;if(c(a))for(d=a.length;d>e&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},
// Support: Android<4.1, IE<9
trim:function(a){return null==a?"":(a+"").replace(oa,"")},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?na.merge(d,"string"==typeof a?[a]:a):ga.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(ha)return ha.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)
// Skip accessing in sparse arrays
if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];
// Support: IE<9
// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,d){var e,f,g=0,h=[];
// Go through the array, translating each of the items to their new values
if(c(a))for(e=a.length;e>g;g++)f=b(a[g],g,d),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,d),null!=f&&h.push(f);
// Flatten any nested arrays
return fa.apply([],h)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof b&&(e=a[b],b=a,a=e),na.isFunction(a)?(c=ea.call(arguments,2),d=function(){return a.apply(b||this,c.concat(ea.call(arguments)))},d.guid=a.guid=a.guid||na.guid++,d):void 0},now:function(){return+new Date},
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:la}),
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
"function"==typeof Symbol&&(na.fn[Symbol.iterator]=ca[Symbol.iterator]),/* jshint ignore: end */
// Populate the class2type map
na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ia["[object "+b+"]"]=b.toLowerCase()});var sa=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o=b&&b.ownerDocument,
// nodeType defaults to 9, since context defaults to document
p=b?b.nodeType:9;
// Return early from calls with invalid selector or context
if(c=c||[],"string"!=typeof a||!a||1!==p&&9!==p&&11!==p)return c;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!d&&((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,I)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==p&&(j=ra.exec(a)))
// ID selector
if(e=j[1]){
// Document context
if(9===p){if(!(g=b.getElementById(e)))return c;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(g.id===e)return c.push(g),c}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(o&&(g=o.getElementById(e))&&M(b,g)&&g.id===e)return c.push(g),c}else{if(j[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=j[3])&&v.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}
// Take advantage of querySelectorAll
if(v.qsa&&!T[a+" "]&&(!J||!J.test(a))){if(1!==p)o=b,n=a;else if("object"!==b.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(h=b.getAttribute("id"))?h=h.replace(ta,"\\$&"):b.setAttribute("id",h=N),
// Prefix every selector in the list
l=z(a),f=l.length,i=ma.test(h)?"#"+h:"[id='"+h+"']";f--;)l[f]=i+" "+m(l[f]);n=l.join(","),
// Expand context for sibling selectors
o=sa.test(a)&&k(b.parentNode)||b}if(n)try{return $.apply(c,o.querySelectorAll(n)),c}catch(q){}finally{h===N&&b.removeAttribute("id")}}}
// All others
return B(a.replace(ha,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[N]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=c.length;d--;)w.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}
// Easy API for creating new setFilters
function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[P,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[N]||(b[N]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===P&&h[1]===f)
// Assign to newCache so results back-propagate to previous elements
return k[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
i[d]=k,k[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
r=d||p(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?
// ...intermediate processing is necessary
[]:g:s;
// Apply postFilter
if(
// Find primary matches
c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(s[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));
// Avoid hanging onto element (issue #299)
return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{
// Return special upon seeing a positional matcher
if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(
// Find the next relative operator (if any) for proper handling
d=++h;e>d&&!w.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,
// We must always have either seed elements or outermost context
t=d||f&&w.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=P+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(C=g===G||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===G||(F(k),h=!I);m=a[l++];)if(m(k,g||G,h)){i.push(k);break}j&&(P=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&p.push(k))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));
// Discard index placeholder values to get only actual matches
r=q(r)}
// Add matches to results
$.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,
// Local document vars
F,G,H,I,J,K,L,M,
// Instance-specific data
N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},
// General-purpose constants
V=1<<31,
// Instance methods
W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,
// Use a stripped-down indexOf as it's faster than native
// http://jsperf.com/thor-indexof-vs-for/5
aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ca="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ea="\\["+ca+"*("+da+")(?:"+ca+
// Operator (capture 2)
"*([*^$|!~]?=)"+ca+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ua=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),va=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
wa=function(){F()};
// Optimize for push.apply( _, NodeList )
try{$.apply(X=_.call(O.childNodes),O.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
X[O.childNodes.length].nodeType}catch(xa){$={apply:X.length?
// Leverage slice if possible
function(a,b){Z.apply(a,_.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=G.documentElement,I=!y(G),(c=G.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",wa,!1):c.attachEvent&&c.attachEvent("onunload",wa)),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(G.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=qa.test(G.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!G.getElementsByName||!G.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=qa.test(G.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=G.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=qa.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",fa)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=qa.test(H.compareDocumentPosition),M=b||qa.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===G||a.ownerDocument===O&&M(O,a)?-1:b===G||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===G?-1:b===G?1:e?-1:f?1:D?aa(D,a)-aa(D,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===O?-1:i[d]===O?1:0},G):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(ka,"='$1']"),v.matchesSelector&&I&&!T[c+" "]&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ua,va),a[3]=(a[3]||a[4]||a[5]||"").replace(ua,va),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ua,va).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[P,n,t];break}}else if(s&&(m=b,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n),t===!1)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[P,t]),m!==b)););return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ha,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ua,va),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ua,va).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){
// Comma and first run
d&&!(e=ia.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));
// Filters
for(g in w.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(ua,va),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ua,va),sa.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,!b||sa.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);na.find=sa,na.expr=sa.selectors,na.expr[":"]=na.expr.pseudos,na.uniqueSort=na.unique=sa.uniqueSort,na.text=sa.getText,na.isXMLDoc=sa.isXML,na.contains=sa.contains;var ta=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&na(a).is(c))break;d.push(a)}return d},ua=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},va=na.expr.match.needsContext,wa=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xa=/^.[^:#\[\.,]*$/;na.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?na.find.matchesSelector(d,a)?[d]:[]:na.find.matches(a,na.grep(b,function(a){return 1===a.nodeType}))},na.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(na(a).filter(function(){for(b=0;e>b;b++)if(na.contains(d[b],this))return!0}));for(b=0;e>b;b++)na.find(a,d[b],c);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return c=this.pushStack(e>1?na.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!d(this,"string"==typeof a&&va.test(a)?na(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ya,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
za=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Aa=na.fn.init=function(a,b,c){var d,e;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if(c=c||ya,"string"==typeof a){
// Match html or make sure no context is specified for #id
if(d="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:za.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(d[1]){
// HANDLE: $(html, props)
if(b=b instanceof na?b[0]:b,na.merge(this,na.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:da,!0)),wa.test(d[1])&&na.isPlainObject(b))for(d in b)
// Properties of context are called as methods if possible
na.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(e=da.getElementById(d[2]),e&&e.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(e.id!==d[2])return ya.find(a);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=e}return this.context=da,this.selector=a,this}
// Execute immediately if ready is not present
return a.nodeType?(this.context=this[0]=a,this.length=1,this):na.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(na):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),na.makeArray(a,this))};
// Give the init function the jQuery prototype for later instantiation
Aa.prototype=na.fn,
// Initialize central reference
ya=na(da);var Ba=/^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
Ca={children:!0,contents:!0,next:!0,prev:!0};na.fn.extend({has:function(a){var b,c=na(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(na.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=va.test(a)||"string"!=typeof a?na(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&na.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?na.uniqueSort(f):f)},
// Determine the position of an element within
// the matched set of elements
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?na.inArray(this[0],na(a)):na.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(na.uniqueSort(na.merge(this.get(),na(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),na.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ta(a,"parentNode")},parentsUntil:function(a,b,c){return ta(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ta(a,"nextSibling")},prevAll:function(a){return ta(a,"previousSibling")},nextUntil:function(a,b,c){return ta(a,"nextSibling",c)},prevUntil:function(a,b,c){return ta(a,"previousSibling",c)},siblings:function(a){return ua((a.parentNode||{}).firstChild,a)},children:function(a){return ua(a.firstChild)},contents:function(a){return na.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:na.merge([],a.childNodes)}},function(a,b){na.fn[a]=function(c,d){var e=na.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=na.filter(d,e)),this.length>1&&(Ca[a]||(e=na.uniqueSort(e)),Ba.test(a)&&(e=e.reverse())),this.pushStack(e)}});var Da=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
na.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?f(a):na.extend({},a);var// Flag to know if list is currently firing
b,
// Last fire value for non-forgettable lists
c,
// Flag to know if list was already fired
d,
// Flag to prevent firing
e,
// Actual callback list
g=[],
// Queue of execution data for repeatable lists
h=[],
// Index of currently firing callback (modified by add/remove as needed)
i=-1,
// Fire callbacks
j=function(){for(
// Enforce single-firing
e=a.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
d=b=!0;h.length;i=-1)for(c=h.shift();++i<g.length;)
// Run callback and check for early termination
g[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(i=g.length,c=!1);
// Forget the data if we're done with it
a.memory||(c=!1),b=!1,e&&(g=c?[]:"")},
// Actual Callbacks object
k={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return g&&(c&&!b&&(i=g.length-1,h.push(c)),function d(b){na.each(b,function(b,c){na.isFunction(c)?a.unique&&k.has(c)||g.push(c):c&&c.length&&"string"!==na.type(c)&&
// Inspect recursively
d(c)})}(arguments),c&&!b&&j()),this},
// Remove a callback from the list
remove:function(){return na.each(arguments,function(a,b){for(var c;(c=na.inArray(b,g,c))>-1;)g.splice(c,1),
// Handle firing indexes
i>=c&&i--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?na.inArray(a,g)>-1:g.length>0},
// Remove all callbacks from the list
empty:function(){return g&&(g=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return e=h=[],g=c="",this},disabled:function(){return!g},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return e=!0,c||k.disable(),this},locked:function(){return!!e},
// Call all callbacks with the given context and arguments
fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},
// Call all the callbacks with the given arguments
fire:function(){return k.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!d}};return k},na.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",na.Callbacks("once memory"),"resolved"],["reject","fail",na.Callbacks("once memory"),"rejected"],["notify","progress",na.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return na.Deferred(function(c){na.each(b,function(b,f){var g=na.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&na.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?na.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,na.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=ea.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&na.isFunction(a.promise)?g:0,
// the master Deferred.
// If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:na.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ea.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&na.isFunction(f[e].promise)?f[e].promise().progress(j(e,c,b)).done(j(e,d,f)).fail(i.reject):--h;
// if we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}});
// The deferred used on DOM ready
var Ea;na.fn.ready=function(a){
// Add the callback
return na.ready.promise().done(a),this},na.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?na.readyWait++:na.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(a===!0?--na.readyWait:na.isReady)||(
// Remember that the DOM is ready
na.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--na.readyWait>0||(
// If there are functions bound, to execute
Ea.resolveWith(da,[na]),
// Trigger any bound ready events
na.fn.triggerHandler&&(na(da).triggerHandler("ready"),na(da).off("ready"))))}}),na.ready.promise=function(b){if(!Ea)
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE6-10
// Older IE sometimes signals "interactive" too soon
if(Ea=na.Deferred(),"complete"===da.readyState||"loading"!==da.readyState&&!da.documentElement.doScroll)
// Handle it asynchronously to allow scripts the opportunity to delay ready
a.setTimeout(na.ready);else if(da.addEventListener)
// Use the handy event callback
da.addEventListener("DOMContentLoaded",h),
// A fallback to window.onload, that will always work
a.addEventListener("load",h);else{
// Ensure firing before onload, maybe late but safe also for iframes
da.attachEvent("onreadystatechange",h),
// A fallback to window.onload, that will always work
a.attachEvent("onload",h);
// If IE and not a frame
// continually check to see if the document is ready
var c=!1;try{c=null==a.frameElement&&da.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!na.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
c.doScroll("left")}catch(b){return a.setTimeout(e,50)}
// detach all dom ready events
g(),
// and execute any waiting functions
na.ready()}}()}return Ea.promise(b)},
// Kick off the DOM ready check even if the user does not
na.ready.promise();
// Support: IE<9
// Iteration over object's inherited properties before its own
var Fa;for(Fa in na(la))break;la.ownFirst="0"===Fa,
// Note: most support tests are defined in their respective modules.
// false until the test is run
la.inlineBlockNeedsLayout=!1,
// Execute ASAP in case we need to set body.style.zoom
na(function(){
// Minified: var a,b,c,d
var a,b,c,d;c=da.getElementsByTagName("body")[0],c&&c.style&&(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",la.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=da.createElement("div");
// Support: IE<9
la.deleteExpando=!0;try{delete a.test}catch(b){la.deleteExpando=!1}
// Null elements to avoid leaks in IE.
a=null}();var Ga=function(a){var b=na.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
// Nodes accept data unless otherwise specified; rejection can be conditional
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},Ha=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ia=/([A-Z])/g;na.extend({cache:{},
// The following elements (space-suffixed to avoid Object.prototype collisions)
// throw uncatchable exceptions if you attempt to set expando properties
noData:{"applet ":!0,"embed ":!0,
// ...but Flash objects (which have this classid) *can* handle expandos
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?na.cache[a[na.expando]]:a[na.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},
// For internal use only.
_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),na.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Special expections of .data basically thwart jQuery.access,
// so implement the relevant behavior ourselves
// Gets all values
if(void 0===a){if(this.length&&(e=na.data(f),1===f.nodeType&&!na._data(f,"parsedAttrs"))){for(c=g.length;c--;)
// Support: IE11+
// The attrs elements can be null (#14894)
g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=na.camelCase(d.slice(5)),i(f,d,e[d])));na._data(f,"parsedAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
// Sets one value
// Gets one value
// Try to fetch any internally stored data first
return"object"==typeof a?this.each(function(){na.data(this,a)}):arguments.length>1?this.each(function(){na.data(this,a,b)}):f?i(f,a,na.data(f,a)):void 0},removeData:function(a){return this.each(function(){na.removeData(this,a)})}}),na.extend({queue:function(a,b,c){var d;
// Speed up dequeue by getting out quickly if this is just a lookup
return a?(b=(b||"fx")+"queue",d=na._data(a,b),c&&(!d||na.isArray(c)?d=na._data(a,b,na.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=na.queue(a,b),d=c.length,e=c.shift(),f=na._queueHooks(a,b),g=function(){na.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// not intended for public consumption - generates a queueHooks object,
// or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return na._data(a,c)||na._data(a,c,{empty:na.Callbacks("once memory").add(function(){na._removeData(a,b+"queue"),na._removeData(a,c)})})}}),na.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?na.queue(this[0],a):void 0===b?this:this.each(function(){var c=na.queue(this,a,b);
// ensure a hooks for this queue
na._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&na.dequeue(this,a)})},dequeue:function(a){return this.each(function(){na.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=na.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=na._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;la.shrinkWrapBlocks=function(){if(null!=a)return a;
// Will be changed later if needed.
a=!1;
// Minified: var b,c,d
var b,c,d;
// Setup
// Support: IE6
// Check if elements with layout shrink-wrap their children
// Reset CSS: box-sizing; display; margin; border
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
return c=da.getElementsByTagName("body")[0],c&&c.style?(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(da.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ja=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ka=new RegExp("^(?:([+-])=|)("+Ja+")([a-z%]*)$","i"),La=["Top","Right","Bottom","Left"],Ma=function(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===na.css(a,"display")||!na.contains(a.ownerDocument,a)},Na=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===na.type(c)){e=!0;for(h in c)Na(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,na.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(na(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f},Oa=/^(?:checkbox|radio)$/i,Pa=/<([\w:-]+)/,Qa=/^$|\/(?:java|ecma)script/i,Ra=/^\s+/,Sa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var a=da.createElement("div"),b=da.createDocumentFragment(),c=da.createElement("input");
// Setup
a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
// IE strips leading whitespace when .innerHTML is used
la.leadingWhitespace=3===a.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
la.tbody=!a.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
la.htmlSerialize=!!a.getElementsByTagName("link").length,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
la.html5Clone="<:nav></:nav>"!==da.createElement("nav").cloneNode(!0).outerHTML,
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
c.type="checkbox",c.checked=!0,b.appendChild(c),la.appendChecked=c.checked,
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE6-IE11+
a.innerHTML="<textarea>x</textarea>",la.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,
// #11217 - WebKit loses check when the name is after the checked attribute
b.appendChild(a),c=da.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),la.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,la.noCloneEvent=!!a.addEventListener,a[na.expando]=1,la.attributes=!a.getAttribute(na.expando)}();
// We have to close these tags to support XHTML (#13200)
var Ta={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],
// Support: IE8
param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:la.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
// Support: IE8-IE9
Ta.optgroup=Ta.option,Ta.tbody=Ta.tfoot=Ta.colgroup=Ta.caption=Ta.thead,Ta.th=Ta.td;var Ua=/<|&#?\w+;/,Va=/<tbody/i;!function(){var b,c,d=da.createElement("div");
// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(la[b]=c in a)||(d.setAttribute(c,"t"),la[b]=d.attributes[c].expando===!1);
// Null elements to avoid leaks in IE.
d=null}();var Wa=/^(?:input|select|textarea)$/i,Xa=/^key/,Ya=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Za=/^(?:focusinfocus|focusoutblur)$/,$a=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
na.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na._data(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q){for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(i=c,c=i.handler,e=i.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=na.guid++),
// Init the element's event structure and main handler, if this is the first
(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"==typeof na||a&&na.event.triggered===a.type?void 0:na.event.dispatch.apply(k.elem,arguments)},k.elem=a),
// Handle multiple events separated by a space
b=(b||"").match(Da)||[""],h=b.length;h--;)f=$a.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=na.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=na.event.special[n]||{},l=na.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&na.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),na.event.global[n]=!0);
// Nullify elem to prevent memory leaks in IE
a=null}},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na.hasData(a)&&na._data(a);if(q&&(k=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(Da)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=$a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=na.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||na.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)na.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
na.isEmptyObject(k)&&(delete q.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
na._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||da],n=ka.call(b,"type")?b.type:b,o=ka.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(h=k=d=d||da,3!==d.nodeType&&8!==d.nodeType&&!Za.test(n+na.event.triggered)&&(n.indexOf(".")>-1&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[na.expando]?b:new na.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:na.makeArray(c,[b]),j=na.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!j.noBubble&&!na.isWindow(d)){for(i=j.delegateType||n,Za.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
k===(d.ownerDocument||da)&&m.push(k.defaultView||k.parentWindow||a)}for(
// Fire handlers on the event path
l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(na._data(h,"events")||{})[b.type]&&na._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&Ga(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());
// If nobody prevented the default action, do it now
if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&Ga(d)&&g&&d[n]&&!na.isWindow(d)){
// Don't re-trigger an onFOO event when we call its FOO() method
k=d[g],k&&(d[g]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
na.event.triggered=n;try{d[n]()}catch(p){}na.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=na.event.fix(a);var b,c,d,e,f,g=[],h=ea.call(arguments),i=(na._data(this,"events")||{})[a.type]||[],j=na.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(
// Determine handlers
g=na.event.handlers.call(this,a,i),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
a.rnamespace&&!a.rnamespace.test(f.namespace)||(a.handleObj=f,a.data=f.data,d=((na.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Support (at least): Chrome, IE9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox<=42+
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))/* jshint eqeqeq: false */
for(;i!=this;i=i.parentNode||this)/* jshint eqeqeq: true */
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?na(e,this).index(i)>-1:na.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[na.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ya.test(e)?this.mouseHooks:Xa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new na.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
// Support: IE<9
// Fix target property (#1925)
// Support: Safari 6-8+
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return a.target||(a.target=f.srcElement||da),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||da,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==u()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){return na.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return na.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},
// Piggyback on a donor event to simulate a different one
simulate:function(a,b,c){var d=na.extend(new na.Event,c,{type:a,isSimulated:!0});na.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},na.removeEvent=da.removeEventListener?function(a,b,c){
// This "if" is needed for plain objects
a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event,
// to properly expose it to GC
"undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},na.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: IE < 9, Android < 4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof na.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?s:t):this.type=a,b&&na.extend(this,b),this.timeStamp=a&&a.timeStamp||na.now(),void(this[na.expando]=!0)):new na.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
na.Event.prototype={constructor:na.Event,isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=s,a&&(
// If preventDefault exists, run it on the original event
a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=s,a&&!this.isSimulated&&(
// If stopPropagation exists, run it on the original event
a.stopPropagation&&a.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=s,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
na.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){na.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||na.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// IE submit delegation
la.submit||(na.event.special.submit={setup:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Lazy-add a submit handler when a descendant form may potentially be submitted
return na.nodeName(this,"form")?!1:void na.event.add(this,"click._submit keypress._submit",function(a){
// Node name check avoids a VML-related crash in IE (#9807)
var b=a.target,c=na.nodeName(b,"input")||na.nodeName(b,"button")?
// Support: IE <=8
// We use jQuery.prop instead of elem.form
// to allow fixing the IE8 delegated submit issue (gh-2332)
// by 3rd party polyfills/workarounds.
na.prop(b,"form"):void 0;c&&!na._data(c,"submit")&&(na.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),na._data(c,"submit",!0))})},postDispatch:function(a){
// If form was submitted by the user, bubble the event up the tree
a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&na.event.simulate("submit",this.parentNode,a))},teardown:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
return na.nodeName(this,"form")?!1:void na.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
la.change||(na.event.special.change={setup:function(){
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
// Delegated event; lazy-add a change handler on descendant inputs
return Wa.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(na.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),na.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),
// Allow triggered, simulated change events (#11500)
na.event.simulate("change",this,a)})),!1):void na.event.add(this,"beforeactivate._change",function(a){var b=a.target;Wa.test(b.nodeName)&&!na._data(b,"change")&&(na.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||na.event.simulate("change",this.parentNode,a)}),na._data(b,"change",!0))})},handle:function(a){var b=a.target;
// Swallow native change events from checkbox/radio, we already triggered them above
// Swallow native change events from checkbox/radio, we already triggered them above
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return na.event.remove(this,"._change"),!Wa.test(this.nodeName)}}),
// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
la.focusin||na.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){na.event.simulate(b,a.target,na.event.fix(a))};na.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=na._data(d,b);e||d.addEventListener(a,c,!0),na._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=na._data(d,b)-1;e?na._data(d,b,e):(d.removeEventListener(a,c,!0),na._removeData(d,b))}}}),na.fn.extend({on:function(a,b,c,d){return v(this,a,b,c,d)},one:function(a,b,c,d){return v(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,na(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=t),this.each(function(){na.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){na.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?na.event.trigger(a,b,c,!0):void 0}});var _a=/ jQuery\d+="(?:null|\d+)"/g,ab=new RegExp("<(?:"+Sa+")[\\s/>]","i"),bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
// Support: IE 10-11, Edge 10240+
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
cb=/<script|<style|<link/i,
// checked="checked" or checked
db=/checked\s*(?:[^=]|=\s*.checked.)/i,eb=/^true\/(.*)/,fb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gb=n(da),hb=gb.appendChild(da.createElement("div"));na.extend({htmlPrefilter:function(a){return a.replace(bb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=na.contains(a.ownerDocument,a);if(la.html5Clone||na.isXMLDoc(a)||!ab.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(hb.innerHTML=a.outerHTML,hb.removeChild(f=hb.firstChild)),!(la.noCloneEvent&&la.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||na.isXMLDoc(a)))
// Fix all IE cloning issues
for(d=o(f),h=o(a),g=0;null!=(e=h[g]);++g)
// Ensure that the destination node is not null; Fixes #9587
d[g]&&A(e,d[g]);
// Copy the events from the original to the clone
if(b)if(c)for(h=h||o(a),d=d||o(f),g=0;null!=(e=h[g]);g++)z(e,d[g]);else z(a,f);
// Return the cloned set
// Preserve script evaluation history
return d=o(f,"script"),d.length>0&&p(d,!i&&o(a,"script")),d=h=e=null,f},cleanData:function(a,/* internal */b){for(var c,d,e,f,g=0,h=na.expando,i=na.cache,j=la.attributes,k=na.event.special;null!=(c=a[g]);g++)if((b||Ga(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?na.event.remove(c,d):na.removeEvent(c,d,f.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
i[e]&&(delete i[e],
// Support: IE<9
// IE does not allow us to delete expando properties from nodes
// IE creates expando attributes along with the property
// IE does not have a removeAttribute function on Document nodes
j||"undefined"==typeof c.removeAttribute?c[h]=void 0:c.removeAttribute(h),ca.push(e))}}}),na.fn.extend({
// Keep domManip exposed until 3.0 (gh-2225)
domManip:B,detach:function(a){return C(this,a,!0)},remove:function(a){return C(this,a)},text:function(a){return Na(this,function(a){return void 0===a?na.text(this):this.empty().append((this[0]&&this[0].ownerDocument||da).createTextNode(a))},null,a,arguments.length)},append:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.appendChild(a)}})},prepend:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===a.nodeType&&na.cleanData(o(a,!1));a.firstChild;)a.removeChild(a.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
a.options&&na.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return na.clone(this,a,b)})},html:function(a){return Na(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(_a,""):void 0;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!cb.test(a)&&(la.htmlSerialize||!ab.test(a))&&(la.leadingWhitespace||!Ra.test(a))&&!Ta[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=na.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(na.cleanData(o(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];
// Make the changes, replacing each non-ignored context element with the new content
return B(this,arguments,function(b){var c=this.parentNode;na.inArray(this,a)<0&&(na.cleanData(o(this)),c&&c.replaceChild(b,this))},a)}}),na.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){na.fn[a]=function(a){for(var c,d=0,e=[],f=na(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),na(f[d])[b](c),ga.apply(e,c.get());return this.pushStack(e)}});var ib,jb={
// Support: Firefox
// We have to pre-define these values for FF (#10227)
HTML:"block",BODY:"block"},kb=/^margin/,lb=new RegExp("^("+Ja+")(?!px)[a-z%]+$","i"),mb=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e},nb=da.documentElement;!function(){function b(){var b,k,l=da.documentElement;
// Setup
l.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",c=e=h=!1,d=g=!0,a.getComputedStyle&&(k=a.getComputedStyle(j),c="1%"!==(k||{}).top,h="2px"===(k||{}).marginLeft,e="4px"===(k||{width:"4px"}).width,j.style.marginRight="50%",d="4px"===(k||{marginRight:"4px"}).marginRight,b=j.appendChild(da.createElement("div")),b.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",b.style.marginRight=b.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(b)||{}).marginRight),j.removeChild(b)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=j.getElementsByTagName("td"),b[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===b[0].offsetHeight,f&&(b[0].style.display="",b[1].style.display="none",f=0===b[0].offsetHeight)),l.removeChild(i)}var c,d,e,f,g,h,i=da.createElement("div"),j=da.createElement("div");
// Finish early in limited (non-browser) environments
j.style&&(j.style.cssText="float:left;opacity:.5",
// Support: IE<9
// Make sure that element opacity exists (as opposed to filter)
la.opacity="0.5"===j.style.opacity,
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
la.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",la.clearCloneStyle="content-box"===j.style.backgroundClip,i=da.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),la.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,na.extend(la,{reliableHiddenOffsets:function(){return null==c&&b(),f},boxSizingReliable:function(){return null==c&&b(),e},pixelMarginRight:function(){return null==c&&b(),d},pixelPosition:function(){return null==c&&b(),c},reliableMarginRight:function(){return null==c&&b(),g},reliableMarginLeft:function(){return null==c&&b(),h}}))}();var ob,pb,qb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ob=function(b){
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||na.contains(a.ownerDocument,a)||(g=na.style(a,b)),c&&!la.pixelMarginRight()&&lb.test(g)&&kb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):nb.currentStyle&&(ob=function(a){return a.currentStyle},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),lb.test(g)&&!qb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});var rb=/alpha\([^)]*\)/i,sb=/opacity\s*=\s*([^)]*)/i,
// swappable if display is none or starts with table except
// "table", "table-cell", or "table-caption"
// see here for display values:
// https://developer.mozilla.org/en-US/docs/CSS/display
tb=/^(none|table(?!-c[ea]).+)/,ub=new RegExp("^("+Ja+")(.*)$","i"),vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:"0",fontWeight:"400"},xb=["Webkit","O","Moz","ms"],yb=da.createElement("div").style;na.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=pb(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
"float":la.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=na.camelCase(b),i=a.style;
// Check if we're setting a value
if(b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],void 0===c)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];
// Make sure that null and NaN values aren't set. See: #7116
if(f=typeof c,"string"===f&&(e=Ka.exec(c))&&e[1]&&(c=m(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(na.cssNumber[h]?"":"px")),la.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))
// Support: IE
// Swallow errors from 'invalid' CSS values (#5509)
try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=na.camelCase(b);return b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=pb(a,b,d)),"normal"===f&&b in wb&&(f=wb[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),na.each(["height","width"],function(a,b){na.cssHooks[b]={get:function(a,c,d){return c?tb.test(na.css(a,"display"))&&0===a.offsetWidth?mb(a,vb,function(){return K(a,b,d)}):K(a,b,d):void 0},set:function(a,c,d){var e=d&&ob(a);return I(a,c,d?J(a,b,d,la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,e),e):0)}}}),la.opacity||(na.cssHooks.opacity={get:function(a,b){
// IE uses filters for opacity
return sb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=na.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
c.zoom=1,
// if setting opacity to 1, and no other filters exist -
// attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(b>=1||""===b)&&""===na.trim(f.replace(rb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(
// otherwise, set new filter values
c.filter=rb.test(f)?f.replace(rb,e):f+" "+e)}}),na.cssHooks.marginRight=F(la.reliableMarginRight,function(a,b){return b?mb(a,{display:"inline-block"},pb,[a,"marginRight"]):void 0}),na.cssHooks.marginLeft=F(la.reliableMarginLeft,function(a,b){
// Support: IE<=11+
// Running getBoundingClientRect on a disconnected node in IE throws an error
// Support: IE8 only
// getClientRects() errors on disconnected elems
return b?(parseFloat(pb(a,"marginLeft"))||(na.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-mb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),
// These hooks are used by animate to expand properties
na.each({margin:"",padding:"",border:"Width"},function(a,b){na.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+La[d]+b]=f[d]||f[d-2]||f[0];return e}},kb.test(a)||(na.cssHooks[a+b].set=I)}),na.fn.extend({css:function(a,b){return Na(this,function(a,b,c){var d,e,f={},g=0;if(na.isArray(b)){for(d=ob(a),e=b.length;e>g;g++)f[b[g]]=na.css(a,b[g],!1,d);return f}return void 0!==c?na.style(a,b,c):na.css(a,b)},a,b,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ma(this)?na(this).show():na(this).hide()})}}),na.Tween=L,L.prototype={constructor:L,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||na.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(na.cssNumber[c]?"":"px")},cur:function(){var a=L.propHooks[this.prop];return a&&a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,c=L.propHooks[this.prop];return this.options.duration?this.pos=b=na.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(a){var b;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=na.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
na.fx.step[a.prop]?na.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[na.cssProps[a.prop]]&&!na.cssHooks[a.prop]?a.elem[a.prop]=a.now:na.style(a.elem,a.prop,a.now+a.unit)}}},
// Support: IE <=9
// Panic based approach to setting things on disconnected nodes
L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},na.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},na.fx=L.prototype.init,
// Back Compat <1.8 extension point
na.fx.step={};var zb,Ab,Bb=/^(?:toggle|show|hide)$/,Cb=/queueHooks$/;na.Animation=na.extend(R,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return m(c.elem,a,Ka.exec(b),c),c}]},tweener:function(a,b){na.isFunction(a)?(b=a,a=["*"]):a=a.match(Da);for(var c,d=0,e=a.length;e>d;d++)c=a[d],R.tweeners[c]=R.tweeners[c]||[],R.tweeners[c].unshift(b)},prefilters:[P],prefilter:function(a,b){b?R.prefilters.unshift(a):R.prefilters.push(a)}}),na.speed=function(a,b,c){var d=a&&"object"==typeof a?na.extend({},a):{complete:c||!c&&b||na.isFunction(a)&&a,duration:a,easing:c&&b||b&&!na.isFunction(b)&&b};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=na.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in na.fx.speeds?na.fx.speeds[d.duration]:na.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){na.isFunction(d.old)&&d.old.call(this),d.queue&&na.dequeue(this,d.queue)},d},na.fn.extend({fadeTo:function(a,b,c,d){
// show any hidden elements after setting opacity to 0
return this.filter(Ma).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=na.isEmptyObject(a),f=na.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=R(this,na.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||na._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=na.timers,g=na._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!b&&c||na.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=na._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=na.timers,g=d?d.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
c.finish=!0,
// empty the queue first
na.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// look for any animations in the old queue and finish them
for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// turn off finishing flag
delete c.finish})}}),na.each(["toggle","show","hide"],function(a,b){var c=na.fn[b];na.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
na.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){na.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),na.timers=[],na.fx.tick=function(){var a,b=na.timers,c=0;for(zb=na.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||na.fx.stop(),zb=void 0},na.fx.timer=function(a){na.timers.push(a),a()?na.fx.start():na.timers.pop()},na.fx.interval=13,na.fx.start=function(){Ab||(Ab=a.setInterval(na.fx.tick,na.fx.interval))},na.fx.stop=function(){a.clearInterval(Ab),Ab=null},na.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
na.fn.delay=function(b,c){return b=na.fx?na.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=da.createElement("input"),c=da.createElement("div"),d=da.createElement("select"),e=d.appendChild(da.createElement("option"));c=da.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",la.getSetAttribute="t"!==c.className,la.style=/top/.test(a.getAttribute("style")),la.hrefNormalized="/a"===a.getAttribute("href"),la.checkOn=!!b.value,la.optSelected=e.selected,la.enctype=!!da.createElement("form").enctype,d.disabled=!0,la.optDisabled=!e.disabled,b=da.createElement("input"),b.setAttribute("value",""),la.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),la.radioValue="t"===b.value}();var Db=/\r/g;na.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=na.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,na(this).val()):a,null==e?e="":"number"==typeof e?e+="":na.isArray(e)&&(e=na.map(e,function(a){return null==a?"":a+""})),b=na.valHooks[this.type]||na.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// handle most common string cases
// handle cases where value is null/undef or number
return b=na.valHooks[e.type]||na.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Db,""):null==c?"":c)}}}),na.extend({valHooks:{option:{get:function(a){var b=na.find.attr(a,"value");
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
return null!=b?b:na.trim(na.text(a))}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)
// oldIE doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&(la.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!na.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(b=na(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=na.makeArray(b),g=e.length;g--;)if(d=e[g],na.inArray(na.valHooks.option.get(d),f)>=0)
// Support: IE6
// When new option element is added to select box we need to
// force reflow of newly added node in order to workaround delay
// of initialization properties
try{d.selected=c=!0}catch(h){
// Will be executed only in IE6
d.scrollHeight}else d.selected=!1;
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),e}}}}),
// Radios and checkboxes getter/setter
na.each(["radio","checkbox"],function(){na.valHooks[this]={set:function(a,b){return na.isArray(b)?a.checked=na.inArray(na(a).val(),b)>-1:void 0}},la.checkOn||(na.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var Eb,Fb,Gb=na.expr.attrHandle,Hb=/^(?:checked|selected)$/i,Ib=la.getSetAttribute,Jb=la.input;na.fn.extend({attr:function(a,b){return Na(this,na.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){na.removeAttr(this,a)})}}),na.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return"undefined"==typeof a.getAttribute?na.prop(a,b,c):(1===f&&na.isXMLDoc(a)||(b=b.toLowerCase(),e=na.attrHooks[b]||(na.expr.match.bool.test(b)?Fb:Eb)),void 0!==c?null===c?void na.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=na.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!la.radioValue&&"radio"===b&&na.nodeName(a,"input")){
// Setting the type on a radio button after the value resets the value in IE8-9
// Reset value to default in case type is set after value during creation
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(Da);if(f&&1===a.nodeType)for(;c=f[e++];)d=na.propFix[c]||c,na.expr.match.bool.test(c)?Jb&&Ib||!Hb.test(c)?a[d]=!1:a[na.camelCase("default-"+c)]=a[d]=!1:na.attr(a,c,""),a.removeAttribute(Ib?c:d)}}),Fb={set:function(a,b,c){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
// Support: IE<9
// Use defaultChecked and defaultSelected for oldIE
return b===!1?na.removeAttr(a,c):Jb&&Ib||!Hb.test(c)?a.setAttribute(!Ib&&na.propFix[c]||c,c):a[na.camelCase("default-"+c)]=a[c]=!0,c}},na.each(na.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Gb[b]||na.find.attr;Jb&&Ib||!Hb.test(b)?Gb[b]=function(a,b,d){var e,f;return d||(f=Gb[b],Gb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,Gb[b]=f),e}:Gb[b]=function(a,b,c){return c?void 0:a[na.camelCase("default-"+b)]?b.toLowerCase():null}}),Jb&&Ib||(na.attrHooks.value={set:function(a,b,c){return na.nodeName(a,"input")?void(a.defaultValue=b):Eb&&Eb.set(a,b,c)}}),Ib||(Eb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},Gb.id=Gb.name=Gb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},na.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:Eb.set},na.attrHooks.contenteditable={set:function(a,b,c){Eb.set(a,""===b?!1:b,c)}},na.each(["width","height"],function(a,b){na.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),la.style||(na.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Kb=/^(?:input|select|textarea|button|object)$/i,Lb=/^(?:a|area)$/i;na.fn.extend({prop:function(a,b){return Na(this,na.prop,a,b,arguments.length>1)},removeProp:function(a){return a=na.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),na.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fix name and attach hooks
return 1===f&&na.isXMLDoc(a)||(b=na.propFix[b]||b,e=na.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=na.find.attr(a,"tabindex");return b?parseInt(b,10):Kb.test(a.nodeName)||Lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
la.hrefNormalized||
// href/src property should get the full normalized URL (#10299/#12915)
na.each(["href","src"],function(a,b){na.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),
// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
la.optSelected||(na.propHooks.selected={get:function(a){var b=a.parentNode;
// Make sure that it also works with optgroups, see #5701
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),na.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){na.propFix[this.toLowerCase()]=this}),
// IE6/7 call enctype encoding
la.enctype||(na.propFix.enctype="encoding");var Mb=/[\t\r\n\f]/g;na.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).addClass(a.call(this,b,S(this)))});if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Mb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");
// only assign if different to avoid unneeded rendering.
h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).removeClass(a.call(this,b,S(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Mb," ")){for(g=0;f=b[g++];)
// Remove *all* instances
for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");
// Only assign if different to avoid unneeded rendering.
h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):na.isFunction(a)?this.each(function(c){na(this).toggleClass(a.call(this,c,S(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(d=0,e=na(this),f=a.match(Da)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=S(this),b&&na._data(this,"__className__",b),na.attr(this,"class",b||a===!1?"":na._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+S(c)+" ").replace(Mb," ").indexOf(b)>-1)return!0;return!1}}),
// Return jQuery for attributes-only inclusion
na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
na.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),na.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Nb=a.location,Ob=na.now(),Pb=/\?/,Qb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;na.parseJSON=function(b){
// Attempt to parse using the native JSON parser first
if(a.JSON&&a.JSON.parse)
// Support: Android 2.3
// Workaround failure to string-cast null input
return a.JSON.parse(b+"");var c,d=null,e=na.trim(b+"");
// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
// after removing valid tokens
return e&&!na.trim(e.replace(Qb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():na.error("Invalid JSON: "+b)},
// Cross-browser xml parsing
na.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||na.error("Invalid XML: "+b),c};var Rb=/#.*$/,Sb=/([?&])_=[^&]*/,
// IE leaves an \r character at EOL
Tb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
// #7653, #8125, #8152: local protocol detection
Ub=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Vb=/^(?:GET|HEAD)$/,Wb=/^\/\//,Xb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Yb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Zb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
$b="*/".concat("*"),
// Document location
_b=Nb.href,
// Segment location into parts
ac=Xb.exec(_b.toLowerCase())||[];na.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:_b,type:"GET",isLocal:Ub.test(ac[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":$b,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":na.parseJSON,
// Parse text as xml
"text xml":na.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?V(V(a,na.ajaxSettings),b):V(na.ajaxSettings,a)},ajaxPrefilter:T(Yb),ajaxTransport:T(Zb),
// Main method
ajax:function(b,c){
// Callback for when everything is done
function d(b,c,d,e){var f,l,s,t,v,x=c;
// Called once
2!==u&&(u=2,i&&a.clearTimeout(i),k=void 0,h=e||"",w.readyState=b>0?4:0,f=b>=200&&300>b||304===b,d&&(t=W(m,w,d)),t=X(m,t,w,f),f?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(na.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(na.etag[g]=v)),204===b||"HEAD"===m.type?x="nocontent":304===b?x="notmodified":(x=t.state,l=t.data,s=t.error,f=!s)):(s=x,!b&&x||(x="error",0>b&&(b=0))),w.status=b,w.statusText=(c||x)+"",f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=void 0,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),--na.active||na.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof b&&(c=b,b=void 0),
// Force options to be an object
c=c||{};var
// Cross-domain detection vars
e,
// Loop variable
f,
// URL without anti-cache param
g,
// Response headers as string
h,
// timeout handle
i,
// To know if global events are to be dispatched
j,k,
// Response headers
l,
// Create the final options object
m=na.ajaxSetup({},c),
// Callbacks context
n=m.context||m,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
o=m.context&&(n.nodeType||n.jquery)?na(n):na.event,
// Deferreds
p=na.Deferred(),q=na.Callbacks("once memory"),
// Status-dependent callbacks
r=m.statusCode||{},
// Headers (they are sent all at once)
s={},t={},
// The jqXHR state
u=0,
// Default abort message
v="canceled",
// Fake xhr
w={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Tb.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===u?h:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return u||(m.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(2>u)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
r[b]=[r[b],a[b]];else
// Execute the appropriate callbacks
w.always(a[w.status]);return this},
// Cancel the request
abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
m.url=((b||m.url||_b)+"").replace(Rb,"").replace(Wb,ac[1]+"//"),
// Alias method option to type as per ticket #12004
m.type=c.method||c.type||m.method||m.type,
// Extract dataTypes list
m.dataTypes=na.trim(m.dataType||"*").toLowerCase().match(Da)||[""],null==m.crossDomain&&(e=Xb.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===ac[1]&&e[2]===ac[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(ac[3]||("http:"===ac[1]?"80":"443")))),
// Convert data if not already a string
m.data&&m.processData&&"string"!=typeof m.data&&(m.data=na.param(m.data,m.traditional)),
// Apply prefilters
U(Yb,m,c,w),2===u)return w;j=na.event&&m.global,j&&0===na.active++&&na.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Vb.test(m.type),g=m.url,m.hasContent||(m.data&&(g=m.url+=(Pb.test(g)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=Sb.test(g)?g.replace(Sb,"$1_="+Ob++):g+(Pb.test(g)?"&":"?")+"_="+Ob++)),m.ifModified&&(na.lastModified[g]&&w.setRequestHeader("If-Modified-Since",na.lastModified[g]),na.etag[g]&&w.setRequestHeader("If-None-Match",na.etag[g])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+$b+"; q=0.01":""):m.accepts["*"]);
// Check for headers option
for(f in m.headers)w.setRequestHeader(f,m.headers[f]);
// Allow custom headers/mimetypes and early abort
if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))
// Abort if not done already and return
return w.abort();
// aborting is no longer a cancellation
v="abort";
// Install callbacks on deferreds
for(f in{success:1,error:1,complete:1})w[f](m[f]);
// If no transport, we auto-abort
if(k=U(Zb,m,c,w)){
// If request was aborted inside ajaxSend, stop there
if(w.readyState=1,
// Send global event
j&&o.trigger("ajaxSend",[w,m]),2===u)return w;
// Timeout
m.async&&m.timeout>0&&(i=a.setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){
// Propagate exception as error if not done
if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return na.get(a,b,c,"json")},getScript:function(a,b){return na.get(a,void 0,b,"script")}}),na.each(["get","post"],function(a,b){na[b]=function(a,c,d,e){
// The url can be an options object (which then must have .url)
// shift arguments if data argument was omitted
return na.isFunction(c)&&(e=e||d,d=c,c=void 0),na.ajax(na.extend({url:a,type:b,dataType:e,data:c,success:d},na.isPlainObject(a)&&a))}}),na._evalUrl=function(a){return na.ajax({url:a,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},na.fn.extend({wrapAll:function(a){if(na.isFunction(a))return this.each(function(b){na(this).wrapAll(a.call(this,b))});if(this[0]){
// The elements to wrap the target around
var b=na(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return na.isFunction(a)?this.each(function(b){na(this).wrapInner(a.call(this,b))}):this.each(function(){var b=na(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=na.isFunction(a);return this.each(function(c){na(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){na.nodeName(this,"body")||na(this).replaceWith(this.childNodes)}).end()}}),na.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return la.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Z(a)},na.expr.filters.visible=function(a){return!na.expr.filters.hidden(a)};var bc=/%20/g,cc=/\[\]$/,dc=/\r?\n/g,ec=/^(?:submit|button|image|reset|file)$/i,fc=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
na.param=function(a,b){var c,d=[],e=function(a,b){b=na.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===b&&(b=na.ajaxSettings&&na.ajaxSettings.traditional),na.isArray(a)||a.jquery&&!na.isPlainObject(a))
// Serialize the form elements
na.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)$(c,a[c],b,e);
// Return the resulting serialization
return d.join("&").replace(bc,"+")},na.fn.extend({serialize:function(){return na.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=na.prop(this,"elements");return a?na.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!na(this).is(":disabled")&&fc.test(this.nodeName)&&!ec.test(a)&&(this.checked||!Oa.test(a))}).map(function(a,b){var c=na(this).val();return null==c?null:na.isArray(c)?na.map(c,function(a){return{name:b.name,value:a.replace(dc,"\r\n")}}):{name:b.name,value:c.replace(dc,"\r\n")}}).get()}}),
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
na.ajaxSettings.xhr=void 0!==a.ActiveXObject?
// Support: IE6-IE8
function(){
// XHR cannot access local files, always use ActiveX for that case
// XHR cannot access local files, always use ActiveX for that case
// Support: IE 9-11
// IE seems to error on cross-domain PATCH requests when ActiveX XHR
// is used. In IE 9+ always use the native XHR.
// Note: this condition won't catch Edge as it doesn't define
// document.documentMode but it also doesn't support ActiveX so it won't
// reach this code.
return this.isLocal?aa():da.documentMode>8?_():/^(get|post|head|put|delete|options)$/i.test(this.type)&&_()||aa()}:
// For all other browsers, use the standard XMLHttpRequest object
_;var gc=0,hc={},ic=na.ajaxSettings.xhr();
// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in hc)hc[a](void 0,!0)}),
// Determine support properties
la.cors=!!ic&&"withCredentials"in ic,ic=la.ajax=!!ic,ic&&na.ajaxTransport(function(b){if(!b.crossDomain||la.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++gc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete hc[h],c=void 0,g.onreadystatechange=na.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=hc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}}),na.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),na.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return na.globalEval(a),a}}}),na.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),na.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=da.head||na("head")[0]||da.documentElement;return{send:function(d,e){b=da.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
na.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||na.expando+"_"+Ob++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
na.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=na.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Pb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||na.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?na(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&na.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),
// Support: Safari 8+
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
la.createHTMLDocument=function(){if(!da.implementation.createHTMLDocument)return!1;var a=da.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),
// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
na.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),
// document.implementation stops scripts or inline event handlers from
// being executed immediately
b=b||(la.createHTMLDocument?da.implementation.createHTMLDocument(""):da);var d=wa.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=r([a],b,e),e&&e.length&&na(e).remove(),na.merge([],d.childNodes))};
// Keep a copy of the old load method
var lc=na.fn.load;/**
 * Load a url into a page
 */
na.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>-1&&(d=na.trim(a.slice(h,a.length)),a=a.slice(0,h)),na.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&na.ajax({url:a,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?na("<div>").append(na.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},
// Attach a bunch of functions for handling common AJAX events
na.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){na.fn[b]=function(a){return this.on(b,a)}}),na.expr.filters.animated=function(a){return na.grep(na.timers,function(b){return a===b.elem}).length},na.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=na.css(a,"position"),l=na(a),m={};
// set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=na.css(a,"top"),i=na.css(a,"left"),j=("absolute"===k||"fixed"===k)&&na.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),na.isFunction(b)&&(b=b.call(a,c,na.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},na.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){na.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return b=f.documentElement,na.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=ba(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===na.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),na.nodeName(a[0],"html")||(c=a.offset()),c.top+=na.css(a[0],"borderTopWidth",!0),c.left+=na.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-na.css(d,"marginTop",!0),left:b.left-c.left-na.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&!na.nodeName(a,"html")&&"static"===na.css(a,"position");)a=a.offsetParent;return a||nb})}}),
// Create scrollLeft and scrollTop methods
na.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);na.fn[a]=function(d){return Na(this,function(a,d,e){var f=ba(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?na(f).scrollLeft():e,c?e:na(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),
// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
na.each(["top","left"],function(a,b){na.cssHooks[b]=F(la.pixelPosition,function(a,c){return c?(c=pb(a,b),lb.test(c)?na(a).position()[b]+"px":c):void 0})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
na.each({Height:"height",Width:"width"},function(a,b){na.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// margin is only for outerHeight, outerWidth
na.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Na(this,function(b,c,d){var e;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return na.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?na.css(b,c,g):na.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),na.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),
// The number of elements contained in the matched element set
na.fn.size=function(){return this.length},na.fn.andSelf=na.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return na});var
// Map over jQuery in case of overwrite
mc=a.jQuery,
// Map over the $ in case of overwrite
nc=a.$;
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return na.noConflict=function(b){return a.$===na&&(a.$=nc),b&&a.jQuery===na&&(a.jQuery=mc),na},b||(a.jQuery=a.$=na),na});
//# sourceMappingURL=jquery.min.334e8b5a.js.map