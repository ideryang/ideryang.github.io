(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.ReactRouterDOM = {}),global.React));
}(this, (function (exports,React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  

  var warning = function () {};

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        
        
        
        throw new Error(message);
      } catch (x) {}
    };

    warning = function (condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  

  

  var validateFormat = function validateFormat(format) {};

  {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; 
      throw error;
    }
  }

  var invariant_1 = invariant;

  

  var warning$1 = emptyFunction_1;

  {
    var printWarning$1 = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        
        
        
        throw new Error(message);
      } catch (x) {}
    };

    warning$1 = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; 
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning$1.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1$1 = warning$1;

  
  

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		

  		
  		var test1 = new String('abc'); 
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  {
    var invariant$1 = invariant_1;
    var warning$2 = warning_1$1;
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
  }

  
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          
          
          
          try {
            
            
            invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            
            
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; 

    
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    

    var ANONYMOUS = '<<anonymous>>';

    
    
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    
    
    function is(x, y) {
      
      if (x === y) {
        
        
        return x !== 0 || 1 / x === 1 / y;
      } else {
        
        return x !== x && y !== y;
      }
    }
    

    
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            
            invariant_1(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          } else if (typeof console !== 'undefined') {
            
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            
            manualPropTypeWarningCount < 3) {
              warning_1$1(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          
          
          
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        warning_1$1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
        return emptyFunction_1.thatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        warning_1$1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunction_1.thatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          warning_1$1(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
          return emptyFunction_1.thatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        
        
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      
      if (propType === 'symbol') {
        return true;
      }

      
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        
        
        
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    
    
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    
    
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  

  {
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

    var isValidElement = function (object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };

    
    
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  }
  });

  

  var invariant$2 = function (condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; 
      throw error;
    }
  };

  var invariant_1$1 = invariant$2;

  function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
  }

  
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k];
    }

    list.pop();
  }

  
  function resolvePathname(to) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var toParts = to && to.split('/') || [];
    var fromParts = from && from.split('/') || [];

    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;

    if (to && isAbsolute(to)) {
      
      fromParts = toParts;
    } else if (toParts.length) {
      
      fromParts.pop();
      fromParts = fromParts.concat(toParts);
    }

    if (!fromParts.length) return '/';

    var hasTrailingSlash = void 0;
    if (fromParts.length) {
      var last = fromParts[fromParts.length - 1];
      hasTrailingSlash = last === '.' || last === '..' || last === '';
    } else {
      hasTrailingSlash = false;
    }

    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
      var part = fromParts[i];

      if (part === '.') {
        spliceOne(fromParts, i);
      } else if (part === '..') {
        spliceOne(fromParts, i);
        up++;
      } else if (up) {
        spliceOne(fromParts, i);
        up--;
      }
    }

    if (!mustEndAbs) for (; up--; up) {
      fromParts.unshift('..');
    }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

    var result = fromParts.join('/');

    if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

    return result;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function valueEqual(a, b) {
    if (a === b) return true;

    if (a == null || b == null) return false;

    if (Array.isArray(a)) {
      return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
        return valueEqual(item, b[index]);
      });
    }

    var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
    var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

    if (aType !== bType) return false;

    if (aType === 'object') {
      var aValue = a.valueOf();
      var bValue = b.valueOf();

      if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);

      if (aKeys.length !== bKeys.length) return false;

      return aKeys.every(function (key) {
        return valueEqual(a[key], b[key]);
      });
    }

    return false;
  }

  var addLeadingSlash = function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  };

  var stripLeadingSlash = function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  };

  var hasBasename = function hasBasename(path, prefix) {
    return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
  };

  var stripBasename = function stripBasename(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  };

  var stripTrailingSlash = function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  };

  var parsePath = function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';

    var hashIndex = pathname.indexOf('#');
    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');
    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  };

  var createPath = function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;

    var path = pathname || '/';

    if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

    return path;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var createLocation = function createLocation(path, state, key, currentLocation) {
    var location = void 0;
    if (typeof path === 'string') {
      
      location = parsePath(path);
      location.state = state;
    } else {
      
      location = _extends({}, path);

      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    try {
      location.pathname = decodeURI(location.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
      } else {
        throw e;
      }
    }

    if (key) location.key = key;

    if (currentLocation) {
      
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
      }
    } else {
      
      if (!location.pathname) {
        location.pathname = '/';
      }
    }

    return location;
  };

  var locationsAreEqual = function locationsAreEqual(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
  };

  var createTransitionManager = function createTransitionManager() {
    var prompt = null;

    var setPrompt = function setPrompt(nextPrompt) {
      warning_1(prompt == null, 'A history supports only one prompt at a time');

      prompt = nextPrompt;

      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    };

    var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      
      
      
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            warning_1(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

            callback(true);
          }
        } else {
          
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    };

    var listeners = [];

    var appendListener = function appendListener(fn) {
      var isActive = true;

      var listener = function listener() {
        if (isActive) fn.apply(undefined, arguments);
      };

      listeners.push(listener);

      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    };

    var notifyListeners = function notifyListeners() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(undefined, args);
      });
    };

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  };

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  var addEventListener = function addEventListener(node, event, listener) {
    return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
  };

  var removeEventListener = function removeEventListener(node, event, listener) {
    return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
  };

  var getConfirmation = function getConfirmation(message, callback) {
    return callback(window.confirm(message));
  }; 

  
  var supportsHistory = function supportsHistory() {
    var ua = window.navigator.userAgent;

    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

    return window.history && 'pushState' in window.history;
  };

  
  var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  };

  
  var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  };

  
  var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  };

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  var getHistoryState = function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      
      
      return {};
    }
  };

  
  var createBrowserHistory = function createBrowserHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    invariant_1$1(canUseDOM, 'Browser history needs a DOM');

    var globalHistory = window.history;
    var canUseHistory = supportsHistory();
    var needsHashChangeListener = !supportsPopStateOnHashChange();

    var _props$forceRefresh = props.forceRefresh,
        forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
        _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    var getDOMLocation = function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;

      var path = pathname + search + hash;

      warning_1(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

      if (basename) path = stripBasename(path, basename);

      return createLocation(path, state, key);
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$1(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var handlePopState = function handlePopState(event) {
      
      if (isExtraneousPopstateEvent(event)) return;

      handlePop(getDOMLocation(event.state));
    };

    var handleHashChange = function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    };

    var forceNextPop = false;

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      
      
      

      var toIndex = allKeys.indexOf(toLocation.key);

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allKeys.indexOf(fromLocation.key);

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];

    

    var createHref = function createHref(location) {
      return basename + createPath(location);
    };

    var push = function push(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$1(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

            nextKeys.push(location.key);
            allKeys = nextKeys;

            setState({ action: action, location: location });
          }
        } else {
          warning_1(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

          window.location.href = href;
        }
      });
    };

    var replace = function replace(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$1(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);

            if (prevIndex !== -1) allKeys[prevIndex] = location.key;

            setState({ action: action, location: location });
          }
        } else {
          warning_1(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

          window.location.replace(href);
        }
      });
    };

    var go = function go(n) {
      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        addEventListener(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        removeEventListener(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  var _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var HashChangeEvent$1 = 'hashchange';

  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: stripLeadingSlash,
      decodePath: addLeadingSlash
    },
    slash: {
      encodePath: addLeadingSlash,
      decodePath: addLeadingSlash
    }
  };

  var getHashPath = function getHashPath() {
    
    
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  };

  var pushHashPath = function pushHashPath(path) {
    return window.location.hash = path;
  };

  var replaceHashPath = function replaceHashPath(path) {
    var hashIndex = window.location.href.indexOf('#');

    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
  };

  var createHashHistory = function createHashHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    invariant_1$1(canUseDOM, 'Hash history needs a DOM');

    var globalHistory = window.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

    var _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
        _props$hashType = props.hashType,
        hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;

    var getDOMLocation = function getDOMLocation() {
      var path = decodePath(getHashPath());

      warning_1(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

      if (basename) path = stripBasename(path, basename);

      return createLocation(path);
    };

    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$2(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var forceNextPop = false;
    var ignorePath = null;

    var handleHashChange = function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;

        if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; 

        if (ignorePath === createPath(location)) return; 

        ignorePath = null;

        handlePop(location);
      }
    };

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      
      
      

      var toIndex = allPaths.lastIndexOf(createPath(toLocation));

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) replaceHashPath(encodedPath);

    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)];

    

    var createHref = function createHref(location) {
      return '#' + encodePath(basename + createPath(location));
    };

    var push = function push(path, state) {
      warning_1(state === undefined, 'Hash history cannot push state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          
          
          
          ignorePath = path;
          pushHashPath(encodedPath);

          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextPaths.push(path);
          allPaths = nextPaths;

          setState({ action: action, location: location });
        } else {
          warning_1(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

          setState();
        }
      });
    };

    var replace = function replace(path, state) {
      warning_1(state === undefined, 'Hash history cannot replace state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          
          
          
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));

        if (prevIndex !== -1) allPaths[prevIndex] = path;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      warning_1(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        addEventListener(window, HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        removeEventListener(window, HashChangeEvent$1, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  };

  
  var createMemoryHistory = function createMemoryHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var getUserConfirmation = props.getUserConfirmation,
        _props$initialEntries = props.initialEntries,
        initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
        _props$initialIndex = props.initialIndex,
        initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

    var transitionManager = createTransitionManager();

    var setState = function setState(nextState) {
      _extends$3(history, nextState);

      history.length = history.entries.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
    });

    

    var createHref = createPath;

    var push = function push(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;

        var nextEntries = history.entries.slice(0);
        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    };

    var replace = function replace(path, state) {
      warning_1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        history.entries[history.index] = location;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

      var action = 'POP';
      var location = history.entries[nextIndex];

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          
          
          setState();
        }
      });
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var canGo = function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    };

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return transitionManager.setPrompt(prompt);
    };

    var listen = function listen(listener) {
      return transitionManager.appendListener(listener);
    };

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };

    return history;
  };

  var _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var Router = function (_React$Component) {
    _inherits(Router, _React$Component);

    function Router() {
      var _temp, _this, _ret;

      _classCallCheck(this, Router);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        match: _this.computeMatch(_this.props.history.location.pathname)
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Router.prototype.getChildContext = function getChildContext() {
      return {
        router: _extends$4({}, this.context.router, {
          history: this.props.history,
          route: {
            location: this.props.history.location,
            match: this.state.match
          }
        })
      };
    };

    Router.prototype.computeMatch = function computeMatch(pathname) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: pathname === "/"
      };
    };

    Router.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          history = _props.history;

      invariant_1$1(children == null || React.Children.count(children) === 1, "A <Router> may have only one child element");

      
      
      
      this.unlisten = history.listen(function () {
        _this2.setState({
          match: _this2.computeMatch(history.location.pathname)
        });
      });
    };

    Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      warning_1(this.props.history === nextProps.history, "You cannot change <Router history>");
    };

    Router.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unlisten();
    };

    Router.prototype.render = function render() {
      var children = this.props.children;

      return children ? React.Children.only(children) : null;
    };

    return Router;
  }(React.Component);

  Router.propTypes = {
    history: propTypes.object.isRequired,
    children: propTypes.node
  };
  Router.contextTypes = {
    router: propTypes.object
  };
  Router.childContextTypes = {
    router: propTypes.object.isRequired
  };

  

  var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  

  var BrowserRouter = function (_React$Component) {
    inherits(BrowserRouter, _React$Component);

    function BrowserRouter() {
      var _temp, _this, _ret;

      classCallCheck(this, BrowserRouter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createBrowserHistory(_this.props), _temp), possibleConstructorReturn(_this, _ret);
    }

    BrowserRouter.prototype.componentWillMount = function componentWillMount() {
      warning_1(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
    };

    BrowserRouter.prototype.render = function render() {
      return React.createElement(Router, { history: this.history, children: this.props.children });
    };

    return BrowserRouter;
  }(React.Component);

  BrowserRouter.propTypes = {
    basename: propTypes.string,
    forceRefresh: propTypes.bool,
    getUserConfirmation: propTypes.func,
    keyLength: propTypes.number,
    children: propTypes.node
  };

  

  var HashRouter = function (_React$Component) {
    inherits(HashRouter, _React$Component);

    function HashRouter() {
      var _temp, _this, _ret;

      classCallCheck(this, HashRouter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHashHistory(_this.props), _temp), possibleConstructorReturn(_this, _ret);
    }

    HashRouter.prototype.componentWillMount = function componentWillMount() {
      warning_1(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
    };

    HashRouter.prototype.render = function render() {
      return React.createElement(Router, { history: this.history, children: this.props.children });
    };

    return HashRouter;
  }(React.Component);

  HashRouter.propTypes = {
    basename: propTypes.string,
    getUserConfirmation: propTypes.func,
    hashType: propTypes.oneOf(["hashbang", "noslash", "slash"]),
    children: propTypes.node
  };

  var isModifiedEvent = function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  };

  

  var Link = function (_React$Component) {
    inherits(Link, _React$Component);

    function Link() {
      var _temp, _this, _ret;

      classCallCheck(this, Link);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) _this.props.onClick(event);

        if (!event.defaultPrevented && 
        event.button === 0 && 
        !_this.props.target && 
        !isModifiedEvent(event) 
        ) {
            event.preventDefault();

            var history = _this.context.router.history;
            var _this$props = _this.props,
                replace = _this$props.replace,
                to = _this$props.to;


            if (replace) {
              history.replace(to);
            } else {
              history.push(to);
            }
          }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    Link.prototype.render = function render() {
      var _props = this.props,
          replace = _props.replace,
          to = _props.to,
          innerRef = _props.innerRef,
          props = objectWithoutProperties(_props, ["replace", "to", "innerRef"]); 

      invariant_1$1(this.context.router, "You should not use <Link> outside a <Router>");

      invariant_1$1(to !== undefined, 'You must specify the "to" property');

      var history = this.context.router.history;

      var location = typeof to === "string" ? createLocation(to, null, null, history.location) : to;

      var href = history.createHref(location);
      return React.createElement("a", _extends$5({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
    };

    return Link;
  }(React.Component);

  Link.propTypes = {
    onClick: propTypes.func,
    target: propTypes.string,
    replace: propTypes.bool,
    to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
    innerRef: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  Link.defaultProps = {
    replace: false
  };
  Link.contextTypes = {
    router: propTypes.shape({
      history: propTypes.shape({
        push: propTypes.func.isRequired,
        replace: propTypes.func.isRequired,
        createHref: propTypes.func.isRequired
      }).isRequired
    }).isRequired
  };

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$1(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var MemoryRouter = function (_React$Component) {
    _inherits$1(MemoryRouter, _React$Component);

    function MemoryRouter() {
      var _temp, _this, _ret;

      _classCallCheck$1(this, MemoryRouter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createMemoryHistory(_this.props), _temp), _possibleConstructorReturn$1(_this, _ret);
    }

    MemoryRouter.prototype.componentWillMount = function componentWillMount() {
      warning_1(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
    };

    MemoryRouter.prototype.render = function render() {
      return React.createElement(Router, { history: this.history, children: this.props.children });
    };

    return MemoryRouter;
  }(React.Component);

  MemoryRouter.propTypes = {
    initialEntries: propTypes.array,
    initialIndex: propTypes.number,
    getUserConfirmation: propTypes.func,
    keyLength: propTypes.number,
    children: propTypes.node
  };

  

  var toString = {}.toString;

  var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  
  var pathToRegexp_1 = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  
  var PATH_REGEXP = new RegExp([
  
  
  '(\\\\.)',
  
  
  
  
  
  
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

  
  function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || '/';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      
      if (escaped) {
        path += escaped[1];
        continue;
      }

      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];

      
      if (path) {
        tokens.push(path);
        path = '';
      }

      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = res[2] || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
      });
    }

    
    if (index < str.length) {
      path += str.substr(index);
    }

    
    if (path) {
      tokens.push(path);
    }

    return tokens;
  }

  
  function compile(str, options) {
    return tokensToFunction(parse(str, options));
  }

  
  function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  
  function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  
  function tokensToFunction(tokens) {
    
    var matches = new Array(tokens.length);

    
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
      }
    }

    return function (obj, opts) {
      var path = '';
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue;
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            
            if (token.partial) {
              path += token.prefix;
            }

            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
          }

          if (value.length === 0) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue;
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
        }

        path += token.prefix + segment;
      }

      return path;
    };
  }

  
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
  }

  
  function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, '\\$1');
  }

  
  function attachKeys(re, keys) {
    re.keys = keys;
    return re;
  }

  
  function flags(options) {
    return options.sensitive ? '' : 'i';
  }

  
  function regexpToRegexp(path, keys) {
    
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys);
  }

  
  function arrayToRegexp(path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys);
  }

  
  function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
  }

  
  function tokensToRegExp(tokens, keys, options) {
    if (!isarray(keys)) {
      options = keys || options;
      keys = [];
    }

    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';

    
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

    
    
    
    
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      
      
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys);
  }

  
  function pathToRegexp(path, keys, options) {
    if (!isarray(keys)) {
      options = keys || options;
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys);
    }

    if (isarray(path)) {
      return arrayToRegexp( path, keys, options);
    }

    return stringToRegexp( path, keys, options);
  }
  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

  var patternCache = {};
  var cacheLimit = 10000;
  var cacheCount = 0;

  var compilePath = function compilePath(pattern, options) {
    var cacheKey = "" + options.end + options.strict + options.sensitive;
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

    if (cache[pattern]) return cache[pattern];

    var keys = [];
    var re = pathToRegexp_1(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };

    if (cacheCount < cacheLimit) {
      cache[pattern] = compiledPattern;
      cacheCount++;
    }

    return compiledPattern;
  };

  
  var matchPath = function matchPath(pathname) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parent = arguments[2];

    if (typeof options === "string") options = { path: options };

    var _options = options,
        path = _options.path,
        _options$exact = _options.exact,
        exact = _options$exact === undefined ? false : _options$exact,
        _options$strict = _options.strict,
        strict = _options$strict === undefined ? false : _options$strict,
        _options$sensitive = _options.sensitive,
        sensitive = _options$sensitive === undefined ? false : _options$sensitive;

    if (path == null) return parent;

    var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
        re = _compilePath.re,
        keys = _compilePath.keys;

    var match = re.exec(pathname);

    if (!match) return null;

    var url = match[0],
        values = match.slice(1);

    var isExact = pathname === url;

    if (exact && !isExact) return null;

    return {
      path: path, 
      url: path === "/" && url === "" ? "/" : url, 
      isExact: isExact, 
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  };

  var _extends$6 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$2(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var isEmptyChildren = function isEmptyChildren(children) {
    return React.Children.count(children) === 0;
  };

  

  var Route = function (_React$Component) {
    _inherits$2(Route, _React$Component);

    function Route() {
      var _temp, _this, _ret;

      _classCallCheck$2(this, Route);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        match: _this.computeMatch(_this.props, _this.context.router)
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }

    Route.prototype.getChildContext = function getChildContext() {
      return {
        router: _extends$6({}, this.context.router, {
          route: {
            location: this.props.location || this.context.router.route.location,
            match: this.state.match
          }
        })
      };
    };

    Route.prototype.computeMatch = function computeMatch(_ref, router) {
      var computedMatch = _ref.computedMatch,
          location = _ref.location,
          path = _ref.path,
          strict = _ref.strict,
          exact = _ref.exact,
          sensitive = _ref.sensitive;

      if (computedMatch) return computedMatch; 

      invariant_1$1(router, "You should not use <Route> or withRouter() outside a <Router>");

      var route = router.route;

      var pathname = (location || route.location).pathname;

      return matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
    };

    Route.prototype.componentWillMount = function componentWillMount() {
      warning_1(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

      warning_1(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

      warning_1(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
    };

    Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
      warning_1(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

      warning_1(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

      this.setState({
        match: this.computeMatch(nextProps, nextContext.router)
      });
    };

    Route.prototype.render = function render() {
      var match = this.state.match;
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          render = _props.render;
      var _context$router = this.context.router,
          history = _context$router.history,
          route = _context$router.route,
          staticContext = _context$router.staticContext;

      var location = this.props.location || route.location;
      var props = { match: match, location: location, history: history, staticContext: staticContext };

      if (component) return match ? React.createElement(component, props) : null;

      if (render) return match ? render(props) : null;

      if (typeof children === "function") return children(props);

      if (children && !isEmptyChildren(children)) return React.Children.only(children);

      return null;
    };

    return Route;
  }(React.Component);

  Route.propTypes = {
    computedMatch: propTypes.object, 
    path: propTypes.string,
    exact: propTypes.bool,
    strict: propTypes.bool,
    sensitive: propTypes.bool,
    component: propTypes.func,
    render: propTypes.func,
    children: propTypes.oneOfType([propTypes.func, propTypes.node]),
    location: propTypes.object
  };
  Route.contextTypes = {
    router: propTypes.shape({
      history: propTypes.object.isRequired,
      route: propTypes.object.isRequired,
      staticContext: propTypes.object
    })
  };
  Route.childContextTypes = {
    router: propTypes.object.isRequired
  };

  

  
  var NavLink = function NavLink(_ref) {
    var to = _ref.to,
        exact = _ref.exact,
        strict = _ref.strict,
        location = _ref.location,
        activeClassName = _ref.activeClassName,
        className = _ref.className,
        activeStyle = _ref.activeStyle,
        style = _ref.style,
        getIsActive = _ref.isActive,
        ariaCurrent = _ref["aria-current"],
        rest = objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

    var path = (typeof to === "undefined" ? "undefined" : _typeof$3(to)) === "object" ? to.pathname : to;

    
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

    return React.createElement(Route, {
      path: escapedPath,
      exact: exact,
      strict: strict,
      location: location,
      children: function children(_ref2) {
        var location = _ref2.location,
            match = _ref2.match;

        var isActive = !!(getIsActive ? getIsActive(match, location) : match);

        return React.createElement(Link, _extends$5({
          to: to,
          className: isActive ? [className, activeClassName].filter(function (i) {
            return i;
          }).join(" ") : className,
          style: isActive ? _extends$5({}, style, activeStyle) : style,
          "aria-current": isActive && ariaCurrent || null
        }, rest));
      }
    });
  };

  NavLink.propTypes = {
    to: Link.propTypes.to,
    exact: propTypes.bool,
    strict: propTypes.bool,
    location: propTypes.object,
    activeClassName: propTypes.string,
    className: propTypes.string,
    activeStyle: propTypes.object,
    style: propTypes.object,
    isActive: propTypes.func,
    "aria-current": propTypes.oneOf(["page", "step", "location", "date", "time", "true"])
  };

  NavLink.defaultProps = {
    activeClassName: "active",
    "aria-current": "page"
  };

  function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$3(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var Prompt = function (_React$Component) {
    _inherits$3(Prompt, _React$Component);

    function Prompt() {
      _classCallCheck$3(this, Prompt);

      return _possibleConstructorReturn$3(this, _React$Component.apply(this, arguments));
    }

    Prompt.prototype.enable = function enable(message) {
      if (this.unblock) this.unblock();

      this.unblock = this.context.router.history.block(message);
    };

    Prompt.prototype.disable = function disable() {
      if (this.unblock) {
        this.unblock();
        this.unblock = null;
      }
    };

    Prompt.prototype.componentWillMount = function componentWillMount() {
      invariant_1$1(this.context.router, "You should not use <Prompt> outside a <Router>");

      if (this.props.when) this.enable(this.props.message);
    };

    Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.when) {
        if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
      } else {
        this.disable();
      }
    };

    Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
      this.disable();
    };

    Prompt.prototype.render = function render() {
      return null;
    };

    return Prompt;
  }(React.Component);

  Prompt.propTypes = {
    when: propTypes.bool,
    message: propTypes.oneOfType([propTypes.func, propTypes.string]).isRequired
  };
  Prompt.defaultProps = {
    when: true
  };
  Prompt.contextTypes = {
    router: propTypes.shape({
      history: propTypes.shape({
        block: propTypes.func.isRequired
      }).isRequired
    }).isRequired
  };

  

  var patternCache$1 = {};
  var cacheLimit$1 = 10000;
  var cacheCount$1 = 0;

  var compileGenerator = function compileGenerator(pattern) {
    var cacheKey = pattern;
    var cache = patternCache$1[cacheKey] || (patternCache$1[cacheKey] = {});

    if (cache[pattern]) return cache[pattern];

    var compiledGenerator = pathToRegexp_1.compile(pattern);

    if (cacheCount$1 < cacheLimit$1) {
      cache[pattern] = compiledGenerator;
      cacheCount$1++;
    }

    return compiledGenerator;
  };

  
  var generatePath = function generatePath() {
    var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (pattern === "/") {
      return pattern;
    }
    var generator = compileGenerator(pattern);
    return generator(params, { pretty: true });
  };

  var _extends$7 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$4(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var Redirect = function (_React$Component) {
    _inherits$4(Redirect, _React$Component);

    function Redirect() {
      _classCallCheck$4(this, Redirect);

      return _possibleConstructorReturn$4(this, _React$Component.apply(this, arguments));
    }

    Redirect.prototype.isStatic = function isStatic() {
      return this.context.router && this.context.router.staticContext;
    };

    Redirect.prototype.componentWillMount = function componentWillMount() {
      invariant_1$1(this.context.router, "You should not use <Redirect> outside a <Router>");

      if (this.isStatic()) this.perform();
    };

    Redirect.prototype.componentDidMount = function componentDidMount() {
      if (!this.isStatic()) this.perform();
    };

    Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      var prevTo = createLocation(prevProps.to);
      var nextTo = createLocation(this.props.to);

      if (locationsAreEqual(prevTo, nextTo)) {
        warning_1(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
        return;
      }

      this.perform();
    };

    Redirect.prototype.computeTo = function computeTo(_ref) {
      var computedMatch = _ref.computedMatch,
          to = _ref.to;

      if (computedMatch) {
        if (typeof to === "string") {
          return generatePath(to, computedMatch.params);
        } else {
          return _extends$7({}, to, {
            pathname: generatePath(to.pathname, computedMatch.params)
          });
        }
      }

      return to;
    };

    Redirect.prototype.perform = function perform() {
      var history = this.context.router.history;
      var push = this.props.push;

      var to = this.computeTo(this.props);

      if (push) {
        history.push(to);
      } else {
        history.replace(to);
      }
    };

    Redirect.prototype.render = function render() {
      return null;
    };

    return Redirect;
  }(React.Component);

  Redirect.propTypes = {
    computedMatch: propTypes.object, 
    push: propTypes.bool,
    from: propTypes.string,
    to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
  };
  Redirect.defaultProps = {
    push: false
  };
  Redirect.contextTypes = {
    router: propTypes.shape({
      history: propTypes.shape({
        push: propTypes.func.isRequired,
        replace: propTypes.func.isRequired
      }).isRequired,
      staticContext: propTypes.object
    }).isRequired
  };

  

  var _extends$8 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$5(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var addLeadingSlash$1 = function addLeadingSlash(path) {
    return path.charAt(0) === "/" ? path : "/" + path;
  };

  var addBasename = function addBasename(basename, location) {
    if (!basename) return location;

    return _extends$8({}, location, {
      pathname: addLeadingSlash$1(basename) + location.pathname
    });
  };

  var stripBasename$1 = function stripBasename(basename, location) {
    if (!basename) return location;

    var base = addLeadingSlash$1(basename);

    if (location.pathname.indexOf(base) !== 0) return location;

    return _extends$8({}, location, {
      pathname: location.pathname.substr(base.length)
    });
  };

  var createURL = function createURL(location) {
    return typeof location === "string" ? location : createPath(location);
  };

  var staticHandler = function staticHandler(methodName) {
    return function () {
      invariant_1$1(false, "You cannot %s with <StaticRouter>", methodName);
    };
  };

  var noop = function noop() {};

  

  var StaticRouter = function (_React$Component) {
    _inherits$5(StaticRouter, _React$Component);

    function StaticRouter() {
      var _temp, _this, _ret;

      _classCallCheck$5(this, StaticRouter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
        return addLeadingSlash$1(_this.props.basename + createURL(path));
      }, _this.handlePush = function (location) {
        var _this$props = _this.props,
            basename = _this$props.basename,
            context = _this$props.context;

        context.action = "PUSH";
        context.location = addBasename(basename, createLocation(location));
        context.url = createURL(context.location);
      }, _this.handleReplace = function (location) {
        var _this$props2 = _this.props,
            basename = _this$props2.basename,
            context = _this$props2.context;

        context.action = "REPLACE";
        context.location = addBasename(basename, createLocation(location));
        context.url = createURL(context.location);
      }, _this.handleListen = function () {
        return noop;
      }, _this.handleBlock = function () {
        return noop;
      }, _temp), _possibleConstructorReturn$5(_this, _ret);
    }

    StaticRouter.prototype.getChildContext = function getChildContext() {
      return {
        router: {
          staticContext: this.props.context
        }
      };
    };

    StaticRouter.prototype.componentWillMount = function componentWillMount() {
      warning_1(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
    };

    StaticRouter.prototype.render = function render() {
      var _props = this.props,
          basename = _props.basename,
          context = _props.context,
          location = _props.location,
          props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

      var history = {
        createHref: this.createHref,
        action: "POP",
        location: stripBasename$1(basename, createLocation(location)),
        push: this.handlePush,
        replace: this.handleReplace,
        go: staticHandler("go"),
        goBack: staticHandler("goBack"),
        goForward: staticHandler("goForward"),
        listen: this.handleListen,
        block: this.handleBlock
      };

      return React.createElement(Router, _extends$8({}, props, { history: history }));
    };

    return StaticRouter;
  }(React.Component);

  StaticRouter.propTypes = {
    basename: propTypes.string,
    context: propTypes.object.isRequired,
    location: propTypes.oneOfType([propTypes.string, propTypes.object])
  };
  StaticRouter.defaultProps = {
    basename: "",
    location: "/"
  };
  StaticRouter.childContextTypes = {
    router: propTypes.object.isRequired
  };

  

  function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn$6(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits$6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var Switch = function (_React$Component) {
    _inherits$6(Switch, _React$Component);

    function Switch() {
      _classCallCheck$6(this, Switch);

      return _possibleConstructorReturn$6(this, _React$Component.apply(this, arguments));
    }

    Switch.prototype.componentWillMount = function componentWillMount() {
      invariant_1$1(this.context.router, "You should not use <Switch> outside a <Router>");
    };

    Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      warning_1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

      warning_1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
    };

    Switch.prototype.render = function render() {
      var route = this.context.router.route;
      var children = this.props.children;

      var location = this.props.location || route.location;

      var match = void 0,
          child = void 0;
      React.Children.forEach(children, function (element) {
        if (match == null && React.isValidElement(element)) {
          var _element$props = element.props,
              pathProp = _element$props.path,
              exact = _element$props.exact,
              strict = _element$props.strict,
              sensitive = _element$props.sensitive,
              from = _element$props.from;

          var path = pathProp || from;

          child = element;
          match = matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
        }
      });

      return match ? React.cloneElement(child, { location: location, computedMatch: match }) : null;
    };

    return Switch;
  }(React.Component);

  Switch.contextTypes = {
    router: propTypes.shape({
      route: propTypes.object.isRequired
    }).isRequired
  };
  Switch.propTypes = {
    children: propTypes.node,
    location: propTypes.object
  };

  

  

  

  var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
  
  (function (global, factory) {
      module.exports = factory();
  })(commonjsGlobal, function () {

      var REACT_STATICS = {
          childContextTypes: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          getDerivedStateFromProps: true,
          mixins: true,
          propTypes: true,
          type: true
      };

      var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          callee: true,
          arguments: true,
          arity: true
      };

      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

      return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
          if (typeof sourceComponent !== 'string') {
              

              if (objectPrototype) {
                  var inheritedComponent = getPrototypeOf(sourceComponent);
                  if (inheritedComponent && inheritedComponent !== objectPrototype) {
                      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                  }
              }

              var keys = getOwnPropertyNames(sourceComponent);

              if (getOwnPropertySymbols) {
                  keys = keys.concat(getOwnPropertySymbols(sourceComponent));
              }

              for (var i = 0; i < keys.length; ++i) {
                  var key = keys[i];
                  if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                      var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                      try {
                          
                          defineProperty(targetComponent, key, descriptor);
                      } catch (e) {}
                  }
              }

              return targetComponent;
          }

          return targetComponent;
      };
  });
  });

  var _extends$9 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _objectWithoutProperties$1(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  
  var withRouter = function withRouter(Component) {
    var C = function C(props) {
      var wrappedComponentRef = props.wrappedComponentRef,
          remainingProps = _objectWithoutProperties$1(props, ["wrappedComponentRef"]);

      return React.createElement(Route, {
        children: function children(routeComponentProps) {
          return React.createElement(Component, _extends$9({}, remainingProps, routeComponentProps, {
            ref: wrappedComponentRef
          }));
        }
      });
    };

    C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
    C.WrappedComponent = Component;
    C.propTypes = {
      wrappedComponentRef: propTypes.func
    };

    return hoistNonReactStatics(C, Component);
  };

  

  exports.BrowserRouter = BrowserRouter;
  exports.HashRouter = HashRouter;
  exports.Link = Link;
  exports.MemoryRouter = MemoryRouter;
  exports.NavLink = NavLink;
  exports.Prompt = Prompt;
  exports.Redirect = Redirect;
  exports.Route = Route;
  exports.Router = Router;
  exports.StaticRouter = StaticRouter;
  exports.Switch = Switch;
  exports.generatePath = generatePath;
  exports.matchPath = matchPath;
  exports.withRouter = withRouter;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
