// https://github.com/atomiks/tippyjs/blob/master/LICENSE

(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.tippy = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var r = e.ownerDocument.defaultView,
            a = r.getComputedStyle(e, null);
        return t ? a[t] : a
    }

    function r(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function a(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var p = t(e),
            o = p.overflow,
            i = p.overflowX,
            n = p.overflowY;
        return /(auto|scroll|overlay)/.test(o + n + i) ? e : a(r(e))
    }

    function p(e) {
        return 11 === e ? ve : 10 === e ? ke : ve || ke
    }

    function o(e) {
        if (!e) return document.documentElement;
        for (var r = p(10) ? document.body : null, a = e.offsetParent || null; a === r && e.nextElementSibling;) a = (e = e.nextElementSibling).offsetParent;
        var i = a && a.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(a.nodeName) && 'static' === t(a, 'position') ? o(a) : a : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function n(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || o(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function l(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            a = r ? e : t,
            p = r ? t : e,
            i = document.createRange();
        i.setStart(a, 0), i.setEnd(p, 0);
        var d = i.commonAncestorContainer;
        if (e !== d && t !== d || a.contains(p)) return n(d) ? d : o(d);
        var m = s(e);
        return m.host ? l(m.host, t) : l(e, s(t).host)
    }

    function d(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            r = 'top' === t ? 'scrollTop' : 'scrollLeft',
            a = e.nodeName;
        if ('BODY' === a || 'HTML' === a) {
            var p = e.ownerDocument.documentElement,
                o = e.ownerDocument.scrollingElement || p;
            return o[r]
        }
        return e[r]
    }

    function m(e, t) {
        var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
            a = d(t, 'top'),
            p = d(t, 'left'),
            o = r ? -1 : 1;
        return e.top += a * o, e.bottom += a * o, e.left += p * o, e.right += p * o, e
    }

    function c(e, t) {
        var r = 'x' === t ? 'Left' : 'Top',
            a = 'Left' === r ? 'Right' : 'Bottom';
        return parseFloat(e['border' + r + 'Width'], 10) + parseFloat(e['border' + a + 'Width'], 10)
    }

    function f(e, t, r, a) {
        return re(t['offset' + e], t['scroll' + e], r['client' + e], r['offset' + e], r['scroll' + e], p(10) ? parseInt(r['offset' + e]) + parseInt(a['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(a['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }

    function h(e) {
        var t = e.body,
            r = e.documentElement,
            a = p(10) && getComputedStyle(r);
        return {
            height: f('Height', t, r, a),
            width: f('Width', t, r, a)
        }
    }

    function b(e) {
        return Le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function u(e) {
        var r = {};
        try {
            if (p(10)) {
                r = e.getBoundingClientRect();
                var a = d(e, 'top'),
                    o = d(e, 'left');
                r.top += a, r.left += o, r.bottom += a, r.right += o
            } else r = e.getBoundingClientRect()
        } catch (t) {}
        var i = {
                left: r.left,
                top: r.top,
                width: r.right - r.left,
                height: r.bottom - r.top
            },
            n = 'HTML' === e.nodeName ? h(e.ownerDocument) : {},
            s = n.width || e.clientWidth || i.right - i.left,
            l = n.height || e.clientHeight || i.bottom - i.top,
            m = e.offsetWidth - s,
            f = e.offsetHeight - l;
        if (m || f) {
            var y = t(e);
            m -= c(y, 'x'), f -= c(y, 'y'), i.width -= m, i.height -= f
        }
        return b(i)
    }

    function y(e, r) {
        var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
            i = p(10),
            n = 'HTML' === r.nodeName,
            s = u(e),
            l = u(r),
            d = a(e),
            c = t(r),
            f = parseFloat(c.borderTopWidth, 10),
            h = parseFloat(c.borderLeftWidth, 10);
        o && n && (l.top = re(l.top, 0), l.left = re(l.left, 0));
        var y = b({
            top: s.top - l.top - f,
            left: s.left - l.left - h,
            width: s.width,
            height: s.height
        });
        if (y.marginTop = 0, y.marginLeft = 0, !i && n) {
            var g = parseFloat(c.marginTop, 10),
                w = parseFloat(c.marginLeft, 10);
            y.top -= f - g, y.bottom -= f - g, y.left -= h - w, y.right -= h - w, y.marginTop = g, y.marginLeft = w
        }
        return (i && !o ? r.contains(d) : r === d && 'BODY' !== d.nodeName) && (y = m(y, r)), y
    }

    function g(e) {
        var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
            r = e.ownerDocument.documentElement,
            a = y(e, r),
            p = re(r.clientWidth, window.innerWidth || 0),
            o = re(r.clientHeight, window.innerHeight || 0),
            i = t ? 0 : d(r),
            n = t ? 0 : d(r, 'left'),
            s = {
                top: i - a.top + a.marginTop,
                left: n - a.left + a.marginLeft,
                width: p,
                height: o
            };
        return b(s)
    }

    function w(e) {
        var a = e.nodeName;
        return 'BODY' !== a && 'HTML' !== a && ('fixed' === t(e, 'position') || w(r(e)))
    }

    function x(e) {
        if (!e || !e.parentElement || p()) return document.documentElement;
        for (var r = e.parentElement; r && 'none' === t(r, 'transform');) r = r.parentElement;
        return r || document.documentElement
    }

    function v(e, t, p, o) {
        var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
            n = {
                top: 0,
                left: 0
            },
            s = i ? x(e) : l(e, t);
        if ('viewport' === o) n = g(s, i);
        else {
            var d;
            'scrollParent' === o ? (d = a(r(t)), 'BODY' === d.nodeName && (d = e.ownerDocument.documentElement)) : 'window' === o ? d = e.ownerDocument.documentElement : d = o;
            var m = y(d, s, i);
            if ('HTML' === d.nodeName && !w(s)) {
                var c = h(e.ownerDocument),
                    f = c.height,
                    b = c.width;
                n.top += m.top - m.marginTop, n.bottom = f + m.top, n.left += m.left - m.marginLeft, n.right = b + m.left
            } else n = m
        }
        p = p || 0;
        var u = 'number' == typeof p;
        return n.left += u ? p : p.left || 0, n.top += u ? p : p.top || 0, n.right -= u ? p : p.right || 0, n.bottom -= u ? p : p.bottom || 0, n
    }

    function k(e) {
        var t = e.width,
            r = e.height;
        return t * r
    }

    function E(e, t, r, a, p) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var i = v(r, a, o, p),
            n = {
                top: {
                    width: i.width,
                    height: t.top - i.top
                },
                right: {
                    width: i.right - t.right,
                    height: i.height
                },
                bottom: {
                    width: i.width,
                    height: i.bottom - t.bottom
                },
                left: {
                    width: t.left - i.left,
                    height: i.height
                }
            },
            s = Object.keys(n).map(function(e) {
                return Le({
                    key: e
                }, n[e], {
                    area: k(n[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            l = s.filter(function(e) {
                var t = e.width,
                    a = e.height;
                return t >= r.clientWidth && a >= r.clientHeight
            }),
            d = 0 < l.length ? l[0].key : s[0].key,
            m = e.split('-')[1];
        return d + (m ? '-' + m : '')
    }

    function O(e, t, r) {
        var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            p = a ? x(t) : l(t, r);
        return y(r, p, a)
    }

    function C(e) {
        var t = e.ownerDocument.defaultView,
            r = t.getComputedStyle(e),
            a = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
            p = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
            o = {
                width: e.offsetWidth + p,
                height: e.offsetHeight + a
            };
        return o
    }

    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, r) {
        r = r.split('-')[0];
        var a = C(e),
            p = {
                width: a.width,
                height: a.height
            },
            o = -1 !== ['right', 'left'].indexOf(r),
            i = o ? 'top' : 'left',
            n = o ? 'left' : 'top',
            s = o ? 'height' : 'width',
            l = o ? 'width' : 'height';
        return p[i] = t[i] + t[s] / 2 - a[s] / 2, p[n] = r === n ? t[n] - a[l] : t[L(n)], p
    }

    function A(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function P(e, t, r) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === r
        });
        var a = A(e, function(e) {
            return e[t] === r
        });
        return e.indexOf(a)
    }

    function S(t, r, a) {
        var p = void 0 === a ? t : t.slice(0, P(t, 'name', a));
        return p.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var a = t['function'] || t.fn;
            t.enabled && e(a) && (r.offsets.popper = b(r.offsets.popper), r.offsets.reference = b(r.offsets.reference), r = a(r, t))
        }), r
    }

    function Y() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = S(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function D(e, t) {
        return e.some(function(e) {
            var r = e.name,
                a = e.enabled;
            return a && r === t
        })
    }

    function X(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], r = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < t.length; a++) {
            var p = t[a],
                o = p ? '' + p + r : e;
            if ('undefined' != typeof document.body.style[o]) return o
        }
        return null
    }

    function I() {
        return this.state.isDestroyed = !0, D(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[X('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function N(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function H(e, t, r, p) {
        var o = 'BODY' === e.nodeName,
            i = o ? e.ownerDocument.defaultView : e;
        i.addEventListener(t, r, {
            passive: !0
        }), o || H(a(i.parentNode), t, r, p), p.push(i)
    }

    function R(e, t, r, p) {
        r.updateBound = p, N(e).addEventListener('resize', r.updateBound, {
            passive: !0
        });
        var o = a(e);
        return H(o, 'scroll', r.updateBound, r.scrollParents), r.scrollElement = o, r.eventsEnabled = !0, r
    }

    function B() {
        this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(e, t) {
        return N(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function W() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function z(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function _(e, t) {
        Object.keys(t).forEach(function(r) {
            var a = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) && z(t[r]) && (a = 'px'), e.style[r] = t[r] + a
        })
    }

    function U(e, t) {
        Object.keys(t).forEach(function(r) {
            var a = t[r];
            !1 === a ? e.removeAttribute(r) : e.setAttribute(r, t[r])
        })
    }

    function F(e, t, r) {
        var a = A(e, function(e) {
                var r = e.name;
                return r === t
            }),
            p = !!a && e.some(function(e) {
                return e.name === r && e.enabled && e.order < a.order
            });
        if (!p) {
            var o = '`' + t + '`';
            console.warn('`' + r + '`' + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!')
        }
        return p
    }

    function V(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function q(e) {
        var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
            r = Ae.indexOf(e),
            a = Ae.slice(r + 1).concat(Ae.slice(0, r));
        return t ? a.reverse() : a
    }

    function j(e, t, r, a) {
        var p = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +p[1],
            i = p[2];
        if (!o) return e;
        if (0 === i.indexOf('%')) {
            var n;
            switch (i) {
                case '%p':
                    n = r;
                    break;
                case '%':
                case '%r':
                default:
                    n = a;
            }
            var s = b(n);
            return s[t] / 100 * o
        }
        if ('vh' === i || 'vw' === i) {
            var l;
            return l = 'vh' === i ? re(document.documentElement.clientHeight, window.innerHeight || 0) : re(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o
        }
        return o
    }

    function K(e, t, r, a) {
        var p = [0, 0],
            o = -1 !== ['right', 'left'].indexOf(a),
            i = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            n = i.indexOf(A(i, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        i[n] && -1 === i[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var s = /\s*,\s*|\s+/,
            l = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(s)[0]]), [i[n].split(s)[1]].concat(i.slice(n + 1))];
        return l = l.map(function(e, a) {
            var p = (1 === a ? !o : o) ? 'height' : 'width',
                i = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return j(e, p, t, r)
            })
        }), l.forEach(function(e, t) {
            e.forEach(function(r, a) {
                z(r) && (p[t] += r * ('-' === e[a - 1] ? -1 : 1))
            })
        }), p
    }

    function G(e, t) {
        var r = t.offset,
            a = e.placement,
            p = e.offsets,
            o = p.popper,
            i = p.reference,
            n = a.split('-')[0],
            s = void 0;
        return s = z(+r) ? [+r, 0] : K(r, o, i, n), 'left' === n ? (o.top += s[0], o.left -= s[1]) : 'right' === n ? (o.top += s[0], o.left += s[1]) : 'top' === n ? (o.left += s[0], o.top -= s[1]) : 'bottom' === n && (o.left += s[0], o.top += s[1]), e.popper = o, e
    }

    function Q() {
        document.addEventListener('click', Lt, !0), document.addEventListener('touchstart', Et, {
            passive: !0
        }), window.addEventListener('blur', Tt), window.addEventListener('resize', At), !be && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener('pointerdown', Et)
    }

    function Z(e, t) {
        function r() {
            ht(function() {
                z = !1
            })
        }

        function a() {
            X = new MutationObserver(function() {
                q.popperInstance.update()
            }), X.observe(F, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }

        function p(e) {
            var t = N = e,
                r = t.clientX,
                a = t.clientY;
            if (q.popperInstance) {
                var p = ut(q.popper),
                    o = q.popperChildren.arrow ? 20 : 5,
                    i = 'top' === p || 'bottom' === p,
                    n = 'left' === p || 'right' === p,
                    s = i ? re(o, r) : r,
                    l = n ? re(o, a) : a;
                i && s > o && (s = J(r, window.innerWidth - o)), n && l > o && (l = J(a, window.innerHeight - o));
                var d = q.reference.getBoundingClientRect(),
                    m = q.props.followCursor,
                    c = 'horizontal' === m,
                    f = 'vertical' === m;
                q.popperInstance.reference = {
                    getBoundingClientRect: function() {
                        return {
                            width: 0,
                            height: 0,
                            top: c ? d.top : l,
                            bottom: c ? d.bottom : l,
                            left: f ? d.left : s,
                            right: f ? d.right : s
                        }
                    },
                    clientWidth: 0,
                    clientHeight: 0
                }, q.popperInstance.scheduleUpdate()
            }
        }

        function o(e) {
            var t = rt(e.target, q.props.target);
            t && !t._tippy && (Z(t, oe({}, q.props, {
                target: '',
                showOnInit: !0
            })), i(e))
        }

        function i(e) {
            if (T(), !q.state.isVisible) {
                if (q.props.target) return o(e);
                if (B = !0, q.props.wait) return q.props.wait(q, e);
                w() && document.addEventListener('mousemove', p);
                var t = Ue(q.props.delay, 0, ie.delay);
                t ? H = setTimeout(function() {
                    P()
                }, t) : P()
            }
        }

        function n() {
            if (T(), !q.state.isVisible) return s();
            B = !1;
            var e = Ue(q.props.delay, 1, ie.delay);
            e ? R = setTimeout(function() {
                q.state.isVisible && S()
            }, e) : S()
        }

        function s() {
            document.removeEventListener('mousemove', p), N = null
        }

        function l() {
            document.body.removeEventListener('mouseleave', n), document.removeEventListener('mousemove', _)
        }

        function d(e) {
            !q.state.isEnabled || y(e) || (!q.state.isVisible && (I = e), 'click' === e.type && !1 !== q.props.hideOnClick && q.state.isVisible ? n() : i(e))
        }

        function m(e) {
            var t = at(e.target, function(e) {
                    return e._tippy
                }),
                r = rt(e.target, Ye.POPPER) === q.popper,
                a = t === q.reference;
            r || a || bt(ut(q.popper), q.popper.getBoundingClientRect(), e, q.props) && (l(), n())
        }

        function c(e) {
            return y(e) ? void 0 : q.props.interactive ? (document.body.addEventListener('mouseleave', n), void document.addEventListener('mousemove', _)) : void n()
        }

        function f(e) {
            if (e.target === q.reference) {
                if (q.props.interactive) {
                    if (!e.relatedTarget) return;
                    if (rt(e.relatedTarget, Ye.POPPER)) return
                }
                n()
            }
        }

        function h(e) {
            rt(e.target, q.props.target) && i(e)
        }

        function b(e) {
            rt(e.target, q.props.target) && n()
        }

        function y(e) {
            var t = -1 < e.type.indexOf('touch'),
                r = be && kt && q.props.touchHold && !t,
                a = kt && !q.props.touchHold && t;
            return r || a
        }

        function u() {
            var e = q.popperChildren.tooltip,
                t = q.props.popperOptions,
                r = Ye['round' === q.props.arrowType ? 'ROUND_ARROW' : 'ARROW'],
                p = e.querySelector(r),
                o = oe({
                    placement: q.props.placement
                }, t || {}, {
                    modifiers: oe({}, t ? t.modifiers : {}, {
                        arrow: oe({
                            element: r
                        }, t && t.modifiers ? t.modifiers.arrow : {}),
                        flip: oe({
                            enabled: q.props.flip,
                            padding: q.props.distance + 5,
                            behavior: q.props.flipBehavior
                        }, t && t.modifiers ? t.modifiers.flip : {}),
                        offset: oe({
                            offset: q.props.offset
                        }, t && t.modifiers ? t.modifiers.offset : {})
                    }),
                    onCreate: function() {
                        e.style[ut(q.popper)] = yt(q.props.distance, ie.distance), p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
                    },
                    onUpdate: function() {
                        var t = e.style;
                        t.top = '', t.bottom = '', t.left = '', t.right = '', t[ut(q.popper)] = yt(q.props.distance, ie.distance), p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
                    }
                });
            return X || a(), new Se(q.reference, q.popper, o)
        }

        function g(e) {
            q.popperInstance ? !w() && (q.popperInstance.scheduleUpdate(), q.props.livePlacement && q.popperInstance.enableEventListeners()) : (q.popperInstance = u(), (!q.props.livePlacement || w()) && q.popperInstance.disableEventListeners()), q.popperInstance.reference = q.reference;
            var t = q.popperChildren.arrow;
            if (w()) {
                t && (t.style.margin = '0');
                var r = Ue(q.props.delay, 0, ie.delay);
                I.type && p(r && N ? N : I)
            } else t && (t.style.margin = '');
            ft(q.popperInstance, e), q.props.appendTo.contains(q.popper) || (q.props.appendTo.appendChild(q.popper), q.props.onMount(q), q.state.isMounted = !0)
        }

        function w() {
            return q.props.followCursor && !kt && 'focus' !== I.type
        }

        function x() {
            He([q.popper], fe ? 0 : q.props.updateDuration);
            (function e() {
                q.popperInstance && q.popperInstance.scheduleUpdate(), q.state.isMounted ? requestAnimationFrame(e) : He([q.popper], 0)
            })()
        }

        function v(e, t) {
            E(e, function() {
                !q.state.isVisible && q.props.appendTo.contains(q.popper) && t()
            })
        }

        function k(e, t) {
            E(e, t)
        }

        function E(e, t) {
            if (0 === e) return t();
            var r = q.popperChildren.tooltip,
                a = function a(p) {
                    p.target === r && (wt(r, 'remove', a), t())
                };
            wt(r, 'remove', M), wt(r, 'add', a), M = a
        }

        function O(e, t, r) {
            q.reference.addEventListener(e, t), r.push({
                eventType: e,
                handler: t
            })
        }

        function C() {
            W = q.props.trigger.trim().split(' ').reduce(function(e, t) {
                return 'manual' === t ? e : (q.props.target ? 'mouseenter' === t ? (O('mouseover', h, e), O('mouseout', b, e)) : 'focus' === t ? (O('focusin', h, e), O('focusout', b, e)) : 'click' === t ? O(t, h, e) : void 0 : (O(t, d, e), q.props.touchHold && (O('touchstart', d, e), O('touchend', c, e)), 'mouseenter' === t ? O('mouseleave', c, e) : 'focus' === t ? O(fe ? 'focusout' : 'blur', f, e) : void 0), e)
            }, [])
        }

        function L() {
            W.forEach(function(e) {
                var t = e.eventType,
                    r = e.handler;
                q.reference.removeEventListener(t, r)
            })
        }

        function T() {
            clearTimeout(H), clearTimeout(R)
        }

        function A() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            vt(e, ie);
            var t = q.props,
                r = gt(q.reference, oe({}, q.props, e, {
                    performance: !0
                }));
            r.performance = e.hasOwnProperty('performance') ? e.performance : t.performance, q.props = r, (e.hasOwnProperty('trigger') || e.hasOwnProperty('touchHold')) && (L(), C()), e.hasOwnProperty('interactiveDebounce') && (l(), _ = xt(m, e.interactiveDebounce)), Ze(q.popper, t, r), q.popperChildren = Re(q.popper), q.popperInstance && se.some(function(t) {
                return e.hasOwnProperty(t)
            }) && (q.popperInstance.destroy(), q.popperInstance = u(), !q.state.isVisible && q.popperInstance.disableEventListeners(), q.props.followCursor && N && p(N))
        }

        function P() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 0, ie.duration[0]);
            return q.state.isDestroyed || !q.state.isEnabled || kt && !q.props.touch ? void 0 : q.reference.isVirtual || document.documentElement.contains(q.reference) ? q.reference.hasAttribute('disabled') ? void 0 : z ? void(z = !1) : void(!1 === q.props.onShow(q) || (q.popper.style.visibility = 'visible', q.state.isVisible = !0, He([q.popper, q.popperChildren.tooltip, q.popperChildren.backdrop], 0), g(function() {
                q.state.isVisible && (!w() && q.popperInstance.update(), He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), q.popperChildren.backdrop && (q.popperChildren.content.style.transitionDelay = ee(e / 6) + 'ms'), q.props.interactive && q.reference.classList.add('tippy-active'), q.props.sticky && x(), ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'visible'), k(e, function() {
                    0 === q.props.updateDuration && q.popperChildren.tooltip.classList.add('tippy-notransition'), q.props.interactive && -1 < ['focus', 'click'].indexOf(I.type) && pt(q.popper), q.reference.setAttribute('aria-describedby', q.popper.id), q.props.onShown(q), q.state.isShown = !0
                }))
            }))) : Y()
        }

        function S() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 1, ie.duration[1]);
            q.state.isDestroyed || !q.state.isEnabled || !1 === q.props.onHide(q) || (0 === q.props.updateDuration && q.popperChildren.tooltip.classList.remove('tippy-notransition'), q.props.interactive && q.reference.classList.remove('tippy-active'), q.popper.style.visibility = 'hidden', q.state.isVisible = !1, q.state.isShown = !1, He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e), ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'hidden'), q.props.interactive && !z && -1 < ['focus', 'click'].indexOf(I.type) && ('focus' === I.type && (z = !0), pt(q.reference)), v(e, function() {
                B || s(), q.reference.removeAttribute('aria-describedby'), q.popperInstance.disableEventListeners(), q.props.appendTo.removeChild(q.popper), q.state.isMounted = !1, q.props.onHidden(q)
            }))
        }

        function Y(e) {
            q.state.isDestroyed || (q.state.isMounted && S(0), L(), q.reference.removeEventListener('click', r), delete q.reference._tippy, q.props.target && e && Xe(q.reference.querySelectorAll(q.props.target)).forEach(function(e) {
                return e._tippy && e._tippy.destroy()
            }), q.popperInstance && q.popperInstance.destroy(), X && X.disconnect(), q.state.isDestroyed = !0)
        }
        var D = gt(e, t);
        if (!D.multiple && e._tippy) return null;
        var X = null,
            I = {},
            N = null,
            H = 0,
            R = 0,
            B = !1,
            M = function() {},
            W = [],
            z = !1,
            _ = 0 < D.interactiveDebounce ? xt(m, D.interactiveDebounce) : m,
            U = Pt++,
            F = Qe(U, D);
        F.addEventListener('mouseenter', function(e) {
            q.props.interactive && q.state.isVisible && 'mouseenter' === I.type && i(e)
        }), F.addEventListener('mouseleave', function(e) {
            q.props.interactive && 'mouseenter' === I.type && 0 === q.props.interactiveDebounce && bt(ut(F), F.getBoundingClientRect(), e, q.props) && n()
        });
        var V = Re(F),
            q = {
                id: U,
                reference: e,
                popper: F,
                popperChildren: V,
                popperInstance: null,
                props: D,
                state: {
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1
                },
                clearDelayTimeouts: T,
                set: A,
                setContent: function(e) {
                    A({
                        content: e
                    })
                },
                show: P,
                hide: S,
                enable: function() {
                    q.state.isEnabled = !0
                },
                disable: function() {
                    q.state.isEnabled = !1
                },
                destroy: Y
            };
        return C(), e.addEventListener('click', r), D.lazy || (q.popperInstance = u(), q.popperInstance.disableEventListeners()), D.showOnInit && i(), !D.a11y || D.target || Ne(e) || e.setAttribute('tabindex', '0'), e._tippy = q, F._tippy = q, q
    }

    function $(e, t, r) {
        vt(t, ie), St || (Q(), St = !0);
        var a = oe({}, ie, t);
        Be(e) && et(e);
        var p = ze(e),
            o = p[0],
            i = (r && o ? [o] : p).reduce(function(e, t) {
                var r = t && Z(t, a);
                return r && e.push(r), e
            }, []);
        return {
            targets: e,
            props: a,
            instances: i,
            destroyAll: function() {
                this.instances.forEach(function(e) {
                    e.destroy()
                }), this.instances = []
            }
        }
    }
    for (var J = Math.min, ee = Math.round, te = Math.floor, re = Math.max, ae = '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}', pe = '3.2.0', oe = Object.assign || function(e) {
            for (var t, r = 1; r < arguments.length; r++)
                for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }, ie = {
            a11y: !0,
            allowHTML: !0,
            animateFill: !0,
            animation: 'shift-away',
            appendTo: function() {
                return document.body
            },
            arrow: !1,
            arrowTransform: '',
            arrowType: 'sharp',
            content: '',
            delay: [0, 20],
            distance: 10,
            duration: [325, 275],
            flip: !0,
            flipBehavior: 'flip',
            followCursor: !1,
            hideOnClick: !0,
            inertia: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            lazy: !0,
            livePlacement: !0,
            multiple: !1,
            offset: 0,
            onHidden: function() {},
            onHide: function() {},
            onMount: function() {},
            onShow: function() {},
            onShown: function() {},
            performance: !1,
            placement: 'top',
            popperOptions: {},
            shouldPopperHideOnBlur: function() {
                return !0
            },
            showOnInit: !1,
            size: 'regular',
            sticky: !1,
            target: '',
            theme: 'dark',
            touch: !0,
            touchHold: !1,
            trigger: 'mouseenter focus',
            updateDuration: 200,
            wait: null,
            zIndex: 9999
        }, ne = function(e) {
            ie = oe({}, ie, e)
        }, se = ['arrowType', 'distance', 'flip', 'flipBehavior', 'offset', 'placement', 'popperOptions'], le = 'undefined' != typeof window, de = le ? navigator : {}, me = le ? window : {}, ce = ('MutationObserver' in me), fe = /MSIE |Trident\//.test(de.userAgent), he = /iPhone|iPad|iPod/.test(de.platform) && !me.MSStream, be = ('ontouchstart' in me), ye = 'undefined' != typeof window && 'undefined' != typeof document, ue = ['Edge', 'Trident', 'Firefox'], ge = 0, we = 0; we < ue.length; we += 1)
        if (ye && 0 <= navigator.userAgent.indexOf(ue[we])) {
            ge = 1;
            break
        }
    var i = ye && window.Promise,
        xe = i ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, ge))
            }
        },
        ve = ye && !!(window.MSInputMethodContext && document.documentMode),
        ke = ye && /MSIE 10/.test(navigator.userAgent),
        Ee = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        Oe = function() {
            function e(e, t) {
                for (var r, a = 0; a < t.length; a++) r = t[a], r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
            return function(t, r, a) {
                return r && e(t.prototype, r), a && e(t, a), t
            }
        }(),
        Ce = function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        },
        Le = Object.assign || function(e) {
            for (var t, r = 1; r < arguments.length; r++)
                for (var a in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        },
        Te = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        Ae = Te.slice(3),
        Pe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        Se = function() {
            function t(r, a) {
                var p = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Ee(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(p.update)
                }, this.update = xe(this.update.bind(this)), this.options = Le({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = r && r.jquery ? r[0] : r, this.popper = a && a.jquery ? a[0] : a, this.options.modifiers = {}, Object.keys(Le({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    p.options.modifiers[e] = Le({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Le({
                        name: e
                    }, p.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(p.reference, p.popper, p.options, t, p.state)
                }), this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(), this.state.eventsEnabled = i
            }
            return Oe(t, [{
                key: 'update',
                value: function() {
                    return Y.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return I.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return B.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return W.call(this)
                }
            }]), t
        }();
    Se.Utils = ('undefined' == typeof window ? global : window).PopperUtils, Se.placements = Te, Se.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        r = t.split('-')[0],
                        a = t.split('-')[1];
                    if (a) {
                        var p = e.offsets,
                            o = p.reference,
                            i = p.popper,
                            n = -1 !== ['bottom', 'top'].indexOf(r),
                            s = n ? 'left' : 'top',
                            l = n ? 'width' : 'height',
                            d = {
                                start: Ce({}, s, o[s]),
                                end: Ce({}, s, o[s] + o[l] - i[l])
                            };
                        e.offsets.popper = Le({}, i, d[a])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: G,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var r = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === r && (r = o(r));
                    var a = X('transform'),
                        p = e.instance.popper.style,
                        i = p.top,
                        n = p.left,
                        s = p[a];
                    p.top = '', p.left = '', p[a] = '';
                    var l = v(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
                    p.top = i, p.left = n, p[a] = s, t.boundaries = l;
                    var d = t.priority,
                        m = e.offsets.popper,
                        c = {
                            primary: function(e) {
                                var r = m[e];
                                return m[e] < l[e] && !t.escapeWithReference && (r = re(m[e], l[e])), Ce({}, e, r)
                            },
                            secondary: function(e) {
                                var r = 'right' === e ? 'left' : 'top',
                                    a = m[r];
                                return m[e] > l[e] && !t.escapeWithReference && (a = J(m[r], l[e] - ('right' === e ? m.width : m.height))), Ce({}, r, a)
                            }
                        };
                    return d.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        m = Le({}, m, c[t](e))
                    }), e.offsets.popper = m, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        r = t.popper,
                        a = t.reference,
                        p = e.placement.split('-')[0],
                        o = te,
                        i = -1 !== ['top', 'bottom'].indexOf(p),
                        n = i ? 'right' : 'bottom',
                        s = i ? 'left' : 'top',
                        l = i ? 'width' : 'height';
                    return r[n] < o(a[s]) && (e.offsets.popper[s] = o(a[s]) - r[l]), r[s] > o(a[n]) && (e.offsets.popper[s] = o(a[n])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, r) {
                    var a;
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var p = r.element;
                    if ('string' == typeof p) {
                        if (p = e.instance.popper.querySelector(p), !p) return e;
                    } else if (!e.instance.popper.contains(p)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var o = e.placement.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        s = i.reference,
                        l = -1 !== ['left', 'right'].indexOf(o),
                        d = l ? 'height' : 'width',
                        m = l ? 'Top' : 'Left',
                        c = m.toLowerCase(),
                        f = l ? 'left' : 'top',
                        h = l ? 'bottom' : 'right',
                        y = C(p)[d];
                    s[h] - y < n[c] && (e.offsets.popper[c] -= n[c] - (s[h] - y)), s[c] + y > n[h] && (e.offsets.popper[c] += s[c] + y - n[h]), e.offsets.popper = b(e.offsets.popper);
                    var u = s[c] + s[d] / 2 - y / 2,
                        g = t(e.instance.popper),
                        w = parseFloat(g['margin' + m], 10),
                        x = parseFloat(g['border' + m + 'Width'], 10),
                        v = u - e.offsets.popper[c] - w - x;
                    return v = re(J(n[d] - y, v), 0), e.arrowElement = p, e.offsets.arrow = (a = {}, Ce(a, c, ee(v)), Ce(a, f, ''), a), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (D(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var r = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        a = e.placement.split('-')[0],
                        p = L(a),
                        o = e.placement.split('-')[1] || '',
                        i = [];
                    switch (t.behavior) {
                        case Pe.FLIP:
                            i = [a, p];
                            break;
                        case Pe.CLOCKWISE:
                            i = q(a);
                            break;
                        case Pe.COUNTERCLOCKWISE:
                            i = q(a, !0);
                            break;
                        default:
                            i = t.behavior;
                    }
                    return i.forEach(function(n, s) {
                        if (a !== n || i.length === s + 1) return e;
                        a = e.placement.split('-')[0], p = L(a);
                        var l = e.offsets.popper,
                            d = e.offsets.reference,
                            m = te,
                            c = 'left' === a && m(l.right) > m(d.left) || 'right' === a && m(l.left) < m(d.right) || 'top' === a && m(l.bottom) > m(d.top) || 'bottom' === a && m(l.top) < m(d.bottom),
                            f = m(l.left) < m(r.left),
                            h = m(l.right) > m(r.right),
                            b = m(l.top) < m(r.top),
                            y = m(l.bottom) > m(r.bottom),
                            u = 'left' === a && f || 'right' === a && h || 'top' === a && b || 'bottom' === a && y,
                            g = -1 !== ['top', 'bottom'].indexOf(a),
                            w = !!t.flipVariations && (g && 'start' === o && f || g && 'end' === o && h || !g && 'start' === o && b || !g && 'end' === o && y);
                        (c || u || w) && (e.flipped = !0, (c || u) && (a = i[s + 1]), w && (o = V(o)), e.placement = a + (o ? '-' + o : ''), e.offsets.popper = Le({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = S(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        r = t.split('-')[0],
                        a = e.offsets,
                        p = a.popper,
                        o = a.reference,
                        i = -1 !== ['left', 'right'].indexOf(r),
                        n = -1 === ['top', 'left'].indexOf(r);
                    return p[i ? 'left' : 'top'] = o[r] - (n ? p[i ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = b(p), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        r = A(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var r = t.x,
                        a = t.y,
                        p = e.offsets.popper,
                        i = A(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== i && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var n = void 0 === i ? t.gpuAcceleration : i,
                        s = o(e.instance.popper),
                        l = u(s),
                        d = {
                            position: p.position
                        },
                        m = {
                            left: te(p.left),
                            top: ee(p.top),
                            bottom: ee(p.bottom),
                            right: te(p.right)
                        },
                        c = 'bottom' === r ? 'top' : 'bottom',
                        f = 'right' === a ? 'left' : 'right',
                        h = X('transform'),
                        b = void 0,
                        y = void 0;
                    if (y = 'bottom' == c ? 'HTML' === s.nodeName ? -s.clientHeight + m.bottom : -l.height + m.bottom : m.top, b = 'right' == f ? 'HTML' === s.nodeName ? -s.clientWidth + m.right : -l.width + m.right : m.left, n && h) d[h] = 'translate3d(' + b + 'px, ' + y + 'px, 0)', d[c] = 0, d[f] = 0, d.willChange = 'transform';
                    else {
                        var g = 'bottom' == c ? -1 : 1,
                            w = 'right' == f ? -1 : 1;
                        d[c] = y * g, d[f] = b * w, d.willChange = c + ', ' + f
                    }
                    var x = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Le({}, x, e.attributes), e.styles = Le({}, d, e.styles), e.arrowStyles = Le({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return _(e.instance.popper, e.styles), U(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && _(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, r, a, p) {
                    var o = O(p, t, e, r.positionFixed),
                        i = E(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
                    return t.setAttribute('x-placement', i), _(t, {
                        position: r.positionFixed ? 'fixed' : 'absolute'
                    }), r
                },
                gpuAcceleration: void 0
            }
        }
    };
    var Ye = {
            POPPER: '.tippy-popper',
            TOOLTIP: '.tippy-tooltip',
            CONTENT: '.tippy-content',
            BACKDROP: '.tippy-backdrop',
            ARROW: '.tippy-arrow',
            ROUND_ARROW: '.tippy-roundarrow'
        },
        De = {
            x: !0
        },
        Xe = function(e) {
            return [].slice.call(e)
        },
        Ie = function(e, t) {
            t.content instanceof Element ? (We(e, ''), e.appendChild(t.content)) : e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content
        },
        Ne = function(e) {
            return !(e instanceof Element) || tt.call(e, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !e.hasAttribute('disabled')
        },
        He = function(e, t) {
            e.filter(Boolean).forEach(function(e) {
                e.style.transitionDuration = t + 'ms'
            })
        },
        Re = function(e) {
            var t = function(t) {
                return e.querySelector(t)
            };
            return {
                tooltip: t(Ye.TOOLTIP),
                backdrop: t(Ye.BACKDROP),
                content: t(Ye.CONTENT),
                arrow: t(Ye.ARROW) || t(Ye.ROUND_ARROW)
            }
        },
        Be = function(e) {
            return '[object Object]' === {}.toString.call(e)
        },
        Me = function() {
            return document.createElement('div')
        },
        We = function(e, t) {
            e[De.x && 'innerHTML'] = t instanceof Element ? t[De.x && 'innerHTML'] : t
        },
        ze = function(e) {
            if (e instanceof Element || Be(e)) return [e];
            if (e instanceof NodeList) return Xe(e);
            if (Array.isArray(e)) return e;
            try {
                return Xe(document.querySelectorAll(e))
            } catch (t) {
                return []
            }
        },
        _e = function(e) {
            return !isNaN(e) && !isNaN(parseFloat(e))
        },
        Ue = function(e, t, r) {
            if (Array.isArray(e)) {
                var a = e[t];
                return null == a ? r : a
            }
            return e
        },
        Fe = function(e) {
            var t = Me();
            return 'round' === e ? (t.className = 'tippy-roundarrow', We(t, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : t.className = 'tippy-arrow', t
        },
        Ve = function() {
            var e = Me();
            return e.className = 'tippy-backdrop', e.setAttribute('data-state', 'hidden'), e
        },
        qe = function(e, t) {
            e.setAttribute('tabindex', '-1'), t.setAttribute('data-interactive', '')
        },
        je = function(e, t) {
            e.removeAttribute('tabindex'), t.removeAttribute('data-interactive')
        },
        Ke = function(e) {
            e.setAttribute('data-inertia', '')
        },
        Ge = function(e) {
            e.removeAttribute('data-inertia')
        },
        Qe = function(e, t) {
            var r = Me();
            r.className = 'tippy-popper', r.setAttribute('role', 'tooltip'), r.id = 'tippy-' + e, r.style.zIndex = t.zIndex;
            var a = Me();
            a.className = 'tippy-tooltip', a.setAttribute('data-size', t.size), a.setAttribute('data-animation', t.animation), a.setAttribute('data-state', 'hidden'), t.theme.split(' ').forEach(function(e) {
                a.classList.add(e + '-theme')
            });
            var p = Me();
            return p.className = 'tippy-content', p.setAttribute('data-state', 'hidden'), t.interactive && qe(r, a), t.arrow && a.appendChild(Fe(t.arrowType)), t.animateFill && (a.appendChild(Ve()), a.setAttribute('data-animatefill', '')), t.inertia && a.setAttribute('data-inertia', ''), Ie(p, t), a.appendChild(p), r.appendChild(a), r.addEventListener('focusout', function(t) {
                t.relatedTarget && r._tippy && !at(t.relatedTarget, function(e) {
                    return e === r
                }) && t.relatedTarget !== r._tippy.reference && r._tippy.props.shouldPopperHideOnBlur(t) && r._tippy.hide()
            }), r
        },
        Ze = function(e, t, r) {
            var a = Re(e),
                p = a.tooltip,
                o = a.content,
                i = a.backdrop,
                n = a.arrow;
            e.style.zIndex = r.zIndex, p.setAttribute('data-size', r.size), p.setAttribute('data-animation', r.animation), t.content !== r.content && Ie(o, r), !t.animateFill && r.animateFill ? (p.appendChild(Ve()), p.setAttribute('data-animatefill', '')) : t.animateFill && !r.animateFill && (p.removeChild(i), p.removeAttribute('data-animatefill')), !t.arrow && r.arrow ? p.appendChild(Fe(r.arrowType)) : t.arrow && !r.arrow && p.removeChild(n), t.arrow && r.arrow && t.arrowType !== r.arrowType && p.replaceChild(Fe(r.arrowType), n), !t.interactive && r.interactive ? qe(e, p) : t.interactive && !r.interactive && je(e, p), !t.inertia && r.inertia ? Ke(p) : t.inertia && !r.inertia && Ge(p), t.theme !== r.theme && (t.theme.split(' ').forEach(function(e) {
                p.classList.remove(e + '-theme')
            }), r.theme.split(' ').forEach(function(e) {
                p.classList.add(e + '-theme')
            }))
        },
        $e = function(e) {
            Xe(document.querySelectorAll(Ye.POPPER)).forEach(function(t) {
                var r = t._tippy;
                r && !0 === r.props.hideOnClick && (!e || t !== e.popper) && r.hide()
            })
        },
        Je = function(e) {
            return Object.keys(ie).reduce(function(t, r) {
                var a = (e.getAttribute('data-tippy-' + r) || '').trim();
                return a ? (t[r] = 'content' === r ? a : 'true' === a || 'false' !== a && (_e(a) ? +a : '[' === a[0] || '{' === a[0] ? JSON.parse(a) : a), t) : t
            }, {})
        },
        et = function(e) {
            var t = {
                isVirtual: !0,
                attributes: e.attributes || {},
                setAttribute: function(t, r) {
                    e.attributes[t] = r
                },
                getAttribute: function(t) {
                    return e.attributes[t]
                },
                removeAttribute: function(t) {
                    delete e.attributes[t]
                },
                hasAttribute: function(t) {
                    return t in e.attributes
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                classList: {
                    classNames: {},
                    add: function(t) {
                        e.classList.classNames[t] = !0
                    },
                    remove: function(t) {
                        delete e.classList.classNames[t]
                    },
                    contains: function(t) {
                        return t in e.classList.classNames
                    }
                }
            };
            for (var r in t) e[r] = t[r];
            return e
        },
        tt = function() {
            if (le) {
                var t = Element.prototype;
                return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
            }
        }(),
        rt = function(e, t) {
            return (Element.prototype.closest || function(e) {
                for (var t = this; t;) {
                    if (tt.call(t, e)) return t;
                    t = t.parentElement
                }
            }).call(e, t)
        },
        at = function(e, t) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentElement
            }
        },
        pt = function(e) {
            var t = window.scrollX || window.pageXOffset,
                r = window.scrollY || window.pageYOffset;
            e.focus(), scroll(t, r)
        },
        ot = function(e) {
            void e.offsetHeight
        },
        it = function(e, t) {
            return (t ? e : {
                X: 'Y',
                Y: 'X'
            }[e]) || ''
        },
        nt = function(e, t, r, p) {
            var o = t[0],
                i = t[1];
            if (!o && !i) return '';
            var n = {
                scale: function() {
                    return i ? r ? o + ', ' + i : i + ', ' + o : '' + o
                }(),
                translate: function() {
                    return i ? r ? p ? o + 'px, ' + -i + 'px' : o + 'px, ' + i + 'px' : p ? -i + 'px, ' + o + 'px' : i + 'px, ' + o + 'px' : p ? -o + 'px' : o + 'px'
                }()
            };
            return n[e]
        },
        st = function(e, t) {
            var r = e.match(new RegExp(t + '([XY])'));
            return r ? r[1] : ''
        },
        lt = function(e, t) {
            var r = e.match(t);
            return r ? r[1].split(',').map(parseFloat) : []
        },
        dt = {
            translate: /translateX?Y?\(([^)]+)\)/,
            scale: /scaleX?Y?\(([^)]+)\)/
        },
        mt = function(e, t) {
            var r = ut(rt(e, Ye.POPPER)),
                a = 'top' === r || 'bottom' === r,
                p = 'right' === r || 'bottom' === r,
                o = {
                    translate: {
                        axis: st(t, 'translate'),
                        numbers: lt(t, dt.translate)
                    },
                    scale: {
                        axis: st(t, 'scale'),
                        numbers: lt(t, dt.scale)
                    }
                },
                i = t.replace(dt.translate, 'translate' + it(o.translate.axis, a) + '(' + nt('translate', o.translate.numbers, a, p) + ')').replace(dt.scale, 'scale' + it(o.scale.axis, a) + '(' + nt('scale', o.scale.numbers, a, p) + ')');
            e.style['undefined' == typeof document.body.style.transform ? 'webkitTransform' : 'transform'] = i
        },
        ct = function(e, t) {
            e.filter(Boolean).forEach(function(e) {
                e.setAttribute('data-state', t)
            })
        },
        ft = function(e, t) {
            var r = e.popper,
                a = e.options,
                p = a.onCreate,
                o = a.onUpdate;
            a.onCreate = a.onUpdate = function() {
                ot(r), t(), o(), a.onCreate = p, a.onUpdate = o
            }
        },
        ht = function(e) {
            setTimeout(e, 1)
        },
        bt = function(e, t, r, a) {
            if (!e) return !0;
            var p = r.clientX,
                o = r.clientY,
                i = a.interactiveBorder,
                n = a.distance,
                s = t.top - o > ('top' === e ? i + n : i),
                l = o - t.bottom > ('bottom' === e ? i + n : i),
                d = t.left - p > ('left' === e ? i + n : i),
                m = p - t.right > ('right' === e ? i + n : i);
            return s || l || d || m
        },
        yt = function(e, t) {
            return -(e - t) + 'px'
        },
        ut = function(e) {
            var t = e.getAttribute('x-placement');
            return t ? t.split('-')[0] : ''
        },
        gt = function(e, t) {
            var r = oe({}, t, t.performance ? {} : Je(e));
            return r.arrow && (r.animateFill = !1), 'function' == typeof r.appendTo && (r.appendTo = t.appendTo(e)), 'function' == typeof r.content && (r.content = t.content(e)), r
        },
        wt = function(e, t, r) {
            e[t + 'EventListener']('transitionend', r)
        },
        xt = function(e, t) {
            var r;
            return function() {
                var a = this,
                    p = arguments;
                clearTimeout(r), r = setTimeout(function() {
                    return e.apply(a, p)
                }, t)
            }
        },
        vt = function(e, t) {
            for (var r in e || {})
                if (!(r in t)) throw Error('[tippy]: `' + r + '` is not a valid option')
        },
        kt = !1,
        Et = function() {
            kt || (kt = !0, he && document.body.classList.add('tippy-iOS'), window.performance && document.addEventListener('mousemove', Ct))
        },
        Ot = 0,
        Ct = function e() {
            var t = performance.now();
            20 > t - Ot && (kt = !1, document.removeEventListener('mousemove', e), !he && document.body.classList.remove('tippy-iOS')), Ot = t
        },
        Lt = function(e) {
            var t = e.target;
            if (!(t instanceof Element)) return $e();
            var r = rt(t, Ye.POPPER);
            if (!(r && r._tippy && r._tippy.props.interactive)) {
                var a = at(t, function(e) {
                    return e._tippy && e._tippy.reference === e
                });
                if (a) {
                    var p = a._tippy,
                        o = -1 < p.props.trigger.indexOf('click');
                    if (kt || o) return $e(p);
                    if (!0 !== p.props.hideOnClick || o) return;
                    p.clearDelayTimeouts()
                }
                $e()
            }
        },
        Tt = function() {
            var e = document,
                t = e.activeElement;
            t && t.blur && t._tippy && t.blur()
        },
        At = function() {
            Xe(document.querySelectorAll(Ye.POPPER)).forEach(function(e) {
                var t = e._tippy;
                t.props.livePlacement || t.popperInstance.scheduleUpdate()
            })
        },
        Pt = 1,
        St = !1;
    $.version = pe, $.defaults = ie, $.one = function(e, t) {
        return $(e, t, !0).instances[0]
    }, $.setDefaults = function(e) {
        ne(e), $.defaults = ie
    }, $.disableAnimations = function() {
        $.setDefaults({
            duration: 0,
            updateDuration: 0,
            animateFill: !1
        })
    }, $.hideAllPoppers = $e, $.useCapture = function() {};
    return le && setTimeout(function() {
            Xe(document.querySelectorAll('[data-tippy]')).forEach(function(e) {
                var t = e.getAttribute('data-tippy');
                t && $(e, {
                    content: t
                })
            })
        }),
        function(e) {
            if (ce) {
                var t = document.createElement('style');
                t.type = 'text/css', t.textContent = e, document.head.insertBefore(t, document.head.firstChild)
            }
        }(ae), $
});
