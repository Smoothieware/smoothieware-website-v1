var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS((exports, module) => {
  /*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   */
  (function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
    } else {
      factory(global);
    }
  })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString2 = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
      return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
      return obj != null && obj === obj.window;
    };
    var document = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc) {
      doc = doc || document;
      var i2, val, script = doc.createElement("script");
      script.text = code;
      if (node) {
        for (i2 in preservedScriptAttributes) {
          val = node[i2] || node.getAttribute && node.getAttribute(i2);
          if (val) {
            script.setAttribute(i2, val);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString2.call(obj)] || "object" : typeof obj;
    }
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
      jquery: version,
      constructor: jQuery,
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i2) {
          return callback.call(elem, i2, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return (i2 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return i2 % 2;
        }));
      },
      eq: function(i2) {
        var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push,
      sort: arr.sort,
      splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i2] || {};
        i2++;
      }
      if (typeof target !== "object" && !isFunction(target)) {
        target = {};
      }
      if (i2 === length) {
        target = this;
        i2--;
      }
      for (;i2 < length; i2++) {
        if ((options = arguments[i2]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name] = jQuery.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {},
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString2.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length, i2 = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (;i2 < length; i2++) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        } else {
          for (i2 in obj) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      text: function(elem) {
        var node, ret = "", i2 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i2++]) {
            ret += jQuery.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem.textContent;
        }
        if (nodeType === 9) {
          return elem.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i2) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i2 = first.length;
        for (;j < len; j++) {
          first[i2++] = second[j];
        }
        first.length = i2;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
        for (;i2 < length; i2++) {
          callbackInverse = !callback(elems[i2], i2);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i2]);
          }
        }
        return matches;
      },
      map: function(elems, callback, arg) {
        var length, value, i2 = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (;i2 < length; i2++) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i2 in elems) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      guid: 1,
      support
    });
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length, type2 = toType(obj);
      if (isFunction(obj) || isWindow(obj)) {
        return false;
      }
      return type2 === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    jQuery.contains = function(a, b) {
      var bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\x00") {
          return "�";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document, pushNative = push;
    (function() {
      var i2, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document2, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" + "loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + `('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|` + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
        ID: new RegExp("^#(" + identifier + ")"),
        CLASS: new RegExp("^\\.(" + identifier + ")"),
        TAG: new RegExp("^(" + identifier + "|[*])"),
        ATTR: new RegExp("^" + attributes),
        PSEUDO: new RegExp("^" + pseudos),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + booleans + ")$", "i"),
        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
        var high = "0x" + escape.slice(1) - 65536;
        if (nonHex) {
          return nonHex;
        }
        return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }, unloadHandler = function() {
        setDocument();
      }, inDisabledFieldset = addCombinator(function(elem) {
        return elem.disabled === true && nodeName(elem, "fieldset");
      }, { dir: "parentNode", next: "legend" });
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {}
      }
      try {
        push2.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push2 = {
          apply: function(target, els) {
            pushNative.apply(target, slice.call(els));
          },
          call: function(target) {
            pushNative.apply(target, slice.call(arguments, 1));
          }
        };
      }
      function find(selector, context, results, seed) {
        var m, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          setDocument(context);
          context = context || document2;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
              if (m = match[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m)) {
                    if (elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                    push2.call(results, elem);
                    return results;
                  }
                }
              } else if (match[2]) {
                push2.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m = match[3]) && context.getElementsByClassName) {
                push2.apply(results, context.getElementsByClassName(m));
                return results;
              }
            }
            if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              newSelector = selector;
              newContext = context;
              if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                if (newContext != context || !support.scope) {
                  if (nid = context.getAttribute("id")) {
                    nid = jQuery.escapeSelector(nid);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                }
                groups = tokenize(selector);
                i3 = groups.length;
                while (i3--) {
                  groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                }
                newSelector = groups.join(",");
              }
              try {
                push2.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {
                nonnativeSelectorCache(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var el = document2.createElement("fieldset");
        try {
          return !!fn(el);
        } catch (e) {
          return false;
        } finally {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
          el = null;
        }
      }
      function createInputPseudo(type2) {
        return function(elem) {
          return nodeName(elem, "input") && elem.type === type2;
        };
      }
      function createButtonPseudo(type2) {
        return function(elem) {
          return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type2;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          if ("form" in elem) {
            if (elem.parentNode && elem.disabled === false) {
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              }
              return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }
            return elem.disabled === disabled;
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          }
          return false;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches2) {
            var j, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
            while (i3--) {
              if (seed[j = matchIndexes[i3]]) {
                seed[j] = !(matches2[j] = seed[j]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      function setDocument(node) {
        var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc == document2 || doc.nodeType !== 9 || !doc.documentElement) {
          return document2;
        }
        document2 = doc;
        documentElement2 = document2.documentElement;
        documentIsHTML = !jQuery.isXMLDoc(document2);
        matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
        if (documentElement2.msMatchesSelector && preferredDoc != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
          subWindow.addEventListener("unload", unloadHandler);
        }
        support.getById = assert(function(el) {
          documentElement2.appendChild(el).id = jQuery.expando;
          return !document2.getElementsByName || !document2.getElementsByName(jQuery.expando).length;
        });
        support.disconnectedMatch = assert(function(el) {
          return matches.call(el, "*");
        });
        support.scope = assert(function() {
          return document2.querySelectorAll(":scope");
        });
        support.cssHas = assert(function() {
          try {
            document2.querySelector(":has(*,:jqfake)");
            return false;
          } catch (e) {
            return true;
          }
        });
        if (support.getById) {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node2 && node2.value === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node2, i3, elems, elem = context.getElementById(id);
              if (elem) {
                node2 = elem.getAttributeNode("id");
                if (node2 && node2.value === id) {
                  return [elem];
                }
                elems = context.getElementsByName(id);
                i3 = 0;
                while (elem = elems[i3++]) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                }
              }
              return [];
            }
          };
        }
        Expr.find.TAG = function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        };
        Expr.find.CLASS = function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyQSA = [];
        assert(function(el) {
          var input;
          documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          input = document2.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          documentElement2.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          input = document2.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);
          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
          }
        });
        if (!support.cssHas) {
          rbuggyQSA.push(":has");
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare) {
            return compare;
          }
          compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
          if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a === document2 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
              return -1;
            }
            if (b === document2 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        };
        return document2;
      }
      find.matches = function(expr, elements) {
        return find(expr, null, null, elements);
      };
      find.matchesSelector = function(elem, expr) {
        setDocument(elem);
        if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
            nonnativeSelectorCache(expr, true);
          }
        }
        return find(expr, document2, null, [elem]).length > 0;
      };
      find.contains = function(context, elem) {
        if ((context.ownerDocument || context) != document2) {
          setDocument(context);
        }
        return jQuery.contains(context, elem);
      };
      find.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) != document2) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
        if (val !== undefined) {
          return val;
        }
        return elem.getAttribute(name);
      };
      find.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      jQuery.uniqueSort = function(results) {
        var elem, duplicates = [], j = 0, i3 = 0;
        hasDuplicate = !support.sortStable;
        sortInput = !support.sortStable && slice.call(results, 0);
        sort.call(results, sortOrder);
        if (hasDuplicate) {
          while (elem = results[i3++]) {
            if (elem === results[i3]) {
              j = duplicates.push(i3);
            }
          }
          while (j--) {
            splice.call(results, duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      jQuery.fn.uniqueSort = function() {
        return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
      };
      Expr = jQuery.expr = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }
            return match.slice(0, 4);
          },
          CHILD: function(match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === "nth") {
              if (!match[3]) {
                find.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd");
            } else if (match[3]) {
              find.error(match[0]);
            }
            return match;
          },
          PSEUDO: function(match) {
            var excess, unquoted = !match[6] && match[2];
            if (matchExpr.CHILD.test(match[0])) {
              return null;
            }
            if (match[3]) {
              match[2] = match[4] || match[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          TAG: function(nodeNameSelector) {
            var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function() {
              return true;
            } : function(elem) {
              return nodeName(elem, expectedNodeName);
            };
          },
          CLASS: function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
              return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
            });
          },
          ATTR: function(name, operator, check) {
            return function(elem) {
              var result = find.attr(elem, name);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              if (operator === "=") {
                return result === check;
              }
              if (operator === "!=") {
                return result !== check;
              }
              if (operator === "^=") {
                return check && result.indexOf(check) === 0;
              }
              if (operator === "*=") {
                return check && result.indexOf(check) > -1;
              }
              if (operator === "$=") {
                return check && result.slice(-check.length) === check;
              }
              if (operator === "~=") {
                return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
              }
              if (operator === "|=") {
                return result === check || result.slice(0, check.length + 1) === check + "-";
              }
              return false;
            };
          },
          CHILD: function(type2, what, _argument, first, last) {
            var simple = type2.slice(0, 3) !== "nth", forward = type2.slice(-4) !== "last", ofType = what === "of-type";
            return first === 1 && last === 0 ? function(elem) {
              return !!elem.parentNode;
            } : function(elem, _context, xml) {
              var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
              if (parent) {
                if (simple) {
                  while (dir2) {
                    node = elem;
                    while (node = node[dir2]) {
                      if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir2 = type2 === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  outerCache = parent[expando] || (parent[expando] = {});
                  cache = outerCache[type2] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      outerCache[type2] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    cache = outerCache[type2] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {});
                          outerCache[type2] = [dirruns, diff];
                        }
                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          PSEUDO: function(pseudo, argument) {
            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                var idx, matched = fn(seed, argument), i3 = matched.length;
                while (i3--) {
                  idx = indexOf.call(seed, matched[i3]);
                  seed[idx] = !(matches2[idx] = matched[i3]);
                }
              }) : function(elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          not: markFunction(function(selector) {
            var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
            return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
              var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
              while (i3--) {
                if (elem = unmatched[i3]) {
                  seed[i3] = !(matches2[i3] = elem);
                }
              }
            }) : function(elem, _context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          has: markFunction(function(selector) {
            return function(elem) {
              return find(selector, elem).length > 0;
            };
          }),
          contains: markFunction(function(text) {
            text = text.replace(runescape, funescape);
            return function(elem) {
              return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
            };
          }),
          lang: markFunction(function(lang) {
            if (!ridentifier.test(lang || "")) {
              find.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          target: function(elem) {
            var hash = window2.location && window2.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          root: function(elem) {
            return elem === documentElement2;
          },
          focus: function(elem) {
            return elem === safeActiveElement() && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          enabled: createDisabledPseudo(false),
          disabled: createDisabledPseudo(true),
          checked: function(elem) {
            return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
          },
          selected: function(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          empty: function(elem) {
            for (elem = elem.firstChild;elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function(elem) {
            return !Expr.pseudos.empty(elem);
          },
          header: function(elem) {
            return rheader.test(elem.nodeName);
          },
          input: function(elem) {
            return rinputs.test(elem.nodeName);
          },
          button: function(elem) {
            return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
          },
          text: function(elem) {
            var attr;
            return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },
          first: createPositionalPseudo(function() {
            return [0];
          }),
          last: createPositionalPseudo(function(_matchIndexes, length) {
            return [length - 1];
          }),
          eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          even: createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 0;
            for (;i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          odd: createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 1;
            for (;i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          lt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3;
            if (argument < 0) {
              i3 = argument + length;
            } else if (argument > length) {
              i3 = length;
            } else {
              i3 = argument;
            }
            for (;--i3 >= 0; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          gt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3 = argument < 0 ? argument + length : argument;
            for (;++i3 < length; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos.nth = Expr.pseudos.eq;
      for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
        Expr.pseudos[i2] = createInputPseudo(i2);
      }
      for (i2 in { submit: true, reset: true }) {
        Expr.pseudos[i2] = createButtonPseudo(i2);
      }
      function setFilters() {}
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters;
      function tokenize(selector, parseOnly) {
        var matched, match, tokens, type2, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rleadingCombinator.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: match[0].replace(rtrimCSS, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type2 in Expr.filter) {
            if ((match = matchExpr[type2].exec(soFar)) && (!preFilters[type2] || (match = preFilters[type2](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: type2,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        if (parseOnly) {
          return soFar.length;
        }
        return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
      }
      function toSelector(tokens) {
        var i3 = 0, len = tokens.length, selector = "";
        for (;i3 < len; i3++) {
          selector += tokens[i3].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var { dir: dir2, next: skip } = combinator, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
        return combinator.first ? function(elem, context, xml) {
          while (elem = elem[dir2]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        } : function(elem, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir2] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i3 = matchers.length;
          while (i3--) {
            if (!matchers[i3](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i3 = 0, len = contexts.length;
        for (;i3 < len; i3++) {
          find(selector, contexts[i3], results);
        }
        return results;
      }
      function condense(unmatched, map2, filter, context, xml) {
        var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map2 != null;
        for (;i3 < len; i3++) {
          if (elem = unmatched[i3]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map2.push(i3);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml) {
          var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
          if (matcher) {
            matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
            matcher(matcherIn, matcherOut, context, xml);
          } else {
            matcherOut = matcherIn;
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i3 = temp.length;
            while (i3--) {
              if (elem = temp[i3]) {
                matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i3 = matcherOut.length;
                while (i3--) {
                  if (elem = matcherOut[i3]) {
                    temp.push(matcherIn[i3] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i3 = matcherOut.length;
              while (i3--) {
                if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push2.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml) {
          var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          checkContext = null;
          return ret;
        }];
        for (;i3 < len; i3++) {
          if (matcher = Expr.relative[tokens[i3].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
            if (matcher[expando]) {
              j = ++i3;
              for (;j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(i3 > 1 && elementMatcher(matchers), i3 > 1 && toSelector(tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })).replace(rtrimCSS, "$1"), matcher, i3 < j && matcherFromTokens(tokens.slice(i3, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
          var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
          if (outermost) {
            outermostContext = context == document2 || context || outermost;
          }
          for (;i3 !== len && (elem = elems[i3]) != null; i3++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument != document2) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document2, xml)) {
                  push2.call(results, elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i3;
          if (bySet && i3 !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i3--) {
                  if (!(unmatched[i3] || setMatched[i3])) {
                    setMatched[i3] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push2.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              jQuery.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      function compile(selector, match) {
        var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match) {
            match = tokenize(selector);
          }
          i3 = match.length;
          while (i3--) {
            cached = matcherFromTokens(match[i3]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
          cached.selector = selector;
        }
        return cached;
      }
      function select(selector, context, results, seed) {
        var i3, tokens, token, type2, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i3 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          while (i3--) {
            token = tokens[i3];
            if (Expr.relative[type2 = token.type]) {
              break;
            }
            if (find2 = Expr.find[type2]) {
              if (seed = find2(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                tokens.splice(i3, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push2.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
        return results;
      }
      support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      setDocument();
      support.sortDetached = assert(function(el) {
        return el.compareDocumentPosition(document2.createElement("fieldset")) & 1;
      });
      jQuery.find = find;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.unique = jQuery.uniqueSort;
      find.compile = compile;
      find.select = select;
      find.setDocument = setDocument;
      find.tokenize = tokenize;
      find.escape = jQuery.escapeSelector;
      find.getText = jQuery.text;
      find.isXML = jQuery.isXMLDoc;
      find.selectors = jQuery.expr;
      find.support = jQuery.support;
      find.uniqueSort = jQuery.uniqueSort;
    })();
    var dir = function(elem, dir2, until) {
      var matched = [], truncate = until !== undefined;
      while ((elem = elem[dir2]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var siblings = function(n, elem) {
      var matched = [];
      for (;n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }
      return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(elements, qualifier, not) {
      if (isFunction(qualifier)) {
        return jQuery.grep(elements, function(elem, i2) {
          return !!qualifier.call(elem, i2, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery.grep(elements, function(elem) {
          return indexOf.call(qualifier, elem) > -1 !== not;
        });
      }
      return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      if (not) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
      }
      return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
        return elem2.nodeType === 1;
      }));
    };
    jQuery.fn.extend({
      find: function(selector) {
        var i2, ret, len = this.length, self = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery(selector).filter(function() {
            for (i2 = 0;i2 < len; i2++) {
              if (jQuery.contains(self[i2], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i2 = 0;i2 < len; i2++) {
          jQuery.find(selector, self[i2], ret);
        }
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
      var match, elem;
      if (!selector) {
        return this;
      }
      root = root || rootjQuery;
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document.getElementById(match[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || root).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction(selector)) {
        return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
      }
      return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery.fn.extend({
      has: function(target) {
        var targets = jQuery(target, this), l = targets.length;
        return this.filter(function() {
          var i2 = 0;
          for (;i2 < l; i2++) {
            if (jQuery.contains(this, targets[i2])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
        if (!rneedsContext.test(selectors)) {
          for (;i2 < l; i2++) {
            for (cur = this[i2];cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
      },
      index: function(elem) {
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem === "string") {
          return indexOf.call(jQuery(elem), this[0]);
        }
        return indexOf.call(this, elem.jquery ? elem[0] : elem);
      },
      add: function(selector, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
      },
      addBack: function(selector) {
        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {}
      return cur;
    }
    jQuery.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function(elem, _i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function(elem, _i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function(elem, _i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function(elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function(elem) {
        return siblings(elem.firstChild);
      },
      contents: function(elem) {
        if (elem.contentDocument != null && getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }
        return jQuery.merge([], elem.childNodes);
      }
    }, function(name, fn) {
      jQuery.fn[name] = function(until, selector) {
        var matched = jQuery.map(this, fn, until);
        if (name.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name]) {
            jQuery.uniqueSort(matched);
          }
          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    function createOptions(options) {
      var object = {};
      jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (;queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self = {
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add(args) {
              jQuery.each(args, function(_, arg) {
                if (isFunction(arg)) {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        remove: function() {
          jQuery.each(arguments, function(_, arg) {
            var index;
            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        has: function(fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
        },
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        fire: function() {
          self.fireWith(this, arguments);
          return this;
        },
        fired: function() {
          return !!fired;
        }
      };
      return self;
    };
    function Identity(v) {
      return v;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && isFunction(method = value.promise)) {
          method.call(value).done(resolve).fail(reject);
        } else if (value && isFunction(method = value.then)) {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(undefined, [value].slice(noValue));
        }
      } catch (value2) {
        reject.apply(undefined, [value2]);
      }
    }
    jQuery.extend({
      Deferred: function(func) {
        var tuples = [
          [
            "notify",
            "progress",
            jQuery.Callbacks("memory"),
            jQuery.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          catch: function(fn) {
            return promise.then(null, fn);
          },
          pipe: function() {
            var fns = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(tuples, function(_i, tuple) {
                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && isFunction(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (isFunction(then)) {
                    if (special) {
                      then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                    } else {
                      maxDepth++;
                      then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                    }
                  } else {
                    if (handler !== Identity) {
                      that = undefined;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(e, process.error);
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = undefined;
                        args = [e];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery.Deferred.getErrorHook) {
                    process.error = jQuery.Deferred.getErrorHook();
                  } else if (jQuery.Deferred.getStackHook) {
                    process.error = jQuery.Deferred.getStackHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery.Deferred(function(newDefer) {
              tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
              tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
              tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
            }).promise();
          },
          promise: function(obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery.each(tuples, function(i2, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, tuples[3 - i2][2].disable, tuples[3 - i2][3].disable, tuples[0][2].lock, tuples[0][3].lock);
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      when: function(singleValue) {
        var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i3) {
          return function(value) {
            resolveContexts[i3] = this;
            resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(singleValue, primary.done(updateFunc(i2)).resolve, primary.reject, !remaining);
          if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
            return primary.then();
          }
        }
        while (i2--) {
          adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
      if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
        window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
      }
    };
    jQuery.readyException = function(error) {
      window2.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
      readyList.then(fn).catch(function(error) {
        jQuery.readyException(error);
      });
      return this;
    };
    jQuery.extend({
      isReady: false,
      readyWait: 1,
      ready: function(wait) {
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
          return;
        }
        jQuery.isReady = true;
        if (wait !== true && --jQuery.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document, [jQuery]);
      }
    });
    jQuery.ready.then = readyList.then;
    function completed() {
      document.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery.ready();
    }
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
      window2.setTimeout(jQuery.ready);
    } else {
      document.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      var i2 = 0, len = elems.length, bulk = key == null;
      if (toType(key) === "object") {
        chainable = true;
        for (i2 in key) {
          access(elems, fn, i2, key[i2], true, emptyGet, raw);
        }
      } else if (value !== undefined) {
        chainable = true;
        if (!isFunction(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem, _key, value2) {
              return bulk.call(jQuery(elem), value2);
            };
          }
        }
        if (fn) {
          for (;i2 < len; i2++) {
            fn(elems[i2], key, raw ? value : value.call(elems[i2], i2, fn(elems[i2], key)));
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn.call(elems);
      }
      return len ? fn(elems[0], key) : emptyGet;
    };
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = {};
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get: function(owner, key) {
        return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function(owner, key, value) {
        if (key === undefined || key && typeof key === "string" && value === undefined) {
          return this.get(owner, key);
        }
        this.set(owner, key, value);
        return value !== undefined ? value : key;
      },
      remove: function(owner, key) {
        var i2, cache = owner[this.expando];
        if (cache === undefined) {
          return;
        }
        if (key !== undefined) {
          if (Array.isArray(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }
          i2 = key.length;
          while (i2--) {
            delete cache[key[i2]];
          }
        }
        if (key === undefined || jQuery.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = undefined;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== undefined && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data;
    var dataUser = new Data;
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem, key, data) {
      var name;
      if (data === undefined && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {}
          dataUser.set(elem, key, data);
        } else {
          data = undefined;
        }
      }
      return data;
    }
    jQuery.extend({
      hasData: function(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function(elem, name, data) {
        return dataUser.access(elem, name, data);
      },
      removeData: function(elem, name) {
        dataUser.remove(elem, name);
      },
      _data: function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData: function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data: function(key, value) {
        var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
        if (key === undefined) {
          if (this.length) {
            data = dataUser.get(elem);
            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i2 = attrs.length;
              while (i2--) {
                if (attrs[i2]) {
                  name = attrs[i2].name;
                  if (name.indexOf("data-") === 0) {
                    name = camelCase(name.slice(5));
                    dataAttr(elem, name, data[name]);
                  }
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key === "object") {
          return this.each(function() {
            dataUser.set(this, key);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem && value2 === undefined) {
            data2 = dataUser.get(elem, key);
            if (data2 !== undefined) {
              return data2;
            }
            data2 = dataAttr(elem, key);
            if (data2 !== undefined) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key) {
        return this.each(function() {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue: function(elem, type2, data) {
        var queue;
        if (elem) {
          type2 = (type2 || "fx") + "queue";
          queue = dataPriv.get(elem, type2);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.access(elem, type2, jQuery.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem, type2) {
        type2 = type2 || "fx";
        var queue = jQuery.queue(elem, type2), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type2), next = function() {
          jQuery.dequeue(elem, type2);
        };
        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }
        if (fn) {
          if (type2 === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn.call(elem, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      _queueHooks: function(elem, type2) {
        var key = type2 + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty: jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type2 + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue: function(type2, data) {
        var setter = 2;
        if (typeof type2 !== "string") {
          data = type2;
          type2 = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery.queue(this[0], type2);
        }
        return data === undefined ? this : this.each(function() {
          var queue = jQuery.queue(this, type2, data);
          jQuery._queueHooks(this, type2);
          if (type2 === "fx" && queue[0] !== "inprogress") {
            jQuery.dequeue(this, type2);
          }
        });
      },
      dequeue: function(type2) {
        return this.each(function() {
          jQuery.dequeue(this, type2);
        });
      },
      clearQueue: function(type2) {
        return this.queue(type2 || "fx", []);
      },
      promise: function(type2, obj) {
        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if (typeof type2 !== "string") {
          obj = type2;
          type2 = undefined;
        }
        type2 = type2 || "fx";
        while (i2--) {
          tmp = dataPriv.get(elements[i2], type2 + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    }, composed = { composed: true };
    if (documentElement.getRootNode) {
      isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
      };
    }
    var isHiddenWithinTree = function(elem, el) {
      elem = el || elem;
      return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show) {
      var display, elem, values = [], index = 0, length = elements.length;
      for (;index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
          continue;
        }
        display = elem.style.display;
        if (show) {
          if (display === "none") {
            values[index] = dataPriv.get(elem, "display") || null;
            if (!values[index]) {
              elem.style.display = "";
            }
          }
          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
      for (index = 0;index < length; index++) {
        if (values[index] != null) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    jQuery.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      div.appendChild(input);
      support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      div.innerHTML = "<option></option>";
      support.option = !!div.lastChild;
    })();
    var wrapMap = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!support.option) {
      wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    function getAll(context, tag) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }
      if (tag === undefined || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
      }
      return ret;
    }
    function setGlobalEval(elems, refElements) {
      var i2 = 0, l = elems.length;
      for (;i2 < l; i2++) {
        dataPriv.set(elems[i2], "globalEval", !refElements || dataPriv.get(refElements[i2], "globalEval"));
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
      for (;i2 < l; i2++) {
        elem = elems[i2];
        if (elem || elem === 0) {
          if (toType(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i2 = 0;
      while (elem = nodes[i2++]) {
        if (selection && jQuery.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
        attached = isAttached(elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function on(elem, types2, selector, data, fn, one) {
      var origFn, type2;
      if (typeof types2 === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = undefined;
        }
        for (type2 in types2) {
          on(elem, type2, selector, data, types2[type2], one);
        }
        return elem;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = undefined;
        } else {
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return elem.each(function() {
        jQuery.event.add(this, types2, fn, data, selector);
      });
    }
    jQuery.event = {
      global: {},
      add: function(elem, types2, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type2, namespaces, origType, elemData = dataPriv.get(elem);
        if (!acceptData(elem)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery.find.matchesSelector(documentElement, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
          };
        }
        types2 = (types2 || "").match(rnothtmlwhite) || [""];
        t = types2.length;
        while (t--) {
          tmp = rtypenamespace.exec(types2[t]) || [];
          type2 = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type2) {
            continue;
          }
          special = jQuery.event.special[type2] || {};
          type2 = (selector ? special.delegateType : special.bindType) || type2;
          special = jQuery.event.special[type2] || {};
          handleObj = jQuery.extend({
            type: type2,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type2])) {
            handlers = events[type2] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type2, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
          jQuery.event.global[type2] = true;
        }
      },
      remove: function(elem, types2, handler, selector, mappedTypes) {
        var j, origCount, tmp, events, t, handleObj, special, handlers, type2, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types2 = (types2 || "").match(rnothtmlwhite) || [""];
        t = types2.length;
        while (t--) {
          tmp = rtypenamespace.exec(types2[t]) || [];
          type2 = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type2) {
            for (type2 in events) {
              jQuery.event.remove(elem, type2 + types2[t], handler, selector, true);
            }
            continue;
          }
          special = jQuery.event.special[type2] || {};
          type2 = (selector ? special.delegateType : special.bindType) || type2;
          handlers = events[type2] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j = handlers.length;
          while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery.removeEvent(elem, type2, elemData.handle);
            }
            delete events[type2];
          }
        }
        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
        args[0] = event;
        for (i2 = 1;i2 < arguments.length; i2++) {
          args[i2] = arguments[i2];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        i2 = 0;
        while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;
          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== undefined) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
          for (;cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i2 = 0;i2 < delegateCount; i2++) {
                handleObj = handlers[i2];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === undefined) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name, hook) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable: true,
          configurable: true,
          get: isFunction(hook) ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", true);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== undefined && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    function leverageNative(el, type2, isSetup) {
      if (!isSetup) {
        if (dataPriv.get(el, type2) === undefined) {
          jQuery.event.add(el, type2, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type2, false);
      jQuery.event.add(el, type2, {
        namespace: false,
        handler: function(event) {
          var result, saved = dataPriv.get(this, type2);
          if (event.isTrigger & 1 && this[type2]) {
            if (!saved) {
              saved = slice.call(arguments);
              dataPriv.set(this, type2, saved);
              this[type2]();
              result = dataPriv.get(this, type2);
              dataPriv.set(this, type2, false);
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result;
              }
            } else if ((jQuery.event.special[type2] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved) {
            dataPriv.set(this, type2, jQuery.event.trigger(saved[0], saved.slice(1), this));
            event.stopPropagation();
            event.isImmediatePropagationStopped = returnTrue;
          }
        }
      });
    }
    jQuery.removeEvent = function(elem, type2, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type2, handle);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery.event.addProp);
    jQuery.each({ focus: "focusin", blur: "focusout" }, function(type2, delegateType) {
      function focusMappedHandler(nativeEvent) {
        if (document.documentMode) {
          var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
          event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
          event.isSimulated = true;
          handle(nativeEvent);
          if (event.target === event.currentTarget) {
            handle(event);
          }
        } else {
          jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
        }
      }
      jQuery.event.special[type2] = {
        setup: function() {
          var attaches;
          leverageNative(this, type2, true);
          if (document.documentMode) {
            attaches = dataPriv.get(this, delegateType);
            if (!attaches) {
              this.addEventListener(delegateType, focusMappedHandler);
            }
            dataPriv.set(this, delegateType, (attaches || 0) + 1);
          } else {
            return false;
          }
        },
        trigger: function() {
          leverageNative(this, type2);
          return true;
        },
        teardown: function() {
          var attaches;
          if (document.documentMode) {
            attaches = dataPriv.get(this, delegateType) - 1;
            if (!attaches) {
              this.removeEventListener(delegateType, focusMappedHandler);
              dataPriv.remove(this, delegateType);
            } else {
              dataPriv.set(this, delegateType, attaches);
            }
          } else {
            return false;
          }
        },
        _default: function(event) {
          return dataPriv.get(event.target, type2);
        },
        delegateType
      };
      jQuery.event.special[delegateType] = {
        setup: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
          if (!attaches) {
            if (document.documentMode) {
              this.addEventListener(delegateType, focusMappedHandler);
            } else {
              doc.addEventListener(type2, focusMappedHandler, true);
            }
          }
          dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
          if (!attaches) {
            if (document.documentMode) {
              this.removeEventListener(delegateType, focusMappedHandler);
            } else {
              doc.removeEventListener(type2, focusMappedHandler, true);
            }
            dataPriv.remove(dataHolder, delegateType);
          } else {
            dataPriv.set(dataHolder, delegateType, attaches);
          }
        }
      };
    });
    jQuery.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery.fn.extend({
      on: function(types2, selector, data, fn) {
        return on(this, types2, selector, data, fn);
      },
      one: function(types2, selector, data, fn) {
        return on(this, types2, selector, data, fn, 1);
      },
      off: function(types2, selector, fn) {
        var handleObj, type2;
        if (types2 && types2.preventDefault && types2.handleObj) {
          handleObj = types2.handleObj;
          jQuery(types2.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
          return this;
        }
        if (typeof types2 === "object") {
          for (type2 in types2) {
            this.off(type2, selector, types2[type2]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn = selector;
          selector = undefined;
        }
        if (fn === false) {
          fn = returnFalse;
        }
        return this.each(function() {
          jQuery.event.remove(this, types2, fn, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery(elem).children("tbody")[0] || elem;
      }
      return elem;
    }
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
    function cloneCopyEvent(src, dest) {
      var i2, l, type2, pdataOld, udataOld, udataCur, events;
      if (dest.nodeType !== 1) {
        return;
      }
      if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.get(src);
        events = pdataOld.events;
        if (events) {
          dataPriv.remove(dest, "handle events");
          for (type2 in events) {
            for (i2 = 0, l = events[type2].length;i2 < l; i2++) {
              jQuery.event.add(dest, type2, events[type2][i2]);
            }
          }
        }
      }
      if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);
        dataUser.set(dest, udataCur);
      }
    }
    function fixInput(src, dest) {
      var nodeName2 = dest.nodeName.toLowerCase();
      if (nodeName2 === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;
      } else if (nodeName2 === "input" || nodeName2 === "textarea") {
        dest.defaultValue = src.defaultValue;
      }
    }
    function domManip(collection, args, callback, ignored) {
      args = flat(args);
      var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
      if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
        return collection.each(function(index) {
          var self = collection.eq(index);
          if (valueIsFunction) {
            args[0] = value.call(this, index, self.html());
          }
          domManip(self, args, callback, ignored);
        });
      }
      if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first || ignored) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (;i2 < l; i2++) {
            node = fragment;
            if (i2 !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(collection[i2], node, i2);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i2 = 0;i2 < hasScripts; i2++) {
              node = scripts[i2];
              if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQuery._evalUrl && !node.noModule) {
                    jQuery._evalUrl(node.src, {
                      nonce: node.nonce || node.getAttribute("nonce")
                    }, doc);
                  }
                } else {
                  DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                }
              }
            }
          }
        }
      }
      return collection;
    }
    function remove(elem, selector, keepData) {
      var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
      for (;(node = nodes[i2]) != null; i2++) {
        if (!keepData && node.nodeType === 1) {
          jQuery.cleanData(getAll(node));
        }
        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }
          node.parentNode.removeChild(node);
        }
      }
      return elem;
    }
    jQuery.extend({
      htmlPrefilter: function(html) {
        return html;
      },
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
          destElements = getAll(clone);
          srcElements = getAll(elem);
          for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
            fixInput(srcElements[i2], destElements[i2]);
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
              cloneCopyEvent(srcElements[i2], destElements[i2]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }
        return clone;
      },
      cleanData: function(elems) {
        var data, elem, type2, special = jQuery.event.special, i2 = 0;
        for (;(elem = elems[i2]) !== undefined; i2++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type2 in data.events) {
                  if (special[type2]) {
                    jQuery.event.remove(elem, type2);
                  } else {
                    jQuery.removeEvent(elem, type2, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = undefined;
            }
            if (elem[dataUser.expando]) {
              elem[dataUser.expando] = undefined;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach: function(selector) {
        return remove(this, selector, true);
      },
      remove: function(selector) {
        return remove(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === undefined ? jQuery.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem, i2 = 0;
        for (;(elem = this[i2]) != null; i2++) {
          if (elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem = this[0] || {}, i2 = 0, l = this.length;
          if (value2 === undefined && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery.htmlPrefilter(value2);
            try {
              for (;i2 < l; i2++) {
                elem = this[i2] || {};
                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value2;
                }
              }
              elem = 0;
            } catch (e) {}
          }
          if (elem) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem) {
          var parent = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name, original) {
      jQuery.fn[name] = function(selector) {
        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i2 = 0;
        for (;i2 <= last; i2++) {
          elems = i2 === last ? this : this.clone(true);
          jQuery(insert[i2])[original](elems);
          push.apply(ret, elems.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view || !view.opener) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
      var ret, name, old = {};
      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }
      ret = callback.call(elem);
      for (name in options) {
        elem.style[name] = old[name];
      }
      return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
      function computeStyleTests() {
        if (!div) {
          return;
        }
        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);
        var divStyle = window2.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%";
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
        div.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
        documentElement.removeChild(container);
        div = null;
      }
      function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
      }
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
      if (!div.style) {
        return;
      }
      div.style.backgroundClip = "content-box";
      div.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
      jQuery.extend(support, {
        boxSizingReliable: function() {
          computeStyleTests();
          return boxSizingReliableVal;
        },
        pixelBoxStyles: function() {
          computeStyleTests();
          return pixelBoxStylesVal;
        },
        pixelPosition: function() {
          computeStyleTests();
          return pixelPositionVal;
        },
        reliableMarginLeft: function() {
          computeStyleTests();
          return reliableMarginLeftVal;
        },
        scrollboxSize: function() {
          computeStyleTests();
          return scrollboxSizeVal;
        },
        reliableTrDimensions: function() {
          var table, tr, trChild, trStyle;
          if (reliableTrDimensionsVal == null) {
            table = document.createElement("table");
            tr = document.createElement("tr");
            trChild = document.createElement("div");
            table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
            tr.style.cssText = "box-sizing:content-box;border:1px solid";
            tr.style.height = "1px";
            trChild.style.height = "9px";
            trChild.style.display = "block";
            documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
            trStyle = window2.getComputedStyle(tr);
            reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
            documentElement.removeChild(table);
          }
          return reliableTrDimensionsVal;
        }
      });
    })();
    function curCSS(elem, name, computed) {
      var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
      computed = computed || getStyles(elem);
      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];
        if (isCustomProp && ret) {
          ret = ret.replace(rtrimCSS, "$1") || undefined;
        }
        if (ret === "" && !isAttached(elem)) {
          ret = jQuery.style(elem, name);
        }
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret !== undefined ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function() {
          if (conditionFn()) {
            delete this.get;
            return;
          }
          return (this.get = hookFn).apply(this, arguments);
        }
      };
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document.createElement("div").style, vendorProps = {};
    function vendorPropName(name) {
      var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
      while (i2--) {
        name = cssPrefixes[i2] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    }
    function finalPropName(name) {
      var final = jQuery.cssProps[name] || vendorProps[name];
      if (final) {
        return final;
      }
      if (name in emptyStyle) {
        return name;
      }
      return vendorProps[name] = vendorPropName(name) || name;
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches = rcssNum.exec(value);
      return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (;i2 < 4; i2 += 2) {
        if (box === "margin") {
          marginDelta += jQuery.css(elem, box + cssExpand[i2], true, styles);
        }
        if (!isBorderBox) {
          delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
          if (box !== "padding") {
            delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          } else {
            extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
          }
          if (box !== "margin") {
            delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
      }
      return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
      var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
    }
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return ret === "" ? "1" : ret;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageSlice: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        scale: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeMiterlimit: true,
        strokeOpacity: true
      },
      cssProps: {},
      style: function(elem, name, value, extra) {
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        }
        var ret, type2, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
        if (value !== undefined) {
          type2 = typeof value;
          if (type2 === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            type2 = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type2 === "number" && !isCustomProp) {
            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
          }
          if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
            if (isCustomProp) {
              style.setProperty(name, value);
            } else {
              style[name] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
            return ret;
          }
          return style[name];
        }
      },
      css: function(elem, name, extra, styles) {
        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        }
        if (val === undefined) {
          val = curCSS(elem, name, styles);
        }
        if (val === "normal" && name in cssNormalTransform) {
          val = cssNormalTransform[name];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery.each(["height", "width"], function(_i, dimension) {
      jQuery.cssHooks[dimension] = {
        get: function(elem, computed, extra) {
          if (computed) {
            return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function(elem, value, extra) {
          var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
          if (isBorderBox && scrollboxSizeBuggy) {
            subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
          }
          if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery.css(elem, dimension);
          }
          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand: function(value) {
          var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (;i2 < 4; i2++) {
            expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix !== "margin") {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery.fn.extend({
      css: function(name, value) {
        return access(this, function(elem, name2, value2) {
          var styles, len, map2 = {}, i2 = 0;
          if (Array.isArray(name2)) {
            styles = getStyles(elem);
            len = name2.length;
            for (;i2 < len; i2++) {
              map2[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
            }
            return map2;
          }
          return value2 !== undefined ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
        }, name, value, arguments.length > 1);
      }
    });
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, jQuery.fx.interval);
        }
        jQuery.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = undefined;
      });
      return fxNow = Date.now();
    }
    function genFx(type2, includeWidth) {
      var which, i2 = 0, attrs = { height: type2 };
      includeWidth = includeWidth ? 1 : 0;
      for (;i2 < 4; i2 += 2 - includeWidth) {
        which = cssExpand[i2];
        attrs["margin" + which] = attrs["padding" + which] = type2;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type2;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
      for (;index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== undefined) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      }
      propTween = !jQuery.isEmptyObject(props);
      if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery.css(elem, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery.css(elem, "display");
            showHide([elem]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery.css(elem, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
          }
          if (toggle) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props) {
        name = camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }
        if (index !== name) {
          props[name] = value;
          delete props[index];
        }
        hooks = jQuery.cssHooks[name];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name];
          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
        for (;index2 < length2; index2++) {
          animation.tweens[index2].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length2) {
          return remaining;
        }
        if (!length2) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      }, animation = deferred.promise({
        elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, {
          specialEasing: {},
          easing: jQuery.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (;index2 < length2; index2++) {
            animation.tweens[index2].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (;index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
          if (isFunction(result.stop)) {
            jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery.map(props, createTween, animation);
      if (isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery.fx.timer(jQuery.extend(tick, {
        elem,
        anim: animation,
        queue: animation.opts.queue
      }));
      return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (isFunction(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index = 0, length = props.length;
        for (;index < length; index++) {
          prop = props[index];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery.speed = function(speed, easing, fn) {
      var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction(easing) && easing
      };
      if (jQuery.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery.fx.speeds) {
            opt.duration = jQuery.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (isFunction(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type2, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type2 !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type2;
          type2 = undefined;
        }
        if (clearQueue) {
          this.queue(type2 || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index = type2 != null && type2 + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          for (index = timers.length;index--; ) {
            if (timers[index].elem === this && (type2 == null || timers[index].queue === type2)) {
              timers[index].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery.dequeue(this, type2);
          }
        });
      },
      finish: function(type2) {
        if (type2 !== false) {
          type2 = type2 || "fx";
        }
        return this.each(function() {
          var index, data = dataPriv.get(this), queue = data[type2 + "queue"], hooks = data[type2 + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
          data.finish = true;
          jQuery.queue(this, type2, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index = timers.length;index--; ) {
            if (timers[index].elem === this && timers[index].queue === type2) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          for (index = 0;index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(_i, name) {
      var cssFn = jQuery.fn[name];
      jQuery.fn[name] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
      };
    });
    jQuery.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name, props) {
      jQuery.fn[name] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
      var timer, i2 = 0, timers = jQuery.timers;
      fxNow = Date.now();
      for (;i2 < timers.length; i2++) {
        timer = timers[i2];
        if (!timer() && timers[i2] === timer) {
          timers.splice(i2--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
      jQuery.timers.push(timer);
      jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery.fx.stop = function() {
      inProgress = null;
    };
    jQuery.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    jQuery.fn.delay = function(time, type2) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type2 = type2 || "fx";
      return this.queue(type2, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    (function() {
      var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
      input.type = "checkbox";
      support.checkOn = input.value !== "";
      support.optSelected = opt.selected;
      input = document.createElement("input");
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr: function(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr: function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem.getAttribute === "undefined") {
          return jQuery.prop(elem, name, value);
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
        }
        if (value !== undefined) {
          if (value === null) {
            jQuery.removeAttr(elem, name);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
          }
          elem.setAttribute(name, value + "");
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        ret = jQuery.find.attr(elem, name);
        return ret == null ? undefined : ret;
      },
      attrHooks: {
        type: {
          set: function(elem, value) {
            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
              var val = elem.value;
              elem.setAttribute("type", value);
              if (val) {
                elem.value = val;
              }
              return value;
            }
          }
        }
      },
      removeAttr: function(elem, value) {
        var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem.nodeType === 1) {
          while (name = attrNames[i2++]) {
            elem.removeAttribute(name);
          }
        }
      }
    });
    boolHook = {
      set: function(elem, value, name) {
        if (value === false) {
          jQuery.removeAttr(elem, name);
        } else {
          elem.setAttribute(name, name);
        }
        return name;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
      var getter = attrHandle[name] || jQuery.find.attr;
      attrHandle[name] = function(elem, name2, isXML) {
        var ret, handle, lowercaseName = name2.toLowerCase();
        if (!isXML) {
          handle = attrHandle[lowercaseName];
          attrHandle[lowercaseName] = ret;
          ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
          attrHandle[lowercaseName] = handle;
        }
        return ret;
      };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function(name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
      },
      removeProp: function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          name = jQuery.propFix[name] || name;
          hooks = jQuery.propHooks[name];
        }
        if (value !== undefined) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
          }
          return elem[name] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        return elem[name];
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = jQuery.find.attr(elem, "tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get: function(elem) {
          var parent = elem.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem) {
          var parent = elem.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery.fn.extend({
      addClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (isFunction(value)) {
          return this.each(function(j) {
            jQuery(this).addClass(value.call(this, j, getClass(this)));
          });
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0;i2 < classNames.length; i2++) {
                className = classNames[i2];
                if (cur.indexOf(" " + className + " ") < 0) {
                  cur += className + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      removeClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (isFunction(value)) {
          return this.each(function(j) {
            jQuery(this).removeClass(value.call(this, j, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0;i2 < classNames.length; i2++) {
                className = classNames[i2];
                while (cur.indexOf(" " + className + " ") > -1) {
                  cur = cur.replace(" " + className + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var classNames, className, i2, self, type2 = typeof value, isValidValue = type2 === "string" || Array.isArray(value);
        if (isFunction(value)) {
          return this.each(function(i3) {
            jQuery(this).toggleClass(value.call(this, i3, getClass(this), stateVal), stateVal);
          });
        }
        if (typeof stateVal === "boolean" && isValidValue) {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        classNames = classesToArray(value);
        return this.each(function() {
          if (isValidValue) {
            self = jQuery(this);
            for (i2 = 0;i2 < classNames.length; i2++) {
              className = classNames[i2];
              if (self.hasClass(className)) {
                self.removeClass(className);
              } else {
                self.addClass(className);
              }
            }
          } else if (value === undefined || type2 === "boolean") {
            className = getClass(this);
            if (className) {
              dataPriv.set(this, "__className__", className);
            }
            if (this.setAttribute) {
              this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
            }
          }
        });
      },
      hasClass: function(selector) {
        var className, elem, i2 = 0;
        className = " " + selector + " ";
        while (elem = this[i2++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem = this[0];
        if (!arguments.length) {
          if (elem) {
            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
              return ret;
            }
            ret = elem.value;
            if (typeof ret === "string") {
              return ret.replace(rreturn, "");
            }
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = isFunction(value);
        return this.each(function(i2) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i2, jQuery(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
            this.value = val;
          }
        });
      }
    });
    jQuery.extend({
      valHooks: {
        option: {
          get: function(elem) {
            var val = jQuery.find.attr(elem, "value");
            return val != null ? val : stripAndCollapse(jQuery.text(elem));
          }
        },
        select: {
          get: function(elem) {
            var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
            if (index < 0) {
              i2 = max;
            } else {
              i2 = one ? index : 0;
            }
            for (;i2 < max; i2++) {
              option = options[i2];
              if ((option.selected || i2 === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery(option).val();
                if (one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set: function(elem, value) {
            var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
            while (i2--) {
              option = options[i2];
              if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem.selectedIndex = -1;
            }
            return values;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        jQuery.valHooks[this].get = function(elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        };
      }
    });
    var location = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery.parseXML = function(data) {
      var xml, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {}
      parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
      if (!xml || parserErrorElem) {
        jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join(`
`) : data));
      }
      return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
      e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
      trigger: function(event, data, elem, onlyHandlers) {
        var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document], type2 = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document;
        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type2 + jQuery.event.triggered)) {
          return;
        }
        if (type2.indexOf(".") > -1) {
          namespaces = type2.split(".");
          type2 = namespaces.shift();
          namespaces.sort();
        }
        ontype = type2.indexOf(":") < 0 && "on" + type2;
        event = event[jQuery.expando] ? event : new jQuery.Event(type2, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = undefined;
        if (!event.target) {
          event.target = elem;
        }
        data = data == null ? [event] : jQuery.makeArray(data, [event]);
        special = jQuery.event.special[type2] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type2;
          if (!rfocusMorph.test(bubbleType + type2)) {
            cur = cur.parentNode;
          }
          for (;cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i2 = 0;
        while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i2 > 1 ? bubbleType : special.bindType || type2;
          handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type2;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            if (ontype && isFunction(elem[type2]) && !isWindow(elem)) {
              tmp = elem[ontype];
              if (tmp) {
                elem[ontype] = null;
              }
              jQuery.event.triggered = type2;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type2, stopPropagationCallback);
              }
              elem[type2]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type2, stopPropagationCallback);
              }
              jQuery.event.triggered = undefined;
              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      simulate: function(type2, elem, event) {
        var e = jQuery.extend(new jQuery.Event, event, {
          type: type2,
          isSimulated: true
        });
        jQuery.event.trigger(e, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger: function(type2, data) {
        return this.each(function() {
          jQuery.event.trigger(type2, data, this);
        });
      },
      triggerHandler: function(type2, data) {
        var elem = this[0];
        if (elem) {
          return jQuery.event.trigger(type2, data, elem, true);
        }
      }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
      var name;
      if (Array.isArray(obj)) {
        jQuery.each(obj, function(i2, v) {
          if (traditional || rbracket.test(prefix)) {
            add(prefix, v);
          } else {
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]", v, traditional, add);
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name in obj) {
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }
      } else {
        add(prefix, obj);
      }
    }
    jQuery.param = function(a, traditional) {
      var prefix, s = [], add = function(key, valueOrFunction) {
        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a == null) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
        jQuery.each(a, function() {
          add(this.name, this.value);
        });
      } else {
        for (prefix in a) {
          buildParams(prefix, a[prefix], traditional, add);
        }
      }
      return s.join("&");
    };
    jQuery.fn.extend({
      serialize: function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var type2 = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type2) && (this.checked || !rcheckableType.test(type2));
        }).map(function(_i, elem) {
          var val = jQuery(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery.map(val, function(val2) {
              return { name: elem.name, value: val2.replace(rCRLF, `\r
`) };
            });
          }
          return { name: elem.name, value: val.replace(rCRLF, `\r
`) };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (isFunction(func)) {
          while (dataType = dataTypes[i2++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== undefined) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }
      if (deep) {
        jQuery.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct, type2, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === undefined) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type2 in contents) {
          if (contents[type2] && contents[type2].test(ct)) {
            dataTypes.unshift(type2);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type2 in responses) {
          if (!dataTypes[0] || s.converters[type2 + " " + dataTypes[0]]) {
            finalDataType = type2;
            break;
          }
          if (!firstDataType) {
            firstDataType = type2;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": jQuery.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = undefined;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          getResponseHeader: function(key) {
            var match;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          setRequestHeader: function(name, value) {
            if (completed2 == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          overrideMimeType: function(type2) {
            if (completed2 == null) {
              s.mimeType = type2;
            }
            return this;
          },
          statusCode: function(map2) {
            var code;
            if (map2) {
              if (completed2) {
                jqXHR.always(map2[jqXHR.status]);
              } else {
                for (code in map2) {
                  statusCode[code] = [statusCode[code], map2[code]];
                }
              }
            }
            return this;
          },
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s.crossDomain == null) {
          urlAnchor = document.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery.param(s.data, s.traditional);
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery.event && s.global;
        if (fireGlobals && jQuery.active++ === 0) {
          jQuery.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url.replace(rhash, "");
        if (!s.hasContent) {
          uncached = s.url.slice(cacheURL.length);
          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
            delete s.data;
          }
          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s.url = cacheURL + uncached;
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        }
        if (s.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }
          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
        for (i2 in s.headers) {
          jqXHR.setRequestHeader(i2, s.headers[i2]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done);
          } catch (e) {
            if (completed2) {
              throw e;
            }
            done(-1, e);
          }
        }
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = undefined;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function() {};
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = undefined;
          if (fireGlobals) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery.get(url, undefined, callback, "script");
      }
    });
    jQuery.each(["get", "post"], function(_i, method) {
      jQuery[method] = function(url, data, callback, type2) {
        if (isFunction(data)) {
          type2 = type2 || callback;
          callback = data;
          data = undefined;
        }
        return jQuery.ajax(jQuery.extend({
          url,
          type: method,
          dataType: type2,
          data,
          success: callback
        }, jQuery.isPlainObject(url) && url));
      };
    });
    jQuery.ajaxPrefilter(function(s) {
      var i2;
      for (i2 in s.headers) {
        if (i2.toLowerCase() === "content-type") {
          s.contentType = s.headers[i2] || "";
        }
      }
    });
    jQuery._evalUrl = function(url, options, doc) {
      return jQuery.ajax({
        url,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function() {}
        },
        dataFilter: function(response) {
          jQuery.globalEval(response, options, doc);
        }
      });
    };
    jQuery.fn.extend({
      wrapAll: function(html) {
        var wrap;
        if (this[0]) {
          if (isFunction(html)) {
            html = html.call(this[0]);
          }
          wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html) {
        if (isFunction(html)) {
          return this.each(function(i2) {
            jQuery(this).wrapInner(html.call(this, i2));
          });
        }
        return this.each(function() {
          var self = jQuery(this), contents = self.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self.append(html);
          }
        });
      },
      wrap: function(html) {
        var htmlIsFunction = isFunction(html);
        return this.each(function(i2) {
          jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
      return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window2.XMLHttpRequest;
      } catch (e) {}
    };
    var xhrSuccessStatus = {
      0: 200,
      1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback, errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send: function(headers, complete) {
            var i2, xhr = options.xhr();
            xhr.open(options.type, options.url, options.async, options.username, options.password);
            if (options.xhrFields) {
              for (i2 in options.xhrFields) {
                xhr[i2] = options.xhrFields[i2];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (i2 in headers) {
              xhr.setRequestHeader(i2, headers[i2]);
            }
            callback = function(type2) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if (type2 === "abort") {
                    xhr.abort();
                  } else if (type2 === "error") {
                    if (typeof xhr.status !== "number") {
                      complete(0, "error");
                    } else {
                      complete(xhr.status, xhr.statusText);
                    }
                  } else {
                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (xhr.onabort !== undefined) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  window2.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (e) {
              if (callback) {
                throw e;
              }
            }
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(s) {
      if (s.crossDomain) {
        s.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(text) {
          jQuery.globalEval(text);
          return text;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(s) {
      if (s.cache === undefined) {
        s.cache = false;
      }
      if (s.crossDomain) {
        s.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain || s.scriptAttrs) {
        var script, callback;
        return {
          send: function(_, complete) {
            script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
      if (jsonProp || s.dataTypes[0] === "jsonp") {
        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
        if (jsonProp) {
          s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
          s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }
        s.converters["script json"] = function() {
          if (!responseContainer) {
            jQuery.error(callbackName + " was not called");
          }
          return responseContainer[0];
        };
        s.dataTypes[0] = "json";
        overwritten = window2[callbackName];
        window2[callbackName] = function() {
          responseContainer = arguments;
        };
        jqXHR.always(function() {
          if (overwritten === undefined) {
            jQuery(window2).removeProp(callbackName);
          } else {
            window2[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && isFunction(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = undefined;
        });
        return "script";
      }
    });
    support.createHTMLDocument = function() {
      var body = document.implementation.createHTMLDocument("").body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
    }();
    jQuery.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string") {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var base, parsed, scripts;
      if (!context) {
        if (support.createHTMLDocument) {
          context = document.implementation.createHTMLDocument("");
          base = context.createElement("base");
          base.href = document.location.href;
          context.head.appendChild(base);
        } else {
          context = document;
        }
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    };
    jQuery.fn.load = function(url, params, callback) {
      var selector, type2, response, self = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (isFunction(params)) {
        callback = params;
        params = undefined;
      } else if (params && typeof params === "object") {
        type2 = "POST";
      }
      if (self.length > 0) {
        jQuery.ajax({
          url,
          type: type2 || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
          self.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset: function(elem, options, i2) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
        if (position === "static") {
          elem.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (isFunction(options)) {
          options = options.call(elem, i2, jQuery.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery.fn.extend({
      offset: function(options) {
        if (arguments.length) {
          return options === undefined ? this : this.each(function(i2) {
            jQuery.offset.setOffset(this, options, i2);
          });
        }
        var rect, win, elem = this[0];
        if (!elem) {
          return;
        }
        if (!elem.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery.css(elem, "position") === "fixed") {
          offset = elem.getBoundingClientRect();
        } else {
          offset = this.offset();
          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;
          while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.parentNode;
          }
          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            parentOffset = jQuery(offsetParent).offset();
            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
      },
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement;
        });
      }
    });
    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = prop === "pageYOffset";
      jQuery.fn[method] = function(val) {
        return access(this, function(elem, method2, val2) {
          var win;
          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }
          if (val2 === undefined) {
            return win ? win[prop] : elem[method2];
          }
          if (win) {
            win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
          } else {
            elem[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(_i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop);
          return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
        }
      });
    });
    jQuery.each({ Height: "height", Width: "width" }, function(name, type2) {
      jQuery.each({
        padding: "inner" + name,
        content: type2,
        "": "outer" + name
      }, function(defaultExtra, funcName) {
        jQuery.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type3, value2) {
            var doc;
            if (isWindow(elem)) {
              return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
            }
            return value2 === undefined ? jQuery.css(elem, type3, extra) : jQuery.style(elem, type3, value2, extra);
          }, type2, chainable ? margin : undefined, chainable);
        };
      });
    });
    jQuery.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type2) {
      jQuery.fn[type2] = function(fn) {
        return this.on(type2, fn);
      };
    });
    jQuery.fn.extend({
      bind: function(types2, data, fn) {
        return this.on(types2, null, data, fn);
      },
      unbind: function(types2, fn) {
        return this.off(types2, null, fn);
      },
      delegate: function(selector, types2, data, fn) {
        return this.on(types2, selector, data, fn);
      },
      undelegate: function(selector, types2, fn) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types2, selector || "**", fn);
      },
      hover: function(fnOver, fnOut) {
        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
      }
    });
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(_i, name) {
      jQuery.fn[name] = function(data, fn) {
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
      };
    });
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(fn, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!isFunction(fn)) {
        return;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    };
    jQuery.holdReady = function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
      var type2 = jQuery.type(obj);
      return (type2 === "number" || type2 === "string") && !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    if (typeof define === "function" && define.amd) {
      define("jquery", [], function() {
        return jQuery;
      });
    }
    var { jQuery: _jQuery, $: _$ } = window2;
    jQuery.noConflict = function(deep) {
      if (window2.$ === jQuery) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery) {
        window2.jQuery = _jQuery;
      }
      return jQuery;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery;
    }
    return jQuery;
  });
});

// node_modules/js-yaml/dist/js-yaml.mjs
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence))
    return sequence;
  else if (isNothing(sequence))
    return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length;index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0;cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception, compact) {
  var where = "", message = exception.reason || "(unknown reason)";
  if (!exception.mark)
    return message;
  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }
  where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")";
  if (!compact && exception.mark.snippet) {
    where += `

` + exception.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
    pos: position - lineStart + head.length
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer)
    return null;
  if (!options.maxLength)
    options.maxLength = 79;
  if (typeof options.indent !== "number")
    options.indent = 1;
  if (typeof options.linesBefore !== "number")
    options.linesBefore = 3;
  if (typeof options.linesAfter !== "number")
    options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0)
    foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1;i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0)
      break;
    line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + `
` + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + `
`;
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^" + `
`;
  for (i = 1;i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length)
      break;
    line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + `
`;
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map) {
  var result = {};
  if (map !== null) {
    Object.keys(map).forEach(function(style) {
      map[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema, name) {
  var result = [];
  schema[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length;index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit)
      implicit = implicit.concat(definition.implicit);
    if (definition.explicit)
      explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], " + "or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data) {
  if (data === null)
    return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null)
    return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null)
    return false;
  var max = data.length, index = 0, hasDigits = false, ch;
  if (!max)
    return false;
  ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max)
      return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (;index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (;index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isHexCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (;index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isOctCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_")
    return false;
  for (;index < max; index++) {
    ch = data[index];
    if (ch === "_")
      continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o")
      return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
  if (data === null)
    return false;
  if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign;
  value = data.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9])" + "-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
  if (data === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null)
    match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null)
    throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000;
    if (match[9] === "-")
      delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function resolveYamlBinary(data) {
  if (data === null)
    return false;
  var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
  for (idx = 0;idx < max; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0;idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
  for (idx = 0;idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null)
    return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
  for (index = 0, length = object.length;index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys.indexOf(pairKey) === -1)
      objectKeys.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null)
    return true;
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length;index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]")
      return false;
    keys = Object.keys(pair);
    if (keys.length !== 1)
      return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null)
    return [];
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length;index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null)
    return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\x00" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "\t" : c === 9 ? "\t" : c === 110 ? `
` : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? " " : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0;i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length;_position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length;index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length;index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length;index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    if (keyNode === "__proto__") {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat(`
`, count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (;hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat(`
`, didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += `
`;
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat(`
`, didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat(`
`, emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat(`
`, emptyLines);
      }
    } else {
      state.result += common.repeat(`
`, didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33)
    return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38)
    return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42)
    return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length;typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length;typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch))
        break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0)
      readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += `
`;
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\x00");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\x00";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length;index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = "\\\"";
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
  var result, keys, index, length, tag, style, type2;
  if (map2 === null)
    return {};
  result = {};
  keys = Object.keys(map2);
  for (index = 0, length = keys.length;index < length; index += 1) {
    tag = keys[index];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf(`
`, position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== `
`)
      result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return `
` + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length;index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i2;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i2 = 0;i2 < string.length; char >= 65536 ? i2 += 2 : i2++) {
      char = codePointAt(string, i2);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i2 = 0;i2 < string.length; char >= 65536 ? i2 += 2 : i2++) {
      char = codePointAt(string, i2);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || i2 - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i2;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i2 - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === `
`;
  var keep = clip && (string[string.length - 2] === `
` || string === `
`);
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + `
`;
}
function dropEndingNewline(string) {
  return string[string.length - 1] === `
` ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = function() {
    var nextLF = string.indexOf(`
`);
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }();
  var prevMoreIndented = string[0] === `
` || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? `
` : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ")
    return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += `
` + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += `
`;
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + `
` + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i2 = 0;i2 < string.length; char >= 65536 ? i2 += 2 : i2++) {
    char = codePointAt(string, i2);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i2];
      if (char >= 65536)
        result += string[i2 + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length;index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "")
        _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length;index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length;index < length; index += 1) {
    pairBuffer = "";
    if (_result !== "")
      pairBuffer += ", ";
    if (state.condenseFlow)
      pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024)
      pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length;index < length; index += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length;index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid)
        return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length;index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && typeof object === "object") {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length;index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length;index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs)
    getDuplicateReferences(input, state);
  var value = input;
  if (state.replacer) {
    value = state.replacer.call({ "": value }, "", value);
  }
  if (writeNode(state, 0, value, true, true))
    return state.dump + `
`;
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. " + "Use yaml." + to + " instead, which is now safe by default.");
  };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;
var types = {
  binary,
  float,
  map,
  null: _null,
  pairs,
  set,
  timestamp,
  bool,
  int,
  merge,
  omap,
  seq,
  str
};
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");
var jsYaml = {
  Type,
  Schema,
  FAILSAFE_SCHEMA,
  JSON_SCHEMA,
  CORE_SCHEMA,
  DEFAULT_SCHEMA,
  load,
  loadAll,
  dump,
  YAMLException,
  types,
  safeLoad,
  safeLoadAll,
  safeDump
};
var js_yaml_default = jsYaml;

// src/site/load-assets.ts
var import_jquery = __toESM(require_jquery(), 1);
var CACHE_KEY_V1 = "smoothieware_v1_settings_cache";
var CACHE_KEY_V2 = "smoothieware_v2_settings_cache";
var CACHE_KEY_V1_CONFIG = "smoothieware_v1_config_cache";
var CACHE_KEY_V2_CONFIG = "smoothieware_v2_config_cache";
var CACHE_TIMESTAMP_KEY = "smoothieware_settings_cache_timestamp";
var CACHE_TIMESTAMP_CONFIG_KEY = "smoothieware_config_cache_timestamp";
var CACHE_DURATION_MS = 24 * 60 * 60 * 1000;
import_jquery.default(() => {
  console.log("[load-assets.ts] Initializing asset loader");
  load_config_files();
  const $setting_elements = import_jquery.default("setting");
  if ($setting_elements.length === 0) {
    console.log("[load-assets.ts] No setting tags found, skipping settings YAML load");
    return;
  }
  console.log(`[load-assets.ts] Found ${$setting_elements.length} setting tag(s), loading configuration data...`);
  load_settings_data();
});
async function load_settings_data() {
  if (window.settings_data_loaded) {
    console.log("[load-assets.ts] Settings data already loaded in this session");
    return;
  }
  const cache_valid = check_cache_validity();
  if (cache_valid) {
    console.log("[load-assets.ts] Loading settings data from browser cache");
    const v1_cached = localStorage.getItem(CACHE_KEY_V1);
    const v2_cached = localStorage.getItem(CACHE_KEY_V2);
    if (v1_cached && v2_cached) {
      try {
        const v1_data = JSON.parse(v1_cached);
        const v2_data = JSON.parse(v2_cached);
        window.v1_settings = reconstruct_settings_data(v1_data);
        window.v2_settings = reconstruct_settings_data(v2_data);
        window.settings_data_loaded = true;
        console.log("[load-assets.ts] Settings data loaded from cache successfully");
        return;
      } catch (error) {
        console.warn("[load-assets.ts] Failed to parse cached data, will fetch fresh:", error);
      }
    }
  }
  console.log("[load-assets.ts] Fetching fresh settings data from server");
  try {
    const [v1_response, v2_response] = await Promise.all([
      fetch("/assets/data/smoothieware-v1-config.yaml"),
      fetch("/assets/data/smoothieware-v2-config.yaml")
    ]);
    if (!v1_response.ok || !v2_response.ok) {
      throw new Error(`HTTP error! v1: ${v1_response.status}, v2: ${v2_response.status}`);
    }
    const [v1_yaml_text, v2_yaml_text] = await Promise.all([
      v1_response.text(),
      v2_response.text()
    ]);
    const v1_data = js_yaml_default.load(v1_yaml_text);
    const v2_data = js_yaml_default.load(v2_yaml_text);
    window.v1_settings = process_settings_data(v1_data);
    window.v2_settings = process_settings_data(v2_data);
    window.settings_data_loaded = true;
    cache_settings_data(v1_data, v2_data);
    console.log("[load-assets.ts] Settings data loaded and cached successfully");
    console.log("[load-assets.ts] v1 settings count:", window.v1_settings.metadata.total_settings);
    console.log("[load-assets.ts] v2 settings count:", window.v2_settings.metadata.total_settings);
  } catch (error) {
    console.error("[load-assets.ts] Failed to load settings data:", error);
    window.settings_data_loaded = false;
  }
}
function check_cache_validity() {
  const timestamp_str = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp_str) {
    return false;
  }
  const timestamp2 = parseInt(timestamp_str, 10);
  if (isNaN(timestamp2)) {
    return false;
  }
  const now = Date.now();
  const age = now - timestamp2;
  return age < CACHE_DURATION_MS;
}
function process_settings_data(raw_data) {
  const settings_by_name = new Map;
  const settings_by_corresponding = new Map;
  const corresponding_field = raw_data.metadata.version === "v1" ? "corresponding_v1" : "corresponding_v2";
  for (const module of raw_data.modules) {
    for (const setting of module.settings) {
      settings_by_name.set(setting.name, setting);
      if (setting[corresponding_field]) {
        const names = setting[corresponding_field].split(",").map((name) => name.trim()).filter((name) => {
          return name && !name.includes("etc.") && !name.includes("(") && name.length > 0;
        });
        for (const name of names) {
          if (!settings_by_corresponding.has(name)) {
            settings_by_corresponding.set(name, setting);
          }
        }
      }
    }
  }
  return {
    metadata: raw_data.metadata,
    modules: raw_data.modules,
    settings_by_name,
    settings_by_corresponding
  };
}
function reconstruct_settings_data(cached_data) {
  const settings_by_name = new Map;
  const settings_by_corresponding = new Map;
  const corresponding_field = cached_data.metadata.version === "v1" ? "corresponding_v1" : "corresponding_v2";
  for (const module of cached_data.modules) {
    for (const setting of module.settings) {
      settings_by_name.set(setting.name, setting);
      if (setting[corresponding_field]) {
        const names = setting[corresponding_field].split(",").map((name) => name.trim()).filter((name) => {
          return name && !name.includes("etc.") && !name.includes("(") && name.length > 0;
        });
        for (const name of names) {
          if (!settings_by_corresponding.has(name)) {
            settings_by_corresponding.set(name, setting);
          }
        }
      }
    }
  }
  return {
    metadata: cached_data.metadata,
    modules: cached_data.modules,
    settings_by_name,
    settings_by_corresponding
  };
}
function cache_settings_data(v1_data, v2_data) {
  try {
    localStorage.setItem(CACHE_KEY_V1, JSON.stringify(v1_data));
    localStorage.setItem(CACHE_KEY_V2, JSON.stringify(v2_data));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    console.log("[load-assets.ts] Settings data cached successfully");
  } catch (error) {
    console.warn("[load-assets.ts] Failed to cache settings data:", error);
  }
}
async function load_config_files() {
  if (window.config_files_loaded) {
    console.log("[load-assets.ts] Config files already loaded in this session");
    return;
  }
  const cache_valid = check_config_cache_validity();
  if (cache_valid) {
    console.log("[load-assets.ts] Loading config files from browser cache");
    const v1_cached = localStorage.getItem(CACHE_KEY_V1_CONFIG);
    const v2_cached = localStorage.getItem(CACHE_KEY_V2_CONFIG);
    if (v1_cached && v2_cached) {
      try {
        window.v1_config_file = v1_cached;
        window.v2_config_file = v2_cached;
        window.config_files_loaded = true;
        console.log("[load-assets.ts] Config files loaded from cache successfully");
        return;
      } catch (error) {
        console.warn("[load-assets.ts] Failed to parse cached config files, will fetch fresh:", error);
      }
    }
  }
  console.log("[load-assets.ts] Fetching fresh config files from server");
  try {
    const [v1_response, v2_response] = await Promise.all([
      fetch("/assets/config/v1/config"),
      fetch("/assets/config/v2/config-3d.ini")
    ]);
    if (!v1_response.ok || !v2_response.ok) {
      throw new Error(`HTTP error! v1: ${v1_response.status}, v2: ${v2_response.status}`);
    }
    const [v1_config_text, v2_config_text] = await Promise.all([
      v1_response.text(),
      v2_response.text()
    ]);
    window.v1_config_file = v1_config_text;
    window.v2_config_file = v2_config_text;
    window.config_files_loaded = true;
    cache_config_files(v1_config_text, v2_config_text);
    console.log("[load-assets.ts] Config files loaded and cached successfully");
    console.log("[load-assets.ts] v1 config size:", v1_config_text.length, "bytes");
    console.log("[load-assets.ts] v2 config size:", v2_config_text.length, "bytes");
  } catch (error) {
    console.error("[load-assets.ts] Failed to load config files:", error);
    window.config_files_loaded = false;
  }
}
function check_config_cache_validity() {
  const timestamp_str = localStorage.getItem(CACHE_TIMESTAMP_CONFIG_KEY);
  if (!timestamp_str) {
    return false;
  }
  const timestamp2 = parseInt(timestamp_str, 10);
  if (isNaN(timestamp2)) {
    return false;
  }
  const now = Date.now();
  const age = now - timestamp2;
  return age < CACHE_DURATION_MS;
}
function cache_config_files(v1_config, v2_config) {
  try {
    localStorage.setItem(CACHE_KEY_V1_CONFIG, v1_config);
    localStorage.setItem(CACHE_KEY_V2_CONFIG, v2_config);
    localStorage.setItem(CACHE_TIMESTAMP_CONFIG_KEY, Date.now().toString());
    console.log("[load-assets.ts] Config files cached successfully");
  } catch (error) {
    console.warn("[load-assets.ts] Failed to cache config files:", error);
  }
}
