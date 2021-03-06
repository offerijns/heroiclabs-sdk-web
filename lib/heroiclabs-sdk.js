(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Heroic", [], factory);
	else if(typeof exports === 'object')
		exports["Heroic"] = factory();
	else
		root["Heroic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);
	
	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});
	
	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(127)});
	
	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _client = __webpack_require__(192);
	
	Object.defineProperty(exports, 'Client', {
	  enumerable: true,
	  get: function get() {
	    return _client.Client;
	  }
	});
	Object.defineProperty(exports, 'Response', {
	  enumerable: true,
	  get: function get() {
	    return _client.Response;
	  }
	});
	
	var _session = __webpack_require__(265);
	
	Object.defineProperty(exports, 'Session', {
	  enumerable: true,
	  get: function get() {
	    return _session.Session;
	  }
	});
	
	var _ping = __webpack_require__(266);
	
	Object.defineProperty(exports, 'PingRequest', {
	  enumerable: true,
	  get: function get() {
	    return _ping.PingRequest;
	  }
	});
	
	var _server = __webpack_require__(288);
	
	Object.defineProperty(exports, 'ServerRequest', {
	  enumerable: true,
	  get: function get() {
	    return _server.ServerRequest;
	  }
	});
	
	var _account_login = __webpack_require__(289);
	
	Object.defineProperty(exports, 'LoginTangoRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.LoginTangoRequest;
	  }
	});
	Object.defineProperty(exports, 'LoginFacebookRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.LoginFacebookRequest;
	  }
	});
	Object.defineProperty(exports, 'LoginGoogleRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.LoginGoogleRequest;
	  }
	});
	Object.defineProperty(exports, 'LoginAnonymousRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.LoginAnonymousRequest;
	  }
	});
	Object.defineProperty(exports, 'LoginEmailRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.LoginEmailRequest;
	  }
	});
	Object.defineProperty(exports, 'CreateEmailRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.CreateEmailRequest;
	  }
	});
	Object.defineProperty(exports, 'EmailPasswordResetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_login.EmailPasswordResetRequest;
	  }
	});
	
	var _account_check = __webpack_require__(290);
	
	Object.defineProperty(exports, 'CheckTangoRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_check.CheckTangoRequest;
	  }
	});
	Object.defineProperty(exports, 'CheckFacebookRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_check.CheckFacebookRequest;
	  }
	});
	Object.defineProperty(exports, 'CheckGoogleRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_check.CheckGoogleRequest;
	  }
	});
	Object.defineProperty(exports, 'CheckAnonymousRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_check.CheckAnonymousRequest;
	  }
	});
	Object.defineProperty(exports, 'CheckEmailRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_check.CheckEmailRequest;
	  }
	});
	
	var _account_link = __webpack_require__(291);
	
	Object.defineProperty(exports, 'LinkTangoRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_link.LinkTangoRequest;
	  }
	});
	Object.defineProperty(exports, 'LinkFacebookRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_link.LinkFacebookRequest;
	  }
	});
	Object.defineProperty(exports, 'LinkGoogleRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_link.LinkGoogleRequest;
	  }
	});
	Object.defineProperty(exports, 'LinkAnonymousRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_link.LinkAnonymousRequest;
	  }
	});
	
	var _account_unlink = __webpack_require__(292);
	
	Object.defineProperty(exports, 'UnlinkTangoRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_unlink.UnlinkTangoRequest;
	  }
	});
	Object.defineProperty(exports, 'UnlinkFacebookRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_unlink.UnlinkFacebookRequest;
	  }
	});
	Object.defineProperty(exports, 'UnlinkGoogleRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_unlink.UnlinkGoogleRequest;
	  }
	});
	Object.defineProperty(exports, 'UnlinkAnonymousRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_unlink.UnlinkAnonymousRequest;
	  }
	});
	Object.defineProperty(exports, 'UnlinkEmailRequest', {
	  enumerable: true,
	  get: function get() {
	    return _account_unlink.UnlinkEmailRequest;
	  }
	});
	
	var _game = __webpack_require__(293);
	
	Object.defineProperty(exports, 'GameGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _game.GameGetRequest;
	  }
	});
	
	var _gamer = __webpack_require__(294);
	
	Object.defineProperty(exports, 'GamerGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _gamer.GamerGetRequest;
	  }
	});
	Object.defineProperty(exports, 'GamerUpdateRequest', {
	  enumerable: true,
	  get: function get() {
	    return _gamer.GamerUpdateRequest;
	  }
	});
	
	var _storage = __webpack_require__(295);
	
	Object.defineProperty(exports, 'StorageGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _storage.StorageGetRequest;
	  }
	});
	Object.defineProperty(exports, 'StoragePutRequest', {
	  enumerable: true,
	  get: function get() {
	    return _storage.StoragePutRequest;
	  }
	});
	Object.defineProperty(exports, 'StorageDeleteRequest', {
	  enumerable: true,
	  get: function get() {
	    return _storage.StorageDeleteRequest;
	  }
	});
	
	var _achievement = __webpack_require__(296);
	
	Object.defineProperty(exports, 'AchievementListRequest', {
	  enumerable: true,
	  get: function get() {
	    return _achievement.AchievementListRequest;
	  }
	});
	Object.defineProperty(exports, 'AchievementUpdateRequest', {
	  enumerable: true,
	  get: function get() {
	    return _achievement.AchievementUpdateRequest;
	  }
	});
	
	var _leaderboard = __webpack_require__(297);
	
	Object.defineProperty(exports, 'LeaderboardListRequest', {
	  enumerable: true,
	  get: function get() {
	    return _leaderboard.LeaderboardListRequest;
	  }
	});
	Object.defineProperty(exports, 'LeaderboardGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _leaderboard.LeaderboardGetRequest;
	  }
	});
	Object.defineProperty(exports, 'LeaderboardAndRankGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _leaderboard.LeaderboardAndRankGetRequest;
	  }
	});
	Object.defineProperty(exports, 'LeaderboardUpdateRequest', {
	  enumerable: true,
	  get: function get() {
	    return _leaderboard.LeaderboardUpdateRequest;
	  }
	});
	
	var _match = __webpack_require__(298);
	
	Object.defineProperty(exports, 'MatchListRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchListRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchesSinceRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchesSinceRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchGetRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchTurnGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchTurnGetRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchTurnSubmitRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchTurnSubmitRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchTurnEndRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchTurnEndRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchTurnLeaveRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchTurnLeaveRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchCreateRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchCreateRequest;
	  }
	});
	Object.defineProperty(exports, 'MatchMakeRequest', {
	  enumerable: true,
	  get: function get() {
	    return _match.MatchMakeRequest;
	  }
	});
	
	var _shared_storage = __webpack_require__(299);
	
	Object.defineProperty(exports, 'SharedStorageGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _shared_storage.SharedStorageGetRequest;
	  }
	});
	Object.defineProperty(exports, 'SharedStoragePublicPutRequest', {
	  enumerable: true,
	  get: function get() {
	    return _shared_storage.SharedStoragePublicPutRequest;
	  }
	});
	Object.defineProperty(exports, 'SharedStoragePublicPatchRequest', {
	  enumerable: true,
	  get: function get() {
	    return _shared_storage.SharedStoragePublicPatchRequest;
	  }
	});
	Object.defineProperty(exports, 'SharedStoragePublicDeleteRequest', {
	  enumerable: true,
	  get: function get() {
	    return _shared_storage.SharedStoragePublicDeleteRequest;
	  }
	});
	Object.defineProperty(exports, 'SharedStorageSearchRequest', {
	  enumerable: true,
	  get: function get() {
	    return _shared_storage.SharedStorageSearchRequest;
	  }
	});
	
	var _script = __webpack_require__(300);
	
	Object.defineProperty(exports, 'ExecuteScriptRequest', {
	  enumerable: true,
	  get: function get() {
	    return _script.ExecuteScriptRequest;
	  }
	});
	
	var _message = __webpack_require__(301);
	
	Object.defineProperty(exports, 'MessageListRequest', {
	  enumerable: true,
	  get: function get() {
	    return _message.MessageListRequest;
	  }
	});
	Object.defineProperty(exports, 'MessageReadRequest', {
	  enumerable: true,
	  get: function get() {
	    return _message.MessageReadRequest;
	  }
	});
	Object.defineProperty(exports, 'MessageDeleteRequest', {
	  enumerable: true,
	  get: function get() {
	    return _message.MessageDeleteRequest;
	  }
	});
	
	var _datastore = __webpack_require__(302);
	
	Object.defineProperty(exports, 'DatastoreGetRequest', {
	  enumerable: true,
	  get: function get() {
	    return _datastore.DatastoreGetRequest;
	  }
	});
	Object.defineProperty(exports, 'DatastorePutRequest', {
	  enumerable: true,
	  get: function get() {
	    return _datastore.DatastorePutRequest;
	  }
	});
	Object.defineProperty(exports, 'DatastoreUpdateRequest', {
	  enumerable: true,
	  get: function get() {
	    return _datastore.DatastoreUpdateRequest;
	  }
	});
	Object.defineProperty(exports, 'DatastoreDeleteRequest', {
	  enumerable: true,
	  get: function get() {
	    return _datastore.DatastoreDeleteRequest;
	  }
	});
	Object.defineProperty(exports, 'DatastoreSearchRequest', {
	  enumerable: true,
	  get: function get() {
	    return _datastore.DatastoreSearchRequest;
	  }
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Response = exports.Client = undefined;
	
	var _stringify = __webpack_require__(193);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _freeze = __webpack_require__(196);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _getIterator2 = __webpack_require__(206);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _keys = __webpack_require__(237);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _promise = __webpack_require__(241);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * [HEROICLABS_API API server URL.]
	 * @type {String}
	 */
	var HEROICLABS_API = 'api.heroiclabs.com';
	
	/**
	 * [HEROICLABS_ACCOUNTS Accounts server URL.]
	 * @type {String}
	 */
	var HEROICLABS_ACCOUNTS = 'accounts.heroiclabs.com';
	
	/**
	 * Client responsible for making requests to the Heroic Labs service.
	 */
	
	var Client = exports.Client = function () {
	
	  /**
	   * @param  {String} apikey API key used in all requests made by this client.
	   * @return {Client} An instance of this object.
	   */
	
	  function Client(apikey) {
	    (0, _classCallCheck3.default)(this, Client);
	
	    this._apikey = apikey;
	    this._apiUrl = HEROICLABS_API;
	    this._accountsUrl = HEROICLABS_ACCOUNTS;
	  }
	
	  (0, _createClass3.default)(Client, [{
	    key: 'setApiServer',
	    value: function setApiServer(apiUrl) {
	      this._apiUrl = apiUrl;
	      return this;
	    }
	  }, {
	    key: 'setAccountsServer',
	    value: function setAccountsServer(accountsUrl) {
	      this._accountsUrl = accountsUrl;
	      return this;
	    }
	
	    /**
	     * Execute a given request.
	     * @param  {Request} request The request to execute.
	     * @return {Promise} A deferred promise object which will resolve into a Response object.
	     */
	
	  }, {
	    key: 'execute',
	    value: function execute(request) {
	      var _this = this;
	
	      return new _promise2.default(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        var uri;
	        var gamerToken = '';
	
	        uri = _this._apiUrl + request._url;
	        if (request._type === 'accounts') {
	          uri = _this._accountsUrl + request._url;
	        }
	        uri = 'https://' + uri;
	
	        if (request._session != null) {
	          gamerToken = request._session._token;
	        }
	
	        if (request._queryParams) {
	          uri += '?';
	          var counter = 0;
	          var keys = (0, _keys2.default)(request._queryParams);
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var key = _step.value;
	
	              uri += encodeURIComponent(key) + '=' + encodeURIComponent(String(request._queryParams[key]));
	              counter++;
	              if (counter < keys.length) {
	                uri += '&';
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        }
	
	        xhr.timeout = 5000;
	        xhr.onreadystatechange = function () {
	          xhr.onload = function () {
	            var response = null;
	            if (xhr.status >= 200 && xhr.status < 300) {
	              if (request._responseCallback != null) {
	                response = new Response(xhr, request, request._responseCallback(xhr));
	              } else {
	                response = new Response(xhr, request);
	              }
	              (0, _freeze2.default)(response);
	              resolve(response);
	            } else {
	              response = new Response(xhr, request);
	              (0, _freeze2.default)(response);
	              reject(response);
	            }
	          };
	          xhr.onerror = function () {
	            var response = new Response(xhr, request);
	            (0, _freeze2.default)(response);
	            reject(response);
	          };
	          xhr.ontimeout = function () {
	            var response = new Response(xhr, request);
	            (0, _freeze2.default)(response);
	            reject(response);
	          };
	        };
	
	        xhr.open(request._method, uri, true);
	
	        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(_this._apikey + ':' + gamerToken));
	        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	        xhr.setRequestHeader('Accept', 'application/json');
	        // xhr.setRequestHeader('User-Agent', '');
	
	        xhr.send((0, _stringify2.default)(request._body));
	      });
	    }
	  }]);
	  return Client;
	}();
	
	/**
	 * Response from the Heroic Labs service.
	 */
	
	
	var Response = exports.Response = function Response(jsXHR, request, body) {
	  (0, _classCallCheck3.default)(this, Response);
	
	  /**
	   * [xhr Original XHR]
	   * @type {XMLHttpRequest}
	   */
	  this.xhr = jsXHR;
	
	  /**
	   * [request Original sent request.]
	   * @type {Request}
	   */
	  this.request = request;
	
	  /**
	   * [status HTTP Status]
	   * @type {Integer}
	   */
	  this.status = jsXHR.status;
	
	  /**
	   * [message HTTP Status Message]
	   * @type {String}
	   */
	  this.message = jsXHR.statusText;
	
	  /**
	   * [body Body of the Response. Could be different to the XHR Body.]
	   * @type {Object}
	   */
	  this.body = null;
	
	  if (body != null) {
	    this.body = body;
	  } else if (jsXHR.responseText !== null && jsXHR.responseText.length > 0) {
	    this.body = JSON.parse(jsXHR.responseText);
	  }
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(195);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(197), __esModule: true };

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(198);
	module.exports = __webpack_require__(195).Object.freeze;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(199);
	
	__webpack_require__(200)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(201)
	  , core    = __webpack_require__(195)
	  , fails   = __webpack_require__(205);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(202)
	  , core      = __webpack_require__(195)
	  , ctx       = __webpack_require__(203)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 202 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(204);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(207), __esModule: true };

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(208);
	__webpack_require__(230);
	module.exports = __webpack_require__(233);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(209);
	var Iterators = __webpack_require__(212);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(210)
	  , step             = __webpack_require__(211)
	  , Iterators        = __webpack_require__(212)
	  , toIObject        = __webpack_require__(213);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(217)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(214)
	  , defined = __webpack_require__(216);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(215);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 215 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(218)
	  , $export        = __webpack_require__(201)
	  , redefine       = __webpack_require__(219)
	  , hide           = __webpack_require__(220)
	  , has            = __webpack_require__(224)
	  , Iterators      = __webpack_require__(212)
	  , $iterCreate    = __webpack_require__(225)
	  , setToStringTag = __webpack_require__(226)
	  , getProto       = __webpack_require__(221).getProto
	  , ITERATOR       = __webpack_require__(227)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(220);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(221)
	  , createDesc = __webpack_require__(222);
	module.exports = __webpack_require__(223) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(205)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 224 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(221)
	  , descriptor     = __webpack_require__(222)
	  , setToStringTag = __webpack_require__(226)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(220)(IteratorPrototype, __webpack_require__(227)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(221).setDesc
	  , has = __webpack_require__(224)
	  , TAG = __webpack_require__(227)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(228)('wks')
	  , uid    = __webpack_require__(229)
	  , Symbol = __webpack_require__(202).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(202)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 229 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(231)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(217)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(232)
	  , defined   = __webpack_require__(216);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(234)
	  , get      = __webpack_require__(235);
	module.exports = __webpack_require__(195).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(236)
	  , ITERATOR  = __webpack_require__(227)('iterator')
	  , Iterators = __webpack_require__(212);
	module.exports = __webpack_require__(195).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(215)
	  , TAG = __webpack_require__(227)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(238), __esModule: true };

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(239);
	module.exports = __webpack_require__(195).Object.keys;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(240);
	
	__webpack_require__(200)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(216);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(242), __esModule: true };

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(243);
	__webpack_require__(230);
	__webpack_require__(208);
	__webpack_require__(244);
	module.exports = __webpack_require__(195).Promise;

