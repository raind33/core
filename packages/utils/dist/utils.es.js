var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var _typeof$1 = {exports: {}};

var symbol$5 = {exports: {}};

var symbol$4 = {exports: {}};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$d =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails$f = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$e = fails$f;

var functionBindNative = !fails$e(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var apply$2 = FunctionPrototype$2.apply;
var call$9 = FunctionPrototype$2.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$9.bind(apply$2) : function () {
  return call$9.apply(apply$2, arguments);
});

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var bind$3 = FunctionPrototype$1.bind;
var call$8 = FunctionPrototype$1.call;
var uncurryThis$h = NATIVE_BIND$2 && bind$3.bind(call$8, call$8);

var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$h(fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$f = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$d = fails$f;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var NATIVE_BIND$1 = functionBindNative;

var call$7 = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$7.bind(call$7) : function () {
  return call$7.apply(call$7, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$g = functionUncurryThis;

var toString$6 = uncurryThis$g({}.toString);
var stringSlice$1 = uncurryThis$g(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$1(toString$6(it), 8, -1);
};

var uncurryThis$f = functionUncurryThis;
var fails$c = fails$f;
var classof$7 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$f(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$7 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$7 = function (it) {
  return IndexedObject$1(requireObjectCoercible$2(it));
};

var isCallable$e = isCallable$f;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it);
};

var path$4 = {};

var path$3 = path$4;
var global$c = global$d;
var isCallable$d = isCallable$f;

var aFunction = function (variable) {
  return isCallable$d(variable) ? variable : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$3[namespace]) || aFunction(global$c[namespace])
    : path$3[namespace] && path$3[namespace][method] || global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$e = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$7 = getBuiltIn$8;

var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

var global$b = global$d;
var userAgent = engineUserAgent;

var process = global$b.process;
var Deno = global$b.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$2 = engineV8Version;
var fails$b = fails$f;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$5 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$5
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$6 = getBuiltIn$8;
var isCallable$c = isCallable$f;
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$c($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$2 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$b = isCallable$f;
var tryToString$1 = tryToString$2;

var $TypeError$6 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$b(argument)) return argument;
  throw $TypeError$6(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
};

var call$6 = functionCall;
var isCallable$a = isCallable$f;
var isObject$9 = isObject$a;

var $TypeError$5 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$9(val = call$6(fn, input))) return val;
  if (isCallable$a(fn = input.valueOf) && !isObject$9(val = call$6(fn, input))) return val;
  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$9(val = call$6(fn, input))) return val;
  throw $TypeError$5("Can't convert object to primitive value");
};

var shared$6 = {exports: {}};

var global$a = global$d;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;

