;
! function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.4",
    n = function (a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return d.call(this)
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function (a, b) {
      return n.each(this, a, b)
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray,
    isWindow: function (a) {
      return null != a && a === a.window
    },
    isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
    },
    isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function (a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, b, c) {
      var d, e = 0,
        f = a.length,
        g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1) break
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1) break
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c)
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function (a, b, c) {
      var d, f = 0,
        g = a.length,
        h = s(a),
        i = [];
      if (h)
        for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a) d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
        return a.apply(b || this, e.concat(d.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    },
    now: Date.now,
    support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
      P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      ea = function () {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (fa) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b))
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode) return d;
              if (h.id === j) return d.push(h), d
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--) o[l] = s + ra(o[l]);
            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
          }
          if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d
          } catch (y) {} finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function la(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = ga.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function (a) {
        var b = g.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          h = [a],
          i = [b];
        if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return la(a, b);
        c = a;
        while (c = c.parentNode) h.unshift(c);
        c = b;
        while (c = c.parentNode) i.unshift(c);
        while (h[d] === i[d]) d++;
        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
      }, g) : n
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, ga.uniqueSort = function (a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function (a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ca, da).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break
                  }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(R, "$1"));
          return d[u] ? ia(function (a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0
          }
        }),
        contains: ia(function (a) {
          return a = a.replace(ca, da),
            function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
            function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function (a) {
          return a.disabled === !1
        },
        disabled: function (a) {
          return a.disabled === !0
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return Z.test(a.nodeName)
        },
        input: function (a) {
          return Y.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: oa(function () {
          return [0]
        }),
        last: oa(function (a, b) {
          return [b - 1]
        }),
        eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function qa() {}
    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c
    }

    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ua(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : va(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
          return a === b
        }, h, !0), l = sa(function (a) {
          return J(b, a) > -1
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
          }
          m.push(c)
        }
      return ta(m)
    }

    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l, m, o, p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while (o = a[m++])
                if (o(l, g, h)) {
                  i.push(l);
                  break
                }
              k && (w = v)
            }
            c && ((l = !o && l) && p--, f && r.push(l))
          }
          if (p += q, c && q !== p) {
            m = 0;
            while (o = b[m++]) o(r, s, g, h);
            if (f) {
              if (p > 0)
                while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s)
            }
            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
          }
          return k && (w = v, j = t), r
        };
      return c ? ia(f) : f
    }
    return h = ga.compile = function (a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, ya(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ja(function (a) {
      return null == a.getAttribute("disabled")
    }) || ka(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), ga
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c
    })
  }
  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++)
          if (n.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function (a) {
      return this.pushStack(x(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(x(this, a || [], !0))
    },
    is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
            for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/,
    C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a])) return !0
      })
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    },
    index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return n.dir(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c)
    },
    next: function (a) {
      return D(a, "nextSibling")
    },
    prev: function (a) {
      return D(a, "previousSibling")
    },
    nextAll: function (a) {
      return n.dir(a, "nextSibling")
    },
    prevAll: function (a) {
      return n.dir(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c)
    },
    siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return n.sibling(a.firstChild)
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var E = /\S+/g,
    F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [],
      i = !a.once && [],
      j = function (l) {
        for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break
          }
        d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            ! function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
              })
            }(arguments), d ? f = h.length : b && (e = c, j(b))
          }
          return this
        },
        remove: function () {
          return h && n.each(arguments, function (a, b) {
            var c;
            while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
          }), this
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
        },
        empty: function () {
          return h = [], f = 0, this
        },
        disable: function () {
          return h = i = b = void 0, this
        },
        disabled: function () {
          return !h
        },
        lock: function () {
          return i = void 0, b || k.disable(), this
        },
        locked: function () {
          return !i
        },
        fireWith: function (a, b) {
          return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
        },
        fire: function () {
          return k.fireWith(this, arguments), this
        },
        fired: function () {
          return !!c
        }
      };
    return k
  }, n.extend({
    Deferred: function (a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function () {
            return c
          },
          always: function () {
            return e.done(arguments).fail(arguments), this
          },
          then: function () {
            var a = arguments;
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function (a) {
      var b = 0,
        c = d.call(arguments),
        e = c.length,
        f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function (a, b, c) {
          return function (e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
    }
  });

  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
  }
  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
  }, n.ready.promise();
  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
        return j.call(n(a), c)
      })), b))
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };

  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = n.expando + K.uid++
  }
  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function (a) {
      if (!K.accepts(a)) return 0;
      var b = {},
        c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, n.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    },
    set: function (a, b, c) {
      var d, e = this.key(a),
        f = this.cache[e];
      if ("string" == typeof b) f[b] = c;
      else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
      else
        for (d in b) f[d] = b[d];
      return f
    },
    get: function (a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function (a, b) {
      var c, d, e, f = this.key(a),
        g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};
      else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--) delete g[d[c]]
      }
    },
    hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {})
    },
    discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var L = new K,
    M = new K,
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        M.set(a, b, c)
      } else c = void 0;
    return c
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a)
    },
    data: function (a, b, c) {
      return M.access(a, b, c)
    },
    removeData: function (a, b) {
      M.remove(a, b)
    },
    _data: function (a, b, c) {
      return L.access(a, b, c)
    },
    _removeData: function (a, b) {
      L.remove(a, b)
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        M.set(this, a)
      }) : J(this, function (b) {
        var c, d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;
          if (c = M.get(f, d), void 0 !== c) return c;
          if (c = P(f, d, void 0), void 0 !== c) return c
        } else this.each(function () {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function (a) {
      return this.each(function () {
        M.remove(this, a)
      })
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function () {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c])
        })
      })
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a)
      })
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", [])
    },
    promise: function (a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function () {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    },
    T = /^(?:checkbox|radio)$/i;
  ! function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0
  }

  function $() {
    return !1
  }

  function _() {
    try {
      return l.activeElement
    } catch (a) {}
  }
  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(E) || [""], j = b.length;
        while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
          } else
            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
      }
    },
    trigger: function (b, c, d, e) {
      var f, g, h, i, k, m, o, p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--) c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
          e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
          e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a) this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
      else if (!d) return this;
      return 1 === e && (f = d, d = function (a) {
        return n().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b)
      })
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

  function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function ka(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function la(a) {
    var b = ga.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
  }

  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
    }
  }

  function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }
  n.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
        else na(a, h);
      return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
        if (e = a[m], e || 0 === e)
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
        while (j--) f = f.lastChild;
        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      k.textContent = "", m = 0;
      while (e = l[m++])
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
          j = 0;
          while (e = f[j++]) fa.test(e.type || "") && c.push(e)
        }
      return k
    },
    cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e]
        }
        delete M.cache[c[M.expando]]
      }
    }
  }), n.fn.extend({
    text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function (a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
      return this
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    },
    html: function (a) {
      return J(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(aa, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function (a) {
      return this.remove(a, !0)
    },
    domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0,
        l = this.length,
        m = this,
        o = l - 1,
        p = a[0],
        q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
        if (g)
          for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
      }
      return this
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var qa, ra = {};

  function sa(b, c) {
    var d, e = n(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f
  }

  function ta(a) {
    var b = l,
      c = ra[a];
    return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
  }
  var ua = /^margin/,
    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

  function xa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function ya(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }! function () {
    var b, c, d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

      function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
      }
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function () {
          return g(), b
        },
        boxSizingReliable: function () {
          return null == c && g(), c
        },
        reliableMarginRight: function () {
          var b, c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
        }
      })
    }
  }(), n.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
    Ca = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Da = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ea = ["Webkit", "O", "Moz", "ms"];

  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--)
      if (b = Ea[e] + c, b in a) return b;
    return d
  }

  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Ha(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g
  }

  function Ia(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d)
        }) : Ia(a, b, d) : void 0
      },
      set: function (a, c, d) {
        var e = d && wa(a);
        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {
      display: "inline-block"
    }, xa, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
  }), n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function () {
      return Ja(this, !0)
    },
    hide: function () {
      return Ja(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e)
  }
  n.Tween = Ka, Ka.prototype = {
    constructor: Ka,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = Ka.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = Ka.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
    }
  }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = Ka.prototype.init, n.fx.step = {};
  var La, Ma, Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      "*": [function (a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = Oa.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };

  function Sa() {
    return setTimeout(function () {
      La = void 0
    }), La = n.now()
  }

  function Ta(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function Va(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], Na.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0
        }
        m[d] = q && q[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide()
      }), l.done(function () {
        var b;
        L.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b])
      });
      for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function Xa(a, b, c) {
    var d, e, f = 0,
      g = Qa.length,
      h = n.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1;
        for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if (d = Qa[f].call(j, a, k, j.opts)) return d;
    return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(Xa, {
      tweener: function (a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
      },
      prefilter: function (a, b) {
        b ? Qa.unshift(a) : Qa.push(a)
      }
    }), n.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a)
        })
      },
      finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b, c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: Ta("show"),
      slideUp: Ta("hide"),
      slideToggle: Ta("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (a, b) {
      n.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function () {
      var a, b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
      clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function (a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
        var d = setTimeout(b, a);
        c.stop = function () {
          clearTimeout(d)
        }
      })
    },
    function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
  var Ya, Za, $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    },
    removeAttr: function (a, b) {
      var c, d, e = 0,
        f = b && b.match(E);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), Za = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $a[b] || n.find.attr;
    $a[b] = function (a, b, d) {
      var e, f;
      return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
    }
  });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  });
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
            f = 0;
            while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = n.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
            g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function () {
        if ("string" === c) {
          var b, d = 0,
            e = n(this),
            f = a.match(E) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
      })
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a))
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function (a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var cb = n.now(),
    db = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "")
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || "string" != typeof a) return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
  };
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = "*/".concat("*"),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];

  function qb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function sb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function tb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function ub(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
              }
              b = f[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
      i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (j in {
          success: 1,
          error: 1,
          complete: 1
        }) v[j](k[j]);
      if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, c.send(r, x)
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");

      function x(a, b, f, h) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }
      return v
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b))
      } : function () {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a)
  };
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function (a, b) {
    var c, d = [],
      e = function (a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value)
    });
    else
      for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(xb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(xb, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (a) {}
  };
  var Bb = 0,
    Cb = {},
    Db = {
      0: 200,
      1223: 204
    },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Cb) Cb[a]()
  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
    var b;
    return k.cors || Eb && !a.crossDomain ? {
      send: function (c, d) {
        var e, f = a.xhr(),
          g = ++Bb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields) f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c) f.setRequestHeader(e, c[e]);
        b = function (a) {
          return function () {
            b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b) throw h
        }
      },
      abort: function () {
        b && b()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = n("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function (a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), l.head.appendChild(b[0])
        },
        abort: function () {
          c && c()
        }
      }
    }
  });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var Hb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };
  var Ib = a.document.documentElement;

  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    },
    position: function () {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || Ib;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Ib
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (b, c) {
    var d = "pageYOffset" === c;
    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Jb(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function () {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var Kb = a.jQuery,
    Lb = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
  }, typeof b === U && (a.jQuery = a.$ = n), n
});
! function (exports, global) {
  var origDefine = global.define,
    get = function (e) {
      var o, l = e.split("."),
        n = global;
      for (o = 0; o < l.length && n; o++) n = n[l[o]];
      return n
    },
    modules = global.define && global.define.modules || global._define && global._define.modules || {},
    ourDefine = global.define = function (e, o, l) {
      var n;
      "function" == typeof o && (l = o, o = []);
      var r, t = [];
      for (r = 0; r < o.length; r++) t.push(exports[o[r]] ? get(exports[o[r]]) : modules[o[r]] || get(o[r]));
      if (!o.length && l.length) {
        n = {
          exports: {}
        };
        var i = function (e) {
          return exports[e] ? get(exports[e]) : modules[e]
        };
        t.push(i, n.exports, n)
      } else t[0] || "exports" !== o[0] ? t[0] || "module" !== o[0] || (t[0] = {
        id: e
      }) : (n = {
        exports: {}
      }, t[0] = n.exports, "module" === o[1] && (t[1] = n));
      global.define = origDefine;
      var a = l ? l.apply(null, t) : void 0;
      global.define = ourDefine, modules[e] = n && n.exports ? n.exports : a
    };
  global.define.orig = origDefine, global.define.modules = modules, global.define.amd = !0, ourDefine("@loader", [], function () {
    var noop = function () {};
    return {
      get: function () {
        return {
          prepareGlobal: noop,
          retrieveGlobal: noop
        }
      },
      global: global,
      __exec: function (__load) {
        eval("(function() { " + __load.source + " \n }).call(global);")
      }
    }
  })
}({}, window);
define("can/util/can", [], function () {
  var e = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : global,
    n = {};
  ("undefined" == typeof GLOBALCAN || GLOBALCAN !== !1) && (e.can = n), n.global = e, n.k = function () {}, n.isDeferred = n.isPromise = function (e) {
    return e && "function" == typeof e.then && "function" == typeof e.pipe
  }, n.isMapLike = function (e) {
    return n.Map && (e instanceof n.Map || e && e.___get)
  };
  var t = 0;
  n.cid = function (e, n) {
    return e._cid || (t++, e._cid = (n || "") + t), e._cid
  }, n.VERSION = "@EDGE", n.simpleExtend = function (e, n) {
    for (var t in n) e[t] = n[t];
    return e
  }, n.last = function (e) {
    return e && e[e.length - 1]
  }, n.isDOM = function (e) {
    return (e.ownerDocument || e) === n.global.document
  }, n.childNodes = function (e) {
    var n = e.childNodes;
    if ("length" in n) return n;
    for (var t = e.firstChild, o = []; t;) o.push(t), t = t.nextSibling;
    return o
  };
  var o = Function.prototype.bind;
  o ? n.proxy = function (e, n) {
    return o.call(e, n)
  } : n.proxy = function (e, n) {
    return function () {
      return e.apply(n, arguments)
    }
  }, n.frag = function (e, t) {
    var o, r = t || n.document || n.global.document;
    return e && "string" != typeof e ? 11 === e.nodeType ? e : "number" == typeof e.nodeType ? (o = r.createDocumentFragment(), o.appendChild(e), o) : "number" == typeof e.length ? (o = r.createDocumentFragment(), n.each(e, function (e) {
      o.appendChild(n.frag(e))
    }), o) : (o = n.buildFragment("" + e, r), n.childNodes(o).length || o.appendChild(r.createTextNode("")), o) : (o = n.buildFragment(null == e ? "" : "" + e, r), o.childNodes.length || o.appendChild(r.createTextNode("")), o)
  }, n.scope = n.viewModel = function (e, t, o) {
    e = n.$(e);
    var r = n.data(e, "scope") || n.data(e, "viewModel");
    switch (r || (r = new n.Map, n.data(e, "scope", r), n.data(e, "viewModel", r)), arguments.length) {
      case 0:
      case 1:
        return r;
      case 2:
        return r.attr(t);
      default:
        return r.attr(t, o), e
    }
  };
  var r = function (e) {
    var n = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
    return n ? {
      href: n[0] || "",
      protocol: n[1] || "",
      authority: n[2] || "",
      host: n[3] || "",
      hostname: n[4] || "",
      port: n[5] || "",
      pathname: n[6] || "",
      search: n[7] || "",
      hash: n[8] || ""
    } : null
  };
  return n.joinURIs = function (e, n) {
    function t(e) {
      var n = [];
      return e.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (e) {
        "/.." === e ? n.pop() : n.push(e)
      }), n.join("").replace(/^\//, "/" === e.charAt(0) ? "/" : "")
    }
    return n = r(n || ""), e = r(e || ""), n && e ? (n.protocol || e.protocol) + (n.protocol || n.authority ? n.authority : e.authority) + t(n.protocol || n.authority || "/" === n.pathname.charAt(0) ? n.pathname : n.pathname ? (e.authority && !e.pathname ? "/" : "") + e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1) + n.pathname : e.pathname) + (n.protocol || n.authority || n.pathname ? n.search : n.search || e.search) + n.hash : null
  }, n["import"] = function (e, t) {
    var o = new n.Deferred;
    return "object" == typeof window.System && n.isFunction(window.System["import"]) ? window.System["import"](e, {
      name: t
    }).then(n.proxy(o.resolve, o), n.proxy(o.reject, o)) : window.define && window.define.amd ? window.require([e], function (e) {
      o.resolve(e)
    }) : window.steal ? steal.steal(e, function (e) {
      o.resolve(e)
    }) : window.require ? o.resolve(window.require(e)) : o.resolve(), o.promise()
  }, n.__observe = function () {}, n.isNode = "object" == typeof process && "[object process]" === {}.toString.call(process), n.isBrowserWindow = "undefined" != typeof window && "undefined" != typeof document && "undefined" == typeof SimpleDOM, n.isWebWorker = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, n
});
define("can/util/attr/attr", ["can/util/can"], function (t) {
  var e = t.global.setImmediate || function (t) {
      return setTimeout(t, 0)
    },
    r = {
      input: !0,
      textarea: !0,
      select: !0
    },
    n = function (e, n) {
      return n in e || t.document && r[e.nodeName.toLowerCase()]
    },
    a = {
      MutationObserver: t.global.MutationObserver || t.global.WebKitMutationObserver || t.global.MozMutationObserver,
      map: {
        "class": function (t, e) {
          return e = e || "", "http://www.w3.org/2000/svg" === t.namespaceURI ? t.setAttribute("class", e) : t.className = e, e
        },
        value: "value",
        innertext: "innerText",
        innerhtml: "innerHTML",
        textcontent: "textContent",
        "for": "htmlFor",
        checked: !0,
        disabled: !0,
        readonly: function (t, e) {
          return t.readOnly = !0, e
        },
        required: !0,
        src: function (t, e) {
          return null == e || "" === e ? (t.removeAttribute("src"), null) : (t.setAttribute("src", e), e)
        },
        style: function () {
          var e = t.global.document && document.createElement("div");
          return e && e.style && "cssText" in e.style ? function (t, e) {
            return t.style.cssText = e || ""
          } : function (t, e) {
            return t.setAttribute("style", e)
          }
        }()
      },
      defaultValue: ["input", "textarea"],
      setAttrOrProp: function (t, e, r) {
        e = e.toLowerCase();
        var n = a.map[e];
        n !== !0 || r ? this.set(t, e, r) : this.remove(t, e)
      },
      set: function (e, r, u) {
        var o = t.isDOM(e) && a.MutationObserver;
        r = r.toLowerCase();
        var i;
        o || (i = a.get(e, r));
        var s, c = a.map[r];
        "function" == typeof c ? s = c(e, u) : c === !0 && n(e, r) ? (s = e[r] = !0, "checked" === r && "radio" === e.type && t.inArray((e.nodeName + "").toLowerCase(), a.defaultValue) >= 0 && (e.defaultChecked = !0)) : "string" == typeof c && n(e, c) ? (s = u, (e[c] !== u || "OPTION" === e.nodeName.toUpperCase()) && (e[c] = u), "value" === c && t.inArray((e.nodeName + "").toLowerCase(), a.defaultValue) >= 0 && (e.defaultValue = u)) : a.setAttribute(e, r, u), o || s === i || a.trigger(e, r, i)
      },
      setAttribute: function () {
        var e = t.global.document;
        if (e && document.createAttribute) try {
          e.createAttribute("{}")
        } catch (r) {
          var n = {},
            a = document.createElement("div");
          return function (t, e, r) {
            var u, o, i = e.charAt(0);
            "{" !== i && "(" !== i && "*" !== i || !t.setAttributeNode ? t.setAttribute(e, r) : (u = n[e], u || (a.innerHTML = "<div " + e + '=""></div>', u = n[e] = a.childNodes[0].attributes[0]), o = u.cloneNode(), o.value = r, t.setAttributeNode(o))
          }
        }
        return function (t, e, r) {
          t.setAttribute(e, r)
        }
      }(),
      trigger: function (r, n, a) {
        return t.data(t.$(r), "canHasAttributesBindings") ? (n = n.toLowerCase(), e(function () {
          t.trigger(r, {
            type: "attributes",
            attributeName: n,
            target: r,
            oldValue: a,
            bubbles: !1
          }, [])
        })) : void 0
      },
      get: function (t, e) {
        e = e.toLowerCase();
        var r = a.map[e];
        return "string" == typeof r && n(t, r) ? t[r] : r === !0 && n(t, e) ? t[e] : t.getAttribute(e)
      },
      remove: function (t, e) {
        e = e.toLowerCase();
        var r;
        a.MutationObserver || (r = a.get(t, e));
        var u = a.map[e];
        "function" == typeof u && u(t, void 0), u === !0 && n(t, e) ? t[e] = !1 : "string" == typeof u && n(t, u) ? t[u] = "" : t.removeAttribute(e), a.MutationObserver || null == r || a.trigger(t, e, r)
      },
      has: function () {
        var e = t.global.document && document.createElement("div");
        return e && e.hasAttribute ? function (t, e) {
          return t.hasAttribute(e)
        } : function (t, e) {
          return null !== t.getAttribute(e)
        }
      }()
    };
  return a
});
define("can/event/event", ["can/util/can"], function (t) {
  return t.addEvent = function (t, n) {
    var e = this.__bindEvents || (this.__bindEvents = {}),
      i = e[t] || (e[t] = []);
    return i.push({
      handler: n,
      name: t
    }), this
  }, t.listenTo = function (n, e, i) {
    var r = this.__listenToEvents;
    r || (r = this.__listenToEvents = {});
    var s = t.cid(n),
      o = r[s];
    o || (o = r[s] = {
      obj: n,
      events: {}
    });
    var a = o.events[e];
    a || (a = o.events[e] = []), a.push(i), t.bind.call(n, e, i)
  }, t.stopListening = function (n, e, i) {
    var r = this.__listenToEvents,
      s = r,
      o = 0;
    if (!r) return this;
    if (n) {
      var a = t.cid(n);
      if ((s = {})[a] = r[a], !r[a]) return this
    }
    for (var v in s) {
      var l, h = s[v];
      n = r[v].obj, e ? (l = {})[e] = h.events[e] : l = h.events;
      for (var u in l) {
        var d = l[u] || [];
        for (o = 0; o < d.length;) i && i === d[o] || !i ? (t.unbind.call(n, u, d[o]), d.splice(o, 1)) : o++;
        d.length || delete h.events[u]
      }
      t.isEmptyObject(h.events) && delete r[v]
    }
    return this
  }, t.removeEvent = function (t, n, e) {
    if (!this.__bindEvents) return this;
    for (var i, r = this.__bindEvents[t] || [], s = 0, o = "function" == typeof n; s < r.length;) i = r[s], (e ? e(i, t, n) : o && i.handler === n || !o && (i.cid === n || !n)) ? r.splice(s, 1) : s++;
    return this
  }, t.dispatch = function (t, n) {
    var e = this.__bindEvents;
    if (e) {
      var i;
      "string" == typeof t ? (i = t, t = {
        type: t
      }) : i = t.type;
      var r = e[i];
      if (r) {
        r = r.slice(0);
        var s = [t];
        n && s.push.apply(s, n);
        for (var o = 0, a = r.length; a > o; o++) r[o].handler.apply(this, s);
        return t
      }
    }
  }, t.one = function (n, e) {
    var i = function () {
      return t.unbind.call(this, n, i), e.apply(this, arguments)
    };
    return t.bind.call(this, n, i), this
  }, t.event = {
    on: function () {
      return 0 === arguments.length && t.Control && this instanceof t.Control ? t.Control.prototype.on.call(this) : t.addEvent.apply(this, arguments)
    },
    off: function () {
      return 0 === arguments.length && t.Control && this instanceof t.Control ? t.Control.prototype.off.call(this) : t.removeEvent.apply(this, arguments)
    },
    bind: t.addEvent,
    unbind: t.removeEvent,
    delegate: function (n, e, i) {
      return t.addEvent.call(this, e, i)
    },
    undelegate: function (n, e, i) {
      return t.removeEvent.call(this, e, i)
    },
    trigger: t.dispatch,
    one: t.one,
    addEvent: t.addEvent,
    removeEvent: t.removeEvent,
    listenTo: t.listenTo,
    stopListening: t.stopListening,
    dispatch: t.dispatch
  }, t.event
});
define("can/util/array/each", ["can/util/can"], function (e) {
  var t = function (e) {
    var t = e && "boolean" != typeof e && "number" != typeof e && "length" in e && e.length;
    return "function" != typeof arr && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  };
  return e.each = function (n, a, r) {
    var f, o, l, i = 0;
    if (n)
      if (t(n))
        if (e.List && n instanceof e.List)
          for (o = n.attr("length"); o > i && (l = n.attr(i), a.call(r || l, l, i, n) !== !1); i++);
        else
          for (o = n.length; o > i && (l = n[i], a.call(r || l, l, i, n) !== !1); i++);
    else if ("object" == typeof n)
      if (e.Map && n instanceof e.Map || n === e.route) {
        var c = e.Map.keys(n);
        for (i = 0, o = c.length; o > i && (f = c[i], l = n.attr(f), a.call(r || l, l, f, n) !== !1); i++);
      } else
        for (f in n)
          if (Object.prototype.hasOwnProperty.call(n, f) && a.call(r || n[f], n[f], f, n) === !1) break;
    return n
  }, e
});
define("can/util/inserted/inserted", ["can/util/can"], function (e) {
  e.inserted = function (n, r) {
    if (n.length) {
      n = e.makeArray(n);
      for (var i, t, a = r || n[0].ownerDocument || n[0], d = !1, o = e.$(a.contains ? a : a.body), s = 0; void 0 !== (t = n[s]); s++) {
        if (!d) {
          if (!t.getElementsByTagName) continue;
          if (!e.has(o, t).length) return;
          d = !0
        }
        if (d && t.getElementsByTagName) {
          i = e.makeArray(t.getElementsByTagName("*")), e.trigger(t, "inserted", [], !1);
          for (var f, c = 0; void 0 !== (f = i[c]); c++) e.trigger(f, "inserted", [], !1)
        }
      }
    }
  }, e.appendChild = function (n, r, i) {
    var t;
    t = 11 === r.nodeType ? e.makeArray(e.childNodes(r)) : [r], n.appendChild(r), e.inserted(t, i)
  }, e.insertBefore = function (n, r, i, t) {
    var a;
    a = 11 === r.nodeType ? e.makeArray(e.childNodes(r)) : [r], n.insertBefore(r, i), e.inserted(a, t)
  }
});
define("can/util/jquery/jquery", ["jquery/dist/jquery", "can/util/can", "can/util/attr/attr", "can/event/event", "can/util/array/each", "can/util/inserted/inserted"], function (t, e, n, r) {
  var i = function (t) {
    return t.nodeName && (1 === t.nodeType || 9 === t.nodeType) || t == window || t.addEventListener
  };
  t = t || window.jQuery, t.extend(e, t, {
    trigger: function (n, r, a, s) {
      i(n) ? t.event.trigger(r, a, n, !s) : n.trigger ? n.trigger(r, a) : ("string" == typeof r && (r = {
        type: r
      }), r.target = r.target || n, a && (a.length && "string" == typeof a ? a = [a] : a.length || (a = [a])), a || (a = []), e.dispatch.call(n, r, a))
    },
    event: e.event,
    addEvent: e.addEvent,
    removeEvent: e.removeEvent,
    buildFragment: function (e, n) {
      var r;
      return e = [e], n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, r = t.buildFragment(e, n), r.cacheable ? t.clone(r.fragment) : r.fragment || r
    },
    $: t,
    each: e.each,
    bind: function (n, r) {
      return this.bind && this.bind !== e.bind ? this.bind(n, r) : i(this) ? t.event.add(this, n, r) : e.addEvent.call(this, n, r), this
    },
    unbind: function (n, r) {
      return this.unbind && this.unbind !== e.unbind ? this.unbind(n, r) : i(this) ? t.event.remove(this, n, r) : e.removeEvent.call(this, n, r), this
    },
    delegate: function (n, r, a) {
      return this.delegate ? this.delegate(n, r, a) : i(this) ? t(this).delegate(n, r, a) : e.bind.call(this, r, a), this
    },
    undelegate: function (n, r, a) {
      return this.undelegate ? this.undelegate(n, r, a) : i(this) ? t(this).undelegate(n, r, a) : e.unbind.call(this, r, a), this
    },
    proxy: e.proxy,
    attr: n
  }), e.on = e.bind, e.off = e.unbind, t.each(["append", "filter", "addClass", "remove", "data", "get", "has"], function (t, n) {
    e[n] = function (t) {
      return t[n].apply(t, e.makeArray(arguments).slice(1))
    }
  });
  var a = t.cleanData;
  t.cleanData = function (n) {
    t.each(n, function (t, n) {
      n && e.trigger(n, "removed", [], !1)
    }), a(n)
  };
  var s, u = t.fn.domManip;
  t.fn.domManip = function (t, e, n) {
    for (var r = 1; r < arguments.length; r++)
      if ("function" == typeof arguments[r]) {
        s = r;
        break
      }
    return u.apply(this, arguments)
  }, t(document.createElement("div")).append(document.createElement("div")), t.fn.domManip = 2 === s ? function (t, n, r) {
    return u.call(this, t, n, function (t) {
      var n;
      11 === t.nodeType && (n = e.makeArray(e.childNodes(t)));
      var i = r.apply(this, arguments);
      return e.inserted(n ? n : [t]), i
    })
  } : function (t, n) {
    return u.call(this, t, function (t) {
      var r;
      11 === t.nodeType && (r = e.makeArray(e.childNodes(t)));
      var i = n.apply(this, arguments);
      return e.inserted(r ? r : [t]), i
    })
  };
  var d = t.attr;
  t.attr = function (t, n) {
    if (e.isDOM(t) && e.attr.MutationObserver) return d.apply(this, arguments);
    var r, i;
    arguments.length >= 3 && (r = d.call(this, t, n));
    var a = d.apply(this, arguments);
    return arguments.length >= 3 && (i = d.call(this, t, n)), i !== r && e.attr.trigger(t, n, r), a
  };
  var o = t.removeAttr;
  return t.removeAttr = function (t, n) {
      if (e.isDOM(t) && e.attr.MutationObserver) return o.apply(this, arguments);
      var r = d.call(this, t, n),
        i = o.apply(this, arguments);
      return null != r && e.attr.trigger(t, n, r), i
    }, t.event.special.attributes = {
      setup: function () {
        if (e.isDOM(this) && e.attr.MutationObserver) {
          var t = this,
            n = new e.attr.MutationObserver(function (n) {
              n.forEach(function (n) {
                var r = e.simpleExtend({}, n);
                e.trigger(t, r, [])
              })
            });
          n.observe(this, {
            attributes: !0,
            attributeOldValue: !0
          }), e.data(e.$(this), "canAttributesObserver", n)
        } else e.data(e.$(this), "canHasAttributesBindings", !0)
      },
      teardown: function () {
        e.isDOM(this) && e.attr.MutationObserver ? (e.data(e.$(this), "canAttributesObserver").disconnect(), t.removeData(this, "canAttributesObserver")) : t.removeData(this, "canHasAttributesBindings")
      }
    },
    function () {
      var t = "<-\n>",
        n = e.buildFragment(t, document);
      if (n.firstChild && t !== n.firstChild.nodeValue) {
        var r = e.buildFragment;
        e.buildFragment = function (t, e) {
          var n = r(t, e);
          return 1 === n.childNodes.length && 3 === n.childNodes.item(0).nodeType && (n.childNodes.item(0).nodeValue = t), n
        }
      }
    }(), t.event.special.inserted = {}, t.event.special.removed = {}, e
});
define("can/util/util", ["can/util/jquery/jquery"], function (u) {
  return u
});
define("can/view/view", ["can/util/util"], function (e) {
  var r = e.isFunction,
    n = e.makeArray,
    t = 1,
    i = function (e) {
      var r = function () {
        return c.frag(e.apply(this, arguments))
      };
      return r.render = function () {
        return e.apply(e, arguments)
      }, r
    },
    u = function (e, r) {
      if (!e.length) throw new Error("can.view: No template or empty template:" + r)
    },
    o = function (n, t) {
      if (r(n)) {
        var i = e.Deferred();
        return i.resolve(n)
      }
      var o, a, d, f = "string" == typeof n ? n : n.url,
        s = n.engine && "." + n.engine || f.match(/\.[\w\d]+$/);
      if (f.match(/^#/) && (f = f.substr(1)), (a = document.getElementById(f)) && (s = "." + a.type.match(/\/(x\-)?(.+)/)[2]), s || c.cached[f] || (f += s = c.ext), e.isArray(s) && (s = s[0]), d = c.toId(f), f.match(/^\/\//) && (f = f.substr(2), f = window.steal ? steal.config().root.mapJoin("" + steal.id(f)) : f), window.require && require.toUrl && (f = require.toUrl(f)), o = c.types[s], c.cached[d]) return c.cached[d];
      if (a) return c.registerView(d, a.innerHTML, o);
      var p = new e.Deferred;
      return e.ajax({
        async: t,
        url: f,
        dataType: "text",
        error: function (e) {
          u("", f), p.reject(e)
        },
        success: function (e) {
          u(e, f), c.registerView(d, e, o, p)
        }
      }), p
    },
    a = function (r) {
      var n = [];
      if (e.isDeferred(r)) return [r];
      for (var t in r) e.isDeferred(r[t]) && n.push(r[t]);
      return n
    },
    d = function (r) {
      return e.isArray(r) && "success" === r[1] ? r[0] : r
    },
    c = e.view = e.template = function (e, n, t, i) {
      return r(t) && (i = t, t = void 0), c.renderAs("fragment", e, n, t, i)
    };
  return e.extend(c, {
    frag: function (e, r) {
      return c.hookup(c.fragment(e), r)
    },
    fragment: function (r) {
      if ("string" != typeof r && 11 === r.nodeType) return r;
      var n = e.buildFragment(r, document.body);
      return n.childNodes.length || n.appendChild(document.createTextNode("")), n
    },
    toId: function (r) {
      return e.map(r.toString().split(/\/|\./g), function (e) {
        return e ? e : void 0
      }).join("_")
    },
    toStr: function (e) {
      return null == e ? "" : "" + e
    },
    hookup: function (r, n) {
      var t, i, u = [];
      return e.each(r.childNodes ? e.makeArray(r.childNodes) : r, function (r) {
        1 === r.nodeType && (u.push(r), u.push.apply(u, e.makeArray(r.getElementsByTagName("*"))))
      }), e.each(u, function (e) {
        e.getAttribute && (t = e.getAttribute("data-view-id")) && (i = c.hookups[t]) && (i(e, n, t), delete c.hookups[t], e.removeAttribute("data-view-id"))
      }), r
    },
    hookups: {},
    hook: function (e) {
      return c.hookups[++t] = e, " data-view-id='" + t + "'"
    },
    cached: {},
    cachedRenderers: {},
    cache: !0,
    register: function (r) {
      this.types["." + r.suffix] = r, e[r.suffix] = c[r.suffix] = function (e, n) {
        var t, u;
        if (!n) return u = function () {
          return t || (t = r.fragRenderer ? r.fragRenderer(null, e) : i(r.renderer(null, e))), t.apply(this, arguments)
        }, u.render = function () {
          var n = r.renderer(null, e);
          return n.apply(n, arguments)
        }, u;
        var o = function () {
          return t || (t = r.fragRenderer ? r.fragRenderer(e, n) : r.renderer(e, n)), t.apply(this, arguments)
        };
        return r.fragRenderer ? c.preload(e, o) : c.preloadStringRenderer(e, o)
      }
    },
    types: {},
    ext: ".ejs",
    registerScript: function (e, r, n) {
      return "can.view.preloadStringRenderer('" + r + "'," + c.types["." + e].script(r, n) + ");"
    },
    preload: function (r, n) {
      var t = c.cached[r] = (new e.Deferred).resolve(function (e, r) {
        return n.call(e, e, r)
      });
      return t.__view_id = r, c.cachedRenderers[r] = n, n
    },
    preloadStringRenderer: function (e, r) {
      return this.preload(e, i(r))
    },
    render: function (r, n, t, i) {
      return e.view.renderAs("string", r, n, t, i)
    },
    renderTo: function (e, r, n, t) {
      return ("string" === e && r.render ? r.render : r)(n, t)
    },
    renderAs: function (t, i, u, f, s) {
      r(f) && (s = f, f = void 0);
      var p, l, h, g, v = a(u);
      if (v.length) return p = new e.Deferred, l = e.extend({}, u), v.push(o(i, !0)), e.when.apply(e, v).then(function (r) {
        var i, o = n(arguments),
          a = o.pop();
        if (e.isDeferred(u)) l = d(r);
        else
          for (var c in u) e.isDeferred(u[c]) && (l[c] = d(o.shift()));
        i = e.view.renderTo(t, a, l, f), p.resolve(i, l), s && s(i, l)
      }, function () {
        p.reject.apply(p, arguments)
      }), p;
      if (h = r(s), p = e.__notObserve(o)(i, h), h) g = p, p.then(function (r) {
        s(u ? e.view.renderTo(t, r, u, f) : r)
      });
      else {
        if ("resolved" === p.state() && p.__view_id) {
          var m = c.cachedRenderers[p.__view_id];
          return u ? e.view.renderTo(t, m, u, f) : m
        }
        p.then(function (r) {
          g = u ? e.view.renderTo(t, r, u, f) : r
        })
      }
      return g
    },
    registerView: function (r, n, t, u) {
      var o, a = "object" == typeof t ? t : c.types[t || c.ext];
      return o = a.fragRenderer ? a.fragRenderer(r, n) : i(a.renderer(r, n)), u = u || new e.Deferred, c.cache && (c.cached[r] = u, u.__view_id = r, c.cachedRenderers[r] = o), u.resolve(o)
    },
    simpleHelper: function (r) {
      return function () {
        var n = [];
        return e.each(arguments, function (e, r) {
          if (r <= arguments.length) {
            for (; e && e.isComputed;) e = e();
            n.push(e)
          }
        }), r.apply(this, n)
      }
    }
  }), e
});
define("can/view/callbacks/callbacks", ["can/util/util", "can/view/view"], function (t) {
  var e = t.view.attr = function (t, e) {
      if (!e) {
        var i = a[t];
        if (!i)
          for (var n = 0, l = r.length; l > n; n++) {
            var o = r[n];
            if (o.match.test(t)) {
              i = o.handler;
              break
            }
          }
        return i
      }
      "string" == typeof t ? a[t] = e : r.push({
        match: t,
        handler: e
      })
    },
    a = {},
    r = [],
    i = /[-\:]/,
    n = t.view.tag = function (e, a) {
      if (!a) {
        var r = l[e.toLowerCase()];
        return !r && i.test(e) && (r = function () {}), r
      }
      t.global.html5 && (t.global.html5.elements += " " + e, t.global.html5.shivDocument()), l[e.toLowerCase()] = a
    },
    l = {};
  return t.view.callbacks = {
    _tags: l,
    _attributes: a,
    _regExpAttributes: r,
    tag: n,
    attr: e,
    tagHandler: function (e, a, r) {
      var i, n = r.options.get("tags." + a, {
          proxyMethods: !1
        }),
        o = n || l[a],
        s = r.scope;
      if (i = o ? t.__notObserve(o)(e, r) : s, i && r.subtemplate) {
        s !== i && (s = s.add(i));
        var c = r.subtemplate(s, r.options),
          v = "string" == typeof c ? t.view.frag(c) : c;
        t.appendChild(e, v)
      }
    }
  }, t.view.callbacks
});
define("can/view/elements", ["can/util/util", "can/view/view"], function (e) {
  var t = "undefined" != typeof document ? document : null,
    n = t && function () {
      return 1 === e.$(document.createComment("~")).length
    }(),
    o = {
      tagToContentPropMap: {
        option: t && "textContent" in document.createElement("option") ? "textContent" : "innerText",
        textarea: "value"
      },
      attrMap: e.attr.map,
      attrReg: /([^\s=]+)[\s]*=[\s]*/,
      defaultValue: e.attr.defaultValue,
      tagMap: {
        "": "span",
        colgroup: "col",
        table: "tbody",
        tr: "td",
        ol: "li",
        ul: "li",
        tbody: "tr",
        thead: "tr",
        tfoot: "tr",
        select: "option",
        optgroup: "option"
      },
      reverseTagMap: {
        col: "colgroup",
        tr: "tbody",
        option: "select",
        td: "tr",
        th: "tr",
        li: "ul"
      },
      selfClosingTags: {
        col: !0
      },
      getParentNode: function (e, t) {
        return t && 11 === e.parentNode.nodeType ? t : e.parentNode
      },
      setAttr: e.attr.set,
      getAttr: e.attr.get,
      removeAttr: e.attr.remove,
      contentText: function (e) {
        return "string" == typeof e ? e : e || 0 === e ? "" + e : ""
      },
      after: function (t, n) {
        var o = t[t.length - 1];
        o.nextSibling ? e.insertBefore(o.parentNode, n, o.nextSibling, e.document) : e.appendChild(o.parentNode, n, e.document)
      },
      replace: function (t, r) {
        var a, l = t[0].parentNode;
        "SELECT" === l.nodeName.toUpperCase() && l.selectedIndex >= 0 && (a = l.value), o.after(t, r), e.remove(e.$(t)).length < t.length && !n && e.each(t, function (e) {
          8 === e.nodeType && e.parentNode.removeChild(e)
        }), void 0 !== a && (l.value = a)
      }
    };
  return e.view.elements = o, o
});
define("can/util/bind/bind", ["can/util/util"], function (i) {
  return i.bindAndSetup = function () {
    return i.addEvent.apply(this, arguments), this.__inSetup || (this._bindings ? this._bindings++ : (this._bindings = 1, this._bindsetup && this._bindsetup())), this
  }, i.unbindAndTeardown = function (n, t) {
    if (!this.__bindEvents) return this;
    var s = this.__bindEvents[n] || [],
      d = s.length;
    return i.removeEvent.apply(this, arguments), null === this._bindings ? this._bindings = 0 : this._bindings = this._bindings - (d - s.length), !this._bindings && this._bindteardown && this._bindteardown(), this
  }, i
});
define("can/util/batch/batch", ["can/util/can"], function (t) {
  var n = 1,
    a = 0,
    c = null,
    e = null,
    u = [];
  t.batch = {
    start: function (t) {
      if (a++, 1 === a) {
        var c = {
          events: [],
          callbacks: [],
          number: n++
        };
        u.push(c), t && c.callbacks.push(t), e = c
      }
    },
    stop: function (n, l) {
      if (n ? a = 0 : a--, 0 === a) {
        e = null;
        var s;
        if (1 === u.length)
          for (; s = u.shift();) {
            var h = s.events,
              i = s.callbacks;
            c = s, t.batch.batchNum = s.number;
            var r, b;
            for (l && t.batch.start(), r = 0, b = h.length; b > r; r++) t.dispatch.apply(h[r][0], h[r][1]);
            for (t.batch._onDispatchedEvents(s.number), r = 0; r < i.length; r++) i[r]();
            c = null, t.batch.batchNum = void 0
          }
      }
    },
    _onDispatchedEvents: function () {},
    trigger: function (n, a, u) {
      n.__inSetup || (a = "string" == typeof a ? {
        type: a
      } : a, e ? (a.batchNum = e.number, e.events.push([n, [a, u]])) : (c && (a.batchNum = c.number), t.dispatch.call(n, a, u)))
    },
    afterPreviousEvents: function (t) {
      t({})
    },
    after: function (t) {
      var n = e || c;
      n ? n.callbacks.push(t) : t({})
    }
  }
});
define("can/compute/read", ["can/util/util"], function (e) {
  var t = function (e, r, a) {
      a = a || {};
      for (var o, s, u = {
          foundObservable: !1
        }, i = n(e, 0, r, a, u), d = r.length, v = 0; d > v;) {
        s = i;
        for (var l = 0, f = t.propertyReaders.length; f > l; l++) {
          var c = t.propertyReaders[l];
          if (c.test(i)) {
            i = c.read(i, r[v], v, a, u);
            break
          }
        }
        if (v += 1, i = n(i, v, r, a, u, s), o = typeof i, v < r.length && (null === i || "function" !== o && "object" !== o)) return a.earlyExit && a.earlyExit(s, v - 1, i), {
          value: void 0,
          parent: s
        }
      }
      return void 0 === i && a.earlyExit && a.earlyExit(s, v - 1), {
        value: i,
        parent: s
      }
    },
    r = function (e, t) {
      var r = t[e - 1];
      return r && r.at
    },
    n = function (e, r, n, a, o, s) {
      var u;
      do {
        u = !1;
        for (var i = 0, d = t.valueReaders.length; d > i; i++) t.valueReaders[i].test(e, r, n, a) && (e = t.valueReaders[i].read(e, r, n, a, o, s))
      } while (u);
      return e
    };
  t.valueReaders = [{
    name: "compute",
    test: function (e, t, n, a) {
      return e && e.isComputed && !r(t, n)
    },
    read: function (t, r, n, a, o) {
      return a.isArgument && r === n.length ? t : (!o.foundObservable && a.foundObservable && (a.foundObservable(t, r), o.foundObservable = !0), t instanceof e.Compute ? t.get() : t())
    }
  }, {
    name: "function",
    test: function (t, r, n, a) {
      var o = typeof t;
      return !("function" !== o || t.isComputed || e.Construct && t.prototype instanceof e.Construct || e.route && t === e.route)
    },
    read: function (t, n, a, o, s, u) {
      return r(n, a) ? n === a.length ? e.proxy(t, u) : t : o.callMethodsOnObservables && e.isMapLike(u) ? t.apply(u, o.args || []) : o.isArgument && n === a.length ? o.proxyMethods !== !1 ? e.proxy(t, u) : t : t.apply(u, o.args || [])
    }
  }], t.propertyReaders = [{
    name: "map",
    test: e.isMapLike,
    read: function (e, t, r, n, a) {
      !a.foundObservable && n.foundObservable && (n.foundObservable(e, r), a.foundObservable = !0);
      var o = e[t.key];
      return "function" != typeof o || e.constructor.prototype[t.key] !== o || o.isComputed ? e.attr(t.key) : o
    }
  }, {
    name: "promise",
    test: function (t) {
      return e.isPromise(t)
    },
    read: function (t, r, n, a, o) {
      !o.foundObservable && a.foundObservable && (a.foundObservable(t, n), o.foundObservable = !0);
      var s = t.__observeData;
      return t.__observeData || (s = t.__observeData = {
        isPending: !0,
        state: "pending",
        isResolved: !1,
        isRejected: !1,
        value: void 0,
        reason: void 0
      }, e.cid(s), e.simpleExtend(s, e.event), t.then(function (e) {
        s.isPending = !1, s.isResolved = !0, s.value = e, s.state = "resolved", s.dispatch("state", ["resolved", "pending"])
      }, function (e) {
        s.isPending = !1, s.isRejected = !0, s.reason = e, s.state = "rejected", s.dispatch("state", ["rejected", "pending"])
      })), e.__observe(s, "state"), r.key in s ? s[r.key] : t[r.key]
    }
  }, {
    name: "object",
    test: function () {
      return !0
    },
    read: function (e, t) {
      return null == e ? void 0 : t.key in e ? e[t.key] : t.at && a[t.key] && "@" + t.key in e ? (t.at = !1, e["@" + t.key]) : void 0
    }
  }];
  var a = {
    index: !0,
    key: !0,
    event: !0,
    element: !0,
    viewModel: !0
  };
  return t.write = function (t, r, n, a) {
    return a = a || {}, e.isMapLike(t) ? !a.isArgument && t._data && t._data[r] && t._data[r].isComputed ? t._data[r](n) : t.attr(r, n) : t[r] && t[r].isComputed ? t[r](n) : void("object" == typeof t && (t[r] = n))
  }, t.reads = function (e) {
    var t = [],
      r = 0,
      n = !1;
    "@" === e.charAt(0) && (r = 1, n = !0);
    for (var a = "", o = r; o < e.length; o++) {
      var s = e.charAt(o);
      "." === s || "@" === s ? "\\" !== e.charAt(o - 1) ? (t.push({
        key: a,
        at: n
      }), n = "@" === s, a = "") : a = a.substr(0, a.length - 1) + "." : a += s
    }
    return t.push({
      key: a,
      at: n
    }), t
  }, t
});
define("can/compute/get_value_and_bind", ["can/util/util"], function (e) {
  function t(t, n, i) {
    this.newObserved = {}, this.oldObserved = null, this.func = t, this.context = n, this.compute = i, this.onDependencyChange = e.proxy(this.onDependencyChange, this), this.depth = null, this.childDepths = {}, this.ignore = 0, this.inBatch = !1, i.observedInfo = this
  }
  e.simpleExtend(t.prototype, {
    getDepth: function () {
      return null !== this.depth ? this.depth : this.depth = this._getDepth()
    },
    _getDepth: function () {
      var e = 0,
        t = this.childDepths;
      for (var n in t) t[n] > e && (e = t[n]);
      return e + 1
    },
    addEdge: function (e) {
      e.obj.bind(e.event, this.onDependencyChange), e.obj.observedInfo && (this.childDepths[e.obj._cid] = e.obj.observedInfo.getDepth(), this.depth = null)
    },
    removeEdge: function (e) {
      e.obj.unbind(e.event, this.onDependencyChange), e.obj.observedInfo && (delete this.childDepths[e.obj._cid], this.depth = null)
    },
    onDependencyChange: function (e) {
      this.bound && (void 0 !== e.batchNum ? e.batchNum !== this.batchNum && (t.registerUpdate(this), this.batchNum = e.batchNum) : this.updateCompute(e.batchNum))
    },
    updateCompute: function (e) {
      var t = this.value;
      this.getValueAndBind(), this.compute.updater(this.value, t, e)
    },
    getValueAndBind: function () {
      this.bound = !0, this.oldObserved = this.newObserved || {}, this.ignore = 0, this.newObserved = {}, s.push(this), this.value = this.func.call(this.context), s.pop(), this.updateBindings()
    },
    updateBindings: function () {
      var e, t, n = this.newObserved,
        i = this.oldObserved;
      for (e in n) t = n[e], i[e] ? i[e] = null : this.addEdge(t);
      for (e in i) t = i[e], t && this.removeEdge(t)
    },
    teardown: function () {
      this.bound = !1;
      for (var e in this.newObserved) {
        var t = this.newObserved[e];
        this.removeEdge(t)
      }
      this.newObserved = {}
    }
  });
  var n = [],
    i = 1 / 0,
    h = 0;
  t.registerUpdate = function (e, t) {
    var s = e.getDepth() - 1;
    i = Math.min(s, i), h = Math.max(h, s);
    var r = n[s];
    r || (r = n[s] = []), r.push(e)
  }, t.batchEnd = function (e) {
    for (var t; h >= i;) {
      var s = n[i];
      s && (t = s.pop()) ? t.updateCompute(e) : i++
    }
    n = [], i = 1 / 0, h = 0
  };
  var s = [];
  return e.__observe = function (e, t) {
    var n = s[s.length - 1];
    if (n) {
      var i = t + "",
        h = e._cid + "|" + i;
      n.traps ? n.traps.push({
        obj: e,
        event: i,
        name: h
      }) : n.ignore || n.newObserved[h] || (n.newObserved[h] = {
        obj: e,
        event: i
      })
    }
  }, e.__reading = e.__observe, e.__trapObserves = function () {
    if (s.length) {
      var e = s[s.length - 1],
        t = e.traps = [];
      return function () {
        return e.traps = null, t
      }
    }
    return function () {
      return []
    }
  }, e.__observes = function (e) {
    var t = s[s.length - 1];
    if (t)
      for (var n = 0, i = e.length; i > n; n++) {
        var h = e[n],
          r = h.name;
        t.newObserved[r] || (t.newObserved[r] = h)
      }
  }, e.__isRecordingObserves = function () {
    var e = s.length;
    return e && 0 === s[e - 1].ignore
  }, e.__notObserve = function (e) {
    return function () {
      if (s.length) {
        var t = s[s.length - 1];
        t.ignore++;
        var n = e.apply(this, arguments);
        return t.ignore--, n
      }
      return e.apply(this, arguments)
    }
  }, e.batch._onDispatchedEvents = t.batchEnd, t
});
define("can/compute/proto_compute", ["can/util/util", "can/util/bind/bind", "can/compute/read", "can/compute/get_value_and_bind", "can/util/batch/batch"], function (t, e, n, i) {
  t.Compute = function (e, n, i, s) {
    t.cid(this, "compute");
    for (var u = [], o = 0, a = arguments.length; a > o; o++) u[o] = arguments[o];
    var h = typeof u[1];
    "function" == typeof u[0] ? this._setupGetterSetterFn(u[0], u[1], u[2], u[3]) : u[1] ? "string" === h ? this._setupProperty(u[0], u[1], u[2]) : "function" === h ? this._setupSetter(u[0], u[1], u[2]) : u[1] && u[1].fn ? this._setupAsyncCompute(u[0], u[1]) : this._setupSettings(u[0], u[1]) : this._setupSimpleValue(u[0]), this._args = u, this.isComputed = !0
  }, t.simpleExtend(t.Compute.prototype, {
    _setupGetterSetterFn: function (e, n, i) {
      this._set = n ? t.proxy(e, n) : e, this._get = n ? t.proxy(e, n) : e, this._canObserve = i === !1 ? !1 : !0;
      var s = u(this, e, n || this);
      this._on = s.on, this._off = s.off
    },
    _setupProperty: function (e, n, i) {
      var s, u = t.isMapLike(e),
        o = this;
      u ? (s = function (t, e, n) {
        o.updater(e, n, t.batchNum)
      }, this.hasDependencies = !0, this._get = function () {
        return e.attr(n)
      }, this._set = function (t) {
        e.attr(n, t)
      }) : (s = function () {
        o.updater(o._get(), o.value)
      }, this._get = function () {
        return t.getObject(n, [e])
      }, this._set = function (i) {
        var s = n.split("."),
          u = s.pop(),
          o = t.getObject(s.join("."), [e]);
        o[u] = i
      }), this._on = function (u) {
        t.bind.call(e, i || n, s), this.value = this._get()
      }, this._off = function () {
        return t.unbind.call(e, i || n, s)
      }
    },
    _setupSetter: function (e, n, i) {
      this.value = e, this._set = n, t.simpleExtend(this, i)
    },
    _setupSettings: function (t, e) {
      if (this.value = t, this._set = e.set || this._set, this._get = e.get || this._get, !e.__selfUpdater) {
        var n = this,
          i = this.updater;
        this.updater = function () {
          i.call(n, n._get(), n.value)
        }
      }
      this._on = e.on ? e.on : this._on, this._off = e.off ? e.off : this._off
    },
    _setupAsyncCompute: function (e, n) {
      var i = this;
      this.value = e, this._setUpdates = !0, this.lastSetValue = new t.Compute(e), this._set = function (t) {
        return t === i.lastSetValue.get() ? this.value : i.lastSetValue.set(t)
      }, this._get = function () {
        return o.call(n.context, i.lastSetValue.get())
      };
      var s, o = n.fn;
      if (0 === o.length) s = u(this, o, n.context);
      else if (1 === o.length) s = u(this, function () {
        return o.call(n.context, i.lastSetValue.get())
      }, n);
      else {
        var a = this.updater,
          h = function (t) {
            a.call(i, t, i.value)
          };
        this.updater = function (t) {
          a.call(i, t, i.value)
        }, s = u(this, function () {
          var t = o.call(n.context, i.lastSetValue.get(), h);
          return void 0 !== t ? t : this.value
        }, this)
      }
      this._on = s.on, this._off = s.off
    },
    _setupSimpleValue: function (t) {
      this.value = t
    },
    _bindsetup: t.__notObserve(function () {
      this.bound = !0, this._on(this.updater)
    }),
    _bindteardown: function () {
      this._off(this.updater), this.bound = !1
    },
    bind: t.bindAndSetup,
    unbind: t.unbindAndTeardown,
    clone: function (e) {
      return e && "function" == typeof this._args[0] ? this._args[1] = e : e && (this._args[2] = e), new t.Compute(this._args[0], this._args[1], this._args[2], this._args[3])
    },
    _on: t.k,
    _off: t.k,
    get: function () {
      return t.__isRecordingObserves() && this._canObserve !== !1 && (t.__observe(this, "change"), this.bound || t.Compute.temporarilyBind(this)), this.bound ? this.value : this._get()
    },
    _get: function () {
      return this.value
    },
    set: function (t) {
      var e = this.value,
        n = this._set(t, e);
      return this._setUpdates ? this.value : this.hasDependencies ? this._get() : (void 0 === n ? this.value = this._get() : this.value = n, s(this, this.value, e), this.value)
    },
    _set: function (t) {
      return this.value = t
    },
    updater: function (t, e, n) {
      this.value = t, s(this, t, e, n)
    },
    toFunction: function () {
      return t.proxy(this._computeFn, this)
    },
    _computeFn: function (t) {
      return arguments.length ? this.set(t) : this.get()
    }
  });
  var s = function (e, n, i, s) {
      var u = n !== i && !(n !== n && i !== i);
      u && t.batch.trigger(e, {
        type: "change",
        batchNum: s
      }, [n, i])
    },
    u = function (e, n, s) {
      var u = new i(n, s, e);
      return {
        on: function () {
          u.getValueAndBind(), e.value = u.value, e.hasDependencies = !t.isEmptyObject(u.newObserved)
        },
        off: function () {
          u.teardown()
        }
      }
    };
  t.Compute.temporarilyBind = function (e) {
    var n = e.computeInstance || e;
    n.bind("change", t.k), o || (o = [], setTimeout(a, 10)), o.push(n)
  };
  var o, a = function () {
    for (var e = 0, n = o.length; n > e; e++) o[e].unbind("change", t.k);
    o = null
  };
  return t.Compute.async = function (e, n, i) {
    return new t.Compute(e, {
      fn: n,
      context: i
    })
  }, t.Compute.truthy = function (e) {
    return new t.Compute(function () {
      var t = e.get();
      return "function" == typeof t && (t = t.get()), !!t
    })
  }, t.Compute.read = n, t.Compute.set = n.write, t.Compute
});
define("can/compute/compute", ["can/util/util", "can/util/bind/bind", "can/util/batch/batch", "can/compute/proto_compute"], function (t, n) {
  return t.compute = function (n, e, u, o) {
    var c = new t.Compute(n, e, u, o),
      r = c.bind,
      i = c.unbind,
      p = function (t) {
        return arguments.length ? c.set(t) : c.get()
      },
      m = t.cid(p, "compute"),
      a = "__handler" + m;
    return p.bind = function (t, n) {
      var e = n && n[a];
      return n && !e && (e = n[a] = function () {
        n.apply(p, arguments)
      }), r.call(c, t, e)
    }, p.unbind = function (t, n) {
      var e = n && n[a];
      return e ? (delete n[a], c.unbind(t, e)) : i.apply(c, arguments)
    }, p.isComputed = c.isComputed, p.clone = function (u) {
      return "function" == typeof n && (e = u), t.compute(n, e, u, o)
    }, p.computeInstance = c, p
  }, t.compute.truthy = function (n) {
    return t.compute(function () {
      var t = n();
      return "function" == typeof t && (t = t()), !!t
    })
  }, t.compute.async = function (n, e, u) {
    return t.compute(n, {
      fn: e,
      context: u
    })
  }, t.compute.read = t.Compute.read, t.compute.set = t.Compute.set, t.compute.temporarilyBind = t.Compute.temporarilyBind, t.compute
});
define("can/view/scope/compute_data", ["can/util/util", "can/compute/compute", "can/compute/get_value_and_bind"], function (e, t, n) {
  var a = function (t) {
      return t.reads && 1 === t.reads.length && t.root instanceof e.Map && !e.isFunction(t.root[t.reads[0].key])
    },
    o = function (e, t, n) {
      var a = t.root,
        o = t.reads[0].key;
      a.bind(o, n), e.value = t.initialValue
    },
    u = function (e, t) {
      e.root.unbind(e.reads[0].key, t)
    },
    r = function (t, n, a, o, u) {
      if (!(arguments.length > 4)) {
        if (o.root) return e.compute.read(o.root, o.reads, a).value;
        var r = t.read(n, a);
        return o.scope = r.scope, o.initialValue = r.value, o.reads = r.reads, o.root = r.rootObserve, o.setRoot = r.setRoot, r.value
      }
      var c = o.root || o.setRoot;
      if (c)
        if (c.isComputed) c(u);
        else if (o.reads.length) {
        var s = o.reads.length - 1,
          i = o.reads.length ? e.compute.read(c, o.reads.slice(0, s)).value : c;
        e.compute.set(i, o.reads[s].key, u, a)
      }
    };
  return function (t, c, s) {
    s = s || {
      args: []
    };
    var i = {},
      d = function (e) {
        return arguments.length ? r(t, c, s, i, e) : r(t, c, s, i)
      },
      l = function (e, t, n) {
        "function" != typeof t ? f.computeInstance.updater(t, n, e.batchNum) : (u(i, l), m.getValueAndBind(), p = !1, f.computeInstance.updater(m.value, n, e.batchNum))
      },
      p = !1,
      f = e.compute(void 0, {
        on: function () {
          m.getValueAndBind(), a(i) && (o(m, i, l), m.teardown(), m.newObserved = {}, p = !0), f.computeInstance.value = m.value, f.computeInstance.hasDependencies = p || !e.isEmptyObject(m.newObserved)
        },
        off: function () {
          p ? u(i, l) : m.teardown()
        },
        set: d,
        get: d,
        __selfUpdater: !0
      }),
      m = new n(d, null, f.computeInstance);
    return i.compute = f, i
  }
});
define("can/util/string/string", ["can/util/util"], function (e) {
  var r = /_|-/,
    n = /\=\=/,
    t = /([A-Z]+)([A-Z][a-z])/g,
    a = /([a-z\d])([A-Z])/g,
    u = /([a-z\d])([A-Z])/g,
    i = /\{([^\}]+)\}/g,
    c = /"/g,
    o = /'/g,
    l = /-+(.)?/g,
    p = /[a-z][A-Z]/g,
    f = function (e, r, n) {
      var t = e[r];
      return void 0 === t && n === !0 && (t = e[r] = {}), t
    },
    g = function (e) {
      return /^f|^o/.test(typeof e)
    },
    d = function (e) {
      var r = null === e || void 0 === e || isNaN(e) && "" + e == "NaN";
      return "" + (r ? "" : e)
    };
  return e.extend(e, {
    esc: function (e) {
      return d(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(c, "&#34;").replace(o, "&#39;")
    },
    getObject: function (r, n, t) {
      var a, u, i, c, o = r ? r.split(".") : [],
        l = o.length,
        p = 0;
      if (n = e.isArray(n) ? n : [n || window], c = n.length, !l) return n[0];
      for (p; c > p; p++) {
        for (a = n[p], i = void 0, u = 0; l > u && g(a); u++) i = a, a = f(i, o[u]);
        if (void 0 !== i && void 0 !== a) break
      }
      if (t === !1 && void 0 !== a && delete i[o[u - 1]], t === !0 && void 0 === a)
        for (a = n[0], u = 0; l > u && g(a); u++) a = f(a, o[u], !0);
      return a
    },
    capitalize: function (e, r) {
      return e.charAt(0).toUpperCase() + e.slice(1)
    },
    camelize: function (e) {
      return d(e).replace(l, function (e, r) {
        return r ? r.toUpperCase() : ""
      })
    },
    hyphenate: function (e) {
      return d(e).replace(p, function (e, r) {
        return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
      })
    },
    underscore: function (e) {
      return e.replace(n, "/").replace(t, "$1_$2").replace(a, "$1_$2").replace(u, "_").toLowerCase()
    },
    sub: function (r, n, t) {
      var a = [];
      return r = r || "", a.push(r.replace(i, function (r, u) {
        var i = e.getObject(u, n, t === !0 ? !1 : void 0);
        return void 0 === i || null === i ? (a = null, "") : g(i) && a ? (a.push(i), "") : "" + i
      })), null === a ? a : a.length <= 1 ? a[0] : a
    },
    replacer: i,
    undHash: r
  }), e
});
define("can/construct/construct", ["can/util/string/string"], function (t) {
  var n, e = 0;
  try {
    Object.getOwnPropertyDescriptor({}), n = !0
  } catch (r) {
    n = !1
  }
  var o = function (t, n) {
      var e = Object.getOwnPropertyDescriptor(t, n);
      return e && (e.get || e.set) ? e : null
    },
    s = function (n, e, r) {
      r = r || n;
      var s;
      for (var i in n)(s = o(n, i)) ? this._defineProperty(r, e, i, s) : t.Construct._overwrite(r, e, i, n[i])
    },
    i = function (n, e, r) {
      r = r || n;
      for (var o in n) t.Construct._overwrite(r, e, o, n[o])
    };
  return t.Construct = function () {
    return arguments.length ? t.Construct.extend.apply(t.Construct, arguments) : void 0
  }, t.extend(t.Construct, {
    constructorExtends: !0,
    newInstance: function () {
      var t, n = this.instance();
      return n.setup && (n.__inSetup = !0, t = n.setup.apply(n, arguments), delete n.__inSetup), n.init && n.init.apply(n, t || arguments), n
    },
    _inherit: n ? s : i,
    _defineProperty: function (t, n, e, r) {
      Object.defineProperty(t, e, r)
    },
    _overwrite: function (t, n, e, r) {
      t[e] = r
    },
    setup: function (n, e) {
      this.defaults = t.extend(!0, {}, n.defaults, this.defaults)
    },
    instance: function () {
      e = 1;
      var t = new this;
      return e = 0, t
    },
    extend: function (n, r, o) {
      function s() {
        return e ? void 0 : this.constructor !== a && arguments.length && a.constructorExtends ? a.extend.apply(a, arguments) : a.newInstance.apply(a, arguments)
      }
      var i = n,
        u = r,
        c = o;
      "string" != typeof i && (c = u, u = i, i = null), c || (c = u, u = null), c = c || {};
      var a, p, f, l, h, d, y, m, g, v = this,
        _ = this.prototype;
      g = this.instance(), t.Construct._inherit(c, _, g), i ? (p = i.split("."), y = p.pop()) : u && u.shortName ? y = u.shortName : this.shortName && (y = this.shortName), "undefined" == typeof constructorName && (a = function () {
        return s.apply(this, arguments)
      });
      for (d in v) v.hasOwnProperty(d) && (a[d] = v[d]);
      t.Construct._inherit(u, v, a), i && (f = t.getObject(p.join("."), window, !0), m = f, l = t.underscore(i.replace(/\./g, "_")), h = t.underscore(y), f[y] = a), t.extend(a, {
        constructor: a,
        prototype: g,
        namespace: m,
        _shortName: h,
        fullName: i,
        _fullName: l
      }), void 0 !== y && (a.shortName = y), a.prototype.constructor = a;
      var w = [v].concat(t.makeArray(arguments)),
        C = a.setup.apply(a, w);
      return a.init && a.init.apply(a, C || w), a
    }
  }), t.Construct.prototype.setup = function () {}, t.Construct.prototype.init = function () {}, t.Construct
});
define("can/map/bubble", ["can/util/util"], function (n) {
  var i = n.bubble = {
    bind: function (n, e) {
      if (!n.__inSetup) {
        var b, t = i.events(n, e),
          r = t.length;
        n._bubbleBindings || (n._bubbleBindings = {});
        for (var u = 0; r > u; u++) b = t[u], n._bubbleBindings[b] ? n._bubbleBindings[b]++ : (n._bubbleBindings[b] = 1, i.childrenOf(n, b))
      }
    },
    unbind: function (e, b) {
      for (var t, r = i.events(e, b), u = r.length, d = 0; u > d; d++) t = r[d], e._bubbleBindings && e._bubbleBindings[t]--, e._bubbleBindings && !e._bubbleBindings[t] && (delete e._bubbleBindings[t], i.teardownChildrenFrom(e, t), n.isEmptyObject(e._bubbleBindings) && delete e._bubbleBindings)
    },
    add: function (e, b, t) {
      if (b instanceof n.Map && e._bubbleBindings)
        for (var r in e._bubbleBindings) e._bubbleBindings[r] && (i.teardownFromParent(e, b, r), i.toParent(b, e, t, r))
    },
    addMany: function (n, e) {
      for (var b = 0, t = e.length; t > b; b++) i.add(n, e[b], b)
    },
    remove: function (e, b) {
      if (b instanceof n.Map && e._bubbleBindings)
        for (var t in e._bubbleBindings) e._bubbleBindings[t] && i.teardownFromParent(e, b, t)
    },
    removeMany: function (n, e) {
      for (var b = 0, t = e.length; t > b; b++) i.remove(n, e[b])
    },
    set: function (e, b, t, r) {
      return n.isMapLike(t) && i.add(e, t, b), n.isMapLike(r) && i.remove(e, r), t
    },
    events: function (n, i) {
      return n.constructor._bubbleRule(i, n)
    },
    toParent: function (i, e, b, t) {
      n.listenTo.call(e, i, t, function () {
        var r = n.makeArray(arguments),
          u = r.shift();
        r[0] = (n.List && e instanceof n.List ? e.indexOf(i) : b) + (r[0] ? "." + r[0] : ""), u.triggeredNS = u.triggeredNS || {}, u.triggeredNS[e._cid] || (u.triggeredNS[e._cid] = !0, n.trigger(e, u, r), "change" === t && n.trigger(e, r[0], [r[2], r[3]]))
      })
    },
    childrenOf: function (n, e) {
      n._each(function (b, t) {
        b && b.bind && i.toParent(b, n, t, e)
      })
    },
    teardownFromParent: function (i, e, b) {
      e && e.unbind && n.stopListening.call(i, e, b)
    },
    teardownChildrenFrom: function (n, e) {
      n._each(function (b) {
        i.teardownFromParent(n, b, e)
      })
    },
    isBubbling: function (n, i) {
      return n._bubbleBindings && n._bubbleBindings[i]
    }
  };
  return i
});
define("can/util/object/isplain/isplain", ["can/util/can"], function (t) {
  var n = Object.prototype.hasOwnProperty,
    r = function (t) {
      return null !== t && t == t.window
    },
    o = function (t) {
      if (!t || "object" != typeof t || t.nodeType || r(t)) return !1;
      try {
        if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1
      } catch (o) {
        return !1
      }
      var c;
      for (c in t);
      return void 0 === c || n.call(t, c)
    };
  return t.isPlainObject = o, t
});
define("can/map/map_helpers", ["can/util/util", "can/util/object/isplain/isplain"], function (n) {
  var e = {
      attrParts: function (n, e) {
        return e ? [n] : "object" == typeof n ? n : ("" + n).split(".")
      },
      canMakeObserve: function (e) {
        return e && !n.isDeferred(e) && (n.isArray(e) || n.isPlainObject(e))
      },
      serialize: function () {
        var t = null;
        return function (i, r, a) {
          var u = n.cid(i),
            c = !1;
          return t || (c = !0, t = {
            attr: {},
            serialize: {}
          }), t[r][u] = a, i.each(function (u, c) {
            var d, o = n.isMapLike(u),
              l = o && t[r][n.cid(u)];
            d = l ? l : i["___" + r] ? i["___" + r](c, u) : e.getValue(i, c, u, r), void 0 !== d && (a[c] = d)
          }), c && (t = null), a
        }
      }(),
      getValue: function (e, t, i, r) {
        return n.isMapLike(i) ? i[r]() : i
      },
      define: null,
      addComputedAttr: function (n, e, t) {
        n._computedAttrs[e] = {
          compute: t,
          count: 0,
          handler: function (t, i, r) {
            n._triggerChange(e, "set", i, r, t.batchNum)
          }
        }
      },
      addToMap: function (e, r) {
        var a;
        t || (a = i, t = {});
        var u = e._cid,
          c = n.cid(e);
        return t[c] || (t[c] = {
          obj: e,
          instance: r,
          added: !u
        }), a
      },
      getMapFromObject: function (n) {
        return t && t[n._cid] && t[n._cid].instance
      }
    },
    t = null,
    i = function () {
      for (var n in t) t[n].added && delete t[n].obj._cid;
      t = null
    };
  return e
});
define("can/map/map", ["can/util/util", "can/util/bind/bind", "can/map/bubble", "can/map/map_helpers", "can/construct/construct", "can/util/batch/batch"], function (t, e, i, n) {
  var r = t.Map = t.Construct.extend({
    setup: function () {
      if (t.Construct.setup.apply(this, arguments), this._computedPropertyNames = [], t.Map) {
        this.defaults || (this.defaults = {});
        for (var e in this.prototype) "define" !== e && "constructor" !== e && ("function" != typeof this.prototype[e] || this.prototype[e].prototype instanceof t.Construct) ? this.defaults[e] = this.prototype[e] : this.prototype[e].isComputed && this._computedPropertyNames.push(e);
        n.define && n.define(this)
      }!t.List || this.prototype instanceof t.List || (this.List = r.List.extend({
        Map: this
      }, {}))
    },
    shortName: "Map",
    _bubbleRule: function (t) {
      return "change" === t || t.indexOf(".") >= 0 ? ["change"] : []
    },
    bind: t.bindAndSetup,
    unbind: t.unbindAndTeardown,
    id: "id",
    keys: function (e) {
      var i = [];
      t.__observe(e, "__keys");
      for (var n in e._data) i.push(n);
      return i
    }
  }, {
    setup: function (e) {
      e instanceof t.Map && (e = e.serialize()), this._data = {}, t.cid(this, ".map"), this._setupComputedProperties();
      var i = e && n.addToMap(e, this),
        r = this._setupDefaults(e),
        s = t.extend(t.extend(!0, {}, r), e);
      this.attr(s), i && i()
    },
    _setupComputedProperties: function () {
      this._computedAttrs = {};
      for (var t = this.constructor._computedPropertyNames, e = 0, i = t.length; i > e; e++) {
        var r = t[e];
        n.addComputedAttr(this, r, this[r].clone(this))
      }
    },
    _setupDefaults: function () {
      return this.constructor.defaults || {}
    },
    attr: function (t, e) {
      var i = typeof t;
      return void 0 === t ? this._getAttrs() : "string" !== i && "number" !== i ? this._setAttrs(t, e) : 1 === arguments.length ? this._get(t + "") : (this._set(t + "", e), this)
    },
    _get: function (e) {
      var i = e.indexOf(".");
      if (i >= 0) {
        var n = this.___get(e);
        if (void 0 !== n) return t.__observe(this, e), n;
        var r = e.substr(0, i),
          s = e.substr(i + 1),
          o = this.__get(r);
        return o && o._get ? o._get(s) : void 0
      }
      return this.__get(e)
    },
    __get: function (e) {
      return t.__observe(this, e), this.___get(e)
    },
    ___get: function (t) {
      if (t) {
        var e = this._computedAttrs[t];
        return e ? e.compute() : this._data[t]
      }
      return this._data
    },
    _set: function (e, i, n) {
      var r, s = e.indexOf(".");
      if (s >= 0 && !n) {
        var o = e.substr(0, s),
          a = e.substr(s + 1);
        if (r = this.__inSetup ? void 0 : this.___get(o), !t.isMapLike(r)) throw new Error("can.Map: Object does not exist");
        r._set(a, i)
      } else r = this.__inSetup ? void 0 : this.___get(e), this.__convert && (i = this.__convert(e, i)), this.__set(e, this.__type(i, e), r)
    },
    __type: function (e, i) {
      if ("object" == typeof e && !(e instanceof t.Map) && n.canMakeObserve(e)) {
        var r = n.getMapFromObject(e);
        if (r) return r;
        if (t.isArray(e)) {
          var s = t.List;
          return new s(e)
        }
        var o = this.constructor.Map || t.Map;
        return new o(e)
      }
      return e
    },
    __set: function (t, e, n) {
      if (e !== n) {
        var r = this._computedAttrs[t],
          s = r || void 0 !== n || this.___get().hasOwnProperty(t) ? "set" : "add";
        this.___set(t, "object" == typeof e ? i.set(this, t, e, n) : e), r && r.count || this._triggerChange(t, s, e, n), "object" == typeof n && i.teardownFromParent(this, n)
      }
    },
    ___set: function (t, e) {
      var i = this._computedAttrs[t];
      i ? i.compute(e) : this._data[t] = e, "function" == typeof this.constructor.prototype[t] || i || (this[t] = e)
    },
    removeAttr: function (t) {
      return this._remove(t)
    },
    _remove: function (t) {
      var e = n.attrParts(t),
        i = e.shift(),
        r = this.___get(i);
      return e.length && r ? r.removeAttr(e) : ("string" == typeof t && ~t.indexOf(".") && (i = t), this.__remove(i, r), r)
    },
    __remove: function (t, e) {
      t in this._data && (this.___remove(t), this._triggerChange(t, "remove", void 0, e))
    },
    ___remove: function (t) {
      delete this._data[t], t in this.constructor.prototype || delete this[t]
    },
    ___serialize: function (t, e) {
      return n.getValue(this, t, e, "serialize")
    },
    _getAttrs: function () {
      return n.serialize(this, "attr", {})
    },
    _setAttrs: function (e, i) {
      e = t.simpleExtend({}, e);
      var r, s, o = this;
      t.batch.start(), this.each(function (r, a) {
        if ("_cid" !== a) {
          if (s = e[a], void 0 === s) return void(i && o.removeAttr(a));
          o.__convert && (s = o.__convert(a, s)), t.isMapLike(r) && n.canMakeObserve(s) ? r.attr(s, i) : r !== s && o.__set(a, o.__type(s, a), r), delete e[a]
        }
      });
      for (r in e) "_cid" !== r && (s = e[r], this._set(r, s, !0));
      return t.batch.stop(), this
    },
    serialize: function () {
      return n.serialize(this, "serialize", {})
    },
    _triggerChange: function (e, n, r, s, o) {
      i.isBubbling(this, "change") && t.batch.trigger(this, {
        type: "change",
        target: this,
        batchNum: o
      }, [e, n, r, s]), t.batch.trigger(this, {
        type: e,
        target: this,
        batchNum: o
      }, [r, s]), ("remove" === n || "add" === n) && t.batch.trigger(this, {
        type: "__keys",
        target: this,
        batchNum: o
      })
    },
    _bindsetup: function () {},
    _bindteardown: function () {},
    one: t.one,
    bind: function (e, n) {
      var r = this._computedAttrs && this._computedAttrs[e];
      return r && (r.count ? r.count++ : (r.count = 1, r.compute.bind("change", r.handler))), i.bind(this, e), t.bindAndSetup.apply(this, arguments)
    },
    unbind: function (e, n) {
      var r = this._computedAttrs && this._computedAttrs[e];
      return r && (1 === r.count ? (r.count = 0, r.compute.unbind("change", r.handler)) : r.count--), i.unbind(this, e), t.unbindAndTeardown.apply(this, arguments)
    },
    compute: function (e) {
      if (t.isFunction(this.constructor.prototype[e])) return t.compute(this[e], this);
      var i = t.compute.read.reads(e),
        n = i.length - 1;
      return t.compute(function (e) {
        return arguments.length ? void t.compute.read(this, i.slice(0, n)).value.attr(i[n].key, e) : t.compute.read(this, i, {
          args: []
        }).value
      }, this)
    },
    each: function () {
      return t.each.apply(void 0, [this].concat(t.makeArray(arguments)))
    },
    _each: function (t) {
      var e = this.___get();
      for (var i in e) e.hasOwnProperty(i) && t(e[i], i)
    },
    dispatch: t.dispatch
  });
  return r.prototype.on = r.prototype.bind, r.prototype.off = r.prototype.unbind, r.on = r.bind, r.off = r.unbind, r
});
define("can/list/list", ["can/util/util", "can/map/map", "can/map/bubble", "can/map/map_helpers"], function (t, e, i, r) {
  var n = [].splice,
    s = function () {
      var t = {
        0: "a",
        length: 1
      };
      return n.call(t, 0, 1), !t[0]
    }(),
    h = e.extend({
      Map: e
    }, {
      setup: function (e, i) {
        this.length = 0, t.cid(this, ".map"), this._setupComputedProperties(), e = e || [];
        var n;
        t.isDeferred(e) ? this.replace(e) : (n = e.length && r.addToMap(e, this), this.push.apply(this, t.makeArray(e || []))), n && n(), t.simpleExtend(this, i)
      },
      _triggerChange: function (i, r, n, s) {
        e.prototype._triggerChange.apply(this, arguments);
        var h = +i;
        ~("" + i).indexOf(".") || isNaN(h) || ("add" === r ? (t.batch.trigger(this, r, [n, h]), t.batch.trigger(this, "length", [this.length])) : "remove" === r ? (t.batch.trigger(this, r, [s, h]), t.batch.trigger(this, "length", [this.length])) : t.batch.trigger(this, r, [n, h]))
      },
      ___get: function (e) {
        return e ? this[e] && this[e].isComputed && t.isFunction(this.constructor.prototype[e]) ? this[e]() : this[e] : this
      },
      __set: function (e, i, r) {
        if (e = isNaN(+e) || e % 1 ? e : +e, "number" == typeof e && e > this.length - 1) {
          var n = new Array(e + 1 - this.length);
          return n[n.length - 1] = i, this.push.apply(this, n), n
        }
        return t.Map.prototype.__set.call(this, "" + e, i, r)
      },
      ___set: function (t, e) {
        this[t] = e, +t >= this.length && (this.length = +t + 1)
      },
      __remove: function (t, e) {
        isNaN(+t) ? (delete this[t], this._triggerChange(t, "remove", void 0, e)) : this.splice(t, 1)
      },
      _each: function (t) {
        for (var e = this.___get(), i = 0; i < e.length; i++) t(e[i], i)
      },
      serialize: function () {
        return r.serialize(this, "serialize", [])
      },
      splice: function (e, r) {
        var h, a, o, l = t.makeArray(arguments),
          c = [],
          u = l.length > 2;
        for (e = e || 0, h = 0, a = l.length - 2; a > h; h++) o = h + 2, l[o] = this.__type(l[o], o), c.push(l[o]), this[h + e] !== l[o] && (u = !1);
        if (u && this.length <= c.length) return c;
        void 0 === r && (r = l[1] = this.length - e);
        var p = n.apply(this, l);
        if (!s)
          for (h = this.length; h < p.length + this.length; h++) delete this[h];
        return t.batch.start(), r > 0 && (i.removeMany(this, p), this._triggerChange("" + e, "remove", void 0, p)), l.length > 2 && (i.addMany(this, c), this._triggerChange("" + e, "add", c, p)), t.batch.stop(), p
      },
      _getAttrs: function () {
        return r.serialize(this, "attr", [])
      },
      _setAttrs: function (e, i) {
        e = t.makeArray(e), t.batch.start(), this._updateAttrs(e, i), t.batch.stop()
      },
      _updateAttrs: function (e, i) {
        for (var n = Math.min(e.length, this.length), s = 0; n > s; s++) {
          var h = this[s],
            a = e[s];
          t.isMapLike(h) && r.canMakeObserve(a) ? h.attr(a, i) : h !== a && this._set(s + "", a)
        }
        e.length > this.length ? this.push.apply(this, e.slice(this.length)) : e.length < this.length && i && this.splice(e.length)
      }
    }),
    a = function (e) {
      return e[0] && t.isArray(e[0]) ? e[0] : t.makeArray(e)
    };
  return t.each({
    push: "length",
    unshift: 0
  }, function (t, e) {
    var r = [][e];
    h.prototype[e] = function () {
      for (var e, n, s = [], h = t ? this.length : 0, a = arguments.length; a--;) n = arguments[a], s[a] = i.set(this, a, this.__type(n, a));
      return e = r.apply(this, s), (!this.comparator || s.length) && this._triggerChange("" + h, "add", s, void 0), e
    }
  }), t.each({
    pop: "length",
    shift: 0
  }, function (t, e) {
    h.prototype[e] = function () {
      if (!this.length) return void 0;
      var r = a(arguments),
        n = t && this.length ? this.length - 1 : 0,
        s = [][e].apply(this, r);
      return this._triggerChange("" + n, "remove", void 0, [s]), s && s.unbind && i.remove(this, s), s
    }
  }), t.extend(h.prototype, {
    indexOf: function (e, i) {
      return t.__observe(this, "length"), t.inArray(e, this, i)
    },
    join: function () {
      return t.__observe(this, "length"), [].join.apply(this, arguments)
    },
    reverse: function () {
      var e = [].reverse.call(t.makeArray(this));
      return this.replace(e)
    },
    slice: function () {
      t.__observe(this, "length");
      var e = Array.prototype.slice.apply(this, arguments);
      return new this.constructor(e)
    },
    concat: function () {
      var e = [];
      return t.each(t.makeArray(arguments), function (i, r) {
        e[r] = i instanceof t.List ? i.serialize() : i
      }), new this.constructor(Array.prototype.concat.apply(this.serialize(), e))
    },
    forEach: function (e, i) {
      return t.each(this, e, i || this)
    },
    replace: function (e) {
      if (t.isDeferred(e)) {
        this._promise && (this._promise.__isCurrentPromise = !1);
        var i = this._promise = e;
        i.__isCurrentPromise = !0;
        var r = this;
        e.then(function (t) {
          i.__isCurrentPromise && r.replace(t)
        })
      } else this.splice.apply(this, [0, this.length].concat(t.makeArray(e || [])));
      return this
    },
    filter: function (t, e) {
      var i, r = new this.constructor,
        n = this;
      return this.each(function (s, h, a) {
        i = t.call(e | n, s, h, n), i && r.push(s)
      }), r
    },
    map: function (e, i) {
      var r = new t.List,
        n = this;
      return this.each(function (t, s, h) {
        var a = e.call(i | n, t, s, n);
        r.push(a)
      }), r
    }
  }), t.List = e.List = h, t.List
});
define("can/view/scope/scope", ["can/util/util", "can/view/scope/compute_data", "can/construct/construct", "can/map/map", "can/list/list", "can/view/view", "can/compute/compute"], function (t, e) {
  function n(t, e, n) {
    this._context = t, this._parent = e, this._meta = n || {}, this.__cache = {}
  }

  function r(t, e, r) {
    t.helpers || t.partials || t.tags || (t = {
      helpers: t
    }), n.call(this, t, e, r)
  }
  return t.simpleExtend(n, {
    read: t.compute.read,
    Refs: t.Map.extend({
      shortName: "ReferenceMap"
    }, {}),
    refsScope: function () {
      return new t.view.Scope(new this.Refs)
    }
  }), t.simpleExtend(n.prototype, {
    add: function (t, e) {
      return t !== this._context ? new this.constructor(t, this, e) : this
    },
    read: function (e, n) {
      if ("%root" === e) return {
        value: this.getRoot()
      };
      var r = "./" === e.substr(0, 2),
        s = "../" === e.substr(0, 3),
        o = "." === e || "this" === e,
        i = ".." === e,
        a = r || s || o || i;
      if (a && this._meta.notContext) return this._parent.read(e, n);
      var u;
      if (r) u = !0, e = e.substr(2);
      else {
        if (s) {
          for (var c = this._parent; c._meta.notContext;) c = c._parent;
          return c.read(e.substr(3), n)
        }
        if (o) return {
          value: this._context
        };
        if (i) return {
          value: this._parent._context
        }
      }
      var f = t.compute.read.reads(e);
      return "*" === f[0].key.charAt(0) ? this.getRefs()._read(f, n, !0) : this._read(f, n, u)
    },
    _read: function (e, n, r) {
      for (var s, o, i, a, u, c = this, f = [], p = -1, h = t.simpleExtend({
          foundObservable: function (t, n) {
            o = t, i = e.slice(n)
          },
          earlyExit: function (t, e) {
            e > p && (u = o, a = i, p = e)
          }
        }, n); c;) {
        if (s = c._context, null !== s && ("object" == typeof s || "function" == typeof s)) {
          var _ = t.__trapObserves(),
            l = t.compute.read(s, e, h),
            v = _();
          if (void 0 !== l.value) return t.__observes(v), {
            scope: c,
            rootObserve: o,
            value: l.value,
            reads: i
          };
          f.push.apply(f, v)
        }
        c = r ? null : c._parent
      }
      return t.__observes(f), {
        setRoot: u,
        reads: a,
        value: void 0
      }
    },
    get: t.__notObserve(function (e, n) {
      n = t.simpleExtend({
        isArgument: !0
      }, n);
      var r = this.read(e, n);
      return r.value
    }),
    getScope: function (t) {
      for (var e = this; e;) {
        if (t(e)) return e;
        e = e._parent
      }
    },
    getContext: function (t) {
      var e = this.getScope(t);
      return e && e._context
    },
    getRefs: function () {
      return this.getScope(function (t) {
        return t._context instanceof n.Refs
      })
    },
    getRoot: function () {
      for (var t = this, e = this; t._parent;) e = t, t = t._parent;
      return t._context instanceof n.Refs && (t = e), t._context
    },
    set: function (e, n, r) {
      var s, o, i = e.lastIndexOf("."),
        a = e.lastIndexOf("/");
      if (a > i ? (s = e.substring(0, a), o = e.substring(a + 1, e.length)) : -1 !== i ? (s = e.substring(0, i), o = e.substring(i + 1, e.length)) : (s = ".", o = e), "*" === e.charAt(0)) t.compute.set(this.getRefs()._context, e, n, r);
      else {
        var u = this.read(s, r).value;
        t.compute.set(u, o, n, r)
      }
    },
    attr: t.__notObserve(function (e, n, r) {
      return r = t.simpleExtend({
        isArgument: !0
      }, r), 2 === arguments.length ? this.set(e, n, r) : this.get(e, r)
    }),
    computeData: function (t, n) {
      return e(this, t, n)
    },
    compute: function (t, e) {
      return this.computeData(t, e).compute
    },
    cloneFromRef: function () {
      for (var e, r, s = [], o = this; o;) {
        if (e = o._context, e instanceof n.Refs) {
          r = o._parent;
          break
        }
        s.unshift(e), o = o._parent
      }
      return r ? (t.each(s, function (t) {
        r = r.add(t)
      }), r) : this
    }
  }), t.view.Scope = n, r.prototype = new n, r.prototype.constructor = r, t.view.Options = r, n
});
define("can/view/stache/utils", ["can/util/util", "can/view/scope/scope"], function (can) {
  var Options = can.view.Options;
  return {
    isArrayLike: function (n) {
      return n && n.splice && "number" == typeof n.length
    },
    isObserveLike: function (n) {
      return n instanceof can.Map || n && !!n._get
    },
    emptyHandler: function () {},
    jsonParse: function (str) {
      return "'" === str[0] ? str.substr(1, str.length - 2) : "undefined" === str ? void 0 : can.global.JSON ? JSON.parse(str) : eval("(" + str + ")")
    },
    mixins: {
      last: function () {
        return this.stack[this.stack.length - 1]
      },
      add: function (n) {
        this.last().add(n)
      },
      subSectionDepth: function () {
        return this.stack.length - 1
      }
    },
    convertToScopes: function (n, e, t, r, i, s) {
      i && (n.fn = this.makeRendererConvertScopes(i, e, t, r)), s && (n.inverse = this.makeRendererConvertScopes(s, e, t, r))
    },
    makeRendererConvertScopes: function (n, e, t, r) {
      var i = function (t, r, i) {
        return n(t || e, r, i)
      };
      return can.__notObserve(function (n, s, o) {
        void 0 === n || n instanceof can.view.Scope || (n = e.add(n)), void 0 === s || s instanceof Options || (s = t.add(s));
        var c = i(n, s || t, o || r);
        return c
      })
    },
    Options: Options
  }
});
define("can/view/node_lists/node_lists", ["can/util/util", "can/view/elements"], function (e) {
  var n = !0;
  try {
    document.createTextNode("")._ = 0
  } catch (r) {
    n = !1
  }
  var t = {},
    i = {},
    a = "ejs_" + Math.random(),
    s = 0,
    u = function (e, r) {
      var t = r || i,
        u = l(e, t);
      return u ? u : n || 3 !== e.nodeType ? (++s, e[a] = (e.nodeName ? "element_" : "obj_") + s) : (++s, t["text_" + s] = e, "text_" + s)
    },
    l = function (e, r) {
      if (n || 3 !== e.nodeType) return e[a];
      for (var t in r)
        if (r[t] === e) return t
    },
    p = [].splice,
    c = [].push,
    d = function (e) {
      for (var n = 0, r = 0, t = e.length; t > r; r++) {
        var i = e[r];
        i.nodeType ? n++ : n += d(i)
      }
      return n
    },
    o = function (e, n) {
      for (var r = {}, t = 0, i = e.length; i > t; t++) {
        var a = h.first(e[t]);
        r[u(a, n)] = e[t]
      }
      return r
    },
    f = function (e, n, r) {
      for (var t in n) r[t] || e.newDeepChildren.push(n[t])
    },
    h = {
      id: u,
      update: function (n, r) {
        var t = h.unregisterChildren(n);
        r = e.makeArray(r);
        var i = n.length;
        return p.apply(n, [0, i].concat(r)), n.replacements ? (h.nestReplacements(n), n.deepChildren = n.newDeepChildren, n.newDeepChildren = []) : h.nestList(n), t
      },
      nestReplacements: function (e) {
        for (var n = 0, r = {}, t = o(e.replacements, r), i = e.replacements.length, a = {}; n < e.length && i;) {
          var s = e[n],
            u = l(s, r),
            p = t[u];
          p && (e.splice(n, d(p), p), a[u] = !0, i--), n++
        }
        i && f(e, t, a), e.replacements = []
      },
      nestList: function (e) {
        for (var n = 0; n < e.length;) {
          var r = e[n],
            i = t[u(r)];
          i ? i !== e && e.splice(n, d(i), i) : t[u(r)] = e, n++
        }
      },
      last: function (e) {
        var n = e[e.length - 1];
        return n.nodeType ? n : h.last(n)
      },
      first: function (e) {
        var n = e[0];
        return n.nodeType ? n : h.first(n)
      },
      flatten: function (e) {
        for (var n = [], r = 0; r < e.length; r++) {
          var t = e[r];
          t.nodeType ? n.push(t) : n.push.apply(n, h.flatten(t))
        }
        return n
      },
      register: function (n, r, t, i) {
        return e.cid(n), n.unregistered = r, n.parentList = t, t ? (n.deepChildren = [], n.newDeepChildren = [], n.replacements = [], t !== !0 && (i ? t.replacements.push(n) : t.newDeepChildren.push(n))) : h.nestList(n), n
      },
      unregisterChildren: function (n) {
        var r = [];
        return e.each(n, function (e) {
          e.nodeType ? (n.replacements || delete t[u(e)], r.push(e)) : c.apply(r, h.unregister(e, !0))
        }), e.each(n.deepChildren, function (e) {
          h.unregister(e, !0)
        }), r
      },
      unregister: function (e, n) {
        var r = h.unregisterChildren(e, !0);
        if (e.unregistered) {
          var t = e.unregistered;
          if (e.replacements = e.unregistered = null, !n) {
            var i = e.parentList && e.parentList.deepChildren;
            if (i) {
              var a = i.indexOf(e); - 1 !== a && i.splice(a, 1)
            }
          }
          t()
        }
        return r
      },
      nodeMap: t
    };
  return e.view.nodeLists = h, h
});
define("can/view/parser/parser", [], function () {
  function t(t, e) {
    for (var a = 0; a < t.length; a++) e(t[a], a)
  }

  function e(e) {
    var a = {},
      r = e.split(",");
    return t(r, function (t) {
      a[t] = !0
    }), a
  }

  function a(t, e) {
    for (var a = 0, r = t.length; r > a; a++) {
      var n = t[a];
      e[n.tokenType].apply(e, n.args)
    }
    return t
  }
  var r = "-:A-Za-z0-9_",
    n = "[^=>\\s\\/]+",
    o = "\\s*=\\s*",
    i = "\\{[^\\}\\{]\\}",
    l = "\\{\\{[^\\}]\\}\\}\\}?",
    s = "(?:" + o + "(?:(?:" + l + ")|(?:" + i + ")|(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",
    u = "\\{\\{[^\\}]*\\}\\}\\}?",
    c = "\\{\\{([^\\}]*)\\}\\}\\}?",
    f = new RegExp("^<([" + r + "]+)((?:\\s*(?:(?:(?:" + n + ")?" + s + ")|(?:" + u + ")+))*)\\s*(\\/?)>"),
    g = new RegExp("^<\\/([" + r + "]+)[^>]*>"),
    p = new RegExp(c, "g"),
    d = /<|\{\{/,
    m = /\s/,
    h = e("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
    b = e("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),
    v = e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
    S = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
    k = e("script"),
    F = "start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),
    V = function () {},
    E = function (e, r, n) {
      function o(t, e, a, n) {
        if (e = e.toLowerCase(), b[e])
          for (; N.last() && v[N.last()];) i("", N.last());
        S[e] && N.last() === e && i("", e), n = h[e] || !!n, r.start(e, n), n || N.push(e), E.parseAttrs(a, r), r.end(e, n)
      }

      function i(t, e) {
        var a;
        if (e)
          for (a = N.length - 1; a >= 0 && N[a] !== e; a--);
        else a = 0;
        if (a >= 0) {
          for (var n = N.length - 1; n >= a; n--) r.close && r.close(N[n]);
          N.length = a
        }
      }

      function l(t, e) {
        r.special && r.special(e)
      }
      if ("object" == typeof e) return a(e, r);
      var s = [];
      r = r || {}, n && t(F, function (t) {
        var e = r[t] || V;
        r[t] = function () {
          e.apply(this, arguments) !== !1 && s.push({
            tokenType: t,
            args: [].slice.call(arguments, 0)
          })
        }
      });
      var u, c, m, y = function () {
          q && r.chars && r.chars(q), q = ""
        },
        N = [],
        x = e,
        q = "";
      for (N.last = function () {
          return this[this.length - 1]
        }; e;) {
        if (c = !0, N.last() && k[N.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</" + N.last() + "[^>]*>"), function (t, e) {
          return e = e.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), r.chars && r.chars(e), ""
        }), i("", N.last());
        else if (0 === e.indexOf("<!--") ? (u = e.indexOf("-->"), u >= 0 && (y(), r.comment && r.comment(e.substring(4, u)), e = e.substring(u + 3), c = !1)) : 0 === e.indexOf("</") ? (m = e.match(g), m && (y(), e = e.substring(m[0].length), m[0].replace(g, i), c = !1)) : 0 === e.indexOf("<") ? (m = e.match(f), m && (y(), e = e.substring(m[0].length), m[0].replace(f, o), c = !1)) : 0 === e.indexOf("{{") && (m = e.match(p), m && (y(), e = e.substring(m[0].length), m[0].replace(p, l))), c) {
          u = e.search(d), 0 === u && e === x && (q += e.charAt(0), e = e.substr(1), u = e.search(d));
          var A = 0 > u ? e : e.substring(0, u);
          e = 0 > u ? "" : e.substring(u), A && (q += A)
        }
        if (e === x) throw new Error("Parse Error: " + e);
        x = e
      }
      return y(), i(), r.done(), s
    },
    y = function (t, e, a, r) {
      t.attrStart = r.substring("number" == typeof t.nameStart ? t.nameStart : e, e), a.attrStart(t.attrStart), t.inName = !1
    },
    N = function (t, e, a, r) {
      void 0 !== t.valueStart && t.valueStart < e ? a.attrValue(r.substring(t.valueStart, e)) : !t.inValue, a.attrEnd(t.attrStart), t.attrStart = void 0, t.valueStart = void 0, t.inValue = !1, t.inName = !1, t.lookingForEq = !1, t.inQuote = !1, t.lookingForName = !0
    };
  return E.parseAttrs = function (t, e) {
    if (t) {
      for (var a, r = 0, n = {
          inDoubleCurly: !1,
          inName: !1,
          nameStart: void 0,
          inValue: !1,
          valueStart: void 0,
          inQuote: !1,
          attrStart: void 0,
          lookingForName: !0,
          lookingForValue: !1,
          lookingForEq: !1
        }; r < t.length;) {
        a = r;
        var o = t.charAt(r),
          i = t.charAt(r + 1),
          l = t.charAt(r + 2);
        if (r++, "{" === o && "{" === i) n.inValue && a > n.valueStart ? e.attrValue(t.substring(n.valueStart, a)) : n.inName && n.nameStart < a ? (y(n, a, e, t), N(n, a, e, t)) : n.lookingForValue ? n.inValue = !0 : n.lookingForEq && n.attrStart && N(n, a, e, t), n.inDoubleCurly = !0, n.doubleCurlyStart = a + 2, r++;
        else if (n.inDoubleCurly) {
          if ("}" === o && "}" === i) {
            var s = "}" === l ? 1 : 0;
            e.special(t.substring(n.doubleCurlyStart, a)), n.inDoubleCurly = !1, n.inValue && (n.valueStart = a + 2 + s), r += 1 + s
          }
        } else n.inValue ? n.inQuote ? o === n.inQuote && N(n, a, e, t) : m.test(o) && N(n, a, e, t) : "=" === o && (n.lookingForEq || n.lookingForName || n.inName) ? (n.attrStart || y(n, a, e, t), n.lookingForValue = !0, n.lookingForEq = !1, n.lookingForName = !1) : n.inName ? m.test(o) && (y(n, a, e, t), n.lookingForEq = !0) : n.lookingForName ? m.test(o) || (n.attrStart && N(n, a, e, t), n.nameStart = a, n.inName = !0) : n.lookingForValue && (m.test(o) || (n.lookingForValue = !1, n.inValue = !0, "'" === o || '"' === o ? (n.inQuote = o, n.valueStart = a + 1) : n.valueStart = a))
      }
      n.inName ? (y(n, a + 1, e, t), N(n, a + 1, e, t)) : n.lookingForEq ? N(n, a + 1, e, t) : n.inValue && N(n, a + 1, e, t)
    }
  }, E
});
define("can/util/array/diff", [], function () {
  var e = [].slice;
  return function (n, t) {
    for (var i = 0, r = 0, l = n.length, u = t.length, s = []; l > i && u > r;) {
      var d = n[i],
        f = t[r];
      if (d !== f)
        if (u > r + 1 && t[r + 1] === d) s.push({
          index: r,
          deleteCount: 0,
          insert: [t[r]]
        }), i++, r += 2;
        else {
          if (!(l > i + 1 && n[i + 1] === f)) return s.push({
            index: r,
            deleteCount: l - i,
            insert: e.call(t, r)
          }), s;
          s.push({
            index: r,
            deleteCount: 1,
            insert: []
          }), i += 2, r++
        }
      else i++, r++
    }
    return r === u && i === l ? s : (s.push({
      index: r,
      deleteCount: l - i,
      insert: e.call(t, r)
    }), s)
  }
});
define("can/view/live/live", ["can/util/util", "can/view/elements", "can/view/view", "can/view/node_lists/node_lists", "can/view/parser/parser", "can/util/array/diff"], function (e, t, n, r, i, a) {
  t = t || e.view.elements, r = r || e.view.NodeLists, i = i || e.view.parser;
  var o = function (t, n, r) {
      var i = !1,
        a = function () {
          return i || (i = !0, r(o), e.unbind.call(t, "removed", a)), !0
        },
        o = {
          teardownCheck: function (e) {
            return e ? !1 : a()
          }
        };
      return e.bind.call(t, "removed", a), n(o), o
    },
    u = function (e) {
      var t = e.childNodes;
      if ("length" in t) return t;
      for (var n = e.firstChild, r = []; n;) r.push(n), n = n.nextSibling;
      return r
    },
    c = function (e, t, n) {
      return o(e, function () {
        t.computeInstance.bind("change", n)
      }, function (e) {
        t.computeInstance.unbind("change", n), e.nodeList && r.unregister(e.nodeList)
      })
    },
    s = function (e) {
      var t, n = {};
      return i.parseAttrs(e, {
        attrStart: function (e) {
          n[e] = "", t = e
        },
        attrValue: function (e) {
          n[t] += e
        },
        attrEnd: function () {}
      }), n
    },
    d = [].splice,
    l = function (e) {
      return e && e.nodeType
    },
    f = function (e) {
      e.firstChild || e.appendChild(e.ownerDocument.createTextNode(""))
    },
    p = function (t) {
      var n = "string" == typeof t,
        r = e.frag(t);
      return n ? e.view.hookup(r) : r
    },
    v = function (t, n, i, a, o) {
      var c = [];
      n && (r.register(c, null, n, !0), c.parentList = n, c.expression = "#each SUBEXPRESSION");
      var s = i.apply(a, o.concat([c])),
        d = p(s),
        l = e.makeArray(u(d));
      return n ? (r.update(c, l), t.push(c)) : t.push(r.register(l)), d
    },
    h = function (t, n, i) {
      var a = t.splice(n + 1, i),
        o = [];
      return e.each(a, function (e) {
        var t = r.unregister(e);
        [].push.apply(o, t)
      }), o
    },
    g = function (e, n, r, i) {
      if (n && 0 === e.length) {
        var a = [],
          o = v(a, i, n, e, [e]);
        t.after([r[0]], o), r.push(a[0])
      }
    },
    b = {
      list: function (n, i, u, c, s, l, f) {
        var p, m = l || [n],
          w = [],
          k = !1,
          C = !1,
          N = function (n, i, a) {
            if (k) {
              var o = _.ownerDocument.createDocumentFragment(),
                s = [],
                f = [];
              e.each(i, function (t, n) {
                var r = e.compute(n + a),
                  i = v(s, l, u, c, [t, r]);
                o.appendChild(i), f.push(r)
              });
              var p = a + 1;
              if (!w.length) {
                var g = h(m, 0, m.length - 1);
                e.remove(e.$(g))
              }
              if (m[p]) {
                var b = r.first(m[p]);
                e.insertBefore(b.parentNode, o, b)
              } else t.after(1 === p ? [_] : [r.last(m[p - 1])], o);
              d.apply(m, [p, 0].concat(s)), d.apply(w, [a, 0].concat(f));
              for (var C = a + f.length, N = w.length; N > C; C++) w[C](C)
            }
          },
          y = function (e, t, n) {
            A({}, {
              length: 1
            }, n, !0), N({}, [t], n)
          },
          A = function (t, n, i, a, o) {
            if (k && (a || !L.teardownCheck(_.parentNode))) {
              0 > i && (i = w.length + i);
              var u = h(m, i, n.length);
              w.splice(i, n.length);
              for (var c = i, s = w.length; s > c; c++) w[c](c);
              o ? r.unregister(m) : (g(p, f, m, l), e.remove(e.$(u)))
            }
          },
          x = function (t, n, i, a) {
            if (k) {
              i += 1, a += 1;
              var o, u = m[i],
                c = e.frag(r.flatten(m[a]));
              o = i > a ? r.last(u).nextSibling : r.first(u);
              var s = m[0].parentNode;
              s.insertBefore(c, o);
              var d = m[a];
              [].splice.apply(m, [a, 1]), [].splice.apply(m, [i, 0, d]), i -= 1, a -= 1;
              var l = w[a];
              [].splice.apply(w, [a, 1]), [].splice.apply(w, [i, 0, l]);
              var f = Math.min(a, i),
                p = w.length;
              for (p; p > f; f++) w[f](f)
            }
          },
          _ = n.ownerDocument.createTextNode(""),
          S = function (e) {
            p && p.unbind && p.unbind("add", N).unbind("set", y).unbind("remove", A).unbind("move", x), A({}, {
              length: m.length - 1
            }, 0, !0, e)
          },
          P = function (e, t, n) {
            if (!C) {
              if (k = !0, t && n) {
                p = t || [];
                var r = a(n, t);
                n.unbind && n.unbind("add", N).unbind("set", y).unbind("remove", A).unbind("move", x);
                for (var i = 0, o = r.length; o > i; i++) {
                  var u = r[i];
                  u.deleteCount && A({}, {
                    length: u.deleteCount
                  }, u.index, !0), u.insert.length && N({}, u.insert, u.index)
                }
              } else n && S(), p = t || [], N({}, p, 0), g(p, f, m, l);
              k = !1, p.bind && p.bind("add", N).bind("set", y).bind("remove", A).bind("move", x), k = !0
            }
          };
        s = t.getParentNode(n, s);
        var L = o(s, function () {
          e.isFunction(i) && i.bind("change", P)
        }, function () {
          e.isFunction(i) && i.unbind("change", P), S(!0)
        });
        l ? (t.replace(m, _), r.update(m, [_]), l.unregistered = function () {
          L.teardownCheck(), C = !0
        }) : b.replace(m, _, L.teardownCheck), P({}, e.isFunction(i) ? i() : i)
      },
      html: function (n, i, a, o) {
        var s;
        a = t.getParentNode(n, a), s = c(a, i, function (e, t, n) {
          var i = r.first(d).parentNode;
          i && p(t), s.teardownCheck(r.first(d).parentNode)
        });
        var d = o || [n],
          p = function (n) {
            var i = "function" == typeof n,
              o = l(n),
              c = e.frag(i ? "" : n),
              s = e.makeArray(d);
            f(c), o || i || (c = e.view.hookup(c, a)), s = r.update(d, u(c)), i && n(c.firstChild), t.replace(s, c)
          };
        s.nodeList = d, o ? o.unregistered = s.teardownCheck : r.register(d, s.teardownCheck), p(i())
      },
      replace: function (n, i, a) {
        var o = n.slice(0),
          c = e.frag(i);
        return r.register(n, a), "string" == typeof i && (c = e.view.hookup(c, n[0].parentNode)), r.update(n, u(c)), t.replace(o, c), n
      },
      text: function (n, i, a, o) {
        var u = t.getParentNode(n, a),
          s = c(u, i, function (t, n, r) {
            "unknown" != typeof d.nodeValue && (d.nodeValue = e.view.toStr(n)), s.teardownCheck(d.parentNode)
          }),
          d = n.ownerDocument.createTextNode(e.view.toStr(i()));
        o ? (o.unregistered = s.teardownCheck, s.nodeList = o, r.update(o, [d]), t.replace([n], d)) : s.nodeList = b.replace([n], d, s.teardownCheck)
      },
      setAttributes: function (t, n) {
        var r = s(n);
        for (var i in r) e.attr.set(t, i, r[i])
      },
      attributes: function (n, r, i) {
        var a = {},
          o = function (r) {
            var i, o = s(r);
            for (i in o) {
              var u = o[i],
                c = a[i];
              u !== c && e.attr.set(n, i, u), delete a[i]
            }
            for (i in a) t.removeAttr(n, i);
            a = o
          };
        c(n, r, function (e, t) {
          o(t)
        }), arguments.length >= 3 ? a = s(i) : o(r())
      },
      attributePlaceholder: "__!!__",
      attributeReplace: /__!!__/g,
      attribute: function (n, r, i) {
        c(n, i, function (e, i) {
          t.setAttr(n, r, u.render())
        });
        var a, o = e.$(n);
        a = e.data(o, "hooks"), a || e.data(o, "hooks", a = {});
        var u, s = String(t.getAttr(n, r)),
          d = s.split(b.attributePlaceholder),
          l = [];
        l.push(d.shift(), d.join(b.attributePlaceholder)), a[r] ? a[r].computes.push(i) : a[r] = {
          render: function () {
            var e = 0,
              n = s ? s.replace(b.attributeReplace, function () {
                return t.contentText(u.computes[e++]())
              }) : t.contentText(u.computes[e++]());
            return n
          },
          computes: [i],
          batchNum: void 0
        }, u = a[r], l.splice(1, 0, i()), t.setAttr(n, r, l.join(""))
      },
      specialAttribute: function (e, n, r) {
        c(e, r, function (r, i) {
          t.setAttr(e, n, w(i))
        }), t.setAttr(e, n, w(r()))
      },
      simpleAttribute: function (e, n, r) {
        c(e, r, function (r, i) {
          t.setAttr(e, n, i)
        }), t.setAttr(e, n, r())
      }
    };
  b.attr = b.simpleAttribute, b.attrs = b.attributes, b.getAttributeParts = s;
  var m = /(\r|\n)+/g,
    w = function (e) {
      var n = /^["'].*["']$/;
      return e = e.replace(t.attrReg, "").replace(m, ""), n.test(e) ? e.substr(1, e.length - 2) : e
    };
  return e.view.live = b, b
});
define("can/view/stache/mustache_helpers", ["can/util/util", "can/view/stache/utils", "can/view/live/live"], function (e, n, t) {
  t = t || e.view.live;
  var r = function (t) {
      return n.isObserveLike(t) && n.isArrayLike(t) && t.attr("length") ? t : e.isFunction(t) ? t() : t
    },
    i = function (e) {
      var n = {};
      for (var t in e) {
        var r = e[t];
        r && r.isComputed ? n[t] = r() : n[t] = r
      }
      return n
    },
    o = function (e) {
      return e && "function" == typeof e.fn && "function" == typeof e.inverse
    },
    s = {
      each: function (i, o) {
        var s, u, a, c = r(i),
          f = [];
        if (c instanceof e.List) return function (n) {
          var r = [n];
          r.expression = "live.list", e.view.nodeLists.register(r, null, o.nodeList, !0), e.view.nodeLists.update(o.nodeList, [n]);
          var s = function (e, n, t) {
            return o.fn(o.scope.add({
              "%index": n,
              "@index": n
            }, {
              notContext: !0
            }).add(e), o.options, t)
          };
          t.list(n, i, s, o.context, n.parentNode, r, function (e, n) {
            return o.inverse(o.scope.add(e), o.options, n)
          })
        };
        var l = c;
        if (l && n.isArrayLike(l))
          for (a = 0; a < l.length; a++) f.push(o.fn(o.scope.add({
            "%index": a,
            "@index": a
          }, {
            notContext: !0
          }).add(l[a])));
        else if (n.isObserveLike(l))
          for (s = e.Map.keys(l), a = 0; a < s.length; a++) u = s[a], f.push(o.fn(o.scope.add({
            "%key": u,
            "@key": u
          }, {
            notContext: !0
          }).add(l[u])));
        else if (l instanceof Object)
          for (u in l) f.push(o.fn(o.scope.add({
            "%key": u,
            "@key": u
          }, {
            notContext: !0
          }).add(l[u])));
        return f
      },
      "@index": function (n, t) {
        t || (t = n, n = 0);
        var r = t.scope.attr("@index");
        return "" + ((e.isFunction(r) ? r() : r) + n)
      },
      "if": function (n, t) {
        var i;
        return i = e.isFunction(n) ? e.compute.truthy(n)() : !!r(n), i ? t.fn(t.scope || this) : t.inverse(t.scope || this)
      },
      is: function () {
        var n, t, i = arguments[arguments.length - 1];
        if (arguments.length - 2 <= 0) return i.inverse();
        var o = arguments,
          s = e.compute(function () {
            for (var i = 0; i < o.length - 1; i++) {
              if (t = r(o[i]), t = e.isFunction(t) ? t() : t, i > 0 && t !== n) return !1;
              n = t
            }
            return !0
          });
        return s() ? i.fn() : i.inverse()
      },
      eq: function () {
        return s.is.apply(this, arguments)
      },
      unless: function (n, t) {
        return s["if"].apply(this, [n, e.extend({}, t, {
          fn: t.inverse,
          inverse: t.fn
        })])
      },
      "with": function (e, n) {
        var t = e;
        return e = r(e), e ? n.fn(t) : void 0
      },
      log: function (e, n) {
        "undefined" != typeof console && console.log && (n ? console.log(e, n.context) : console.log(e.context))
      },
      data: function (n) {
        var t = 2 === arguments.length ? this : arguments[1];
        return function (r) {
          e.data(e.$(r), n, t || this.context)
        }
      },
      "switch": function (e, n) {
        r(e);
        var t = !1,
          i = n.helpers.add({
            "case": function (n, i) {
              return t || r(e) !== r(n) ? void 0 : (t = !0, i.fn(i.scope || this))
            },
            "default": function (e) {
              return t ? void 0 : e.fn(e.scope || this)
            }
          });
        return n.fn(n.scope, i)
      },
      joinBase: function (n) {
        var t = [].slice.call(arguments),
          i = t.pop(),
          o = e.map(t, function (n) {
            var t = r(n);
            return e.isFunction(t) ? t() : t
          }).join(""),
          s = i.helpers.attr("helpers.module"),
          u = s ? s.uri : void 0,
          a = "." === o[0];
        if (a && u) return e.joinURIs(u, o);
        var c = e.baseURL || "undefined" != typeof System && (System.renderingLoader && System.renderingLoader.baseURL || System.baseURL) || location.pathname;
        return "/" !== o[0] && "/" !== c[c.length - 1] && (c += "/"), e.joinURIs(c, o)
      },
      routeUrl: function (n, t) {
        return n || (n = {}), "function" == typeof n.fn && "function" == typeof n.inverse && (n = i(n.hash)), e.route.url(n, "boolean" == typeof t ? t : void 0)
      },
      routeCurrent: function (n) {
        var t = e.last(arguments),
          r = t && o(t);
        return !t || !r || t.exprData instanceof e.expression.Call ? e.route.current(o(n) ? {} : n || {}) : e.route.current(i(n.hash || {})) ? n.fn() : n.inverse()
      }
    };
  s.routeCurrent.callAsMethod = !0, s.eachOf = s.each;
  var u = function (e, n) {
    s[e] = n
  };
  return {
    registerHelper: u,
    registerSimpleHelper: function (n, t) {
      u(n, e.view.simpleHelper(t))
    },
    getHelper: function (e, n) {
      var t = n && n.get("helpers." + e, {
        proxyMethods: !1
      });
      return t || (t = s[e]), t ? {
        fn: t
      } : void 0
    }
  }
});
define("can/view/stache/expression", ["can/util/util", "can/view/stache/utils", "can/view/stache/mustache_helpers", "can/view/scope/scope"], function (t, e, r, o) {
  var n = function (e, r, o) {
      var n = r.computeData(e, o);
      return t.compute.temporarilyBind(n.compute), n
    },
    s = function (t, e, r, o) {
      var s = n(t, e, o);
      return s.compute.computeInstance.hasDependencies ? {
        value: s.compute,
        computeData: s
      } : {
        value: s.initialValue,
        computeData: s
      }
    },
    p = function (t, e, o, n) {
      var p = s(t, e, o, n);
      if (void 0 === p.computeData.initialValue) {
        "@" === t.charAt(0) && "@index" !== t && (t = t.substr(1));
        var a = r.getHelper(t, o);
        p.helper = a && a.fn
      }
      return p
    },
    a = function (t) {
      return t instanceof l || t instanceof i ? t : new l(t)
    },
    i = function (t) {
      this._value = t
    };
  i.prototype.value = function () {
    return this._value
  };
  var u = function (t, e) {
    this.key = t, this.rootExpr = e
  };
  u.prototype.value = function (t, e) {
    var r = p(this.key, t, e);
    return this.isHelper = r.helper && !r.helper.callAsMethod, r.helper || r.value
  };
  var h = function (t, e) {
    u.apply(this, arguments)
  };
  h.prototype.value = function (t, e) {
    return s(this.key, t, e).value
  };
  var l = function (t, e) {
    this.expr = t, this.modifiers = e || {}, this.isCompute = !1
  };
  l.prototype.value = function () {
    return this.expr.value.apply(this.expr, arguments)
  };
  var c = function () {},
    f = function (e, r, o) {
      this.methodExpr = e, this.argExprs = t.map(r, a);
      var n = this.hashExprs = {};
      t.each(o, function (t, e) {
        n[e] = a(t)
      })
    };
  f.prototype.args = function (t, e) {
    for (var r = [], o = 0, n = this.argExprs.length; n > o; o++) {
      var s = this.argExprs[o],
        p = s.value.apply(s, arguments);
      r.push({
        call: p && p.isComputed && !s.modifiers.compute,
        value: p
      })
    }
    return function () {
      for (var t = [], e = 0, o = r.length; o > e; e++) t[e] = r[e].call ? r[e].value() : r[e].value;
      return t
    }
  }, f.prototype.hash = function (t, e) {
    var r = {};
    for (var o in this.hashExprs) {
      var n = this.hashExprs[o],
        s = n.value.apply(n, arguments);
      r[o] = {
        call: s && s.isComputed && !n.modifiers.compute,
        value: s
      }
    }
    return function () {
      var t = {};
      for (var e in r) t[e] = r[e].call ? r[e].value() : r[e].value;
      return t
    }
  }, f.prototype.value = function (e, r, o) {
    var n = this.methodExpr.value(e, r);
    this.isHelper = this.methodExpr.isHelper;
    var s = !t.isEmptyObject(this.hashExprs),
      p = this.args(e, r),
      a = this.hash(e, r);
    return t.compute(function () {
      var t = n;
      if (t && t.isComputed && (t = t()), "function" == typeof t) {
        var e = p();
        return s && e.push(a()), o && e.push(o), t.apply(null, e)
      }
    })
  };
  var d = function () {
    u.apply(this, arguments)
  };
  d.prototype.value = function (t, e) {
    var r = p(this.key, t, e, {
      isArgument: !0,
      args: [t.attr("."), t]
    });
    return r.helper || r.value
  };
  var v = function () {
    u.apply(this, arguments)
  };
  v.prototype.value = function (t, e) {
    return s(this.key, t, e, {
      callMethodsOnObservables: !0,
      isArgument: !0,
      args: [t.attr("."), t]
    }).value
  };
  var y = function (t, e, r) {
    this.methodExpr = t, this.argExprs = e, this.hashExprs = r, this.mode = null
  };
  y.prototype.args = function (t, e) {
    for (var r = [], o = 0, n = this.argExprs.length; n > o; o++) {
      var s = this.argExprs[o];
      r.push(s.value.apply(s, arguments))
    }
    return r
  }, y.prototype.hash = function (t, e) {
    var r = {};
    for (var o in this.hashExprs) {
      var n = this.hashExprs[o];
      r[o] = n.value.apply(n, arguments)
    }
    return r
  }, y.prototype.helperAndValue = function (e, o) {
    var s, p, a, u, h = this.argExprs.length || !t.isEmptyObject(this.hashExprs),
      l = this.methodExpr instanceof i ? "" + this.methodExpr._value : this.methodExpr.key;
    if (h) {
      s = r.getHelper(l, o);
      var c = e.attr(".");
      s || "function" != typeof c[l] || (s = {
        fn: c[l]
      })
    }
    if (!s) {
      u = this.args(e, o);
      var f = n(l, e, {
          isArgument: !1,
          args: u && u.length ? u : [e.attr("."), e]
        }),
        d = f.compute;
      a = f.initialValue, p = f.compute.computeInstance.hasDependencies ? d : a, h || void 0 !== a || (s = r.getHelper(l, o))
    }
    return {
      value: p,
      args: u,
      helper: s && s.fn
    }
  }, y.prototype.evaluator = function (r, o, n, s, p, a, i, u) {
    var h = {
        fn: function () {},
        inverse: function () {}
      },
      l = o.attr("."),
      c = this.args(o, n, p, a, i, u),
      f = this.hash(o, n, p, a, i, u);
    return e.convertToScopes(h, o, n, p, a, i), t.simpleExtend(h, {
        context: l,
        scope: o,
        contexts: o,
        hash: f,
        nodeList: p,
        exprData: this,
        helperOptions: n,
        helpers: n
      }), c.push(h),
      function () {
        return r.apply(l, c)
      }
  }, y.prototype.value = function (e, r, o, n, s, p) {
    var a = this.helperAndValue(e, r),
      i = a.helper;
    if (!i) return a.value;
    var u = this.evaluator(i, e, r, o, n, s, p),
      h = t.compute(u);
    return t.compute.temporarilyBind(h), h.computeInstance.hasDependencies ? h : h()
  };
  var m = /[\w\.\\\-_@\/\&%]+/,
    k = /('.*?'|".*?"|=|[\w\.\\\-_@\/*%\$]+|[\(\)]|,|\~)/g,
    g = /^('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)$/,
    x = function (t) {
      return m.test(t)
    },
    A = /^[\.@]\w/,
    E = function (t) {
      return x(t) && A.test(t)
    },
    H = function (t) {
      return t.children || (t.children = []), t
    },
    C = function () {
      this.root = {
        children: [],
        type: "Root"
      }, this.current = this.root, this.stack = [this.root]
    };
  t.simpleExtend(C.prototype, {
    top: function () {
      return t.last(this.stack)
    },
    isRootTop: function () {
      return this.top() === this.root
    },
    popTo: function (t) {
      this.popUntil(t), this.isRootTop() || this.stack.pop()
    },
    firstParent: function (e) {
      for (var r = this.stack.length - 2; r > 0 && -1 === t.inArray(this.stack[r].type, e);) r--;
      return this.stack[r]
    },
    popUntil: function (e) {
      for (; - 1 === t.inArray(this.top().type, e) && !this.isRootTop();) this.stack.pop();
      return this.top()
    },
    addTo: function (t, e) {
      var r = this.popUntil(t);
      H(r).children.push(e)
    },
    addToAndPush: function (t, e) {
      this.addTo(t, e), this.stack.push(e)
    },
    topLastChild: function () {
      return t.last(this.top().children)
    },
    replaceTopLastChild: function (t) {
      var e = H(this.top()).children;
      return e.pop(), e.push(t), t
    },
    replaceTopLastChildAndPush: function (t) {
      this.replaceTopLastChild(t), this.stack.push(t)
    },
    replaceTopAndPush: function (t) {
      var e;
      return this.top() === this.root ? e = H(this.top()).children : (this.stack.pop(), e = H(this.top()).children), e.pop(), e.push(t), this.stack.push(t), t
    }
  });
  var L = function (t) {
      var e = t.lastIndexOf("./"),
        r = t.lastIndexOf(".");
      if (r > e) return t.substr(0, r) + "@" + t.substr(r + 1);
      var o = -1 === e ? 0 : e + 2,
        n = t.charAt(o);
      return "." === n || "@" === n ? t.substr(0, o) + "@" + t.substr(o + 1) : t.substr(0, o) + "@" + t.substr(o)
    },
    T = function (t) {
      return "Lookup" === t.type && (t.key = L(t.key)), t
    },
    R = function (t) {
      var e = t.top();
      if (e && "Lookup" === e.type) {
        var r = t.stack[t.stack.length - 2];
        "Helper" !== r.type && r && t.replaceTopAndPush({
          type: "Helper",
          method: e
        })
      }
    },
    w = {
      convertKeyToLookup: L,
      Literal: i,
      Lookup: u,
      ScopeLookup: h,
      Arg: l,
      Hash: c,
      Call: f,
      Helper: y,
      HelperLookup: d,
      HelperScopeLookup: v,
      tokenize: function (e) {
        var r = [];
        return (t.trim(e) + " ").replace(k, function (t, e) {
          r.push(e)
        }), r
      },
      lookupRules: {
        "default": function (t, e, r) {
          var o = ("Helper" !== e || t.root ? "" : "Helper") + (r ? "Scope" : "") + "Lookup";
          return w[o]
        },
        method: function (t, e, r) {
          return h
        }
      },
      methodRules: {
        "default": function (t) {
          return "Call" === t.type ? f : y
        },
        call: function (t) {
          return f
        }
      },
      parse: function (t, e) {
        e = e || {};
        var r = this.ast(t);
        e.lookupRule || (e.lookupRule = "default"), "string" == typeof e.lookupRule && (e.lookupRule = w.lookupRules[e.lookupRule]), e.methodRule || (e.methodRule = "default"), "string" == typeof e.methodRule && (e.methodRule = w.methodRules[e.methodRule]);
        var o = this.hydrateAst(r, e, e.baseMethodType || "Helper");
        return o
      },
      hydrateAst: function (t, e, r, o) {
        if ("Lookup" === t.type) return new(e.lookupRule(t, r, o))(t.key, t.root && this.hydrateAst(t.root, e, r));
        if ("Literal" === t.type) return new i(t.value);
        if ("Arg" === t.type) return new l(this.hydrateAst(t.children[0], e, r, o), {
          compute: !0
        });
        if ("Hash" === t.type) throw new Error("");
        if ("Call" === t.type || "Helper" === t.type) {
          var n = {},
            s = [],
            p = t.children;
          if (p)
            for (var a = 0; a < p.length; a++) {
              var u = p[a];
              "Hash" === u.type ? n[u.prop] = this.hydrateAst(u.children[0], e, t.type, !0) : s.push(this.hydrateAst(u, e, t.type, !0))
            }
          return new(e.methodRule(t))(this.hydrateAst(t.method, e, t.type), s, n)
        }
      },
      ast: function (t) {
        var e = this.tokenize(t);
        return this.parseAst(e, {
          index: 0
        })
      },
      parseAst: function (r, o) {
        for (var n, s = new C; o.index < r.length;) {
          var p = r[o.index],
            a = r[o.index + 1];
          if (o.index++, g.test(p)) R(s), s.addTo(["Helper", "Call", "Hash"], {
            type: "Literal",
            value: e.jsonParse(p)
          });
          else if ("=" === a) {
            if (n = s.top(), n && "Lookup" === n.type) {
              var i = s.firstParent(["Call", "Helper", "Hash"]);
              ("Call" === i.type || "Root" === i.type) && (s.popUntil(["Call"]), n = s.top(), s.replaceTopAndPush({
                type: "Helper",
                method: "Root" === n.type ? t.last(n.children) : n
              }))
            }
            s.addToAndPush(["Helper", "Call"], {
              type: "Hash",
              prop: p
            }), o.index++
          } else if (m.test(p)) {
            var u = s.topLastChild();
            u && "Call" === u.type && E(p) ? s.replaceTopLastChildAndPush({
              type: "Lookup",
              root: u,
              key: p
            }) : (R(s), s.addToAndPush(["Helper", "Call", "Hash", "Arg"], {
              type: "Lookup",
              key: p
            }))
          } else if ("~" === p) R(s), s.addToAndPush(["Helper", "Call", "Hash"], {
            type: "Arg",
            key: p
          });
          else if ("(" === p) {
            if (n = s.top(), "Lookup" !== n.type) throw new Error("Unable to understand expression " + r.join(""));
            s.replaceTopAndPush({
              type: "Call",
              method: T(n)
            })
          } else ")" === p ? s.popTo(["Call"]) : "," === p && s.popUntil(["Call"])
        }
        return s.root.children[0]
      }
    };
  return t.expression = w, w
});
define("can/control/control", ["can/util/util", "can/construct/construct"], function (t) {
  var n, e = function (n, e, o) {
      return t.bind.call(n, e, o),
        function () {
          t.unbind.call(n, e, o)
        }
    },
    o = t.isFunction,
    s = t.extend,
    r = t.each,
    i = [].slice,
    u = /\{([^\}]+)\}/g,
    c = t.getObject("$.event.special", [t]) || {},
    l = function (n, e, o, s) {
      return t.delegate.call(n, e, o, s),
        function () {
          t.undelegate.call(n, e, o, s)
        }
    },
    a = function (n, o, s, r) {
      return r ? l(n, t.trim(r), o, s) : e(n, o, s)
    },
    h = t.Control = t.Construct({
      setup: function () {
        if (t.Construct.setup.apply(this, arguments), t.Control) {
          var n, e = this;
          e.actions = {};
          for (n in e.prototype) e._isAction(n) && (e.actions[n] = e._action(n))
        }
      },
      _shifter: function (n, e) {
        var s = "string" == typeof e ? n[e] : e;
        return o(s) || (s = n[s]),
          function () {
            return n.called = e, s.apply(n, [this.nodeName ? t.$(this) : this].concat(i.call(arguments, 0)))
          }
      },
      _isAction: function (t) {
        var n = this.prototype[t],
          e = typeof n;
        return "constructor" !== t && ("function" === e || "string" === e && o(this.prototype[n])) && !!(c[t] || f[t] || /[^\w]/.test(t))
      },
      _action: function (e, o) {
        if (u.lastIndex = 0, o || !u.test(e)) {
          var s = o ? t.sub(e, this._lookup(o)) : e;
          if (!s) return null;
          var r = t.isArray(s),
            i = r ? s[1] : s,
            c = i.split(/\s+/g),
            l = c.pop();
          return {
            processor: f[l] || n,
            parts: [i, c.join(" "), l],
            delegate: r ? s[0] : void 0
          }
        }
      },
      _lookup: function (t) {
        return [t, window]
      },
      processors: {},
      defaults: {}
    }, {
      setup: function (n, e) {
        var o, r = this.constructor,
          i = r.pluginName || r._fullName;
        return this.element = t.$(n), i && "can_control" !== i && this.element.addClass(i), o = t.data(this.element, "controls"), o || (o = [], t.data(this.element, "controls", o)), o.push(this), this.options = s({}, r.defaults, e), this.on(), [this.element, this.options]
      },
      on: function (n, e, o, s) {
        if (!n) {
          this.off();
          var r, i, u = this.constructor,
            c = this._bindings,
            l = u.actions,
            h = this.element,
            f = t.Control._shifter(this, "destroy");
          for (r in l) l.hasOwnProperty(r) && (i = l[r] || u._action(r, this.options, this), i && (c.control[r] = i.processor(i.delegate || h, i.parts[2], i.parts[1], r, this)));
          return t.bind.call(h, "removed", f), c.user.push(function (n) {
            t.unbind.call(n, "removed", f)
          }), c.user.length
        }
        return "string" == typeof n && (s = o, o = e, e = n, n = this.element), void 0 === s && (s = o, o = e, e = null), "string" == typeof s && (s = t.Control._shifter(this, s)), this._bindings.user.push(a(n, o, s, e)), this._bindings.user.length
      },
      off: function () {
        var t = this.element[0],
          n = this._bindings;
        n && (r(n.user || [], function (n) {
          n(t)
        }), r(n.control || {}, function (n) {
          n(t)
        })), this._bindings = {
          user: [],
          control: {}
        }
      },
      destroy: function () {
        if (null !== this.element) {
          var n, e = this.constructor,
            o = e.pluginName || e._fullName;
          this.off(), o && "can_control" !== o && this.element.removeClass(o), n = t.data(this.element, "controls"), n.splice(t.inArray(this, n), 1), t.trigger(this, "destroyed"), this.element = null
        }
      }
    }),
    f = t.Control.processors;
  return n = function (n, e, o, s, r) {
    return a(n, e, t.Control._shifter(r, s), o)
  }, r(["change", "click", "contextmenu", "dblclick", "keydown", "keyup", "keypress", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "reset", "resize", "scroll", "select", "submit", "focusin", "focusout", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchcancel", "touchend", "touchleave", "inserted", "removed", "dragstart", "dragenter", "dragover", "dragleave", "drag", "drop", "dragend"], function (t) {
    f[t] = n
  }), h
});
define("can/view/href/href", ["can/util/util", "can/view/stache/expression", "can/view/callbacks/callbacks", "can/view/scope/scope"], function (e, n) {
  var t = function (e) {
    return "{" === e[0] && "}" === e[e.length - 1] ? e.substr(1, e.length - 2) : e
  };
  e.view.attr("can-href", function (c, a) {
    var r = n.parse("tmp(" + t(c.getAttribute("can-href")) + ")", {
        baseMethodType: "Call"
      }),
      i = r.hash(a.scope, null),
      u = e.compute(function () {
        return e.route.url(i())
      });
    c.setAttribute("href", u());
    var l = function (e, n) {
      c.setAttribute("href", n)
    };
    u.bind("change", l), e.bind.call(c, "removed", function () {
      u.unbind("change", l)
    })
  })
});
define("can/view/bindings/bindings", ["can/util/util", "can/view/stache/expression", "can/view/callbacks/callbacks", "can/control/control", "can/view/scope/scope", "can/view/href/href"], function (e, t, n) {
  var a = {
    viewModel: function (t, n, a, i) {
      i = i || {};
      var r, o = {},
        l = [],
        u = {},
        d = {},
        p = e.extend({}, i);
      e.each(e.makeArray(t.attributes), function (e) {
        var a = c(e, t, {
          templateType: n.templateType,
          scope: n.scope,
          semaphore: o,
          getViewModel: function () {
            return r
          },
          attributeViewModelBindings: p,
          alreadyUpdatedChild: !0
        });
        a && (a.onCompleteBinding && (a.bindingInfo.parentToChild && void 0 !== a.value && (i[m(a.bindingInfo.childName)] = a.value), l.push(a.onCompleteBinding)), u[e.name] = a.onTeardown)
      }), r = a(i);
      for (var s = 0, v = l.length; v > s; s++) l[s]();
      return e.bind.call(t, "attributes", function (e) {
          var a = e.attributeName,
            i = t.getAttribute(a);
          u[a] && u[a]();
          var o = d[a] && "attribute" === d[a].parent;
          if (null !== i || o) {
            var l = c({
              name: a,
              value: i
            }, t, {
              templateType: n.templateType,
              scope: n.scope,
              semaphore: {},
              getViewModel: function () {
                return r
              },
              attributeViewModelBindings: p,
              initializeValues: !0
            });
            l && (l.onCompleteBinding && l.onCompleteBinding(), d[a] = l.bindingInfo, u[a] = l.onTeardown)
          }
        }),
        function () {
          for (var e in u) u[e]()
        }
    },
    data: function (t, n) {
      if (!e.data(e.$(t), "preventDataBindings")) {
        var a, i = e.viewModel(t),
          r = {},
          o = c({
            name: n.attributeName,
            value: t.getAttribute(n.attributeName)
          }, t, {
            templateType: n.templateType,
            scope: n.scope,
            semaphore: r,
            getViewModel: function () {
              return i
            }
          });
        o.onCompleteBinding && o.onCompleteBinding(), a = o.onTeardown, e.one.call(t, "removed", function () {
          a()
        }), e.bind.call(t, "attributes", function (e) {
          var o = e.attributeName,
            l = t.getAttribute(o);
          if (o === n.attributeName && (a && a(), null !== l)) {
            var u = c({
              name: o,
              value: l
            }, t, {
              templateType: n.templateType,
              scope: n.scope,
              semaphore: r,
              getViewModel: function () {
                return i
              },
              initializeValues: !0
            });
            u && (u.onCompleteBinding && u.onCompleteBinding(), a = u.onTeardown)
          }
        })
      }
    },
    reference: function (t, n) {
      t.getAttribute(n.attributeName) && console.warn("*reference attributes can only export the view model.");
      var a = e.camelize(n.attributeName.substr(1).toLowerCase()),
        i = e.viewModel(t),
        r = n.scope.getRefs();
      r._context.attr("*" + a, i)
    },
    event: function (n, a) {
      var i = a.attributeName,
        r = 0 === i.indexOf("can-"),
        o = 0 === i.indexOf("can-") ? i.substr("can-".length) : s(i, "(", ")"),
        l = r;
      "$" === o.charAt(0) && (o = o.substr(1), l = !0);
      var u = function (r) {
        var o = n.getAttribute(i);
        if (o) {
          var l = e.$(n),
            u = e.viewModel(l[0]),
            c = t.parse(s(o), {
              lookupRule: "method",
              methodRule: "call"
            });
          if (!(c instanceof t.Call || c instanceof t.Helper)) {
            var d = e.map([a.scope._context, l].concat(e.makeArray(arguments)), function (e) {
              return new t.Literal(e)
            });
            c = new t.Call(c, d, {})
          }
          var p = a.scope.read(c.methodExpr.key, {
            isArgument: !0
          });
          if (!p.value) return p = a.scope.read(c.methodExpr.key, {
            isArgument: !0
          }), null;
          var v = a.scope.add({
              "@element": l,
              "@event": r,
              "@viewModel": u,
              "@scope": a.scope,
              "@context": a.scope._context,
              "%element": this,
              $element: l,
              "%event": r,
              "%viewModel": u,
              "%scope": a.scope,
              "%context": a.scope._context
            }, {
              notContext: !0
            }),
            f = c.args(v, null)(),
            m = c.hash(v, null)();
          return e.isEmptyObject(m) || f.push(m), p.value.apply(p.parent, f)
        }
      };
      if (h[o]) {
        var c = h[o](a, n, u);
        u = c.handler, o = c.event
      }
      e.bind.call(l ? n : e.viewModel(n), o, u);
      var d = function (t) {
        t.attributeName !== i || this.getAttribute(i) || (e.unbind.call(l ? n : e.viewModel(n), o, u), e.unbind.call(n, "attributes", d))
      };
      e.bind.call(n, "attributes", d)
    },
    value: function (t, n) {
      var a, r = "$value",
        o = e.trim(s(t.getAttribute("can-value")));
      if ("input" !== t.nodeName.toLowerCase() || "checkbox" !== t.type && "radio" !== t.type) p(t) && (r = "$innerHTML");
      else {
        var l = i.scope(t, n.scope, o, {}, !0);
        if ("checkbox" === t.type) {
          var u = e.attr.has(t, "can-true-value") ? t.getAttribute("can-true-value") : !0,
            d = e.attr.has(t, "can-false-value") ? t.getAttribute("can-false-value") : !1;
          a = e.compute(function (e) {
            return arguments.length ? void l(e ? u : d) : l() == u
          })
        } else "radio" === t.type && (a = e.compute(function (e) {
          return arguments.length ? void(e && l(t.value)) : l() == t.value
        }));
        r = "$checked", o = "getterSetter", n.scope = new e.view.Scope({
          getterSetter: a
        })
      }
      c({
        name: "{(" + r + "})",
        value: o
      }, t, {
        templateType: n.templateType,
        scope: n.scope,
        semaphore: {},
        initializeValues: !0,
        legacyBindings: !0,
        syncChildWithParent: !0
      })
    }
  };
  e.view.attr(/^\{[^\}]+\}$/, a.data), e.view.attr(/\*[\w\.\-_]+/, a.reference), e.view.attr(/^\([\$?\w\.]+\)$/, a.event), e.view.attr(/can-[\w\.]+/, a.event), e.view.attr("can-value", a.value);
  var i = {
      scope: function (n, a, i, r, o) {
        if (i) {
          if (o) {
            var l = t.parse(i, {
              baseMethodType: "Call"
            });
            return l.value(a, new e.view.Options({}))
          }
          return function (e) {
            a.attr(m(i), e)
          }
        }
        return e.compute()
      },
      viewModel: function (t, n, a, i, r) {
        var o = m(a);
        return r ? e.compute(function (t) {
          var n = i.getViewModel();
          return arguments.length ? void n.attr(o, t) : "." === a ? n : e.compute.read(n, e.compute.read.reads(a), {}).value
        }) : function (e) {
          i.getViewModel().attr(o, e)
        }
      },
      attribute: function (t, n, a, i, r, o) {
        o || (o = "innerHTML" === a ? ["blur", "change"] : "change"), e.isArray(o) || (o = [o]);
        var l, u, c, d = "select" === t.nodeName.toLowerCase(),
          p = "value" === a && d && t.multiple,
          s = !1,
          v = function (n) {
            if (d && !s && (clearTimeout(c), c = setTimeout(function () {
                v(n)
              }, 1)), u = n, p) {
              n && "string" == typeof n ? (n = n.split(";"), l = !0) : n = n ? e.makeArray(n) : [];
              var r = {};
              e.each(n, function (e) {
                r[e] = !0
              }), e.each(t.childNodes, function (e) {
                e.value && (e.selected = !!r[e.value])
              })
            } else !i.legacyBindings && d && "selectedIndex" in t && (t.selectedIndex = -1), e.attr.setAttrOrProp(t, a, null == n ? "" : n);
            return n
          },
          f = function () {
            if (p) {
              var n = [],
                i = t.childNodes;
              return e.each(i, function (e) {
                e.selected && e.value && n.push(e.value)
              }), l ? n.join(";") : n
            }
            return e.attr.get(t, a)
          };
        return d && setTimeout(function () {
          s = !0
        }, 1), e.compute(f(), {
          on: function (n) {
            e.each(o, function (a) {
              e.bind.call(t, a, n)
            })
          },
          off: function (n) {
            e.each(o, function (a) {
              e.unbind.call(t, a, n)
            })
          },
          get: f,
          set: v
        })
      }
    },
    r = {
      childToParent: function (t, n, a, i, r, o) {
        var l = "function" == typeof n,
          u = function (t, u) {
            i[r] || (l ? (n(u), o && n() !== a() && (i[r] = (i[r] || 0) + 1, a(n()), e.batch.after(function () {
              --i[r]
            }))) : n instanceof e.Map && n.attr(u, !0))
          };
        return a && a.isComputed && a.bind("change", u), u
      },
      parentToChild: function (t, n, a, i, r) {
        var o = function (t, n) {
          i[r] = (i[r] || 0) + 1, a(n), e.batch.after(function () {
            --i[r]
          })
        };
        return n && n.isComputed && n.bind("change", o), o
      }
    },
    o = function (t, a, i) {
      var r = t.name,
        o = t.value || "",
        c = r.match(l);
      if (!c) {
        var d = u.test(r),
          p = e.camelize(r);
        if (d || n.attr(r)) return;
        var s = "{" === o[0] && "}" === e.last(o),
          v = "legacy" === i ? a[p] : !s,
          f = s ? o.substr(1, o.length - 2) : o;
        return v ? {
          bindingAttributeName: r,
          parent: "attribute",
          parentName: r,
          child: "viewModel",
          childName: p,
          parentToChild: !0,
          childToParent: !0
        } : {
          bindingAttributeName: r,
          parent: "scope",
          parentName: f,
          child: "viewModel",
          childName: p,
          parentToChild: !0,
          childToParent: !0
        }
      }
      var m = !!c[1],
        h = m || !!c[2],
        b = m || !h,
        g = c[3],
        w = "$" === g.charAt(0);
      return w ? {
        parent: "scope",
        child: "attribute",
        childToParent: h,
        parentToChild: b,
        bindingAttributeName: r,
        childName: g.substr(1),
        parentName: o,
        initializeValues: !0
      } : {
        parent: "scope",
        child: "viewModel",
        childToParent: h,
        parentToChild: b,
        bindingAttributeName: r,
        childName: e.camelize(g),
        parentName: o,
        initializeValues: !0
      }
    },
    l = /\{(\()?(\^)?([^\}\)]+)\)?\}/,
    u = /^(data-view-id|class|id|\[[\w\.-]+\]|#[\w\.-])$/i,
    c = function (e, t, n) {
      var a = o(e, n.attributeViewModelBindings, n.templateType);
      if (a) {
        a.alreadyUpdatedChild = n.alreadyUpdatedChild, n.initializeValues && (a.initializeValues = !0);
        var l, u, c = i[a.parent](t, n.scope, a.parentName, n, a.parentToChild),
          p = i[a.child](t, n.scope, a.childName, n, a.childToParent);
        a.parentToChild && (u = r.parentToChild(t, c, p, n.semaphore, a.bindingAttributeName));
        var s = function () {
            a.childToParent && (l = r.childToParent(t, c, p, n.semaphore, a.bindingAttributeName, n.syncChildWithParent)), a.initializeValues && d(a, p, c, u, l)
          },
          m = function () {
            f(c, u), f(p, l)
          };
        return "viewModel" === a.child ? {
          value: v(c),
          onCompleteBinding: s,
          bindingInfo: a,
          onTeardown: m
        } : (s(), {
          bindingInfo: a,
          onTeardown: m
        })
      }
    },
    d = function (e, t, n, a, i) {
      var r = !1;
      e.parentToChild && !e.childToParent || (!e.parentToChild && e.childToParent ? r = !0 : void 0 === v(t) || void 0 === v(n) && (r = !0)), r ? i({}, v(t)) : e.alreadyUpdatedChild || a({}, v(n))
    },
    p = function () {
      var e = {
          "": !0,
          "true": !0,
          "false": !1
        },
        t = function (t) {
          if (t && t.getAttribute) {
            var n = t.getAttribute("contenteditable");
            return e[n]
          }
        };
      return function (e) {
        var n = t(e);
        return "boolean" == typeof n ? n : !!t(e.parentNode)
      }
    }(),
    s = function (e, t, n) {
      return t = t || "{", n = n || "}", e[0] === t && e[e.length - 1] === n ? e.substr(1, e.length - 2) : e
    },
    v = function (e) {
      return e && e.isComputed ? e() : e
    },
    f = function (e, t) {
      e && e.isComputed && "function" == typeof t && e.unbind("change", t)
    },
    m = function (e) {
      return e.replace(/@/g, "")
    },
    h = {
      enter: function (e, t, n) {
        return {
          event: "keyup",
          handler: function (e) {
            return 13 === e.keyCode ? n.call(this, e) : void 0
          }
        }
      }
    };
  return e.bindings = {
    behaviors: a,
    getBindingInfo: o,
    special: h
  }, e.bindings
});
define("can/observe/observe", ["can/util/util", "can/map/map", "can/list/list", "can/compute/compute"], function (t) {
  return t.Observe = t.Map, t.Observe.startBatch = t.batch.start, t.Observe.stopBatch = t.batch.stop, t.Observe.triggerBatch = t.batch.trigger, t
});
define("can/view/scanner", ["can/view/view", "can/view/elements", "can/view/callbacks/callbacks"], function (can, elements, viewCallbacks) {
  var newLine = /(\r|\n)+/g,
    notEndTag = /\//,
    clean = function (t) {
      return t.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")
    },
    getTag = function (t, e, n) {
      if (t) return t;
      for (; n < e.length;) {
        if ("<" === e[n] && !notEndTag.test(e[n + 1])) return elements.reverseTagMap[e[n + 1]] || "span";
        n++
      }
      return ""
    },
    bracketNum = function (t) {
      return --t.split("{").length - --t.split("}").length
    },
    myEval = function (script) {
      eval(script)
    },
    attrReg = /([^\s]+)[\s]*=[\s]*$/,
    startTxt = "var ___v1ew = [];",
    finishTxt = "return ___v1ew.join('')",
    put_cmd = "___v1ew.push(\n",
    insert_cmd = put_cmd,
    htmlTag = null,
    quote = null,
    beforeQuote = null,
    rescan = null,
    getAttrName = function () {
      var t = beforeQuote.match(attrReg);
      return t && t[1]
    },
    status = function () {
      return quote ? "'" + getAttrName() + "'" : htmlTag ? 1 : 0
    },
    top = function (t) {
      return t[t.length - 1]
    },
    Scanner;
  return can.view.Scanner = Scanner = function (t) {
    can.extend(this, {
      text: {},
      tokens: []
    }, t), this.text.options = this.text.options || "", this.tokenReg = [], this.tokenSimple = {
      "<": "<",
      ">": ">",
      '"': '"',
      "'": "'"
    }, this.tokenComplex = [], this.tokenMap = {};
    for (var e, n = 0; e = this.tokens[n]; n++) e[2] ? (this.tokenReg.push(e[2]), this.tokenComplex.push({
      abbr: e[1],
      re: new RegExp(e[2]),
      rescan: e[3]
    })) : (this.tokenReg.push(e[1]), this.tokenSimple[e[1]] = e[0]), this.tokenMap[e[0]] = e[1];
    this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")", "g")
  }, Scanner.prototype = {
    helpers: [],
    scan: function (t, e) {
      var n = [],
        s = 0,
        a = this.tokenSimple,
        r = this.tokenComplex;
      t = t.replace(newLine, "\n"), this.transform && (t = this.transform(t)), t.replace(this.tokenReg, function (e, i) {
        var o = arguments[arguments.length - 2];
        if (o > s && n.push(t.substring(s, o)), a[e]) n.push(e);
        else
          for (var u, c = 0; u = r[c]; c++)
            if (u.re.test(e)) {
              n.push(u.abbr), u.rescan && n.push(u.rescan(i));
              break
            }
        s = o + i.length
      }), s < t.length && n.push(t.substr(s));
      var i, o, u, c, l = "",
        p = [startTxt + (this.text.start || "")],
        h = function (t, e) {
          p.push(put_cmd, '"', clean(t), '"' + (e || "") + ");")
        },
        g = [],
        f = null,
        m = !1,
        k = {
          attributeHookups: [],
          tagHookups: [],
          lastTagHookup: ""
        },
        b = function () {
          k.lastTagHookup = k.tagHookups.pop() + k.tagHookups.length
        },
        v = "",
        x = [],
        w = !1,
        T = !1,
        d = 0,
        _ = this.tokenMap;
      for (htmlTag = quote = beforeQuote = null; void 0 !== (u = n[d++]);) {
        if (null === f) switch (u) {
          case _.left:
          case _.escapeLeft:
          case _.returnLeft:
            m = htmlTag && 1;
          case _.commentLeft:
            f = u, l.length && h(l), l = "";
            break;
          case _.escapeFull:
            m = htmlTag && 1, rescan = 1, f = _.escapeLeft, l.length && h(l), rescan = n[d++], l = rescan.content || rescan, rescan.before && h(rescan.before), n.splice(d, 0, _.right);
            break;
          case _.commentFull:
            break;
          case _.templateLeft:
            l += _.left;
            break;
          case "<":
            0 !== n[d].indexOf("!--") && (htmlTag = 1, m = 0), l += u;
            break;
          case ">":
            htmlTag = 0;
            var H = "/" === l.substr(l.length - 1) || "--" === l.substr(l.length - 2),
              N = "";
            if (k.attributeHookups.length && (N = "attrs: ['" + k.attributeHookups.join("','") + "'], ", k.attributeHookups = []), v + k.tagHookups.length !== k.lastTagHookup && v === top(k.tagHookups)) H && (l = l.substr(0, l.length - 1)), p.push(put_cmd, '"', clean(l), '"', ",can.view.pending({tagName:'" + v + "'," + N + "scope: " + (this.text.scope || "this") + this.text.options), H ? (p.push("}));"), l = "/>", b()) : "<" === n[d] && n[d + 1] === "/" + v ? (p.push("}));"), l = u, b()) : (p.push(",subtemplate: function(" + this.text.argNames + "){\n" + startTxt + (this.text.start || "")), l = "");
            else if (m || !w && elements.tagToContentPropMap[x[x.length - 1]] || N) {
              var R = ",can.view.pending({" + N + "scope: " + (this.text.scope || "this") + this.text.options + '}),"';
              H ? h(l.substr(0, l.length - 1), R + '/>"') : h(l, R + '>"'), l = "", m = 0
            } else l += u;
            (H || w) && (x.pop(), v = x[x.length - 1], w = !1), k.attributeHookups = [];
            break;
          case "'":
          case '"':
            if (htmlTag)
              if (quote && quote === u) {
                quote = null;
                var L = getAttrName();
                if (viewCallbacks.attr(L) && k.attributeHookups.push(L), T) {
                  l += u, h(l), p.push(finishTxt, "}));\n"), l = "", T = !1;
                  break
                }
              } else if (null === quote && (quote = u, beforeQuote = i, c = getAttrName(), "img" === v && "src" === c || "style" === c)) {
              h(l.replace(attrReg, "")), l = "", T = !0, p.push(insert_cmd, "can.view.txt(2,'" + getTag(v, n, d) + "'," + status() + ",this,function(){", startTxt), h(c + "=" + u);
              break
            }
          default:
            if ("<" === i) {
              v = "!--" === u.substr(0, 3) ? "!--" : u.split(/\s/)[0];
              var S, y = !1;
              0 === v.indexOf("/") && (y = !0, S = v.substr(1)), y ? (top(x) === S && (v = S, w = !0), top(k.tagHookups) === S && (h(l.substr(0, l.length - 1)), p.push(finishTxt + "}}) );"), l = "><", b())) : (v.lastIndexOf("/") === v.length - 1 && (v = v.substr(0, v.length - 1)), "!--" !== v && viewCallbacks.tag(v) && ("content" === v && elements.tagMap[top(x)] && (u = u.replace("content", elements.tagMap[top(x)])), k.tagHookups.push(v)), x.push(v))
            }
            l += u
        } else switch (u) {
          case _.right:
          case _.returnRight:
            switch (f) {
              case _.left:
                o = bracketNum(l), 1 === o ? (p.push(insert_cmd, "can.view.txt(0,'" + getTag(v, n, d) + "'," + status() + ",this,function(){", startTxt, l), g.push({
                  before: "",
                  after: finishTxt + "}));\n"
                })) : (s = g.length && -1 === o ? g.pop() : {
                  after: ";"
                }, s.before && p.push(s.before), p.push(l, ";", s.after));
                break;
              case _.escapeLeft:
              case _.returnLeft:
                o = bracketNum(l), o && g.push({
                  before: finishTxt,
                  after: "}));\n"
                });
                for (var j = f === _.escapeLeft ? 1 : 0, C = {
                    insert: insert_cmd,
                    tagName: getTag(v, n, d),
                    status: status(),
                    specialAttribute: T
                  }, q = 0; q < this.helpers.length; q++) {
                  var E = this.helpers[q];
                  if (E.name.test(l)) {
                    l = E.fn(l, C), E.name.source === /^>[\s]*\w*/.source && (j = 0);
                    break
                  }
                }
                "object" == typeof l ? l.startTxt && l.end && T ? p.push(insert_cmd, "can.view.toStr( ", l.content, "() ) );") : (l.startTxt ? p.push(insert_cmd, "can.view.txt(\n" + ("string" == typeof status() || (null != l.escaped ? l.escaped : j)) + ",\n'" + v + "',\n" + status() + ",\nthis,\n") : l.startOnlyTxt && p.push(insert_cmd, "can.view.onlytxt(this,\n"), p.push(l.content), l.end && p.push("));")) : T ? p.push(insert_cmd, l, ");") : p.push(insert_cmd, "can.view.txt(\n" + ("string" == typeof status() || j) + ",\n'" + v + "',\n" + status() + ",\nthis,\nfunction(){ " + (this.text.escape || "") + "return ", l, o ? startTxt : "}));\n"), rescan && rescan.after && rescan.after.length && (h(rescan.after.length), rescan = null)
            }
            f = null, l = "";
            break;
          case _.templateLeft:
            l += _.left;
            break;
          default:
            l += u
        }
        i = u
      }
      l.length && h(l), p.push(";");
      var M = p.join(""),
        A = {
          out: (this.text.outStart || "") + M + " " + finishTxt + (this.text.outEnd || "")
        };
      return myEval.call(A, "this.fn = (function(" + this.text.argNames + "){" + A.out + "});\r\n//# sourceURL=" + e + ".js"), A
    }
  }, can.view.pending = function (t) {
    var e = can.view.getHooks();
    return can.view.hook(function (n) {
      can.each(e, function (t) {
        t(n)
      }), t.templateType = "legacy", t.tagName && viewCallbacks.tagHandler(n, t.tagName, t), can.each(t && t.attrs || [], function (e) {
        t.attributeName = e;
        var s = viewCallbacks.attr(e);
        s && s(n, t)
      })
    })
  }, can.view.tag("content", function (t, e) {
    return e.scope
  }), can.view.Scanner = Scanner, Scanner
});
define("can/view/render", ["can/view/view", "can/view/elements", "can/view/live/live", "can/util/string/string"], function (n, t, e) {
  var i, r = [],
    u = function (n) {
      var e = t.tagMap[n] || "span";
      return "span" === e ? "@@!!@@" : "<" + e + ">" + u(e) + "</" + e + ">"
    },
    o = function (t, e) {
      if ("string" == typeof t) return t;
      if (!t && 0 !== t) return "";
      var i = t.hookup && function (n, e) {
        t.hookup.call(t, n, e)
      } || "function" == typeof t && t;
      return i ? e ? "<" + e + " " + n.view.hook(i) + "></" + e + ">" : (r.push(i), "") : "" + t
    },
    c = function (t, e) {
      return "string" == typeof t || "number" == typeof t ? n.esc(t) : o(t, e)
    },
    s = !1,
    a = function () {};
  return n.extend(n.view, {
    live: e,
    setupLists: function () {
      var t, e = n.view.lists;
      return n.view.lists = function (n, e) {
          return t = {
            list: n,
            renderer: e
          }, Math.random()
        },
        function () {
          return n.view.lists = e, t
        }
    },
    getHooks: function () {
      var n = r.slice(0);
      return i = n, r = [], n
    },
    onlytxt: function (n, t) {
      return c(t.call(n))
    },
    txt: function (f, l, p, v, h) {
      var g, w, d, b, y = t.tagMap[l] || "span",
        k = !1,
        m = a;
      if (s) g = h.call(v);
      else {
        ("string" == typeof p || 1 === p) && (s = !0);
        var x = n.view.setupLists();
        m = function () {
          d.unbind("change", a)
        }, d = n.compute(h, v, !1), d.bind("change", a), w = x(), g = d(), s = !1, k = d.computeInstance.hasDependencies
      }
      if (w) return m(), "<" + y + n.view.hook(function (n, t) {
        e.list(n, w.list, w.renderer, v, t)
      }) + "></" + y + ">";
      if (!k || "function" == typeof g) return m(), (s || 2 === f || !f ? o : c)(g, 0 === p && y);
      var M = t.tagToContentPropMap[l];
      if (0 !== p || M) return 1 === p ? (r.push(function (n) {
        e.attributes(n, d, d()), m()
      }), d()) : 2 === f ? (b = p, r.push(function (n) {
        e.specialAttribute(n, b, d), m()
      }), d()) : (b = 0 === p ? M : p, (0 === p ? i : r).push(function (n) {
        e.attribute(n, b, d), m()
      }), e.attributePlaceholder);
      var C = !!t.selfClosingTags[y];
      return "<" + y + n.view.hook(f && "object" != typeof g ? function (n, t) {
        e.text(n, d, t), m()
      } : function (n, t) {
        e.html(n, d, t), m()
      }) + (C ? "/>" : ">" + u(y) + "</" + y + ">")
    }
  }), n
});
define("can/view/mustache/mustache", ["can/util/util", "can/view/scope/scope", "can/view/view", "can/view/scanner", "can/compute/compute", "can/view/render", "can/view/bindings/bindings"], function (e) {
  e.view.ext = ".mustache";
  var n = "scope",
    t = "___h4sh",
    r = "{scope:" + n + ",options:options}",
    i = "{scope:" + n + ",options:options, special: true}",
    s = n + ",options",
    o = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,
    c = /^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,
    a = function (e) {
      return '{get:"' + e.replace(/"/g, '\\"') + '"}'
    },
    u = function (e) {
      return e && "string" == typeof e.get
    },
    f = function (n) {
      return n instanceof e.Map || n && !!n._get
    },
    p = function (e) {
      return e && e.splice && "number" == typeof e.length
    },
    l = function (n, t, r) {
      var i = function (e, r) {
        return n(e || t, r)
      };
      return function (n, s) {
        return void 0 === n || n instanceof e.view.Scope || (n = t.add(n)), void 0 === s || s instanceof e.view.Options || (s = r.add(s)), i(n, s || r)
      }
    },
    h = function (n, t) {
      if (this.constructor !== h) {
        var r = new h(n);
        return function (e, n) {
          return r.render(e, n)
        }
      }
      return "function" == typeof n ? void(this.template = {
        fn: n
      }) : (e.extend(this, n), void(this.template = this.scanner.scan(this.text, this.name)))
    };
  e.Mustache = e.global.Mustache = h, h.prototype.render = function (n, t) {
    return n instanceof e.view.Scope || (n = new e.view.Scope(n || {})), t instanceof e.view.Options || (t = new e.view.Options(t || {})), t = t || {}, this.template.fn.call(n, n, t)
  }, e.extend(h.prototype, {
    scanner: new e.view.Scanner({
      text: {
        start: "",
        scope: n,
        options: ",options: options",
        argNames: s
      },
      tokens: [
        ["returnLeft", "{{{", "{{[{&]"],
        ["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],
        ["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],
        ["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)", function (e) {
          return {
            before: /^\n.+?\n$/.test(e) ? "\n" : "",
            content: e.match(/\{\{(.+?)\}\}/)[1] || ""
          }
        }],
        ["escapeLeft", "{{"],
        ["returnRight", "}}}"],
        ["right", "}}"]
      ],
      helpers: [{
        name: /^>[\s]*\w*/,
        fn: function (n, t) {
          var r = e.trim(n.replace(/^>\s?/, "")).replace(/["|']/g, "");
          return "can.Mustache.renderPartial('" + r + "'," + s + ")"
        }
      }, {
        name: /^\s*data\s/,
        fn: function (e, t) {
          var r = e.match(/["|'](.*)["|']/)[1];
          return "can.proxy(function(__){can.data(can.$(__),'" + r + "', this.attr('.')); }, " + n + ")"
        }
      }, {
        name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
        fn: function (e) {
          var t = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
            r = e.match(t);
          return "can.proxy(function(__){var " + r[1] + "=can.$(__);with(" + n + ".attr('.')){" + r[2] + "}}, this);"
        }
      }, {
        name: /^.*$/,
        fn: function (n, u) {
          var f = !1,
            p = {
              content: "",
              startTxt: !1,
              startOnlyTxt: !1,
              end: !1
            };
          if (n = e.trim(n), n.length && (f = n.match(/^([#^\/]|else$)/))) {
            switch (f = f[0]) {
              case "#":
              case "^":
                u.specialAttribute ? p.startOnlyTxt = !0 : (p.startTxt = !0, p.escaped = 0);
                break;
              case "/":
                return p.end = !0, p.content += 'return ___v1ew.join("");}}])', p
            }
            n = n.substring(1)
          }
          if ("else" !== f) {
            var l, h = [],
              v = [],
              g = 0;
            p.content += "can.Mustache.txt(\n" + (u.specialAttribute ? i : r) + ",\n" + (f ? '"' + f + '"' : "null") + ",", (e.trim(n) + " ").replace(o, function (e, n) {
              g && (l = n.match(c)) ? l[2] ? h.push(l[0]) : v.push(l[4] + ":" + (l[6] ? l[6] : a(l[5]))) : h.push(a(n)), g++
            }), p.content += h.join(","), v.length && (p.content += ",{" + t + ":{" + v.join(",") + "}}")
          }
          switch (f && "else" !== f && (p.content += ",[\n\n"), f) {
            case "^":
            case "#":
              p.content += "{fn:function(" + s + "){var ___v1ew = [];";
              break;
            case "else":
              p.content += 'return ___v1ew.join("");}},\n{inverse:function(' + s + "){\nvar ___v1ew = [];";
              break;
            default:
              p.content += ")"
          }
          return f || (p.startTxt = !0, p.end = !0), p
        }
      }]
    })
  });
  for (var v = e.view.Scanner.prototype.helpers, g = 0; g < v.length; g++) h.prototype.scanner.helpers.unshift(v[g]);
  return h.txt = function (n, r, i) {
    for (var s, o, c = n.scope, a = n.options, v = [], g = {
        fn: function () {},
        inverse: function () {}
      }, d = c.attr("."), m = !0, w = 3; w < arguments.length; w++) {
      var x = arguments[w];
      if (r && e.isArray(x)) g = e.extend.apply(e, [g].concat(x));
      else if (x && x[t]) {
        s = x[t];
        for (var _ in s) u(s[_]) && (s[_] = h.get(s[_].get, n, !1, !0))
      } else x && u(x) ? v.push(h.get(x.get, n, !1, !0, !0)) : v.push(x)
    }
    if (u(i)) {
      var y = i.get;
      i = h.get(i.get, n, v.length, !1), m = y === i
    }
    if (g.fn = l(g.fn, c, a), g.inverse = l(g.inverse, c, a), "^" === r) {
      var b = g.fn;
      g.fn = g.inverse, g.inverse = b
    }
    return (o = m && "string" == typeof i && h.getHelper(i, a) || e.isFunction(i) && !i.isComputed && {
      fn: i
    }) ? (e.extend(g, {
      context: d,
      scope: c,
      contexts: c,
      hash: s
    }), v.push(g), function () {
      var e = o.fn.apply(d, v);
      return null == e ? "" : e
    }) : function () {
      var n;
      n = e.isFunction(i) && i.isComputed ? i() : i;
      var t, s, o, c = v.length ? v : [n],
        a = !0,
        u = [];
      if (r)
        for (t = 0; t < c.length; t++) o = c[t], s = "undefined" != typeof o && f(o), p(o) ? "#" === r ? a = a && !!(s ? o.attr("length") : o.length) : "^" === r && (a = a && !(s ? o.attr("length") : o.length)) : a = "#" === r ? a && !!o : "^" === r ? a && !o : a;
      if (a) {
        if ("#" === r) {
          if (p(n)) {
            var l = f(n);
            for (t = 0; t < n.length; t++) u.push(g.fn(l ? n.attr("" + t) : n[t]));
            return u.join("")
          }
          return g.fn(n || {}) || ""
        }
        return "^" === r ? g.inverse(n || {}) || "" : "" + (null != n ? n : "")
      }
      return ""
    }
  }, h.get = function (n, t, r, i, s) {
    var o = t.scope.attr("."),
      c = t.options || {};
    if (r) {
      if (h.getHelper(n, c)) return n;
      if (t.scope && e.isFunction(o[n])) return o[n]
    }
    var a = t.scope.computeData(n, {
        isArgument: i,
        args: [o, t.scope]
      }),
      u = a.compute;
    e.compute.temporarilyBind(u);
    var f = a.initialValue;
    h.getHelper(n, c);
    return s || void 0 !== f && a.scope === t.scope || !h.getHelper(n, c) ? u.computeInstance.hasDependencies ? u : f : n
  }, h.resolve = function (n) {
    return f(n) && p(n) && n.attr("length") ? n : e.isFunction(n) ? n() : n
  }, h._helpers = {}, h.registerHelper = function (e, n) {
    this._helpers[e] = {
      name: e,
      fn: n
    }
  }, h.registerSimpleHelper = function (n, t) {
    h.registerHelper(n, e.view.simpleHelper(t))
  }, h.getHelper = function (e, n) {
    var t;
    return n && (t = n.get("helpers." + e, {
      proxyMethods: !1
    })), t ? {
      fn: t
    } : this._helpers[e]
  }, h.render = function (n, t, r) {
    return e.view.cached[n] || e.__notObserve(function () {
      var e = t.attr(n);
      e && (n = e)
    })(), e.view.render(n, t, r)
  }, h.safeString = function (e) {
    return {
      toString: function () {
        return e
      }
    }
  }, h.renderPartial = function (n, t, r) {
    var i = r.get("partials." + n, {
      proxyMethods: !1
    });
    return i ? i.render ? i.render(t, r) : i(t, r) : e.Mustache.render(n, t, r)
  }, e.each({
    "if": function (n, t) {
      var r;
      return r = e.isFunction(n) ? e.compute.truthy(n)() : !!h.resolve(n), r ? t.fn(t.contexts || this) : t.inverse(t.contexts || this)
    },
    is: function () {
      var n, t, r = arguments[arguments.length - 1];
      if (arguments.length - 2 <= 0) return r.inverse();
      for (var i = 0; i < arguments.length - 1; i++) {
        if (t = h.resolve(arguments[i]), t = e.isFunction(t) ? t() : t, i > 0 && t !== n) return r.inverse();
        n = t
      }
      return r.fn()
    },
    eq: function () {
      return h._helpers.is.fn.apply(this, arguments)
    },
    unless: function (n, t) {
      return h._helpers["if"].fn.apply(this, [n, e.extend({}, t, {
        fn: t.inverse,
        inverse: t.fn
      })])
    },
    each: function (n, t) {
      var r, i, s, o = h.resolve(n),
        c = [];
      if (e.view.lists && (o instanceof e.List || n && n.isComputed && void 0 === o)) return e.view.lists(n, function (e, n) {
        return t.fn(t.scope.add({
          "@index": n
        }).add(e))
      });
      if (n = o, n && p(n)) {
        for (s = 0; s < n.length; s++) c.push(t.fn(t.scope.add({
          "@index": s
        }).add(n[s])));
        return c.join("")
      }
      if (f(n)) {
        for (r = e.Map.keys(n), s = 0; s < r.length; s++) i = r[s], c.push(t.fn(t.scope.add({
          "@key": i
        }).add(n[i])));
        return c.join("")
      }
      if (n instanceof Object) {
        for (i in n) c.push(t.fn(t.scope.add({
          "@key": i
        }).add(n[i])));
        return c.join("")
      }
    },
    "with": function (e, n) {
      var t = e;
      return e = h.resolve(e), e ? n.fn(t) : void 0
    },
    log: function (e, n) {
      "undefined" != typeof console && console.log && (n ? console.log(e, n.context) : console.log(e.context))
    },
    "@index": function (n, t) {
      t || (t = n, n = 0);
      var r = t.scope.attr("@index");
      return "" + ((e.isFunction(r) ? r() : r) + n)
    }
  }, function (e, n) {
    h.registerHelper(n, e)
  }), e.view.register({
    suffix: "mustache",
    contentType: "x-mustache-template",
    script: function (e, n) {
      return "can.Mustache(function(" + s + ") { " + new h({
        text: n,
        name: e
      }).template.out + " })"
    },
    renderer: function (e, n) {
      return h({
        text: n,
        name: e
      })
    }
  }), e.mustache.registerHelper = e.proxy(e.Mustache.registerHelper, e.Mustache), e.mustache.safeString = e.Mustache.safeString, e
});
define("can/util/view_model/view_model", ["can/util/util"], function (e) {
  var n = e.$;
  n.fn && (n.fn.scope = n.fn.viewModel = function () {
    return e.viewModel.apply(e, [this].concat(e.makeArray(arguments)))
  })
});
define("can/component/component", ["can/util/util", "can/view/callbacks/callbacks", "can/view/elements", "can/view/bindings/bindings", "can/control/control", "can/observe/observe", "can/view/mustache/mustache", "can/util/view_model/view_model"], function (e, t, o, n) {
  var i = /\{([^\}]+)\}/g,
    s = e.Component = e.Construct.extend({
      setup: function () {
        if (e.Construct.setup.apply(this, arguments), e.Component) {
          var t = this,
            o = this.prototype.scope || this.prototype.viewModel;
          if (this.Control = r.extend(this.prototype.events), o && ("object" != typeof o || o instanceof e.Map) ? o.prototype instanceof e.Map && (this.Map = o) : this.Map = e.Map.extend(o || {}), this.attributeScopeMappings = {}, e.each(this.Map ? this.Map.defaults : {}, function (e, o) {
              "@" === e && (t.attributeScopeMappings[o] = o)
            }), this.prototype.template)
            if ("function" == typeof this.prototype.template) {
              var n = this.prototype.template;
              this.renderer = function () {
                return e.view.frag(n.apply(null, arguments))
              }
            } else this.renderer = e.view.mustache(this.prototype.template);
          e.view.tag(this.prototype.tag, function (e, o) {
            new t(e, o)
          })
        }
      }
    }, {
      setup: function (t, i) {
        var s, r, p = {
            "%root": i.scope.attr("%root")
          },
          a = this,
          c = ("undefined" == typeof this.leakScope ? !1 : !this.leakScope) && !!this.template,
          l = [],
          u = function () {
            for (var e = 0, t = l.length; t > e; e++) l[e]()
          },
          d = e.$(t),
          h = !e.data(d, "preventDataBindings");
        e.each(this.constructor.attributeScopeMappings, function (o, n) {
          p[n] = t.getAttribute(e.hyphenate(o))
        }), h && l.push(n.behaviors.viewModel(t, i, function (o) {
          var n = a.scope || a.viewModel;
          if (a.constructor.Map) s = new a.constructor.Map(o);
          else if (n instanceof e.Map) s = n;
          else if (e.isFunction(n)) {
            var r = n.call(a, o, i.scope, t);
            s = r instanceof e.Map ? r : r.prototype instanceof e.Map ? new r(o) : new(e.Map.extend(r))(o)
          }
          var p = s.serialize;
          return s.serialize = function () {
            var e = p.apply(this, arguments);
            return delete e["%root"], e
          }, s
        }, p)), this.scope = this.viewModel = s, e.data(d, "scope", this.viewModel), e.data(d, "viewModel", this.viewModel), e.data(d, "preventDataBindings", !0);
        var v;
        v = c ? e.view.Scope.refsScope().add(this.viewModel, {
          viewModel: !0
        }) : (this.constructor.renderer ? i.scope.add(new e.view.Scope.Refs) : i.scope).add(this.viewModel, {
          viewModel: !0
        });
        var f = {
            helpers: {}
          },
          m = function (e, t) {
            f.helpers[e] = function () {
              return t.apply(s, arguments)
            }
          };
        e.each(this.helpers || {}, function (t, o) {
          e.isFunction(t) && m(o, t)
        }), e.each(this.simpleHelpers || {}, function (t, o) {
          m(o, e.view.simpleHelper(t))
        }), this._control = new this.constructor.Control(t, {
          scope: this.viewModel,
          viewModel: this.viewModel,
          destroy: u
        });
        var g = e.view.nodeLists.register([], void 0, i.parentNodeList || !0, !1);
        g.expression = "<" + this.tag + ">", l.push(function () {
          e.view.nodeLists.unregister(g)
        }), this.constructor.renderer ? (f.tags || (f.tags = {}), f.tags.content = function w(t, n) {
          var s = i.subtemplate || n.subtemplate,
            r = s === i.subtemplate;
          if (s) {
            delete f.tags.content;
            var p;
            if (p = r ? c ? i : {
                scope: n.scope.cloneFromRef(),
                options: n.options
              } : n, n.parentNodeList) {
              var a = s(p.scope, p.options, n.parentNodeList);
              o.replace([t], a)
            } else e.view.live.replace([t], s(p.scope, p.options));
            f.tags.content = w
          }
        }, r = this.constructor.renderer(v, i.options.add(f), g)) : r = "legacy" === i.templateType ? e.view.frag(i.subtemplate ? i.subtemplate(v, i.options.add(f)) : "") : i.subtemplate ? i.subtemplate(v, i.options.add(f), g) : document.createDocumentFragment(), e.appendChild(t, r, e.document), e.view.nodeLists.update(g, e.childNodes(t))
      }
    }),
    r = e.Control.extend({
      _lookup: function (e) {
        return [e.scope, e, window]
      },
      _action: function (t, o, n) {
        var s, r;
        if (i.lastIndex = 0, s = i.test(t), n || !s) {
          if (s) {
            r = e.compute(function () {
              var n, s = t.replace(i, function (t, i) {
                  var s;
                  return "scope" === i || "viewModel" === i ? (n = o.viewModel, "") : (i = i.replace(/^(scope|^viewModel)\./, ""), s = e.compute.read(o.viewModel, e.compute.read.reads(i), {
                    isArgument: !0
                  }).value, void 0 === s && (s = e.getObject(i)), "string" == typeof s ? s : (n = s, ""))
                }),
                r = s.split(/\s+/g),
                p = r.pop();
              return {
                processor: this.processors[p] || this.processors.click,
                parts: [s, r.join(" "), p],
                delegate: n || void 0
              }
            }, this);
            var p = function (e, o) {
              n._bindings.control[t](n.element), n._bindings.control[t] = o.processor(o.delegate || n.element, o.parts[2], o.parts[1], t, n)
            };
            return r.bind("change", p), n._bindings.readyComputes[t] = {
              compute: r,
              handler: p
            }, r()
          }
          return e.Control._action.apply(this, arguments)
        }
      }
    }, {
      setup: function (t, o) {
        return this.scope = o.scope, this.viewModel = o.viewModel, e.Control.prototype.setup.call(this, t, o)
      },
      off: function () {
        this._bindings && e.each(this._bindings.readyComputes || {}, function (e) {
          e.compute.unbind("change", e.handler)
        }), e.Control.prototype.off.apply(this, arguments), this._bindings.readyComputes = {}
      },
      destroy: function () {
        e.Control.prototype.destroy.apply(this, arguments), "function" == typeof this.options.destroy && this.options.destroy.apply(this, arguments)
      }
    }),
    p = e.$;
  return p.fn && (p.fn.scope = p.fn.viewModel = function () {
    return e.viewModel.apply(e, [this].concat(e.makeArray(arguments)))
  }), s
});
define("can/model/model", ["can/util/util", "can/map/map", "can/list/list"], function (t) {
  var e = function (e, r, i) {
      var n = new t.Deferred;
      return e.then(function () {
        var e = t.makeArray(arguments),
          s = !0;
        try {
          e[0] = i.apply(r, e)
        } catch (o) {
          s = !1, n.rejectWith(n, [o].concat(e))
        }
        s && n.resolveWith(n, e)
      }, function () {
        n.rejectWith(this, arguments)
      }), "function" == typeof e.abort && (n.abort = function () {
        return e.abort()
      }), n
    },
    r = 0,
    i = function (e) {
      return t.__observe(e, e.constructor.id), e.___get(e.constructor.id)
    },
    n = function (e, r, i, n, s, o) {
      var a = {};
      if ("string" == typeof e) {
        var u = e.split(/\s+/);
        a.url = u.pop(), u.length && (a.type = u.pop())
      } else t.extend(a, e);
      return a.data = "object" != typeof r || t.isArray(r) ? r : t.extend(a.data || {}, r), a.url = t.sub(a.url, a.data, !0), t.ajax(t.extend({
        type: i || "post",
        dataType: n || "json",
        success: s,
        error: o
      }, a))
    },
    s = function (r, n, s, o, a) {
      var u;
      t.isArray(r) ? (u = r[1], r = r[0]) : u = r.serialize(), u = [u];
      var c, l, d = r.constructor;
      return ("update" === n || "destroy" === n) && u.unshift(i(r)), l = d[n].apply(d, u), c = e(l, r, function (t) {
        return r[a || n + "d"](t, l), r
      }), l.abort && (c.abort = function () {
        l.abort()
      }), c.then(s, o), c
    },
    o = {
      models: function (e, r, i) {
        if (t.Model._reqs++, e) {
          if (e instanceof this.List) return e;
          var n = this,
            s = [],
            o = n.List || f,
            a = r instanceof t.List ? r : new o,
            u = e instanceof f,
            c = u ? e.serialize() : e;
          if (c = n.parseModels(c, i), c.data && (e = c, c = c.data), "undefined" == typeof c || !t.isArray(c)) throw new Error("Could not get any raw data while converting using .models");
          return a.length && a.splice(0), t.each(c, function (t) {
            s.push(n.model(t, i))
          }), a.push.apply(a, s), t.isArray(e) || t.each(e, function (t, e) {
            "data" !== e && a.attr(e, t)
          }), setTimeout(t.proxy(this._clean, this), 1), a
        }
      },
      model: function (e, r, i) {
        if (e) {
          e = "function" == typeof e.serialize ? e.serialize() : this.parseModel(e, i);
          var n = e[this.id];
          (n || 0 === n) && this.store[n] && (r = this.store[n]);
          var s = r && t.isFunction(r.attr) ? r.attr(e, this.removeAttr || !1) : new this(e);
          return s
        }
      }
    },
    a = {
      parseModel: function (e) {
        return function (r) {
          return e ? t.getObject(e, r) : r
        }
      },
      parseModels: function (e) {
        return function (r) {
          if (t.isArray(r)) return r;
          e = e || "data";
          var i = t.getObject(e, r);
          if (!t.isArray(i)) throw new Error("Could not get any raw data while converting using .models");
          return i
        }
      }
    },
    u = {
      create: {
        url: "_shortName",
        type: "post"
      },
      update: {
        data: function (e, r) {
          r = r || {};
          var i = this.id;
          return r[i] && r[i] !== e && (r["new" + t.capitalize(e)] = r[i], delete r[i]), r[i] = e, r
        },
        type: "put"
      },
      destroy: {
        type: "delete",
        data: function (t, e) {
          return e = e || {}, e.id = e[this.id] = t, e
        }
      },
      findAll: {
        url: "_shortName"
      },
      findOne: {}
    },
    c = function (t, e) {
      return function (r) {
        return r = t.data ? t.data.apply(this, arguments) : r, n(e || this[t.url || "_url"], r, t.type || "get")
      }
    },
    l = function (t, e) {
      if (t.resource) {
        var r = t.resource.replace(/\/+$/, "");
        return "findAll" === e || "create" === e ? r : r + "/{" + t.id + "}"
      }
    };
  t.Model = t.Map.extend({
    fullName: "can.Model",
    _reqs: 0,
    setup: function (e, i, n, s) {
      if ("string" != typeof i && (s = n, n = i), s || (s = n), this.store = {}, t.Map.setup.apply(this, arguments), t.Model) {
        n && n.List ? (this.List = n.List, this.List.Map = this) : this.List = e.List.extend({
          Map: this
        }, {});
        var d = this,
          p = t.proxy(this._clean, d);
        t.each(u, function (r, i) {
          if (n && n[i] && ("string" == typeof n[i] || "object" == typeof n[i]) ? d[i] = c(r, n[i]) : n && n.resource && !t.isFunction(n[i]) && (d[i] = c(r, l(d, i))), d["make" + t.capitalize(i)]) {
            var s = d["make" + t.capitalize(i)](d[i]);
            t.Construct._overwrite(d, e, i, function () {
              t.Model._reqs++;
              var e = s.apply(this, arguments),
                r = e.then(p, p);
              return r.abort = e.abort, r
            })
          }
        });
        var h = {};
        t.each(o, function (r, i) {
          var s = "parse" + t.capitalize(i),
            o = n && n[i] || d[i];
          "string" == typeof o ? (d[s] = o, t.Construct._overwrite(d, e, i, r)) : n && n[i] && (h[s] = !0)
        }), t.each(a, function (r, i) {
          var s = n && n[i] || d[i];
          if ("string" == typeof s) t.Construct._overwrite(d, e, i, r(s));
          else if (!(n && t.isFunction(n[i]) || d[i])) {
            var o = r();
            o.useModelConverter = h[i], t.Construct._overwrite(d, e, i, o)
          }
        }), "can.Model" !== d.fullName && d.fullName || (d.fullName = "Model" + ++r), t.Model._reqs = 0, this._url = this._shortName + "/{" + this.id + "}"
      }
    },
    _ajax: c,
    _makeRequest: s,
    _clean: function () {
      if (t.Model._reqs--, !t.Model._reqs)
        for (var e in this.store) this.store[e]._bindings || delete this.store[e];
      return arguments[0]
    },
    models: o.models,
    model: o.model
  }, {
    setup: function (e) {
      var r = e && e[this.constructor.id];
      t.Model._reqs && null != r && (this.constructor.store[r] = this), t.Map.prototype.setup.apply(this, arguments)
    },
    isNew: function () {
      var t = i(this);
      return !(t || 0 === t)
    },
    save: function (t, e) {
      return s(this, this.isNew() ? "create" : "update", t, e)
    },
    destroy: function (e, r) {
      if (this.isNew()) {
        var i = this,
          n = t.Deferred();
        return n.then(e, r), n.done(function (t) {
          i.destroyed(t)
        }).resolve(i)
      }
      return s(this, "destroy", e, r, "destroyed")
    },
    _bindsetup: function () {
      var e = this.___get(this.constructor.id);
      return null != e && (this.constructor.store[e] = this), t.Map.prototype._bindsetup.apply(this, arguments)
    },
    _bindteardown: function () {
      return delete this.constructor.store[i(this)], t.Map.prototype._bindteardown.apply(this, arguments)
    },
    ___set: function (e, r) {
      t.Map.prototype.___set.call(this, e, r), e === this.constructor.id && this._bindings && (this.constructor.store[i(this)] = this)
    }
  });
  var d = function (t) {
      return function (e, r, i) {
        return this[t](e, null, i)
      }
    },
    p = function (t) {
      return this.parseModel.useModelConverter ? this.model(t) : this.parseModel(t)
    },
    h = {
      makeFindAll: d("models"),
      makeFindOne: d("model"),
      makeCreate: p,
      makeUpdate: p,
      makeDestroy: p
    };
  t.each(h, function (r, i) {
    t.Model[i] = function (i) {
      return function () {
        var n = t.makeArray(arguments),
          s = t.isFunction(n[1]) ? n.splice(0, 1) : n.splice(0, 2),
          o = e(i.apply(this, s), this, r);
        return o.then(n[0], n[1]), o
      }
    }
  }), t.each(["created", "updated", "destroyed"], function (e) {
    t.Model.prototype[e] = function (r) {
      var i = this,
        n = i.constructor;
      r && "object" == typeof r && this.attr(t.isFunction(r.attr) ? r.attr() : r), t.dispatch.call(this, {
        type: e,
        target: this
      }, []), t.dispatch.call(n, e, [this])
    }
  });
  var f = t.Model.List = t.List.extend({
    _bubbleRule: function (e, r) {
      var i = t.List._bubbleRule(e, r);
      return i.push("destroyed"), i
    }
  }, {
    setup: function (e) {
      t.isPlainObject(e) && !t.isArray(e) ? (t.List.prototype.setup.apply(this), this.replace(t.isDeferred(e) ? e : this.constructor.Map.findAll(e))) : t.List.prototype.setup.apply(this, arguments), this.bind("destroyed", t.proxy(this._destroyed, this))
    },
    _destroyed: function (t, e) {
      if (/\w+/.test(e))
        for (var r;
          (r = this.indexOf(t.target)) > -1;) this.splice(r, 1)
    }
  });
  return t.Model
});
define("can/util/string/deparam/deparam", ["can/util/util", "can/util/string/string"], function (t) {
  var n = /^\d+$/,
    e = /([^\[\]]+)|(\[\])/g,
    r = /([^?#]*)(#.*)?$/,
    i = function (t) {
      return decodeURIComponent(t.replace(/\+/g, " "))
    };
  return t.extend(t, {
    deparam: function (a) {
      var u, c, o = {};
      return a && r.test(a) && (u = a.split("&"), t.each(u, function (t) {
        var r = t.split("="),
          a = i(r.shift()),
          u = i(r.join("=")),
          p = o;
        if (a) {
          r = a.match(e);
          for (var s = 0, d = r.length - 1; d > s; s++) p[r[s]] || (p[r[s]] = n.test(r[s + 1]) || "[]" === r[s + 1] ? [] : {}), p = p[r[s]];
          c = r.pop(), "[]" === c ? p.push(u) : p[c] = u
        }
      })), o
    }
  }), t
});
define("can/route/route", ["can/util/util", "can/map/map", "can/list/list", "can/util/string/deparam/deparam"], function (t) {
  var e, r, n, a, u = /\:([\w\.]+)/g,
    o = /^(?:&[^=]+=[^&]*)+/,
    i = function (e) {
      var r = [];
      return t.each(e, function (e, n) {
        r.push(("className" === n ? "class" : n) + '="' + ("href" === n ? e : t.esc(e)) + '"')
      }), r.join(" ")
    },
    c = function (t, e) {
      var r = 0,
        n = 0,
        a = {};
      for (var u in t.defaults) t.defaults[u] === e[u] && (a[u] = 1, r++);
      for (; n < t.names.length; n++) {
        if (!e.hasOwnProperty(t.names[n])) return -1;
        a[t.names[n]] || r++
      }
      return r
    },
    l = window.location,
    s = function (t) {
      return (t + "").replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    },
    d = t.each,
    f = t.extend,
    h = function (e) {
      return e && "object" == typeof e ? (e = e instanceof t.Map ? e.attr() : t.isFunction(e.slice) ? e.slice() : t.extend({}, e), t.each(e, function (t, r) {
        e[r] = h(t)
      })) : void 0 !== e && null !== e && t.isFunction(e.toString) && (e = e.toString()), e
    },
    p = function (t) {
      return t.replace(/\\/g, "")
    },
    g = [],
    m = function (r, u, o, i) {
      a = 1, g.push(u), clearTimeout(e), e = setTimeout(function () {
        a = 0;
        var e = t.route.data.serialize(),
          r = t.route.param(e, !0);
        t.route._call("setURL", r, g), t.batch.trigger(_, "__url", [r, n]), n = r, g = []
      }, 10)
    },
    _ = t.extend({}, t.event);
  t.route = function (e, r) {
    var n = t.route._call("root");
    n.lastIndexOf("/") === n.length - 1 && 0 === e.indexOf("/") && (e = e.substr(1)), r = r || {};
    for (var a, o, i = [], c = "", l = u.lastIndex = 0, d = t.route._call("querySeparator"), f = t.route._call("matchSlashes"); a = u.exec(e);) i.push(a[1]), c += p(e.substring(l, u.lastIndex - a[0].length)), o = "\\" + (p(e.substr(u.lastIndex, 1)) || d + (f ? "" : "|/")), c += "([^" + o + "]" + (r[a[1]] ? "*" : "+") + ")", l = u.lastIndex;
    return c += e.substr(l).replace("\\", ""), t.route.routes[e] = {
      test: new RegExp("^" + c + "($|" + s(d) + ")"),
      route: e,
      names: i,
      defaults: r,
      length: e.split("/").length
    }, t.route
  }, f(t.route, {
    param: function (e, r) {
      var n, a, o = 0,
        i = e.route,
        l = 0;
      if (delete e.route, d(e, function () {
          l++
        }), d(t.route.routes, function (t, r) {
          return a = c(t, e), a > o && (n = t, o = a), a >= l ? !1 : void 0
        }), t.route.routes[i] && c(t.route.routes[i], e) === o && (n = t.route.routes[i]), n) {
        var s, h = f({}, e),
          p = n.route.replace(u, function (t, r) {
            return delete h[r], e[r] === n.defaults[r] ? "" : encodeURIComponent(e[r])
          }).replace("\\", "");
        return d(n.defaults, function (t, e) {
          h[e] === t && delete h[e]
        }), s = t.param(h), r && t.route.attr("route", n.route), p + (s ? t.route._call("querySeparator") + s : "")
      }
      return t.isEmptyObject(e) ? "" : t.route._call("querySeparator") + t.param(e)
    },
    deparam: function (e) {
      var r = t.route._call("root");
      r.lastIndexOf("/") === r.length - 1 && 0 === e.indexOf("/") && (e = e.substr(1));
      var n = {
          length: -1
        },
        a = t.route._call("querySeparator"),
        u = t.route._call("paramsMatcher");
      if (d(t.route.routes, function (t, r) {
          t.test.test(e) && t.length > n.length && (n = t)
        }), n.length > -1) {
        var o = e.match(n.test),
          i = o.shift(),
          c = e.substr(i.length - (o[o.length - 1] === a ? 1 : 0)),
          l = c && u.test(c) ? t.deparam(c.slice(1)) : {};
        return l = f(!0, {}, n.defaults, l), d(o, function (t, e) {
          t && t !== a && (l[n.names[e]] = decodeURIComponent(t))
        }), l.route = n.route, l
      }
      return e.charAt(0) !== a && (e = a + e), u.test(e) ? t.deparam(e.slice(1)) : {}
    },
    data: new t.Map({}),
    map: function (e) {
      var r;
      r = e.prototype instanceof t.Map ? new e : e, t.route.data = r
    },
    routes: {},
    ready: function (e) {
      return e !== !0 && (t.route._setup(), (t.isBrowserWindow || t.isWebWorker) && t.route.setState()), t.route
    },
    url: function (e, r) {
      return r && (t.__observe(_, "__url"), e = t.extend({}, t.route.deparam(t.route._call("matchingPartOfURL")), e)), t.route._call("root") + t.route.param(e)
    },
    link: function (e, r, n, a) {
      return "<a " + i(f({
        href: t.route.url(r, a)
      }, n)) + ">" + e + "</a>"
    },
    current: function (e) {
      return t.__observe(_, "__url"), this._call("matchingPartOfURL") === t.route.param(e)
    },
    bindings: {
      hashchange: {
        paramsMatcher: o,
        querySeparator: "&",
        matchSlashes: !1,
        bind: function () {
          t.bind.call(window, "hashchange", b)
        },
        unbind: function () {
          t.unbind.call(window, "hashchange", b)
        },
        matchingPartOfURL: function () {
          var e = t.route.location || l;
          return e.href.split(/#!?/)[1] || ""
        },
        setURL: function (t) {
          return l.hash !== "#" + t && (l.hash = "!" + t), t
        },
        root: "#!"
      }
    },
    defaultBinding: "hashchange",
    currentBinding: null,
    _setup: function () {
      t.route.currentBinding || (t.route._call("bind"), t.route.bind("change", m), t.route.currentBinding = t.route.defaultBinding)
    },
    _teardown: function () {
      t.route.currentBinding && (t.route._call("unbind"), t.route.unbind("change", m), t.route.currentBinding = null), clearTimeout(e), a = 0
    },
    _call: function () {
      var e = t.makeArray(arguments),
        r = e.shift(),
        n = t.route.bindings[t.route.currentBinding || t.route.defaultBinding],
        a = n[r];
      return a.apply ? a.apply(n, e) : a
    }
  }), d(["bind", "unbind", "on", "off", "delegate", "undelegate", "removeAttr", "compute", "_get", "___get", "each"], function (e) {
    t.route[e] = function () {
      return t.route.data[e] ? t.route.data[e].apply(t.route.data, arguments) : void 0
    }
  }), t.route.attr = function (e, r) {
    var n, a = typeof e;
    return n = void 0 === r ? arguments : "string" !== a && "number" !== a ? [h(e), r] : [e, h(r)], t.route.data.attr.apply(t.route.data, n)
  }, t.route.batch = t.batch;
  var b = t.route.setState = function () {
      var e = t.route._call("matchingPartOfURL"),
        u = r;
      r = t.route.deparam(e), a && e === n || (t.route.batch.start(), v(u, r, t.route.data), t.route.attr(r), t.route.batch.trigger(_, "__url", [e, n]), t.route.batch.stop())
    },
    v = function (t, e, r) {
      for (var n in t) void 0 === e[n] ? r.removeAttr(n) : "[object Object]" === Object.prototype.toString.call(t[n]) && v(t[n], e[n], r.attr(n))
    };
  return t.route
});
define("can/control/route/route", ["can/util/util", "can/route/route", "can/control/control"], function (t) {
  return t.Control.processors.route = function (o, r, u, n, e) {
    u = u || "", t.route.routes[u] || ("/" === u[0] && (u = u.substring(1)), t.route(u));
    var c, i = function (o, r, i) {
      if (t.route.attr("route") === u && (void 0 === o.batchNum || o.batchNum !== c)) {
        c = o.batchNum;
        var a = t.route.attr();
        delete a.route, t.isFunction(e[n]) ? e[n](a) : e[e[n]](a)
      }
    };
    return t.route.bind("change", i),
      function () {
        t.route.unbind("change", i)
      }
  }, t
});
define("can/list/promise/promise", ["can/util/can", "can/list/list"], function (e) {
  var t = e.List.prototype.replace;
  e.List.prototype.replace = function (r) {
    var s = t.apply(this, arguments);
    if (e.isDeferred(r)) {
      this._deferred && (this._deferred.__cancelState = !0), e.batch.start(), this.attr("state", r.state()), this.removeAttr("reason"), e.batch.stop();
      var a = this,
        i = this._deferred = new e.Deferred;
      i.__cancelState = !1, r.then(function () {
        i.__cancelState || (a.attr("state", r.state()), i.resolve(a))
      }, function (t) {
        i.__cancelState || (e.batch.start(), a.attr("state", r.state()), a.attr("reason", t), e.batch.stop(), i.reject(t))
      })
    }
    return s
  }, e.each({
    isResolved: "resolved",
    isPending: "pending",
    isRejected: "rejected"
  }, function (t, r) {
    e.List.prototype[r] = function () {
      return this.attr("state") === t
    }
  }), e.each(["then", "done", "fail", "always", "promise"], function (t) {
    e.List.prototype[t] = function () {
      return this._deferred || (this._deferred = new e.Deferred, this._deferred.resolve(this)), this._deferred[t].apply(this._deferred, arguments)
    }
  })
});
define("can/view/ejs/ejs", ["can/util/util", "can/view/view", "can/util/string/string", "can/compute/compute", "can/view/scanner", "can/view/render"], function (t) {
  var e = t.extend,
    n = function (t) {
      if (this.constructor !== n) {
        var r = new n(t);
        return function (t, e) {
          return r.render(t, e)
        }
      }
      return "function" == typeof t ? void(this.template = {
        fn: t
      }) : (e(this, t), void(this.template = this.scanner.scan(this.text, this.name)))
    };
  return t.EJS = n, n.prototype.render = function (t, e) {
    return t = t || {}, this.template.fn.call(t, t, new n.Helpers(t, e || {}))
  }, e(n.prototype, {
    scanner: new t.view.Scanner({
      text: {
        outStart: "with(_VIEW) { with (_CONTEXT) {",
        outEnd: "}}",
        argNames: "_CONTEXT,_VIEW",
        context: "this"
      },
      tokens: [
        ["templateLeft", "<%%"],
        ["templateRight", "%>"],
        ["returnLeft", "<%=="],
        ["escapeLeft", "<%="],
        ["commentLeft", "<%#"],
        ["left", "<%"],
        ["right", "%>"],
        ["returnRight", "%>"]
      ],
      helpers: [{
        name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
        fn: function (t) {
          var e = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
            n = t.match(e);
          return "can.proxy(function(__){var " + n[1] + "=can.$(__);" + n[2] + "}, this);"
        }
      }],
      transform: function (t) {
        return t.replace(/<%([\s\S]+?)%>/gm, function (t, e) {
          var n, r, i = [];
          e.replace(/[{}]/gm, function (t, e) {
            i.push([t, e])
          });
          do
            for (n = !1, r = i.length - 2; r >= 0; r--)
              if ("{" === i[r][0] && "}" === i[r + 1][0]) {
                i.splice(r, 2), n = !0;
                break
              }
          while (n);
          if (i.length >= 2) {
            var s, a = ["<%"],
              c = 0;
            for (r = 0; s = i[r]; r++) a.push(e.substring(c, c = s[1])), "{" === s[0] && r < i.length - 1 || "}" === s[0] && r > 0 ? a.push("{" === s[0] ? "{ %><% " : " %><% }") : a.push(s[0]), ++c;
            return a.push(e.substring(c), "%>"), a.join("")
          }
          return "<%" + e + "%>"
        })
      }
    })
  }), n.Helpers = function (t, n) {
    this._data = t, this._extras = n, e(this, n)
  }, n.Helpers.prototype = {
    list: function (e, n) {
      t.each(e, function (t, r) {
        n(t, r, e)
      })
    },
    each: function (e, n) {
      t.isArray(e) ? this.list(e, n) : t.view.lists(e, n)
    }
  }, t.view.register({
    suffix: "ejs",
    script: function (t, e) {
      return "can.EJS(function(_CONTEXT,_VIEW) { " + new n({
        text: e,
        name: t
      }).template.out + " })"
    },
    renderer: function (t, e) {
      return n({
        text: e,
        name: t
      })
    }
  }), t.ejs.Helpers = n.Helpers, t
});
define("can/route/pushstate/pushstate", ["can/util/util", "can/route/route"], function (t) {
  "use strict";
  var e = window.history && window.history.pushState,
    n = window.location && "file:" === window.location.protocol;
  if (!n && e) {
    t.route.bindings.pushstate = {
      root: "/",
      matchSlashes: !1,
      paramsMatcher: /^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,
      querySeparator: "?",
      bind: function () {
        t.isNode || (t.delegate.call(t.$(document.documentElement), "a", "click", a), t.each(i, function (e) {
          u[e] = window.history[e], window.history[e] = function (n, a, o) {
            var r = 0 === o.indexOf("http"),
              i = window.location.search + window.location.hash;
            (!r && o !== window.location.pathname + i || r && o !== window.location.href + i) && (u[e].apply(window.history, arguments), t.route.setState())
          }
        }), t.bind.call(window, "popstate", t.route.setState))
      },
      unbind: function () {
        t.undelegate.call(t.$(document.documentElement), "click", "a", a), t.each(i, function (t) {
          window.history[t] = u[t]
        }), t.unbind.call(window, "popstate", t.route.setState)
      },
      matchingPartOfURL: function () {
        var t = o(),
          e = location.pathname + location.search,
          n = e.indexOf(t);
        return e.substr(n + t.length)
      },
      setURL: function (e, n) {
        var a = "pushState";
        if (c && -1 === e.indexOf("#") && window.location.hash && (e += window.location.hash), l.length > 0) {
          for (var o = [], i = 0, u = n.length; u > i; i++) - 1 !== t.inArray(n[i], l) && (a = "replaceState"), -1 !== t.inArray(n[i], l.once) && o.push(n[i]);
          o.length > 0 && (r(l, o), r(l.once, o))
        }
        window.history[a](null, null, t.route._call("root") + e)
      }
    };
    var a = function (e) {
        if (!(e.isDefaultPrevented ? e.isDefaultPrevented() : e.defaultPrevented === !0)) {
          var n = this._node || this,
            a = n.host || window.location.host;
          if ("javascript://" === n.href) return;
          if (window.location.host === a) {
            var r = o();
            if (0 === n.pathname.indexOf(r)) {
              var i = (n.pathname + n.search).substr(r.length),
                u = t.route.deparam(i);
              u.hasOwnProperty("route") && (c = !0, window.history.pushState(null, null, n.href), e.preventDefault && e.preventDefault())
            }
          }
        }
      },
      o = function () {
        var e = location.protocol + "//" + location.host,
          n = t.route._call("root"),
          a = n.indexOf(e);
        return 0 === a ? n.substr(e.length) : n
      },
      r = function (e, n) {
        for (var a, o = n.length - 1; o >= 0; o--) - 1 !== (a = t.inArray(n[o], e)) && e.splice(a, 1)
      },
      i = ["pushState", "replaceState"],
      u = {},
      c = !1,
      l = [];
    t.route.defaultBinding = "pushstate", t.extend(t.route, {
      replaceStateOn: function () {
        var e = t.makeArray(arguments);
        Array.prototype.push.apply(l, e)
      },
      replaceStateOnce: function () {
        var e = t.makeArray(arguments);
        l.once = t.makeArray(l.once), Array.prototype.push.apply(l.once, e), t.route.replaceStateOn.apply(this, arguments)
      },
      replaceStateOff: function () {
        var e = t.makeArray(arguments);
        r(l, e)
      }
    })
  }
  return t
});
define("can/util/object/object", ["can/util/util"], function (r) {
  var t = r.isArray;
  r.Object = {};
  var n = r.Object.same = function (i, u, f, o, c, a) {
    var l, s = typeof i,
      v = t(i),
      b = typeof f;
    if (("string" === b || null === f) && (f = e[f], b = "function"), "function" === b) return f(i, u, o, c);
    if (f = f || {}, null === i || null === u) return i === u;
    if (i instanceof Date || u instanceof Date) return i === u;
    if (-1 === a) return "object" === s || i === u;
    if (s !== typeof u || v !== t(u)) return !1;
    if (i === u) return !0;
    if (v) {
      if (i.length !== u.length) return !1;
      for (var j = 0; j < i.length; j++)
        if (l = void 0 === f[j] ? f["*"] : f[j], !n(i[j], u[j], i, u, l)) return !1;
      return !0
    }
    if ("object" === s || "function" === s) {
      var d = r.extend({}, u);
      for (var O in i) {
        if (l = void 0 === f[O] ? f["*"] : f[O], !n(i[O], u[O], l, i, u, a === !1 ? -1 : void 0)) return !1;
        delete d[O]
      }
      for (O in d)
        if (void 0 === f[O] || !n(void 0, u[O], f[O], i, u, a === !1 ? -1 : void 0)) return !1;
      return !0
    }
    return !1
  };
  r.Object.subsets = function (t, n, e) {
    for (var i = n.length, u = [], f = 0; i > f; f++) {
      var o = n[f];
      r.Object.subset(t, o, e) && u.push(o)
    }
    return u
  }, r.Object.subset = function (r, t, e) {
    e = e || {};
    for (var i in t)
      if (!n(r[i], t[i], e[i], r, t)) return !1;
    return !0
  };
  var e = {
    "null": function () {
      return !0
    },
    i: function (r, t) {
      return ("" + r).toLowerCase() === ("" + t).toLowerCase()
    },
    eq: function (r, t) {
      return r === t
    },
    similar: function (r, t) {
      return r == t
    }
  };
  return e.eqeq = e.similar, r.Object
});
define("can/map/backup/backup", ["can/util/util", "can/compute/compute", "can/map/map", "can/util/object/object"], function (t) {
  var e = function (t, e) {
      var r = {};
      for (var a in t) "object" != typeof t[a] || null === t[a] || t[a] instanceof Date ? r[a] = t[a] : r[a] = e.attr(a);
      return r
    },
    r = t.Map.prototype.setup;
  return t.extend(t.Map.prototype, {
    setup: function () {
      return this._backupStore = t.compute(), r.apply(this, arguments)
    },
    backup: function () {
      return this._backupStore(this.attr()), this
    },
    isDirty: function (e) {
      return this._backupStore() && !t.Object.same(this.attr(), this._backupStore(), void 0, void 0, void 0, !!e)
    },
    restore: function (t) {
      var r = t ? this._backupStore() : e(this._backupStore(), this);
      return this.isDirty(t) && this.attr(r, !0), this
    }
  }), t.Map
});
define("can/model/queue/queue", ["can/util/util", "can/model/model", "can/map/backup/backup"], function (t) {
  var e = function (e, r) {
      var n, s, u = t.extend(!0, {}, r);
      if (e)
        for (var i = 0; i < e.length; i++) {
          for (n = u, s = e[i].split("."); s.length > 1;) n = n && n[s.shift()];
          n && delete n[s.shift()]
        }
      return u
    },
    r = function (e, r, n, s) {
      this._changedAttrs = this._changedAttrs || [];
      var u, i, o = new t.Deferred,
        a = this,
        c = this.serialize(),
        h = this._requestQueue,
        l = this._changedAttrs;
      return u = function (t, e, r, n) {
        return function () {
          return t.constructor._makeRequest([t, c], e || (t.isNew() ? "create" : "update"), r, n, s)
        }
      }(this, n, function () {
        o.resolveWith(a, arguments), h.splice(0, 1), h.length > 0 ? h[0] = h[0]() : l.splice(0)
      }, function () {
        o.rejectWith(a, arguments), h.splice(0), l.splice(0)
      }), i = h.push(u) - 1, 1 === h.length && (h[0] = h[0]()), o.abort = function () {
        var t;
        return t = h[i].abort && h[i].abort(), h.splice(i), 0 === h.length && l.splice(0), t
      }, o.then(e, r), o
    },
    n = t.Model.prototype._triggerChange,
    s = t.Model.prototype.destroy,
    u = t.Model.prototype.setup;
  return t.each(["created", "updated", "destroyed"], function (r) {
    var n = t.Model.prototype[r];
    t.Model.prototype[r] = function (t) {
      t && "object" == typeof t && (t = t.attr ? t.attr() : t, this._backupStore(t), t = e(this._changedAttrs || [], t)), n.call(this, t)
    }
  }), t.extend(t.Model.prototype, {
    setup: function () {
      u.apply(this, arguments), this._requestQueue = new t.List
    },
    _triggerChange: function (t, e, r, s) {
      this._changedAttrs && this._changedAttrs.push(t), n.apply(this, arguments)
    },
    hasQueuedRequests: function () {
      return this._requestQueue.attr("length") > 1
    },
    save: function () {
      return r.apply(this, arguments)
    },
    destroy: function (t, e) {
      return this.isNew() ? s.call(this, t, e) : r.call(this, t, e, "destroy", "destroyed")
    }
  }), t
});
define("can/construct/super/super", ["can/util/util", "can/construct/construct"], function (t, n) {
  var r = t.isFunction,
    e = /xyz/.test(function () {
      return this.xyz
    }) ? /\b_super\b/ : /.*/,
    u = ["get", "set"],
    c = function (t, n, r) {
      return function () {
        var e, u = this._super;
        return this._super = t[n], e = r.apply(this, arguments), this._super = u, e
      }
    };
  return t.Construct._defineProperty = function (n, e, s, i) {
    var o = Object.getOwnPropertyDescriptor(e, s);
    o && t.each(u, function (t) {
      r(o[t]) && r(i[t]) ? i[t] = c(o, t, i[t]) : r(i[t]) || (i[t] = o[t])
    }), Object.defineProperty(n, s, i)
  }, t.Construct._overwrite = function (t, n, u, s) {
    t[u] = r(s) && r(n[u]) && e.test(s) ? c(n, u, s) : s
  }, t
});
define("can/construct/proxy/proxy", ["can/util/util", "can/construct/construct"], function (r, t) {
  var n = (r.isFunction, r.isArray),
    o = r.makeArray,
    c = function (r) {
      var t, c = o(arguments);
      return r = c.shift(), n(r) || (r = [r]), t = this,
        function () {
          for (var u, a, e = c.concat(o(arguments)), s = r.length, i = 0; s > i; i++) a = r[i], a && (u = "string" == typeof a, e = (u ? t[a] : a).apply(t, e || []), s - 1 > i && (e = !n(e) || e._use_call ? [e] : e));
          return e
        }
    };
  r.Construct.proxy = r.Construct.prototype.proxy = c;
  for (var u = [r.Map, r.Control, r.Model], a = 0; a < u.length; a++) u[a] && (u[a].proxy = c);
  return r
});
define("can/map/lazy/bubble", ["can/util/util", "can/map/bubble"], function (e) {
  var n = e.bubble;
  return e.extend({}, n, {
    childrenOf: function (e, t) {
      e._nestedReference ? e._nestedReference.each(function (a, c) {
        a && a.bind && n.toParent(a, e, c(), t)
      }) : n._each.apply(this, arguments)
    }
  })
});
define("can/map/lazy/nested_reference", ["can/util/util"], function (e) {
  var t = function (e, t, r) {
      for (var n, i = t.split("."), o = e; n = i.shift();) o = o[n], r && r(o, n);
      return o
    },
    r = function (e) {
      this.array = e
    };
  r.prototype.toString = function () {
    return "" + e.inArray(this.item, this.array)
  };
  var n = function (e) {
    this.root = e, this.references = []
  };
  n.ArrIndex = r, e.extend(n.prototype, {
    make: function (n) {
      var i, o = [];
      (e.isArray(this.root) || this.root instanceof e.LazyList) && (i = new r(this.root)), t(this.root, n, function (t, n) {
        i ? (i.item = t, o.push(i), i = void 0) : (o.push(n), e.isArray(t) && (i = new r(t)))
      });
      var s = function () {
        return o.join(".")
      };
      return this.references.push(s), s
    },
    removeChildren: function (e, t) {
      for (var r = 0; r < this.references.length;) {
        var n = this.references[r]();
        0 === n.indexOf(e) ? (t(this.get(n), n), this.references.splice(r, 1)) : r++
      }
    },
    get: function (e) {
      return t(this.root, e)
    },
    each: function (t) {
      var r = this;
      e.each(this.references, function (e) {
        var n = e();
        t(r.get(n), e, n)
      })
    }
  }), e.NestedReference = n
});
define("can/map/lazy/lazy", ["can/util/util", "can/map/lazy/bubble", "can/map/map_helpers", "can/map/map", "can/list/list", "can/map/lazy/nested_reference"], function (e, t, a) {
  return e.LazyMap = e.Map.extend({
    _bubble: t
  }, {
    setup: function (t) {
      this.constructor.Map = this.constructor, this.constructor.List = e.LazyList, this._data = e.extend(e.extend(!0, {}, this._setupDefaults() || {}), t), e.cid(this, ".lazyMap"), this._setupComputedProperties();
      var i = t && a.addToMap(t, this);
      this._nestedReference = new e.NestedReference(this._data), i && i(), e.each(this._data, e.proxy(function (e, t) {
        this.___set(t, e)
      }, this)), this.bind("change", e.proxy(this._changes, this))
    },
    _changes: function (e, t, a, i, s) {},
    _addChild: function (e, a, i) {
      var s = this;
      if (this._nestedReference.removeChildren(e, function (i, r) {
          if (t.remove(s, i), a) {
            var n = r.replace(e + ".", "");
            if (e === n) i._nestedReference.each(function (e, i) {
              a._nestedReference.make(i()), s._bindings && t.add(this, a, i())
            });
            else {
              var h = a._nestedReference.make(n);
              s._bindings && t.add(i, a, h())
            }
          }
        }), i && i(), a) {
        var r = this._nestedReference.make(e);
        this._bindings && t.add(this, a, r())
      }
      return a
    },
    removeAttr: function (t) {
      var a = this._goto(t);
      return a.parts.length ? a.value.removeAttr(a.parts.join(".")) : (e.isArray(a.parent) ? (a.parent.splice(a.prop, 1), this._triggerChange(t, "remove", void 0, [this.__type(a.value, a.prop)])) : a.parent[a.prop] && (delete a.parent[a.prop], e.batch.trigger(this, a.path.length ? a.path.join(".") + ".__keys" : "__keys"), this._triggerChange(t, "remove", void 0, this.__type(a.value, a.prop))), this._nestedReference.removeChildren(), a.value)
    },
    __type: function (t, i) {
      if (!(t instanceof e.LazyMap) && a.canMakeObserve(t)) {
        if (e.isArray(t)) {
          var s = e.LazyList;
          return new s(t)
        }
        var r = this.constructor.Map || e.LazyMap;
        return new r(t)
      }
      return t
    },
    _goto: function (t, i) {
      for (var s, r, n = a.attrParts(t, i).slice(0), h = [], o = this instanceof e.List ? this[n.shift()] : this.___get(); o && !e.isMapLike(o) && n.length;) void 0 !== r && h.push(r), s = o, o = o[r = n.shift()];
      return {
        parts: n,
        prop: r,
        value: o,
        parent: s,
        path: h
      }
    },
    _get: function (t) {
      e.__observe(this, t);
      var i = this._goto(t);
      if (e.isMapLike(i.value)) return i.parts.length ? i.value._get(i.parts) : i.value;
      if (i.value && a.canMakeObserve(i.value)) {
        var s = this.__type(i.value, i.prop);
        return this._addChild(t, s, function () {
          i.parent[i.prop] = s
        }), s
      }
      return void 0 !== i.value ? i.value : this.__get(t)
    },
    _set: function (t, a, i) {
      var s = this._goto(t, i);
      if (e.isMapLike(s.value) && s.parts.length) return s.value._set(s.parts, a);
      if (s.parts.length) throw new Error("can.LazyMap: object does not exist");
      this.__set(t, a, s.value, s)
    },
    __set: function (t, i, s, r, n) {
      if (n = n || !0, i !== s) {
        var h = r.parent.hasOwnProperty(r.prop) ? "set" : "add";
        if (n && a.canMakeObserve(i)) {
          i = this.__type(i, t);
          var o = this;
          this._addChild(t, i, function () {
            o.___set(t, i, r)
          })
        } else this.___set(t, i, r);
        "add" === h && e.batch.trigger(this, r.path.length ? r.path.join(".") + ".__keys" : "__keys", void 0), this._triggerChange(t, h, i, s)
      }
    },
    ___set: function (t, a, i) {
      var s = this._computedAttrs[t];
      s ? s.compute(a) : i ? i.parent[i.prop] = a : this._data[t] = a, e.isFunction(this.constructor.prototype[t]) || (this[t] = a)
    },
    _getAttrs: function () {
      return a.serialize(this, "attr", {})
    },
    _setAttrs: function (t, i) {
      t = e.extend({}, t);
      var s, r, n, h = this;
      e.batch.start(), this.each(function (s, o) {
        return n = t[o], r = h._goto(o, !0), void 0 === n ? void(i && h.removeAttr(o)) : (!e.isMapLike(s) && a.canMakeObserve(s) && (s = h.attr(o)), n instanceof e.Map ? h.__set(o, n, s, r) : e.isMapLike(s) && a.canMakeObserve(n) && s.attr ? s.attr(n, i) : s !== n && h.__set(o, n, s, r), void delete t[o])
      });
      for (s in t) n = t[s], this._set(s, n, !0);
      return e.batch.stop(), this
    }
  }), e.LazyList = e.List.extend({
    Map: e.LazyMap
  }, {
    setup: function () {
      e.List.prototype.setup.apply(this, arguments), this._nestedReference = new e.NestedReference(this)
    }
  }), e.LazyMap
});
define("can/map/delegate/delegate", ["can/util/util", "can/map/map"], function (t) {
  var e = function (t, e) {
      var a, r = t.length,
        l = 0,
        s = [];
      for (l; r > l; l++) {
        if (a = e[l], "string" != typeof a) return null;
        if ("**" === t[l]) return e.join(".");
        if ("*" === t[l]) s.push(a);
        else {
          if (a !== t[l]) return null;
          s.push(a)
        }
      }
      return s.join(".")
    },
    a = function (a, r, l, s, n) {
      var i, u, c, h, p, o = r.split("."),
        g = (this._observe_delegates || []).slice(0);
      a.attr = r, a.lastAttr = o[o.length - 1];
      for (var d = 0; i = g[d++];)
        if (!(a.batchNum && i.batchNum === a.batchNum || i.undelegated)) {
          h = void 0, p = !0;
          for (var v = 0; v < i.attrs.length; v++) u = i.attrs[v], c = e(u.parts, o), c && (h = c), u.value && p ? p = u.value === "" + this.attr(u.attr) : p && i.attrs.length > 1 && (p = void 0 !== this.attr(u.attr));
          if (h && p) {
            var b = r.replace(h + ".", "");
            a.batchNum && (i.batchNum = a.batchNum), "change" === i.event ? (r = b, a.curAttr = h, i.callback.apply(this.attr(h), t.makeArray(arguments))) : i.event === l ? i.callback.apply(this.attr(h), [a, s, n, b]) : "set" === i.event && "add" === l && i.callback.apply(this.attr(h), [a, s, n, b])
          }
        }
    };
  return t.extend(t.Map.prototype, {
    delegate: function (e, r, l) {
      e = t.trim(e);
      for (var s, n = this._observe_delegates || (this._observe_delegates = []), i = [], u = /([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g; null !== (s = u.exec(e));) s[2] && t.inArray(s[2].substr(0, 1), ['"', "'"]) >= 0 && (s[2] = s[2].substr(1, -1)), i.push({
        attr: s[1],
        parts: s[1].split("."),
        value: s[2],
        or: "," === s[3]
      });
      return n.push({
        selector: e,
        attrs: i,
        callback: l,
        event: r
      }), 1 === n.length && this.bind("change", a), this
    },
    undelegate: function (e, r, l) {
      e = e && t.trim(e);
      var s, n = 0,
        i = this._observe_delegates || [];
      if (e)
        for (; n < i.length;) s = i[n], s.callback === l || !l && s.selector === e ? (s.undelegated = !0, i.splice(n, 1)) : n++;
      else i = [];
      return i.length || this.unbind("change", a), this
    }
  }), t.Map.prototype.delegate.matches = e, t.Map
});
define("can/map/setter/setter", ["can/util/util", "can/map/map"], function (t) {
  t.classize = function (a, i) {
    for (var r = a.split(t.undHash), n = 0; n < r.length; n++) r[n] = t.capitalize(r[n]);
    return r.join(i || "")
  };
  var a = t.classize,
    i = t.Map.prototype,
    r = i.__set;
  return i.__set = function (i, n, e, s, c) {
    var l = a(i),
      o = "set" + l,
      u = function (a) {
        var r = c && c.call(p, a);
        return r !== !1 && t.trigger(p, "error", [i, a], !0), !1
      },
      p = this;
    return this[o] ? (t.batch.start(), n = this[o](n, function (t) {
      r.call(p, i, t, e, s, u)
    }, u), void 0 === n ? void t.batch.stop() : (r.call(p, i, n, e, s, u), t.batch.stop(), this)) : (r.call(p, i, n, e, s, u), this)
  }, t.Map
});
define("can/map/attributes/attributes", ["can/util/util", "can/map/map_helpers", "can/map/map", "can/list/list"], function (t, e, n) {
  t.each([t.Map, t.Model], function (e) {
    if (void 0 !== e) {
      var n = function (t) {
        return "object" == typeof t && null !== t && t
      };
      t.extend(e, {
        attributes: {},
        convert: {
          date: function (t) {
            var e = typeof t;
            return "string" === e ? (t = Date.parse(t), isNaN(t) ? null : new Date(t)) : "number" === e ? new Date(t) : t
          },
          number: function (t) {
            return parseFloat(t)
          },
          "boolean": function (t) {
            return "false" !== t && "0" !== t && t ? !0 : !1
          },
          "default": function (e, n, r, i) {
            if (t.Map.prototype.isPrototypeOf(i.prototype) && "function" == typeof i.model && "function" == typeof i.models) return i[t.isArray(e) ? "models" : "model"](e);
            if (t.Map.prototype.isPrototypeOf(i.prototype)) return t.isArray(e) && "function" == typeof i.List ? new i.List(e) : new i(e);
            if ("function" == typeof i) return i(e, n);
            var a, o = t.getObject(i),
              u = window;
            return i.indexOf(".") >= 0 && (a = i.substring(0, i.lastIndexOf(".")), u = t.getObject(a)), "function" == typeof o ? o.call(u, e, n) : e
          }
        },
        serialize: {
          "default": function (t, e) {
            return n(t) && t.serialize ? t.serialize() : t
          },
          date: function (t) {
            return t && t.getTime()
          }
        }
      });
      var r = e.setup;
      e.setup = function (e, n, i, a) {
        var o = this;
        r.call(o, e, n, i, a), t.each(["attributes"], function (t) {
          o[t] && e[t] !== o[t] || (o[t] = {})
        }), t.each(["convert", "serialize"], function (n) {
          e[n] !== o[n] && (o[n] = t.extend({}, e[n], o[n]))
        })
      }
    }
  }), t.Map.prototype.__convert = function (t, e) {
    var n, r, i = this.constructor,
      a = this.__get(t);
    return i.attributes && (n = i.attributes[t], r = i.convert[n] || i.convert["default"]), null !== e && n ? r.call(i, e, a, function () {}, n) : e
  };
  var r = t.Map.prototype.___serialize;
  t.Map.prototype.___serialize = function (t, e) {
    var n = this.constructor,
      i = n.attributes ? n.attributes[t] : 0,
      a = n.serialize ? n.serialize[i] : 0;
    return e && "function" == typeof e.serialize ? r.call(this, t, e) : a ? a(e, i) : r.apply(this, arguments)
  };
  var i = t.Map.prototype.serialize;
  return t.Map.prototype.serialize = function (t) {
    var e = i.apply(this, arguments);
    return t ? e[t] : e
  }, t.Map
});
define("can/map/validations/validations", ["can/util/util", "can/map/map"], function (t) {
  var n = function (n, i, a) {
      if (a || (a = i, i = {}), i = i || {}, n = "string" == typeof n ? [n] : t.makeArray(n), !i.testIf || i.testIf.call(this)) {
        var e = this;
        t.each(n, function (t) {
          e.validations[t] || (e.validations[t] = []), e.validations[t].push(function (n) {
            var e = a.call(this, n, t);
            return void 0 === e ? void 0 : i.message || e
          })
        })
      }
    },
    i = t.Map.prototype.__set;
  return t.Map.prototype.__set = function (n, a, e, o, s) {
    var r = this,
      l = r.constructor.validations,
      u = function (i) {
        var a = s && s.call(r, i);
        return a !== !1 && t.trigger(r, "error", [n, i], !0), !1
      };
    if (i.call(r, n, a, e, o, u), l && l[n]) {
      var c = r.errors(n);
      c && u(c)
    }
    return this
  }, t.each([t.Map, t.Model], function (i) {
    if (void 0 !== i) {
      var a = i.setup;
      t.extend(i, {
        setup: function (t) {
          a.apply(this, arguments), this.validations && t.validations !== this.validations || (this.validations = {})
        },
        validate: n,
        validationMessages: {
          format: "is invalid",
          inclusion: "is not a valid option (perhaps out of range)",
          lengthShort: "is too short",
          lengthLong: "is too long",
          presence: "can't be empty",
          range: "is out of range",
          numericality: "must be a number"
        },
        validateFormatOf: function (t, i, a) {
          n.call(this, t, a, function (t) {
            return "undefined" != typeof t && null !== t && "" !== t && null === String(t).match(i) ? this.constructor.validationMessages.format : void 0
          })
        },
        validateInclusionOf: function (t, i, a) {
          n.call(this, t, a, function (t) {
            if ("undefined" != typeof t) {
              for (var n = 0; n < i.length; n++)
                if (i[n] === t) return;
              return this.constructor.validationMessages.inclusion
            }
          })
        },
        validateLengthOf: function (t, i, a, e) {
          n.call(this, t, e, function (t) {
            return ("undefined" == typeof t || null === t) && i > 0 || "undefined" != typeof t && null !== t && t.length < i ? this.constructor.validationMessages.lengthShort + " (min=" + i + ")" : "undefined" != typeof t && null !== t && t.length > a ? this.constructor.validationMessages.lengthLong + " (max=" + a + ")" : void 0
          })
        },
        validatePresenceOf: function (t, i) {
          n.call(this, t, i, function (t) {
            return "undefined" == typeof t || "" === t || null === t ? this.constructor.validationMessages.presence : void 0
          })
        },
        validateRangeOf: function (t, i, a, e) {
          n.call(this, t, e, function (t) {
            return ("undefined" == typeof t || null === t) && i > 0 || "undefined" != typeof t && null !== t && (i > t || t > a) ? this.constructor.validationMessages.range + " [" + i + "," + a + "]" : void 0
          })
        },
        validatesNumericalityOf: function (t) {
          n.call(this, t, function (t) {
            var n = !isNaN(parseFloat(t)) && isFinite(t);
            return n ? void 0 : this.constructor.validationMessages.numericality
          })
        }
      })
    }
  }), t.extend(t.Map.prototype, {
    errors: function (n, i) {
      n && (n = t.isArray(n) ? n : [n]);
      var a = {},
        e = this,
        o = function (n, o) {
          t.each(o, function (t) {
            var o = t.call(e, r ? i : e.attr(n));
            o && (a[n] || (a[n] = []), a[n].push(o))
          })
        },
        s = this.constructor.validations || {},
        r = n && 1 === n.length && 2 === arguments.length;
      return t.each(n || s, function (t, n) {
        "number" == typeof n && (n = t, t = s[n]), o(n, t || [])
      }), t.isEmptyObject(a) ? null : r ? a[n[0]] : a
    }
  }), t.Map
});
define("can/map/list/list", ["can/util/util", "can/map/map", "can/list/list", "can/compute/compute"], function (n) {
  return n.extend(n.List.prototype, {
    filter: function (i) {
      var t = new this.constructor,
        c = this,
        e = function (e, u) {
          var o = function (n, i) {
              var c = t.indexOf(e);
              i || -1 === c || t.splice(c, 1), i && -1 === c && t.push(e)
            },
            a = n.compute(function () {
              return i(e, c.indexOf(e), c)
            });
          a.bind("change", o), o(null, a())
        };
      return this.bind("add", function (i, t, c) {
        n.each(t, function (n, i) {
          e(n, c + i)
        })
      }), this.bind("remove", function (i, c, e) {
        n.each(c, function (n, i) {
          var c = t.indexOf(n); - 1 !== c && t.splice(c, 1)
        })
      }), this.forEach(e), t
    },
    map: function (i) {
      var t = new n.List,
        c = this,
        e = function (e, u) {
          var o = n.compute(function () {
            return i(e, u, c)
          });
          o.bind("change", function (n, i) {
            t.splice(u, 1, i)
          }), t.splice(u, 0, o())
        };
      return this.forEach(e), this.bind("add", function (i, t, c) {
        n.each(t, function (n, i) {
          e(n, c + i)
        })
      }), this.bind("remove", function (n, i, c) {
        t.splice(c, i.length)
      }), t
    }
  }), n.List
});
define("can/map/define/define", ["can/util/util", "can/map/map_helpers", "can/map/map", "can/compute/compute"], function (t, e) {
  if (!t.define) {
    var n = t.define = {},
      i = function (t, e, n) {
        var i, r;
        if (n) {
          if (i = n[e], r = n["*"], i && void 0 !== i[t]) return i[t];
          if (r && void 0 !== r[t]) return r[t]
        }
      };
    e.define = function (e) {
      var i = e.prototype.define;
      e.defaultGenerators = {};
      for (var r in i) {
        var a = i[r].type;
        "string" == typeof a && "object" == typeof n.types[a] && (delete i[r].type, t.extend(i[r], n.types[a])), "value" in i[r] && ("function" == typeof i[r].value ? e.defaultGenerators[r] = i[r].value : e.defaults[r] = i[r].value), "function" == typeof i[r].Value && ! function (t) {
          e.defaultGenerators[r] = function () {
            return new t
          }
        }(i[r].Value)
      }
    };
    var r = t.Map.prototype._setupDefaults;
    t.Map.prototype._setupDefaults = function (t) {
      var e = r.call(this),
        n = {},
        i = this.constructor,
        a = this._get;
      this._get = function (t) {
        var i = -1 !== t.indexOf(".") ? t.substr(0, t.indexOf(".")) : t;
        return i in e && !(i in n) && (this.attr(i, e[i]), n[i] = !0), a.apply(this, arguments)
      };
      for (var o in i.defaultGenerators) t && o in t || (e[o] = i.defaultGenerators[o].call(this));
      return delete this._get, e
    };
    var a = t.Map.prototype,
      o = a.__set;
    a.__set = function (e, n, r, a, s) {
      var u = function (n) {
          var i = s && s.call(f, n);
          return i !== !1 && t.trigger(f, "error", [e, n], !0), !1
        },
        f = this,
        l = i("set", e, this.define),
        c = i("get", e, this.define);
      if (l) {
        t.batch.start();
        var p = !1,
          d = l.call(this, n, function (t) {
            c ? f[e](t) : o.call(f, e, t, r, a, u), p = !0
          }, u, c ? this._computedAttrs[e].compute.computeInstance.lastSetValue.get() : r);
        return c ? (void 0 !== d && !p && l.length >= 1 && this._computedAttrs[e].compute(d), void t.batch.stop()) : void 0 === d && !p && l.length >= 1 ? void t.batch.stop() : (p || o.call(f, e, 0 === l.length && void 0 === d ? n : d, r, a, u), t.batch.stop(), this)
      }
      return o.call(f, e, n, r, a, u), this
    }, n.types = {
      date: function (t) {
        var e = typeof t;
        return "string" === e ? (t = Date.parse(t), isNaN(t) ? null : new Date(t)) : "number" === e ? new Date(t) : t
      },
      number: function (t) {
        return null == t ? t : +t
      },
      "boolean": function (t) {
        return "false" !== t && "0" !== t && t ? !0 : !1
      },
      htmlbool: function (t) {
        return "string" == typeof t || !!t
      },
      "*": function (t) {
        return t
      },
      string: function (t) {
        return null == t ? t : "" + t
      },
      compute: {
        set: function (t, e, n, i) {
          return t.isComputed ? t : i && i.isComputed ? (i(t), i) : t
        },
        get: function (t) {
          return t && t.isComputed ? t() : t
        }
      }
    };
    var s = a.__type;
    a.__type = function (e, r) {
      var a = i("type", r, this.define),
        o = i("Type", r, this.define),
        u = e;
      return "string" == typeof a && (a = n.types[a]), a || o ? (a && (u = a.call(this, u, r)), !o || u instanceof o || (u = new o(u)), u) : (t.isPlainObject(u) && u.define && (u = t.Map.extend(u), u = new u), s.call(this, u, r))
    };
    var u = a.__remove;
    a.__remove = function (e, n) {
      var r, a = i("remove", e, this.define);
      return a ? (t.batch.start(), r = a.call(this, n), r === !1 ? void t.batch.stop() : (r = u.call(this, e, n), t.batch.stop(), r)) : u.call(this, e, n)
    };
    var f = a._setupComputedProperties;
    a._setupComputedProperties = function () {
      f.apply(this, arguments);
      for (var n in this.define) {
        var i = this.define[n],
          r = i.get;
        r && e.addComputedAttr(this, n, t.compute.async(void 0, r, this))
      }
    };
    var l = a.___serialize;
    a.___serialize = function (t, e) {
      return c(this, t, e)
    };
    var c = function (t, e, n) {
        var r = "*" === e ? !1 : i("serialize", e, t.define);
        return void 0 === r ? l.call(t, e, n) : r !== !1 ? "function" == typeof r ? r.call(t, n, e) : l.call(t, e, n) : void 0
      },
      p = a.serialize;
    return a.serialize = function (t) {
      var e = p.apply(this, arguments);
      if (t) return e;
      var n, i;
      for (var r in this.define) r in e || (n = this.define && this.define[r] && this.define[r].serialize, n && (i = c(this, r, this.attr(r)), void 0 !== i && (e[r] = i)));
      return e
    }, t.define
  }
});
define("can/list/sort/sort", ["can/util/util", "can/list/list"], function (t) {
  var r = t.List._bubbleRule;
  t.List._bubbleRule = function (a, i) {
    var s = r.apply(this, arguments);
    return i.comparator && -1 === t.inArray("change", s) && s.push("change"), s
  };
  var a = t.List.prototype,
    i = a._changes || function () {},
    s = a.setup,
    e = a.unbind;
  return t.extend(a, {
      setup: function (r, a) {
        s.apply(this, arguments), this.bind("change", t.proxy(this._changes, this)), this._comparatorBound = !1, this.bind("comparator", t.proxy(this._comparatorUpdated, this)), delete this._init, this.comparator && this.sort()
      },
      _comparatorUpdated: function (t, r) {
        r || 0 === r ? (this.sort(), this._bindings > 0 && !this._comparatorBound && this.bind("change", this._comparatorBound = function () {})) : this._comparatorBound && (e.call(this, "change", this._comparatorBound), this._comparatorBound = !1)
      },
      unbind: function (t, r) {
        var a = e.apply(this, arguments);
        return this._comparatorBound && 1 === this._bindings && (e.call(this, "change", this._comparatorBound), this._comparatorBound = !1), a
      },
      _comparator: function (t, r) {
        var a = this.comparator;
        return a && "function" == typeof a ? a(t, r) : "string" == typeof t && "string" == typeof r && "".localeCompare ? t.localeCompare(r) : t === r ? 0 : r > t ? -1 : 1
      },
      _changes: function (r, a, s, e, o) {
        var n = ("" + a).indexOf(".");
        if (this.comparator && -1 !== n) {
          if (r.batchNum) return r.batchNum === this._lastProcessedBatchNum ? void 0 : (this.sort(), void(this._lastProcessedBatchNum = r.batchNum));
          var h = +a.substr(0, n),
            p = this[h],
            c = a.substr(n + 1);
          if ("undefined" != typeof p && ("string" != typeof this.comparator || 0 === this.comparator.indexOf(c))) {
            var u = this._getRelativeInsertIndex(p, h);
            u !== h && (this._swapItems(h, u), t.batch.trigger(this, "length", [this.length]))
          }
        }
        i.apply(this, arguments)
      },
      _getInsertIndex: function (t, r, a) {
        var i, s, e, o, n = 0,
          h = this._getComparatorValue(t);
        for (r = "number" == typeof r ? r : 0, a = "number" == typeof a ? a : this.length - 1; a >= r;) o = (r + a) / 2 | 0, e = this[o], i = this._getComparatorValue(e), s = this._comparator(h, i), 0 > s ? a = o - 1 : s >= 0 && (r = o + 1, n = r);
        return n
      },
      _getRelativeInsertIndex: function (t, r) {
        var a, i = this._getInsertIndex(t),
          s = r + 1,
          e = this._getComparatorValue(t);
        return i >= r && (i -= 1), i > r && s < this.length && (a = this._getComparatorValue(this[s]), 0 === this._comparator(e, a)) ? r : i
      },
      _getComparatorValue: function (t, r) {
        var a = "string" == typeof r ? r : this.comparator;
        return t && a && "string" == typeof a && (t = "function" == typeof t[a] ? t[a]() : t.attr(a)), t
      },
      _getComparatorValues: function () {
        var t = this,
          r = [];
        return this.each(function (a, i) {
          r.push(t._getComparatorValue(a))
        }), r
      },
      sort: function (r, a) {
        for (var i, s, e, o, n, h, p = t.isFunction(r) ? r : this._comparator, c = 0, u = this.length; u - 1 > c; c++) {
          for (h = c, o = !0, e = void 0, n = c + 1; u > n; n++) i = this._getComparatorValue(this.attr(n), r), s = this._getComparatorValue(this.attr(h), r), p.call(this, i, s) < 0 && (o = !1, h = n), e && p.call(this, i, e) < 0 && (o = !1), e = i;
          if (o) break;
          h !== c && this._swapItems(h, c, a)
        }
        return a || t.batch.trigger(this, "length", [this.length]), this
      },
      _swapItems: function (r, a, i) {
        var s = this[r];
        [].splice.call(this, r, 1), [].splice.call(this, a, 0, s), i || t.batch.trigger(this, "move", [s, a, r])
      }
    }), t.each({
      push: "length",
      unshift: 0
    }, function (r, a) {
      var i = t.List.prototype,
        s = i[a];
      i[a] = function () {
        if (this.comparator && arguments.length) {
          for (var r, a, i = t.makeArray(arguments), e = i.length, o = 0; e > o;) a = t.bubble.set(this, o, this.__type(i[o], o)), r = this._getInsertIndex(a), Array.prototype.splice.apply(this, [r, 0, a]), this._triggerChange("" + r, "add", [a], void 0), o++;
          return t.batch.trigger(this, "reset", [i]), this
        }
        return s.apply(this, arguments)
      }
    }),
    function () {
      var r = t.List.prototype,
        a = r.splice;
      r.splice = function (i, s) {
        var e = t.makeArray(arguments);
        return this.comparator ? (a.call(this, i, s), e.splice(0, 2), void r.push.apply(this, e)) : a.apply(this, e)
      }
    }(), t.Map
});
define("can/control/plugin/plugin", ["jquery/dist/jquery", "can/util/util", "can/control/control"], function (t, n) {
  t = t || window.$;
  var o, r = function (t, n) {
      var r = t.constructor.pluginName || t.constructor._shortName;
      for (o = 0; o < n.length; o++)
        if ("string" == typeof n[o] ? r === n[o] : t instanceof n[o]) return !0;
      return !1
    },
    i = n.makeArray,
    e = n.Control.setup;
  return n.Control.setup = function () {
    if (this !== n.Control) {
      var t = this.pluginName || this._fullName;
      "can_control" !== t && this.plugin(t), e.apply(this, arguments)
    }
  }, t.fn.extend({
    controls: function () {
      var t, o, e = i(arguments),
        u = [];
      return this.each(function () {
        if (t = n.$(this).data("controls"))
          for (var i = 0; i < t.length; i++) o = t[i], (!e.length || r(o, e)) && u.push(o)
      }), u
    },
    control: function (t) {
      return this.controls.apply(this, arguments)[0]
    }
  }), n.Control.plugin = function (o) {
    var r = this;
    t.fn[o] || (t.fn[o] = function (o) {
      var e, u = i(arguments),
        s = "string" == typeof o && t.isFunction(r.prototype[o]),
        a = u[0];
      return this.each(function () {
        var t = n.$(this).control(r);
        t ? s ? e = t[a].apply(t, u.slice(1)) : t.update.apply(t, u) : r.newInstance.apply(r, [this].concat(u))
      }), void 0 !== e ? e : this
    })
  }, n.Control.prototype.update = function (t) {
    n.extend(this.options, t), this.on()
  }, n
});
define("can/view/modifiers/modifiers", ["jquery/dist/jquery", "can/util/util", "can/view/view"], function (n, e) {
  n = n || window.$;
  var t, i, r, f, o, u, a = {
    val: !0,
    text: !0
  };
  return t = function (t) {
    var f = n.fn[t];
    n.fn[t] = function () {
      var n, o, c, l = e.makeArray(arguments),
        s = this;
      if (e.isDeferred(l[0])) return l[0].done(function (n) {
        i.call(s, [n], f)
      }), this;
      if (r(l)) {
        if (n = u(l)) return o = l[n], l[n] = function (n) {
          i.call(s, [n], f), o.call(s, n)
        }, e.view.apply(e.view, l), this;
        if (c = e.view.apply(e.view, l), e.isDeferred(c)) return c.done(function (n) {
          i.call(s, [n], f)
        }), this;
        l = [c]
      }
      return a[t] ? f.apply(this, l) : i.call(this, l, f)
    }
  }, i = function (n, t) {
    var i;
    for (var r in e.view.hookups) break;
    return r && n[0] && f(n[0]) && (n[0] = e.view.frag(n[0]).childNodes), i = t.apply(this, n)
  }, r = function (n) {
    var e = typeof n[1];
    return "string" == typeof n[0] && ("object" === e || "function" === e) && !o(n[1])
  }, o = function (n) {
    return n.nodeType || n[0] && n[0].nodeType
  }, f = function (n) {
    return o(n) ? !0 : "string" == typeof n ? (n = e.trim(n), "<" === n.substr(0, 1) && ">" === n.substr(n.length - 1, 1) && n.length >= 3) : !1
  }, u = function (n) {
    return "function" == typeof n[3] ? 3 : "function" == typeof n[2] && 2
  }, n.fn.hookup = function () {
    return e.view.frag(this), this
  }, e.each(["prepend", "append", "after", "before", "text", "html", "replaceWith", "val"], function (n) {
    t(n)
  }), e
});
define("can/util/fixture/fixture", ["can/util/util", "can/util/string/string", "can/util/object/object"], function (e) {
  if (!e.Object) throw new Error("can.fixture depends on can.Object. Please include it before can.fixture.");
  var t = function (t) {
      if ("undefined" != typeof steal) {
        if (steal.joinURIs) {
          var r = steal.config("baseUrl"),
            n = steal.joinURIs(r, t);
          return n
        }
        return e.isFunction(steal.config) ? steal.System ? steal.joinURIs(steal.config("baseURL"), t) : steal.config().root.mapJoin(t).toString() : steal.root.join(t).toString()
      }
      return (e.fixture.rootUrl || "") + t
    },
    r = function (r, n) {
      if (e.fixture.on && r.fixture !== !1) {
        var i = function () {};
        r.type = r.type || r.method || "GET";
        var u = f(r);
        if (!r.fixture) return void("file:" === window.location.protocol && i("ajax request to " + r.url + ", no fixture found"));
        if ("string" == typeof r.fixture && e.fixture[r.fixture] && (r.fixture = e.fixture[r.fixture]), "string" == typeof r.fixture) {
          var a = r.fixture;
          /^\/\//.test(a) && (a = t(r.fixture.substr(2))), u && (a = e.sub(a, u)), delete r.fixture, r.url = a, r.data = null, r.type = "GET", r.error || (r.error = function (e, t, r) {
            throw new Error("fixtures.js Error " + t + " " + r)
          })
        } else r.dataTypes && r.dataTypes.splice(0, 0, "fixture"), u && n && (n.data = n.data || {}, e.extend(n.data, u))
      }
    },
    n = function (e, t, r, n) {
      return "number" != typeof e && (n = t, r = e, t = "success", e = 200), "string" != typeof t && (n = r, r = t, t = "success"), e >= 400 && 599 >= e && (this.dataType = "text"), [e, t, i(this, r), n]
    },
    i = function (e, t) {
      var r = e.dataTypes ? e.dataTypes[0] : e.dataType || "json";
      if (!t || !t[r]) {
        var n = {};
        n[r] = t, t = n
      }
      return t
    };
  if (e.ajaxPrefilter && e.ajaxTransport) e.ajaxPrefilter(r), e.ajaxTransport("fixture", function (t, r) {
    t.dataTypes.shift();
    var u, a = !1;
    return {
      send: function (o, f) {
        u = setTimeout(function () {
          var e = function () {
              a === !1 && f.apply(null, n.apply(t, arguments))
            },
            u = t.fixture(r, e, o, t);
          void 0 !== u && f(200, "success", i(t, u), {})
        }, e.fixture.delay)
      },
      abort: function () {
        a = !0, clearTimeout(u)
      }
    }
  });
  else {
    var u = e.ajax;
    e.ajax = function (t) {
      if (r(t, t), t.fixture) {
        var i, a = new e.Deferred,
          o = !1;
        return a.getResponseHeader = function () {}, a.then(t.success, t.fail), a.abort = function () {
          clearTimeout(i), o = !0, a.reject(a)
        }, i = setTimeout(function () {
          var e = function () {
              var e = n.apply(t, arguments),
                r = e[0];
              (r >= 200 && 300 > r || 304 === r) && o === !1 ? a.resolve(e[2][t.dataType]) : a.reject(a, "error", e[1])
            },
            r = t.fixture(t, e, t.headers, t);
          void 0 !== r && a.resolve(r)
        }, e.fixture.delay), a
      }
      return u(t)
    }
  }
  var a = [],
    o = function (e, t) {
      for (var r = 0; r < a.length; r++)
        if (c._similar(e, a[r], t)) return r;
      return -1
    },
    f = function (e) {
      var t = o(e);
      return t > -1 ? (e.fixture = a[t].fixture, c._getData(a[t].url, e.url)) : void 0
    },
    s = function (e) {
      var t = e.data.id;
      return void 0 === t && "number" == typeof e.data && (t = e.data), void 0 === t && e.url.replace(/\/(\d+)(\/|$|\.)/g, function (e, r) {
        t = r
      }), void 0 === t && (t = e.url.replace(/\/(\w+)(\/|$|\.)/g, function (e, r) {
        "update" !== r && (t = r)
      })), void 0 === t && (t = Math.round(1e3 * Math.random())), t
    },
    c = e.fixture = function (t, r) {
      if (void 0 !== r) {
        if ("string" == typeof t) {
          var n = t.match(/(GET|POST|PUT|DELETE) (.+)/i);
          t = n ? {
            url: n[2],
            type: n[1]
          } : {
            url: t
          }
        }
        var i = o(t, !!r);
        if (i > -1 && a.splice(i, 1), null == r) return;
        t.fixture = r, a.push(t)
      } else e.each(t, function (e, t) {
        c(t, e)
      })
    },
    l = e.replacer;
  return e.extend(e.fixture, {
    _similar: function (t, r, n) {
      return n ? e.Object.same(t, r, {
        fixture: null
      }) : e.Object.subset(t, r, e.fixture._compare)
    },
    _compare: {
      url: function (e, t) {
        return !!c._getData(t, e)
      },
      fixture: null,
      type: "i"
    },
    _getData: function (t, r) {
      var n = [],
        i = t.replace(".", "\\.").replace("?", "\\?"),
        u = new RegExp(i.replace(l, function (e, t) {
          return n.push(t), "([^/]+)"
        }) + "$").exec(r),
        a = {};
      return u ? (u.shift(), e.each(n, function (e) {
        a[e] = u.shift()
      }), a) : null
    },
    store: function (t, r, n) {
      var i, u, a, o = 0,
        f = function (e) {
          for (var t = 0; t < u.length; t++)
            if (e == u[t].id) return u[t]
        },
        c = {};
      if (e.isArray(t) && "string" == typeof t[0] ? (i = t, t = r, r = n, n = arguments[3]) : "string" == typeof t && (i = [t + "s", t], t = r, r = n, n = arguments[3]), "number" == typeof t) u = [], a = function () {
        u = [];
        for (var n = 0; t > n; n++) {
          var a = r(n, u);
          a.id || (a.id = n), o = Math.max(a.id + 1, o + 1) || u.length, u.push(a)
        }
        e.isArray(i) && (e.fixture["~" + i[0]] = u, e.fixture["-" + i[0]] = c.findAll, e.fixture["-" + i[1]] = c.findOne, e.fixture["-" + i[1] + "Update"] = c.update, e.fixture["-" + i[1] + "Destroy"] = c.destroy, e.fixture["-" + i[1] + "Create"] = c.create)
      };
      else {
        n = r;
        var l = t;
        a = function () {
          u = l.slice(0)
        }
      }
      return e.extend(c, {
        findAll: function (t) {
          t = t || {};
          var r = u.slice(0);
          t.data = t.data || {}, e.each((t.data.order || []).slice(0).reverse(), function (e) {
            var t = e.split(" ");
            r = r.sort(function (e, r) {
              return "ASC" !== t[1].toUpperCase() ? e[t[0]] < r[t[0]] ? 1 : e[t[0]] === r[t[0]] ? 0 : -1 : e[t[0]] < r[t[0]] ? -1 : e[t[0]] === r[t[0]] ? 0 : 1
            })
          }), e.each((t.data.group || []).slice(0).reverse(), function (e) {
            var t = e.split(" ");
            r = r.sort(function (e, r) {
              return e[t[0]] > r[t[0]]
            })
          });
          var i = parseInt(t.data.offset, 10) || 0,
            a = parseInt(t.data.limit, 10) || u.length - i,
            o = 0;
          for (var f in t.data)
            if (o = 0, void 0 !== t.data[f] && (-1 !== f.indexOf("Id") || -1 !== f.indexOf("_id")))
              for (; o < r.length;) t.data[f] != r[o][f] ? r.splice(o, 1) : o++;
          if ("function" == typeof n)
            for (o = 0; o < r.length;) n(r[o], t) ? o++ : r.splice(o, 1);
          else if ("object" == typeof n)
            for (o = 0; o < r.length;) e.Object.subset(r[o], t.data, n) ? o++ : r.splice(o, 1);
          return {
            count: r.length,
            limit: t.data.limit,
            offset: t.data.offset,
            data: r.slice(i, i + a)
          }
        },
        findOne: function (e, t) {
          var r = f(s(e));
          return "undefined" == typeof r ? t(404, "Requested resource not found") : void t(r)
        },
        update: function (t, r) {
          var n = s(t),
            i = f(n);
          return "undefined" == typeof i ? r(404, "Requested resource not found") : (e.extend(i, t.data), void r({
            id: n
          }, {
            location: t.url || "/" + s(t)
          }))
        },
        destroy: function (e, t) {
          var r = s(e),
            n = f(r);
          if ("undefined" == typeof n) return t(404, "Requested resource not found");
          for (var i = 0; i < u.length; i++)
            if (u[i].id == r) {
              u.splice(i, 1);
              break
            }
          return {}
        },
        create: function (t, n) {
          var i = "function" == typeof r ? r(u.length, u) : {};
          e.extend(i, t.data), i.id || (i.id = o++), u.push(i), n({
            id: i.id
          }, {
            location: t.url + "/" + i.id
          })
        }
      }), a(), e.extend({
        getId: s,
        find: function (e) {
          return f(s(e))
        },
        reset: a
      }, c)
    },
    rand: function d(e, t, r) {
      if ("number" == typeof e) return "number" == typeof t ? e + Math.floor(Math.random() * (t - e)) : Math.floor(Math.random() * e);
      var n = d;
      if (void 0 === t) return n(e, n(e.length + 1));
      var i = [];
      e = e.slice(0), r || (r = t), r = t + Math.round(n(r - t));
      for (var u = 0; r > u; u++) i.push(e.splice(n(e.length), 1)[0]);
      return i
    },
    xhr: function (t) {
      return e.extend({}, {
        abort: e.noop,
        getAllResponseHeaders: function () {
          return ""
        },
        getResponseHeader: function () {
          return ""
        },
        open: e.noop,
        overrideMimeType: e.noop,
        readyState: 4,
        responseText: "",
        responseXML: null,
        send: e.noop,
        setRequestHeader: e.noop,
        status: 200,
        statusText: "OK"
      }, t)
    },
    on: !0
  }), e.fixture.delay = 200, e.fixture.rootUrl = t(""), e.fixture["-handleFunction"] = function (t) {
    return "string" == typeof t.fixture && e.fixture[t.fixture] && (t.fixture = e.fixture[t.fixture]), "function" == typeof t.fixture ? (setTimeout(function () {
      t.success && t.success.apply(null, t.fixture(t, "success")), t.complete && t.complete.apply(null, t.fixture(t, "complete"))
    }, e.fixture.delay), !0) : !1
  }, e.fixture.overwrites = a, e.fixture.make = e.fixture.store, e.fixture
});
! function () {
  window._define = window.define, window.define = window.define.orig
}();
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.submit(function (b) {
        function d() {
          var d;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
        }
        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    },
    valid: function () {
      var b, c;
      return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b
      })), b
    },
    removeAttrs: function (b) {
      var c = {},
        d = this;
      return a.each(b.split(/\s/), function (a, b) {
        c[b] = d.attr(b), d.removeAttr(b)
      }), c
    },
    rules: function (b, c) {
      var d, e, f, g, h, i, j = this[0];
      if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case "add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;
        case "remove":
          return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
          }), i) : (delete e[j.name], f)
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
        required: h
      }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
        remote: h
      })), g
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val())
    },
    filled: function (b) {
      return !!a.trim("" + a(b).val())
    },
    unchecked: function (b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function (a, b) {
        (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this[0].form, "validator"),
            d = "on" + b.type.replace(/^validate/, ""),
            e = c.settings;
          e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
        }
        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      },
      form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      },
      checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid()
      },
      element: function (b) {
        var c = this.clean(b),
          d = this.validationTargetFor(c),
          e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      },
      showErrors: function (b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];
          for (var c in b) this.errorList.push({
            message: b[c],
            element: this.findByName(c)[0]
          });
          this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      },
      resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      },
      objectLength: function (a) {
        var b, c = 0;
        for (b in a) c++;
        return c
      },
      hideErrors: function () {
        this.hideThese(this.toHide)
      },
      hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      },
      valid: function () {
        return 0 === this.size()
      },
      size: function () {
        return this.errorList.length
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {}
      },
      findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name
        }).length && b
      },
      elements: function () {
        var b = this,
          c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
      },
      clean: function (b) {
        return a(b)[0]
      },
      errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      },
      reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
      },
      prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      },
      prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a)
      },
      elementValue: function (b) {
        var c, d = a(b),
          e = b.type;
        return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
      },
      check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(),
          g = a.map(f, function (a, b) {
            return b
          }).length,
          h = !1,
          i = this.elementValue(b);
        for (d in f) {
          e = {
            method: d,
            parameters: f[d]
          };
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
          }
        }
        if (!h) return this.objectLength(f) && this.successList.push(b), !0
      },
      customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      },
      customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      },
      findDefined: function () {
        for (var a = 0; a < arguments.length; a++)
          if (void 0 !== arguments[a]) return arguments[a];
        return void 0
      },
      defaultMessage: function (b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
      },
      formatAndAdd: function (b, c) {
        var d = this.defaultMessage(b, c.method),
          e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
      },
      addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      },
      defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
          for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight)
          for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements())
      },
      invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element
        })
      },
      showLabel: function (b, c) {
        var d, e, f, g = this.errorsFor(b),
          h = this.idOrName(b),
          i = a(b).attr("aria-describedby");
        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
          c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
      },
      errorsFor: function (b) {
        var c = this.idOrName(b),
          d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
      },
      idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      },
      validationTargetFor: function (a) {
        return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
      },
      checkable: function (a) {
        return /radio|checkbox/i.test(a.type)
      },
      findByName: function (b) {
        return a(this.currentForm).find("[name='" + b + "']")
      },
      getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;
          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      },
      depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      },
      dependTypes: {
        "boolean": function (a) {
          return a
        },
        string: function (b, c) {
          return !!a(b, c.form).length
        },
        "function": function (a, b) {
          return a(b)
        }
      },
      optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      },
      startRequest: function (a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
      },
      stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      },
      previousValue: function (b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, "remote")
        })
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function (b) {
      var c = {},
        d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    attributeRules: function (b) {
      var c, d, e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function (b) {
      var c, d, e = {},
        f = a(b);
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
      return e
    },
    staticRules: function (b) {
      var c = {},
        d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;
            case "function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) ? e(c) : e
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
      },
      email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      },
      url: function (a, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
      },
      date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      },
      dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      },
      number: function (a, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      },
      digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      },
      creditcard: function (a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c, d, e = 0,
          f = 0,
          g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
        for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
      },
      minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d
      },
      maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || d >= e
      },
      rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      },
      min: function (a, b, c) {
        return this.optional(b) || a >= c
      },
      max: function (a, b, c) {
        return this.optional(b) || c >= a
      },
      range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      },
      equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          a(c).valid()
        }), b === e.val()
      },
      remote: function (b, c, d) {
        if (this.optional(c)) return "dependency-mismatch";
        var e, f, g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
          url: d
        } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          url: d,
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function (d) {
            var f, h, i, j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  }), a.format = function () {
    throw "$.format has been deprecated. Please use $.validator.format instead."
  };
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
      f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  }), a.extend(a.fn, {
    validateDelegate: function (b, c, d) {
      return this.bind(c, function (c) {
        var e = a(c.target);
        return e.is(b) ? d.apply(e, arguments) : void 0
      })
    }
  })
});
(function ($) {
  $.fn.inputFilter = function (filterName) {
    var keys = {
      zeroLine: 48,
      zeroCalc: 96,
      nineLine: 57,
      nineCalc: 105,
      backspace: 8,
      del: 46,
      leftArrow: 37,
      rightArrow: 39,
      tab: 9,
      dot: 191,
      dotNum: 110,
      dotCyr: 190
    };
    var filter = {
      number: function (key) {
        return ((key >= keys.zeroLine && key <= keys.nineLine) || (key >= keys.zeroCalc && key <= keys.nineCalc) || key == keys.backspace || key == keys.del || key == keys.leftArrow || key == keys.rightArrow || key == keys.tab)
      },
      float: function (key) {
        return ((key == keys.dot || key == keys.dotNum || key == keys.dotCyr) || (key >= keys.zeroLine && key <= keys.nineLine) || (key >= keys.zeroCalc && key <= keys.nineCalc) || key == keys.backspace || key == keys.del || key == keys.leftArrow || key == keys.rightArrow || key == keys.tab)
      }
    };
    return this.each(function () {
      var $this = $(this);
      $this.on('keydown', function (ev) {
        if (!filter[filterName](ev.keyCode)) {
          return false;
        }
      })
    })
  }
})(jQuery);
! function (n) {
  n.fn.inputNumber = function (u, t, a) {
    var i = function (n) {
      return "" === n ? n : (n > t && (n = t), u > n && (n = u), n)
    };
    return this.each(function () {
      var u = n(this);
      u.val(i(u.val())), u.on("keyup", function () {
        u.val(i(u.val()))
      }), u.on("change", function () {
        u.val(i(u.val())), a()
      })
    })
  }
}(jQuery);;
(function (g) {
  "function" === typeof define && define.amd ? define(["jquery"], function (q) {
    g(q, document, window, navigator)
  }) : g(jQuery, document, window, navigator)
})(function (g, q, h, t, v) {
  var u = 0,
    p = function () {
      var a = t.userAgent,
        b = /msie\s\d+/i;
      return 0 < a.search(b) && (a = b.exec(a).toString(), a = a.split(" ")[1], 9 > a) ? (g("html").addClass("lt-ie9"), !0) : !1
    }();
  Function.prototype.bind || (Function.prototype.bind = function (a) {
    var b = this,
      d = [].slice;
    if ("function" != typeof b) throw new TypeError;
    var c = d.call(arguments, 1),
      e = function () {
        if (this instanceof e) {
          var f = function () {};
          f.prototype = b.prototype;
          var f = new f,
            l = b.apply(f, c.concat(d.call(arguments)));
          return Object(l) === l ? l : f
        }
        return b.apply(a, c.concat(d.call(arguments)))
      };
    return e
  });
  Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
    var d;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
      e = c.length >>> 0;
    if (0 === e) return -1;
    d = +b || 0;
    Infinity === Math.abs(d) && (d = 0);
    if (d >= e) return -1;
    for (d = Math.max(0 <= d ? d : e - Math.abs(d), 0); d < e;) {
      if (d in c && c[d] === a) return d;
      d++
    }
    return -1
  });
  var r = function (a, b, d) {
    this.VERSION = "2.1.4";
    this.input = a;
    this.plugin_count = d;
    this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0;
    this.raf_id = this.old_min_interval = null;
    this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1;
    this.is_start = !0;
    this.is_click = this.is_resize = this.is_active = this.is_finish = !1;
    this.$cache = {
      win: g(h),
      body: g(q.body),
      input: g(a),
      cont: null,
      rs: null,
      min: null,
      max: null,
      from: null,
      to: null,
      single: null,
      bar: null,
      line: null,
      s_single: null,
      s_from: null,
      s_to: null,
      shad_single: null,
      shad_from: null,
      shad_to: null,
      edge: null,
      grid: null,
      grid_labels: []
    };
    this.coords = {
      x_gap: 0,
      x_pointer: 0,
      w_rs: 0,
      w_rs_old: 0,
      w_handle: 0,
      p_gap: 0,
      p_gap_left: 0,
      p_gap_right: 0,
      p_step: 0,
      p_pointer: 0,
      p_handle: 0,
      p_single_fake: 0,
      p_single_real: 0,
      p_from_fake: 0,
      p_from_real: 0,
      p_to_fake: 0,
      p_to_real: 0,
      p_bar_x: 0,
      p_bar_w: 0,
      grid_gap: 0,
      big_num: 0,
      big: [],
      big_w: [],
      big_p: [],
      big_x: []
    };
    this.labels = {
      w_min: 0,
      w_max: 0,
      w_from: 0,
      w_to: 0,
      w_single: 0,
      p_min: 0,
      p_max: 0,
      p_from_fake: 0,
      p_from_left: 0,
      p_to_fake: 0,
      p_to_left: 0,
      p_single_fake: 0,
      p_single_left: 0
    };
    var c = this.$cache.input;
    a = c.prop("value");
    var e;
    d = {
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !1,
      keyboard_step: 5,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " \u2014 ",
      input_values_separator: ";",
      disable: !1,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null
    };
    c = {
      type: c.data("type"),
      min: c.data("min"),
      max: c.data("max"),
      from: c.data("from"),
      to: c.data("to"),
      step: c.data("step"),
      min_interval: c.data("minInterval"),
      max_interval: c.data("maxInterval"),
      drag_interval: c.data("dragInterval"),
      values: c.data("values"),
      from_fixed: c.data("fromFixed"),
      from_min: c.data("fromMin"),
      from_max: c.data("fromMax"),
      from_shadow: c.data("fromShadow"),
      to_fixed: c.data("toFixed"),
      to_min: c.data("toMin"),
      to_max: c.data("toMax"),
      to_shadow: c.data("toShadow"),
      prettify_enabled: c.data("prettifyEnabled"),
      prettify_separator: c.data("prettifySeparator"),
      force_edges: c.data("forceEdges"),
      keyboard: c.data("keyboard"),
      keyboard_step: c.data("keyboardStep"),
      grid: c.data("grid"),
      grid_margin: c.data("gridMargin"),
      grid_num: c.data("gridNum"),
      grid_snap: c.data("gridSnap"),
      hide_min_max: c.data("hideMinMax"),
      hide_from_to: c.data("hideFromTo"),
      prefix: c.data("prefix"),
      postfix: c.data("postfix"),
      max_postfix: c.data("maxPostfix"),
      decorate_both: c.data("decorateBoth"),
      values_separator: c.data("valuesSeparator"),
      input_values_separator: c.data("inputValuesSeparator"),
      disable: c.data("disable")
    };
    c.values = c.values && c.values.split(",");
    for (e in c) c.hasOwnProperty(e) && (c[e] || 0 === c[e] || delete c[e]);
    a && (a = a.split(c.input_values_separator || b.input_values_separator || ";"), a[0] && a[0] == +a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), b && b.values && b.values.length ? (d.from = a[0] && b.values.indexOf(a[0]), d.to = a[1] && b.values.indexOf(a[1])) : (d.from = a[0] && +a[0], d.to = a[1] && +a[1]));
    g.extend(d, b);
    g.extend(d, c);
    this.options = d;
    this.validate();
    this.result = {
      input: this.$cache.input,
      slider: null,
      min: this.options.min,
      max: this.options.max,
      from: this.options.from,
      from_percent: 0,
      from_value: null,
      to: this.options.to,
      to_percent: 0,
      to_value: null
    };
    this.init()
  };
  r.prototype = {
    init: function (a) {
      this.no_diapason = !1;
      this.coords.p_step = this.convertToPercent(this.options.step, !0);
      this.target = "base";
      this.toggleInput();
      this.append();
      this.setMinMax();
      a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart());
      this.updateScene()
    },
    append: function () {
      this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>');
      this.$cache.input.prop("readonly", !0);
      this.$cache.cont = this.$cache.input.prev();
      this.result.slider = this.$cache.cont;
      this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
      this.$cache.rs = this.$cache.cont.find(".irs");
      this.$cache.min = this.$cache.cont.find(".irs-min");
      this.$cache.max = this.$cache.cont.find(".irs-max");
      this.$cache.from = this.$cache.cont.find(".irs-from");
      this.$cache.to = this.$cache.cont.find(".irs-to");
      this.$cache.single = this.$cache.cont.find(".irs-single");
      this.$cache.bar = this.$cache.cont.find(".irs-bar");
      this.$cache.line = this.$cache.cont.find(".irs-line");
      this.$cache.grid = this.$cache.cont.find(".irs-grid");
      "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler());
      this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none");
      this.appendGrid();
      this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents());
      this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
    },
    setTopHandler: function () {
      var a = this.options.max,
        b = this.options.to;
      this.options.from > this.options.min && b === a ? this.$cache.s_from.addClass("type_last") : b < a && this.$cache.s_to.addClass("type_last")
    },
    changeLevel: function (a) {
      switch (a) {
        case "single":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
          break;
        case "from":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
          this.$cache.s_from.addClass("state_hover");
          this.$cache.s_from.addClass("type_last");
          this.$cache.s_to.removeClass("type_last");
          break;
        case "to":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
          this.$cache.s_to.addClass("state_hover");
          this.$cache.s_to.addClass("type_last");
          this.$cache.s_from.removeClass("type_last");
          break;
        case "both":
          this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
      }
    },
    appendDisableMask: function () {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>');
      this.$cache.cont.addClass("irs-disabled")
    },
    remove: function () {
      this.$cache.cont.remove();
      this.$cache.cont = null;
      this.$cache.line.off("keydown.irs_" + this.plugin_count);
      this.$cache.body.off("touchmove.irs_" + this.plugin_count);
      this.$cache.body.off("mousemove.irs_" + this.plugin_count);
      this.$cache.win.off("touchend.irs_" + this.plugin_count);
      this.$cache.win.off("mouseup.irs_" + this.plugin_count);
      p && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count));
      this.$cache.grid_labels = [];
      this.coords.big = [];
      this.coords.big_w = [];
      this.coords.big_p = [];
      this.coords.big_x = [];
      cancelAnimationFrame(this.raf_id)
    },
    bindEvents: function () {
      if (!this.no_diapason) {
        this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));
        "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));
        if (this.options.keyboard) this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
        p && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))
      }
    },
    pointerMove: function (a) {
      this.dragging && (this.coords.x_pointer = (a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
    },
    pointerUp: function (a) {
      if (this.current_plugin === this.plugin_count && this.is_active) {
        this.is_active = !1;
        this.$cache.cont.find(".state_hover").removeClass("state_hover");
        this.force_redraw = !0;
        p && g("*").prop("unselectable", !1);
        this.updateScene();
        this.restoreOriginalMinInterval();
        if (g.contains(this.$cache.cont[0], a.target) || this.dragging) this.is_finish = !0, this.callOnFinish();
        this.dragging = !1
      }
    },
    pointerDown: function (a, b) {
      b.preventDefault();
      var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
      2 !== b.button && ("both" === a && this.setTempMinInterval(), a || (a = this.target), this.current_plugin = this.plugin_count, this.target = a, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(a), p && g("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
    },
    pointerClick: function (a, b) {
      b.preventDefault();
      var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
      2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(d - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
    },
    key: function (a, b) {
      if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
        switch (b.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            b.preventDefault();
            this.moveByKey(!1);
            break;
          case 87:
          case 68:
          case 38:
          case 39:
            b.preventDefault(), this.moveByKey(!0)
        }
        return !0
      }
    },
    moveByKey: function (a) {
      var b = this.coords.p_pointer,
        b = a ? b + this.options.keyboard_step : b - this.options.keyboard_step;
      this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * b);
      this.is_key = !0;
      this.calc()
    },
    setMinMax: function () {
      this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
    },
    setTempMinInterval: function () {
      var a = this.result.to - this.result.from;
      null === this.old_min_interval && (this.old_min_interval = this.options.min_interval);
      this.options.min_interval = a
    },
    restoreOriginalMinInterval: function () {
      null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
    },
    calc: function (a) {
      if (this.options) {
        this.calc_count++;
        if (10 === this.calc_count || a) this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent();
        if (this.coords.w_rs) {
          this.calcPointerPercent();
          a = this.getHandleX();
          "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, a = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(a));
          switch (this.target) {
            case "base":
              var b = (this.options.max - this.options.min) / 100;
              a = (this.result.from - this.options.min) / b;
              b = (this.result.to - this.options.min) / b;
              this.coords.p_single_real = this.toFixed(a);
              this.coords.p_from_real = this.toFixed(a);
              this.coords.p_to_real = this.toFixed(b);
              this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
              this.target = null;
              break;
            case "single":
              if (this.options.from_fixed) break;
              this.coords.p_single_real = this.convertToRealPercent(a);
              this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
              this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
              this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
              break;
            case "from":
              if (this.options.from_fixed) break;
              this.coords.p_from_real = this.convertToRealPercent(a);
              this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
              this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
              this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              break;
            case "to":
              if (this.options.to_fixed) break;
              this.coords.p_to_real = this.convertToRealPercent(a);
              this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
              this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
              this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
              break;
            case "both":
              if (this.options.from_fixed || this.options.to_fixed) break;
              a = this.toFixed(a + .1 * this.coords.p_handle);
              this.coords.p_from_real = this.convertToRealPercent(a) - this.coords.p_gap_left;
              this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              this.coords.p_to_real = this.convertToRealPercent(a) + this.coords.p_gap_right;
              this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
              break;
            case "both_one":
              if (!this.options.from_fixed && !this.options.to_fixed) {
                var d = this.convertToRealPercent(a);
                a = this.result.to_percent - this.result.from_percent;
                var c = a / 2,
                  b = d - c,
                  d = d + c;
                0 > b && (b = 0, d = b + a);
                100 < d && (d = 100, b = d - a);
                this.coords.p_from_real = this.calcWithStep(b);
                this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                this.coords.p_to_real = this.calcWithStep(d);
                this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
              }
          }
          "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to]));
          this.calcMinMax();
          this.calcLabels()
        }
      }
    },
    calcPointerPercent: function () {
      this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
    },
    convertToRealPercent: function (a) {
      return a / (100 - this.coords.p_handle) * 100
    },
    convertToFakePercent: function (a) {
      return a / 100 * (100 - this.coords.p_handle)
    },
    getHandleX: function () {
      var a = 100 - this.coords.p_handle,
        b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      0 > b ? b = 0 : b > a && (b = a);
      return b
    },
    calcHandlePercent: function () {
      this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);
      this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
    },
    chooseHandle: function (a) {
      return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
    },
    calcMinMax: function () {
      this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
    },
    calcLabels: function () {
      this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
    },
    updateScene: function () {
      this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null);
      clearTimeout(this.update_tm);
      this.update_tm = null;
      this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
    },
    drawHandles: function () {
      this.coords.w_rs = this.$cache.rs.outerWidth(!1);
      if (this.coords.w_rs) {
        this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0);
        if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow();
        if (this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key)) {
          if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
            this.drawLabels();
            this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
            this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
            if ("single" === this.options.type) this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from);
            else {
              this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
              this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";
              if (this.old_from !== this.result.from || this.force_redraw) this.$cache.from[0].style.left = this.labels.p_from_left + "%";
              if (this.old_to !== this.result.to || this.force_redraw) this.$cache.to[0].style.left = this.labels.p_to_left + "%";
              this.$cache.single[0].style.left = this.labels.p_single_left + "%";
              this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
              this.$cache.input.data("from", this.result.from);
              this.$cache.input.data("to", this.result.to)
            }
            this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change");
            this.old_from = this.result.from;
            this.old_to = this.result.to;
            this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange();
            if (this.is_key || this.is_click) this.is_click = this.is_key = !1, this.callOnFinish();
            this.is_finish = this.is_resize = this.is_update = !1
          }
          this.force_redraw = this.is_click = this.is_key = this.is_start = !1
        }
      }
    },
    drawLabels: function () {
      if (this.options) {
        var a = this.options.values.length,
          b = this.options.p_values,
          d;
        if (!this.options.hide_from_to)
          if ("single" === this.options.type) a = a ? this.decorate(b[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(a), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
          else {
            a ? (this.options.decorate_both ? (a = this.decorate(b[this.result.from]), a += this.options.values_separator, a += this.decorate(b[this.result.to])) : a = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to]), d = this.decorate(b[this.result.from]), b = this.decorate(b[this.result.to])) : (this.options.decorate_both ? (a = this.decorate(this._prettify(this.result.from), this.result.from), a += this.options.values_separator, a += this.decorate(this._prettify(this.result.to), this.result.to)) : a = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), d = this.decorate(this._prettify(this.result.from), this.result.from), b = this.decorate(this._prettify(this.result.to), this.result.to));
            this.$cache.single.html(a);
            this.$cache.from.html(d);
            this.$cache.to.html(b);
            this.calcLabels();
            b = Math.min(this.labels.p_single_left, this.labels.p_from_left);
            a = this.labels.p_single_left + this.labels.p_single_fake;
            d = this.labels.p_to_left + this.labels.p_to_fake;
            var c = Math.max(a, d);
            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c = d) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", c = Math.max(a, d))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden");
            this.$cache.min[0].style.visibility = b < this.labels.p_min + 1 ? "hidden" : "visible";
            this.$cache.max[0].style.visibility = c > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
          }
      }
    },
    drawShadow: function () {
      var a = this.options,
        b = this.$cache,
        d = "number" === typeof a.from_min && !isNaN(a.from_min),
        c = "number" === typeof a.from_max && !isNaN(a.from_max),
        e = "number" === typeof a.to_min && !isNaN(a.to_min),
        f = "number" === typeof a.to_max && !isNaN(a.to_max);
      "single" === a.type ? a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_single[0].style.display = "block", b.shad_single[0].style.left = d + "%", b.shad_single[0].style.width = c + "%") : b.shad_single[0].style.display = "none" : (a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_from[0].style.display = "block", b.shad_from[0].style.left = d + "%", b.shad_from[0].style.width = c + "%") : b.shad_from[0].style.display = "none", a.to_shadow && (e || f) ? (e = this.convertToPercent(e ? a.to_min : a.min), a = this.convertToPercent(f ? a.to_max : a.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), a = this.toFixed(a - this.coords.p_handle / 100 * a), e += this.coords.p_handle / 2, b.shad_to[0].style.display = "block", b.shad_to[0].style.left = e + "%", b.shad_to[0].style.width = a + "%") : b.shad_to[0].style.display = "none")
    },
    callOnStart: function () {
      if (this.options.onStart && "function" === typeof this.options.onStart) this.options.onStart(this.result)
    },
    callOnChange: function () {
      if (this.options.onChange && "function" === typeof this.options.onChange) this.options.onChange(this.result)
    },
    callOnFinish: function () {
      if (this.options.onFinish && "function" === typeof this.options.onFinish) this.options.onFinish(this.result)
    },
    callOnUpdate: function () {
      if (this.options.onUpdate && "function" === typeof this.options.onUpdate) this.options.onUpdate(this.result)
    },
    toggleInput: function () {
      this.$cache.input.toggleClass("irs-hidden-input")
    },
    convertToPercent: function (a, b) {
      var d = this.options.max - this.options.min;
      return d ? this.toFixed((b ? a : a - this.options.min) / (d / 100)) : (this.no_diapason = !0, 0)
    },
    convertToValue: function (a) {
      var b = this.options.min,
        d = this.options.max,
        c = b.toString().split(".")[1],
        e = d.toString().split(".")[1],
        f, l, g = 0,
        k = 0;
      if (0 === a) return this.options.min;
      if (100 === a) return this.options.max;
      c && (g = f = c.length);
      e && (g = l = e.length);
      f && l && (g = f >= l ? f : l);
      0 > b && (k = Math.abs(b), b = +(b + k).toFixed(g), d = +(d + k).toFixed(g));
      a = (d - b) / 100 * a + b;
      (b = this.options.step.toString().split(".")[1]) ? a = +a.toFixed(b.length): (a /= this.options.step, a *= this.options.step, a = +a.toFixed(0));
      k && (a -= k);
      k = b ? +a.toFixed(b.length) : this.toFixed(a);
      k < this.options.min ? k = this.options.min : k > this.options.max && (k = this.options.max);
      return k
    },
    calcWithStep: function (a) {
      var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
      100 < b && (b = 100);
      100 === a && (b = 100);
      return this.toFixed(b)
    },
    checkMinInterval: function (a, b, d) {
      var c = this.options;
      if (!c.min_interval) return a;
      a = this.convertToValue(a);
      b = this.convertToValue(b);
      "from" === d ? b - a < c.min_interval && (a = b - c.min_interval) : a - b < c.min_interval && (a = b + c.min_interval);
      return this.convertToPercent(a)
    },
    checkMaxInterval: function (a, b, d) {
      var c = this.options;
      if (!c.max_interval) return a;
      a = this.convertToValue(a);
      b = this.convertToValue(b);
      "from" === d ? b - a > c.max_interval && (a = b - c.max_interval) : a - b > c.max_interval && (a = b + c.max_interval);
      return this.convertToPercent(a)
    },
    checkDiapason: function (a, b, d) {
      a = this.convertToValue(a);
      var c = this.options;
      "number" !== typeof b && (b = c.min);
      "number" !== typeof d && (d = c.max);
      a < b && (a = b);
      a > d && (a = d);
      return this.convertToPercent(a)
    },
    toFixed: function (a) {
      a = a.toFixed(9);
      return +a
    },
    _prettify: function (a) {
      return this.options.prettify_enabled ? this.options.prettify && "function" === typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a) : a
    },
    prettify: function (a) {
      return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
    },
    checkEdges: function (a, b) {
      if (!this.options.force_edges) return this.toFixed(a);
      0 > a ? a = 0 : a > 100 - b && (a = 100 - b);
      return this.toFixed(a)
    },
    validate: function () {
      var a = this.options,
        b = this.result,
        d = a.values,
        c = d.length,
        e, f;
      "string" === typeof a.min && (a.min = +a.min);
      "string" === typeof a.max && (a.max = +a.max);
      "string" === typeof a.from && (a.from = +a.from);
      "string" === typeof a.to && (a.to = +a.to);
      "string" === typeof a.step && (a.step = +a.step);
      "string" === typeof a.from_min && (a.from_min = +a.from_min);
      "string" === typeof a.from_max && (a.from_max = +a.from_max);
      "string" === typeof a.to_min && (a.to_min = +a.to_min);
      "string" === typeof a.to_max && (a.to_max = +a.to_max);
      "string" === typeof a.keyboard_step && (a.keyboard_step = +a.keyboard_step);
      "string" === typeof a.grid_num && (a.grid_num = +a.grid_num);
      a.max < a.min && (a.max = a.min);
      if (c)
        for (a.p_values = [], a.min = 0, a.max = c - 1, a.step = 1, a.grid_num = a.max, a.grid_snap = !0, f = 0; f < c; f++) e = +d[f], isNaN(e) ? e = d[f] : (d[f] = e, e = this._prettify(e)), a.p_values.push(e);
      if ("number" !== typeof a.from || isNaN(a.from)) a.from = a.min;
      if ("number" !== typeof a.to || isNaN(a.from)) a.to = a.max;
      if ("single" === a.type) a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max);
      else {
        if (a.from < a.min || a.from > a.max) a.from = a.min;
        if (a.to > a.max || a.to < a.min) a.to = a.max;
        a.from > a.to && (a.from = a.to)
      }
      if ("number" !== typeof a.step || isNaN(a.step) || !a.step || 0 > a.step) a.step = 1;
      if ("number" !== typeof a.keyboard_step || isNaN(a.keyboard_step) || !a.keyboard_step || 0 > a.keyboard_step) a.keyboard_step = 5;
      "number" === typeof a.from_min && a.from < a.from_min && (a.from = a.from_min);
      "number" === typeof a.from_max && a.from > a.from_max && (a.from = a.from_max);
      "number" === typeof a.to_min && a.to < a.to_min && (a.to = a.to_min);
      "number" === typeof a.to_max && a.from > a.to_max && (a.to = a.to_max);
      if (b) {
        b.min !== a.min && (b.min = a.min);
        b.max !== a.max && (b.max = a.max);
        if (b.from < b.min || b.from > b.max) b.from = a.from;
        if (b.to < b.min || b.to > b.max) b.to = a.to
      }
      if ("number" !== typeof a.min_interval || isNaN(a.min_interval) || !a.min_interval || 0 > a.min_interval) a.min_interval = 0;
      if ("number" !== typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || 0 > a.max_interval) a.max_interval = 0;
      a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min);
      a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min)
    },
    decorate: function (a, b) {
      var d = "",
        c = this.options;
      c.prefix && (d += c.prefix);
      d += a;
      c.max_postfix && (c.values.length && a === c.p_values[c.max] ? (d += c.max_postfix, c.postfix && (d += " ")) : b === c.max && (d += c.max_postfix, c.postfix && (d += " ")));
      c.postfix && (d += c.postfix);
      return d
    },
    updateFrom: function () {
      this.result.from = this.options.from;
      this.result.from_percent = this.convertToPercent(this.result.from);
      this.options.values && (this.result.from_value = this.options.values[this.result.from])
    },
    updateTo: function () {
      this.result.to = this.options.to;
      this.result.to_percent = this.convertToPercent(this.result.to);
      this.options.values && (this.result.to_value = this.options.values[this.result.to])
    },
    updateResult: function () {
      this.result.min = this.options.min;
      this.result.max = this.options.max;
      this.updateFrom();
      this.updateTo()
    },
    appendGrid: function () {
      if (this.options.grid) {
        var a = this.options,
          b, d;
        b = a.max - a.min;
        var c = a.grid_num,
          e = 0,
          f = 0,
          g = 4,
          h, k, m = 0,
          n = "";
        this.calcGridMargin();
        a.grid_snap ? (c = b / a.step, e = this.toFixed(a.step / (b / 100))) : e = this.toFixed(100 / c);
        4 < c && (g = 3);
        7 < c && (g = 2);
        14 < c && (g = 1);
        28 < c && (g = 0);
        for (b = 0; b < c + 1; b++) {
          h = g;
          f = this.toFixed(e * b);
          100 < f && (f = 100, h -= 2, 0 > h && (h = 0));
          this.coords.big[b] = f;
          k = (f - e * (b - 1)) / (h + 1);
          for (d = 1; d <= h && 0 !== f; d++) m = this.toFixed(f - k * d), n += '<span class="irs-grid-pol small" style="left: ' + m + '%"></span>';
          n += '<span class="irs-grid-pol" style="left: ' + f + '%"></span>';
          m = this.convertToValue(f);
          m = a.values.length ? a.p_values[m] : this._prettify(m);
          n += '<span class="irs-grid-text js-grid-text-' + b + '" style="left: ' + f + '%">' + m + "</span>"
        }
        this.coords.big_num = Math.ceil(c + 1);
        this.$cache.cont.addClass("irs-with-grid");
        this.$cache.grid.html(n);
        this.cacheGridLabels()
      }
    },
    cacheGridLabels: function () {
      var a, b, d = this.coords.big_num;
      for (b = 0; b < d; b++) a = this.$cache.grid.find(".js-grid-text-" + b), this.$cache.grid_labels.push(a);
      this.calcGridLabels()
    },
    calcGridLabels: function () {
      var a, b;
      b = [];
      var d = [],
        c = this.coords.big_num;
      for (a = 0; a < c; a++) this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] = this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2), b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), d[a] = this.toFixed(b[a] + this.coords.big_p[a]);
      this.options.force_edges && (b[0] < -this.coords.grid_gap && (b[0] = -this.coords.grid_gap, d[0] = this.toFixed(b[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), d[c - 1] > 100 + this.coords.grid_gap && (d[c - 1] = 100 + this.coords.grid_gap, b[c - 1] = this.toFixed(d[c - 1] - this.coords.big_p[c - 1]), this.coords.big_x[c - 1] = this.toFixed(this.coords.big_p[c - 1] - this.coords.grid_gap)));
      this.calcGridCollision(2, b, d);
      this.calcGridCollision(4, b, d);
      for (a = 0; a < c; a++) b = this.$cache.grid_labels[a][0], b.style.marginLeft = -this.coords.big_x[a] + "%"
    },
    calcGridCollision: function (a, b, d) {
      var c, e, f, g = this.coords.big_num;
      for (c = 0; c < g; c += a) {
        e = c + a / 2;
        if (e >= g) break;
        f = this.$cache.grid_labels[e][0];
        f.style.visibility = d[c] <= b[e] ? "visible" : "hidden"
      }
    },
    calcGridMargin: function () {
      this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
    },
    update: function (a) {
      this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = g.extend(this.options, a), this.validate(), this.updateResult(a), this.toggleInput(), this.remove(), this.init(!0))
    },
    reset: function () {
      this.input && (this.updateResult(), this.update())
    },
    destroy: function () {
      this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), g.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
    }
  };
  g.fn.ionRangeSlider = function (a) {
    return this.each(function () {
      g.data(this, "ionRangeSlider") || g.data(this, "ionRangeSlider", new r(this, a, u++))
    })
  };
  (function () {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !h.requestAnimationFrame; ++d) h.requestAnimationFrame = h[b[d] + "RequestAnimationFrame"], h.cancelAnimationFrame = h[b[d] + "CancelAnimationFrame"] || h[b[d] + "CancelRequestAnimationFrame"];
    h.requestAnimationFrame || (h.requestAnimationFrame = function (b, d) {
      var f = (new Date).getTime(),
        g = Math.max(0, 16 - (f - a)),
        p = h.setTimeout(function () {
          b(f + g)
        }, g);
      a = f + g;
      return p
    });
    h.cancelAnimationFrame || (h.cancelAnimationFrame = function (a) {
      clearTimeout(a)
    })
  })()
});
(function (factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object' && typeof require === 'function') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {
  'use strict';
  var
    utils = (function () {
      return {
        escapeRegExChars: function (value) {
          return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
        },
        createNode: function (containerClass) {
          var div = document.createElement('div');
          div.className = containerClass;
          div.style.opacity = '0';
          return div;
        }
      };
    }()),
    keys = {
      ESC: 27,
      TAB: 9,
      RETURN: 13,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

  function Autocomplete(el, options) {
    var noop = $.noop,
      that = this,
      defaults = {
        ajaxSettings: {},
        autoSelectFirst: false,
        appendTo: document.body,
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        widthOffset: 0,
        width: 'auto',
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: Autocomplete.formatResult,
        delimiter: null,
        zIndex: 9999,
        type: 'GET',
        noCache: false,
        onSearchStart: noop,
        onSearchComplete: noop,
        onSearchError: noop,
        preserveInput: false,
        containerClass: 'autocomplete-suggestions',
        tabDisabled: false,
        dataType: 'text',
        currentRequest: null,
        triggerSelectOnValidInput: true,
        preventBadQueries: true,
        lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
          return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
        },
        paramName: 'query',
        transformResult: function (response) {
          return typeof response === 'string' ? $.parseJSON(response) : response;
        },
        showNoSuggestionNotice: false,
        noSuggestionNotice: 'No results',
        orientation: 'bottom',
        forceFixPosition: false,
        suggestionsContainerParent: null
      };
    that.element = el;
    that.el = $(el);
    that.suggestions = [];
    that.badQueries = [];
    that.selectedIndex = -1;
    that.currentValue = that.element.value;
    that.intervalId = 0;
    that.cachedResponse = {};
    that.onChangeInterval = null;
    that.onChange = null;
    that.isLocal = false;
    that.suggestionsContainer = null;
    that.noSuggestionsContainer = null;
    that.options = $.extend({}, defaults, options);
    that.suggestionsContainerParent = that.options.suggestionsContainerParent;
    that.classes = {
      selected: 'autocomplete-selected',
      suggestion: 'autocomplete-suggestion'
    };
    that.hint = null;
    that.hintValue = '';
    that.selection = null;
    that.initialize();
    that.setOptions(options);
  }
  Autocomplete.utils = utils;
  $.Autocomplete = Autocomplete;
  Autocomplete.formatResult = function (suggestion, currentValue) {
    if (!currentValue) {
      return suggestion.value;
    }
    var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';
    return suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&lt;(\/?strong)&gt;/g, '<$1>');
  };
  Autocomplete.prototype = {
    killerFn: null,
    initialize: function () {
      var that = this,
        suggestionSelector = '.' + that.classes.suggestion,
        selected = that.classes.selected,
        options = that.options,
        container;
      that.element.setAttribute('autocomplete', 'off');
      that.killerFn = function (e) {
        if (!$(e.target).closest('.' + that.options.containerClass).length) {
          that.killSuggestions();
          that.disableKillerFn();
        }
      };
      that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0);
      that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);
      container = $(that.suggestionsContainer);
      container.appendTo(options.appendTo);
      if (options.width !== 'auto') {
        container.css('width', options.width);
      }
      container.on('mouseover.autocomplete', suggestionSelector, function () {
        that.activate($(this).data('index'));
      });
      container.on('mouseout.autocomplete', function () {
        that.selectedIndex = -1;
        container.children('.' + selected).removeClass(selected);
      });
      container.on('click.autocomplete', suggestionSelector, function () {
        that.select($(this).data('index'));
        return false;
      });
      that.fixPositionCapture = function () {
        if (that.visible) {
          that.fixPosition();
        }
      };
      $(window).on('resize.autocomplete', that.fixPositionCapture);
      that.el.on('keydown.autocomplete', function (e) {
        that.onKeyPress(e);
      });
      that.el.on('keyup.autocomplete', function (e) {
        that.onKeyUp(e);
      });
      that.el.on('blur.autocomplete', function () {
        that.onBlur();
      });
      that.el.on('focus.autocomplete', function () {
        that.onFocus();
      });
      that.el.on('change.autocomplete', function (e) {
        that.onKeyUp(e);
      });
      that.el.on('input.autocomplete', function (e) {
        that.onKeyUp(e);
      });
    },
    onFocus: function () {
      var that = this;
      that.fixPosition();
      if (that.el.val().length >= that.options.minChars) {
        that.onValueChange();
      }
    },
    onBlur: function () {
      this.enableKillerFn();
    },
    abortAjax: function () {
      var that = this;
      if (that.currentRequest) {
        that.currentRequest.abort();
        that.currentRequest = null;
        if (typeof that.options.ajaxStop == 'function') {
          that.options.ajaxStop();
        }
      }
    },
    setOptions: function (suppliedOptions) {
      var that = this,
        options = that.options;
      $.extend(options, suppliedOptions);
      that.isLocal = $.isArray(options.lookup);
      if (that.isLocal) {
        options.lookup = that.verifySuggestionsFormat(options.lookup);
      }
      options.orientation = that.validateOrientation(options.orientation, 'bottom');
      $(that.suggestionsContainer).css({
        'max-height': options.maxHeight + 'px',
        'width': options.width + 'px',
        'z-index': options.zIndex
      });
    },
    clearCache: function () {
      this.cachedResponse = {};
      this.badQueries = [];
    },
    clear: function () {
      this.clearCache();
      this.currentValue = '';
      this.suggestions = [];
    },
    disable: function () {
      var that = this;
      that.disabled = true;
      clearInterval(that.onChangeInterval);
      that.abortAjax();
    },
    enable: function () {
      this.disabled = false;
    },
    fixPosition: function () {
      var that = this,
        $container = $(that.suggestionsContainer),
        containerParent = $container.parent().get(0);
      if (containerParent !== document.body && !that.options.forceFixPosition) {
        return;
      }
      var orientation = that.options.orientation,
        containerHeight = $container.outerHeight(),
        height = that.el.outerHeight(),
        offset = that.el.offset(),
        styles = {
          'top': offset.top,
          'left': offset.left
        };
      if (orientation === 'auto') {
        var viewPortHeight = $(window).height(),
          scrollTop = $(window).scrollTop(),
          topOverflow = -scrollTop + offset.top - containerHeight,
          bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);
        orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow) ? 'top' : 'bottom';
      }
      if (orientation === 'top') {
        styles.top += -containerHeight;
      } else {
        styles.top += height;
      }
      if (containerParent !== document.body) {
        var opacity = $container.css('opacity'),
          parentOffsetDiff;
        if (!that.visible) {
          $container.css('opacity', 0).show();
        }
        parentOffsetDiff = $container.offsetParent().offset();
        styles.top -= parentOffsetDiff.top;
        styles.left -= parentOffsetDiff.left;
        if (!that.visible) {
          $container.css('opacity', opacity).hide();
        }
      }
      if (that.options.width === 'auto') {
        styles.width = that.el.outerWidth() - that.options.widthOffset + 'px';
      }
      $container.css(styles);
    },
    enableKillerFn: function () {
      var that = this;
      $(document).on('click.autocomplete', that.killerFn);
    },
    disableKillerFn: function () {
      var that = this;
      $(document).off('click.autocomplete', that.killerFn);
    },
    killSuggestions: function () {
      var that = this;
      that.stopKillSuggestions();
      that.intervalId = window.setInterval(function () {
        if (that.visible) {
          if (!that.options.preserveInput) {
            that.el.val(that.currentValue);
          }
          that.hide();
        }
        that.stopKillSuggestions();
      }, 50);
    },
    stopKillSuggestions: function () {
      window.clearInterval(this.intervalId);
    },
    isCursorAtEnd: function () {
      var that = this,
        valLength = that.el.val().length,
        selectionStart = that.element.selectionStart,
        range;
      if (typeof selectionStart === 'number') {
        return selectionStart === valLength;
      }
      if (document.selection) {
        range = document.selection.createRange();
        range.moveStart('character', -valLength);
        return valLength === range.text.length;
      }
      return true;
    },
    onKeyPress: function (e) {
      var that = this;
      if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
        that.suggest();
        return;
      }
      if (that.disabled || !that.visible) {
        return;
      }
      switch (e.which) {
        case keys.ESC:
          that.el.val(that.currentValue);
          that.hide();
          break;
        case keys.RIGHT:
          if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
            that.selectHint();
            break;
          }
          return;
        case keys.TAB:
          if (that.hint && that.options.onHint) {
            that.selectHint();
            return;
          }
          if (that.selectedIndex === -1) {
            that.hide();
            return;
          }
          that.select(that.selectedIndex);
          if (that.options.tabDisabled === false) {
            return;
          }
          break;
        case keys.RETURN:
          if (that.selectedIndex === -1) {
            that.hide();
            return;
          }
          that.select(that.selectedIndex);
          break;
        case keys.UP:
          that.moveUp();
          break;
        case keys.DOWN:
          that.moveDown();
          break;
        default:
          return;
      }
      e.stopImmediatePropagation();
      e.preventDefault();
    },
    onKeyUp: function (e) {
      var that = this;
      if (that.disabled) {
        return;
      }
      switch (e.which) {
        case keys.UP:
        case keys.DOWN:
          return;
      }
      clearInterval(that.onChangeInterval);
      if (that.currentValue !== that.el.val()) {
        that.findBestHint();
        if (that.options.deferRequestBy > 0) {
          that.onChangeInterval = setInterval(function () {
            that.onValueChange();
          }, that.options.deferRequestBy);
        } else {
          that.onValueChange();
        }
      }
    },
    onValueChange: function () {
      var that = this,
        options = that.options,
        value = that.el.val(),
        query = that.getQuery(value);
      if (that.selection && that.currentValue !== query) {
        that.selection = null;
        (options.onInvalidateSelection || $.noop).call(that.element);
      }
      clearInterval(that.onChangeInterval);
      that.currentValue = value;
      that.selectedIndex = -1;
      if (options.triggerSelectOnValidInput && that.isExactMatch(query)) {
        that.select(0);
        return;
      }
      if (query.length < options.minChars) {
        that.hide();
      } else {
        that.getSuggestions(query);
      }
    },
    isExactMatch: function (query) {
      var suggestions = this.suggestions;
      return (suggestions.length === 1 && suggestions[0].value.toLowerCase() === query.toLowerCase());
    },
    getQuery: function (value) {
      var delimiter = this.options.delimiter,
        parts;
      if (!delimiter) {
        return value;
      }
      parts = value.split(delimiter);
      return $.trim(parts[parts.length - 1]);
    },
    getSuggestionsLocal: function (query) {
      var that = this,
        options = that.options,
        queryLowerCase = query.toLowerCase(),
        filter = options.lookupFilter,
        limit = parseInt(options.lookupLimit, 10),
        data;
      data = {
        suggestions: $.grep(options.lookup, function (suggestion) {
          return filter(suggestion, query, queryLowerCase);
        })
      };
      if (limit && data.suggestions.length > limit) {
        data.suggestions = data.suggestions.slice(0, limit);
      }
      return data;
    },
    getSuggestions: function (q) {
      var response, that = this,
        options = that.options,
        serviceUrl = options.serviceUrl,
        params, cacheKey, ajaxSettings;
      options.params[options.paramName] = q;
      params = options.ignoreParams ? null : options.params;
      if (options.onSearchStart.call(that.element, options.params) === false) {
        return;
      }
      if ($.isFunction(options.lookup)) {
        options.lookup(q, function (data) {
          that.suggestions = data.suggestions;
          that.suggest();
          options.onSearchComplete.call(that.element, q, data.suggestions);
        });
        return;
      }
      if (that.isLocal) {
        response = that.getSuggestionsLocal(q);
      } else {
        if ($.isFunction(serviceUrl)) {
          serviceUrl = serviceUrl.call(that.element, q);
        }
        cacheKey = serviceUrl + '?' + $.param(params || {});
        response = that.cachedResponse[cacheKey];
      }
      if (response && $.isArray(response.suggestions)) {
        that.suggestions = response.suggestions;
        that.suggest();
        options.onSearchComplete.call(that.element, q, response.suggestions);
      } else if (!that.isBadQuery(q)) {
        that.abortAjax();
        ajaxSettings = {
          url: serviceUrl,
          data: params,
          type: options.type,
          dataType: options.dataType
        };
        $.extend(ajaxSettings, options.ajaxSettings);
        if (typeof options.ajaxStart == 'function') {
          options.ajaxStart();
        }
        that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
          var result;
          that.currentRequest = null;
          result = options.transformResult(data, q);
          that.processResponse(result, q, cacheKey);
          options.onSearchComplete.call(that.element, q, result.suggestions);
          if (typeof options.ajaxStop == 'function') {
            options.ajaxStop();
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
          if (typeof options.ajaxStop == 'function') {
            options.ajaxStop();
          }
        });
      } else {
        options.onSearchComplete.call(that.element, q, []);
        if (typeof options.ajaxStop == 'function') {
          options.ajaxStop();
        }
      }
    },
    isBadQuery: function (q) {
      if (!this.options.preventBadQueries) {
        return false;
      }
      var badQueries = this.badQueries,
        i = badQueries.length;
      while (i--) {
        if (q.indexOf(badQueries[i]) === 0) {
          return true;
        }
      }
      return false;
    },
    hide: function () {
      var that = this,
        container = $(that.suggestionsContainer);
      if ($.isFunction(that.options.onHide) && that.visible) {
        that.options.onHide.call(that.element, container);
      }
      that.visible = false;
      that.selectedIndex = -1;
      clearInterval(that.onChangeInterval);
      $(that.suggestionsContainer).css({
        opacity: 0,
        height: 0
      });
      $(that.element).siblings(that.suggestionsContainerParent).css({
        opacity: 0
      }).removeClass('suggest-active');
      that.signalHint(null);
    },
    suggest: function () {
      if (!this.suggestions.length) {
        if (this.options.showNoSuggestionNotice) {
          this.noSuggestions();
        } else {
          this.hide();
        }
        return;
      }
      var that = this,
        options = that.options,
        groupBy = options.groupBy,
        formatResult = options.formatResult,
        value = that.getQuery(that.currentValue),
        className = that.classes.suggestion,
        classSelected = that.classes.selected,
        container = $(that.suggestionsContainer),
        noSuggestionsContainer = $(that.noSuggestionsContainer),
        beforeRender = options.beforeRender,
        afterRender = options.afterRender,
        beforeInsert = options.beforeInsert,
        html = '',
        category, formatGroup = function (suggestion, index) {
          var currentCategory = suggestion.data[groupBy];
          if (category === currentCategory) {
            return '';
          }
          category = currentCategory;
          return '<div class="autocomplete-group"><strong>' + category + '</strong></div>';
        };
      if (options.triggerSelectOnValidInput && that.isExactMatch(value)) {
        that.select(0);
        return;
      }
      $.each(that.suggestions, function (i, suggestion) {
        if (groupBy) {
          html += formatGroup(suggestion, value, i);
        }
        html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value, i) + '</div>';
      });
      this.adjustContainerWidth();
      noSuggestionsContainer.detach();
      if ($.isFunction(beforeInsert)) {
        beforeInsert.call(that.element, container);
      }
      container.html(html);
      if ($.isFunction(beforeRender)) {
        beforeRender.call(that.element, container, that.suggestions);
      }
      that.fixPosition();
      container.css({
        opacity: 1,
        height: 'auto'
      });
      $(that.element).siblings(that.suggestionsContainerParent).css({
        opacity: 1
      }).addClass('suggest-active');
      container.show();
      if ($.isFunction(afterRender)) {
        afterRender.call(that.element, container);
      }
      if (options.autoSelectFirst) {
        that.selectedIndex = 0;
        container.scrollTop(0);
        container.children('.' + className).first().addClass(classSelected);
      }
      that.visible = true;
      that.findBestHint();
    },
    noSuggestions: function () {
      var that = this,
        container = $(that.suggestionsContainer),
        noSuggestionsContainer = $(that.noSuggestionsContainer);
      this.adjustContainerWidth();
      noSuggestionsContainer.detach();
      container.empty();
      container.append(noSuggestionsContainer);
      that.fixPosition();
      container.show();
      that.visible = true;
    },
    adjustContainerWidth: function () {
      var that = this,
        options = that.options,
        width, container = $(that.suggestionsContainer);
      if (options.width === 'auto') {
        width = that.el.outerWidth() - options.widthOffset;
        container.css('width', width > 0 ? width : 300);
      }
    },
    findBestHint: function () {
      var that = this,
        value = that.el.val().toLowerCase(),
        bestMatch = null;
      if (!value) {
        return;
      }
      $.each(that.suggestions, function (i, suggestion) {
        var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
        if (foundMatch) {
          bestMatch = suggestion;
        }
        return !foundMatch;
      });
      that.signalHint(bestMatch);
    },
    signalHint: function (suggestion) {
      var hintValue = '',
        that = this;
      if (suggestion) {
        hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
      }
      if (that.hintValue !== hintValue) {
        that.hintValue = hintValue;
        that.hint = suggestion;
        (this.options.onHint || $.noop)(hintValue);
      }
    },
    verifySuggestionsFormat: function (suggestions) {
      if (suggestions.length && typeof suggestions[0] === 'string') {
        return $.map(suggestions, function (value) {
          return {
            value: value,
            data: null
          };
        });
      }
      return suggestions;
    },
    validateOrientation: function (orientation, fallback) {
      orientation = $.trim(orientation || '').toLowerCase();
      if ($.inArray(orientation, ['auto', 'bottom', 'top']) === -1) {
        orientation = fallback;
      }
      return orientation;
    },
    processResponse: function (result, originalQuery, cacheKey) {
      var that = this,
        options = that.options;
      result.suggestions = that.verifySuggestionsFormat(result.suggestions);
      if (!options.noCache) {
        that.cachedResponse[cacheKey] = result;
        if (options.preventBadQueries && !result.suggestions.length) {
          that.badQueries.push(originalQuery);
        }
      }
      if (originalQuery !== that.getQuery(that.currentValue)) {
        return;
      }
      that.suggestions = result.suggestions;
      that.suggest();
    },
    activate: function (index, adjust) {
      var that = this,
        activeItem, selected = that.classes.selected,
        container = $(that.suggestionsContainer),
        children = container.find('.' + that.classes.suggestion);
      container.find('.' + selected).removeClass(selected);
      that.selectedIndex = index;
      if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
        activeItem = children.get(that.selectedIndex);
        $(activeItem).addClass(selected);
        if (adjust == true) {
          container.closest('.js-m-scroll').mCustomScrollbar("scrollTo", $(activeItem));
        }
        return activeItem;
      }
      return null;
    },
    selectHint: function () {
      var that = this,
        i = $.inArray(that.hint, that.suggestions);
      that.select(i);
    },
    select: function (i) {
      var that = this;
      that.hide();
      that.onSelect(i);
    },
    moveUp: function () {
      var that = this;
      if (that.selectedIndex === -1) {
        return;
      }
      if (that.selectedIndex === 0) {
        $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
        that.selectedIndex = -1;
        that.el.val(that.currentValue);
        that.findBestHint();
        return;
      }
      that.adjustScroll(that.selectedIndex - 1);
    },
    moveDown: function () {
      var that = this;
      if (that.selectedIndex === (that.suggestions.length - 1)) {
        return;
      }
      that.adjustScroll(that.selectedIndex + 1);
    },
    adjustScroll: function (index) {
      var that = this,
        activeItem = that.activate(index, true);
      if (!activeItem) {
        return;
      }
      var offsetTop, upperBound, lowerBound, heightDelta = $(activeItem).outerHeight();
      offsetTop = activeItem.offsetTop;
      upperBound = $(that.suggestionsContainer).scrollTop();
      lowerBound = upperBound + that.options.maxHeight - heightDelta;
      if (offsetTop < upperBound) {
        $(that.suggestionsContainer).scrollTop(offsetTop);
      } else if (offsetTop > lowerBound) {
        $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
      }
      if (!that.options.preserveInput) {
        that.el.val(that.getValue(that.suggestions[index].value));
      }
      that.signalHint(null);
    },
    onSelect: function (index) {
      var that = this,
        onSelectCallback = that.options.onSelect,
        suggestion = that.suggestions[index];
      that.currentValue = that.getValue(suggestion.value);
      if (that.currentValue !== that.el.val() && !that.options.preserveInput) {
        that.el.val(that.currentValue);
      }
      that.signalHint(null);
      that.suggestions = [];
      that.selection = suggestion;
      if ($.isFunction(onSelectCallback)) {
        onSelectCallback.call(that.element, suggestion);
      }
    },
    getValue: function (value) {
      var that = this,
        delimiter = that.options.delimiter,
        currentValue, parts;
      if (!delimiter) {
        return value;
      }
      currentValue = that.currentValue;
      parts = currentValue.split(delimiter);
      if (parts.length === 1) {
        return value;
      }
      return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
    },
    dispose: function () {
      var that = this;
      that.el.off('.autocomplete').removeData('autocomplete');
      that.disableKillerFn();
      $(window).off('resize.autocomplete', that.fixPositionCapture);
      $(that.suggestionsContainer).remove();
    }
  };
  $.fn.autocomplete = $.fn.devbridgeAutocomplete = function (options, args) {
    var dataKey = 'autocomplete';
    if (!arguments.length) {
      return this.first().data(dataKey);
    }
    return this.each(function () {
      var inputElement = $(this),
        instance = inputElement.data(dataKey);
      if (typeof options === 'string') {
        if (instance && typeof instance[options] === 'function') {
          instance[options](args);
        }
      } else {
        if (instance && instance.dispose) {
          instance.dispose();
        }
        instance = new Autocomplete(this, options);
        inputElement.data(dataKey, instance);
      }
    });
  };
}));
(function (r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = f.fancybox = function () {
      b.open.apply(this, arguments)
    },
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function (a) {
      return a && a.hasOwnProperty && a instanceof f
    },
    q = function (a) {
      return a && "string" === f.type(a)
    },
    E = function (a) {
      return q(a) && 0 < a.indexOf("%")
    },
    l = function (a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e)
    },
    w = function (a, b) {
      return l(a, b) + "px"
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Вперед" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Назад" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {},
          g, h, j, m, l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    },
    cancel: function () {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
    },
    close: function (a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
    },
    play: function (a) {
      var d = function () {
          clearTimeout(b.player.timer)
        },
        e = function () {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
        },
        c = function () {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd")
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart")
      } else c()
    },
    next: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
    },
    prev: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    },
    jumpto: function (a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
    },
    reposition: function (a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
    },
    update: function (a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function () {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
      }, e && !s ? 0 : 300))
    },
    toggle: function (a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
    },
    hideLoading: function () {
      p.unbind(".loading");
      f("#fancybox-loading").remove()
    },
    showLoading: function () {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }))
    },
    getViewport: function () {
      var a = b.current && b.current.locked || !1,
        d = {
          x: n.scrollLeft(),
          y: n.scrollTop()
        };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d
    },
    unbindEvents: function () {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb")
    },
    bindEvents: function () {
      var a = b.current,
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
          k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
        })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
          else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault()
        }
      }))
    },
    trigger: function (a, d) {
      var e, c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
        });
        p.trigger(a)
      }
    },
    isImage: function (a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function (a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function (a) {
      var d = {},
        e, c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]))
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content")
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    },
    _error: function (a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad()
    },
    _loadImage: function () {
      var a = b.imgPreload = new Image;
      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad()
      };
      a.onerror = function () {
        this.onload = this.onerror = null;
        b._error("image")
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading()
    },
    _loadAjax: function () {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function (a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
        },
        success: function (d, e) {
          "success" === e && (a.content = d, b._afterLoad())
        }
      }))
    },
    _loadIframe: function () {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad()
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad()
    },
    _preloadImages: function () {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f, g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    },
    _afterLoad: function () {
      var a = b.coming,
        d = b.current,
        e, c, k, g, h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
        else {
          d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                e += '<param name="' + a + '" value="' + b + '"></param>';
                h += " " + a + '="' + b + '"'
              }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
          }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]()
          } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages()
        }
    },
    _setDimension: function () {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v, z, t, C, A, F, B, D, H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;
      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView)
        if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
          for (;
            (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
        else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && ("auto" === s && j < A && c + x + q < z) && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    },
    _getPosition: function (a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c
    },
    _afterZoomIn: function () {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close()
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    },
    _afterZoomOut: function (a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a)
    }
  });
  b.transitions = {
    getOrigPosition: function () {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      }
    },
    step: function (a, d) {
      var e, c, f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
    },
    zoomIn: function () {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({
          opacity: 1
        }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      })
    },
    zoomOut: function () {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      })
    },
    changeIn: function () {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      })
    },
    changeOut: function () {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function () {
          f(this).trigger("onReset").remove()
        }
      })
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function (a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function (a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
      });
      this.overlay.css(a.css).show()
    },
    close: function () {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function () {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height())
    },
    onReady: function (a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function (a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a)
    },
    onUpdate: function () {
      this.fixed || this.update()
    },
    afterClose: function (a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function (a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c)
      }
    }
  };
  f.fn.fancybox = function (a) {
    var d, e = f(this),
      c = this.selector || "",
      k = function (g) {
        var h = f(this).blur(),
          j = d,
          k, l;
        !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this
  };
  p.ready(function () {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b
    });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);
! function (factory) {
  "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function ($) {
  var caretTimeoutId, ua = navigator.userAgent,
    iPhone = /iphone/i.test(ua),
    chrome = /chrome/i.test(ua),
    android = /android/i.test(ua);
  $.mask = {
    definitions: {
      "9": "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]",
      "8": "[0-69]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, $.fn.extend({
    caret: function (begin, end) {
      var range;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
      })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
        begin: begin,
        end: end
      });
    },
    unmask: function () {
      return this.trigger("unmask");
    },
    mask: function (mask, settings) {
      mask = mask.toString();
      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
      if (!mask && this.length > 0) {
        input = $(this[0]);
        var fn = input.data($.mask.dataName);
        return fn ? fn() : void 0;
      }
      return settings = $.extend({
        autoclear: $.mask.autoclear,
        placeholder: $.mask.placeholder,
        completed: null
      }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, firstNonMaskPos = null, $.each(mask.split(""), function (i, c) {
        "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
      }), this.trigger("unmask").each(function () {
        function tryFireCompleted() {
          if (settings.completed) {
            for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++)
              if (tests[i] && buffer[i] === getPlaceholder(i)) return;
            settings.completed.call(input);
          }
        }

        function getPlaceholder(i) {
          return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
        }

        function seekNext(pos) {
          for (; ++pos < len && !tests[pos];);
          return pos;
        }

        function seekPrev(pos) {
          for (; --pos >= 0 && !tests[pos];);
          return pos;
        }

        function shiftL(begin, end) {
          var i, j;
          if (!(0 > begin)) {
            for (i = begin, j = seekNext(end); len > i; i++)
              if (tests[i]) {
                if (!(len > j && tests[i].test(buffer[j]))) break;
                buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
              }
            writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
          }
        }

        function shiftR(pos) {
          var i, c, j, t;
          for (i = pos, c = getPlaceholder(pos); len > i; i++)
            if (tests[i]) {
              if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
              c = t;
            }
        }

        function androidInputEvent() {
          var curVal = input.val(),
            pos = input.caret();
          if (oldVal && oldVal.length && oldVal.length > curVal.length) {
            for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1];) pos.begin--;
            if (0 === pos.begin)
              for (; pos.begin < firstNonMaskPos && !tests[pos.begin];) pos.begin++;
            input.caret(pos.begin, pos.begin);
          } else {
            for (checkVal(!0); pos.begin < len && !tests[pos.begin];) pos.begin++;
            input.caret(pos.begin, pos.begin);
          }
          tryFireCompleted();
        }

        function blurEvent() {
          checkVal(), input.val() != focusText && input.change();
        }

        function keydownEvent(e) {
          if (!input.prop("readonly")) {
            var pos, begin, end, k = e.which || e.keyCode;
            oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), input.caret(0, checkVal()), e.preventDefault());
          }
        }

        function keypressEvent(e) {
          if (!input.prop("readonly")) {
            var p, c, next, k = e.which || e.keyCode,
              pos = input.caret();
            if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
              if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                  var proxy = function () {
                    $.proxy($.fn.caret, input, next)();
                  };
                  setTimeout(proxy, 0);
                } else {
                  input.caret(next);
                }
                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
              }
              e.preventDefault();
            }
          }
        }

        function clearBuffer(start, end) {
          var i;
          for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
        }

        function writeBuffer() {
          input.val(buffer.join(""));
        }

        function checkVal(allow) {
          var i, c, pos, test = input.val(),
            lastMatch = -1;
          for (i = 0, pos = 0; len > i; i++)
            if (tests[i]) {
              for (buffer[i] = getPlaceholder(i); pos++ < test.length;)
                if (c = test.charAt(pos - 1), tests[i].test(c)) {
                  buffer[i] = c, lastMatch = i;
                  break;
                }
              if (pos > test.length) {
                clearBuffer(i + 1, len);
                break;
              }
            } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
          return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), partialPosition ? i : firstNonMaskPos;
        }
        var input = $(this),
          buffer = $.map(mask.split(""), function (c, i) {
            return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
          }),
          defaultBuffer = buffer.join(""),
          focusText = input.val();
        input.data($.mask.dataName, function () {
          return $.map(buffer, function (c, i) {
            return tests[i] && c != getPlaceholder(i) ? c : null;
          }).join("");
        }), input.one("unmask", function () {
          input.off(".mask").removeData($.mask.dataName);
        }).on("focus.mask", function () {
          if (!input.prop("readonly")) {
            clearTimeout(caretTimeoutId);
            var pos;
            focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function () {
              input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
            }, 10);
          }
        }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function () {
          input.prop("readonly") || setTimeout(function () {
            var pos = checkVal(!0);
            input.caret(pos), tryFireCompleted();
          }, 0);
        }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), checkVal();
      });
    }
  });
});
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
    }
  }

  function c() {
    f = null
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
  }
  var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
    },
    getPageHeight: function (b) {
      return a(b).height()
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a)
    }
  })
});
! function (e) {
  "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
  ! function (t) {
    var o = "function" == typeof define && define.amd,
      a = "undefined" != typeof module && module.exports,
      n = "https:" == document.location.protocol ? "https:" : "http:",
      i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
    o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
  }(function () {
    var t, o = "mCustomScrollbar",
      a = "mCS",
      n = ".mCustomScrollbar",
      i = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          deltaFactor: "auto",
          disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
          scrollType: "stepless",
          scrollAmount: "auto"
        },
        keyboard: {
          enable: !0,
          scrollType: "stepless",
          scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        advanced: {
          autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: !0,
          autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
          onTotalScrollOffset: 0,
          onTotalScrollBackOffset: 0,
          alwaysTriggerOffsets: !0
        }
      },
      r = 0,
      l = {},
      s = window.attachEvent && !window.addEventListener ? 1 : 0,
      c = !1,
      d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
      u = {
        init: function (t) {
          var t = e.extend(!0, {}, i, t),
            o = f.call(this);
          if (t.live) {
            var s = t.liveSelector || this.selector || n,
              c = e(s);
            if ("off" === t.live) return void m(s);
            l[s] = setTimeout(function () {
              c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
            }, 500)
          } else m(s);
          return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            preventDefault: !1,
            deltaFactor: "auto",
            normalizeDelta: !1,
            invert: !1
          }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
            var o = e(this);
            if (!o.data(a)) {
              o.data(a, {
                idx: ++r,
                opt: t,
                scrollRatio: {
                  y: null,
                  x: null
                },
                overflowed: null,
                contentReset: {
                  y: null,
                  x: null
                },
                bindEvents: !1,
                tweenRunning: !1,
                sequential: {},
                langDir: o.css("direction"),
                cbOffsets: null,
                trigger: null
              });
              var n = o.data(a),
                i = n.opt,
                l = o.data("mcs-axis"),
                s = o.data("mcs-scrollbar-position"),
                c = o.data("mcs-theme");
              l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
            }
          })
        },
        update: function (t, o) {
          var n = t || f.call(this);
          return e(n).each(function () {
            var t = e(this);
            if (t.data(a)) {
              var n = t.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container"),
                l = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
              if (!r.length) return;
              n.tweenRunning && V(t), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), S.call(this), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r.children())), n.overflowed = B.call(this), O.call(this), i.autoDraggerLength && b.call(this), C.call(this), k.call(this);
              var s = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
              "x" !== i.axis && (n.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (Q(t, s[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }), n.contentReset.y = null) : (T.call(this), "y" === i.axis ? M.call(this) : "yx" === i.axis && n.overflowed[1] && Q(t, s[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }))), "y" !== i.axis && (n.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (Q(t, s[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }), n.contentReset.x = null) : (T.call(this), "x" === i.axis ? M.call(this) : "yx" === i.axis && n.overflowed[0] && Q(t, s[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), X.call(this)
            }
          })
        },
        scrollTo: function (t, o) {
          if ("undefined" != typeof t && null != t) {
            var n = f.call(this);
            return e(n).each(function () {
              var n = e(this);
              if (n.data(a)) {
                var i = n.data(a),
                  r = i.opt,
                  l = {
                    trigger: "external",
                    scrollInertia: r.scrollInertia,
                    scrollEasing: "mcsEaseInOut",
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                  },
                  s = e.extend(!0, {}, l, o),
                  c = Y.call(this, t),
                  d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                c[0] = j.call(this, c[0], "y"), c[1] = j.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = d, setTimeout(function () {
                  null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", Q(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", Q(n, c[1].toString(), s))
                }, s.timeout)
              }
            })
          }
        },
        stop: function () {
          var t = f.call(this);
          return e(t).each(function () {
            var t = e(this);
            t.data(a) && V(t)
          })
        },
        disable: function (t) {
          var o = f.call(this);
          return e(o).each(function () {
            var o = e(this);
            if (o.data(a)) {
              {
                o.data(a)
              }
              X.call(this, "remove"), M.call(this), t && T.call(this), O.call(this, !0), o.addClass(d[3])
            }
          })
        },
        destroy: function () {
          var t = f.call(this);
          return e(t).each(function () {
            var n = e(this);
            if (n.data(a)) {
              var i = n.data(a),
                r = i.opt,
                l = e("#mCSB_" + i.idx),
                s = e("#mCSB_" + i.idx + "_container"),
                c = e(".mCSB_" + i.idx + "_scrollbar");
              r.live && m(r.liveSelector || e(t).selector), X.call(this, "remove"), M.call(this), T.call(this), n.removeData(a), Z(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
            }
          })
        }
      },
      f = function () {
        return "object" != typeof e(this) || e(this).length < 1 ? n : this
      },
      h = function (t) {
        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          n = ["minimal", "minimal-dark"],
          i = ["minimal", "minimal-dark"],
          r = ["minimal", "minimal-dark"];
        t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
      },
      m = function (e) {
        l[e] && (clearTimeout(l[e]), Z(l, e))
      },
      p = function (e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
      },
      g = function (e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
      },
      v = function () {
        var t = e(this),
          n = t.data(a),
          i = n.opt,
          r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
          l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
          c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
          u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          f = i.autoHideScrollbar ? " " + d[6] : "",
          h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
        i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir=" + n.langDir + " /></div>");
        var m = e("#mCSB_" + n.idx),
          p = e("#mCSB_" + n.idx + "_container");
        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p.children())), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
        var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
      },
      x = function (t) {
        return Math.max.apply(Math, t.map(function () {
          return e(this).outerWidth(!0)
        }).get())
      },
      _ = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx + "_container");
        n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && i.css({
          position: "absolute",
          width: "auto"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
          width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
          position: "relative"
        }).unwrap()
      },
      w = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e(".mCSB_" + o.idx + "_scrollbar:first"),
          r = te(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
          l = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
          s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
        n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
      },
      S = function () {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = t.css("max-height") || "none",
          r = -1 !== i.indexOf("%"),
          l = t.css("box-sizing");
        if ("none" !== i) {
          var s = r ? t.parent().height() * parseInt(i) / 100 : parseInt(i);
          "border-box" === l && (s -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), n.css("max-height", Math.round(s))
        }
      },
      b = function () {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
          c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
          d = s && c[1] < c[0] ? c[0] : c[1],
          u = s && c[3] < c[2] ? c[2] : c[3];
        r[0].css({
          height: d,
          "max-height": r[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
          "line-height": c[0] + "px"
        }), r[1].css({
          width: u,
          "max-width": r[1].parent().width() - 10
        })
      },
      C = function () {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
          s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
        o.scrollRatio = {
          y: s[0],
          x: s[1]
        }
      },
      y = function (e, t, o) {
        var a = o ? d[0] + "_expanded" : "",
          n = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
      },
      B = function () {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = null == o.overflowed ? i.height() : i.outerHeight(!1),
          l = null == o.overflowed ? i.width() : i.outerWidth(!1);
        return [r > n.height(), l > n.width()]
      },
      T = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx),
          r = e("#mCSB_" + o.idx + "_container"),
          l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
        if (V(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), Q(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
          var s = dx = 0;
          "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), Q(t, "_resetX")
        }
      },
      k = function () {
        function t() {
          r = setTimeout(function () {
            e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t()
          }, 100)
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt;
        if (!n.bindEvents) {
          if (R.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
            var r;
            t()
          }
          P.call(this), H.call(this), i.advanced.autoScrollOnFocus && z.call(this), i.scrollButtons.enable && U.call(this), i.keyboard.enable && F.call(this), n.bindEvents = !0
        }
      },
      M = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = ".mCSB_" + o.idx + "_scrollbar",
          l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
          s = e("#mCSB_" + o.idx + "_container");
        n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(document).unbind("." + i), l.each(function () {
          e(this).unbind("." + i)
        }), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), Z(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), Z(s[0], "onCompleteTimeout"), o.bindEvents = !1)
      },
      O = function (t) {
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = e("#mCSB_" + n.idx + "_container_wrapper"),
          l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
          s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
          c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
        "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
      },
      I = function (e) {
        var t = e.type;
        switch (t) {
          case "pointerdown":
          case "MSPointerDown":
          case "pointermove":
          case "MSPointerMove":
          case "pointerup":
          case "MSPointerUp":
            return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
          case "touchstart":
          case "touchmove":
          case "touchend":
            var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
              a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
            return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
          default:
            return [e.pageY, e.pageX, !1]
        }
      },
      R = function () {
        function t(e) {
          var t = m.find("iframe");
          if (t.length) {
            var o = e ? "auto" : "none";
            t.css("pointer-events", o)
          }
        }

        function o(e, t, o, a) {
          if (m[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1]) var i = "x",
            r = (n[0].offsetLeft - t + a) * d.scrollRatio.x;
          else var i = "y",
            r = (n[0].offsetTop - e + o) * d.scrollRatio.y;
          Q(l, r.toString(), {
            dir: i,
            drag: !0
          })
        }
        var n, i, r, l = e(this),
          d = l.data(a),
          u = d.opt,
          f = a + "_" + d.idx,
          h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
          m = e("#mCSB_" + d.idx + "_container"),
          p = e("#" + h[0] + ",#" + h[1]),
          g = u.advanced.releaseDraggableSelectors ? p.add(e(u.advanced.releaseDraggableSelectors)) : p;
        p.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function (o) {
          if (o.stopImmediatePropagation(), o.preventDefault(), $(o)) {
            c = !0, s && (document.onselectstart = function () {
              return !1
            }), t(!1), V(l), n = e(this);
            var a = n.offset(),
              d = I(o)[0] - a.top,
              f = I(o)[1] - a.left,
              h = n.height() + a.top,
              m = n.width() + a.left;
            h > d && d > 0 && m > f && f > 0 && (i = d, r = f), y(n, "active", u.autoExpandScrollbar)
          }
        }).bind("touchmove." + f, function (e) {
          e.stopImmediatePropagation(), e.preventDefault();
          var t = n.offset(),
            a = I(e)[0] - t.top,
            l = I(e)[1] - t.left;
          o(i, r, a, l)
        }), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function (e) {
          if (n) {
            var t = n.offset(),
              a = I(e)[0] - t.top,
              l = I(e)[1] - t.left;
            if (i === a) return;
            o(i, r, a, l)
          }
        }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function (e) {
          n && (y(n, "active", u.autoExpandScrollbar), n = null), c = !1, s && (document.onselectstart = null), t(!0)
        })
      },
      D = function () {
        function o(e) {
          if (!ee(e) || c || I(e)[2]) return void(t = 0);
          t = 1, S = 0, b = 0, C.removeClass("mCS_touch_action");
          var o = M.offset();
          d = I(e)[0] - o.top, u = I(e)[1] - o.left, A = [I(e)[0], I(e)[1]]
        }

        function n(e) {
          if (ee(e) && !c && !I(e)[2] && (e.stopImmediatePropagation(), !b || S)) {
            p = J();
            var t = k.offset(),
              o = I(e)[0] - t.top,
              a = I(e)[1] - t.left,
              n = "mcsLinearOut";
            if (R.push(o), D.push(a), A[2] = Math.abs(I(e)[0] - A[0]), A[3] = Math.abs(I(e)[1] - A[1]), y.overflowed[0]) var i = O[0].parent().height() - O[0].height(),
              r = d - o > 0 && o - d > -(i * y.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === B.axis);
            if (y.overflowed[1]) var l = O[1].parent().width() - O[1].width(),
              f = u - a > 0 && a - u > -(l * y.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === B.axis);
            r || f ? (e.preventDefault(), S = 1) : (b = 1, C.addClass("mCS_touch_action")), _ = "yx" === B.axis ? [d - o, u - a] : "x" === B.axis ? [null, u - a] : [d - o, null], M[0].idleTimer = 250, y.overflowed[0] && s(_[0], E, n, "y", "all", !0), y.overflowed[1] && s(_[1], E, n, "x", W, !0)
          }
        }

        function i(e) {
          if (!ee(e) || c || I(e)[2]) return void(t = 0);
          t = 1, e.stopImmediatePropagation(), V(C), m = J();
          var o = k.offset();
          f = I(e)[0] - o.top, h = I(e)[1] - o.left, R = [], D = []
        }

        function r(e) {
          if (ee(e) && !c && !I(e)[2]) {
            e.stopImmediatePropagation(), S = 0, b = 0, g = J();
            var t = k.offset(),
              o = I(e)[0] - t.top,
              a = I(e)[1] - t.left;
            if (!(g - p > 30)) {
              x = 1e3 / (g - m);
              var n = "mcsEaseOut",
                i = 2.5 > x,
                r = i ? [R[R.length - 2], D[D.length - 2]] : [0, 0];
              v = i ? [o - r[0], a - r[1]] : [o - f, a - h];
              var d = [Math.abs(v[0]), Math.abs(v[1])];
              x = i ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [x, x];
              var u = [Math.abs(M[0].offsetTop) - v[0] * l(d[0] / x[0], x[0]), Math.abs(M[0].offsetLeft) - v[1] * l(d[1] / x[1], x[1])];
              _ = "yx" === B.axis ? [u[0], u[1]] : "x" === B.axis ? [null, u[1]] : [u[0], null], w = [4 * d[0] + B.scrollInertia, 4 * d[1] + B.scrollInertia];
              var C = parseInt(B.contentTouchScroll) || 0;
              _[0] = d[0] > C ? _[0] : 0, _[1] = d[1] > C ? _[1] : 0, y.overflowed[0] && s(_[0], w[0], n, "y", W, !1), y.overflowed[1] && s(_[1], w[1], n, "x", W, !1)
            }
          }
        }

        function l(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
          return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
        }

        function s(e, t, o, a, n, i) {
          e && Q(C, e.toString(), {
            dur: t,
            scrollEasing: o,
            dir: a,
            overwrite: n,
            drag: i
          })
        }
        var d, u, f, h, m, p, g, v, x, _, w, S, b, C = e(this),
          y = C.data(a),
          B = y.opt,
          T = a + "_" + y.idx,
          k = e("#mCSB_" + y.idx),
          M = e("#mCSB_" + y.idx + "_container"),
          O = [e("#mCSB_" + y.idx + "_dragger_vertical"), e("#mCSB_" + y.idx + "_dragger_horizontal")],
          R = [],
          D = [],
          E = 0,
          W = "yx" === B.axis ? "none" : "all",
          A = [],
          P = M.find("iframe"),
          z = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T];
        M.bind(z[0], function (e) {
          o(e)
        }).bind(z[1], function (e) {
          n(e)
        }), k.bind(z[0], function (e) {
          i(e)
        }).bind(z[2], function (e) {
          r(e)
        }), P.length && P.each(function () {
          e(this).load(function () {
            L(this) && e(this.contentDocument || this.contentWindow.document).bind(z[0], function (e) {
              o(e), i(e)
            }).bind(z[1], function (e) {
              n(e)
            }).bind(z[2], function (e) {
              r(e)
            })
          })
        })
      },
      E = function () {
        function o() {
          return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
        }

        function n(e, t, o) {
          d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, q(r, e, t, "mcsLinearOut", o ? 60 : null)
        }
        var i, r = e(this),
          l = r.data(a),
          s = l.opt,
          d = l.sequential,
          u = a + "_" + l.idx,
          f = e("#mCSB_" + l.idx + "_container"),
          h = f.parent();
        f.bind("mousedown." + u, function (e) {
          t || i || (i = 1, c = !0)
        }).add(document).bind("mousemove." + u, function (e) {
          if (!t && i && o()) {
            var a = f.offset(),
              r = I(e)[0] - a.top + f[0].offsetTop,
              c = I(e)[1] - a.left + f[0].offsetLeft;
            r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
          }
        }).bind("mouseup." + u, function (e) {
          t || (i && (i = 0, n("off", null)), c = !1)
        })
      },
      W = function () {
        function t(t, a) {
          if (V(o), !A(o, t.target)) {
            var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
            if ("x" === i.axis || "x" === i.mouseWheel.axis) var d = "x",
              u = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
              f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.width() ? .9 * l.width() : u[0],
              h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
              m = c[1][0].offsetLeft,
              p = c[1].parent().width() - c[1].width(),
              g = t.deltaX || t.deltaY || a;
            else var d = "y",
              u = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
              f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.height() ? .9 * l.height() : u[0],
              h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
              m = c[0][0].offsetTop,
              p = c[0].parent().height() - c[0].height(),
              g = t.deltaY || a;
            "y" === d && !n.overflowed[0] || "x" === d && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), i.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== p || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), Q(o, (h - g * f).toString(), {
              dir: d
            }))
          }
        }
        if (e(this).data(a)) {
          var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = a + "_" + n.idx,
            l = e("#mCSB_" + n.idx),
            c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
            d = e("#mCSB_" + n.idx + "_container").find("iframe");
          d.length && d.each(function () {
            e(this).load(function () {
              L(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                t(e, o)
              })
            })
          }), l.bind("mousewheel." + r, function (e, o) {
            t(e, o)
          })
        }
      },
      L = function (e) {
        var t = null;
        try {
          var o = e.contentDocument || e.contentWindow.document;
          t = o.body.innerHTML
        } catch (a) {}
        return null !== t
      },
      A = function (t, o) {
        var n = o.nodeName.toLowerCase(),
          i = t.data(a).opt.mouseWheel.disableOver,
          r = ["select", "textarea"];
        return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
      },
      P = function () {
        var t = e(this),
          o = t.data(a),
          n = a + "_" + o.idx,
          i = e("#mCSB_" + o.idx + "_container"),
          r = i.parent(),
          l = e(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
        l.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function (e) {
          c = !0
        }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function (e) {
          c = !1
        }).bind("click." + n, function (a) {
          if (e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail")) {
            V(t);
            var n = e(this),
              l = n.find(".mCSB_dragger");
            if (n.parent(".mCSB_scrollTools_horizontal").length > 0) {
              if (!o.overflowed[1]) return;
              var s = "x",
                c = a.pageX > l.offset().left ? -1 : 1,
                u = Math.abs(i[0].offsetLeft) - .9 * c * r.width()
            } else {
              if (!o.overflowed[0]) return;
              var s = "y",
                c = a.pageY > l.offset().top ? -1 : 1,
                u = Math.abs(i[0].offsetTop) - .9 * c * r.height()
            }
            Q(t, u.toString(), {
              dir: s,
              scrollEasing: "mcsEaseInOut"
            })
          }
        })
      },
      z = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = e("#mCSB_" + o.idx + "_container"),
          l = r.parent();
        r.bind("focusin." + i, function (o) {
          var a = e(document.activeElement),
            i = r.find(".mCustomScrollBox").length,
            s = 0;
          a.is(n.advanced.autoScrollOnFocus) && (V(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function () {
            var e = [oe(a)[0], oe(a)[1]],
              o = [r[0].offsetTop, r[0].offsetLeft],
              i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
              c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
            "x" === n.axis || i[0] || Q(t, e[0].toString(), {
              dir: "y",
              scrollEasing: "mcsEaseInOut",
              overwrite: c,
              dur: s
            }), "y" === n.axis || i[1] || Q(t, e[1].toString(), {
              dir: "x",
              scrollEasing: "mcsEaseInOut",
              overwrite: c,
              dur: s
            })
          }, t[0]._focusTimer))
        })
      },
      H = function () {
        var t = e(this),
          o = t.data(a),
          n = a + "_" + o.idx,
          i = e("#mCSB_" + o.idx + "_container").parent();
        i.bind("scroll." + n, function (t) {
          (0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
        })
      },
      U = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = o.sequential,
          r = a + "_" + o.idx,
          l = ".mCSB_" + o.idx + "_scrollbar",
          s = e(l + ">a");
        s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
          function r(e, o) {
            i.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, q(t, e, o)
          }
          if (a.preventDefault(), $(a)) {
            var l = e(this).attr("class");
            switch (i.type = n.scrollButtons.scrollType, a.type) {
              case "mousedown":
              case "touchstart":
              case "pointerdown":
              case "MSPointerDown":
                if ("stepped" === i.type) return;
                c = !0, o.tweenRunning = !1, r("on", l);
                break;
              case "mouseup":
              case "touchend":
              case "pointerup":
              case "MSPointerUp":
              case "mouseout":
              case "pointerout":
              case "MSPointerOut":
                if ("stepped" === i.type) return;
                c = !1, i.dir && r("off", l);
                break;
              case "click":
                if ("stepped" !== i.type || o.tweenRunning) return;
                r("on", l)
            }
          }
        })
      },
      F = function () {
        function t(t) {
          function a(e, t) {
            r.type = i.keyboard.scrollType, r.scrollAmount = i.snapAmount || i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || q(o, e, t)
          }
          switch (t.type) {
            case "blur":
              n.tweenRunning && r.dir && a("off", null);
              break;
            case "keydown":
            case "keyup":
              var l = t.keyCode ? t.keyCode : t.which,
                s = "on";
              if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
              } else if (33 === l || 34 === l) {
                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                  V(o);
                  var f = 34 === l ? -1 : 1;
                  if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                    m = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
                  else var h = "y",
                    m = Math.abs(c[0].offsetTop) - .9 * f * d.height();
                  Q(o, m.toString(), {
                    dir: h,
                    scrollEasing: "mcsEaseInOut"
                  })
                }
              } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                  m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                else var h = "y",
                  m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                Q(o, m.toString(), {
                  dir: h,
                  scrollEasing: "mcsEaseInOut"
                })
              }
          }
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = n.sequential,
          l = a + "_" + n.idx,
          s = e("#mCSB_" + n.idx),
          c = e("#mCSB_" + n.idx + "_container"),
          d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          f = c.find("iframe"),
          h = ["blur." + l + " keydown." + l + " keyup." + l];
        f.length && f.each(function () {
          e(this).load(function () {
            L(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
              t(e)
            })
          })
        }), s.attr("tabindex", "0").bind(h[0], function (e) {
          t(e)
        })
      },
      q = function (t, o, n, i, r) {
        function l(e) {
          var o = "stepped" !== f.type,
            a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
            n = e ? o ? 7.5 : 40 : 2.5,
            s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
            u = "x" === f.dir[0] ? s[1] + f.dir[1] * d[1] * n : s[0] + f.dir[1] * d[0] * n,
            m = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
            v = "auto" !== f.scrollAmount ? m : u,
            x = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
            _ = e ? !0 : !1;
          return e && 17 > a && (v = "x" === f.dir[0] ? s[1] : s[0]), Q(t, v.toString(), {
            dir: f.dir[0],
            scrollEasing: x,
            dur: a,
            onComplete: _
          }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function () {
            l()
          }, a)))
        }

        function s() {
          clearTimeout(f.step), Z(f, "step"), V(t)
        }
        var c = t.data(a),
          u = c.opt,
          f = c.sequential,
          h = e("#mCSB_" + c.idx + "_container"),
          m = "stepped" === f.type ? !0 : !1,
          p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
          g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
        switch (o) {
          case "on":
            if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], V(t), te(n) && "stepped" === f.type) return;
            l(m);
            break;
          case "off":
            s(), (m || c.tweenRunning && f.dir) && l(!0)
        }
      },
      Y = function (t) {
        var o = e(this).data(a).opt,
          n = [];
        return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
      },
      j = function (t, o) {
        if (null != t && "undefined" != typeof t) {
          var n = e(this),
            i = n.data(a),
            r = i.opt,
            l = e("#mCSB_" + i.idx + "_container"),
            s = l.parent(),
            c = typeof t;
          o || (o = "x" === r.axis ? "x" : "y");
          var d = "x" === o ? l.outerWidth(!1) : l.outerHeight(!1),
            f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
            h = "x" === o ? "left" : "top";
          switch (c) {
            case "function":
              return t();
            case "object":
              var m = t.jquery ? t : e(t);
              if (!m.length) return;
              return "x" === o ? oe(m)[1] : oe(m)[0];
            case "string":
            case "number":
              if (te(t)) return Math.abs(t);
              if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
              if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
              if (-1 !== t.indexOf("+=")) {
                var p = f + parseInt(t.split("+=")[1]);
                return p >= 0 ? 0 : Math.abs(p)
              }
              if (-1 !== t.indexOf("px") && te(t.split("px")[0])) return Math.abs(t.split("px")[0]);
              if ("top" === t || "left" === t) return 0;
              if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
              if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
              if ("first" === t || "last" === t) {
                var m = l.find(":" + t);
                return "x" === o ? oe(m)[1] : oe(m)[0]
              }
              return e(t).length ? "x" === o ? oe(e(t))[1] : oe(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
          }
        }
      },
      X = function (t) {
        function o() {
          return clearTimeout(h[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(h[0].autoUpdate = setTimeout(function () {
            return f.advanced.updateOnSelectorChange && (m = r(), m !== w) ? (l(3), void(w = m)) : (f.advanced.updateOnContentResize && (p = [h.outerHeight(!1), h.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]], (p[0] !== S[0] || p[1] !== S[1] || p[2] !== S[2] || p[3] !== S[3] || p[4] !== S[4] || p[5] !== S[5]) && (l(p[0] !== S[0] || p[1] !== S[1]), S = p)), f.advanced.updateOnImageLoad && (g = n(), g !== b && (h.find("img").each(function () {
              i(this)
            }), b = g)), void((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && o()))
          }, f.advanced.autoUpdateTimeout))
        }

        function n() {
          var e = 0;
          return f.advanced.updateOnImageLoad && (e = h.find("img").length), e
        }

        function i(t) {
          function o(e, t) {
            return function () {
              return t.apply(e, arguments)
            }
          }

          function a() {
            this.onload = null, e(t).addClass(d[2]), l(2)
          }
          if (e(t).hasClass(d[2])) return void l();
          var n = new Image;
          n.onload = o(n, a), n.src = t.src
        }

        function r() {
          f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
          var t = 0,
            o = h.find(f.advanced.updateOnSelectorChange);
          return f.advanced.updateOnSelectorChange && o.length > 0 && o.each(function () {
            t += e(this).height() + e(this).width()
          }), t
        }

        function l(e) {
          clearTimeout(h[0].autoUpdate), u.update.call(null, s[0], e)
        }
        var s = e(this),
          c = s.data(a),
          f = c.opt,
          h = e("#mCSB_" + c.idx + "_container");
        if (t) return clearTimeout(h[0].autoUpdate), void Z(h[0], "autoUpdate");
        var m, p, g, v = h.parent(),
          x = [e("#mCSB_" + c.idx + "_scrollbar_vertical"), e("#mCSB_" + c.idx + "_scrollbar_horizontal")],
          _ = function () {
            return [x[0].is(":visible") ? x[0].outerHeight(!0) : 0, x[1].is(":visible") ? x[1].outerWidth(!0) : 0]
          },
          w = r(),
          S = [h.outerHeight(!1), h.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]],
          b = n();
        o()
      },
      N = function (e, t, o) {
        return Math.round(e / t) * t - o
      },
      V = function (t) {
        var o = t.data(a),
          n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
        n.each(function () {
          K.call(this)
        })
      },
      Q = function (t, o, n) {
        function i(e) {
          return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
        }

        function r() {
          return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + b, c.callbacks.alwaysTriggerOffsets || -C >= _]
        }

        function l() {
          var e = [h[0].offsetTop, h[0].offsetLeft],
            o = [v[0].offsetTop, v[0].offsetLeft],
            a = [h.outerHeight(!1), h.outerWidth(!1)],
            i = [f.height(), f.width()];
          t[0].mcs = {
            content: h,
            top: e[0],
            left: e[1],
            draggerTop: o[0],
            draggerLeft: o[1],
            topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
            leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
            direction: n.dir
          }
        }
        var s = t.data(a),
          c = s.opt,
          d = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: c.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
          },
          n = e.extend(d, n),
          u = [n.dur, n.drag ? 0 : n.dur],
          f = e("#mCSB_" + s.idx),
          h = e("#mCSB_" + s.idx + "_container"),
          m = h.parent(),
          p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
          switch (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (o = N(o, c.snapAmount, c.snapOffset)), n.dir) {
            case "x":
              var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                x = "left",
                _ = h[0].offsetLeft,
                w = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                S = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                b = p[1],
                C = g[1],
                B = b > 0 ? b / s.scrollRatio.x : 0,
                T = C > 0 ? C / s.scrollRatio.x : 0;
              break;
            case "y":
              var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
                x = "top",
                _ = h[0].offsetTop,
                w = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                S = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                b = p[0],
                C = g[0],
                B = b > 0 ? b / s.scrollRatio.y : 0,
                T = C > 0 ? C / s.scrollRatio.y : 0
          }
          S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= w[1] ? S = [w[0], w[1]] : S[0] = -S[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && S[0] >= 0 || _ === w[0] && S[0] <= w[0])) && (G(v[0], x, Math.round(S[1]), u[1], n.scrollEasing), G(h[0], x, Math.round(S[0]), u[0], n.scrollEasing, n.overwrite, {
            onStart: function () {
              n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, y(v), s.cbOffsets = r())
            },
            onUpdate: function () {
              n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
            },
            onComplete: function () {
              if (n.callbacks && n.onComplete) {
                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                var e = h[0].idleTimer || 0;
                h[0].onCompleteTimeout = setTimeout(function () {
                  i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && S[1] >= w[1] - B && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && S[1] <= T && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, y(v, "hide")
                }, e)
              }
            }
          }))
        }
      },
      G = function (e, t, o, a, n, i, r) {
        function l() {
          S.stop || (x || m.call(), x = J() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
        }

        function s() {
          a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
        }

        function c() {
          f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
            return s(), setTimeout(e, .01)
          }, S.id = h(l)
        }

        function d() {
          null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
        }

        function u(e, t, o, a, n) {
          switch (n) {
            case "linear":
            case "mcsLinear":
              return o * e / a + t;
            case "mcsLinearOut":
              return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
            case "easeInOutSmooth":
              return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
            case "easeInOutStrong":
              return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
            case "easeInOut":
            case "mcsEaseInOut":
              return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
            case "easeOutSmooth":
              return e /= a, e--, -o * (e * e * e * e - 1) + t;
            case "easeOutStrong":
              return o * (-Math.pow(2, -10 * e / a) + 1) + t;
            case "easeOut":
            case "mcsEaseOut":
            default:
              var i = (e /= a) * e,
                r = i * e;
              return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
          }
        }
        e._mTween || (e._mTween = {
          top: {},
          left: {}
        });
        var f, h, r = r || {},
          m = r.onStart || function () {},
          p = r.onUpdate || function () {},
          g = r.onComplete || function () {},
          v = J(),
          x = 0,
          _ = e.offsetTop,
          w = e.style,
          S = e._mTween[t];
        "left" === t && (_ = e.offsetLeft);
        var b = o - _;
        S.stop = 0, "none" !== i && d(), c()
      },
      J = function () {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
      },
      K = function () {
        var e = this;
        e._mTween || (e._mTween = {
          top: {},
          left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
          var a = t[o];
          e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
        }
      },
      Z = function (e, t) {
        try {
          delete e[t]
        } catch (o) {
          e[t] = null
        }
      },
      $ = function (e) {
        return !(e.which && 1 !== e.which)
      },
      ee = function (e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
      },
      te = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      },
      oe = function (e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
      };
    e.fn[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }, e[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }, e[o].defaults = i, window[o] = !0, e(window).load(function () {
      e(n)[o](), e.extend(e.expr[":"], {
        mcsInView: e.expr[":"].mcsInView || function (t) {
          var o, a, n = e(t),
            i = n.parents(".mCSB_container");
          if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + oe(n)[0] >= 0 && a[0] + oe(n)[0] < o.height() - n.outerHeight(!1) && a[1] + oe(n)[1] >= 0 && a[1] + oe(n)[1] < o.width() - n.outerWidth(!1)
        },
        mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
          var o = e(t).data(a);
          if (o) return o.overflowed[0] || o.overflowed[1]
        }
      })
    })
  })
});;
(function (f) {
  "use strict";
  "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function ($) {
  "use strict";

  function n(a) {
    return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
  }

  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : {
      top: a,
      left: a
    }
  }
  var p = $.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b)
  };
  p.defaults = {
    axis: "xy",
    duration: 0,
    limit: !0
  };
  $.fn.scrollTo = function (a, d, b) {
    "object" === typeof d && (b = d, d = 0);
    "function" === typeof b && (b = {
      onAfter: b
    });
    "max" === a && (a = 9E9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete: a && function () {
            a.call(q, e, b)
          }
        });
        r.animate(f, k)
      }
      if (null !== a) {
        var l = n(this),
          q = l ? this.contentWindow || window : this,
          r = $(q),
          e = a,
          f = {},
          t;
        switch (typeof e) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break
            }
            e = l ? $(e) : $(e, q);
          case "object":
            if (e.length === 0) return;
            if (e.is || e.style) t = (e = $(e)).offset()
        }
        var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
        $.each(b.axis.split(""), function (a, c) {
          var d = "x" === c ? "Left" : "Top",
            m = d.toLowerCase(),
            g = "scroll" + d,
            h = r[g](),
            n = p.max(q, c);
          t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
          b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
        });
        k(b.onAfter)
      }
    })
  };
  p.max = function (a, d) {
    var b = "x" === d ? "Width" : "Height",
      h = "scroll" + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = "client" + b,
      k = a.ownerDocument || a.document,
      l = k.documentElement,
      k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function (a) {
      return $(a.elem)[a.prop]()
    },
    set: function (a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
    }
  };
  return p
});
(function (o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1
  };
  o.zoom = function (t, n, e, i) {
    var u, c, a, r, m, l, s, f = o(t),
      h = f.css("position"),
      d = o(n);
    return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      width: e.width * i,
      height: e.height * i,
      border: "none",
      maxWidth: "none",
      maxHeight: "none"
    }).appendTo(t), {
      init: function () {
        c = f.outerWidth(), u = f.outerHeight(), n === t ? (r = c, a = u) : (r = d.outerWidth(), a = d.outerHeight()), m = (e.width - c) / r, l = (e.height - u) / a, s = d.offset()
      },
      move: function (o) {
        var t = o.pageX - s.left,
          n = o.pageY - s.top;
        n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, r), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px"
      }
    }
  }, o.fn.zoom = function (n) {
    return this.each(function () {
      var e = o.extend({}, t, n || {}),
        i = e.target && o(e.target)[0] || this,
        u = this,
        c = o(u),
        a = document.createElement("img"),
        r = o(a),
        m = "mousemove.zoom",
        l = !1,
        s = !1;
      if (!e.url) {
        var f = u.querySelector("img");
        if (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url) return
      }
      c.one("zoom.destroy", function (o, t) {
        c.off(".zoom"), i.style.position = o, i.style.overflow = t, a.onload = null, r.remove()
      }.bind(this, i.style.position, i.style.overflow)), a.onload = function () {
        function t(t) {
          f.init(), f.move(t), r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1)
        }

        function n() {
          r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1)
        }
        var f = o.zoom(i, u, a, e.magnify);
        "grab" === e.on ? c.on("mousedown.zoom", function (e) {
          1 === e.which && (o(document).one("mouseup.zoom", function () {
            n(), o(document).off(m, f.move)
          }), t(e), o(document).on(m, f.move), e.preventDefault())
        }) : "click" === e.on ? c.on("click.zoom", function (e) {
          return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function () {
            n(), l = !1, o(document).off(m, f.move)
          }), !1)
        }) : "toggle" === e.on ? c.on("click.zoom", function (o) {
          l ? n() : t(o), l = !l
        }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function (o) {
          o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
        }).on("touchmove.zoom", function (o) {
          o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
        }).on("touchend.zoom", function (o) {
          o.preventDefault(), s && (s = !1, n())
        }), o.isFunction(e.callback) && e.callback.call(a)
      }, a.src = e.url
    })
  }, o.fn.zoom.defaults = t
})(window.jQuery);;
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
}(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }
      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);
        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        return (document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join(''));
      }
      if (!key) {
        result = {};
      }
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }
      return result;
    }
    api.set = api;
    api.get = function (key) {
      return api(key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };
    api.withConverter = init;
    return api;
  }
  return init(function () {});
}));
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object' && typeof require === 'function') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {
  'use strict';
  $.fn.lockTab = function () {
    $(this).each(function () {
      var $this = $(this);
      var $formInputs = $this.find('input[type="text"], input[type="password"], input[type="submit"], textarea');
      if ($formInputs.length >= 1) {
        $formInputs.last().keydown(function (e) {
          if (e.keyCode == 9 && !e.shiftKey) {
            e.preventDefault();
            $formInputs.first().focus();
            return false;
          }
        });
        $formInputs.first().keydown(function (e) {
          if (e.keyCode == 9 && e.shiftKey) {
            e.preventDefault();
            $formInputs.last().focus();
            return false;
          }
        });
      }
    });
  };
}));
var mejs = mejs || {};
mejs.version = "2.22.0", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
      version: [3, 0],
      types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
      version: [9, 0, 124],
      types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
    }],
    youtube: [{
      version: null,
      types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
      version: null,
      types: ["video/vimeo", "video/x-vimeo"]
    }]
  }, mejs.Utility = {
    encodeUrl: function (a) {
      return encodeURIComponent(a)
    },
    escapeHTML: function (a) {
      return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (a) {
      var b = document.createElement("div");
      return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
    },
    getScriptPath: function (a) {
      for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
        for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, f = ""), b = 0; m > b; b++)
          if (j = a[b], d = g.indexOf(j), d > -1) {
            i = f;
            break
          }
        if ("" !== i) break
      }
      return i
    },
    calculateTimeFormat: function (a, b, c) {
      0 > a && (a = 0), "undefined" == typeof c && (c = 25);
      var d = b.timeFormat,
        e = d[0],
        f = d[1] == d[0],
        g = f ? 2 : 1,
        h = ":",
        i = Math.floor(a / 3600) % 24,
        j = Math.floor(a / 60) % 60,
        k = Math.floor(a % 60),
        l = Math.floor((a % 1 * c).toFixed(3)),
        m = [
          [l, "f"],
          [k, "s"],
          [j, "m"],
          [i, "h"]
        ];
      d.length < g && (h = d[g]);
      for (var n = !1, o = 0, p = m.length; p > o; o++)
        if (-1 !== d.indexOf(m[o][1])) n = !0;
        else if (n) {
        for (var q = !1, r = o; p > r; r++)
          if (m[r][0] > 0) {
            q = !0;
            break
          }
        if (!q) break;
        f || (d = e + d), d = m[o][1] + h + d, f && (d = m[o][1] + d), e = m[o][1]
      }
      b.currentTimeFormat = d
    },
    twoDigitsString: function (a) {
      return 10 > a ? "0" + a : String(a)
    },
    secondsToTimeCode: function (a, b) {
      if (0 > a && (a = 0), "object" != typeof b) {
        var c = "m:ss";
        c = arguments[1] ? "hh:mm:ss" : c, c = arguments[2] ? c + ":ff" : c, b = {
          currentTimeFormat: c,
          framesPerSecond: arguments[3] || 25
        }
      }
      var d = b.framesPerSecond;
      "undefined" == typeof d && (d = 25);
      var c = b.currentTimeFormat,
        e = Math.floor(a / 3600) % 24,
        f = Math.floor(a / 60) % 60,
        g = Math.floor(a % 60),
        h = Math.floor((a % 1 * d).toFixed(3));
      lis = [
        [h, "f"],
        [g, "s"],
        [f, "m"],
        [e, "h"]
      ];
      var j = c;
      for (i = 0, len = lis.length; i < len; i++) j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), j = j.replace(lis[i][1], lis[i][0]);
      return j
    },
    timeCodeToSeconds: function (a, b, c, d) {
      "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
      var e = a.split(":"),
        f = parseInt(e[0], 10),
        g = parseInt(e[1], 10),
        h = parseInt(e[2], 10),
        i = 0,
        j = 0;
      return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i
    },
    convertSMPTEtoSeconds: function (a) {
      if ("string" != typeof a) return !1;
      a = a.replace(",", ".");
      var b = 0,
        c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
        d = 1;
      a = a.split(":").reverse();
      for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
      return Number(b.toFixed(c))
    },
    removeSwf: function (a) {
      var b = document.getElementById(a);
      b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function () {
        4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
      }()) : b.parentNode.removeChild(b))
    },
    removeObjectInIE: function (a) {
      var b = document.getElementById(a);
      if (b) {
        for (var c in b) "function" == typeof b[c] && (b[c] = null);
        b.parentNode.removeChild(b)
      }
    },
    determineScheme: function (a) {
      return a && -1 != a.indexOf("://") ? a.substr(0, a.indexOf("://") + 3) : "//"
    }
  }, mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
      var c = this.plugins[a];
      return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
      this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function (a, b, c, d) {
      var e, f, g, h = [0, 0, 0];
      if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
        if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin))
          for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), f = 0; f < h.length; f++) h[f] = parseInt(h[f].match(/\d+/), 10)
      } else if ("undefined" != typeof window.ActiveXObject) try {
        g = new ActiveXObject(c), g && (h = d(g))
      } catch (i) {}
      return h
    }
  }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var b = [],
      c = a.GetVariable("$version");
    return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
  }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var b = [0, 0, 0, 0],
      c = function (a, b, c, d) {
        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += d;
        b[c] -= d
      };
    return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
  }), mejs.MediaFeatures = {
    init: function () {
      var a, b, c = this,
        d = document,
        e = mejs.PluginDetector.nav,
        f = mejs.PluginDetector.ua.toLowerCase(),
        g = ["source", "track", "audio", "video"];
      c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), c.hasTouch = "ontouchstart" in window, c.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
      for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
      c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
      try {
        b.canPlayType("video/mp4")
      } catch (h) {
        c.supportsMediaTag = !1
      }
      c.supportsPointerEvents = function () {
        var a, b = document.createElement("x"),
          c = document.documentElement,
          d = window.getComputedStyle;
        return "pointerEvents" in b.style ? (b.style.pointerEvents = "auto", b.style.pointerEvents = "x", c.appendChild(b), a = d && "auto" === d(b, "").pointerEvents, c.removeChild(b), !!a) : !1
      }(), c.hasFirefoxPluginMovingProblem = !1, c.hasiOSFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), c.isChrome && (c.hasiOSFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), c.isFullScreen = function () {
        return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0
      }, c.requestFullScreen = function (a) {
        c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen()
      }, c.cancelFullScreen = function () {
        c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen()
      }), c.hasiOSFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, c.hasiOSFullScreen = !1)
    }
  }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (a) {
      this.currentTime = a
    },
    setMuted: function (a) {
      this.muted = a
    },
    setVolume: function (a) {
      this.volume = a
    },
    stop: function () {
      this.pause()
    },
    setSrc: function (a) {
      for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
      if ("string" == typeof a) this.src = a;
      else {
        var c, d;
        for (c = 0; c < a.length; c++)
          if (d = a[c], this.canPlayType(d.type)) {
            this.src = d.src;
            break
          }
      }
    },
    setVideoSize: function (a, b) {
      this.width = a, this.height = b
    }
  }, mejs.PluginMediaElement = function (a, b, c) {
    this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
  }, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
      null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function () {
      null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function () {
      null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function () {
      null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function (a) {
      var b, c, d, e = mejs.plugins[this.pluginType];
      for (b = 0; b < e.length; b++)
        if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
          for (c = 0; c < d.types.length; c++)
            if (a == d.types[c]) return "probably";
      return ""
    },
    positionFullscreenButton: function (a, b, c) {
      null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function () {
      null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
      if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a);
      else {
        var b, c;
        for (b = 0; b < a.length; b++)
          if (c = a[b], this.canPlayType(c.type)) {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(c.src);
            break
          }
      }
    },
    setCurrentTime: function (a) {
      null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
    },
    setVolume: function (a) {
      null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), this.volume = a)
    },
    setMuted: function (a) {
      null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent({
        type: "volumechange"
      })) : this.pluginApi.setMuted(a), this.muted = a)
    },
    setVideoSize: function (a, b) {
      this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function (a) {
      null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
      null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function () {
      null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function (a, b, c) {
      this.events[a] = this.events[a] || [], this.events[a].push(b)
    },
    removeEventListener: function (a, b) {
      if (!a) return this.events = {}, !0;
      var c = this.events[a];
      if (!c) return !0;
      if (!b) return this.events[a] = [], !0;
      for (var d = 0; d < c.length; d++)
        if (c[d] === b) return this.events[a].splice(d, 1), !0;
      return !1
    },
    dispatchEvent: function (a) {
      var b, c = this.events[a.type];
      if (c)
        for (b = 0; b < c.length; b++) c[b].apply(this, [a])
    },
    hasAttribute: function (a) {
      return a in this.attributes
    },
    removeAttribute: function (a) {
      delete this.attributes[a]
    },
    getAttribute: function (a) {
      return this.hasAttribute(a) ? this.attributes[a] : ""
    },
    setAttribute: function (a, b) {
      this.attributes[a] = b
    },
    remove: function () {
      mejs.Utility.removeSwf(this.pluginElement.id)
    }
  }, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "/local/js/libs/flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function () {},
    error: function () {}
  }, mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
  }, mejs.HtmlMediaElementShim = {
    create: function (a, b) {
      var c, d, e = {},
        f = "string" == typeof a ? document.getElementById(a) : a,
        g = f.tagName.toLowerCase(),
        h = "audio" === g || "video" === g,
        i = h ? f.getAttribute("src") : f.getAttribute("href"),
        j = f.getAttribute("poster"),
        k = f.getAttribute("autoplay"),
        l = f.getAttribute("preload"),
        m = f.getAttribute("controls");
      for (d in mejs.MediaElementDefaults) e[d] = mejs.MediaElementDefaults[d];
      for (d in b) e[d] = b[d];
      return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", c.scheme = mejs.Utility.determineScheme(c.url), "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, f.addEventListener("click", function () {
        f.play()
      }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), this)
    },
    determinePlayback: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = [],
        r = {
          method: "",
          url: "",
          htmlMediaElement: a,
          isVideo: "audio" != a.tagName.toLowerCase(),
          scheme: ""
        };
      if ("undefined" != typeof b.type && "" !== b.type)
        if ("string" == typeof b.type) q.push({
          type: b.type,
          url: e
        });
        else
          for (f = 0; f < b.type.length; f++) q.push({
            type: b.type[f],
            url: e
          });
      else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
        type: k,
        url: e
      });
      else
        for (f = 0; f < a.childNodes.length; f++) j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
          type: k,
          url: e
        }));
      if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function (a) {
          return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }), mejs.MediaFeatures.isChromium && (a.canPlayType = function (a) {
          return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
        }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
        for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++)
          if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
            r.method = "native", r.url = q[f].url;
            break
          }
        if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)) return r
      }
      if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
        for (f = 0; f < q.length; f++)
          for (k = q[f].type, g = 0; g < b.plugins.length; g++)
            for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++)
              if (n = m[h], null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version))
                for (i = 0; i < n.types.length; i++)
                  if (k.toLowerCase() == n.types[i].toLowerCase()) return r.method = l, r.url = q[f].url, r;
      return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), r)
    },
    formatType: function (a, b) {
      return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function (a) {
      a = a.split("?")[0];
      var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
        c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video/" : "audio/";
      return this.getTypeFromExtension(b, c)
    },
    getTypeFromExtension: function (a, b) {
      switch (b = b || "", a) {
        case "mp4":
        case "m4v":
        case "m4a":
        case "f4v":
        case "f4a":
          return b + "mp4";
        case "flv":
          return b + "x-flv";
        case "webm":
        case "webma":
        case "webmv":
          return b + "webm";
        case "ogg":
        case "oga":
        case "ogv":
          return b + "ogg";
        case "m3u8":
          return "application/x-mpegurl";
        case "ts":
          return b + "mp2t";
        default:
          return b + a
      }
    },
    createErrorMessage: function (a, b, c) {
      var d = a.htmlMediaElement,
        e = document.createElement("div"),
        f = b.customError;
      e.className = "me-cannotplay";
      try {
        e.style.width = d.width + "px", e.style.height = d.height + "px"
      } catch (g) {}
      f || (f = '<a href="' + a.url + '">', "" !== c && (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'), f += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), e.innerHTML = f, d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
    },
    createPlugin: function (a, b, c, d, e, f) {
      var g, h, i, j = a.htmlMediaElement,
        k = 1,
        l = 1,
        m = "me_" + a.method + "_" + mejs.meIndex++,
        n = new mejs.PluginMediaElement(m, a.method, a.url),
        o = document.createElement("div");
      n.tagName = j.tagName;
      for (var p = 0; p < j.attributes.length; p++) {
        var q = j.attributes[p];
        q.specified && n.setAttribute(q.name, q.value)
      }
      for (h = j.parentNode; null !== h && null != h.tagName && "body" !== h.tagName.toLowerCase() && null != h.parentNode && null != h.parentNode.tagName && null != h.parentNode.constructor && "ShadowRoot" === h.parentNode.constructor.name;) {
        if ("p" === h.parentNode.tagName.toLowerCase()) {
          h.parentNode.parentNode.insertBefore(h, h.parentNode);
          break
        }
        h = h.parentNode
      }
      switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, l = 240), n.success = b.success, o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), ("flash" === a.method || "silverlight" === a.method) && (i = ["id=" + m, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && ("flash" == a.method ? i.push("file=" + mejs.Utility.encodeUrl(a.url)) : i.push("file=" + a.url)), b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), b.pluginVars && (i = i.concat(b.pluginVars)), window[m + "_init"] = function () {
        switch (n.pluginType) {
          case "flash":
            n.pluginElement = n.pluginApi = document.getElementById(m);
            break;
          case "silverlight":
            n.pluginElement = document.getElementById(n.id), n.pluginApi = n.pluginElement.Content.MediaElementJS
        }
        null != n.pluginApi && n.success && n.success(n, j)
      }, window[m + "_event"] = function (a, b) {
        var c, d, e;
        c = {
          type: a,
          target: n
        };
        for (d in b) n[d] = b[d], c[d] = b[d];
        e = b.bufferedTime || 0, c.target.buffered = c.buffered = {
          start: function (a) {
            return 0
          },
          end: function (a) {
            return e
          },
          length: 1
        }, n.dispatchEvent(c)
      }), a.method) {
        case "silverlight":
          o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
          break;
        case "flash":
          mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?" + (new Date).getTime() + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + b.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + b.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
          break;
        case "youtube":
          var r;
          if (-1 != a.url.lastIndexOf("youtu.be")) r = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?")));
          else {
            var s = a.url.match(/[?&]v=([^&#]+)|&|#|$/);
            s && (r = s[1])
          }
          youtubeSettings = {
            container: o,
            containerId: o.id,
            pluginMediaElement: n,
            pluginId: m,
            videoId: r,
            height: l,
            width: k,
            scheme: a.scheme
          }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, b);
          break;
        case "vimeo":
          var t = m + "_player";
          if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="' + a.scheme + "player.vimeo.com/video/" + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + t + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + t + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
            var u = $f(o.childNodes[0]),
              v = -1;
            u.addEvent("ready", function () {
              function a(a, b, c, d) {
                var e = {
                  type: c,
                  target: b
                };
                "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e)
              }
              u.playVideo = function () {
                u.api("play")
              }, u.stopVideo = function () {
                u.api("unload")
              }, u.pauseVideo = function () {
                u.api("pause")
              }, u.seekTo = function (a) {
                u.api("seekTo", a)
              }, u.setVolume = function (a) {
                u.api("setVolume", a)
              }, u.setMuted = function (a) {
                a ? (u.lastVolume = u.api("getVolume"), u.api("setVolume", 0)) : (u.api("setVolume", u.lastVolume), delete u.lastVolume)
              }, u.getPlayerState = function () {
                return v
              }, u.addEvent("play", function () {
                v = 1, a(u, n, "play"), a(u, n, "playing")
              }), u.addEvent("pause", function () {
                v = 2, a(u, n, "pause")
              }), u.addEvent("finish", function () {
                v = 0, a(u, n, "ended")
              }), u.addEvent("playProgress", function (b) {
                a(u, n, "timeupdate", b)
              }), u.addEvent("seek", function (b) {
                v = 3, a(u, n, "seeked", b)
              }), u.addEvent("loadProgress", function (b) {
                v = 3, a(u, n, "progress", b)
              }), n.pluginElement = o, n.pluginApi = u, n.success(n, n.pluginElement)
            })
          } else console.warn("You need to include froogaloop for vimeo to work")
      }
      return j.style.display = "none", j.removeAttribute("autoplay"), n
    },
    updateNative: function (a, b, c, d) {
      var e, f = a.htmlMediaElement;
      for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
      return b.success(f, f), f
    }
  }, mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function (a) {
      if (!this.isIframeStarted) {
        var b = document.createElement("script");
        b.src = a.scheme + "www.youtube.com/player_api";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(b, c), this.isIframeStarted = !0
      }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
      this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(a), this.iframeQueue.push(a))
    },
    createIframe: function (a) {
      var b = a.pluginMediaElement,
        c = new YT.Player(a.containerId, {
          height: a.height,
          width: a.width,
          videoId: a.videoId,
          playerVars: {
            controls: 0,
            wmode: "transparent"
          },
          events: {
            onReady: function () {
              c.setVideoSize = function (a, b) {
                c.setSize(a, b)
              }, a.pluginMediaElement.pluginApi = c, a.pluginMediaElement.pluginElement = document.getElementById(a.containerId), b.success(b, b.pluginElement), setInterval(function () {
                mejs.YouTubeApi.createEvent(c, b, "timeupdate")
              }, 250)
            },
            onStateChange: function (a) {
              mejs.YouTubeApi.handleStateChange(a.data, c, b)
            }
          }
        })
    },
    createEvent: function (a, b, c) {
      var d = {
        type: c,
        target: b
      };
      if (a && a.getDuration) {
        b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
        var e = d.bufferedBytes / d.bytesTotal * d.duration;
        d.target.buffered = d.buffered = {
          start: function (a) {
            return 0
          },
          end: function (a) {
            return e
          },
          length: 1
        }
      }
      b.dispatchEvent(d)
    },
    iFrameReady: function () {
      for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
        var a = this.iframeQueue.pop();
        this.createIframe(a)
      }
    },
    flashPlayers: {},
    createFlash: function (a) {
      this.flashPlayers[a.pluginId] = a;
      var b, c = a.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
      mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + a.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function (a) {
      var b = this.flashPlayers[a],
        c = document.getElementById(a),
        d = b.pluginMediaElement;
      d.pluginApi = d.pluginElement = c, b.success(d, d.pluginElement), c.cueVideoById(b.videoId);
      var e = b.containerId + "_callback";
      window[e] = function (a) {
        mejs.YouTubeApi.handleStateChange(a, c, d)
      }, c.addEventListener("onStateChange", e), setInterval(function () {
        mejs.YouTubeApi.createEvent(c, d, "timeupdate")
      }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
    },
    handleStateChange: function (a, b, c) {
      switch (a) {
        case -1:
          c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
          break;
        case 0:
          c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
          break;
        case 1:
          c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
          break;
        case 2:
          c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
          break;
        case 3:
          mejs.YouTubeApi.createEvent(b, c, "progress");
          break;
        case 5:
      }
    }
  }, window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady()
  }, window.onYouTubePlayerReady = function (a) {
    mejs.YouTubeApi.flashReady(a)
  }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
  function (a, b, c) {
    "use strict";
    var d = {
      locale: {
        language: b.i18n && b.i18n.locale.language || "",
        strings: b.i18n && b.i18n.locale.strings || {}
      },
      ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
      methods: {}
    };
    d.getLanguage = function () {
      var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
      return d.ietf_lang_regex.exec(a) ? a : null
    }, "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function (a) {
      var b, c, d = {
        "&": "&amp;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;"
      };
      a = String(a);
      for (b in d) d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
      return a
    }, d.methods.t = function (a, b) {
      return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), d.methods.checkPlain(a)
    }, d.t = function (a, b) {
      if ("string" == typeof a && a.length > 0) {
        var c = d.getLanguage();
        return b = b || {
          context: c
        }, d.methods.t(a, b)
      }
      throw {
        name: "InvalidArgumentException",
        message: "First argument is either not a string or empty."
      }
    }, b.i18n = d
  }(document, mejs),
  function (a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
  }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, Zepto.fn.outerWidth = function (a) {
    var b = $(this).width();
    return a && (b += parseInt($(this).css("margin-right"), 10), b += parseInt($(this).css("margin-left"), 10)), b
  }) : "undefined" != typeof ender && (mejs.$ = ender),
  function (a) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (a) {
          return .05 * a.duration
        },
        defaultSeekForwardInterval: function (a) {
          return .05 * a.duration
        },
        setDimensions: !0,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        timeFormat: "",
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        stretching: "auto",
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
          keys: [32, 179],
          action: function (a, b) {
            b.paused || b.ended ? b.play() : b.pause()
          }
        }, {
          keys: [38],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.min(b.volume + .1, 1);
            b.setVolume(c)
          }
        }, {
          keys: [40],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.max(b.volume - .1, 0);
            b.setVolume(c)
          }
        }, {
          keys: [37, 227],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
              b.setCurrentTime(c)
            }
          }
        }, {
          keys: [39, 228],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
              b.setCurrentTime(c)
            }
          }
        }, {
          keys: [70],
          action: function (a, b) {
            "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
          }
        }, {
          keys: [77],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
          }
        }]
      }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (b, c) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(b, c);
        var d = this;
        return d.$media = d.$node = a(b), d.node = d.media = d.$media[0], d.node ? "undefined" != typeof d.node.player ? d.node.player : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")), d.options = a.extend({}, mejs.MepDefaults, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), mejs.Utility.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), d.id = "mep_" + mejs.mepIndex++, mejs.players[d.id] = d, d.init(), d) : void 0
      }, mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function () {
          var b = this,
            c = mejs.MediaFeatures,
            d = a.extend(!0, {}, b.options, {
              success: function (a, c) {
                b.meReady(a, c)
              },
              error: function (a) {
                b.handleError(a)
              }
            }),
            e = b.media.tagName.toLowerCase();
          if (b.isDynamic = "audio" !== e && "video" !== e, b.isDynamic ? b.isVideo = b.options.isVideo : b.isVideo = "audio" !== e && b.options.isVideo, c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) b.$media.attr("controls", "controls"), c.isiPad && null !== b.media.getAttribute("autoplay") && b.play();
          else if (c.isAndroid && b.options.AndroidUseNativeControls);
          else {
            b.$media.removeAttr("controls");
            var f = b.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
            a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(b.$media), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + f + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function (a) {
              if (!b.controlsAreVisible && !b.hasFocus && (b.showControls(!0), !b.hasMsNativeFullScreen)) {
                var c = b.container.find(".mejs-playpause-button > button");
                c.focus()
              }
            }), "fill" !== b.options.stretching || b.container.parent("mejs-fill-container").length || (b.outerContainer = b.$media.parent(), b.container.wrap('<div class="mejs-fill-container"/>')), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), b.container.find(".mejs-mediaelement").append(b.$media), b.node.player = b, b.controls = b.container.find(".mejs-controls"), b.layers = b.container.find(".mejs-layers");
            var g = b.isVideo ? "video" : "audio",
              h = g.substring(0, 1).toUpperCase() + g.substring(1);
            b.options[g + "Width"] > 0 || b.options[g + "Width"].toString().indexOf("%") > -1 ? b.width = b.options[g + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.width = b.media.style.width : null !== b.media.getAttribute("width") ? b.width = b.$media.attr("width") : b.width = b.options["default" + h + "Width"], b.options[g + "Height"] > 0 || b.options[g + "Height"].toString().indexOf("%") > -1 ? b.height = b.options[g + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.height = b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.height = b.$media.attr("height") : b.height = b.options["default" + h + "Height"], b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height
          }
          mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown")
        },
        showControls: function (a) {
          var b = this;
          a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
            b.controlsAreVisible = !0, b.container.trigger("controlsshown")
          }), b.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
            b.controlsAreVisible = !0
          })) : (b.controls.removeClass("mejs-offscreen").css("display", "block"), b.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
        },
        hideControls: function (b) {
          var c = this;
          b = "undefined" == typeof b || b, !c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || (b ? (c.controls.stop(!0, !0).fadeOut(200, function () {
            a(this).addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")
          }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
            a(this).addClass("mejs-offscreen").css("display", "block")
          })) : (c.controls.addClass("mejs-offscreen").css("display", "block"), c.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")))
        },
        controlsTimer: null,
        startControlsTimer: function (a) {
          var b = this;
          a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function () {
            b.hideControls(), b.killControlsTimer("hide")
          }, a)
        },
        killControlsTimer: function (a) {
          var b = this;
          null !== b.controlsTimer && (clearTimeout(b.controlsTimer), delete b.controlsTimer, b.controlsTimer = null)
        },
        controlsEnabled: !0,
        disableControls: function () {
          var a = this;
          a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1
        },
        enableControls: function () {
          var a = this;
          a.showControls(!1), a.controlsEnabled = !0
        },
        meReady: function (b, c) {
          var d, e, f = this,
            g = mejs.MediaFeatures,
            h = c.getAttribute("autoplay"),
            i = !("undefined" == typeof h || null === h || "false" === h);
          if (!f.created) {
            if (f.created = !0, f.media = b, f.domNode = c, !(g.isAndroid && f.options.AndroidUseNativeControls || g.isiPad && f.options.iPadUseNativeControls || g.isiPhone && f.options.iPhoneUseNativeControls)) {
              f.buildposter(f, f.controls, f.layers, f.media), f.buildkeyboard(f, f.controls, f.layers, f.media), f.buildoverlays(f, f.controls, f.layers, f.media), f.findTracks();
              for (d in f.options.features)
                if (e = f.options.features[d], f["build" + e]) try {
                  f["build" + e](f, f.controls, f.layers, f.media)
                } catch (j) {}
              f.container.trigger("controlsready"), f.setPlayerSize(f.width, f.height), f.setControlsSize(), f.isVideo && (mejs.MediaFeatures.hasTouch ? f.$media.bind("touchstart", function () {
                f.controlsAreVisible ? f.hideControls(!1) : f.controlsEnabled && f.showControls(!1)
              }) : (f.clickToPlayPauseCallback = function () {
                f.options.clickToPlayPause && (f.media.paused ? f.play() : f.pause())
              }, f.media.addEventListener("click", f.clickToPlayPauseCallback, !1), f.container.bind("mouseenter", function () {
                f.controlsEnabled && (f.options.alwaysShowControls || (f.killControlsTimer("enter"), f.showControls(), f.startControlsTimer(2500)))
              }).bind("mousemove", function () {
                f.controlsEnabled && (f.controlsAreVisible || f.showControls(), f.options.alwaysShowControls || f.startControlsTimer(2500))
              }).bind("mouseleave", function () {
                f.controlsEnabled && (f.media.paused || f.options.alwaysShowControls || f.startControlsTimer(1e3))
              })), f.options.hideVideoControlsOnLoad && f.hideControls(!1), i && !f.options.alwaysShowControls && f.hideControls(), f.options.enableAutosize && f.media.addEventListener("loadedmetadata", function (a) {
                f.options.videoHeight <= 0 && null === f.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (f.setPlayerSize(a.target.videoWidth, a.target.videoHeight), f.setControlsSize(), f.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
              }, !1)), f.media.addEventListener("play", function () {
                var a;
                for (a in mejs.players) {
                  var b = mejs.players[a];
                  b.id == f.id || !f.options.pauseOtherPlayers || b.paused || b.ended || b.pause(), b.hasFocus = !1
                }
                f.hasFocus = !0
              }, !1), f.media.addEventListener("ended", function (b) {
                if (f.options.autoRewind) try {
                  f.media.setCurrentTime(0), window.setTimeout(function () {
                    a(f.container).find(".mejs-overlay-loading").parent().hide()
                  }, 20)
                } catch (c) {}
                f.media.pause(), f.setProgressRail && f.setProgressRail(), f.setCurrentRail && f.setCurrentRail(), f.options.loop ? f.play() : !f.options.alwaysShowControls && f.controlsEnabled && f.showControls()
              }, !1), f.media.addEventListener("loadedmetadata", function (a) {
                f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.isFullScreen || (f.setPlayerSize(f.width, f.height), f.setControlsSize())
              }, !1);
              var k = null;
              f.media.addEventListener("timeupdate", function () {
                k !== this.duration && (k = this.duration, mejs.Utility.calculateTimeFormat(k, f.options, f.options.framesPerSecond || 25), f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.setControlsSize())
              }, !1), f.container.focusout(function (b) {
                if (b.relatedTarget) {
                  var c = a(b.relatedTarget);
                  f.keyboardAction && 0 === c.parents(".mejs-container").length && (f.keyboardAction = !1, f.hideControls(!0))
                }
              }), setTimeout(function () {
                f.setPlayerSize(f.width, f.height), f.setControlsSize()
              }, 50), f.globalBind("resize", function () {
                f.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || f.setPlayerSize(f.width, f.height), f.setControlsSize()
              }), "youtube" == f.media.pluginType && (g.isiOS || g.isAndroid) && (f.container.find(".mejs-overlay-play").hide(), f.container.find(".mejs-poster").hide())
            }
            i && "native" == b.pluginType && f.play(), f.options.success && ("string" == typeof f.options.success ? window[f.options.success](f.media, f.domNode, f) : f.options.success(f.media, f.domNode, f))
          }
        },
        handleError: function (a) {
          var b = this;
          b.controls && b.controls.hide(), b.options.error && b.options.error(a)
        },
        setPlayerSize: function (a, b) {
          var c = this;
          if (!c.options.setDimensions) return !1;
          switch ("undefined" != typeof a && (c.width = a), "undefined" != typeof b && (c.height = b), c.options.stretching) {
            case "fill":
              c.isVideo ? this.setFillMode() : this.setDimensions(c.width, c.height);
              break;
            case "responsive":
              this.setResponsiveMode();
              break;
            case "none":
              this.setDimensions(c.width, c.height);
              break;
            default:
              this.hasFluidMode() === !0 ? this.setResponsiveMode() : this.setDimensions(c.width, c.height)
          }
        },
        hasFluidMode: function () {
          var a = this;
          return a.height.toString().indexOf("%") > 0 || "none" !== a.$node.css("max-width") && "t.width" !== a.$node.css("max-width") || a.$node[0].currentStyle && "100%" === a.$node[0].currentStyle.maxWidth
        },
        setResponsiveMode: function () {
          var b = this,
            c = function () {
              return b.isVideo ? b.media.videoWidth && b.media.videoWidth > 0 ? b.media.videoWidth : null !== b.media.getAttribute("width") ? b.media.getAttribute("width") : b.options.defaultVideoWidth : b.options.defaultAudioWidth
            }(),
            d = function () {
              return b.isVideo ? b.media.videoHeight && b.media.videoHeight > 0 ? b.media.videoHeight : null !== b.media.getAttribute("height") ? b.media.getAttribute("height") : b.options.defaultVideoHeight : b.options.defaultAudioHeight
            }(),
            e = b.container.parent().closest(":visible").width(),
            f = b.container.parent().closest(":visible").height(),
            g = b.isVideo || !b.options.autosizeProgress ? parseInt(e * d / c, 10) : d;
          (isNaN(g) || 0 !== f && g > f && f > d) && (g = f), b.container.parent().length > 0 && "body" === b.container.parent()[0].tagName.toLowerCase() && (e = a(window).width(), g = a(window).height()), g && e && (b.container.width(e).height(g), b.$media.add(b.container.find(".mejs-shim")).width("100%").height("100%"), b.isVideo && b.media.setVideoSize && b.media.setVideoSize(e, g), b.layers.children(".mejs-layer").width("100%").height("100%"))
        },
        setFillMode: function () {
          var a = this,
            b = a.outerContainer;
          b.width() || b.height(a.$media.width()), b.height() || b.height(a.$media.height());
          var c = b.width(),
            d = b.height();
          a.setDimensions("100%", "100%"), a.container.find(".mejs-poster img").css("display", "block"), targetElement = a.container.find("object, embed, iframe, video");
          var e = a.height,
            f = a.width,
            g = c,
            h = e * c / f,
            i = f * d / e,
            j = d,
            k = !(i > c),
            l = k ? Math.floor(g) : Math.floor(i),
            m = k ? Math.floor(h) : Math.floor(j);
          k ? (targetElement.height(m).width(c), a.media.setVideoSize && a.media.setVideoSize(c, m)) : (targetElement.height(d).width(l), a.media.setVideoSize && a.media.setVideoSize(l, d)), targetElement.css({
            "margin-left": Math.floor((c - l) / 2),
            "margin-top": 0
          })
        },
        setDimensions: function (a, b) {
          var c = this;
          c.container.width(a).height(b), c.layers.children(".mejs-layer").width(a).height(b)
        },
        setControlsSize: function () {
          var b = this,
            c = 0,
            d = 0,
            e = b.controls.find(".mejs-time-rail"),
            f = b.controls.find(".mejs-time-total"),
            g = e.siblings(),
            h = g.last(),
            i = null;
          if (b.container.is(":visible") && e.length && e.is(":visible")) {
            b.options && !b.options.autosizeProgress && (d = parseInt(e.css("width"), 10)), 0 !== d && d || (g.each(function () {
              var b = a(this);
              "absolute" != b.css("position") && b.is(":visible") && (c += a(this).outerWidth(!0))
            }), d = b.controls.width() - c - (e.outerWidth(!0) - e.width()));
            do e.width(d), f.width(d - (f.outerWidth(!0) - f.width())), "absolute" != h.css("position") && (i = h.length ? h.position() : null, d--); while (null !== i && i.top.toFixed(2) > 0 && d > 0);
            b.container.trigger("controlsresize")
          }
        },
        buildposter: function (b, c, d, e) {
          var f = this,
            g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),
            h = b.$media.attr("poster");
          "" !== b.options.poster && (h = b.options.poster), h ? f.setPoster(h) : g.hide(), e.addEventListener("play", function () {
            g.hide()
          }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function () {
            g.show()
          }, !1)
        },
        setPoster: function (b) {
          var c = this,
            d = c.container.find(".mejs-poster"),
            e = d.find("img");
          0 === e.length && (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)), e.attr("src", b), d.css({
            "background-image": "url(" + b + ")"
          })
        },
        buildoverlays: function (b, c, d, e) {
          var f = this;
          if (b.isVideo) {
            var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),
              h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),
              i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function () {
                f.options.clickToPlayPause && e.paused && e.play()
              });
            e.addEventListener("play", function () {
              i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
            }, !1), e.addEventListener("playing", function () {
              i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
            }, !1), e.addEventListener("seeking", function () {
              g.show(), c.find(".mejs-time-buffering").show()
            }, !1), e.addEventListener("seeked", function () {
              g.hide(), c.find(".mejs-time-buffering").hide()
            }, !1), e.addEventListener("pause", function () {
              mejs.MediaFeatures.isiPhone || i.show()
            }, !1), e.addEventListener("waiting", function () {
              g.show(), c.find(".mejs-time-buffering").show()
            }, !1), e.addEventListener("loadeddata", function () {
              g.show(), c.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (e.canplayTimeout = window.setTimeout(function () {
                if (document.createEvent) {
                  var a = document.createEvent("HTMLEvents");
                  return a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                }
              }, 300))
            }, !1), e.addEventListener("canplay", function () {
              g.hide(), c.find(".mejs-time-buffering").hide(), clearTimeout(e.canplayTimeout)
            }, !1), e.addEventListener("error", function (a) {
              f.handleError(a), g.hide(), i.hide(), h.show(), h.find(".mejs-overlay-error").html("Error loading this resource")
            }, !1), e.addEventListener("keydown", function (a) {
              f.onkeydown(b, e, a)
            }, !1)
          }
        },
        buildkeyboard: function (b, c, d, e) {
          var f = this;
          f.container.keydown(function () {
            f.keyboardAction = !0
          }), f.globalBind("keydown", function (c) {
            return b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length && a(c.target).closest(".mejs-container").attr("id") === b.$media.closest(".mejs-container").attr("id"), f.onkeydown(b, e, c)
          }), f.globalBind("click", function (c) {
            b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length
          })
        },
        onkeydown: function (a, b, c) {
          if (a.hasFocus && a.options.enableKeyboard)
            for (var d = 0, e = a.options.keyActions.length; e > d; d++)
              for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)
                if (c.keyCode == f.keys[g]) return "function" == typeof c.preventDefault && c.preventDefault(), f.action(a, b, c.keyCode, c), !1;
          return !0
        },
        findTracks: function () {
          var b = this,
            c = b.$media.find("track");
          b.tracks = [], c.each(function (c, d) {
            d = a(d), b.tracks.push({
              srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
              src: d.attr("src"),
              kind: d.attr("kind"),
              label: d.attr("label") || "",
              entries: [],
              isLoaded: !1
            })
          })
        },
        changeSkin: function (a) {
          this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
        },
        play: function () {
          this.load(), this.media.play()
        },
        pause: function () {
          try {
            this.media.pause()
          } catch (a) {}
        },
        load: function () {
          this.isLoaded || this.media.load(), this.isLoaded = !0
        },
        setMuted: function (a) {
          this.media.setMuted(a)
        },
        setCurrentTime: function (a) {
          this.media.setCurrentTime(a)
        },
        getCurrentTime: function () {
          return this.media.currentTime
        },
        setVolume: function (a) {
          this.media.setVolume(a)
        },
        getVolume: function () {
          return this.media.volume
        },
        setSrc: function (a) {
          this.media.setSrc(a)
        },
        remove: function () {
          var a, b, c = this;
          c.container.prev(".mejs-offscreen").remove();
          for (a in c.options.features)
            if (b = c.options.features[a], c["clean" + b]) try {
              c["clean" + b](c)
            } catch (d) {}
          c.isDynamic ? c.$node.insertBefore(c.container) : (c.$media.prop("controls", !0), c.$node.clone().insertBefore(c.container).show(), c.$node.remove()), "native" !== c.media.pluginType && c.media.remove(), delete mejs.players[c.id], "object" == typeof c.container && c.container.remove(), c.globalUnbind(), delete c.node.player
        },
        rebuildtracks: function () {
          var a = this;
          a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
        },
        resetSize: function () {
          var a = this;
          setTimeout(function () {
            a.setPlayerSize(a.width, a.height), a.setControlsSize()
          }, 50)
        }
      },
      function () {
        function b(b, d) {
          var e = {
            d: [],
            w: []
          };
          return a.each((b || "").split(" "), function (a, b) {
            var f = b + "." + d;
            0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f)
          }), e.d = e.d.join(" "), e.w = e.w.join(" "), e
        }
        var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (c, d, e) {
          var f = this,
            g = f.node ? f.node.ownerDocument : document;
          c = b(c, f.id), c.d && a(g).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e)
        }, mejs.MediaElementPlayer.prototype.globalUnbind = function (c, d) {
          var e = this,
            f = e.node ? e.node.ownerDocument : document;
          c = b(c, e.id), c.d && a(f).unbind(c.d, d), c.w && a(window).unbind(c.w, d)
        }
      }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function (b) {
        return b === !1 ? this.each(function () {
          var b = a(this).data("mediaelementplayer");
          b && b.remove(), a(this).removeData("mediaelementplayer")
        }) : this.each(function () {
          a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b))
        }), this
      }, a(document).ready(function () {
        a(".mejs-player").mediaelementplayer()
      })), window.MediaElementPlayer = mejs.MediaElementPlayer
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      playText: mejs.i18n.t("Play"),
      pauseText: mejs.i18n.t("Pause")
    }), a.extend(MediaElementPlayer.prototype, {
      buildplaypause: function (b, c, d, e) {
        function f(a) {
          "play" === a ? (i.removeClass("mejs-play").addClass("mejs-pause"), j.attr({
            title: h.pauseText,
            "aria-label": h.pauseText
          })) : (i.removeClass("mejs-pause").addClass("mejs-play"), j.attr({
            title: h.playText,
            "aria-label": h.playText
          }))
        }
        var g = this,
          h = g.options,
          i = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + g.id + '" title="' + h.playText + '" aria-label="' + h.playText + '"></button></div>').appendTo(c).click(function (a) {
            return a.preventDefault(), e.paused ? e.play() : e.pause(), !1
          }),
          j = i.find("button");
        f("pse"), e.addEventListener("play", function () {
          f("play")
        }, !1), e.addEventListener("playing", function () {
          f("play")
        }, !1), e.addEventListener("pause", function () {
          f("pse")
        }, !1), e.addEventListener("paused", function () {
          f("pse")
        }, !1)
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      stopText: "Stop"
    }), a.extend(MediaElementPlayer.prototype, {
      buildstop: function (b, c, d, e) {
        var f = this;
        a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button></div>').appendTo(c).click(function () {
          e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, b.options)), c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, b.options)), d.find(".mejs-poster").show())
        })
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
    }), a.extend(MediaElementPlayer.prototype, {
      buildprogress: function (b, c, d, e) {
        a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c), c.find(".mejs-time-buffering").hide();
        var f = this,
          g = c.find(".mejs-time-total"),
          h = c.find(".mejs-time-loaded"),
          i = c.find(".mejs-time-current"),
          j = c.find(".mejs-time-handle"),
          k = c.find(".mejs-time-float"),
          l = c.find(".mejs-time-float-current"),
          m = c.find(".mejs-time-slider"),
          n = function (a) {
            var c, d = g.offset(),
              f = g.width(),
              h = 0,
              i = 0,
              j = 0;
            c = a.originalEvent && a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.changedTouches ? a.changedTouches[0].pageX : a.pageX, e.duration && (c < d.left ? c = d.left : c > f + d.left && (c = f + d.left), j = c - d.left, h = j / f, i = .02 >= h ? 0 : h * e.duration, o && i !== e.currentTime && e.setCurrentTime(i), mejs.MediaFeatures.hasTouch || (k.css("left", j), l.html(mejs.Utility.secondsToTimeCode(i, b.options)), k.show()))
          },
          o = !1,
          p = !1,
          q = 0,
          r = !1,
          s = b.options.autoRewind,
          t = function (a) {
            var c = e.currentTime,
              d = mejs.i18n.t("Time Slider"),
              f = mejs.Utility.secondsToTimeCode(c, b.options),
              g = e.duration;
            m.attr({
              "aria-label": d,
              "aria-valuemin": 0,
              "aria-valuemax": g,
              "aria-valuenow": c,
              "aria-valuetext": f,
              role: "slider",
              tabindex: 0
            })
          },
          u = function () {
            var a = new Date;
            a - q >= 1e3 && e.play()
          };
        m.bind("focus", function (a) {
          b.options.autoRewind = !1
        }), m.bind("blur", function (a) {
          b.options.autoRewind = s
        }), m.bind("keydown", function (a) {
          new Date - q >= 1e3 && (r = e.paused);
          var c = a.keyCode,
            d = e.duration,
            f = e.currentTime,
            g = b.options.defaultSeekForwardInterval(d),
            h = b.options.defaultSeekBackwardInterval(d);
          switch (c) {
            case 37:
            case 40:
              f -= h;
              break;
            case 39:
            case 38:
              f += g;
              break;
            case 36:
              f = 0;
              break;
            case 35:
              f = d;
              break;
            case 32:
            case 13:
              return void(e.paused ? e.play() : e.pause());
            default:
              return
          }
          return f = 0 > f ? 0 : f >= d ? d : Math.floor(f), q = new Date, r || e.pause(), f < e.duration && !r && setTimeout(u, 1100), e.setCurrentTime(f), a.preventDefault(), a.stopPropagation(), !1
        }), g.bind("mousedown touchstart", function (a) {
          (1 === a.which || 0 === a.which) && (o = !0, n(a), f.globalBind("mousemove.dur touchmove.dur", function (a) {
            n(a)
          }), f.globalBind("mouseup.dur touchend.dur", function (a) {
            o = !1, k.hide(), f.globalUnbind(".dur")
          }))
        }).bind("mouseenter", function (a) {
          p = !0, f.globalBind("mousemove.dur", function (a) {
            n(a)
          }), mejs.MediaFeatures.hasTouch || k.show()
        }).bind("mouseleave", function (a) {
          p = !1, o || (f.globalUnbind(".dur"), k.hide())
        }), e.addEventListener("progress", function (a) {
          b.setProgressRail(a), b.setCurrentRail(a)
        }, !1), e.addEventListener("timeupdate", function (a) {
          b.setProgressRail(a), b.setCurrentRail(a), t(a)
        }, !1), f.container.on("controlsresize", function () {
          b.setProgressRail(), b.setCurrentRail()
        }), f.loaded = h, f.total = g, f.current = i, f.handle = j
      },
      setProgressRail: function (a) {
        var b = this,
          c = void 0 !== a ? a.target : b.media,
          d = null;
        c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(c.buffered.length - 1) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d))
      },
      setCurrentRail: function () {
        var a = this;
        if (void 0 !== a.media.currentTime && a.media.duration && a.total && a.handle) {
          var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration),
            c = b - Math.round(a.handle.outerWidth(!0) / 2);
          a.current.width(b), a.handle.css("left", c)
        }
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      duration: -1,
      timeAndDurationSeparator: "<span> | </span>"
    }), a.extend(MediaElementPlayer.prototype, {
      buildcurrent: function (b, c, d, e) {
        var f = this;
        a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, b.options) + "</span></div>").appendTo(c), f.currenttime = f.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function () {
          b.updateCurrent()
        }, !1)
      },
      buildduration: function (b, c, d, e) {
        var f = this;
        c.children().last().find(".mejs-currenttime").length > 0 ? a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span></div>").appendTo(c)), f.durationD = f.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function () {
          b.updateDuration()
        }, !1)
      },
      updateCurrent: function () {
        var a = this,
          b = a.media.currentTime;
        isNaN(b) && (b = 0), a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(b, a.options))
      },
      updateDuration: function () {
        var a = this,
          b = a.media.duration;
        a.options.duration > 0 && (b = a.options.duration), isNaN(b) && (b = 0), a.container.toggleClass("mejs-long-video", b > 3600), a.durationD && b > 0 && a.durationD.html(mejs.Utility.secondsToTimeCode(b, a.options))
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      muteText: mejs.i18n.t("Mute Toggle"),
      allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical"
    }), a.extend(MediaElementPlayer.prototype, {
      buildvolume: function (b, c, d, e) {
        if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
          var f = this,
            g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
            h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),
            i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
            j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
            k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
            l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
            m = function (a, b) {
              if (!i.is(":visible") && "undefined" == typeof b) return i.show(), m(a, !0), void i.hide();
              a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? (h.removeClass("mejs-mute").addClass("mejs-unmute"), h.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (h.removeClass("mejs-unmute").addClass("mejs-mute"), h.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
              var c = j.position();
              if ("vertical" == g) {
                var d = j.height(),
                  e = d - d * a;
                l.css("top", Math.round(c.top + e - l.height() / 2)), k.height(d - e), k.css("top", c.top + e)
              } else {
                var f = j.width(),
                  n = f * a;
                l.css("left", Math.round(c.left + n - l.width() / 2)), k.width(Math.round(n))
              }
            },
            n = function (a) {
              var b = null,
                c = j.offset();
              if ("vertical" === g) {
                var d = j.height(),
                  f = a.pageY - c.top;
                if (b = (d - f) / d, 0 === c.top || 0 === c.left) return
              } else {
                var h = j.width(),
                  i = a.pageX - c.left;
                b = i / h
              }
              b = Math.max(0, b), b = Math.min(b, 1), m(b), 0 === b ? e.setMuted(!0) : e.setMuted(!1), e.setVolume(b)
            },
            o = !1,
            p = !1;
          h.hover(function () {
            i.show(), p = !0
          }, function () {
            p = !1, o || "vertical" != g || i.hide()
          });
          var q = function (a) {
            var b = Math.floor(100 * e.volume);
            i.attr({
              "aria-label": mejs.i18n.t("Volume Slider"),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": b,
              "aria-valuetext": b + "%",
              role: "slider",
              tabindex: 0
            })
          };
          i.bind("mouseover", function () {
            p = !0
          }).bind("mousedown", function (a) {
            return n(a), f.globalBind("mousemove.vol", function (a) {
              n(a)
            }), f.globalBind("mouseup.vol", function () {
              o = !1, f.globalUnbind(".vol"), p || "vertical" != g || i.hide()
            }), o = !0, !1
          }).bind("keydown", function (a) {
            var b = a.keyCode,
              c = e.volume;
            switch (b) {
              case 38:
                c = Math.min(c + .1, 1);
                break;
              case 40:
                c = Math.max(0, c - .1);
                break;
              default:
                return !0
            }
            return o = !1, m(c), e.setVolume(c), !1
          }), h.find("button").click(function () {
            e.setMuted(!e.muted)
          }), h.find("button").bind("focus", function () {
            i.show()
          }), e.addEventListener("volumechange", function (a) {
            o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), h.removeClass("mejs-unmute").addClass("mejs-mute"))), q(a)
          }, !1), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume), f.container.on("controlsresize", function () {
            m(e.volume)
          })
        }
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      usePluginFullScreen: !0,
      newWindowCallback: function () {
        return ""
      },
      fullscreenText: mejs.i18n.t("Fullscreen")
    }), a.extend(MediaElementPlayer.prototype, {
      isFullScreen: !1,
      isNativeFullScreen: !1,
      isInIframe: !1,
      fullscreenMode: "",
      buildfullscreen: function (b, c, d, e) {
        if (b.isVideo) {
          b.isInIframe = window.location != window.parent.location, e.addEventListener("play", function () {
            b.detectFullscreenMode()
          });
          var f = this,
            g = null,
            h = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + f.id + '" title="' + f.options.fullscreenText + '" aria-label="' + f.options.fullscreenText + '"></button></div>').appendTo(c).on("click", function () {
              var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
              a ? b.exitFullScreen() : b.enterFullScreen()
            }).on("mouseover", function () {
              if ("plugin-hover" == f.fullscreenMode) {
                null !== g && (clearTimeout(g), delete g);
                var a = h.offset(),
                  c = b.container.offset();
                e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0);
              }
            }).on("mouseout", function () {
              "plugin-hover" == f.fullscreenMode && (null !== g && (clearTimeout(g), delete g), g = setTimeout(function () {
                e.hideFullscreenButton()
              }, 1500))
            });
          if (b.fullscreenBtn = h, f.globalBind("keydown", function (a) {
              27 == a.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || f.isFullScreen) && b.exitFullScreen()
            }), f.normalHeight = 0, f.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
            var i = function (a) {
              b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()))
            };
            b.globalBind(mejs.MediaFeatures.fullScreenEventName, i)
          }
        }
      },
      detectFullscreenMode: function () {
        var a = this,
          b = "",
          c = mejs.MediaFeatures;
        return c.hasTrueNativeFullScreen && "native" === a.media.pluginType ? b = "native-native" : c.hasTrueNativeFullScreen && "native" !== a.media.pluginType && !c.hasFirefoxPluginMovingProblem ? b = "plugin-native" : a.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (b = "plugin-click", a.createPluginClickThrough()) : b = "plugin-hover" : b = "fullwindow", a.fullscreenMode = b, b
      },
      isPluginClickThroughCreated: !1,
      createPluginClickThrough: function () {
        var b = this;
        if (!b.isPluginClickThroughCreated) {
          var c, d, e = !1,
            f = function () {
              if (e) {
                for (var a in g) g[a].hide();
                b.fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), b.media.removeEventListener("click", b.clickToPlayPauseCallback), e = !1
              }
            },
            g = {},
            h = ["top", "left", "right", "bottom"],
            i = function () {
              var a = fullscreenBtn.offset().left - b.container.offset().left,
                d = fullscreenBtn.offset().top - b.container.offset().top,
                e = fullscreenBtn.outerWidth(!0),
                f = fullscreenBtn.outerHeight(!0),
                h = b.container.width(),
                i = b.container.height();
              for (c in g) g[c].css({
                position: "absolute",
                top: 0,
                left: 0
              });
              g.top.width(h).height(d), g.left.width(a).height(f).css({
                top: d
              }), g.right.width(h - a - e).height(f).css({
                top: d,
                left: a + e
              }), g.bottom.width(h).height(i - f - d).css({
                top: d + f
              })
            };
          for (b.globalBind("resize", function () {
              i()
            }), c = 0, d = h.length; d > c; c++) g[h[c]] = a('<div class="mejs-fullscreen-hover" />').appendTo(b.container).mouseover(f).hide();
          fullscreenBtn.on("mouseover", function () {
            if (!b.isFullScreen) {
              var a = fullscreenBtn.offset(),
                d = player.container.offset();
              media.positionFullscreenButton(a.left - d.left, a.top - d.top, !1), b.fullscreenBtn.css("pointer-events", "none"), b.controls.css("pointer-events", "none"), b.media.addEventListener("click", b.clickToPlayPauseCallback);
              for (c in g) g[c].show();
              i(), e = !0
            }
          }), media.addEventListener("fullscreenchange", function (a) {
            b.isFullScreen = !b.isFullScreen, b.isFullScreen ? b.media.removeEventListener("click", b.clickToPlayPauseCallback) : b.media.addEventListener("click", b.clickToPlayPauseCallback), f()
          }), b.globalBind("mousemove", function (a) {
            if (e) {
              var c = fullscreenBtn.offset();
              (a.pageY < c.top || a.pageY > c.top + fullscreenBtn.outerHeight(!0) || a.pageX < c.left || a.pageX > c.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), e = !1)
            }
          }), b.isPluginClickThroughCreated = !0
        }
      },
      cleanfullscreen: function (a) {
        a.exitFullScreen()
      },
      containerSizeTimeout: null,
      enterFullScreen: function () {
        var b = this;
        return mejs.MediaFeatures.hasiOSFullScreen ? void b.media.webkitEnterFullscreen() : (a(document.documentElement).addClass("mejs-fullscreen"), b.normalHeight = b.container.height(), b.normalWidth = b.container.width(), "native-native" === b.fullscreenMode || "plugin-native" === b.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(b.container[0]), b.isInIframe && setTimeout(function c() {
          if (b.isNativeFullScreen) {
            var d = .002,
              e = a(window).width(),
              f = screen.width,
              g = Math.abs(f - e),
              h = f * d;
            g > h ? b.exitFullScreen() : setTimeout(c, 500)
          }
        }, 1e3)) : "fullwindow" == b.fullscreeMode, b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), b.containerSizeTimeout = setTimeout(function () {
          b.container.css({
            width: "100%",
            height: "100%"
          }), b.setControlsSize()
        }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), setTimeout(function () {
          var c = a(window),
            d = c.width(),
            e = c.height();
          b.media.setVideoSize(d, e)
        }, 500)), b.layers.children("div").width("100%").height("100%"), b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), b.container.find(".mejs-captions-position").css("bottom", "45px"), void b.container.trigger("enteredfullscreen"))
      },
      exitFullScreen: function () {
        var b = this;
        clearTimeout(b.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), a(document.documentElement).removeClass("mejs-fullscreen"), b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight), "native" === b.media.pluginType ? b.$media.width(b.normalWidth).height(b.normalHeight) : (b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight), b.media.setVideoSize(b.normalWidth, b.normalHeight)), b.layers.children("div").width(b.normalWidth).height(b.normalHeight), b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), b.setControlsSize(), b.isFullScreen = !1, b.container.find(".mejs-captions-text").css("font-size", ""), b.container.find(".mejs-captions-position").css("bottom", ""), b.container.trigger("exitedfullscreen")
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
      defaultSpeed: "1.00",
      speedChar: "x"
    }), a.extend(MediaElementPlayer.prototype, {
      buildspeed: function (b, c, d, e) {
        var f = this;
        if ("native" == f.media.pluginType) {
          for (var g = null, h = null, i = null, j = null, k = [], l = !1, m = 0, n = f.options.speeds.length; n > m; m++) {
            var o = f.options.speeds[m];
            "string" == typeof o ? (k.push({
              name: o + f.options.speedChar,
              value: o
            }), o === f.options.defaultSpeed && (l = !0)) : (k.push(o), o.value === f.options.defaultSpeed && (l = !0))
          }
          l || k.push({
            name: f.options.defaultSpeed + f.options.speedChar,
            value: f.options.defaultSpeed
          }), k.sort(function (a, b) {
            return parseFloat(b.value) - parseFloat(a.value)
          });
          var p = function (a) {
              for (m = 0, n = k.length; n > m; m++)
                if (k[m].value === a) return k[m].name
            },
            q = '<div class="mejs-button mejs-speed-button"><button type="button">' + p(f.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
          for (m = 0, il = k.length; m < il; m++) j = f.id + "-speed-" + k[m].value, q += '<li><input type="radio" name="speed" value="' + k[m].value + '" id="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? " checked" : "") + ' /><label for="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + k[m].name + "</label></li>";
          q += "</ul></div></div>", g = a(q).appendTo(c), h = g.find(".mejs-speed-selector"), i = f.options.defaultSpeed, e.addEventListener("loadedmetadata", function (a) {
            i && (e.playbackRate = parseFloat(i))
          }, !0), h.on("click", 'input[type="radio"]', function () {
            var b = a(this).attr("value");
            i = b, e.playbackRate = parseFloat(b), g.find("button").html(p(b)), g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
          }), g.one("mouseenter focusin", function () {
            h.height(g.find(".mejs-speed-selector ul").outerHeight(!0) + g.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * h.height() + "px")
          })
        }
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      startLanguage: "",
      tracksText: mejs.i18n.t("Captions/Subtitles"),
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: ""
    }), a.extend(MediaElementPlayer.prototype, {
      hasChapters: !1,
      cleartracks: function (a, b, c, d) {
        a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove())
      },
      buildtracks: function (b, c, d, e) {
        if (0 !== b.tracks.length) {
          var f, g = this,
            h = g.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
          if (g.domNode.textTracks)
            for (f = g.domNode.textTracks.length - 1; f >= 0; f--) g.domNode.textTracks[f].mode = "hidden";
          g.cleartracks(b, c, d, e), b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + h + '><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.tracksText + '" aria-label="' + g.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c);
          var i = 0;
          for (f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && i++;
          for (g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i ? b.captionsButton.on("click", function () {
              null === b.selectedTrack ? lang = b.tracks[0].srclang : lang = "none", b.setTrack(lang)
            }) : (b.captionsButton.on("mouseenter focusin", function () {
              a(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
            }).on("click", "input[type=radio]", function () {
              lang = this.value, b.setTrack(lang)
            }), b.captionsButton.on("mouseleave focusout", function () {
              a(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
            })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function () {
              b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
            }).bind("controlshidden", function () {
              e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
            }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
          b.loadNextTrack(), e.addEventListener("timeupdate", function (a) {
            b.displayCaptions()
          }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), e.addEventListener("timeupdate", function (a) {
            b.displaySlides()
          }, !1)), e.addEventListener("loadedmetadata", function (a) {
            b.displayChapters()
          }, !1), b.container.hover(function () {
            b.hasChapters && (b.chapters.removeClass("mejs-offscreen"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))
          }, function () {
            b.hasChapters && !e.paused && b.chapters.fadeOut(200, function () {
              a(this).addClass("mejs-offscreen"), a(this).css("display", "block")
            })
          }), g.container.on("controlsresize", function () {
            g.adjustLanguageBox()
          }), null !== b.node.getAttribute("autoplay") && b.chapters.addClass("mejs-offscreen")
        }
      },
      setTrack: function (a) {
        var b, c = this;
        if ("none" == a) c.selectedTrack = null, c.captionsButton.removeClass("mejs-captions-enabled");
        else
          for (b = 0; b < c.tracks.length; b++)
            if (c.tracks[b].srclang == a) {
              null === c.selectedTrack && c.captionsButton.addClass("mejs-captions-enabled"), c.selectedTrack = c.tracks[b], c.captions.attr("lang", c.selectedTrack.srclang), c.displayCaptions();
              break
            }
      },
      loadNextTrack: function () {
        var a = this;
        a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
      },
      loadTrack: function (b) {
        var c = this,
          d = c.tracks[b],
          e = function () {
            d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack()
          };
        a.ajax({
          url: d.src,
          dataType: "text",
          success: function (a) {
            "string" == typeof a && /<tt\s+xml/gi.exec(a) ? d.entries = mejs.TrackFormatParser.dfxp.parse(a) : d.entries = mejs.TrackFormatParser.webvtt.parse(a), e(), "chapters" == d.kind && c.media.addEventListener("play", function (a) {
              c.media.duration > 0 && c.displayChapters(d)
            }, !1), "slides" == d.kind && c.setupSlides(d)
          },
          error: function () {
            c.removeTrackButton(d.srclang), c.loadNextTrack()
          }
        })
      },
      enableTrackButton: function (b, c) {
        var d = this;
        "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), d.options.startLanguage == b && a("#" + d.id + "_captions_" + b).prop("checked", !0).trigger("click"), d.adjustLanguageBox()
      },
      removeTrackButton: function (a) {
        var b = this;
        b.captionsButton.find("input[value=" + a + "]").closest("li").remove(), b.adjustLanguageBox()
      },
      addTrackButton: function (b, c) {
        var d = this;
        "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("ul").append(a('<li><input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + d.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), d.adjustLanguageBox(), d.container.find(".mejs-captions-translations option[value=" + b + "]").remove()
      },
      adjustLanguageBox: function () {
        var a = this;
        a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
      },
      checkForTracks: function () {
        var a = this,
          b = !1;
        if (a.options.hideCaptionsButtonWhenEmpty) {
          for (i = 0; i < a.tracks.length; i++)
            if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
              b = !0;
              break
            }
          b || (a.captionsButton.hide(), a.setControlsSize())
        }
      },
      displayCaptions: function () {
        if ("undefined" != typeof this.tracks) {
          var a, b = this,
            c = b.selectedTrack;
          if (null !== c && c.isLoaded) {
            for (a = 0; a < c.entries.times.length; a++)
              if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return b.captionsText.html(c.entries.text[a]).attr("class", "mejs-captions-text " + (c.entries.times[a].identifier || "")), void b.captions.show().height(0);
            b.captions.hide()
          } else b.captions.hide()
        }
      },
      setupSlides: function (a) {
        var b = this;
        b.slides = a, b.slides.entries.imgs = [b.slides.entries.text.length], b.showSlide(0)
      },
      showSlide: function (b) {
        if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
          var c = this,
            d = c.slides.entries.text[b],
            e = c.slides.entries.imgs[b];
          "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function () {
            e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
          }) : e.is(":visible") || e.is(":animated") || e.fadeIn().siblings(":visible").fadeOut()
        }
      },
      displaySlides: function () {
        if ("undefined" != typeof this.slides) {
          var a, b = this,
            c = b.slides;
          for (a = 0; a < c.entries.times.length; a++)
            if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return void b.showSlide(a)
        }
      },
      displayChapters: function () {
        var a, b = this;
        for (a = 0; a < b.tracks.length; a++)
          if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
            b.drawChapters(b.tracks[a]), b.hasChapters = !0;
            break
          }
      },
      drawChapters: function (b) {
        var c, d, e = this,
          f = 0,
          g = 0;
        for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++) d = b.entries.times[c].stop - b.entries.times[c].start, f = Math.floor(d / e.media.duration * 100), (f + g > 100 || c == b.entries.times.length - 1 && 100 > f + g) && (f = 100 - g), e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start, e.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop, e.options) + "</span></div></div>")), g += f;
        e.chapters.find("div.mejs-chapter").click(function () {
          e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play()
        }), e.chapters.show()
      }
    }), mejs.language = {
      codes: {
        af: "Afrikaans",
        sq: "Albanian",
        ar: "Arabic",
        be: "Belarusian",
        bg: "Bulgarian",
        ca: "Catalan",
        zh: "Chinese",
        "zh-cn": "Chinese Simplified",
        "zh-tw": "Chinese Traditional",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch",
        en: "English",
        et: "Estonian",
        fl: "Filipino",
        fi: "Finnish",
        fr: "French",
        gl: "Galician",
        de: "German",
        el: "Greek",
        ht: "Haitian Creole",
        iw: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        ga: "Irish",
        it: "Italian",
        ja: "Japanese",
        ko: "Korean",
        lv: "Latvian",
        lt: "Lithuanian",
        mk: "Macedonian",
        ms: "Malay",
        mt: "Maltese",
        no: "Norwegian",
        fa: "Persian",
        pl: "Polish",
        pt: "Portuguese",
        ro: "Romanian",
        ru: "Russian",
        sr: "Serbian",
        sk: "Slovak",
        sl: "Slovenian",
        es: "Spanish",
        sw: "Swahili",
        sv: "Swedish",
        tl: "Tagalog",
        th: "Thai",
        tr: "Turkish",
        uk: "Ukrainian",
        vi: "Vietnamese",
        cy: "Welsh",
        yi: "Yiddish"
      }
    }, mejs.TrackFormatParser = {
      webvtt: {
        pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        parse: function (b) {
          for (var c, d, e, f = 0, g = mejs.TrackFormatParser.split2(b, /\r?\n/), h = {
              text: [],
              times: []
            }; f < g.length; f++) {
            if (c = this.pattern_timecode.exec(g[f]), c && f < g.length) {
              for (f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]), f++, d = g[f], f++;
                "" !== g[f] && f < g.length;) d = d + "\n" + g[f], f++;
              d = a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), h.text.push(d), h.times.push({
                identifier: e,
                start: 0 === mejs.Utility.convertSMPTEtoSeconds(c[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                settings: c[5]
              })
            }
            e = ""
          }
          return h
        }
      },
      dfxp: {
        parse: function (b) {
          b = a(b).filter("tt");
          var c, d, e = 0,
            f = b.children("div").eq(0),
            g = f.find("p"),
            h = b.find("#" + f.attr("style")),
            i = {
              text: [],
              times: []
            };
          if (h.length) {
            var j = h.removeAttr("id").get(0).attributes;
            if (j.length)
              for (c = {}, e = 0; e < j.length; e++) c[j[e].name.split(":")[1]] = j[e].value
          }
          for (e = 0; e < g.length; e++) {
            var k, l = {
              start: null,
              stop: null,
              style: null
            };
            if (g.eq(e).attr("begin") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))), !l.start && g.eq(e - 1).attr("end") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e - 1).attr("end"))), g.eq(e).attr("end") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))), !l.stop && g.eq(e + 1).attr("begin") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e + 1).attr("begin"))), c) {
              k = "";
              for (var m in c) k += m + ":" + c[m] + ";"
            }
            k && (l.style = k), 0 === l.start && (l.start = .2), i.times.push(l), d = a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.text.push(d), 0 === i.times.start && (i.times.start = 2)
          }
          return i
        }
      },
      split2: function (a, b) {
        return a.split(b)
      }
    }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (a, b) {
      var c, d = [],
        e = "";
      for (c = 0; c < a.length; c++) e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), e = "");
      return d.push(e), d
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      contextMenuItems: [{
        render: function (a) {
          return "undefined" == typeof a.enterFullScreen ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
        },
        click: function (a) {
          a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
        }
      }, {
        render: function (a) {
          return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
        },
        click: function (a) {
          a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
        }
      }, {
        isSeparator: !0
      }, {
        render: function (a) {
          return mejs.i18n.t("Download Video")
        },
        click: function (a) {
          window.location.href = a.media.currentSrc
        }
      }]
    }), a.extend(MediaElementPlayer.prototype, {
      buildcontextmenu: function (b, c, d, e) {
        b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), b.container.bind("contextmenu", function (a) {
          return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), !1) : void 0
        }), b.container.bind("click", function () {
          b.contextMenu.hide()
        }), b.contextMenu.bind("mouseleave", function () {
          b.startContextMenuTimer()
        })
      },
      cleancontextmenu: function (a) {
        a.contextMenu.remove()
      },
      isContextMenuEnabled: !0,
      enableContextMenu: function () {
        this.isContextMenuEnabled = !0
      },
      disableContextMenu: function () {
        this.isContextMenuEnabled = !1
      },
      contextMenuTimeout: null,
      startContextMenuTimer: function () {
        var a = this;
        a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function () {
          a.hideContextMenu(), a.killContextMenuTimer()
        }, 750)
      },
      killContextMenuTimer: function () {
        var a = this.contextMenuTimer;
        null != a && (clearTimeout(a), delete a, a = null)
      },
      hideContextMenu: function () {
        this.contextMenu.hide()
      },
      renderContextMenu: function (b, c) {
        for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++)
          if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
          else {
            var i = f[g].render(d);
            null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>")
          }
        d.contextMenu.empty().append(a(e)).css({
          top: c,
          left: b
        }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function () {
          var b = a(this),
            c = parseInt(b.data("itemindex"), 10),
            e = d.options.contextMenuItems[c];
          "undefined" != typeof e.show && e.show(b, d), b.click(function () {
            "undefined" != typeof e.click && e.click(d), d.contextMenu.hide()
          })
        }), setTimeout(function () {
          d.killControlsTimer("rev3")
        }, 100)
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      skipBackInterval: 30,
      skipBackText: mejs.i18n.t("Skip back %1 seconds")
    }), a.extend(MediaElementPlayer.prototype, {
      buildskipback: function (b, c, d, e) {
        var f = this,
          g = f.options.skipBackText.replace("%1", f.options.skipBackInterval);
        a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + f.id + '" title="' + g + '" aria-label="' + g + '">' + f.options.skipBackInterval + "</button></div>").appendTo(c).click(function () {
          e.setCurrentTime(Math.max(e.currentTime - f.options.skipBackInterval, 0)), a(this).find("button").blur()
        })
      }
    })
  }(mejs.$),
  function (a) {
    a.extend(mejs.MepDefaults, {
      postrollCloseText: mejs.i18n.t("Close")
    }), a.extend(MediaElementPlayer.prototype, {
      buildpostroll: function (b, c, d, e) {
        var f = this,
          g = f.container.find('link[rel="postroll"]').attr("href");
        "undefined" != typeof g && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + f.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), f.media.addEventListener("ended", function (c) {
          a.ajax({
            dataType: "html",
            url: g,
            success: function (a, b) {
              d.find(".mejs-postroll-layer-content").html(a)
            }
          }), b.postroll.show()
        }, !1))
      }
    })
  }(mejs.$);
(function () {
  window._shoppilot = window._shoppilot || [];
  _shoppilot.push(['_addStyles', 'widgets']);
  var d = $.Deferred();
  window.shoppilotAPI = d.promise();
  _shoppilot.push(['_setOnReady', d.resolve]);
  var store_id = '560d8456560235b81f007e91';
  var theme_id = 'default';
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//get.shoppilot.ru/f/v1/' + store_id + '/' + theme_id + '/app.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
})();
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
  "use strict";
  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function (a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function () {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.getNavTarget = function () {
    var b = this,
      c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c
  }, b.prototype.asNavFor = function (b) {
    var c = this,
      d = c.getNavTarget();
    null !== d && "object" == typeof d && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function (a) {
    var b = this,
      c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
      b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function () {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function () {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e, f, g, d = this,
      h = !1,
      i = d.$slider.width(),
      j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f, g, h, d = this,
      e = a(b.currentTarget);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function (a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.cleanUpRows = function () {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function (a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
      }, 0)
    })
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function () {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else if (a.options.asNavFor)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1
  }, b.prototype.getLeft = function (a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function () {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function () {
    return this
  }, b.prototype.getSlideCount = function () {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      })
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
          d = a(this).attr("data-lazy"),
          e = document.createElement("img");
        e.onload = function () {
          c.animate({
            opacity: 0
          }, 100, function () {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading")
            }), b.$slider.trigger("lazyLoaded", [b, c, d])
          })
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
        }, e.src = d
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e, f, g, c = this,
      d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1)
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
  }, b.prototype.refresh = function (b) {
    var d, e, c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function () {
    var c, d, e, b = this,
      f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
        }
      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
  }, b.prototype.setCSS = function (a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function () {
    var c, b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    })
  }, b.prototype.setHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c, d, e, f, h, b = this,
      g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
    else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c
    });
    else if ("responsive" === h)
      for (d in f)
        if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
        else {
          for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
          b.options.responsive.push(f[d])
        }
    g && (b.unload(), b.reinit())
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function () {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function (a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function () {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a
  }, b.prototype.selectHandler = function (b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
  }, b.prototype.slideHandler = function (a, b, c) {
    var d, e, f, g, j, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e)
    })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e)
    }) : i.postSlide(e))))
    i.$slider.trigger("beforeChange", [i, i.currentSlide, e]);
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function () {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
  }, b.prototype.swipeEnd = function (a) {
    var c, d, b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;
        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
      }
      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function (a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
  }, b.prototype.swipeStart = function (a) {
    var c, b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function () {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
  }, a.fn.slick = function () {
    var f, g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length;
    for (f = 0; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});;;
(function () {
  window._shoppilot = window._shoppilot || [];
  _shoppilot.push(['_addStyles', 'widgets']);
  var d = $.Deferred();
  window.shoppilotAPI = d.promise();
  _shoppilot.push(['_setOnReady', d.resolve]);
  var store_id = '560d8456560235b81f007e91';
  var theme_id = 'default';
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//get.shoppilot.ru/f/v1/' + store_id + '/' + theme_id + '/app.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
})();;;
APP = window.APP || {};
APP.Controls = APP.Controls || {};
APP.Controls.Page = APP.Controls.Page || {};
APP.Controls.Partials = APP.Controls.Partials || {};
APP.Controls.Partials.Adaptive = APP.Controls.Partials.Adaptive || {};
APP.Helpers = APP.Helpers || {};;;
(function ($, APP, undefined) {
  "use strict";
  can.Control.extend({
    pluginName: 'eyeToggle',
    defaults: {
      findInput: 'input',
      eyeSelector: '.js-toggle-eye',
      toggleClassName: 'close',
      typePass: 'password',
      typeText: 'text',
      typeAttr: 'type'
    }
  }, {
    init: function () {
      this.toggleType();
    },
    update: function () {
      this.toggleType();
    },
    'click': function () {
      var elem = this.element.siblings(this.options.findInput);
      var type = elem.attr(this.options.typeAttr);
      if (type == this.options.typePass) {
        type = this.options.typeText;
      } else if (type == this.options.typeText) {
        type = this.options.typePass;
      }
      elem.attr('type', type);
      this.toggleType();
    },
    toggleType: function () {
      var elem = this.element.siblings(this.options.findInput);
      var type = elem.attr(this.options.typeAttr);
      this.element.toggleClass(this.options.toggleClassName, (type == this.options.typePass));
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  can.Control.extend({
    pluginName: 'clearForm',
    defaults: {
      findQuery: 'input[type="text"], input[type="checkbox"], textarea, select'
    }
  }, {
    init: function () {
      this.clearInput();
    },
    update: function () {
      this.clearInput();
    },
    clearInput: function () {
      var elem = this.element.find(this.options.findQuery);
      elem.val('');
      elem.prop('checked', false);
    }
  });
})(jQuery, window.APP);;;
can.Control.extend({
  pluginName: 'sibirixSlon',
  defaults: {
    width: 300,
    height: 176,
    slonBtn: '.js-slon',
    score: '.js-score',
    scoreWrap: '.js-score-wrap',
    floorHeight: 14,
    floorColor: '#bababa',
    jumpSpeed: 5.5,
    gravity: 0.25,
    hSpeed: 5,
    lives: 5,
    firstText: 'Жми на пробел',
    firstTextOffset: 50,
    slon: {
      src: '/local/images/game/slon.png',
      width: 33,
      height: 22
    },
    sparks: {
      src: '/local/images/game/spark.png',
      width: 62,
      height: 44
    },
    triangle: {
      src: '/local/images/game/triangle.png',
      srcInvert: '/local/images/game/triangle-invert.png',
      width: 10,
      height: 5
    },
    blocks: [{
      position: 3,
      src: '/local/images/game/wardrobe.png',
      width: 70,
      height: 67,
      ignore: false
    }, {
      position: 116,
      src: '/local/images/game/lamp.png',
      text: 'Не ударься головой',
      textOffset: 50,
      width: 27,
      height: 58,
      ignore: false
    }, {
      position: 5,
      src: '/local/images/game/armchair.png',
      text: 'Тсс! Не разбуди котика!',
      textOffset: 55,
      width: 37,
      height: 45,
      ignore: false
    }, {
      position: 57,
      src: '/local/images/game/poster.png',
      width: 38,
      height: 35,
      ignore: true
    }, {
      position: 3,
      src: '/local/images/game/table.png',
      width: 48,
      height: 40,
      ignore: false
    }, {
      position: 5,
      src: '/local/images/game/stand.png',
      width: 29,
      height: 35,
      ignore: false
    }, {
      position: 5,
      src: '/local/images/game/floor-lamp.png',
      text: 'Не споткнись об шнур. Прыгай!',
      textOffset: 65,
      width: 71,
      height: 61,
      ignore: false
    }, {
      position: 5,
      src: '/local/images/game/sofa.png',
      text: 'Жми на пробел два раза',
      textOffset: 30,
      width: 98,
      height: 45,
      ignore: false
    }, {
      position: 4,
      src: '/local/images/game/bed.png',
      width: 110,
      height: 44,
      ignore: false
    }]
  }
}, {
  ctx: false,
  images: {},
  slon: {
    x: 0,
    y: 0,
    speedy: 0,
    jumps: 2
  },
  blocks: [],
  texts: [],
  triangles: [],
  started: false,
  dead: false,
  ended: false,
  deadRotate: 0,
  needFirstText: true,
  score: 0,
  yCorr: -3,
  blocksCount: 3,
  lastLeftMargin: false,
  lastBgMargin: 0,
  tick: 0,
  init: function () {
    this.slonBtn = this.element.find(this.options.slonBtn);
    this.$score = this.element.find(this.options.score);
    this.$scoreWrap = this.element.find(this.options.scoreWrap);
    this.options.width = $(window).width();
    this.slon.x = Math.round(($(window).width() - 990) / 2);
    this.initImages();
    this.prepareBlockTypes();
    this.update();
  },
  'canvas mousedown': function () {
    this.slonJump();
  },
  '{slonBtn} click': function () {
    if (!this.started) {
      this.startGame();
    }
  },
  '{window} keydown': function (el, ev) {
    if (this.started) {
      if ((ev.which == 38) || (ev.which == 32)) {
        this.slonJump();
        ev.stopPropagation();
        ev.preventDefault();
        return false;
      }
    }
    return true;
  },
  startGame: function () {
    $('body').addClass('game');
    setTimeout(function () {
      $.scrollTo($(document).height(), 300);
    }, 500);
    if (this.dead) {
      this.initRestart();
    } else {
      this.initHtml();
    }
    this.slonBtn.css({
      opacity: 0
    });
    this.started = true;
    this.lives = this.options.lives;
    this.immortal = false;
    this.needFirstText = true;
    this.$score.removeClass('game-over');
    this.$scoreWrap.show();
    this.initFooter();
    this.renderScore();
    this.initStartingBlocks();
    this.animLoop();
  },
  initRestart: function () {
    this.$canvas.show();
    this.$canvas.fadeTo('slow', 1);
    this.options.hSpeed = 0;
    this.tick = 0;
    this.score = 0;
    this.ended = false;
    this.dead = false;
    this.deadRotate = 0;
    this.slon.x = Math.round(($(window).width() - 990) / 2);
    this.slon.y = 0;
    this.slon.speedy = 0;
    this.slon.jumps = 2;
    this.blocks = [];
    this.texts = [];
    this.triangles = [];
  },
  endGame: function () {
    var self = this;
    this.$canvas.fadeTo('slow', 0.5, function () {
      self.$canvas.fadeTo('slow', 0, function () {
        self.ended = true;
        self.$canvas.hide();
        $('footer').find('.restart').show();
      });
    });
    this.slonBtn.css({
      opacity: 1
    });
    this.$scoreWrap.hide();
    $('body').removeClass('game');
  },
  initImages: function () {
    this.images.slon = new Image;
    this.images.slon.src = this.options.slon.src;
    this.slon.width = this.options.slon.width;
    this.slon.height = this.options.slon.height;
    this.initSparks();
    this.images.blocks = [];
    for (var i = 0; i < this.options.blocks.length; i++) {
      var img = new Image;
      img.src = this.options.blocks[i].src;
      this.images.blocks.push(img);
    }
  },
  initSparks: function () {
    this.images.sparks = new Image;
    this.images.sparks.src = this.options.sparks.src;
  },
  prepareBlockTypes: function () {
    var self = this;
    this.blockTypes = [];
    for (var i = 0; i < this.options.blocks.length; i++) {
      var block = this.options.blocks[i];
      var img = new Image();
      img.src = block.src;
      if (block.ignore) {
        this.blockTypes.push({
          image: img,
          y: block.position,
          width: block.width,
          text: block.text,
          textOffset: block.textOffset,
          checkCollision: function () {
            return false;
          }
        });
      } else {
        this.blockTypes.push({
          image: img,
          y: block.position,
          width: block.width,
          text: block.text,
          textOffset: block.textOffset,
          checkCollision: function (slon) {
            var result = true;
            var sx, sy;
            var sw, sh;
            sw = slon.width;
            sh = slon.height;
            sx = slon.x;
            sy = slon.y;
            if (sx + sw <= this.x) return false;
            if (sx >= this.x + this.image.width) return false;
            if (sy >= this.image.height + this.y) return false;
            if (sy + sh <= this.y) return false;
            var dx, ax;
            if (sx + sw < this.x + this.image.width / 2) {
              dx = sx + sw - this.x;
              ax = this.image.width / 2 - dx;
              return (this.image.height - ax > slon.y);
            } else if (sx > this.x + this.image.width / 2) {
              dx = this.x + this.image.width - slon.x;
              ax = this.image.width / 2 - dx;
              return (this.image.height - ax > slon.y);
            }
            return result;
          }
        });
      }
    }
  },
  initHtml: function () {
    this.element.append($('<canvas>'));
    this.$canvas = this.element.find('canvas');
    this.$canvas.css({
      width: this.options.width,
      height: this.options.height,
      background: '#fff'
    }).attr('width', this.options.width).attr('height', this.options.height);
    var self = this;
    setTimeout(function () {
      self.$canvas.css('margin', '3px 0 -3px 0');
      self.$canvas.css('opacity', '1');
    }, 1);
    this.ctx = this.$canvas.get(0).getContext('2d');
  },
  initFooter: function () {
    this.element.find('.short-width').eq(1).fadeOut('slow');
    this.element.find('.tutorial').fadeIn('slow');
    this.$slides = this.element.find('.tutorial .slides');
    this.lastLeftMargin = 150;
  },
  animLoop: function () {
    this.tick++;
    if (this.started || !this.dead || this.blocks.length) {
      window.requestAnimFrame(this.proxy('animLoop'));
    } else {
      this.endGame();
    }
    this.checkMovement();
    this.drawFrame();
    this.checkCollisions();
    this.checkBlocks();
    this.checkComplexity();
  },
  drawFrame: function () {
    this.ctx.clearRect(0, 0, this.options.width, this.options.height);
    this.ctx.fillStyle = this.options.floorColor;
    this.ctx.fillRect(0, this.options.height - this.options.floorHeight, this.options.width, this.options.floorHeight);
    for (var i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].draw) {
        this.blocks[i].draw(this.ctx);
      } else {
        this.ctx.drawImage(this.blocks[i].image, this.blocks[i].x, this.options.height - this.blocks[i].image.height - this.blocks[i].y + this.yCorr);
      }
    }
    for (var i = 0; i < this.texts.length; i++) {
      this.ctx.font = "14px 'Clear Sans'";
      this.ctx.fillStyle = "#959595";
      this.ctx.fillText(this.texts[i].text, this.texts[i].x, this.texts[i].y);
    }
    for (var i = 0; i < this.triangles.length; i++) {
      this.ctx.drawImage(this.triangles[i].image, this.triangles[i].x, this.triangles[i].y);
    }
    if (!this.dead) {
      this.ctx.drawImage(this.images.slon, this.slon.x, this.options.height - this.slon.height - this.slon.y + this.yCorr);
      if (this.immortal) {
        this.showSparks();
      }
    } else {
      this.ctx.save();
      this.ctx.translate(this.slon.x + this.slon.width / 2, this.options.height - (this.slon.height / 2) - this.slon.y + this.yCorr);
      this.ctx.rotate(this.deadRotate * Math.PI / 180);
      this.deadRotate += 8;
      this.ctx.drawImage(this.images.slon, -this.slon.width / 2, -this.slon.height / 2);
      this.ctx.restore();
    }
  },
  checkMovement: function () {
    if (this.$slides) {
      this.lastLeftMargin -= this.options.hSpeed;
      this.$slides.css('margin-left', this.lastLeftMargin);
      if (this.lastLeftMargin < -1 * this.options.width) {
        this.$slides = false;
      }
    }
    this.slon.y += this.slon.speedy;
    this.slon.speedy -= this.options.gravity;
    if (this.slon.y < 0 && !this.dead) {
      this.slon.speedy = 0;
      this.slon.jumps = 2;
      this.slon.y = 0;
    } else if (this.dead && this.slon.y < -100) {
      this.started = false;
    }
    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i].x -= this.options.hSpeed;
    }
    for (var i = 0; i < this.texts.length; i++) {
      this.texts[i].x -= this.options.hSpeed;
    }
    for (var i = 0; i < this.triangles.length; i++) {
      this.triangles[i].x -= this.options.hSpeed;
    }
  },
  checkCollisions: function () {
    for (var i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].checkCollision(this.slon)) {
        if (this.immortal) {
          continue;
        }
        this.looseLive();
        if (this.dead) {
          this.slon.speedy = this.options.jumpSpeed / 2;
          this.$score.addClass('game-over');
          break;
        }
      }
    }
  },
  looseLive: function () {
    this.lives--;
    if (this.lives) {
      this.immortal = true;
      setTimeout(function () {
        this.immortal = false;
      }.bind(this), 500);
    } else {
      this.dead = true;
    }
  },
  showSparks: function () {
    this.ctx.drawImage(this.images.sparks, this.slon.x, this.options.height - this.options.sparks.height + ((this.options.sparks.height - this.options.slon.height) / 2) - this.slon.y + this.yCorr);
  },
  checkBlocks: function () {
    for (var i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].x < -1 * this.blocks[i].image.width) {
        if (!this.dead) {
          this.score++;
          this.renderScore();
        }
        this.blocks.splice(i, 1);
        i--;
      }
    }
    if (this.blocks.length < this.blocksCount && !this.dead) {
      this.addBlock();
    }
  },
  renderScore: function () {
    var num = this.score;
    if (num < 10) {
      num = '000' + num;
    } else if (num < 100) {
      num = '00' + num;
    } else if (num < 1000) {
      num = '0' + num;
    }
    this.$score.text(num);
  },
  addBlock: function () {
    var type = Math.floor(Math.random() * this.blockTypes.length);
    var xc = this.slon.x;
    if (this.blocks.length) {
      var last = this.blocks[this.blocks.length - 1];
      xc = Math.max(last.x + last.image.width, xc);
    }
    var coord = xc + Math.floor(Math.random() * 200) + 450 + this.options.hSpeed * 20;
    this.blocks.push($.extend({
      x: coord
    }, this.blockTypes[type]));
    if (this.needFirstText && this.blockTypes[type].y <= 50) {
      this.needFirstText = false;
      this.texts.push({
        x: coord + this.blockTypes[type].width / 2 - this.options.firstTextOffset,
        y: 30,
        text: this.options.firstText
      });
      this.addTriangle(coord + this.blockTypes[type].width / 2, false);
    } else if (typeof this.blockTypes[type].text !== 'undefined' && this.blockTypes[type].text.length) {
      this.texts.push({
        x: coord - this.blockTypes[type].textOffset,
        y: this.blockTypes[type].y > 50 ? 92 : 30,
        text: this.blockTypes[type].text
      });
      this.addTriangle(coord + this.blockTypes[type].width / 2, this.blockTypes[type].y > 50);
      this.blockTypes[type].text = '';
    }
  },
  addTriangle: function (x, invert) {
    var img = new Image();
    img.src = invert ? this.options.triangle.srcInvert : this.options.triangle.src;
    this.triangles.push({
      x: x - this.options.triangle.width / 2,
      y: invert ? 68 : 40,
      image: img
    });
  },
  initStartingBlocks: function () {
    this.addBlock();
    this.addBlock();
    this.addBlock();
  },
  slonJump: function () {
    if (this.slon.jumps) {
      this.slon.jumps--;
      this.slon.speedy = this.options.jumpSpeed;
    }
  },
  checkComplexity: function () {
    if (this.tick < 200) {
      this.options.hSpeed = 0;
    } else {
      this.options.hSpeed = 5 + Math.floor((this.tick - 200) / 500);
    }
    if (this.options.hSpeed > 25) {
      this.options.hSpeed = 25;
    }
  }
});;;
(function ($, APP) {
  'use strict';
  APP.Helpers.responseLg = 1024;
  APP.Helpers.responseMd = 768;
  APP.Helpers.responseSm = 320;
  APP.Helpers.fancyOptions = {
    autoSize: true,
    autoHeight: true,
    autoWidth: true,
    margin: 0,
    padding: 0,
    beforeLoad: function () {
      APP.scrollY = window.scrollY;
    },
    afterShow: function () {
      $.fancybox.update();
      setTimeout(function () {
        var id = $(this).attr('href');
        if (!APP.Helpers.isValidSelector(id)) {
          return;
        }
        var element = $(id);
        element.find('input[type=text], textarea').first().focus();
      }.bind(this), 300);
    },
    afterClose: function () {
      setTimeout(function () {
        window.scrollTo(0, APP.scrollY);
      }, 500);
      var id = $(this).attr('href');
      if (!APP.Helpers.isValidSelector(id)) {
        return;
      }
      var $form = $(id).find('form');
      if ($form.length) {
        if ($form.data('clear-after') == true) {
          $form.find('input[type!="submit"][type!="hidden"][type!="checkbox"] , textarea').val('');
          $form.find('input[type="checkbox"]').prop('checked', false);
        }
        APP.Helpers.clearErrorForm($form);
      }
    },
    helpers: {
      overlay: {
        locked: true
      },
      title: null
    }
  };
  APP.Helpers.isMobile = function () {
    var isIpad = (navigator.platform.indexOf("iPad") != -1) || (navigator.userAgent.match(/iPad/i) != null);
    var isIphone = (navigator.platform.indexOf("iPhone") != -1) || (navigator.userAgent.indexOf("iPhone") != -1);
    var isIpod = (navigator.platform.indexOf("iPod") != -1) || (navigator.userAgent.indexOf("iPod") != -1);
    var isAndroid = (navigator.platform.indexOf("Android") != -1) || (navigator.userAgent.indexOf("Android") != -1);
    return isIpad || isIphone || isIpod || isAndroid || navigator.msMaxTouchPoints;
  };
  APP.Helpers.sliderSettings = {
    nextArrow: '<a href="javascript:void(0);" class="next-arrow"></a>',
    prevArrow: '<a href="javascript:void(0);" class="prev-arrow"></a>',
    customPaging: function () {
      return $('<a href="javascript:void(0);"></a>');
    }
  };
  APP.Helpers.detectIE = function () {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    return false;
  };
  APP.Helpers.debounce = function (func, wait, context, immediate) {
    var timeout;
    return function () {
      var context = context || this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait || 200);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };
  APP.Helpers.customScroll = function ($element) {
    if (typeof $element == 'undefined' && !$element.length) {
      return;
    }
    $element.each(function () {
      var elem = $(this);
      elem.mCustomScrollbar({
        scrollbarPosition: 'outside',
        scrollInertia: 0,
        keyboard: {
          enable: true
        },
        advanced: {
          autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true'],div.autocomplete-selected"
        },
        axis: (typeof elem.data('axis') !== 'undefined') ? elem.data('axis') : 'y',
        autoDraggerLength: false
      });
    });
  };
  APP.Helpers.numberFormat = function (number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
      decimals = 0;
    }
    if (dec_point == undefined) {
      dec_point = '.';
    }
    if (thousands_sep == undefined) {
      thousands_sep = ' ';
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + '';
    if ((j = i.length) > 3) {
      j = j % 3;
    } else {
      j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : '');
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : '');
    return km + kw + kd;
  };
  APP.Helpers.clearErrorForm = function (form, selector, error) {
    selector = selector || '.form-row';
    error = error || '.js-error-message-text';
    var elements;
    if (form.prop('tagName') === 'FORM') {
      elements = form.find(selector);
      elements.removeClass('error');
      elements.find(error).html('');
    } else if (form.length >= 1) {
      elements = form.closest(selector);
      elements.removeClass('error');
      elements.find(error).html('');
    }
  };
  APP.Helpers.isValidSelector = function (selector) {
    try {
      var $element = $(selector);
    } catch (error) {
      return false;
    }
    return true;
  };
  APP.Helpers.openFancy = function (link) {
    APP.Helpers.fancyOptions.href = link;
    $.fancybox.open(APP.Helpers.fancyOptions);
  };
  APP.Helpers.escapeRegExChars = function (value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  };
  APP.Helpers.queryString = function (urlParam, param) {
    var query_string = {};
    var query = typeof urlParam != 'undefined' ? urlParam : window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return typeof param == 'undefined' ? query_string : query_string[param];
  };
  APP.Helpers.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, APP.Helpers.pluralForm = function (i, str1, str2, str3) {
    function plural(a) {
      if (a % 10 == 1 && a % 100 != 11) return 0;
      else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) return 1;
      else return 2;
    }
    switch (plural(i)) {
      case 0:
        return str1;
      case 1:
        return str2;
      default:
        return str3;
    }
  };
  if (!window.requestAnimFrame) {
    window.requestAnimFrame = (function () {
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })();
  }
  APP.Helpers.reachGoal = function (paramsYandex, paramsGoogle, yandexCounterId) {
    yandexCounterId = yandexCounterId || 21373954;
    var yandexCounter = window['yaCounter' + yandexCounterId];
    var googleCounter = window['ga'];
    if (yandexCounter != void 0 && paramsYandex != undefined) {
      yandexCounter.reachGoal(paramsYandex);
    }
    if (googleCounter != void 0 && paramsGoogle != undefined && typeof googleCounter == 'function') {
      googleCounter('send', 'event', paramsGoogle);
    }
  };
  APP.Helpers.moveMiniCart = function (from, to) {
    var $cart = $(from + ' ' + '.js-head-cart');
    var $cartWrap = $(to);
    if ($cart.length && $cartWrap.length) {
      $cartWrap.append($cart);
      return true;
    }
    return false;
  }
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Layout = can.Control.extend({
    defaults: {
      upButton: '.js-up',
      floatHeader: '.js-float-header',
      galleryBlock: '.js-gallery-block',
      advantageSlider: '.js-advantage-slider',
      spoilerText: '.js-spoiler-text',
      tabs: '.js-tabs',
      productCard: '.js-product-card-wrapper',
      dropDown: '.js-dropdown',
      dropDownStater: '.js-dropdown-starter',
      dropDownContent: '.js-dropdown-content',
      headCart: '.js-head-cart',
      eye: '.js-toggle-eye',
      headerCity: '.js-header-city',
      fancyClose: '.js-fancy-close',
      ajaxLinkPopup: '.js-ajax-link-popup',
      formSubscribe: '.js-form-subscribe-footer',
      devContainer: '.js-dev-container',
      adaptiveHeader: '.js-adaptive-header',
      adaptiveSideBarMenu: '.js-sidebar-menu'
    }
  }, {
    init: function () {
      this.isMobile = APP.Helpers.isMobile();
      this.isIE = APP.Helpers.detectIE();
      if (this.isMobile) {
        this.element.addClass('mobile');
      }
      if (this.isIE) {
        this.element.addClass('is-ie');
      }
      this.element.find(this.options.upButton).each(function () {
        new APP.Controls.Partials.Up(this);
      });
      this.element.find(this.options.adaptiveHeader).each(function () {
        new APP.Controls.Partials.Adaptive.Header(this);
      });
      this.element.find(this.options.adaptiveSideBarMenu).each(function () {
        new APP.Controls.Partials.Adaptive.SidebarMenu(this);
      });
      this.element.find(this.options.floatHeader).each(function () {
        new APP.Controls.Partials.FloatHeader(this);
      });
      this.element.find(this.options.headerCity).each(function () {
        new APP.Controls.Partials.HeaderCity(this);
      });
      this.element.find(this.options.tabs).each(function () {
        new APP.Controls.Partials.Tabs(this);
      });
      this.element.find(this.options.headCart).each(function () {
        new APP.Controls.Partials.HeadCart(this);
      });
      this.initAdvantageSlider();
      this.initGallery();
      this.element.find(this.element.find('.js-nav')).each(function () {
        new APP.Controls.Partials.NavDropdown(this);
      });
      new APP.Controls.Partials.QuickGallery(this.element.find('.js-quick-gallery'));
      this.element.find('.js-fancy').fancybox({
        padding: 0,
        helpers: {
          overlay: {
            locked: true
          }
        },
        afterShow: function () {
          this.$inner.find('input[type="text"], textarea').eq(0).focus();
          if (this.element.data('visible') != void 0) {
            this.$inner.css({
              overflow: this.element.data('visible')
            });
          }
        },
        beforeShow: function () {
          this.$inner = $('.fancybox-inner');
          var $form = this.$inner.find('form');
          if ($form.length) {
            APP.Helpers.clearErrorForm($form);
          }
        },
        beforeClose: function () {
          $('body').removeClass('fancy-open');
        }
      });
      this.element.find('.js-form-search-city').each(function () {
        new APP.Controls.Partials.FormSearch(this);
      });
      this.element.find('.js-header-search-form').each(function () {
        new APP.Controls.Partials.FormSearchContent(this);
      });
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
      this.element.find(this.options.formSubscribe).each(function () {
        new APP.Controls.Partials.FormSubscribe(this);
      });
      this.initRequestParam();
      this.element.find('.js-dark-block').sibirixSlon();
    },
    initAdvantageSlider: function () {
      var advantageSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        autoplay: true
      });
      this.element.find(this.options.advantageSlider).slick(advantageSliderSettings);
    },
    '{window} keyup': function (el, e) {
      if (e.keyCode == 27) $.fancybox.close();
    },
    '{window} click': function (el, e) {
      var elem = $(e.target);
      if (elem.closest(this.options.dropDownContent).length == 0) {
        $(this.options.dropDownContent).removeClass('active');
      }
    },
    '{spoilerText} click': function ($el) {
      $el.toggleClass('toggled');
      $el.next().slideToggle();
    },
    '{dropDownStater} click': function ($el) {
      $el.siblings('#' + $el.data('activates')).toggleClass('active');
      return false;
    },
    '{fancyClose} click': function () {
      $.fancybox.close();
    },
    initGallery: function () {
      this.element.find(this.options.galleryBlock).each(function () {
        new APP.Controls.Partials.GalleryBlock($(this));
      });
    },
    initRequestParam: function () {
      if (typeof APP.NEED_SHOW_POPUP != 'undefined') {
        new APP.Controls.Partials.AjaxPopup(this.element, APP.NEED_SHOW_POPUP)
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.Adaptive.Header = can.Control.extend({
    defaults: {
      openMenu: '.js-sidebar-menu-button-open',
      adaptiveSideBarMenu: '.js-sidebar-menu'
    }
  }, {
    init: function () {
      this.toggleCart();
    },
    moveMiniCart: APP.Helpers.moveMiniCart,
    checkVisibility: function () {
      return this.element.is(':visible');
    },
    '{window} resize': function () {
      this.toggleCart();
    },
    toggleCart: function () {
      if (this.checkVisibility()) {
        if (!this.element.hasClass('is-moved')) {
          this.element.find('.js-adaptive-main-cart-wrap').html('');
        }
        if (this.moveMiniCart('.js-main-cart-wrap', '.js-adaptive-main-cart-wrap')) {} else {
          this.moveMiniCart('.js-float-cart-wrap', '.js-adaptive-main-cart-wrap');
        }
        this.element.addClass('is-moved');
      } else if (this.element.hasClass('is-moved')) {
        this.moveMiniCart('.js-adaptive-main-cart-wrap', '.js-main-cart-wrap');
        this.element.removeClass('is-moved');
      }
    },
    '{openMenu} click': function () {
      this.element.find(this.options.adaptiveSideBarMenu).addClass('show');
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.Adaptive.SidebarMenu = can.Control.extend({
    defaults: {
      backMenu: '.js-sidebar-menu-button-back',
      backMenuClassActive: 'active',
      item: '.js-navigation-item',
      itemActiveClass: 'show-dropdown',
      offsetContainer: '.js-offset-container',
      closeMenu: '.js-sidebar-menu-button-close'
    }
  }, {
    init: function () {
      this.stackState = [];
      this.$offsetContainer = this.element.find(this.options.offsetContainer);
      this.$buttonBack = this.element.find(this.options.backMenu);
    },
    '{item} click': function ($el, ev) {
      $el.blur();
      if (!$el.hasClass(this.options.itemActiveClass)) {
        $el.addClass(this.options.itemActiveClass);
        $el.parentScrollTop = this.$offsetContainer.parent().scrollTop();
        this.stackState.push($el);
        this.$buttonBack.addClass(this.options.backMenuClassActive);
        this.offsetContainer(-$el.width(), 0);
        return false;
      }
    },
    '{backMenu} click': function () {
      if (!this.stackState.length) {
        return false;
      }
      var $el = this.stackState.pop();
      this.offsetContainer($el.width(), $el.parentScrollTop);
      if (this.stackState.length == 0) {
        this.$buttonBack.removeClass(this.options.backMenuClassActive);
      }
      setTimeout(function () {
        $el.removeClass(this.options.itemActiveClass);
      }.bind(this), 500);
    },
    '{closeMenu} click': function ($el, ev) {
      this.element.removeClass('show');
    },
    offsetContainer: function ($element, scrollTop) {
      var current = this.$offsetContainer.position().left;
      if (current <= 0) {
        current = current + $element;
      } else {
        current = 0;
      }
      this.$offsetContainer.css({
        transform: 'translateX(' + current + 'px)'
      });
      this.$offsetContainer.parent().animate({
        scrollTop: scrollTop
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.NavDropdown = can.Control.extend({
    defaults: {
      navDrop: '.js-nav-dropdown',
      navItem: '.js-nav-item',
      showClass: 'show'
    }
  }, {
    init: function () {
      this.$dropdowns = this.element.find(this.options.navDrop);
      this.timeoutClose = '';
      this.timeoutOpen = '';
    },
    '{navItem} mouseenter': function (el) {
      if (this.timeoutOpen) clearTimeout(this.timeoutOpen);
      el.find('>a').focus();
      this.timeoutOpen = setTimeout(function () {
        var $dropdown = el.find(this.options.navDrop);
        this.show($dropdown);
        $('body').click();
      }.bind(this), 300);
    },
    '{navItem} mouseleave': function (el) {
      clearTimeout(this.timeoutOpen);
      var $dropdown = el.find(this.options.navDrop);
      this.timeoutClose = setTimeout(function () {
        $dropdown.removeClass(this.options.showClass);
      }.bind(this), 1000);
    },
    show: function (el) {
      this.hide();
      el.addClass(this.options.showClass);
    },
    hide: function () {
      clearTimeout(this.timeoutClose);
      this.$dropdowns.removeClass(this.options.showClass);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.Tabs = can.Control.extend({
    defaults: {
      head: '.js-tab-head',
      container: '.js-tab-container',
      item: '.js-tab',
      activeClass: 'selected',
      active: '.selected',
      animationDuration: 400
    }
  }, {
    init: function () {
      this.$heads = this.element.find(this.options.head);
      this.$tabs = this.element.find(this.options.item);
      this.$container = this.element.find(this.options.container);
      setTimeout(function () {
        this.$container.animate({
          minHeight: this.$tabs.filter(this.options.active).height()
        }, this.options.animationDuration);
        if (typeof this.options.callback == 'function') {
          this.options.callback();
        }
      }.bind(this), 200);
    },
    '{head} click': function ($el) {
      if ($el.hasClass(this.options.activeClass)) {
        return false;
      }
      this.$heads.removeClass(this.options.activeClass);
      $el.addClass(this.options.activeClass);
      var $activeTab = this.$tabs.filter(this.options.active);
      var $newActiveTab = this.$tabs.filter($el.attr('href'));
      $activeTab.stop(true, true).fadeOut({
        duration: this.options.animationDuration,
        complete: function () {
          $activeTab.removeClass('selected');
          this.$container.stop(true, true).animate({
            minHeight: $newActiveTab.height()
          }, this.options.animationDuration);
          this.$tabs.filter($el.attr('href')).addClass('selected').stop(true, true).fadeIn({
            duration: this.options.animationDuration,
            complete: function () {
              if (typeof this.options.callback == 'function') {
                this.options.callback();
              }
            }.bind(this)
          });
        }.bind(this)
      });
      return false;
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.FloatHeader = can.Control.extend({
    defaults: {
      productHeader: '.js-product-header',
      visibleClass: 'visible',
      allMenu: '.js-float-all-menu',
      navItem: '.js-nav .js-nav-item:first-child .js-nav-dropdown',
      floatContainer: '.js-float-header-container',
      navDropClass: 'show',
      events: {
        reInit: 'reInit',
        addProductContent: 'addProductContent',
        removeProductContent: 'removeProductContent'
      }
    }
  }, {
    init: function () {
      new APP.Controls.Partials.FloatAllMenu(this.element.find(this.options.allMenu), {
        parent: this
      });
      var nav = $(this.options.navItem);
      if (nav.length) {
        nav.clone().addClass('js-nav-all-dropdown').appendTo(this.options.floatContainer);
        this.navDrop = this.element.find(this.options.floatContainer + ' > .js-nav-all-dropdown');
      }
      this.reInit();
    },
    '{window} load': function () {
      this.checkVisibility();
      this.setPosition()
    },
    '{window} resize': function () {
      this.checkVisibility();
      this.setPosition()
    },
    '{window} scroll': function () {
      this.checkVisibility();
      this.setPosition()
    },
    '{window} click': function (e) {
      var elem = $(e.target);
      if (elem.closest(this.options.navDrop).length === 0) {
        this.navDrop.removeClass(this.options.navDropClass);
        this.element.find(this.options.allMenuButton).removeClass(this.options.buttonActiveClass);
      }
    },
    '{events.reInit}': function () {
      this.reInit();
    },
    '{events.addProductContent}': function ($el, event, $content) {
      this.addProductContent($content);
    },
    '{events.removeProductContent}': function () {
      this.removeProductContent();
    },
    '.js-catalog-menu-header li:first-child mouseenter': function () {
      this.navDropHide();
    },
    '.js-catalog-menu-header li:first-child mouseleave': function () {
      this.navDropShow();
    },
    '{floatContainer} > .js-nav-all-dropdown mouseenter': function () {
      this.navDropHide();
    },
    '{floatContainer} > .js-nav-all-dropdown mouseleave': function () {
      this.navDropShow();
    },
    navDropHide: function () {
      if (typeof this.navDrop === "undefined") {
        return;
      }
      clearTimeout(this.timeOut);
      this.navDrop.addClass(this.options.navDropClass);
    },
    navDropShow: function () {
      if (typeof this.navDrop === "undefined") {
        return;
      }
      this.timeOut = setTimeout(function () {
        this.navDrop.removeClass(this.options.navDropClass);
      }.bind(this), 300);
    },
    reInit: function () {
      this.checkVisibility();
      this.setPosition();
    },
    checkVisibility: function () {
      var top = $(window).scrollTop();
      if (top > this.element.data('visible-top')) {
        this.moveMiniCart('.js-main-cart-wrap', '.js-float-cart-wrap');
        this.element.addClass(this.options.visibleClass);
      } else {
        this.moveMiniCart('.js-float-cart-wrap', '.js-main-cart-wrap');
        this.element.removeClass(this.options.visibleClass);
      }
    },
    setPosition: function () {
      var left = $(window).scrollLeft();
      this.element.css({
        left: -left
      });
    },
    addProductContent: function ($content) {
      this.removeProductContent();
      $content.appendTo(this.element);
      var $startline = $('.js-product-header-startline');
      if ($startline.length) this.element.data('visible-top', $startline.offset().top);
    },
    removeProductContent: function () {
      var $attach = this.element.find(this.options.productHeader);
      if ($attach.length) {
        $attach.remove();
      }
    },
    moveMiniCart: function (from, to) {
      var $cart = $(from + ' ' + '.js-head-cart');
      var $cartWrap = $(to);
      if ($cart.length && $cartWrap.length) {
        $cartWrap.append($cart);
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.ContentCollapse = can.Control.extend({
    defaults: {
      item: '.js-collapse-item',
      toggle: '.js-collapse-toggle',
      content: '.js-collapse-content',
      openedItemClass: 'opened',
      animationTime: 600,
      accordion: false
    }
  }, {
    init: function () {
      this.element.addClass('js-inited');
      this.$items = this.element.find(this.options.item);
      this.$items.not('.' + this.options.openedItemClass).find(this.options.content).hide();
    },
    '{toggle} click': function ($toggle, event) {
      event.preventDefault();
      var $item = $toggle.closest(this.options.item);
      var $content = $item.find(this.options.content);
      $toggle.toggleClass(this.options.openedItemClass);
      $item.toggleClass(this.options.openedItemClass);
      $content.stop(true).slideToggle({
        duration: this.options.animationTime,
        ease: 'linear'
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.ToggleBlockState = can.Control.extend({
    defaults: {
      toggle: '.js-toggle'
    }
  }, {
    init: function () {
      this.state = this.element.data('start-state');
    },
    '{toggle} click': function ($toggle) {
      var newState = $toggle.data('state');
      if (newState == undefined) return;
      if (this.state != undefined) this.element.removeClass(this.state);
      this.element.addClass(newState);
      this.state = newState;
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.Gallery = can.Control.extend({
    defaults: {
      object: '.js-gallery-item',
      card: '.js-gallery-popup',
      offset: 30
    }
  }, {
    init: function () {
      this.height = this.element.height();
      this.$objectList = this.element.find(this.options.object);
      this.$objectList.each(function (index, object) {
        var $object = $(object);
        var $card = $object.find(this.options.card);
        var top = $object.position().top;
        var height = $card.outerHeight();
        var dif = 0;
        if ($object.hasClass('top-left') || $object.hasClass('top-right')) {
          dif = this.height - (top + height) - this.options.offset;
          if (dif < 0) {
            $card.css({
              'top': dif
            });
          }
        } else {
          dif = this.height - (this.height - top + height) - this.options.offset;
          if (dif < 0) {
            $card.css({
              'bottom': dif
            });
          }
        }
      }.bind(this));
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.GalleryBlock = can.Control.extend({
    defaults: {
      thumbSlider: '.js-thumbnail-slider',
      thumbSlide: '.js-thumbnail-slide',
      mainSlider: '.js-main-slider',
      mainSlides: '.js-main-slide',
      item: '.js-gallery-item',
      zoomItem: '.js-slide-zoom',
      zoomData: 'zoomImage'
    }
  }, {
    init: function () {
      this.$thumbSlider = this.element.find(this.options.thumbSlider);
      this.$thumbSlides = this.element.find(this.options.thumbSlide);
      this.$mainSlides = this.element.find(this.options.mainSlides);
      this.$zoomItem = this.element.find(this.options.zoomItem);
      this.$video = this.$mainSlides.find('video');
      this.$items = this.element.find(this.options.item);
      this.offset = this.element.offset().top + this.element.outerHeight();
      this.initSliders();
    },
    '{window} touchstart': function (el, e) {
      var $target = $(e.target);
      if (!$target.parent(this.options.item).length) {
        this.$items.blur();
      }
    },
    '.js-thumbnail-slider .slick-slide click': function ($el) {
      $el.parent().find('.slick-slide').removeClass('slick-current');
      $el.addClass('slick-current');
      this.updateSliders($el.closest('.js-gallery-thumbs-slider').slick('getSlick'), $el.data('slick-index'));
    },
    initSliders: function () {
      this.$mainSlides.eq(0).addClass('showed');
      this.$mainSlides.eq(0).css({
        opacity: 1,
        zIndex: 1
      });
      this.$zoomItem.each(function (i, val) {
        var $el = $(val);
        $el.zoom({
          url: $el.data(this.options.zoomData)
        });
      }.bind(this));
      if (this.$thumbSlider.length) {
        var vertical = typeof this.element.data('horizontal') !== 'undefined' ? !this.element.data('horizontal') : true;
        var thumbSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
          vertical: vertical,
          verticalSwiping: vertical,
          focusOnSelect: true,
          variableWidth: false,
          infinite: false,
          slidesToShow: typeof this.element.data('slides-to-show') !== 'undefined' ? this.element.data('slides-to-show') : 5,
          slidesToScroll: 1,
          arrows: true,
          responsive: [{
            breakpoint: APP.Helpers.responseLg,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToScroll: 1,
              slidesToShow: this.element.data('slides-to-show'),
              variableWidth: true,
            }
          }, {
            breakpoint: APP.Helpers.responseMd,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToScroll: 1,
              slidesToShow: 1,
              variableWidth: true,
            }
          }]
        });
        if (this.$thumbSlides.length < thumbSliderSettings.slidesToShow) {}
        this.$thumbSlider.slick(thumbSliderSettings).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          this.updateSliders(slick, nextSlide);
        }.bind(this));
      }
    },
    updateSliders: function (slick, nextSlide) {
      if (nextSlide >= this.$thumbSlides.length) {
        nextSlide = nextSlide - this.$thumbSlides.length;
      }
      var $newSlide = this.$mainSlides.eq(nextSlide);
      this.$mainSlides.removeClass('showed');
      this.$mainSlides.css({
        opacity: 0,
        zIndex: 'auto'
      });
      $newSlide.addClass('showed');
      $newSlide.css({
        opacity: 1,
        zIndex: 1
      });
      var $video = $newSlide.find('.js-video');
      if ($video.length) {
        this.playVideo($video.find('video'));
      } else {
        this.pauseAllVideo();
      }
    },
    playVideo: function ($video) {
      $video.get(0).player.play();
    },
    pauseAllVideo: function () {
      this.$video.each(function () {
        this.player.pause();
      });
    },
    '{window} scroll': function () {
      if ($(window).scrollTop() >= this.offset) {
        this.pauseAllVideo();
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.SliderPromo = can.Control.extend({
    defaults: {
      linkedSlider: undefined
    }
  }, {
    init: function () {
      this.sliderSettings = $.extend({}, APP.Helpers.sliderSettings);
      this.initSlider();
    },
    initSlider: function () {
      this.slick = this.element.slick(this.sliderSettings);
      if (this.options.linkedSlider !== undefined) {
        this.slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          this.onBeforeChange(event, slick, currentSlide, nextSlide);
        }.bind(this));
      }
    },
    onBeforeChange: function (event, slick, currentSlide, nextSlide) {
      this.options.linkedSlider.slideTo(nextSlide);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.SliderPage = can.Control.extend({
    init: function () {
      this.sliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        swipe: false,
        touchMove: false,
        draggable: false
      });
      this.initSlider();
    },
    initSlider: function () {
      this.element.slick(this.sliderSettings);
    },
    slideTo: function (index) {
      this.element.slick('slickGoTo', index);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.CountButton = can.Control.extend({
    defaults: {
      debouceTime: 1000,
      maxCount: 999,
      minCount: 1,
      countInput: '.js-val',
      incButton: '.js-inc',
      decButton: '.js-dec',
      callback: undefined,
      count: 0,
      events: {
        update: 'update'
      }
    }
  }, {
    init: function () {
      this.instantChange = false;
      this.$countButton = this.element;
      this.$incButton = this.$countButton.find(this.options.incButton);
      this.$decButton = this.$countButton.find(this.options.decButton);
      this.$valueButton = this.$countButton.find(this.options.countInput);
      this.maxCount = (typeof this.element.data('max') !== 'undefined') ? this.element.data('max') : this.options.maxCount;
      this.minCount = (typeof this.element.data('min') !== 'undefined') ? this.element.data('min') : this.options.minCount;
      this.isFloat = this.$valueButton.data('float');
      this.floatCount = this.$valueButton.data('float-count');
      if (this.isFloat) {
        this.currentValue = parseFloat(this.$valueButton.val());
        this.$valueButton.inputFilter('float').inputNumber(this.minCount, this.maxCount, function () {});
      } else {
        this.currentValue = parseInt(this.$valueButton.val());
        this.$valueButton.inputFilter('number').inputNumber(this.minCount, this.maxCount, function () {});
      }
      this._updateButton();
    },
    '{countInput} input': function ($el) {
      clearTimeout(this.timerInput);
      this.timerInput = setTimeout(function () {
        var value = $el.val();
        if (this.isFloat) {
          value = parseFloat(value);
          value = Math.round(value / this.floatCount) * this.floatCount;
        } else {
          value = parseInt(value);
        }
        if (!value || (value < this.minCount)) {
          value = this.minCount;
        } else if ((value > this.maxCount)) {
          value = this.maxCount;
        }
        $el.val(value);
        if (this.options.callback !== undefined) {
          if (typeof this.isFloat !== 'undefined') {
            value = value / this.floatCount;
          }
          this.options.callback(value);
        }
      }.bind(this), this.options.debouceTime);
      return false;
    },
    '.js-inc click': function (el) {
      if (!this.element.hasClass('disabled') && !el.hasClass('disabled')) {
        this.currentValue = this.isFloat ? parseFloat(this.$valueButton.val()) : parseInt(this.$valueButton.val());
        this.currentValue = this.isFloat ? this.currentValue + this.floatCount : this.currentValue + 1;
        if (isNaN(this.currentValue)) {
          this.$valueButton.val('' + this.minCount);
          this.currentValue = this.minCount;
        }
        this.$valueButton.val(this.currentValue).trigger('input');
        this._updateButton();
      }
      return false;
    },
    '.js-dec click': function (el) {
      if (!this.element.hasClass('disabled') && !el.hasClass('disabled')) {
        this.currentValue = this.isFloat ? parseFloat(this.$valueButton.val()) : parseInt(this.$valueButton.val());
        this.currentValue = this.isFloat ? this.currentValue - this.floatCount : this.currentValue - 1;
        if (isNaN(this.currentValue)) {
          this.$valueButton.val('' + this.minCount);
          this.currentValue = this.minCount;
        }
        this.$valueButton.val(this.currentValue).trigger('input');
        this._updateButton();
      }
      return false;
    },
    '{events.update}': function () {
      if (this.maxCount < this.$valueButton.val()) {
        this.currentValue = parseInt(this.maxCount);
        this.$valueButton.val(this.currentValue).trigger('input');
      }
      this._updateButton();
      this._updateInputState();
    },
    _updateButton: function () {
      if ((this.currentValue <= this.maxCount || this.currentValue > this.maxCount) && this.currentValue > this.minCount) {
        this.$decButton.removeClass('disabled');
      } else {
        this.$decButton.addClass('disabled');
      }
      if (this.currentValue < this.maxCount && this.currentValue > 0) {
        this.$incButton.removeClass('disabled');
      } else {
        this.$incButton.addClass('disabled');
      }
    },
    _updateInputState: function () {
      if (this.currentValue == this.maxCount == this.minCount) {
        this.$valueButton.prop('disabled', true);
      } else {
        this.$valueButton.prop('disabled', false);
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  "use strict";
  APP.Controls.Partials.CurrentViews = can.Control.extend({
    defaults: {
      text: '.js-current-views-text',
      close: '.js-current-views-close'
    }
  }, {
    init: function () {
      this.$text = this.element.find(this.options.text);
      this.text = this.element.data('text');
      this.from = this.element.data('from');
      this.to = this.element.data('to');
      this.delay = (typeof this.element.data('delay') != 'undefined') ? parseInt(this.element.data('delay')) * 1000 : 0;
      if ((typeof this.text == 'undefined') || (typeof this.from == 'undefined') || (typeof this.to == 'undefined')) {
        return false;
      }
      this.num = APP.Helpers.getRandomInt(this.from, this.to);
      this.strMan = APP.Helpers.pluralForm(this.num, 'человек', 'человека', 'человек');
      if (!this.num || !this.strMan.length) {
        return false;
      }
      this.text = this.text.replace('#NUM#', this.num);
      this.text = this.text.replace('#MAN#', this.strMan);
      this.$text.html(this.text);
      setTimeout(function () {
        this.show();
      }.bind(this), this.delay);
    },
    '{close} click': function () {
      this.hide();
    },
    show: function () {
      this.element.removeClass('hide');
    },
    hide: function () {
      this.element.addClass('hide');
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.CustomSelect = can.Control.extend({
    defaults: {
      selectBlock: '.js-select-block',
      selectPopup: '.js-select-popup',
      selectOpenClass: 'select-block-open',
      scrollContainer: '.js-m-scroll',
      containerSelector: '.js-select',
      rangeClass: 'js-select-range',
      currentOptionSelector: '.js-select-current-option',
      selectedTextSelector: '.js-select-text-prefix',
      inputLabel: '.js-select-option',
      defaultDataSelector: 'placeholder',
      prefixSeparate: ':',
      phToggleClass: 'no-selected',
      events: {
        clearInput: 'clearInput'
      }
    }
  }, {
    init: function () {
      this.$pageSelectBlocks = $(this.options.selectBlock);
      APP.Helpers.customScroll(this.element.find(this.options.scrollContainer));
    },
    '{selectBlock} click': function ($el) {
      this.$pageSelectBlocks.not($el).removeClass(this.options.selectOpenClass);
      $el.toggleClass(this.options.selectOpenClass);
    },
    '{inputLabel} click': function ($el) {
      var elem = this.element.find('#' + $el.attr('for'));
      if (elem.prop('checked')) {
        this.closeSelect();
      } else {
        elem.change();
      }
    },
    'input change': APP.Helpers.debounce(function ($el) {
      this._change($el);
    }, 1000, this),
    '{events.clearInput}': function ($el) {
      this._change($el);
    },
    _change: function ($el) {
      this.updateHeadSelect($el);
      this.callbackChange($el);
      this.closeSelect();
    },
    updateHeadSelect: function ($el) {
      if (typeof $el == 'undefined') {
        return false;
      }
      var $select = $el.closest(this.options.containerSelector);
      var $currentOptionText = $select.find(this.options.currentOptionSelector);
      var $currentOptionTextPrefix = $select.find(this.options.selectedTextSelector);
      var $inputList = false;
      var $inputValList = [];
      var resultString = '';
      var prefix = '';
      $inputList = $select.find('input:checked').siblings(this.options.inputLabel);
      if (typeof $inputList != 'undefined') {
        $.each($inputList, function () {
          $inputValList.push(this.innerText);
        });
      }
      if ($inputValList.length == 1) {
        resultString = $inputValList.join('');
      } else if ($inputValList.length > 1) {
        resultString = $inputValList.length;
      }
      if (resultString != '') {
        prefix = this.options.prefixSeparate;
      }
      $currentOptionTextPrefix.text($currentOptionTextPrefix.data(this.options.defaultDataSelector) + prefix);
      $currentOptionText.html(resultString);
    },
    callbackChange: function ($el) {
      if (typeof window.smartFilter != 'undefined') {
        window.smartFilter.keyup($el.get(0));
      }
    },
    closeSelect: function () {
      this.$pageSelectBlocks.removeClass(this.options.selectOpenClass);
    },
    '{window} click': function (el, e) {
      var elem = $(e.target);
      if (elem.closest(this.options.containerSelector).length == 0) {
        this.closeSelect();
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.CustomSelectRange = APP.Controls.Partials.CustomSelect.extend({
    defaults: {
      containerSelector: '.js-select',
      rangeClass: 'js-select-range',
      currentOptionSelector: '.js-select-current-option',
      selectedTextSelector: '.js-select-text-prefix',
      defaultDataSelector: 'placeholder',
      prefixSeparate: ':'
    }
  }, {
    updateHeadSelect: function ($el) {
      if (typeof $el == 'undefined') {
        return false;
      }
      var $select = $el.closest(this.options.containerSelector);
      var $currentOptionText = $select.find(this.options.currentOptionSelector);
      var $currentOptionTextPrefix = $select.find(this.options.selectedTextSelector);
      var $inputList = false;
      var $inputValList = [];
      var resultString = '';
      var prefix = '';
      $inputList = $select.find('input');
      $inputList = $inputList.slice(0, 2);
      if (typeof $inputList != 'undefined') {
        $.each($inputList, function () {
          $inputValList.push(APP.Helpers.numberFormat(this.value));
        });
      }
      if ($inputValList.length) {
        resultString = $inputValList.join('-');
      }
      if (resultString != '') {
        prefix = this.options.prefixSeparate;
      }
      $currentOptionTextPrefix.text($currentOptionTextPrefix.data(this.options.defaultDataSelector) + prefix);
      $currentOptionText.html(resultString);
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.CustomSelectRadio = APP.Controls.Partials.CustomSelect.extend({
    defaults: {
      containerSelector: '.js-select',
      rangeClass: 'js-select-range',
      currentOptionSelector: '.js-select-current-option',
      selectedTextSelector: '.js-select-text-prefix',
      defaultDataSelector: 'placeholder',
      headTemplate: 'customSelectHead',
      prefixSeparate: ':'
    }
  }, {
    'input change': function ($el) {
      this.updateHeadSelect($el);
      this.callbackChange($el);
      this.closeSelect();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.CustomSelectLikeSelect = APP.Controls.Partials.CustomSelectRadio.extend({
    defaults: {}
  }, {
    updateHeadSelect: function ($el) {
      if (typeof $el == 'undefined') {
        return false;
      }
      var $select = $el.closest(this.options.containerSelector);
      var $currentOptionText = $select.find(this.options.currentOptionSelector);
      var $currentOptionTextPrefix = $select.find(this.options.selectedTextSelector);
      var $inputList = [];
      var $inputValList = [];
      var resultString = '';
      var prefix = '';
      $.each($select.find('input:checked'), function () {
        $inputList.push($select.find('label[for="' + this.id + '"]').get(0));
      });
      if (typeof $inputList != 'undefined') {
        $.each($inputList, function () {
          $inputValList.push(this.innerHTML);
        });
      }
      if ($inputValList.length == 1) {
        resultString = $inputValList.join('');
      } else if ($inputValList.length > 1) {
        resultString = $inputValList.length;
      }
      if (resultString != '') {
        prefix = this.options.prefixSeparate;
      }
      $currentOptionTextPrefix.text($currentOptionTextPrefix.data(this.options.defaultDataSelector) + prefix);
      $currentOptionText.html(resultString);
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.Range = can.Control.extend({
    defaults: {
      input: '.js-range-input',
      from: '.js-range-from',
      to: '.js-range-to',
      submit: '.js-range-submit',
      range: {
        type: 'double',
        postfix: " Р",
        prettify_enabled: true
      }
    }
  }, {
    init: function () {
      this.rangeOptions = this.options.range;
      this.rangeInput = this.element.find(this.options.input);
      this.rangeInputFrom = this.element.find(this.options.from);
      this.rangeInputFromLabel = this.rangeInputFrom.closest('.js-input-row').find('label');
      this.rangeInputTo = this.element.find(this.options.to);
      this.rangeInputToLabel = this.rangeInputTo.closest('.js-input-row').find('label');
      this.initRange();
    },
    initRange: function () {
      this.rangeInput.ionRangeSlider(this.rangeOptions);
      this.rangeFrom = this.element.find('.irs-from');
      this.rangeTo = this.element.find('.irs-to');
    },
    '{input} change': function (range) {
      if (this.rangeInputFrom.val() != range.data('from')) {
        this.rangeInputFrom.val(range.data('from'));
        this.rangeInputFromLabel.html(this.rangeFrom.html());
      }
      if (this.rangeInputTo.val() != range.data('to')) {
        this.rangeInputTo.val(range.data('to'));
        this.rangeInputToLabel.html(this.rangeTo.html());
      }
      return false;
    },
    '{from} input': APP.Helpers.debounce(function () {
      var value = this.sanitizeValue(this.rangeInputFrom);
      this.rangeInput.data('ionRangeSlider').update({
        from: value
      });
      this.rangeInputFrom.val(value);
      this.rangeFrom = this.element.find('.irs-from');
      this.rangeTo = this.element.find('.irs-to');
      this.rangeInputFromLabel.html(this.rangeFrom.html());
      return false;
    }, 2000, this),
    '{to} input': APP.Helpers.debounce(function () {
      var value = this.sanitizeValue(this.rangeInputTo);
      this.rangeInput.data('ionRangeSlider').update({
        to: value
      });
      this.rangeInputTo.val(value);
      this.rangeFrom = this.element.find('.irs-from');
      this.rangeTo = this.element.find('.irs-to');
      this.rangeInputToLabel.html(this.rangeTo.html());
      return false;
    }, 2000, this),
    '{to}, {from} change': function () {
      return false;
    },
    '{submit} click': function () {
      this.rangeInputTo.trigger('clearInput');
    },
    sanitizeValue: function ($value) {
      var min = this.rangeInput.data('min');
      var max = this.rangeInput.data('max');
      var valueCurrent = parseInt($value.val());
      if ((isNaN(valueCurrent) || valueCurrent < min) && $value.hasClass('js-range-to')) {
        valueCurrent = max;
      } else if (isNaN(valueCurrent)) {
        valueCurrent = min;
      } else if (valueCurrent < min) {
        valueCurrent = min;
      } else if (valueCurrent > max) {
        valueCurrent = max;
      }
      return valueCurrent;
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.DeliveryMap = can.Control.extend({
    defaults: {
      deliveryPopupTemplate: 'cartDelivery',
      bubbleTemplate: 'cartDeliveryMapBubble',
      deliveryPointSelectedTemplate: 'cartDeliveryMapSelectPoint',
      mapSelector: '.js-delivery-map',
      shopSelector: '.js-delivery-shop',
      deliveryPointSelector: '.js-delivery-map-point',
      deliveryInput: '.js-delivery-type',
      deliverySelectedPointPanel: '.js-delivery-map-selected-point-panel',
      mapStyle: [{
        'featureType': 'administrative.country',
        'elementType': 'labels.text',
        'stylers': [{
          'hue': '#00ffff'
        }]
      }, {
        'featureType': 'poi.business',
        'elementType': 'all',
        'stylers': [{
          'visibility': 'on'
        }]
      }, ],
      clusterStyle: [{
        url: '/local/images/google-cluster.png',
        height: 41,
        width: 33,
        averageCenter: true,
        textColor: '#272e32',
        textSize: 12,
        anchor: [-9, 0]
      }],
      pinImageLink: '/local/images/google-pin.png',
      scroll: '.js-m-scroll',
      selectedPointConfirm: '.js-delivery-map-confirm',
      bubbleCloseBtn: '.js-bubble-close'
    }
  }, {
    init: function () {},
    '{deliveryPointSelector} click': function ($el) {
      var parentNode = $el.closest('label');
      parentNode.click();
      this.deliveryInput = parentNode.siblings(this.options.deliveryInput);
      var deliveryPoint = this.options.deliveryOrder.getDeliveryDataByElement(this.deliveryInput);
      $.fancybox({
        content: can.view.render(this.options.deliveryPopupTemplate, {
          deliveryPoint: deliveryPoint
        }),
        padding: 0,
        helpers: {
          overlay: {
            locked: false
          }
        },
        afterShow: this.afterShow.bind(this, deliveryPoint)
      });
    },
    afterShow: function (deliveryPoint) {
      this.element.find(this.options.scroll).each(function () {
        $(this).mCustomScrollbar({
          scrollbarPosition: 'outside',
          scrollInertia: 0,
          axis: (typeof $(this).data('axis') !== 'undefined') ? $(this).data('axis') : 'y',
          autoDraggerLength: false
        });
      });
      this.initMap(deliveryPoint, this.options.deliveryOrder.selectedPoint);
    },
    initMap: function (deliveryPoint) {
      this.flag = true;
      this.$shops = this.element.find(this.options.shopSelector);
      this.$deliverySelectedPointPanel = this.element.find(this.options.deliverySelectedPointPanel);
      APP.selectPoint = this.options.deliveryOrder.getDeliveryPoint();
      this.markers = [];
      this.bubbles = [];
      this.bounds = new google.maps.LatLngBounds();
      this.$map = this.element.find(this.options.mapSelector);
      this.map = new google.maps.Map(this.$map.get(0), {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 5,
        mapTypeControl: false,
        scrollwheel: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: this.options.mapStyle,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      });
      if (deliveryPoint) {
        for (var key in deliveryPoint) {
          if (deliveryPoint.hasOwnProperty(key)) {
            this.setMarker(this.map, deliveryPoint[key]);
          }
        }
        this.setCluster(this.map);
        this.map.fitBounds(this.bounds);
      }
      if (APP.selectPoint > 0) {
        this.$shops.filter('[data-map-delivery=' + APP.selectPoint + ']').click();
      }
      google.maps.event.addListener(this.map, 'click', function () {
        this.closeInfoBubbles();
      }.bind(this));
    },
    setMarker: function (map, deliveryPoint) {
      if (typeof deliveryPoint == 'undefined' && !deliveryPoint.hasOwnProperty('GEO') && !deliveryPoint.GEO.hasOwnProperty('LAT') && !deliveryPoint.GEO.hasOwnProperty('LON')) {
        return false;
      }
      var coords = new google.maps.LatLng(deliveryPoint.GEO.LAT, deliveryPoint.GEO.LON);
      var marker = new google.maps.Marker({
        pointId: deliveryPoint.ID,
        position: coords,
        map: map,
        title: '',
        icon: this.options.pinImageLink
      });
      var mustache = can.view(this.options.bubbleTemplate, deliveryPoint);
      var div = document.createElement('div');
      div.appendChild(mustache);
      div.querySelector(this.options.bubbleCloseBtn).addEventListener('click', this.closeInfoBubbles.bind(this));
      var bubble = new InfoBubble({
        backgroundColor: '#d1d83a',
        shadowStyle: 0,
        borderWidth: 0,
        minWidth: 267,
        maxWidth: 267,
        hideCloseButton: true,
        minHeight: '100%',
        borderRadius: 3,
        padding: 0,
        arrowSize: 10,
        content: div
      });
      marker.addListener('click', this.markerClick.bind(this, map, marker, bubble, deliveryPoint));
      this.bounds.extend(coords);
      this.markers.push(marker);
      this.bubbles.push(bubble);
    },
    setCluster: function (map) {
      new MarkerClusterer(map, this.markers, {
        styles: this.options.clusterStyle
      });
    },
    markerClick: function (map, marker, bubble, deliveryPoint) {
      this.closeInfoBubbles();
      bubble.open(map, marker);
      map.setZoom(16);
      this.$shops.removeClass('active');
      var shopElem = this.$shops.filter('[data-map-delivery=' + deliveryPoint.ID + ']');
      if (shopElem) {
        shopElem.addClass('active');
        shopElem.closest(this.options.scroll).mCustomScrollbar('scrollTo', shopElem);
      }
      this._renderSelectedPoint(deliveryPoint);
      APP.selectPoint = deliveryPoint;
    },
    closeInfoBubbles: function () {
      $.each(this.bubbles, function (index, el) {
        el.close();
      });
    },
    '{shopSelector} click': function ($el) {
      var deliveryId = $el.data('map-delivery');
      if (typeof deliveryId != 'undefined') {
        for (var key in this.markers) {
          if (this.markers.hasOwnProperty(key)) {
            var elem = this.markers[key];
            if (elem.hasOwnProperty('pointId') && elem.pointId == deliveryId && typeof google != 'undefined') {
              google.maps.event.trigger(elem, 'click');
            }
          }
        }
      }
    },
    _renderSelectedPoint: function (deliveryPoint) {
      if (typeof deliveryPoint != 'undefined' && deliveryPoint.hasOwnProperty('CITY') && deliveryPoint.hasOwnProperty('ADDRESS')) {
        this.$deliverySelectedPointPanel.html(can.view(this.options.deliveryPointSelectedTemplate, {
          data: [deliveryPoint.CITY, deliveryPoint.ADDRESS]
        }));
      }
    },
    '{selectedPointConfirm} click': function () {
      this.options.deliveryOrder.setDeliveryPointByCurrentInput(APP.selectPoint.ID, this.deliveryInput);
      $.fancybox.close();
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.QuickGallery = can.Control.extend({}, {
    init: function () {
      this.$slides = this.element.find('.js-slide');
      this.$triggers = this.element.find('.js-thumbs a');
    },
    '.js-thumbs a click': function (el) {
      var index = el.index();
      this.$triggers.removeClass('active').eq(index).addClass('active');
      this.$slides.removeClass('active').eq(index).addClass('active');
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.FormProductChanger = can.Control.extend({
    defaults: {
      addBlock: '.js-add-block',
      addParams: '.js-form-product-add-params',
      activeClass: 'active',
      select: '.js-select'
    }
  }, {
    init: function () {
      this.$addBlock = this.element.find(this.options.addBlock);
      this.element.find(this.options.select).each(function () {
        var pagePlugin = can.capitalize(can.camelize(this.dataset.type));
        var name = APP.Controls.Partials['CustomSelect' + pagePlugin];
        if (name) {
          new name(this);
        } else {
          new APP.Controls.Partials.CustomSelect(this);
        }
      });
    },
    '{addParams} click': function ($toggle, event) {
      event.preventDefault();
      this.$addBlock.slideToggle();
      $toggle.toggleClass(this.options.activeClass);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Video = can.Control.extend({
    init: function () {
      this._isPlaying = false;
      this._verIE = this.getInternetExplorerVersion();
      this.beforeShow();
    },
    beforeShow: function () {
      this.videoPlayer = this.element.mediaelementplayer({
        poster: this.element.data('poster'),
        videoWidth: -1,
        videoHeight: -1,
        mode: 'auto',
        hideVideoControlsOnLoad: true,
        stretching: 'auto',
        showPosterWhenEnded: true,
        defaultVideoWidth: -1,
        defaultVideoHeight: -1,
        alwaysShowControls: false,
        features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume'],
        timeAndDurationSeparator: '<span> / </span>',
        playText: 'Воспроизвести',
        pauseText: 'Пауза',
        videoVolume: 'horizontal',
        MuteText: mejs.i18n.t('123'),
        unmuteText: 'Включить звук',
        success: function (mediaElement, domObject) {
          this._player = mediaElement;
          this._player.addEventListener('playing', function () {
            this._isPlaying = true;
          }, false);
        }
      });
    },
    beforeClose: function () {
      if (this._isPlaying && (this._verIE > -1)) {
        this._verIE < 9.0 ? this._player.remove() : this.videoPlayer.remove();
        this._isPlaying = false;
      }
    },
    getInternetExplorerVersion: function () {
      var rv = -1;
      if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(ua) != null) {
          var match = re.exec(ua);
          rv = parseFloat(match[1]);
        }
      }
      return rv;
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.Up = can.Control.extend({
    defaults: {
      visibleClass: 'vis',
      footerClass: 'footer',
      darkBlock: '.js-dark-block',
      show: 400
    }
  }, {
    init: function () {
      this.reInit();
    },
    reInit: function () {
      this.position = this.element.offset().top;
      this.positionBottom = this.position + this.element.height();
      this.toggleClass = false;
      $(this.options.darkBlock).each(function (i, el) {
        var min = el.offsetTop;
        var max = min + el.clientHeight;
        if ((this.position >= min && this.position <= max) || (this.positionBottom >= min && this.positionBottom <= max)) {
          this.toggleClass = true;
        }
      }.bind(this));
      this.element.toggleClass(this.options.visibleClass, $(window).scrollTop() > this.options.show);
      this.element.toggleClass(this.options.footerClass, this.toggleClass);
    },
    'click': function ($el, ev) {
      $.scrollTo(0, 500);
    },
    '{window} resize': function () {
      this.reInit();
    },
    '{window} scroll': function () {
      this.reInit();
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.FloatAllMenu = can.Control.extend({
    defaults: {
      allMenuButton: '.js-float-all-menu-button',
      floatContainer: '.js-float-header-container',
      navItem: '.js-top-nav',
      navDropClass: 'show',
      buttonActiveClass: 'is-active'
    }
  }, {
    init: function () {
      this.isOpen = false;
      var nav = $(this.options.navItem);
      if (nav.length) {
        nav.clone().appendTo(this.options.floatContainer);
        this.navDrop = this.element.siblings(this.options.navItem);
        this.navDrop.addClass('nav-dropdown');
      }
    },
    '{allMenuButton} click': function (el, ev) {
      el.toggleClass(this.options.buttonActiveClass);
      if (typeof this.navDrop !== "undefined") {
        this.navDrop.toggleClass(this.options.navDropClass);
      }
      return false;
    },
    '{window} click': function (e) {
      var elem = $(e.target);
      if (elem.closest(this.options.navDrop).length === 0) {
        this.navDrop.removeClass(this.options.navDropClass);
        this.element.find(this.options.allMenuButton).removeClass(this.options.buttonActiveClass);
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FilterSelectedValue = can.Control.extend({
    defaults: {
      rangeInput: '.js-range-input',
      rangeInputFrom: '.js-range-from',
      rangeInputTo: '.js-range-to',
      template: '/local/js/ejs/filter-selected-item.ejs',
      labelText: '.js-select-option',
      selectedItem: '.js-selected-item'
    }
  }, {
    init: function () {
      var result = this.getRangeInput();
      result = this.getCheckedInput(result);
      can.view.render(this.options.template, {
        item: result
      }, '', function (data) {
        this.element.html(data);
      }.bind(this));
    },
    getRangeInput: function () {
      var range = this.options.filter.find(this.options.rangeInput);
      var rangeFrom = this.options.filter.find(this.options.rangeInputFrom);
      var rangeTo = this.options.filter.find(this.options.rangeInputTo);
      var rangeMax = range.data('max');
      var rangeMin = range.data('min');
      var result = [];
      if (rangeFrom.val() != rangeMin) {
        result.push({
          min: rangeMin,
          value: APP.Helpers.numberFormat(rangeFrom.val()),
          id: rangeFrom.get(0).id
        });
      }
      if (rangeTo.val() != rangeMax) {
        result.push({
          max: rangeMax,
          value: APP.Helpers.numberFormat(rangeTo.val()),
          id: rangeTo.get(0).id
        });
      }
      return result;
    },
    getCheckedInput: function (result) {
      var checkedItem = this.options.filter.find('input:not(.js-ignore):checked');
      var self = this;
      $.each(checkedItem, function () {
        var elem = $(this);
        result.push({
          value: elem.siblings(self.options.labelText).text(),
          id: this.id
        });
      });
      return result;
    },
    '{selectedItem} click': function ($el) {
      var item = this.options.filter.find('#' + $el.data('id'));
      if (item.length && $el.data('default')) {
        item.val($el.data('default')).trigger('clearInput');
      } else {
        item.prop('checked', false).trigger('clearInput');
      }
      $el.remove();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.Form = can.Control.extend({
    defaults: {
      select: '.js-select',
      formRow: '.form-row',
      inputRow: '.input-row',
      errorContainer: '.js-error-message-text',
      check: '.js-check'
    }
  }, {
    fieldNames: [],
    $fields: {},
    validateRules: {},
    validateMessages: {},
    values: {},
    redirectHref: false,
    init: function () {
      var redirectHref = this.element.data('redirect-href');
      this.okPopup = this.element.data('ok-popup');
      this.clearAfter = (this.element.data('clear-after') == undefined) ? true : this.element.data('clear-after');
      this.emailCheckUrl = this.element.data('email-check');
      if (redirectHref !== undefined) {
        this.redirectHref = redirectHref;
      }
      this.action = this.element.attr('action');
      this.element.lockTab();
      this.setFields();
      this.addValidators();
      this.setValidateOptions();
      this.element.find(this.options.check).each(function () {
        this.value = 1;
      });
      this._validate();
      if (this.element.data('show')) {
        var $popup = this.element.closest('.popup');
        if ($popup.length > 0) {
          $.fancybox({
            href: '#' + $popup.attr('id'),
            afterShow: this.proxy('_callbackAfterShowPopup'),
            afterClose: this.proxy('_callbackAfterClosePopup'),
            autoSize: true,
            autoHeight: true,
            autoWidth: true,
            margin: 0,
            padding: 0
          });
        }
      }
      if ((typeof APP.USER !== 'undefined') && (typeof APP.USER.sessid !== 'undefined')) {
        this.element.find('input[name=sessid]').each(function () {
          $(this).val(APP.USER.sessid);
        });
      }
      this.initInputs();
      var $submit = this.element.find('[type=submit]');
      if ($submit.length) {
        $submit.prop('disabled', false);
      }
    },
    _validate: function () {
      this.validator = this.element.validate({
        ignore: '.ignore',
        invalidHandler: function (form, validator) {
          var errors = validator.numberOfInvalids();
          if (errors) {
            var $el = $(validator.errorList[0].element);
            if (validator.errorList[0] != void 0) {
              validator.errorList[0].element.focus();
            }
            if (window.innerWidth <= APP.Helpers.responseLg && $el != void 0) {
              $('html, body').animate({
                scrollTop: $el.offset().top - 100
              }, 600);
            }
          }
        },
        highlight: function (element) {
          var $element = $(element);
          this.setInValid($element);
        }.bind(this),
        unhighlight: function (element) {
          var $element = $(element);
          this.setValid($element);
          $element.trigger('checkError');
        }.bind(this),
        errorPlacement: function (error, element) {
          var $element = $(element);
          this.setError($element, error.text());
          $element.trigger('checkError');
        }.bind(this),
        submitHandler: this.proxy('submitHandler'),
        rules: this.validateRules,
        messages: this.validateMessages
      });
    },
    _callbackAfterShowPopup: function () {
      this.element.find('input[type!="hidden"], textarea, select').first().focus();
    },
    _callbackAfterClosePopup: function () {
      var id = $(this).attr('href');
      var $form = $(id).find('form');
      if ($form.length) {
        $form.clearForm();
        APP.Helpers.clearErrorForm($form);
      }
    },
    setFields: function () {
      this.element.find('[data-js-validate]').each(this.proxy(function (k, v) {
        var field = $(v);
        if (field.data('js-validate') == '1') {
          var fieldName = field.attr('name');
          this.fieldNames.push();
          this.$fields[fieldName] = field;
        }
      }));
    },
    setValidateOptions: function () {
      this.validateRules = {};
      this.validateMessages = {};
      $.each(this.$fields, this.proxy(function (field, el) {
        this.validateRules[field] = {
          customEmail: !!el.data('email'),
          required: el.data('required'),
          minlength: el.data('min-length'),
          maxlength: el.data('max-length'),
          customPhone: !!el.data('phone'),
          onlyEn: !!el.data('only-en'),
          equalTo: el.data('equal-to'),
          notEqual: el.data('not-equal'),
          valueNotEquals: el.data('value-not-equals'),
          depend: el.data('depend')
        };
        this.validateMessages[field] = {
          customEmail: el.data('email-msg'),
          required: el.data('required-msg'),
          minlength: el.data('min-length-msg'),
          maxlength: el.data('max-length-msg'),
          customPhone: el.data('phone-msg'),
          onlyEn: el.data('only-en-msg'),
          password: el.data('password-msg'),
          equalTo: el.data('equal-to-msg'),
          notEqual: el.data('not-equal-msg'),
          valueNotEquals: el.data('value-not-equals-msg'),
          depend: el.data('depend-msg')
        };
      }));
    },
    getValues: function () {
      return this.element.serialize();
    },
    submitHandler: function () {
      this.element.addClass('active');
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'json',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    },
    setValid: function ($element) {
      $element.closest(this.options.inputRow).removeClass('error');
      var row = $element.closest(this.options.formRow);
      if (!row.find(this.options.inputRow).filter('.error').length) {
        row.removeClass('error').addClass('valid');
        this.setError($element, '');
      }
    },
    setInValid: function ($element) {
      $element.closest(this.options.inputRow).addClass('error');
      var row = $element.closest(this.options.formRow);
      row.removeClass('valid').addClass('error');
    },
    setError: function (element, message) {
      element.closest(this.options.formRow).find(this.options.errorContainer).html(message);
    },
    submitResult: function (data) {
      this.element.removeClass('active');
      if (data.result) {
        if (this.clearAfter) {
          this.element.clearForm();
        }
        APP.Helpers.clearErrorForm(this.element);
        this.successCallback(data);
        this.showPopup(data);
      } else {
        if (data.errorFields && data.errorFields.length > 0) {
          for (var i = 0; i < data.errorFields.length; i++) {
            var input = this.element.find('#' + data.errorFields[i].fieldId);
            this.setInValid(input);
            this.setError(input, data.errorFields[i].message);
            var row = input.closest(this.options.formRow);
            row.removeClass("valid").addClass("error");
            row.find(this.options.errorContainer).html(data.errorFields[i].message);
            if (i == 0) {
              input.focus();
            }
          }
        }
      }
    },
    successCallback: function () {},
    showPopup: function (data) {
      if (this.okPopup.length) {
        var hrefPopup = '#' + this.okPopup;
        var $popupSuccess = $(hrefPopup);
        if (!$popupSuccess.length) {
          return true;
        }
        $popupSuccess.find('.js-success-title').html(data.message.title);
        $popupSuccess.find('.js-success-text').html(data.message.text);
        this.closeFancyTimeout = (data.message.text.length / 10) * 1000;
        if (this.closeFancyTimeout < 4000000) this.closeFancyTimeout = 4000000;
        var self = this;
        $.fancybox({
          href: hrefPopup,
          afterClose: function () {
            clearTimeout(APP.fancyTimeOut);
            if (self.redirectHref != false && data.result) {
              self.redirect(data);
            }
            self.closeSuccessPopupCallback();
            $popupSuccess.removeClass('visible');
          },
          afterShow: function () {
            $popupSuccess.addClass('visible');
            self.callbackFancyboxAfterShow.call(this, self);
          },
          autoSize: true,
          autoHeight: true,
          autoWidth: true,
          margin: 0,
          padding: 0
        });
        APP.fancyTimeOut = setTimeout(this.proxy(function () {
          $.fancybox.close();
          if (this.redirectHref != false && data.result) {
            this.redirect();
          }
        }), this.closeFancyTimeout);
      } else {
        if (this.redirectHref != false && data.result) {
          this.redirect();
        }
      }
    },
    closeSuccessPopupCallback: function () {},
    callbackFancyboxAfterShow: function () {},
    redirect: function () {
      if (this.redirectHref == 'reload') {
        document.location.reload();
      } else if (this.redirectHref !== false && this.redirectHref !== 'false') {
        document.location.href = this.redirectHref;
      }
    },
    addValidators: function () {
      $.validator.addMethod('customEmail', function (value) {
        return /^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9_\-\.])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
      });
      $.validator.addMethod('customPhone', function (value) {
        return !/(_)+/.test(value);
      });
      $.validator.addMethod('onlyEn', function (value) {
        return /^[a-z0-9-_\.]+$/i.test(value);
      });
      $.validator.addMethod('notEqual', function (value, element, param) {
        return this.optional(element) || value != $(param).val();
      });
      $.validator.addMethod('valueNotEquals', function (value, element, arg) {
        return arg != value;
      });
      $.validator.addMethod('depend', function (value, element) {
        var depend = $($(element).data('depend-element')).val();
        return depend != '';
      });
    },
    initInputs: function () {
      this.element.find(this.options.select).each(function () {
        var pagePlugin = can.capitalize(can.camelize(this.dataset.type));
        var name = APP.Controls.Partials['CustomSelect' + pagePlugin];
        if (name) {
          new name(this);
        } else {
          new APP.Controls.Partials.CustomSelect(this);
        }
      });
    },
    'input keyup': function (e, key) {
      if (key.keyCode == 27) {
        $.fancybox.close();
      }
    },
    'select change': function (el) {
      this.validator.element('#' + el.prop('id'));
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Partials.FormOrder = APP.Controls.Partials.Form.extend({
    defaults: {
      blockPersonal: '.js-block-personal-data-user',
      btnOk: '.js-btn-ok',
      blockDelivery: '.js-delivery-data',
      emailInput: '.js-email',
      passwordRows: '.js-passport-row',
      deliveryType: '.js-delivery-type',
      deliveryMapPoint: '.js-delivery-map-point'
    }
  }, {
    init: function () {
      this._super();
      this.$blockPersonal = this.element.find(this.options.blockPersonal);
      this.$blockDelivery = this.element.find(this.options.blockDelivery);
      if (this.element.find(this.options.btnOk).is(':visible')) {
        this.$blockDelivery.hide();
      } else {
        this.$blockDelivery.show();
      }
      this.redirectConfirm = this.element.data('redirect-confirm');
      this.redirectPayment = this.element.data('redirect-payment');
      this.emailCheckUrl = this.element.data('email-check');
      this.$emailInput = this.element.find(this.options.emailInput);
      this.$passwordRows = this.element.find(this.options.passwordRows);
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
    },
    '{deliveryMapPoint} click': function () {
      this.setValidDelivery();
    },
    '{deliveryType} change': function () {
      this.setValidDelivery();
    },
    '{btnOk} click': function ($el, e) {
      e.preventDefault();
      this.showStep2();
      return true;
    },
    setValidDelivery: function () {
      this.element.find(this.options.deliveryType).each(function (i, val) {
        this.setValid($(val));
      }.bind(this));
    },
    submitHandler: function () {
      if (!this.checkDelivery()) {
        return false;
      }
      this.checkEmail();
    },
    submitForm: function () {
      this.element.addClass('active');
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'json',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    },
    checkEmail: function () {
      if (this.$blockPersonal.find('input').valid()) {
        if ((typeof this.emailCheckUrl !== 'undefined') && (this.$emailInput.length)) {
          this.element.addClass('active');
          $.ajax({
            url: this.emailCheckUrl,
            type: 'post',
            dataType: 'json',
            data: this.getValues(),
            success: function (data) {
              this.element.removeClass('active');
              if (data.result) {
                this.submitForm();
              } else {
                this.setInValid(this.$emailInput);
                this.setError(this.$emailInput, this.$emailInput.data('email-new-msg'));
                this.$emailInput.focus();
              }
            }.bind(this)
          });
        } else {
          this.submitForm();
        }
      } else {
        this.$blockPersonal.find('.form-row.error input').eq(0).focus();
      }
    },
    checkDelivery: function () {
      this.setValidDelivery();
      var $elem = this.getCheckedInput();
      if ($elem && $elem.data('selected-point') == 0 && $elem.data('type') == 'SELF') {
        this.setInValid($elem);
        this.setError($elem, $elem.data('data-point-msg'));
        $.scrollTo($elem.parent(), 300, {
          over: {
            left: 0,
            top: -1
          }
        });
        return false;
      }
      return true;
    },
    showStep2: function () {
      this.element.find(this.options.btnOk).hide();
      this.$blockDelivery = this.element.find(this.options.blockDelivery);
      this.$blockDelivery.slideDown(300, function () {
        $.scrollTo(this.$blockDelivery, 300, {
          offset: {
            top: -50
          }
        });
      }.bind(this));
      this.options.parent.callbackTab();
    },
    successCallback: function (data) {
      if ((typeof data.result == 'undefined') || !data.result) {
        return true;
      }
      if ((typeof data.id == 'undefined') || !data.id) {
        return true;
      }
      this.okPopup = '';
      if ((typeof data.canPay !== 'undefined') && data.canPay) {
        this.redirectHref = this.redirectPayment + '?ORDER_ID=' + data.id;
      } else {
        this.redirectHref = this.redirectConfirm + '?ORDER_ID=' + data.id;
      }
      this.redirect();
    },
    getCheckedInput: function () {
      var result = false;
      this.element.find(this.options.deliveryType).each(function (i, el) {
        if (typeof el == 'object' && el.checked && el.parentNode.style.display != 'none' && $(el.parentNode).is(':visible')) {
          result = $(el);
        }
      });
      return result;
    },
    hidePasswordFields: function () {
      this.$passwordRows.hide();
      this.$passwordRows.find('input').addClass('ignore');
    },
    showPasswordFields: function () {
      this.$passwordRows.show();
      this.$passwordRows.find('input').removeClass('ignore');
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  "use strict";
  APP.Controls.Partials.FormKitchenCalculate = APP.Controls.Partials.Form.extend({
    defaults: {
      angle: '.js-angle',
      angleRow: '.js-angle-row',
      angleLength: '.js-angle-length',
      island: '.js-island',
      islandLength: '.js-island-length',
      type: '.js-kitchen-type',
      col: '.js-col'
    }
  }, {
    init: function () {
      this._super();
      this.$relations = [];
      this.$types = this.element.find(this.options.type);
      this.$angle = this.element.find(this.options.angle);
      this.$angleRow = this.element.find(this.options.angleRow);
      this.$anglesLength = this.element.find(this.options.angleLength);
      this.$island = this.element.find(this.options.island);
      this.$islandLength = this.element.find(this.options.islandLength);
      if (typeof APP.KITCHEN_RELATIONS != 'undefined') {
        this.$relations = APP.KITCHEN_RELATIONS;
      }
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
      this.initAngles();
      this.initIsland();
    },
    '{type} change': function () {
      this.initAngles();
    },
    '{angle} change': function () {
      this.initAngles();
    },
    '{island} change': function () {
      this.initIsland();
    },
    initAngles: function () {
      var $checked = this.$types.filter(':checked');
      if (!$checked.length || (typeof this.$relations == 'undefined')) {
        return false;
      }
      var angleTypeId = this.$relations[$checked.val()];
      if (typeof angleTypeId == 'undefined') {
        return false;
      }
      this.$angleRow.hide();
      this.hide(this.$anglesLength);
      if (angleTypeId == this.$angleRow.data('one')) {
        this.$angleRow.show();
        this.show(this.$anglesLength.eq(this.$angle.filter(':checked').val()));
      } else if (angleTypeId == this.$angleRow.data('both')) {
        this.show(this.$anglesLength);
      }
    },
    initIsland: function () {
      var $checked = this.$island.filter(':checked');
      if ($checked.length) {
        this.show(this.$islandLength);
      } else {
        this.hide(this.$islandLength);
      }
    },
    hide: function ($els) {
      $els.addClass('ignore');
      $.each($els, function (index, el) {
        $(el).closest(this.options.col).css({
          display: 'none'
        });
      }.bind(this));
    },
    show: function ($els) {
      $els.removeClass('ignore');
      $.each($els, function (index, el) {
        $(el).closest(this.options.col).css({
          display: 'block'
        });
      }.bind(this));
    },
    successCallback: function () {
      APP.Helpers.reachGoal('Kitchen_Lead', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Kitchen_Lead'
      });
      APP.Helpers.reachGoal('Popup_Kitchen_Lead', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Popup_Kitchen_Lead'
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormSearch = APP.Controls.Partials.Form.extend({
    defaults: {
      selectCityData: '.js-select-city-data',
      button: '.js-button-submit',
      input: '.js-search-input',
      dataAutoCompleteUrl: 'url',
      dropDown: '.js-m-scroll',
      dropDownContent: '.js-scroll-content',
      droppedClass: 'dropped',
      dataEmptyText: 'empty-result',
      autocompleteClass: 'autocomplete-suggestions',
      formOrder: '.js-form-order',
      cookieName: 'orderForm',
      cookieTime: 0.02,
    }
  }, {
    init: function () {
      this._super();
      this.$input = this.element.find(this.options.input);
      this.$selectCityData = this.element.find(this.options.selectCityData);
      this.autoCompleteUrl = this.element.data(this.options.dataAutoCompleteUrl);
      this.$dropDown = this.element.find(this.options.dropDown);
      this.$dropDownContent = this.element.find(this.options.dropDownContent);
      this.$dropDown.mCustomScrollbar({
        scrollbarPosition: 'outside',
        scrollInertia: 0,
        axis: 'y',
        advanced: {
          updateOnContentResize: true
        }
      });
      var emptyText = this.$input.data(this.options.dataEmptyText);
      var that = this;
      this.$input.autocomplete({
        serviceUrl: this.autoCompleteUrl,
        ajaxSettings: {
          crossDomain: true
        },
        params: {
          ml: 20,
          l: 10,
          f: 1
        },
        autoSelectFirst: true,
        maxHeight: 'auto',
        preventBadQueries: false,
        paramName: 'q',
        dataType: 'jsonp',
        deferRequestBy: 100,
        widthOffset: 2,
        transformResult: function (response) {
          return {
            suggestions: $.map(response.data.items, function (dataItem) {
              var value = dataItem.title;
              return {
                value: value,
                data: dataItem
              };
            })
          };
        },
        formatResult: function (suggestion, currentValue) {
          var parent = suggestion.data.parentTitle ? ' (' + suggestion.data.parentTitle + ')' : '';
          var value = suggestion.data.title + parent;
          var pattern = '(' + APP.Helpers.escapeRegExChars(currentValue) + ')';
          return value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&lt;(\/?strong)&gt;/g, '<$1>');
        },
        showNoSuggestionNotice: !!emptyText,
        noSuggestionNotice: emptyText,
        appendTo: this.$dropDownContent,
        containerClass: this.options.autocompleteClass,
        suggestionsContainerParent: this.options.dropDown,
        onSelect: function (suggestion) {
          if (typeof suggestion.data != 'undefined') {
            that.$selectCityData.val(JSON.stringify(suggestion.data));
            that.setOrderForm();
            that.element.submit();
          }
        },
        afterRender: function () {
          this.$dropDown.mCustomScrollbar('update');
        }.bind(this)
      });
    },
    setOrderForm: function () {
      Cookies.set(this.options.cookieName, can.deparam($(this.options.formOrder).serialize()), {
        expires: this.cookieTime
      });
    },
    successCallback: function (data) {
      if (data.result && typeof data.cityData != 'undefined') {
        APP.CURRENT_CITY_MAP.attr('data', data.cityData);
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormSearchContent = APP.Controls.Partials.Form.extend({
    defaults: {
      button: '.js-button-submit',
      input: '.js-search-input',
      dataAutoCompleteUrl: 'url',
      dropDown: '.js-m-scroll',
      dropDownContent: '.js-scroll-content',
      droppedClass: 'search-form-show-result',
      parentDropDownClass: '.js-search-form-result',
      dataEmptyText: 'empty-result',
      autocompleteClass: 'autocomplete-suggestions',
      showAll: '.js-search-form-show-all',
      searchLink: '.js-search-link',
      form: '.js-header-search-form',
      submitButton: '.js-search-submit'
    }
  }, {
    init: function () {
      this.$input = this.element.find(this.options.input);
      this.autoCompleteUrl = this.element.data(this.options.dataAutoCompleteUrl);
      this.$dropDown = this.element.find(this.options.dropDown);
      this.$dropDownContent = this.element.find(this.options.dropDownContent);
      this.$dropDown.mCustomScrollbar({
        scrollbarPosition: 'outside',
        scrollInertia: 0,
        axis: 'y',
        advanced: {
          updateOnContentResize: true
        }
      });
      this.$input.autocomplete({
        ajaxStart: this.ajaxStart.bind(this),
        ajaxStop: this.ajaxStop.bind(this),
        serviceUrl: this.autoCompleteUrl,
        autoSelectFirst: false,
        maxHeight: 'auto',
        preventBadQueries: false,
        type: 'POST',
        paramName: 'q',
        dataType: 'json',
        deferRequestBy: 400,
        widthOffset: 2,
        transformResult: function (response) {
          return {
            suggestions: $.map(response.data.items, function (dataItem) {
              var value = dataItem.title;
              return {
                value: value,
                data: dataItem
              };
            })
          };
        },
        formatResult: function (suggestion, currentValue) {
          return can.view.render('autoCompleteLink', suggestion.data);
        },
        showNoSuggestionNotice: false,
        noSuggestionNotice: '',
        appendTo: this.$dropDownContent,
        containerClass: this.options.autocompleteClass,
        suggestionsContainerParent: this.options.parentDropDownClass,
        preserveInput: true,
        onSelect: function (suggestion) {
          if (typeof suggestion.data != 'undefined' && typeof suggestion.data.url != 'undefined') {
            this.$input.autocomplete().disable();
            this.$input.autocomplete().dispose();
            window.location.href = suggestion.data.url;
          }
        }.bind(this),
        afterRender: function () {
          this.$dropDown.mCustomScrollbar('update');
        }.bind(this)
      });
    },
    'submit': function () {
      this.$input.autocomplete().disable();
    },
    '{submitButton} click': function ($el, ev) {
      if (!this.element.hasClass('showed') && this.element.hasClass('js-adaptive-search')) {
        ev.preventDefault();
        ev.stopPropagation();
        this.element.addClass('showed');
        this.$input.blur();
        setTimeout(function () {
          this.$input.focus();
        }.bind(this), 500);
      }
    },
    '{window} click': function ($el, ev) {
      if (!$(ev.target).closest('.js-header-search-form').length) {
        this.element.removeClass('showed');
      }
    },
    '{showAll} click': function ($el, ev) {
      $el.closest('form').submit();
    },
    ajaxStart: function () {
      this.element.addClass('active');
    },
    ajaxStop: function () {
      this.element.removeClass('active');
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormProfile = APP.Controls.Partials.Form.extend({
    defaults: {
      eye: '.js-toggle-eye',
      selectCityData: '.js-select-city-data',
      pass: '.js-password',
      cityInput: '.js-city',
      dropDown: '.js-m-scroll',
      dropDownContent: '.js-scroll-content',
    }
  }, {
    init: function () {
      this._super();
      this.element.find(this.options.eye).eyeToggle();
      this.$selectCityData = this.element.find(this.options.selectCityData);
      this.$passInputs = this.element.find('[type=password]');
      this.$cityInput = this.element.find(this.options.cityInput);
      this.autoCompleteUrl = this.element.data('url');
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
      this.$dropDown = this.element.find(this.options.dropDown);
      this.$dropDownContent = this.element.find(this.options.dropDownContent);
      this.$dropDown.mCustomScrollbar({
        scrollbarPosition: 'outside',
        scrollInertia: 0,
        axis: 'y',
        advanced: {
          updateOnContentResize: true
        }
      });
      var that = this;
      this.$cityInput.autocomplete({
        serviceUrl: this.autoCompleteUrl,
        ajaxSettings: {
          crossDomain: true
        },
        params: {
          ml: 20,
          l: 10,
          f: 1
        },
        autoSelectFirst: true,
        maxHeight: 'auto',
        preventBadQueries: false,
        paramName: 'q',
        dataType: 'jsonp',
        deferRequestBy: 100,
        widthOffset: 2,
        transformResult: function (response) {
          return {
            suggestions: $.map(response.data.items, function (dataItem) {
              var value = dataItem.title;
              return {
                value: value,
                data: dataItem
              };
            })
          };
        },
        formatResult: function (suggestion, currentValue) {
          var parent = suggestion.data.parentTitle ? ' (' + suggestion.data.parentTitle + ')' : '';
          var value = suggestion.data.title + parent;
          var pattern = '(' + APP.Helpers.escapeRegExChars(currentValue) + ')';
          return value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&lt;(\/?strong)&gt;/g, '<$1>');
        },
        showNoSuggestionNotice: '',
        noSuggestionNotice: '',
        appendTo: this.$dropDownContent,
        containerClass: this.options.autocompleteClass,
        suggestionsContainerParent: this.options.dropDown,
        onSelect: function (suggestion) {
          if (typeof suggestion.data != 'undefined') {
            that.$selectCityData.val(JSON.stringify(suggestion.data));
            that.$selectCityData.valid();
          }
        },
        afterRender: function () {
          this.$dropDown.mCustomScrollbar('update');
        }.bind(this)
      });
    },
    '{cityInput} input': function () {
      this.$selectCityData.val('');
    },
    '{pass} input': function ($el) {
      if ($el.val()) {
        this.$passInputs.removeClass('ignore');
      } else {
        this.$passInputs.addClass('ignore').closest('.form-row').removeClass('error');
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormDesign = APP.Controls.Partials.Form.extend({
    defaults: {
      link: '.js-link'
    }
  }, {
    init: function () {
      this._super();
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
    },
    submitHandler: function () {
      this.element.addClass('active');
      this.element.find(this.options.link).val(window.location.href);
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'json',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    },
    successCallback: function () {
      APP.Helpers.reachGoal('Kitchen_Lead', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Kitchen_Lead'
      });
      APP.Helpers.reachGoal('ZamerDesign_Kitchen_Lead', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'ZamerDesign_Kitchen_Lead'
      });
    },
    bxHistoryState: function () {
      window.location.reload();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormProfi = APP.Controls.Partials.Form.extend({
    defaults: {
      link: '.js-link',
      name: '.js-profi-name',
      email: '.js-profi-email',
      phone: '.js-profi-phone',
    }
  }, {
    init: function () {
      this._super();
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
      this.$name = this.element.find(this.options.name);
      this.$email = this.element.find(this.options.email);
      this.$phone = this.element.find(this.options.phone);
      this.populateThisFromAPP();
    },
    submitHandler: function () {
      this.element.addClass('active');
      this.element.find(this.options.link).val(window.location.href);
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'json',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    },
    bxHistoryState: function () {
      window.location.reload();
    },
    submitResult: function (data) {
      this.element.removeClass('active');
      if (data.result) {
        if (this.$name.length && this.$email.length && this.$phone.length) {
          APP.PROFI = {
            NAME: this.$name.val(),
            EMAIL: this.$email.val(),
            PHONE: this.$phone.val(),
          }
          this.populateAllFromAPP();
        }
        if (data.action) {
          window.location.href = data.action;
        }
        this.element.clearForm();
        APP.Helpers.clearErrorForm(this.element);
        this.showPopup(data);
      } else {
        if (data.errorFields && data.errorFields.length > 0) {
          for (var i = 0; i < data.errorFields.length; i++) {
            var input = this.element.find('#' + data.errorFields[i].fieldId);
            this.setInValid(input);
            this.setError(input, data.errorFields[i].message);
            var row = input.closest(this.options.formRow);
            row.removeClass("valid").addClass("error");
            row.find(this.options.errorContainer).html(data.errorFields[i].message);
            if (i == 0) {
              input.focus();
            }
          }
        }
      }
    },
    populateThisFromAPP: function () {
      if (APP.PROFI !== void 0) {
        if (this.$name.length && (APP.PROFI.NAME !== void 0)) {
          this.$name.val(APP.PROFI.NAME);
        }
        if (this.$email.length && (APP.PROFI.EMAIL !== void 0)) {
          this.$email.val(APP.PROFI.EMAIL);
        }
        if (this.$phone.length && (APP.PROFI.PHONE !== void 0)) {
          this.$phone.val(APP.PROFI.PHONE);
        }
      }
    },
    populateAllFromAPP: function () {
      if (APP.PROFI !== void 0) {
        if (APP.PROFI.NAME !== void 0) {
          $(this.options.name).each(function () {
            $(this).val(APP.PROFI.NAME)
          });
        }
        if (APP.PROFI.EMAIL !== void 0) {
          $(this.options.email).each(function () {
            $(this).val(APP.PROFI.EMAIL)
          });
        }
        if (APP.PROFI.PHONE !== void 0) {
          $(this.options.phone).each(function () {
            $(this).val(APP.PROFI.PHONE)
          });
        }
      }
    },
    closeSuccessPopupCallback: function () {
      $('body').trigger('showGiftPopup');
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormOneClick = APP.Controls.Partials.Form.extend({}, {
    init: function () {
      this._super();
      this.element.find('.js-mask').each(function () {
        var self = $(this);
        self.mask(self.data('mask'), {
          autoclear: true
        });
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  "use strict";
  APP.Controls.Partials.FormCoupon = APP.Controls.Partials.Form.extend({
    defaults: {
      result: '.js-coupon-result',
      error: '.js-error-message-text',
      coupon: '.js-coupon'
    }
  }, {
    init: function () {
      this._super();
      this.$coupon = this.element.find(this.options.coupon);
      this.$error = this.element.find(this.options.error);
      this.$submit = this.element.find('button');
      if (this.$error.html().length > 3) {
        this.setInValid(this.$coupon);
      }
      this.handleEmpty();
    },
    '{coupon} input': function () {
      this.handleEmpty();
    },
    handleEmpty: function () {
      if (!this.$coupon.val()) {
        this.$submit.prop('disabled', true);
        this.setValid(this.$coupon);
      } else {
        this.$submit.prop('disabled', false);
      }
    },
    submitHandler: function () {
      this.element.addClass('active');
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'html',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    },
    submitResult: function (data) {
      this.options.parent.updateCartDataSuccess(undefined, data);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  "use strict";
  APP.Controls.Partials.FormShopCity = APP.Controls.Partials.Form.extend({
    defaults: {
      shopCity: '[name=shopCity]',
      parent: undefined
    }
  }, {
    init: function () {
      this._super();
    },
    '{shopCity} change': function ($el) {
      if (this.options.parent != undefined) {
        this.options.parent.onChangeCity($el.val());
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.HeadCart = can.Control.extend({
    defaults: {
      count: '.js-head-cart-count',
      disabledClass: 'disabled',
      miniWrap: '.js-cart-dropdown-wrap',
      countButton: '.js-count-button',
      scroll: '.js-m-scroll',
      remove: '.js-remove',
      item: '.js-item',
      buyButton: '.js-to-cart',
      events: {
        updateCount: 'updateCount'
      }
    }
  }, {
    init: function () {
      this.urlMini = this.element.data('url-mini');
      this.$count = this.element.find(this.options.count);
      this.getMiniCart({});
    },
    'click': function ($el) {
      $el.parent().toggleClass('show-basket');
    },
    '{events.updateCount}': function ($el, event, params) {
      if (typeof params.count == 'undefined') {
        return false;
      }
      this.$count.html(params.count);
      if (params.count) {
        this.element.removeClass(this.options.disabledClass)
      } else {
        this.element.addClass(this.options.disabledClass)
      }
      this.getMiniCart({});
    },
    '{remove} click': function ($el, e) {
      e.preventDefault();
      var item = $el.closest(this.options.item);
      var id = item.data('id');
      $(this.options.buyButton).filter('[data-id="' + item.data('productId') + '"]').map(function (i, val) {
        $(val).removeClass('in-basket');
        $(val).trigger('updateState');
      });
      this.getMiniCart({
        id: id,
        count: 0
      });
    },
    getMiniCart: function (data) {
      if ((typeof APP.HIDE_MINI_CART !== 'undefined') && APP.HIDE_MINI_CART) {
        return false;
      }
      this.element.find('.ajax-area').addClass('active');
      $.ajax({
        url: this.urlMini,
        type: 'post',
        dataType: 'html',
        data: data,
        success: this.miniCartCallback.bind(this)
      });
    },
    miniCartCallback: function (data) {
      this.element.find(this.options.miniWrap).html(data);
      this.reInitMiniCart()
    },
    reInitMiniCart: function () {
      this.element.find(this.options.scroll).each(function () {
        $(this).mCustomScrollbar({
          scrollbarPosition: 'outside',
          scrollInertia: 0,
          axis: (typeof $(this).data('axis') !== 'undefined') ? $(this).data('axis') : 'y',
          autoDraggerLength: false
        });
      });
      this.element.find(this.options.countButton).each(function (i, el) {
        new APP.Controls.Partials.CountButton(el, {
          callback: this.updateCartItemCount.bind(this, $(el).closest(this.options.item))
        });
      }.bind(this));
      var cartCount = this.element.find(this.options.item).length;
      this.$count.html(cartCount);
      if (cartCount) {
        this.element.removeClass(this.options.disabledClass)
      } else {
        this.element.addClass(this.options.disabledClass)
      }
    },
    updateCartItemCount: function (item, count) {
      var $item = $(item);
      var id = $item.data('product-id');
      this.getMiniCart({
        id: id,
        count: count
      });
    },
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  "use strict";
  APP.Controls.Partials.CartButton = can.Control.extend({
    defaults: {
      cartClass: '.js-to-cart',
      activeClass: 'in-basket',
      textButton: '.js-btn-text',
      headCart: '.js-head-cart',
      events: {
        updateState: 'updateState'
      }
    }
  }, {
    init: function () {
      this.$allBtn = $(this.options.cartClass);
      this.$headCart = $(this.options.headCart);
      this.elementId = this.element.data('id');
      this.element.toggleClass(this.options.activeClass, ((typeof APP.CART !== 'undefined') && (typeof APP.CART.itemsId !== 'undefined') && ($.inArray(this.elementId.toString(), APP.CART.itemsId) > -1)));
      this.initState(this.element);
    },
    'click': function ($el, ev) {
      if (!$el.hasClass(this.options.activeClass)) {
        ev.preventDefault();
        var data = {
          id: this.elementId,
          count: this.element.data('count'),
          assemble: (typeof this.element.data('assemble') !== 'undefined') ? this.element.data('assemble') ? 1 : 0 : 0
        };
        this._makeAjax(this.element.data('href'), data, this.proxy('_onAjaxSuccess'));
      }
    },
    '{events.updateState}': function ($el, event, params) {
      this.initState($el);
    },
    _makeAjax: function (url, data, callback) {
      data.sessid = APP.USER.sessid;
      $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: data,
        success: callback
      });
    },
    _onAjaxSuccess: function (data) {
      if (data.result) {
        APP.Helpers.reachGoal('Cart', {
          eventCategory: 'Button',
          eventAction: 'Click',
          eventLabel: 'Cart'
        });
        this.$allBtn.each(function (i, el) {
          var $el = $(el);
          if ($el.data('id') == data.id) {
            $el.addClass(this.options.activeClass);
            this.initState($el);
          }
        }.bind(this));
        this.showPopup();
      }
      if (typeof data.count !== 'undefined') {
        this.$headCart.trigger('updateCount', {
          count: data.count
        })
      }
    },
    initState: function ($el) {
      if ($el.hasClass(this.options.activeClass)) {
        if (typeof $el.data('second-text') !== 'undefined') {
          $el.text($el.data('second-text'));
        }
        if (typeof $el.data('second-link') !== 'undefined') {
          $el.attr('href', $el.data('second-link'));
        }
      } else {
        if (typeof $el.data('add-text') !== 'undefined') {
          $el.text($el.data('add-text'));
        }
        if (typeof $el.data('add-link') !== 'undefined') {
          $el.attr('href', $el.data('add-link'));
        }
      }
    },
    updateCount: function (count) {
      this.$allBtn.data('count', count);
    },
    showPopup: function () {
      var popup = this.element.data('popup');
      if ((typeof popup == 'undefined') || !popup.length) {
        return false;
      }
      APP.Helpers.openFancy(popup);
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.HeaderCity = can.Control.extend({
    defaults: {
      templateHeaderCity: 'headerCity'
    }
  }, {
    init: function () {
      APP.CURRENT_CITY_MAP = new can.Map({
        data: {}
      });
      if (typeof APP.CURRENT_CITY != 'undefined') {
        APP.CURRENT_CITY_MAP.attr('data', APP.CURRENT_CITY);
      }
      if (typeof APP.CURRENT_CITY_MAP != 'undefined') {
        APP.CURRENT_CITY_MAP.bind('data', this.showCity.bind(this));
      }
    },
    showCity: function () {
      if (typeof APP.CURRENT_CITY_MAP != 'undefined') {
        can.view.render(this.options.templateHeaderCity, {
          city: APP.CURRENT_CITY_MAP.data.title
        }, '', function (data) {
          this.element.html(data);
        }.bind(this));
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.DeliveryOrder = can.Control.extend({
    defaults: {
      deliveryPaymentBlock: '.js-delivery-payment-section',
      deliveryBlock: '.js-form-row-delivery',
      paymentBlock: '.js-form-row-payment',
      deliveryInput: '.js-delivery-type',
      deliveryPointInput: '.js-delivery-point',
      deliveryDate: '.js-delivery-date',
      deliveryTrack: '.js-delivery-track',
      paymentInput: '.js-payment-type',
      typeDataAttr: 'type',
      pointDataAttr: 'selected-point',
      typeSelf: 'SELF',
      selectedInputInfoTemplate: 'cartDeliveryInputInfo',
      selectedInputInfo: '.js-selected-point-info',
      selectedInputLink: '.js-delivery-map-point',
      selectedInputPrice: '.js-selected-point-price',
      linkDataAttr: 'selected-text',
      grayBlock: '.js-delivery-selected-info',
      grayBlockData: '.js-delivery-selected-info-data',
      grayBlockDataTemplate: 'cartDeliveryGrayBlockData',
      grayBlockLink: '.js-delivery-map-point-gray',
      noticeBlock: '.js-delivery-notice-info',
      deliveryData: ''
    }
  }, {
    init: function () {},
    initDeliveryType: function () {
      this._changeDeliveryType(this.getCheckedInput());
    },
    getCheckedInput: function () {
      var result = false;
      if (typeof this.element != 'undefined' && this.element) {
        this.element.find(this.options.deliveryInput).each(function (i, el) {
          if (typeof el == 'object' && el.checked && el.parentNode.style.display != 'none' && $(el.parentNode).is(':visible')) {
            result = $(el);
          }
        });
      }
      return result;
    },
    '{deliveryInput} change': function ($el) {
      this._changeDeliveryType($el);
    },
    _changeDeliveryType: function ($el) {
      if (!$el) {
        return false;
      }
      var type = $el.data(this.options.typeDataAttr);
      this.setDeliveryPoint($el);
      var paymentList = [];
      var deliveryData = {};
      if (typeof type != 'undefined' && typeof APP.CART_DELIVERY_PAYMENT.delivery[type] != 'undefined') {
        paymentList = this._getPaymentList(APP.CART_DELIVERY_PAYMENT.delivery[type], $el.val(), type == this.options.typeSelf ? this.getDeliveryPoint() : 0);
      }
      if (typeof type != 'undefined' && typeof APP.CART_DELIVERY_PAYMENT.delivery[type] != 'undefined') {
        deliveryData = this._getDeliveryData(APP.CART_DELIVERY_PAYMENT.delivery[type], $el.val(), type == this.options.typeSelf ? this.getDeliveryPoint() : 0);
      }
      this.setDeliverySummaryData(deliveryData);
      if (paymentList.length) {
        var paymentInputList = $el.closest(this.options.deliveryPaymentBlock).find(this.options.paymentInput);
        this._showPayment(paymentList, paymentInputList);
        this._checkAvailablePayment(paymentInputList);
      }
    },
    getDeliveryDataByElement: function ($el) {
      var type = $el.data(this.options.typeDataAttr);
      var deliveryData = {};
      if (typeof type != 'undefined' && typeof APP.CART_DELIVERY_PAYMENT.delivery[type] != 'undefined') {
        deliveryData = this._getDeliveryDataList(APP.CART_DELIVERY_PAYMENT.delivery[type], $el.val());
      }
      return deliveryData;
    },
    _getPaymentList: function (deliveryType, deliveryId, itemId) {
      if (typeof deliveryId == 'undefined' || typeof deliveryType == 'undefined') {
        return false;
      }
      itemId = itemId || 0;
      var result = [];
      for (var key in deliveryType) {
        if (deliveryType.hasOwnProperty(key)) {
          var elem = deliveryType[key];
          if (typeof elem.ID != 'undefined' && elem.ID == deliveryId && typeof elem.ITEMS != 'undefined' && elem.ITEMS.length) {
            for (var keyItem in elem.ITEMS) {
              if (elem.ITEMS.hasOwnProperty(keyItem)) {
                var itemElem = elem.ITEMS[keyItem];
                if ((typeof itemElem.ID != 'undefined' && typeof itemElem.PAYMENT_LIST != 'undefined' && itemElem.ID == itemId && itemId != 0) || (typeof itemElem.PAYMENT_LIST != 'undefined' && itemId == 0 && result.length == 0)) {
                  if (typeof itemElem.PAYMENT_LIST == 'object') {
                    result = Object.keys(itemElem.PAYMENT_LIST).map(function (key) {
                      return itemElem.PAYMENT_LIST[key];
                    });
                  } else {
                    result = itemElem.PAYMENT_LIST;
                  }
                }
              }
            }
          }
        }
      }
      return result;
    },
    _getDeliveryData: function (deliveryType, deliveryId, itemId) {
      if (typeof deliveryId == 'undefined' || typeof deliveryType == 'undefined') {
        return false;
      }
      itemId = itemId || 0;
      var result = [];
      for (var key in deliveryType) {
        if (deliveryType.hasOwnProperty(key)) {
          var elem = deliveryType[key];
          if (typeof elem.ID != 'undefined' && elem.ID == deliveryId && typeof elem.ITEMS != 'undefined' && elem.ITEMS.length) {
            for (var keyItem in elem.ITEMS) {
              if (elem.ITEMS.hasOwnProperty(keyItem)) {
                var itemElem = elem.ITEMS[keyItem];
                if ((typeof itemElem.ID != 'undefined' && itemElem.ID == itemId && itemId != 0) || (itemId == 0 && result.length == 0)) {
                  result = itemElem;
                }
              }
            }
          }
        }
      }
      return result;
    },
    _getDeliveryDataList: function (deliveryType, deliveryId) {
      var result = [];
      if (typeof deliveryId == 'undefined' || typeof deliveryType == 'undefined') {
        return result;
      }
      for (var key in deliveryType) {
        if (deliveryType.hasOwnProperty(key)) {
          var elem = deliveryType[key];
          if (typeof elem.ID != 'undefined' && elem.ID == deliveryId && typeof elem.ITEMS != 'undefined' && elem.ITEMS.length) {
            result = elem.ITEMS;
          }
        }
      }
      return result;
    },
    _getDeliveryInfo: function (deliveryType, deliveryId) {
      var result = [];
      if (typeof deliveryId == 'undefined' || typeof deliveryType == 'undefined') {
        return result;
      }
      for (var key in deliveryType) {
        if (deliveryType.hasOwnProperty(key)) {
          var elem = deliveryType[key];
          if (typeof elem.ID != 'undefined' && elem.ID == deliveryId) {
            result = elem;
          }
        }
      }
      return result;
    },
    _showPayment: function (paymentList, paymentListElement) {
      if (typeof paymentListElement == 'undefined' || paymentList.length == 0) {
        return false;
      }
      $.each(paymentListElement, function (i, val) {
        if (typeof val == 'object') {
          var elem = val;
          if (paymentList.indexOf(parseInt(elem.value)) == -1) {
            elem.parentNode.style.display = 'none';
          } else {
            elem.parentNode.style.display = '';
          }
        }
      });
    },
    _checkAvailablePayment: function (paymentInputList) {
      var checkInput = paymentInputList.map(function () {
        if (typeof this == 'object' && this.checked && this.parentNode.style.display != 'none') {
          return this;
        }
      });
      if (checkInput.length == 0) {
        paymentInputList.first().prop('checked', true).change();
      }
    },
    setDeliveryPoint: function ($el) {
      this.element.find(this.options.deliveryPointInput).val($el.data(this.options.pointDataAttr));
      this.updateSelectedPoint();
    },
    getDeliveryPoint: function () {
      var result = this.element.find(this.options.deliveryPointInput).val();
      return result ? result : 0;
    },
    setDeliveryPointByCurrentInput: function (value, $el) {
      var elem = $el || this.getCheckedInput();
      if (typeof elem == 'undefined') {
        return false;
      }
      $.each(elem, function (i, el) {
        if (typeof el == 'object' && el.checked && el.parentNode.style.display != 'none' && $(el.parentNode).is(':visible')) {
          var elemCurrent = $(el);
          elemCurrent.data(this.options.pointDataAttr, value);
          this.setDeliveryPoint(elemCurrent);
        }
      }.bind(this));
    },
    setDeliverySummaryData: function (deliveryData) {
      if (deliveryData.hasOwnProperty('PRICE') && typeof APP.SUMMARY_MAP != 'undefined' && typeof APP.BASKET_SUMMARY != 'undefined') {
        this._calcSummary(deliveryData.PRICE);
        APP.SUMMARY_MAP.attr('data', APP.BASKET_SUMMARY);
      }
    },
    _calcSummary: function (delivery) {
      if (typeof APP.BASKET_SUMMARY != 'undefined') {
        APP.BASKET_SUMMARY.delivery = delivery;
        APP.BASKET_SUMMARY.price = APP.BASKET_SUMMARY.basePrice - APP.BASKET_SUMMARY.discount + APP.BASKET_SUMMARY.delivery;
      }
    },
    updateSelectedPoint: function () {
      var currentElem = false;
      this.element.find(this.options.deliveryInput).each(function (i, el) {
        if (typeof el == 'object' && el.checked && el.parentNode.style.display != 'none' && $(el.parentNode).is(':visible')) {
          currentElem = $(el);
        }
      });
      var type = currentElem.data(this.options.typeDataAttr);
      var deliveryData = [];
      var deliveryPoint = this.getDeliveryPoint();
      var deliveryInfo = this._getDeliveryInfo(APP.CART_DELIVERY_PAYMENT.delivery[type], currentElem.val());
      if (typeof type != 'undefined' && typeof APP.CART_DELIVERY_PAYMENT.delivery[type] != 'undefined' && deliveryPoint > 0) {
        deliveryData = this._getDeliveryData(APP.CART_DELIVERY_PAYMENT.delivery[type], currentElem.val(), deliveryPoint);
        this.showSelectedDeliveryInput(currentElem, deliveryData);
        this.showSelectedDeliveryPoint(deliveryInfo, deliveryData);
      } else {
        this.showSelectedDeliveryPoint();
      }
      this.setDeliveryDate(currentElem);
      this.setDeliveryTrack(deliveryInfo);
      if (typeof deliveryInfo != 'undefined' && deliveryInfo.hasOwnProperty('IS_REQUIRED_PASSPORT') && deliveryInfo.IS_REQUIRED_PASSPORT) {
        this.options.parent.formOrder.showPasswordFields();
      } else {
        this.options.parent.formOrder.hidePasswordFields();
      }
    },
    showSelectedDeliveryInput: function ($input, data) {
      if (typeof data == 'undefined' || data.length == 0) {
        return false;
      }
      var $block = $input.siblings('label');
      $block.find(this.options.selectedInputInfo).html(can.view.render(this.options.selectedInputInfoTemplate, {
        time: data.TIME,
        data: [data.CITY, data.ADDRESS],
        hourWork: data.HOUR_WORK
      }));
      $block.find(this.options.selectedInputPrice).html(data.PRICE_WC);
      this.setDeliverySummaryData(data);
      var link = $block.find(this.options.selectedInputLink);
      link.html(link.data(this.options.linkDataAttr));
    },
    setDeliveryDate: function ($el) {
      var data = this.getDeliveryDataByElement($el);
      this.element.find(this.options.deliveryDate).val(typeof data[0].TIME !== 'undefined' ? data[0].TIME : '');
    },
    setDeliveryTrack: function (deliveryInfo) {
      var deliveryTrack = (typeof deliveryInfo != 'undefined' && deliveryInfo.hasOwnProperty('IS_HAS_TRACK') && deliveryInfo.IS_HAS_TRACK);
      this.element.find(this.options.deliveryTrack).val(deliveryTrack ? 'Y' : 'N');
    },
    showSelectedDeliveryPoint: function (deliveryInfo, deliveryData) {
      var grayBlock = this.element.find(this.options.grayBlock);
      var noticeBlock = this.element.find(this.options.noticeBlock);
      if (typeof deliveryInfo == 'undefined' || typeof deliveryData == 'undefined' || !deliveryInfo.hasOwnProperty('COMPANY') || !deliveryData.hasOwnProperty('CITY') || !deliveryData.hasOwnProperty('ADDRESS')) {
        grayBlock.hide();
        noticeBlock.show();
        return false;
      }
      grayBlock.find(this.options.grayBlockData).html(can.view.render(this.options.grayBlockDataTemplate, {
        title: deliveryInfo.COMPANY,
        data: [deliveryData.CITY, deliveryData.ADDRESS]
      }));
      noticeBlock.hide();
      grayBlock.show();
      var grayLink = grayBlock.find(this.options.grayBlockLink);
      if (deliveryInfo.ITEMS.length > 1) {
        grayLink.show();
        noticeBlock.hide();
      } else {
        grayLink.hide();
        noticeBlock.show();
      }
    },
    '{grayBlockLink} click': function () {
      var elem = this.getCheckedInput();
      if (typeof elem != 'undefined') {
        elem.siblings('label').find(this.options.selectedInputLink).click();
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.AjaxLinkPopup = can.Control.extend({
    init: function () {
      this.element.fancybox(this.getFancyOption());
    },
    getFancyOption: function () {
      return {
        type: 'ajax',
        ajax: {
          type: "POST",
          data: {
            sessid: APP.USER.sessid || "",
            referrer: window.location.href
          }
        },
        href: this.element.data('url'),
        autoSize: true,
        autoHeight: true,
        autoWidth: true,
        margin: 0,
        padding: 0,
        afterLoad: function () {
          setTimeout(function () {
            var form = this.outer.find('form');
            if (form.length == 0) {
              form = this.outer;
            }
            if (typeof form != 'undefined') {
              var controllerName = this.element.data('controller');
              var pagePlugin = can.capitalize(can.camelize(controllerName));
              form.find('input[type=text], input[type=password], textarea').first().focus();
              if (APP.Controls.Partials[pagePlugin]) {
                new APP.Controls.Partials[pagePlugin](form);
              }
            }
          }.bind(this), 300);
        },
        helpers: {
          overlay: {
            locked: true
          },
          title: null
        }
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.AjaxPopup = APP.Controls.Partials.AjaxLinkPopup.extend({
    init: function () {
      $.fancybox.open(this.getFancyOption());
    },
    getFancyOption: function () {
      var options = this._super();
      var parent = this;
      options = $.extend(options, {
        href: this.options.href,
        afterLoad: function () {
          setTimeout(function () {
            var form = this.outer.find('form');
            if (form.length == 0) {
              form = this.outer;
            }
            if (typeof form != 'undefined') {
              var controllerName = parent.options.controller;
              var pagePlugin = can.capitalize(can.camelize(controllerName));
              form.find('input[type=text], input[type=password], textarea').first().focus();
              if (APP.Controls.Partials[pagePlugin]) {
                new APP.Controls.Partials[pagePlugin](form);
              }
            }
          }.bind(this), 300);
        }
      });
      return options;
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormAuth = APP.Controls.Partials.Form.extend({
    defaults: {
      eye: '.js-toggle-eye',
      ajaxLinkPopup: '.js-ajax-link-popup'
    }
  }, {
    init: function () {
      this._super();
      this.element.find(this.options.eye).eyeToggle();
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormRemind = APP.Controls.Partials.Form.extend({
    defaults: {}
  }, {
    init: function () {
      console.log('remind');
      this._super();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormNewPassword = APP.Controls.Partials.Form.extend({
    defaults: {
      eye: '.js-toggle-eye',
      ajaxLinkPopup: '.js-ajax-link-popup'
    }
  }, {
    init: function () {
      this._super();
      this.element.find(this.options.eye).eyeToggle();
    },
    callbackFancyboxAfterShow: function (parent) {
      this.outer.find(parent.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormReg = APP.Controls.Partials.Form.extend({
    defaults: {
      eye: '.js-toggle-eye',
      ajaxLinkPopup: '.js-ajax-link-popup'
    }
  }, {
    init: function () {
      this._super();
      this.element.find(this.options.eye).eyeToggle();
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormLibrary = APP.Controls.Partials.FormProfi.extend({
    defaults: {
      link: '.js-link'
    }
  }, {
    init: function () {
      this._super();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormProfiAction = APP.Controls.Partials.FormProfi.extend({
    defaults: {
      link: '.js-link'
    }
  }, {
    init: function () {
      this._super();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormDetectIpCity = can.Control.extend({
    defaults: {
      closePopup: '.js-close'
    }
  }, {
    init: function () {},
    '{closePopup} click': function () {
      $.fancybox.close();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.ProductCard = can.Control.extend({
    defaults: {
      productCard: '.js-product-card-wrapper',
      productImagesSlider: '.js-product-images-slider',
      productThumbsSlider: '.js-product-thumbs-slider',
      initedClassSlick: 'js-slick-inited',
      ratingInline: '.js-inline-rating',
      ratingHash: '#catalog-detail-review',
      ajaxLinkPopup: '.js-ajax-link-popup'
    }
  }, {
    init: function () {
      this.initSliders(this.element);
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
    },
    initSliders: function ($el) {
      if (!$el.hasClass(this.options.initedClassSlick)) {
        var productImagesSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
          arrows: false,
          fade: true,
          draggable: false
        });
        $el.find(this.options.productImagesSlider).slick(productImagesSliderSettings);
        var productThumbsSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
          slidesToShow: typeof $el.data('slides-to-show') !== 'undefined' ? $el.data('slides-to-show') : 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          focusOnSelect: true,
          nextArrow: '<a href="javascript:void(0);" class="product-next-arrow"></a>',
          prevArrow: '<a href="javascript:void(0);" class="product-prev-arrow"></a>'
        });
        $el.find(this.options.productThumbsSlider).slick(productThumbsSliderSettings).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          this.updateProductSliders(slick, nextSlide);
        }.bind(this));
        $el.addClass(this.options.initedClassSlick);
      }
    },
    updateProductSliders: function (slick, nextSlide) {
      var $targetSlider = slick.$slider;
      var $parentProductCard = $targetSlider.closest(this.options.productCard);
      var cardName = $parentProductCard.find('.product-card').data('card-name');
      var $relatedImagesSliders = $parentProductCard.find(this.options.productImagesSlider).filter('[data-card-name="' + cardName + '"] ' + this.options.productImagesSlider);
      $relatedImagesSliders.each(function (index, slider) {
        var $slider = $(slider);
        if ($slider.slick('slickCurrentSlide') != nextSlide) {
          $slider.slick('slickGoTo', nextSlide);
        }
      });
      var $relatedThumbsSliders = $parentProductCard.find(this.options.productThumbsSlider).filter('[data-card-name="' + cardName + '"] ' + this.options.productThumbsSlider);
      $relatedThumbsSliders.each(function (index, slider) {
        var $slider = $(slider);
        if ($slider.slick('slickCurrentSlide') != nextSlide) {
          $slider.slick('slickGoTo', nextSlide);
        }
      });
    },
    '{productCard} mouseenter': function ($el) {
      this.initSliders($el);
    },
    '{productThumbsSlider} .slick-slide click': function ($el) {
      this.updateProductSliders($el.closest(this.options.productThumbsSlider).slick('getSlick'), $el.data('slick-index'));
    },
    '{ratingInline} a click': function ($el) {
      window.location.href = $el.attr('href') + this.options.ratingHash;
      return false;
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.PopupSimilar = can.Control.extend({
    defaults: {
      cartButton: '.js-to-cart',
      close: '.js-close',
      itemLink: '.js-item-link'
    }
  }, {
    init: function () {
      this.$cartButtons = this.element.find(this.options.cartButton);
      this.$cartButtons.each(function (i, el) {
        this.cartButton = new APP.Controls.Partials.CartButton(el);
      }.bind(this));
    },
    '{close} click': function () {
      $.fancybox.close();
    },
    '{itemLink} click': function ($el) {
      location.href = $el.attr('href');
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormCallback = APP.Controls.Partials.Form.extend({
    defaults: {
      mask: '.js-mask',
      link: '.js-link'
    }
  }, {
    init: function () {
      this._super();
      this.element.find(this.options.mask).each(function () {
        var $el = $(this);
        $el.mask($el.data('mask'), {
          autoclear: true
        });
      });
    },
    submitHandler: function () {
      this.element.addClass('active');
      this.element.find(this.options.link).val(window.location.href);
      $.ajax({
        url: this.action,
        type: 'post',
        dataType: 'json',
        data: this.getValues(),
        success: this.proxy('submitResult')
      });
      return false;
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FormSubscribe = APP.Controls.Partials.Form.extend({
    defaults: {}
  }, {
    init: function () {
      this._super();
    },
    redirect: function (data) {
      if ((data.subscribed === void 0) || !data.subscribed) {
        return false;
      }
      if (this.redirectHref == 'reload') {
        document.location.href = window.location.href;
      } else if (this.redirectHref !== false && this.redirectHref !== 'false') {
        document.location.href = this.redirectHref;
      }
    },
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.FastView = can.Control.extend({
    defaults: {
      fastView: '.js-fast-view',
      ajaxLinkPopup: '.js-ajax-link-popup',
      cartButton: '.js-to-cart',
      fastViewLink: '.js-fast-view-link',
      galleryBlock: '.js-quick-gallery',
      video: '.js-video',
      reviewFast: '.js-review-widget-inline'
    }
  }, {
    init: function () {
      this.$fastView = this.element.find(this.options.fastView);
      this.$fastView.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
      APP.Helpers.reachGoal('Quick_View', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Quick_View'
      });
      this.$fastView.find(this.options.cartButton).each(function (i, el) {
        new APP.Controls.Partials.CartButton(el);
      });
      this.element.find(this.options.video).each(function () {
        new APP.Controls.Video(this);
      });
      this.$gallery = this.element.find(this.options.galleryBlock);
      if (this.$gallery.length) {
        this.element.find(this.options.galleryBlock).each(function () {
          new APP.Controls.Partials.GalleryBlock(this, {
            variableWidth: true
          });
        });
      }
      this.renderInlineWidget();
    },
    '{fastViewLink} click': function ($el) {
      var link = $el.data('url');
      if (link === void 0) {
        return false;
      }
      this.$fastView.addClass('active');
      $.ajax({
        url: link,
        type: 'post',
        dataType: 'html',
        data: {
          splitView: true
        },
        success: this.ajaxSuccess.bind(this)
      });
      return false;
    },
    ajaxSuccess: function (data) {
      this.$fastView.html(data);
      this.$fastView.removeClass('active');
      this.init();
    },
    renderInlineWidget: function () {
      var self = this;
      shoppilotAPI.then(function (shoppilot) {
        var productWidget = shoppilot.require('product_widget');
        var multiWidget = shoppilot.require('multi_widget');
        var ratingList = self.element.find(self.options.reviewFast).map(function () {
          var element = $(this);
          return new productWidget({
            name: 'preview-inline-rating',
            product_id: element.data('id'),
            container: element
          });
        });
        multiWidget.render(ratingList);
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Partials.WidgetRating = can.Control.extend({
    defaults: {
      ratingInline: '.js-inline-rating',
      ratingCategory: '.js-review-widget-category',
      ratingWidgetDetail: '.js-review-widget',
      reviewInline: '.js-review-widget-inline',
      reviewFloatInline: '.js-review-widget-float-inline'
    }
  }, {
    init: function () {
      this.renderInlineWidget();
    },
    addWidget: function (widget, attrs) {
      var self = this;
      var container = attrs.elem;
      return attrs.elem.map(function () {
        var element = $(this);
        var data = {
          name: attrs.template,
          container: element
        };
        var id = element.data('id');
        data.product_id = id;
        if (attrs.isCategory) {
          data.category_id = id;
          data.product_id = null;
        }
        var result = self._createWidget(widget, data);
        if (typeof attrs.callback != 'undefined') {
          attrs.callback(result, container);
        }
        return result;
      });
    },
    ratingDetailCallback: function (result, container) {
      result.rendering.then(function (product) {
        var container = product.getContainer();
        var count = container.find('[itemprop="reviewCount"]').text();
        if ((typeof count != 'undefined') && count.length) {
          container.parent().find('.js-review-widget-count').text(count);
          $('.js-review-head-tab-link').find('.js-review-count').text(count);
        } else {
          container.closest('.js-review-section').addClass('empty-review');
        }
      }.bind(this), function (product) {
        if (typeof product != 'undefined') {
          product.closest('.js-review-section').hide();
          $('.js-review-head-tab-link').hide();
        }
      }.bind(this, container));
    },
    ratingCategoryCallback: function (result, container) {
      result.rendering.then(function (product) {
        var container = product.getContainer();
        var htmlReview = container.find('#sp-listing-reviews-widget').html();
        if (typeof htmlReview != 'undefined') {
          var isEmptyResult = htmlReview.trim().length;
        }
        if (typeof isEmptyResult == 'undefined' || !isEmptyResult) {
          container.closest('.js-review-section').hide();
        } else {
          var count = container.find('[itemprop="reviewCount"]').text();
          if ((typeof count != 'undefined') && count.length) {
            container.parent().find('.js-review-widget-count').text(count);
          }
        }
      }, function (container) {
        container.closest('.js-review-section').hide();
      }.bind(this, container));
    },
    ratingInlineCallback: function (result, container) {
      result.rendering.then(function (product) {
        var container = product.getContainer();
        var htmlReview = container.find('.sp-product-inline-rating-widget').html();
        if (typeof htmlReview != 'undefined') {
          var isEmptyResult = htmlReview.trim().length;
        }
        if (typeof isEmptyResult == 'undefined' || !isEmptyResult) {
          container.closest('.js-review-widget-inline').addClass('empty-review');
        }
      }, function (container) {
        container.closest('.js-review-widget-inline').addClass('empty-review');
      }.bind(this, container));
    },
    _createWidget: function (widget, data) {
      return new widget(data);
    },
    renderInlineWidget: function () {
      var self = this;
      shoppilotAPI.then(function (shoppilot) {
        var multiWidget = shoppilot.require('multi_widget');
        var categoryWidget = shoppilot.require('category_widget');
        var productWidget = shoppilot.require('product_widget');
        var widgetList = [];
        var params = [{
          widget: productWidget,
          param: {
            elem: self.element.find(self.options.ratingWidgetDetail),
            template: 'product-reviews',
            callback: self.ratingDetailCallback
          }
        }, {
          widget: categoryWidget,
          param: {
            elem: self.element.find(self.options.ratingCategory),
            template: 'category-reviews',
            isCategory: true,
            callback: self.ratingCategoryCallback
          }
        }, {
          widget: productWidget,
          param: {
            elem: self.element.find(self.options.ratingInline),
            template: 'category-inline-rating'
          }
        }, {
          widget: productWidget,
          param: {
            elem: self.element.find(self.options.reviewInline),
            template: 'inline-rating',
            callback: self.ratingInlineCallback
          }
        }, {
          widget: productWidget,
          param: {
            elem: self.element.find(self.options.reviewFloatInline),
            template: 'floating-inline-rating'
          }
        }];
        for (var el in params) {
          var result = self.addWidget(params[el].widget, params[el].param);
          Array.prototype.push.apply(widgetList, result);
        }
        if (widgetList.length) {
          multiWidget.render(widgetList);
        }
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.AjaxPage = can.Control.extend({
    defaults: {
      component: '',
      dataSelector: 'class',
      templateLoader: '/local/js/ejs/ajax-loader.ejs'
    }
  }, {
    init: function () {
      if (typeof BX == 'undefined' || typeof BX.addCustomEvent != 'function') {
        return true;
      }
      BX.addCustomEvent('onAjaxSuccess', this.bxAjaxSuccess.bind(this));
      BX.addCustomEvent('onComponentAjaxHistorySetState', this.bxHistoryState.bind(this));
      BX.showWait = this.bxShowWait.bind(this);
      BX.closeWait = this.bxCloseWait.bind(this);
    },
    bxHistoryState: function () {
      window.location.reload();
    },
    bxShowWait: function (container) {
      if (container == undefined) {
        return false;
      }
      var $body = $('body');
      if ($body.length) {
        $body.addClass('ajax-area');
        if (!$body.find('>.ajax-loader').length) {
          can.view.render(this.options.templateLoader, {}, '', function (data) {
            $body.append(data);
          }.bind(this));
        }
        $body.addClass('active active-page');
      }
    },
    bxCloseWait: function (container) {
      if (container == undefined) {
        return false;
      }
      var blockList = [document.getElementsByTagName('body')[0]];
      if (typeof blockList != 'undefined') {
        $.each(blockList, function () {
          if (typeof this != 'undefined') {
            this.classList.remove('ajax-area');
            this.classList.remove('active');
            this.classList.remove('active-page');
          }
        });
      }
    },
    bxAjaxSuccess: function (result, config) {
      if (typeof config != 'undefined' && !!config && config.dataType == 'html') {
        this.initComponent();
      }
    },
    initComponent: function () {
      var componentClass = this.element.find(this.options.component).data(this.options.dataSelector);
      var pagePlugin = can.capitalize(can.camelize(componentClass));
      if (APP.Controls.Page[pagePlugin]) {
        new APP.Controls.Page[pagePlugin](this.element);
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Actions = APP.Controls.Page.AjaxPage.extend({
    defaults: {
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state',
      formSubscribe: '.js-form-subscribe',
      productCard: '.js-product-card-wrapper'
    }
  }, {
    init: function () {
      this.initComponent();
      this._super();
    },
    initComponent: function () {
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
      this.element.find(this.options.formSubscribe).each(function () {
        new APP.Controls.Partials.FormSubscribe(this);
      });
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Main = can.Control.extend({
    defaults: {
      promoSlider: '.js-promo-slider',
      offersSlider: '.js-offers-slider',
      newProductsSlider: '.js-new-products-slider',
      productSlide: '.product-card',
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state',
      productCard: '.js-product-card-wrapper',
      formSubscribe: '.js-form-subscribe'
    }
  }, {
    init: function () {
      this.$newProductsSlider = this.element.find(this.options.newProductsSlider);
      this.initSliders();
      this.element.find('.js-content-collapse').each(function () {
        new APP.Controls.Partials.ContentCollapse($(this));
      });
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.formSubscribe).each(function () {
        new APP.Controls.Partials.FormSubscribe(this);
      });
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      new APP.Controls.Partials.WidgetRating(this.element);
    },
    initSliders: function () {
      var promoSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
          breakpoint: APP.Helpers.responseLg,
          settings: {}
        }, {
          breakpoint: APP.Helpers.responseMd,
          settings: {
            dots: false,
            variableWidth: false,
          }
        }]
      });
      this.element.find(this.options.promoSlider).slick(promoSliderSettings);
      var offersSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        cssEase: 'linear',
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });
      this.element.find(this.options.offersSlider).slick(offersSliderSettings);
      var newProductsSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: false,
        adaptiveHeight: true,
        variableWidth: false,
        draggable: false,
        responsive: [{
          breakpoint: APP.Helpers.responseLg,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            variableWidth: false,
          }
        }, {
          breakpoint: APP.Helpers.responseMd,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: false,
          }
        }]
      });
      this.$newProductsSlider = this.element.find(this.options.newProductsSlider);
      this.$newProductsSlider.slick(newProductsSliderSettings);
    },
    '{productSlide} mouseenter': function () {
      this.$newProductsSlider.closest('.js-new-products-slider-wrap').css({
        zIndex: 2
      });
    },
    '{productSlide} mouseleave': function () {
      this.$newProductsSlider.closest('.js-new-products-slider-wrap').css({
        zIndex: 'auto'
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Company = can.Control.extend({
    defaults: {
      sliderPromo: '.js-slider-promo',
      sliderPage: '.js-slider-page',
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state'
    }
  }, {
    init: function () {
      this.sliderPage = new APP.Controls.Partials.SliderPage(this.options.sliderPage);
      this.sliderPromo = new APP.Controls.Partials.SliderPromo(this.options.sliderPromo, {
        linkedSlider: this.sliderPage
      });
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Search = APP.Controls.Page.AjaxPage.extend({
    defaults: {
      promoSlider: '.js-promo-slider',
      offersSlider: '.js-offers-slider',
      productImagesSlider: '.js-product-images-slider',
      productCard: '.js-product-card-wrapper',
      component: '.js-catalog-component',
      floatHeader: '.js-float-header'
    }
  }, {
    init: function () {
      this.initComponent();
      this.$floatHeader = $(this.options.floatHeader);
      this._super();
    },
    bxAjaxSuccess: function (result, config) {
      if (typeof config != 'undefined' && !!config && config.dataType == 'html') {
        this.$floatHeader.trigger('removeProductContent');
        this.initComponent();
        var showAll = false;
        if (typeof config.url != 'undefined') {
          showAll = APP.Helpers.queryString(config.url.split('?')[1], 'SHOWALL_2');
        }
        if (typeof showAll == 'undefined') {
          $.scrollTo(0, 300);
        }
      }
    },
    initComponent: function () {
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      new APP.Controls.Partials.WidgetRating(this.element);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Service = can.Control.extend({
    defaults: {
      spoiler: '.js-spoiler',
      activeClass: 'active'
    }
  }, {
    init: function () {},
    '{spoiler} click': function (el) {
      $(el).toggleClass(this.options.activeClass);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.Order = can.Control.extend({
    defaults: {
      headCart: '.js-head-cart',
      orderCard: '.js-order-product-card',
      orderList: '.js-order-product-card-list',
      orderSetCard: '.js-order-set-product-card',
      orderAdditional: '.js-additional-product',
      orderAdditionalOpenerClass: 'open',
      orderAdditionalOpener: '.js-additional-product-opener',
      orderAdditionalButton: '.js-additional-item-button',
      countButton: '.js-count-button',
      cartBlock: '.js-cart-block',
      cartService: '.js-service',
      cartDelete: '.js-delete',
      cartDeleteSetItem: '.js-delete-set-item',
      formOrder: '.js-form-order',
      stickyWrap: '.js-sticky-wrap',
      stickyBlock: '.js-sticky-block',
      deliveryBlockWrapper: '.js-delivery-data',
      currencyTemplate: 'currency',
      summaryDeliveryRow: '.js-summary-delivery-row',
      summaryDelivery: '.js-summary-delivery',
      summaryAll: '.js-summary-all',
      templateSummary: 'orderSummary',
      tabWrapper: '.js-tab-wrapper',
      tabs: '.js-tabs-order',
      item: '.js-tab',
      active: '.selected',
      jsData: '.js-delivery-data-js',
      streetComplete: '.js-delivery-street',
      deliveryDate: '.js-delivery-date',
      dataAutoCompleteUrl: 'url',
      dropDown: '.js-m-scroll',
      dropDownContent: '.js-scroll-content',
      droppedClass: 'dropped',
      dataEmptyText: 'empty-result',
      autocompleteClass: 'autocomplete-suggestions',
      kladrDataAttr: 'kladr',
      cookieName: 'orderForm',
      confirmBtn: '.js-confirm',
      couponForm: '.js-form-coupon',
      btnOk: '.js-btn-ok',
      popupLinkWrap: '.js-popup-link-wrap'
    }
  }, {
    init: function () {
      this.$headCart = $(this.options.headCart);
      Cookies.remove(this.options.cookieName);
      APP.SUMMARY_MAP = new can.Map({
        data: {}
      });
      if (typeof APP.BASKET_SUMMARY != 'undefined') {
        APP.SUMMARY_MAP.attr('data', APP.BASKET_SUMMARY);
      }
      if (typeof APP.SUMMARY_MAP != 'undefined') {
        APP.SUMMARY_MAP.bind('data', this.showSummaryAdditional.bind(this));
      }
      this.reInit();
      this.$formOrder = this.element.find(this.options.formOrder);
      this.formOrder = new APP.Controls.Partials.FormOrder(this.options.formOrder, {
        parent: this
      });
      this.deliveryOrder = new APP.Controls.Partials.DeliveryOrder(this.options.deliveryBlockWrapper, {
        parent: this
      });
      this.deliveryMap = new APP.Controls.Partials.DeliveryMap(this.element, {
        deliveryOrder: this.deliveryOrder
      });
    },
    reInit: function () {
      this.$cartBlock = this.element.find(this.options.cartBlock);
      this.deleteCartItemUrl = this.$cartBlock.data('delete-item-url');
      this.deleteCartSetItemUrl = this.$cartBlock.data('delete-set-item-url');
      this.updateCartItemUrl = this.$cartBlock.data('update-item-url');
      this.updateCartServiceItemUrl = this.$cartBlock.data('update-service-item-url');
      this.element.find(this.options.countButton).each(function (i, el) {
        new APP.Controls.Partials.CountButton(el, {
          callback: this.updateCartItemCount.bind(this, $(el).closest(this.options.orderCard))
        });
      }.bind(this));
      new APP.Controls.Partials.Tabs(this.options.tabs, {
        callback: this.callbackTab.bind(this)
      });
      this.$stickyBlock = this.element.find(this.options.stickyBlock);
      this.$stickyWrap = this.element.find(this.options.stickyWrap);
      this.lastScrollLeft = $(document).scrollLeft();
      this.options.confirmBtn = this.element.find(this.options.confirmBtn);
      var currentContext = this;
      this.element.find(this.options.couponForm).each(function () {
        new APP.Controls.Partials.FormCoupon(this, {
          parent: currentContext
        });
      });
      this.calcSticky();
      this._parseJsData();
      this.initAutoComplete();
    },
    '{orderAdditionalOpener} click': function ($el) {
      var additional = $el.closest(this.options.orderAdditional);
      additional.toggleClass(this.options.orderAdditionalOpenerClass);
    },
    '{orderAdditionalButton} click': function ($el) {
      var itemId = $el.val();
      var url = $el.data('url');
      var $item = $el.closest(this.options.orderCard);
      $item.addClass('active');
      this.makeAjax(url, {
        id: itemId
      }, 'html', this.updateCartDataSuccess.bind(this, $item));
    },
    '{cartService} change': function ($el) {
      var itemId = $el.val();
      var checked = $el.prop('checked');
      var type = $el.data('type');
      var $item = $el.closest(this.options.orderCard);
      $item.addClass('active');
      this.makeAjax(this.updateCartServiceItemUrl, {
        id: itemId,
        type: type,
        add: checked ? 1 : 0
      }, 'html', this.updateCartDataSuccess.bind(this, $item));
    },
    '{cartDelete} click': function ($el) {
      var $item = $el.closest(this.options.orderCard);
      $item.addClass('active');
      this.makeAjax(this.deleteCartItemUrl, {
        id: $item.data('id')
      }, 'html', this.deleteItemCartDataSuccess.bind(this, $item));
    },
    '{cartDeleteSetItem} click': function ($el) {
      this.$elementToDelelete = $el.closest(this.options.orderCard);
      APP.Helpers.openFancy('#popup-confirm-set-delete');
    },
    '{confirmBtn} click': function () {
      if (typeof this.$elementToDelelete == 'undefined') {
        return false;
      }
      this.$elementToDelelete.closest(this.options.orderSetCard).addClass('active');
      $.fancybox.close();
      this.makeAjax(this.deleteCartSetItemUrl, {
        id: this.$elementToDelelete.data('id'),
        setId: this.$elementToDelelete.data('set-id')
      }, 'html', this.deleteItemCartDataSuccess.bind(this, this.$elementToDelelete));
    },
    '{window} scroll': function () {
      var documentScrollLeft = $(document).scrollLeft();
      if (documentScrollLeft !== this.lastScrollLeft) {
        this.lastScrollLeft = documentScrollLeft;
        if (this.$stickyBlock.css('position') == 'fixed') {
          this.$stickyBlock.css({
            left: this.$stickyBlock.parent().offset().left + 10 - documentScrollLeft,
            width: this.$stickyBlock.parent().outerWidth() - 20
          });
        }
      } else {
        this.calcSticky();
      }
    },
    '{window} resize': function () {
      this.$stickyBlock.css({
        left: this.$stickyBlock.css('position') == 'fixed' ? this.$stickyBlock.parent().offset().left + 10 - $(document).scrollLeft() : 10,
        width: this.$stickyBlock.parent().outerWidth() - 20
      });
    },
    '{popupLinkWrap} a click': function ($el, ev) {
      ev.preventDefault();
      this.$formOrder.addClass('active');
      this.makeAjax($el.attr('href'), {}, 'html', this.onTextContentLoad.bind(this));
    },
    onTextContentLoad: function (data) {
      var $main = $(data).find('main');
      if (!$main.length) {
        return;
      }
      var $breadcrumbs = $main.find('.breadcrumbs');
      if ($breadcrumbs.length) {
        $breadcrumbs.remove();
      }
      var self = this;
      $.fancybox.open({
        type: 'html',
        content: $('<div class="popup popup-text-content"></div>').append($main),
        autoSize: true,
        autoHeight: true,
        autoWidth: true,
        margin: 0,
        padding: 0,
        afterShow: function () {
          this.inner.mCustomScrollbar({
            scrollbarPosition: 'outside',
            scrollInertia: 0,
            axis: (typeof $(this).data('axis') !== 'undefined') ? $(this).data('axis') : 'y',
            autoDraggerLength: false
          });
          self.$formOrder.removeClass('active');
        },
        helpers: {
          overlay: {
            locked: true
          },
          title: null
        }
      });
    },
    updateCartItemCount: function (item, count) {
      var $item = $(item);
      var id = $item.data('id');
      $item.addClass('active');
      this.makeAjax(this.updateCartItemUrl, {
        id: id,
        count: count
      }, 'html', this.updateCartDataSuccess.bind(this, $item));
    },
    deleteItemCartDataSuccess: function ($item, data) {
      if (this.element.find(this.options.orderList + ' > ' + this.options.orderCard).length <= 1) {
        location.reload();
      } else {
        this.updateCartDataSuccess($item, data);
      }
    },
    updateCartDataSuccess: function ($item, data) {
      var $data = $(data);
      var tabContent = $data.find(this.options.tabWrapper);
      $data.find(this.options.tabWrapper).remove();
      if (tabContent) {
        this.element.find(this.options.tabWrapper).html(tabContent.html());
      }
      this.$cartBlock.replaceWith($data.html());
      this.reInit();
      var count = this.element.find(this.options.orderList + ' > ' + this.options.orderCard).length;
      this.$headCart.trigger('updateCount', {
        count: count
      });
      var deliveryInput = this.element.find(this.deliveryMap.options.deliveryInput + ':checked').map(function () {
        var $el = $(this);
        if ($el.parent().is(':visible')) {
          return $el;
        }
      });
      if (typeof deliveryInput != 'undefined' && deliveryInput.length) {
        deliveryInput = deliveryInput[0];
        this.deliveryOrder.setDeliveryPointByCurrentInput(this.deliveryOrder.getDeliveryPoint(), deliveryInput);
      }
    },
    makeAjax: function (url, data, type, callback) {
      var ids = [];
      var $opened = this.element.find(this.options.orderAdditional).filter('.' + this.options.orderAdditionalOpenerClass).closest(this.options.orderCard);
      if ($opened.length) {
        $opened.each(function (i, val) {
          ids[i] = val.dataset.id;
        });
        data.opened = ids;
      }
      data.form = can.deparam(this.element.find(this.options.formOrder).serialize());
      data.delivery = APP.SUMMARY_MAP.data.delivery || 0;
      data.sessid = APP.USER.sessid;
      $.ajax({
        url: url,
        type: 'post',
        dataType: type,
        data: data,
        success: callback
      });
    },
    calcSticky: function () {
      if ((typeof this.$stickyBlock == 'undefined') || !this.$stickyBlock.length) {
        return false;
      }
      var marginTop = 67;
      var marginBottom = 0;
      var blockOffset = Math.round(this.$stickyBlock.offset().top - $(window).scrollTop());
      var blockHeight = Math.round(this.$stickyBlock.outerHeight());
      var blockBottom = blockOffset + blockHeight;
      var wrapOffset = Math.round(this.$stickyWrap.offset().top - $(window).scrollTop());
      var wrapHeight = Math.round(this.$stickyWrap.outerHeight());
      var wrapBottom = wrapOffset + wrapHeight;
      if ((((blockOffset - marginTop) < 0) && ((blockBottom + marginBottom) < wrapBottom)) || (((blockOffset - marginTop) > 0) && ((blockBottom + marginBottom) == wrapBottom))) {
        this.$stickyBlock.css({
          position: 'fixed',
          top: marginTop,
          left: this.$stickyBlock.parent().offset().left + 10 - $(document).scrollLeft(),
          width: this.$stickyBlock.parent().outerWidth() - 20
        });
      } else if ((((blockOffset - marginTop) > 0) && (blockBottom + marginBottom < wrapBottom)) || ((blockOffset - (wrapOffset) < 0) && (blockBottom + marginBottom < wrapBottom))) {
        this.$stickyBlock.css({
          position: 'absolute',
          top: 0,
          left: '10px',
          width: this.$stickyBlock.parent().outerWidth() - 20
        });
      } else if ((blockBottom + marginBottom > wrapBottom)) {
        this.$stickyBlock.css({
          position: 'absolute',
          top: wrapHeight - blockHeight - marginBottom,
          left: '10px',
          width: this.$stickyBlock.parent().outerWidth() - 20
        });
      }
    },
    callbackTab: function () {
      this.element.find(this.options.item).each(function () {
        var elem = $(this);
        elem.find('input').prop('disabled', !elem.is(':visible'));
      });
      var href = this.element.find('.js-tab-head').filter(this.options.active).attr('href') || false;
      this.element.find('.js-show-tab').val(href);
      this.deliveryOrder.initDeliveryType();
    },
    showSummaryAdditional: function () {
      if (typeof APP.SUMMARY_MAP != 'undefined') {
        var currency = this.element.find(this.options.formOrder).data(this.options.currencyTemplate);
        if (typeof APP.SUMMARY_MAP.data.price != 'undefined') {
          this._renderPrice(this.element.find(this.options.summaryAll), this.options.templateSummary, {
            price: APP.Helpers.numberFormat(APP.SUMMARY_MAP.data.price),
            currency: currency
          });
        }
        if (typeof APP.SUMMARY_MAP.data.delivery != 'undefined') {
          this._renderPrice(this.element.find(this.options.summaryDelivery), this.options.templateSummary, {
            price: APP.Helpers.numberFormat(APP.SUMMARY_MAP.data.delivery),
            currency: currency
          });
          var deliveryRow = this.element.find(this.options.summaryDeliveryRow);
          if (APP.SUMMARY_MAP.data.delivery > 0) {
            deliveryRow.show();
          } else {
            deliveryRow.hide();
          }
        }
      }
    },
    _renderPrice: function ($element, ejsTemplate, data) {
      can.view.render(ejsTemplate, data, '', function ($data) {
        $element.html($data);
      });
    },
    _parseJsData: function () {
      var elem = this.element.find(this.options.jsData);
      if (elem.length) {
        var data = JSON.parse(elem.text());
        if (typeof data != 'undefined' && data.hasOwnProperty('BASKET_SUMMARY')) {
          APP.BASKET_SUMMARY = data.BASKET_SUMMARY;
          APP.SUMMARY_MAP.attr('data', APP.BASKET_SUMMARY);
        }
        if (typeof data != 'undefined' && data.hasOwnProperty('CART_DELIVERY_PAYMENT')) {
          APP.CART_DELIVERY_PAYMENT = data.CART_DELIVERY_PAYMENT;
        }
      }
    },
    initAutoComplete: function () {
      this.$input = this.element.find(this.options.streetComplete);
      this.autoCompleteUrl = this.$input.data(this.options.dataAutoCompleteUrl);
      this.$dropDown = this.$input.siblings(this.options.dropDown);
      this.$dropDownContent = this.$dropDown.find(this.options.dropDownContent);
      this.$dropDown.mCustomScrollbar({
        scrollbarPosition: 'outside',
        scrollInertia: 0,
        axis: 'y',
        advanced: {
          updateOnContentResize: true
        }
      });
      var emptyText = this.$input.data(this.options.dataEmptyText);
      this.$input.autocomplete({
        serviceUrl: this.autoCompleteUrl,
        ajaxSettings: {
          crossDomain: true
        },
        params: {
          ml: 20,
          l: 10,
          f: 1,
          c: this.$input.data(this.options.kladrDataAttr)
        },
        maxHeight: 'auto',
        preventBadQueries: false,
        paramName: 'q',
        dataType: 'jsonp',
        deferRequestBy: 100,
        widthOffset: 2,
        transformResult: function (response) {
          return {
            suggestions: $.map(response.data.items, function (dataItem) {
              var value = dataItem.title;
              return {
                value: value,
                data: dataItem
              };
            })
          };
        },
        formatResult: function (suggestion, currentValue) {
          var parent = suggestion.data.parentTitle ? ' (' + suggestion.data.parentTitle + ')' : '';
          var value = suggestion.data.title + parent;
          var pattern = '(' + APP.Helpers.escapeRegExChars(currentValue) + ')';
          return value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&lt;(\/?strong)&gt;/g, '<$1>');
        },
        showNoSuggestionNotice: !!emptyText,
        noSuggestionNotice: emptyText,
        appendTo: this.$dropDownContent,
        containerClass: this.options.autocompleteClass,
        suggestionsContainerParent: this.options.dropDown,
        afterRender: function () {
          this.$dropDown.mCustomScrollbar('update');
        }.bind(this)
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Faq = can.Control.extend({}, {
    init: function () {
      this.element.find('.js-content-collapse').each(function () {
        new APP.Controls.Partials.ContentCollapse($(this));
      });
    },
    '.js-anchors a click': function (el, e) {
      e.preventDefault();
      var $target = $(el.attr('href'));
      if ($target.length) {
        $.scrollTo($target, 400, {
          offset: -30
        });
        location.hash = el.attr('href');
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Shops = can.Control.extend({
    defaults: {
      formShopCity: '.js-form-shop-city',
      shopsTitle: '.js-shops-title',
      card: '.js-shop-card',
      mapSettings: {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 13,
        mapTypeControl: false,
        scrollwheel: false,
        streetViewControl: false,
        styles: [{
          'featureType': 'administrative.country',
          'elementType': 'labels.text',
          'stylers': [{
            'hue': '#00ffff'
          }]
        }, {
          'featureType': 'poi.business',
          'elementType': 'all',
          'stylers': [{
            'visibility': 'on'
          }]
        }]
      },
      markerStyle: [{
        url: '/local/images/google-cluster.png',
        height: 41,
        width: 33,
        averageCenter: true,
        textColor: '#272e32',
        textSize: 12,
        anchor: [-9, 0]
      }],
      templatePopup: '#bubble'
    }
  }, {
    init: function () {
      this.$map = this.element.find('#map');
      this.markers = [];
      this.bubbles = [];
      this.$cards = this.element.find(this.options.card);
      this.$shopsTitle = this.element.find(this.options.shopsTitle);
      var self = this;
      this.element.find(this.options.formShopCity).each(function () {
        new APP.Controls.Partials.FormShopCity(this, {
          parent: self
        });
      });
      this.$current = this.$cards.filter('.active');
    },
    '{window} load': function () {
      this.initMap();
    },
    initMap: function () {
      this.bounds = new google.maps.LatLngBounds();
      this.map = new google.maps.Map(this.$map.get(0), this.options.mapSettings);
      this.map.addListener('zoom_changed', function () {
        if (this.map.getZoom() < 10) this.closeInfoBubbles();
      }.bind(this));
      if (APP.Shops) {
        $.each(APP.Shops, this.setMarker.bind(this));
        this.setCluster();
        this.fitMap();
        if (this.$current.length) {
          this.$current.find('.js-map-trigger').trigger('click');
        }
      }
    },
    setMarker: function (index, data) {
      var coords = new google.maps.LatLng(data.coords.lat, data.coords.lng);
      var marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: '',
        icon: '/local/images/google-pin' + (data.express ? '-express' : '') + '.png'
      });
      var template = can.view.render(this.options.templatePopup, data);
      var bubble = new InfoBubble({
        backgroundColor: '#d1d83a',
        shadowStyle: 0,
        borderWidth: 0,
        minWidth: 460,
        maxWidth: 460,
        hideCloseButton: true,
        minHeight: '100%',
        borderRadius: 3,
        padding: 0,
        arrowSize: 10,
        content: template
      });
      marker.addListener('click', function () {
        if (!bubble.isOpen()) {
          this.closeInfoBubbles();
          bubble.open(this.map, marker);
          this.map.setZoom(this.options.mapSettings.zoom);
        } else {
          this.closeInfoBubbles();
        }
      }.bind(this));
      this.$cards.filter('[data-id=' + data.id + ']').find('.js-map-trigger').on('click', function () {
        this.closeInfoBubbles();
        bubble.open(this.map, marker);
        this.scrollToMap();
        this.map.setZoom(this.options.mapSettings.zoom);
      }.bind(this));
      this.bounds.extend(coords);
      this.markers.push(marker);
      this.bubbles.push(bubble);
    },
    setCluster: function () {
      new MarkerClusterer(this.map, this.markers, {
        styles: this.options.markerStyle
      });
    },
    closeInfoBubbles: function () {
      $.each(this.bubbles, function (index, el) {
        el.close()
      });
    },
    scrollToMap: function () {
      $.scrollTo(this.$map, 300, {
        offset: -50
      });
    },
    onChangeCity: function (city) {
      if (!city.length) {
        this.$cards.show();
        this.$shopsTitle.slideDown();
      } else {
        this.$cards.hide();
        this.$cards.filter('[data-city=' + city + ']').show();
        this.$shopsTitle.slideUp();
      }
      this.fitMap();
    },
    getFocusShops: function () {
      return this.$cards.filter(':visible');
    },
    getFocusBounds: function () {
      this.focusBounds = '';
      $.each(this.getFocusShops(), function (i, el) {
        var latLng = this.getShopLatLng($(el));
        if (!this.focusBounds) {
          this.focusBounds = new google.maps.LatLngBounds(latLng);
        } else {
          this.focusBounds.extend(latLng);
        }
      }.bind(this));
      return this.focusBounds;
    },
    getShopLatLng: function ($shop) {
      var shop = APP.Shops[$shop.data('id')];
      return new google.maps.LatLng(shop.coords.lat, shop.coords.lng);
    },
    fitMap: function () {
      var focusShops = this.getFocusShops();
      if (!focusShops.length) {
        return false;
      }
      if (focusShops.length == 1) {
        this.map.setCenter(this.getShopLatLng(focusShops.eq(0)));
        this.map.setZoom(this.options.mapSettings.zoom);
      } else {
        this.map.fitBounds(this.getFocusBounds());
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.Catalog = APP.Controls.Page.AjaxPage.extend({
    defaults: {
      component: '.js-catalog-component',
      floatHeader: '.js-float-header'
    }
  }, {
    init: function () {
      this.initComponent();
      this.element.find('.js-content-collapse:not(.js-inited)').each(function () {
        new APP.Controls.Partials.ContentCollapse($(this));
      });
      this.$floatHeader = $(this.options.floatHeader);
      if (typeof APP.DELIVERY_POPUP == 'undefined') {
        APP.DELIVERY_POPUP = new can.Map({
          data: {}
        });
      }
      this._super();
    },
    bxAjaxSuccess: function (result, config) {
      if (typeof config != 'undefined' && !!config && config.dataType == 'html') {
        this.$floatHeader.trigger('removeProductContent');
        this.element.find('.js-content-collapse:not(.js-inited)').each(function () {
          new APP.Controls.Partials.ContentCollapse($(this));
        });
        this.initComponent();
        var showAll = false;
        if (typeof config.url != 'undefined') {
          showAll = config.url.split('?')[1].search(/SHOWALL/i) !== -1 ? true : undefined;
        }
        if (typeof showAll == 'undefined') {
          $.scrollTo(0, 300);
        }
      }
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.CatalogDetail = can.Control.extend({
    defaults: {
      productHeader: 'main .js-product-header',
      promoSlider: '.js-promo-slider',
      newProductsSlider: '.js-new-products-slider',
      productSlide: '.js-new-products-slider .product-card',
      formChange: '.js-form-product-changer',
      formKitchenCalculate: '.js-form-kitchen-calculate',
      galleryBlock: '.js-gallery-block-detail',
      countButton: 'main .js-catalog-component .js-count-button',
      cartButton: 'main .js-catalog-component .js-to-cart',
      templateCity: '/local/js/ejs/catalog-detail-city-link.ejs',
      templateDeliveryPopup: '/local/js/ejs/catalog-detail-delivery-popup.ejs',
      detailCityContainer: '.js-render-product-city-link',
      deliveryPopup: '.js-detail-delivery-popup',
      checkAssemble: '.js-check-assemble',
      price: '.js-price',
      priceTemplate: '/local/js/ejs/price.ejs',
      floatHeader: '.js-float-header',
      ajaxLinkPopup: '.js-ajax-link-popup',
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state',
      productCard: '.js-product-card-wrapper',
      reviewInline: '.js-review-widget-inline',
      reviewFloatInline: '.js-review-widget-float-inline',
      currentViews: '.js-current-views',
      popupSimilar: '.js-popup-similar',
      realReviewLink: '.js-real-review'
    }
  }, {
    init: function () {
      this.$cartButtons = this.element.find(this.options.cartButton);
      this.$price = this.element.find(this.options.price);
      this.$floatHeader = $(this.options.floatHeader);
      APP.Helpers.reachGoal('Card_Product', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Card_Product'
      });
      var promoSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        dots: true,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
          breakpoint: APP.Helpers.responseLg,
          settings: {}
        }, {
          breakpoint: APP.Helpers.responseMd,
          settings: {
            dots: false,
            variableWidth: false
          }
        }]
      });
      this.element.find(this.options.promoSlider).slick(promoSliderSettings);
      var newProductsSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: false,
        adaptiveHeight: true,
        variableWidth: false,
        draggable: false,
        responsive: [{
          breakpoint: APP.Helpers.responseLg,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            variableWidth: false,
          }
        }, {
          breakpoint: APP.Helpers.responseMd,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: false,
          }
        }]
      });
      this.$newProductsSlider = this.element.find(this.options.newProductsSlider);
      this.$newProductsSlider.slick(newProductsSliderSettings);
      var $formChange = this.element.find(this.options.formChange);
      if ($formChange.length) {
        new APP.Controls.Partials.FormProductChanger($formChange);
      }
      this.element.find('.js-video').each(function () {
        new APP.Controls.Video(this);
      });
      this.element.find(this.options.currentViews).each(function () {
        new APP.Controls.Partials.CurrentViews(this);
      });
      this.element.find(this.options.popupSimilar).each(function () {
        new APP.Controls.Partials.PopupSimilar(this);
      });
      this.$gallery = this.element.find(this.options.galleryBlock);
      if (this.$gallery.length) {
        this.element.find(this.options.galleryBlock).each(function () {
          new APP.Controls.Partials.GalleryBlock($(this));
        });
        this.$floatHeader.data('visible-top', this.$gallery.offset().top + this.$gallery.outerHeight());
      }
      this.$floatHeader.trigger('reInit');
      this.$productHeader = this.element.find(this.options.productHeader);
      this.productHeaderHeight = 0;
      if (this.$productHeader.length && this.$floatHeader.length) {
        this.$floatHeader.trigger('addProductContent', [this.$productHeader]);
        this.productHeaderHeight = this.$productHeader.outerHeight();
      } else {
        this.$floatHeader.trigger('removeProductContent');
      }
      var $formKitchenCalculate = this.element.find(this.options.formKitchenCalculate);
      if ($formKitchenCalculate.length) {
        new APP.Controls.Partials.FormKitchenCalculate($formKitchenCalculate);
      }
      this.$cartButtons.each(function (i, el) {
        this.cartButton = new APP.Controls.Partials.CartButton(el, {
          cartClass: '.js-to-cart.js-detail'
        });
      }.bind(this));
      this.element.find(this.options.countButton).each(function (i, el) {
        new APP.Controls.Partials.CountButton(el, {
          callback: typeof this.cartButton != 'undefined' ? this.cartButton.updateCount.bind(this.cartButton) : undefined
        });
      }.bind(this));
      this.element.find('.js-m-scroll').each(function () {
        $(this).mCustomScrollbar({
          scrollbarPosition: 'outside',
          scrollInertia: 0,
          axis: (typeof $(this).data('axis') !== 'undefined') ? $(this).data('axis') : 'y',
          autoDraggerLength: false
        });
      });
      if (typeof APP.DELIVERY_POPUP == 'undefined') {
        APP.DELIVERY_POPUP = new can.Map({
          data: {}
        });
      }
      if (typeof APP.DELIVERY_POPUP != 'undefined') {
        APP.DELIVERY_POPUP.bind('data', this.showDeliveryPopup.bind(this));
      }
      if (typeof APP.CURRENT_CITY_MAP != "undefined") {
        APP.CURRENT_CITY_MAP.bind('data', this.showCity.bind(this));
      }
      this.$detailCityContainer = this.element.find(this.options.detailCityContainer);
      this.showDeliveryPopup();
      this.showCity();
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      new APP.Controls.Partials.WidgetRating(this.element);
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
    },
    '{productSlide} mouseenter': function () {
      if (this.$newProductsSlider.length) {
        this.$newProductsSlider.css({
          zIndex: 2
        });
      }
    },
    '{productSlide} mouseleave': function () {
      if (this.$newProductsSlider.length) {
        this.$newProductsSlider.css({
          zIndex: 'auto'
        });
      }
    },
    '{checkAssemble} change': function ($el) {
      var assemblePrice = $el.val();
      this.$price.each(function (i, price) {
        var $price = $(price);
        var currency = $price.data('currency-template');
        var totalPrice = $el.prop('checked') ? parseInt($price.data('value')) + parseInt(assemblePrice) : parseInt($price.data('value'));
        can.view.render(this.options.priceTemplate, {
          price: APP.Helpers.numberFormat(totalPrice, 0, '.', ' '),
          currency: currency
        }, '', function ($data) {
          $price.html($data);
        });
      }.bind(this));
      this.$cartButtons.data('assemble', !!$el.val());
    },
    '.js-anchors a click': function (el, e) {
      e.preventDefault();
      var $target = $(el.attr('href'));
      if ($target.length) {
        $.scrollTo($target, 400, {
          offset: -60 - this.productHeaderHeight
        });
      }
    },
    '.js-dropdown-starter click': function ($el) {
      var url = $el.attr('href') || $el.data('url');
      if (typeof url != "undefined") {
        this.element.find(url).addClass('show');
      }
    },
    '{window} click': function (el) {
      var elem = $(el.target);
      if (elem.closest('.js-dropdown-target').length == 0) {
        this.element.find('.js-dropdown-target').removeClass('show')
      }
    },
    '.js-video-button click': function ($el) {
      var parent = $el.closest('.js-video-parent');
      var video = parent.find('video.js-video')[0];
      var player = video.player;
      if (APP.Helpers.isMobile()) {
        $.fancybox({
          'type': 'iframe',
          'href': video.player.media.src.replace(new RegExp('&.*', 'i'), '').replace(new RegExp('watch\\?v=', 'i'), 'embed/') + '?rel=0&autoplay=1',
          'overlayShow': true,
          'centerOnScroll': true,
          'speedIn': 100,
          'speedOut': 50,
          'width': 640,
          'height': 480
        });
      } else {
        if (typeof player != "undefined") {
          player.play();
          parent.addClass('show-video');
        }
      }
    },
    '.js-calculate-kitchen click': function () {
      APP.Helpers.reachGoal('Popup_Calculate', {
        eventCategory: 'Button',
        eventAction: 'Click',
        eventLabel: 'Popup_Calculate'
      });
    },
    '.js-video-pause click': function ($el) {
      var parent = $el.closest('.js-video-parent');
      var player = parent.find('video.js-video')[0].player;
      if (typeof player != "undefined") {
        player.pause();
        parent.removeClass('show-video').find('.mejs-poster').fadeIn(400);
      }
    },
    '.js-hover-gif mouseenter': APP.Helpers.debounce(function ($el) {
      this._transGifSrc($el);
    }, 100, this),
    '.js-hover-gif mouseleave': APP.Helpers.debounce(function ($el) {
      this._transGifSrc($el);
    }, 100, this),
    '{realReviewLink} click': function ($el, ev) {
      if (typeof APP.REAL_REVIEW_LINK != 'undefined') {
        new APP.Controls.Partials.AjaxPopup($el, {
          href: APP.REAL_REVIEW_LINK
        });
      }
      return false;
    },
    _transGifSrc: function ($el) {
      var elem = $el.get(0);
      var gifSrc = elem.dataset.hover;
      var src = elem.src;
      if (typeof gifSrc != "undefined" && gifSrc) {
        elem.src = gifSrc;
        elem.dataset.hover = src;
      }
    },
    showDeliveryPopup: function () {
      if (typeof APP.DELIVERY_POPUP != 'undefined') {
        can.view.render(this.options.templateDeliveryPopup, {
          data: APP.DELIVERY_POPUP.data
        }, '', function (data) {
          this.element.find(this.options.deliveryPopup).html(data);
        }.bind(this));
      }
    },
    showCity: function () {
      if (typeof APP.CURRENT_CITY_MAP != 'undefined') {
        var prefix = typeof APP.CURRENT_CITY_MAP.data.socr != 'undefined' ? APP.CURRENT_CITY_MAP.data.socr + '. ' : '';
        can.view.render(this.options.templateCity, {
          city: prefix + APP.CURRENT_CITY_MAP.data.title
        }, '', function (data) {
          this.$detailCityContainer.html(data);
        }.bind(this));
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.CatalogList = can.Control.extend({
    defaults: {
      promoSlider: '.js-promo-slider',
      select: '.js-select',
      range: '.js-range',
      filter: '.js-smartfilter',
      selectedItem: '.js-selected-filter-value',
      floatHeader: '.js-float-header',
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state',
      ratingInline: '.js-inline-rating',
      productCard: '.js-product-card-wrapper',
    }
  }, {
    init: function () {
      this.$floatHeader = $(this.options.floatHeader);
      var smartFilter = this.element.find(this.options.filter);
      if (typeof smartFilter != 'undefined') {
        new APP.Controls.Partials.FilterSelectedValue(this.element.find(this.options.selectedItem), {
          filter: smartFilter
        });
      }
      var $promoSlider = this.element.find(this.options.promoSlider);
      if ($promoSlider.length) {
        this.initPromoSlider($promoSlider);
      }
      this.element.find(this.options.select).each(function () {
        var pagePlugin = can.capitalize(can.camelize(this.dataset.type));
        var name = APP.Controls.Partials['CustomSelect' + pagePlugin];
        if (name) {
          new name(this);
        } else {
          new APP.Controls.Partials.CustomSelect(this);
        }
      });
      this.element.find(this.options.range).each(function () {
        new APP.Controls.Partials.Range(this);
      });
      this.$floatHeader.data('visible-top', 170);
      this.$floatHeader.trigger('reInit');
      if (typeof APP.DELIVERY_POPUP == 'undefined') {
        APP.DELIVERY_POPUP = new can.Map({
          data: {}
        });
      }
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      new APP.Controls.Partials.WidgetRating(this.element);
    },
    initPromoSlider: function ($promoSlider) {
      var promoSliderSettings = $.extend({}, APP.Helpers.sliderSettings, {
        dots: true,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
          breakpoint: APP.Helpers.responseLg,
          settings: {}
        }, {
          breakpoint: APP.Helpers.responseMd,
          settings: {
            dots: false,
            variableWidth: false
          }
        }]
      });
      $promoSlider.slick(promoSliderSettings);
    },
    '{filter} submit': function ($el) {
      $el.find('input:visible').first().trigger('clearInput');
      return false;
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Profile = can.Control.extend({
    defaults: {
      formProfile: '.js-form-profile'
    }
  }, {
    init: function () {
      this.formProfile = new APP.Controls.Partials.FormProfile(this.options.formProfile);
    },
    '.js-open-block click': function (el) {
      var $block = el.parents('.js-block'),
        $body = $block.find('.js-block-body');
      if ($block.hasClass('opened')) {
        $block.removeClass('opened');
        $body.slideUp();
      } else {
        $block.addClass('opened');
        $body.slideDown();
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.ProfileHistory = APP.Controls.Page.AjaxPage.extend({
    defaults: {}
  }, {
    init: function () {
      this._super();
    },
    '.js-open-block click': function (el) {
      var $block = el.parents('.js-block'),
        $body = $block.find('.js-block-body');
      if ($block.hasClass('opened')) {
        $block.removeClass('opened');
        $body.slideUp();
      } else {
        $block.addClass('opened');
        $body.slideDown();
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.NotFound = can.Control.extend({
    defaults: {
      productCard: '.js-product-card-wrapper'
    }
  }, {
    init: function () {
      this.$frames = this.element.find('.js-frame');
      this.$letters = this.$frames.filter('.js-letter');
      this.$lights = this.$frames.filter('.js-lights');
      this.count = 0;
      this.length = this.$frames.length;
      this.preload();
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      new APP.Controls.Partials.WidgetRating(this.element);
    },
    preload: function () {
      var self = this;
      this.$frames.each(function () {
        var $this = $(this),
          bg = $this.css('background-image'),
          url = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        $("<img />").bind('load', self.handlePreload).bind('error', self.handlePreload).attr('src', url);
      });
      this.startLetters();
    },
    handlePreload: function () {
      this.count++;
      if (this.count == this.length) this.startLetters();
    },
    startLetters: function () {
      this.time = 0;
      this.lettersLength = this.$letters.length - 1;
      this.$letters.each(function (i, el) {
        var $this = $(el);
        this.time = this.time + parseInt($this.data('time'));
        setTimeout(function () {
          this.hide();
          $this.show();
          if (i == this.lettersLength) this.startLights();
        }.bind(this), this.time);
      }.bind(this));
    },
    hide: function () {},
    startLights: function () {
      var $med = this.$lights.eq(0);
      var $off = this.$lights.eq(1);
      setInterval(function () {
        $med.toggle();
      }.bind(this), 300);
      setInterval(function () {
        $off.toggle();
      }.bind(this), 400);
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.Text = can.Control.extend({
    defaults: {
      formDesign: '.js-form-design',
      formProfi: '.js-form-profi',
      toggleBlockState: '.js-toggle-block-state',
      imageTitleAlt: '.js-image-title-alt',
      templateImageTitleAlt: '/local/js/ejs/image-with-title-and-alt.ejs',
      activeLink: '.js-active-link',
      activeLinkClass: 'active',
      galleryBlock: '.js-gallery-block-detail',
      video: '.js-video',
      productCard: '.js-product-card-wrapper',
      ajaxLinkPopup: '.js-ajax-link-popup',
    }
  }, {
    init: function () {
      this.element.find(this.options.formDesign).each(function () {
        new APP.Controls.Partials.FormDesign(this);
      });
      this.element.find(this.options.formProfi).each(function () {
        new APP.Controls.Partials.FormProfi(this);
      });
      this.element.find(this.options.toggleBlockState).each(function () {
        new APP.Controls.Partials.ToggleBlockState($(this));
      });
      this.element.find(this.options.imageTitleAlt).each(function (i, elem) {
        var elem = $(elem);
        var dataImage = {
          align: elem.attr('align') || 'none',
          src: elem.attr('src'),
          alt: elem.attr('alt'),
          title: elem.attr('title')
        };
        can.view.render(this.options.templateImageTitleAlt, dataImage, '', function (data) {
          elem.replaceWith(data);
        });
      }.bind(this));
      this.element.find(this.options.activeLink).each(function (i, elem) {
        var $el = $(elem);
        $el.addClass(this.options.activeLinkClass).parent().addClass(this.options.activeLinkClass);
      }.bind(this));
      this.element.find(this.options.video).each(function () {
        new APP.Controls.Video(this);
      });
      this.$gallery = this.element.find(this.options.galleryBlock);
      if (this.$gallery.length) {
        this.element.find(this.options.galleryBlock).each(function () {
          new APP.Controls.Partials.GalleryBlock($(this));
        });
      }
      this.element.find(this.options.productCard).each(function (i, el) {
        new APP.Controls.Partials.ProductCard(el);
      });
      this.element.find(this.options.ajaxLinkPopup).each(function () {
        new APP.Controls.Partials.AjaxLinkPopup(this);
      });
    }
  });
})(jQuery, window.APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.Blog = APP.Controls.Page.AjaxPage.extend({
    defaults: {
      component: '.js-blog-component'
    }
  }, {
    init: function () {
      this.initComponent();
      this._super();
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.BlogList = can.Control.extend({
    defaults: {
      formSubscribe: '.js-form-subscribe'
    }
  }, {
    init: function () {
      this.element.find(this.options.formSubscribe).each(function () {
        new APP.Controls.Partials.FormSubscribe(this);
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP, undefined) {
  'use strict';
  APP.Controls.Page.BlogDetail = APP.Controls.Page.Text.extend({
    defaults: {
      share: '.js-share',
      shareInit: 'ya-share2_inited',
      toLinkDesign: '.js-to-design-form'
    }
  }, {
    init: function () {
      var share = this.element.find(this.options.share);
      if (typeof Ya != 'undefined' && typeof Ya.share2 == 'function' && !share.hasClass(this.options.shareInit)) {
        Ya.share2(share.get(0));
      }
      this._super();
    },
    '{toLinkDesign} click': function () {
      $.scrollTo(this.element.find(this.options.formDesign), 400, {
        offset: -60
      });
    }
  });
})(jQuery, APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Page.ForDesigners = APP.Controls.Page.Text.extend({
    defaults: {
      giftUrl: '/popup/gift/',
      cookieName: 'desight_view_count',
      btnGift: '.js-btn-gift',
      formProfi: '.js-form-profi',
      events: {
        showGiftPopup: 'showGiftPopup'
      }
    }
  }, {
    init: function () {
      this._super();
      this.popupShowed = false;
      var viewCount = Cookies.get(this.options.cookieName);
      if (viewCount === void 0) {
        viewCount = 0;
      } else if (parseInt(viewCount) === 2) {
        setTimeout(function () {
          this.showGiftPopup();
        }.bind(this), 2000);
      }
      Cookies.set(this.options.cookieName, parseInt(viewCount) + 1, {
        expires: 30
      });
    },
    '{events.showGiftPopup}': function () {
      this.showGiftPopup();
    },
    '{document} mouseleave': function () {
      this.showGiftPopup();
    },
    '{btnGift} click': function () {
      $.fancybox.close();
      var $form = this.element.find(this.options.formProfi).eq(0);
      if ($form !== void 0) {
        $.scrollTo(this.element.find(this.options.formProfi).eq(0), 300, {
          offset: -100,
          onAfter: function () {
            $form.find('input[type=text]').eq(0).focus();
          }.bind(this)
        });
      }
    },
    showGiftPopup: function () {
      if (!this.popupShowed) {
        new APP.Controls.Partials.AjaxPopup(this.element, {
          href: this.options.giftUrl
        });
        this.popupShowed = true;
      }
    }
  });
})(jQuery, window.APP);;;
(function ($, APP) {
  'use strict';
  APP.Controls.Application = can.Control.extend({
    init: function () {
      if (window.navigator.msPointerEnabled) {
        $('html').addClass('is-ie');
      }
      this.initLayout();
      this.initPageController();
    },
    initPageController: function () {
      var pagePlugin = can.capitalize(can.camelize(this.element.data('page-type')));
      if (APP.Controls.Page[pagePlugin]) {
        new APP.Controls.Page[pagePlugin](this.element);
      }
    },
    initLayout: function () {
      APP.layout = new APP.Controls.Layout(this.element);
    }
  });
  $(function () {
    new APP.Controls.Application($('body'));
  });
})(jQuery, window.APP);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;