/***/ },
/* 243 */
/***/ function(module, exports) {



/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(221)
	  , LIBRARY    = __webpack_require__(218)
	  , global     = __webpack_require__(202)
	  , ctx        = __webpack_require__(203)
	  , classof    = __webpack_require__(236)
	  , $export    = __webpack_require__(201)
	  , isObject   = __webpack_require__(199)
	  , anObject   = __webpack_require__(234)
	  , aFunction  = __webpack_require__(204)
	  , strictNew  = __webpack_require__(245)
	  , forOf      = __webpack_require__(246)
	  , setProto   = __webpack_require__(250).set
	  , same       = __webpack_require__(251)
	  , SPECIES    = __webpack_require__(227)('species')
	  , speciesConstructor = __webpack_require__(252)
	  , asap       = __webpack_require__(253)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(223)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(258)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(226)(P, PROMISE);
	__webpack_require__(259)(PROMISE);
	Wrapper = __webpack_require__(195)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(260)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(203)
	  , call        = __webpack_require__(247)
	  , isArrayIter = __webpack_require__(248)
	  , anObject    = __webpack_require__(234)
	  , toLength    = __webpack_require__(249)
	  , getIterFn   = __webpack_require__(235);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(234);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(212)
	  , ITERATOR   = __webpack_require__(227)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(232)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(221).getDesc
	  , isObject = __webpack_require__(199)
	  , anObject = __webpack_require__(234);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(203)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(234)
	  , aFunction = __webpack_require__(204)
	  , SPECIES   = __webpack_require__(227)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(202)
	  , macrotask = __webpack_require__(254).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(215)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(203)
	  , invoke             = __webpack_require__(255)
	  , html               = __webpack_require__(256)
	  , cel                = __webpack_require__(257)
	  , global             = __webpack_require__(202)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(215)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202).document && document.documentElement;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199)
	  , document = __webpack_require__(202).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(219);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(195)
	  , $           = __webpack_require__(221)
	  , DESCRIPTORS = __webpack_require__(223)
	  , SPECIES     = __webpack_require__(227)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(227)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(263);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(221);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Session = undefined;
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * Sessions identify gamers in the context of the Heroic Labs service.
	 */
	
	var Session =
	
	/**
	 * @param  {String} token The token string received during a login operation.
	 * @return {Session} An instance of this object.
	 */
	exports.Session = function Session(token) {
	  (0, _classCallCheck3.default)(this, Session);
	
	  this._token = token;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PingRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Ping the service to check that it's available, reachable, the client API key is valid,
	 * and the given Session (if any) is valid.
	 */
	
	var PingRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(PingRequest, _ApiRequest);
	
	
	  /**
	   * @return {PingRequest} An instance of this object.
	   */
	
	  function PingRequest() {
	    (0, _classCallCheck3.default)(this, PingRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PingRequest).call(this, 'GET', '/v0/'));
	  }
	
	  /**
	   * Set a Session to use as part of the request and checks for validity of the Session.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {PingRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(PingRequest, [{
	    key: 'session',
	    value: function session(_session) {
	      if (_session != null && !_session.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session;
	      return this;
	    }
	  }]);
	  return PingRequest;
	}(_request.ApiRequest); /*
	                         * Copyright 2016 Heroic Labs
	                         *
	                         * Licensed under the Apache License, Version 2.0 (the "License");
	                         * you may not use this file except in compliance with the License.
	                         * You may obtain a copy of the License at
	                         *
	                         * http://www.apache.org/licenses/LICENSE-2.0
	                         *
	                         * Unless required by applicable law or agreed to in writing, software
	                         * distributed under the License is distributed on an "AS IS" BASIS,
	                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                         * See the License for the specific language governing permissions and
	                         * limitations under the License.
	                         */

	exports.PingRequest = PingRequest;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(269);
	module.exports = __webpack_require__(195).Object.getPrototypeOf;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(240);
	
	__webpack_require__(200)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(271);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(272);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(274);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(273), __esModule: true };

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230);
	__webpack_require__(208);
	module.exports = __webpack_require__(227)('iterator');

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(275), __esModule: true };

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(276);
	__webpack_require__(243);
	module.exports = __webpack_require__(195).Symbol;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(221)
	  , global         = __webpack_require__(202)
	  , has            = __webpack_require__(224)
	  , DESCRIPTORS    = __webpack_require__(223)
	  , $export        = __webpack_require__(201)
	  , redefine       = __webpack_require__(219)
	  , $fails         = __webpack_require__(205)
	  , shared         = __webpack_require__(228)
	  , setToStringTag = __webpack_require__(226)
	  , uid            = __webpack_require__(229)
	  , wks            = __webpack_require__(227)
	  , keyOf          = __webpack_require__(277)
	  , $names         = __webpack_require__(278)
	  , enumKeys       = __webpack_require__(279)
	  , isArray        = __webpack_require__(280)
	  , anObject       = __webpack_require__(234)
	  , toIObject      = __webpack_require__(213)
	  , createDesc     = __webpack_require__(222)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(218)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(221)
	  , toIObject = __webpack_require__(213);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(213)
	  , getNames  = __webpack_require__(221).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(221);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(215);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(282);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(285);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(271);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	module.exports = __webpack_require__(195).Object.setPrototypeOf;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(201);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(250).set});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(286), __esModule: true };

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(221);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccountsRequest = exports.ApiRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var Request = function Request(type, method, url, session, body, queryParams) {
	  (0, _classCallCheck3.default)(this, Request);
	
	  this._type = type;
	  this._method = method;
	  this._url = url;
	  this._session = session;
	  this._body = body;
	  this._queryParams = queryParams;
	
	  this._responseCallback = null; // response callback function;
	};
	
	var ApiRequest = exports.ApiRequest = function (_Request) {
	  (0, _inherits3.default)(ApiRequest, _Request);
	
	  function ApiRequest(method, url, session, body, queryParams) {
	    (0, _classCallCheck3.default)(this, ApiRequest);
	
	    if (session != null && !session.hasOwnProperty('_token')) {
	      throw new Error('Invalid Session Object');
	    }
	
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ApiRequest).call(this, 'api', method, url, session, body, queryParams));
	  }
	
	  return ApiRequest;
	}(Request);
	
	var AccountsRequest = exports.AccountsRequest = function (_Request2) {
	  (0, _inherits3.default)(AccountsRequest, _Request2);
	
	  function AccountsRequest(method, url, session, body, queryParams) {
	    (0, _classCallCheck3.default)(this, AccountsRequest);
	
	    if (session != null && !session.hasOwnProperty('_token')) {
	      throw new Error('Invalid Session Object');
	    }
	
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AccountsRequest).call(this, 'accounts', method, url, session, body, queryParams));
	  }
	
	  return AccountsRequest;
	}(Request);

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ServerRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get metadata for the Server. May include information about the specific instance serving the request.
	 */
	
	var ServerRequest = exports.ServerRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(ServerRequest, _ApiRequest);
	
	
	  /**
	   * @return {PingRequest} An instance of this object.
	   */
	
	  function ServerRequest() {
	    (0, _classCallCheck3.default)(this, ServerRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ServerRequest).call(this, 'GET', '/v0/server'));
	  }
	
	  return ServerRequest;
	}(_request.ApiRequest); /*
	                        
	                         * Copyright 2016 Heroic Labs
	                         *
	                         * Licensed under the Apache License, Version 2.0 (the "License");
	                         * you may not use this file except in compliance with the License.
	                         * You may obtain a copy of the License at
	                         *
	                         * http://www.apache.org/licenses/LICENSE-2.0
	                         *
	                         * Unless required by applicable law or agreed to in writing, software
	                         * distributed under the License is distributed on an "AS IS" BASIS,
	                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                         * See the License for the specific language governing permissions and
	                         * limitations under the License.
	                         */

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmailPasswordResetRequest = exports.CreateEmailRequest = exports.LoginEmailRequest = exports.LoginAnonymousRequest = exports.LoginGoogleRequest = exports.LoginFacebookRequest = exports.LoginTangoRequest = undefined;
	
	var _freeze = __webpack_require__(196);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	var _session5 = __webpack_require__(265);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var LoginRequest = function (_AccountsRequest) {
	  (0, _inherits3.default)(LoginRequest, _AccountsRequest);
	
	  function LoginRequest(accessToken, provider) {
	    (0, _classCallCheck3.default)(this, LoginRequest);
	
	    var body = { 'access_token': accessToken };
	    var url = '/v0/gamer/login/' + provider;
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginRequest).call(this, 'POST', url, null, body));
	
	    _this._responseCallback = function (xhr) {
	      var body = JSON.parse(xhr.responseText);
	      var session = new _session5.Session(body.token);
	      (0, _freeze2.default)(session);
	      return session;
	    };
	    return _this;
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {LoginRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LoginRequest, [{
	    key: 'session',
	    value: function session(_session) {
	      if (_session != null && !_session.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session;
	      return this;
	    }
	  }]);
	  return LoginRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Perform a login with a Tango access token.
	 */
	
	
	var LoginTangoRequest = exports.LoginTangoRequest = function (_LoginRequest) {
	  (0, _inherits3.default)(LoginTangoRequest, _LoginRequest);
	
	
	  /**
	   * @param  {String} accessToken The Tango access token to login with.
	   * @return {LoginTangoRequest} An instance of this object.
	   */
	
	  function LoginTangoRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, LoginTangoRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginTangoRequest).call(this, accessToken, 'tango'));
	  }
	
	  return LoginTangoRequest;
	}(LoginRequest);
	
	/**
	 * Perform a login with a Facebook OAuth access token.
	 */
	
	
	var LoginFacebookRequest = exports.LoginFacebookRequest = function (_LoginRequest2) {
	  (0, _inherits3.default)(LoginFacebookRequest, _LoginRequest2);
	
	
	  /**
	   * @param  {String} accessToken The Facebook OAuth access token to login with.
	   * @return {LoginFacebookRequest} An instance of this object.
	   */
	
	  function LoginFacebookRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, LoginFacebookRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginFacebookRequest).call(this, accessToken, 'facebook'));
	  }
	
	  return LoginFacebookRequest;
	}(LoginRequest);
	
	/**
	 * Perform a login with a Google OAuth access token.
	 */
	
	
	var LoginGoogleRequest = exports.LoginGoogleRequest = function (_LoginRequest3) {
	  (0, _inherits3.default)(LoginGoogleRequest, _LoginRequest3);
	
	
	  /**
	   * @param  {String} accessToken The Google OAuth access token to login with.
	   * @return {LoginGoogleRequest} An instance of this object.
	   */
	
	  function LoginGoogleRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, LoginGoogleRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginGoogleRequest).call(this, accessToken, 'google'));
	  }
	
	  return LoginGoogleRequest;
	}(LoginRequest);
	
	/**
	 * Perform a login with a given anonymous ID.
	 */
	
	
	var LoginAnonymousRequest = function (_AccountsRequest2) {
	  (0, _inherits3.default)(LoginAnonymousRequest, _AccountsRequest2);
	
	
	  /**
	   * @param  {String} id The anonymous profile identifier to login with.
	   * @return {LoginAnonymousRequest} An instance of this object.
	   */
	
	  function LoginAnonymousRequest(id) {
	    (0, _classCallCheck3.default)(this, LoginAnonymousRequest);
	
	    var body = { 'id': id };
	    var url = '/v0/gamer/login/anonymous';
	
	    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginAnonymousRequest).call(this, 'POST', url, null, body));
	
	    _this5._responseCallback = function (xhr) {
	      var body = JSON.parse(xhr.responseText);
	      var session = new _session5.Session(body.token);
	      (0, _freeze2.default)(session);
	      return session;
	    };
	    return _this5;
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {LoginAnonymousRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LoginAnonymousRequest, [{
	    key: 'session',
	    value: function session(_session2) {
	      if (_session2 != null && !_session2.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session2;
	      return this;
	    }
	  }]);
	  return LoginAnonymousRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Perform a login with a given email address and password.
	 */
	
	
	exports.LoginAnonymousRequest = LoginAnonymousRequest;
	
	var LoginEmailRequest = function (_AccountsRequest3) {
	  (0, _inherits3.default)(LoginEmailRequest, _AccountsRequest3);
	
	
	  /**
	   * @param  {String} email The email to login with.
	   * @param  {String} password The corresponding password to login with.
	   * @return {LoginEmailRequest} An instance of this object.
	   */
	
	  function LoginEmailRequest(email, password) {
	    (0, _classCallCheck3.default)(this, LoginEmailRequest);
	
	    var body = { 'email': email, 'password': password };
	    var url = '/v0/gamer/login/email';
	
	    var _this6 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoginEmailRequest).call(this, 'POST', url, null, body));
	
	    _this6._responseCallback = function (xhr) {
	      var body = JSON.parse(xhr.responseText);
	      var session = new _session5.Session(body.token);
	      (0, _freeze2.default)(session);
	      return session;
	    };
	    return _this6;
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {LoginEmailRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LoginEmailRequest, [{
	    key: 'session',
	    value: function session(_session3) {
	      if (_session3 != null && !_session3.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session3;
	      return this;
	    }
	  }]);
	  return LoginEmailRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Create a new email profile, attach it to an existing gamer if a Session is provided.
	 */
	
	
	exports.LoginEmailRequest = LoginEmailRequest;
	
	var CreateEmailRequest = function (_AccountsRequest4) {
	  (0, _inherits3.default)(CreateEmailRequest, _AccountsRequest4);
	
	
	  /**
	   * @param  {String} email The email address create a profile for.
	   * @param  {String} password The password to use.
	   * @param  {String} confirmPassword Password confirmation field.
	   * @return {LoginEmailRequest} An instance of this object.
	   */
	
	  function CreateEmailRequest(email, password, confirmPassword) {
	    (0, _classCallCheck3.default)(this, CreateEmailRequest);
	
	    var body = { 'email': email, 'password': password, 'confirm_password': confirmPassword };
	    var url = '/v0/gamer/account/email/create';
	
	    var _this7 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CreateEmailRequest).call(this, 'POST', url, null, body));
	
	    _this7._responseCallback = function (xhr) {
	      var body = JSON.parse(xhr.responseText);
	      var session = new _session5.Session(body.token);
	      (0, _freeze2.default)(session);
	      return session;
	    };
	    return _this7;
	  }
	
	  /**
	   * Set a real name to attach to the account.
	   * @param  {String} name A real name to use.
	   * @return {CreateEmailRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(CreateEmailRequest, [{
	    key: 'name',
	    value: function name(_name) {
	      this._body.name = _name;
	      return this;
	    }
	
	    /**
	     * Explicitly choose a nickname for the account.
	     * If this is not set, the service will assign an auto-generated nickname to the account.
	     * @param  {String} nickname The nickname string to use.
	     * @return {CreateEmailRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'nickname',
	    value: function nickname(_nickname) {
	      this._body.nickname = _nickname;
	      return this;
	    }
	
	    /**
	     * Set a Session to use as part of the request.
	     * @param  {Session} session Session identifying the account making this request.
	     * @return {CreateEmailRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'session',
	    value: function session(_session4) {
	      if (_session4 != null && !_session4.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session4;
	      return this;
	    }
	  }]);
	  return CreateEmailRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Send a password reset email for the given email address.
	 */
	
	
	exports.CreateEmailRequest = CreateEmailRequest;
	
	var EmailPasswordResetRequest = exports.EmailPasswordResetRequest = function (_AccountsRequest5) {
	  (0, _inherits3.default)(EmailPasswordResetRequest, _AccountsRequest5);
	
	
	  /**
	   * @param  {String} email The email address to send a reset password email for.
	   * @return {EmailPasswordResetRequest} An instance of this object.
	   */
	
	  function EmailPasswordResetRequest(email) {
	    (0, _classCallCheck3.default)(this, EmailPasswordResetRequest);
	
	    var body = { 'email': email };
	    var url = '/v0/gamer/account/email/reset/send';
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EmailPasswordResetRequest).call(this, 'POST', url, null, body));
	  }
	
	  return EmailPasswordResetRequest;
	}(_request.AccountsRequest);

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CheckEmailRequest = exports.CheckAnonymousRequest = exports.CheckGoogleRequest = exports.CheckFacebookRequest = exports.CheckTangoRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckRequest = function (_AccountsRequest) {
	  (0, _inherits3.default)(CheckRequest, _AccountsRequest);
	
	  function CheckRequest(accessToken, provider) {
	    (0, _classCallCheck3.default)(this, CheckRequest);
	
	    var body = { 'access_token': accessToken };
	    var url = '/v0/gamer/check/' + provider;
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckRequest).call(this, 'POST', url, null, body));
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {CheckRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(CheckRequest, [{
	    key: 'session',
	    value: function session(_session) {
	      if (_session != null && !_session.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session;
	      return this;
	    }
	  }]);
	  return CheckRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Check if a given Tango account, identified by an access token is currently associated to an account.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var CheckTangoRequest = exports.CheckTangoRequest = function (_CheckRequest) {
	  (0, _inherits3.default)(CheckTangoRequest, _CheckRequest);
	
	
	  /**
	   * @param  {String} accessToken The Tango access token to use to check.
	   * @return {CheckTangoRequest} An instance of this object.
	   */
	
	  function CheckTangoRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, CheckTangoRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckTangoRequest).call(this, accessToken, 'tango'));
	  }
	
	  return CheckTangoRequest;
	}(CheckRequest);
	
	/**
	 * Check if a given Facebook account, identified by an access token is currently associated to an account.
	 */
	
	
	var CheckFacebookRequest = exports.CheckFacebookRequest = function (_CheckRequest2) {
	  (0, _inherits3.default)(CheckFacebookRequest, _CheckRequest2);
	
	
	  /**
	   * @param  {String} accessToken The Facebook OAuth access token to use to check.
	   * @return {CheckTangoRequest} An instance of this object.
	   */
	
	  function CheckFacebookRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, CheckFacebookRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckFacebookRequest).call(this, accessToken, 'facebook'));
	  }
	
	  return CheckFacebookRequest;
	}(CheckRequest);
	
	/**
	 * Check if a given Google account, identified by an access token is currently associated to an account.
	 */
	
	
	var CheckGoogleRequest = exports.CheckGoogleRequest = function (_CheckRequest3) {
	  (0, _inherits3.default)(CheckGoogleRequest, _CheckRequest3);
	
	
	  /**
	   * @param  {String} accessToken The Google OAuth access token to use to check.
	   * @return {CheckTangoRequest} An instance of this object.
	   */
	
	  function CheckGoogleRequest(accessToken) {
	    (0, _classCallCheck3.default)(this, CheckGoogleRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckGoogleRequest).call(this, accessToken, 'google'));
	  }
	
	  return CheckGoogleRequest;
	}(CheckRequest);
	
	/**
	 * Check if a given anonymous ID is currently associated to an account.
	 */
	
	
	var CheckAnonymousRequest = function (_AccountsRequest2) {
	  (0, _inherits3.default)(CheckAnonymousRequest, _AccountsRequest2);
	
	
	  /**
	   * @param  {String} id The anonymous profile identifier to check.
	   * @return {CheckAnonymousRequest} An instance of this object.
	   */
	
	  function CheckAnonymousRequest(id) {
	    (0, _classCallCheck3.default)(this, CheckAnonymousRequest);
	
	    var body = { 'id': id };
	    var url = '/v0/gamer/check/anonymous';
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckAnonymousRequest).call(this, 'POST', url, null, body));
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {CheckAnonymousRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(CheckAnonymousRequest, [{
	    key: 'session',
	    value: function session(_session2) {
	      if (_session2 != null && !_session2.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session2;
	      return this;
	    }
	  }]);
	  return CheckAnonymousRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Check if a given email address is currently associated to an account.
	 */
	
	
	exports.CheckAnonymousRequest = CheckAnonymousRequest;
	
	var CheckEmailRequest = function (_AccountsRequest3) {
	  (0, _inherits3.default)(CheckEmailRequest, _AccountsRequest3);
	
	
	  /**
	   * @param  {String} email The email address to check.
	   * @return {CheckAnonymousRequest} An instance of this object.
	   */
	
	  function CheckEmailRequest(email) {
	    (0, _classCallCheck3.default)(this, CheckEmailRequest);
	
	    var body = { 'email': email };
	    var url = '/v0/gamer/check/email';
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckEmailRequest).call(this, 'POST', url, null, body));
	  }
	
	  /**
	   * Set a Session to use as part of the request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {CheckEmailRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(CheckEmailRequest, [{
	    key: 'session',
	    value: function session(_session3) {
	      if (_session3 != null && !_session3.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session3;
	      return this;
	    }
	  }]);
	  return CheckEmailRequest;
	}(_request.AccountsRequest);

	exports.CheckEmailRequest = CheckEmailRequest;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LinkAnonymousRequest = exports.LinkGoogleRequest = exports.LinkFacebookRequest = exports.LinkTangoRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LinkRequest = function (_AccountsRequest) {
	  (0, _inherits3.default)(LinkRequest, _AccountsRequest);
	
	  function LinkRequest(session, accessToken, provider) {
	    (0, _classCallCheck3.default)(this, LinkRequest);
	
	    var body = { 'access_token': accessToken };
	    var url = '/v0/gamer/link/' + provider;
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkRequest).call(this, 'POST', url, session, body));
	  }
	
	  return LinkRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Link a given Tango profile to an account.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var LinkTangoRequest = exports.LinkTangoRequest = function (_LinkRequest) {
	  (0, _inherits3.default)(LinkTangoRequest, _LinkRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} accessToken Tango access token identifying the profile to link.
	   * @return {LinkTangoRequest} An instance of this object.
	   */
	
	  function LinkTangoRequest(session, accessToken) {
	    (0, _classCallCheck3.default)(this, LinkTangoRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkTangoRequest).call(this, session, accessToken, 'tango'));
	  }
	
	  return LinkTangoRequest;
	}(LinkRequest);
	
	/**
	 * Link a given Facebook profile to an account.
	 */
	
	
	var LinkFacebookRequest = exports.LinkFacebookRequest = function (_LinkRequest2) {
	  (0, _inherits3.default)(LinkFacebookRequest, _LinkRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} accessToken Facebook OAuth access token identifying the profile to link.
	   * @return {LinkFacebookRequest} An instance of this object.
	   */
	
	  function LinkFacebookRequest(session, accessToken) {
	    (0, _classCallCheck3.default)(this, LinkFacebookRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkFacebookRequest).call(this, session, accessToken, 'facebook'));
	  }
	
	  return LinkFacebookRequest;
	}(LinkRequest);
	
	/**
	 * Link a given Google profile to an account.
	 */
	
	
	var LinkGoogleRequest = exports.LinkGoogleRequest = function (_LinkRequest3) {
	  (0, _inherits3.default)(LinkGoogleRequest, _LinkRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} accessToken Google OAuth access token identifying the profile to link.
	   * @return {LinkGoogleRequest} An instance of this object.
	   */
	
	  function LinkGoogleRequest(session, accessToken) {
	    (0, _classCallCheck3.default)(this, LinkGoogleRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkGoogleRequest).call(this, session, accessToken, 'google'));
	  }
	
	  return LinkGoogleRequest;
	}(LinkRequest);
	
	/**
	 * Link a given anonymous ID to an account.
	 */
	
	
	var LinkAnonymousRequest = exports.LinkAnonymousRequest = function (_AccountsRequest2) {
	  (0, _inherits3.default)(LinkAnonymousRequest, _AccountsRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} id The anonymous profile identifier to link.
	   * @return {LinkAnonymousRequest} An instance of this object.
	   */
	
	  function LinkAnonymousRequest(session, id) {
	    (0, _classCallCheck3.default)(this, LinkAnonymousRequest);
	
	    var body = { 'id': id };
	    var url = '/v0/gamer/link/anonymous';
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkAnonymousRequest).call(this, 'POST', url, session, body));
	  }
	
	  return LinkAnonymousRequest;
	}(_request.AccountsRequest);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UnlinkEmailRequest = exports.UnlinkAnonymousRequest = exports.UnlinkGoogleRequest = exports.UnlinkFacebookRequest = exports.UnlinkTangoRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UnlinkRequest = function (_AccountsRequest) {
	  (0, _inherits3.default)(UnlinkRequest, _AccountsRequest);
	
	  function UnlinkRequest(session, id, provider) {
	    (0, _classCallCheck3.default)(this, UnlinkRequest);
	
	    var body = { 'id': id };
	    var url = '/v0/gamer/unlink/' + provider;
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkRequest).call(this, 'POST', url, session, body));
	  }
	
	  return UnlinkRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Unlink a given Tango account ID from an account.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var UnlinkTangoRequest = exports.UnlinkTangoRequest = function (_UnlinkRequest) {
	  (0, _inherits3.default)(UnlinkTangoRequest, _UnlinkRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} id Tango account ID to unlink.
	   * @return {UnlinkTangoRequest} An instance of this object.
	   */
	
	  function UnlinkTangoRequest(session, id) {
	    (0, _classCallCheck3.default)(this, UnlinkTangoRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkTangoRequest).call(this, session, id, 'tango'));
	  }
	
	  return UnlinkTangoRequest;
	}(UnlinkRequest);
	
	/**
	 * Unlink a given Facebook account ID from an account.
	 */
	
	
	var UnlinkFacebookRequest = exports.UnlinkFacebookRequest = function (_UnlinkRequest2) {
	  (0, _inherits3.default)(UnlinkFacebookRequest, _UnlinkRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} id Facebook account ID to unlink.
	   * @return {UnlinkFacebookRequest} An instance of this object.
	   */
	
	  function UnlinkFacebookRequest(session, id) {
	    (0, _classCallCheck3.default)(this, UnlinkFacebookRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkFacebookRequest).call(this, session, id, 'facebook'));
	  }
	
	  return UnlinkFacebookRequest;
	}(UnlinkRequest);
	
	/**
	 * Unlink a given Google account ID from an account.
	 */
	
	
	var UnlinkGoogleRequest = exports.UnlinkGoogleRequest = function (_UnlinkRequest3) {
	  (0, _inherits3.default)(UnlinkGoogleRequest, _UnlinkRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} id Google account ID to unlink.
	   * @return {UnlinkGoogleRequest} An instance of this object.
	   */
	
	  function UnlinkGoogleRequest(session, id) {
	    (0, _classCallCheck3.default)(this, UnlinkGoogleRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkGoogleRequest).call(this, session, id, 'google'));
	  }
	
	  return UnlinkGoogleRequest;
	}(UnlinkRequest);
	
	/**
	 * Unlink a given anonymous ID from an account.
	 */
	
	
	var UnlinkAnonymousRequest = exports.UnlinkAnonymousRequest = function (_UnlinkRequest4) {
	  (0, _inherits3.default)(UnlinkAnonymousRequest, _UnlinkRequest4);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} id The anonymous profile identifier to unlink.
	   * @return {UnlinkAnonymousRequest} An instance of this object.
	   */
	
	  function UnlinkAnonymousRequest(session, id) {
	    (0, _classCallCheck3.default)(this, UnlinkAnonymousRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkAnonymousRequest).call(this, session, id, 'anonymous'));
	  }
	
	  return UnlinkAnonymousRequest;
	}(UnlinkRequest);
	
	/**
	 * Unlink a given email address from an account.
	 */
	
	
	var UnlinkEmailRequest = exports.UnlinkEmailRequest = function (_AccountsRequest2) {
	  (0, _inherits3.default)(UnlinkEmailRequest, _AccountsRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} email The email address to unlink.
	   * @return {UnlinkEmailRequest} An instance of this object.
	   */
	
	  function UnlinkEmailRequest(session, email) {
	    (0, _classCallCheck3.default)(this, UnlinkEmailRequest);
	
	    var body = { 'email': email };
	    var url = '/v0/gamer/unlink/email';
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnlinkEmailRequest).call(this, 'POST', url, session, body));
	  }
	
	  return UnlinkEmailRequest;
	}(_request.AccountsRequest);

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GameGetRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get metadata for the Game identified by the API key configured in the client executing this request.
	 */
	
	var GameGetRequest = exports.GameGetRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(GameGetRequest, _ApiRequest);
	
	
	  /**
	   * @return {PingRequest} An instance of this object.
	   */
	
	  function GameGetRequest() {
	    (0, _classCallCheck3.default)(this, GameGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GameGetRequest).call(this, 'GET', '/v0/game'));
	  }
	
	  return GameGetRequest;
	}(_request.ApiRequest); /*
	                         * Copyright 2016 Heroic Labs
	                         *
	                         * Licensed under the Apache License, Version 2.0 (the "License");
	                         * you may not use this file except in compliance with the License.
	                         * You may obtain a copy of the License at
	                         *
	                         * http://www.apache.org/licenses/LICENSE-2.0
	                         *
	                         * Unless required by applicable law or agreed to in writing, software
	                         * distributed under the License is distributed on an "AS IS" BASIS,
	                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                         * See the License for the specific language governing permissions and
	                         * limitations under the License.
	                         */

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GamerUpdateRequest = exports.GamerGetRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the account and linked profile information for the Gamer identified by the given Session.
	 */
	
	var GamerGetRequest = exports.GamerGetRequest = function (_AccountsRequest) {
	  (0, _inherits3.default)(GamerGetRequest, _AccountsRequest);
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {GamerGetRequest} An instance of this object.
	   */
	
	  function GamerGetRequest(session) {
	    (0, _classCallCheck3.default)(this, GamerGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GamerGetRequest).call(this, 'GET', '/v0/gamer', session));
	  }
	
	  return GamerGetRequest;
	}(_request.AccountsRequest);
	
	/**
	 * Update account metadata, such as nickname.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var GamerUpdateRequest = exports.GamerUpdateRequest = function (_AccountsRequest2) {
	  (0, _inherits3.default)(GamerUpdateRequest, _AccountsRequest2);
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} nickname The nickname to assign to the gamer.
	   * @return {GamerUpdateRequest} An instance of this object.
	   */
	
	  function GamerUpdateRequest(session, nickname) {
	    (0, _classCallCheck3.default)(this, GamerUpdateRequest);
	
	    var body = { 'nickname': nickname };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GamerUpdateRequest).call(this, 'POST', '/v0/gamer', session, body));
	  }
	
	  return GamerUpdateRequest;
	}(_request.AccountsRequest);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StorageDeleteRequest = exports.StoragePutRequest = exports.StorageGetRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the value stored in Cloud Storage under a particular key.
	 */
	
	var StorageGetRequest = exports.StorageGetRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(StorageGetRequest, _ApiRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The key to get the corresponding value for.
	   * @return {StorageGetRequest} An instance of this object.
	   */
	
	  function StorageGetRequest(session, key) {
	    (0, _classCallCheck3.default)(this, StorageGetRequest);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StorageGetRequest).call(this, 'GET', '/v0/gamer/storage/' + key, session));
	
	    _this._responseCallback = function (xhr) {
	      var body = JSON.parse(xhr.responseText);
	      if (body.content_type === 'application/json') {
	        body.value = JSON.parse(body.value);
	      }
	      return body;
	    };
	    return _this;
	  }
	
	  return StorageGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Create or replace the Cloud Storage value for the given key with the given value.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var StoragePutRequest = exports.StoragePutRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(StoragePutRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The key to create or replace the value for.
	   * @param  {Object} data The entity that will be stored under that key.
	   * @return {StoragePutRequest} An instance of this object.
	   */
	
	  function StoragePutRequest(session, key, data) {
	    (0, _classCallCheck3.default)(this, StoragePutRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StoragePutRequest).call(this, 'PUT', '/v0/gamer/storage/' + key, session, data));
	  }
	
	  return StoragePutRequest;
	}(_request.ApiRequest);
	
	/**
	 * Delete the data stored in Cloud Storage under a particular key, if any.
	 */
	
	
	var StorageDeleteRequest = exports.StorageDeleteRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(StorageDeleteRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The key to delete the corresponding value for.
	   * @return {StorageDeleteRequest} An instance of this object.
	   */
	
	  function StorageDeleteRequest(session, key) {
	    (0, _classCallCheck3.default)(this, StorageDeleteRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StorageDeleteRequest).call(this, 'DELETE', '/v0/gamer/storage/' + key, session));
	  }
	
	  return StorageDeleteRequest;
	}(_request.ApiRequest);

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AchievementUpdateRequest = exports.AchievementListRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * List all achievements, along with progress and unlock status if a Sesion is given.
	 */
	
	var AchievementListRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(AchievementListRequest, _ApiRequest);
	
	
	  /**
	   * @return {AchievementListRequest} An instance of this object.
	   */
	
	  function AchievementListRequest() {
	    (0, _classCallCheck3.default)(this, AchievementListRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AchievementListRequest).call(this, 'GET', '/v0/game/achievement'));
	  }
	
	  /**
	   * Set a Session to use with this request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {AchievementListRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(AchievementListRequest, [{
	    key: 'session',
	    value: function session(_session) {
	      if (_session != null && !_session.hasOwnProperty('_token')) {
	        throw new Error('Invalid Session Object');
	      }
	
	      this._session = _session;
	      this._url = '/v0/gamer/achievement';
	      return this;
	    }
	  }]);
	  return AchievementListRequest;
	}(_request.ApiRequest);
	
	/**
	 * Update an achievement's progress for a particular account.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	exports.AchievementListRequest = AchievementListRequest;
	
	var AchievementUpdateRequest = exports.AchievementUpdateRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(AchievementUpdateRequest, _ApiRequest2);
	
	
	  /**
	   * @param {String} achievementId The achievement ID to update.
	   * @param {Integer} count The progress to report towards the given achievement.
	   * @return {AchievementListRequest} An instance of this object.
	   */
	
	  function AchievementUpdateRequest(session, achievementId, count) {
	    (0, _classCallCheck3.default)(this, AchievementUpdateRequest);
	
	    var body = { 'count': count };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AchievementUpdateRequest).call(this, 'POST', '/v0/gamer/achievement/' + achievementId, session, body));
	  }
	
	  return AchievementUpdateRequest;
	}(_request.ApiRequest);

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LeaderboardUpdateRequest = exports.LeaderboardAndRankGetRequest = exports.LeaderboardGetRequest = exports.LeaderboardListRequest = undefined;
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * List all available leaderboards.
	 */
	
	var LeaderboardListRequest = exports.LeaderboardListRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(LeaderboardListRequest, _ApiRequest);
	
	
	  /**
	   * @return {LeaderboardListRequest} An instance of this object.
	   */
	
	  function LeaderboardListRequest() {
	    (0, _classCallCheck3.default)(this, LeaderboardListRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeaderboardListRequest).call(this, 'GET', '/v0/game/leaderboard'));
	  }
	
	  return LeaderboardListRequest;
	}(_request.ApiRequest);
	
	/**
	 * Get a leaderboard, along with some subset of its entries.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var LeaderboardGetRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(LeaderboardGetRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {String} leaderboardId The leaderboard ID to get data for.
	   * @return {LeaderboardGetRequest} An instance of this object.
	   */
	
	  function LeaderboardGetRequest(leaderboardId) {
	    (0, _classCallCheck3.default)(this, LeaderboardGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeaderboardGetRequest).call(this, 'GET', '/v0/game/leaderboard/' + leaderboardId, null, null, {}));
	  }
	
	  /**
	   * Set an offset to shift the 'page' of returned entries start point. Optional.
	   * Default 0 (first page). Must be greater than or equal to 0
	   * @param  {Integer} offset The offset value to use, default 0, must be greater than or equal to 0.
	   * @return {LeaderboardGetRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LeaderboardGetRequest, [{
	    key: 'offset',
	    value: function offset(_offset) {
	      this._queryParams.offset = _offset;
	      return this;
	    }
	
	    /**
	     * Set a 'page' size limit for returned entries. Optional.
	     * Default 50. Must be between 10 and 50, inclusive.
	     * @param  {Integer} limit The limit size to use, default 50, must be between 10 and 50, inclusive.
	     * @return {LeaderboardGetRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'limit',
	    value: function limit(_limit) {
	      this._queryParams.limit = _limit;
	      return this;
	    }
	
	    /**
	     * Indicate that the entries contained in the leaderboard response should include their attached
	     * scoretags, if any are present.
	     * @return {LeaderboardGetRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'withScoretags',
	    value: function withScoretags() {
	      this._queryParams['with_scoretags'] = true;
	      return this;
	    }
	  }]);
	  return LeaderboardGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Get a leaderboard, along with some subset of its entries, and the rank information for the current account.
	 */
	
	
	exports.LeaderboardGetRequest = LeaderboardGetRequest;
	
	var LeaderboardAndRankGetRequest = exports.LeaderboardAndRankGetRequest = function (_LeaderboardGetReques) {
	  (0, _inherits3.default)(LeaderboardAndRankGetRequest, _LeaderboardGetReques);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} leaderboardId The leaderboard ID to get data for.
	   * @return {LeaderboardAndRankGetRequest} An instance of this object.
	   */
	
	  function LeaderboardAndRankGetRequest(session, leaderboardId) {
	    (0, _classCallCheck3.default)(this, LeaderboardAndRankGetRequest);
	
	    var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeaderboardAndRankGetRequest).call(this, leaderboardId));
	
	    _this3._url = '/v0/gamer/leaderboard/' + leaderboardId;
	    _this3._session = session;
	    return _this3;
	  }
	
	  /**
	   * Indicate that the entries 'page' contained in the leaderboard response should be 'scrolled' to
	   * contain the current account. Equivalent to autoOffset(true)
	   * @return {LeaderboardAndRankGetRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LeaderboardAndRankGetRequest, [{
	    key: 'autoOffset',
	    value: function autoOffset() {
	      this._queryParams['auto_offset'] = true;
	      return this;
	    }
	  }]);
	  return LeaderboardAndRankGetRequest;
	}(LeaderboardGetRequest);
	
	/**
	 * Submit a new score to a leaderboard.
	 */
	
	
	var LeaderboardUpdateRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(LeaderboardUpdateRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} leaderboardId The leaderboard ID to update.
	   * @param  {Integer} score The new score to submit.
	   * @return {LeaderboardUpdateRequest} An instance of this object.
	   */
	
	  function LeaderboardUpdateRequest(session, leaderboardId, score) {
	    (0, _classCallCheck3.default)(this, LeaderboardUpdateRequest);
	
	    var body = { 'score': score };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LeaderboardUpdateRequest).call(this, 'POST', '/v0/gamer/leaderboard/' + leaderboardId, session, body));
	  }
	
	  /**
	   * Set a scoretags object that will be serialized and stored alongside the leaderboard entry.
	   * @param  {Object} scoretags The scoretags to store.
	   * @return {LeaderboardUpdateRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(LeaderboardUpdateRequest, [{
	    key: 'scoretags',
	    value: function scoretags(_scoretags) {
	      this._body.scoretags = _scoretags;
	      return this;
	    }
	  }]);
	  return LeaderboardUpdateRequest;
	}(_request.ApiRequest);

	exports.LeaderboardUpdateRequest = LeaderboardUpdateRequest;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MatchMakeRequest = exports.MatchCreateRequest = exports.MatchTurnLeaveRequest = exports.MatchTurnEndRequest = exports.MatchTurnSubmitRequest = exports.MatchTurnGetRequest = exports.MatchGetRequest = exports.MatchesSinceRequest = exports.MatchListRequest = undefined;
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * List all matches the current gamer is part of.
	 */
	
	var MatchListRequest = exports.MatchListRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(MatchListRequest, _ApiRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {MatchListRequest} An instance of this object.
	   */
	
	  function MatchListRequest(session) {
	    (0, _classCallCheck3.default)(this, MatchListRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchListRequest).call(this, 'GET', '/v0/gamer/match', session));
	  }
	
	  return MatchListRequest;
	}(_request.ApiRequest);
	
	/**
	 * Get a list of all matches with turn data newer than a given UTC timestamp.
	 * Only retrieve matches with turns newer than this UTC timestamp in milliseconds.
	 * Includes match metadata and the turns newer than the given time.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var MatchesSinceRequest = exports.MatchesSinceRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(MatchesSinceRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {Integer} timestamp The UTC timestamp in milliseconds to use as a lower time threshold.
	   * @return {MatchesSinceRequest} An instance of this object.
	   */
	
	  function MatchesSinceRequest(session, timestamp) {
	    (0, _classCallCheck3.default)(this, MatchesSinceRequest);
	
	    var queryParam = { 'since': timestamp };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchesSinceRequest).call(this, 'GET', '/v0/gamer/matches/', session, null, queryParam));
	  }
	
	  return MatchesSinceRequest;
	}(_request.ApiRequest);
	
	/**
	 * Get metadata about a specific match.
	 */
	
	
	var MatchGetRequest = exports.MatchGetRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(MatchGetRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} matchId The match ID to retrieve.
	   * @return {MatchGetRequest} An instance of this object.
	   */
	
	  function MatchGetRequest(session, matchId) {
	    (0, _classCallCheck3.default)(this, MatchGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchGetRequest).call(this, 'GET', '/v0/gamer/match/' + matchId, session));
	  }
	
	  return MatchGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Get some or all of the turns for a given match.
	 */
	
	
	var MatchTurnGetRequest = exports.MatchTurnGetRequest = function (_ApiRequest4) {
	  (0, _inherits3.default)(MatchTurnGetRequest, _ApiRequest4);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} matchId The match ID to retrieve.
	   * @param  {Integer} sinceTurnNumber Retrieve all turns newer than this turn number.
	   * @return {MatchTurnGetRequest} An instance of this object.
	   */
	
	  function MatchTurnGetRequest(session, matchId, sinceTurnNumber) {
	    (0, _classCallCheck3.default)(this, MatchTurnGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchTurnGetRequest).call(this, 'GET', '/v0/gamer/match/' + matchId + '/turn/' + sinceTurnNumber, session));
	  }
	
	  return MatchTurnGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Submit a new turn to the specified match.
	 */
	
	
	var MatchTurnSubmitRequest = exports.MatchTurnSubmitRequest = function (_ApiRequest5) {
	  (0, _inherits3.default)(MatchTurnSubmitRequest, _ApiRequest5);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} matchId The match ID to submit.
	   * @param  {Integer} lastSeenTurnNumber The last turn number seen by this client for the match.
	   * @param  {String} nextGamerId The gamer ID of the gamer who must submit a turn next.
	   * @param  {Object} turnData The turn data itself.
	   * @return {MatchTurnSubmitRequest} An instance of this object.
	   */
	
	  function MatchTurnSubmitRequest(session, matchId, lastSeenTurnNumber, nextGamerId, turnData) {
	    (0, _classCallCheck3.default)(this, MatchTurnSubmitRequest);
	
	    var body = {
	      'last_turn': lastSeenTurnNumber,
	      'next_gamer_id': nextGamerId,
	      'data': turnData
	    };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchTurnSubmitRequest).call(this, 'POST', '/v0/gamer/match/' + matchId + '/turn', session, body));
	  }
	
	  return MatchTurnSubmitRequest;
	}(_request.ApiRequest);
	
	/**
	 * End a match.
	 */
	
	
	var MatchTurnEndRequest = exports.MatchTurnEndRequest = function (_ApiRequest6) {
	  (0, _inherits3.default)(MatchTurnEndRequest, _ApiRequest6);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} matchId The match ID to end.
	   * @return {MatchTurnEndRequest} An instance of this object.
	   */
	
	  function MatchTurnEndRequest(session, matchId) {
	    (0, _classCallCheck3.default)(this, MatchTurnEndRequest);
	
	    var body = { 'action': 'end' };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchTurnEndRequest).call(this, 'POST', '/v0/gamer/match/' + matchId, session, body));
	  }
	
	  return MatchTurnEndRequest;
	}(_request.ApiRequest);
	
	/**
	 * Leave a match.
	 */
	
	
	var MatchTurnLeaveRequest = exports.MatchTurnLeaveRequest = function (_ApiRequest7) {
	  (0, _inherits3.default)(MatchTurnLeaveRequest, _ApiRequest7);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} matchId The match ID to leave.
	   * @return {MatchTurnLeaveRequest} An instance of this object.
	   */
	
	  function MatchTurnLeaveRequest(session, matchId) {
	    (0, _classCallCheck3.default)(this, MatchTurnLeaveRequest);
	
	    var body = { 'action': 'end' };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchTurnLeaveRequest).call(this, 'POST', '/v0/gamer/match/' + matchId, session, body));
	  }
	
	  return MatchTurnLeaveRequest;
	}(_request.ApiRequest);
	
	/**
	 * Explicitly create a new match, skipping the matchmaking service.
	 */
	
	
	var MatchCreateRequest = exports.MatchCreateRequest = function (_ApiRequest8) {
	  (0, _inherits3.default)(MatchCreateRequest, _ApiRequest8);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String[]} gamerIds The array of gamer IDs to add to the match, NOT including the current gamer ID.
	   * @return {MatchCreateRequest} An instance of this object.
	   */
	
	  function MatchCreateRequest(session, gamerIds) {
	    (0, _classCallCheck3.default)(this, MatchCreateRequest);
	
	    var body = { 'gamers': gamerIds, 'filters': [] };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchCreateRequest).call(this, 'PUT', '/v0/gamer/match', session, body));
	  }
	
	  /**
	   * Add a new gamer ID as a participant for the match being created.
	   * @param  {String} gamer Gamer ID to add to the match.
	   * @return {MatchCreateRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(MatchCreateRequest, [{
	    key: 'addGamer',
	    value: function addGamer(gamer) {
	      this._body.gamers.push(gamer);
	      return this;
	    }
	
	    /**
	     * Add filter to use to narrow down the pool of potential opponents.
	     * @param  {String} filter Filter string to add to the list of filters.
	     * @return {MatchCreateRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'addFilter',
	    value: function addFilter(filter) {
	      this._body.filters.push(filter);
	      return this;
	    }
	  }]);
	  return MatchCreateRequest;
	}(_request.ApiRequest);
	
	/**
	 * Request a new match through the matchmaking service.
	 */
	
	
	var MatchMakeRequest = exports.MatchMakeRequest = function (_ApiRequest9) {
	  (0, _inherits3.default)(MatchMakeRequest, _ApiRequest9);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {Integer} players Total number of players required in the match.
	   * @return {MatchMakeRequest} An instance of this object.
	   */
	
	  function MatchMakeRequest(session, players) {
	    (0, _classCallCheck3.default)(this, MatchMakeRequest);
	
	    var body = { 'players': players, 'filters': [] };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MatchMakeRequest).call(this, 'POST', '/v0/gamer/match', session, body));
	  }
	
	  /**
	   * Add filter to use to narrow down the pool of potential opponents.
	   * @param  {String} filter Filter string to add to the list of filters.
	   * @return {MatchCreateRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(MatchMakeRequest, [{
	    key: 'addFilter',
	    value: function addFilter(filter) {
	      this._body.filters.push(filter);
	      return this;
	    }
	  }]);
	  return MatchMakeRequest;
	}(_request.ApiRequest);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SharedStorageSearchRequest = exports.SharedStoragePublicDeleteRequest = exports.SharedStoragePublicPatchRequest = exports.SharedStoragePublicPutRequest = exports.SharedStorageGetRequest = undefined;
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the value stored in Shared Storage under a particular key.
	 */
	
	var SharedStorageGetRequest = exports.SharedStorageGetRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(SharedStorageGetRequest, _ApiRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The key to get the corresponding value for.
	   * @return {SharedStorageGetRequest} An instance of this object.
	   */
	
	  function SharedStorageGetRequest(session, key) {
	    (0, _classCallCheck3.default)(this, SharedStorageGetRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SharedStorageGetRequest).call(this, 'GET', '/v0/gamer/shared/' + key, session));
	  }
	
	  return SharedStorageGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Create or replace the Shared Storage 'public' segment value for the given key with the given value.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var SharedStoragePublicPutRequest = exports.SharedStoragePublicPutRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(SharedStoragePublicPutRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The storage key to put.
	   * @param  {Object} data The value to assign to the specified key's 'public' segment.
	   * @return {SharedStoragePutRequest} An instance of this object.
	   */
	
	  function SharedStoragePublicPutRequest(session, key, data) {
	    (0, _classCallCheck3.default)(this, SharedStoragePublicPutRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SharedStoragePublicPutRequest).call(this, 'PUT', '/v0/gamer/shared/' + key + '/public', session, data));
	  }
	
	  return SharedStoragePublicPutRequest;
	}(_request.ApiRequest);
	
	/**
	 * Merge the Shared Storage 'public' segment value for the given key with the given value.
	 */
	
	
	var SharedStoragePublicPatchRequest = exports.SharedStoragePublicPatchRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(SharedStoragePublicPatchRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} key The key to create or replace the value for.
	   * @param  {Object} data The entity that will be merged into that key's 'public' segment.
	   * @return {SharedStoragePatchRequest} An instance of this object.
	   */
	
	  function SharedStoragePublicPatchRequest(session, key, data) {
	    (0, _classCallCheck3.default)(this, SharedStoragePublicPatchRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SharedStoragePublicPatchRequest).call(this, 'PATCH', '/v0/gamer/shared/' + key + '/public', session, data));
	  }
	
	  return SharedStoragePublicPatchRequest;
	}(_request.ApiRequest);
	
	/**
	 * Delete the data stored in Shared Storage under a particular key's 'public' segment, if any.
	 */
	
	
	var SharedStoragePublicDeleteRequest = exports.SharedStoragePublicDeleteRequest = function (_ApiRequest4) {
	  (0, _inherits3.default)(SharedStoragePublicDeleteRequest, _ApiRequest4);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} The key to delete the corresponding 'public' segment value for.
	   * @return {SharedStorageDeleteRequest} An instance of this object.
	   */
	
	  function SharedStoragePublicDeleteRequest(session, key) {
	    (0, _classCallCheck3.default)(this, SharedStoragePublicDeleteRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SharedStoragePublicDeleteRequest).call(this, 'DELETE', '/v0/gamer/shared/' + key + '/public', session));
	  }
	
	  return SharedStoragePublicDeleteRequest;
	}(_request.ApiRequest);
	
	/**
	 * Run a query over Shared Storage data.
	 */
	
	
	var SharedStorageSearchRequest = function (_ApiRequest5) {
	  (0, _inherits3.default)(SharedStorageSearchRequest, _ApiRequest5);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} query The query string to execute.
	   * @return {SharedStorageSearchRequest} An instance of this object.
	   */
	
	  function SharedStorageSearchRequest(session, query) {
	    (0, _classCallCheck3.default)(this, SharedStorageSearchRequest);
	
	    var queryParams = { 'query': query };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SharedStorageSearchRequest).call(this, 'GET', '/v0/gamer/shared/', session, null, queryParams));
	  }
	
	  /**
	   * Restrict the query to run only over Shared Storage keys with the given name. Defaults to no filter,
	   * the query will run over all Shared Storage records.
	   * @param  {String} key The key filter to use.
	   * @return {SharedStorageSearchRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(SharedStorageSearchRequest, [{
	    key: 'filterKey',
	    value: function filterKey(key) {
	      this._queryParams['filter_key'] = key;
	      return this;
	    }
	
	    /**
	     * Define a sort order for the results. Defaults to no sort, natural ordering is used.
	     * @param  {String} key The sort order definition to use.
	     * @return {SharedStorageSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'sort',
	    value: function sort(key) {
	      this._queryParams.sort = key;
	      return this;
	    }
	
	    /**
	     * Offset query results by the given number of entries. Useful for paginating query results.
	     * Default 0 (first page). Must be greater than or equal to 0.
	     * @param  {Integer} offset The query result offset to use.
	     * @return {SharedStorageSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'offset',
	    value: function offset(_offset) {
	      this._queryParams.offset = _offset;
	      return this;
	    }
	
	    /**
	     * Limit the number of results returned in a single response. Must be between 0 and 100, inclusive. Default 10.
	     * Using a limit of 0 will return no results, but can be useful for aggregation or similar scenarios
	     * where the result count is useful by itself.
	     * @param  {Integer} limit The maximum number of results to return in a response.
	     * @return {SharedStorageSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'limit',
	    value: function limit(_limit) {
	      this._queryParams.limit = _limit;
	      return this;
	    }
	  }]);
	  return SharedStorageSearchRequest;
	}(_request.ApiRequest);

	exports.SharedStorageSearchRequest = SharedStorageSearchRequest;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ExecuteScriptRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Execute a specified Script in the service.
	 */
	
	var ExecuteScriptRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(ExecuteScriptRequest, _ApiRequest);
	
	
	  /**
	   * @param  {String} scriptId The ID of the script to execute.
	   * @return {ExecuteScriptRequest} An instance of this object.
	   */
	
	  function ExecuteScriptRequest(scriptId) {
	    (0, _classCallCheck3.default)(this, ExecuteScriptRequest);
	
	    var url = '/v0/game/script/' + scriptId;
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ExecuteScriptRequest).call(this, 'POST', url));
	  }
	
	  /**
	   * Set a Session to use with this request.
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {ExecuteScriptRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(ExecuteScriptRequest, [{
	    key: 'session',
	    value: function session(_session) {
	      this._session = _session;
	      return this;
	    }
	
	    /**
	     * Set the script input. Input is empty by default.
	     * @param  {Object} data The object to pass to the script as input.
	     * @return {ExecuteScriptRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'data',
	    value: function data(_data) {
	      this._body = _data;
	      return this;
	    }
	  }]);
	  return ExecuteScriptRequest;
	}(_request.ApiRequest); /*
	                         * Copyright 2016 Heroic Labs
	                         *
	                         * Licensed under the Apache License, Version 2.0 (the "License");
	                         * you may not use this file except in compliance with the License.
	                         * You may obtain a copy of the License at
	                         *
	                         * http://www.apache.org/licenses/LICENSE-2.0
	                         *
	                         * Unless required by applicable law or agreed to in writing, software
	                         * distributed under the License is distributed on an "AS IS" BASIS,
	                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                         * See the License for the specific language governing permissions and
	                         * limitations under the License.
	                         */

	exports.ExecuteScriptRequest = ExecuteScriptRequest;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MessageDeleteRequest = exports.MessageReadRequest = exports.MessageListRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * List all or some subset of messages in the current account's mailbox.
	 */
	
	var MessageListRequest = exports.MessageListRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(MessageListRequest, _ApiRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @return {MessageListRequest} An instance of this object.
	   */
	
	  function MessageListRequest(session) {
	    (0, _classCallCheck3.default)(this, MessageListRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageListRequest).call(this, 'GET', '/v0/gamer/message', session, null, {}));
	  }
	
	  /**
	   * Only return messages created after this UTC timestamp in milliseconds.
	   * @param  {Integer} timestamp A UTC timestamp in milliseconds, messages created before this won't be returned.
	   * @return {MessageListRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(MessageListRequest, [{
	    key: 'since',
	    value: function since(timestamp) {
	      this._queryParams.since = timestamp;
	      return this;
	    }
	
	    /**
	     * Indicate that the messages returned should include their respective body data.
	     * @return {MessageListRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'withBody',
	    value: function withBody() {
	      this._queryParams['with_body'] = true;
	      return this;
	    }
	  }]);
	  return MessageListRequest;
	}(_request.ApiRequest);
	
	/**
	 * Retrieve a single message from the account's mailbox, and mark it as read if it was unread.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var MessageReadRequest = exports.MessageReadRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(MessageReadRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} messageId The message ID to get and mark as read.
	   * @return {MessageReadRequest} An instance of this object.
	   */
	
	  function MessageReadRequest(session, messageId) {
	    (0, _classCallCheck3.default)(this, MessageReadRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageReadRequest).call(this, 'GET', '/v0/gamer/message/' + messageId, session, null, {}));
	  }
	
	  /**
	   * Indicate that the message returned should include its body data.
	   * @return {MessageReadRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(MessageReadRequest, [{
	    key: 'withNoBody',
	    value: function withNoBody() {
	      this._queryParams['with_body'] = false;
	      return this;
	    }
	  }]);
	  return MessageReadRequest;
	}(_request.ApiRequest);
	
	/**
	 * Delete a single message from the account's mailbox.
	 */
	
	
	var MessageDeleteRequest = exports.MessageDeleteRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(MessageDeleteRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} messageId The message ID to delete.
	   * @return {MessageDeleteRequest} An instance of this object.
	   */
	
	  function MessageDeleteRequest(session, messageId) {
	    (0, _classCallCheck3.default)(this, MessageDeleteRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MessageDeleteRequest).call(this, 'DELETE', '/v0/gamer/message/' + messageId, session));
	  }
	
	  return MessageDeleteRequest;
	}(_request.ApiRequest);

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DatastoreSearchRequest = exports.DatastoreDeleteRequest = exports.DatastoreUpdateRequest = exports.DatastorePutRequest = exports.DatastoreGetRequest = undefined;
	
	var _getPrototypeOf = __webpack_require__(267);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(261);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(262);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(270);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(281);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _request = __webpack_require__(287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the value stored in Shared Storage under a particular key.
	 */
	
	var DatastoreGetRequest = function (_ApiRequest) {
	  (0, _inherits3.default)(DatastoreGetRequest, _ApiRequest);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} table The name of the table to read from.
	   * @param  {String} key The key to get the corresponding value for.
	   * @return {DatastoreGetRequest} An instance of this object.
	   */
	
	  function DatastoreGetRequest(session, table, key) {
	    (0, _classCallCheck3.default)(this, DatastoreGetRequest);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatastoreGetRequest).call(this, 'GET', '/v0/datastore/' + table + '/' + key, session));
	
	    _this._table = table;
	    _this._key = key;
	    return _this;
	  }
	
	  /**
	   * Sets the key owner.
	   * @param  {Integer} owner The owner to retrieve the key for.
	   * Must be a Gamer ID, or the value "me" representing the current user.
	   * @return {DatastoreSearchRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(DatastoreGetRequest, [{
	    key: 'owner',
	    value: function owner(_owner) {
	      this._url = '/v0/datastore/' + this._table + '/' + this._key + '/' + _owner;
	      return this;
	    }
	  }]);
	  return DatastoreGetRequest;
	}(_request.ApiRequest);
	
	/**
	 * Set the value of a specific key in the given Datastore table, where the key owner is the gamer making the request.
	 * If the key does not exist, it will be created.
	 */
	/*
	 * Copyright 2016 Heroic Labs
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	exports.DatastoreGetRequest = DatastoreGetRequest;
	
	var DatastorePutRequest = exports.DatastorePutRequest = function (_ApiRequest2) {
	  (0, _inherits3.default)(DatastorePutRequest, _ApiRequest2);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} table The name of the table to write to.
	   * @param  {String} key The name of the key to write to
	   * @param  {Object} data Any existing data for the specified key will be completely replaced.
	   * @return {DatastorePutRequest} An instance of this object.
	   */
	
	  function DatastorePutRequest(session, table, key, data) {
	    (0, _classCallCheck3.default)(this, DatastorePutRequest);
	
	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatastorePutRequest).call(this, 'PUT', '/v0/datastore/' + table + '/' + key, session, {}));
	
	    _this2.body(data);
	    return _this2;
	  }
	
	  /**
	   * Set the value of a specific key in the given Datastore table, where the key owner is the gamer making the request.
	   * If the key does not exist, it will be created.
	   * @param  {Object} data Data to store.
	   * @return {DatastorePutRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(DatastorePutRequest, [{
	    key: 'body',
	    value: function body(data) {
	      this._body.data = data;
	      return this;
	    }
	
	    /**
	     * Permissions for this object. The permissions object may be omitted.
	     * The write operation will then use default permissions set for the table for newly created keys,
	     * or preserve existing permissions set on the key for updated keys.
	     * @param  {number} read Read permission. Valid values are `0`, `1` and `2`.
	     * @param  {number} write Write permission. Valid values are `0` and `1`.
	     * @return {DatastorePutRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'permissions',
	    value: function permissions(read, write) {
	      this._body.permissions = {
	        'read': read,
	        'write': write
	      };
	      return this;
	    }
	  }]);
	  return DatastorePutRequest;
	}(_request.ApiRequest);
	
	/**
	 * Update the value of a specific key in the given Datastore table, where the key owner is the gamer making the request.
	 * If the key does not exist, it will be created.
	 * Any existing data for the specified key will be merged with the new data.
	 * Fields specified in the new input will replace their old values, if any.
	 * Fields present in the existing data but missing in the new input will remain unchanged.
	 */
	
	
	var DatastoreUpdateRequest = exports.DatastoreUpdateRequest = function (_ApiRequest3) {
	  (0, _inherits3.default)(DatastoreUpdateRequest, _ApiRequest3);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} table The name of the table to write to.
	   * @param  {String} key The name of the key to write to
	   * @param  {Object} data Any existing data for the specified key will be completely replaced.
	   * @return {DatastorePutRequest} An instance of this object.
	   */
	
	  function DatastoreUpdateRequest(session, table, key, data) {
	    (0, _classCallCheck3.default)(this, DatastoreUpdateRequest);
	
	    var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatastoreUpdateRequest).call(this, 'PATCH', '/v0/datastore/' + table + '/' + key, session, {}));
	
	    _this3.body(data);
	    return _this3;
	  }
	
	  /**
	   * Set the value of a specific key in the given Datastore table, where the key owner is the gamer making the request.
	   * If the key does not exist, it will be created.
	   * @param  {Object} data Data to store.
	   * @return {DatastoreUpdateRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(DatastoreUpdateRequest, [{
	    key: 'body',
	    value: function body(data) {
	      this._body.data = data;
	      return this;
	    }
	
	    /**
	     * Permissions for this object. The permissions object may be omitted.
	     * The write operation will then use default permissions set for the table for newly created keys,
	     * or preserve existing permissions set on the key for updated keys.
	     * @param  {number} read Read permission. Valid values are `0`, `1` and `2`.
	     * @param  {number} write Write permission. Valid values are `0` and `1`.
	     * @return {DatastoreUpdateRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'permissions',
	    value: function permissions(read, write) {
	      this._body.permissions = {
	        'read': read,
	        'write': write
	      };
	      return this;
	    }
	  }]);
	  return DatastoreUpdateRequest;
	}(_request.ApiRequest);
	
	/**
	 * Delete a specific key from the given Datastore table,
	 * where the owner of the key is the gamer account making the request.
	 */
	
	
	var DatastoreDeleteRequest = exports.DatastoreDeleteRequest = function (_ApiRequest4) {
	  (0, _inherits3.default)(DatastoreDeleteRequest, _ApiRequest4);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} table The name of the table to delete from.
	   * @param  {String} key The name of the key to write to
	   * @return {DatastoreDeleteRequest} An instance of this object.
	   */
	
	  function DatastoreDeleteRequest(session, table, key) {
	    (0, _classCallCheck3.default)(this, DatastoreDeleteRequest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatastoreDeleteRequest).call(this, 'DELETE', '/v0/datastore/' + table + '/' + key, session));
	  }
	
	  return DatastoreDeleteRequest;
	}(_request.ApiRequest);
	
	/**
	 * Perform a search query on the data in a given Datastore table, using Lucene-like query syntax.
	 */
	
	
	var DatastoreSearchRequest = function (_ApiRequest5) {
	  (0, _inherits3.default)(DatastoreSearchRequest, _ApiRequest5);
	
	
	  /**
	   * @param  {Session} session Session identifying the account making this request.
	   * @param  {String} table The name of the table to search from.
	   * @param  {String} query The query string to execute.
	   * @return {DatastoreSearchRequest} An instance of this object.
	   */
	
	  function DatastoreSearchRequest(session, table, query) {
	    (0, _classCallCheck3.default)(this, DatastoreSearchRequest);
	
	    var queryParams = { 'query': query };
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DatastoreSearchRequest).call(this, 'GET', '/v0/datastore/' + table, session, null, queryParams));
	  }
	
	  /**
	   * Restrict the query to run only over Shared Storage keys with the given name. Defaults to no filter,
	   * the query will run over all Shared Storage records.
	   * @param  {String} key The key filter to use.
	   * @return {DatastoreSearchRequest} Current instance of this object, can be used to chain function calls.
	   */
	
	
	  (0, _createClass3.default)(DatastoreSearchRequest, [{
	    key: 'filterKey',
	    value: function filterKey(key) {
	      this._queryParams['filter_key'] = key;
	      return this;
	    }
	
	    /**
	     * Define a sort order for the results. Defaults to no sort, natural ordering is used.
	     * @param  {String} key The sort order definition to use.
	     * @return {DatastoreSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'sort',
	    value: function sort(key) {
	      this._queryParams.sort = key;
	      return this;
	    }
	
	    /**
	     * Offset query results by the given number of entries. Useful for paginating query results.
	     * Default 0 (first page). Must be greater than or equal to 0.
	     * @param  {Integer} offset The query result offset to use.
	     * @return {DatastoreSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'offset',
	    value: function offset(_offset) {
	      this._queryParams.offset = _offset;
	      return this;
	    }
	
	    /**
	     * Limit the number of results returned in a single response. Must be between 0 and 100, inclusive. Default 10.
	     * Using a limit of 0 will return no results, but can be useful for aggregation or similar scenarios
	     * where the result count is useful by itself.
	     * @param  {Integer} limit The maximum number of results to return in a response.
	     * @return {DatastoreSearchRequest} Current instance of this object, can be used to chain function calls.
	     */
	
	  }, {
	    key: 'limit',
	    value: function limit(_limit) {
	      this._queryParams.limit = _limit;
	      return this;
	    }
	  }]);
	  return DatastoreSearchRequest;
	}(_request.ApiRequest);

	exports.DatastoreSearchRequest = DatastoreSearchRequest;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=heroiclabs-sdk.js.map