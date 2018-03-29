/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
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
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
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
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
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
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
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
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
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
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
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

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
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
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
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
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
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
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
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
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
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
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});


! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
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
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});

//Outer html to match inner html
jQuery.fn.outerHtml = function(s) {
    if (s) {
        var $s = $(s);
        this.before($s).remove();
    }
    return s ?
        $s :
        jQuery("<p>").append(this.eq(0).clone()).html();
};

// JQUERY ROTATE VERSION: 2.3 LAST UPDATE: 11.07.2013
/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/
 */
(function(k) {
    for (var d, f, l = document.getElementsByTagName("head")[0].style, h = ["transformProperty", "WebkitTransform", "OTransform", "msTransform", "MozTransform"], g = 0; g < h.length; g++) void 0 !== l[h[g]] && (d = h[g]);
    d && (f = d.replace(/[tT]ransform/, "TransformOrigin"), "T" == f[0] && (f[0] = "t"));
    eval('IE = "v"=="\v"');
    jQuery.fn.extend({
        rotate: function(a) {
            if (0 !== this.length && "undefined" != typeof a) {
                "number" == typeof a && (a = {
                    angle: a
                });
                for (var b = [], c = 0, d = this.length; c < d; c++) {
                    var e = this.get(c);
                    if (e.Wilq32 && e.Wilq32.PhotoEffect) e.Wilq32.PhotoEffect._handleRotation(a);
                    else {
                        var f = k.extend(!0, {}, a),
                            e = (new Wilq32.PhotoEffect(e, f))._rootObj;
                        b.push(k(e))
                    }
                }
                return b
            }
        },
        getRotateAngle: function() {
            for (var a = [], b = 0, c = this.length; b < c; b++) {
                var d = this.get(b);
                d.Wilq32 && d.Wilq32.PhotoEffect && (a[b] = d.Wilq32.PhotoEffect._angle)
            }
            return a
        },
        stopRotate: function() {
            for (var a = 0, b = this.length; a < b; a++) {
                var c = this.get(a);
                c.Wilq32 && c.Wilq32.PhotoEffect && clearTimeout(c.Wilq32.PhotoEffect._timer)
            }
        }
    });
    Wilq32 = window.Wilq32 || {};
    Wilq32.PhotoEffect = function() {
        return d ? function(a, b) {
            a.Wilq32 = {
                PhotoEffect: this
            };
            this._img = this._rootObj = this._eventObj = a;
            this._handleRotation(b)
        } : function(a, b) {
            this._img = a;
            this._onLoadDelegate = [b];
            this._rootObj = document.createElement("span");
            this._rootObj.style.display = "inline-block";
            this._rootObj.Wilq32 = {
                PhotoEffect: this
            };
            a.parentNode.insertBefore(this._rootObj, a);
            if (a.complete) this._Loader();
            else {
                var c = this;
                jQuery(this._img).bind("load", function() {
                    c._Loader()
                })
            }
        }
    }();
    Wilq32.PhotoEffect.prototype = {
        _setupParameters: function(a) {
            this._parameters = this._parameters || {};
            "number" !==
            typeof this._angle && (this._angle = 0);
            "number" === typeof a.angle && (this._angle = a.angle);
            this._parameters.animateTo = "number" === typeof a.animateTo ? a.animateTo : this._angle;
            this._parameters.step = a.step || this._parameters.step || null;
            this._parameters.easing = a.easing || this._parameters.easing || this._defaultEasing;
            this._parameters.duration = a.duration || this._parameters.duration || 1E3;
            this._parameters.callback = a.callback || this._parameters.callback || this._emptyFunction;
            this._parameters.center = a.center || this._parameters.center || ["50%", "50%"];
            this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0];
            this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1];
            a.bind && a.bind != this._parameters.bind && this._BindEvents(a.bind)
        },
        _emptyFunction: function() {},
        _defaultEasing: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b -
                1) + c
        },
        _handleRotation: function(a, b) {
            d || this._img.complete || b ? (this._setupParameters(a), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart()) : this._onLoadDelegate.push(a)
        },
        _BindEvents: function(a) {
            if (a && this._eventObj) {
                if (this._parameters.bind) {
                    var b = this._parameters.bind,
                        c;
                    for (c in b) b.hasOwnProperty(c) && jQuery(this._eventObj).unbind(c, b[c])
                }
                this._parameters.bind = a;
                for (c in a) a.hasOwnProperty(c) && jQuery(this._eventObj).bind(c, a[c])
            }
        },
        _Loader: function() {
            return IE ? function() {
                var a =
                    this._img.width,
                    b = this._img.height;
                this._imgWidth = a;
                this._imgHeight = b;
                this._img.parentNode.removeChild(this._img);
                this._vimage = this.createVMLNode("image");
                this._vimage.src = this._img.src;
                this._vimage.style.height = b + "px";
                this._vimage.style.width = a + "px";
                this._vimage.style.position = "absolute";
                this._vimage.style.top = "0px";
                this._vimage.style.left = "0px";
                this._aspectW = this._aspectH = 1;
                this._container = this.createVMLNode("group");
                this._container.style.width = a;
                this._container.style.height = b;
                this._container.style.position =
                    "absolute";
                this._container.style.top = "0px";
                this._container.style.left = "0px";
                this._container.setAttribute("coordsize", a - 1 + "," + (b - 1));
                this._container.appendChild(this._vimage);
                this._rootObj.appendChild(this._container);
                this._rootObj.style.position = "relative";
                this._rootObj.style.width = a + "px";
                this._rootObj.style.height = b + "px";
                this._rootObj.setAttribute("id", this._img.getAttribute("id"));
                this._rootObj.className = this._img.className;
                for (this._eventObj = this._rootObj; a = this._onLoadDelegate.shift();) this._handleRotation(a, !0)
            } : function() {
                this._rootObj.setAttribute("id", this._img.getAttribute("id"));
                this._rootObj.className = this._img.className;
                this._imgWidth = this._img.naturalWidth;
                this._imgHeight = this._img.naturalHeight;
                var a = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                this._width = 3 * a;
                this._height = 3 * a;
                this._aspectW = this._img.offsetWidth / this._img.naturalWidth;
                this._aspectH = this._img.offsetHeight / this._img.naturalHeight;
                this._img.parentNode.removeChild(this._img);
                this._canvas = document.createElement("canvas");
                this._canvas.setAttribute("width", this._width);
                this._canvas.style.position = "relative";
                this._canvas.style.left = -this._img.height * this._aspectW + "px";
                this._canvas.style.top = -this._img.width * this._aspectH + "px";
                this._canvas.Wilq32 = this._rootObj.Wilq32;
                this._rootObj.appendChild(this._canvas);
                this._rootObj.style.width = this._img.width * this._aspectW + "px";
                this._rootObj.style.height = this._img.height * this._aspectH + "px";
                this._eventObj = this._canvas;
                for (this._cnv = this._canvas.getContext("2d"); a = this._onLoadDelegate.shift();) this._handleRotation(a, !0)
            }
        }(),
        _animateStart: function() {
            this._timer && clearTimeout(this._timer);
            this._animateStartTime = +new Date;
            this._animateStartAngle = this._angle;
            this._animate()
        },
        _animate: function() {
            var a = +new Date,
                b = a - this._animateStartTime > this._parameters.duration;
            if (b && !this._parameters.animatedGif) clearTimeout(this._timer);
            else {
                if (this._canvas || this._vimage || this._img) a = this._parameters.easing(0, a - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration),
                    this._rotate(~~(10 * a) / 10);
                this._parameters.step && this._parameters.step(this._angle);
                var c = this;
                this._timer = setTimeout(function() {
                    c._animate.call(c)
                }, 10)
            }
            this._parameters.callback && b && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
        },
        _rotate: function() {
            var a = Math.PI / 180;
            return IE ? function(a) {
                this._angle = a;
                this._container.style.rotation = a % 360 + "deg";
                this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px";
                this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px";
                this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px";
                this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
            } : d ? function(a) {
                this._angle = a;
                this._img.style[d] = "rotate(" + a % 360 + "deg)";
                this._img.style[f] = this._parameters.center.join(" ")
            } : function(b) {
                this._angle = b;
                b = b % 360 * a;
                this._canvas.width = this._width;
                this._canvas.height = this._height;
                this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH);
                this._cnv.translate(this._rotationCenterX,
                    this._rotationCenterY);
                this._cnv.rotate(b);
                this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY);
                this._cnv.scale(this._aspectW, this._aspectH);
                this._cnv.drawImage(this._img, 0, 0)
            }
        }()
    };
    IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function() {
        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                function(a) {
                    return document.createElement("<rvml:" + a + ' class="rvml">')
                }
        } catch (a) {
            return function(a) {
                return document.createElement("<" +
                    a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }())
})(jQuery);



/* JQUERY EASING */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
}); // JavaScript Document
/* Modernizr 2.8.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-cssclasses-testprop-testallprops-domprefixes-load
 */
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.8.0",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) w(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, x(""), i = k = null, e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
            return B([a])
        }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };

// General Igloo JS document

var Igloo = {
    init: function() {

        this.log = function(a, b, c, d) {
            //throw("err")
            //if(window.console) window.console.log( Array.prototype.slice.call(arguments) );
            if (window.console) {
                var l = arguments.length;
                if (l == 4) window.console.log(a, b, c, d);
                if (l == 3) window.console.log(a, b, c);
                if (l == 2) window.console.log(a, b);
                if (l == 1) window.console.log(a);
            }
        }
        this.warn = function() {
            return this.log(Array.prototype.slice.call(arguments));
        }
        this.alertR = function(a) {
            for (var i in a)
                if (a.hasOwnProperty(i)) alert(i + ": " + a[i])
        }

        //Array functions
        this.isArray = function(arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        }
        this.isIn = function(arr, name, value) {
            for (var i in arr) {
                if (Igloo.defined(value)) {
                    if (arr[i][name] === value) return i;
                } else {
                    if (arr[i] === name) return i;
                }
            }
            return false;
        }

        this.searchArray = function(arr, name, value, multi) {
            var r = [];

            for (var i in arr) {
                var v, found = false;
                if (Igloo.defined(value)) {
                    if (arr[i][name] === value) {
                        v = arr[i];
                        found = true;
                    }
                } else {
                    if (arr[i] === name) {
                        v = arr[i];
                        found = true;
                    }
                }
                if (found) {
                    if (multi) r.push(v);
                    else return v;
                }

            }
            return multi ? r : false;
        }

        this.matchArray = function(arr, key, regex) {
            if (!Igloo.defined(regex)) {
                regex = key;
                key = false;
            }
            for (var i = 0; i < arr.length; i++) {
                var a = key ? arr[i][key] : arr[i];
                if (a.match(regex)) {
                    return i;
                }
            }
            return false;
        }

        this.append = function(a, b) {
            var c = [];
            for (var i = 0, mx = a.length; i < mx; i++) c.push(a[i]);
            for (var i = 0, mx = b.length; i < mx; i++) c.push(b[i]);
            return c;
        }

        this.copy = function(a) {
            return this.merge({}, a);
        }

        this.clone = function(object) { //Deep copy, requires jquery
            return $.extend({}, object);
        }

        // Object functions

        this.where = function(arr, objKey, objValue) {
            var list = [];
            for (var i = 0, ii = arr.length; i < ii; i += 1) {
                if (arr[i].hasOwnProperty(objKey) && arr[i][objKey] === objValue) {
                    list.push(arr[i]);
                }
            }
            return list;
        }

        //V001, 07/12/11, iid
        this.merge = function(a, b) {
            if (typeof(a) != "object") a = {};
            if (typeof(b) != "object") b = {};
            var c = {};
            for (var i in a) {
                if (a.hasOwnProperty(i)) c[i] = a[i];
            }
            for (var i in b) {
                if (b.hasOwnProperty(i)) c[i] = b[i];
            }
            return c;
        }

        this.isEmpty = function(object) { //Requires Jquery
            return $.isEmptyObject(object)
        }


        //Variable functions
        this.defined = function(v) {
            if (!v && v !== 0 && v !== false) return false;
            return true;
        }
        this.isDefined = this.defined;

        this.isFunc = function(f) {
            return ((f) && typeof f == 'function');
        }


        //Regex

        this.escapeRegEx = function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }

        //DELEGATION

        //V1-01 - corrected scope mistake in f.apply(t,b);
        //V1-02 - made delegate first the default
        this.delegate_last = function() {
            var t = arguments[0];
            var f = arguments[1];
            var a = [];
            for (var i = 2; i < arguments.length; i++) a.push(arguments[i]);
            return function() {
                var b = Igloo.append(arguments, a);
                return f.apply(t, b);
            }
        }

        this.delegate_first = function() {
            var t = arguments[0];
            var f = arguments[1];

            //multiple delegate
            if (!Igloo.defined(f) && typeof(t) == "object") return function() {
                for (var i in t)
                    if (t[i] && typeof(t[i]) == "object") Igloo.delegate_first.apply(Igloo, t[i])();
            }

            //Single
            var a = [];
            for (var i = 2; i < arguments.length; i++) a.push(arguments[i]);
            return function() {
                var b = Igloo.append(a, arguments);
                if (!f) {
                    Igloo.log("Delegate failed");
                    return function() {};
                } else return f.apply(t ? t : this, b);
            }
        }

        this.delegate = this.delegate_first;

        this.delegate_none = function() {
            var a = [];
            var t = arguments[0];
            var f = arguments[1];
            for (var i = 2; i < arguments.length; i++) a.push(arguments[i]);
            return function() {
                f.apply(t, a);
            }
        }

        this.delegateOnce = function() {
            var a = [];
            var t = arguments[0];
            var f = arguments[1];
            for (var i = 2; i < arguments.length; i++) a.push(arguments[i]);
            var complete = false;
            return function() {
                if (complete) return;
                f.apply(t, a);
                complete = true;
            }
        }

        this.$delegate = function() {
            var t = arguments[0];
            var f = arguments[1];

            //multiple delegate
            if (!Igloo.defined(f) && typeof(t) == "object") return function() {
                for (var i in t)
                    if (t[i] && typeof(t[i]) == "object") Igloo.$delegate.apply(Igloo, t[i])();
            }

            //Single
            var a = [];
            for (var i = 2; i < arguments.length; i++) a.push(arguments[i]);
            return function() {
                var b = Igloo.append(Igloo.append([$(this)], a), arguments);
                if (!f) {
                    Igloo.log("Delegate failed");
                    return function() {};
                } else return f.apply(t, b);
            }
        }

        this.ff = function(f) { //Force Function
            return typeof(f) == "function" ? f : function() {};
        }

        this.throttle = function(fn, threshhold, scope) {
            threshhold || (threshhold = 250);
            var last, deferTimer;
            return function() {
                var context = scope || this;;
                var now = +new Date,
                    args = arguments;

                if (last && now < last + threshhold) {

                    // hold on to it
                    clearTimeout(deferTimer);
                    deferTimer = setTimeout(function() {
                        last = now;
                        fn.apply(context, args);
                    }, threshhold);
                } else {
                    last = now;
                    fn.apply(context, args);
                }
            };
        }

        /**
         Returns an object that allows processes to queue up. Add them with object.add(function)

         @param threshold The time in ms to delay between queued items
         @return A throttleQueue object, with public add(function) and clear() methods.
         */
        this.throttleQueue = function(threshold) {

            var timeout = 0,
                queue = [],
                last = 0,
                _this = this;

            this.add = function(fn) {
                queue.push(fn);
                check();
            }
            this.clear = function(clearLast) {
                if (!Igloo.defined(clearLast)) clearLast = true;
                clearTimeout(timeout);
                timeout = 0;
                queue = [];
                if (clearLast) last = 0;
            }
            var check = function() {
                var now = +new Date;

                if (!queue.length) return false;

                var diff = now - last;
                if (!last || diff > threshold) {
                    queue[0]();
                    queue.splice(0, 1);
                    last = now;
                    check();
                } else if (!timeout) {
                    var t = threshold - diff + 1;
                    timeout = setTimeout(function() {
                        timeout = 0;
                        check();
                    }, t);
                }
            }

        }
        this.throttleQueueFactory = function(threshold) {
            return new Igloo.throttleQueue(threshold);
        }

        this.debounce = function(fn, threshhold, scope, immediate) {

            var timeout;
            return function() {
                var context = scope ? scope : this,
                    args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) fn.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, threshhold);
                if (callNow) fn.apply(context, args);
            };

        }

        //Timing
        this.pause = function(t, c) {
            var a = false;
            if (t == 0) c();
            else a = setTimeout(c, t);
            return a;
        }

        this.pauseDelegate = function(t) {
            var new_args = [];
            for (var i = 1; i < arguments.length; i++) new_args.push(arguments[i]);
            return function() {
                Igloo.pause(t, function() {
                    Igloo.delegate.apply(this, new_args)();
                })
            };
        }

        //Colours
        this.getRGB = function(str) {
            if (str.substr(0, 1) == "#") {
                if (str.length == 7) {
                    var a = str.substr(1);
                    var a1 = parseInt(a.substr(0, 2), 16);
                    var a2 = parseInt(a.substr(2, 2), 16);
                    var a3 = parseInt(a.substr(4, 2), 16);
                } else if (str.length == 4) {
                    var a = str.substr(1);
                    var a1 = parseInt(a.substr(0, 1) + a.substr(0, 1), 16);
                    var a2 = parseInt(a.substr(1, 1) + a.substr(1, 1), 16);
                    var a3 = parseInt(a.substr(2, 1) + a.substr(2, 1), 16);
                }
            } else {

                var a = str.substr(str.indexOf("(") + 1, str.length - str.indexOf("(") - 2);
                var b = a.split(", ");
                var a1 = b[0];
                var a2 = b[1];
                var a3 = b[2];
            }
            return [a1, a2, a3];
        }



        //IID 20120206
        this.blendRGB = function(c1, c2, p) {
            var _c1 = this.getRGB(c1);
            var _c2 = this.getRGB(c2);
            var _c3 = [
                Math.round(_c1[0] * (1 - p) + _c2[0] * (p)),
                Math.round(_c1[1] * (1 - p) + _c2[1] * (p)),
                Math.round(_c1[2] * (1 - p) + _c2[2] * (p))
            ];
            return _c3;
        }

        this.RGB2hex = function(r, g, b) {
            if (typeof(r) == "object") {
                b = r[2];
                g = r[1];
                r = r[0];

            }
            var componentToHex = function(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }


        //Browsers

        //IID - V001, 20111217
        this.isiOS = function() {
            if (Igloo.defined(this.isiOS.saved)) return this.isiOS.saved;
            this.isiOS.saved = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);
            return this.isiOS.saved;
        }
        this.isIE = function(version) {

            if (version) return Igloo.isIeVersion(version);

            if (Igloo.defined(this.isiOS.saved)) return this.isiOS.saved;
            this.isiOS.saved = navigator.userAgent.toLowerCase().match(/(msie)/);
            return this.isiOS.saved;
        }
        this.isIeVersionSaved = {};
        this.isIeVersion = function(version_str) {

            if (Igloo.defined(Igloo.isIeVersionSaved[version_str])) return Igloo.isIeVersionSaved[version_str];

            if (!Igloo.isIE()) return false;

            var version_formatted = Text.trim(version_str).replace(" ", "");
            var versionNumber = 0;

            var op = "=";
            var c1 = version_formatted.substr(0, 1);
            if (c1 !== parseInt(c1, 10)) {
                if (version_formatted.substr(0, 1) == "<") op = c1;
                if (version_formatted.substr(0, 1) == ">") op = c1;
                var c2 = version_formatted.substr(0, 2)
                if (c2 == "<=") op = c2;
                if (c2 == ">=") op = c2;
                versionNumber = version_formatted.substr(op.length) * 1;
            } else {
                versionNumber = version_formatted * 1;
            }

            var iev = 10;
            var $html = $("html");
            if ($html.hasClass("ie6")) iev = 6;
            if ($html.hasClass("ie7")) iev = 7;
            if ($html.hasClass("ie8")) iev = 8;
            if ($html.hasClass("ie9")) iev = 9;

            var result = false;
            if (op == "<") result = iev < versionNumber;
            if (op == "<=") result = iev <= versionNumber;
            if (op == ">") result = iev > versionNumber;
            if (op == ">=") result = iev >= versionNumber;
            if (op == "=") result = iev == versionNumber;

            Igloo.isIeVersionSaved[version_str] = result;

            return result;
        }
        this.isMobile = function() {
            if (Igloo.defined(this.isMobile.saved)) return this.isMobile.saved;
            this.isMobile.saved = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
            return this.isMobile.saved;
        }

        // added by luke
        this.cssSupport = function(property) {
            while (property.indexOf('-') !== -1) {
                var hyphen = property.indexOf('-');
                property = property.split('');

                if (hyphen !== -1) {
                    if (hyphen === 0) {
                        // Simply remove it
                        property.splice(0, 1);
                    } else {
                        property.splice(hyphen, 1);
                        var char = property.splice(hyphen, 1);
                        property.splice(hyphen, 0, char[0].toUpperCase());
                    }
                }

                property = property.join('');
            }

            var char = property.substr(0, 1);
            var vendorProperty = char.toUpperCase() + property.substr(1);

            var div = document.createElement('div');

            for (var style in div.style) {
                if (
                    style === property ||
                    style === 'webkit' + vendorProperty ||
                    style === 'moz' + vendorProperty ||
                    style === 'ms' + vendorProperty ||
                    style === 'o' + vendorProperty
                ) {
                    return true;
                }
            }

            return false;
        };

        this.easing = function(f, x, start, end) {
            if (!Igloo.defined(start)) start = 0;
            if (!Igloo.defined(end)) end = 1;
            return jQuery.easing[f] ? jQuery.easing[f](x, x, 0, 1, 1) * (end - start) + start : x * (end - start) + start;
        };

        this.htmlentities = function(str) {
            return $("<div/>").text(str).html();
        }
        this.html_entity_decode = function(str) {
            return $("<div/>").html(str).text();
        }

    }
};
Igloo.init();




//V001 - MAKE, EIP
var Text = {
    init: function() {

        //V101 - 09/02/2011, JHC
        this.basic_text = function(text, replace_char, extras) {

            var extra_str = "";
            if (extras) {
                if (typeof(extras) != "object") extras = [extras];
                for (var i in extras) extra_str += (extra_str ? ",\\" : "\\") + extras[i];
            }

            var s = "ç,æ,œ,á,é,í,ó,ú,à,è,ì,ò,ù,ä,ë,ï,ö,ü,ÿ,â,ê,î,ô,û,å,e,i,ø,u,'".split(",");
            var r = "c,ae,oe,a,e,i,o,u,a,e,i,o,u,a,e,i,o,u,y,a,e,i,o,u,a,e,i,o,u,".split(",");
            text = Text.str_replace(s, r, text);

            var re = new RegExp('([^a-zA-Z0-9' + extra_str + ']+)', 'g');
            text = Text.trim(text.replace(re, replace_char), replace_char).toLowerCase();

            return text;
        }

        //V101 - 09/02/2011, JHC
        //V102 - 13/02/2011, WFR - fixed \s problem (\\s required)
        this.trim = function(a, c) {
            if (!c || c === " ") c = '\\s';
            if (typeof(a) != "string" && !a) a = "";
            return (a.toString() || "").replace(new RegExp('^(' + c + '|\u00A0)+|(' + c + '|\u00A0)+$', 'g'), "")
        }

        //V1001 - 09/02/2011, JHC
        this.str_replace = function(search, replace, subject, count) {
            var i = 0,
                j = 0,
                temp = '',
                repl = '',
                sl = 0,
                fl = 0,
                f = [].concat(search),
                r = [].concat(replace),
                s = subject,
                ra = r instanceof Array,
                sa = s instanceof Array;
            s = [].concat(s);
            if (count) {
                this.window[count] = 0;
            }
            for (i = 0, sl = s.length; i < sl; i++) {
                if (s[i] === '') {
                    continue;
                }
                for (j = 0, fl = f.length; j < fl; j++) {
                    temp = s[i] + '';
                    repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
                    s[i] = (temp).split(f[j]).join(repl);
                    if (count && s[i] !== temp) {
                        this.window[count] += (temp.length - s[i].length) / f[j].length;
                    }
                }
            }
            return sa ? s : s[0];
        }

        //V001 - 09/06/2011
        //Added for the waterfront
        this.to_number = function(str) {
            try {
                if (str == null) return 0;
                if (str == undefined) return 0;
                if (str == "null") return 0;
                if (str == "undefined") return 0;
                if (str.substr(str.length - 2, 2) == "px") return str.substr(0, str.length - 2) * 1;
                if (str.substr(str.length - 1, 1) == "%") return str.substr(0, str.length - 1) * 1;
                return str * 1;
            } catch (err) {
                return 0;
            }
        }
        this.toNumber = this.to_number;

        this.leadingZero = function(n, z) {
            if (!Igloo.defined(z)) z = 2;
            for (var i = 0; i < z; i++) {
                var _max = Math.pow(10, i);
                if (n < _max) {
                    var zeros = '';
                    for (var j = 0; j < z - i; j++) zeros += '0';
                    return zeros + n;
                }
            }
            return n;
        }

    }
};
Text.init();
Igloo.regexCached = function(str, regex) {
    if (!str || !regex) return false;

    var regex_str = String(regex);

    if (!this.regexCache) this.regexCache = {};
    if (!this.regexCache[regex_str]) this.regexCache[regex_str] = {};
    if (Igloo.defined(this.regexCache[regex_str][str])) return this.regexCache[regex_str][str];

    var result = str.match(regex);
    this.regexCache[regex_str][str] = result;
    return result;


}
Igloo.glob2regex = function(glob, opts) {
    if (glob == null) return null;

    var str = String(glob);


    //Check a cached result
    if (!this.glob2regexCache) this.glob2regexCache = {};
    if (!opts && Igloo.defined(this.glob2regexCache[str])) return this.glob2regexCache[str];

    // The regexp we are building, as a string.
    var reStr = "";

    // Whether we are matching so called "extended" globs (like bash) and should
    // support single character matching, matching ranges of characters, group
    // matching, etc.
    var extended = opts ? !!opts.extended : false;

    // If we are doing extended matching, this boolean is true when we are inside
    // a group (eg {*.html,*.js}), and false otherwise.
    var inGroup = false;

    var c;
    for (var i = 0, len = str.length; i < len; i++) {
        c = str[i];

        switch (c) {
            case "\\":
            case "/":
            case "$":
            case "^":
            case "+":
            case ".":
                //case "(":
                //case ")":
            case "=":
            case "!":
                //case "|":
                reStr += "\\" + c;
                break;

            case "?":
                if (extended) {
                    reStr += ".";
                    break;
                }

            case "[":
            case "]":
                if (extended) {
                    reStr += c;
                    break;
                }

            case "{":
                if (extended) {
                    inGroup = true;
                    reStr += "(";
                    break;
                }

            case "}":
                if (extended) {
                    inGroup = false;
                    reStr += ")";
                    break;
                }

            case ",":
                if (inGroup) {
                    reStr += "|";
                    break;
                }
                reStr += "\\" + c;
                break;

            case "*": //This has been edited to stop multiple paths being matched. ** now matches multiple paths
                if (str.length > i && str[i + 1] == "*") {
                    reStr += ".*";
                    i++
                } else reStr += "[^\/]*";
                break;

            default:
                reStr += c;
        }
    }
    //Igloo.log(reStr);
    this.glob2regexCache[glob] = new RegExp("^" + reStr + "$");

    return this.glob2regexCache[glob];
};
Igloo.searchArrayGlob = function(arr, name, glob) {

    var regex = Igloo.glob2regex(glob);
    for (var i = 0; i < arr.length; i++) {

        var result = arr[i][name].match(regex);

        if (result) return arr[i];
    }
    return false;

}

//V001 - IID
var Form = {
    init: function() {

        this.inlineSubmit = function(identifier, location, onComplete) {

            //		var d = document.getElementById(formID);
            var j = $(identifier);

            var data = {};
            j.find("input, textarea").each(function(i) {
                var n = $(this).attr("name");
                var v = $(this).val();
                if ($(this).attr("type") == "checkbox" && !$(this).attr("checked")) v = "";
                data[n] = v;
            });

            $.ajax({
                type: "POST",
                url: location + "?ajax=1",
                data: data,
                success: onComplete
            });

            return false;
        }
    }
};
Form.init();



////// Preloader ////////
//V1-01 - 13/01/2011
//V1-02 - 14/01/2011 - added optional timing functions
//V1-03 - 11/02/2011 - fixed reAdd no oncomplete bug
//V1-04 - 07/02/2011 - added avg_speed
//V1-05 - 27/09/2012 - added priorities and cancelLevels
var Preloader = {
    init: function() {
        var _this = this;

        this.speeds = [];

        this.images = [];
        this.state = "waiting";
        this.image_count = 0;
        this.load_count = 0;
        this.load_current = 0;
        this.blank_image = "/images/blank.gif";

        this.limit = 2;

        this.listeners = [];
        this.inlineTriggers = [];

        this.img = new Image();
        this.img.onload = function() {
            _this._onImageLoad();
        } //function wrapper otherwise onImageLoad wont be ready
        this.img.onerror = function() {
            _this._onImageError()
        } //function wrapper otherwise onImageLoad wont be ready

        this.add = function(src, onComplete, extras) {
            //If it's already in the list, call the reAdd function instead.

            if (!src) Igloo.log("Preload error: cant load " + src);
            if (Igloo.isIn(this.images, "src", src) !== false) return this.reAdd(src, onComplete, extras);

            var id = this.images.length;


            //Get the full scr for later comparison
            var full_src = "";
            if (src.substr(0, 4) == "http") full_src = src;
            else if (src.substr(0, 1) == "/") full_src = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + src;
            else {
                var parts = document.location.pathname.split("/");
                parts.pop();
                full_src = document.location.protocol + "//" + parts.join("/") + "/" + src; //Ports could cause a problem here...
            }
            var onCompleteArray = onComplete ? [onComplete] : [];
            var onErrorArray = extras && extras.onError ? [extras.onError] : [];
            this.images.push({
                src: src,
                status: "waiting",
                full_src: full_src,
                onCompleteArray: onCompleteArray,
                onErrorArray: onErrorArray,
                errors: 0,
                cancelLevel: 0,
                priority: 1
            });
            this.image_count++;

            //Add extras
            if (extras && typeof(extras) == "object") {
                var image = this.images[this.images.length - 1];
                for (i in extras) image[i] = extras[i];
                if (extras['nocache']) image.full_src = this._addCache(image.full_src);
            }

            //for(var i in this.images) if(this.images[i].status != "loaded") Igloo.log(i + ": " + this.images[i].full_src + " " + this.images[i].status + " " + " " + this.images[i].cancelLevel  + " " + this.images[i].priority );

            this._start();

            return id;
        }

        this.remove = function(src, preventRestart) {
            var id = Igloo.isIn(this.images, "src", src);
            if (!id) return false;
            var image = this.images[id];
            if (image.status == "loading") {
                this.cancel();
            }

            if (image.status == "loaded" || image.status == "failed") this.load_count--;
            else this._callOnComplete(image, false);

            this.image_count--;
            //Igloo.log("remove: " + image.src + "(" + id + ")")		
            this.images.splice(id, 1);
            if (!preventRestart) this.restart();
            return true;
        }

        this.reAdd = function(src, onComplete, extras) { //Note that extras are not updated.

            var id = Igloo.isIn(this.images, "src", src);
            var image = this.images[id];
            if (image.status == "loaded" || image.status == "failed") {
                if (onComplete) onComplete.call(this, src, (image.status == "loaded"), image)
                this.callListeners(src, (image.status == "loaded"));
            } else {
                var priority = extras && extras.priority ? extras.priority : 1;
                if (image.priority > priority) image.priority = priority;
                if (onComplete) image.onCompleteArray.push(onComplete);
                if (extras && extras.onError) image.onErrorArray.push(extras.onError);
            }
        }


        this.restart = function() {
            if (this.state != "loading") this._start();
        }

        this.cancel = function() {

            var id = Igloo.isIn(this.images, "status", "loading");
            var image = this.images[id];

            if (this.state == "loading") {
                this.img.src = this.blank_image;
                this.state = "waiting";
            }

            if (id !== false && image) image.status = "waiting";
        }

        this.cancelSrc = function(src) {
            var id = Igloo.isIn(this.images, "src", src);
            if (id === false) return false;
            var image = this.images[id];
            this.remove(image.src, true);
        }

        this.cancelAll = function(level) {

            var c = 0;
            for (var i in this.images)
                if (this.images[i].cancelLevel >= level && (this.images[i].status == "waiting" || this.images[i].status == "loading")) c++;
            //Igloo.log("Cancel level: " + level +". " + c + " TO CANCEL" );
            //for(var i in this.images) Igloo.log(this.images[i].cancelLevel + " " + this.images[i].status + " " );	

            //Cancel every image equal or above the cancelLevel
            for (var i = 0; i < this.images.length; i++) {
                var image = this.images[i];
                if (image.cancelLevel >= level && (image.status == "waiting" || image.status == "loading")) {
                    Igloo.log("Try remove of: " + i)
                    if (this.remove(image.src, true)) i--;
                }
            }

            //Get the loading going again
            this._start();
        }

        this.check = function(src) {
            var id = Igloo.isIn(this.images, "src", src);

            if (id === false) return false;

            var image = this.images[id];

            return image.status;
        }
        this.isLoaded = function(src) {
            return this.check(src) == "loaded";
        }
        this.info = function(src) {
            var id = Igloo.isIn(this.images, "src", src);
            if (id === false) id = Igloo.isIn(this.images, "full_src", src);

            if (id === false) return false;

            var image = this.images[id];

            return image;
        }

        //Sometimes we need to manage the loading from the cache into the browser too...
        this.inlineTrigger = function(onComplete, delay) {
            var index = this.inlineTriggers.length
            if (!Igloo.defined(delay)) delay = 10;

            this.inlineTriggers[index] = {
                onComplete: onComplete,
                delay: delay
            };
            return " onload=\"Preloader.rit(" + index + ")\" ";
        }
        this.addInlineTrigger = function($img, onComplete, delay) { //Careful, needs to be added before the src... untested
            var index = this.inlineTriggers.length
            if (!Igloo.defined(delay)) delay = 10;

            this.inlineTriggers[index] = {
                onComplete: onComplete,
                delay: delay
            };
            $img.attr("onload", "Preloader.rit(" + index + ")");
        }
        this.runInlineTrigger = function(index) {

            var t = this.inlineTriggers[index];
            if (t) {
                if (t && typeof(t.onComplete) == "function") {
                    if (!t.delay) t.onComplete();
                    else setTimeout(t.onComplete, t.delay);
                }
                this.inlineTriggers[index] = null;
            }
        }
        this.rit = this.runInlineTrigger;

        //Private methods
        this._start = function() {

            //if(this.state == "loading") 			return true;
            if (this.image_count == this.load_count) return true;


            //Find next id to load
            var priorityList = [];
            for (var i in this.images) {
                if (this.images[i].status != "waiting") continue;
                var p = this.images[i].priority;
                if (!p) p = 1;
                if (!priorityList[p]) priorityList[p] = i;
            }

            /*Igloo.log("Waiting:")
            for(var i in this.images) if(this.images[i].status != "loaded") Igloo.log(this.images[i].src + " " + this.images[i].priority);
            Igloo.log("-------")*/

            for (var i in priorityList) {
                var id = priorityList[i];
                if (id) break;
            }

            if (!id) return;

            var image = this.images[id];
            //Igloo.log("start " + image.src)


            this.state = "loading";

            image.status = "loading";
            if (image.size) this._startTimer(image);
            this.img.src = image.full_src //This actually triggers the loading of the image
            //if(this.img.complete) this._onImageLoad(); //To check
        }

        this._onImageLoad = function(e) {
            var full_src = this.img.src;

            this.state = "waiting";

            var id = Igloo.isIn(this.images, "full_src", full_src);

            if (!id) {
                Igloo.log("Preload error from image load: can't find " + this.img.src);
                this._start();
                return false;
            }

            var image = this.images[id];

            if (image.start_time) this._endTimer(image);

            image.status = "loaded";
            image.width = this.img.width;
            image.height = this.img.height;
            this.load_count++;


            this._callOnComplete(image, true)

            //Igloo.log("Completed " + id + " " + image.priority + " " + image.src)

            if (this.image_count > this.load_count) this._start();
        }

        this._callOnComplete = function(image, success) {

            var c;
            for (var i in image.onCompleteArray)
                if (c = image.onCompleteArray[i]) {

                    var f = Igloo.defined(c['f']) ? c['f'] : c;
                    var s = 1; //Igloo.defined(c['s']) ? c['s'] : false; //Whether we should run on an error / cancel
                    if (s || success) {
                        image.onCompleteArray[i] = null;
                        if (f) f(image.src, success, image);
                    }
                }
            for (var i in image.onErrorArray)
                if (c = image.onErrorArray[i]) {
                    var f = Igloo.defined(c['f']) ? c['f'] : c;
                    image.onErrorArray[i] = null;
                    if (f && !success) Igloo.log("ON ERROR CALLED " + image.src)
                    if (f && !success) f(image.src, success, image);
                }
            this.callListeners(image.src, success, image);
        }

        this._onImageError = function() {
            var full_src = this.img.src;

            this.state = "waiting";

            var id = Igloo.isIn(this.images, "full_src", full_src);



            if (!id) {
                Igloo.log("Preload error on error: can't find " + this.img.src);
                this._start();
                return false;
            }

            var image = this.images[id];
            image.status = "waiting";
            image.errors++;

            if (image.errors > 2) {
                this.load_count++;
                image.status = "failed";
                this._callOnComplete(image, false);
            }



            this._start();
        }

        //Timer methods
        this.getSpeed = function() {
            var speed = 0;
            var weight = 0;

            if (this.speeds.length == 0) return false;

            for (var i = 0; i < this.speeds.length; i++) {
                weight += this.speeds[i].weight;
                speed += this.speeds[i].speed * this.speeds[i].weight;
            }

            var avr = Math.round(speed / weight);

            /*var sd = 0;
            for(var i = 0; i < this.speeds.length; i++) {
            	sd += (avr - this.speeds[i])*(avr - this.speeds[i]);
            }
            sd = Math.sqrt(sd/this.speeds.length);*/

            return avr;
        }

        this._startTimer = function(image) {
            var d = new Date();
            image.start_time = d.getTime();
        }

        this._endTimer = function(image) {
            var d = new Date();
            image.end_time = d.getTime();
            image.total_time = image.end_time - image.start_time;
            image.speed = (image.size / 1024) / (image.total_time / 1000);

            //Check if we think it was cached
            if (image.speed > 1000 && !image.nocache) {
                image.was_cached = true;
            } else {
                image.was_cached = false;
            }

            var weight = 1;
            if (this.speeds.length > 0) weight *= 2; //First item seems to be crap
            weight += this.speeds.length / 10; //The longer its been running, the better
            weight *= Math.log(image.size / 1000);
            image.weight = weight;

            if (!image.was_cached) {
                this.speeds.push({
                    speed: image.speed,
                    weight: image.weight
                });
            }

            image.avg_speed = this.getSpeed();

            //Igloo.log("T : " + image.total_time + ", " + image.size + "b, speed:" + image.speed + " W " + image.weight + " , " + image.avg_speed )
        }

        this._addCache = function(src) {
            var new_src,
                d = new Date();

            //Check for ?
            if (src.indexOf("?") == -1) {
                new_src = src + "?" + d.getTime();
            } else {
                new_src = src + "&" + d.getTime();
            }

            return new_src;
        }

        //Standard listener methods
        this.addListener = function(f) {
            this.listeners.push(f);
        }

        this.removeListener = function(f) {
            for (var i in this.listeners) {
                if (this.listeners[i] == f) {
                    this.listeners.splice(i, 1);
                    return;
                }
            }
        }

        this.callListeners = function() {
            for (var i in this.listeners) {
                this.listeners[i].apply(this, arguments);
            }
        }

    }
};
Preloader.init();

var Preloader2 = {
    init: function() {
        var _this = this;

        this.images = [];
        //this.state 			= "waiting";

        this.image_count = 0;
        this.loading_count = 0;
        this.loaded_count = 0;
        this.concurrent = 2;

        this.id_count = 0;
        this.lastId = 0;

        this.speeds = [];

        this.blank_image = "/images/blank.gif";

        this.listeners = [];
        this.inlineTriggers = [];

        //this.img = new Image();
        //this.img.onload = function(){_this._onImageLoad();} //function wrapper otherwise onImageLoad wont be ready
        //this.img.onerror = function(){_this._onImageError()} //function wrapper otherwise onImageLoad wont be ready

        this.add = function(options) {



            if (typeof(options) == "string") options = {
                src: options
            };

            var src = options.src;

            if (!src) {
                Igloo.log("Preload error: asked to load empty string.");
                return false;
            }



            var image, imageExists = this.getImageBySrc(src);
            if (imageExists) {
                image = imageExists;
            } else {
                image = this.create(src);
            }




            //setup the item
            var id = this.id_count++;
            this.lastId = id;
            var dfd = jQuery.Deferred();
            var promise = dfd.promise();
            var top = "top" in options ? options.top : false;
            var priority = "priority" in options && options.priority ? options.priority * 1 : 2; //Default to priority 2

            var tags = options.tags ? options.tags : (options.tag ? [options.tag] : []);
            //Igloo.log("Preload: " +priority +  (top ? "(top)" : "") + " " + src );

            var item = {
                id: id,
                priority: priority,
                top: top,
                dfd: dfd,
                promise: promise,
                tags: tags
            }

            image.items.push(item);
            image.items.sort(function(a, b) {
                if (a.priority > b.priority) return 1;
                if (a.priority < b.priority) return -1;
                //Same prioirty
                if (a.top && !b.top) return -1;
                if (b.top && !a.top) return 1;
                //Default to ids
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;
                return 0;
            });

            if (image.status == "cancelled") image.status = "new";

            image.loaded.then(function(e) {
                dfd.resolve(e);
            });


            if (imageExists) {
                this._check();
            } else {
                //If it's a new one, don't actually run it right away as we might add multiples with different priorities.
                setTimeout(Igloo.delegate(this, function() {
                    this._check();
                }), 1);
            }

            return promise;
        }

        this.create = function(src) {

            var dfd = jQuery.Deferred();
            var promise = dfd.promise();

            var id = this.image_count++;
            var cleanSrc = nav.cleanUrl(src);

            var details = {
                id: id, //This is a little confusing as it's the first id.
                src: cleanSrc,
                dfd: dfd,
                loaded: promise,
                status: "new",
                attempts: 0,
                items: []
            }
            this.images.push(details);

            return details;
        }
        this.getLastId = function() {
            return this.lastId;
        }
        this.getImageById = function(id) {
            return Igloo.searchArray(this.images, "id", id);
        }
        this.getImageByItemId = function(id) {
            var match = false;
            for (var i = 0, ii = this.images.length; i < ii; i++) {
                var image = this.images[i];
                for (var j = 0, jj = image.items.length; j < jj; j++) {
                    if (image.items[j].id === id) {
                        match = image;
                        break;
                    }
                }
                if (match) break;
            }
            return match;
        }
        this.getItemByItemId = function(id, image) {
            if (!image) image = this.getImageByItemId(id);
            return Igloo.searchArray(image.items, "id", id);
        }
        this.getItemsByItemTag = function(tag) {
            var items = [];
            for (var i = 0, ii = this.images.length; i < ii; i++) {
                var image = this.images[i];

                for (var j = 0, jj = image.items.length; j < jj; j++) {
                    var item = image.items[j];
                    if (Igloo.isIn(item.tags, tag) !== false) items.push(item);
                }
            }
            return items;
        }
        this.getImageBySrc = function(src) {
            var cleanSrc = src ? nav.cleanUrl(src) : src;
            var image = Igloo.searchArray(this.images, "src", cleanSrc);
            return image;
        }

        this.cancel = function(id) {
            //Igloo.log("Cancel: "+id);
            var image = this.getImageByItemId(id);

            if (!image) return false;

            var item = this.getItemByItemId(id, image);
            if (!item) return false;

            if (image.status == "loaded") {
                //	Igloo.log("(completed already)")
                return true;
            }

            //Remove it (item still exists)
            image.items.splice(Igloo.isIn(image.items, "id", id), 1);

            if (image.items.length == 0) {
                if (image.status == "loading") {
                    this.cancelLoading(image.id);
                } else {
                    image.status = "cancelled";
                }
            }

            item.dfd.reject();

            this._check();
        }

        this.cancelTag = function(tag) {
            var items = this.getItemsByItemTag(tag);
            for (var i in items) {
                var item = items[i];
                this.cancel(item.id);
            }
        }

        this.cancelLoading = function(id) {

            var image = this.getImageById(id);
            if (!image) return;

            var status = image.status;
            image.status = "cancelled";

            if (status === "loading") {
                this.loading_count--;
                this.abortLoading(image);
            }

        }

        this.pauseLoading = function(id) {

            var image = this.getImageById(id);
            if (!image) return;

            var status = image.status;
            image.status = "new";
            if (status === "loading") {
                this.loading_count--;
                this.abortLoading(image);
            }
        }

        this.abortLoading = function(image) {
            //This needs the statuses triggering afterwards
            image.jqXHR.abort();
        }

        /*this.cancelSrc = function(src){
         var image = this.getImageBySrc(src);
         this.cancel(image.id);
         }*/


        this.checkSrc = function(src) {
            return this.getStatus(src) == "loaded";
        }
        this.getStatus = function(src) {
            var image = this.getImageBySrc(src);
            return image.status;
        }
        this.getDetails = function(src) {
            return this.getImageBySrc(src);
        }


        this.inlineTrigger = function(onComplete, delay) {
            var index = this.inlineTriggers.length
            if (!Igloo.defined(delay)) delay = 10;

            this.inlineTriggers[index] = {
                onComplete: onComplete,
                delay: delay
            };
            return " onload=\"Preloader2.rit(" + index + ")\" ";
        }
        this.addInlineTrigger = function($img, onComplete, delay) { //Careful, needs to be added before the src... untested
            var index = this.inlineTriggers.length
            if (!Igloo.defined(delay)) delay = 10;

            this.inlineTriggers[index] = {
                onComplete: onComplete,
                delay: delay
            };
            $img.attr("onload", "Preloader2.rit(" + index + ")");
        }
        this.runInlineTrigger = function(index) {

            var t = this.inlineTriggers[index];
            if (t) {
                if (t && typeof(t.onComplete) == "function") {
                    if (!t.delay) t.onComplete();
                    else setTimeout(t.onComplete, t.delay);
                }
                this.inlineTriggers[index] = null;
            }
        }
        this.rit = this.runInlineTrigger;

        //Private methods
        this._check = function() {
            if (this.image_count == this.loaded_count) return true;

            var loadingImages = Igloo.searchArray(this.images, "status", "loading", true);
            for (var i in loadingImages) {
                var image = loadingImages[i];
                if (image.items[0].priority == 1 && image.items[0].top) {
                    return;
                }
            }
            var newImages = Igloo.searchArray(this.images, "status", "new", true);
            if (!newImages || newImages.length == 0) return true;
            newImages.sort(function(a, b) {
                if (a.items[0].priority > b.items[0].priority) return 1;
                if (a.items[0].priority < b.items[0].priority) return -1;
                //Same prioirty
                if (a.items[0].top && !b.items[0].top) return -1;
                if (b.items[0].top && !a.items[0].top) return 1;
                //Same everything
                if (a.items[0].id > b.items[0].id) return 1;
                if (a.items[0].id < b.items[0].id) return -1;
                return 0;
            });


            //If we've got a priority cancel everything else.
            var topItem = newImages[0].items[0];

            if (this.loading_count && topItem.priority == 1) { // && topItem.top === true
                for (var j = 0; j < this.images.length; j++) {
                    var img = this.images[j];
                    if (img.status == "cancelled") continue;
                    if (img.items[0].priority == 1 && !topItem.top) continue; //Don't do this for other priority 1s
                    if (img.status == "loading") this.pauseLoading(img.id);
                }
            }

            var hasPriority = newImages[0].items[0].priority == 1;
            for (var i = 0; i < newImages.length; i++) {
                var image = newImages[i];

                if (hasPriority && image.items[0].priority !== 1) break; //They're in order, so this will end once all pri 1s have been added
                //Allow to go over concurrent if it's priority 1
                if (this.loading_count < this.concurrent || hasPriority) {
                    this.load(image.id);
                    if (image.items[0].priority == 1 && image.items[0].top) break; //Don't load more
                }
            }
        }

        this.load = function(id) {

            var image = this.getImageById(id);
            if (image && image.status === "new") {
                this.loading_count++;
                image.status = "loading";
                image.jqXHR = $.ajax({
                    url: image.src,
                    method: "GET"
                });
                image.jqXHR.then(Igloo.delegate(this, function() {
                    if (image.status == "loading") this.imageLoad(id);
                }), Igloo.delegate(this, Igloo.delegate(this, function() {

                    if (image.status == "loading") { //ie this was unexpected behaviour
                        this.loading_count--;
                        image.dfd.reject(new Error("Couldn't load ajax version of " + image.src));
                        this._check();
                        image.status == "failed";
                    }
                })));
            } else {
                if (!image) new Error("Image not found");
                else image.dfd.reject(new Error("Image called load when not new"));
                this._check();
            }
        }

        this.imageLoad = function(id) {

            var image = this.getImageById(id)
            if (!image) throw new Error("shouldn't be called - no image for id: " + id);
            if (image.status !== "loading") throw new Error("shouldn't be called - I'm still loading for: " + id);

            var img = new Image();
            img.onload = Igloo.delegate(this, function(e) {
                this.loading_count--;
                this.loaded_count++;
                image.status = "loaded";
                image.width = img.width;
                image.height = img.height;
                image.ratio = image.width / image.height;
                image.dfd.resolve(image)
                this._check();
            });
            img.onerror = Igloo.delegate(this, function() {
                image.status = "failed";
                this.loading_count--;
                this.loaded_count++;
                image.dfd.reject(image);
                this._check();
            });
            img.src = image.src;

        };


    }
};
Preloader2.init();


//History class
//V1-01 - 13/01/2011
//V1-02 - 17/01/2011 - prevent default on links
//V1-03 - 18/01/2011 - accept jquery object in change, fixed initial page bug, added base
//V1-04 - 07/02/2011 - added onclick shortcut in waterfront
//V1-05 - 11/02/2011 - added ctrl clicks...
//V1-06 - 13/02/2011 - added a instant trigger for listenters

//We have settings for use history only, use history or hash, or none.
//History can store data for each state, but hash can't. We need an option for blank with data or blank without data

//We might need some kind of update that sets the state of the first page to whatever the first page really is - we're getting a funny history thing happening.

var Jhistory = {
    init: function() {

        this.settings = {
            useHistory: true,
            useSwfAddress: false
        }

        this.hasHistory = false;
        this.listeners = [];
        this.started = false;
        this.initial_address = document.location.pathname;
        this.base = "";
        this.started = false;
        this.ctrl = false;

        this.current = [];
        this.previous = [];

        this.class_name = "Jhistory";

        this.setup = function() {
            this.hasHistory = this.settings.useHistory && !(typeof history.pushState === 'undefined')
            if (this.hasHistory) {
                this.setupHTML5history();
            } else if (this.settings.useSwfAddress) {
                this.setupSwfAddress();
            }

            $(document).keydown(function(e) {
                if (e.which == 17) Jhistory.ctrl = true;
            });
            $(document).keyup(function(e) {
                if (e.which == 17) Jhistory.ctrl = false;
            });

            this.current = this.getParts();

        }

        this.setupHTML5history = function() {
            var _this = this;
            window.onpopstate = function(e) {
                if (!_this.started) {
                    _this.started = true;
                    return false;
                }
                _this.onChange(e.state != null ? e.state : _this.getURL());
            };
            setTimeout(function() {
                _this.started = true
            }, 500);
        }

        this.setBase = function(base) {

            this.base = base;
            if (this.hasHistory) return;

            var path = document.location.pathname;
            if (path != this.base) {
                var p = path.substr(this.base.length - 1);
                if (p.substr(0, 1) == "/") p = p.substr(1);
                document.location.href = this.base + "#/" + p;
            }
        }

        this.getURL = function() {
            if (this.hasHistory) {
                var v = document.location.pathname;
                if (v.substr(0, 1) == "/") v = v.substr(1);
                if (this.base) {
                    var b = this.base;
                    if (b.substr(0, 1) == "/") b = b.substr(1);
                    if (v.substr(0, b.length) == b) v = v.substr(b.length);
                }
            } else {
                var v = document.location.hash.substr(1);
                if (v.substr(0, 1) == "/") v = v.substr(1);
            }
            return v;
        }

        this.getParts = function() {

            if (this.hasHistory) {
                var v = document.location.pathname;
                if (v.substr(0, 1) == "/") v = v.substr(1);
                if (this.base) {
                    var b = this.base;
                    if (b.substr(0, 1) == "/") b = b.substr(1);
                    if (v.substr(0, b.length) == b) v = v.substr(b.length);
                }
            } else {
                var v = document.location.hash.substr(1);
                if (v.substr(0, 1) == "/") v = v.substr(1);
                if (v == ".") v = "";
            }

            var parts = v.split('/');
            while (parts.length > 1 && parts[parts.length - 1] == "") {
                parts.pop();
            }

            if (!parts) parts = [v];
            return parts;
        }

        this.setupSwfAddress = function() {
            var _this = this;

            //Check if we're on the base
            var fireChange = function(e) {
                _this.onChange(e.value)
            }
            SWFAddress.addEventListener(SWFAddressEvent.CHANGE, fireChange);
        }

        this.change = function(address, title, show) {
            //event.preventDefault();			

            if (this.ctrl) {
                window.open(address, '_blank');
                return false;
            }

            if (!Igloo.defined(show)) show = true;

            var state = address;
            if (address.substr(0, 1) == "/") state = address.substr(1);

            if (this.hasHistory && !show) {
                state = {
                    address: '/',
                    data: state
                }
                address = "/";
            }
            if (this.hasHistory) {
                history.pushState(state, title ? title : address, address);
                this.onChange(state);
            } else {
                var s = state.substr(this.base.length - 1);
                var s = s.replace("#", "!");
                SWFAddress.setValue("/" + (s ? s : "."));
            }
            if (title) document.title = title;

            return false;
        }

        this.onChange = function(v, c) {

            var vp = this.url2parts(v);
            var up = this.getParts();

            if (this.hasHistory && vp[0] != up[0]) {
                //Only listen if what we're told matches what we expect!
                return false;
            }
            /*if(this.hasHistory && !this.started){ //This has been moved the the pop event for clarity (in case we call onChange ourselves first)
            	//history.replaceState(this.initial_address);
            	this.started = true;
            	return false;
            }*/
            /*
            if(!this.hasHistory && !this.started){
            	this.started = true;
            	return false;	
            }*/

            //If the state is an object rather than just an address
            if (typeof(v) == "object") {
                v = v.data;
            }
            var parts = this.url2parts(v);
            var hash = this.url2hash(v);

            this.previous = this.current;
            this.current = parts;
            var changes = this.findChanges(this.previous, this.current);

            for (var i in this.listeners) {
                this.listeners[i](parts, this.previous, changes, hash);
            }
        }

        this.findChanges = function(previous, current) {
            var changes = [];
            for (var i = 0; i < Math.max(previous.length, current.length); i++) {
                var a = i < previous.length ? previous[i] : "";
                var b = i < current.length ? current[i] : "";
                changes[i] = a != b;
            }
            return changes;
        }

        //V101 - add for iid
        this.url2parts = function(url) {


            if (!url) url = "";

            if (url.substr(0, 1) == "/") url = url.substr(1);

            if (url == ".") url = ""

            //Remove hashes and ! s
            url = url.split("#")[0].split("!")[0];

            if (!this.hasHistory) {
                url = this.base + url;
            }
            if (url.substr(0, 1) == "/") url = url.substr(1);

            //Get parts
            var parts = url.split('/');
            if (!parts) parts = [url];

            return parts;
        }

        this.url2hash = function(url) {
            var ph = url.split("#")
            if (ph.length < 2) ph = url.split("!");
            if (ph.length > 1) return ph[1];
        }

        //V101 - Added for waterfront
        this.onclick = function(event) {
            var href = $(this).attr("href");
            if (!href || href == "#") return true;

            //We need to get it in a simple form...
            var base = "http://" + window.location.host + "/";
            if (href.substr(0, base.length) == base) {
                href = href.substr(base.length - 1);
            }
            if (href.substr(0, 4) == "http") {
                return true;
            }
            event.preventDefault();

            Jhistory.change(href);
            return false;
        }




        this.addListener = function(f, trigger) {
            this.listeners.push(f);
            if (trigger && !this.hasHistory && this.listeners.length == 1) {
                var p = this.getParts();
                if (p[0]) f(p);
            }
        }

        this.removeListener = function(f) {
            for (var i in this.listeners) {
                if (this.listeners[i] == f) {
                    this.listeners.splice(i, 1);
                    return;
                }
            }
        }

        this.setup();
    }
};
Jhistory.init();


//A class which gives as a function that takes t and returns acceleration, velocity and position. Or just position if requested
//Working are in James's igloo emails, with subject "accelerate position"
//t_0 is start point, t_1 is mid point (where acceleration swaps direction) and t_2 is end point.
var AcceleratePosition = {

    t: null,
    x: null,
    v: null,
    a: null,

    t_0: null,
    t_1: null,
    t_2: null,

    x_0: null,
    x_1: null,
    x_2: null,

    v_0: null,
    v_1: null,
    v_2: null,

    a_0: null,
    a_1: null,
    a_2: null,

    type: null,

    reset_data: function() {

    },

    fixed_acceleration: function(_x_0, _x_2, _v_0, _a) {
        this.type = "fixed_acceleration";

        //Defaults
        if (!Igloo.defined(_a)) _a = 1;

        this.t_0 = 0;

        this.x_0 = _x_0;
        this.x_2 = _x_2;

        this.v_0 = _v_0;
        this.v_2 = 0;

        this.a_0 = _a * (this.x_0 < this.x_2 ? 1 : -1);
        this.a_1 = -this.a_0;
        this.a_2 = 0;

        this.t_1 = this.calculate_t_1();
        if (this.t_1 < 0) return this.fixed_acceleration(_x_0, _x_2, _v_0, -_a);

        this.t_2 = this.calculate_t_2();
        this.v_1 = this.calculate_v_1();
        this.x_1 = this.get_x(this.t_1);
        this.v_1 = this.get_x(this.t_1);

        //Closure
        var _this = this;
        var t_0 = 0;
        var t_1 = this.t_1;
        var t_2 = this.t_2;
        var x_0 = this.x_0;
        var x_1 = this.x_1;
        var x_2 = this.x_2;
        var v_0 = this.v_0;
        var v_1 = this.v_1;
        var v_2 = this.v_2;
        var a_0 = this.a_0;
        var a_1 = this.a_1;
        var a_2 = this.a_2;
        return function(t, full) {
            var x = _this.get_x_closure(t, t_1, t_2, x_0, x_1, v_0, a_0);
            var v = _this.get_v_closure(t, t_1, t_2, x_0, x_1, v_0, a_0);
            var a = _this.get_a_closure(t, t_1, t_2, x_0, x_1, v_0, a_0);
            if (!full) return x;
            else return {
                t: t,
                x: x,
                v: v,
                a: a,
                t_0: t_0,
                t_1: t_1,
                t_2: t_2,
                x_0: x_0,
                x_1: x_1,
                x_2: x_2,
                v_0: v_0,
                v_1: v_1,
                v_2: v_2,
                a_0: a_0,
                a_1: a_1,
                a_2: a_2
            };
        }

    },


    calculate_t_1: function() {
        var A = 1;
        var B = 2 / this.a_0 * this.v_0;
        var C = 1 / this.a_0 * (this.x_0 - this.x_2 + this.v_0 * this.v_0 / (2 * this.a_0) - this.v_2 * this.v_2 / (2 * this.a_0));

        var r = this.quadratic(A, B, C);

        return Math.max(r[0], r[1]);
    },

    calculate_t_2: function() {
        return this.t_1 + (this.v_0 - this.v_2) / this.a_0 + this.t_1
    },

    calculate_v_1: function() {
        return this.v_0 + this.a_0 * this.t_1;
    },

    quadratic: function(a, b, c) {
        var r = Math.sqrt(b * b - 4 * a * c);
        return [(-b + r) / (2 * a), (-b - r) / (2 * a)];
    },

    rounding: function(n) {
        var acc = 5;
        var multi = Math.pow(10, acc);
        return Math.round(n * multi) / multi;
    },

    get_x: function(t) {

        return this.get_x_closure(t, this.t_1, this.t_2, this.x_0, this.x_1, this.v_0, this.a_0);

    },

    get_x_closure: function(t, t_1, t_2, x_0, x_1, v_0, a) {

        if (t < 0) t = 0;
        if (t > t_2) t = t_2;

        if (t <= t_1) {
            return this.rounding(x_0 + v_0 * t + a * t * t / 2);
        } else {
            return this.rounding(x_1 + (v_0 + a * t_1) * (t - t_1) - a * (t - t_1) * (t - t_1) / 2);
        }

    },

    get_v_closure: function(t, t_1, t_2, x_0, x_1, v_0, a) {

        if (t < 0) t = 0;
        if (t > t_2) t = t_2;

        if (t <= t_1) {
            return this.rounding(v_0 + a * t);
        } else {
            return this.rounding(v_0 + a * t_1 - a * (t - t_1));
        }

    },

    get_a_closure: function(t, t_1, t_2, x_0, x_1, v_0, a) {

        if (t < 0) t = 0;
        if (t > t_2) t = t_2;

        if (t <= t_1) {
            return a;
        } else {
            return -a;
        }

    },


    //** Animation bits of this **//
    /*
     moveTo : function(final_x, details){
     if(!details.initial_x) 	details.initial_x 	= 0;
     if(!details.interval) 	details.interval 	= 30;

     //initial_x
     //internval

     }*/


    linear: function(_x_0, _x_2, _v_0, _a) {
        this.type = "linear";

        //Defaults
        if (!Igloo.defined(_a)) _a = 1;

        this.t_0 = 0;

        this.x_0 = _x_0;
        this.x_2 = _x_2;

        this.v = _a;

        if (this.x_2 < this.x_0) this.v = -this.v;

        this.t_2 = (this.x_2 - this.x_0) / this.v;

        //Closure
        var _this = this;
        var t_0 = 0;
        var t_1 = this.t_1;
        var t_2 = this.t_2;
        var x_0 = this.x_0;
        var x_1 = this.x_1;
        var x_2 = this.x_2;
        var v_0 = this.v;
        var v_1 = this.v;
        var v_2 = this.v;
        var a_0 = this.a_0;
        var a_1 = this.a_1;
        var a_2 = this.a_2;
        return function(t, full) {

            var x = t < t_2 ? x_0 + t * v_0 : x_2;
            var v = v_0;
            var a = 0;
            if (!full) return x;
            else return {
                t: t,
                x: x,
                v: v,
                a: a,
                t_0: t_0,
                t_1: t_1,
                t_2: t_2,
                x_0: x_0,
                x_1: x_1,
                x_2: x_2,
                v_0: v_0,
                v_1: v_1,
                v_2: v_2,
                a_0: a_0,
                a_1: a_1,
                a_2: a_2
            };
        }

    },

    fixed: function(_x_0, _x_2, _v_0, _a) {
        this.type = "fixed";

        //Closure
        var x_2 = _x_2;
        return function(t, full) {

            if (!full) return x_2;
            else return {
                t: t,
                x: x_2,
                v: 0,
                a: 0,
                t_0: 0,
                t_1: 0,
                t_2: 0,
                x_0: x_2,
                x_1: x_2,
                x_2: x_2,
                v_0: 0,
                v_1: 0,
                v_2: 0,
                a_0: 0,
                a_1: 0,
                a_2: 0
            };
        }

    },

};

var AcceleratePositionToggle = function(settings) {

    this.current_x = 0;
    this.current_v = 0;
    this.current_step = 0;
    this.current_interval = false;
    this.current_details = false;
    this.interval_time = 30;

    this.update_function = false;

    this.status = "off";
    this.a = 1;
    this.af = null;

    this.active = false;

    this.setup = function(type, uf, x, a, onStart, onComplete) {
        this.update_function = uf;
        this.type = type;
        if (Igloo.defined(x)) this.current_x = x;
        if (Igloo.defined(a)) this.a = a;
        this.onComplete = onComplete ? onComplete : null;
        this.onStart = onStart ? onStart : null;
        return this;
    };

    this.change = function(n, a) {
        var instant = false;
        if (Igloo.defined(a)) {
            //	if(a === true) 	instant = true;
            //	else			this.a = a;
        }
        if (n == this.current_x && this.current_v == 0) return this.complete();

        this.start(n, a);
    };

    this.on = function(a) {
        this.status = "on";
        this.start(1, a);
    };

    this.off = function(a) {
        this.status = "off";
        this.start(0, a);
    };

    this.toggle = function() {
        if (this.status == "on") return this.off();
        else return this.on();
    };

    this.start = function(end, a) {



        //Is the current motion interrupted?
        if (this.active) {
            var ms = +new Date();
            var r = Math.min(1, (ms - this.start_ms) / this.interval_time);
            this.update(this.current_t + r * this.interval_time / 1000);
        }

        this.active = true;

        var type = this.type;
        if (a === true) type = "fixed";
        if (a === false) a = undefined;


        clearInterval(this.interval);
        if (type === "accelerate") this.af = AcceleratePosition.fixed_acceleration(this.current_x, end, this.current_v, typeof(a) !== "undefined" ? a : this.a);
        else if (type === "fixed") this.af = AcceleratePosition.fixed(this.current_x, end, this.current_v, typeof(a) !== "undefined" ? a : this.a);
        else this.af = AcceleratePosition.linear(this.current_x, end, this.current_v, typeof(a) !== "undefined" ? a : this.a);

        this.current_step = 0;
        this.current_details = this.af(0, true);

        if (this.onStart) this.onStart(this.current_x, this.current_details);
        this.step();
        this.interval = setInterval(Igloo.delegate(this, this.step), this.interval_time);

    };

    this.step = function() {

        //Igloo.log(this.current_t + " " + this.current_step + " " + this.interval_time);

        this.update(this.current_step * this.interval_time / 1000);

        if (this.update_function) this.update_function(this.current_x);

        if (typeof(this.current_details) == "object") {
            if (this.current_t >= this.current_details.t_2) this.complete();
        } else {
            if (this.current_t >= 1) this.complete();
        }
        this.current_step++;
    };

    this.update = function(t) {
        this.start_ms = +new Date();
        this.current_t = t;
        this.current_details = this.af(this.current_t, true);
        this.current_x = typeof(this.current_details) == "object" ? this.current_details.x : this.current_details;
        this.current_v = typeof(this.current_details) == "object" ? this.current_details.v : 0;
    };

    this.complete = function(triggerComplete) {
        if (typeof(triggerComplete) == "undefined") triggerComplete = true;
        clearInterval(this.interval);
        this.current_v = 0;
        this.active = false;
        if (this.onComplete) this.onComplete(this.current_x);
    }

    this.setup(settings.type ? settings.type : "accelerate", settings.onChange, settings.x ? settings.x : 0, settings.a ? settings.a : 0, settings.onStart, settings.onComplete);

    this.stop = function() {
        this.complete(false);
    };

    this.set = function(x) {
        this.current_x = x;
    };

    this.destroy = function() {
        clearInterval(this.interval);
    }

}


// MULTIPLE ON COMPLETE CLASS
// V001 - IID - 20120210
// Example useage:
// var onComplete = MultipleOnComplete.create(function(){alert("all done")});
// doSomething(onComplete());
// doSomething2(onComplete());
function MultipleOnComplete(onComplete) {
    this.isComplete = false;
    this.total = 0;
    this.count = 0;
    this.items = [];
    this.singles = [];
    this.labels = [];
    this.onComplete = onComplete;
    MultipleOnComplete.instance = MultipleOnComplete.instance ? MultipleOnComplete.instance + 1 : 1;
    this.instance = MultipleOnComplete.instance;
}
MultipleOnComplete.prototype.add = function(label, singleOnComplete) {

    if (typeof(label) == "function") {
        singleOnComplete = label;
        label = "";
    }

    var index = this.total++;

    if (singleOnComplete) this.singles[index] = singleOnComplete;

    this.items[index] = false;
    if (label) {
        this.labels[index] = label;
        Igloo.log("Add listener (" + this.instance + "/" + index + "): " + label)
    }

    //var f = Igloo.pauseDelegate(1,this,this.completed,index); 
    var f = Igloo.delegate(this, this.completed, index);
    f.check = Igloo.delegate(this, this.checkIndividual, index);
    return f;
}
MultipleOnComplete.prototype.completed = function(i) {
    if (this.items[i]) return false; //Already called
    else {
        this.count++;
        this.items[i] = true;
        if (this.labels[i]) Igloo.log("Completed listener (" + this.instance + "/" + i + "): " + this.labels[i]);
        if (this.singles[i]) this.singles[i]();
        Igloo.pauseDelegate(1, this, this.checkComplete)();
    }
}
MultipleOnComplete.prototype.checkComplete = function() {
    if (this.isComplete) return true;
    if (this.count == this.total) {
        if (this.labels.length) Igloo.log("Completed multiple (" + this.instance + ")");
        this.onComplete();
        return this.isComplete = true;
    }
    return false;
}
MultipleOnComplete.prototype.checkIndividual = function(i) {
    return this.items[i];
}
MultipleOnComplete.prototype.ff = function(_this, func, label) { //this submits the onComplete unless the function returns absolutely false
    var onComplete = this.add(label);
    var result = Igloo.delegate(_this, func)(onComplete);
    if (result !== false) onComplete();
    return result;
}
MultipleOnComplete.prototype.fff = function(_this, func, onComplete, label) { //this submits the onComplete unless the function returns absolutely false
    var result = Igloo.delegate(_this, func)(onComplete);
    if (result !== false) onComplete();
    return result;
}
//Factory method, creates a unique onComplete() creator.
MultipleOnComplete.create = function(onComplete) {
    var instance = new MultipleOnComplete(onComplete);
    var f = Igloo.delegate(instance, instance.add);
    f.f = Igloo.delegate(instance, instance.ff);
    f.ff = Igloo.delegate(instance, instance.fff);
    return f;
}


//-------------------- JQUERY COOKIES -------------------------//


// JavaScript Document
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 1000));
                //date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '; path=/';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

Igloo.getCookie = function(name) {
    return JSON.parse(jQuery.cookie(name));
};
Igloo.setCookie = function(name, value, options) {
    var r = JSON.stringify(value);
    return r ? jQuery.cookie(name, r, options) : false;
}

// JavaScript Document

Function.prototype.inheritsFrom = function(parentClassOrObject) {
    if (parentClassOrObject.constructor == Function) {


        //Normal Inheritance 
        var n = new parentClassOrObject;
        for (var i in n) this.prototype[i] = n[i];

        this.prototype.__constructor = this;
        this.prototype.__parent = parentClassOrObject.prototype;
    } else {
        //Pure Virtual Inheritance 
        this.prototype = parentClassOrObject;
        this.prototype.__constructor = this;
        this.prototype.__parent = parentClassOrObject;
    }

    //Standard register static methods
    if (this.abstract) {
        if (parentClassOrObject.register && !this.register) this.register = parentClassOrObject.register;
    }

    if (typeof(parentClassOrObject.register) == "function" && !this.abstract) parentClassOrObject.register(this);

    return this;
}
Function.prototype.isLive = function() {
    //Igloo.log(this.__constructor)
}

function BaseClass() {}
BaseClass.prototype.destroy = function() {}

function EventTarget() {
    //this._listeners = {};
    //this.saved = [];
    //Igloo.log(this)

    EventTarget.count = EventTarget.count ? EventTarget.count + 1 : 1;
    if (!EventTarget.countListeners) EventTarget.countListeners = 0;
}
EventTarget.inheritsFrom(BaseClass);
EventTarget.prototype.addListener = function(type, listener, single) {
    if (!this._listeners) this._listeners = [];
    if (typeof this._listeners[type] == "undefined") {
        this._listeners[type] = [];
    }

    //Igloo.log("AD list")
    //Igloo.log(this)

    //this.saved.push("test");

    this._listeners[type].push({
        func: listener,
        single: single
    });
    EventTarget.countListeners++;

    //Igloo.log("Listener count: " + (this.className?"("+this.className+")" :"") + " " + type + " " + this._listeners[type].length);

    return listener;
}
EventTarget.prototype.addListenerOnce = function(type, listener, single) {
    this.removeListener(type, listener, single);
    return this.addListener(type, listener, single);
}
EventTarget.prototype.fire = function(event, object) {

    if (typeof event == "string") {
        event = {
            type: event
        };
    }
    if (!event.target) {
        event.target = this;
    }

    if (!event.type) { //false
        throw new Error("Event object missing 'type' property.");
    }
    event = Igloo.merge(object, event);
    if (event.preventDefault) event.preventDefault();

    if (this._listeners && this._listeners[event.type] instanceof Array) {
        var listeners = this._listeners[event.type];
        for (var i = 0, len = listeners.length; i < len; i++) {
            if (!listeners[i]) continue;
            var func = listeners[i].func;
            if (listeners[i].single) {
                this.removeListener(event.type, func)
            }
            func.call(this, event);
        }
    }
}
EventTarget.prototype.removeListener = function(type, listener) {
    //if(!type || !listeners) Igloo.log("error: Didn't specify what to remove from listener")
    if (this._listeners && this._listeners[type] && this._listeners[type] instanceof Array) {

        var listeners = this._listeners[type];
        for (var i = 0, len = listeners.length; i < len; i++) {
            if (!Igloo.defined(listener) || listeners[i].func === listener) {
                listeners.splice(i, 1);
                EventTarget.countListeners--;
                break;
            }
        }
    }
    return this;
}
EventTarget.prototype.destroy = function() {
    this._listeners = null;
    EventTarget.count--;
    this.parent.destroy();
};;
(function() {
    'use strict';

    /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

    /*jslint browser:true, node:true*/
    /*global define, Event, Node*/


    /**
     * Instantiate fast-clicking listeners on the specified layer.
     *
     * @constructor
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    function FastClick(layer, options) {
        var oldOnClick;

        options = options || {};

        /**
         * Whether a click is currently being tracked.
         *
         * @type boolean
         */
        this.trackingClick = false;


        /**
         * Timestamp for when click tracking started.
         *
         * @type number
         */
        this.trackingClickStart = 0;


        /**
         * The element being tracked for a click.
         *
         * @type EventTarget
         */
        this.targetElement = null;


        /**
         * X-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartX = 0;


        /**
         * Y-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartY = 0;


        /**
         * ID of the last touch, retrieved from Touch.identifier.
         *
         * @type number
         */
        this.lastTouchIdentifier = 0;


        /**
         * Touchmove boundary, beyond which a click will be cancelled.
         *
         * @type number
         */
        this.touchBoundary = options.touchBoundary || 10;


        /**
         * The FastClick layer.
         *
         * @type Element
         */
        this.layer = layer;

        /**
         * The minimum time between tap(touchstart and touchend) events
         *
         * @type number
         */
        this.tapDelay = options.tapDelay || 200;

        /**
         * The maximum time for a tap
         *
         * @type number
         */
        this.tapTimeout = options.tapTimeout || 700;

        if (FastClick.notNeeded(layer)) {
            return;
        }

        // Some old versions of Android don't have Function.prototype.bind
        function bind(method, context) {
            return function() {
                return method.apply(context, arguments);
            };
        }


        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }

        // Set up event handlers as required
        if (deviceIsAndroid) {
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener('mouseup', this.onMouse, true);
        }

        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener('touchstart', this.onTouchStart, false);
        layer.addEventListener('touchmove', this.onTouchMove, false);
        layer.addEventListener('touchend', this.onTouchEnd, false);
        layer.addEventListener('touchcancel', this.onTouchCancel, false);

        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
        // layer when they are cancelled.
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function(type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };

            layer.addEventListener = function(type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }

        // If a handler is already declared in the element's onclick attribute, it will be fired before
        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
        // adding it as listener.
        if (typeof layer.onclick === 'function') {

            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
            // - the old one won't work if passed to addEventListener directly.
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function(event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }

    /**
     * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
     *
     * @type boolean
     */
    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


    /**
     * iOS 6.0(+?) requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

    /**
     * BlackBerry requires exceptions.
     *
     * @type boolean
     */
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

    /**
     * Determine whether a given element requires a native click.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element needs a native click
     */
    FastClick.prototype.needsClick = function(target) {
        switch (target.nodeName.toLowerCase()) {

            // Don't send a synthetic click to disabled inputs (issue #62)
            case 'button':
            case 'select':
            case 'textarea':
                if (target.disabled) {
                    return true;
                }

                break;
            case 'input':

                // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
                if ((deviceIsIOS && target.type === 'file') || target.disabled) {
                    return true;
                }

                break;
            case 'label':
            case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
            case 'video':
                return true;
        }

        return (/\bneedsclick\b/).test(target.className);
    };


    /**
     * Determine whether a given element requires a call to focus to simulate click into element.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
     */
    FastClick.prototype.needsFocus = function(target) {
        switch (target.nodeName.toLowerCase()) {
            case 'textarea':
                return true;
            case 'select':
                return !deviceIsAndroid;
            case 'input':
                switch (target.type) {
                    case 'button':
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case 'radio':
                    case 'submit':
                        return false;
                }

                // No point in attempting to focus disabled inputs
                return !target.disabled && !target.readOnly;
            default:
                return (/\bneedsfocus\b/).test(target.className);
        }
    };


    /**
     * Send a click event to the specified element.
     *
     * @param {EventTarget|Element} targetElement
     * @param {Event} event
     */
    FastClick.prototype.sendClick = function(targetElement, event) {
        var clickEvent, touch;

        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }

        touch = event.changedTouches[0];

        // Synthesise a click event, with an extra attribute so it can be tracked
        clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };

    FastClick.prototype.determineEventType = function(targetElement) {

        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }

        return 'click';
    };


    /**
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.focus = function(targetElement) {
        var length;

        // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };


    /**
     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
     *
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.updateScrollParent = function(targetElement) {
        var scrollParent, parentElement;

        scrollParent = targetElement.fastClickScrollParent;

        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
        // target element was moved to another parent.
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }

                parentElement = parentElement.parentElement;
            } while (parentElement);
        }

        // Always update the scroll top tracker if possible.
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };


    /**
     * @param {EventTarget} targetElement
     * @returns {Element|EventTarget}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }

        return eventTarget;
    };


    /**
     * On touch start, record the position and scroll offset.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchStart = function(event) {
        var targetElement, touch, selection;

        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
        if (event.targetTouches.length > 1) {
            return true;
        }

        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];

        if (deviceIsIOS) {

            // Only trusted events will deselect text on iOS (issue #49)
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }

            if (!deviceIsIOS4) {

                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
                // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
                // random integers, it's safe to to continue if the identifier is 0 here.
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }

                this.lastTouchIdentifier = touch.identifier;

                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                // 1) the user does a fling scroll on the scrollable layer
                // 2) the user stops the fling scroll with another tap
                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                this.updateScrollParent(targetElement);
            }
        }

        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            event.preventDefault();
        }

        return true;
    };


    /**
     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.touchHasMoved = function(event) {
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;

        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }

        return false;
    };


    /**
     * Update the last position.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchMove = function(event) {
        if (!this.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }

        return true;
    };


    /**
     * Attempt to find the labelled control for the given label element.
     *
     * @param {EventTarget|HTMLLabelElement} labelElement
     * @returns {Element|null}
     */
    FastClick.prototype.findControl = function(labelElement) {

        // Fast path for newer browsers supporting the HTML5 control attribute
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }

        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }

        // If no for attribute exists, attempt to retrieve the first labellable descendant element
        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };


    /**
     * On touch end, determine whether to send a click event at once.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchEnd = function(event) {
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

        if (!this.trackingClick) {
            return true;
        }

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }

        if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true;
        }

        // Reset to prevent wrong click cancel on input (issue #156).
        this.cancelNextClick = false;

        this.lastClickTime = event.timeStamp;

        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;

        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];

            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }

        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }

                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {

            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
            if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
                this.targetElement = null;
                return false;
            }

            this.focus(targetElement);
            this.sendClick(targetElement, event);

            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
            if (!deviceIsIOS || targetTagName !== 'select') {
                this.targetElement = null;
                event.preventDefault();
            }

            return false;
        }

        if (deviceIsIOS && !deviceIsIOS4) {

            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }

        // Prevent the actual click from going though - unless the target node is marked as requiring
        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }

        return false;
    };


    /**
     * On touch cancel, stop tracking the click.
     *
     * @returns {void}
     */
    FastClick.prototype.onTouchCancel = function() {
        this.trackingClick = false;
        this.targetElement = null;
    };


    /**
     * Determine mouse events which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onMouse = function(event) {

        // If a target element was never set (because a touch event was never fired) allow the event
        if (!this.targetElement) {
            return true;
        }

        if (event.forwardedTouchEvent) {
            return true;
        }

        // Programmatically generated events targeting a specific element should be permitted
        if (!event.cancelable) {
            return true;
        }

        // Derive and check the target element to see whether the mouse event needs to be permitted;
        // unless explicitly enabled, prevent non-touch click events from triggering actions,
        // to prevent ghost/doubleclicks.
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

            // Prevent any user-added listeners declared on FastClick element from being fired.
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {

                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                event.propagationStopped = true;
            }

            // Cancel the event
            event.stopPropagation();
            event.preventDefault();

            return false;
        }

        // If the mouse event is permitted, return true for the action to go through.
        return true;
    };


    /**
     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
     * an actual click which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onClick = function(event) {
        var permitted;

        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }

        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }

        permitted = this.onMouse(event);

        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
        if (!permitted) {
            this.targetElement = null;
        }

        // If clicks are permitted, return true for the action to go through.
        return permitted;
    };


    /**
     * Remove all FastClick's event listeners.
     *
     * @returns {void}
     */
    FastClick.prototype.destroy = function() {
        var layer = this.layer;

        if (deviceIsAndroid) {
            layer.removeEventListener('mouseover', this.onMouse, true);
            layer.removeEventListener('mousedown', this.onMouse, true);
            layer.removeEventListener('mouseup', this.onMouse, true);
        }

        layer.removeEventListener('click', this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };


    /**
     * Check whether FastClick is needed.
     *
     * @param {Element} layer The layer to listen on
     */
    FastClick.notNeeded = function(layer) {
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;

        // Devices that don't support touch don't need FastClick
        if (typeof window.ontouchstart === 'undefined') {
            return true;
        }

        // Chrome version - zero for other browsers
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (chromeVersion) {

            if (deviceIsAndroid) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // Chrome 32 and above with width=device-width or less don't need FastClick
                    if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }

                // Chrome desktop doesn't need FastClick (issue #15)
            } else {
                return true;
            }
        }

        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

            // BlackBerry 10.3+ does not require Fastclick library.
            // https://github.com/ftlabs/fastclick/issues/251
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // user-scalable=no eliminates click delay.
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // width=device-width (or less than device-width) eliminates click delay.
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }

        // IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
        if (layer.style.msTouchAction === 'none') {
            return true;
        }

        // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
        // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
        if (layer.style.touchAction === 'none') {
            return true;
        }

        return false;
    };


    /**
     * Factory method for creating a FastClick object
     *
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    FastClick.attach = function(layer, options) {
        return new FastClick(layer, options);
    };


    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function() {
            return FastClick;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
}());
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
if (!Igloo.isIE("<9")) {
    ! function(a, b, c, d) {
        "use strict";

        function e(a, b, c) {
            return setTimeout(k(a, c), b)
        }

        function f(a, b, c) {
            return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
        }

        function g(a, b, c) {
            var e;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== d)
                for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
                for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
        }

        function h(a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a
        }

        function i(a, b) {
            return h(a, b, !0)
        }

        function j(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
        }

        function k(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function l(a, b) {
            return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a
        }

        function m(a, b) {
            return a === d ? b : a
        }

        function n(a, b, c) {
            g(r(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function o(a, b, c) {
            g(r(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function p(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function q(a, b) {
            return a.indexOf(b) > -1
        }

        function r(a) {
            return a.trim().split(/\s+/g)
        }

        function s(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c && a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function t(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function u(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var g = b ? a[f][b] : a[f];
                s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
            }
            return c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
        }

        function v(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length;) {
                if (c = ib[g], e = c ? c + f : b, e in a) return e;
                g++
            }
            return d
        }

        function w() {
            return ob++
        }

        function x(a) {
            var b = a.ownerDocument;
            return b.defaultView || b.parentWindow
        }

        function y(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
                l(a.options.enable, [a]) && c.handler(b)
            }, this.init()
        }

        function z(a) {
            var b, c = a.options.inputClass;
            return new(b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A)
        }

        function A(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & yb && d - e === 0,
                g = b & (Ab | Bb) && d - e === 0;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
        }

        function B(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = b.center = F(d);
            b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
            var j = a.element;
            p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
        }

        function C(a, b) {
            var c = b.center,
                d = a.offsetDelta || {},
                e = a.prevDelta || {},
                f = a.prevInput || {};
            (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
                x: f.deltaX || 0,
                y: f.deltaY || 0
            }, d = a.offsetDelta = {
                x: c.x,
                y: c.y
            }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
        }

        function D(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
                i = b.timeStamp - h.timeStamp;
            if (b.eventType != Bb && (i > xb || h.velocity === d)) {
                var j = h.deltaX - b.deltaX,
                    k = h.deltaY - b.deltaY,
                    l = G(i, j, k);
                e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
            } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
        }

        function E(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: lb(a.pointers[c].clientX),
                clientY: lb(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: nb(),
                pointers: b,
                center: F(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function F(a) {
            var b = a.length;
            if (1 === b) return {
                x: lb(a[0].clientX),
                y: lb(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: lb(c / b),
                y: lb(d / b)
            }
        }

        function G(a, b, c) {
            return {
                x: b / a || 0,
                y: c / a || 0
            }
        }

        function H(a, b) {
            return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb
        }

        function I(a, b, c) {
            c || (c = Kb);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
        }

        function J(a, b, c) {
            c || (c = Kb);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
        }

        function K(a, b) {
            return J(b[1], b[0], Lb) - J(a[1], a[0], Lb)
        }

        function L(a, b) {
            return I(b[0], b[1], Lb) / I(a[0], a[1], Lb)
        }

        function M() {
            this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
        }

        function N() {
            this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function O() {
            this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments)
        }

        function P(a, b) {
            var c = t(a.touches),
                d = t(a.changedTouches);
            return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d]
        }

        function Q() {
            this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments)
        }

        function R(a, b) {
            var c = t(a.touches),
                d = this.targetIds;
            if (b & (yb | zb) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = t(a.changedTouches),
                h = [],
                i = this.target;
            if (f = c.filter(function(a) {
                    return p(a.target, i)
                }), b === yb)
                for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], e++;
            return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
        }

        function S() {
            y.apply(this, arguments);
            var a = k(this.handler, this);
            this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
        }

        function T(a, b) {
            this.manager = a, this.set(b)
        }

        function U(a) {
            if (q(a, bc)) return bc;
            var b = q(a, cc),
                c = q(a, dc);
            return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b
        }

        function V(a) {
            this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = ec, this.simultaneous = {}, this.requireFail = []
        }

        function W(a) {
            return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : ""
        }

        function X(a) {
            return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : ""
        }

        function Y(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function Z() {
            V.apply(this, arguments)
        }

        function $() {
            Z.apply(this, arguments), this.pX = null, this.pY = null
        }

        function _() {
            Z.apply(this, arguments)
        }

        function ab() {
            V.apply(this, arguments), this._timer = null, this._input = null
        }

        function bb() {
            Z.apply(this, arguments)
        }

        function cb() {
            Z.apply(this, arguments)
        }

        function db() {
            V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function eb(a, b) {
            return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b)
        }

        function fb(a, b) {
            b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), gb(this, !0), g(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
            }, this)
        }

        function gb(a, b) {
            var c = a.element;
            g(a.options.cssProps, function(a, d) {
                c.style[v(c.style, d)] = b ? a : ""
            })
        }

        function hb(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
        }
        var ib = ["", "webkit", "moz", "MS", "ms", "o"],
            jb = b.createElement("div"),
            kb = "function",
            lb = Math.round,
            mb = Math.abs,
            nb = Date.now,
            ob = 1,
            pb = /mobile|tablet|ip(ad|hone|od)|android/i,
            qb = "ontouchstart" in a,
            rb = v(a, "PointerEvent") !== d,
            sb = qb && pb.test(navigator.userAgent),
            tb = "touch",
            ub = "pen",
            vb = "mouse",
            wb = "kinect",
            xb = 25,
            yb = 1,
            zb = 2,
            Ab = 4,
            Bb = 8,
            Cb = 1,
            Db = 2,
            Eb = 4,
            Fb = 8,
            Gb = 16,
            Hb = Db | Eb,
            Ib = Fb | Gb,
            Jb = Hb | Ib,
            Kb = ["x", "y"],
            Lb = ["clientX", "clientY"];
        y.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
            }
        };
        var Mb = {
                mousedown: yb,
                mousemove: zb,
                mouseup: Ab
            },
            Nb = "mousedown",
            Ob = "mousemove mouseup";
        j(M, y, {
            handler: function(a) {
                var b = Mb[a.type];
                b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: vb,
                    srcEvent: a
                }))
            }
        });
        var Pb = {
                pointerdown: yb,
                pointermove: zb,
                pointerup: Ab,
                pointercancel: Bb,
                pointerout: Bb
            },
            Qb = {
                2: tb,
                3: ub,
                4: vb,
                5: wb
            },
            Rb = "pointerdown",
            Sb = "pointermove pointerup pointercancel";
        a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Pb[d],
                    f = Qb[a.pointerType] || a.pointerType,
                    g = f == tb,
                    h = s(b, a.pointerId, "pointerId");
                e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
            }
        });
        var Tb = {
                touchstart: yb,
                touchmove: zb,
                touchend: Ab,
                touchcancel: Bb
            },
            Ub = "touchstart",
            Vb = "touchstart touchmove touchend touchcancel";
        j(O, y, {
            handler: function(a) {
                var b = Tb[a.type];
                if (b === yb && (this.started = !0), this.started) {
                    var c = P.call(this, a, b);
                    b & (Ab | Bb) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: tb,
                        srcEvent: a
                    })
                }
            }
        });
        var Wb = {
                touchstart: yb,
                touchmove: zb,
                touchend: Ab,
                touchcancel: Bb
            },
            Xb = "touchstart touchmove touchend touchcancel";
        j(Q, y, {
            handler: function(a) {
                var b = Wb[a.type],
                    c = R.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                })
            }
        }), j(S, y, {
            handler: function(a, b, c) {
                var d = c.pointerType == tb,
                    e = c.pointerType == vb;
                if (d) this.mouse.allow = !1;
                else if (e && !this.mouse.allow) return;
                b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Yb = v(jb.style, "touchAction"),
            Zb = Yb !== d,
            $b = "compute",
            _b = "auto",
            ac = "manipulation",
            bc = "none",
            cc = "pan-x",
            dc = "pan-y";
        T.prototype = {
            set: function(a) {
                a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                return g(this.manager.recognizers, function(b) {
                    l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }), U(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!Zb) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) return void b.preventDefault();
                    var d = this.actions,
                        e = q(d, bc),
                        f = q(d, dc),
                        g = q(d, cc);
                    return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0, a.preventDefault()
            }
        };
        var ec = 1,
            fc = 2,
            gc = 4,
            hc = 8,
            ic = hc,
            jc = 16,
            kc = 32;
        V.prototype = {
            defaults: {},
            set: function(a) {
                return h(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function(a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function(a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function(a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = Y(a, this);
                var b = s(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(c.options.event + (b ? W(d) : ""), a)
                }
                var c = this,
                    d = this.state;
                hc > d && b(!0), b(), d >= hc && b(!0)
            },
            tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = kc)
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (kc | ec))) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                var b = h({}, a);
                return l(this.options.enable, [this, b]) ? (this.state & (ic | jc | kc) && (this.state = ec), this.state = this.process(b), void(this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), void(this.state = kc))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, j(Z, V, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (fc | gc),
                    e = this.attrTest(a);
                return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc
            }
        }), j($, Z, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Jb
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                return a & Hb && b.push(dc), a & Ib && b.push(cc), b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX, this.pY = a.deltaY;
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
            }
        }), j(_, Z, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [bc]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
            },
            emit: function(a) {
                if (this._super.emit.call(this, a), 1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + b, a)
                }
            }
        }), j(ab, V, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [_b]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f) this.reset();
                else if (a.eventType & yb) this.reset(), this._timer = e(function() {
                    this.state = ic, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & Ab) return ic;
                return kc
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), this.manager.emit(this.options.event, this._input)))
            }
        }), j(bb, Z, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [bc]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
            }
        }), j(cb, Z, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Hb | Ib,
                pointers: 1
            },
            getTouchAction: function() {
                return $.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab
            },
            emit: function(a) {
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
        }), j(db, V, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ac]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & yb && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != Ab) return this.failTimeout();
                    var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                        h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = ic, this.tryEmit()
                    }, b.interval, this), fc) : ic
                }
                return kc
            },
            failTimeout: function() {
                return this._timer = e(function() {
                    this.state = kc
                }, this.options.interval, this), kc
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), eb.VERSION = "2.0.4", eb.defaults = {
            domEvents: !1,
            touchAction: $b,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [bb, {
                    enable: !1
                }],
                [_, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [cb, {
                    direction: Hb
                }],
                [$, {
                        direction: Hb
                    },
                    ["swipe"]
                ],
                [db],
                [db, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ab]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var lc = 1,
            mc = 2;
        fb.prototype = {
            set: function(a) {
                return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
            },
            stop: function(a) {
                this.session.stopped = a ? mc : lc
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    (!e || e && e.state & ic) && (e = b.curRecognizer = null);
                    for (var f = 0; f < d.length;) c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++
                }
            },
            get: function(a) {
                if (a instanceof V) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (f(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function(a) {
                if (f(a, "remove", this)) return this;
                var b = this.recognizers;
                return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
            },
            on: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            },
            off: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) {
                    b ? c[a].splice(s(c[a], b), 1) : delete c[a]
                }), this
            },
            emit: function(a, b) {
                this.options.domEvents && hb(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a, b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, h(eb, {
            INPUT_START: yb,
            INPUT_MOVE: zb,
            INPUT_END: Ab,
            INPUT_CANCEL: Bb,
            STATE_POSSIBLE: ec,
            STATE_BEGAN: fc,
            STATE_CHANGED: gc,
            STATE_ENDED: hc,
            STATE_RECOGNIZED: ic,
            STATE_CANCELLED: jc,
            STATE_FAILED: kc,
            DIRECTION_NONE: Cb,
            DIRECTION_LEFT: Db,
            DIRECTION_RIGHT: Eb,
            DIRECTION_UP: Fb,
            DIRECTION_DOWN: Gb,
            DIRECTION_HORIZONTAL: Hb,
            DIRECTION_VERTICAL: Ib,
            DIRECTION_ALL: Jb,
            Manager: fb,
            Input: y,
            TouchAction: T,
            TouchInput: Q,
            MouseInput: M,
            PointerEventInput: N,
            TouchMouseInput: S,
            SingleTouchInput: O,
            Recognizer: V,
            AttrRecognizer: Z,
            Tap: db,
            Pan: $,
            Swipe: cb,
            Pinch: _,
            Rotate: bb,
            Press: ab,
            on: n,
            off: o,
            each: g,
            merge: i,
            extend: h,
            inherit: j,
            bindFn: k,
            prefixed: v
        }), typeof define == kb && define.amd ? define(function() {
            return eb
        }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb
    }(window, document, "Hammer");
}
typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) === "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, n, r) {
                var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                return i
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, typeof n.init != "undefined" && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            s = e.setInterval || s,
            o = e.History = e.History || {};
        if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function() {
            if (typeof o.initHtml4.initialized != "undefined") return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(e) {
                var t = o.getHashByIndex(),
                    n;
                return n = e === t, n
            }, o.isHashEqual = function(e, t) {
                return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
            }, o.saveHash = function(e) {
                return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
            }, o.getHashByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(e, t, n) {
                var r = o.getHashByState(e),
                    i;
                return i = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, o.discardedStates[r] = i, !0
            }, o.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return o.discardedHashes[e] = r, !0
            }, o.discardedState = function(e) {
                var t = o.getHashByState(e),
                    n;
                return n = o.discardedStates[t] || !1, n
            }, o.discardedHash = function(e) {
                var t = o.discardedHashes[e] || !1;
                return t
            }, o.recycleState = function(e) {
                var t = o.getHashByState(e);
                return o.discardedState(e) && delete o.discardedStates[t], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function() {
                o.checkerFunction = null;
                var t = "",
                    r, i, u, a, f = Boolean(o.getHash());
                return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                    if (a) return !1;
                    a = !0;
                    var n = o.getHash(),
                        r = o.getHash(i.contentWindow.document);
                    return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
                }) : o.checkerFunction = function() {
                    var n = o.getHash() || "";
                    return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(t) {
                var n = t && t.newURL || o.getLocationHref(),
                    r = o.getHashByUrl(n),
                    i = null,
                    s = null,
                    u = null,
                    a;
                return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
            }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getHash(),
                    c = o.expectedStateId == s.id;
                return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
            }, o.replaceState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getStateByIndex(-2);
                return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
                o.Adapter.trigger(e, "hashchange")
            })
        }, typeof o.init != "undefined" && o.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            s = !1,
            o = e.setTimeout,
            u = e.clearTimeout,
            a = e.setInterval,
            f = e.clearInterval,
            l = e.JSON,
            c = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
        } catch (d) {
            s = !1
        }
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
        h.init = function(e) {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
        }, h.initCore = function(d) {
            if (typeof h.initCore.initialized != "undefined") return !1;
            h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                var e, t = h.intervalList;
                if (typeof t != "undefined" && t !== null) {
                    for (e = 0; e < t.length; e++) f(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function() {
                (h.options.debug || !1) && h.log.apply(h, arguments)
            }, h.log = function() {
                var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                    t = r.getElementById("log"),
                    i, s, o, u, a;
                e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                for (s = 1, o = arguments.length; s < o; ++s) {
                    a = arguments[s];
                    if (typeof a == "object" && typeof l != "undefined") try {
                        a = l.stringify(a)
                    } catch (f) {}
                    i += "\n" + a + "\n"
                }
                return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
            }, h.getInternetExplorerMajorVersion = function() {
                var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
                return e
            }, h.isInternetExplorer = function() {
                var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                return e
            }, h.options.html4Mode ? h.emulated = {
                pushState: !0,
                hashChange: !0
            } : h.emulated = {
                pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }, h.cloneObject = function(e) {
                var t, n;
                return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
            }, h.getRootUrl = function() {
                var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                if (r.location.port || !1) e += ":" + r.location.port;
                return e += "/", e
            }, h.getBaseHref = function() {
                var e = r.getElementsByTagName("base"),
                    t = null,
                    n = "";
                return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
            }, h.getBaseUrl = function() {
                var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                return e
            }, h.getPageUrl = function() {
                var e = h.getState(!1, !1),
                    t = (e || {}).url || h.getLocationHref(),
                    n;
                return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /\./.test(e) ? e : e + "/"
                }), n
            }, h.getBasePageUrl = function() {
                var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/";
                return e
            }, h.getFullUrl = function(e, t) {
                var n = e,
                    r = e.substring(0, 1);
                return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function(e) {
                var t = e,
                    n = h.getBaseUrl(),
                    r = h.getRootUrl();
                return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
            }, h.getLocationHref = function(e) {
                return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function(e, t) {
                typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                var n = h.getLastSavedState();
                return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
            }, h.getIdByState = function(e) {
                var t = h.extractId(e.url),
                    n;
                if (!t) {
                    n = h.getStateString(e);
                    if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                    else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                    else {
                        for (;;) {
                            t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                        }
                        h.stateToId[n] = t, h.idToState[t] = e
                    }
                }
                return t
            }, h.normalizeState = function(e) {
                var t, n;
                if (!e || typeof e != "object") e = {};
                if (typeof e.normalized != "undefined") return e;
                if (!e.data || typeof e.data != "object") e.data = {};
                return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
            }, h.createStateObject = function(e, t, n) {
                var r = {
                    data: e,
                    title: t,
                    url: n
                };
                return r = h.normalizeState(r), r
            }, h.getStateById = function(e) {
                e = String(e);
                var n = h.idToState[e] || h.store.idToState[e] || t;
                return n
            }, h.getStateString = function(e) {
                var t, n, r;
                return t = h.normalizeState(e), n = {
                    data: t.data,
                    title: e.title,
                    url: e.url
                }, r = l.stringify(n), r
            }, h.getStateId = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.id, n
            }, h.getHashByState = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.hash, n
            }, h.extractId = function(e) {
                var t, n, r, i;
                return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
            }, h.isTraditionalAnchor = function(e) {
                var t = !/[\/\?\.]/.test(e);
                return t
            }, h.extractState = function(e, t) {
                var n = null,
                    r, i;
                return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
            }, h.getIdByUrl = function(e) {
                var n = h.urlToId[e] || h.store.urlToId[e] || t;
                return n
            }, h.getLastSavedState = function() {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function() {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function(e) {
                var t = !1,
                    n;
                return n = h.extractState(e.url), t = n && n.id !== e.id, t
            }, h.storeState = function(e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function(e) {
                var t = !1,
                    n, r, i;
                return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
            }, h.saveState = function(e) {
                return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
            }, h.getCurrentIndex = function() {
                var e = null;
                return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
            }, h.getHash = function(e) {
                var t = h.getLocationHref(e),
                    n;
                return n = h.getHashByUrl(t), n
            }, h.unescapeHash = function(e) {
                var t = h.normalizeHash(e);
                return t = decodeURIComponent(t), t
            }, h.normalizeHash = function(e) {
                var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                return t
            }, h.setHash = function(e, t) {
                var n, i;
                return t !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
            }, h.escapeHash = function(t) {
                var n = h.normalizeHash(t);
                return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function(e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t), t
            }, h.setTitle = function(e) {
                var t = e.title,
                    n;
                t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                try {
                    r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (i) {}
                return r.title = t, h
            }, h.queues = [], h.busy = function(e) {
                typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                if (!h.busy.flag) {
                    u(h.busy.timeout);
                    var t = function() {
                        var e, n, r;
                        if (h.busy.flag) return;
                        for (e = h.queues.length - 1; e >= 0; --e) {
                            n = h.queues[e];
                            if (n.length === 0) continue;
                            r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                        }
                    };
                    h.busy.timeout = o(t, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function(e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function(e, t) {
                return typeof e == "function" && (e = {
                    callback: e
                }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function() {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function() {
                return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function(e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function() {
                var t = h.extractState(h.getLocationHref()),
                    n;
                if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                return
            }, h.back = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function(e, t) {
                var n;
                if (e > 0)
                    for (n = 1; n <= e; ++n) h.forward(t);
                else {
                    if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (n = -1; n >= e; --n) h.back(t)
                }
                return h
            };
            if (h.emulated.pushState) {
                var v = function() {};
                h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
            } else h.onPopState = function(t, n) {
                var r = !1,
                    i = !1,
                    s, o;
                return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            }, h.replaceState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            };
            if (s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch (m) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
                var e, t, n;
                try {
                    e = l.parse(s.getItem("History.store")) || {}
                } catch (r) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in h.idToState) {
                    if (!h.idToState.hasOwnProperty(t)) continue;
                    e.idToState[t] = h.idToState[t]
                }
                for (t in h.urlToId) {
                    if (!h.urlToId.hasOwnProperty(t)) continue;
                    e.urlToId[t] = h.urlToId[t]
                }
                for (t in h.stateToId) {
                    if (!h.stateToId.hasOwnProperty(t)) continue;
                    e.stateToId[t] = h.stateToId[t]
                }
                h.store = e, h.normalizeStore(), n = l.stringify(e);
                try {
                    s.setItem("History.store", n)
                } catch (i) {
                    if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                    s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                }
            }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
            if (!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function() {
                    h.Adapter.trigger(e, "popstate")
                }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })
            }
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window)



function Jcache(_settings) {

    this.cache = [];
    this.ajax_request = 1;
    this.last_ajax_request = 0;

};
Jcache.inheritsFrom(EventTarget);
//**** PUBLIC METHODS ****//
Jcache.prototype.setup = function(url, dataString) {

    //Defaults
    if (!url) url = Jnav.getDocumentUrl();
    if (!dataString) dataString = document.getElementsByTagName("html")[0].innerHTML

    var cleanUrl = Jnav.cleanUrl(url);
    this.createCache(cleanUrl, dataString);
}
Jcache.prototype.getCache = function(url) {
    var cleanUrl = Jnav.cleanUrl(url);
    var cache = Igloo.searchArray(this.cache, 'url', cleanUrl);

    if (!cache) {
        //Test the glob matches
        for (var i = 0; i < this.cache.length; i++) {
            var matches = this.cache[i].matches;
            if (matches)
                for (var j = 0, jj = matches.length; j < jj; j++) {
                    var result = cleanUrl.match(matches[j]);
                    if (result) {
                        cache = this.cache[i];
                        //Igloo.log("woo yeag")
                        break;
                    }
                }
            if (cache) break;
        }
    }

    //Check if a controller has it already
    /*
    if(!cache){
    	var controllers = Aviator.get("controllers");
    	for(j = 0; j < controllers.length; j++) {
    		var result = controllers[j].controller.checkGlobMatch(cleanUrl);
    		if(result){
    			//Not sure
    			cache = this.createCache(cleanUrl,"");
    			break;
    		}
    	}
    }*/

    //If we haven't found it, load it.
    if (!cache) {
        cache = this.createCache(cleanUrl);
    }
    return cache;

}
Jcache.prototype.getCacheByRequest = function(request) {
    var cache = Igloo.searchArray(this.cache, 'request', request);
    return cache ? cache : this.cache[0];

}
Jcache.prototype.createCache = function(cleanUrl, dataString) {
    var c = {};
    c.status = "empty";
    c.url = cleanUrl;
    c.parts = Jnav.getParts(cleanUrl);

    this.cache.push(c);

    if (typeof(dataString) == "undefined") this.ajaxLoad(cleanUrl);
    else this.dataLoad(cleanUrl, dataString);


    return c;
}
Jcache.prototype.updateCache = function(cleanUrl, updates) {
    var cache = this.getCache(cleanUrl);
    for (var i in updates) {
        cache[i] = updates[i];
    }
    return cache;
}
Jcache.prototype.updateCacheByRequest = function(request, updates) {
    var cache = this.getCacheByRequest(request);
    return this.updateCache(cache.url, updates);
}


Jcache.prototype.ajaxLoad = function(url) {
    this.ajax_request++;

    //this.last_ajax_request = this.ajax_request;
    var requestUrl = url + (url.indexOf("?") >= 0 ? "&" : "?") + "ajax=1&c=" + this.ajax_request;
    var updates = this.updateCache(url, {
        request: this.ajax_request,
        requestUrl: requestUrl,
        onLoad: function() {}
    });
    $.ajax({
        url: url,
        success: Igloo.delegate(this, this.ajaxLoadedPause, this.ajax_request),
        error: Igloo.delegate(this, this.ajaxLoadedPause, this.ajax_request)
    });
    return this.ajax_request;
}
Jcache.prototype.ajaxLoadedPause = function(request, result) {
    //We add a wee pause to a) allow cache to update whether it's loaded from cache or ajax, and b) because it makes things run a bit smoother
    Igloo.pause(1, Igloo.delegate(this, this.ajaxLoaded, request, result));
}
Jcache.prototype.ajaxLoaded = function(request, result) {

    if (typeof(result) == "object") result = result.responseText;

    var data = this.parseData(result);

    //Update the cache with the new data
    var cache = this.updateCacheByRequest(request, data);

    this.gatherGlobMatches(cache);

    this.onCacheLoaded(cache);
    cache.onLoad(); //TODO - this might need to be an event that is fired, otherwise preloaded and main content could screw up.

}

Jcache.prototype.dataLoad = function(cleanUrl, dataString) {

    var data = this.parseData(dataString);

    //Update the cache with the new data
    var cache = this.updateCache(cleanUrl, data);

    this.gatherGlobMatches(cache);

    this.onCacheLoaded(cache);
    if (cache.onLoad) cache.onLoad(); //TODO - this might need to be an event that is fired, otherwise preloaded and main content could screw up.

}
Jcache.prototype.parseData = function(dataString, cache) {


    //Make a Jquery object to use, save it in the cache
    //dataString = dataString.replace(/\<script/gi,"<!--<noscript").replace(/\<\/script\>/gi,"</noscript>-->");

    //Match title
    var titleRe = /\<title\>(.*?)\<\/title\>/i;
    var titleMatch = dataString.match(titleRe);
    var title = titleMatch ? titleMatch[1] : "";

    //Match preloads
    var preloadRe = /\<img(.*?)class=[\"\'](.*?)preload(.*?)[\"\'](.*?)\>/gi;
    var preloadArray = dataString.match(preloadRe);
    var preloadImages = [];
    if (preloadArray)
        for (var i = 0; i < preloadArray.length; i++) {
            var img = preloadArray[i];
            var myRe = /src\=[\"\'](.*?)[\"\']/;
            var r = myRe.exec(img);
            if (r && r[1]) preloadImages.push(r[1]);
        }

    //Match meta
    var myRe = /\<script(.*?)type\=[\"\']?text\/json[\"\']?(.*?)\>([\s\S]*?)(.*?)([\s\S]*?)\<\/script\>/gi;
    var results;
    var meta = {};
    while (results = myRe.exec(dataString)) { //exec loops through until it returns null
        if (!(results[1] + results[2]).match(/id=[\"\']?meta[\"\']?/)) continue;
        var meta_string = results ? Text.trim(results[5]) : "";
        if (meta_string) {
            meta = Igloo.merge(meta, JSON.parse(meta_string));
        }
    }
    var matches = meta['match'] ? meta['match'] : [];
    if (typeof(matches) == "string") matches = [matches];
    if (matches)
        for (var i = 0, ii = matches.length; i < ii; i++) {
            matches[i] = Igloo.glob2regex(matches[i]);
        }
    delete meta['match'];


    //(.|[\r\n]) matches newlines too. or you can do \s\S can you?
    var templates = {};
    var templateRx = new RegExp('\<script[^\<]*?type\=[\"\']?text\/template[\"\']?(.*?)\>((.|[\n\r])*?)\<\/script\>', 'gi');
    var templateMatches = dataString.match(templateRx);

    for (var i in templateMatches) {
        var templateInnerRx = new RegExp('.*?id\=[\"\']?(.*?)[\"\'\\s].*?\>((.|[\r\n])*?)<\/script>', 'i');
        var templateInnerMatches = templateInnerRx.exec(templateMatches[i]);

        if (templateInnerMatches) {
            templates[templateInnerMatches[1]] = {
                id: templateInnerMatches[1],
                html: templateInnerMatches[2]
            };
        };
    }


    dataString = dataString.replace(/\<script([\s\S]*?)\<\/script\>/gi, "");

    var jquery_string = dataString.replace(/\<img(.*?) src=([\"\']*)(.*)([\"\']*)/gi, "<img$1 src-wait=$2$3$4");
    jquery_string = jquery_string.replace(/\<div(.*?) style=([\"\']+)(.*)background-image([:\s]+)url\((.*?)\)(.*?)([\"\']+)/gi, "<div$1 style=$2$3background-image-wait$4url($5)$6$7");
    jquery_string = jquery_string.replace(/\<link(.*?)\/\>/gi, "");


    var $jquery_ajax = this.data2jquery(jquery_string);

    //Update the cache with the new data
    var data = {
        raw: dataString,
        meta: meta,
        data: {}, //This will be used to store shared data
        templates: templates,
        matches: matches,
        $jquery: $jquery_ajax,
        status: "loaded",
        title: title,
        preloads: preloadImages,
        preloaded: preloadImages.length ? false : true,
        get: function(selector, includeImages) {
            var $r;
            if (selector) $r = $jquery_ajax.find(selector);
            else $r = $jquery_ajax;

            var html = $r.html();
            if (includeImages !== false) {
                html = html.replace(/\<img(.*?) src-wait=([\"\']*)(.*)([\"\']*)/gi, "<img$1 src=$2$3$4");
                html = html.replace(/\<div(.*?) style=([\"\']+)(.*)background-image-wait([:\s]+)url\((.*?)\)(.*?)([\"\']+)/gi, "<div$1 style=$2$3background-image$4url($5)$6$7");
            }
            return html;
        }
    };
    data.$get = function(selector, includeImages) {
        return $(data.get(selector, includeImages));
    }

    return data;

}

Jcache.prototype.gatherGlobMatches = function(cache) {

    //Check if any controllers know about the matches for this cache
    var controllers = Aviator.get("controllers");
    for (j = 0; j < controllers.length; j++) {
        var globCaches = controllers[j].controller.globCache;
        if (typeof(globCaches) == "string") globCaches = [globCaches];
        var found = false;
        if (globCaches)
            for (var i = 0, ii = globCaches.length; i < ii; i++) {


                var glob = globCaches[i].replace(/\[\*\]/g, "*");
                var regex = Igloo.glob2regex(glob);
                var match = cache.url.match(regex);
                //Igloo.log("chechking: "+cache.url+" " + glob, match)
                if (match) {
                    found = true;
                    break;
                }
            }
        if (found) {
            for (var i = 0, ii = globCaches.length; i < ii; i++) {

                //Update the [*] to the url part
                var parts = globCaches[i].split("/");
                for (var k = 1, kk = parts.length; k < kk; k++) {
                    if (parts[k] == "[*]") parts[k] = cache.parts[k - 1];
                }
                var glob = parts.join("/");

                var regex = Igloo.glob2regex(glob);
                //Igloo.log("Found: " + regex);
                cache.matches.push(regex);
            }
        }
    }


}

//**** OVERLOADABLES *****//
Jcache.prototype.onCacheLoaded = function(cache) {
    this.fire("loaded", cache);
}
//**** HELPERS *****//
Jcache.prototype.data2jquery = function(data) {
    var jquery_object = $("<div/>").html(Text.trim(data));
    var jquery_ajax = jquery_object.find(".ajax");
    if (!jquery_ajax.size()) jquery_ajax = jquery_object;
    return jquery_ajax;
};


function Jnav(_settings) {

    this.status = null;
    this.callStack = null;

    this.currentUrl = null;
    this.currentParams = null;
    this.currentHash = null;

    this.nextUrl = null;
    this.nextParams = null;
    this.nextHash = null;

    this.swiped = false;
    this.swiped_timeout = null;


};
Jnav.inheritsFrom(BaseClass);

//Initialise
Jnav.prototype.setup = function(base, links) {

    var _this = this;

    //Defaults
    this.status = "ready";
    this.callStack = [];
    if (!base) base = "/";
    this.currentUrl = null; //this.cleanUrl(History.getState().cleanUrl);

    //Target links
    //		if(links) this.addToLinks(links);

    //Setup history.js
    History.Adapter.bind(window, 'statechange', function() {
        var r = _this.checkChange();
        if (!r) _this.onChangeFailed();
    });
    History.Adapter.bind(window, 'anchorchange', function() {
        History.saveState(History.createStateObject()); //Anchor links don't update as usual so we need to force it
        _this.checkChange(true);
    });

    setTimeout(Igloo.delegate(this, this.checkChange), 1);

    //OSX swiping
    // countdown in ms before resetting the boolean.
    var iTime = 1000;
    window.addEventListener('mousewheel', Igloo.delegate(this, function(e) {
        if (e.wheelDeltaY === 0) {
            // there is an horizontal scroll
            if (!this.swiped) {
                // no need to set bScrolled to true if it has been done within the iTime time.
                this.swiped = true;
                this.swiped_timeout = setTimeout(Igloo.delegate(this, function() {
                    this.swiped = false;
                }), iTime);
            }
        }
    }));


}

//*** PUBLIC METHODS **//
Jnav.prototype.change = function(url, title, force) {

    url = this.cleanUrl(url);
    History.pushState({
        rd: window.Math.random(),
        force: force
    }, title ? title : document.title, url);

}
Jnav.prototype.refresh = function() {
    this.change(this.currentUrl, false, true);
    //this.checkChange(true);
}
Jnav.prototype.update = function() {
    this.changed();
}
Jnav.prototype.getState = function() {
    var state = Igloo.copy(this.callStack[this.callStack.length - 1]);
    state.status = this.status;
    return state;

}

//*** BASE METHODS ***//
Jnav.prototype.checkChange = function(force) {


    clearTimeout(this.swiped_timeout);
    // check if there has been a swipe prior to the change of history state
    if (this.swiped) {
        this.swiped = false;
        if (Igloo.isiOS()) Igloo.log("Swipe detected?")
    }

    //What about interuptions?

    if (this.status != "ready") {
        var interupt = this.onInterupt();
        if (!interupt) return false;
    }



    var state = History.getState();
    if (state.data.force && !state.data.forced) {
        force = true;
    }

    var url = this.cleanUrl(state.cleanUrl);
    var previousUrl = this.currentUrl;
    var documentUrl = this.getDocumentUrl();

    var nextParams = this.getParams(url);
    var previousParams = this.currentParams;

    var nextHash = this.getHash(url);
    var previousHash = this.currentHash;

    if (url === previousUrl && !force) {
        return false;
    }

    //Check if our body loaded a different page from our # url
    if (!previousUrl && documentUrl != url) {
        //url = documentUrl;
    }

    var parts = this.getParts(url);
    var previousParts = this.getParts(previousUrl);
    var changes = this.findChanges(previousUrl, url);

    this.nextUrl = url;
    this.nextParams = nextParams;
    this.nextHash = nextHash;

    var details = {
        'nextUrl': url,
        'nextParts': parts,
        'nextParams': nextParams,
        'nextHash': nextHash,
        'previousUrl': previousUrl,
        'previousParts': previousParts,
        'previousParams': previousParams,
        'previousHash': previousHash,
        'changes': changes,
        'interupt': interupt,
        'isRefresh': url == previousUrl
    }
    if (previousUrl === null) details.initial = true;

    this.callStack.push(details);
    this.status = "waiting";
    var onChangeResult = this.onChange(details);

    if (onChangeResult === true) {
        this.changed();
    }

    if (state.data.force) {
        state.data.forced = true;
        History.replaceState(state.data, state.title, state.url);
    }



    return true; //(onChangeResult === true);

}
Jnav.prototype.changed = function() {

    this.status = "ready";
    this.currentUrl = this.nextUrl;
    this.currentParams = this.nextParams;
    this.currentHash = this.nextHash;
    this.nextUrl = null;
    this.nextParams = null;
    this.nextHash = null;

    this.onChanged();
    this.checkChange();

}

//*** OVERLOADABLE METHODS ***//
Jnav.prototype.onChange = function(details) {
    //Igloo.log("On Change")
    //Igloo.log(details)
    //setTimeout(Igloo.delegate(this,this.update),5000);
    return true;
}
Jnav.prototype.onChanged = function() {
    //Igloo.log("On Changed")
    //Igloo.log(this.getState());
    return true;
}
Jnav.prototype.onChangeFailed = function() {
    //Igloo.log("On Change failed")
    //Igloo.log(this.getState());
    return false;
}
Jnav.prototype.onInterupt = function() {
    //Igloo.log("On Changed")
    //Igloo.log(this.getState());
    return false;
}

//*** HELPER METHODS **//
Jnav.prototype.cleanUrl = function(url) {
    //Take a Url and output a nice version, starting with a /, or false if it's not on this domain.
    if (typeof(url) !== "string") {
        Igloo.warn("JNav cleanUrl given non-string");
        throw ("VGV")
        return "";
    }

    var location = document.location;
    var real_base = location.protocol + "//" + location.hostname;

    //Fix the no http or https problem			
    if (url.substr(0, 2) == "//") url = location.protocol + url;

    var parts = url.split("://");

    //Is it a full url? Check if it's on the same domain
    if (parts.length > 1) {
        if (real_base != url.substr(0, real_base.length)) return false;
        else url = url.substr(real_base.length);
        if (url == "") url = "/";
    }

    //What if it doesn't start with a /. Then we need to use the current location to work it out.
    if (url.substr(0, 1) != "/") {
        if (url.substr(0, 3) == "../") {
            var base = this.sliceUrl(this.getBaseUrl(), -1);
            url = base + url.substr(3);
        } else {
            url = this.getBaseUrl() + url;
        }
    }

    return url;
}
Jnav.cleanUrl = Jnav.prototype.cleanUrl; //Static
Jnav.prototype.getUrl = function() {
    var state = History.getState();
    return Jnav.cleanUrl(state.cleanUrl);
}
Jnav.getUrl = Jnav.prototype.getUrl; //Static
Jnav.prototype.getDocumentUrl = function() { //On first load of IE 6/7/8 you get the base page not the # page.
    return Jnav.cleanUrl(document.location.pathname);
}
Jnav.getDocumentUrl = Jnav.prototype.getDocumentUrl; //Static
Jnav.prototype.getBaseUrl = function() {
    var state = History.getState();
    var path = state.hash;

    if (path === "./") path = this.cleanUrl(state.cleanUrl);

    var path_parts = path.split("/");
    path_parts.pop();
    var base_path = path_parts.join("/") + "/";

    return base_path;
}
Jnav.getBaseUrl = Jnav.prototype.getBaseUrl; //Static
Jnav.prototype.getParams = function(url) {

    if (typeof(url) !== "string") {
        Igloo.warn("JNav getParams not given a string");
        return {};
    }

    var params = {};

    var url_parts = url.split("?");
    var param_string = url_parts[1] ? url_parts[1] : "";
    var param_parts = param_string.split("&");
    for (var i = 0; i < param_parts.length; i++) {
        var inner_parts = param_parts[i].split("=");
        var key = decodeURI(inner_parts[0]);
        var value = decodeURI(inner_parts[1]);

        if (key) params[key] = value;
    }

    return params;
}
Jnav.prototype.getHash = function(url) {

    if (typeof(url) !== "string") {
        Igloo.warn("JNav getHash not given a string");
        return {};
    }
    var url_parts = url.split("#");
    return url_parts.length > 1 ? url_parts[1] : "";

}
Jnav.prototype.getParts = function(url) {
    if (typeof(url) !== "string") return [];
    url = this.cleanUrl(url);
    url = url.split("?")[0];
    url = url.split("#")[0];
    var parts = url.split("/");
    parts.splice(0, 1);
    if (parts[parts.length - 1] === "") parts.pop();
    return parts;
}
Jnav.getParts = Jnav.prototype.getParts; //Static
Jnav.prototype.findChanges = function(previousUrl, currentUrl) {

    var previous = this.getParts(previousUrl);
    var current = this.getParts(currentUrl);

    var changes = [];
    for (var i = 0; i < Math.max(previous.length, current.length); i++) {
        var a = i < previous.length ? previous[i] : "";
        var b = i < current.length ? current[i] : "";
        changes[i] = a != b;
    }
    return changes;
}
Jnav.findChanges = Jnav.prototype.findChanges; //Static
Jnav.prototype.sliceUrl = function(url, length) {

    var parts = Jnav.getParts(url);
    if (length <= 0) length = parts.length + length;
    var newUrl = "/"; //Jnav.getBaseUrl();
    for (var i = 0; i < Math.min(parts.length, length + 1); i++) {
        newUrl += parts[i] + "/";
    }
    return newUrl;
}
Jnav.sliceUrl = Jnav.prototype.sliceUrl; //Static
Jnav.prototype.sectionUrl = function(length) {
    return Jnav.sliceUrl(this.getState().nextUrl, length);
}
Jnav.sectionUrl = Jnav.prototype.sectionUrl; //Static
//*** HELPER METHODS (HTML) **//
Jnav.prototype.addToLinks = function($elements, addTouch) {
    //If elements is not set

    if ($elements === true) return this.addToLink($("a"), addTouch);
    else return this.addToLink($elements, addTouch);

}
Jnav.prototype.addToLink = function($elements, addTouch) {

    var _this = this;
    $elements.each(function(i) {

        var $element = $(this);

        var href = $element.attr("href");
        if (!href) return;

        var target = $element.attr("target");
        if (target) return;

        var ignore = $element.data("ignore") || $element.hasClass("no_auto_link");
        if (ignore) return;

        var ext = href.lastIndexOf(".") >= 0 ? href.substr(href.lastIndexOf(".")) : "";




        if (href.substr(0, 1) == "#") return;
        if (ext) return;

        var parts = href.split(":");
        var location = document.location;
        var real_base = location.protocol + "//" + location.hostname + "/";

        //Fix the no http or https problem			
        if (href.substr(0, 2) == "//") href = location.protocol + href;

        if (parts.length > 1 && real_base != href.substr(0, real_base.length)) return;

        _this.addOnClick($element, addTouch);
    });
}
Jnav.prototype.removeFromLinks = function($elements) {
    //If elements is not set
    if ($elements === true) return this.removeFromLink($("a"));
    else return this.removeFromLink($elements);

}
Jnav.prototype.removeFromLink = function($elements) {

    var _this = this;
    $elements.each(function(i) {

        var $element = $(this);
        if ($element.data("jnav")) $element.off("click", $element.data("jnav"));
        $element.data("jnav", false);

    });
}
Jnav.prototype.addOnClick = function($element, addTouch) {
    if ($element.data("jnav")) $element.off("click touchstart", $element.data("jnav"));
    var f = Igloo.delegate(this, this.onClick, $element);
    $element.data("jnav", f);
    var eventString = "click";
    if (addTouch) eventString += " touchstart";
    $element.on(eventString, f);
}
Jnav.prototype.onClick = function($this, e) {

    //This only works on an <a> - returning false doesn't work on any other element
    if (e.ctrlKey === true) {
        e.stopPropagation();
        return true;
    }

    e.preventDefault();
    e.stopPropagation();
    this.change($this.attr("href"));
};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function(global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        factory(global.Mustache = {}); // <script>
    }
}(this, function(mustache) {

    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function(object) {
        return Object_toString.call(object) === '[object Array]';
    };

    function isFunction(object) {
        return typeof object === 'function';
    }

    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }

    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var RegExp_test = RegExp.prototype.test;

    function testRegExp(re, string) {
        return RegExp_test.call(re, string);
    }

    var nonSpaceRe = /\S/;

    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string);
    }

    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    }

    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;

    /**
     * Breaks up the given `template` string into a tree of tokens. If the `tags`
     * argument is given here it must be an array with two string values: the
     * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
     * course, the default is to use mustaches (i.e. mustache.tags).
     *
     * A token is an array with at least 4 elements. The first element is the
     * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
     * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
     * all text that appears outside a symbol this element is "text".
     *
     * The second element of a token is its "value". For mustache tags this is
     * whatever else was inside the tag besides the opening symbol. For text tokens
     * this is the text itself.
     *
     * The third and fourth elements of the token are the start and end indices,
     * respectively, of the token in the original template.
     *
     * Tokens that are the root node of a subtree contain two more elements: 1) an
     * array of tokens in the subtree and 2) the index in the original template at
     * which the closing tag for that section begins.
     */
    function parseTemplate(template, tags) {
        if (!template)
            return [];

        var sections = []; // Stack to hold section tokens
        var tokens = []; // Buffer to hold the tokens
        var spaces = []; // Indices of whitespace tokens on the current line
        var hasTag = false; // Is there a {{tag}} on the current line?
        var nonSpace = false; // Is there a non-space char on the current line?

        // Strips all whitespace tokens array for the current line
        // if there was a {{#tag}} on it and otherwise only space.
        function stripSpace() {
            if (hasTag && !nonSpace) {
                while (spaces.length)
                    delete tokens[spaces.pop()];
            } else {
                spaces = [];
            }

            hasTag = false;
            nonSpace = false;
        }

        var openingTagRe, closingTagRe, closingCurlyRe;

        function compileTags(tags) {
            if (typeof tags === 'string')
                tags = tags.split(spaceRe, 2);

            if (!isArray(tags) || tags.length !== 2)
                throw new Error('Invalid tags: ' + tags);

            openingTagRe = new RegExp(escapeRegExp(tags[0]) + '\\s*');
            closingTagRe = new RegExp('\\s*' + escapeRegExp(tags[1]));
            closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tags[1]));
        }

        compileTags(tags || mustache.tags);

        var scanner = new Scanner(template);

        var start, type, value, chr, token, openSection;
        while (!scanner.eos()) {
            start = scanner.pos;

            // Match any text between tags.
            value = scanner.scanUntil(openingTagRe);

            if (value) {
                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
                    chr = value.charAt(i);

                    if (isWhitespace(chr)) {
                        spaces.push(tokens.length);
                    } else {
                        nonSpace = true;
                    }

                    tokens.push(['text', chr, start, start + 1]);
                    start += 1;

                    // Check for whitespace on the current line.
                    if (chr === '\n')
                        stripSpace();
                }
            }

            // Match the opening tag.
            if (!scanner.scan(openingTagRe))
                break;

            hasTag = true;

            // Get the tag type.
            type = scanner.scan(tagRe) || 'name';
            scanner.scan(whiteRe);

            // Get the tag value.
            if (type === '=') {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe);
            } else if (type === '{') {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = '&';
            } else {
                value = scanner.scanUntil(closingTagRe);
            }

            // Match the closing tag.
            if (!scanner.scan(closingTagRe))
                throw new Error('Unclosed tag at ' + scanner.pos);

            token = [type, value, start, scanner.pos];
            tokens.push(token);

            if (type === '#' || type === '^') {
                sections.push(token);
            } else if (type === '/') {
                // Check section nesting.
                openSection = sections.pop();

                if (!openSection)
                    throw new Error('Unopened section "' + value + '" at ' + start);

                if (openSection[1] !== value)
                    throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            } else if (type === 'name' || type === '{' || type === '&') {
                nonSpace = true;
            } else if (type === '=') {
                // Set the tags for the next time around.
                compileTags(value);
            }
        }

        // Make sure there are no open sections when we're done.
        openSection = sections.pop();

        if (openSection)
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

        return nestTokens(squashTokens(tokens));
    }

    /**
     * Combines the values of consecutive text tokens in the given `tokens` array
     * to a single token.
     */
    function squashTokens(tokens) {
        var squashedTokens = [];

        var token, lastToken;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];

            if (token) {
                if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3];
                } else {
                    squashedTokens.push(token);
                    lastToken = token;
                }
            }
        }

        return squashedTokens;
    }

    /**
     * Forms the given array of `tokens` into a nested tree structure where
     * tokens that represent a section have two additional items: 1) an array of
     * all tokens that appear in that section and 2) the index in the original
     * template that represents the end of that section.
     */
    function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];

        var token, section;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];

            switch (token[0]) {
                case '#':
                case '^':
                    collector.push(token);
                    sections.push(token);
                    collector = token[4] = [];
                    break;
                case '/':
                    section = sections.pop();
                    section[5] = token[2];
                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                    break;
                default:
                    collector.push(token);
            }
        }

        return nestedTokens;
    }

    /**
     * A simple string scanner that is used by the template parser to find
     * tokens in template strings.
     */
    function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0;
    }

    /**
     * Returns `true` if the tail is empty (end of string).
     */
    Scanner.prototype.eos = function() {
        return this.tail === "";
    };

    /**
     * Tries to match the given regular expression at the current position.
     * Returns the matched text if it can match, the empty string otherwise.
     */
    Scanner.prototype.scan = function(re) {
        var match = this.tail.match(re);

        if (!match || match.index !== 0)
            return '';

        var string = match[0];

        this.tail = this.tail.substring(string.length);
        this.pos += string.length;

        return string;
    };

    /**
     * Skips all text until the given regular expression can be matched. Returns
     * the skipped string, which is the entire tail if no match can be made.
     */
    Scanner.prototype.scanUntil = function(re) {
        var index = this.tail.search(re),
            match;

        switch (index) {
            case -1:
                match = this.tail;
                this.tail = "";
                break;
            case 0:
                match = "";
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }

        this.pos += match.length;

        return match;
    };

    /**
     * Represents a rendering context by wrapping a view object and
     * maintaining a reference to the parent context.
     */
    function Context(view, parentContext) {
        this.view = view == null ? {} : view;
        this.cache = {
            '.': this.view
        };
        this.parent = parentContext;
    }

    /**
     * Creates a new context using the given view with this context
     * as the parent.
     */
    Context.prototype.push = function(view) {
        return new Context(view, this);
    };

    /**
     * Returns the value of the given name in this context, traversing
     * up the context hierarchy if the value is absent in this context's view.
     */
    Context.prototype.lookup = function(name) {
        var cache = this.cache;

        var value;
        if (name in cache) {
            value = cache[name];
        } else {
            var context = this,
                names, index;

            while (context) {
                if (name.indexOf('.') > 0) {
                    value = context.view;
                    names = name.split('.');
                    index = 0;

                    while (value != null && index < names.length)
                        value = value[names[index++]];
                } else {
                    value = context.view[name];
                }

                if (value != null)
                    break;

                context = context.parent;
            }

            cache[name] = value;
        }

        if (isFunction(value))
            value = value.call(this.view);

        return value;
    };

    /**
     * A Writer knows how to take a stream of tokens and render them to a
     * string, given a context. It also maintains a cache of templates to
     * avoid the need to parse the same template twice.
     */
    function Writer() {
        this.cache = {};
    }

    /**
     * Clears all cached templates in this writer.
     */
    Writer.prototype.clearCache = function() {
        this.cache = {};
    };

    /**
     * Parses and caches the given `template` and returns the array of tokens
     * that is generated from the parse.
     */
    Writer.prototype.parse = function(template, tags) {
        var cache = this.cache;
        var tokens = cache[template];

        if (tokens == null)
            tokens = cache[template] = parseTemplate(template, tags);

        return tokens;
    };

    /**
     * High-level method that is used to render the given `template` with
     * the given `view`.
     *
     * The optional `partials` argument may be an object that contains the
     * names and templates of partials that are used in the template. It may
     * also be a function that is used to load partial templates on the fly
     * that takes a single argument: the name of the partial.
     */
    Writer.prototype.render = function(template, view, partials) {
        var tokens = this.parse(template);
        var context = (view instanceof Context) ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template);
    };

    /**
     * Low-level method that renders the given array of `tokens` using
     * the given `context` and `partials`.
     *
     * Note: The `originalTemplate` is only ever used to extract the portion
     * of the original template that was contained in a higher-order section.
     * If the template doesn't use higher-order sections, this argument may
     * be omitted.
     */
    Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
        var buffer = '';

        // This function is used to render an arbitrary template
        // in the current context by higher-order sections.
        var self = this;

        function subRender(template) {
            return self.render(template, context, partials);
        }

        var token, value;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];

            switch (token[0]) {
                case '#':
                    value = context.lookup(token[1]);

                    if (!value)
                        continue;

                    if (isArray(value)) {
                        for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
                        }
                    } else if (typeof value === 'object' || typeof value === 'string') {
                        buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
                    } else if (isFunction(value)) {
                        if (typeof originalTemplate !== 'string')
                            throw new Error('Cannot use higher-order sections without the original template');

                        // Extract the portion of the original template that the section contains.
                        value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

                        if (value != null)
                            buffer += value;
                    } else {
                        buffer += this.renderTokens(token[4], context, partials, originalTemplate);
                    }

                    break;
                case '^':
                    value = context.lookup(token[1]);

                    // Use JavaScript's definition of falsy. Include empty arrays.
                    // See https://github.com/janl/mustache.js/issues/186
                    if (!value || (isArray(value) && value.length === 0))
                        buffer += this.renderTokens(token[4], context, partials, originalTemplate);

                    break;
                case '>':
                    if (!partials)
                        continue;

                    value = isFunction(partials) ? partials(token[1]) : partials[token[1]];

                    if (value != null)
                        buffer += this.renderTokens(this.parse(value), context, partials, value);

                    break;
                case '&':
                    value = context.lookup(token[1]);

                    if (value != null)
                        buffer += value;

                    break;
                case 'name':
                    value = context.lookup(token[1]);

                    if (value != null)
                        buffer += mustache.escape(value);

                    break;
                case 'text':
                    buffer += token[1];
                    break;
            }
        }

        return buffer;
    };

    mustache.name = "mustache.js";
    mustache.version = "0.8.1";
    mustache.tags = ["{{", "}}"];

    // All high-level mustache.* functions use this writer.
    var defaultWriter = new Writer();

    /**
     * Clears all cached templates in the default writer.
     */
    mustache.clearCache = function() {
        return defaultWriter.clearCache();
    };

    /**
     * Parses and caches the given template in the default writer and returns the
     * array of tokens it contains. Doing this ahead of time avoids the need to
     * parse templates on the fly as they are rendered.
     */
    mustache.parse = function(template, tags) {
        return defaultWriter.parse(template, tags);
    };

    /**
     * Renders the `template` with the given `view` and `partials` using the
     * default writer.
     */
    mustache.render = function(template, view, partials) {
        return defaultWriter.render(template, view, partials);
    };

    // This is here for backwards compatibility with 0.4.x.
    mustache.to_html = function(template, view, partials, send) {
        var result = mustache.render(template, view, partials);

        if (isFunction(send)) {
            send(result);
        } else {
            return result;
        }
    };

    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;

    // Export these mainly for testing, but also for advanced usage.
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;

}));
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

! function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function(a) {
                return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                    matches: b,
                    media: a
                }
            }
    }(a.document)
}(this),
function(a) {
    "use strict";

    function b() {
        v(!0)
    }
    var c = {};
    a.respond = c, c.update = function() {};
    var d = [],
        e = function() {
            var b = !1;
            try {
                b = new a.XMLHttpRequest
            } catch (c) {
                b = new a.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return b
            }
        }(),
        f = function(a, b) {
            var c = e();
            c && (c.open("GET", a, !0), c.onreadystatechange = function() {
                4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
            }, 4 !== c.readyState && c.send(null))
        },
        g = function(a) {
            return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
        };
    if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
            other: /\([^\)]*\)/g
        }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
        var h, i, j, k = a.document,
            l = k.documentElement,
            m = [],
            n = [],
            o = [],
            p = {},
            q = 30,
            r = k.getElementsByTagName("head")[0] || l,
            s = k.getElementsByTagName("base")[0],
            t = r.getElementsByTagName("link"),
            u = function() {
                var a, b = k.createElement("div"),
                    c = k.body,
                    d = l.style.fontSize,
                    e = c && c.style.fontSize,
                    f = !1;
                return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a)
            },
            v = function(b) {
                var c = "clientWidth",
                    d = l[c],
                    e = "CSS1Compat" === k.compatMode && d || k.body[c] || d,
                    f = {},
                    g = t[t.length - 1],
                    p = (new Date).getTime();
                if (b && h && q > p - h) return a.clearTimeout(i), i = a.setTimeout(v, q), void 0;
                h = p;
                for (var s in m)
                    if (m.hasOwnProperty(s)) {
                        var w = m[s],
                            x = w.minw,
                            y = w.maxw,
                            z = null === x,
                            A = null === y,
                            B = "em";
                        x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
                    }
                for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
                o.length = 0;
                for (var D in f)
                    if (f.hasOwnProperty(D)) {
                        var E = k.createElement("style"),
                            F = f[D].join("\n");
                        E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E)
                    }
            },
            w = function(a, b, d) {
                var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media),
                    f = e && e.length || 0;
                b = b.substring(0, b.lastIndexOf("/"));
                var h = function(a) {
                        return a.replace(c.regex.urls, "$1" + b + "$2$3")
                    },
                    i = !f && d;
                b.length && (b += "/"), i && (f = 1);
                for (var j = 0; f > j; j++) {
                    var k, l, o, p;
                    i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length;
                    for (var q = 0; p > q; q++) l = o[q], g(l) || m.push({
                        media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
                        rules: n.length - 1,
                        hasquery: l.indexOf("(") > -1,
                        minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
                }
                v()
            },
            x = function() {
                if (d.length) {
                    var b = d.shift();
                    f(b.href, function(c) {
                        w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function() {
                            x()
                        }, 0)
                    })
                }
            },
            y = function() {
                for (var b = 0; b < t.length; b++) {
                    var c = t[b],
                        e = c.href,
                        f = c.media,
                        g = c.rel && "stylesheet" === c.rel.toLowerCase();
                    e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({
                        href: e,
                        media: f
                    })))
                }
                x()
            };
        y(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
}(this);

/**
 * @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
! function(a, b) {
    function c(a, b) {
        var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function d() {
        var a = t.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function e(a, b) {
        var c = t.elements;
        "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b)
    }

    function f(a) {
        var b = s[a[q]];
        return b || (b = {}, r++, a[q] = r, s[r] = b), b
    }

    function g(a, c, d) {
        if (c || (c = b), l) return c.createElement(a);
        d || (d = f(c));
        var e;
        return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    }

    function h(a, c) {
        if (a || (a = b), l) return a.createDocumentFragment();
        c = c || f(a);
        for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) e.createElement(h[g]);
        return e
    }

    function i(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return t.shivMethods ? g(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(t, b.frag)
    }

    function j(a) {
        a || (a = b);
        var d = f(a);
        return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a
    }
    var k, l, m = "3.7.2",
        n = a.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        q = "_html5shiv",
        r = 0,
        s = {};
    ! function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            k = !0, l = !0
        }
    }();
    var t = {
        elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: m,
        shivCSS: n.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: n.shivMethods !== !1,
        type: "default",
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e
    };
    a.html5 = t, j(b)
}(this, document);

/**
 * @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
! function(a, b) {
    function c(a, b) {
        var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function d() {
        var a = y.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function e(a, b) {
        var c = y.elements;
        "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), y.elements = c + " " + a, j(b)
    }

    function f(a) {
        var b = x[a[v]];
        return b || (b = {}, w++, a[v] = w, x[w] = b), b
    }

    function g(a, c, d) {
        if (c || (c = b), q) return c.createElement(a);
        d || (d = f(c));
        var e;
        return e = d.cache[a] ? d.cache[a].cloneNode() : u.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || t.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    }

    function h(a, c) {
        if (a || (a = b), q) return a.createDocumentFragment();
        c = c || f(a);
        for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) e.createElement(h[g]);
        return e
    }

    function i(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return y.shivMethods ? g(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(y, b.frag)
    }

    function j(a) {
        a || (a = b);
        var d = f(a);
        return !y.shivCSS || p || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), q || i(a, d), a
    }

    function k(a) {
        for (var b, c = a.getElementsByTagName("*"), e = c.length, f = RegExp("^(?:" + d().join("|") + ")$", "i"), g = []; e--;) b = c[e], f.test(b.nodeName) && g.push(b.applyElement(l(b)));
        return g
    }

    function l(a) {
        for (var b, c = a.attributes, d = c.length, e = a.ownerDocument.createElement(A + ":" + a.nodeName); d--;) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
        return e.style.cssText = a.style.cssText, e
    }

    function m(a) {
        for (var b, c = a.split("{"), e = c.length, f = RegExp("(^|[\\s,>+~])(" + d().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), g = "$1" + A + "\\:$2"; e--;) b = c[e] = c[e].split("}"), b[b.length - 1] = b[b.length - 1].replace(f, g), c[e] = b.join("}");
        return c.join("{")
    }

    function n(a) {
        for (var b = a.length; b--;) a[b].removeNode()
    }

    function o(a) {
        function b() {
            clearTimeout(g._removeSheetTimer), d && d.removeNode(!0), d = null
        }
        var d, e, g = f(a),
            h = a.namespaces,
            i = a.parentWindow;
        return !B || a.printShived ? a : ("undefined" == typeof h[A] && h.add(A), i.attachEvent("onbeforeprint", function() {
            b();
            for (var f, g, h, i = a.styleSheets, j = [], l = i.length, n = Array(l); l--;) n[l] = i[l];
            for (; h = n.pop();)
                if (!h.disabled && z.test(h.media)) {
                    try {
                        f = h.imports, g = f.length
                    } catch (o) {
                        g = 0
                    }
                    for (l = 0; g > l; l++) n.push(f[l]);
                    try {
                        j.push(h.cssText)
                    } catch (o) {}
                }
            j = m(j.reverse().join("")), e = k(a), d = c(a, j)
        }), i.attachEvent("onafterprint", function() {
            n(e), clearTimeout(g._removeSheetTimer), g._removeSheetTimer = setTimeout(b, 500)
        }), a.printShived = !0, a)
    }
    var p, q, r = "3.7.2",
        s = a.html5 || {},
        t = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        v = "_html5shiv",
        w = 0,
        x = {};
    ! function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", p = "hidden" in a, q = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            p = !0, q = !0
        }
    }();
    var y = {
        elements: s.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: r,
        shivCSS: s.shivCSS !== !1,
        supportsUnknownElements: q,
        shivMethods: s.shivMethods !== !1,
        type: "default",
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e
    };
    a.html5 = y, j(b);
    var z = /^$|\b(?:all|print)\b/,
        A = "html5shiv",
        B = !q && function() {
            var c = b.documentElement;
            return !("undefined" == typeof b.namespaces || "undefined" == typeof b.parentWindow || "undefined" == typeof c.applyElement || "undefined" == typeof c.removeNode || "undefined" == typeof a.attachEvent)
        }();
    y.type += " print", y.shivPrint = o, o(b)
}(this, document);

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {},
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {},
                n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;)
                if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++)
                if (e = h[p], "zIndex" in e)
                    if (e.zIndex == l[j]) {
                        if (n.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e)
                    } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b) return h;
        return d.f.push(b),
            function(a) {
                +a == +a && (b.zIndex = +a)
            }
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function() {
        c = 1
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function() {
        return b.split(f)
    }, k.off = k.unbind = function(a, b) {
        if (!a) return void(k._events = j = {
            n: {}
        });
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c) c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) {
                                c.f.splice(m, 1);
                                break
                            }!c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) {
                                    q.splice(m, 1);
                                    break
                                }!q.length && delete c.n[d].f
                        }
                } else {
                    delete c.f;
                    for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k
    }) : a.eve = k
}(window || this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    function c(a) {
        if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }

    function d(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = d(a[c]));
        return b
    }

    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }

    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0),
                g = f.join("␀"),
                h = d.cache = d.cache || {},
                i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }
        return d
    }

    function g() {
        return this.hex
    }

    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }

    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }

    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k,
                r = i(q, a, c, e, g),
                s = i(q, b, d, f, h),
                t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }

    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1,
                m = l / 2,
                n = l - m,
                o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }

    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
                    x: l,
                    y: m
                }
            }
        }
    }

    function m(a, b, d) {
        var e = c.bezierBBox(a),
            f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({
                x: r.x,
                y: r.y,
                t: q / i
            })
        }
        for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
            x: r.x,
            y: r.y,
            t: q / k
        });
        for (q = 0; i > q; q++)
            for (var s = 0; k > s; s++) {
                var t = m[q],
                    u = m[q + 1],
                    v = n[s],
                    w = n[s + 1],
                    x = Q(u.x - t.x) < .001 ? "y" : "x",
                    y = Q(w.x - v.x) < .001 ? "y" : "x",
                    z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
                if (z) {
                    if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                    o[z.x.toFixed(4)] = z.y.toFixed(4);
                    var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                        B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                    A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
                        x: z.x,
                        y: z.y,
                        t1: P(A, 1),
                        t2: P(B, 1)
                    }))
                }
            }
        return p
    }

    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0]) e = i = s[1], f = j = s[2];
            else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0]) g = k = v[1], h = l = v[2];
                    else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d) p += w;
                        else {
                            for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }

    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }

    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }

        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }

        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b) return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e) return c;
            if (e > d) return d;
            for (; d > c;) {
                if (f = g(e), Q(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var j = 3 * b,
            k = 3 * (d - b) - j,
            l = 1 - j - k,
            m = 3 * c,
            n = 3 * (e - c) - m,
            o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }

    function r(a, b) {
        var c = [],
            d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(lb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }

    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms,
            r = {},
            s = {},
            t = {};
        if (f)
            for (v = 0, x = ic.length; x > v; v++) {
                var u = ic[v];
                if (u.el.id == d.id && u.anim == a) {
                    u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                    break
                }
            } else f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j) j.initstatus = f, j.start = new Date - j.ms * f;
            else {
                for (var y in i)
                    if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
                        case T:
                            t[y] = (s[y] - r[y]) / p;
                            break;
                        case "colour":
                            r[y] = c.getRGB(r[y]);
                            var A = c.getRGB(s[y]);
                            t[y] = {
                                r: (A.r - r[y].r) / p,
                                g: (A.g - r[y].g) / p,
                                b: (A.b - r[y].b) / p
                            };
                            break;
                        case "path":
                            var B = Kb(r[y], s[y]),
                                C = B[1];
                            for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                                t[y][v] = [0];
                                for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                            }
                            break;
                        case "transform":
                            var G = d._,
                                H = Pb(G[y], s[y]);
                            if (H)
                                for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                                    for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
                            else {
                                var K = d.matrix || new o,
                                    L = {
                                        _: {
                                            transform: G.transform
                                        },
                                        getBBox: function() {
                                            return d.getBBox(1)
                                        }
                                    };
                                r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                            }
                            break;
                        case "csv":
                            var M = I(i[y])[J](w),
                                N = I(r[y])[J](w);
                            if ("clip-rect" == y)
                                for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
                            s[y] = M;
                            break;
                        default:
                            for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                    }
                var O = i.easing,
                    P = c.easing_formulas[O];
                if (!P)
                    if (P = I(O).match(Z), P && 5 == P.length) {
                        var Q = P;
                        P = function(a) {
                            return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
                        }
                    } else P = nb;
                if (n = i.start || a.start || +new Date, u = {
                        anim: a,
                        percent: e,
                        timestamp: n,
                        start: n + (a.del || 0),
                        status: 0,
                        initstatus: f || 0,
                        stop: !1,
                        ms: p,
                        easing: P,
                        from: r,
                        diff: t,
                        to: s,
                        el: d,
                        callback: i.callback,
                        prev: m,
                        next: l,
                        repeat: h || a.times,
                        origin: d.attr(),
                        totalOrigin: g
                    }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length)) return kc();
                k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }

    function t(a) {
        for (var b = 0; b < ic.length; b++) ic[b].el.paper == a && ic.splice(b--, 1)
    }
    c.version = "2.1.2", c.eve = b;
    var u, v, w = /[, ]+/,
        x = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        y = /\{(\d+)\}/g,
        z = "hasOwnProperty",
        A = {
            doc: document,
            win: a
        },
        B = {
            was: Object.prototype[z].call(A.win, "Raphael"),
            is: A.win.Raphael
        },
        C = function() {
            this.ca = this.customAttributes = {}
        },
        D = "apply",
        E = "concat",
        F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
        G = "",
        H = " ",
        I = String,
        J = "split",
        K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
        L = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        M = I.prototype.toLowerCase,
        N = Math,
        O = N.max,
        P = N.min,
        Q = N.abs,
        R = N.pow,
        S = N.PI,
        T = "number",
        U = "string",
        V = "array",
        W = Object.prototype.toString,
        X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        Y = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        $ = N.round,
        _ = parseFloat,
        ab = parseInt,
        bb = I.prototype.toUpperCase,
        cb = c._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        db = c._availableAnimAttrs = {
            blur: T,
            "clip-rect": "csv",
            cx: T,
            cy: T,
            fill: "colour",
            "fill-opacity": T,
            "font-size": T,
            height: T,
            opacity: T,
            path: "path",
            r: T,
            rx: T,
            ry: T,
            stroke: "colour",
            "stroke-opacity": T,
            "stroke-width": T,
            transform: "transform",
            width: T,
            x: T,
            y: T
        },
        eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        fb = {
            hs: 1,
            rg: 1
        },
        gb = /,?([achlmqrstvxz]),?/gi,
        hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        lb = function(a, b) {
            return _(a) - _(b)
        },
        mb = function() {},
        nb = function(a) {
            return a
        },
        ob = c._rectPath = function(a, b, c, d, e) {
            return e ? [
                ["M", a + e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ] : [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ]
        },
        pb = function(a, b, c, d) {
            return null == d && (d = c), [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ]
        },
        qb = c._getPath = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height, b.r)
            },
            image: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height)
            },
            text: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            },
            set: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            }
        },
        rb = c.mapPath = function(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = Kb(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sb, tb = A.doc.createElement("div");
        if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj) return c.type = G;
        tb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
    }, c.angle = function(a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d,
                i = b - e;
            return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function(a) {
        return a % 360 * S / 180
    }, c.deg = function(a) {
        return 180 * a / S % 360
    }, c.snapTo = function(a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
            for (var e = a.length; e--;)
                if (Q(a[e] - b) <= d) return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f) return b - f;
            if (f > a - d) return b - f + a
        }
        return b
    };
    c.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = 16 * N.random() | 0,
            c = "x" == a ? b : 3 & b | 8;
        return c.toString(16)
    });
    c.setWindow = function(a) {
        b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
    };
    var ub = function(a) {
            if (c.vml) {
                var b, d = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), b = e.body
                } catch (g) {
                    b = createPopup().document.body
                }
                var h = b.createTextRange();
                ub = f(function(a) {
                    try {
                        b.style.color = I(a).replace(d, G);
                        var c = h.queryCommandValue("ForeColor");
                        return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                    } catch (e) {
                        return "none"
                    }
                })
            } else {
                var i = A.doc.createElement("i");
                i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
                    return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
                })
            }
            return ub(a)
        },
        vb = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        wb = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        xb = function() {
            return this.hex
        },
        yb = function(a, b, d) {
            if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
                var e = c.getRGB(a);
                a = e.r, b = e.g, d = e.b
            }
            return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        },
        zb = function(a, b, d, e) {
            a *= 255, b *= 255, d *= 255;
            var f = {
                r: a,
                g: b,
                b: d,
                hex: c.rgb(a, b, d),
                toString: xb
            };
            return c.is(e, "finite") && (f.opacity = e), f
        };
    c.color = function(a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
    }, c.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.rgb2hsb = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
            h: d,
            s: e,
            b: f,
            toString: vb
        }
    }, c.rgb2hsl = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
            h: d,
            s: e,
            l: f,
            toString: wb
        }
    }, c._path2string = function() {
        return this.join(",").replace(gb, "$1")
    };
    c._preload = function(a, b) {
        var c = A.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, A.doc.body.removeChild(this)
        }, c.onerror = function() {
            A.doc.body.removeChild(this)
        }, A.doc.body.appendChild(c), c.src = a
    };
    c.getRGB = f(function(a) {
        if (!a || (a = I(a)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: g
        };
        !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
        var b, d, e, f, h, i, j = a.match(X);
        return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
            r: b,
            g: d,
            b: e,
            toString: g
        }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        }
    }, c), c.hsb = f(function(a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = f(function(a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = f(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: a || .75
            },
            c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })), c.hex
    }, c.getColor.reset = function() {
        delete this.start
    }, c.parsePathString = function(a) {
        if (!a) return null;
        var b = Ab(a);
        if (b.arr) return Cb(b.arr);
        var d = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            e = [];
        return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            if (c.replace(jb, function(a, b) {
                    b && f.push(+b)
                }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
            else
                for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
        }), e.toString = c._path2string, b.arr = Cb(e), e
    }, c.parseTransformString = f(function(a) {
        if (!a) return null;
        var b = [];
        return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
            {
                var e = [];
                M.call(c)
            }
            d.replace(jb, function(a, b) {
                b && e.push(+b)
            }), b.push([c][E](e))
        }), b.toString = c._path2string, b
    });
    var Ab = function(a) {
        var b = Ab.ps = Ab.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = R(j, 3),
            l = R(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * N.atan2(q - s, r - t) / S;
        return (q > s || t > r) && (y += 180), {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: y
        }
    }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Jb.apply(null, a);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, c.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function(a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function(a, b) {
        return n(a, b)
    }, c.pathIntersectionNumber = function(a, b) {
        return n(a, b, 1)
    }, c.isPointInsidePath = function(a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && n(a, [
            ["M", b, d],
            ["H", e.x2 + 10]
        ], 1) % 2 == 1
    }, c._removedFactory = function(a) {
        return function() {
            b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var Bb = c.pathBBox = function(a) {
            var b = Ab(a);
            if (b.bbox) return d(b.bbox);
            if (!a) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
            a = Kb(a);
            for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
                if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
                else {
                    var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
                    g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
                }
            var l = P[D](0, g),
                m = P[D](0, h),
                n = O[D](0, g),
                o = O[D](0, h),
                p = n - l,
                q = o - m,
                r = {
                    x: l,
                    y: m,
                    x2: n,
                    y2: o,
                    width: p,
                    height: q,
                    cx: l + p / 2,
                    cy: m + q / 2
                };
            return b.bbox = d(r), r
        },
        Cb = function(a) {
            var b = d(a);
            return b.toString = c._path2string, b
        },
        Db = c._pathToRelative = function(a) {
            var b = Ab(a);
            if (b.rel) return Cb(b.rel);
            c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = a.length; k > j; j++) {
                var l = d[j] = [],
                    m = a[j];
                if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                        break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3);
                        break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                } else {
                    l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
                }
                var r = d[j].length;
                switch (d[j][0]) {
                    case "z":
                        e = g, f = h;
                        break;
                    case "h":
                        e += +d[j][r - 1];
                        break;
                    case "v":
                        f += +d[j][r - 1];
                        break;
                    default:
                        e += +d[j][r - 2], f += +d[j][r - 1]
                }
            }
            return d.toString = c._path2string, b.rel = Cb(d), d
        },
        Eb = c._pathToAbsolute = function(a) {
            var b = Ab(a);
            if (b.abs) return Cb(b.abs);
            if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [
                ["M", 0, 0]
            ];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                i = 0,
                j = 0;
            "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
            for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
                if (d.push(k = []), l = a[n], l[0] != bb.call(l[0])) switch (k[0] = bb.call(l[0]), k[0]) {
                        case "A":
                            k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                            break;
                        case "V":
                            k[1] = +l[1] + f;
                            break;
                        case "H":
                            k[1] = +l[1] + e;
                            break;
                        case "R":
                            for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                            d.pop(), d = d[E](h(p, m));
                            break;
                        case "M":
                            g = +l[1] + e, i = +l[2] + f;
                        default:
                            for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
                    } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
                    else
                        for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                switch (k[0]) {
                    case "Z":
                        e = g, f = i;
                        break;
                    case "H":
                        e = k[1];
                        break;
                    case "V":
                        f = k[1];
                        break;
                    case "M":
                        g = k[k.length - 2], i = k[k.length - 1];
                    default:
                        e = k[k.length - 2], f = k[k.length - 1]
                }
            }
            return d.toString = c._path2string, b.abs = Cb(d), d
        },
        Fb = function(a, b, c, d) {
            return [a, b, c, d, c, d]
        },
        Gb = function(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        },
        Hb = function(a, b, c, d, e, g, h, i, j, k) {
            var l, m = 120 * S / 180,
                n = S / 180 * (+e || 0),
                o = [],
                p = f(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
                    r = (b - j) / 2,
                    s = q * q / (c * c) + r * r / (d * d);
                s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
                var t = c * c,
                    u = d * d,
                    v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * c * r / d + (a + i) / 2,
                    x = v * -d * q / c + (b + j) / 2,
                    y = N.asin(((b - x) / d).toFixed(9)),
                    z = N.asin(((j - x) / d).toFixed(9));
                y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
            }
            var A = z - y;
            if (Q(A) > m) {
                var B = z,
                    C = i,
                    D = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                K = N.tan(A / 4),
                L = 4 / 3 * c * K,
                M = 4 / 3 * d * K,
                O = [a, b],
                P = [a + L * G, b - M * F],
                R = [i + L * I, j - M * H],
                T = [i, j];
            if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
            o = [P, R, T][E](o).join()[J](",");
            for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
            return U
        },
        Ib = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
                y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
            }
        },
        Jb = f(function(a, b, c, d, e, f, g, h) {
            var i, j = e - 2 * c + a - (g - 2 * e + c),
                k = 2 * (c - a) - 2 * (e - c),
                l = a - c,
                m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
                n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
                o = [b, h],
                p = [a, g];
            return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
                min: {
                    x: P[D](0, p),
                    y: P[D](0, o)
                },
                max: {
                    x: O[D](0, p),
                    y: O[D](0, o)
                }
            }
        }),
        Kb = c._path2curve = f(function(a, b) {
            var c = !b && Ab(a);
            if (!b && c.curve) return Cb(c.curve);
            for (var d = Eb(a), e = b && Eb(b), f = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, h = (function(a, b, c) {
                    var d, e, f = {
                        T: 1,
                        Q: 1
                    };
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in f) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][E](a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), i = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
                        a.splice(b, 1), l = O(d.length, e && e.length || 0)
                    }
                }, j = function(a, b, c, f, g) {
                    a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
                }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var m = d[k],
                    n = e && e[k],
                    o = m.length,
                    p = e && n.length;
                f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
            }
            return e || (c.curve = Cb(d)), e ? [d, e] : d
        }, null, Cb),
        Lb = (c._parseDots = f(function(a) {
            for (var b = [], d = 0, e = a.length; e > d; d++) {
                var f = {},
                    g = a[d].match(/^([^:]*):?([\d\.]*)/);
                if (f.color = c.getRGB(g[1]), f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
            }
            for (d = 1, e = b.length - 1; e > d; d++)
                if (!b[d].offset) {
                    for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                        if (b[j].offset) {
                            i = b[j].offset;
                            break
                        }
                    i || (i = 100, j = e), i = _(i);
                    for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
                }
            return b
        }), c._tear = function(a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        }),
        Mb = (c._tofront = function(a, b) {
            b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        }, c._toback = function(a, b) {
            b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        }, c._insertafter = function(a, b, c) {
            Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        }, c._insertbefore = function(a, b, c) {
            Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        }, c.toMatrix = function(a, b) {
            var c = Bb(a),
                d = {
                    _: {
                        transform: G
                    },
                    getBBox: function() {
                        return c
                    }
                };
            return Nb(d, b), d.matrix
        }),
        Nb = (c.transformPath = function(a, b) {
            return rb(a, Mb(a, b))
        }, c._extractTransform = function(a, b) {
            if (null == b) return a._.transform;
            b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
            var d = c.parseTransformString(b),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new o;
            if (j.transform = d || [], d)
                for (var l = 0, m = d.length; m > l; l++) {
                    var n, p, q, r, s, t = d[l],
                        u = t.length,
                        v = I(t[0]).toLowerCase(),
                        w = t[0] != v,
                        x = w ? k.invert() : 0;
                    "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
                }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        }),
        Ob = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        },
        Pb = c._equaliseTransform = function(a, b) {
            b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
            for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
                if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
                for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
            }
            return {
                from: i,
                to: j
            }
        };
    c._getContainer = function(a, b, d, e) {
            var f;
            return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
                container: f,
                width: f.style.pixelWidth || f.offsetWidth,
                height: f.style.pixelHeight || f.offsetHeight
            } : {
                container: f,
                width: b,
                height: d
            } : {
                container: 1,
                x: a,
                y: b,
                width: d,
                height: e
            } : void 0
        }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
            return new o(a, b, c, d, e, f)
        },
        function(a) {
            function b(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function d(a) {
                var c = N.sqrt(b(a));
                a[0] && (a[0] /= c), a[1] && (a[1] /= c)
            }
            a.add = function(a, b, c, d, e, f) {
                var g, h, i, j, k = [
                        [],
                        [],
                        []
                    ],
                    l = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    m = [
                        [a, c, e],
                        [b, d, f],
                        [0, 0, 1]
                    ];
                for (a && a instanceof o && (m = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), g = 0; 3 > g; g++)
                    for (h = 0; 3 > h; h++) {
                        for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                        k[g][h] = j
                    }
                this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
            }, a.invert = function() {
                var a = this,
                    b = a.a * a.d - a.b * a.c;
                return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
            }, a.clone = function() {
                return new o(this.a, this.b, this.c, this.d, this.e, this.f)
            }, a.translate = function(a, b) {
                this.add(1, 0, 0, 1, a, b)
            }, a.scale = function(a, b, c, d) {
                null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
            }, a.rotate = function(a, b, d) {
                a = c.rad(a), b = b || 0, d = d || 0;
                var e = +N.cos(a).toFixed(9),
                    f = +N.sin(a).toFixed(9);
                this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
            }, a.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, a.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, a.get = function(a) {
                return +this[I.fromCharCode(97 + a)].toFixed(4)
            }, a.toString = function() {
                return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, a.toFilter = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, a.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, a.split = function() {
                var a = {};
                a.dx = this.e, a.dy = this.f;
                var e = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
                var f = -e[0][1],
                    g = e[1][1];
                return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
            }, a.toTransformString = function(a) {
                var b = a || this[J]();
                return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(o.prototype);
    var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : mb;
    for (var Rb = function() {
            this.returnValue = !1
        }, Sb = function() {
            return this.originalEvent.preventDefault()
        }, Tb = function() {
            this.cancelBubble = !0
        }, Ub = function() {
            return this.originalEvent.stopPropagation()
        }, Vb = function(a) {
            var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            return {
                x: a.clientX + c,
                y: a.clientY + b
            }
        }, Wb = function() {
            return A.doc.addEventListener ? function(a, b, c, d) {
                var e = function(a) {
                    var b = Vb(a);
                    return c.call(d, a, b.x, b.y)
                };
                if (a.addEventListener(b, e, !1), F && L[b]) {
                    var f = function(b) {
                        for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                            if (b.targetTouches[g].target == a) {
                                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                                break
                            }
                        return c.call(d, b, e.x, e.y)
                    };
                    a.addEventListener(L[b], f, !1)
                }
                return function() {
                    return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], e, !1), !0
                }
            } : A.doc.attachEvent ? function(a, b, c, d) {
                var e = function(a) {
                    a = a || A.win.event;
                    var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                        e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b;
                    return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function() {
                    return a.detachEvent("on" + b, e), !0
                };
                return f
            } : void 0
        }(), Xb = [], Yb = function(a) {
            for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--;) {
                if (c = Xb[h], F && a.touches) {
                    for (var i, j = a.touches.length; j--;)
                        if (i = a.touches[j], i.identifier == c.el._drag.id) {
                            d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                } else a.preventDefault();
                var k, l = c.el.node,
                    m = l.nextSibling,
                    n = l.parentNode,
                    o = l.style.display;
                A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
            }
        }, Zb = function(a) {
            c.unmousemove(Yb).unmouseup(Zb);
            for (var d, e = Xb.length; e--;) d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
            Xb = []
        }, $b = c.el = {}, _b = K.length; _b--;) ! function(a) {
        c[a] = $b[a] = function(b, d) {
            return c.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)
            })), this
        }, c["un" + a] = $b["un" + a] = function(b) {
            for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
            return this
        }
    }(K[_b]);
    $b.data = function(a, d) {
        var e = kb[this.id] = kb[this.id] || {};
        if (0 == arguments.length) return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a) a[z](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, $b.removeData = function(a) {
        return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
    }, $b.getData = function() {
        return d(kb[this.id] || {})
    }, $b.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, $b.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var ac = [];
    $b.drag = function(a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = i.clientX,
                k = i.clientY,
                l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            if (this._drag.id = i.identifier, F && i.touches)
                for (var n, o = i.touches.length; o--;)
                    if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
                        j = n.clientX, k = n.clientY;
                        break
                    }
            this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({
                el: this,
                move_scope: f,
                start_scope: g,
                end_scope: h
            }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
        }
        return this._drag = {}, ac.push({
            el: this,
            start: i
        }), this.mousedown(i), this
    }, $b.onDragOver = function(a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, $b.undrag = function() {
        for (var a = ac.length; a--;) ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
    }, v.circle = function(a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, v.rect = function(a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.ellipse = function(a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, v.path = function(a) {
        a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
        var b = c._engine.path(c.format[D](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, v.image = function(a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.text = function(a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d));
        return this.__set__ && this.__set__.push(e), e
    }, v.set = function(a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new mc(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, v.setStart = function(a) {
        this.__set__ = a || this.set()
    }, v.setFinish = function() {
        var a = this.__set__;
        return delete this.__set__, a
    }, v.setSize = function(a, b) {
        return c._engine.setSize.call(this, a, b)
    }, v.setViewBox = function(a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, v.top = v.bottom = null, v.raphael = c;
    var bc = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };
    v.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = A.doc.elementFromPoint(a, b);
        if (A.win.opera && "svg" == e.tagName) {
            var f = bc(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, v.getElementsByBBox = function(a) {
        var b = this.set();
        return this.forEach(function(d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, v.getById = function(a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    }, v.forEach = function(a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    }, v.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, $b.isPointInside = function(a, b) {
        var d = this.realPath = qb[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
    }, $b.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
    }, $b.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, $b.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
                width: (a.width || 10) + (+this.attr("stroke-width") || 1),
                fill: a.fill || !1,
                opacity: a.opacity || .5,
                offsetx: a.offsetx || 0,
                offsety: a.offsety || 0,
                color: a.color || "#000"
            },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || qb[this.type](this);
        f = this.matrix ? rb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cc = function(a, b, d, e, f, g, h, i, l) {
            return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
        },
        dc = function(a, b) {
            return function(d, e, f) {
                d = Kb(d);
                for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                    if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                    else {
                        if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                            if (b && !m.start) {
                                if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue
                            }
                            if (!a && !b) return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                                x: k.x,
                                y: k.y,
                                alpha: k.alpha
                            }
                        }
                        n += j, g = +i[5], h = +i[6]
                    }
                    l += i.shift() + i
                }
                return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
                    x: k.x,
                    y: k.y,
                    alpha: k.alpha
                }), k
            }
        },
        ec = dc(1),
        fc = dc(),
        gc = dc(0, 1);
    c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return gc(a, b).end;
        var d = gc(a, c, 1);
        return b ? gc(d, b).end : d
    }, $b.getTotalLength = function() {
        var a = this.getPath();
        if (a) return this.node.getTotalLength ? this.node.getTotalLength() : ec(a)
    }, $b.getPointAtLength = function(a) {
        var b = this.getPath();
        if (b) return fc(b, a)
    }, $b.getPath = function() {
        var a, b = c._getPath[this.type];
        if ("text" != this.type && "set" != this.type) return b && (a = b(this)), a
    }, $b.getSubpath = function(a, b) {
        var d = this.getPath();
        if (d) return c.getSubpath(d, a, b)
    };
    var hc = c.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return R(a, 1.7)
        },
        ">": function(a) {
            return R(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = N.sqrt(.1734 + b * b),
                d = c - b,
                e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !!a ? a : R(2, -10 * a) * N.sin(2 * (a - .075) * S / .3) + 1
        },
        bounce: function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }
    };
    hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
    var ic = [],
        jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        },
        kc = function() {
            for (var a = +new Date, d = 0; d < ic.length; d++) {
                var e = ic[d];
                if (!e.el.removed && !e.paused) {
                    var f, g, h = a - e.start,
                        i = e.ms,
                        j = e.easing,
                        k = e.from,
                        l = e.diff,
                        m = e.to,
                        n = (e.t, e.el),
                        o = {},
                        p = {};
                    if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                        if (i > h) {
                            var q = j(h / i);
                            for (var r in k)
                                if (k[z](r)) {
                                    switch (db[r]) {
                                        case T:
                                            f = +k[r] + q * i * l[r];
                                            break;
                                        case "colour":
                                            f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            f = [];
                                            for (var t = 0, u = k[r].length; u > t; t++) {
                                                f[t] = [k[r][t][0]];
                                                for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                                                f[t] = f[t].join(H)
                                            }
                                            f = f.join(H);
                                            break;
                                        case "transform":
                                            if (l[r].real)
                                                for (f = [], t = 0, u = k[r].length; u > t; t++)
                                                    for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                                            else {
                                                var x = function(a) {
                                                    return +k[r][a] + q * i * l[r][a]
                                                };
                                                f = [
                                                    ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                ]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == r)
                                                for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                                            break;
                                        default:
                                            var y = [][E](k[r]);
                                            for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                                    }
                                    o[r] = f
                                }
                            n.attr(o),
                                function(a, c, d) {
                                    setTimeout(function() {
                                        b("raphael.anim.frame." + a, c, d)
                                    })
                                }(n.id, n, e.anim)
                        } else {
                            if (function(a, d, e) {
                                    setTimeout(function() {
                                        b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                                    })
                                }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                                for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                                e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                            }
                            e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                        }
                }
            }
            c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
        },
        lc = function(a) {
            return a > 255 ? 255 : 0 > a ? 0 : a
        };
    $b.animateWith = function(a, b, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h), h;
        var i = d instanceof r ? d : c.animation(d, e, f, g);
        s(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = ic.length; k > j; j++)
            if (ic[j].anim == b && ic[j].el == a) {
                ic[k - 1].start = ic[j].start;
                break
            }
        return h
    }, $b.onAnimation = function(a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, r.prototype.delay = function(a) {
        var b = new r(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, r.prototype.repeat = function(a) {
        var b = new r(this.anim, this.ms);
        return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
    }, c.animation = function(a, b, d, e) {
        if (a instanceof r) return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var f, g, h = {};
        for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
        return f ? (d && (h.easing = d), e && (h.callback = e), new r({
            100: h
        }, b)) : new r(a, b)
    }, $b.animate = function(a, b, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f), f;
        var g = a instanceof r ? a : c.animation(a, b, d, e);
        return s(g, f, g.percents[0], null, f.attr()), f
    }, $b.setTime = function(a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
    }, $b.status = function(a, b) {
        var c, d, e = [],
            f = 0;
        if (null != b) return s(a, this, -1, P(b, 1)), this;
        for (c = ic.length; c > f; f++)
            if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
                if (a) return d.status;
                e.push({
                    anim: d.anim,
                    status: d.status
                })
            }
        return a ? 0 : e
    }, $b.pause = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
        return this
    }, $b.resume = function(a) {
        for (var c = 0; c < ic.length; c++)
            if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
                var d = ic[c];
                b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
            }
        return this
    }, $b.stop = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
        return this
    }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
        return "Raphaël’s object"
    };
    var mc = function(a) {
            if (this.items = [], this.length = 0, this.type = "set", a)
                for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
        },
        nc = mc.prototype;
    nc.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, nc.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, nc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var oc in $b) $b[z](oc) && (nc[oc] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][D](c, b)
            })
        }
    }(oc));
    return nc.attr = function(a, b) {
            if (a && c.is(a, V) && c.is(a[0], "object"))
                for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
            else
                for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
            return this
        }, nc.clear = function() {
            for (; this.length;) this.pop()
        }, nc.splice = function(a, b) {
            a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
            var c, d = [],
                e = [],
                f = [];
            for (c = 2; c < arguments.length; c++) f.push(arguments[c]);
            for (c = 0; b > c; c++) e.push(this[a + c]);
            for (; c < this.length - a; c++) d.push(this[a + c]);
            var g = f.length;
            for (c = 0; c < g + d.length; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
            for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
            return new mc(e)
        }, nc.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0
        }, nc.animate = function(a, b, d, e) {
            (c.is(d, "function") || !d) && (e = d || null);
            var f, g, h = this.items.length,
                i = h,
                j = this;
            if (!h) return this;
            e && (g = function() {
                !--h && e.call(j)
            }), d = c.is(d, U) ? d : g;
            var k = c.animation(a, b, d, g);
            for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
            return this
        }, nc.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, nc.getBBox = function() {
            for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                if (!this.items[e].removed) {
                    var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
                }
            return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
                x: a,
                y: b,
                x2: c,
                y2: d,
                width: c - a,
                height: d - b
            }
        }, nc.clone = function(a) {
            a = this.paper.set();
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, nc.toString = function() {
            return "Raphaël‘s set"
        }, nc.glow = function(a) {
            var b = this.paper.set();
            return this.forEach(function(c) {
                var d = c.glow(a);
                null != d && d.forEach(function(a) {
                    b.push(a)
                })
            }), b
        }, nc.isPointInside = function(a, b) {
            var c = !1;
            return this.forEach(function(d) {
                return d.isPointInside(a, b) ? (c = !0, !1) : void 0
            }), c
        }, c.registerFont = function(a) {
            if (!a.face) return a;
            this.fonts = this.fonts || {};
            var b = {
                    w: a.w,
                    face: {},
                    glyphs: {}
                },
                c = a.face["font-family"];
            for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
            if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
                b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
                for (var e in a.glyphs)
                    if (a.glyphs[z](e)) {
                        var f = a.glyphs[e];
                        if (b.glyphs[e] = {
                                w: f.w,
                                k: {},
                                d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[a] || "M"
                                }) + "z"
                            }, f.k)
                            for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
                    }
            }
            return a
        }, v.getFont = function(a, b, d, e) {
            if (e = e || "normal", d = d || "normal", b = +b || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[b] || 400, c.fonts) {
                var f = c.fonts[a];
                if (!f) {
                    var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
                    for (var h in c.fonts)
                        if (c.fonts[z](h) && g.test(h)) {
                            f = c.fonts[h];
                            break
                        }
                }
                var i;
                if (f)
                    for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
                return i
            }
        }, v.print = function(a, b, d, e, f, g, h, i) {
            g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
            var j, k = I(d)[J](G),
                l = 0,
                m = 0,
                n = G;
            if (c.is(e, "string") && (e = this.getFont(e)), e) {
                j = (f || 16) / e.face["units-per-em"];
                for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                    if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                    else {
                        var v = m && e.glyphs[k[t - 1]] || {},
                            x = e.glyphs[k[t]];
                        l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
                    }
                    x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
                }
            }
            return this.path(n).attr({
                fill: "#000",
                stroke: "none"
            })
        }, v.add = function(a) {
            if (c.is(a, "array"))
                for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
            return d
        }, c.format = function(a, b) {
            var d = c.is(b, V) ? [0][E](b) : arguments;
            return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
                return null == d[++b] ? G : d[b]
            })), a || G
        }, c.fullfill = function() {
            var a = /\{([^\}]+)\}/g,
                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function(a, c, d) {
                    var e = d;
                    return c.replace(b, function(a, b, c, d, f) {
                        b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                    }), e = (null == e || e == d ? a : e) + ""
                };
            return function(b, d) {
                return String(b).replace(a, function(a, b) {
                    return c(a, b, d)
                })
            }
        }(), c.ninja = function() {
            return B.was ? A.win.Raphael = B.is : delete Raphael, c
        }, c.st = nc,
        function(a, b, d) {
            function e() {
                /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
            }
            null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
                a.removeEventListener(b, d, !1), a.readyState = "complete"
            }, !1), a.readyState = "loading"), e()
        }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
            u = !0
        }),
        function() {
            if (c.svg) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = parseInt,
                    f = Math,
                    g = f.max,
                    h = f.abs,
                    i = f.pow,
                    j = /[, ]+/,
                    k = c.eve,
                    l = "",
                    m = " ",
                    n = "http://www.w3.org/1999/xlink",
                    o = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    p = {};
                c.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var q = function(d, e) {
                        if (e) {
                            "string" == typeof d && (d = q(d));
                            for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                        } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return d
                    },
                    r = function(a, e) {
                        var j = "linear",
                            k = a.id + e,
                            m = .5,
                            n = .5,
                            o = a.node,
                            p = a.paper,
                            r = o.style,
                            s = c._g.doc.getElementById(k);
                        if (!s) {
                            if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                                    if (j = "radial", b && c) {
                                        m = d(b), n = d(c);
                                        var e = 2 * (n > .5) - 1;
                                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                                    }
                                    return l
                                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                                var t = e.shift();
                                if (t = -d(t), isNaN(t)) return null;
                                var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                                    v = 1 / (g(h(u[2]), h(u[3])) || 1);
                                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                            }
                            var w = c._parseDots(e);
                            if (!w) return null;
                            if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                                s = q(j + "Gradient", {
                                    id: k
                                }), a.gradient = s, q(s, "radial" == j ? {
                                    fx: m,
                                    fy: n
                                } : {
                                    x1: u[0],
                                    y1: u[1],
                                    x2: u[2],
                                    y2: u[3],
                                    gradientTransform: a.matrix.invert()
                                }), p.defs.appendChild(s);
                                for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                                    offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                                    "stop-color": w[x].color || "#fff"
                                }))
                            }
                        }
                        return q(o, {
                            fill: "url(#" + k + ")",
                            opacity: 1,
                            "fill-opacity": 1
                        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
                    },
                    s = function(a) {
                        var b = a.getBBox(1);
                        q(a.pattern, {
                            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                        })
                    },
                    t = function(d, e, f) {
                        if ("path" == d.type) {
                            for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    w = m[v];
                                    break;
                                case "wide":
                                    y = 5;
                                    break;
                                case "narrow":
                                    y = 2;
                                    break;
                                case "long":
                                    x = 5;
                                    break;
                                case "short":
                                    x = 2
                            }
                            if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                                    fill: "none",
                                    stroke: t.stroke
                                }) : (j = i = x / 2, k = {
                                    fill: t.stroke,
                                    stroke: "none"
                                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                                var A = "raphael-marker-" + w,
                                    B = "raphael-marker-" + r + w + x + y;
                                c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                                    "stroke-linecap": "round",
                                    d: o[w],
                                    id: A
                                })), p[A] = 1);
                                var C, D = c._g.doc.getElementById(B);
                                D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                                    id: B,
                                    markerHeight: y,
                                    markerWidth: x,
                                    orient: "auto",
                                    refX: j,
                                    refY: y / 2
                                }), C = q(q("use"), {
                                    "xlink:href": "#" + A,
                                    transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                                    "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                                }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                                var E = i * ("diamond" != w && "oval" != w);
                                f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                            } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                                d: c.getSubpath(t.path, g, h)
                            }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                            for (k in p)
                                if (p[a](k) && !p[k]) {
                                    var F = c._g.doc.getElementById(k);
                                    F && F.parentNode.removeChild(F)
                                }
                        }
                    },
                    u = {
                        "": [0],
                        none: [0],
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    v = function(a, c, d) {
                        if (c = u[b(c).toLowerCase()]) {
                            for (var e = a.attrs["stroke-width"] || "1", f = {
                                    round: e,
                                    square: e,
                                    butt: 0
                                }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                            q(a.node, {
                                "stroke-dasharray": g.join(",")
                            })
                        }
                    },
                    w = function(d, f) {
                        var i = d.node,
                            k = d.attrs,
                            m = i.style.visibility;
                        i.style.visibility = "hidden";
                        for (var o in f)
                            if (f[a](o)) {
                                if (!c._availableAttrs[a](o)) continue;
                                var p = f[o];
                                switch (k[o] = p, o) {
                                    case "blur":
                                        d.blur(p);
                                        break;
                                    case "title":
                                        var u = i.getElementsByTagName("title");
                                        if (u.length && (u = u[0])) u.firstChild.nodeValue = p;
                                        else {
                                            u = q("title");
                                            var w = c._g.doc.createTextNode(p);
                                            u.appendChild(w), i.appendChild(u)
                                        }
                                        break;
                                    case "href":
                                    case "target":
                                        var x = i.parentNode;
                                        if ("a" != x.tagName.toLowerCase()) {
                                            var z = q("a");
                                            x.insertBefore(z, i), z.appendChild(i), x = z
                                        }
                                        "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                        break;
                                    case "cursor":
                                        i.style.cursor = p;
                                        break;
                                    case "transform":
                                        d.transform(p);
                                        break;
                                    case "arrow-start":
                                        t(d, p);
                                        break;
                                    case "arrow-end":
                                        t(d, p, 1);
                                        break;
                                    case "clip-rect":
                                        var A = b(p).split(j);
                                        if (4 == A.length) {
                                            d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                            var B = q("clipPath"),
                                                C = q("rect");
                                            B.id = c.createUUID(), q(C, {
                                                x: A[0],
                                                y: A[1],
                                                width: A[2],
                                                height: A[3]
                                            }), B.appendChild(C), d.paper.defs.appendChild(B), q(i, {
                                                "clip-path": "url(#" + B.id + ")"
                                            }), d.clip = C
                                        }
                                        if (!p) {
                                            var D = i.getAttribute("clip-path");
                                            if (D) {
                                                var E = c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g, l));
                                                E && E.parentNode.removeChild(E), q(i, {
                                                    "clip-path": l
                                                }), delete d.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == d.type && (q(i, {
                                            d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                                        }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                        o = "x", p = k.x;
                                    case "x":
                                        k.fx && (p = -k.x - (k.width || 0));
                                    case "rx":
                                        if ("rx" == o && "rect" == d.type) break;
                                    case "cx":
                                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                        break;
                                    case "height":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                        o = "y", p = k.y;
                                    case "y":
                                        k.fy && (p = -k.y - (k.height || 0));
                                    case "ry":
                                        if ("ry" == o && "rect" == d.type) break;
                                    case "cy":
                                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == d.type ? q(i, {
                                            rx: p,
                                            ry: p
                                        }) : i.setAttribute(o, p), d._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == d.type && i.setAttributeNS(n, "href", p);
                                        break;
                                    case "stroke-width":
                                        (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        v(d, p, f);
                                        break;
                                    case "fill":
                                        var F = b(p).match(c._ISURL);
                                        if (F) {
                                            B = q("pattern");
                                            var G = q("image");
                                            B.id = c.createUUID(), q(B, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), q(G, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": F[1]
                                                }), B.appendChild(G),
                                                function(a) {
                                                    c._preload(F[1], function() {
                                                        var b = this.offsetWidth,
                                                            c = this.offsetHeight;
                                                        q(a, {
                                                            width: b,
                                                            height: c
                                                        }), q(G, {
                                                            width: b,
                                                            height: c
                                                        }), d.paper.safari()
                                                    })
                                                }(B), d.paper.defs.appendChild(B), q(i, {
                                                    fill: "url(#" + B.id + ")"
                                                }), d.pattern = B, d.pattern && s(d);
                                            break
                                        }
                                        var H = c.getRGB(p);
                                        if (H.error) {
                                            if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                                if ("opacity" in k || "fill-opacity" in k) {
                                                    var I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                    if (I) {
                                                        var J = I.getElementsByTagName("stop");
                                                        q(J[J.length - 1], {
                                                            "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                k.gradient = p, k.fill = "none";
                                                break
                                            }
                                        } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                                            opacity: k.opacity
                                        }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                                            "fill-opacity": k["fill-opacity"]
                                        });
                                        H[a]("opacity") && q(i, {
                                            "fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                        });
                                    case "stroke":
                                        H = c.getRGB(p), i.setAttribute(o, H.hex), "stroke" == o && H[a]("opacity") && q(i, {
                                            "stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                        }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                                        break;
                                    case "opacity":
                                        k.gradient && !k[a]("stroke-opacity") && q(i, {
                                            "stroke-opacity": p > 1 ? p / 100 : p
                                        });
                                    case "fill-opacity":
                                        if (k.gradient) {
                                            I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), I && (J = I.getElementsByTagName("stop"), q(J[J.length - 1], {
                                                "stop-opacity": p
                                            }));
                                            break
                                        }
                                    default:
                                        "font-size" == o && (p = e(p, 10) + "px");
                                        var K = o.replace(/(\-.)/g, function(a) {
                                            return a.substring(1).toUpperCase()
                                        });
                                        i.style[K] = p, d._.dirty = 1, i.setAttribute(o, p)
                                }
                            }
                        y(d, f), i.style.visibility = m
                    },
                    x = 1.2,
                    y = function(d, f) {
                        if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                            var g = d.attrs,
                                h = d.node,
                                i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                            if (f[a]("text")) {
                                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                                for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                                    dy: i * x,
                                    x: g.x
                                }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                            } else
                                for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                                    dy: i * x,
                                    x: g.x
                                }) : q(m[0], {
                                    dy: 0
                                });
                            q(h, {
                                x: g.x,
                                y: g.y
                            }), d._.dirty = 1;
                            var p = d._getBBox(),
                                r = g.y - (p.y + p.height / 2);
                            r && c.is(r, "finite") && q(m[0], {
                                dy: r
                            })
                        }
                    },
                    z = function(a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    A = c.el;
                z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
                    var c = q("path");
                    b.canvas && b.canvas.appendChild(c);
                    var d = new z(c, b);
                    return d.type = "path", w(d, {
                        fill: "none",
                        stroke: "#000",
                        path: a
                    }), d
                }, A.rotate = function(a, c, e) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", a, c, e]
                    ])), this
                }, A.scale = function(a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, c, e, f]
                    ])), this
                }, A.translate = function(a, c) {
                    return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
                        ["t", a, c]
                    ])), this)
                }, A.transform = function(b) {
                    var d = this._;
                    if (null == b) return d.transform;
                    if (c._extractTransform(this, b), this.clip && q(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && s(this), this.node && q(this.node, {
                            transform: this.matrix
                        }), 1 != d.sx || 1 != d.sy) {
                        var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": e
                        })
                    }
                    return this
                }, A.hide = function() {
                    return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                }, A.show = function() {
                    return !this.removed && this.paper.safari(this.node.style.display = ""), this
                }, A.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        var a = this.paper;
                        a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                        for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
                        this.removed = !0
                    }
                }, A._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var a = !0
                    }
                    var b = {};
                    try {
                        b = this.node.getBBox()
                    } catch (c) {} finally {
                        b = b || {}
                    }
                    return a && this.hide(), b
                }, A.attr = function(b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == b) return this._.transform;
                        for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return l - 1 ? h : h[g[0]]
                    }
                    if (null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    if (null != d) {
                        var m = {};
                        m[b] = d
                    } else null != b && c.is(b, "object") && (m = b);
                    for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                    for (n in this.paper.customAttributes)
                        if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                            var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                            this.attrs[n] = m[n];
                            for (var p in o) o[a](p) && (m[p] = o[p])
                        }
                    return w(this, m), this
                }, A.toFront = function() {
                    if (this.removed) return this;
                    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                    var a = this.paper;
                    return a.top != this && c._tofront(this, a), this
                }, A.toBack = function() {
                    if (this.removed) return this;
                    var a = this.node.parentNode;
                    "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper);
                    this.paper;
                    return this
                }, A.insertAfter = function(a) {
                    if (this.removed) return this;
                    var b = a.node || a[a.length - 1].node;
                    return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
                }, A.insertBefore = function(a) {
                    if (this.removed) return this;
                    var b = a.node || a[0].node;
                    return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
                }, A.blur = function(a) {
                    var b = this;
                    if (0 !== +a) {
                        var d = q("filter"),
                            e = q("feGaussianBlur");
                        b.attrs.blur = a, d.id = c.createUUID(), q(e, {
                            stdDeviation: +a || 1.5
                        }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
                            filter: "url(#" + d.id + ")"
                        })
                    } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                    return b
                }, c._engine.circle = function(a, b, c, d) {
                    var e = q("circle");
                    a.canvas && a.canvas.appendChild(e);
                    var f = new z(e, a);
                    return f.attrs = {
                        cx: b,
                        cy: c,
                        r: d,
                        fill: "none",
                        stroke: "#000"
                    }, f.type = "circle", q(e, f.attrs), f
                }, c._engine.rect = function(a, b, c, d, e, f) {
                    var g = q("rect");
                    a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: b,
                        y: c,
                        width: d,
                        height: e,
                        r: f || 0,
                        rx: f || 0,
                        ry: f || 0,
                        fill: "none",
                        stroke: "#000"
                    }, h.type = "rect", q(g, h.attrs), h
                }, c._engine.ellipse = function(a, b, c, d, e) {
                    var f = q("ellipse");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e,
                        fill: "none",
                        stroke: "#000"
                    }, g.type = "ellipse", q(f, g.attrs), g
                }, c._engine.image = function(a, b, c, d, e, f) {
                    var g = q("image");
                    q(g, {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        preserveAspectRatio: "none"
                    }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        src: b
                    }, h.type = "image", h
                }, c._engine.text = function(a, b, d, e) {
                    var f = q("text");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        x: b,
                        y: d,
                        "text-anchor": "middle",
                        text: e,
                        font: c._availableAttrs.font,
                        stroke: "none",
                        fill: "#000"
                    }, g.type = "text", w(g, g.attrs), g
                }, c._engine.setSize = function(a, b) {
                    return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, c._engine.create = function() {
                    var a = c._getContainer.apply(0, arguments),
                        b = a && a.container,
                        d = a.x,
                        e = a.y,
                        f = a.width,
                        g = a.height;
                    if (!b) throw new Error("SVG container not found.");
                    var h, i = q("svg"),
                        j = "overflow:hidden;";
                    return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
                        height: g,
                        version: 1.1,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
                }, c._engine.setViewBox = function(a, b, c, d, e) {
                    k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                    var f, h, i = g(c / this.width, d / this.height),
                        j = this.top,
                        l = e ? "xMidYMid meet" : "xMinYMin";
                    for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
                            viewBox: f,
                            preserveAspectRatio: l
                        }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
                        "stroke-width": h
                    }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
                    return this._viewBox = [a, b, c, d, !!e], this
                }, c.prototype.renderfix = function() {
                    var a, b = this.canvas,
                        c = b.style;
                    try {
                        a = b.getScreenCTM() || b.createSVGMatrix()
                    } catch (d) {
                        a = b.createSVGMatrix()
                    }
                    var e = -a.e % 1,
                        f = -a.f % 1;
                    (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
                }, c.prototype.clear = function() {
                    c.eve("raphael.clear", this);
                    for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
                    this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
                }, c.prototype.remove = function() {
                    k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
                };
                var B = c.st;
                for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(C))
            }
        }(),
        function() {
            if (c.vml) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = Math,
                    f = e.round,
                    g = e.max,
                    h = e.min,
                    i = e.abs,
                    j = "fill",
                    k = /[, ]+/,
                    l = c.eve,
                    m = " progid:DXImageTransform.Microsoft",
                    n = " ",
                    o = "",
                    p = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    q = /([clmz]),?([^clmz]*)/gi,
                    r = / progid:\S+Blur\([^\)]+\)/g,
                    s = /-?[^,\s-]+/g,
                    t = "position:absolute;left:0;top:0;width:1px;height:1px",
                    u = 21600,
                    v = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    w = {
                        circle: 1,
                        ellipse: 1
                    },
                    x = function(a) {
                        var d = /[ahqstv]/gi,
                            e = c._pathToAbsolute;
                        if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                            var g = b(a).replace(q, function(a, b, c) {
                                var d = [],
                                    e = "m" == b.toLowerCase(),
                                    g = p[b];
                                return c.replace(s, function(a) {
                                    e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                                }), g + d
                            });
                            return g
                        }
                        var h, i, j = e(a);
                        g = [];
                        for (var k = 0, l = j.length; l > k; k++) {
                            h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
                            for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
                            g.push(i)
                        }
                        return g.join(n)
                    },
                    y = function(a, b, d) {
                        var e = c.matrix();
                        return e.rotate(-a, .5, .5), {
                            dx: e.x(b, d),
                            dy: e.y(b, d)
                        }
                    },
                    z = function(a, b, c, d, e, f) {
                        var g = a._,
                            h = a.matrix,
                            k = g.fillpos,
                            l = a.node,
                            m = l.style,
                            o = 1,
                            p = "",
                            q = u / b,
                            r = u / c;
                        if (m.visibility = "hidden", b && c) {
                            if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                                var s = y(f, d, e);
                                d = s.dx, e = s.dy
                            }
                            if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                                var t = l.getElementsByTagName(j);
                                t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
                            }
                            m.visibility = "visible"
                        }
                    };
                c.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var A = function(a, c, d) {
                        for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                h = e[g];
                                break;
                            case "wide":
                            case "narrow":
                                j = e[g];
                                break;
                            case "long":
                            case "short":
                                i = e[g]
                        }
                        var k = a.node.getElementsByTagName("stroke")[0];
                        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
                    },
                    B = function(e, i) {
                        e.attrs = e.attrs || {};
                        var l = e.node,
                            m = e.attrs,
                            p = l.style,
                            q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                            r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                            s = e;
                        for (var t in i) i[a](t) && (m[t] = i[t]);
                        if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                            var y = +m.cx,
                                B = +m.cy,
                                D = +m.rx || +m.r || 0,
                                E = +m.ry || +m.r || 0;
                            l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
                        }
                        if ("clip-rect" in i) {
                            var G = b(i["clip-rect"]).split(k);
                            if (4 == G.length) {
                                G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                                var H = l.clipRect || c._g.doc.createElement("div"),
                                    I = H.style;
                                I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                            }
                            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                        }
                        if (e.textpath) {
                            var J = e.textpath.style;
                            i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                        }
                        if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                            var K = l.getElementsByTagName(j),
                                L = !1;
                            if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                                var M = b(i.fill).match(c._ISURL);
                                if (M) {
                                    K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                                    var N = e.getBBox(1);
                                    K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                            }
                            if ("fill-opacity" in i || "opacity" in i) {
                                var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                                O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
                            }
                            l.appendChild(K);
                            var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                                Q = !1;
                            !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                            var R = c.getRGB(i.stroke);
                            P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
                            var S = .75 * (d(i["stroke-width"]) || 1);
                            if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in i) {
                                var T = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                            }
                            Q && l.appendChild(P)
                        }
                        if ("text" == s.type) {
                            s.paper.canvas.style.display = o;
                            var U = s.paper.span,
                                V = 100,
                                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                            p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var X = U.getBoundingClientRect();
                            s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                            for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                                if (Y[Z] in i) {
                                    s._.dirty = 1;
                                    break
                                }
                            switch (m["text-anchor"]) {
                                case "start":
                                    s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                                    break;
                                case "end":
                                    s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                                    break;
                                default:
                                    s.textpath.style["v-text-align"] = "center", s.bbx = 0
                            }
                            s.textpath.style["v-text-kern"] = !0
                        }
                    },
                    C = function(a, f, g) {
                        a.attrs = a.attrs || {};
                        var h = (a.attrs, Math.pow),
                            i = "linear",
                            j = ".5 .5";
                        if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                                return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
                            }), f = f.split(/\s*\-\s*/), "linear" == i) {
                            var k = f.shift();
                            if (k = -d(k), isNaN(k)) return null
                        }
                        var l = c._parseDots(f);
                        if (!l) return null;
                        if (a = a.shape || a.node, l.length) {
                            a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                            for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                            g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
                        }
                        return 1
                    },
                    D = function(a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    E = c.el;
                D.prototype = E, E.constructor = D, E.transform = function(a) {
                    if (null == a) return this._.transform;
                    var d, e = this.paper._viewBoxShift,
                        f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
                    e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
                    var g, h = this.matrix.clone(),
                        i = this.skew,
                        j = this.node,
                        k = ~b(this.attrs.fill).indexOf("-"),
                        l = !b(this.attrs.fill).indexOf("url(");
                    if (h.translate(1, 1), l || k || "image" == this.type)
                        if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                            j.style.filter = h.toFilter();
                            var m = this.getBBox(),
                                p = this.getBBox(1),
                                q = m.x - p.x,
                                r = m.y - p.y;
                            j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                        } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                    else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
                    return d && (this._.transform = d), this
                }, E.rotate = function(a, c, e) {
                    if (this.removed) return this;
                    if (null != a) {
                        if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                            var f = this.getBBox(1);
                            c = f.x + f.width / 2, e = f.y + f.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", a, c, e]
                        ])), this
                    }
                }, E.translate = function(a, c) {
                    return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
                        ["t", a, c]
                    ])), this)
                }, E.scale = function(a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, c, e, f]
                    ])), this._.dirtyT = 1, this
                }, E.hide = function() {
                    return !this.removed && (this.node.style.display = "none"), this
                }, E.show = function() {
                    return !this.removed && (this.node.style.display = o), this
                }, E._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, E.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                        this.removed = !0
                    }
                }, E.attr = function(b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return m - 1 ? h : h[g[0]]
                    }
                    if (this.attrs && null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    var n;
                    null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                    for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                    if (n) {
                        for (o in this.paper.customAttributes)
                            if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                                this.attrs[o] = n[o];
                                for (var q in p) p[a](q) && (n[q] = p[q])
                            }
                        n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                    }
                    return this
                }, E.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
                }, E.toBack = function() {
                    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
                }, E.insertAfter = function(a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
                }, E.insertBefore = function(a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
                }, E.blur = function(a) {
                    var b = this.node.runtimeStyle,
                        d = b.filter;
                    return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
                }, c._engine.path = function(a, b) {
                    var c = F("shape");
                    c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                    var d = new D(c, b),
                        e = {
                            fill: "none",
                            stroke: "#000"
                        };
                    a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                    var f = F("skew");
                    return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
                }, c._engine.rect = function(a, b, d, e, f, g) {
                    var h = c._rectPath(b, d, e, f, g),
                        i = a.path(h),
                        j = i.attrs;
                    return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
                }, c._engine.ellipse = function(a, b, c, d, e) {
                    {
                        var f = a.path();
                        f.attrs
                    }
                    return f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e
                    }), f
                }, c._engine.circle = function(a, b, c, d) {
                    {
                        var e = a.path();
                        e.attrs
                    }
                    return e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
                        cx: b,
                        cy: c,
                        r: d
                    }), e
                }, c._engine.image = function(a, b, d, e, f, g) {
                    var h = c._rectPath(d, e, f, g),
                        i = a.path(h).attr({
                            stroke: "none"
                        }),
                        k = i.attrs,
                        l = i.node,
                        m = l.getElementsByTagName(j)[0];
                    return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
                }, c._engine.text = function(a, d, e, g) {
                    var h = F("shape"),
                        i = F("path"),
                        j = F("textpath");
                    d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                    var k = new D(h, a),
                        l = {
                            fill: "#000",
                            stroke: "none",
                            font: c._availableAttrs.font,
                            text: g
                        };
                    k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                    var m = F("skew");
                    return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
                }, c._engine.setSize = function(a, b) {
                    var d = this.canvas.style;
                    return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
                }, c._engine.setViewBox = function(a, b, d, e, f) {
                    c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                    var h, i, j = this.width,
                        k = this.height,
                        l = 1 / g(d / j, e / k);
                    return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {
                        dx: -a,
                        dy: -b,
                        scale: l
                    }, this.forEach(function(a) {
                        a.transform("...")
                    }), this
                };
                var F;
                c._engine.initWin = function(a) {
                    var b = a.document;
                    b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                            return b.createElement("<rvml:" + a + ' class="rvml">')
                        }
                    } catch (c) {
                        F = function(a) {
                            return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, c._engine.initWin(c._g.win), c._engine.create = function() {
                    var a = c._getContainer.apply(0, arguments),
                        b = a.container,
                        d = a.height,
                        e = a.width,
                        f = a.x,
                        g = a.y;
                    if (!b) throw new Error("VML container not found.");
                    var h = new c._Paper,
                        i = h.canvas = c._g.doc.createElement("div"),
                        j = i.style;
                    return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
                }, c.prototype.clear = function() {
                    c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, c.prototype.remove = function() {
                    c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    return !0
                };
                var G = c.st;
                for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(H))
            }
        }(), B.was ? A.win.Raphael = c : Raphael = c, c
});
(function(global, factory) {
    if (typeof exports === "object") {
        module.exports = factory()
    } else if (typeof define === "function" && define.amd) {
        define(factory)
    } else {
        global.printStackTrace = factory()
    }
})(this, function() {
    function printStackTrace(options) {
        options = options || {
            guess: true
        };
        var ex = options.e || null,
            guess = !!options.guess,
            mode = options.mode || null;
        var p = new printStackTrace.implementation,
            result = p.run(ex, mode);
        return guess ? p.guessAnonymousFunctions(result) : result
    }
    printStackTrace.implementation = function() {};
    printStackTrace.implementation.prototype = {
        run: function(ex, mode) {
            ex = ex || this.createException();
            mode = mode || this.mode(ex);
            if (mode === "other") {
                return this.other(arguments.callee)
            } else {
                return this[mode](ex)
            }
        },
        createException: function() {
            try {
                this.undef()
            } catch (e) {
                return e
            }
        },
        mode: function(e) {
            if (typeof window !== "undefined" && window.navigator.userAgent.indexOf("PhantomJS") > -1) {
                return "phantomjs"
            }
            if (e["arguments"] && e.stack) {
                return "chrome"
            }
            if (e.stack && e.sourceURL) {
                return "safari"
            }
            if (e.stack && e.number) {
                return "ie"
            }
            if (e.stack && e.fileName) {
                return "firefox"
            }
            if (e.message && e["opera#sourceloc"]) {
                if (!e.stacktrace) {
                    return "opera9"
                }
                if (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
                    return "opera9"
                }
                return "opera10a"
            }
            if (e.message && e.stack && e.stacktrace) {
                if (e.stacktrace.indexOf("called from line") < 0) {
                    return "opera10b"
                }
                return "opera11"
            }
            if (e.stack && !e.fileName) {
                return "chrome"
            }
            return "other"
        },
        instrumentFunction: function(context, functionName, callback) {
            context = context || window;
            var original = context[functionName];
            context[functionName] = function instrumented() {
                callback.call(this, printStackTrace().slice(4));
                return context[functionName]._instrumented.apply(this, arguments)
            };
            context[functionName]._instrumented = original
        },
        deinstrumentFunction: function(context, functionName) {
            if (context[functionName].constructor === Function && context[functionName]._instrumented && context[functionName]._instrumented.constructor === Function) {
                context[functionName] = context[functionName]._instrumented
            }
        },
        chrome: function(e) {
            return (e.stack + "\n").replace(/^[\s\S]+?\s+at\s+/, " at ").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}() ($1)$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}() ($1)").replace(/^(.+) \((.+)\)$/gm, "$1@$2").split("\n").slice(0, -1)
        },
        safari: function(e) {
            return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n")
        },
        ie: function(e) {
            return e.stack.replace(/^\s*at\s+(.*)$/gm, "$1").replace(/^Anonymous function\s+/gm, "{anonymous}() ").replace(/^(.+)\s+\((.+)\)$/gm, "$1@$2").split("\n").slice(1)
        },
        firefox: function(e) {
            return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^(?:\((\S*)\))?@/gm, "{anonymous}($1)@").split("\n")
        },
        opera11: function(e) {
            var ANON = "{anonymous}",
                lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
            var lines = e.stacktrace.split("\n"),
                result = [];
            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var location = match[4] + ":" + match[1] + ":" + match[2];
                    var fnName = match[3] || "global code";
                    fnName = fnName.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, ANON);
                    result.push(fnName + "@" + location + " -- " + lines[i + 1].replace(/^\s+/, ""))
                }
            }
            return result
        },
        opera10b: function(e) {
            var lineRE = /^(.*)@(.+):(\d+)$/;
            var lines = e.stacktrace.split("\n"),
                result = [];
            for (var i = 0, len = lines.length; i < len; i++) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[1] ? match[1] + "()" : "global code";
                    result.push(fnName + "@" + match[2] + ":" + match[3])
                }
            }
            return result
        },
        opera10a: function(e) {
            var ANON = "{anonymous}",
                lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split("\n"),
                result = [];
            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[3] || ANON;
                    result.push(fnName + "()@" + match[2] + ":" + match[1] + " -- " + lines[i + 1].replace(/^\s+/, ""))
                }
            }
            return result
        },
        opera9: function(e) {
            var ANON = "{anonymous}",
                lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split("\n"),
                result = [];
            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(ANON + "()@" + match[2] + ":" + match[1] + " -- " + lines[i + 1].replace(/^\s+/, ""))
                }
            }
            return result
        },
        phantomjs: function(e) {
            var ANON = "{anonymous}",
                lineRE = /(\S+) \((\S+)\)/i;
            var lines = e.stack.split("\n"),
                result = [];
            for (var i = 1, len = lines.length; i < len; i++) {
                lines[i] = lines[i].replace(/^\s+at\s+/gm, "");
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(match[1] + "()@" + match[2])
                } else {
                    result.push(ANON + "()@" + lines[i])
                }
            }
            return result
        },
        other: function(curr) {
            var ANON = "{anonymous}",
                fnRE = /function(?:\s+([\w$]+))?\s*\(/,
                stack = [],
                fn, args, maxStackSize = 10;
            var slice = Array.prototype.slice;
            while (curr && stack.length < maxStackSize) {
                fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
                try {
                    args = slice.call(curr["arguments"] || [])
                } catch (e) {
                    args = ["Cannot access arguments: " + e]
                }
                stack[stack.length] = fn + "(" + this.stringifyArguments(args) + ")";
                try {
                    curr = curr.caller
                } catch (e) {
                    stack[stack.length] = "Cannot access caller: " + e;
                    break
                }
            }
            return stack
        },
        stringifyArguments: function(args) {
            var result = [];
            var slice = Array.prototype.slice;
            for (var i = 0; i < args.length; ++i) {
                var arg = args[i];
                if (arg === undefined) {
                    result[i] = "undefined"
                } else if (arg === null) {
                    result[i] = "null"
                } else if (arg.constructor) {
                    if (arg.constructor === Array) {
                        if (arg.length < 3) {
                            result[i] = "[" + this.stringifyArguments(arg) + "]"
                        } else {
                            result[i] = "[" + this.stringifyArguments(slice.call(arg, 0, 1)) + "..." + this.stringifyArguments(slice.call(arg, -1)) + "]"
                        }
                    } else if (arg.constructor === Object) {
                        result[i] = "#object"
                    } else if (arg.constructor === Function) {
                        result[i] = "#function"
                    } else if (arg.constructor === String) {
                        result[i] = '"' + arg + '"'
                    } else if (arg.constructor === Number) {
                        result[i] = arg
                    } else {
                        result[i] = "?"
                    }
                }
            }
            return result.join(",")
        },
        sourceCache: {},
        ajax: function(url) {
            var req = this.createXMLHTTPObject();
            if (req) {
                try {
                    req.open("GET", url, false);
                    req.send(null);
                    return req.responseText
                } catch (e) {}
            }
            return ""
        },
        createXMLHTTPObject: function() {
            var xmlhttp, XMLHttpFactories = [function() {
                return new XMLHttpRequest
            }, function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }, function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }];
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = XMLHttpFactories[i]();
                    this.createXMLHTTPObject = XMLHttpFactories[i];
                    return xmlhttp
                } catch (e) {}
            }
        },
        isSameDomain: function(url) {
            return typeof location !== "undefined" && url.indexOf(location.hostname) !== -1
        },
        getSource: function(url) {
            if (!(url in this.sourceCache)) {
                this.sourceCache[url] = this.ajax(url).split("\n")
            }
            return this.sourceCache[url]
        },
        guessAnonymousFunctions: function(stack) {
            for (var i = 0; i < stack.length; ++i) {
                var reStack = /\{anonymous\}\(.*\)@(.*)/,
                    reRef = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
                    frame = stack[i],
                    ref = reStack.exec(frame);
                if (ref) {
                    var m = reRef.exec(ref[1]);
                    if (m) {
                        var file = m[1],
                            lineno = m[2],
                            charno = m[3] || 0;
                        if (file && this.isSameDomain(file) && lineno) {
                            var functionName = this.guessAnonymousFunction(file, lineno, charno);
                            stack[i] = frame.replace("{anonymous}", functionName)
                        }
                    }
                }
            }
            return stack
        },
        guessAnonymousFunction: function(url, lineNo, charNo) {
            var ret;
            try {
                ret = this.findFunctionName(this.getSource(url), lineNo)
            } catch (e) {
                ret = "getSource failed with url: " + url + ", exception: " + e.toString()
            }
            return ret
        },
        findFunctionName: function(source, lineNo) {
            var reFunctionDeclaration = /function\s+([^(]*?)\s*\(([^)]*)\)/;
            var reFunctionExpression = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
            var reFunctionEvaluation = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
            var code = "",
                line, maxLines = Math.min(lineNo, 20),
                m, commentPos;
            for (var i = 0; i < maxLines; ++i) {
                line = source[lineNo - i - 1];
                commentPos = line.indexOf("//");
                if (commentPos >= 0) {
                    line = line.substr(0, commentPos)
                }
                if (line) {
                    code = line + code;
                    m = reFunctionExpression.exec(code);
                    if (m && m[1]) {
                        return m[1]
                    }
                    m = reFunctionDeclaration.exec(code);
                    if (m && m[1]) {
                        return m[1]
                    }
                    m = reFunctionEvaluation.exec(code);
                    if (m && m[1]) {
                        return m[1]
                    }
                }
            }
            return "(?)"
        }
    };
    return printStackTrace
});
//@ sourceMappingURL=stacktrace.js.map 


function Stage() {

    this.$window = $(window);
    this.minWidth = null;
    this.minHeight = null;
    this.width = null;
    this.height = null;
    this.mouseX = null;
    this.mouseY = null;
    this.scrollTop = null;
    this.refreshThrottled = Igloo.throttle(this.refreshThrottleFunction, 250, this);

};
Stage.inheritsFrom(EventTarget);
//**** INITIAL METHODS ****//
Stage.prototype.setup = function(minWidth, minHeight) {
    var $window = this.$window;
    var $body = $("body");

    if (minWidth) this.minWidth = minWidth;
    if (minHeight) this.minHeight = minHeight;

    $window.on("resize", Igloo.$delegate(this, this.refreshStage));
    $window.on("scroll", Igloo.$delegate(this, this.scroll));
    $body.on("mousemove", Igloo.delegate(this, this.mouseMove));
    this.refreshStage($window);
    this.scroll($window);



}
//**** PUBLIC METHODS ****//
Stage.prototype.getState = function() {
    var data = {
        width: this.width,
        height: this.height
    }
    return data;
}
Stage.prototype.getWidth = function() {
    return this.width;
}
Stage.prototype.getHeight = function() {
    return this.height;
}
Stage.prototype.getMouse = function() {
    return {
        x: this.mouseX,
        y: this.mouseY
    };
}
//**** INTERNAL METHODS ****//
Stage.prototype.refreshStage = function($window) {

    this.prevWidth = this.width;
    this.prevHeight = this.height;

    this.width = $window.width();
    this.height = $window.height();

    if (this.minWidth && this.width < this.minWidth) this.width = this.minWidth;
    if (this.minHeight && this.height < this.minHeight) this.height = this.minHeight;

    this.fire("resizeInstant", this.getState());
    this.refreshThrottled();

}
Stage.prototype.refreshThrottleFunction = function() {
    this.updateCSS(".fullscreen", {
        width: this.width + "px!important",
        height: this.height + "px!important"
    });
    this.updateCSS(".fullscreen-weak", {
        width: this.width + "px",
        height: this.height + "px"
    });

    this.fire("resize", this.getState());
    if (this.prevWidth !== this.width) this.fire("resizeHorizontal", this.getState());
    if (this.prevHeight !== this.height) this.fire("resizeVertical", this.getState());
}
Stage.prototype.mouseMove = function(e) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    this.fire("mousemove", {
        x: this.mouseX,
        y: this.mouseY
    });
}
Stage.prototype.scroll = function(e) {
    var st = this.$window.scrollTop();
    var delta = st - this.scrollTop;
    this.scrollTop = st;

    //Only fire if it changes, not on setup
    //if(Igloo.defined(st))
    this.fire("scroll", {
        scrollTop: this.scrollTop,
        delta: delta
    });
}
Stage.prototype.getScroll = function() {
    return this.scrollTop;
}
Stage.prototype.updateCSS = function(selector, rules) {

    //Note that you can't update the HTML of the style in ie8 so we have to remove and rebuild.
    var id = selector.replace(/[^a-zA-Z0-9]/g, "_");
    var $style = $("head #" + id);
    if ($style) $style.remove();

    //	if(!$style.size()){
    //		$("<style type=\"text/css\" id=\""+id+"\"></style>").appendTo( "head" );
    //		$style 	= $( "head #" + id );
    //	}

    var str = selector + "{";
    for (var i in rules)
        if (rules.hasOwnProperty(i)) {
            str += i + ":" + rules[i] + ";";
        }
    str += "}";


    $("<style type=\"text/css\" id=\"" + id + "\">" + str + "</style>").appendTo("head");


    //$style.get(0).textContent = str;

} // JavaScript Document


function StandardController() {
    this.className = "StandardController";
    this.state = null;
    this.handler = null;
    this.debug = false;
    this.info = null;
    this.glob = false;

    this.priority = 500; //Default

    this.preloadsLookup = true;

    if (!StandardController.registeredClasses) StandardController.registeredClasses = [];
}
StandardController.abstract = true;
StandardController.inheritsFrom(BaseClass);

StandardController.register = function(c) {
    StandardController.registeredClasses.push(c);
}
StandardController.getRegister = function() {
    return StandardController.registeredClasses;
}

/*** STANDARDS ***/
StandardController.prototype.on = function(onComplete) {
    if (this.debug) Igloo.log(this.className + ", on: Using standard function")
    //this.setState(true);
    return true;
}
StandardController.prototype.off = function(onComplete) {
    if (this.debug) Igloo.log(this.className + ", off: Using standard function")
    //this.setState(true);
    return true;
}
StandardController.prototype.swap = function(onComplete) {
    if (this.debug) Igloo.log(this.className + ", swap: Using standard function")
    //this.setState(true);
    return true;
}
StandardController.prototype.swapped = function(onComplete) {
    if (this.debug) Igloo.log(this.className + ", swapped: Using standard function")
    //this.setState(true);
    return true;
}
StandardController.prototype.finished = function(onComplete) {
    if (this.debug) Igloo.log(this.className + ", finished: Using standard function")
    //this.setState(true);
    return true;
}
/*** REQUESTS / ASKING ****/
StandardController.prototype.getRequests = function() {

    if (this.abstract || (!this.ask && !this.glob)) return {};


    var requestsOn = ["on", "swap", "swapped", "main", "finished"];
    var requestsOff = ["off"];

    var requests = requestsOn.concat(requestsOff);

    var foundGlobMatches = false;
    this.globMatches = [];
    var ask = {};

    if (this.glob) {
        var state = nav.getState();
        if (typeof(this.glob) == "string") this.glob = [this.glob];

        var foundNext = false,
            foundPrev = false;
        for (var i = 0, ii = this.glob.length; i < ii; i++) {

            var regex = Igloo.glob2regex(this.glob[i]);
            var resultNext = Igloo.regexCached(state.nextUrl, regex);
            var resultPrev = Igloo.regexCached(state.previousUrl, regex);
            this.globMatches[i] = {
                index: i,
                glob: this.glob[i],
                next: !!resultNext,
                prev: !!resultPrev,
                both: resultNext && resultPrev
            };

            if (resultNext) foundNext = true;
            if (resultPrev) foundPrev = true;
        }

        if (foundNext) ask = jQuery.extend(ask, this.standardRequests(requestsOn));
        if (foundPrev) ask = jQuery.extend(ask, this.standardRequests(requestsOff));
        if (foundNext && (foundPrev || (state.initial && this.glob[0] == "/**")) && this.globMain) {
            ask.main = this.mainPriority ? {
                priority: this.mainPriority * (state.isRefresh && this.refreshPriority ? this.refreshPriority : 1)
            } : true;
        }

    } else {
        if (this.ask) {
            ask = this.ask();
        } else {
            ask = {};
        }
    }



    for (var i in requests) {
        this.completeRequest(ask, requests[i]);
    }
    //Igloo.log(this.className)
    //Igloo.log(ask);

    this.info = ask;

    //Igloo.log(this.className)
    //Igloo.log(this.info)

    return this.info;
}
StandardController.prototype.standardRequests = function(requests) {
    var priority = this.priority;

    var r = {};
    for (var i in requests) {
        if (this[requests[i]] || this[requests[i] + "Main"]) {
            r[requests[i]] = true;
        }
    }
    return r;
}
StandardController.prototype.completeRequest = function(request, type) {

    if (!request) request = {};

    var r = request[type];

    if (Igloo.defined(r)) {
        if (r === false) {
            delete request[type];
            return request;
        }

        //Requests should be an array.
        if (!Igloo.isArray(r)) r = [r];

        for (var i = 0; i < r.length; i++) {

            var ri = r[i];
            if (ri === true) ri = {
                priority: this.priority
            };
            else {
                if (ri && !Igloo.defined(ri.priority)) ri.priority = this.priority;
            }
            r[i] = ri;

        }

    }
    request[type] = r;

    return request;
}
/*** PRELOADING ****/
StandardController.prototype.checkGlobMatch = function(url) {
    if (!this.matchGlob) return false;
    var regex = Igloo.glob2regex(this.matchGlob);
    return Igloo.regexCached(url, regex);
}
StandardController.prototype.checkPreloadGlobMatch = function(url) {
    if (!this.preloadGlob || this.hasPreloaded) return false;
    var regex = Igloo.glob2regex(this.preloadGlob);
    return Igloo.regexCached(url, regex);
}
StandardController.prototype.runPreload = function(cache) {
    if (!this.hasPreloaded) {
        if (!cache) cache = jcache.getCache(nav.getState().nextUrl);
        if (cache.status != "loaded") return false;
        this.hasPreloaded = true;
        this.preload(cache);
        return true;
    }
}
StandardController.prototype.checkPreload = function(cache) {

    if (this.preload && !this.hasPreloaded) {
        if (this.checkPreloadGlobMatch(cache.url)) {
            this.runPreload(cache);
            return true;
        }
    }
    return false;

}
StandardController.prototype.preload = function(cache) {
    this.preloadImages();
}
StandardController.prototype.preloadImages = function(images) {

    if (!Igloo.defined(images)) {
        images = [];
        if (this.preloads) images = this.preloads;
        //if(this.preloadsLookup) images = images.concat(EIP.getCssPreloads(this.preloadsLookup === true ? this.baseName : this.preloadsLookup));
    }

    if (!images.length) return;

    var mc = MultipleOnComplete.create(Igloo.delegate(this, function() {
        //Igloo.log("preloaded images", images)
    }));
    for (var i = 0; i < images.length; i++) {
        Preloader2.add({
            src: images[i],
            priority: 3
        }).then(mc());
    }


}
StandardController.prototype.$getPreloadArea = function(name, fullscreen) {

    var $area = StandardController.$preloadArea;
    if (!$area || !$area.length) {
        $area = $(".wrapper").after("<div class='assets' />").parent().find(".assets");
        StandardController.$preloadArea = $area;
    }

    //alert("made asset area " + $area.length)


    if (!name) return $area;

    var $sub = $area.find("." + name);
    if (!$sub || !$sub.length) {
        $sub = $area.append("<div class='" + name + "' />").find("." + name);
        if (fullscreen) {
            $sub.addClass("bg").height(jstage.getHeight());

            jstage.addListener("resize", function(e) {
                $sub.height(e.height)
            }); //Doesn't need to be removed...
        }
    }


    return $sub;

}
StandardController.prototype.$getAsset = function(asset, area, fullscreen) {
    var $area = this.$getPreloadArea(area, fullscreen);

    var $asset = $area.find("." + asset.replace(" ", " ."));

    if (!$asset.size()) $asset = $area.append("<div class='" + asset + "' />").children().last();

    return $asset;
}
/**** HANDLER ****/
StandardController.prototype.setHandler = function(handler) {
    this.handler = handler;
}
StandardController.prototype.getHandler = function() {
    return this.handler;
}
/*** STATE ***/


StandardController.prototype.getState = function() {
    if (!this.handler) throw (this.className + " Handler not defined in getState");
    return this.handler.status;
}
StandardController.prototype.setState = function(state) {
    if (!this.handler) throw (this.className + " Handler not defined in getState");
    if (state === true) state = "complete";
    if (state === false) state = "waiting";
    this.handler.status = state;
}
StandardController.prototype.clearState = function() {
    if (this.handler) this.setState(false);
}

/*** META ***/
StandardController.prototype.getMeta = function(url, save) {

    //if(!this.meta){
    //if(this.meta) Igloo.log("repeated meta call") //TODO - check for repeated meta calls and perhaps prevent.
    var state = nav.getState();
    var cache = jcache.getCache(url ? url : state.nextUrl);
    var meta = $.extend(true, {}, cache.meta);
    if (save !== false) this.meta = meta;
    //}
    return meta;
}
StandardController.prototype.getTemplates = function(url) {
    //if(!this.templates){  //Todo- sort out when to reset
    var state = nav.getState();
    var cache = jcache.getCache(url ? url : state.nextUrl);
    this.templates = cache.templates;
    //}

}
/**
 * Returns the shared data object for a page saved in the cache
 * @param url The url of the page cache to load. If left blank will use the nextUrl
 * @returns {*} Data object, to allow sharing of data between controllers accessing a page
 */
StandardController.prototype.getData = function(url) {
    var cache = jcache.getCache(url ? url : nav.getState().nextUrl);
    return cache.data;
}
StandardController.prototype.getTemplate = function(template, url) {
    this.getTemplates(url);

    return template && this.templates[template] ? this.templates[template].html : "";
};

function SearchController() {

    this.className = "SearchController";
    this.ignoreWords = ["a", "and", "the", "an", "of", "mr", "mrs", "miss"];
    this.searchIndexes = {};
    this.searchData = false;

};

SearchController.abstract = true;
//SearchController.inheritsFrom( StandardController );
SearchController.prototype.setSearchData = function(data) {
    this.searchData = data;
}
SearchController.prototype.createSearchIndex = function(label, keys, options) {
    var ignore = false;
    var index = {};
    if (!options) options = {};

    var splitWords = Igloo.isDefined(options.words) ? options.words : false;

    var data = this.searchData;
    for (var i = 0; i < data.length; i++) {
        var d = data[i];

        var combined = [];

        for (var j = 0; j < keys.length; j++) {

            var cs = data[i][keys[j]];
            if (!cs) continue;
            if (typeof(cs) != "object") cs = [cs];

            for (var k = 0; k < cs.length; k++) {
                var words = this.strToWords(cs[k], splitWords);
                if (words)
                    for (var l = 0; l < words.length; l++) combined.push(words[l]);
            }
        }

        for (var j = 0; j < combined.length; j++) {
            var word = combined[j].toString(); //Make sure as we can save non-strings
            if (!index[word]) index[word] = [];
            if (word && word != " ") index[word].push(i);
        }
    }
    //Sort the index array
    var keys = [];
    for (var i in index) {
        keys.push(i);
    }
    keys.sort();
    var index_sorted = {};
    for (var i in keys)
        if (keys.hasOwnProperty(i)) {
            index_sorted[keys[i]] = index[keys[i]];
        }

    this.searchIndexes[label] = index_sorted;


}

SearchController.prototype.strToWords = function(str, split) {
    var ignore = false;
    var list = [];

    if (!str) return list;

    str = str.toString();

    var words = Text.basic_text(str.toLowerCase(), "-").replace(/  /g, " ");
    words = split ? words.split('-') : [words];

    for (var j = 0; j < words.length; j++) {
        var word = words[j];
        if (word == '' || word == ' ') continue;
        for (var k in this.ignoreWords)
            if (this.ignoreWords[k] == word) {
                ignore = true;
                break;
            }
        if (ignore) {
            ignore = false;
            continue;
        }
        list.push(word);
    }
    return list
}

SearchController.prototype.performSearch = function(str, label) {
    return this.performFilter({
        label: label,
        filters: [str]
    });
}

SearchController.prototype.performFilter = function(queries) {

    //Queries should have the form: [{label:"location", filters: ["uk","france"]}, ... ]

    //Looks like an empty queries - worth doing a bit better trhough, because second might not be.
    if (!queries || queries.length == 0 || (queries.length == 1 && (!queries[0].filters || !queries[0].filters[0]))) return this.searchData;



    var matches = []; //This is going to be a 3D array of queries (filters) vs peopleIDs
    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var label = query.label;
        var filters = query.filters;
        var type = query.type ? query.type : "OR";
        var partial = query.partial ? query.partial : false;
        var split = query.words ? query.words : false;

        var filterWords = [];
        for (var j = 0; j < filters.length; j++) {
            var words = this.strToWords(filters[j], split);
            for (var k = 0; k < words.length; k++) {
                filterWords.push(words[k]);
            }
        }

        //Generate a 3D array showing how many of each word matches there are
        var m = [];
        for (var j = 0; j < filterWords.length; j++) {
            var filter = filterWords[j];
            m[j] = {};
            for (var k in this.searchIndexes[label])
                if (this.searchIndexes[label].hasOwnProperty(k)) {
                    var r = this.searchIndexes[label][k];
                    var w = 1;
                    var kShortened = partial ? k.substr(0, filter.length) : k;
                    if (filter == kShortened) {
                        for (var l in r) {
                            m[j][r[l]] = m[j][r[l]] ? m[j][r[l]] + w : w;
                        }
                    }
                }
        }

        //We've now how many times each word has matched each person
        //We combine this because we only care about one match per person.
        var m = this.arrayUnions(m);

        //If it's and, then take the ones that equal the total, if it's OR take any.
        for (var j in m)
            if (m.hasOwnProperty(j)) {
                if (type == "AND") {
                    if (m[j] !== filterWords.length) delete m[j];
                    else m[j] = 1;
                }
                if (type == "OR") {
                    if (m[j]) m[j] = 1;
                }
            }

        matches.push(m);

    }
    var m = this.arrayUnions(matches);

    var results = [];
    for (var i in m)
        if (m.hasOwnProperty(i)) {
            if (m[i] == queries.length) {
                results.push(this.searchData[i]);
            }
        }

    return results;


}
SearchController.prototype.arrayUnions = function(source) {
    var r = {};
    for (var j = 0; j < source.length; j++) {
        var w = 0;
        for (var k in source[j])
            if (source[j].hasOwnProperty(k)) {
                if (source[j][k]) r[k] = r[k] ? r[k] + 1 : 1;
            }
    }
    return r;
};

//Notes
//We can have elements, that a controller has, and can share.
//We should consider if they're single or multiple and how multiples are shared
//When a page change happens we need to work out how to keep the elements. Remove them from DOM but save them, then readd them perhaps?

function StandardMenuController() {

    this.className = "StandardMenuController";
    this.menuItems = [];
    this.menuSelector = ".";
    this.menuSelectedClass = "active";
    this.$menuHolder = null;

};
StandardMenuController.abstract = true;
StandardController.inheritsFrom(EventTarget);
StandardMenuController.inheritsFrom(StandardController);

StandardMenuController.prototype.swap = function(onComplete) {
    this.standardMenuSwap(true);
}
StandardMenuController.prototype.standardMenuSwap = function(setState, forceRefresh, performSelect) {
    var state = nav.getState();
    if (this.info.on || forceRefresh) {
        this.gatherMenuItems();
        this.addTouchEvents();
    } //check
    //Igloo.log(performSelect + " " + this.className);
    if (performSelect !== false) this.selectMenuItemByUrl(state.nextUrl);
    if (setState) this.setState(true);
}
StandardMenuController.prototype.gatherMenuItems = function() {

    this.$menuHolder = $(this.menuSelector);
    this.menuItems = this.gatherMenuLevel(this.$menuHolder);
    return this.menuItems;

}
StandardMenuController.prototype.gatherMenuLevel = function($menuHolder) { //level
    var menuLevel = [];

    var _this = this;
    //Igloo.log();

    var $firstLevelAs = $menuHolder.find("a").filter(function() {
        return $(this).parentsUntil($menuHolder, "li").length == 1;
    });

    var $firstLevelAs = $firstLevelAs.filter(function() {
        return $(this).parentsUntil($menuHolder, "nav").length == 0;
    });

    $firstLevelAs.each(function(i) {

        var $t = $(this);
        var m = {};
        m.text = $t.html();
        m.index = i;
        m.href = Jnav.cleanUrl($t.attr("href"));
        m.glob = m.href + (i ? "**" : ""); //this isn't great...
        m.regex = Igloo.glob2regex(m.glob);
        var $li = $t.parent("li");
        m.$li = $li.size() ? $li : false;
        m.$a = $t;
        m.$node = (m.$li ? m.$li : m.$a);
        m.selected = m.$node.hasClass(_this.menuSelectedClass);

        m.$sub = $li.find("nav").first();
        m.hasSub = m.$sub.size() > 0;

        m.subMenu = m.hasSub ? _this.gatherMenuLevel(m.$sub) : [];
        menuLevel.push(m);
    });

    return menuLevel;
}
StandardMenuController.prototype.addTouchEvents = function() {
    //this.menuItems
}
StandardMenuController.prototype.getMenuHolder = function() {
    return this.$menuHolder;
}
StandardMenuController.prototype.getMenuItemByUrl = function(url, loose) {
    var cleanUrl = Jnav.cleanUrl(url);

    var menuItemExact;
    if (!loose) {
        menuItemExact = Igloo.searchArray(this.menuItems, "href", cleanUrl);
    } else {
        menuItemExact = Igloo.searchArrayGlob(this.menuItems, "href", cleanUrl + "*");
    }


    if (!menuItemExact) {
        var menuItem = false;
        for (var i = 0; i < this.menuItems.length; i++) {
            var result = url.match(this.menuItems[i].regex);
            if (result) menuItem = this.menuItems[i];
        }


        return menuItem;
    }
    return menuItemExact;
}
StandardMenuController.prototype.getSelectedMenuItem = function() {

    for (var i = 0; i < this.menuItems.length; i++) {
        var m = this.menuItems[i];
        if (m.selected) return m;
    }

    return false;
}
StandardMenuController.prototype.getNextMenuItem = function() {

    var selected = this.getSelectedMenuItem();
    if (selected) {
        var index = selected.index;
        if (this.menuItems.length > index) return this.menuItems[index + 1];
    }
    return false;
}
StandardMenuController.prototype.getPreviousMenuItem = function() {

    var selected = this.getSelectedMenuItem();
    if (selected) {
        var index = selected.index;
        if (index > 0) return this.menuItems[index - 1];
    }
    return false;
}
StandardMenuController.prototype.selectMenuItemByUrl = function(url) {
    var menuItem = this.getMenuItemByUrl(url, true);
    return this.selectMenuItem(menuItem);
}
StandardMenuController.prototype.selectMenuItem = function(menuItem) {

    //Igloo.log("SELECT " + this.className)
    //Igloo.log(menuItem)

    for (var i = 0; i < this.menuItems.length; i++) {
        var m = this.menuItems[i];
        if (m.selected) {
            m.$node.removeClass(this.menuSelectedClass);
            m.selected = false;
        }
    }
    if (menuItem) {
        menuItem.$node.addClass(this.menuSelectedClass);
        menuItem.selected = true;
    }

    return menuItem !== false;
};
var p = function(x) {
    Igloo.log(x)
}

var nav, jcache, controllers, jstage, googletag = googletag || {};

//We need to do some good error checking. Mostly with function calls that don't exist, or statuses which are not right.

var init;

var fontLoaded;


function Aviator(settings) {
    var AV = this;


    if (!settings) settings = {};

    var startup = MultipleOnComplete.create(Igloo.delegate(this, initialLoad));

    this.domLoaded = startup();
    if (settings.requireFonts) fontLoaded = startup();


    $(function() {
        AV.domLoaded();
    });

}
Aviator.get = function(className) {

    return init(className);

}
Aviator.detectFontLoad = function() { //ToDo - bring out of base aviator code


    setTimeout(function() {
        fontLoaded();
    }, 10);

    return;

    document.write("<div id='font-loader' style='overflow:hidden;'><p id='font-loader-p' style='background-color:#fff;float:left;font:2000px \"Berling LT W01 Roman\", sans-serif;padding:0;margin:0;color:#000;line-height:100%;'>X</p></div>");
    var ow, wh;
    var t;
    var f = function() {

        var d = document.getElementById('font-loader-p');
        var w = d.offsetWidth;
        var h = d.offsetHeight;

        //Igloo.log(w,h);

        if (ow != w || oh != h) {
            if (ow) {
                clearInterval(t);
                d.parentNode.parentNode.removeChild(d.parentNode);
                var d = document.getElementsByTagName("html");
                d[0].className = d[0].className + " fonts-loaded";

                Igloo.log("Font loaded")
                fontLoaded()
            }
            ow = w;
            oh = h;
            //console.log(ow + " " + oh)
        }

    }
    f();
    t = setInterval(f, 100);

}



function initialLoad() {


    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    } else {
        document.documentElement.className += " has-touch";
    }


    var status = "ready";
    var preloadQueue = [];
    //$("body").height(10000)
    //$(window).on("scroll",function(e){ $("body").html("<div style='position:fixed'>"+$(window).scrollTop()+"</div>") })


    $("#load-splash").fadeTo(850, 0, function(e) {
        $(this).remove();
    });


    jcache = new Jcache();
    nav = new Jnav();
    jstage = new Stage();

    //FastClick.attach(document.body);

    controllers = [];
    var register = StandardController.getRegister();
    for (var i = 0; i < register.length; i++) {
        var c = new register[i]();
        controllers.push({
            controller: c,
            className: c.className
        });
    }


    jcache.addListener("loaded", function(cache) {

        preloadQueue.push(cache);

        if (status == "ready") {
            processPreloadQueue();
        }



    })

    init = function(controllerName) {
        //Get a global object
        if (window[controllerName]) return window[controllerName];

        //Check if we've cached the result
        if (!this.objectQuickAccessCahce) this.objectQuickAccessCache = {};
        if (Igloo.defined(this.objectQuickAccessCache[controllerName])) return this.objectQuickAccessCache[controllerName];

        //If not search and return
        controllerName = controllerName.charAt(0).toUpperCase() + controllerName.substring(1);
        var c = Igloo.searchArray(controllers, "className", controllerName);
        this.objectQuickAccessCache[controllerName] = c ? c.controller : false;

        return this.objectQuickAccessCache[controllerName];

    }


    var orderBy = function(k2) {
        var original = info.controllers;
        var k1 = 'info';
        var sort = 'priority';
        var require = true;
        var dir = "DESC";

        var ordered = [];
        for (var i = 0; i < original.length; i++) {
            var c = original[i];
            var actions = c[k1][k2];

            if (!Igloo.isArray(actions)) continue;
            for (var j = 0; j < actions.length; j++) {
                var a = actions[j];
                var d = Igloo.copy(c);
                d.action = a;
                d.actionIndex = j;
                d.status = "waiting";
                d.type = k2;

                var p = a ? a[sort] : false;
                d[sort] = p;
                if (!require || p !== false) {
                    for (var k = 0; k < ordered.length; k++) {
                        var ck = ordered[k];
                        var pk = ck[sort];
                        if (dir == "DESC" && p > pk) break;
                        if (dir == "ASC" && p < pk) break;
                    }
                    ordered.splice(k, 0, d);
                }

            }

        }

        return ordered;

    }

    var runStageLabel = function(labels, next) {

        var debug = 0;
        var run_mc = MultipleOnComplete.create(Igloo.delegate(this, runStageLabel, labels, next)); //runStage1

        if (typeof(labels) == "string") {
            var label = labels;
            var labelling = labels + 'ing';
            var labelled = labels;
        } else {
            var label = labels[0];
            var labelling = labels[1];
            var labelled = labels[2];
        }

        if (debug) Igloo.log("==== Run Stage Label: " + label + "========")

        var completed = 0;

        //Igloo.log(info);

        for (var i = 0; i < info.ordered[label].length; i++) {
            var details = info.ordered[label][i];
            var c = details.controller;
            var a = details.action;
            var index = details.actionIndex;
            var s = ""; //;c.getState();
            //var inf	= details.info[label];
            var inf = a;
            var isMain = c == info.main; //Note: info is global is it?
            var name = c.className;
            var status = details.status;

            if (debug) Igloo.log(name + " status: " + s + " stauts: " + status + " " + isMain)
            if (status == "waiting") {

                details.status = "working";
                c.setHandler(details);

                //timeoutChecker(name + " / " + label);

                var fStandard = inf.func ? inf.func : label;
                var fMain = inf.mainFunc ? inf.mainFunc : (fStandard + 'Main');

                var tryComplete = run_mc();
                var tryCompleteAndRun = Igloo.delegate(this, function(c, tryComplete) {
                    c.setState(true);
                    tryComplete();
                }, c, tryComplete);

                try {
                    var result;
                    if (isMain && c[fMain]) result = run_mc.ff(c, c[fMain], tryCompleteAndRun, debug > 1 ? ('rs ' + name + " " + label + 'main') : '');
                    else if (c[fStandard]) result = run_mc.ff(c, c[fStandard], tryCompleteAndRun, debug > 1 ? ('rs ' + name + " " + label + '') : '');
                    else throw ("e");

                    if (result === true) c.setState(true);

                    //Error checking
                    if (tryComplete.check() && c.getState() !== "complete") throw ("We didn't set the state of " + name + " to " + labelled + ", it was still: " + c.getState());
                } catch (err) {

                    Igloo.log("ERROR: " + err);
                    var trace = printStackTrace({
                        e: err
                    });
                    if (trace)
                        for (var i in trace) {
                            //if(i < 5) alert(trace[i])
                            //if(Igloo.defined(console) && console.log) console.log(trace[i].toString().split("@").join(":\n   ").toString())
                            Igloo.log(trace[i].toString().split("@").join(":\n   ").toString())
                        }

                    //Set it as complete anyway...
                    c.setState("complete");
                    tryComplete();
                }

                if (inf.block) {
                    if (debug) Igloo.log("Wait....");
                    return;
                } else {
                    //Continue...
                    if (debug) Igloo.log("Continue..... " + status);
                }
            }
            if (status == "complete") completed++;
            if (debug > 2) Igloo.log(name + " " + s + " " + labelled + " " + completed + " " + info.ordered[label].length)

        }
        var complete = completed == info.ordered[label].length;

        if (debug && complete) Igloo.log("finished " + label + " " + complete + "===================")

        //We must be all done
        if (complete) next();

    }

    var timeoutChecker = function(label) {
        this.timeout = setTimeout(function() {
            Igloo.log("Timeout error: " + label);
        }, 2500);
    }
    timeoutChecker.clear = function() {
        Igloo.log("Clear: " + this.timeout);
        clearTimeout(this.timeout);
        this.timeout = false;
    };

    var runStage1 = function() {

        var cache_and_off = MultipleOnComplete.create(runStage2);

        if (info.cache) {
            var c = jcache.getCache(nav.getState().nextUrl);
            if (c.status != "loaded") c.onLoad = cache_and_off();
        }
        return runStageLabel("off", cache_and_off());

    }

    var runStage2 = function() {

        var title = jcache.getCache(nav.getState().nextUrl).title;
        if (title) document.title = title;
        processPreloadQueue();
        return runStageLabel("swap", runStage3);

    }

    var runStage3 = function() {

        return runStageLabel("swapped", runStage4);

    }

    var runStage4 = function() {

        return runStageLabel("on", runStage5);

    }

    var runStage5 = function() {

        if (window._gaq) _gaq.push(
            ['_trackPageview']
        );

        if (typeof(ga) !== "undefined") ga('send', {
            hitType: 'pageview',
            page: location.pathname
        });

        return runStageLabel("finished", runStage6);

    }

    var runStage6 = function() {
        var debug = false;
        if (debug) Igloo.log("===complete===")
        nav.update();
        status = "ready";

        processPreloadQueue();


        return;
    }

    var processPreloadQueue = function() {

        //Waiting preloads
        for (var i = 0; i < preloadQueue.length; i++) {
            for (j = 0; j < controllers.length; j++) {
                controllers[j].controller.checkPreload(preloadQueue[i]);
            }
        }
        preloadQueue = [];
    }


    var run_temp = function() {};
    var info = {};
    var run = function(_set_stage) {

        status = "running";

        for (var i = 0; i < controllers.length; i++) {
            var c = controllers[i];
            //Igloo.log(c.controller)
            c.controller.clearState();
            c.info = c.controller.getRequests();
        }

        info.controllers = controllers;

        info.ordered = {
            main: orderBy('main'),
            off: orderBy('off'),
            swap: orderBy('swap'),
            swapped: orderBy('swapped'),
            on: orderBy('on'),
            finished: orderBy('finished')
        }



        var mainController = info.ordered.main[0].controller;
        if (!mainController) Igloo.warn("Error");


        var cacheRequired = info.ordered.main[0].action.cache ? info.ordered.main[0].action.cache : true;

        info.main = mainController;
        info.cache = cacheRequired;
        info.stage = 1;




        runStage1();


        return;

    }

    jstage.setup(Text.toNumber($(".wrapper").css("min-width")));
    nav.setup("/", false);
    jcache.setup();


    jstage.addListener("onResize", function(e) {

    });
    nav.onInterupt = function(details) {
        //Ask if anyone wants to interupt the menu
        //return true;
        return false;
    }
    nav.onChange = function(details) {

        window.jt = +new Date;
        window.pt = function(x) {
            Igloo.log("t" + (+new Date - jt), x);
        }

        run();

        return false;

    }

}


function BaseController() {
    this.className = "BaseController";
    this.debug = false;
};
BaseController.inheritsFrom(StandardController);
BaseController.prototype.ask = function() {
    return {
        'on': true,
        'swap': true,
        'main': {
            priority: 1
        }
    };
};
BaseController.prototype.swap = function() {
    //Igloo.log("?")

}
BaseController.prototype.on = function() {

    this.setup();

    return true;
}
BaseController.prototype.setup = function() {

    var _this = this;

};

function MenuController() {
    this.className = "MenuController";
    this.debug = false;

    this.$button;
    this.$holder;
    this.$cover;

    this.selected = false;

    this.offType = "fade";

    this.status = "off";
};
MenuController.inheritsFrom(StandardMenuController);
MenuController.prototype.ask = function() {
    return {
        'on': true,
        'off': true
    };
};
MenuController.prototype.on = function() {
    if (!this.isSetup) {
        this.setup();
    }

    this.selected = nav.getState().nextParts[0];
    if (!this.selected) this.selected = "about";
    this.subSelected = nav.getState().nextParts[1];

    return true;
}
MenuController.prototype.show = function() {
    if (this.coverStatus !== "on") this.coverAc.change(0.8, 1);


    $("body").addClass("menu-on");
    this.status = "on";
    this.$holder.stop().css("display", "block").css("opacity", 1);

    //Collect all the onscreen text and fade off
    this.$texts = $(".body p, .body  h1,.body  h2, .body  svg");
    this.$texts.each(function() {
        var $this = $(this);
        $this.data("opacity", $this.css("opacity")).stop().addClass("menu-hidden").animate({
            opacity: 0
        }, {
            duration: 1250,
            easing: "linear",
            complete: function() {
                $(this).css("visibility", "hidden")
            }
        }); //easeInOutCubic
    });


    this.clearTimeouts();
    this.linkTimeouts = [];

    this.$credits.css({
        opacity: 0
    }).stop().animate({
        opacity: 1
    }, {
        duration: 2500,
        ease: "easeInOutCubic"
    });


    $links = this.$topLinks;
    $links.each(Igloo.$delegate(this, function($this, i) {
        $this.data("svgText").reset();
        this.linkTimeouts.push(setTimeout(Igloo.delegate(this, function() {
            $this.data("svgText").on();
        }), 150 * i));
    }));
    this.selectItem();

    // var state = Aviator.get("nav").getState();
    // if (state.nextParts[0] == "company") {
        // this.showSubmenu("company");
    // };
    // if (state.nextParts[0] == "services") {
        // this.showSubmenu("services");
    // };

}
MenuController.prototype.lastSvgTextOn = function() {

}
MenuController.prototype.selectItem = function() {

    this.$topLinks.each(function() {
        $(this).parent().addClass("off").removeClass("on").removeClass("selected")
    });
    this.$topLinks.parent().filter(".main-menu-" + this.selected).removeClass("off").addClass("selected");

}
MenuController.prototype.clearTimeouts = function() {
    if (this.linkTimeouts)
        for (var i in this.linkTimeouts) {
            clearTimeout(this.linkTimeouts[i]);
        }
}
MenuController.prototype.clearSecondTimeouts = function() {
    if (this.linkSecondTimeouts)
        for (var i in this.linkSecondTimeouts) {
            clearTimeout(this.linkSecondTimeouts[i]);
        }
}
MenuController.prototype.hide = function(options) {
    if (!options) options = {};

    if (!this.isSetup) return;

    this.clearTimeouts();


    if (this.coverStatus !== "on")
        if (this.coverAc) this.coverAc.change(0);

    //this.$holder.css("display","block").css("opacity",1);
    this.status = "off";



    if (this.offType == "fade") {
        this.$holder.animate({
            opacity: 0
        }, {
            duration: 750,
            complete: Igloo.delegate(this, function() {
                if (this.status == "on") return;
                this.$holder.hide();
                $links = this.$topLinks;
                if ($links) $links.each(function(i) {
                    //$(this).data("off")(1000);
                    $(this).data("svgText").reset();
                });
                $("body").removeClass("menu-on");
            })
        });
    } else {
        $links = this.$topLinks;
        if ($links) $links.each(function(i) {
            setTimeout(Igloo.delegate(this, function() {
                $(this).data("off")(1);
            }), 100 * i);
        });
    }

    if (options.showTexts !== false && this.$texts) this.$texts.each(function() {
        var $this = $(this);
        $this.stop().css("visibility", "").removeClass("menu-hidden").animate({
            opacity: 1
        }, {
            duration: 500,
            easing: "linear"
        }); //$this.data("opacity")
    });


}

MenuController.prototype.setup = function() {
    var _this = this;

    this.isSetup = true;

    this.$button = $(".menu-button a");
    this.$holder = $(".menu-wrapper");
    this.$cover = $(".menu-cover");
    this.$credits = $(".menu-credits");

    this.$topLinks = $(".main-menu > li > a");

    var $links = this.$topLinks.add();
    new SvgText($links, {
        animate: false,
        a: 1.5
    }); //This will set them all up

    this.$holder.find("a").on("click touchstart", Igloo.$delegate(this, function($this, e) {
        e.preventDefault();
        e.stopPropagation();
        var href = $this.attr("href");
        if (nav.getState().nextUrl === nav.cleanUrl(href)) {
            this.hide();
        } else {
            nav.change(nav.cleanUrl(href))
        }
    }));

    this.status = "off";

    this.coverAc = new AcceleratePositionToggle({
        x: 0,
        a: 10,
        onChange: Igloo.delegate(this, function(x) {
            this.$cover.css("opacity", x);
        }),
        onStart: Igloo.delegate(this, function(x, y) {
            this.$cover.css("display", "block");
        }),
        onComplete: Igloo.delegate(this, function(x, details) {
            this.coverComplete();
            if (x == 0) {
                this.$cover.css("display", "none");
            }
        })
    });

    this.$topLinks.on("mouseover", Igloo.$delegate(this, function($this, e) {
        //Make others off
        this.$topLinks.each(function() {
            $(this).parent().addClass("off")
        });
        $this.parent().removeClass("off").addClass("on");
    })).on("mouseout", Igloo.$delegate(this, function($this, e) {
        this.selectItem();
    }));

    var m = function($set) {
        $set.on("mouseover", Igloo.$delegate(this, function($this, e) {
            //Make others off
            $set.each(function() {
                $(this).parent().addClass("off")
            });
            $this.parent().removeClass("off").addClass("on");
        })).on("mouseout", Igloo.$delegate(this, function($this, e) {
            $this.parent().removeClass("on");
            $set.each(function() {
                $(this).parent().removeClass("off");
            });
        }));
    }
    for (var i in this.$secondLinksByName) m(this.$secondLinksByName[i]);



    this.$button.on("click touchstart", Igloo.delegate(this, function(e) {
        e.preventDefault();

        if (this.status == "on") this.hide();
        else this.show();

    }));

    this.$cover.on("click touchstart", Igloo.delegate(this, function(e) {
        e.preventDefault();
        this.hide();
    }));
    this.$holder.on("click touchstart", Igloo.delegate(this, function(e) {
        e.preventDefault();
        this.hide();
    }));

    $(document).keydown(Igloo.delegate(this, function(e) {
        if (e.keyCode == 27) {
            this.hide();
        }
    }));

}
MenuController.prototype.cover = function(onComplete, instant) {
    if (!this.isSetup) {
        onComplete();
        return true;
    }

    this.coverStatus = "on";

    this.coverAc.change(1, instant);
    setTimeout(function() {
        onComplete();
    }, instant ? 700 : 700)
}
MenuController.prototype.uncover = function(onComplete, instant) {

    if (!this.isSetup) {
        onComplete();
        return true;
    }

    this.coverStatus = "";

    this.addListener("uncoverComplete", onComplete, true);
    this.coverAc.change(0, instant ? true : 2);
}
MenuController.prototype.coverComplete = function() {
    this.fire("coverComplete");
    this.fire("uncoverComplete");
}
MenuController.prototype.off = function() {
    if (this.status == "on") this.hide();
};

function SlideController() {
    this.className = "SlideController";
    this.debug = false;

    this.nextSlide = false;
    this.currentSlide = false;
    this.waitingSlide = false;

    this.level = 0;

};
SlideController.abstract = true;
SlideController.inheritsFrom(StandardController);
SlideController.prototype.offMain = function(onComplete) {
    //Igloo.log("offmain")
}
SlideController.prototype.swap = function(onComplete) {

    var state = nav.getState();
    if (!this.isSetup) {
        this.setupPage();
        this.loadSlides();
        this.setupListeners();
    }

    var state = nav.getState();
    this.nextSlide = state.nextParts.length > this.level ? Igloo.searchArray(this.slides, "name", state.nextParts[this.level]).index : 0;

    return true;

}
SlideController.prototype.on = function(onComplete) {


    this.preventDefaultDelegate = function(event) {
        event.preventDefault();
    };

    $("html").on("touchmove", this.preventDefaultDelegate);


    this.onCompleteFunction = onComplete;

    var next = this.nextSlide;
    this.showSlide(next);
    this.nextSlide = false;

    return this.waitForAnimation ? false : true;

}
SlideController.prototype.finished = function(onComplete) {
    //$("html, body, header").css("position","fixed");

}
SlideController.prototype.showSlide = function(index) {
    var nextSlide = this.getSlide(index);
    //var currentSlide 	= this.getSlide(this.currentSlide);

    if (!nextSlide) return false;

    //First hide the previous slide

    /*
    if(this.currentSlide !== false){
    	this.status = "hiding";
    	this.waitingSlide = nextSlide.index;
    	this.hideSlide(this.currentSlide);
    	return;
    }*/

    this.status = "showing";
    nextSlide.status = "showing";
    nextSlide.bringOn();
    this.currentSlide = nextSlide.index;

}
SlideController.prototype.slideBringOn = function(slide) {


    var mc = new MultipleOnComplete.create(Igloo.delegate(this, this.showSlideComplete, slide.index));

    slide.$scene.show().css("opacity", 1);


    var sw = jstage.getWidth();
    var sh = jstage.getHeight();

}
SlideController.prototype.showSlideComplete = function(index) {
    //Igloo.log("complete " + index + " but is that the right one? " + this.currentSlide)

    if (index == this.currentSlide) {
        this.status = "ready";

        //Force double skippage
        this.attempts = 0;
        this.lastAttemptTime = 0;
    }

    if (this.waitForAnimation) this.onCompleteFunction();
}
SlideController.prototype.hideSlide = function(index) {
    //Igloo.log("hide slide " + index);
    if (typeof(index) == "undefined") return true;
    var currentSlide = this.getSlide(index);
    if (!currentSlide || currentSlide.status == "off") return false;

    currentSlide.bringOff();

}

SlideController.prototype.slideBringOff = function(slide) {


    var mc = new MultipleOnComplete.create(Igloo.delegate(this, this.slideBringOffComplete, slide.index));
    slide.$scene.parent().stop().fadeTo(250, 0, mc());


}
SlideController.prototype.slideBringOffComplete = function(index) {

    this.currentSlide = false;

    var currentSlide = this.getSlide(index);

    currentSlide.$scene.hide();
    currentSlide.$scene.parent().css("opacity", 1);
    if (this.waitingSlide !== false) this.showSlide(this.waitingSlide);

}
SlideController.prototype.setupPage = function() {


    this.isSetup = true;

    this.$body = $("body");

    this.$holder = null;

    this.status = "ready"; //Check what this should be
    this.attempts = 0;
    this.lastAttemptTime = null;

    this.nextSlide = false;
    this.currentSlide = false;
    this.waitingSlide = false;

}
SlideController.prototype.setupListeners = function() {
    this.$body = $("body");
    this.$arrow = this.$body.find(".scroll-down");

    this.mouseWheelDelegate = Igloo.delegate(this, this.wheelNoRepeat, this.wheelChangeWeak);
    this.keyPressDelegate = Igloo.delegate(this, this.keyPress);

    this.$body.on("mousewheel", this.mouseWheelDelegate);
    this.$body.on("keydown", this.keyPressDelegate);

    //This needs setting up
    var _this = this;
    if ('ontouchstart' in window || 'onmsgesturechange' in window) { //Touchevents
        var myElement = this.$body.find(".body").get(0);
        this.hammer = new Hammer(myElement, {
            inputClass: Hammer.TouchInput
        });
        this.hammer.get('swipe').set({
            direction: Hammer.DIRECTION_ALL,
            velocity: 0.001,
            threshold: 5
        });
        this.hammer.on("swipeup swipedown swipeleft swiperight", Igloo.throttle(function(ev) {
            if (Aviator.get("menuController").mobileMenuActive) return false;
            //Igloo.log(ev);


            if (ev.type == "swipedown") _this.previous();
            if (ev.type == "swipeup") _this.next();
            if (ev.type == "swipeleft") _this.next();
            if (ev.type == "swiperight") _this.previous();
        }, 1000));

    }

    this.$arrow.off("click touchstart").on("click  touchstart", Igloo.delegate(this, function(e) {
        e.preventDefault();
        this.next();
    }));

    if (!this.onResizeDelegate) {
        this.onResizeDelegate = Igloo.delegate(this, this.onResize);
        Aviator.get("jstage").removeListener("resize", this.onResizeDelegate).addListener("resize", this.onResizeDelegate);
    }

    if (!this.onResizeDelayDelegate) {
        this.onResizeDelayDelegate = Igloo.debounce(this.onResizeDelay, 1000, this);
        Aviator.get("jstage").removeListener("resize", this.onResizeDelayDelegate).addListener("resize", this.onResizeDelayDelegate);
    }



}
SlideController.prototype.loadSlides = function() {
    if (this.buildSlides) this.buildSlides();
    this.completeSlides();
}
SlideController.prototype.completeSlides = function() {

    var state = nav.getState();
    var base = this.level > 0 ? nav.sliceUrl(state.nextUrl, this.level - 1) : "/";

    for (var i in this.slides) {
        var s = this.slides[i];

        if (!s.url) s.url = base + (i * 1 ? s.name : "");
        s.status = "off";
        s.index = i * 1;

        s.controller = this;
        s.bringOn = Igloo.delegate(this, this.slideBringOn, s);
        s.bringOff = Igloo.delegate(this, this.slideBringOff, s);
    }
}
SlideController.prototype.getSlide = function(index) {
    if (typeof(index) == "undefined") return false;
    return index in this.slides ? this.slides[index] : false;
}
SlideController.prototype.next = function() {
    //if(Aviator.get("menuController").mobileMenuActive) return true;
    //var dm = Aviator.get("dotMenuController");
    //var next = dm.getNextMenuItem();
    var next = this.getSlide(this.currentSlide + 1);
    if (next) nav.change(next.url);
}
SlideController.prototype.previous = function() {
    //if(Aviator.get("menuController").mobileMenuActive) return true;

    //var dm = Aviator.get("dotMenuController");
    //var next = dm.getNextMenuItem();
    var previous = this.getSlide(this.currentSlide - 1);
    if (previous) nav.change(previous.url);
}
SlideController.prototype.nextWeak = function() {
    //if(Aviator.get("menuController").mobileMenuActive) return true;

    if (this.allowSkippage) return this.next();


    if (this.status == "ready" || this.attempts > 0) {
        this.next();
    } else {
        this.attempts++;
        this.lastAttemptTime = +new Date();
    }
}
SlideController.prototype.prevWeak = function() {
    if (this.allowSkippage) return this.prev();
}
SlideController.prototype.onResize = function(stage) {

}
SlideController.prototype.onResizeDelay = function(stage) {



}
SlideController.prototype.wheelNoRepeat = function(fe, e) {
    e.preventDefault();

    var delta_y = e.deltaY + e.deltaX;
    //var delta_x = ;
    var threshold = 150;
    var thresholdAction = 250;

    var now = +new Date;
    var delayed = (this.wnrLast && now < this.wnrLast + threshold);
    var delayedAction = (this.wnrAction && now > this.wnrAction + thresholdAction);

    var biggerDelta = false;
    if (delta_y * this.deltaLast < 0) biggerDelta = true;
    if (delayedAction && Math.abs(delta_y) - Math.abs(this.deltaLast) > 100) biggerDelta = true; //No reliable

    this.wnrLast = now;
    this.deltaLast = delta_y;
    if (!delayed || biggerDelta) {
        this.wnrAction = now;
        fe.apply(this, [e]);
    }
    return false;
}
SlideController.prototype.wheelChange = function(e) {
    //Igloo.log(e)
    if (e.deltaY > 0 || e.deltaX < 0) this.previous();
    if (e.deltaY < 0 || e.deltaX > 0) this.next();
}
SlideController.prototype.wheelChangeWeak = function(e) {
    if (e.deltaY > 0 || e.deltaX < 0) this.previous();
    if (e.deltaY < 0 || e.deltaX > 0) this.nextWeak(); //nextWeak
}

SlideController.prototype.keyPress = function(e) {

    if (e.which == 37) this.previous();
    if (e.which == 38) this.previous();
    if (e.which == 39) this.nextWeak();
    if (e.which == 40) this.nextWeak();

    if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) e.preventDefault();
}
SlideController.prototype.off = function() {
    this.isSetup = false;

    //Igloo.log("wo there?")

    //$("html, body, header").css("position","");

    this.$body.off("mousewheel", this.mouseWheelDelegate);
    this.$body.off("keydown", this.keyPressDelegate);
    Aviator.get("jstage").removeListener("resize", this.onResizeDelayDelegate);
    Aviator.get("jstage").removeListener("resize", this.onResizeDelegate);

    $("html").off("touchmove");


    if (this.hammer) {
        this.hammer.off("swipeup swipedown swipeleft swiperight");
        this.hammer.destroy();
    }
    this.$arrow.off("click touchstart");

};
var aviator = new Aviator({
    requireFonts: true
});

function AboutController() {
    this.className = "AboutController";
    this.debug = false;

    this.glob = ["/", "/home/*"];
    this.globCache = this.glob;
    this.globMain = true;

    this.mainPriority = 1000;
    this.priority = 1; //Low priority

    this.zindex = 2;

    this.level = 1;


};
AboutController.inheritsFrom(SlideController);

AboutController.prototype.buildSlides = function() {

    $(".scroll-down").hide().on("click touchstart", Igloo.delegate(this, function(e) {
        e.preventDefault();
        this.next();
    }));


    this.slides = [];

    $(".slide").each(Igloo.$delegate(this, function($this, i) {
        $s = $this;

        var name = $s.attr("name");
        this.slides.push({
            $scene: $s,
            name: name,
            url: i ? "/home/" + name : "/"
        });
        $s.hide();
    }));


}

AboutController.prototype.slideBringOn = function(nextSlide) {

    if (this.earlyStartTimeout) clearTimeout(this.earlyStartTimeout);

    var currentSlide = this.getSlide(this.currentSlide);
    if (currentSlide.preloadId) Preloader2.cancel(currentSlide.preloadId);

    var default_src = nextSlide.$scene.find(".background").attr("data-default");
    var expected_src = nextSlide.$scene.find(".background").attr("data-requested");



    Preloader2.add({
        src: default_src,
        priority: 1,
        top: true,
        tag: "page"
    });
    if (expected_src) {
        //Igloo.log("Tell it to preload: " + expected_src)
        Preloader2.add({
            src: expected_src,
            priority: 1,
            tag: "page"
        });
        nextSlide.preloadId = Preloader2.getLastId();
    }


    var a = this.getSlide(this.nextSlide - 1);
    var b = this.getSlide(this.nextSlide + 1);

    if (a) {
        var src = a.$scene.find(".background").attr("data-default");
        if (src) Preloader2.add({
            src: src,
            priority: 2,
            tag: "page"
        });
    }
    if (b) {
        var src = b.$scene.find(".background").attr("data-default");
        if (src) Preloader2.add({
            src: src,
            priority: 2,
            tag: "page"
        });
    }


    nextSlide.$scene.addClass("abs");

    var sw = jstage.getWidth();
    var sh = jstage.getHeight();
    var t = 1000;


    var $h1 = nextSlide.$scene.find("h1");
    var $p = nextSlide.$scene.find("p");

    $h1.hide();
    $p.hide();

    if ('ontouchstart' in window || 'onmsgesturechange' in window) { //Touchevents
        $(".scroll-down").find("span").html("Swipe down")
    }


    $(".scroll-down").stop().animate({
        opacity: 0
    }, 750, function() {
        $(this).hide();
    });

    if (nextSlide.index < this.slides.length - 1) {
        this.scrollTimer = setTimeout(function() {
            $(".scroll-down").stop().css("opacity", 0).show().animate({
                opacity: 1
            }, 2000);
        }, 2000); //2600
    }



    var fadeComplete = Igloo.delegate(this, function() {

        var timeout = setTimeout(function() {
            if ($p && $p.length && !$p.hasClass("menu-hidden")) {
                $p.animate({
                    opacity: 1
                }, {
                    duration: 2000,
                    easing: "easeInOutCubic"
                });
            }
        }, 500);

        this.showSlideComplete(nextSlide.index);

    });

    var earlyStart = Igloo.delegate(this, function(e) {
        if (nextSlide.svgText) {
            nextSlide.svgText.on();
        } else {
            nextSlide.svgText = new SvgText($h1, {
                animate: true,
                a: 0.4
            });
        }
        $h1.show();
        $p.stop().css("opacity", 0).show();
    });

    if (currentSlide) {
        //var direction = currentSlide.index < nextSlide.index ? "up" : "down";

        currentSlide.removing = true;
        nextSlide.adding = true;
        if (nextSlide.removing) {
            nextSlide.removing = false;
        }
        currentSlide.adding = false;
        if (nextSlide.svgText) nextSlide.svgText.reset();



        nextSlide.$scene.css("z-index", 2).stop().css("opacity", 0).show().animate({
            "opacity": 1
        }, {
            duration: t,
            easing: "easeInOutCubic",
            complete: Igloo.delegate(this, function() {

                for (var i = 0; i < this.slides.length; i++) {
                    var s = this.slides[i];
                    if (s.adding) continue;

                    s.$scene.hide();
                    if (s.svgText) s.svgText.reset();
                    //Igloo.log("ended: " + currentSlide.index)
                    s.removing = false;
                }
                nextSlide.adding = false;
                fadeComplete();

            })
        });
        currentSlide.$scene.css("z-index", 1).stop();

        if (currentSlide.timeouts)
            for (var i = 0; i < currentSlide.timeouts.length; i++) {
                clearTimeout(currentSlide.timeouts[i])
            };
    } else {
        nextSlide.$scene.css("z-index", 2).css("opacity", 0).show().animate({
            "opacity": 1
        }, 1000, function() {
            fadeComplete();
        });
    }

    this.earlyStartTimeout = setTimeout(earlyStart, 1000);
    //Igloo.log("timout needs removing " + timeout)

    if (nextSlide.name == "partners") {

        var $partners = nextSlide.$scene.find(".partner").stop().css("opacity", 0);

        var partners = [];


        for (var i = 0, ii = $partners.size(); i < ii; i++) {
            var $partner = $partners.eq(i);
            var offset = $partner.offset();
            var left = offset.left;
            var top = offset.top;
            var order = left + top;
            partners.push({
                order: order,
                $element: $partner
            });
        }
        partners.sort(function(a, b) {
            var x = a.order;
            var y = b.order;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        var timeouts = [];
        for (var i = 0, ii = partners.length; i < ii; i++) {
            var timeout = setTimeout(Igloo.delegate(this, function($element) {
                $element.animate({
                    opacity: 1
                }, {
                    duration: 1000,
                    easing: "easeInCubic"
                });
            }, partners[i].$element), i * 100 + 250);
            timeouts.push(timeout);
        }
        nextSlide.timeouts = timeouts;

    }




}
AboutController.prototype.offMain = function(onComplete) {
    clearTimeout(this.scrollTimer);
}
AboutController.prototype.off = function() {
    clearTimeout(this.scrollTimer);
    this.__parent.off.apply(this);
    for (var i = 0; i < this.slides.length; i++) {
        if (this.slides[i].svgText) this.slides[i].svgText.destroy();
    }
    SvgText.check();
};

function ContactController() {
    this.className = "ContactController";
    this.debug = false;

    this.glob = "/contact**"
};
ContactController.inheritsFrom(StandardController);
ContactController.prototype.on = function() {

    if (!this.setup) {
        this.setupMap();
    }

};
ContactController.prototype.setupMap = function() {

    this.setup = true;

    this.$gmap = $(".location-map");
    this.$streetview = $(".icon-streetview");
    this.streetview = false;

    /*	this.mapWidthDelegate = Igloo.delegate(this,function(){
    		var w = jstage.getWidth();
    		var l = 150-w/2;
    		this.$gmap.width(w);
    		this.$gmap.css("left",l);


    	});
    	jstage.addListener("resize",this.mapWidthDelegate);
    	this.mapWidthDelegate();
    */

    var resizer = jstage.addListener("resize", Igloo.debounce(Igloo.delegate(this, function() {

        this.map.fitBounds(this.bounds);

    }), 1));




    var markers = this.getMeta().offices;
    var alat = 0;
    var alng = 0;
    var bounds = new google.maps.LatLngBounds();

    for (var i in markers) {
        alat += markers[i].location_lat / markers.length;
        alng += markers[i].location_long / markers.length;
        markers[i].latLng = {
            lat: markers[i].location_lat * 1,
            lng: markers[i].location_long * 1
        };
        bounds.extend(new google.maps.LatLng(markers[i].latLng.lat, markers[i].latLng.lng));
    }

    var increasePercentage = 1.20; //10%
    var pointNorthEast = bounds.getNorthEast();
    var pointSouthWest = bounds.getSouthWest();
    var latAdjustment = (pointNorthEast.lat() - pointSouthWest.lat()) * (increasePercentage - 1);
    var lngAdjustment = (pointNorthEast.lng() - pointSouthWest.lng()) * (increasePercentage - 1);
    var newPointNorthEast = new google.maps.LatLng(pointNorthEast.lat() + latAdjustment, pointNorthEast.lng() + lngAdjustment);
    var newPointSouthWest = new google.maps.LatLng(pointSouthWest.lat() - latAdjustment, pointSouthWest.lng() - lngAdjustment);

    bounds = new google.maps.LatLngBounds();
    bounds.extend(newPointNorthEast);
    bounds.extend(newPointSouthWest);
    this.bounds = bounds;


    var map = new google.maps.Map(this.$gmap.get(0), {
        center: {
            lat: alat,
            lng: alng
        },
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        backgroundColor: 'none',
        zoom: 7
    });
    this.map = map;

    this.map.fitBounds(this.bounds);

    var panorama = map.getStreetView();
    var setPano = function(marker) {
        var centre = {
            lat: marker.streetview_lat * 1,
            lng: marker.streetview_long * 1
        };
        if (marker.streetview_pano) {
            panorama.setPano(marker.streetview_pano);
        } else {
            panorama.setPosition(centre);
        }

        panorama.setPov(({
            heading: marker.streetview_heading * 1,
            pitch: marker.streetview_pitch * 1,
            zoom: marker.streetview_zoom * 1
        }));
    }
    setPano(markers[0]);


    for (var i in markers) {
        markers[i].marker = new google.maps.Marker({
            position: {
                lat: markers[i].location_lat * 1,
                lng: markers[i].location_long * 1
            },
            map: map,
            // icon: '/assets/images/logos/interior-id-logo.' + (Igloo.isIE()?"png":"svg"),
            icon: '/assets/images/icons/map-marker.png',
            title: markers[i].title,
        });

        markers[i].marker.addListener('click', Igloo.delegate(this, function(marker, e) {
            this.map.setZoom(marker.location_zoom * 1);
            this.map.panTo(marker.latLng);
        }, markers[i]), markers[i]);
    }


    $(".contact-location").each(Igloo.$delegate(this, function($this, i) {
        $this.on("click", Igloo.delegate(this, function(e) {
            e.preventDefault();

            if ($this.hasClass("active-location")) {
                $this.removeClass("active-location");
                this.map.fitBounds(this.bounds);
                return;
            }

            $(".active-location").removeClass("active-location");
            map.panTo(markers[i].latLng);
            map.setZoom(markers[i].location_zoom * 1);
            $this.addClass("active-location");

            panorama.setVisible(false);
            this.streetview = false;

            if (i == 0) {
                this.$streetview.animate({
                    opacity: 1
                }, 500);
            } else {
                this.$streetview.animate({
                    opacity: 0
                }, 500);
            }
        }))
    }));


    this.$streetview.on("click", Igloo.delegate(this, function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.streetview === false) {
            panorama.setVisible(true);
            this.streetview = true;
        } else {
            panorama.setVisible(false);
            this.streetview = false;
        }

    }));

    map.setOptions({
        styles: this.getStyles()
    });
}
ContactController.prototype.getStyles = function(zoom) {
    var styles = [{
        "stylers": [{
            "hue": "#ff1a00"
        }, {
            "invert_lightness": true
        }, {
            "saturation": -100
        }, {
            "lightness": 33
        }, {
            "gamma": 0.5
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2D333C"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }];
    /*if(zoom && zoom < 12) styles.push({
     "featureType": "road",
     "elementType": "labels",
     "stylers": [
     { "visibility": "off" }
     ]
     });*/
    return styles;
}
ContactController.prototype.off = function() {
    this.setup = false;
};

function ImageController(settings) {
    if (!settings) settings = {};

    this.className = "ImageController";
    this.version = 3;
    this.base = "/assets/images/";
    this.versions = {
        "fullscreen": [{
            w: 800
        }, {
            w: 1920
        }, {
            w: 3840
        }, {
            h: 530,
            p: "530p"
        }, {
            h: 1100,
            p: "1100p"
        }, {
            h: 1900,
            p: "1900p"
        }],
        "portrait": [{
            h: 520,
            p: "520p"
        }, {
            h: 1000,
            p: "1000p"
        }, {
            h: 1800,
            p: "1800p"
        }],
        "landscape": [{
            w: 700
        }, {
            w: 1600
        }, {
            w: 3200
        }],
        "two-up": [{
            w: 350
        }, {
            w: 800
        }, {
            w: 1600
        }],
        "team": true
    };

    this.images = [];
    this.resizeDelegate = jstage.addListener("resize", Igloo.delegate(this, this.resize));
    this.resizeInstantDelegate = jstage.addListener("resizeInstant", Igloo.delegate(this, this.resizeInstant));

    this.requireAll = "requireAll" in settings ? settings.requireAll : false;

    this.preloadIds = [];

    this.status = "active";

};
ImageController.count = 0;
ImageController.inheritsFrom(EventTarget);
ImageController.prototype.on = function() {
    this.status = "active";
    this.resize();
}
ImageController.prototype.off = function() {
    this.status = "off";
}
ImageController.prototype.process = function(html) {

    var reBackground = /\<div(.*?)style=([\"\']+)(.*)background-image(-wait)?([:\s]+)url\((.*?)\);?(.*?)([\"\']+)(.*?)>(.*?)<\/div>/gi;

    var match;
    var reImg = /\<img(.*?)src(-wait)?=([\"\']+)(.*?)([\"\']+)(.*?)\/?>/gi;

    var found = false;
    while (match = reImg.exec(html)) {

        var original = Igloo.html_entity_decode(match[4].replace(/[\"\']/gi, ""));
        if (!Text.trim(original)) continue;

        var folder = this.getFolderFromUri(original);
        if (!(folder in this.versions)) continue;

        var ext = this.getExtFromUri(original);

        //Class might be in position 1 or 10. Extract classes from each, then join.
        var m1 = this.extractClassesFromString(match[1]);
        match[1] = m1['extracted'];
        var m6 = this.extractClassesFromString(match[6]);
        match[6] = m6['extracted'];
        var classes = m1['classes'].concat(m6['classes']);

        //Extract the center details (if provided)

        var centre = this.getCentreFromString(match[1] + " " + match[6]);
        var centreElement = this.getAttrFromString("data-centre-element", match[1] + " " + match[6]);
        if (!centreElement) centreElement = "img";
        var ratio = this.getRatioFromString(match[1] + " " + match[6]);


        var style = ratio ? 'style="padding-bottom:' + (100 / ratio) + '%"' : "";
        var inner = '<div class="img-replace img-replace-' + ImageController.count + ' img-replace-loading" ' + style + ' ><div class="img-replace-loader"></div>' + '<img class="img-default ' + classes.join(" ") + '" style="opacity:0;" />' + '</div>';
        html = html.substr(0, match.index) + inner + html.substr(match.index + match[0].length);
        reImg.lastIndex = match.index + inner.length - 1;

        var details = {
            index: ImageController.count++,
            type: "img",
            ext: ext,
            original: original,
            folder: folder,
            classes: classes,
            img_class: classes.join(" "),
            centre: centre,
            resize: Igloo.isIn(classes, "blockresize") === false
        }

        this.images.push(details);
        found = true;
    }

    while (match = reBackground.exec(html)) {

        var original = Igloo.html_entity_decode(match[6].replace(/[\"\']/gi, ""));
        if (!Text.trim(original)) continue;

        var folder = this.getFolderFromUri(original);
        if (!(folder in this.versions)) continue; //Currently not preloading any other images. Should prob change this.

        var ext = this.getExtFromUri(original);

        //Class might be in position 1 or 10. Extract classes from each, then join.
        var m1 = this.extractClassesFromString(match[1]);
        match[1] = m1['extracted'];
        var m10 = this.extractClassesFromString(match[9]);
        match[10] = m10['extracted'];
        var classes = m10['classes'].concat(m1['classes']);


        //Extract the center details (if provided)
        var centre = this.getCentreFromString(match[1] + " " + match[9]);

        var inner = '<div class="' + classes.join(" ") + ' img-replace img-replace-' + ImageController.count + ' img-replace-loading" style=' + match[2] + match[3] + match[7] + match[8] + match[9] + '><div class="img-replace-loader"></div>' + '<img class="img-default" style="opacity:0;"/>' + match[10] + '</div>';
        html = html.substr(0, match.index) + inner + html.substr(match.index + match[0].length);
        reBackground.lastIndex = match.index + inner.length - 1;

        var details = {
            index: ImageController.count++,
            type: "background",
            ext: ext,
            original: original,
            folder: folder,
            classes: classes,
            centre: centre
        }

        this.images.push(details);
        found = true;
    }
    if (found) this.ready = false;

    //Go through these, find the default and preload it.
    var orientation = jstage.getWidth() > jstage.getHeight() ? "landscape" : "portrait";
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];
        image.versions = this.versions[image.folder];


        image.selector = ".img-replace-" + image.index;

        if (image.versions === true) {
            image.default = image.original;
            image.expected = image.original;
        } else {
            var orientated_version = image.versions[0];
            for (var j in image.versions) {
                var key = orientation == "landscape" ? "w" : "h";
                if (key in image.versions[j]) {
                    orientated_version = image.versions[j];
                    break;
                }
            }
            var size = orientated_version.p ? orientated_version.p : orientated_version["w" in orientated_version ? "w" : "h"];
            image.default = this.translateSrc(image.original, size);
            image.expected = this.getBestVersion(image.folder, 0, 0);
        }



        var expected_src = this.translateSrc(image.original, image.expected);
        if (Preloader2.checkSrc(expected_src)) {
            image.default = expected_src;
            image.size = image.expected;
        }

        image.sizes = [{
            src: image.default,
            size: image.size,
            loaded: false
        }];

        image.count = 1;

        image.required = (this.requireAll && Igloo.isIn(image.classes, "nopreload") === false) || Igloo.isIn(image.classes, "preload") !== false;

        //Preload the default?
        //Perhaps not worth it if we're just going to render anyway. Although required for sizing?

        //Load the first one priority 1, top
        Preloader2.add({
            src: image.default,
            priority: image.required ? 1 : 3,
            top: image.required,
            tag: "page"
        }).then(Igloo.delegate(this, this.imagePreloaded, image, image.sizes[0]));
        this.preloadIds.push(Preloader2.getLastId());
        //Igloo.log(image.default)
    }



    //Igloo.log(this.images);
    return html;

}
ImageController.prototype.identifyElements = function($container) {
    //We should check through everything that's not yet defined, and see if we can find it.
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];
        if (!image.$element) {
            var $el = $container.find(image.selector);
            if ($el.size()) {
                image.$element = $el;
                image.$wrapper = $el.parent();
                image.$loader = $el.find(".img-replace-loader");
                image.$loader.css("opacity", 1);
                var size = image.sizes[0];
                size.$img = $el.find("img");
                image.$element.attr("data-default", image.default)
                size.onCached = Igloo.delegate(this, this.inlineTrigger, size, image);
                if (size.cached) {
                    size.onCached();
                }
            }
        }
    }
    this.checkReady();
}
ImageController.prototype.imagePreloaded = function(imageDetails, size, preloadDetails) {

    if (!preloadDetails) {
        //Igloo.log("failed / been cancelled, ignore")
        return false;
    }



    var src = preloadDetails.src;

    if (size.cached) return false;

    if (preloadDetails.status == "loaded") {
        size.cached = true; //What about on error?
        size.preload = preloadDetails;
        size.width = preloadDetails.width;
        size.height = preloadDetails.height;
        size.ratio = preloadDetails.width / preloadDetails.height;
        if (size.onCached) size.onCached();
    } else {
        size.cached = true;
        size.loaded = true;
        imageDetails.loaded = true; //TODO
    }


}
ImageController.prototype.inlineTrigger = function(sizeDetails, imageDetails) {

    //Might need to ensure this isn't run twice

    var src = sizeDetails.src;
    var $img = sizeDetails.$img;
    Preloader2.addInlineTrigger(sizeDetails.$img, Igloo.delegate(this, function(details) {

        if ($img.hasClass("img-default")) $img.animate({
            opacity: 1
        }, {
            duration: 500
        });

        imageDetails.$element.attr("style", "");
        imageDetails.$element.removeClass("img-replace-loading");
        imageDetails.$loader.css("opacity", 0);
        sizeDetails.loaded = true;
        imageDetails.loaded = true;
        if (sizeDetails.onLoaded) sizeDetails.onLoaded();
        this.resizeImage(imageDetails);
        this.checkReady(); //This might want to wait

    }));
    sizeDetails.$img.attr("src", sizeDetails.src).attr("width", sizeDetails.width).attr("height", sizeDetails.height);


}
ImageController.prototype.checkReady = function() {
    if (this.ready) return true;
    var ready = true;
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];
        if (image.required && !image.loaded) return false;
    }
    //Otherwise
    this.ready = true;
    this.fire("ready");

    return true;

}
ImageController.prototype.resize = function() {
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];
        this.resizeImage(image);

    }
}
ImageController.prototype.resizeInstant = function() {
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];
        this.resizeImage(image, false);

    }
}
ImageController.prototype.resizeImage = function(image, checkForVersions) {

    //We have to work out how big the image is supposed to be
    if (!image.loaded) return;

    this.fire("refresh");

    var $centreElement = image.centreElement == "div" ? image.$element : image.sizes[image.sizes.length - 1].$img;

    if (image.type == "img") {
        image.$element.css("width", "").css("height", "");
        for (var i = 0, ii = image.sizes.length; i < ii; i++) {
            var size = image.sizes[i];
            if (size.$img && size.$img.attr("src")) {
                var x = 0;
                var y = 0;
                var w = size.$img.width();
                var h = size.$img.height();
                var cw = w;
                var ch = h;
                //Igloo.log(cw,ch)
            }
        }
        image.$element.width(cw).height(ch);
    } else {
        //This should work for backgrounds
        for (var i = 0, ii = image.sizes.length; i < ii; i++) {
            var size = image.sizes[i];
            if (size.$img) size.$img.hide();
        }

        image.$element.css("width", "").css("height", "");

        var wv = image.$wrapper.css("display") !== "none";
        var style = image.$wrapper.attr("style");
        var inStyle = style ? style.indexOf("none") > 0 : false;

        if (!wv) image.$wrapper.css("display", "block");

        var cw = image.$element.width();
        var ch = image.$element.height();

        if (!wv) image.$wrapper.css("display", inStyle ? "none" : "");

        var x, y, w, h;
        for (var i = 0; i < ii; i++) {
            var size = image.sizes[i];
            if (cw / ch > size.ratio) {
                w = cw;
                h = w / size.ratio;
            } else {
                h = ch;
                w = h * size.ratio;
            }

            if (image.centreElement == "img") {
                x = (cw - w) * image.centre[0] / 100;
                y = (ch - h) * image.centre[1] / 100;
            } else {
                x = (cw - w) / 2;
                y = (ch - h) / 2;
            }

            //Note that we're not using any of the pos-br stuff currently...
            var positioning = "centre";
            if (Igloo.isIn(image.classes, "if-full-bottom") !== false) {
                if (cw == jstage.getWidth()) {
                    positioning = "bottom";
                }
            }
            if (positioning == "bottom") {
                y = (ch - h);
            }



            if (size.$img) size.$img.width(Math.round(w)).height(Math.round(h)).css("left", Math.round(x)).css("top", Math.round(y)).show();
        }
        image.$element.width(cw).height(ch);
    }

    image.containerWidth = cw;
    image.containerHeight = ch;
    image.imgWidth = w;
    image.imgHeight = h;
    image.imgX = x;
    image.imgY = y;

    //var $centreElement = image.centreElement == "div" ? image.$element : image.sizes[image.sizes.length-1].$img;

    if (image.centre && image.centreElement == "div") {
        var bw = image.$wrapper.width();
        var bh = image.$wrapper.height();
        var ww = image.$element.width();
        var hh = image.$element.height();

        image.$element.css("left", -(ww - bw) * image.centre[0] / 100);
        image.$element.css("top", -(hh - bh) * image.centre[1] / 100);
    }

    this.fire("refresh");

    if (checkForVersions !== false) {
        this.checkForBetterImage(image, {
            instant: false
        }); //image.count == 1
    }

    this.fire("refresh");
}
ImageController.prototype.checkForBetterImage = function(image, options) {

    if (this.status !== "active") return false;
    if (image.ext == "svg") return false;

    if (!options) options = {};

    var version = this.getBestVersion(image.folder, image.containerWidth, image.containerHeight)

    if (image.sizes[image.sizes.length - 1].size !== version) {
        this.swapImage(image, version, {
            instant: options.instant
        });
    };

}
ImageController.prototype.swapImage = function(image, version, options) {
    if (!options) options = {};

    var c = "size_" + (image.count++);
    var $img = image.$element.append("<img class='" + c + " " + image.img_class + "' />").find("img." + c);

    $img.css("opacity", 0);

    var size = {
        src: this.translateSrc(image.original, version),
        size: version,
        loaded: false,
        cached: false,
        $img: $img
    };
    $img.attr("data-requested", size.src);
    image.$element.attr("data-requested", size.src);
    size.onCached = Igloo.delegate(this, this.inlineTrigger, size, image)
    size.onLoaded = Igloo.delegate(this, function() {

        if (this.status !== "active") {
            Igloo.log("interupted the image onLoad... need to do something else")
            return false;
        }

        $img.animate({
            opacity: 1
        }, {
            duration: options.instant ? 0 : 1000,
            complete: Igloo.delegate(this, function() {
                var sizeIndex = image.sizes.length;
                for (var i = 0; i < sizeIndex - 1; i++) {
                    var s = image.sizes[0];
                    s.$img.remove();
                    image.sizes.splice(0, 1);
                }
                this.fire("shown");
            })
        });

        this.fire("new");

    })
    image.sizes.push(size);
    image.size = version;

    var pt = Igloo.delegate(this, this.imagePreloaded, image, size);
    Preloader2.add({
        src: size.src,
        priority: 3,
        tag: "page"
    }).then(pt, pt);


}
ImageController.prototype.translateSrc = function(src, final) {


    var regex = new RegExp(this.base.replace(/\//g, '\\/') + "(.*?)\/(.*?)\/");

    var match;
    if (match = regex.exec(src)) {
        src = src.substr(0, match.index) + this.base + match[1] + "/" + final + "/" + src.substr(match.index + match[0].length);
        return src;
    }

    return false;


}
ImageController.prototype.getFolderFromUri = function(str) {
    if (!str) return false;
    var regex = new RegExp(this.base.replace(/\//g, '\\/') + "(.*?)\/");
    var folder = regex.exec(str);
    return folder && folder.length ? folder[1] : false;
}
ImageController.prototype.getExtFromUri = function(str) {
    if (!str) return false;
    var parts = str.split("?");
    return parts[0].substr(parts[0].length - 3);
}
ImageController.prototype.extractClassesFromString = function(classes_str) {

    var class_regex = new RegExp("class=[\"\']+(.*?)[\"\']+");
    var match;
    if (match = class_regex.exec(classes_str)) {
        var classes = match[1].split(" ");
        for (var i = 0; i < classes.length; i++) {
            classes[i] = Text.trim(classes[i]);
        }
        var extracted = classes_str.substr(0, match.index) + classes_str.substr(match.index + match[0].length);
        return {
            extracted: extracted,
            classes: classes,
            found: true
        };
    } else {
        return {
            extracted: classes_str,
            classes: [],
            found: false
        }
    }
}
ImageController.prototype.getRatioFromString = function(str) {
    var ratio_str = this.getAttrFromString("data-ratio", str);
    return ratio_str ? ratio_str : false;
}
ImageController.prototype.getCentreFromString = function(str) {

    var centre_str = this.getAttrFromString("data-centre", str);
    var centre_parts = centre_str.split(",");
    if (centre_parts.length == 2) {
        return [centre_parts[0] * 1, centre_parts[1] * 1];
    } else {
        return [50, 50];
    }

}
ImageController.prototype.getAttrFromString = function(attr, str) {

    var regex = new RegExp(attr + "=[\"\']+(.*?)[\"\']+");
    var match;

    if (match = regex.exec(str)) {
        return match[1]
    } else {
        return "";
    }
}
ImageController.prototype.getBestVersion = function(folder, width, height) {

    var versions = this.versions[folder];

    //This needs a check to see if there are portraits, otherwise use landscapes and vice versa

    if (!width) width = jstage.getWidth() * (folder == "two-up" ? 0.2 : 1);
    if (!height) height = jstage.getHeight() * (folder == "two-up" ? 0.2 : 1);

    //width = width * (window['devicePixelRatio']?window['devicePixelRatio']:1);
    //height = height * (window['devicePixelRatio']?window['devicePixelRatio']:1);

    //Igloo.log(width + " x " + height)

    var hasLandscape = false;
    var hasPortrait = false;
    for (var i in versions) {
        var size = versions[i];
        if ("w" in size) hasLandscape = true;
        if ("p" in size) hasPortrait = true;
    }

    var type;
    if (!hasLandscape) type = "portrait";
    else if (!hasPortrait) type = "landscape";
    else type = jstage.getWidth() > jstage.getHeight() ? "landscape" : "portrait";

    var best = false;
    for (var i in versions) {
        var size = versions[i];

        if (type == "landscape" && "w" in size && (size.w > best.w || !best.w)) {
            if (!best.w) best = size;
            else if (best.w <= width) best = size; //This makes sure it's bigger than the screen
        } else if (type == "portrait" && "h" in size && (size.h > best.h || !best.h)) {
            if (!best.h) best = size;
            else if (best.h <= height) best = size; //This makes sure it's bigger than the screen
        }

    }
    return best.p ? best.p : best.w;

}
ImageController.prototype.getImage = function($element) {
    var c = $element.attr("class");
    var regex = /img\-replace\-(\d+)/;
    var result = c.match(regex);
    return Igloo.searchArray(this.images, "index", result[1] * 1);
}
ImageController.prototype.getExpectedSrc = function(original) {
    var ext = this.getExtFromUri(original);
    if (ext == "svg") return original;
    var folder = this.getFolderFromUri(original);
    var size = this.getBestVersion(folder);
    var expected = this.translateSrc(original, size);
    return expected;
}
ImageController.prototype.destroy = function() {
    for (var i = 0, ii = this.images.length; i < ii; i++) {
        var image = this.images[i];

    }
    jstage.removeListener("resize", this.resizeDelegate);
    jstage.removeListener("resizeInstant", this.resizeInstantDelegate);
};

//Jquery pause and resume
//(function(){var e=jQuery,f="jQuery.pause",d=1,b=e.fn.animate,a={};function c(){return new Date().getTime()}e.fn.animate=function(k,h,j,i){var g=e.speed(h,j,i);g.complete=g.old;return this.each(function(){if(!this[f]){this[f]=d++}var l=e.extend({},g);b.apply(e(this),[k,e.extend({},l)]);a[this[f]]={run:true,prop:k,opt:l,start:c(),done:0}})};e.fn.pause=function(){return this.each(function(){if(!this[f]){this[f]=d++}var g=a[this[f]];if(g&&g.run){g.done+=c()-g.start;if(g.done>g.opt.duration){delete a[this[f]]}else{e(this).stop();g.run=false}}})};e.fn.resume=function(){return this.each(function(){if(!this[f]){this[f]=d++}var g=a[this[f]];if(g&&!g.run){g.opt.duration-=g.done;g.done=0;g.run=true;g.start=c();b.apply(e(this),[g.prop,e.extend({},g.opt)])}})}})();

function ImageTestController() {
    this.className = "ImageTestController";
    this.debug = false;

    this.glob = ["/image/"];
    this.globCache = this.glob;
    this.globMain = true;

    this.mainPriority = 1000;
    this.priority = 1; //Low priority

    this.zindex = 2;

    this.level = 1;


};
ImageTestController.inheritsFrom(StandardController);
ImageTestController.prototype.on = function() {

    var $holder = $(".mb4");
    var $images = $holder.find(".images");
    var $cancels = $holder.find(".cancels");

    var $links = $images.find("a");
    var $clinks = $cancels.find("a");

    var images = [
        "/assets/images/landscape/700/77-mayfair-banner.jpg",
        "/assets/images/landscape/1600/77-mayfair-banner.jpg",
        "/assets/images/landscape/3200/77-mayfair-banner.jpg",
        "/assets/images/landscape/3200/77-mayfair-banner.jpg",
        "/assets/images/landscape/3200/77-mayfair-banner.jpg",
        "/assets/images/landscape/700/chelseath-banner.jpg",
        "/assets/images/landscape/1600/chelseath-banner.jpg",
        "/assets/images/landscape/3200/chelseath-banner.jpg",
        "/assets/images/landscape/700/kitchen-island-banner.jpg",
        "/assets/images/landscape/1600/kitchen-island-banner.jpg",
        "/assets/images/landscape/3200/kitchen-island-banner.jpg"
    ];
    for (var i in images) {
        images[i] = images[i] + "?d=" + (new Date());
    }

    $links.each(function(i) {
        $(this).attr("index", i);
        $(this).attr("src", images[i])
    });
    $clinks.each(function(i) {
        $(this).attr("index", i);
        $(this).attr("src", images[i])
    });



    $links.on("click", Igloo.$delegate(this, function($this, e) {
        e.preventDefault();
        var index = $this.attr("index");
        var src = $this.attr("src");
        var p = $this.attr("p");
        var t = $this.attr("t");
        var x = Preloader2.add({
            src: src,
            priority: p,
            top: !!t
        }).then(function(e) {
            //Igloo.log("Preload of " + index + " complete");
            //Igloo.log(e);
        }, function(e) {
            //			Igloo.log("failed")
        });
        var id = Preloader2.getLastId();


    }));


    $clinks.on("click", Igloo.$delegate(this, function($this, e) {
        e.preventDefault();
        var index = $this.attr("index");
        var src = $this.attr("src");
        Preloader2.cancel(index * 1);
    }));
    return true;
}


function AnotherController() {
    this.className = "AnotherController";
    this.glob = "/**";
    this.globMain = "/**";
    this.mainPriority = 10;
    this.refreshPriority = 1000;
    this.priority = 1000; //Low priority
};
AnotherController.inheritsFrom(StandardController);
AnotherController.prototype.swapMain = function(onComplete) {


    if (!this.resizeDelegate) {
        this.resizeDelegate = Igloo.delegate(this, this.resize);
        jstage.addListener("resize", this.resizeDelegate);
    }

    var cache = jcache.getCache(nav.getState().nextUrl);
    var html = cache.get(".body ");
    var imageController = new ImageController();

    html = imageController.process(html);

    $(".body").html(
        html
    );
    $(window).scrollTop(0);

    imageController.addListener("ready", function() {
        $("body").css("visibility", "visible");
        onComplete();
    });
    imageController.identifyElements($(".body"));
    this.imageController = imageController;

    this.$scrollDownGeneral = $(".section-hint.scroll-down");
    this.$scrollDownGeneral.css("opacity", 0);

    return false;
}
AnotherController.prototype.getImage = function($element) {
    return this.imageController.getImage($element);
}
AnotherController.prototype.onMain = function(onComplete) {
    if (!this.setup) {
        this.setup = true;
        Aviator.get("jstage").addListener("scroll", Igloo.delegate(this, function() {
            if (this.scrolldownMessageTimeout) {
                clearTimeout(this.scrolldownMessageTimeout);
                this.scrolldownMessageTimeout = false;
                if (typeof(ga) !== "undefined") ga('send', 'event', 'scrollpage', 'scroll');
            }
            if (this.scrollDownGeneralVisible) {
                this.$scrollDownGeneral.stop().animate({
                    opacity: 0
                }, {
                    duration: 2500
                });
                this.scrollDownGeneralVisible = false;
            }
        }))
    }

    //General stuff
    if (this.$scrollDownGeneral.size()) {
        this.scrolldownMessageTimeout = setTimeout(Igloo.delegate(this, function() {
            this.$scrollDownGeneral.animate({
                opacity: 1
            }, {
                duration: 1000
            });
            this.scrollDownGeneralVisible = true;
        }), 2000);
        if (typeof(ga) !== "undefined") ga('send', 'event', 'scrollpage', 'register');
    }

    var state = nav.getState();
    Aviator.get("menuController").uncover(onComplete, state.isRefresh);

    return false;

};
AnotherController.prototype.offMain = function(onComplete) {

    var state = nav.getState();

    Aviator.get("menuController").cover(function() {

        $(".page-header").attr("class", "page-header");
        onComplete();
    }, state.isRefresh);

    jstage.removeListener("resize", this.resizeDelegate);

    this.imageController.destroy();
    Preloader2.cancelTag("page");
    if (this.scrolldownMessageTimeout) clearTimeout(this.scrolldownMessageTimeout);

    return false;
};

AnotherController.prototype.resize = function() {
    //   this.resizeImages();
};


function PortfolioController() {
    this.className = "PortfolioController";
    this.glob = ["/interior/", "/interior/*/"];
    this.globCache = this.glob;
    this.globMain = true;

    this.isMobile = false;

    this.view;
};
PortfolioController.inheritsFrom(StandardController);
PortfolioController.prototype.swap = function(onComplete) {

    var state = nav.getState();
    var is_mobile = this.isMobile;


    this.setup();

    this.view = "index";
    if (state.nextParts[1]) {
        var item = this.getItemByName(state.nextParts[1]);
        if (item) this.view = "item";
        this.item = item;
    }

    var wait = false;
    var instant = false;
    if (this.view == "item") {
        var state = nav.getState();
        instant = (state.isRefresh || state.changes[0] || (state.changes.length > 2 && state.changes[2])) || is_mobile;
        if (instant) {
            $(".body").css("visibility", "hidden");
            this.animateToItem(this.item, function() {}, true); //onComplete, instant
            wait = false;
        }
    } else {
        if (is_mobile && this.item) {
            this.animateToIndex(function() {}, true);
        }
    }


    if (is_mobile) {
        Aviator.get("menuController").uncover(onComplete, instant); //
        $(".body").css("visibility", "");
        wait = true;
    }

    this.resize();
    return !wait;

}
PortfolioController.prototype.on = function(onComplete) {

    var is_mobile = this.isMobile;

    if (this.view == "item") {
        var state = nav.getState();
        var instant = (state.isRefresh || state.changes[0] || (state.changes.length > 2 && state.changes[2])) || is_mobile;

        if (instant) {
            $(".body").css("visibility", "");
            onComplete();
        } else {
            this.animateToItem(this.item, onComplete); //We've already done it if it was instant...
        }
    } else {

        if (this.item) {
            if (is_mobile) onComplete();
            else this.animateToIndex(onComplete);
        } else {
            onComplete();
        }
    }

    this.resize();
    return false;

}
PortfolioController.prototype.setup = function() {
    if (this.isSetup) return;
    this.isSetup = true;


    this.imageController = new ImageController({
        requireAll: true
    });

    this.masterImageController = Aviator.get("anotherController").imageController;

    this.newImageEvent = this.masterImageController.addListener("new", Igloo.delegate(this, function(e) {
        this.repositionImages();
    }));



    var $options = $(".portfolio-option-wrapper");
    this.$list = $(".portfolio-option-list");

    var items = [];

    $options.each(Igloo.$delegate(this, function($this, i) {
        var item = {};

        item.index = i;
        item.selected = false;
        item.over = false;


        item.$wrapper = $this;
        item.$option = $this.find(".portfolio-option");
        item.$backgroundWrapper = $this.find(".portfolio-background-container");
        item.$iconWrapper = $this.find(".portfolio-icon-wrapper");
        item.$background = item.$backgroundWrapper.find(".portfolio-background");
        item.$overlay = item.$backgroundWrapper.find(".portfolio-overlay");
        item.$backText = item.$option.find(".back");

        item.$triggers = item.$option; //item.$triggers.css("opacity",0.5);;

        item.imageDetails = Aviator.get("anotherController").getImage(item.$background);


        item.overlayAC = new AcceleratePositionToggle({
            x: 0,
            a: 10,
            onChange: Igloo.delegate(item, function(x) {
                this.$overlay.css("opacity", 0.3 + x * 0.45);
                //this.$option.css("opacity",0.5+(1-x)*0.5);
                if (!Igloo.isiOS()) this.$background.css({
                    "-webkit-filter": "grayscale(" + x * 100 + "%)",
                    "filter": "grayscale(" + x * 100 + "%)"
                });
            })
        })

        item.link = item.$option.find("a").attr("href");
        var parts = item.link.split("/")
        item.name = parts[2];


        items.push(item);
    }));

    this.items = items;

    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];

        //nav.addToLinks(item.$wrapper.find("a"));


        var c = Igloo.delegate(this, function(item, e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.view !== "index") return;
            nav.change(item.link);
        }, item);


        item.mouseenter = Igloo.delegate(this, function(item) {
            if (this.isMobile) return false;
            item.over = true;
            item.$wrapper.find(".portfolio-icon-wrapper").addClass("portfolio-icon-wrapper-hover");
            if (this.view !== "index") return;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] !== item) {
                    this.items[i].overlayAC.on();
                } else {
                    this.items[i].overlayAC.off();
                }
            }
        }, item);
        item.$triggers.on("mouseenter", item.mouseenter);
        item.showAll = Igloo.delegate(this, function(item) {
            item.over = false;
            item.$wrapper.find(".portfolio-icon-wrapper").removeClass("portfolio-icon-wrapper-hover");
            if (this.view !== "index") return;
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].overlayAC.off();
            }
        }, item);
        item.$triggers.on("mouseleave", item.showAll);
        item.$triggers.on("click", c);

        item.$backText.on("click", function(e) {
            e.preventDefault();
            nav.change($(this).attr("href"))
        })

        item.$wrapper.find(".is-link a").off("click").parent().off("click").parent().off("click");


        /*
                    if (!$(this).parents().hasClass("portfolio-option-expanded")){
                        var index = $(this).parent().index();

                        // the .stop() method is needed to cancel any currently running animations.
                        // It basically makes it run much smoother

                        $(".portfolio-background-container").children(".portfolio-overlay").each(function(i){
                            if (i != index){
                                $(this).stop().animate({
                                    "opacity": 0.7
                                });
                            }
                        });
                    }
                }, function(){
                    if (!$(this).parents().hasClass("portfolio-option-expanded")){
                        var index = $(this).index();
                        $(".portfolio-background-container").children(".portfolio-overlay").stop().animate({
                            "opacity": 0.3
                        })
                    }
                });
                */
        if (item.imageDetails.centre) {

            var cw = item.$backgroundWrapper.width();
            var ch = item.$backgroundWrapper.height();
            var w = item.$background.width();
            var h = item.$background.height();
            item.$background.css("left", -(w - cw) * item.imageDetails.centre[0] / 100);
            item.$background.css("top", -(h - ch) * item.imageDetails.centre[1] / 100);
        }

    }



    this.resizeDelegate = jstage.addListener("resize", Igloo.delegate(this, function() {
        this.resize();
    }));
    this.resizeInstantDelegate = jstage.addListener("resizeInstant", Igloo.delegate(this, function() {
        this.resizeInstant();
    }));
    this.resize();

}

PortfolioController.prototype.getItemByName = function(name) {
    var item = Igloo.searchArray(this.items, "name", name);
    return item;
}

PortfolioController.prototype.animateToItem = function(item, onComplete, instant) {
    var _this = this;

    this.item = item;

    //var index = item.index;

    item.$backgroundWrapper.css("z-index", 3).css("position", "fixed"); // TODO Check this position: fixed is ok!
    item.$option.css("z-index", 4);
    item.$iconWrapper.css("z-index", 5).addClass("portfolio-icon-wrapper-plus");

    item.$wrapper.addClass("selected");

    item.$triggers.css("cursor", "default");
    // this.item.$backgroundWrapper.css("cursor","default");
    //this.item.$wrapper.find("a").css("cursor","default");

    var ease = "easeInOutCubic";

    var t = instant ? 0 : 1500;

    // This code moves the text to the left hand side of the page
    if (instant) {
        item.$option.css({
            "left": 0
        });
        /*
        item.$iconWrapper.css({
        	"left": 0//,
        	//"pointer-events": "auto"
        })*/
    } else {
        if (Igloo.isiOS()) item.$option.css("left", item.$option.offset().left);
        item.$option.animate({
            "left": "0px"
        }, {
            duration: t,
            easing: ease,
            complete: function() {
                //item.$option.css("left","")
                item.$iconWrapper.addClass("portfolio-icon-wrapper-cross")
            }
        });
        //item.$iconWrapper.css("pointer-events", "auto");
        /*if(Igloo.isiOS()) item.$iconWrapper.css("left",item.$iconWrapper.offset().left);
        item.$iconWrapper.animate({
        	"left": "0px"
        }, {duration:t,easing:ease, complete: function(){
        	item.$iconWrapper.addClass("portfolio-icon-wrapper-cross")
        	//item.$iconWrapper.css("left","")
        }});
        */
    }
    item.$iconWrapper.addClass("portfolio-icon-wrapper-cross").off("click touchstart").on("click touchstart", Igloo.$delegate(this, function($this, e) {
        e.preventDefault();
        item.mouseenter();
        //$this.addClass("portfolio-icon-wrapper-hover");
        nav.change("/" + nav.getState().nextParts[0] + "/");
    }));


    // This code makes the background image full screen
    // $(".portfolio-background-container").eq(index)
    var c = function() {

        item.$background.css("position", "fixed");
        item.$overlay.css("position", "fixed");
        //item.$backgroundWrapper.css("left","");
        onComplete(); //This is before they're all visible, but I think that's fine
    };
    if (instant) {
        item.$backgroundWrapper.css({
            "width": "100%",
            "left": 0
        });
        c();
        item.$background.css({
            "left": 0
        });
    } else {
        if (Igloo.isiOS()) item.$backgroundWrapper.css("left", item.$backgroundWrapper.offset().left);
        item.$backgroundWrapper.animate({
            "width": "100%",
            "left": 0
        }, {
            duration: t,
            easing: ease,
            complete: c
        });
        item.$background.animate({
            "left": 0
        }, {
            duration: t,
            easing: ease
        });
    }


    this.getMeta();

    var html = "";
    this.getTemplates();



    var listTemplate = this.templates["project/list-item"].html;
    var projects = Igloo.searchArray(this.meta.categories, "name", nav.getState().nextParts[1]).projects;
    for (var i = 0; i < projects.length; i++) {
        var p = projects[i];
        html += Mustache.render(listTemplate, p);
    }
    html = this.imageController.process(html);

    this.$list.html(html).css("opacity", 1);
    this.$list.show();
    this.imageController.identifyElements(this.$list);

    var f = function() {
        if (instant) item.overlayAC.on(true);
        else item.overlayAC.on(); //t?false:true

        _this.$list.css({
            "display": "block"
        }).find(".portfolio-option-list-item").each(function(i) {
            var element = $(this);
            var g = function() {
                element.css({
                    "opacity": 1,
                    "top": 0
                });
            };
            if (instant) g();
            else setTimeout(g, (300 * (i + 1))); //really_instant ? 0 :
        }).on("click", function(e) {
            e.preventDefault();
            nav.change($(this).find("a").attr("href"));
        });
    };
    if (instant) f();
    else setTimeout(f, 300);

    item.selected = true;


    var is_mobile = this.isMobile;
    if (is_mobile) {
        $(".portfolio-index").addClass("portfolio-option-expanded");
        item.$wrapper.addClass("portfolio-option-wrapper-selected");
    }
    //	portfolio-option-expanded

    // .addClass("portfolio-background-container-selected");
    //$(".portfolio-option-wrapper").addClass("portfolio-option-wrapper-selected");
    //
}
PortfolioController.prototype.animateToIndex = function(onComplete, instant) {


    var t = 1500;
    var ease = "easeInOutCubic";
    var item = this.item;
    var $option = item.$option;


    item.showAll();

    item.$triggers.css("cursor", "pointer");
    this.item = item;

    $(".portfolio-index").removeClass("portfolio-option-expanded");
    item.$wrapper.removeClass("portfolio-option-wrapper-selected");
    item.$wrapper.removeClass("selected");


    if (!instant) $(window).scrollTop(0);

    item.$backgroundWrapper.css("position", "");


    var c = function() {
        this.$list.css({
            "display": "",
            "opacity": ""
        });

        this.$list.find(".portfolio-option-list-item").each(function(i) {
            $(this).css({
                "opacity": "",
                "top": ""
            });
        });

    };
    if (instant) {
        this.$list.css({
            opacity: 0
        });
        c.apply(this);
    } else {
        this.$list.animate({
            opacity: 0
        }, {
            duration: 500,
            complete: Igloo.delegate(this, c)
        });
    }



    item.$background.css("position", "");
    item.$overlay.css("position", "");

    //if(Igloo.isiOS()) item.$backgroundWrapper.css("left",item.$backgroundWrapper);

    var left_current = item.$backgroundWrapper.offset().left;
    var width_current = item.$backgroundWrapper.css("width");
    var left_auto = item.$backgroundWrapper.css("left", "").offset().left;
    var width_auto = item.$backgroundWrapper.css("width", "").css("width");

    item.$backgroundWrapper.css("left", left_current);
    item.$backgroundWrapper.css("width", width_current);

    item.$iconWrapper.removeClass("portfolio-icon-wrapper-plus").removeClass("portfolio-icon-wrapper-cross");

    var c = function() {

        item.$backgroundWrapper.css({
            "width": "",
            "left": ""
        });

        item.$backgroundWrapper.css("z-index", "");
        item.$option.css("z-index", "");
        item.$iconWrapper.css("z-index", "");

        onComplete();

    };
    if (instant) {
        item.$backgroundWrapper.css({
            "width": width_auto,
            "left": left_auto
        });
        c();
    } else {
        item.$backgroundWrapper.animate({
            "width": width_auto,
            "left": left_auto
        }, {
            duration: t,
            easing: ease,
            complete: c
        });
    }


    var cw = item.$backgroundWrapper.width();
    var ch = item.$backgroundWrapper.height();
    var w = item.$background.width();
    var h = item.$background.height();


    var options = {
        left: -(w - Text.to_number(width_auto)) * item.imageDetails.centre[0] / 100,
        top: -(h - ch) * item.imageDetails.centre[1] / 100
    };
    if (instant) {
        item.$background.css(options);
    } else {
        item.$background.animate(options, {
            duration: t,
            easing: ease
        });
    }

    var left_current = item.$option.offset().left;
    var left_auto = item.$option.css("left", "").offset().left;

    if (!left_auto) left_auto = 0;
    item.$option.css("left", left_current);
    var options = {
        "left": left_auto
    };
    var c = function() {
        item.$option.css({
            left: ""
        });
    }
    if (instant) {
        c();
        //item.$option.css(options);
        //item.$iconWrapper.css(options);
    } else {
        item.$option.animate(options, {
            duration: t,
            easing: ease,
            complete: c
        });
        //item.$iconWrapper.animate(options, {duration:t, easing:ease} );
    }


    if (instant) {
        item.overlayAC.off(true);
    } else {
        item.overlayAC.off();
    }

    this.item = false;
}
PortfolioController.prototype.resizeInstant = function(onComplete) {

    var previousIsMobile = this.isMobile;
    var newIsMobile = this.items[0].$option.css("position") !== "fixed";

    if (newIsMobile !== previousIsMobile) {
        nav.refresh();
        return;
    }
}
PortfolioController.prototype.resize = function(onComplete) {

    var previousIsMobile = this.isMobile;

    this.isMobile = this.items[0].$option.css("position") !== "fixed";
    var isMobile = this.isMobile;

    if (isMobile !== previousIsMobile) {
        //		nav.refresh();
        //return;
    }

    var $pw = $(".portfolio-wrapper");
    var $ow = $pw.find(".portfolio-option-wrapper");
    if (isMobile && this.view == "index") {
        var h = $pw.height();
        var o = $pw.offset().top;
        $ow.css("height", "calc(33% - 5px)"); //" +((o/3)+10/2)+ "px)"
    } else {
        $ow.css("height", "");
    }


    if (isMobile && this.isMobile != isMobile) {
        //nav.refresh();
        //alert("refresh")
    }


    this.repositionImages();


}
PortfolioController.prototype.repositionImages = function() {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (this.isMobile) item.overlayAC.off();

        if (item.imageDetails.centre) {
            var cw = item.$backgroundWrapper.width();
            var ch = item.$backgroundWrapper.height();

            var w = item.$background.width();
            var h = item.$background.height();
            item.$background.css("left", -(w - cw) * item.imageDetails.centre[0] / 100);
            item.$background.css("top", -(h - ch) * item.imageDetails.centre[1] / 100);
        }
    }
}
PortfolioController.prototype.off = function(onComplete) {

    //Unsetup stuff.
    this.isSetup = false;
    jstage.removeListener("resize", this.resizeDelegate);
    jstage.removeListener("resizeInstant", this.resizeInstantDelegate);

    this.imageController.destroy();
    this.masterImageController.removeListener(this.newImageEvent);

    var c = nav.getState().changes;
    if (!c[0] && !c[1] && c[2]) {
        $("header").addClass("hide-mobile-menu");
    }

}
PortfolioController.prototype.offMain = function(onComplete) {
    //Don't do anything

    if (this.isMobile) {
        Aviator.get("menuController").cover(function() {
            $(window).scrollTop(0)
            onComplete();
        });
        return false;
    }
};

function ProjectController() {
    this.className = "ProjectController";
    this.debug = false;

    this.glob = ["/interior/*/*/**"];
    this.globCache = ["/interior/[*]/[*]/**"];
    this.globMain = true;

    this.mainPriority = 1000;
    this.priority = 1; //Low priority
    this.level = 3;

    this.desktopView = true;
    this.offscreenDescriptionOpen = false;
    this.landscapeMode = null;

    this.waitForAnimation = false;
    this.allowSkippage = true;

    this.addedSlides = [];

};

ProjectController.inheritsFrom(SlideController);

ProjectController.prototype.swap = function() {

    this.getTemplates();

    if (!this.isSetup) {

        $("header").addClass("hide-mobile-logo");

        this.imageController = new ImageController({
            requireAll: true
        });
        this.imageController.addListener("refresh", Igloo.delegate(this, this.onResizeInstant));

        Aviator.get("anotherController").imageController.addListener("refresh", Igloo.delegate(this, this.onResizeInstant));

        this.$left = $(".project-navigation-left-arrow");
        this.$right = $(".project-navigation-right-arrow");
        this.$close = $(".project-navigation-close");

        this.resizeInstantDelegate = Aviator.get("jstage").addListener("resizeInstant", Igloo.delegate(this, this.onResizeInstant));
        this.$right.on("click touch", Igloo.delegate(this, this.next));
        this.$left.on("click touch", Igloo.delegate(this, this.previous));
        this.$close.on("click touch", Igloo.delegate(this, this.close));

        var $buttons = this.$close.add(this.$left).add(this.$right);

        $buttons.css("opacity", 0.5).on("mouseover", function() {
            $(this).stop().animate({
                opacity: 1
            }, {
                duration: 500
            });
        }).on("mouseout", function() {
            $(this).stop().animate({
                opacity: 0.5
            }, {
                duration: 500
            });
        });


        $(".current-slide").css("visibility", "hidden");
        $(".page-header").addClass("hide-mobile-menu");

        this.$close.css("opacity", 0);


    }

    var r = this.__parent.swap.apply(this);

    if ($(".portfolio-item-page-outer").data("template-name") == "cover") {
        $(".project-navigation-left-arrow").css("display", "none");
    }
    return r;
}
ProjectController.prototype.on = function(onComplete) {

    this.__parent.on.apply(this, [onComplete]);
}
ProjectController.prototype.onResizeInstant = function() {
    if (this.currentSlide !== false) {
        this.sizeElements(this.slides[this.currentSlide]);
        this.preloadSlideDataFromHtml(this.slides[this.currentSlide]);
    }

}
ProjectController.prototype.renderSlide = function(slideIndex, $container, onComplete) {

    var templateData = this.slides[slideIndex];
    //templateData.slideNumber = slideIndex + 1;
    //templateData.slideCount = this.slides.length;
    var html = Mustache.render(this.templates["project/" + this.slides[slideIndex].template].html, templateData); //,{"footer":this.templates["project/project-page-footer"].html}

    //this.imageController = new ImageController();
    html = this.imageController.process(html);
    $container.html(html);
    var slide = this.slides[slideIndex];
    var onCompleteListener = this.imageController.addListener("ready", function() {
        onComplete();
    }, true);
    var clearOnComplete = Igloo.delegate(this, function() {
        this.imageController.removeListener("ready", onCompleteListener);
    });

    this.imageController.identifyElements($container);




    //this.preloadSlideInline(templateData, Igloo.delegate(this,function(){
    //Igloo.log("loaded inlien")
    //this.sizeElements(templateData);
    //}));

    return {
        clear: clearOnComplete,
        $container: $container
    };
}

ProjectController.prototype.buildSlides = function() {

    this.getMeta();
    this.slides = this.meta.project.slides;

    //The cover is generated from the main project
    this.slides.splice(0, 0, this.meta.project);
    this.slides[0].template = "cover";

    for (var i in this.slides) {
        var s = this.slides[i];
        s.name = "" + (s.name * 1);
        s.preloadIds = [];

        if (s.image) Preloader2.add({
            src: s.image,
            priority: 3,
            tag: "page"
        });
        if (s.image_1) Preloader2.add({
            src: s.image_1,
            priority: 3,
            tag: "page"
        });
        if (s.image_2) Preloader2.add({
            src: s.image_2,
            priority: 3,
            tag: "page"
        });

    }


}

ProjectController.prototype.sizeElements = function(slide) {

    var gutter = 12;




    if (slide.template === "single") {

        if (this.isLandscapeMode(slide)) {
            $('.portfolio-image-single')
                .width("auto")
                .height("100%")
        } else {
            $('.portfolio-image-single')
                .width($(window).width() - 60)
                .height("auto");
        }

        if (this.isTextOffScreen(slide)) {
            this.desktopView = false;
            slide.$slide.find(".js-project-description").css("opacity", 0); //.animate({opacity:0},300);
            this.$infoToggle.css("opacity", 1);
        } else {
            this.desktopView = true;
            this.offscreenDescriptionOpen = false;
            slide.$slide.find(".js-project-description").css("opacity", 1); //.animate({opacity:1},300);
            this.$infoToggle.css("opacity", 0);
        }

        this.updateOffscreenInfoView();

    } else if (slide.template === "square-pair") {
        var $images = $(".square-image-1, .square-image-2");

        if (this.isLandscapeMode(slide)) {
            $images.height("66.7%");
            $images.width("auto");

            var imageHeight = $(".square-image-1").height();
            $(".square-pair-wrapper")
                .css({
                    "position": "static",
                    "transform": "none"
                })
                .width(2 * imageHeight + gutter);
        } else {
            $images.width("calc(50% - 6px)");
            $images.height("auto");

            var imageWidth = ($(window).width() - 60) / 2 - gutter * 0.5; // 60 is for the left and right padding of 30px
            $(".square-pair-wrapper")
                .css({
                    "position": "relative",
                    "top": "50%",
                    "transform": "translateY(-50%)"
                })
                .width($(window).width() - 60)
                .height(1.5 * imageWidth);
        }
    } else if (slide.template === "uneven-pair") {
        if (this.isLandscapeMode(slide)) {
            $(".uneven-pair-wrapper")
                .width($(".uneven-image-1").width() * 2 + 12)
                .css({
                    "position": "static",
                    "transform": "none"
                });
            $(".uneven-image-1").height("100%").width("auto");
            $(".uneven-image-2").height($(".uneven-image-1").height() / 2);
            $(".uneven-image-2").width($(".uneven-image-1").width());

        } else {
            $(".uneven-image-1, .uneven-image-2").width("calc(50% - 6px)").height("auto");
            $(".uneven-pair-wrapper")
                .width($(window).width() - 60)
                .height($(".uneven-image-1").height())
                .css({
                    "position": "relative",
                    "top": "50%",
                    "transform": "translateY(-50%)"
                });

        }
    } else if (slide.template === "quote") {
        /*if (this.isLandscapeMode(slide)){
        	$(".uneven-image-1").css("display", "block");
        	$(".quote-description").width($(".uneven-image-1").width() * 0.8)
        		.css("left", "calc(50% + 6px)");
        	$(".portfolio-item-page")//.width("auto");
        		.css("width", "auto");
        } else {
        	/*$(".uneven-image-1").css("display", "none");
        	$(".quote-description")//.width("70%")
        		.css({
        			"left": "15%",
        			"width": "70%"
        		});
        	$(".portfolio-item-page")//.width("70%");
        		.css({
        			"width": "100%"
        		});
        }*/
        // $(".uneven-pair-wrapper").width($(".uneven-image-1").width() * 2 + gutter);
    } else if (slide.template === "single-landscape") {
        if (this.isLandscapeMode(slide)) {
            $('.portfolio-image-single-landscape')
                .width("auto")
                .height("70%")

            // do this to force .portfolio-item-page-inner to rerender so it adjusts size correctly
            $(".portfolio-item-page-inner").hide().show(0);

            slide.$slide.find('.js-project-description').css({
                "left": "auto",
                "right": 0
            });

            //Text
            var $tx = slide.$slide.find(".portfolio-item-description");
            var $img = $tx.prev();
            $tx.css({
                bottom: "auto",
                top: $img.offset().top + $img.height() + 30,
                width: ""
            });
            if ($tx.height() > 70) {
                $tx.width(300)
            }




        } else {
            $('.portfolio-image-single-landscape')
                .width($(window).width() - 60)
                .height("auto");

            slide.$slide.find('.js-project-description').css({
                "left": "auto",
                "right": 0
            });
        }
    }

    if (slide.template != "single") {

        var checkOffScreen = slide.template == "single-landscape";
        var isOffScreen = checkOffScreen ? this.isTextOffScreen(slide) : false;

        if (this.isTextOverlapping(slide) || isOffScreen) {
            this.desktopView = false;
            // slide.$slide.find(".js-project-description").fadeOut();
            slide.$slide.find(".js-project-description").css("opacity", 0);
            // slide.$slide.find(".js-project-description").animate({"opacity": 0});
            this.$infoToggle.css("opacity", 1);
        } else {
            this.desktopView = true;
            this.offscreenDescriptionOpen = false;
            // slide.$slide.find(".js-project-description").fadeIn();
            slide.$slide.find(".js-project-description").css("opacity", 1);
            // slide.$slide.find(".js-project-description").animate({"opacity": 1});
            this.$infoToggle.css("opacity", 0);
        }

        this.updateOffscreenInfoView();
    }

    if ((slide.template !== "cover" && slide.template !== "quote") && $(window).width() < 1000) {

        if (this.hasCaptions) {
            this.desktopView = false;
            slide.$slide.find(".js-project-description").css("opacity", 0); //.animate({opacity:0},300);
            this.$infoToggle.css("opacity", 1);
        } else {
            this.$infoToggle.css("opacity", 0);
        }



        this.updateOffscreenInfoView();
    }
}

ProjectController.prototype.isTextOverlapping = function(slide) {
    if (slide.template === "square-pair") {
        if (($(".js-project-description").height() + 12) / $(".square-image-1").height() >= 0.5) {
            return true;
        } else {
            return false;
        }
    } else if (slide.template === "single-landscape") {
        /*var image = slide.$slide.find(".portfolio-image-single-landscape");
        if (image.height() + image.offset().top + 12 > slide.$slide.find(".js-project-description").offset().top){
        	return true;
        } else {
        	return false;
        }*/
        return false;
        //var $tx = slide.$slide.find(".portfolio-item-description");
        //if($tx.offset().top + $tx.height() > )
    } else if (slide.template === "uneven-pair") {
        if (($(".uneven-pair-description").height() + 12) / $(".uneven-image-1").height() >= 0.25) {
            return true;
        } else {
            return false;
        }
    }
}
ProjectController.prototype.close = function(e) {
    e.preventDefault();
    nav.change(nav.sectionUrl(1));
}

ProjectController.prototype.isTextOffScreen = function(slide) {
    var $descriptionBox = slide.$slide.find(".js-project-description");

    // If there is no copy in the box, return false
    if ($.trim($descriptionBox.text()) == "") {
        return false;
    }

    if (slide.template === "single-landscape") {
        var $tx = slide.$slide.find(".portfolio-item-description");
        if ($tx.offset().top + $tx.height() > jstage.getHeight() - 20) return true;
    }

    // 2 * 20 is the padding between the text and image, and text and edge of screen
    if (0.5 * $(window).width() - 0.5 * $(".portfolio-image-single").width() - (2 * 20) - $descriptionBox.width() < 0) {
        return true;
    } else {
        return false;
    }
}

ProjectController.prototype.updateOffscreenInfoView = function() {
    var $s = $(".offscreen-project-description");
    $s.css("visibility", "hidden").show();
    var oh = $s.height();

    $s.css("height", "");
    var h = $s.height();

    if (oh < h) oh = h - 20;
    $s.css("height", oh).css("visibility", "visible");


    if (this.offscreenDescriptionOpen === true) {
        $s.stop().animate({
            opacity: 1,
            height: h + "px"
        }, {
            duration: 500,
            easing: "easeInOutCubic"
        });
    } else {
        $s.stop().animate({
            opacity: 0,
            height: h - 20
        }, {
            duration: 500,
            easing: "easeInOutCubic"
        });
    }
}

ProjectController.prototype.isLandscapeMode = function(slide) {

    if (slide.template === "single" || slide.template === "single-landscape") {
        var screenImage = $(".portfolio-image-single, .portfolio-image-single-landscape");
        // Create new offscreen image to calculate natural size - no longer need to do this as images are provided with widths and heights
        // var theImage = new Image();
        // theImage.src = screenImage.attr("src");
        var aspectRatio = screenImage.attr("width") / screenImage.attr("height");

        // if ( ($(window).width() - 60 ) /(0.8 * $(window).height()) > theImage.width / theImage.height){
        if (($(window).width() - 60) / (0.8 * $(window).height()) > aspectRatio) {
            this.landscapeMode = true;
            return true;
        } else {
            this.landscapeMode = false;
            return false;
        }
    } else {
        if ($(window).width() / $(window).height() > 1.16) {
            this.landscapeMode = true;
            return true;
        } else {
            this.landscapeMode = false;
            return false;
        }

    }

}

ProjectController.prototype.slideBringOn = function(nextSlide) {


    var slideDetailsToAdd = {};
    slideDetailsToAdd.index = nextSlide.index;


    var lastBrungOn = false;
    for (var i = 0; i < this.addedSlides.length; i++) {
        var s = this.addedSlides[i];
        if (s.status == "bringingOn" || s.status == "complete") lastBrungOn = s.index;
    }

    for (var i = 0; i < this.addedSlides.length; i++) {
        var s = this.addedSlides[i];

        if (s.status == "rendering") {
            s.renderDetails.clear();
            s.$slide.remove();

        }
        //Cancel whatever's currently in the process of coming on.

        //this.rendering.clear();

        //this.rendering = false;
    }


    var currentSlide = this.getSlide(this.currentSlide);
    var showingSlide = this.getSlide(this.showingSlide);
    var _this = this;

    slideDetailsToAdd.nextSlide = nextSlide;
    slideDetailsToAdd.currentSlide = currentSlide;


    $footerContainer = $(".project-page-footer-container");
    $footerContainer.html(Mustache.render(this.templates["project/project-page-footer"].html, {
        slideNumber: (this.slides.length > 9 && nextSlide.index < 9 ? "0" : "") + (nextSlide.index + 1),
        slideCount: this.slides.length
    }));
    $footerContainer.find(".offscreen-project-description").html(this.getSlide(nextSlide.index).caption_1 + this.getSlide(nextSlide.index).caption_2).css({
        height: 0,
        opacity: 0
    });
    this.$infoToggle = $footerContainer.find(".info-toggle");

    this.hasCaptions = !!Text.trim(this.getSlide(nextSlide.index).caption_1 + this.getSlide(nextSlide.index).caption_2);

    this.$infoToggle.off("click touchstart").on("click touchstart", function(e) {
        e.preventDefault();

        if (_this.offscreenDescriptionOpen === true) {
            _this.offscreenDescriptionOpen = false;
        } else {
            _this.offscreenDescriptionOpen = true;
        }


        _this.updateOffscreenInfoView();

    });

    var slideComplete = Igloo.delegate(this, function() {
        if (showingSlide.$slide) showingSlide.$slide.remove();
        this.toggleArrows(nextSlide);
        this.showSlideComplete(nextSlide.index);

        //Preload next
        if (nextSlide.index < this.slides.length - 1) {
            this.slides[nextSlide.index + 1].preloadCalled = true;
            this.preloadSlide(this.slides[nextSlide.index + 1]);
        }
        //Preload prev
        if (nextSlide.index > 0 && !this.slides[nextSlide.index - 1].preloadCalled) {
            this.preloadSlide(this.slides[nextSlide.index - 1]);
        }

        this.setupSocialButtons();


    })

    slideDetailsToAdd.status = "rendering";



    if (currentSlide) {

        var $nextSlide = $("<div class='portfolio-slide-wrapper next-slide'></div>");
        $nextSlide.css("visibility", "hidden");
        nextSlide.$slide = $nextSlide;
        slideDetailsToAdd.$slide = nextSlide.$slide;

        $(".project-page").append($nextSlide);


        var renderDetails = this.renderSlide(nextSlide.index, nextSlide.$slide, Igloo.delegate(this, function() {

            this.rendering = false;

            this.sizeElements(nextSlide);
            this.slideTransitionSlide({
                nextSlide: nextSlide,
                previousSlide: currentSlide,
                slideComplete: slideComplete
            });
            this.showingSlide = nextSlide.index;
            slideDetailsToAdd.status = "bringingOn";
        }));
        this.rendering = renderDetails;
        slideDetailsToAdd.renderDetails = renderDetails;

    } else {
        nextSlide.$slide = $(".current-slide");
        slideDetailsToAdd.$slide = nextSlide.$slide;

        /*this.preloadSlideInline(nextSlide,function(){
        	Igloo.log("preloaded inlien")
        });*/

        /*		this.preloadSlide(nextSlide,Igloo.delegate(this,function(){
        			this.sizeElements(nextSlide);
        			this.slideTransitionFade({nextSlide:nextSlide,previousSlide:currentSlide,slideComplete:slideComplete});
        		}));*/

        //The images are preloaded and ready, otherwise we wouldn't be here
        this.showingSlide = nextSlide.index;
        slideDetailsToAdd.status = "bringingOn";
        this.sizeElements(nextSlide);
        this.slideTransitionFade({
            nextSlide: nextSlide,
            previousSlide: currentSlide,
            slideComplete: slideComplete
        });
    }
    //project-page-footer-container

    //Igloo.log("SHOWIGN slide, make the default and expected higher");
    for (var i in currentSlide.preloadIds) Preloader2.cancel(currentSlide.preloadIds[i]);

    this.preloadSlideDataFromHtml(nextSlide);

    this.$close.animate({
        opacity: 0.5
    }, {
        duration: 3500,
        complete: function() {
            $(this).css("opacity", "")
        }
    });
    this.addedSlides.push(slideDetailsToAdd);

    return false;
}
ProjectController.prototype.preloadSlideDataFromHtml = function(slide) {
    slide.$slide.find(".img-replace").each(Igloo.$delegate(this, function($this) {
        var d = $this.attr("data-default");
        var e = $this.attr("data-requested");
        if (d) {
            Preloader2.add({
                src: d,
                priority: 1,
                top: true,
                tag: "page"
            });
            slide.preloadIds.push(Preloader2.getLastId());
        }
        if (e) {
            Preloader2.add({
                src: e,
                priority: 1,
                tag: "page"
            });
            slide.preloadIds.push(Preloader2.getLastId());
        }
    }));
}

ProjectController.prototype.preloadSlideInline = function(slideData, onComplete) {
    var $images = slideData.$slide.find("img");

    if ($images.size()) {
        var mc = MultipleOnComplete.create(onComplete);
        $images.each(function() {
            Preloader2.addInlineTrigger($(this), mc());
        });
    } else {
        onComplete();
    }

    //mc.check();

    //_this.sizeElements(_this.slides[_this.nextSlide]);
}

ProjectController.prototype.toggleArrows = function(slideData) {

    if (slideData.index === 0) {
        this.$left.stop().fadeOut();
    } else {
        this.$left.stop().fadeIn();
    }

    if (slideData.index === this.slides.length - 1) {
        this.$right.stop().fadeOut();
    } else {
        this.$right.stop().fadeIn();
    }

}
ProjectController.prototype.preloadSlide = function(slideData, onComplete, priority) {

    if (!priority) priority = 1;

    var image = this.imageController.getExpectedSrc(slideData.image);
    var image1 = this.imageController.getExpectedSrc(slideData.image_1);
    var image2 = this.imageController.getExpectedSrc(slideData.image_2);


    if (image || image1 || image2) {
        var mc = MultipleOnComplete.create(onComplete ? onComplete : function() {})
        if (image) Preloader2.add({
            src: image,
            priority: priority,
            tag: "page"
        }).then(mc());
        if (image1) Preloader2.add({
            src: image1,
            priority: priority,
            tag: "page"
        }).then(mc());
        if (image2) Preloader2.add({
            src: image2,
            priority: priority,
            tag: "page"
        }).then(mc());
    } else {
        if (onComplete) onComplete();
    }

    //setTimeout(mc(),1000)
}
ProjectController.prototype.slideTransitionFade = function(data) {
    var t = 1500;
    data.nextSlide.$slide.css("opacity", 0).css("visibility", "visible").show().animate({
        "opacity": 1
    }, {
        duration: t,
        easing: "easeInOutCubic",
        complete: data.slideComplete
    });
}
ProjectController.prototype.slideTransitionSlide = function(data) {
    var t = 1100;
    var distance = 3;
    var easing = "easeInOutCubic";
    var direction = data.previousSlide.index < data.nextSlide.index ? "left" : "right";
    var oppositeDirection = direction === "left" ? "right" : "left";



    var animateOptions = {};
    animateOptions[direction] = "-" + distance + "%";
    //animateOptions["opacity"] = 0;

    data.previousSlide.$slide.stop().css(oppositeDirection, "auto").animate(animateOptions, {
        duration: t,
        easing: easing
    }).animate({
        opacity: 0
    }, {
        duration: t,
        easing: easing,
        queue: false
    });

    var animateOptions = {};
    animateOptions[direction] = "0%";
    animateOptions["opacity"] = 1;
    data.nextSlide.$slide.css(direction, distance + "%").css("visibility", "visible").css("opacity", 0).animate(animateOptions, {
        duration: t,
        easing: easing,
        complete: data.slideComplete
    });
}
ProjectController.prototype.off = function() {

    this.isSetup = false;
    this.addedSlides = [];
    this.showingSlide = false;
    Aviator.get("jstage").removeListener("resizeInstant", this.resizeInstantDelegate);

    this.$close.css("z-index", 1)

    this.__parent.off.apply(this);

}

ProjectController.prototype.setupSocialButtons = function() {
    var currentSlide = this.currentSlide;
    var details = this.getSlide(this.currentSlide);
    var media = details.image ? details.image : details.image_1;


    $('.social-share-icon').unbind("click").on("click", function(e) {
        e.preventDefault();
        var url = window.location;
        if ($(this).hasClass("social-share-icon-pinterest")) {
            var href = "http://pinterest.com/pin/create/button/?url=" + escape(url) + "&media=http://" + document.location.hostname + escape(media);
            var modal = window.open(href, 'signin', 'width=665,height=300,scrollbars=1,resizable=1');
        } else if ($(this).hasClass("social-share-icon-twitter")) {
            var href = "https://twitter.com/intent/tweet?url=" + escape(url);
            var modal = window.open(href, 'signin', 'width=665,height=300,scrollbars=1,resizable=1');
        }
        return false;
    });
};
/*function TextController(){
    this.className	= "TextController";
    this.glob       = ["/**"];

    this.prioity = 100;

    this.count      = 0;

	this.items = [];
};
TextController.inheritsFrom( StandardController );
TextController.prototype.swap = function(){

};
*/


function SvgText() {
    this.className = "SvgText";

    this.a = 1;
    this.status = "off";
    this.setup = false;

    this.$text;

    if (arguments.length) this.setup_internal(arguments[0], arguments.length > 1 ? arguments[1] : {});
};
SvgText.count = 0;
SvgText.index = 0;
SvgText.items = [];
SvgText.inheritsFrom(EventTarget);
SvgText.setup = function($text) { //Factory method
    return new SvgText($text);
}
SvgText.prototype.setup_internal = function($text, settings) {

    if (!$text.size()) return false;
    else if ($text.size() > 1) {
        var r = [];
        $text.each(Igloo.$delegate(this, function($this, i) {
            r.push(new SvgText($this, settings));
        }));
        return r;
    } else {
        return this.replace($text, settings);
    }
}
SvgText.prototype.replace = function($text, settings) {

    if ($text.data('svgText')) return $text.data('svgText');


    if (!settings) settings = {};

    this.$text = $text;
    this.$text.data('svgText', this);
    SvgText.count++;
    this.index = SvgText.index++;


    var animate = "animate" in settings ? settings.animate : true;
    if (settings.a) this.a = settings.a;


    this.height = $text.height();

    //$textHolder.css("opacity",0); //TOCHECK

    $text.wrapInner("<span class='text-inner' />")
    this.$span = $text.find(".text-inner");


    /*var parts = $text.html().split(/<bstopthisworkingr\/?>/);
    for(var i = 0 ; i < parts.length; i++){
    	var tmp = document.createElement("DIV");
    	tmp.innerHTML = parts[i];
    	parts[i] = (tmp.textContent || tmp.innerText || "");
    }*/
    var tmp = document.createElement("DIV");
    tmp.innerHTML = $text.html();
    this.text = Text.trim(tmp.textContent || tmp.innerText || "");

    var data = {
        id: "svg-text-" + this.index,
        text: this.text
    };

    var html = Mustache.render(Aviator.get("jcache").getCache(nav.getState().nextUrl).templates["svg-text"].html, data);
    $text.addClass("svg-text-container").append(html);

    this.$svg = $text.find(".svg-text");
    this.$symbol = $text.find("text");
    this.$stroke = this.$svg.find(".text-stroke");
    this.$fill = this.$svg.find(".text-fill");
    this.svgHeight = this.$svg.height();


    //We can do a bit more work to calc the animation lengths
    this.resize();
    this.resizeDelegate = jstage.addListener("resizeInstant", Igloo.delegate(this, this.resize));
    this.$stroke.css("stroke-dashoffset", "0px");
    this.$fill.css("fill", this.$text.css("color"));

    //Allow it to be controlled by either this or animation ideally.
    this.ac = new AcceleratePositionToggle({
        type: "accelerate",
        a: this.a,
        x: 0,
        onChange: Igloo.delegate(this, function(x) {
            this.$stroke.css("stroke-dashoffset", Math.round((1 - x) * this.fontSize * this.scale - 1) + "px");
            this.$fill.css({
                opacity: x * x * x
            });
            //this.$fill.css({opacity:x*x*x});
            //this.$stroke.attr("data-x",x)
        }),
        onComplete: Igloo.delegate(this, function(x) {
            //Igloo.log("Complete: " + x);
            //Igloo.log(this)
            //Igloo.log(this);
            if (x < 0.5) this.fire("off")
            if (x > 0.5) this.fire("on")
        })
    });

    this.reset();
    this.setup = true;

    SvgText.items.push(this);

    if (animate !== false) {
        this.on();
    }

};
SvgText.prototype.on = function(a) {
    this.status = "on";
    this.refresh(); //Todo - check this
    this.ac.on();
    return this;
}
SvgText.prototype.off = function(a) {
    this.status = "off";
    this.ac.off(true);
    return this;
}
SvgText.prototype.toggle = function() {
    if (this.status == "off") this.on();
    else this.off();
    return this;
}
SvgText.prototype.reset = function() {
    this.off(true);
    return this;
}
SvgText.prototype.refresh = function() {
    this.resize();
    return this;
}
SvgText.prototype.save = function() {
    this.saved = "test";
}
SvgText.prototype.resize = function() {

    this.fontSize = Text.to_number(this.$text.css("font-size"));
    this.fontHeight = Text.to_number(this.$text.css("line-height"));
    this.paddingLeft = Text.to_number(this.$text.css("padding-left"));
    this.paddingTop = Text.to_number(this.$text.css("padding-top"));

    var x = this.paddingLeft;
    var y = this.paddingTop;
    var dy = this.fontSize * 0.363 + this.fontHeight / 2;

    this.scale = this.getScale();

    //this.$symbol.attr("y",fontDifference/2 + this.fontSize)
    //this.$symbol.attr("y",this.fontHeight/2);
    //this.$symbol.attr("y",-this.fontSize * 0.06);

    this.$symbol.attr("x", x);
    this.$symbol.attr("y", y);
    this.$symbol.attr("dy", dy);
    //this.$stroke.attr("style","transform: translateY(" + - this.fontHeight/2 + "px);");
    //this.$stroke.attr("style","transform: translateY(" + y + "px);");
    this.$stroke.css("stroke-width", Math.floor(Math.max(1, this.fontSize / 40)));
    this.$stroke.css("stroke-dasharray", +Math.round(this.fontSize * this.scale) + "px");

    // Igloo.log(this.$svg);

    //this.$svg.height(this.svgHeight);
}
SvgText.prototype.getScale = function() {
    var aniScale = 0.8;
    var scales = {
        M: 1,
        W: 1,
        P: 0.9,
        H: 0.95
    }
    for (var c in scales) {
        if (this.text.indexOf(c) > -1) {
            aniScale = scales[c];
            break;
        }
    }
    aniScale = aniScale * 7 * (window['devicePixelRatio'] ? window['devicePixelRatio'] : 1);

    return aniScale;
}
SvgText.check = function() {
    //This doesn't do much
    //Igloo.log("Total: " + this.count);
    for (var i in SvgText.items) {
        //	Igloo.log(SvgText.items[i]);
        //	Igloo.log(SvgText.items[i].$text.size());
    }
}
SvgText.prototype.destroy = function() {
    jstage.removeListener("resize", this.resizeDelegate);
    this.ac.destroy();
    if (this.$text.size()) {
        this.$text.removeClass("svg-text-container");
        this.$span.contents().unwrap();
        this.$text.data('svgText', "");
        if (this.$svg.size()) {
            this.$svg.remove();
        }
    }

    SvgText.count--;

    delete SvgText.items[this.index];
};