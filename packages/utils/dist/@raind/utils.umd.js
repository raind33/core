(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@raind/utils"] = {}));
})(this, (function (exports) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var symbol$6 = {exports: {}};

	var symbol$5 = {exports: {}};

	var concat$2 = {exports: {}};

	var isPrototypeOf$6 = require('../../internals/object-is-prototype-of');

	var method$4 = require('../array/virtual/concat');

	var ArrayPrototype$3 = Array.prototype;

	module.exports = function (it) {
	  var own = _concatInstanceProperty(it);

	  return it === ArrayPrototype$3 || isPrototypeOf$6(ArrayPrototype$3, it) && own === _concatInstanceProperty(ArrayPrototype$3) ? method$4 : own;
	};

	var concat$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$9 = /*@__PURE__*/getAugmentedNamespace(concat$1);

	var parent$i = require$$0$9;

	var concat = parent$i;

	(function (module) {
		module.exports = concat;
	} (concat$2));

	var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$2.exports);

	var $$b = require('../internals/export');

	var fails$9 = require('../internals/fails');

	var isArray$6 = require('../internals/is-array');

	var isObject$4 = require('../internals/is-object');

	var toObject$3 = require('../internals/to-object');

	var lengthOfArrayLike = require('../internals/length-of-array-like');

	var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');

	var createProperty = require('../internals/create-property');

	var arraySpeciesCreate = require('../internals/array-species-create');

	var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

	var wellKnownSymbol$9 = require('../internals/well-known-symbol');

	var V8_VERSION$1 = require('../internals/engine-v8-version');

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$9('isConcatSpreadable'); // We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679

	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$9(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return _concatInstanceProperty(array).call(array)[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$4(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};

	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species

	$$b({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$2
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$3(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;

	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];

	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike(E);
	        doesNotExceedSafeInteger(n + len);

	        for (k = 0; k < len; k++, n++) {
	          if (k in E) createProperty(A, n, E[k]);
	        }
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	var forEach$1 = {exports: {}};

	require('../../modules/web.dom-collections.iterator');

	var classof$7 = require('../../internals/classof');

	var hasOwn$a = require('../../internals/has-own-property');

	var isPrototypeOf$5 = require('../../internals/object-is-prototype-of');

	var method$3 = require('../array/virtual/for-each');

	var ArrayPrototype$2 = Array.prototype;
	var DOMIterables$2 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	module.exports = function (it) {
	  var own = _forEachInstanceProperty(it);

	  return it === ArrayPrototype$2 || isPrototypeOf$5(ArrayPrototype$2, it) && own === _forEachInstanceProperty(ArrayPrototype$2) || hasOwn$a(DOMIterables$2, classof$7(it)) ? method$3 : own;
	};

	var forEach = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(forEach);

	(function (module) {
		module.exports = require$$0$8;
	} (forEach$1));

	var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach$1.exports);

	var $$a = require('../internals/export');

	var global$c = require('../internals/global');

	var call$7 = require('../internals/function-call');

	var uncurryThis$a = require('../internals/function-uncurry-this');

	var IS_PURE$1 = require('../internals/is-pure');

	var DESCRIPTORS$5 = require('../internals/descriptors');

	var NATIVE_SYMBOL$5 = require('../internals/symbol-constructor-detection');

	var fails$8 = require('../internals/fails');

	var hasOwn$9 = require('../internals/has-own-property');

	var isPrototypeOf$4 = require('../internals/object-is-prototype-of');

	var anObject$2 = require('../internals/an-object');

	var toIndexedObject$4 = require('../internals/to-indexed-object');

	var toPropertyKey$2 = require('../internals/to-property-key');

	var $toString = require('../internals/to-string');

	var createPropertyDescriptor$3 = require('../internals/create-property-descriptor');

	var nativeObjectCreate = require('../internals/object-create');

	var objectKeys = require('../internals/object-keys');

	var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');

	var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');

	var getOwnPropertySymbolsModule$1 = require('../internals/object-get-own-property-symbols');

	var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');

	var definePropertyModule$1 = require('../internals/object-define-property');

	var definePropertiesModule = require('../internals/object-define-properties');

	var propertyIsEnumerableModule$1 = require('../internals/object-property-is-enumerable');

	var defineBuiltIn$3 = require('../internals/define-built-in');

	var shared$6 = require('../internals/shared');

	var sharedKey$2 = require('../internals/shared-key');

	var hiddenKeys = require('../internals/hidden-keys');

	var uid$3 = require('../internals/uid');

	var wellKnownSymbol$8 = require('../internals/well-known-symbol');

	var wrappedWellKnownSymbolModule$1 = require('../internals/well-known-symbol-wrapped');

	var defineWellKnownSymbol$l = require('../internals/well-known-symbol-define');

	var defineSymbolToPrimitive$1 = require('../internals/symbol-define-to-primitive');

	var setToStringTag$4 = require('../internals/set-to-string-tag');

	var InternalStateModule$2 = require('../internals/internal-state');

	var $forEach = _forEachInstanceProperty(require('../internals/array-iteration'));

	var HIDDEN = sharedKey$2('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$c.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$2 = global$c.TypeError;
	var QObject = global$c.QObject;
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push = uncurryThis$a([].push);
	var AllSymbols = shared$6('symbols');
	var ObjectPrototypeSymbols = shared$6('op-symbols');
	var WellKnownSymbolsStore$1 = shared$6('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

	var setSymbolDescriptor = DESCRIPTORS$5 && fails$8(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function get() {
	      return nativeDefineProperty(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);

	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function wrap(tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$5) symbol.description = description;
	  return symbol;
	};

	var $defineProperty$1 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
	  anObject$2(O);
	  var key = toPropertyKey$2(P);
	  anObject$2(Attributes);

	  if (hasOwn$9(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$9(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$9(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$3(0, false)
	      });
	    }

	    return setSymbolDescriptor(O, key, Attributes);
	  }

	  return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  var _context;

	  anObject$2(O);
	  var properties = toIndexedObject$4(Properties);

	  var keys = _concatInstanceProperty(_context = objectKeys(properties)).call(_context, $getOwnPropertySymbols(properties));

	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS$5 || call$7($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$2(V);
	  var enumerable = call$7(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn$9(AllSymbols, P) && !hasOwn$9(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$9(this, P) || !hasOwn$9(AllSymbols, P) || hasOwn$9(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$4(O);
	  var key = toPropertyKey$2(P);
	  if (it === ObjectPrototype && hasOwn$9(AllSymbols, key) && !hasOwn$9(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

	  if (descriptor && hasOwn$9(AllSymbols, key) && !(hasOwn$9(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!hasOwn$9(AllSymbols, key) && !hasOwn$9(hiddenKeys, key)) push(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwn$9(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$9(ObjectPrototype, key))) {
	      push(result, AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor


	if (!NATIVE_SYMBOL$5) {
	  $Symbol = function _Symbol() {
	    if (isPrototypeOf$4(SymbolPrototype, this)) throw TypeError$2('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$3(description);

	    var setter = function setter(value) {
	      if (this === ObjectPrototype) call$7(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$9(this, HIDDEN) && hasOwn$9(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
	    };

	    if (DESCRIPTORS$5 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];
	  defineBuiltIn$3(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });
	  defineBuiltIn$3($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$3(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$1.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule$1.f = function (name) {
	    return wrap(wellKnownSymbol$8(name), name);
	  };

	  if (DESCRIPTORS$5) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });

	    if (!IS_PURE$1) {
	      defineBuiltIn$3(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
	        unsafe: true
	      });
	    }
	  }
	}

	$$a({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL$5,
	  sham: !NATIVE_SYMBOL$5
	}, {
	  Symbol: $Symbol
	});
	$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$l(name);
	});
	$$a({
	  target: SYMBOL,
	  stat: true,
	  forced: !NATIVE_SYMBOL$5
	}, {
	  useSetter: function useSetter() {
	    USE_SETTER = true;
	  },
	  useSimple: function useSimple() {
	    USE_SETTER = false;
	  }
	});
	$$a({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$5,
	  sham: !DESCRIPTORS$5
	}, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty$1,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
	});
	$$a({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$5
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	}); // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

	defineSymbolToPrimitive$1(); // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

	setToStringTag$4($Symbol, SYMBOL);
	hiddenKeys[HIDDEN] = true;

	var bind$4 = {exports: {}};

	var isPrototypeOf$3 = require('../../internals/object-is-prototype-of');

	var method$2 = require('../function/virtual/bind');

	var FunctionPrototype$2 = Function.prototype;

	module.exports = function (it) {
	  var own = _bindInstanceProperty(it);

	  return it === FunctionPrototype$2 || isPrototypeOf$3(FunctionPrototype$2, it) && own === _bindInstanceProperty(FunctionPrototype$2) ? method$2 : own;
	};

	var bind$3 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(bind$3);

	var parent$h = require$$0$7;

	var bind$2 = parent$h;

	(function (module) {
		module.exports = bind$2;
	} (bind$4));

	var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$4.exports);

	var global$b = require('../internals/global');

	var apply$5 = require('../internals/function-apply');

	var uncurryThis$9 = require('../internals/function-uncurry-this');

	var isCallable$8 = require('../internals/is-callable');

	var getOwnPropertyDescriptor$4 = require('../internals/object-get-own-property-descriptor').f;

	var isForced = require('../internals/is-forced');

	var path$b = require('../internals/path');

	var bind$1 = require('../internals/function-bind-context');

	var createNonEnumerableProperty$6 = require('../internals/create-non-enumerable-property');

	var hasOwn$8 = require('../internals/has-own-property');

	var wrapConstructor = function wrapConstructor(NativeConstructor) {
	  var Wrapper = function Wrapper(a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0:
	          return new NativeConstructor();

	        case 1:
	          return new NativeConstructor(a);

	        case 2:
	          return new NativeConstructor(a, b);
	      }

	      return new NativeConstructor(a, b, c);
	    }

	    return apply$5(NativeConstructor, this, arguments);
	  };

	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/


	module.exports = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$b : STATIC ? global$b[TARGET] : (global$b[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$b : path$b[TARGET] || createNonEnumerableProperty$6(path$b, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

	    USE_NATIVE = !FORCED && nativeSource && hasOwn$8(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$4(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key]; // export native or implementation

	    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
	    if (USE_NATIVE && _typeof(targetProperty) == _typeof(sourceProperty)) continue; // bind timers to global for call from export context

	    if (_bindInstanceProperty(options) && USE_NATIVE) resultProperty = bind$1(sourceProperty, global$b); // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
	    else if (PROTO && isCallable$8(sourceProperty)) resultProperty = uncurryThis$9(sourceProperty); // default case
	    else resultProperty = sourceProperty; // add a flag to not completely full polyfills

	    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$6(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$6(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

	      if (!hasOwn$8(path$b, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$6(path$b, VIRTUAL_PROTOTYPE, {});
	      } // export virtual prototype methods


	      createNonEnumerableProperty$6(path$b[VIRTUAL_PROTOTYPE], key, sourceProperty); // export real prototype methods

	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$6(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var _export = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(_export);

	var path$a = {};

	var globalThis$5 = {exports: {}};

	var globalThis$4 = {exports: {}};

	var $$9 = require$$0$6;

	var global$a = require$$0$5; // `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis


	$$9({
	  global: true,
	  forced: global$a.globalThis !== global$a
	}, {
	  globalThis: global$a
	});

	var globalThis$3 = {exports: {}};

	(function (module) {
		module.exports = require$$0$5;
	} (globalThis$3));

	var parent$g = globalThis$3.exports;

	var globalThis$2 = parent$g;

	var parent$f = globalThis$2;

	var globalThis$1 = parent$f;

	// TODO: remove from `core-js@4`


	var parent$e = globalThis$1;

	var globalThis = parent$e;

	(function (module) {
		module.exports = globalThis;
	} (globalThis$4));

	(function (module) {
		module.exports = globalThis$4.exports;
	} (globalThis$5));

	var _globalThis = /*@__PURE__*/getDefaultExportFromCjs(globalThis$5.exports);

	var check = function check(it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	module.exports = // eslint-disable-next-line es/no-global-this -- safe
	check((typeof _globalThis === "undefined" ? "undefined" : _typeof(_globalThis)) == 'object' && _globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
	check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

	var global$9 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(global$9);

	var documentAll$2 = (typeof document === "undefined" ? "undefined" : _typeof(document)) == 'object' && document.all; // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot

	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
	module.exports = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var documentAll$3 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(documentAll$3);

	var $documentAll$1 = require$$0$4;

	var documentAll$1 = $documentAll$1.all; // `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable

	var isCallable$7 = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var path$9 = path$a;

	var global$8 = require$$0$5;

	var isCallable$6 = isCallable$7;

	var aFunction = function aFunction(variable) {
	  return isCallable$6(variable) ? variable : undefined;
	};

	var getBuiltIn$5 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$9[namespace]) || aFunction(global$8[namespace]) : path$9[namespace] && path$9[namespace][method] || global$8[namespace] && global$8[namespace][method];
	};

	var NATIVE_BIND$2 = require('../internals/function-bind-native');

	var FunctionPrototype$1 = Function.prototype;

	var bind = _bindInstanceProperty(FunctionPrototype$1);

	var call$6 = FunctionPrototype$1.call;

	var uncurryThis$8 = NATIVE_BIND$2 && _bindInstanceProperty(bind).call(bind, call$6, call$6);

	module.exports = NATIVE_BIND$2 ? function (fn) {
	  return fn && uncurryThis$8(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$6.apply(fn, arguments);
	  };
	};

	var functionUncurryThis = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$4 = /*@__PURE__*/getAugmentedNamespace(functionUncurryThis);

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$1 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined = isNullOrUndefined$1;

	var $TypeError$1 = TypeError; // `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible

	var requireObjectCoercible$3 = function (it) {
	  if (isNullOrUndefined(it)) throw $TypeError$1("Can't call method on " + it);
	  return it;
	};

	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var $Object$3 = Object; // `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject

	var toObject$2 = function (argument) {
	  return $Object$3(requireObjectCoercible$2(argument));
	};

	var uncurryThis$7 = require$$4;

	var toObject$1 = toObject$2;

	var hasOwnProperty = uncurryThis$7({}.hasOwnProperty); // `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe

	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$1(it), key);
	};

	var shared$5 = {exports: {}};

	var defineProperty$7 = {exports: {}};

	var defineProperty$6 = {exports: {}};

	var $$8 = require('../internals/export');

	var DESCRIPTORS$4 = require('../internals/descriptors');

	var defineProperty$5 = require('../internals/object-define-property').f; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es/no-object-defineproperty -- safe


	$$8({
	  target: 'Object',
	  stat: true,
	  forced: _Object$defineProperty !== defineProperty$5,
	  sham: !DESCRIPTORS$4
	}, {
	  defineProperty: defineProperty$5
	});

	var path$8 = path$a;

	var Object$2 = path$8.Object;

	var defineProperty$4 = defineProperty$6.exports = function defineProperty(it, key, desc) {
	  return Object$2.defineProperty(it, key, desc);
	};

	if (Object$2.defineProperty.sham) defineProperty$4.sham = true;

	var parent$d = defineProperty$6.exports;

	var defineProperty$3 = parent$d;

	(function (module) {
		module.exports = defineProperty$3;
	} (defineProperty$7));

	var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$7.exports);

	var global$7 = require('../internals/global'); // eslint-disable-next-line es/no-object-defineproperty -- safe


	var defineProperty$2 = _Object$defineProperty;

	module.exports = function (key, value) {
	  try {
	    defineProperty$2(global$7, key, {
	      value: value,
	      configurable: true,
	      writable: true
	    });
	  } catch (error) {
	    global$7[key] = value;
	  }

	  return value;
	};

	var defineGlobalProperty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(defineGlobalProperty$1);

	var global$6 = require$$0$5;

	var defineGlobalProperty = require$$1$2;

	var SHARED = '__core-js_shared__';
	var store$2 = global$6[SHARED] || defineGlobalProperty(SHARED, {});
	var sharedStore = store$2;

	var store$1 = sharedStore;

	(shared$5.exports = function (key, value) {
	  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.25.3',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var uncurryThis$6 = require$$4;

	var id = 0;
	var postfix = Math.random();
	var toString$6 = uncurryThis$6(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
	};

	var getOwnPropertySymbols$2 = {exports: {}};

	var path$7 = path$a;

	var getOwnPropertySymbols$1 = path$7.Object.getOwnPropertySymbols;

	var parent$c = getOwnPropertySymbols$1;

	var getOwnPropertySymbols = parent$c;

	(function (module) {
		module.exports = getOwnPropertySymbols;
	} (getOwnPropertySymbols$2));

	var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols$2.exports);

	var symbol$4 = {exports: {}};

	(function (module) {
		module.exports = symbol$2;
	} (symbol$4));

	var _Symbol$2 = /*@__PURE__*/getDefaultExportFromCjs(symbol$4.exports);

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION = require('../internals/engine-v8-version');

	var fails$7 = require('../internals/fails'); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


	module.exports = !!_Object$getOwnPropertySymbols && !fails$7(function () {
	  var symbol = _Symbol$2(); // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances


	  return !String(symbol) || !(Object(symbol) instanceof _Symbol$2) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  !_Symbol$2.sham && V8_VERSION && V8_VERSION < 41;
	});

	var symbolConstructorDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(symbolConstructorDetection);

	var iterator$6 = {exports: {}};

	var fails$6 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var slice$2 = {exports: {}};

	var isPrototypeOf$2 = require('../../internals/object-is-prototype-of');

	var method$1 = require('../array/virtual/slice');

	var ArrayPrototype$1 = Array.prototype;

	module.exports = function (it) {
	  var own = _sliceInstanceProperty(it);

	  return it === ArrayPrototype$1 || isPrototypeOf$2(ArrayPrototype$1, it) && own === _sliceInstanceProperty(ArrayPrototype$1) ? method$1 : own;
	};

	var slice$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(slice$1);

	var parent$b = require$$0$3;

	var slice = parent$b;

	(function (module) {
		module.exports = slice;
	} (slice$2));

	var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice$2.exports);

	var uncurryThis$5 = require('../internals/function-uncurry-this');

	var toString$5 = uncurryThis$5({}.toString);
	var stringSlice$1 = uncurryThis$5(_sliceInstanceProperty(''));

	module.exports = function (it) {
	  return stringSlice$1(toString$5(it), 8, -1);
	};

	var classofRaw$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(classofRaw$1);

	var uncurryThis$4 = require$$4;

	var fails$5 = fails$6;

	var classof$6 = require$$2$1;

	var $Object$2 = Object;
	var split = uncurryThis$4(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails$5(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$2('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$6(it) == 'String' ? split(it, '') : $Object$2(it);
	} : $Object$2;

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = indexedObject;

	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var toIndexedObject$3 = function (it) {
	  return IndexedObject(requireObjectCoercible$1(it));
	};

	var iterators = {};

	var global$5 = require$$0$5;

	var isCallable$5 = isCallable$7;

	var WeakMap$1 = global$5.WeakMap;
	var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var isCallable$4 = require('../internals/is-callable');

	var $documentAll = require('../internals/document-all');

	var documentAll = $documentAll.all;
	module.exports = $documentAll.IS_HTMLDDA ? function (it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$4(it) || it === documentAll;
	} : function (it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$4(it);
	};

	var isObject$3 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$8$1 = /*@__PURE__*/getAugmentedNamespace(isObject$3);

	var fails$4 = require('../internals/fails'); // Detect IE8's incomplete defineProperty implementation


	module.exports = !fails$4(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return _Object$defineProperty({}, 1, {
	    get: function get() {
	      return 7;
	    }
	  })[1] != 7;
	});

	var descriptors = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$8 = /*@__PURE__*/getAugmentedNamespace(descriptors);

	var getOwnPropertyDescriptor$3 = {exports: {}};

	var getOwnPropertyDescriptor$2 = {exports: {}};

	var DESCRIPTORS$3 = require('../internals/descriptors');

	var call$5 = require('../internals/function-call');

	var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');

	var createPropertyDescriptor$2 = require('../internals/create-property-descriptor');

	var toIndexedObject$2 = require('../internals/to-indexed-object');

	var toPropertyKey$1 = require('../internals/to-property-key');

	var hasOwn$7 = require('../internals/has-own-property');

	var IE8_DOM_DEFINE$1 = require('../internals/ie8-dom-define'); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


	var $getOwnPropertyDescriptor$1 = _Object$getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	exports.f = DESCRIPTORS$3 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (hasOwn$7(O, P)) return createPropertyDescriptor$2(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertyDescriptor);

	var $$7 = require$$0$6;

	var fails$3 = fails$6;

	var toIndexedObject$1 = toIndexedObject$3;

	var nativeGetOwnPropertyDescriptor = require$$3$2.f;

	var DESCRIPTORS$2 = require$$8;

	var FAILS_ON_PRIMITIVES = fails$3(function () {
	  nativeGetOwnPropertyDescriptor(1);
	});
	var FORCED$1 = !DESCRIPTORS$2 || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	$$7({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$1,
	  sham: !DESCRIPTORS$2
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
	  }
	});

	var path$6 = path$a;

	var Object$1 = path$6.Object;

	var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object$1.getOwnPropertyDescriptor(it, key);
	};

	if (Object$1.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$1.sham = true;

	var parent$a = getOwnPropertyDescriptor$2.exports;

	var getOwnPropertyDescriptor = parent$a;

	(function (module) {
		module.exports = getOwnPropertyDescriptor;
	} (getOwnPropertyDescriptor$3));

	var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor$3.exports);

	var DESCRIPTORS$1 = require('../internals/descriptors');

	var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

	var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');

	var anObject$1 = require('../internals/an-object');

	var toPropertyKey = require('../internals/to-property-key');

	var $TypeError = TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

	var $defineProperty = _Object$defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

	var $getOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE = 'configurable';
	var WRITABLE = 'writable'; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	exports.f = DESCRIPTORS$1 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey(P);
	  anObject$1(Attributes);

	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);

	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  }

	  return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey(P);
	  anObject$1(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(objectDefineProperty);

	var createPropertyDescriptor$1 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var DESCRIPTORS = require$$8;

	var definePropertyModule = require$$1;

	var createPropertyDescriptor = createPropertyDescriptor$1;

	var createNonEnumerableProperty$5 = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var shared$4 = shared$5.exports;

	var uid$1 = uid$2;

	var keys = shared$4('keys');

	var sharedKey$1 = function (key) {
	  return keys[key] || (keys[key] = uid$1(key));
	};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;

	var global$4 = require$$0$5;

	var uncurryThis$3 = require$$4;

	var isObject$2 = require$$8$1;

	var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;

	var hasOwn$6 = hasOwnProperty_1;

	var shared$3 = sharedStore;

	var sharedKey = sharedKey$1;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$4.TypeError;
	var WeakMap = global$4.WeakMap;
	var set, get, has;

	var enforce = function enforce(it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function getterFor(TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$3.state) {
	  var store = shared$3.state || (shared$3.state = new WeakMap());
	  var wmget = uncurryThis$3(store.get);
	  var wmhas = uncurryThis$3(store.has);
	  var wmset = uncurryThis$3(store.set);

	  set = function set(it, metadata) {
	    if (wmhas(store, it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };

	  get = function get(it) {
	    return wmget(store, it) || {};
	  };

	  has = function has(it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');

	  set = function set(it, metadata) {
	    if (hasOwn$6(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$4(it, STATE, metadata);
	    return metadata;
	  };

	  get = function get(it) {
	    return hasOwn$6(it, STATE) ? it[STATE] : {};
	  };

	  has = function has(it) {
	    return hasOwn$6(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var entries$1 = {exports: {}};

	require('../../modules/web.dom-collections.iterator');

	var classof$5 = require('../../internals/classof');

	var hasOwn$5 = require('../../internals/has-own-property');

	var isPrototypeOf$1 = require('../../internals/object-is-prototype-of');

	var method = require('../array/virtual/entries');

	var ArrayPrototype = Array.prototype;
	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	module.exports = function (it) {
	  var own = _entriesInstanceProperty(it);

	  return it === ArrayPrototype || isPrototypeOf$1(ArrayPrototype, it) && own === _entriesInstanceProperty(ArrayPrototype) || hasOwn$5(DOMIterables$1, classof$5(it)) ? method : own;
	};

	var entries = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(entries);

	(function (module) {
		module.exports = require$$0$2;
	} (entries$1));

	var _entriesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(entries$1.exports);

	var $$6 = require('../internals/export');

	var call$4 = require('../internals/function-call');

	var IS_PURE = require('../internals/is-pure');

	var FunctionName = require('../internals/function-name');

	var isCallable$3 = require('../internals/is-callable');

	var createIteratorConstructor = require('../internals/iterator-create-constructor');

	var getPrototypeOf = require('../internals/object-get-prototype-of');

	var setPrototypeOf = require('../internals/object-set-prototype-of');

	var setToStringTag$3 = require('../internals/set-to-string-tag');

	var createNonEnumerableProperty$3 = require('../internals/create-non-enumerable-property');

	var defineBuiltIn$2 = require('../internals/define-built-in');

	var wellKnownSymbol$7 = require('../internals/well-known-symbol');

	var Iterators$2 = require('../internals/iterators');

	var IteratorsCore = require('../internals/iterators-core');

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol$7('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function getIterationMethod(KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS:
	        return function keys() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case VALUES:
	        return function values() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case ENTRIES:
	        return function entries() {
	          return new IteratorConstructor(this, KIND);
	        };
	    }

	    return function () {
	      return new IteratorConstructor(this);
	    };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? _entriesInstanceProperty(IterablePrototype) || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR])) {
	          defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      } // Set @@toStringTag to native iterators


	      setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE) Iterators$2[TO_STRING_TAG] = returnThis;
	    }
	  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;

	      defaultIterator = function values() {
	        return call$4(nativeIterator, this);
	      };
	    }
	  } // export additional methods


	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$6({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  } // define iterator


	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    defineBuiltIn$2(IterablePrototype, ITERATOR, defaultIterator, {
	      name: DEFAULT
	    });
	  }

	  Iterators$2[NAME] = defaultIterator;
	  return methods;
	};

	var iteratorDefine = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(iteratorDefine);

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$2 = function (value, done) {
	  return {
	    value: value,
	    done: done
	  };
	};

	var toIndexedObject = toIndexedObject$3;

	var Iterators$1 = iterators;

	var InternalStateModule$1 = internalState;

	require$$1.f;

	var defineIterator$1 = require$$3$1;

	var createIterResultObject$1 = createIterResultObject$2;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator

	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind

	  }); // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;

	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$1(undefined, true);
	  }

	  if (kind == 'keys') return createIterResultObject$1(index, false);
	  if (kind == 'values') return createIterResultObject$1(target[index], false);
	  return createIterResultObject$1([index, target[index]], false);
	}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject

	Iterators$1.Arguments = Iterators$1.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

	var uncurryThis$2 = require('../internals/function-uncurry-this');

	var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

	var toString$4 = require('../internals/to-string');

	var requireObjectCoercible = require('../internals/require-object-coercible');

	var charAt$2 = uncurryThis$2(''.charAt);
	var charCodeAt$1 = uncurryThis$2(''.charCodeAt);
	var stringSlice = uncurryThis$2(_sliceInstanceProperty(''));

	var createMethod = function createMethod(CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$4(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	module.exports = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var stringMultibyte = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(stringMultibyte);

	var charAt$1 = require$$0$1.charAt;

	var toString$3 = toString$2;

	var InternalStateModule = internalState;

	var defineIterator = require$$3$1;

	var createIterResultObject = createIterResultObject$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString$3(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject(undefined, true);
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return createIterResultObject(point, false);
	});

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$6 = wellKnownSymbol$4;

	wellKnownSymbolWrapped.f = wellKnownSymbol$6;

	var path$5 = path$a;

	var hasOwn$4 = hasOwnProperty_1;

	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

	var defineProperty$1 = require$$1.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var _Symbol = path$5.Symbol || (path$5.Symbol = {});

	  if (!hasOwn$4(_Symbol, NAME)) defineProperty$1(_Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};

	var defineWellKnownSymbol$k = wellKnownSymbolDefine; // `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator


	defineWellKnownSymbol$k('iterator');

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

	var iterator$5 = WrappedWellKnownSymbolModule.f('iterator');

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables = domIterables;

	var global$3 = require$$0$5;

	var classof$4 = classof$3;

	var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;

	var Iterators = iterators;

	var wellKnownSymbol$5 = wellKnownSymbol$4;

	var TO_STRING_TAG$3 = wellKnownSymbol$5('toStringTag');

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global$3[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype && classof$4(CollectionPrototype) !== TO_STRING_TAG$3) {
	    createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	  }

	  Iterators[COLLECTION_NAME] = Iterators.Array;
	}

	var parent$9 = iterator$5;



	var iterator$4 = parent$9;

	(function (module) {
		module.exports = iterator$4;
	} (iterator$6));

	var _Symbol$iterator$1 = /*@__PURE__*/getDefaultExportFromCjs(iterator$6.exports);

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$4 = require('../internals/symbol-constructor-detection');

	module.exports = NATIVE_SYMBOL$4 && !_Symbol$2.sham && _typeof(_Symbol$iterator$1) == 'symbol';

	var useSymbolAsUid = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(useSymbolAsUid);

	var global$2 = require$$0$5;

	var shared$2 = shared$5.exports;

	var hasOwn$3 = hasOwnProperty_1;

	var uid = uid$2;

	var NATIVE_SYMBOL$3 = require$$1$1;

	var USE_SYMBOL_AS_UID$1 = require$$5$1;

	var WellKnownSymbolsStore = shared$2('wks');
	var _Symbol$1 = global$2.Symbol;
	var symbolFor = _Symbol$1 && _Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? _Symbol$1 : _Symbol$1 && _Symbol$1.withoutSetter || uid;

	var wellKnownSymbol$4 = function (name) {
	  if (!hasOwn$3(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$3 || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;

	    if (NATIVE_SYMBOL$3 && hasOwn$3(_Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = _Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  }

	  return WellKnownSymbolsStore[name];
	};

	var wellKnownSymbol$3 = wellKnownSymbol$4;

	var TO_STRING_TAG$2 = wellKnownSymbol$3('toStringTag');
	var test = {};
	test[TO_STRING_TAG$2] = 'z';
	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;

	var isCallable$2 = isCallable$7;

	var classofRaw = require$$2$1;

	var wellKnownSymbol$2 = wellKnownSymbol$4;

	var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');
	var $Object$1 = Object; // ES3 wrong here

	var CORRECT_ARGUMENTS = classofRaw(function () {
	  return arguments;
	}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (error) {
	    /* empty */
	  }
	}; // getting tag from ES6+ `Object.prototype.toString`


	var classof$3 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
	};

	var classof$2 = classof$3;

	var $String$1 = String;

	var toString$2 = function (argument) {
	  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var _for$2 = {exports: {}};

	var path$4 = path$a;

	var _for$1 = path$4.Symbol['for'];

	var parent$8 = _for$1;

	var _for = parent$8;

	(function (module) {
		module.exports = _for;
	} (_for$2));

	var _Symbol$for = /*@__PURE__*/getDefaultExportFromCjs(_for$2.exports);

	var keyFor$2 = {exports: {}};

	var path$3 = path$a;

	var keyFor$1 = path$3.Symbol.keyFor;

	var parent$7 = keyFor$1;

	var keyFor = parent$7;

	(function (module) {
		module.exports = keyFor;
	} (keyFor$2));

	var _Symbol$keyFor = /*@__PURE__*/getDefaultExportFromCjs(keyFor$2.exports);

	var NATIVE_SYMBOL$2 = require('../internals/symbol-constructor-detection');
	/* eslint-disable es/no-symbol -- safe */


	module.exports = NATIVE_SYMBOL$2 && !!_Symbol$for && !!_Symbol$keyFor;

	var symbolRegistryDetection = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$5 = /*@__PURE__*/getAugmentedNamespace(symbolRegistryDetection);

	var $$5 = require$$0$6;

	var getBuiltIn$4 = getBuiltIn$5;

	var hasOwn$2 = hasOwnProperty_1;

	var toString$1 = toString$2;

	var shared$1 = shared$5.exports;

	var NATIVE_SYMBOL_REGISTRY$1 = require$$5;

	var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$1('symbol-to-string-registry'); // `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for

	$$5({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY$1
	}, {
	  'for': function _for(key) {
	    var string = toString$1(key);
	    if (hasOwn$2(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$4('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var getBuiltIn$3 = require('../internals/get-built-in');

	var isCallable$1 = require('../internals/is-callable');

	var isPrototypeOf = require('../internals/object-is-prototype-of');

	var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

	var $Object = Object;
	module.exports = USE_SYMBOL_AS_UID ? function (it) {
	  return _typeof(it) == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$3('Symbol');
	  return isCallable$1($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
	};

	var isSymbol$2 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$9 = /*@__PURE__*/getAugmentedNamespace(isSymbol$2);

	var $String = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var $$4 = require$$0$6;

	var hasOwn$1 = hasOwnProperty_1;

	var isSymbol$1 = require$$9;

	var tryToString = tryToString$1;

	var shared = shared$5.exports;

	var NATIVE_SYMBOL_REGISTRY = require$$5;

	var SymbolToStringRegistry = shared('symbol-to-string-registry'); // `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor

	$$4({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY
	}, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$1(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
	    if (hasOwn$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var apply$4 = {exports: {}};

	var $$3 = require('../internals/export');

	var functionApply$1 = require('../internals/function-apply');

	var aCallable = require('../internals/a-callable');

	var anObject = require('../internals/an-object');

	var fails$2 = require('../internals/fails'); // MS Edge argumentsList argument is optional


	var OPTIONAL_ARGUMENTS_LIST = !fails$2(function () {
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  _Reflect$apply(function () {
	    /* empty */
	  });
	}); // `Reflect.apply` method
	// https://tc39.es/ecma262/#sec-reflect.apply

	$$3({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    return functionApply$1(aCallable(target), thisArgument, anObject(argumentsList));
	  }
	});

	var path$2 = path$a;

	var apply$3 = path$2.Reflect.apply;

	var parent$6 = apply$3;

	var apply$2 = parent$6;

	(function (module) {
		module.exports = apply$2;
	} (apply$4));

	var _Reflect$apply = /*@__PURE__*/getDefaultExportFromCjs(apply$4.exports);

	var NATIVE_BIND$1 = require('../internals/function-bind-native');

	var FunctionPrototype = Function.prototype;
	var apply$1 = FunctionPrototype.apply;
	var call$3 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

	module.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && _Reflect$apply || (NATIVE_BIND$1 ? _bindInstanceProperty(call$3).call(call$3, apply$1) : function () {
	  return call$3.apply(apply$1, arguments);
	});

	var functionApply = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(functionApply);

	var NATIVE_BIND = require('../internals/function-bind-native');

	var call$2 = Function.prototype.call;
	module.exports = NATIVE_BIND ? _bindInstanceProperty(call$2).call(call$2, call$2) : function () {
	  return call$2.apply(call$2, arguments);
	};

	var functionCall = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(functionCall);

	var isArray$5 = {exports: {}};

	var $$2 = require$$0$6;

	var isArray$4 = require$$6; // `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray


	$$2({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray$4
	});

	var path$1 = path$a;

	var isArray$3 = path$1.Array.isArray;

	var parent$5 = isArray$3;

	var isArray$2 = parent$5;

	(function (module) {
		module.exports = isArray$2;
	} (isArray$5));

	var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$5.exports);

	var classof$1 = require('../internals/classof-raw'); // `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe


	module.exports = _Array$isArray || function isArray(argument) {
	  return classof$1(argument) == 'Array';
	};

	var isArray$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$6 = /*@__PURE__*/getAugmentedNamespace(isArray$1);

	var uncurryThis$1 = require('../internals/function-uncurry-this');

	module.exports = uncurryThis$1(_sliceInstanceProperty([]));

	var arraySlice$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$10 = /*@__PURE__*/getAugmentedNamespace(arraySlice$1);

	var $$1 = require$$0$6;

	var getBuiltIn$2 = getBuiltIn$5;

	var apply = require$$2;

	var call$1 = require$$0;

	var uncurryThis = require$$4;

	var fails$1 = fails$6;

	var isArray = require$$6;

	var isCallable = isCallable$7;

	var isObject$1 = require$$8$1;

	var isSymbol = require$$9;

	var arraySlice = require$$10;

	var NATIVE_SYMBOL$1 = require$$1$1;

	var $stringify = getBuiltIn$2('JSON', 'stringify');
	var exec = uncurryThis(/./.exec);
	var charAt = uncurryThis(''.charAt);
	var charCodeAt = uncurryThis(''.charCodeAt);
	var replace = uncurryThis(''.replace);
	var numberToString = uncurryThis(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$1(function () {
	  var symbol = getBuiltIn$2('Symbol')(); // MS Edge converts symbol values to JSON as {}

	  return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
	  || $stringify({
	    a: symbol
	  }) != '{}' // V8 throws on boxed symbols
	  || $stringify(Object(symbol)) != '{}';
	}); // https://github.com/tc39/proposal-well-formed-stringify

	var ILL_FORMED_UNICODE = fails$1(function () {
	  return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
	});

	var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
	  var args = arraySlice(arguments);
	  var $replacer = replacer;
	  if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

	  if (!isArray(replacer)) replacer = function replacer(key, value) {
	    if (isCallable($replacer)) value = call$1($replacer, this, key, value);
	    if (!isSymbol(value)) return value;
	  };
	  args[1] = replacer;
	  return apply($stringify, null, args);
	};

	var fixIllFormed = function fixIllFormed(match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);

	  if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
	    return "\\u" + numberToString(charCodeAt(match, 0), 16);
	  }

	  return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$1({
	    target: 'JSON',
	    stat: true,
	    arity: 3,
	    forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
	  }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice(arguments);
	      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	exports.f = _Object$getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(objectGetOwnPropertySymbols);

	var $ = require$$0$6;

	var NATIVE_SYMBOL = require$$1$1;

	var fails = fails$6;

	var getOwnPropertySymbolsModule = require$$3;

	var toObject = toObject$2; // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443


	var FORCED = !NATIVE_SYMBOL || fails(function () {
	  getOwnPropertySymbolsModule.f(1);
	}); // `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols

	$({
	  target: 'Object',
	  stat: true,
	  forced: FORCED
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
	  }
	});

	var defineWellKnownSymbol$j = wellKnownSymbolDefine; // `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator


	defineWellKnownSymbol$j('asyncIterator');

	var defineWellKnownSymbol$i = wellKnownSymbolDefine; // `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance


	defineWellKnownSymbol$i('hasInstance');

	var defineWellKnownSymbol$h = wellKnownSymbolDefine; // `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable


	defineWellKnownSymbol$h('isConcatSpreadable');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine; // `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match


	defineWellKnownSymbol$g('match');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine; // `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall


	defineWellKnownSymbol$f('matchAll');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine; // `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace


	defineWellKnownSymbol$e('replace');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine; // `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search


	defineWellKnownSymbol$d('search');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine; // `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species


	defineWellKnownSymbol$c('species');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine; // `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split


	defineWellKnownSymbol$b('split');

	var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;

	var defineBuiltIn$1 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty$1(target, key, value);
	  return target;
	};

	var call = require$$0;

	var getBuiltIn$1 = getBuiltIn$5;

	var wellKnownSymbol$1 = wellKnownSymbol$4;

	var defineBuiltIn = defineBuiltIn$1;

	var symbolDefineToPrimitive = function () {
	  var _Symbol = getBuiltIn$1('Symbol');

	  var SymbolPrototype = _Symbol && _Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call(valueOf, this);
	    }, {
	      arity: 1
	    });
	  }
	};

	var defineWellKnownSymbol$a = wellKnownSymbolDefine;

	var defineSymbolToPrimitive = symbolDefineToPrimitive; // `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive


	defineWellKnownSymbol$a('toPrimitive'); // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

	defineSymbolToPrimitive();

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;

	var classof = classof$3; // `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring


	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;

	var defineProperty = require$$1.f;

	var createNonEnumerableProperty = createNonEnumerableProperty$5;

	var hasOwn = hasOwnProperty_1;

	var toString = objectToString;

	var wellKnownSymbol = wellKnownSymbol$4;

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	var setToStringTag$2 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;

	    if (!hasOwn(target, TO_STRING_TAG)) {
	      defineProperty(target, TO_STRING_TAG, {
	        configurable: true,
	        value: TAG
	      });
	    }

	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty(target, 'toString', toString);
	    }
	  }
	};

	var getBuiltIn = getBuiltIn$5;

	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;

	var setToStringTag$1 = setToStringTag$2; // `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag


	defineWellKnownSymbol$9('toStringTag'); // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

	setToStringTag$1(getBuiltIn('Symbol'), 'Symbol');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine; // `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables


	defineWellKnownSymbol$8('unscopables');

	var global$1 = require$$0$5;

	var setToStringTag = setToStringTag$2; // JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag


	setToStringTag(global$1.JSON, 'JSON', true);

	var path = path$a;

	var symbol$3 = path.Symbol;

	var parent$4 = symbol$3;



	var symbol$2 = parent$4;

	var parent$3 = symbol$2;

	var symbol$1 = parent$3;

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine; // `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement


	defineWellKnownSymbol$7('asyncDispose');

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine; // `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement


	defineWellKnownSymbol$6('dispose');

	var defineWellKnownSymbol$5 = wellKnownSymbolDefine; // `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching


	defineWellKnownSymbol$5('matcher');

	var defineWellKnownSymbol$4 = wellKnownSymbolDefine; // `Symbol.metadataKey` well-known symbol
	// https://github.com/tc39/proposal-decorator-metadata


	defineWellKnownSymbol$4('metadataKey');

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine; // `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable


	defineWellKnownSymbol$3('observable');

	// TODO: Remove from `core-js@4`
	var defineWellKnownSymbol$2 = wellKnownSymbolDefine; // `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators


	defineWellKnownSymbol$2('metadata');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol$1 = wellKnownSymbolDefine; // `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching


	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = wellKnownSymbolDefine;

	defineWellKnownSymbol('replaceAll');

	var parent$2 = symbol$1;









	 // TODO: Remove from `core-js@4`








	var symbol = parent$2;

	(function (module) {
		module.exports = symbol;
	} (symbol$5));

	(function (module) {
		module.exports = symbol$5.exports;
	} (symbol$6));

	var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol$6.exports);

	var iterator$3 = {exports: {}};

	var iterator$2 = {exports: {}};

	var parent$1 = iterator$4;

	var iterator$1 = parent$1;

	var parent = iterator$1;

	var iterator = parent;

	(function (module) {
		module.exports = iterator;
	} (iterator$2));

	(function (module) {
		module.exports = iterator$2.exports;
	} (iterator$3));

	var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator$3.exports);

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	var isObject = function isObject(val) {
	  return val !== null && _typeof(val) === 'object';
	};

	exports.isObject = isObject;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