var defineGlobalProperty$1 = function (key, value) {
  try {
    defineProperty$2(global$a, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var global$9 = global$d;
var defineGlobalProperty = defineGlobalProperty$1;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || defineGlobalProperty(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$6.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.3',
  mode: 'pure' ,
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$1 = requireObjectCoercible$3;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5 = function (argument) {
  return $Object$2(requireObjectCoercible$1(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$4 = toObject$5;

var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};

var uncurryThis$c = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$c(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$8 = global$d;
var shared$5 = shared$6.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore$1 = shared$5('wks');
var Symbol$1 = global$8.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

var wellKnownSymbol$d = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$4 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$4 && hasOwn$b(Symbol$1, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore$1[name];
};

var call$5 = functionCall;
var isObject$8 = isObject$a;
var isSymbol$3 = isSymbol$4;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$c = wellKnownSymbol$d;

var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$8(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$5(exoticToPrim, input, pref);
    if (!isObject$8(result) || isSymbol$3(result)) return result;
    throw $TypeError$4("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$4 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};

var global$7 = global$d;
var isObject$7 = isObject$a;

var document$1 = global$7.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$7(document$1) && isObject$7(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$a = fails$f;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors;
var call$4 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$6 = toIndexedObject$7;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$a = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$6(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$a(O, P)) return createPropertyDescriptor$4(!call$4(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var fails$9 = fails$f;
var isCallable$9 = isCallable$f;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$9(detection) ? fails$9(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var uncurryThis$b = functionUncurryThis;
var aCallable = aCallable$2;
var NATIVE_BIND = functionBindNative;

var bind$2 = uncurryThis$b(uncurryThis$b.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$5 = descriptors;
var fails$8 = fails$f;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$6 = isObject$a;

var $String$2 = String;
var $TypeError$3 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$6(argument)) return argument;
  throw $TypeError$3($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$2 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey$2(P);
  anObject$4(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey$2(P);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$6 = global$d;
var apply$1 = functionApply;
var uncurryThis$a = functionUncurryThis;
var isCallable$8 = isCallable$f;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var isForced = isForced_1;
var path$2 = path$4;
var bind$1 = functionBindContext;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$9 = hasOwnProperty_1;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$1(NativeConstructor, this, arguments);
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
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global$6 : STATIC ? global$6[TARGET] : (global$6[TARGET] || {}).prototype;

  var target = GLOBAL ? path$2 : path$2[TARGET] || createNonEnumerableProperty$4(path$2, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn$9(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind$1(sourceProperty, global$6);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable$8(sourceProperty)) resultProperty = uncurryThis$a(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$4(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$9(path$2, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$4(path$2, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty$4(path$2[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$4(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var classof$6 = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$6(argument) == 'Array';
};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$4 = function (obj) {
  return toLength(obj.length);
};

var $TypeError$1 = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$1 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
  return it;
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$2(0, value));
  else object[propertyKey] = value;
};

var wellKnownSymbol$b = wellKnownSymbol$d;

var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$7 = isCallable$f;
var classofRaw = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$d;

var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var uncurryThis$9 = functionUncurryThis;
var isCallable$6 = isCallable$f;
var store$1 = sharedStore;

var functionToString = uncurryThis$9(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var uncurryThis$8 = functionUncurryThis;
var fails$7 = fails$f;
var isCallable$5 = isCallable$f;
var classof$4 = classof$5;
var getBuiltIn$5 = getBuiltIn$8;
var inspectSource = inspectSource$1;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$5('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$8(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$7(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray$2 = isArray$3;
var isConstructor = isConstructor$1;
var isObject$5 = isObject$a;
var wellKnownSymbol$9 = wellKnownSymbol$d;

var SPECIES$1 = wellKnownSymbol$9('species');
var $Array$1 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$2(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array$1 || isArray$2(C.prototype))) C = undefined;
    else if (isObject$5(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$6 = fails$f;
var wellKnownSymbol$8 = wellKnownSymbol$d;
var V8_VERSION$1 = engineV8Version;

var SPECIES = wellKnownSymbol$8('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$6(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$6 = _export;
var fails$5 = fails$f;
var isArray$1 = isArray$3;
var isObject$4 = isObject$a;
var toObject$3 = toObject$5;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var createProperty$1 = createProperty$2;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$7 = wellKnownSymbol$d;
var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$5(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$4(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$6({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$3(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$3(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty$1(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var classof$3 = classof$5;

var $String$1 = String;

var toString$4 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var objectDefineProperties = {};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

var max$1 = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min(integer, length);
};

var toIndexedObject$5 = toIndexedObject$7;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var hiddenKeys$5 = {};

var uncurryThis$7 = functionUncurryThis;
var hasOwn$8 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$7;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$5;

var push$2 = uncurryThis$7([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$8(hiddenKeys$4, key) && hasOwn$8(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
    ~indexOf(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$2 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$3 = anObject$5;
var toIndexedObject$3 = toIndexedObject$7;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$3(O);
  var props = toIndexedObject$3(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$8;

var html$1 = getBuiltIn$4('document', 'documentElement');

var shared$4 = shared$6.exports;
var uid$1 = uid$3;

var keys = shared$4('keys');

var sharedKey$4 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$2 = anObject$5;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$3 = hiddenKeys$5;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$3 = sharedKey$4;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$3('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$3[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$2(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$2);
};

var objectGetOwnPropertyNamesExternal = {};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var createProperty = createProperty$2;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var classof$2 = classofRaw$1;
var toIndexedObject$2 = toIndexedObject$7;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$2 = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$2(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$2(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$2(it));
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;

var defineBuiltIn$4 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty$3(target, key, value);
  return target;
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$6 = wellKnownSymbol$d;

wellKnownSymbolWrapped.f = wellKnownSymbol$6;

var path$1 = path$4;
var hasOwn$7 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$1 = objectDefineProperty.f;

var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path$1.Symbol || (path$1.Symbol = {});
  if (!hasOwn$7(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$3 = functionCall;
var getBuiltIn$3 = getBuiltIn$8;
var wellKnownSymbol$5 = wellKnownSymbol$d;
var defineBuiltIn$3 = defineBuiltIn$4;

var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$3('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$3(valueOf, this);
    }, { arity: 1 });
  }
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$1 = classof$5;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$1(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty = objectDefineProperty.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var hasOwn$6 = hasOwnProperty_1;
var toString$3 = objectToString;
var wellKnownSymbol$4 = wellKnownSymbol$d;

var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');

var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$6(target, TO_STRING_TAG$1)) {
      defineProperty(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$2(target, 'toString', toString$3);
    }
  }
};

var global$5 = global$d;
var isCallable$4 = isCallable$f;

var WeakMap$1 = global$5.WeakMap;

var weakMapBasicDetection = isCallable$4(WeakMap$1) && /native code/.test(String(WeakMap$1));

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$4 = global$d;
var uncurryThis$6 = functionUncurryThis;
var isObject$3 = isObject$a;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var hasOwn$5 = hasOwnProperty_1;
var shared$3 = sharedStore;
var sharedKey$2 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$4.TypeError;
var WeakMap = global$4.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$3.state) {
  var store = shared$3.state || (shared$3.state = new WeakMap());
  var wmget = uncurryThis$6(store.get);
  var wmhas = uncurryThis$6(store.has);
  var wmset = uncurryThis$6(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$5(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$5(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var bind = functionBindContext;
var uncurryThis$5 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$2 = toObject$5;
var lengthOfArrayLike = lengthOfArrayLike$4;
var arraySpeciesCreate = arraySpeciesCreate$2;

var push$1 = uncurryThis$5([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var $$5 = _export;
var global$3 = global$d;
var call$2 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var fails$4 = fails$f;
var hasOwn$4 = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var anObject$1 = anObject$5;
var toIndexedObject$1 = toIndexedObject$7;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$4;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;
var nativeObjectCreate = objectCreate;
var objectKeys = objectKeys$2;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var defineBuiltIn$2 = defineBuiltIn$4;
var shared$2 = shared$6.exports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys = hiddenKeys$5;
var uid = uid$3;
var wellKnownSymbol$3 = wellKnownSymbol$d;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$l = wellKnownSymbolDefine;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$4 = setToStringTag$5;
var InternalStateModule$2 = internalState;
var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey$1('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);

var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = global$3.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$1 = global$3.TypeError;
var QObject = global$3.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis$4([].push);

var AllSymbols = shared$2('symbols');
var ObjectPrototypeSymbols = shared$2('op-symbols');
var WellKnownSymbolsStore = shared$2('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS$1 && fails$4(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$2(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$1) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$1(O);
  var key = toPropertyKey(P);
  anObject$1(Attributes);
  if (hasOwn$4(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$4(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$4(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$1(O);
  var properties = toIndexedObject$1(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS$1 || call$2($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$2(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$4(AllSymbols, P) && !hasOwn$4(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$4(this, P) || !hasOwn$4(AllSymbols, P) || hasOwn$4(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$1(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwn$4(AllSymbols, key) && !hasOwn$4(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn$4(AllSymbols, key) && !(hasOwn$4(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$1(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn$4(AllSymbols, key) && !hasOwn$4(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$1(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn$4(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$4(ObjectPrototype$1, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$3) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError$1('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype$1) call$2(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$4(this, HIDDEN) && hasOwn$4(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
    };
    if (DESCRIPTORS$1 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn$2(SymbolPrototype, 'toString', function toString() {
    return getInternalState$2(this).tag;
  });

  defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$3(name), name);
  };

  if (DESCRIPTORS$1) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
  }
}

$$5({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol$l(name);
});

$$5({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$1 }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$$5({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive$1();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$4($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

var NATIVE_SYMBOL$2 = symbolConstructorDetection;

/* eslint-disable es/no-symbol -- safe */
var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

var $$4 = _export;
var getBuiltIn$2 = getBuiltIn$8;
var hasOwn$3 = hasOwnProperty_1;
var toString$2 = toString$4;
var shared$1 = shared$6.exports;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$1('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$$4({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  'for': function (key) {
    var string = toString$2(key);
    if (hasOwn$3(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$2('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$3 = _export;
var hasOwn$2 = hasOwnProperty_1;
var isSymbol$1 = isSymbol$4;
var tryToString = tryToString$2;
var shared = shared$6.exports;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$$3({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn$2(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var uncurryThis$3 = functionUncurryThis;

var arraySlice$1 = uncurryThis$3([].slice);

var $$2 = _export;
var getBuiltIn$1 = getBuiltIn$8;
var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fails$3 = fails$f;
var isArray = isArray$3;
var isCallable$3 = isCallable$f;
var isObject$2 = isObject$a;
var isSymbol = isSymbol$4;
var arraySlice = arraySlice$1;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var $stringify = getBuiltIn$1('JSON', 'stringify');
var exec = uncurryThis$2(/./.exec);
var charAt$2 = uncurryThis$2(''.charAt);
var charCodeAt$1 = uncurryThis$2(''.charCodeAt);
var replace = uncurryThis$2(''.replace);
var numberToString = uncurryThis$2(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$3(function () {
  var symbol = getBuiltIn$1('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails$3(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject$2(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable$3($replacer)) value = call$1($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt$2(string, offset - 1);
  var next = charAt$2(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $$2({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

var $$1 = _export;
var NATIVE_SYMBOL = symbolConstructorDetection;
var fails$2 = fails$f;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var toObject$1 = toObject$5;

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails$2(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$$1({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$1(it)) : [];
  }
});

var defineWellKnownSymbol$k = wellKnownSymbolDefine;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol$k('asyncIterator');

var defineWellKnownSymbol$j = wellKnownSymbolDefine;

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol$j('hasInstance');

var defineWellKnownSymbol$i = wellKnownSymbolDefine;

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol$i('isConcatSpreadable');

var defineWellKnownSymbol$h = wellKnownSymbolDefine;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$h('iterator');

var defineWellKnownSymbol$g = wellKnownSymbolDefine;

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol$g('match');

var defineWellKnownSymbol$f = wellKnownSymbolDefine;

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol$f('matchAll');

var defineWellKnownSymbol$e = wellKnownSymbolDefine;

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol$e('replace');

var defineWellKnownSymbol$d = wellKnownSymbolDefine;

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol$d('search');

var defineWellKnownSymbol$c = wellKnownSymbolDefine;

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol$c('species');

var defineWellKnownSymbol$b = wellKnownSymbolDefine;

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol$b('split');

var defineWellKnownSymbol$a = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol$a('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

var getBuiltIn = getBuiltIn$8;
var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
var setToStringTag$3 = setToStringTag$5;

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol$9('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$3(getBuiltIn('Symbol'), 'Symbol');

var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol$8('unscopables');

var global$2 = global$d;
var setToStringTag$2 = setToStringTag$5;

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag$2(global$2.JSON, 'JSON', true);

var path = path$4;

var symbol$3 = path.Symbol;

var iterators = {};

var DESCRIPTORS = descriptors;
var hasOwn$1 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$1(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var fails$1 = fails$f;

var correctPrototypeGetter = !fails$1(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn = hasOwnProperty_1;
var isCallable$2 = isCallable$f;
var toObject = toObject$5;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$2(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails = fails$f;
var isCallable$1 = isCallable$f;
var isObject$1 = isObject$a;
var create$1 = objectCreate;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$2 = wellKnownSymbol$d;

var ITERATOR$1 = wellKnownSymbol$2('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$1(IteratorPrototype$1) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$1[ITERATOR$1].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$1(IteratorPrototype$1);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$1(IteratorPrototype$1[ITERATOR$1])) {
  defineBuiltIn$1(IteratorPrototype$1, ITERATOR$1, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var setToStringTag$1 = setToStringTag$5;
var Iterators$3 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable = isCallable$f;

var $String = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$1 = functionUncurryThis;
var anObject = anObject$5;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$1(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $ = _export;
var call = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setToStringTag = setToStringTag$5;
var defineBuiltIn = defineBuiltIn$4;
var wellKnownSymbol$1 = wellKnownSymbol$d;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol$1('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$2[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$7;
var Iterators$1 = iterators;
var InternalStateModule$1 = internalState;
objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
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
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
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
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$1.Arguments = Iterators$1.Array;

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
var global$1 = global$d;
var classof = classof$5;
var createNonEnumerableProperty = createNonEnumerableProperty$5;
var Iterators = iterators;
var wellKnownSymbol = wellKnownSymbol$d;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global$1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

var parent$5 = symbol$3;


var symbol$2 = parent$5;

var parent$4 = symbol$2;

var symbol$1 = parent$4;

var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol$7('asyncDispose');

var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol$6('dispose');

var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$5('matcher');

var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol$4('metadataKey');

var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol$3('observable');

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol$2('metadata');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$1('patternMatch');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = wellKnownSymbolDefine;

defineWellKnownSymbol('replaceAll');

var parent$3 = symbol$1;





// TODO: Remove from `core-js@4`




var symbol = parent$3;

(function (module) {
	module.exports = symbol;
} (symbol$4));

(function (module) {
	module.exports = symbol$4.exports;
} (symbol$5));

var iterator$5 = {exports: {}};

var iterator$4 = {exports: {}};

var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$4;
var requireObjectCoercible = requireObjectCoercible$3;

var charAt$1 = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$1(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt;
var toString = toString$4;
var InternalStateModule = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

var iterator$3 = WrappedWellKnownSymbolModule.f('iterator');

var parent$2 = iterator$3;


var iterator$2 = parent$2;

var parent$1 = iterator$2;

var iterator$1 = parent$1;

var parent = iterator$1;

var iterator = parent;

(function (module) {
	module.exports = iterator;
} (iterator$4));

(function (module) {
	module.exports = iterator$4.exports;
} (iterator$5));

(function (module) {
	var _Symbol = symbol$5.exports;

	var _Symbol$iterator = iterator$5.exports;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}

	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (_typeof$1));

var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof$1.exports);

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

export { isObject };
