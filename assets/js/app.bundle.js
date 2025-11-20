(() => {
  var fv = Object.create;
  var As = Object.defineProperty;
  var dv = Object.getOwnPropertyDescriptor;
  var mv = Object.getOwnPropertyNames;
  var hv = Object.getPrototypeOf,
    yv = Object.prototype.hasOwnProperty;
  var C = (e, t) => () => (e && (t = e((e = 0))), t);
  var Nt = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t),
    t.exports
  );
  var vv = (e, t, a, l) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of mv(t))
        !yv.call(e, n) &&
          n !== a &&
          As(e, n, {
            get: () => t[n],
            enumerable: !(l = dv(t, n)) || l.enumerable,
          });
    return e;
  };
  var V = (e, t, a) => (
    (a = e != null ? fv(hv(e)) : {}),
    vv(
      t || !e || !e.__esModule
        ? As(a, 'default', { value: e, enumerable: !0 })
        : a,
      e
    )
  );
  var js = Nt((M) => {
    'use strict';
    var ru = Symbol.for('react.transitional.element'),
      pv = Symbol.for('react.portal'),
      gv = Symbol.for('react.fragment'),
      bv = Symbol.for('react.strict_mode'),
      Sv = Symbol.for('react.profiler'),
      Ev = Symbol.for('react.consumer'),
      Rv = Symbol.for('react.context'),
      wv = Symbol.for('react.forward_ref'),
      xv = Symbol.for('react.suspense'),
      Tv = Symbol.for('react.memo'),
      Ms = Symbol.for('react.lazy'),
      Av = Symbol.for('react.activity'),
      Ns = Symbol.iterator;
    function Nv(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (Ns && e[Ns]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
    }
    var zs = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _s = Object.assign,
      Ls = {};
    function Ia(e, t, a) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ls),
        (this.updater = a || zs));
    }
    Ia.prototype.isReactComponent = {};
    Ia.prototype.setState = function (e, t) {
      if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, e, t, 'setState');
    };
    Ia.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    };
    function Us() {}
    Us.prototype = Ia.prototype;
    function iu(e, t, a) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ls),
        (this.updater = a || zs));
    }
    var uu = (iu.prototype = new Us());
    uu.constructor = iu;
    _s(uu, Ia.prototype);
    uu.isPureReactComponent = !0;
    var Ds = Array.isArray;
    function nu() {}
    var I = { H: null, A: null, T: null, S: null },
      Hs = Object.prototype.hasOwnProperty;
    function ou(e, t, a) {
      var l = a.ref;
      return {
        $$typeof: ru,
        type: e,
        key: t,
        ref: l !== void 0 ? l : null,
        props: a,
      };
    }
    function Dv(e, t) {
      return ou(e.type, t, e.props);
    }
    function cu(e) {
      return typeof e == 'object' && e !== null && e.$$typeof === ru;
    }
    function Ov(e) {
      var t = { '=': '=0', ':': '=2' };
      return (
        '$' +
        e.replace(/[=:]/g, function (a) {
          return t[a];
        })
      );
    }
    var Os = /\/+/g;
    function lu(e, t) {
      return typeof e == 'object' && e !== null && e.key != null
        ? Ov('' + e.key)
        : t.toString(36);
    }
    function Cv(e) {
      switch (e.status) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw e.reason;
        default:
          switch (
            (typeof e.status == 'string'
              ? e.then(nu, nu)
              : ((e.status = 'pending'),
                e.then(
                  function (t) {
                    e.status === 'pending' &&
                      ((e.status = 'fulfilled'), (e.value = t));
                  },
                  function (t) {
                    e.status === 'pending' &&
                      ((e.status = 'rejected'), (e.reason = t));
                  }
                )),
            e.status)
          ) {
            case 'fulfilled':
              return e.value;
            case 'rejected':
              throw e.reason;
          }
      }
      throw e;
    }
    function Wa(e, t, a, l, n) {
      var r = typeof e;
      (r === 'undefined' || r === 'boolean') && (e = null);
      var i = !1;
      if (e === null) i = !0;
      else
        switch (r) {
          case 'bigint':
          case 'string':
          case 'number':
            i = !0;
            break;
          case 'object':
            switch (e.$$typeof) {
              case ru:
              case pv:
                i = !0;
                break;
              case Ms:
                return ((i = e._init), Wa(i(e._payload), t, a, l, n));
            }
        }
      if (i)
        return (
          (n = n(e)),
          (i = l === '' ? '.' + lu(e, 0) : l),
          Ds(n)
            ? ((a = ''),
              i != null && (a = i.replace(Os, '$&/') + '/'),
              Wa(n, t, a, '', function (c) {
                return c;
              }))
            : n != null &&
              (cu(n) &&
                (n = Dv(
                  n,
                  a +
                    (n.key == null || (e && e.key === n.key)
                      ? ''
                      : ('' + n.key).replace(Os, '$&/') + '/') +
                    i
                )),
              t.push(n)),
          1
        );
      i = 0;
      var u = l === '' ? '.' : l + ':';
      if (Ds(e))
        for (var o = 0; o < e.length; o++)
          ((l = e[o]), (r = u + lu(l, o)), (i += Wa(l, t, a, r, n)));
      else if (((o = Nv(e)), typeof o == 'function'))
        for (e = o.call(e), o = 0; !(l = e.next()).done; )
          ((l = l.value), (r = u + lu(l, o++)), (i += Wa(l, t, a, r, n)));
      else if (r === 'object') {
        if (typeof e.then == 'function') return Wa(Cv(e), t, a, l, n);
        throw (
          (t = String(e)),
          Error(
            'Objects are not valid as a React child (found: ' +
              (t === '[object Object]'
                ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                : t) +
              '). If you meant to render a collection of children, use an array instead.'
          )
        );
      }
      return i;
    }
    function cr(e, t, a) {
      if (e == null) return e;
      var l = [],
        n = 0;
      return (
        Wa(e, l, '', '', function (r) {
          return t.call(a, r, n++);
        }),
        l
      );
    }
    function Mv(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (a) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = a));
            },
            function (a) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = a));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var Cs =
        typeof reportError == 'function'
          ? reportError
          : function (e) {
              if (
                typeof window == 'object' &&
                typeof window.ErrorEvent == 'function'
              ) {
                var t = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == 'object' &&
                    e !== null &&
                    typeof e.message == 'string'
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == 'object' &&
                typeof process.emit == 'function'
              ) {
                process.emit('uncaughtException', e);
                return;
              }
              console.error(e);
            },
      zv = {
        map: cr,
        forEach: function (e, t, a) {
          cr(
            e,
            function () {
              t.apply(this, arguments);
            },
            a
          );
        },
        count: function (e) {
          var t = 0;
          return (
            cr(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            cr(e, function (t) {
              return t;
            }) || []
          );
        },
        only: function (e) {
          if (!cu(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      };
    M.Activity = Av;
    M.Children = zv;
    M.Component = Ia;
    M.Fragment = gv;
    M.Profiler = Sv;
    M.PureComponent = iu;
    M.StrictMode = bv;
    M.Suspense = xv;
    M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I;
    M.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (e) {
        return I.H.useMemoCache(e);
      },
    };
    M.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    };
    M.cacheSignal = function () {
      return null;
    };
    M.cloneElement = function (e, t, a) {
      if (e == null)
        throw Error(
          'The argument must be a React element, but you passed ' + e + '.'
        );
      var l = _s({}, e.props),
        n = e.key;
      if (t != null)
        for (r in (t.key !== void 0 && (n = '' + t.key), t))
          !Hs.call(t, r) ||
            r === 'key' ||
            r === '__self' ||
            r === '__source' ||
            (r === 'ref' && t.ref === void 0) ||
            (l[r] = t[r]);
      var r = arguments.length - 2;
      if (r === 1) l.children = a;
      else if (1 < r) {
        for (var i = Array(r), u = 0; u < r; u++) i[u] = arguments[u + 2];
        l.children = i;
      }
      return ou(e.type, n, l);
    };
    M.createContext = function (e) {
      return (
        (e = {
          $$typeof: Rv,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = e),
        (e.Consumer = { $$typeof: Ev, _context: e }),
        e
      );
    };
    M.createElement = function (e, t, a) {
      var l,
        n = {},
        r = null;
      if (t != null)
        for (l in (t.key !== void 0 && (r = '' + t.key), t))
          Hs.call(t, l) &&
            l !== 'key' &&
            l !== '__self' &&
            l !== '__source' &&
            (n[l] = t[l]);
      var i = arguments.length - 2;
      if (i === 1) n.children = a;
      else if (1 < i) {
        for (var u = Array(i), o = 0; o < i; o++) u[o] = arguments[o + 2];
        n.children = u;
      }
      if (e && e.defaultProps)
        for (l in ((i = e.defaultProps), i)) n[l] === void 0 && (n[l] = i[l]);
      return ou(e, r, n);
    };
    M.createRef = function () {
      return { current: null };
    };
    M.forwardRef = function (e) {
      return { $$typeof: wv, render: e };
    };
    M.isValidElement = cu;
    M.lazy = function (e) {
      return { $$typeof: Ms, _payload: { _status: -1, _result: e }, _init: Mv };
    };
    M.memo = function (e, t) {
      return { $$typeof: Tv, type: e, compare: t === void 0 ? null : t };
    };
    M.startTransition = function (e) {
      var t = I.T,
        a = {};
      I.T = a;
      try {
        var l = e(),
          n = I.S;
        (n !== null && n(a, l),
          typeof l == 'object' &&
            l !== null &&
            typeof l.then == 'function' &&
            l.then(nu, Cs));
      } catch (r) {
        Cs(r);
      } finally {
        (t !== null && a.types !== null && (t.types = a.types), (I.T = t));
      }
    };
    M.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    };
    M.use = function (e) {
      return I.H.use(e);
    };
    M.useActionState = function (e, t, a) {
      return I.H.useActionState(e, t, a);
    };
    M.useCallback = function (e, t) {
      return I.H.useCallback(e, t);
    };
    M.useContext = function (e) {
      return I.H.useContext(e);
    };
    M.useDebugValue = function () {};
    M.useDeferredValue = function (e, t) {
      return I.H.useDeferredValue(e, t);
    };
    M.useEffect = function (e, t) {
      return I.H.useEffect(e, t);
    };
    M.useEffectEvent = function (e) {
      return I.H.useEffectEvent(e);
    };
    M.useId = function () {
      return I.H.useId();
    };
    M.useImperativeHandle = function (e, t, a) {
      return I.H.useImperativeHandle(e, t, a);
    };
    M.useInsertionEffect = function (e, t) {
      return I.H.useInsertionEffect(e, t);
    };
    M.useLayoutEffect = function (e, t) {
      return I.H.useLayoutEffect(e, t);
    };
    M.useMemo = function (e, t) {
      return I.H.useMemo(e, t);
    };
    M.useOptimistic = function (e, t) {
      return I.H.useOptimistic(e, t);
    };
    M.useReducer = function (e, t, a) {
      return I.H.useReducer(e, t, a);
    };
    M.useRef = function (e) {
      return I.H.useRef(e);
    };
    M.useState = function (e) {
      return I.H.useState(e);
    };
    M.useSyncExternalStore = function (e, t, a) {
      return I.H.useSyncExternalStore(e, t, a);
    };
    M.useTransition = function () {
      return I.H.useTransition();
    };
    M.version = '19.2.0';
  });
  var k = Nt(($1, Bs) => {
    'use strict';
    Bs.exports = js();
  });
  var Js = Nt((le) => {
    'use strict';
    function mu(e, t) {
      var a = e.length;
      e.push(t);
      e: for (; 0 < a; ) {
        var l = (a - 1) >>> 1,
          n = e[l];
        if (0 < sr(n, t)) ((e[l] = t), (e[a] = n), (a = l));
        else break e;
      }
    }
    function yt(e) {
      return e.length === 0 ? null : e[0];
    }
    function dr(e) {
      if (e.length === 0) return null;
      var t = e[0],
        a = e.pop();
      if (a !== t) {
        e[0] = a;
        e: for (var l = 0, n = e.length, r = n >>> 1; l < r; ) {
          var i = 2 * (l + 1) - 1,
            u = e[i],
            o = i + 1,
            c = e[o];
          if (0 > sr(u, a))
            o < n && 0 > sr(c, u)
              ? ((e[l] = c), (e[o] = a), (l = o))
              : ((e[l] = u), (e[i] = a), (l = i));
          else if (o < n && 0 > sr(c, a)) ((e[l] = c), (e[o] = a), (l = o));
          else break e;
        }
      }
      return t;
    }
    function sr(e, t) {
      var a = e.sortIndex - t.sortIndex;
      return a !== 0 ? a : e.id - t.id;
    }
    le.unstable_now = void 0;
    typeof performance == 'object' && typeof performance.now == 'function'
      ? ((Ys = performance),
        (le.unstable_now = function () {
          return Ys.now();
        }))
      : ((su = Date),
        (ks = su.now()),
        (le.unstable_now = function () {
          return su.now() - ks;
        }));
    var Ys,
      su,
      ks,
      Dt = [],
      Pt = [],
      _v = 1,
      Pe = null,
      Te = 3,
      hu = !1,
      tn = !1,
      an = !1,
      yu = !1,
      Xs = typeof setTimeout == 'function' ? setTimeout : null,
      Vs = typeof clearTimeout == 'function' ? clearTimeout : null,
      qs = typeof setImmediate < 'u' ? setImmediate : null;
    function fr(e) {
      for (var t = yt(Pt); t !== null; ) {
        if (t.callback === null) dr(Pt);
        else if (t.startTime <= e)
          (dr(Pt), (t.sortIndex = t.expirationTime), mu(Dt, t));
        else break;
        t = yt(Pt);
      }
    }
    function vu(e) {
      if (((an = !1), fr(e), !tn))
        if (yt(Dt) !== null) ((tn = !0), tl || ((tl = !0), el()));
        else {
          var t = yt(Pt);
          t !== null && pu(vu, t.startTime - e);
        }
    }
    var tl = !1,
      ln = -1,
      Qs = 5,
      Zs = -1;
    function Ks() {
      return yu ? !0 : !(le.unstable_now() - Zs < Qs);
    }
    function fu() {
      if (((yu = !1), tl)) {
        var e = le.unstable_now();
        Zs = e;
        var t = !0;
        try {
          e: {
            ((tn = !1), an && ((an = !1), Vs(ln), (ln = -1)), (hu = !0));
            var a = Te;
            try {
              t: {
                for (
                  fr(e), Pe = yt(Dt);
                  Pe !== null && !(Pe.expirationTime > e && Ks());

                ) {
                  var l = Pe.callback;
                  if (typeof l == 'function') {
                    ((Pe.callback = null), (Te = Pe.priorityLevel));
                    var n = l(Pe.expirationTime <= e);
                    if (((e = le.unstable_now()), typeof n == 'function')) {
                      ((Pe.callback = n), fr(e), (t = !0));
                      break t;
                    }
                    (Pe === yt(Dt) && dr(Dt), fr(e));
                  } else dr(Dt);
                  Pe = yt(Dt);
                }
                if (Pe !== null) t = !0;
                else {
                  var r = yt(Pt);
                  (r !== null && pu(vu, r.startTime - e), (t = !1));
                }
              }
              break e;
            } finally {
              ((Pe = null), (Te = a), (hu = !1));
            }
            t = void 0;
          }
        } finally {
          t ? el() : (tl = !1);
        }
      }
    }
    var el;
    typeof qs == 'function'
      ? (el = function () {
          qs(fu);
        })
      : typeof MessageChannel < 'u'
        ? ((du = new MessageChannel()),
          (Gs = du.port2),
          (du.port1.onmessage = fu),
          (el = function () {
            Gs.postMessage(null);
          }))
        : (el = function () {
            Xs(fu, 0);
          });
    var du, Gs;
    function pu(e, t) {
      ln = Xs(function () {
        e(le.unstable_now());
      }, t);
    }
    le.unstable_IdlePriority = 5;
    le.unstable_ImmediatePriority = 1;
    le.unstable_LowPriority = 4;
    le.unstable_NormalPriority = 3;
    le.unstable_Profiling = null;
    le.unstable_UserBlockingPriority = 2;
    le.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    le.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (Qs = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    le.unstable_getCurrentPriorityLevel = function () {
      return Te;
    };
    le.unstable_next = function (e) {
      switch (Te) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = Te;
      }
      var a = Te;
      Te = t;
      try {
        return e();
      } finally {
        Te = a;
      }
    };
    le.unstable_requestPaint = function () {
      yu = !0;
    };
    le.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var a = Te;
      Te = e;
      try {
        return t();
      } finally {
        Te = a;
      }
    };
    le.unstable_scheduleCallback = function (e, t, a) {
      var l = le.unstable_now();
      switch (
        (typeof a == 'object' && a !== null
          ? ((a = a.delay), (a = typeof a == 'number' && 0 < a ? l + a : l))
          : (a = l),
        e)
      ) {
        case 1:
          var n = -1;
          break;
        case 2:
          n = 250;
          break;
        case 5:
          n = 1073741823;
          break;
        case 4:
          n = 1e4;
          break;
        default:
          n = 5e3;
      }
      return (
        (n = a + n),
        (e = {
          id: _v++,
          callback: t,
          priorityLevel: e,
          startTime: a,
          expirationTime: n,
          sortIndex: -1,
        }),
        a > l
          ? ((e.sortIndex = a),
            mu(Pt, e),
            yt(Dt) === null &&
              e === yt(Pt) &&
              (an ? (Vs(ln), (ln = -1)) : (an = !0), pu(vu, a - l)))
          : ((e.sortIndex = n),
            mu(Dt, e),
            tn || hu || ((tn = !0), tl || ((tl = !0), el()))),
        e
      );
    };
    le.unstable_shouldYield = Ks;
    le.unstable_wrapCallback = function (e) {
      var t = Te;
      return function () {
        var a = Te;
        Te = t;
        try {
          return e.apply(this, arguments);
        } finally {
          Te = a;
        }
      };
    };
  });
  var $s = Nt((W1, Fs) => {
    'use strict';
    Fs.exports = Js();
  });
  var Ws = Nt((De) => {
    'use strict';
    var Lv = k();
    function Ps(e) {
      var t = 'https://react.dev/errors/' + e;
      if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
          t += '&args[]=' + encodeURIComponent(arguments[a]);
      }
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function Wt() {}
    var Ne = {
        d: {
          f: Wt,
          r: function () {
            throw Error(Ps(522));
          },
          D: Wt,
          C: Wt,
          L: Wt,
          m: Wt,
          X: Wt,
          S: Wt,
          M: Wt,
        },
        p: 0,
        findDOMNode: null,
      },
      Uv = Symbol.for('react.portal');
    function Hv(e, t, a) {
      var l =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Uv,
        key: l == null ? null : '' + l,
        children: e,
        containerInfo: t,
        implementation: a,
      };
    }
    var nn = Lv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function mr(e, t) {
      if (e === 'font') return '';
      if (typeof t == 'string') return t === 'use-credentials' ? t : '';
    }
    De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ne;
    De.createPortal = function (e, t) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
        throw Error(Ps(299));
      return Hv(e, t, null, a);
    };
    De.flushSync = function (e) {
      var t = nn.T,
        a = Ne.p;
      try {
        if (((nn.T = null), (Ne.p = 2), e)) return e();
      } finally {
        ((nn.T = t), (Ne.p = a), Ne.d.f());
      }
    };
    De.preconnect = function (e, t) {
      typeof e == 'string' &&
        (t
          ? ((t = t.crossOrigin),
            (t =
              typeof t == 'string'
                ? t === 'use-credentials'
                  ? t
                  : ''
                : void 0))
          : (t = null),
        Ne.d.C(e, t));
    };
    De.prefetchDNS = function (e) {
      typeof e == 'string' && Ne.d.D(e);
    };
    De.preinit = function (e, t) {
      if (typeof e == 'string' && t && typeof t.as == 'string') {
        var a = t.as,
          l = mr(a, t.crossOrigin),
          n = typeof t.integrity == 'string' ? t.integrity : void 0,
          r = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0;
        a === 'style'
          ? Ne.d.S(e, typeof t.precedence == 'string' ? t.precedence : void 0, {
              crossOrigin: l,
              integrity: n,
              fetchPriority: r,
            })
          : a === 'script' &&
            Ne.d.X(e, {
              crossOrigin: l,
              integrity: n,
              fetchPriority: r,
              nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
            });
      }
    };
    De.preinitModule = function (e, t) {
      if (typeof e == 'string')
        if (typeof t == 'object' && t !== null) {
          if (t.as == null || t.as === 'script') {
            var a = mr(t.as, t.crossOrigin);
            Ne.d.M(e, {
              crossOrigin: a,
              integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
              nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
            });
          }
        } else t == null && Ne.d.M(e);
    };
    De.preload = function (e, t) {
      if (
        typeof e == 'string' &&
        typeof t == 'object' &&
        t !== null &&
        typeof t.as == 'string'
      ) {
        var a = t.as,
          l = mr(a, t.crossOrigin);
        Ne.d.L(e, a, {
          crossOrigin: l,
          integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
          type: typeof t.type == 'string' ? t.type : void 0,
          fetchPriority:
            typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0,
          referrerPolicy:
            typeof t.referrerPolicy == 'string' ? t.referrerPolicy : void 0,
          imageSrcSet:
            typeof t.imageSrcSet == 'string' ? t.imageSrcSet : void 0,
          imageSizes: typeof t.imageSizes == 'string' ? t.imageSizes : void 0,
          media: typeof t.media == 'string' ? t.media : void 0,
        });
      }
    };
    De.preloadModule = function (e, t) {
      if (typeof e == 'string')
        if (t) {
          var a = mr(t.as, t.crossOrigin);
          Ne.d.m(e, {
            as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
            crossOrigin: a,
            integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
          });
        } else Ne.d.m(e);
    };
    De.requestFormReset = function (e) {
      Ne.d.r(e);
    };
    De.unstable_batchedUpdates = function (e, t) {
      return e(t);
    };
    De.useFormState = function (e, t, a) {
      return nn.H.useFormState(e, t, a);
    };
    De.useFormStatus = function () {
      return nn.H.useHostTransitionStatus();
    };
    De.version = '19.2.0';
  });
  var tf = Nt((eS, ef) => {
    'use strict';
    function Is() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Is);
        } catch (e) {
          console.error(e);
        }
    }
    (Is(), (ef.exports = Ws()));
  });
  var hy = Nt((Bi) => {
    'use strict';
    var ve = $s(),
      Dd = k(),
      jv = tf();
    function g(e) {
      var t = 'https://react.dev/errors/' + e;
      if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
          t += '&args[]=' + encodeURIComponent(arguments[a]);
      }
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function Od(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Qn(e) {
      var t = e,
        a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Cd(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Md(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function af(e) {
      if (Qn(e) !== e) throw Error(g(188));
    }
    function Bv(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Qn(e)), t === null)) throw Error(g(188));
        return t !== e ? null : e;
      }
      for (var a = e, l = t; ; ) {
        var n = a.return;
        if (n === null) break;
        var r = n.alternate;
        if (r === null) {
          if (((l = n.return), l !== null)) {
            a = l;
            continue;
          }
          break;
        }
        if (n.child === r.child) {
          for (r = n.child; r; ) {
            if (r === a) return (af(n), e);
            if (r === l) return (af(n), t);
            r = r.sibling;
          }
          throw Error(g(188));
        }
        if (a.return !== l.return) ((a = n), (l = r));
        else {
          for (var i = !1, u = n.child; u; ) {
            if (u === a) {
              ((i = !0), (a = n), (l = r));
              break;
            }
            if (u === l) {
              ((i = !0), (l = n), (a = r));
              break;
            }
            u = u.sibling;
          }
          if (!i) {
            for (u = r.child; u; ) {
              if (u === a) {
                ((i = !0), (a = r), (l = n));
                break;
              }
              if (u === l) {
                ((i = !0), (l = r), (a = n));
                break;
              }
              u = u.sibling;
            }
            if (!i) throw Error(g(189));
          }
        }
        if (a.alternate !== l) throw Error(g(190));
      }
      if (a.tag !== 3) throw Error(g(188));
      return a.stateNode.current === a ? e : t;
    }
    function zd(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = zd(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var ae = Object.assign,
      Yv = Symbol.for('react.element'),
      hr = Symbol.for('react.transitional.element'),
      mn = Symbol.for('react.portal'),
      ul = Symbol.for('react.fragment'),
      _d = Symbol.for('react.strict_mode'),
      Pu = Symbol.for('react.profiler'),
      Ld = Symbol.for('react.consumer'),
      Ht = Symbol.for('react.context'),
      Ko = Symbol.for('react.forward_ref'),
      Wu = Symbol.for('react.suspense'),
      Iu = Symbol.for('react.suspense_list'),
      Jo = Symbol.for('react.memo'),
      It = Symbol.for('react.lazy');
    Symbol.for('react.scope');
    var eo = Symbol.for('react.activity');
    Symbol.for('react.legacy_hidden');
    Symbol.for('react.tracing_marker');
    var kv = Symbol.for('react.memo_cache_sentinel');
    Symbol.for('react.view_transition');
    var lf = Symbol.iterator;
    function rn(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (lf && e[lf]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
    }
    var qv = Symbol.for('react.client.reference');
    function to(e) {
      if (e == null) return null;
      if (typeof e == 'function')
        return e.$$typeof === qv ? null : e.displayName || e.name || null;
      if (typeof e == 'string') return e;
      switch (e) {
        case ul:
          return 'Fragment';
        case Pu:
          return 'Profiler';
        case _d:
          return 'StrictMode';
        case Wu:
          return 'Suspense';
        case Iu:
          return 'SuspenseList';
        case eo:
          return 'Activity';
      }
      if (typeof e == 'object')
        switch (e.$$typeof) {
          case mn:
            return 'Portal';
          case Ht:
            return e.displayName || 'Context';
          case Ld:
            return (e._context.displayName || 'Context') + '.Consumer';
          case Ko:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ''),
                (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
              e
            );
          case Jo:
            return (
              (t = e.displayName || null),
              t !== null ? t : to(e.type) || 'Memo'
            );
          case It:
            ((t = e._payload), (e = e._init));
            try {
              return to(e(t));
            } catch {}
        }
      return null;
    }
    var hn = Array.isArray,
      D = Dd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      G = jv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      za = { pending: !1, data: null, method: null, action: null },
      ao = [],
      ol = -1;
    function St(e) {
      return { current: e };
    }
    function be(e) {
      0 > ol || ((e.current = ao[ol]), (ao[ol] = null), ol--);
    }
    function P(e, t) {
      (ol++, (ao[ol] = e.current), (e.current = t));
    }
    var bt = St(null),
      Mn = St(null),
      sa = St(null),
      Kr = St(null);
    function Jr(e, t) {
      switch ((P(sa, t), P(Mn, e), P(bt, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? fd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = fd(t)), (e = ey(t, e)));
          else
            switch (e) {
              case 'svg':
                e = 1;
                break;
              case 'math':
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (be(bt), P(bt, e));
    }
    function Al() {
      (be(bt), be(Mn), be(sa));
    }
    function lo(e) {
      e.memoizedState !== null && P(Kr, e);
      var t = bt.current,
        a = ey(t, e.type);
      t !== a && (P(Mn, e), P(bt, a));
    }
    function Fr(e) {
      (Mn.current === e && (be(bt), be(Mn)),
        Kr.current === e && (be(Kr), (Gn._currentValue = za)));
    }
    var gu, nf;
    function Da(e) {
      if (gu === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          ((gu = (t && t[1]) || ''),
            (nf =
              -1 <
              a.stack.indexOf(`
    at`)
                ? ' (<anonymous>)'
                : -1 < a.stack.indexOf('@')
                  ? '@unknown:0:0'
                  : ''));
        }
      return (
        `
` +
        gu +
        e +
        nf
      );
    }
    var bu = !1;
    function Su(e, t) {
      if (!e || bu) return '';
      bu = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var l = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var m = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(m.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(m, []);
                  } catch (v) {
                    var h = v;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (v) {
                    h = v;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  h = v;
                }
                (m = e()) &&
                  typeof m.catch == 'function' &&
                  m.catch(function () {});
              }
            } catch (v) {
              if (v && h && typeof v.stack == 'string')
                return [v.stack, h.stack];
            }
            return [null, null];
          },
        };
        l.DetermineComponentFrameRoot.displayName =
          'DetermineComponentFrameRoot';
        var n = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          'name'
        );
        n &&
          n.configurable &&
          Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
            value: 'DetermineComponentFrameRoot',
          });
        var r = l.DetermineComponentFrameRoot(),
          i = r[0],
          u = r[1];
        if (i && u) {
          var o = i.split(`
`),
            c = u.split(`
`);
          for (
            n = l = 0;
            l < o.length && !o[l].includes('DetermineComponentFrameRoot');

          )
            l++;
          for (
            ;
            n < c.length && !c[n].includes('DetermineComponentFrameRoot');

          )
            n++;
          if (l === o.length || n === c.length)
            for (
              l = o.length - 1, n = c.length - 1;
              1 <= l && 0 <= n && o[l] !== c[n];

            )
              n--;
          for (; 1 <= l && 0 <= n; l--, n--)
            if (o[l] !== c[n]) {
              if (l !== 1 || n !== 1)
                do
                  if ((l--, n--, 0 > n || o[l] !== c[n])) {
                    var d =
                      `
` + o[l].replace(' at new ', ' at ');
                    return (
                      e.displayName &&
                        d.includes('<anonymous>') &&
                        (d = d.replace('<anonymous>', e.displayName)),
                      d
                    );
                  }
                while (1 <= l && 0 <= n);
              break;
            }
        }
      } finally {
        ((bu = !1), (Error.prepareStackTrace = a));
      }
      return (a = e ? e.displayName || e.name : '') ? Da(a) : '';
    }
    function Gv(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Da(e.type);
        case 16:
          return Da('Lazy');
        case 13:
          return e.child !== t && t !== null
            ? Da('Suspense Fallback')
            : Da('Suspense');
        case 19:
          return Da('SuspenseList');
        case 0:
        case 15:
          return Su(e.type, !1);
        case 11:
          return Su(e.type.render, !1);
        case 1:
          return Su(e.type, !0);
        case 31:
          return Da('Activity');
        default:
          return '';
      }
    }
    function rf(e) {
      try {
        var t = '',
          a = null;
        do ((t += Gv(e, a)), (a = e), (e = e.return));
        while (e);
        return t;
      } catch (l) {
        return (
          `
Error generating stack: ` +
          l.message +
          `
` +
          l.stack
        );
      }
    }
    var no = Object.prototype.hasOwnProperty,
      Fo = ve.unstable_scheduleCallback,
      Eu = ve.unstable_cancelCallback,
      Xv = ve.unstable_shouldYield,
      Vv = ve.unstable_requestPaint,
      Ve = ve.unstable_now,
      Qv = ve.unstable_getCurrentPriorityLevel,
      Ud = ve.unstable_ImmediatePriority,
      Hd = ve.unstable_UserBlockingPriority,
      $r = ve.unstable_NormalPriority,
      Zv = ve.unstable_LowPriority,
      jd = ve.unstable_IdlePriority,
      Kv = ve.log,
      Jv = ve.unstable_setDisableYieldValue,
      Zn = null,
      Qe = null;
    function ra(e) {
      if (
        (typeof Kv == 'function' && Jv(e),
        Qe && typeof Qe.setStrictMode == 'function')
      )
        try {
          Qe.setStrictMode(Zn, e);
        } catch {}
    }
    var Ze = Math.clz32 ? Math.clz32 : Pv,
      Fv = Math.log,
      $v = Math.LN2;
    function Pv(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fv(e) / $v) | 0)) | 0);
    }
    var yr = 256,
      vr = 262144,
      pr = 4194304;
    function Oa(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ri(e, t, a) {
      var l = e.pendingLanes;
      if (l === 0) return 0;
      var n = 0,
        r = e.suspendedLanes,
        i = e.pingedLanes;
      e = e.warmLanes;
      var u = l & 134217727;
      return (
        u !== 0
          ? ((l = u & ~r),
            l !== 0
              ? (n = Oa(l))
              : ((i &= u),
                i !== 0
                  ? (n = Oa(i))
                  : a || ((a = u & ~e), a !== 0 && (n = Oa(a)))))
          : ((u = l & ~r),
            u !== 0
              ? (n = Oa(u))
              : i !== 0
                ? (n = Oa(i))
                : a || ((a = l & ~e), a !== 0 && (n = Oa(a)))),
        n === 0
          ? 0
          : t !== 0 &&
              t !== n &&
              (t & r) === 0 &&
              ((r = n & -n),
              (a = t & -t),
              r >= a || (r === 32 && (a & 4194048) !== 0))
            ? t
            : n
      );
    }
    function Kn(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Wv(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Bd() {
      var e = pr;
      return ((pr <<= 1), (pr & 62914560) === 0 && (pr = 4194304), e);
    }
    function Ru(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Jn(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Iv(e, t, a, l, n, r) {
      var i = e.pendingLanes;
      ((e.pendingLanes = a),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= a),
        (e.entangledLanes &= a),
        (e.errorRecoveryDisabledLanes &= a),
        (e.shellSuspendCounter = 0));
      var u = e.entanglements,
        o = e.expirationTimes,
        c = e.hiddenUpdates;
      for (a = i & ~a; 0 < a; ) {
        var d = 31 - Ze(a),
          m = 1 << d;
        ((u[d] = 0), (o[d] = -1));
        var h = c[d];
        if (h !== null)
          for (c[d] = null, d = 0; d < h.length; d++) {
            var v = h[d];
            v !== null && (v.lane &= -536870913);
          }
        a &= ~m;
      }
      (l !== 0 && Yd(e, l, 0),
        r !== 0 &&
          n === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= r & ~(i & ~t)));
    }
    function Yd(e, t, a) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var l = 31 - Ze(t);
      ((e.entangledLanes |= t),
        (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 261930)));
    }
    function kd(e, t) {
      var a = (e.entangledLanes |= t);
      for (e = e.entanglements; a; ) {
        var l = 31 - Ze(a),
          n = 1 << l;
        ((n & t) | (e[l] & t) && (e[l] |= t), (a &= ~n));
      }
    }
    function qd(e, t) {
      var a = t & -t;
      return (
        (a = (a & 42) !== 0 ? 1 : $o(a)),
        (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
      );
    }
    function $o(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Po(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function Gd() {
      var e = G.p;
      return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : fy(e.type));
    }
    function uf(e, t) {
      var a = G.p;
      try {
        return ((G.p = e), t());
      } finally {
        G.p = a;
      }
    }
    var wa = Math.random().toString(36).slice(2),
      Ee = '__reactFiber$' + wa,
      He = '__reactProps$' + wa,
      jl = '__reactContainer$' + wa,
      ro = '__reactEvents$' + wa,
      ep = '__reactListeners$' + wa,
      tp = '__reactHandles$' + wa,
      of = '__reactResources$' + wa,
      Fn = '__reactMarker$' + wa;
    function Wo(e) {
      (delete e[Ee], delete e[He], delete e[ro], delete e[ep], delete e[tp]);
    }
    function cl(e) {
      var t = e[Ee];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if ((t = a[jl] || a[Ee])) {
          if (
            ((a = t.alternate),
            t.child !== null || (a !== null && a.child !== null))
          )
            for (e = vd(e); e !== null; ) {
              if ((a = e[Ee])) return a;
              e = vd(e);
            }
          return t;
        }
        ((e = a), (a = e.parentNode));
      }
      return null;
    }
    function Bl(e) {
      if ((e = e[Ee] || e[jl])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function yn(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(g(33));
    }
    function bl(e) {
      var t = e[of];
      return (
        t ||
          (t = e[of] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function ge(e) {
      e[Fn] = !0;
    }
    var Xd = new Set(),
      Vd = {};
    function Ga(e, t) {
      (Nl(e, t), Nl(e + 'Capture', t));
    }
    function Nl(e, t) {
      for (Vd[e] = t, e = 0; e < t.length; e++) Xd.add(t[e]);
    }
    var ap = RegExp(
        '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
      ),
      cf = {},
      sf = {};
    function lp(e) {
      return no.call(sf, e)
        ? !0
        : no.call(cf, e)
          ? !1
          : ap.test(e)
            ? (sf[e] = !0)
            : ((cf[e] = !0), !1);
    }
    function zr(e, t, a) {
      if (lp(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case 'undefined':
            case 'function':
            case 'symbol':
              e.removeAttribute(t);
              return;
            case 'boolean':
              var l = t.toLowerCase().slice(0, 5);
              if (l !== 'data-' && l !== 'aria-') {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, '' + a);
        }
    }
    function gr(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, '' + a);
      }
    }
    function Ot(e, t, a, l) {
      if (l === null) e.removeAttribute(a);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            e.removeAttribute(a);
            return;
        }
        e.setAttributeNS(t, a, '' + l);
      }
    }
    function Ie(e) {
      switch (typeof e) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
          return e;
        case 'object':
          return e;
        default:
          return '';
      }
    }
    function Qd(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
      );
    }
    function np(e, t, a) {
      var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        typeof l < 'u' &&
        typeof l.get == 'function' &&
        typeof l.set == 'function'
      ) {
        var n = l.get,
          r = l.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return n.call(this);
            },
            set: function (i) {
              ((a = '' + i), r.call(this, i));
            },
          }),
          Object.defineProperty(e, t, { enumerable: l.enumerable }),
          {
            getValue: function () {
              return a;
            },
            setValue: function (i) {
              a = '' + i;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function io(e) {
      if (!e._valueTracker) {
        var t = Qd(e) ? 'checked' : 'value';
        e._valueTracker = np(e, t, '' + e[t]);
      }
    }
    function Zd(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(),
        l = '';
      return (
        e && (l = Qd(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = l),
        e !== a ? (t.setValue(e), !0) : !1
      );
    }
    function Pr(e) {
      if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var rp = /[\n"\\]/g;
    function at(e) {
      return e.replace(rp, function (t) {
        return '\\' + t.charCodeAt(0).toString(16) + ' ';
      });
    }
    function uo(e, t, a, l, n, r, i, u) {
      ((e.name = ''),
        i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean'
          ? (e.type = i)
          : e.removeAttribute('type'),
        t != null
          ? i === 'number'
            ? ((t === 0 && e.value === '') || e.value != t) &&
              (e.value = '' + Ie(t))
            : e.value !== '' + Ie(t) && (e.value = '' + Ie(t))
          : (i !== 'submit' && i !== 'reset') || e.removeAttribute('value'),
        t != null
          ? oo(e, i, Ie(t))
          : a != null
            ? oo(e, i, Ie(a))
            : l != null && e.removeAttribute('value'),
        n == null && r != null && (e.defaultChecked = !!r),
        n != null &&
          (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
        u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean'
          ? (e.name = '' + Ie(u))
          : e.removeAttribute('name'));
    }
    function Kd(e, t, a, l, n, r, i, u) {
      if (
        (r != null &&
          typeof r != 'function' &&
          typeof r != 'symbol' &&
          typeof r != 'boolean' &&
          (e.type = r),
        t != null || a != null)
      ) {
        if (!((r !== 'submit' && r !== 'reset') || t != null)) {
          io(e);
          return;
        }
        ((a = a != null ? '' + Ie(a) : ''),
          (t = t != null ? '' + Ie(t) : a),
          u || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((l = l ?? n),
        (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
        (e.checked = u ? e.checked : !!l),
        (e.defaultChecked = !!l),
        i != null &&
          typeof i != 'function' &&
          typeof i != 'symbol' &&
          typeof i != 'boolean' &&
          (e.name = i),
        io(e));
    }
    function oo(e, t, a) {
      (t === 'number' && Pr(e.ownerDocument) === e) ||
        e.defaultValue === '' + a ||
        (e.defaultValue = '' + a);
    }
    function Sl(e, t, a, l) {
      if (((e = e.options), t)) {
        t = {};
        for (var n = 0; n < a.length; n++) t['$' + a[n]] = !0;
        for (a = 0; a < e.length; a++)
          ((n = t.hasOwnProperty('$' + e[a].value)),
            e[a].selected !== n && (e[a].selected = n),
            n && l && (e[a].defaultSelected = !0));
      } else {
        for (a = '' + Ie(a), t = null, n = 0; n < e.length; n++) {
          if (e[n].value === a) {
            ((e[n].selected = !0), l && (e[n].defaultSelected = !0));
            return;
          }
          t !== null || e[n].disabled || (t = e[n]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Jd(e, t, a) {
      if (
        t != null &&
        ((t = '' + Ie(t)), t !== e.value && (e.value = t), a == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? '' + Ie(a) : '';
    }
    function Fd(e, t, a, l) {
      if (t == null) {
        if (l != null) {
          if (a != null) throw Error(g(92));
          if (hn(l)) {
            if (1 < l.length) throw Error(g(93));
            l = l[0];
          }
          a = l;
        }
        (a == null && (a = ''), (t = a));
      }
      ((a = Ie(t)),
        (e.defaultValue = a),
        (l = e.textContent),
        l === a && l !== '' && l !== null && (e.value = l),
        io(e));
    }
    function Dl(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var ip = new Set(
      'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
        ' '
      )
    );
    function ff(e, t, a) {
      var l = t.indexOf('--') === 0;
      a == null || typeof a == 'boolean' || a === ''
        ? l
          ? e.setProperty(t, '')
          : t === 'float'
            ? (e.cssFloat = '')
            : (e[t] = '')
        : l
          ? e.setProperty(t, a)
          : typeof a != 'number' || a === 0 || ip.has(t)
            ? t === 'float'
              ? (e.cssFloat = a)
              : (e[t] = ('' + a).trim())
            : (e[t] = a + 'px');
    }
    function $d(e, t, a) {
      if (t != null && typeof t != 'object') throw Error(g(62));
      if (((e = e.style), a != null)) {
        for (var l in a)
          !a.hasOwnProperty(l) ||
            (t != null && t.hasOwnProperty(l)) ||
            (l.indexOf('--') === 0
              ? e.setProperty(l, '')
              : l === 'float'
                ? (e.cssFloat = '')
                : (e[l] = ''));
        for (var n in t)
          ((l = t[n]), t.hasOwnProperty(n) && a[n] !== l && ff(e, n, l));
      } else for (var r in t) t.hasOwnProperty(r) && ff(e, r, t[r]);
    }
    function Io(e) {
      if (e.indexOf('-') === -1) return !1;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var up = new Map([
        ['acceptCharset', 'accept-charset'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
        ['crossOrigin', 'crossorigin'],
        ['accentHeight', 'accent-height'],
        ['alignmentBaseline', 'alignment-baseline'],
        ['arabicForm', 'arabic-form'],
        ['baselineShift', 'baseline-shift'],
        ['capHeight', 'cap-height'],
        ['clipPath', 'clip-path'],
        ['clipRule', 'clip-rule'],
        ['colorInterpolation', 'color-interpolation'],
        ['colorInterpolationFilters', 'color-interpolation-filters'],
        ['colorProfile', 'color-profile'],
        ['colorRendering', 'color-rendering'],
        ['dominantBaseline', 'dominant-baseline'],
        ['enableBackground', 'enable-background'],
        ['fillOpacity', 'fill-opacity'],
        ['fillRule', 'fill-rule'],
        ['floodColor', 'flood-color'],
        ['floodOpacity', 'flood-opacity'],
        ['fontFamily', 'font-family'],
        ['fontSize', 'font-size'],
        ['fontSizeAdjust', 'font-size-adjust'],
        ['fontStretch', 'font-stretch'],
        ['fontStyle', 'font-style'],
        ['fontVariant', 'font-variant'],
        ['fontWeight', 'font-weight'],
        ['glyphName', 'glyph-name'],
        ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
        ['glyphOrientationVertical', 'glyph-orientation-vertical'],
        ['horizAdvX', 'horiz-adv-x'],
        ['horizOriginX', 'horiz-origin-x'],
        ['imageRendering', 'image-rendering'],
        ['letterSpacing', 'letter-spacing'],
        ['lightingColor', 'lighting-color'],
        ['markerEnd', 'marker-end'],
        ['markerMid', 'marker-mid'],
        ['markerStart', 'marker-start'],
        ['overlinePosition', 'overline-position'],
        ['overlineThickness', 'overline-thickness'],
        ['paintOrder', 'paint-order'],
        ['panose-1', 'panose-1'],
        ['pointerEvents', 'pointer-events'],
        ['renderingIntent', 'rendering-intent'],
        ['shapeRendering', 'shape-rendering'],
        ['stopColor', 'stop-color'],
        ['stopOpacity', 'stop-opacity'],
        ['strikethroughPosition', 'strikethrough-position'],
        ['strikethroughThickness', 'strikethrough-thickness'],
        ['strokeDasharray', 'stroke-dasharray'],
        ['strokeDashoffset', 'stroke-dashoffset'],
        ['strokeLinecap', 'stroke-linecap'],
        ['strokeLinejoin', 'stroke-linejoin'],
        ['strokeMiterlimit', 'stroke-miterlimit'],
        ['strokeOpacity', 'stroke-opacity'],
        ['strokeWidth', 'stroke-width'],
        ['textAnchor', 'text-anchor'],
        ['textDecoration', 'text-decoration'],
        ['textRendering', 'text-rendering'],
        ['transformOrigin', 'transform-origin'],
        ['underlinePosition', 'underline-position'],
        ['underlineThickness', 'underline-thickness'],
        ['unicodeBidi', 'unicode-bidi'],
        ['unicodeRange', 'unicode-range'],
        ['unitsPerEm', 'units-per-em'],
        ['vAlphabetic', 'v-alphabetic'],
        ['vHanging', 'v-hanging'],
        ['vIdeographic', 'v-ideographic'],
        ['vMathematical', 'v-mathematical'],
        ['vectorEffect', 'vector-effect'],
        ['vertAdvY', 'vert-adv-y'],
        ['vertOriginX', 'vert-origin-x'],
        ['vertOriginY', 'vert-origin-y'],
        ['wordSpacing', 'word-spacing'],
        ['writingMode', 'writing-mode'],
        ['xmlnsXlink', 'xmlns:xlink'],
        ['xHeight', 'x-height'],
      ]),
      op =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _r(e) {
      return op.test('' + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    function jt() {}
    var co = null;
    function ec(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var sl = null,
      El = null;
    function df(e) {
      var t = Bl(e);
      if (t && (e = t.stateNode)) {
        var a = e[He] || null;
        e: switch (((e = t.stateNode), t.type)) {
          case 'input':
            if (
              (uo(
                e,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name
              ),
              (t = a.name),
              a.type === 'radio' && t != null)
            ) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (
                a = a.querySelectorAll(
                  'input[name="' + at('' + t) + '"][type="radio"]'
                ),
                  t = 0;
                t < a.length;
                t++
              ) {
                var l = a[t];
                if (l !== e && l.form === e.form) {
                  var n = l[He] || null;
                  if (!n) throw Error(g(90));
                  uo(
                    l,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                ((l = a[t]), l.form === e.form && Zd(l));
            }
            break e;
          case 'textarea':
            Jd(e, a.value, a.defaultValue);
            break e;
          case 'select':
            ((t = a.value), t != null && Sl(e, !!a.multiple, t, !1));
        }
      }
    }
    var wu = !1;
    function Pd(e, t, a) {
      if (wu) return e(t, a);
      wu = !0;
      try {
        var l = e(t);
        return l;
      } finally {
        if (
          ((wu = !1),
          (sl !== null || El !== null) &&
            (Li(), sl && ((t = sl), (e = El), (El = sl = null), df(t), e)))
        )
          for (t = 0; t < e.length; t++) df(e[t]);
      }
    }
    function zn(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var l = a[He] || null;
      if (l === null) return null;
      a = l[t];
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          ((l = !l.disabled) ||
            ((e = e.type),
            (l = !(
              e === 'button' ||
              e === 'input' ||
              e === 'select' ||
              e === 'textarea'
            ))),
            (e = !l));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != 'function') throw Error(g(231, t, typeof a));
      return a;
    }
    var Gt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
      ),
      so = !1;
    if (Gt)
      try {
        ((al = {}),
          Object.defineProperty(al, 'passive', {
            get: function () {
              so = !0;
            },
          }),
          window.addEventListener('test', al, al),
          window.removeEventListener('test', al, al));
      } catch {
        so = !1;
      }
    var al,
      ia = null,
      tc = null,
      Lr = null;
    function Wd() {
      if (Lr) return Lr;
      var e,
        t = tc,
        a = t.length,
        l,
        n = 'value' in ia ? ia.value : ia.textContent,
        r = n.length;
      for (e = 0; e < a && t[e] === n[e]; e++);
      var i = a - e;
      for (l = 1; l <= i && t[a - l] === n[r - l]; l++);
      return (Lr = n.slice(e, 1 < l ? 1 - l : void 0));
    }
    function Ur(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function br() {
      return !0;
    }
    function mf() {
      return !1;
    }
    function je(e) {
      function t(a, l, n, r, i) {
        ((this._reactName = a),
          (this._targetInst = n),
          (this.type = l),
          (this.nativeEvent = r),
          (this.target = i),
          (this.currentTarget = null));
        for (var u in e)
          e.hasOwnProperty(u) && ((a = e[u]), (this[u] = a ? a(r) : r[u]));
        return (
          (this.isDefaultPrevented = (
            r.defaultPrevented != null
              ? r.defaultPrevented
              : r.returnValue === !1
          )
            ? br
            : mf),
          (this.isPropagationStopped = mf),
          this
        );
      }
      return (
        ae(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a &&
              (a.preventDefault
                ? a.preventDefault()
                : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
              (this.isDefaultPrevented = br));
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a &&
              (a.stopPropagation
                ? a.stopPropagation()
                : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
              (this.isPropagationStopped = br));
          },
          persist: function () {},
          isPersistent: br,
        }),
        t
      );
    }
    var Xa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      wi = je(Xa),
      $n = ae({}, Xa, { view: 0, detail: 0 }),
      cp = je($n),
      xu,
      Tu,
      un,
      xi = ae({}, $n, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ac,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== un &&
                (un && e.type === 'mousemove'
                  ? ((xu = e.screenX - un.screenX),
                    (Tu = e.screenY - un.screenY))
                  : (Tu = xu = 0),
                (un = e)),
              xu);
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : Tu;
        },
      }),
      hf = je(xi),
      sp = ae({}, xi, { dataTransfer: 0 }),
      fp = je(sp),
      dp = ae({}, $n, { relatedTarget: 0 }),
      Au = je(dp),
      mp = ae({}, Xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      hp = je(mp),
      yp = ae({}, Xa, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
      }),
      vp = je(yp),
      pp = ae({}, Xa, { data: 0 }),
      yf = je(pp),
      gp = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      bp = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      Sp = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function Ep(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Sp[e])
          ? !!t[e]
          : !1;
    }
    function ac() {
      return Ep;
    }
    var Rp = ae({}, $n, {
        key: function (e) {
          if (e.key) {
            var t = gp[e.key] || e.key;
            if (t !== 'Unidentified') return t;
          }
          return e.type === 'keypress'
            ? ((e = Ur(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
            : e.type === 'keydown' || e.type === 'keyup'
              ? bp[e.keyCode] || 'Unidentified'
              : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ac,
        charCode: function (e) {
          return e.type === 'keypress' ? Ur(e) : 0;
        },
        keyCode: function (e) {
          return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === 'keypress'
            ? Ur(e)
            : e.type === 'keydown' || e.type === 'keyup'
              ? e.keyCode
              : 0;
        },
      }),
      wp = je(Rp),
      xp = ae({}, xi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      vf = je(xp),
      Tp = ae({}, $n, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ac,
      }),
      Ap = je(Tp),
      Np = ae({}, Xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Dp = je(Np),
      Op = ae({}, xi, {
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Cp = je(Op),
      Mp = ae({}, Xa, { newState: 0, oldState: 0 }),
      zp = je(Mp),
      _p = [9, 13, 27, 32],
      lc = Gt && 'CompositionEvent' in window,
      gn = null;
    Gt && 'documentMode' in document && (gn = document.documentMode);
    var Lp = Gt && 'TextEvent' in window && !gn,
      Id = Gt && (!lc || (gn && 8 < gn && 11 >= gn)),
      pf = ' ',
      gf = !1;
    function em(e, t) {
      switch (e) {
        case 'keyup':
          return _p.indexOf(t.keyCode) !== -1;
        case 'keydown':
          return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function tm(e) {
      return (
        (e = e.detail),
        typeof e == 'object' && 'data' in e ? e.data : null
      );
    }
    var fl = !1;
    function Up(e, t) {
      switch (e) {
        case 'compositionend':
          return tm(t);
        case 'keypress':
          return t.which !== 32 ? null : ((gf = !0), pf);
        case 'textInput':
          return ((e = t.data), e === pf && gf ? null : e);
        default:
          return null;
      }
    }
    function Hp(e, t) {
      if (fl)
        return e === 'compositionend' || (!lc && em(e, t))
          ? ((e = Wd()), (Lr = tc = ia = null), (fl = !1), e)
          : null;
      switch (e) {
        case 'paste':
          return null;
        case 'keypress':
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case 'compositionend':
          return Id && t.locale !== 'ko' ? null : t.data;
        default:
          return null;
      }
    }
    var jp = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function bf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === 'input' ? !!jp[e.type] : t === 'textarea';
    }
    function am(e, t, a, l) {
      (sl ? (El ? El.push(l) : (El = [l])) : (sl = l),
        (t = yi(t, 'onChange')),
        0 < t.length &&
          ((a = new wi('onChange', 'change', null, a, l)),
          e.push({ event: a, listeners: t })));
    }
    var bn = null,
      _n = null;
    function Bp(e) {
      Ph(e, 0);
    }
    function Ti(e) {
      var t = yn(e);
      if (Zd(t)) return e;
    }
    function Sf(e, t) {
      if (e === 'change') return t;
    }
    var lm = !1;
    Gt &&
      (Gt
        ? ((Er = 'oninput' in document),
          Er ||
            ((Nu = document.createElement('div')),
            Nu.setAttribute('oninput', 'return;'),
            (Er = typeof Nu.oninput == 'function')),
          (Sr = Er))
        : (Sr = !1),
      (lm = Sr && (!document.documentMode || 9 < document.documentMode)));
    var Sr, Er, Nu;
    function Ef() {
      bn && (bn.detachEvent('onpropertychange', nm), (_n = bn = null));
    }
    function nm(e) {
      if (e.propertyName === 'value' && Ti(_n)) {
        var t = [];
        (am(t, _n, e, ec(e)), Pd(Bp, t));
      }
    }
    function Yp(e, t, a) {
      e === 'focusin'
        ? (Ef(), (bn = t), (_n = a), bn.attachEvent('onpropertychange', nm))
        : e === 'focusout' && Ef();
    }
    function kp(e) {
      if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return Ti(_n);
    }
    function qp(e, t) {
      if (e === 'click') return Ti(t);
    }
    function Gp(e, t) {
      if (e === 'input' || e === 'change') return Ti(t);
    }
    function Xp(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Je = typeof Object.is == 'function' ? Object.is : Xp;
    function Ln(e, t) {
      if (Je(e, t)) return !0;
      if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
      )
        return !1;
      var a = Object.keys(e),
        l = Object.keys(t);
      if (a.length !== l.length) return !1;
      for (l = 0; l < a.length; l++) {
        var n = a[l];
        if (!no.call(t, n) || !Je(e[n], t[n])) return !1;
      }
      return !0;
    }
    function Rf(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function wf(e, t) {
      var a = Rf(e);
      e = 0;
      for (var l; a; ) {
        if (a.nodeType === 3) {
          if (((l = e + a.textContent.length), e <= t && l >= t))
            return { node: a, offset: t - e };
          e = l;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Rf(a);
      }
    }
    function rm(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? rm(e, t.parentNode)
              : 'contains' in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function im(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Pr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == 'string';
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Pr(e.document);
      }
      return t;
    }
    function nc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === 'input' &&
          (e.type === 'text' ||
            e.type === 'search' ||
            e.type === 'tel' ||
            e.type === 'url' ||
            e.type === 'password')) ||
          t === 'textarea' ||
          e.contentEditable === 'true')
      );
    }
    var Vp = Gt && 'documentMode' in document && 11 >= document.documentMode,
      dl = null,
      fo = null,
      Sn = null,
      mo = !1;
    function xf(e, t, a) {
      var l =
        a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      mo ||
        dl == null ||
        dl !== Pr(l) ||
        ((l = dl),
        'selectionStart' in l && nc(l)
          ? (l = { start: l.selectionStart, end: l.selectionEnd })
          : ((l = (
              (l.ownerDocument && l.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (l = {
              anchorNode: l.anchorNode,
              anchorOffset: l.anchorOffset,
              focusNode: l.focusNode,
              focusOffset: l.focusOffset,
            })),
        (Sn && Ln(Sn, l)) ||
          ((Sn = l),
          (l = yi(fo, 'onSelect')),
          0 < l.length &&
            ((t = new wi('onSelect', 'select', null, t, a)),
            e.push({ event: t, listeners: l }),
            (t.target = dl))));
    }
    function Na(e, t) {
      var a = {};
      return (
        (a[e.toLowerCase()] = t.toLowerCase()),
        (a['Webkit' + e] = 'webkit' + t),
        (a['Moz' + e] = 'moz' + t),
        a
      );
    }
    var ml = {
        animationend: Na('Animation', 'AnimationEnd'),
        animationiteration: Na('Animation', 'AnimationIteration'),
        animationstart: Na('Animation', 'AnimationStart'),
        transitionrun: Na('Transition', 'TransitionRun'),
        transitionstart: Na('Transition', 'TransitionStart'),
        transitioncancel: Na('Transition', 'TransitionCancel'),
        transitionend: Na('Transition', 'TransitionEnd'),
      },
      Du = {},
      um = {};
    Gt &&
      ((um = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete ml.animationend.animation,
        delete ml.animationiteration.animation,
        delete ml.animationstart.animation),
      'TransitionEvent' in window || delete ml.transitionend.transition);
    function Va(e) {
      if (Du[e]) return Du[e];
      if (!ml[e]) return e;
      var t = ml[e],
        a;
      for (a in t) if (t.hasOwnProperty(a) && a in um) return (Du[e] = t[a]);
      return e;
    }
    var om = Va('animationend'),
      cm = Va('animationiteration'),
      sm = Va('animationstart'),
      Qp = Va('transitionrun'),
      Zp = Va('transitionstart'),
      Kp = Va('transitioncancel'),
      fm = Va('transitionend'),
      dm = new Map(),
      ho =
        'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' '
        );
    ho.push('scrollEnd');
    function mt(e, t) {
      (dm.set(e, t), Ga(t, [e]));
    }
    var Wr =
        typeof reportError == 'function'
          ? reportError
          : function (e) {
              if (
                typeof window == 'object' &&
                typeof window.ErrorEvent == 'function'
              ) {
                var t = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == 'object' &&
                    e !== null &&
                    typeof e.message == 'string'
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == 'object' &&
                typeof process.emit == 'function'
              ) {
                process.emit('uncaughtException', e);
                return;
              }
              console.error(e);
            },
      We = [],
      hl = 0,
      rc = 0;
    function Ai() {
      for (var e = hl, t = (rc = hl = 0); t < e; ) {
        var a = We[t];
        We[t++] = null;
        var l = We[t];
        We[t++] = null;
        var n = We[t];
        We[t++] = null;
        var r = We[t];
        if (((We[t++] = null), l !== null && n !== null)) {
          var i = l.pending;
          (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
            (l.pending = n));
        }
        r !== 0 && mm(a, n, r);
      }
    }
    function Ni(e, t, a, l) {
      ((We[hl++] = e),
        (We[hl++] = t),
        (We[hl++] = a),
        (We[hl++] = l),
        (rc |= l),
        (e.lanes |= l),
        (e = e.alternate),
        e !== null && (e.lanes |= l));
    }
    function ic(e, t, a, l) {
      return (Ni(e, t, a, l), Ir(e));
    }
    function Qa(e, t) {
      return (Ni(e, null, null, t), Ir(e));
    }
    function mm(e, t, a) {
      e.lanes |= a;
      var l = e.alternate;
      l !== null && (l.lanes |= a);
      for (var n = !1, r = e.return; r !== null; )
        ((r.childLanes |= a),
          (l = r.alternate),
          l !== null && (l.childLanes |= a),
          r.tag === 22 &&
            ((e = r.stateNode), e === null || e._visibility & 1 || (n = !0)),
          (e = r),
          (r = r.return));
      return e.tag === 3
        ? ((r = e.stateNode),
          n &&
            t !== null &&
            ((n = 31 - Ze(a)),
            (e = r.hiddenUpdates),
            (l = e[n]),
            l === null ? (e[n] = [t]) : l.push(t),
            (t.lane = a | 536870912)),
          r)
        : null;
    }
    function Ir(e) {
      if (50 < On) throw ((On = 0), (Uo = null), Error(g(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var yl = {};
    function Jp(e, t, a, l) {
      ((this.tag = e),
        (this.key = a),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = l),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Ge(e, t, a, l) {
      return new Jp(e, t, a, l);
    }
    function uc(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Yt(e, t) {
      var a = e.alternate;
      return (
        a === null
          ? ((a = Ge(e.tag, t, e.key, e.mode)),
            (a.elementType = e.elementType),
            (a.type = e.type),
            (a.stateNode = e.stateNode),
            (a.alternate = e),
            (e.alternate = a))
          : ((a.pendingProps = t),
            (a.type = e.type),
            (a.flags = 0),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
        (a.flags = e.flags & 65011712),
        (a.childLanes = e.childLanes),
        (a.lanes = e.lanes),
        (a.child = e.child),
        (a.memoizedProps = e.memoizedProps),
        (a.memoizedState = e.memoizedState),
        (a.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (a.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (a.sibling = e.sibling),
        (a.index = e.index),
        (a.ref = e.ref),
        (a.refCleanup = e.refCleanup),
        a
      );
    }
    function hm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return (
        a === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = a.childLanes),
            (e.lanes = a.lanes),
            (e.child = a.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = a.memoizedProps),
            (e.memoizedState = a.memoizedState),
            (e.updateQueue = a.updateQueue),
            (e.type = a.type),
            (t = a.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Hr(e, t, a, l, n, r) {
      var i = 0;
      if (((l = e), typeof e == 'function')) uc(e) && (i = 1);
      else if (typeof e == 'string')
        i = Pg(e, a, bt.current)
          ? 26
          : e === 'html' || e === 'head' || e === 'body'
            ? 27
            : 5;
      else
        e: switch (e) {
          case eo:
            return (
              (e = Ge(31, a, t, n)),
              (e.elementType = eo),
              (e.lanes = r),
              e
            );
          case ul:
            return _a(a.children, n, r, t);
          case _d:
            ((i = 8), (n |= 24));
            break;
          case Pu:
            return (
              (e = Ge(12, a, t, n | 2)),
              (e.elementType = Pu),
              (e.lanes = r),
              e
            );
          case Wu:
            return (
              (e = Ge(13, a, t, n)),
              (e.elementType = Wu),
              (e.lanes = r),
              e
            );
          case Iu:
            return (
              (e = Ge(19, a, t, n)),
              (e.elementType = Iu),
              (e.lanes = r),
              e
            );
          default:
            if (typeof e == 'object' && e !== null)
              switch (e.$$typeof) {
                case Ht:
                  i = 10;
                  break e;
                case Ld:
                  i = 9;
                  break e;
                case Ko:
                  i = 11;
                  break e;
                case Jo:
                  i = 14;
                  break e;
                case It:
                  ((i = 16), (l = null));
                  break e;
              }
            ((i = 29),
              (a = Error(g(130, e === null ? 'null' : typeof e, ''))),
              (l = null));
        }
      return (
        (t = Ge(i, a, t, n)),
        (t.elementType = e),
        (t.type = l),
        (t.lanes = r),
        t
      );
    }
    function _a(e, t, a, l) {
      return ((e = Ge(7, e, l, t)), (e.lanes = a), e);
    }
    function Ou(e, t, a) {
      return ((e = Ge(6, e, null, t)), (e.lanes = a), e);
    }
    function ym(e) {
      var t = Ge(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Cu(e, t, a) {
      return (
        (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = a),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Tf = new WeakMap();
    function lt(e, t) {
      if (typeof e == 'object' && e !== null) {
        var a = Tf.get(e);
        return a !== void 0
          ? a
          : ((t = { value: e, source: t, stack: rf(t) }), Tf.set(e, t), t);
      }
      return { value: e, source: t, stack: rf(t) };
    }
    var vl = [],
      pl = 0,
      ei = null,
      Un = 0,
      et = [],
      tt = 0,
      ba = null,
      vt = 1,
      pt = '';
    function Lt(e, t) {
      ((vl[pl++] = Un), (vl[pl++] = ei), (ei = e), (Un = t));
    }
    function vm(e, t, a) {
      ((et[tt++] = vt), (et[tt++] = pt), (et[tt++] = ba), (ba = e));
      var l = vt;
      e = pt;
      var n = 32 - Ze(l) - 1;
      ((l &= ~(1 << n)), (a += 1));
      var r = 32 - Ze(t) + n;
      if (30 < r) {
        var i = n - (n % 5);
        ((r = (l & ((1 << i) - 1)).toString(32)),
          (l >>= i),
          (n -= i),
          (vt = (1 << (32 - Ze(t) + n)) | (a << n) | l),
          (pt = r + e));
      } else ((vt = (1 << r) | (a << n) | l), (pt = e));
    }
    function oc(e) {
      e.return !== null && (Lt(e, 1), vm(e, 1, 0));
    }
    function cc(e) {
      for (; e === ei; )
        ((ei = vl[--pl]), (vl[pl] = null), (Un = vl[--pl]), (vl[pl] = null));
      for (; e === ba; )
        ((ba = et[--tt]),
          (et[tt] = null),
          (pt = et[--tt]),
          (et[tt] = null),
          (vt = et[--tt]),
          (et[tt] = null));
    }
    function pm(e, t) {
      ((et[tt++] = vt),
        (et[tt++] = pt),
        (et[tt++] = ba),
        (vt = t.id),
        (pt = t.overflow),
        (ba = e));
    }
    var Re = null,
      te = null,
      Y = !1,
      fa = null,
      nt = !1,
      yo = Error(g(519));
    function Sa(e) {
      var t = Error(
        g(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1]
            ? 'text'
            : 'HTML',
          ''
        )
      );
      throw (Hn(lt(t, e)), yo);
    }
    function Af(e) {
      var t = e.stateNode,
        a = e.type,
        l = e.memoizedProps;
      switch (((t[Ee] = e), (t[He] = l), a)) {
        case 'dialog':
          (U('cancel', t), U('close', t));
          break;
        case 'iframe':
        case 'object':
        case 'embed':
          U('load', t);
          break;
        case 'video':
        case 'audio':
          for (a = 0; a < kn.length; a++) U(kn[a], t);
          break;
        case 'source':
          U('error', t);
          break;
        case 'img':
        case 'image':
        case 'link':
          (U('error', t), U('load', t));
          break;
        case 'details':
          U('toggle', t);
          break;
        case 'input':
          (U('invalid', t),
            Kd(
              t,
              l.value,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
              !0
            ));
          break;
        case 'select':
          U('invalid', t);
          break;
        case 'textarea':
          (U('invalid', t), Fd(t, l.value, l.defaultValue, l.children));
      }
      ((a = l.children),
        (typeof a != 'string' &&
          typeof a != 'number' &&
          typeof a != 'bigint') ||
        t.textContent === '' + a ||
        l.suppressHydrationWarning === !0 ||
        Ih(t.textContent, a)
          ? (l.popover != null && (U('beforetoggle', t), U('toggle', t)),
            l.onScroll != null && U('scroll', t),
            l.onScrollEnd != null && U('scrollend', t),
            l.onClick != null && (t.onclick = jt),
            (t = !0))
          : (t = !1),
        t || Sa(e, !0));
    }
    function Nf(e) {
      for (Re = e.return; Re; )
        switch (Re.tag) {
          case 5:
          case 31:
          case 13:
            nt = !1;
            return;
          case 27:
          case 3:
            nt = !0;
            return;
          default:
            Re = Re.return;
        }
    }
    function ll(e) {
      if (e !== Re) return !1;
      if (!Y) return (Nf(e), (Y = !0), !1);
      var t = e.tag,
        a;
      if (
        ((a = t !== 3 && t !== 27) &&
          ((a = t === 5) &&
            ((a = e.type),
            (a =
              !(a !== 'form' && a !== 'button') ||
              ko(e.type, e.memoizedProps))),
          (a = !a)),
        a && te && Sa(e),
        Nf(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(g(317));
        te = yd(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(g(317));
        te = yd(e);
      } else
        t === 27
          ? ((t = te),
            xa(e.type) ? ((e = Vo), (Vo = null), (te = e)) : (te = t))
          : (te = Re ? it(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ja() {
      ((te = Re = null), (Y = !1));
    }
    function Mu() {
      var e = fa;
      return (
        e !== null &&
          (Le === null ? (Le = e) : Le.push.apply(Le, e), (fa = null)),
        e
      );
    }
    function Hn(e) {
      fa === null ? (fa = [e]) : fa.push(e);
    }
    var vo = St(null),
      Za = null,
      Bt = null;
    function ta(e, t, a) {
      (P(vo, t._currentValue), (t._currentValue = a));
    }
    function kt(e) {
      ((e._currentValue = vo.current), be(vo));
    }
    function po(e, t, a) {
      for (; e !== null; ) {
        var l = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
            : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
          e === a)
        )
          break;
        e = e.return;
      }
    }
    function go(e, t, a, l) {
      var n = e.child;
      for (n !== null && (n.return = e); n !== null; ) {
        var r = n.dependencies;
        if (r !== null) {
          var i = n.child;
          r = r.firstContext;
          e: for (; r !== null; ) {
            var u = r;
            r = n;
            for (var o = 0; o < t.length; o++)
              if (u.context === t[o]) {
                ((r.lanes |= a),
                  (u = r.alternate),
                  u !== null && (u.lanes |= a),
                  po(r.return, a, e),
                  l || (i = null));
                break e;
              }
            r = u.next;
          }
        } else if (n.tag === 18) {
          if (((i = n.return), i === null)) throw Error(g(341));
          ((i.lanes |= a),
            (r = i.alternate),
            r !== null && (r.lanes |= a),
            po(i, a, e),
            (i = null));
        } else i = n.child;
        if (i !== null) i.return = n;
        else
          for (i = n; i !== null; ) {
            if (i === e) {
              i = null;
              break;
            }
            if (((n = i.sibling), n !== null)) {
              ((n.return = i.return), (i = n));
              break;
            }
            i = i.return;
          }
        n = i;
      }
    }
    function Yl(e, t, a, l) {
      e = null;
      for (var n = t, r = !1; n !== null; ) {
        if (!r) {
          if ((n.flags & 524288) !== 0) r = !0;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(g(387));
          if (((i = i.memoizedProps), i !== null)) {
            var u = n.type;
            Je(n.pendingProps.value, i.value) ||
              (e !== null ? e.push(u) : (e = [u]));
          }
        } else if (n === Kr.current) {
          if (((i = n.alternate), i === null)) throw Error(g(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
            (e !== null ? e.push(Gn) : (e = [Gn]));
        }
        n = n.return;
      }
      (e !== null && go(t, e, a, l), (t.flags |= 262144));
    }
    function ti(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Je(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Ba(e) {
      ((Za = e),
        (Bt = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function we(e) {
      return gm(Za, e);
    }
    function Rr(e, t) {
      return (Za === null && Ba(e), gm(e, t));
    }
    function gm(e, t) {
      var a = t._currentValue;
      if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
        if (e === null) throw Error(g(308));
        ((Bt = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Bt = Bt.next = t;
      return a;
    }
    var Fp =
        typeof AbortController < 'u'
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (a, l) {
                    e.push(l);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (a) {
                    return a();
                  }));
              };
            },
      $p = ve.unstable_scheduleCallback,
      Pp = ve.unstable_NormalPriority,
      me = {
        $$typeof: Ht,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function sc() {
      return { controller: new Fp(), data: new Map(), refCount: 0 };
    }
    function Pn(e) {
      (e.refCount--,
        e.refCount === 0 &&
          $p(Pp, function () {
            e.controller.abort();
          }));
    }
    var En = null,
      bo = 0,
      Ol = 0,
      Rl = null;
    function Wp(e, t) {
      if (En === null) {
        var a = (En = []);
        ((bo = 0),
          (Ol = Uc()),
          (Rl = {
            status: 'pending',
            value: void 0,
            then: function (l) {
              a.push(l);
            },
          }));
      }
      return (bo++, t.then(Df, Df), t);
    }
    function Df() {
      if (--bo === 0 && En !== null) {
        Rl !== null && (Rl.status = 'fulfilled');
        var e = En;
        ((En = null), (Ol = 0), (Rl = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ip(e, t) {
      var a = [],
        l = {
          status: 'pending',
          value: null,
          reason: null,
          then: function (n) {
            a.push(n);
          },
        };
      return (
        e.then(
          function () {
            ((l.status = 'fulfilled'), (l.value = t));
            for (var n = 0; n < a.length; n++) (0, a[n])(t);
          },
          function (n) {
            for (l.status = 'rejected', l.reason = n, n = 0; n < a.length; n++)
              (0, a[n])(void 0);
          }
        ),
        l
      );
    }
    var Of = D.S;
    D.S = function (e, t) {
      ((zh = Ve()),
        typeof t == 'object' &&
          t !== null &&
          typeof t.then == 'function' &&
          Wp(e, t),
        Of !== null && Of(e, t));
    };
    var La = St(null);
    function fc() {
      var e = La.current;
      return e !== null ? e : F.pooledCache;
    }
    function jr(e, t) {
      t === null ? P(La, La.current) : P(La, t.pool);
    }
    function bm() {
      var e = fc();
      return e === null ? null : { parent: me._currentValue, pool: e };
    }
    var kl = Error(g(460)),
      dc = Error(g(474)),
      Di = Error(g(542)),
      ai = { then: function () {} };
    function Cf(e) {
      return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function Sm(e, t, a) {
      switch (
        ((a = e[a]),
        a === void 0 ? e.push(t) : a !== t && (t.then(jt, jt), (t = a)),
        t.status)
      ) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw ((e = t.reason), zf(e), e);
        default:
          if (typeof t.status == 'string') t.then(jt, jt);
          else {
            if (((e = F), e !== null && 100 < e.shellSuspendCounter))
              throw Error(g(482));
            ((e = t),
              (e.status = 'pending'),
              e.then(
                function (l) {
                  if (t.status === 'pending') {
                    var n = t;
                    ((n.status = 'fulfilled'), (n.value = l));
                  }
                },
                function (l) {
                  if (t.status === 'pending') {
                    var n = t;
                    ((n.status = 'rejected'), (n.reason = l));
                  }
                }
              ));
          }
          switch (t.status) {
            case 'fulfilled':
              return t.value;
            case 'rejected':
              throw ((e = t.reason), zf(e), e);
          }
          throw ((Ua = t), kl);
      }
    }
    function Ca(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (a) {
        throw a !== null && typeof a == 'object' && typeof a.then == 'function'
          ? ((Ua = a), kl)
          : a;
      }
    }
    var Ua = null;
    function Mf() {
      if (Ua === null) throw Error(g(459));
      var e = Ua;
      return ((Ua = null), e);
    }
    function zf(e) {
      if (e === kl || e === Di) throw Error(g(483));
    }
    var wl = null,
      jn = 0;
    function wr(e) {
      var t = jn;
      return ((jn += 1), wl === null && (wl = []), Sm(wl, e, t));
    }
    function on(e, t) {
      ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function xr(e, t) {
      throw t.$$typeof === Yv
        ? Error(g(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            g(
              31,
              e === '[object Object]'
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : e
            )
          ));
    }
    function Em(e) {
      function t(f, s) {
        if (e) {
          var y = f.deletions;
          y === null ? ((f.deletions = [s]), (f.flags |= 16)) : y.push(s);
        }
      }
      function a(f, s) {
        if (!e) return null;
        for (; s !== null; ) (t(f, s), (s = s.sibling));
        return null;
      }
      function l(f) {
        for (var s = new Map(); f !== null; )
          (f.key !== null ? s.set(f.key, f) : s.set(f.index, f),
            (f = f.sibling));
        return s;
      }
      function n(f, s) {
        return ((f = Yt(f, s)), (f.index = 0), (f.sibling = null), f);
      }
      function r(f, s, y) {
        return (
          (f.index = y),
          e
            ? ((y = f.alternate),
              y !== null
                ? ((y = y.index), y < s ? ((f.flags |= 67108866), s) : y)
                : ((f.flags |= 67108866), s))
            : ((f.flags |= 1048576), s)
        );
      }
      function i(f) {
        return (e && f.alternate === null && (f.flags |= 67108866), f);
      }
      function u(f, s, y, p) {
        return s === null || s.tag !== 6
          ? ((s = Ou(y, f.mode, p)), (s.return = f), s)
          : ((s = n(s, y)), (s.return = f), s);
      }
      function o(f, s, y, p) {
        var w = y.type;
        return w === ul
          ? d(f, s, y.props.children, p, y.key)
          : s !== null &&
              (s.elementType === w ||
                (typeof w == 'object' &&
                  w !== null &&
                  w.$$typeof === It &&
                  Ca(w) === s.type))
            ? ((s = n(s, y.props)), on(s, y), (s.return = f), s)
            : ((s = Hr(y.type, y.key, y.props, null, f.mode, p)),
              on(s, y),
              (s.return = f),
              s);
      }
      function c(f, s, y, p) {
        return s === null ||
          s.tag !== 4 ||
          s.stateNode.containerInfo !== y.containerInfo ||
          s.stateNode.implementation !== y.implementation
          ? ((s = Cu(y, f.mode, p)), (s.return = f), s)
          : ((s = n(s, y.children || [])), (s.return = f), s);
      }
      function d(f, s, y, p, w) {
        return s === null || s.tag !== 7
          ? ((s = _a(y, f.mode, p, w)), (s.return = f), s)
          : ((s = n(s, y)), (s.return = f), s);
      }
      function m(f, s, y) {
        if (
          (typeof s == 'string' && s !== '') ||
          typeof s == 'number' ||
          typeof s == 'bigint'
        )
          return ((s = Ou('' + s, f.mode, y)), (s.return = f), s);
        if (typeof s == 'object' && s !== null) {
          switch (s.$$typeof) {
            case hr:
              return (
                (y = Hr(s.type, s.key, s.props, null, f.mode, y)),
                on(y, s),
                (y.return = f),
                y
              );
            case mn:
              return ((s = Cu(s, f.mode, y)), (s.return = f), s);
            case It:
              return ((s = Ca(s)), m(f, s, y));
          }
          if (hn(s) || rn(s))
            return ((s = _a(s, f.mode, y, null)), (s.return = f), s);
          if (typeof s.then == 'function') return m(f, wr(s), y);
          if (s.$$typeof === Ht) return m(f, Rr(f, s), y);
          xr(f, s);
        }
        return null;
      }
      function h(f, s, y, p) {
        var w = s !== null ? s.key : null;
        if (
          (typeof y == 'string' && y !== '') ||
          typeof y == 'number' ||
          typeof y == 'bigint'
        )
          return w !== null ? null : u(f, s, '' + y, p);
        if (typeof y == 'object' && y !== null) {
          switch (y.$$typeof) {
            case hr:
              return y.key === w ? o(f, s, y, p) : null;
            case mn:
              return y.key === w ? c(f, s, y, p) : null;
            case It:
              return ((y = Ca(y)), h(f, s, y, p));
          }
          if (hn(y) || rn(y)) return w !== null ? null : d(f, s, y, p, null);
          if (typeof y.then == 'function') return h(f, s, wr(y), p);
          if (y.$$typeof === Ht) return h(f, s, Rr(f, y), p);
          xr(f, y);
        }
        return null;
      }
      function v(f, s, y, p, w) {
        if (
          (typeof p == 'string' && p !== '') ||
          typeof p == 'number' ||
          typeof p == 'bigint'
        )
          return ((f = f.get(y) || null), u(s, f, '' + p, w));
        if (typeof p == 'object' && p !== null) {
          switch (p.$$typeof) {
            case hr:
              return (
                (f = f.get(p.key === null ? y : p.key) || null),
                o(s, f, p, w)
              );
            case mn:
              return (
                (f = f.get(p.key === null ? y : p.key) || null),
                c(s, f, p, w)
              );
            case It:
              return ((p = Ca(p)), v(f, s, y, p, w));
          }
          if (hn(p) || rn(p))
            return ((f = f.get(y) || null), d(s, f, p, w, null));
          if (typeof p.then == 'function') return v(f, s, y, wr(p), w);
          if (p.$$typeof === Ht) return v(f, s, y, Rr(s, p), w);
          xr(s, p);
        }
        return null;
      }
      function b(f, s, y, p) {
        for (
          var w = null, _ = null, x = s, O = (s = 0), N = null;
          x !== null && O < y.length;
          O++
        ) {
          x.index > O ? ((N = x), (x = null)) : (N = x.sibling);
          var L = h(f, x, y[O], p);
          if (L === null) {
            x === null && (x = N);
            break;
          }
          (e && x && L.alternate === null && t(f, x),
            (s = r(L, s, O)),
            _ === null ? (w = L) : (_.sibling = L),
            (_ = L),
            (x = N));
        }
        if (O === y.length) return (a(f, x), Y && Lt(f, O), w);
        if (x === null) {
          for (; O < y.length; O++)
            ((x = m(f, y[O], p)),
              x !== null &&
                ((s = r(x, s, O)),
                _ === null ? (w = x) : (_.sibling = x),
                (_ = x)));
          return (Y && Lt(f, O), w);
        }
        for (x = l(x); O < y.length; O++)
          ((N = v(x, f, O, y[O], p)),
            N !== null &&
              (e &&
                N.alternate !== null &&
                x.delete(N.key === null ? O : N.key),
              (s = r(N, s, O)),
              _ === null ? (w = N) : (_.sibling = N),
              (_ = N)));
        return (
          e &&
            x.forEach(function (st) {
              return t(f, st);
            }),
          Y && Lt(f, O),
          w
        );
      }
      function S(f, s, y, p) {
        if (y == null) throw Error(g(151));
        for (
          var w = null, _ = null, x = s, O = (s = 0), N = null, L = y.next();
          x !== null && !L.done;
          O++, L = y.next()
        ) {
          x.index > O ? ((N = x), (x = null)) : (N = x.sibling);
          var st = h(f, x, L.value, p);
          if (st === null) {
            x === null && (x = N);
            break;
          }
          (e && x && st.alternate === null && t(f, x),
            (s = r(st, s, O)),
            _ === null ? (w = st) : (_.sibling = st),
            (_ = st),
            (x = N));
        }
        if (L.done) return (a(f, x), Y && Lt(f, O), w);
        if (x === null) {
          for (; !L.done; O++, L = y.next())
            ((L = m(f, L.value, p)),
              L !== null &&
                ((s = r(L, s, O)),
                _ === null ? (w = L) : (_.sibling = L),
                (_ = L)));
          return (Y && Lt(f, O), w);
        }
        for (x = l(x); !L.done; O++, L = y.next())
          ((L = v(x, f, O, L.value, p)),
            L !== null &&
              (e &&
                L.alternate !== null &&
                x.delete(L.key === null ? O : L.key),
              (s = r(L, s, O)),
              _ === null ? (w = L) : (_.sibling = L),
              (_ = L)));
        return (
          e &&
            x.forEach(function (sv) {
              return t(f, sv);
            }),
          Y && Lt(f, O),
          w
        );
      }
      function E(f, s, y, p) {
        if (
          (typeof y == 'object' &&
            y !== null &&
            y.type === ul &&
            y.key === null &&
            (y = y.props.children),
          typeof y == 'object' && y !== null)
        ) {
          switch (y.$$typeof) {
            case hr:
              e: {
                for (var w = y.key; s !== null; ) {
                  if (s.key === w) {
                    if (((w = y.type), w === ul)) {
                      if (s.tag === 7) {
                        (a(f, s.sibling),
                          (p = n(s, y.props.children)),
                          (p.return = f),
                          (f = p));
                        break e;
                      }
                    } else if (
                      s.elementType === w ||
                      (typeof w == 'object' &&
                        w !== null &&
                        w.$$typeof === It &&
                        Ca(w) === s.type)
                    ) {
                      (a(f, s.sibling),
                        (p = n(s, y.props)),
                        on(p, y),
                        (p.return = f),
                        (f = p));
                      break e;
                    }
                    a(f, s);
                    break;
                  } else t(f, s);
                  s = s.sibling;
                }
                y.type === ul
                  ? ((p = _a(y.props.children, f.mode, p, y.key)),
                    (p.return = f),
                    (f = p))
                  : ((p = Hr(y.type, y.key, y.props, null, f.mode, p)),
                    on(p, y),
                    (p.return = f),
                    (f = p));
              }
              return i(f);
            case mn:
              e: {
                for (w = y.key; s !== null; ) {
                  if (s.key === w)
                    if (
                      s.tag === 4 &&
                      s.stateNode.containerInfo === y.containerInfo &&
                      s.stateNode.implementation === y.implementation
                    ) {
                      (a(f, s.sibling),
                        (p = n(s, y.children || [])),
                        (p.return = f),
                        (f = p));
                      break e;
                    } else {
                      a(f, s);
                      break;
                    }
                  else t(f, s);
                  s = s.sibling;
                }
                ((p = Cu(y, f.mode, p)), (p.return = f), (f = p));
              }
              return i(f);
            case It:
              return ((y = Ca(y)), E(f, s, y, p));
          }
          if (hn(y)) return b(f, s, y, p);
          if (rn(y)) {
            if (((w = rn(y)), typeof w != 'function')) throw Error(g(150));
            return ((y = w.call(y)), S(f, s, y, p));
          }
          if (typeof y.then == 'function') return E(f, s, wr(y), p);
          if (y.$$typeof === Ht) return E(f, s, Rr(f, y), p);
          xr(f, y);
        }
        return (typeof y == 'string' && y !== '') ||
          typeof y == 'number' ||
          typeof y == 'bigint'
          ? ((y = '' + y),
            s !== null && s.tag === 6
              ? (a(f, s.sibling), (p = n(s, y)), (p.return = f), (f = p))
              : (a(f, s), (p = Ou(y, f.mode, p)), (p.return = f), (f = p)),
            i(f))
          : a(f, s);
      }
      return function (f, s, y, p) {
        try {
          jn = 0;
          var w = E(f, s, y, p);
          return ((wl = null), w);
        } catch (x) {
          if (x === kl || x === Di) throw x;
          var _ = Ge(29, x, null, f.mode);
          return ((_.lanes = p), (_.return = f), _);
        } finally {
        }
      };
    }
    var Ya = Em(!0),
      Rm = Em(!1),
      ea = !1;
    function mc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function So(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function da(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function ma(e, t, a) {
      var l = e.updateQueue;
      if (l === null) return null;
      if (((l = l.shared), (q & 2) !== 0)) {
        var n = l.pending;
        return (
          n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (l.pending = t),
          (t = Ir(e)),
          mm(e, null, a),
          t
        );
      }
      return (Ni(e, l, t, a), Ir(e));
    }
    function Rn(e, t, a) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (a & 4194048) !== 0))
      ) {
        var l = t.lanes;
        ((l &= e.pendingLanes), (a |= l), (t.lanes = a), kd(e, a));
      }
    }
    function zu(e, t) {
      var a = e.updateQueue,
        l = e.alternate;
      if (l !== null && ((l = l.updateQueue), a === l)) {
        var n = null,
          r = null;
        if (((a = a.firstBaseUpdate), a !== null)) {
          do {
            var i = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null,
            };
            (r === null ? (n = r = i) : (r = r.next = i), (a = a.next));
          } while (a !== null);
          r === null ? (n = r = t) : (r = r.next = t);
        } else n = r = t;
        ((a = {
          baseState: l.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: r,
          shared: l.shared,
          callbacks: l.callbacks,
        }),
          (e.updateQueue = a));
        return;
      }
      ((e = a.lastBaseUpdate),
        e === null ? (a.firstBaseUpdate = t) : (e.next = t),
        (a.lastBaseUpdate = t));
    }
    var Eo = !1;
    function wn() {
      if (Eo) {
        var e = Rl;
        if (e !== null) throw e;
      }
    }
    function xn(e, t, a, l) {
      Eo = !1;
      var n = e.updateQueue;
      ea = !1;
      var r = n.firstBaseUpdate,
        i = n.lastBaseUpdate,
        u = n.shared.pending;
      if (u !== null) {
        n.shared.pending = null;
        var o = u,
          c = o.next;
        ((o.next = null), i === null ? (r = c) : (i.next = c), (i = o));
        var d = e.alternate;
        d !== null &&
          ((d = d.updateQueue),
          (u = d.lastBaseUpdate),
          u !== i &&
            (u === null ? (d.firstBaseUpdate = c) : (u.next = c),
            (d.lastBaseUpdate = o)));
      }
      if (r !== null) {
        var m = n.baseState;
        ((i = 0), (d = c = o = null), (u = r));
        do {
          var h = u.lane & -536870913,
            v = h !== u.lane;
          if (v ? (B & h) === h : (l & h) === h) {
            (h !== 0 && h === Ol && (Eo = !0),
              d !== null &&
                (d = d.next =
                  {
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: null,
                    next: null,
                  }));
            e: {
              var b = e,
                S = u;
              h = t;
              var E = a;
              switch (S.tag) {
                case 1:
                  if (((b = S.payload), typeof b == 'function')) {
                    m = b.call(E, m, h);
                    break e;
                  }
                  m = b;
                  break e;
                case 3:
                  b.flags = (b.flags & -65537) | 128;
                case 0:
                  if (
                    ((b = S.payload),
                    (h = typeof b == 'function' ? b.call(E, m, h) : b),
                    h == null)
                  )
                    break e;
                  m = ae({}, m, h);
                  break e;
                case 2:
                  ea = !0;
              }
            }
            ((h = u.callback),
              h !== null &&
                ((e.flags |= 64),
                v && (e.flags |= 8192),
                (v = n.callbacks),
                v === null ? (n.callbacks = [h]) : v.push(h)));
          } else
            ((v = {
              lane: h,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            }),
              d === null ? ((c = d = v), (o = m)) : (d = d.next = v),
              (i |= h));
          if (((u = u.next), u === null)) {
            if (((u = n.shared.pending), u === null)) break;
            ((v = u),
              (u = v.next),
              (v.next = null),
              (n.lastBaseUpdate = v),
              (n.shared.pending = null));
          }
        } while (!0);
        (d === null && (o = m),
          (n.baseState = o),
          (n.firstBaseUpdate = c),
          (n.lastBaseUpdate = d),
          r === null && (n.shared.lanes = 0),
          (Ra |= i),
          (e.lanes = i),
          (e.memoizedState = m));
      }
    }
    function wm(e, t) {
      if (typeof e != 'function') throw Error(g(191, e));
      e.call(t);
    }
    function xm(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++) wm(a[e], t);
    }
    var Cl = St(null),
      li = St(0);
    function _f(e, t) {
      ((e = Zt), P(li, e), P(Cl, t), (Zt = e | t.baseLanes));
    }
    function Ro() {
      (P(li, Zt), P(Cl, Cl.current));
    }
    function hc() {
      ((Zt = li.current), be(Cl), be(li));
    }
    var Fe = St(null),
      rt = null;
    function aa(e) {
      var t = e.alternate;
      (P(oe, oe.current & 1),
        P(Fe, e),
        rt === null &&
          (t === null || Cl.current !== null || t.memoizedState !== null) &&
          (rt = e));
    }
    function wo(e) {
      (P(oe, oe.current), P(Fe, e), rt === null && (rt = e));
    }
    function Tm(e) {
      e.tag === 22
        ? (P(oe, oe.current), P(Fe, e), rt === null && (rt = e))
        : la(e);
    }
    function la() {
      (P(oe, oe.current), P(Fe, Fe.current));
    }
    function qe(e) {
      (be(Fe), rt === e && (rt = null), be(oe));
    }
    var oe = St(0);
    function ni(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && ((a = a.dehydrated), a === null || Go(a) || Xo(a)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === 'forwards' ||
            t.memoizedProps.revealOrder === 'backwards' ||
            t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
            t.memoizedProps.revealOrder === 'together')
        ) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Xt = 0,
      z = null,
      J = null,
      fe = null,
      ri = !1,
      xl = !1,
      ka = !1,
      ii = 0,
      Bn = 0,
      Tl = null,
      eg = 0;
    function ie() {
      throw Error(g(321));
    }
    function yc(e, t) {
      if (t === null) return !1;
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Je(e[a], t[a])) return !1;
      return !0;
    }
    function vc(e, t, a, l, n, r) {
      return (
        (Xt = r),
        (z = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? ah : Nc),
        (ka = !1),
        (r = a(l, n)),
        (ka = !1),
        xl && (r = Nm(t, a, l, n)),
        Am(e),
        r
      );
    }
    function Am(e) {
      D.H = Yn;
      var t = J !== null && J.next !== null;
      if (((Xt = 0), (fe = J = z = null), (ri = !1), (Bn = 0), (Tl = null), t))
        throw Error(g(300));
      e === null ||
        he ||
        ((e = e.dependencies), e !== null && ti(e) && (he = !0));
    }
    function Nm(e, t, a, l) {
      z = e;
      var n = 0;
      do {
        if ((xl && (Tl = null), (Bn = 0), (xl = !1), 25 <= n))
          throw Error(g(301));
        if (((n += 1), (fe = J = null), e.updateQueue != null)) {
          var r = e.updateQueue;
          ((r.lastEffect = null),
            (r.events = null),
            (r.stores = null),
            r.memoCache != null && (r.memoCache.index = 0));
        }
        ((D.H = lh), (r = t(a, l)));
      } while (xl);
      return r;
    }
    function tg() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == 'function' ? Wn(t) : t),
        (e = e.useState()[0]),
        (J !== null ? J.memoizedState : null) !== e && (z.flags |= 1024),
        t
      );
    }
    function pc() {
      var e = ii !== 0;
      return ((ii = 0), e);
    }
    function gc(e, t, a) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
    }
    function bc(e) {
      if (ri) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        ri = !1;
      }
      ((Xt = 0), (fe = J = z = null), (xl = !1), (Bn = ii = 0), (Tl = null));
    }
    function Oe() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        fe === null ? (z.memoizedState = fe = e) : (fe = fe.next = e),
        fe
      );
    }
    function ce() {
      if (J === null) {
        var e = z.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = J.next;
      var t = fe === null ? z.memoizedState : fe.next;
      if (t !== null) ((fe = t), (J = e));
      else {
        if (e === null)
          throw z.alternate === null ? Error(g(467)) : Error(g(310));
        ((J = e),
          (e = {
            memoizedState: J.memoizedState,
            baseState: J.baseState,
            baseQueue: J.baseQueue,
            queue: J.queue,
            next: null,
          }),
          fe === null ? (z.memoizedState = fe = e) : (fe = fe.next = e));
      }
      return fe;
    }
    function Oi() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Wn(e) {
      var t = Bn;
      return (
        (Bn += 1),
        Tl === null && (Tl = []),
        (e = Sm(Tl, e, t)),
        (t = z),
        (fe === null ? t.memoizedState : fe.next) === null &&
          ((t = t.alternate),
          (D.H = t === null || t.memoizedState === null ? ah : Nc)),
        e
      );
    }
    function Ci(e) {
      if (e !== null && typeof e == 'object') {
        if (typeof e.then == 'function') return Wn(e);
        if (e.$$typeof === Ht) return we(e);
      }
      throw Error(g(438, String(e)));
    }
    function Sc(e) {
      var t = null,
        a = z.updateQueue;
      if ((a !== null && (t = a.memoCache), t == null)) {
        var l = z.alternate;
        l !== null &&
          ((l = l.updateQueue),
          l !== null &&
            ((l = l.memoCache),
            l != null &&
              (t = {
                data: l.data.map(function (n) {
                  return n.slice();
                }),
                index: 0,
              })));
      }
      if (
        (t == null && (t = { data: [], index: 0 }),
        a === null && ((a = Oi()), (z.updateQueue = a)),
        (a.memoCache = t),
        (a = t.data[t.index]),
        a === void 0)
      )
        for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = kv;
      return (t.index++, a);
    }
    function Vt(e, t) {
      return typeof t == 'function' ? t(e) : t;
    }
    function Br(e) {
      var t = ce();
      return Ec(t, J, e);
    }
    function Ec(e, t, a) {
      var l = e.queue;
      if (l === null) throw Error(g(311));
      l.lastRenderedReducer = a;
      var n = e.baseQueue,
        r = l.pending;
      if (r !== null) {
        if (n !== null) {
          var i = n.next;
          ((n.next = r.next), (r.next = i));
        }
        ((t.baseQueue = n = r), (l.pending = null));
      }
      if (((r = e.baseState), n === null)) e.memoizedState = r;
      else {
        t = n.next;
        var u = (i = null),
          o = null,
          c = t,
          d = !1;
        do {
          var m = c.lane & -536870913;
          if (m !== c.lane ? (B & m) === m : (Xt & m) === m) {
            var h = c.revertLane;
            if (h === 0)
              (o !== null &&
                (o = o.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                m === Ol && (d = !0));
            else if ((Xt & h) === h) {
              ((c = c.next), h === Ol && (d = !0));
              continue;
            } else
              ((m = {
                lane: 0,
                revertLane: c.revertLane,
                gesture: null,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                o === null ? ((u = o = m), (i = r)) : (o = o.next = m),
                (z.lanes |= h),
                (Ra |= h));
            ((m = c.action),
              ka && a(r, m),
              (r = c.hasEagerState ? c.eagerState : a(r, m)));
          } else
            ((h = {
              lane: m,
              revertLane: c.revertLane,
              gesture: c.gesture,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
              o === null ? ((u = o = h), (i = r)) : (o = o.next = h),
              (z.lanes |= m),
              (Ra |= m));
          c = c.next;
        } while (c !== null && c !== t);
        if (
          (o === null ? (i = r) : (o.next = u),
          !Je(r, e.memoizedState) && ((he = !0), d && ((a = Rl), a !== null)))
        )
          throw a;
        ((e.memoizedState = r),
          (e.baseState = i),
          (e.baseQueue = o),
          (l.lastRenderedState = r));
      }
      return (n === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
    }
    function _u(e) {
      var t = ce(),
        a = t.queue;
      if (a === null) throw Error(g(311));
      a.lastRenderedReducer = e;
      var l = a.dispatch,
        n = a.pending,
        r = t.memoizedState;
      if (n !== null) {
        a.pending = null;
        var i = (n = n.next);
        do ((r = e(r, i.action)), (i = i.next));
        while (i !== n);
        (Je(r, t.memoizedState) || (he = !0),
          (t.memoizedState = r),
          t.baseQueue === null && (t.baseState = r),
          (a.lastRenderedState = r));
      }
      return [r, l];
    }
    function Dm(e, t, a) {
      var l = z,
        n = ce(),
        r = Y;
      if (r) {
        if (a === void 0) throw Error(g(407));
        a = a();
      } else a = t();
      var i = !Je((J || n).memoizedState, a);
      if (
        (i && ((n.memoizedState = a), (he = !0)),
        (n = n.queue),
        Rc(Mm.bind(null, l, n, e), [e]),
        n.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
      ) {
        if (
          ((l.flags |= 2048),
          Ml(9, { destroy: void 0 }, Cm.bind(null, l, n, a, t), null),
          F === null)
        )
          throw Error(g(349));
        r || (Xt & 127) !== 0 || Om(l, t, a);
      }
      return a;
    }
    function Om(e, t, a) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: a }),
        (t = z.updateQueue),
        t === null
          ? ((t = Oi()), (z.updateQueue = t), (t.stores = [e]))
          : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
    }
    function Cm(e, t, a, l) {
      ((t.value = a), (t.getSnapshot = l), zm(t) && _m(e));
    }
    function Mm(e, t, a) {
      return a(function () {
        zm(t) && _m(e);
      });
    }
    function zm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Je(e, a);
      } catch {
        return !0;
      }
    }
    function _m(e) {
      var t = Qa(e, 2);
      t !== null && Ue(t, e, 2);
    }
    function xo(e) {
      var t = Oe();
      if (typeof e == 'function') {
        var a = e;
        if (((e = a()), ka)) {
          ra(!0);
          try {
            a();
          } finally {
            ra(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Lm(e, t, a, l) {
      return ((e.baseState = a), Ec(e, J, typeof l == 'function' ? l : Vt));
    }
    function ag(e, t, a, l, n) {
      if (zi(e)) throw Error(g(485));
      if (((e = t.action), e !== null)) {
        var r = {
          payload: n,
          action: e,
          next: null,
          isTransition: !0,
          status: 'pending',
          value: null,
          reason: null,
          listeners: [],
          then: function (i) {
            r.listeners.push(i);
          },
        };
        (D.T !== null ? a(!0) : (r.isTransition = !1),
          l(r),
          (a = t.pending),
          a === null
            ? ((r.next = t.pending = r), Um(t, r))
            : ((r.next = a.next), (t.pending = a.next = r)));
      }
    }
    function Um(e, t) {
      var a = t.action,
        l = t.payload,
        n = e.state;
      if (t.isTransition) {
        var r = D.T,
          i = {};
        D.T = i;
        try {
          var u = a(n, l),
            o = D.S;
          (o !== null && o(i, u), Lf(e, t, u));
        } catch (c) {
          To(e, t, c);
        } finally {
          (r !== null && i.types !== null && (r.types = i.types), (D.T = r));
        }
      } else
        try {
          ((r = a(n, l)), Lf(e, t, r));
        } catch (c) {
          To(e, t, c);
        }
    }
    function Lf(e, t, a) {
      a !== null && typeof a == 'object' && typeof a.then == 'function'
        ? a.then(
            function (l) {
              Uf(e, t, l);
            },
            function (l) {
              return To(e, t, l);
            }
          )
        : Uf(e, t, a);
    }
    function Uf(e, t, a) {
      ((t.status = 'fulfilled'),
        (t.value = a),
        Hm(t),
        (e.state = a),
        (t = e.pending),
        t !== null &&
          ((a = t.next),
          a === t
            ? (e.pending = null)
            : ((a = a.next), (t.next = a), Um(e, a))));
    }
    function To(e, t, a) {
      var l = e.pending;
      if (((e.pending = null), l !== null)) {
        l = l.next;
        do ((t.status = 'rejected'), (t.reason = a), Hm(t), (t = t.next));
        while (t !== l);
      }
      e.action = null;
    }
    function Hm(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function jm(e, t) {
      return t;
    }
    function Hf(e, t) {
      if (Y) {
        var a = F.formState;
        if (a !== null) {
          e: {
            var l = z;
            if (Y) {
              if (te) {
                t: {
                  for (var n = te, r = nt; n.nodeType !== 8; ) {
                    if (!r) {
                      n = null;
                      break t;
                    }
                    if (((n = it(n.nextSibling)), n === null)) {
                      n = null;
                      break t;
                    }
                  }
                  ((r = n.data), (n = r === 'F!' || r === 'F' ? n : null));
                }
                if (n) {
                  ((te = it(n.nextSibling)), (l = n.data === 'F!'));
                  break e;
                }
              }
              Sa(l);
            }
            l = !1;
          }
          l && (t = a[0]);
        }
      }
      return (
        (a = Oe()),
        (a.memoizedState = a.baseState = t),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jm,
          lastRenderedState: t,
        }),
        (a.queue = l),
        (a = Im.bind(null, z, l)),
        (l.dispatch = a),
        (l = xo(!1)),
        (r = Ac.bind(null, z, !1, l.queue)),
        (l = Oe()),
        (n = { state: t, dispatch: null, action: e, pending: null }),
        (l.queue = n),
        (a = ag.bind(null, z, n, r, a)),
        (n.dispatch = a),
        (l.memoizedState = e),
        [t, a, !1]
      );
    }
    function jf(e) {
      var t = ce();
      return Bm(t, J, e);
    }
    function Bm(e, t, a) {
      if (
        ((t = Ec(e, t, jm)[0]),
        (e = Br(Vt)[0]),
        typeof t == 'object' && t !== null && typeof t.then == 'function')
      )
        try {
          var l = Wn(t);
        } catch (i) {
          throw i === kl ? Di : i;
        }
      else l = t;
      t = ce();
      var n = t.queue,
        r = n.dispatch;
      return (
        a !== t.memoizedState &&
          ((z.flags |= 2048),
          Ml(9, { destroy: void 0 }, lg.bind(null, n, a), null)),
        [l, r, e]
      );
    }
    function lg(e, t) {
      e.action = t;
    }
    function Bf(e) {
      var t = ce(),
        a = J;
      if (a !== null) return Bm(t, a, e);
      (ce(), (t = t.memoizedState), (a = ce()));
      var l = a.queue.dispatch;
      return ((a.memoizedState = e), [t, l, !1]);
    }
    function Ml(e, t, a, l) {
      return (
        (e = { tag: e, create: a, deps: l, inst: t, next: null }),
        (t = z.updateQueue),
        t === null && ((t = Oi()), (z.updateQueue = t)),
        (a = t.lastEffect),
        a === null
          ? (t.lastEffect = e.next = e)
          : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
        e
      );
    }
    function Ym() {
      return ce().memoizedState;
    }
    function Yr(e, t, a, l) {
      var n = Oe();
      ((z.flags |= e),
        (n.memoizedState = Ml(
          1 | t,
          { destroy: void 0 },
          a,
          l === void 0 ? null : l
        )));
    }
    function Mi(e, t, a, l) {
      var n = ce();
      l = l === void 0 ? null : l;
      var r = n.memoizedState.inst;
      J !== null && l !== null && yc(l, J.memoizedState.deps)
        ? (n.memoizedState = Ml(t, r, a, l))
        : ((z.flags |= e), (n.memoizedState = Ml(1 | t, r, a, l)));
    }
    function Yf(e, t) {
      Yr(8390656, 8, e, t);
    }
    function Rc(e, t) {
      Mi(2048, 8, e, t);
    }
    function ng(e) {
      z.flags |= 4;
      var t = z.updateQueue;
      if (t === null) ((t = Oi()), (z.updateQueue = t), (t.events = [e]));
      else {
        var a = t.events;
        a === null ? (t.events = [e]) : a.push(e);
      }
    }
    function km(e) {
      var t = ce().memoizedState;
      return (
        ng({ ref: t, nextImpl: e }),
        function () {
          if ((q & 2) !== 0) throw Error(g(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function qm(e, t) {
      return Mi(4, 2, e, t);
    }
    function Gm(e, t) {
      return Mi(4, 4, e, t);
    }
    function Xm(e, t) {
      if (typeof t == 'function') {
        e = e();
        var a = t(e);
        return function () {
          typeof a == 'function' ? a() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Vm(e, t, a) {
      ((a = a != null ? a.concat([e]) : null),
        Mi(4, 4, Xm.bind(null, t, e), a));
    }
    function wc() {}
    function Qm(e, t) {
      var a = ce();
      t = t === void 0 ? null : t;
      var l = a.memoizedState;
      return t !== null && yc(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
    }
    function Zm(e, t) {
      var a = ce();
      t = t === void 0 ? null : t;
      var l = a.memoizedState;
      if (t !== null && yc(t, l[1])) return l[0];
      if (((l = e()), ka)) {
        ra(!0);
        try {
          e();
        } finally {
          ra(!1);
        }
      }
      return ((a.memoizedState = [l, t]), l);
    }
    function xc(e, t, a) {
      return a === void 0 || ((Xt & 1073741824) !== 0 && (B & 261930) === 0)
        ? (e.memoizedState = t)
        : ((e.memoizedState = a), (e = Lh()), (z.lanes |= e), (Ra |= e), a);
    }
    function Km(e, t, a, l) {
      return Je(a, t)
        ? a
        : Cl.current !== null
          ? ((e = xc(e, a, l)), Je(e, t) || (he = !0), e)
          : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (B & 261930) === 0)
            ? ((he = !0), (e.memoizedState = a))
            : ((e = Lh()), (z.lanes |= e), (Ra |= e), t);
    }
    function Jm(e, t, a, l, n) {
      var r = G.p;
      G.p = r !== 0 && 8 > r ? r : 8;
      var i = D.T,
        u = {};
      ((D.T = u), Ac(e, !1, t, a));
      try {
        var o = n(),
          c = D.S;
        if (
          (c !== null && c(u, o),
          o !== null && typeof o == 'object' && typeof o.then == 'function')
        ) {
          var d = Ip(o, l);
          Tn(e, t, d, Ke(e));
        } else Tn(e, t, l, Ke(e));
      } catch (m) {
        Tn(e, t, { then: function () {}, status: 'rejected', reason: m }, Ke());
      } finally {
        ((G.p = r),
          i !== null && u.types !== null && (i.types = u.types),
          (D.T = i));
      }
    }
    function rg() {}
    function Ao(e, t, a, l) {
      if (e.tag !== 5) throw Error(g(476));
      var n = Fm(e).queue;
      Jm(
        e,
        n,
        t,
        za,
        a === null
          ? rg
          : function () {
              return ($m(e), a(l));
            }
      );
    }
    function Fm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: za,
        baseState: za,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: za,
        },
        next: null,
      };
      var a = {};
      return (
        (t.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vt,
            lastRenderedState: a,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function $m(e) {
      var t = Fm(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Tn(e, t.next.queue, {}, Ke()));
    }
    function Tc() {
      return we(Gn);
    }
    function Pm() {
      return ce().memoizedState;
    }
    function Wm() {
      return ce().memoizedState;
    }
    function ig(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var a = Ke();
            e = da(a);
            var l = ma(t, e, a);
            (l !== null && (Ue(l, t, a), Rn(l, t, a)),
              (t = { cache: sc() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function ug(e, t, a) {
      var l = Ke();
      ((a = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        zi(e)
          ? eh(t, a)
          : ((a = ic(e, t, a, l)), a !== null && (Ue(a, e, l), th(a, t, l))));
    }
    function Im(e, t, a) {
      var l = Ke();
      Tn(e, t, a, l);
    }
    function Tn(e, t, a, l) {
      var n = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (zi(e)) eh(t, n);
      else {
        var r = e.alternate;
        if (
          e.lanes === 0 &&
          (r === null || r.lanes === 0) &&
          ((r = t.lastRenderedReducer), r !== null)
        )
          try {
            var i = t.lastRenderedState,
              u = r(i, a);
            if (((n.hasEagerState = !0), (n.eagerState = u), Je(u, i)))
              return (Ni(e, t, n, 0), F === null && Ai(), !1);
          } catch {
          } finally {
          }
        if (((a = ic(e, t, n, l)), a !== null))
          return (Ue(a, e, l), th(a, t, l), !0);
      }
      return !1;
    }
    function Ac(e, t, a, l) {
      if (
        ((l = {
          lane: 2,
          revertLane: Uc(),
          gesture: null,
          action: l,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        zi(e))
      ) {
        if (t) throw Error(g(479));
      } else ((t = ic(e, a, l, 2)), t !== null && Ue(t, e, 2));
    }
    function zi(e) {
      var t = e.alternate;
      return e === z || (t !== null && t === z);
    }
    function eh(e, t) {
      xl = ri = !0;
      var a = e.pending;
      (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (e.pending = t));
    }
    function th(e, t, a) {
      if ((a & 4194048) !== 0) {
        var l = t.lanes;
        ((l &= e.pendingLanes), (a |= l), (t.lanes = a), kd(e, a));
      }
    }
    var Yn = {
      readContext: we,
      use: Ci,
      useCallback: ie,
      useContext: ie,
      useEffect: ie,
      useImperativeHandle: ie,
      useLayoutEffect: ie,
      useInsertionEffect: ie,
      useMemo: ie,
      useReducer: ie,
      useRef: ie,
      useState: ie,
      useDebugValue: ie,
      useDeferredValue: ie,
      useTransition: ie,
      useSyncExternalStore: ie,
      useId: ie,
      useHostTransitionStatus: ie,
      useFormState: ie,
      useActionState: ie,
      useOptimistic: ie,
      useMemoCache: ie,
      useCacheRefresh: ie,
    };
    Yn.useEffectEvent = ie;
    var ah = {
        readContext: we,
        use: Ci,
        useCallback: function (e, t) {
          return ((Oe().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: we,
        useEffect: Yf,
        useImperativeHandle: function (e, t, a) {
          ((a = a != null ? a.concat([e]) : null),
            Yr(4194308, 4, Xm.bind(null, t, e), a));
        },
        useLayoutEffect: function (e, t) {
          return Yr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Yr(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var a = Oe();
          t = t === void 0 ? null : t;
          var l = e();
          if (ka) {
            ra(!0);
            try {
              e();
            } finally {
              ra(!1);
            }
          }
          return ((a.memoizedState = [l, t]), l);
        },
        useReducer: function (e, t, a) {
          var l = Oe();
          if (a !== void 0) {
            var n = a(t);
            if (ka) {
              ra(!0);
              try {
                a(t);
              } finally {
                ra(!1);
              }
            }
          } else n = t;
          return (
            (l.memoizedState = l.baseState = n),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: n,
            }),
            (l.queue = e),
            (e = e.dispatch = ug.bind(null, z, e)),
            [l.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Oe();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = xo(e);
          var t = e.queue,
            a = Im.bind(null, z, t);
          return ((t.dispatch = a), [e.memoizedState, a]);
        },
        useDebugValue: wc,
        useDeferredValue: function (e, t) {
          var a = Oe();
          return xc(a, e, t);
        },
        useTransition: function () {
          var e = xo(!1);
          return (
            (e = Jm.bind(null, z, e.queue, !0, !1)),
            (Oe().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, a) {
          var l = z,
            n = Oe();
          if (Y) {
            if (a === void 0) throw Error(g(407));
            a = a();
          } else {
            if (((a = t()), F === null)) throw Error(g(349));
            (B & 127) !== 0 || Om(l, t, a);
          }
          n.memoizedState = a;
          var r = { value: a, getSnapshot: t };
          return (
            (n.queue = r),
            Yf(Mm.bind(null, l, r, e), [e]),
            (l.flags |= 2048),
            Ml(9, { destroy: void 0 }, Cm.bind(null, l, r, a, t), null),
            a
          );
        },
        useId: function () {
          var e = Oe(),
            t = F.identifierPrefix;
          if (Y) {
            var a = pt,
              l = vt;
            ((a = (l & ~(1 << (32 - Ze(l) - 1))).toString(32) + a),
              (t = '_' + t + 'R_' + a),
              (a = ii++),
              0 < a && (t += 'H' + a.toString(32)),
              (t += '_'));
          } else ((a = eg++), (t = '_' + t + 'r_' + a.toString(32) + '_'));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Tc,
        useFormState: Hf,
        useActionState: Hf,
        useOptimistic: function (e) {
          var t = Oe();
          t.memoizedState = t.baseState = e;
          var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = a),
            (t = Ac.bind(null, z, !0, a)),
            (a.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Sc,
        useCacheRefresh: function () {
          return (Oe().memoizedState = ig.bind(null, z));
        },
        useEffectEvent: function (e) {
          var t = Oe(),
            a = { impl: e };
          return (
            (t.memoizedState = a),
            function () {
              if ((q & 2) !== 0) throw Error(g(440));
              return a.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Nc = {
        readContext: we,
        use: Ci,
        useCallback: Qm,
        useContext: we,
        useEffect: Rc,
        useImperativeHandle: Vm,
        useInsertionEffect: qm,
        useLayoutEffect: Gm,
        useMemo: Zm,
        useReducer: Br,
        useRef: Ym,
        useState: function () {
          return Br(Vt);
        },
        useDebugValue: wc,
        useDeferredValue: function (e, t) {
          var a = ce();
          return Km(a, J.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Br(Vt)[0],
            t = ce().memoizedState;
          return [typeof e == 'boolean' ? e : Wn(e), t];
        },
        useSyncExternalStore: Dm,
        useId: Pm,
        useHostTransitionStatus: Tc,
        useFormState: jf,
        useActionState: jf,
        useOptimistic: function (e, t) {
          var a = ce();
          return Lm(a, J, e, t);
        },
        useMemoCache: Sc,
        useCacheRefresh: Wm,
      };
    Nc.useEffectEvent = km;
    var lh = {
      readContext: we,
      use: Ci,
      useCallback: Qm,
      useContext: we,
      useEffect: Rc,
      useImperativeHandle: Vm,
      useInsertionEffect: qm,
      useLayoutEffect: Gm,
      useMemo: Zm,
      useReducer: _u,
      useRef: Ym,
      useState: function () {
        return _u(Vt);
      },
      useDebugValue: wc,
      useDeferredValue: function (e, t) {
        var a = ce();
        return J === null ? xc(a, e, t) : Km(a, J.memoizedState, e, t);
      },
      useTransition: function () {
        var e = _u(Vt)[0],
          t = ce().memoizedState;
        return [typeof e == 'boolean' ? e : Wn(e), t];
      },
      useSyncExternalStore: Dm,
      useId: Pm,
      useHostTransitionStatus: Tc,
      useFormState: Bf,
      useActionState: Bf,
      useOptimistic: function (e, t) {
        var a = ce();
        return J !== null
          ? Lm(a, J, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: Sc,
      useCacheRefresh: Wm,
    };
    lh.useEffectEvent = km;
    function Lu(e, t, a, l) {
      ((t = e.memoizedState),
        (a = a(l, t)),
        (a = a == null ? t : ae({}, t, a)),
        (e.memoizedState = a),
        e.lanes === 0 && (e.updateQueue.baseState = a));
    }
    var No = {
      enqueueSetState: function (e, t, a) {
        e = e._reactInternals;
        var l = Ke(),
          n = da(l);
        ((n.payload = t),
          a != null && (n.callback = a),
          (t = ma(e, n, l)),
          t !== null && (Ue(t, e, l), Rn(t, e, l)));
      },
      enqueueReplaceState: function (e, t, a) {
        e = e._reactInternals;
        var l = Ke(),
          n = da(l);
        ((n.tag = 1),
          (n.payload = t),
          a != null && (n.callback = a),
          (t = ma(e, n, l)),
          t !== null && (Ue(t, e, l), Rn(t, e, l)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var a = Ke(),
          l = da(a);
        ((l.tag = 2),
          t != null && (l.callback = t),
          (t = ma(e, l, a)),
          t !== null && (Ue(t, e, a), Rn(t, e, a)));
      },
    };
    function kf(e, t, a, l, n, r, i) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
          ? e.shouldComponentUpdate(l, r, i)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Ln(a, l) || !Ln(n, r)
            : !0
      );
    }
    function qf(e, t, a, l) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps(a, l),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          t.UNSAFE_componentWillReceiveProps(a, l),
        t.state !== e && No.enqueueReplaceState(t, t.state, null));
    }
    function qa(e, t) {
      var a = t;
      if ('ref' in t) {
        a = {};
        for (var l in t) l !== 'ref' && (a[l] = t[l]);
      }
      if ((e = e.defaultProps)) {
        a === t && (a = ae({}, a));
        for (var n in e) a[n] === void 0 && (a[n] = e[n]);
      }
      return a;
    }
    function nh(e) {
      Wr(e);
    }
    function rh(e) {
      console.error(e);
    }
    function ih(e) {
      Wr(e);
    }
    function ui(e, t) {
      try {
        var a = e.onUncaughtError;
        a(t.value, { componentStack: t.stack });
      } catch (l) {
        setTimeout(function () {
          throw l;
        });
      }
    }
    function Gf(e, t, a) {
      try {
        var l = e.onCaughtError;
        l(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    function Do(e, t, a) {
      return (
        (a = da(a)),
        (a.tag = 3),
        (a.payload = { element: null }),
        (a.callback = function () {
          ui(e, t);
        }),
        a
      );
    }
    function uh(e) {
      return ((e = da(e)), (e.tag = 3), e);
    }
    function oh(e, t, a, l) {
      var n = a.type.getDerivedStateFromError;
      if (typeof n == 'function') {
        var r = l.value;
        ((e.payload = function () {
          return n(r);
        }),
          (e.callback = function () {
            Gf(t, a, l);
          }));
      }
      var i = a.stateNode;
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (e.callback = function () {
          (Gf(t, a, l),
            typeof n != 'function' &&
              (ha === null ? (ha = new Set([this])) : ha.add(this)));
          var u = l.stack;
          this.componentDidCatch(l.value, {
            componentStack: u !== null ? u : '',
          });
        });
    }
    function og(e, t, a, l, n) {
      if (
        ((a.flags |= 32768),
        l !== null && typeof l == 'object' && typeof l.then == 'function')
      ) {
        if (
          ((t = a.alternate),
          t !== null && Yl(t, a, n, !0),
          (a = Fe.current),
          a !== null)
        ) {
          switch (a.tag) {
            case 31:
            case 13:
              return (
                rt === null
                  ? di()
                  : a.alternate === null && ue === 0 && (ue = 3),
                (a.flags &= -257),
                (a.flags |= 65536),
                (a.lanes = n),
                l === ai
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                    Qu(e, l, n)),
                !1
              );
            case 22:
              return (
                (a.flags |= 65536),
                l === ai
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([l]),
                        }),
                        (a.updateQueue = t))
                      : ((a = t.retryQueue),
                        a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                    Qu(e, l, n)),
                !1
              );
          }
          throw Error(g(435, a.tag));
        }
        return (Qu(e, l, n), di(), !1);
      }
      if (Y)
        return (
          (t = Fe.current),
          t !== null
            ? ((t.flags & 65536) === 0 && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = n),
              l !== yo && ((e = Error(g(422), { cause: l })), Hn(lt(e, a))))
            : (l !== yo && ((t = Error(g(423), { cause: l })), Hn(lt(t, a))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (l = lt(l, a)),
              (n = Do(e.stateNode, l, n)),
              zu(e, n),
              ue !== 4 && (ue = 2)),
          !1
        );
      var r = Error(g(520), { cause: l });
      if (
        ((r = lt(r, a)),
        Dn === null ? (Dn = [r]) : Dn.push(r),
        ue !== 4 && (ue = 2),
        t === null)
      )
        return !0;
      ((l = lt(l, a)), (a = t));
      do {
        switch (a.tag) {
          case 3:
            return (
              (a.flags |= 65536),
              (e = n & -n),
              (a.lanes |= e),
              (e = Do(a.stateNode, l, e)),
              zu(a, e),
              !1
            );
          case 1:
            if (
              ((t = a.type),
              (r = a.stateNode),
              (a.flags & 128) === 0 &&
                (typeof t.getDerivedStateFromError == 'function' ||
                  (r !== null &&
                    typeof r.componentDidCatch == 'function' &&
                    (ha === null || !ha.has(r)))))
            )
              return (
                (a.flags |= 65536),
                (n &= -n),
                (a.lanes |= n),
                (n = uh(n)),
                oh(n, e, a, l),
                zu(a, n),
                !1
              );
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    var Dc = Error(g(461)),
      he = !1;
    function Se(e, t, a, l) {
      t.child = e === null ? Rm(t, null, a, l) : Ya(t, e.child, a, l);
    }
    function Xf(e, t, a, l, n) {
      a = a.render;
      var r = t.ref;
      if ('ref' in l) {
        var i = {};
        for (var u in l) u !== 'ref' && (i[u] = l[u]);
      } else i = l;
      return (
        Ba(t),
        (l = vc(e, t, a, i, r, n)),
        (u = pc()),
        e !== null && !he
          ? (gc(e, t, n), Qt(e, t, n))
          : (Y && u && oc(t), (t.flags |= 1), Se(e, t, l, n), t.child)
      );
    }
    function Vf(e, t, a, l, n) {
      if (e === null) {
        var r = a.type;
        return typeof r == 'function' &&
          !uc(r) &&
          r.defaultProps === void 0 &&
          a.compare === null
          ? ((t.tag = 15), (t.type = r), ch(e, t, r, l, n))
          : ((e = Hr(a.type, null, l, t, t.mode, n)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((r = e.child), !Oc(e, n))) {
        var i = r.memoizedProps;
        if (
          ((a = a.compare),
          (a = a !== null ? a : Ln),
          a(i, l) && e.ref === t.ref)
        )
          return Qt(e, t, n);
      }
      return (
        (t.flags |= 1),
        (e = Yt(r, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function ch(e, t, a, l, n) {
      if (e !== null) {
        var r = e.memoizedProps;
        if (Ln(r, l) && e.ref === t.ref)
          if (((he = !1), (t.pendingProps = l = r), Oc(e, n)))
            (e.flags & 131072) !== 0 && (he = !0);
          else return ((t.lanes = e.lanes), Qt(e, t, n));
      }
      return Oo(e, t, a, l, n);
    }
    function sh(e, t, a, l) {
      var n = l.children,
        r = e !== null ? e.memoizedState : null;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        l.mode === 'hidden')
      ) {
        if ((t.flags & 128) !== 0) {
          if (((r = r !== null ? r.baseLanes | a : a), e !== null)) {
            for (l = t.child = e.child, n = 0; l !== null; )
              ((n = n | l.lanes | l.childLanes), (l = l.sibling));
            l = n & ~r;
          } else ((l = 0), (t.child = null));
          return Qf(e, t, r, a, l);
        }
        if ((a & 536870912) !== 0)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && jr(t, r !== null ? r.cachePool : null),
            r !== null ? _f(t, r) : Ro(),
            Tm(t));
        else
          return (
            (l = t.lanes = 536870912),
            Qf(e, t, r !== null ? r.baseLanes | a : a, a, l)
          );
      } else
        r !== null
          ? (jr(t, r.cachePool), _f(t, r), la(t), (t.memoizedState = null))
          : (e !== null && jr(t, null), Ro(), la(t));
      return (Se(e, t, n, a), t.child);
    }
    function vn(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function Qf(e, t, a, l, n) {
      var r = fc();
      return (
        (r = r === null ? null : { parent: me._currentValue, pool: r }),
        (t.memoizedState = { baseLanes: a, cachePool: r }),
        e !== null && jr(t, null),
        Ro(),
        Tm(t),
        e !== null && Yl(e, t, l, !0),
        (t.childLanes = n),
        null
      );
    }
    function kr(e, t) {
      return (
        (t = oi({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Zf(e, t, a) {
      return (
        Ya(t, e.child, null, a),
        (e = kr(t, t.pendingProps)),
        (e.flags |= 2),
        qe(t),
        (t.memoizedState = null),
        e
      );
    }
    function cg(e, t, a) {
      var l = t.pendingProps,
        n = (t.flags & 128) !== 0;
      if (((t.flags &= -129), e === null)) {
        if (Y) {
          if (l.mode === 'hidden')
            return ((e = kr(t, l)), (t.lanes = 536870912), vn(null, e));
          if (
            (wo(t),
            (e = te)
              ? ((e = ay(e, nt)),
                (e = e !== null && e.data === '&' ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ba !== null ? { id: vt, overflow: pt } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (a = ym(e)),
                  (a.return = t),
                  (t.child = a),
                  (Re = t),
                  (te = null)))
              : (e = null),
            e === null)
          )
            throw Sa(t);
          return ((t.lanes = 536870912), null);
        }
        return kr(t, l);
      }
      var r = e.memoizedState;
      if (r !== null) {
        var i = r.dehydrated;
        if ((wo(t), n))
          if (t.flags & 256) ((t.flags &= -257), (t = Zf(e, t, a)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(g(558));
        else if (
          (he || Yl(e, t, a, !1), (n = (a & e.childLanes) !== 0), he || n)
        ) {
          if (
            ((l = F),
            l !== null && ((i = qd(l, a)), i !== 0 && i !== r.retryLane))
          )
            throw ((r.retryLane = i), Qa(e, i), Ue(l, e, i), Dc);
          (di(), (t = Zf(e, t, a)));
        } else
          ((e = r.treeContext),
            (te = it(i.nextSibling)),
            (Re = t),
            (Y = !0),
            (fa = null),
            (nt = !1),
            e !== null && pm(t, e),
            (t = kr(t, l)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = Yt(e.child, { mode: l.mode, children: l.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function qr(e, t) {
      var a = t.ref;
      if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != 'function' && typeof a != 'object') throw Error(g(284));
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Oo(e, t, a, l, n) {
      return (
        Ba(t),
        (a = vc(e, t, a, l, void 0, n)),
        (l = pc()),
        e !== null && !he
          ? (gc(e, t, n), Qt(e, t, n))
          : (Y && l && oc(t), (t.flags |= 1), Se(e, t, a, n), t.child)
      );
    }
    function Kf(e, t, a, l, n, r) {
      return (
        Ba(t),
        (t.updateQueue = null),
        (a = Nm(t, l, a, n)),
        Am(e),
        (l = pc()),
        e !== null && !he
          ? (gc(e, t, r), Qt(e, t, r))
          : (Y && l && oc(t), (t.flags |= 1), Se(e, t, a, r), t.child)
      );
    }
    function Jf(e, t, a, l, n) {
      if ((Ba(t), t.stateNode === null)) {
        var r = yl,
          i = a.contextType;
        (typeof i == 'object' && i !== null && (r = we(i)),
          (r = new a(l, r)),
          (t.memoizedState =
            r.state !== null && r.state !== void 0 ? r.state : null),
          (r.updater = No),
          (t.stateNode = r),
          (r._reactInternals = t),
          (r = t.stateNode),
          (r.props = l),
          (r.state = t.memoizedState),
          (r.refs = {}),
          mc(t),
          (i = a.contextType),
          (r.context = typeof i == 'object' && i !== null ? we(i) : yl),
          (r.state = t.memoizedState),
          (i = a.getDerivedStateFromProps),
          typeof i == 'function' &&
            (Lu(t, a, i, l), (r.state = t.memoizedState)),
          typeof a.getDerivedStateFromProps == 'function' ||
            typeof r.getSnapshotBeforeUpdate == 'function' ||
            (typeof r.UNSAFE_componentWillMount != 'function' &&
              typeof r.componentWillMount != 'function') ||
            ((i = r.state),
            typeof r.componentWillMount == 'function' && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == 'function' &&
              r.UNSAFE_componentWillMount(),
            i !== r.state && No.enqueueReplaceState(r, r.state, null),
            xn(t, l, r, n),
            wn(),
            (r.state = t.memoizedState)),
          typeof r.componentDidMount == 'function' && (t.flags |= 4194308),
          (l = !0));
      } else if (e === null) {
        r = t.stateNode;
        var u = t.memoizedProps,
          o = qa(a, u);
        r.props = o;
        var c = r.context,
          d = a.contextType;
        ((i = yl), typeof d == 'object' && d !== null && (i = we(d)));
        var m = a.getDerivedStateFromProps;
        ((d =
          typeof m == 'function' ||
          typeof r.getSnapshotBeforeUpdate == 'function'),
          (u = t.pendingProps !== u),
          d ||
            (typeof r.UNSAFE_componentWillReceiveProps != 'function' &&
              typeof r.componentWillReceiveProps != 'function') ||
            ((u || c !== i) && qf(t, r, l, i)),
          (ea = !1));
        var h = t.memoizedState;
        ((r.state = h),
          xn(t, l, r, n),
          wn(),
          (c = t.memoizedState),
          u || h !== c || ea
            ? (typeof m == 'function' &&
                (Lu(t, a, m, l), (c = t.memoizedState)),
              (o = ea || kf(t, a, o, l, h, c, i))
                ? (d ||
                    (typeof r.UNSAFE_componentWillMount != 'function' &&
                      typeof r.componentWillMount != 'function') ||
                    (typeof r.componentWillMount == 'function' &&
                      r.componentWillMount(),
                    typeof r.UNSAFE_componentWillMount == 'function' &&
                      r.UNSAFE_componentWillMount()),
                  typeof r.componentDidMount == 'function' &&
                    (t.flags |= 4194308))
                : (typeof r.componentDidMount == 'function' &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = l),
                  (t.memoizedState = c)),
              (r.props = l),
              (r.state = c),
              (r.context = i),
              (l = o))
            : (typeof r.componentDidMount == 'function' && (t.flags |= 4194308),
              (l = !1)));
      } else {
        ((r = t.stateNode),
          So(e, t),
          (i = t.memoizedProps),
          (d = qa(a, i)),
          (r.props = d),
          (m = t.pendingProps),
          (h = r.context),
          (c = a.contextType),
          (o = yl),
          typeof c == 'object' && c !== null && (o = we(c)),
          (u = a.getDerivedStateFromProps),
          (c =
            typeof u == 'function' ||
            typeof r.getSnapshotBeforeUpdate == 'function') ||
            (typeof r.UNSAFE_componentWillReceiveProps != 'function' &&
              typeof r.componentWillReceiveProps != 'function') ||
            ((i !== m || h !== o) && qf(t, r, l, o)),
          (ea = !1),
          (h = t.memoizedState),
          (r.state = h),
          xn(t, l, r, n),
          wn());
        var v = t.memoizedState;
        i !== m ||
        h !== v ||
        ea ||
        (e !== null && e.dependencies !== null && ti(e.dependencies))
          ? (typeof u == 'function' && (Lu(t, a, u, l), (v = t.memoizedState)),
            (d =
              ea ||
              kf(t, a, d, l, h, v, o) ||
              (e !== null && e.dependencies !== null && ti(e.dependencies)))
              ? (c ||
                  (typeof r.UNSAFE_componentWillUpdate != 'function' &&
                    typeof r.componentWillUpdate != 'function') ||
                  (typeof r.componentWillUpdate == 'function' &&
                    r.componentWillUpdate(l, v, o),
                  typeof r.UNSAFE_componentWillUpdate == 'function' &&
                    r.UNSAFE_componentWillUpdate(l, v, o)),
                typeof r.componentDidUpdate == 'function' && (t.flags |= 4),
                typeof r.getSnapshotBeforeUpdate == 'function' &&
                  (t.flags |= 1024))
              : (typeof r.componentDidUpdate != 'function' ||
                  (i === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                typeof r.getSnapshotBeforeUpdate != 'function' ||
                  (i === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = l),
                (t.memoizedState = v)),
            (r.props = l),
            (r.state = v),
            (r.context = o),
            (l = d))
          : (typeof r.componentDidUpdate != 'function' ||
              (i === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != 'function' ||
              (i === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (l = !1));
      }
      return (
        (r = l),
        qr(e, t),
        (l = (t.flags & 128) !== 0),
        r || l
          ? ((r = t.stateNode),
            (a =
              l && typeof a.getDerivedStateFromError != 'function'
                ? null
                : r.render()),
            (t.flags |= 1),
            e !== null && l
              ? ((t.child = Ya(t, e.child, null, n)),
                (t.child = Ya(t, null, a, n)))
              : Se(e, t, a, n),
            (t.memoizedState = r.state),
            (e = t.child))
          : (e = Qt(e, t, n)),
        e
      );
    }
    function Ff(e, t, a, l) {
      return (ja(), (t.flags |= 256), Se(e, t, a, l), t.child);
    }
    var Uu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Hu(e) {
      return { baseLanes: e, cachePool: bm() };
    }
    function ju(e, t, a) {
      return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Xe), e);
    }
    function fh(e, t, a) {
      var l = t.pendingProps,
        n = !1,
        r = (t.flags & 128) !== 0,
        i;
      if (
        ((i = r) ||
          (i =
            e !== null && e.memoizedState === null
              ? !1
              : (oe.current & 2) !== 0),
        i && ((n = !0), (t.flags &= -129)),
        (i = (t.flags & 32) !== 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (Y) {
          if (
            (n ? aa(t) : la(t),
            (e = te)
              ? ((e = ay(e, nt)),
                (e = e !== null && e.data !== '&' ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ba !== null ? { id: vt, overflow: pt } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (a = ym(e)),
                  (a.return = t),
                  (t.child = a),
                  (Re = t),
                  (te = null)))
              : (e = null),
            e === null)
          )
            throw Sa(t);
          return (Xo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var u = l.children;
        return (
          (l = l.fallback),
          n
            ? (la(t),
              (n = t.mode),
              (u = oi({ mode: 'hidden', children: u }, n)),
              (l = _a(l, n, a, null)),
              (u.return = t),
              (l.return = t),
              (u.sibling = l),
              (t.child = u),
              (l = t.child),
              (l.memoizedState = Hu(a)),
              (l.childLanes = ju(e, i, a)),
              (t.memoizedState = Uu),
              vn(null, l))
            : (aa(t), Co(t, u))
        );
      }
      var o = e.memoizedState;
      if (o !== null && ((u = o.dehydrated), u !== null)) {
        if (r)
          t.flags & 256
            ? (aa(t), (t.flags &= -257), (t = Bu(e, t, a)))
            : t.memoizedState !== null
              ? (la(t), (t.child = e.child), (t.flags |= 128), (t = null))
              : (la(t),
                (u = l.fallback),
                (n = t.mode),
                (l = oi({ mode: 'visible', children: l.children }, n)),
                (u = _a(u, n, a, null)),
                (u.flags |= 2),
                (l.return = t),
                (u.return = t),
                (l.sibling = u),
                (t.child = l),
                Ya(t, e.child, null, a),
                (l = t.child),
                (l.memoizedState = Hu(a)),
                (l.childLanes = ju(e, i, a)),
                (t.memoizedState = Uu),
                (t = vn(null, l)));
        else if ((aa(t), Xo(u))) {
          if (((i = u.nextSibling && u.nextSibling.dataset), i)) var c = i.dgst;
          ((i = c),
            (l = Error(g(419))),
            (l.stack = ''),
            (l.digest = i),
            Hn({ value: l, source: null, stack: null }),
            (t = Bu(e, t, a)));
        } else if (
          (he || Yl(e, t, a, !1), (i = (a & e.childLanes) !== 0), he || i)
        ) {
          if (
            ((i = F),
            i !== null && ((l = qd(i, a)), l !== 0 && l !== o.retryLane))
          )
            throw ((o.retryLane = l), Qa(e, l), Ue(i, e, l), Dc);
          (Go(u) || di(), (t = Bu(e, t, a)));
        } else
          Go(u)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = o.treeContext),
              (te = it(u.nextSibling)),
              (Re = t),
              (Y = !0),
              (fa = null),
              (nt = !1),
              e !== null && pm(t, e),
              (t = Co(t, l.children)),
              (t.flags |= 4096));
        return t;
      }
      return n
        ? (la(t),
          (u = l.fallback),
          (n = t.mode),
          (o = e.child),
          (c = o.sibling),
          (l = Yt(o, { mode: 'hidden', children: l.children })),
          (l.subtreeFlags = o.subtreeFlags & 65011712),
          c !== null
            ? (u = Yt(c, u))
            : ((u = _a(u, n, a, null)), (u.flags |= 2)),
          (u.return = t),
          (l.return = t),
          (l.sibling = u),
          (t.child = l),
          vn(null, l),
          (l = t.child),
          (u = e.child.memoizedState),
          u === null
            ? (u = Hu(a))
            : ((n = u.cachePool),
              n !== null
                ? ((o = me._currentValue),
                  (n = n.parent !== o ? { parent: o, pool: o } : n))
                : (n = bm()),
              (u = { baseLanes: u.baseLanes | a, cachePool: n })),
          (l.memoizedState = u),
          (l.childLanes = ju(e, i, a)),
          (t.memoizedState = Uu),
          vn(e.child, l))
        : (aa(t),
          (a = e.child),
          (e = a.sibling),
          (a = Yt(a, { mode: 'visible', children: l.children })),
          (a.return = t),
          (a.sibling = null),
          e !== null &&
            ((i = t.deletions),
            i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
          (t.child = a),
          (t.memoizedState = null),
          a);
    }
    function Co(e, t) {
      return (
        (t = oi({ mode: 'visible', children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function oi(e, t) {
      return ((e = Ge(22, e, null, t)), (e.lanes = 0), e);
    }
    function Bu(e, t, a) {
      return (
        Ya(t, e.child, null, a),
        (e = Co(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function $f(e, t, a) {
      e.lanes |= t;
      var l = e.alternate;
      (l !== null && (l.lanes |= t), po(e.return, t, a));
    }
    function Yu(e, t, a, l, n, r) {
      var i = e.memoizedState;
      i === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: n,
            treeForkCount: r,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = l),
          (i.tail = a),
          (i.tailMode = n),
          (i.treeForkCount = r));
    }
    function dh(e, t, a) {
      var l = t.pendingProps,
        n = l.revealOrder,
        r = l.tail;
      l = l.children;
      var i = oe.current,
        u = (i & 2) !== 0;
      if (
        (u ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
        P(oe, i),
        Se(e, t, l, a),
        (l = Y ? Un : 0),
        !u && e !== null && (e.flags & 128) !== 0)
      )
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $f(e, a, t);
          else if (e.tag === 19) $f(e, a, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (n) {
        case 'forwards':
          for (a = t.child, n = null; a !== null; )
            ((e = a.alternate),
              e !== null && ni(e) === null && (n = a),
              (a = a.sibling));
          ((a = n),
            a === null
              ? ((n = t.child), (t.child = null))
              : ((n = a.sibling), (a.sibling = null)),
            Yu(t, !1, n, a, r, l));
          break;
        case 'backwards':
        case 'unstable_legacy-backwards':
          for (a = null, n = t.child, t.child = null; n !== null; ) {
            if (((e = n.alternate), e !== null && ni(e) === null)) {
              t.child = n;
              break;
            }
            ((e = n.sibling), (n.sibling = a), (a = n), (n = e));
          }
          Yu(t, !0, a, null, r, l);
          break;
        case 'together':
          Yu(t, !1, null, null, void 0, l);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Qt(e, t, a) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ra |= t.lanes),
        (a & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((Yl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(g(153));
      if (t.child !== null) {
        for (
          e = t.child, a = Yt(e, e.pendingProps), t.child = a, a.return = t;
          e.sibling !== null;

        )
          ((e = e.sibling),
            (a = a.sibling = Yt(e, e.pendingProps)),
            (a.return = t));
        a.sibling = null;
      }
      return t.child;
    }
    function Oc(e, t) {
      return (e.lanes & t) !== 0
        ? !0
        : ((e = e.dependencies), !!(e !== null && ti(e)));
    }
    function sg(e, t, a) {
      switch (t.tag) {
        case 3:
          (Jr(t, t.stateNode.containerInfo),
            ta(t, me, e.memoizedState.cache),
            ja());
          break;
        case 27:
        case 5:
          lo(t);
          break;
        case 4:
          Jr(t, t.stateNode.containerInfo);
          break;
        case 10:
          ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), wo(t), null);
          break;
        case 13:
          var l = t.memoizedState;
          if (l !== null)
            return l.dehydrated !== null
              ? (aa(t), (t.flags |= 128), null)
              : (a & t.child.childLanes) !== 0
                ? fh(e, t, a)
                : (aa(t), (e = Qt(e, t, a)), e !== null ? e.sibling : null);
          aa(t);
          break;
        case 19:
          var n = (e.flags & 128) !== 0;
          if (
            ((l = (a & t.childLanes) !== 0),
            l || (Yl(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
            n)
          ) {
            if (l) return dh(e, t, a);
            t.flags |= 128;
          }
          if (
            ((n = t.memoizedState),
            n !== null &&
              ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
            P(oe, oe.current),
            l)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), sh(e, t, a, t.pendingProps));
        case 24:
          ta(t, me, e.memoizedState.cache);
      }
      return Qt(e, t, a);
    }
    function mh(e, t, a) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) he = !0;
        else {
          if (!Oc(e, a) && (t.flags & 128) === 0)
            return ((he = !1), sg(e, t, a));
          he = (e.flags & 131072) !== 0;
        }
      else ((he = !1), Y && (t.flags & 1048576) !== 0 && vm(t, Un, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            var l = t.pendingProps;
            if (((e = Ca(t.elementType)), (t.type = e), typeof e == 'function'))
              uc(e)
                ? ((l = qa(e, l)), (t.tag = 1), (t = Jf(null, t, e, l, a)))
                : ((t.tag = 0), (t = Oo(null, t, e, l, a)));
            else {
              if (e != null) {
                var n = e.$$typeof;
                if (n === Ko) {
                  ((t.tag = 11), (t = Xf(null, t, e, l, a)));
                  break e;
                } else if (n === Jo) {
                  ((t.tag = 14), (t = Vf(null, t, e, l, a)));
                  break e;
                }
              }
              throw ((t = to(e) || e), Error(g(306, t, '')));
            }
          }
          return t;
        case 0:
          return Oo(e, t, t.type, t.pendingProps, a);
        case 1:
          return ((l = t.type), (n = qa(l, t.pendingProps)), Jf(e, t, l, n, a));
        case 3:
          e: {
            if ((Jr(t, t.stateNode.containerInfo), e === null))
              throw Error(g(387));
            l = t.pendingProps;
            var r = t.memoizedState;
            ((n = r.element), So(e, t), xn(t, l, null, a));
            var i = t.memoizedState;
            if (
              ((l = i.cache),
              ta(t, me, l),
              l !== r.cache && go(t, [me], a, !0),
              wn(),
              (l = i.element),
              r.isDehydrated)
            )
              if (
                ((r = { element: l, isDehydrated: !1, cache: i.cache }),
                (t.updateQueue.baseState = r),
                (t.memoizedState = r),
                t.flags & 256)
              ) {
                t = Ff(e, t, l, a);
                break e;
              } else if (l !== n) {
                ((n = lt(Error(g(424)), t)), Hn(n), (t = Ff(e, t, l, a)));
                break e;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                }
                for (
                  te = it(e.firstChild),
                    Re = t,
                    Y = !0,
                    fa = null,
                    nt = !0,
                    a = Rm(t, null, l, a),
                    t.child = a;
                  a;

                )
                  ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
              }
            else {
              if ((ja(), l === n)) {
                t = Qt(e, t, a);
                break e;
              }
              Se(e, t, l, a);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            qr(e, t),
            e === null
              ? (a = gd(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = a)
                : Y ||
                  ((a = t.type),
                  (e = t.pendingProps),
                  (l = vi(sa.current).createElement(a)),
                  (l[Ee] = t),
                  (l[He] = e),
                  xe(l, a, e),
                  ge(l),
                  (t.stateNode = l))
              : (t.memoizedState = gd(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            lo(t),
            e === null &&
              Y &&
              ((l = t.stateNode = ly(t.type, t.pendingProps, sa.current)),
              (Re = t),
              (nt = !0),
              (n = te),
              xa(t.type) ? ((Vo = n), (te = it(l.firstChild))) : (te = n)),
            Se(e, t, t.pendingProps.children, a),
            qr(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              Y &&
              ((n = l = te) &&
                ((l = Bg(l, t.type, t.pendingProps, nt)),
                l !== null
                  ? ((t.stateNode = l),
                    (Re = t),
                    (te = it(l.firstChild)),
                    (nt = !1),
                    (n = !0))
                  : (n = !1)),
              n || Sa(t)),
            lo(t),
            (n = t.type),
            (r = t.pendingProps),
            (i = e !== null ? e.memoizedProps : null),
            (l = r.children),
            ko(n, r) ? (l = null) : i !== null && ko(n, i) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((n = vc(e, t, tg, null, null, a)), (Gn._currentValue = n)),
            qr(e, t),
            Se(e, t, l, a),
            t.child
          );
        case 6:
          return (
            e === null &&
              Y &&
              ((e = a = te) &&
                ((a = Yg(a, t.pendingProps, nt)),
                a !== null
                  ? ((t.stateNode = a), (Re = t), (te = null), (e = !0))
                  : (e = !1)),
              e || Sa(t)),
            null
          );
        case 13:
          return fh(e, t, a);
        case 4:
          return (
            Jr(t, t.stateNode.containerInfo),
            (l = t.pendingProps),
            e === null ? (t.child = Ya(t, null, l, a)) : Se(e, t, l, a),
            t.child
          );
        case 11:
          return Xf(e, t, t.type, t.pendingProps, a);
        case 7:
          return (Se(e, t, t.pendingProps, a), t.child);
        case 8:
          return (Se(e, t, t.pendingProps.children, a), t.child);
        case 12:
          return (Se(e, t, t.pendingProps.children, a), t.child);
        case 10:
          return (
            (l = t.pendingProps),
            ta(t, t.type, l.value),
            Se(e, t, l.children, a),
            t.child
          );
        case 9:
          return (
            (n = t.type._context),
            (l = t.pendingProps.children),
            Ba(t),
            (n = we(n)),
            (l = l(n)),
            (t.flags |= 1),
            Se(e, t, l, a),
            t.child
          );
        case 14:
          return Vf(e, t, t.type, t.pendingProps, a);
        case 15:
          return ch(e, t, t.type, t.pendingProps, a);
        case 19:
          return dh(e, t, a);
        case 31:
          return cg(e, t, a);
        case 22:
          return sh(e, t, a, t.pendingProps);
        case 24:
          return (
            Ba(t),
            (l = we(me)),
            e === null
              ? ((n = fc()),
                n === null &&
                  ((n = F),
                  (r = sc()),
                  (n.pooledCache = r),
                  r.refCount++,
                  r !== null && (n.pooledCacheLanes |= a),
                  (n = r)),
                (t.memoizedState = { parent: l, cache: n }),
                mc(t),
                ta(t, me, n))
              : ((e.lanes & a) !== 0 && (So(e, t), xn(t, null, null, a), wn()),
                (n = e.memoizedState),
                (r = t.memoizedState),
                n.parent !== l
                  ? ((n = { parent: l, cache: l }),
                    (t.memoizedState = n),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = n),
                    ta(t, me, l))
                  : ((l = r.cache),
                    ta(t, me, l),
                    l !== n.cache && go(t, [me], a, !0))),
            Se(e, t, t.pendingProps.children, a),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(g(156, t.tag));
    }
    function Ct(e) {
      e.flags |= 4;
    }
    function ku(e, t, a, l, n) {
      if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (n & 335544128) === n))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (jh()) e.flags |= 8192;
          else throw ((Ua = ai), dc);
      } else e.flags &= -16777217;
    }
    function Pf(e, t) {
      if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
      else if (((e.flags |= 16777216), !iy(t)))
        if (jh()) e.flags |= 8192;
        else throw ((Ua = ai), dc);
    }
    function Tr(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag !== 22 ? Bd() : 536870912), (e.lanes |= t), (zl |= t)));
    }
    function cn(e, t) {
      if (!Y)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail;
            for (var a = null; t !== null; )
              (t.alternate !== null && (a = t), (t = t.sibling));
            a === null ? (e.tail = null) : (a.sibling = null);
            break;
          case 'collapsed':
            a = e.tail;
            for (var l = null; a !== null; )
              (a.alternate !== null && (l = a), (a = a.sibling));
            l === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (l.sibling = null);
        }
    }
    function ee(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        a = 0,
        l = 0;
      if (t)
        for (var n = e.child; n !== null; )
          ((a |= n.lanes | n.childLanes),
            (l |= n.subtreeFlags & 65011712),
            (l |= n.flags & 65011712),
            (n.return = e),
            (n = n.sibling));
      else
        for (n = e.child; n !== null; )
          ((a |= n.lanes | n.childLanes),
            (l |= n.subtreeFlags),
            (l |= n.flags),
            (n.return = e),
            (n = n.sibling));
      return ((e.subtreeFlags |= l), (e.childLanes = a), t);
    }
    function fg(e, t, a) {
      var l = t.pendingProps;
      switch ((cc(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (ee(t), null);
        case 1:
          return (ee(t), null);
        case 3:
          return (
            (a = t.stateNode),
            (l = null),
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            kt(me),
            Al(),
            a.pendingContext &&
              ((a.context = a.pendingContext), (a.pendingContext = null)),
            (e === null || e.child === null) &&
              (ll(t)
                ? Ct(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), Mu())),
            ee(t),
            null
          );
        case 26:
          var n = t.type,
            r = t.memoizedState;
          return (
            e === null
              ? (Ct(t),
                r !== null ? (ee(t), Pf(t, r)) : (ee(t), ku(t, n, null, l, a)))
              : r
                ? r !== e.memoizedState
                  ? (Ct(t), ee(t), Pf(t, r))
                  : (ee(t), (t.flags &= -16777217))
                : ((e = e.memoizedProps),
                  e !== l && Ct(t),
                  ee(t),
                  ku(t, n, e, l, a)),
            null
          );
        case 27:
          if (
            (Fr(t),
            (a = sa.current),
            (n = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== l && Ct(t);
          else {
            if (!l) {
              if (t.stateNode === null) throw Error(g(166));
              return (ee(t), null);
            }
            ((e = bt.current),
              ll(t) ? Af(t, e) : ((e = ly(n, l, a)), (t.stateNode = e), Ct(t)));
          }
          return (ee(t), null);
        case 5:
          if ((Fr(t), (n = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== l && Ct(t);
          else {
            if (!l) {
              if (t.stateNode === null) throw Error(g(166));
              return (ee(t), null);
            }
            if (((r = bt.current), ll(t))) Af(t, r);
            else {
              var i = vi(sa.current);
              switch (r) {
                case 1:
                  r = i.createElementNS('http://www.w3.org/2000/svg', n);
                  break;
                case 2:
                  r = i.createElementNS(
                    'http://www.w3.org/1998/Math/MathML',
                    n
                  );
                  break;
                default:
                  switch (n) {
                    case 'svg':
                      r = i.createElementNS('http://www.w3.org/2000/svg', n);
                      break;
                    case 'math':
                      r = i.createElementNS(
                        'http://www.w3.org/1998/Math/MathML',
                        n
                      );
                      break;
                    case 'script':
                      ((r = i.createElement('div')),
                        (r.innerHTML = '<script><\/script>'),
                        (r = r.removeChild(r.firstChild)));
                      break;
                    case 'select':
                      ((r =
                        typeof l.is == 'string'
                          ? i.createElement('select', { is: l.is })
                          : i.createElement('select')),
                        l.multiple
                          ? (r.multiple = !0)
                          : l.size && (r.size = l.size));
                      break;
                    default:
                      r =
                        typeof l.is == 'string'
                          ? i.createElement(n, { is: l.is })
                          : i.createElement(n);
                  }
              }
              ((r[Ee] = t), (r[He] = l));
              e: for (i = t.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) r.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
                if (i === t) break e;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === t) break e;
                  i = i.return;
                }
                ((i.sibling.return = i.return), (i = i.sibling));
              }
              t.stateNode = r;
              e: switch ((xe(r, n, l), n)) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  l = !!l.autoFocus;
                  break e;
                case 'img':
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
              l && Ct(t);
            }
          }
          return (
            ee(t),
            ku(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              a
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== l && Ct(t);
          else {
            if (typeof l != 'string' && t.stateNode === null)
              throw Error(g(166));
            if (((e = sa.current), ll(t))) {
              if (
                ((e = t.stateNode),
                (a = t.memoizedProps),
                (l = null),
                (n = Re),
                n !== null)
              )
                switch (n.tag) {
                  case 27:
                  case 5:
                    l = n.memoizedProps;
                }
              ((e[Ee] = t),
                (e = !!(
                  e.nodeValue === a ||
                  (l !== null && l.suppressHydrationWarning === !0) ||
                  Ih(e.nodeValue, a)
                )),
                e || Sa(t, !0));
            } else
              ((e = vi(e).createTextNode(l)), (e[Ee] = t), (t.stateNode = e));
          }
          return (ee(t), null);
        case 31:
          if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((l = ll(t)), a !== null)) {
              if (e === null) {
                if (!l) throw Error(g(318));
                if (
                  ((e = t.memoizedState),
                  (e = e !== null ? e.dehydrated : null),
                  !e)
                )
                  throw Error(g(557));
                e[Ee] = t;
              } else
                (ja(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4));
              (ee(t), (e = !1));
            } else
              ((a = Mu()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (e = !0));
            if (!e) return t.flags & 256 ? (qe(t), t) : (qe(t), null);
            if ((t.flags & 128) !== 0) throw Error(g(558));
          }
          return (ee(t), null);
        case 13:
          if (
            ((l = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((n = ll(t)), l !== null && l.dehydrated !== null)) {
              if (e === null) {
                if (!n) throw Error(g(318));
                if (
                  ((n = t.memoizedState),
                  (n = n !== null ? n.dehydrated : null),
                  !n)
                )
                  throw Error(g(317));
                n[Ee] = t;
              } else
                (ja(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4));
              (ee(t), (n = !1));
            } else
              ((n = Mu()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (n = !0));
            if (!n) return t.flags & 256 ? (qe(t), t) : (qe(t), null);
          }
          return (
            qe(t),
            (t.flags & 128) !== 0
              ? ((t.lanes = a), t)
              : ((a = l !== null),
                (e = e !== null && e.memoizedState !== null),
                a &&
                  ((l = t.child),
                  (n = null),
                  l.alternate !== null &&
                    l.alternate.memoizedState !== null &&
                    l.alternate.memoizedState.cachePool !== null &&
                    (n = l.alternate.memoizedState.cachePool.pool),
                  (r = null),
                  l.memoizedState !== null &&
                    l.memoizedState.cachePool !== null &&
                    (r = l.memoizedState.cachePool.pool),
                  r !== n && (l.flags |= 2048)),
                a !== e && a && (t.child.flags |= 8192),
                Tr(t, t.updateQueue),
                ee(t),
                null)
          );
        case 4:
          return (
            Al(),
            e === null && Hc(t.stateNode.containerInfo),
            ee(t),
            null
          );
        case 10:
          return (kt(t.type), ee(t), null);
        case 19:
          if ((be(oe), (l = t.memoizedState), l === null)) return (ee(t), null);
          if (((n = (t.flags & 128) !== 0), (r = l.rendering), r === null))
            if (n) cn(l, !1);
            else {
              if (ue !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = t.child; e !== null; ) {
                  if (((r = ni(e)), r !== null)) {
                    for (
                      t.flags |= 128,
                        cn(l, !1),
                        e = r.updateQueue,
                        t.updateQueue = e,
                        Tr(t, e),
                        t.subtreeFlags = 0,
                        e = a,
                        a = t.child;
                      a !== null;

                    )
                      (hm(a, e), (a = a.sibling));
                    return (
                      P(oe, (oe.current & 1) | 2),
                      Y && Lt(t, l.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              l.tail !== null &&
                Ve() > si &&
                ((t.flags |= 128), (n = !0), cn(l, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = ni(r)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Tr(t, e),
                  cn(l, !0),
                  l.tail === null &&
                    l.tailMode === 'hidden' &&
                    !r.alternate &&
                    !Y)
                )
                  return (ee(t), null);
              } else
                2 * Ve() - l.renderingStartTime > si &&
                  a !== 536870912 &&
                  ((t.flags |= 128), (n = !0), cn(l, !1), (t.lanes = 4194304));
            l.isBackwards
              ? ((r.sibling = t.child), (t.child = r))
              : ((e = l.last),
                e !== null ? (e.sibling = r) : (t.child = r),
                (l.last = r));
          }
          return l.tail !== null
            ? ((e = l.tail),
              (l.rendering = e),
              (l.tail = e.sibling),
              (l.renderingStartTime = Ve()),
              (e.sibling = null),
              (a = oe.current),
              P(oe, n ? (a & 1) | 2 : a & 1),
              Y && Lt(t, l.treeForkCount),
              e)
            : (ee(t), null);
        case 22:
        case 23:
          return (
            qe(t),
            hc(),
            (l = t.memoizedState !== null),
            e !== null
              ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
              : l && (t.flags |= 8192),
            l
              ? (a & 536870912) !== 0 &&
                (t.flags & 128) === 0 &&
                (ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : ee(t),
            (a = t.updateQueue),
            a !== null && Tr(t, a.retryQueue),
            (a = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (a = e.memoizedState.cachePool.pool),
            (l = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (l = t.memoizedState.cachePool.pool),
            l !== a && (t.flags |= 2048),
            e !== null && be(La),
            null
          );
        case 24:
          return (
            (a = null),
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            kt(me),
            ee(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(g(156, t.tag));
    }
    function dg(e, t) {
      switch ((cc(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            kt(me),
            Al(),
            (e = t.flags),
            (e & 65536) !== 0 && (e & 128) === 0
              ? ((t.flags = (e & -65537) | 128), t)
              : null
          );
        case 26:
        case 27:
        case 5:
          return (Fr(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((qe(t), t.alternate === null)) throw Error(g(340));
            ja();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (qe(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(g(340));
            ja();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (be(oe), null);
        case 4:
          return (Al(), null);
        case 10:
          return (kt(t.type), null);
        case 22:
        case 23:
          return (
            qe(t),
            hc(),
            e !== null && be(La),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (kt(me), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function hh(e, t) {
      switch ((cc(t), t.tag)) {
        case 3:
          (kt(me), Al());
          break;
        case 26:
        case 27:
        case 5:
          Fr(t);
          break;
        case 4:
          Al();
          break;
        case 31:
          t.memoizedState !== null && qe(t);
          break;
        case 13:
          qe(t);
          break;
        case 19:
          be(oe);
          break;
        case 10:
          kt(t.type);
          break;
        case 22:
        case 23:
          (qe(t), hc(), e !== null && be(La));
          break;
        case 24:
          kt(me);
      }
    }
    function In(e, t) {
      try {
        var a = t.updateQueue,
          l = a !== null ? a.lastEffect : null;
        if (l !== null) {
          var n = l.next;
          a = n;
          do {
            if ((a.tag & e) === e) {
              l = void 0;
              var r = a.create,
                i = a.inst;
              ((l = r()), (i.destroy = l));
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (u) {
        Z(t, t.return, u);
      }
    }
    function Ea(e, t, a) {
      try {
        var l = t.updateQueue,
          n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var r = n.next;
          l = r;
          do {
            if ((l.tag & e) === e) {
              var i = l.inst,
                u = i.destroy;
              if (u !== void 0) {
                ((i.destroy = void 0), (n = t));
                var o = a,
                  c = u;
                try {
                  c();
                } catch (d) {
                  Z(n, o, d);
                }
              }
            }
            l = l.next;
          } while (l !== r);
        }
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    function yh(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        try {
          xm(t, a);
        } catch (l) {
          Z(e, e.return, l);
        }
      }
    }
    function vh(e, t, a) {
      ((a.props = qa(e.type, e.memoizedProps)), (a.state = e.memoizedState));
      try {
        a.componentWillUnmount();
      } catch (l) {
        Z(e, t, l);
      }
    }
    function An(e, t) {
      try {
        var a = e.ref;
        if (a !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var l = e.stateNode;
              break;
            case 30:
              l = e.stateNode;
              break;
            default:
              l = e.stateNode;
          }
          typeof a == 'function' ? (e.refCleanup = a(l)) : (a.current = l);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function gt(e, t) {
      var a = e.ref,
        l = e.refCleanup;
      if (a !== null)
        if (typeof l == 'function')
          try {
            l();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof a == 'function')
          try {
            a(null);
          } catch (n) {
            Z(e, t, n);
          }
        else a.current = null;
    }
    function ph(e) {
      var t = e.type,
        a = e.memoizedProps,
        l = e.stateNode;
      try {
        e: switch (t) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            a.autoFocus && l.focus();
            break e;
          case 'img':
            a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
        }
      } catch (n) {
        Z(e, e.return, n);
      }
    }
    function qu(e, t, a) {
      try {
        var l = e.stateNode;
        (zg(l, e.type, a, t), (l[He] = t));
      } catch (n) {
        Z(e, e.return, n);
      }
    }
    function gh(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && xa(e.type)) ||
        e.tag === 4
      );
    }
    function Gu(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || gh(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && xa(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Mo(e, t, a) {
      var l = e.tag;
      if (l === 5 || l === 6)
        ((e = e.stateNode),
          t
            ? (a.nodeType === 9
                ? a.body
                : a.nodeName === 'HTML'
                  ? a.ownerDocument.body
                  : a
              ).insertBefore(e, t)
            : ((t =
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === 'HTML'
                    ? a.ownerDocument.body
                    : a),
              t.appendChild(e),
              (a = a._reactRootContainer),
              a != null || t.onclick !== null || (t.onclick = jt)));
      else if (
        l !== 4 &&
        (l === 27 && xa(e.type) && ((a = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Mo(e, t, a), e = e.sibling; e !== null; )
          (Mo(e, t, a), (e = e.sibling));
    }
    function ci(e, t, a) {
      var l = e.tag;
      if (l === 5 || l === 6)
        ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
      else if (
        l !== 4 &&
        (l === 27 && xa(e.type) && (a = e.stateNode), (e = e.child), e !== null)
      )
        for (ci(e, t, a), e = e.sibling; e !== null; )
          (ci(e, t, a), (e = e.sibling));
    }
    function bh(e) {
      var t = e.stateNode,
        a = e.memoizedProps;
      try {
        for (var l = e.type, n = t.attributes; n.length; )
          t.removeAttributeNode(n[0]);
        (xe(t, l, a), (t[Ee] = e), (t[He] = a));
      } catch (r) {
        Z(e, e.return, r);
      }
    }
    var Ut = !1,
      de = !1,
      Xu = !1,
      Wf = typeof WeakSet == 'function' ? WeakSet : Set,
      pe = null;
    function mg(e, t) {
      if (((e = e.containerInfo), (Bo = Si), (e = im(e)), nc(e))) {
        if ('selectionStart' in e)
          var a = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            a = ((a = e.ownerDocument) && a.defaultView) || window;
            var l = a.getSelection && a.getSelection();
            if (l && l.rangeCount !== 0) {
              a = l.anchorNode;
              var n = l.anchorOffset,
                r = l.focusNode;
              l = l.focusOffset;
              try {
                (a.nodeType, r.nodeType);
              } catch {
                a = null;
                break e;
              }
              var i = 0,
                u = -1,
                o = -1,
                c = 0,
                d = 0,
                m = e,
                h = null;
              t: for (;;) {
                for (
                  var v;
                  m !== a || (n !== 0 && m.nodeType !== 3) || (u = i + n),
                    m !== r || (l !== 0 && m.nodeType !== 3) || (o = i + l),
                    m.nodeType === 3 && (i += m.nodeValue.length),
                    (v = m.firstChild) !== null;

                )
                  ((h = m), (m = v));
                for (;;) {
                  if (m === e) break t;
                  if (
                    (h === a && ++c === n && (u = i),
                    h === r && ++d === l && (o = i),
                    (v = m.nextSibling) !== null)
                  )
                    break;
                  ((m = h), (h = m.parentNode));
                }
                m = v;
              }
              a = u === -1 || o === -1 ? null : { start: u, end: o };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (
        Yo = { focusedElem: e, selectionRange: a }, Si = !1, pe = t;
        pe !== null;

      )
        if (
          ((t = pe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          ((e.return = t), (pe = e));
        else
          for (; pe !== null; ) {
            switch (((t = pe), (r = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  (e & 4) !== 0 &&
                  ((e = t.updateQueue),
                  (e = e !== null ? e.events : null),
                  e !== null)
                )
                  for (a = 0; a < e.length; a++)
                    ((n = e[a]), (n.ref.impl = n.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((e & 1024) !== 0 && r !== null) {
                  ((e = void 0),
                    (a = t),
                    (n = r.memoizedProps),
                    (r = r.memoizedState),
                    (l = a.stateNode));
                  try {
                    var b = qa(a.type, n);
                    ((e = l.getSnapshotBeforeUpdate(b, r)),
                      (l.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (S) {
                    Z(a, a.return, S);
                  }
                }
                break;
              case 3:
                if ((e & 1024) !== 0) {
                  if (
                    ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                  )
                    qo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case 'HEAD':
                      case 'HTML':
                      case 'BODY':
                        qo(e);
                        break;
                      default:
                        e.textContent = '';
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((e & 1024) !== 0) throw Error(g(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (pe = e));
              break;
            }
            pe = t.return;
          }
    }
    function Sh(e, t, a) {
      var l = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (zt(e, a), l & 4 && In(5, a));
          break;
        case 1:
          if ((zt(e, a), l & 4))
            if (((e = a.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (i) {
                Z(a, a.return, i);
              }
            else {
              var n = qa(a.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  n,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (i) {
                Z(a, a.return, i);
              }
            }
          (l & 64 && yh(a), l & 512 && An(a, a.return));
          break;
        case 3:
          if ((zt(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
            if (((t = null), a.child !== null))
              switch (a.child.tag) {
                case 27:
                case 5:
                  t = a.child.stateNode;
                  break;
                case 1:
                  t = a.child.stateNode;
              }
            try {
              xm(e, t);
            } catch (i) {
              Z(a, a.return, i);
            }
          }
          break;
        case 27:
          t === null && l & 4 && bh(a);
        case 26:
        case 5:
          (zt(e, a), t === null && l & 4 && ph(a), l & 512 && An(a, a.return));
          break;
        case 12:
          zt(e, a);
          break;
        case 31:
          (zt(e, a), l & 4 && wh(e, a));
          break;
        case 13:
          (zt(e, a),
            l & 4 && xh(e, a),
            l & 64 &&
              ((e = a.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((a = Rg.bind(null, a)), kg(e, a)))));
          break;
        case 22:
          if (((l = a.memoizedState !== null || Ut), !l)) {
            ((t = (t !== null && t.memoizedState !== null) || de), (n = Ut));
            var r = de;
            ((Ut = l),
              (de = t) && !r
                ? _t(e, a, (a.subtreeFlags & 8772) !== 0)
                : zt(e, a),
              (Ut = n),
              (de = r));
          }
          break;
        case 30:
          break;
        default:
          zt(e, a);
      }
    }
    function Eh(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Eh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Wo(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var ne = null,
      _e = !1;
    function Mt(e, t, a) {
      for (a = a.child; a !== null; ) (Rh(e, t, a), (a = a.sibling));
    }
    function Rh(e, t, a) {
      if (Qe && typeof Qe.onCommitFiberUnmount == 'function')
        try {
          Qe.onCommitFiberUnmount(Zn, a);
        } catch {}
      switch (a.tag) {
        case 26:
          (de || gt(a, t),
            Mt(e, t, a),
            a.memoizedState
              ? a.memoizedState.count--
              : a.stateNode &&
                ((a = a.stateNode), a.parentNode.removeChild(a)));
          break;
        case 27:
          de || gt(a, t);
          var l = ne,
            n = _e;
          (xa(a.type) && ((ne = a.stateNode), (_e = !1)),
            Mt(e, t, a),
            Cn(a.stateNode),
            (ne = l),
            (_e = n));
          break;
        case 5:
          de || gt(a, t);
        case 6:
          if (
            ((l = ne),
            (n = _e),
            (ne = null),
            Mt(e, t, a),
            (ne = l),
            (_e = n),
            ne !== null)
          )
            if (_e)
              try {
                (ne.nodeType === 9
                  ? ne.body
                  : ne.nodeName === 'HTML'
                    ? ne.ownerDocument.body
                    : ne
                ).removeChild(a.stateNode);
              } catch (r) {
                Z(a, t, r);
              }
            else
              try {
                ne.removeChild(a.stateNode);
              } catch (r) {
                Z(a, t, r);
              }
          break;
        case 18:
          ne !== null &&
            (_e
              ? ((e = ne),
                md(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === 'HTML'
                      ? e.ownerDocument.body
                      : e,
                  a.stateNode
                ),
                Hl(e))
              : md(ne, a.stateNode));
          break;
        case 4:
          ((l = ne),
            (n = _e),
            (ne = a.stateNode.containerInfo),
            (_e = !0),
            Mt(e, t, a),
            (ne = l),
            (_e = n));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Ea(2, a, t), de || Ea(4, a, t), Mt(e, t, a));
          break;
        case 1:
          (de ||
            (gt(a, t),
            (l = a.stateNode),
            typeof l.componentWillUnmount == 'function' && vh(a, t, l)),
            Mt(e, t, a));
          break;
        case 21:
          Mt(e, t, a);
          break;
        case 22:
          ((de = (l = de) || a.memoizedState !== null), Mt(e, t, a), (de = l));
          break;
        default:
          Mt(e, t, a);
      }
    }
    function wh(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Hl(e);
        } catch (a) {
          Z(t, t.return, a);
        }
      }
    }
    function xh(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hl(e);
        } catch (a) {
          Z(t, t.return, a);
        }
    }
    function hg(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new Wf()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new Wf()),
            t
          );
        default:
          throw Error(g(435, e.tag));
      }
    }
    function Ar(e, t) {
      var a = hg(e);
      t.forEach(function (l) {
        if (!a.has(l)) {
          a.add(l);
          var n = wg.bind(null, e, l);
          l.then(n, n);
        }
      });
    }
    function Me(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var n = a[l],
            r = e,
            i = t,
            u = i;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 27:
                if (xa(u.type)) {
                  ((ne = u.stateNode), (_e = !1));
                  break e;
                }
                break;
              case 5:
                ((ne = u.stateNode), (_e = !1));
                break e;
              case 3:
              case 4:
                ((ne = u.stateNode.containerInfo), (_e = !0));
                break e;
            }
            u = u.return;
          }
          if (ne === null) throw Error(g(160));
          (Rh(r, i, n),
            (ne = null),
            (_e = !1),
            (r = n.alternate),
            r !== null && (r.return = null),
            (n.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (Th(t, e), (t = t.sibling));
    }
    var dt = null;
    function Th(e, t) {
      var a = e.alternate,
        l = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Me(t, e),
            ze(e),
            l & 4 && (Ea(3, e, e.return), In(3, e), Ea(5, e, e.return)));
          break;
        case 1:
          (Me(t, e),
            ze(e),
            l & 512 && (de || a === null || gt(a, a.return)),
            l & 64 &&
              Ut &&
              ((e = e.updateQueue),
              e !== null &&
                ((l = e.callbacks),
                l !== null &&
                  ((a = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
          break;
        case 26:
          var n = dt;
          if (
            (Me(t, e),
            ze(e),
            l & 512 && (de || a === null || gt(a, a.return)),
            l & 4)
          ) {
            var r = a !== null ? a.memoizedState : null;
            if (((l = e.memoizedState), a === null))
              if (l === null)
                if (e.stateNode === null) {
                  e: {
                    ((l = e.type),
                      (a = e.memoizedProps),
                      (n = n.ownerDocument || n));
                    t: switch (l) {
                      case 'title':
                        ((r = n.getElementsByTagName('title')[0]),
                          (!r ||
                            r[Fn] ||
                            r[Ee] ||
                            r.namespaceURI === 'http://www.w3.org/2000/svg' ||
                            r.hasAttribute('itemprop')) &&
                            ((r = n.createElement(l)),
                            n.head.insertBefore(
                              r,
                              n.querySelector('head > title')
                            )),
                          xe(r, l, a),
                          (r[Ee] = e),
                          ge(r),
                          (l = r));
                        break e;
                      case 'link':
                        var i = Sd('link', 'href', n).get(l + (a.href || ''));
                        if (i) {
                          for (var u = 0; u < i.length; u++)
                            if (
                              ((r = i[u]),
                              r.getAttribute('href') ===
                                (a.href == null || a.href === ''
                                  ? null
                                  : a.href) &&
                                r.getAttribute('rel') ===
                                  (a.rel == null ? null : a.rel) &&
                                r.getAttribute('title') ===
                                  (a.title == null ? null : a.title) &&
                                r.getAttribute('crossorigin') ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              i.splice(u, 1);
                              break t;
                            }
                        }
                        ((r = n.createElement(l)),
                          xe(r, l, a),
                          n.head.appendChild(r));
                        break;
                      case 'meta':
                        if (
                          (i = Sd('meta', 'content', n).get(
                            l + (a.content || '')
                          ))
                        ) {
                          for (u = 0; u < i.length; u++)
                            if (
                              ((r = i[u]),
                              r.getAttribute('content') ===
                                (a.content == null ? null : '' + a.content) &&
                                r.getAttribute('name') ===
                                  (a.name == null ? null : a.name) &&
                                r.getAttribute('property') ===
                                  (a.property == null ? null : a.property) &&
                                r.getAttribute('http-equiv') ===
                                  (a.httpEquiv == null ? null : a.httpEquiv) &&
                                r.getAttribute('charset') ===
                                  (a.charSet == null ? null : a.charSet))
                            ) {
                              i.splice(u, 1);
                              break t;
                            }
                        }
                        ((r = n.createElement(l)),
                          xe(r, l, a),
                          n.head.appendChild(r));
                        break;
                      default:
                        throw Error(g(468, l));
                    }
                    ((r[Ee] = e), ge(r), (l = r));
                  }
                  e.stateNode = l;
                } else Ed(n, e.type, e.stateNode);
              else e.stateNode = bd(n, l, e.memoizedProps);
            else
              r !== l
                ? (r === null
                    ? a.stateNode !== null &&
                      ((a = a.stateNode), a.parentNode.removeChild(a))
                    : r.count--,
                  l === null
                    ? Ed(n, e.type, e.stateNode)
                    : bd(n, l, e.memoizedProps))
                : l === null &&
                  e.stateNode !== null &&
                  qu(e, e.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          (Me(t, e),
            ze(e),
            l & 512 && (de || a === null || gt(a, a.return)),
            a !== null && l & 4 && qu(e, e.memoizedProps, a.memoizedProps));
          break;
        case 5:
          if (
            (Me(t, e),
            ze(e),
            l & 512 && (de || a === null || gt(a, a.return)),
            e.flags & 32)
          ) {
            n = e.stateNode;
            try {
              Dl(n, '');
            } catch (b) {
              Z(e, e.return, b);
            }
          }
          (l & 4 &&
            e.stateNode != null &&
            ((n = e.memoizedProps), qu(e, n, a !== null ? a.memoizedProps : n)),
            l & 1024 && (Xu = !0));
          break;
        case 6:
          if ((Me(t, e), ze(e), l & 4)) {
            if (e.stateNode === null) throw Error(g(162));
            ((l = e.memoizedProps), (a = e.stateNode));
            try {
              a.nodeValue = l;
            } catch (b) {
              Z(e, e.return, b);
            }
          }
          break;
        case 3:
          if (
            ((Vr = null),
            (n = dt),
            (dt = pi(t.containerInfo)),
            Me(t, e),
            (dt = n),
            ze(e),
            l & 4 && a !== null && a.memoizedState.isDehydrated)
          )
            try {
              Hl(t.containerInfo);
            } catch (b) {
              Z(e, e.return, b);
            }
          Xu && ((Xu = !1), Ah(e));
          break;
        case 4:
          ((l = dt),
            (dt = pi(e.stateNode.containerInfo)),
            Me(t, e),
            ze(e),
            (dt = l));
          break;
        case 12:
          (Me(t, e), ze(e));
          break;
        case 31:
          (Me(t, e),
            ze(e),
            l & 4 &&
              ((l = e.updateQueue),
              l !== null && ((e.updateQueue = null), Ar(e, l))));
          break;
        case 13:
          (Me(t, e),
            ze(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (a !== null && a.memoizedState !== null) &&
              (_i = Ve()),
            l & 4 &&
              ((l = e.updateQueue),
              l !== null && ((e.updateQueue = null), Ar(e, l))));
          break;
        case 22:
          n = e.memoizedState !== null;
          var o = a !== null && a.memoizedState !== null,
            c = Ut,
            d = de;
          if (
            ((Ut = c || n),
            (de = d || o),
            Me(t, e),
            (de = d),
            (Ut = c),
            ze(e),
            l & 8192)
          )
            e: for (
              t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (a === null || o || Ut || de || Ma(e)),
                a = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  o = a = t;
                  try {
                    if (((r = o.stateNode), n))
                      ((i = r.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'));
                    else {
                      u = o.stateNode;
                      var m = o.memoizedProps.style,
                        h =
                          m != null && m.hasOwnProperty('display')
                            ? m.display
                            : null;
                      u.style.display =
                        h == null || typeof h == 'boolean'
                          ? ''
                          : ('' + h).trim();
                    }
                  } catch (b) {
                    Z(o, o.return, b);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  o = t;
                  try {
                    o.stateNode.nodeValue = n ? '' : o.memoizedProps;
                  } catch (b) {
                    Z(o, o.return, b);
                  }
                }
              } else if (t.tag === 18) {
                if (a === null) {
                  o = t;
                  try {
                    var v = o.stateNode;
                    n ? hd(v, !0) : hd(o.stateNode, !1);
                  } catch (b) {
                    Z(o, o.return, b);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break e;
                (a === t && (a = null), (t = t.return));
              }
              (a === t && (a = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          l & 4 &&
            ((l = e.updateQueue),
            l !== null &&
              ((a = l.retryQueue),
              a !== null && ((l.retryQueue = null), Ar(e, a))));
          break;
        case 19:
          (Me(t, e),
            ze(e),
            l & 4 &&
              ((l = e.updateQueue),
              l !== null && ((e.updateQueue = null), Ar(e, l))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (Me(t, e), ze(e));
      }
    }
    function ze(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var a, l = e.return; l !== null; ) {
            if (gh(l)) {
              a = l;
              break;
            }
            l = l.return;
          }
          if (a == null) throw Error(g(160));
          switch (a.tag) {
            case 27:
              var n = a.stateNode,
                r = Gu(e);
              ci(e, r, n);
              break;
            case 5:
              var i = a.stateNode;
              a.flags & 32 && (Dl(i, ''), (a.flags &= -33));
              var u = Gu(e);
              ci(e, u, i);
              break;
            case 3:
            case 4:
              var o = a.stateNode.containerInfo,
                c = Gu(e);
              Mo(e, c, o);
              break;
            default:
              throw Error(g(161));
          }
        } catch (d) {
          Z(e, e.return, d);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ah(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (Ah(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function zt(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (Sh(e, t.alternate, t), (t = t.sibling));
    }
    function Ma(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Ea(4, t, t.return), Ma(t));
            break;
          case 1:
            gt(t, t.return);
            var a = t.stateNode;
            (typeof a.componentWillUnmount == 'function' && vh(t, t.return, a),
              Ma(t));
            break;
          case 27:
            Cn(t.stateNode);
          case 26:
          case 5:
            (gt(t, t.return), Ma(t));
            break;
          case 22:
            t.memoizedState === null && Ma(t);
            break;
          case 30:
            Ma(t);
            break;
          default:
            Ma(t);
        }
        e = e.sibling;
      }
    }
    function _t(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var l = t.alternate,
          n = e,
          r = t,
          i = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            (_t(n, r, a), In(4, r));
            break;
          case 1:
            if (
              (_t(n, r, a),
              (l = r),
              (n = l.stateNode),
              typeof n.componentDidMount == 'function')
            )
              try {
                n.componentDidMount();
              } catch (c) {
                Z(l, l.return, c);
              }
            if (((l = r), (n = l.updateQueue), n !== null)) {
              var u = l.stateNode;
              try {
                var o = n.shared.hiddenCallbacks;
                if (o !== null)
                  for (
                    n.shared.hiddenCallbacks = null, n = 0;
                    n < o.length;
                    n++
                  )
                    wm(o[n], u);
              } catch (c) {
                Z(l, l.return, c);
              }
            }
            (a && i & 64 && yh(r), An(r, r.return));
            break;
          case 27:
            bh(r);
          case 26:
          case 5:
            (_t(n, r, a), a && l === null && i & 4 && ph(r), An(r, r.return));
            break;
          case 12:
            _t(n, r, a);
            break;
          case 31:
            (_t(n, r, a), a && i & 4 && wh(n, r));
            break;
          case 13:
            (_t(n, r, a), a && i & 4 && xh(n, r));
            break;
          case 22:
            (r.memoizedState === null && _t(n, r, a), An(r, r.return));
            break;
          case 30:
            break;
          default:
            _t(n, r, a);
        }
        t = t.sibling;
      }
    }
    function Cc(e, t) {
      var a = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (a = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++, a != null && Pn(a)));
    }
    function Mc(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && Pn(e)));
    }
    function ft(e, t, a, l) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (Nh(e, t, a, l), (t = t.sibling));
    }
    function Nh(e, t, a, l) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (ft(e, t, a, l), n & 2048 && In(9, t));
          break;
        case 1:
          ft(e, t, a, l);
          break;
        case 3:
          (ft(e, t, a, l),
            n & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && Pn(e))));
          break;
        case 12:
          if (n & 2048) {
            (ft(e, t, a, l), (e = t.stateNode));
            try {
              var r = t.memoizedProps,
                i = r.id,
                u = r.onPostCommit;
              typeof u == 'function' &&
                u(
                  i,
                  t.alternate === null ? 'mount' : 'update',
                  e.passiveEffectDuration,
                  -0
                );
            } catch (o) {
              Z(t, t.return, o);
            }
          } else ft(e, t, a, l);
          break;
        case 31:
          ft(e, t, a, l);
          break;
        case 13:
          ft(e, t, a, l);
          break;
        case 23:
          break;
        case 22:
          ((r = t.stateNode),
            (i = t.alternate),
            t.memoizedState !== null
              ? r._visibility & 2
                ? ft(e, t, a, l)
                : Nn(e, t)
              : r._visibility & 2
                ? ft(e, t, a, l)
                : ((r._visibility |= 2),
                  rl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && Cc(i, t));
          break;
        case 24:
          (ft(e, t, a, l), n & 2048 && Mc(t.alternate, t));
          break;
        default:
          ft(e, t, a, l);
      }
    }
    function rl(e, t, a, l, n) {
      for (
        n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
        t !== null;

      ) {
        var r = e,
          i = t,
          u = a,
          o = l,
          c = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            (rl(r, i, u, o, n), In(8, i));
            break;
          case 23:
            break;
          case 22:
            var d = i.stateNode;
            (i.memoizedState !== null
              ? d._visibility & 2
                ? rl(r, i, u, o, n)
                : Nn(r, i)
              : ((d._visibility |= 2), rl(r, i, u, o, n)),
              n && c & 2048 && Cc(i.alternate, i));
            break;
          case 24:
            (rl(r, i, u, o, n), n && c & 2048 && Mc(i.alternate, i));
            break;
          default:
            rl(r, i, u, o, n);
        }
        t = t.sibling;
      }
    }
    function Nn(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e,
            l = t,
            n = l.flags;
          switch (l.tag) {
            case 22:
              (Nn(a, l), n & 2048 && Cc(l.alternate, l));
              break;
            case 24:
              (Nn(a, l), n & 2048 && Mc(l.alternate, l));
              break;
            default:
              Nn(a, l);
          }
          t = t.sibling;
        }
    }
    var pn = 8192;
    function nl(e, t, a) {
      if (e.subtreeFlags & pn)
        for (e = e.child; e !== null; ) (Dh(e, t, a), (e = e.sibling));
    }
    function Dh(e, t, a) {
      switch (e.tag) {
        case 26:
          (nl(e, t, a),
            e.flags & pn &&
              e.memoizedState !== null &&
              Wg(a, dt, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          nl(e, t, a);
          break;
        case 3:
        case 4:
          var l = dt;
          ((dt = pi(e.stateNode.containerInfo)), nl(e, t, a), (dt = l));
          break;
        case 22:
          e.memoizedState === null &&
            ((l = e.alternate),
            l !== null && l.memoizedState !== null
              ? ((l = pn), (pn = 16777216), nl(e, t, a), (pn = l))
              : nl(e, t, a));
          break;
        default:
          nl(e, t, a);
      }
    }
    function Oh(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function sn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var l = t[a];
            ((pe = l), Mh(l, e));
          }
        Oh(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Ch(e), (e = e.sibling));
    }
    function Ch(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (sn(e), e.flags & 2048 && Ea(9, e, e.return));
          break;
        case 3:
          sn(e);
          break;
        case 12:
          sn(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Gr(e))
            : sn(e);
          break;
        default:
          sn(e);
      }
    }
    function Gr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var l = t[a];
            ((pe = l), Mh(l, e));
          }
        Oh(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Ea(8, t, t.return), Gr(t));
            break;
          case 22:
            ((a = t.stateNode),
              a._visibility & 2 && ((a._visibility &= -3), Gr(t)));
            break;
          default:
            Gr(t);
        }
        e = e.sibling;
      }
    }
    function Mh(e, t) {
      for (; pe !== null; ) {
        var a = pe;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Ea(8, a, t);
            break;
          case 23:
          case 22:
            if (
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null
            ) {
              var l = a.memoizedState.cachePool.pool;
              l != null && l.refCount++;
            }
            break;
          case 24:
            Pn(a.memoizedState.cache);
        }
        if (((l = a.child), l !== null)) ((l.return = a), (pe = l));
        else
          e: for (a = e; pe !== null; ) {
            l = pe;
            var n = l.sibling,
              r = l.return;
            if ((Eh(l), l === a)) {
              pe = null;
              break e;
            }
            if (n !== null) {
              ((n.return = r), (pe = n));
              break e;
            }
            pe = r;
          }
      }
    }
    var yg = {
        getCacheForType: function (e) {
          var t = we(me),
            a = t.data.get(e);
          return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
        },
        cacheSignal: function () {
          return we(me).controller.signal;
        },
      },
      vg = typeof WeakMap == 'function' ? WeakMap : Map,
      q = 0,
      F = null,
      H = null,
      B = 0,
      Q = 0,
      ke = null,
      ua = !1,
      ql = !1,
      zc = !1,
      Zt = 0,
      ue = 0,
      Ra = 0,
      Ha = 0,
      _c = 0,
      Xe = 0,
      zl = 0,
      Dn = null,
      Le = null,
      zo = !1,
      _i = 0,
      zh = 0,
      si = 1 / 0,
      fi = null,
      ha = null,
      ye = 0,
      ya = null,
      _l = null,
      qt = 0,
      _o = 0,
      Lo = null,
      _h = null,
      On = 0,
      Uo = null;
    function Ke() {
      return (q & 2) !== 0 && B !== 0 ? B & -B : D.T !== null ? Uc() : Gd();
    }
    function Lh() {
      if (Xe === 0)
        if ((B & 536870912) === 0 || Y) {
          var e = vr;
          ((vr <<= 1), (vr & 3932160) === 0 && (vr = 262144), (Xe = e));
        } else Xe = 536870912;
      return ((e = Fe.current), e !== null && (e.flags |= 32), Xe);
    }
    function Ue(e, t, a) {
      (((e === F && (Q === 2 || Q === 9)) || e.cancelPendingCommit !== null) &&
        (Ll(e, 0), oa(e, B, Xe, !1)),
        Jn(e, a),
        ((q & 2) === 0 || e !== F) &&
          (e === F &&
            ((q & 2) === 0 && (Ha |= a), ue === 4 && oa(e, B, Xe, !1)),
          Et(e)));
    }
    function Uh(e, t, a) {
      if ((q & 6) !== 0) throw Error(g(327));
      var l = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Kn(e, t),
        n = l ? bg(e, t) : Vu(e, t, !0),
        r = l;
      do {
        if (n === 0) {
          ql && !l && oa(e, t, 0, !1);
          break;
        } else {
          if (((a = e.current.alternate), r && !pg(a))) {
            ((n = Vu(e, t, !1)), (r = !1));
            continue;
          }
          if (n === 2) {
            if (((r = t), e.errorRecoveryDisabledLanes & r)) var i = 0;
            else
              ((i = e.pendingLanes & -536870913),
                (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
            if (i !== 0) {
              t = i;
              e: {
                var u = e;
                n = Dn;
                var o = u.current.memoizedState.isDehydrated;
                if (
                  (o && (Ll(u, i).flags |= 256), (i = Vu(u, i, !1)), i !== 2)
                ) {
                  if (zc && !o) {
                    ((u.errorRecoveryDisabledLanes |= r), (Ha |= r), (n = 4));
                    break e;
                  }
                  ((r = Le),
                    (Le = n),
                    r !== null &&
                      (Le === null ? (Le = r) : Le.push.apply(Le, r)));
                }
                n = i;
              }
              if (((r = !1), n !== 2)) continue;
            }
          }
          if (n === 1) {
            (Ll(e, 0), oa(e, t, 0, !0));
            break;
          }
          e: {
            switch (((l = e), (r = n), r)) {
              case 0:
              case 1:
                throw Error(g(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                oa(l, t, Xe, !ua);
                break e;
              case 2:
                Le = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(g(329));
            }
            if ((t & 62914560) === t && ((n = _i + 300 - Ve()), 10 < n)) {
              if ((oa(l, t, Xe, !ua), Ri(l, 0, !0) !== 0)) break e;
              ((qt = t),
                (l.timeoutHandle = ty(
                  If.bind(
                    null,
                    l,
                    a,
                    Le,
                    fi,
                    zo,
                    t,
                    Xe,
                    Ha,
                    zl,
                    ua,
                    r,
                    'Throttled',
                    -0,
                    0
                  ),
                  n
                )));
              break e;
            }
            If(l, a, Le, fi, zo, t, Xe, Ha, zl, ua, r, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Et(e);
    }
    function If(e, t, a, l, n, r, i, u, o, c, d, m, h, v) {
      if (
        ((e.timeoutHandle = -1),
        (m = t.subtreeFlags),
        m & 8192 || (m & 16785408) === 16785408)
      ) {
        ((m = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: jt,
        }),
          Dh(t, r, m));
        var b =
          (r & 62914560) === r
            ? _i - Ve()
            : (r & 4194048) === r
              ? zh - Ve()
              : 0;
        if (((b = Ig(m, b)), b !== null)) {
          ((qt = r),
            (e.cancelPendingCommit = b(
              td.bind(null, e, t, r, a, l, n, i, u, o, d, m, null, h, v)
            )),
            oa(e, r, i, !c));
          return;
        }
      }
      td(e, t, r, a, l, n, i, u, o);
    }
    function pg(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if (
          (a === 0 || a === 11 || a === 15) &&
          t.flags & 16384 &&
          ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
        )
          for (var l = 0; l < a.length; l++) {
            var n = a[l],
              r = n.getSnapshot;
            n = n.value;
            try {
              if (!Je(r(), n)) return !1;
            } catch {
              return !1;
            }
          }
        if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
          ((a.return = t), (t = a));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function oa(e, t, a, l) {
      ((t &= ~_c),
        (t &= ~Ha),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        l && (e.warmLanes |= t),
        (l = e.expirationTimes));
      for (var n = t; 0 < n; ) {
        var r = 31 - Ze(n),
          i = 1 << r;
        ((l[r] = -1), (n &= ~i));
      }
      a !== 0 && Yd(e, a, t);
    }
    function Li() {
      return (q & 6) === 0 ? (er(0, !1), !1) : !0;
    }
    function Lc() {
      if (H !== null) {
        if (Q === 0) var e = H.return;
        else ((e = H), (Bt = Za = null), bc(e), (wl = null), (jn = 0), (e = H));
        for (; e !== null; ) (hh(e.alternate, e), (e = e.return));
        H = null;
      }
    }
    function Ll(e, t) {
      var a = e.timeoutHandle;
      (a !== -1 && ((e.timeoutHandle = -1), Ug(a)),
        (a = e.cancelPendingCommit),
        a !== null && ((e.cancelPendingCommit = null), a()),
        (qt = 0),
        Lc(),
        (F = e),
        (H = a = Yt(e.current, null)),
        (B = t),
        (Q = 0),
        (ke = null),
        (ua = !1),
        (ql = Kn(e, t)),
        (zc = !1),
        (zl = Xe = _c = Ha = Ra = ue = 0),
        (Le = Dn = null),
        (zo = !1),
        (t & 8) !== 0 && (t |= t & 32));
      var l = e.entangledLanes;
      if (l !== 0)
        for (e = e.entanglements, l &= t; 0 < l; ) {
          var n = 31 - Ze(l),
            r = 1 << n;
          ((t |= e[n]), (l &= ~r));
        }
      return ((Zt = t), Ai(), a);
    }
    function Hh(e, t) {
      ((z = null),
        (D.H = Yn),
        t === kl || t === Di
          ? ((t = Mf()), (Q = 3))
          : t === dc
            ? ((t = Mf()), (Q = 4))
            : (Q =
                t === Dc
                  ? 8
                  : t !== null &&
                      typeof t == 'object' &&
                      typeof t.then == 'function'
                    ? 6
                    : 1),
        (ke = t),
        H === null && ((ue = 1), ui(e, lt(t, e.current))));
    }
    function jh() {
      var e = Fe.current;
      return e === null
        ? !0
        : (B & 4194048) === B
          ? rt === null
          : (B & 62914560) === B || (B & 536870912) !== 0
            ? e === rt
            : !1;
    }
    function Bh() {
      var e = D.H;
      return ((D.H = Yn), e === null ? Yn : e);
    }
    function Yh() {
      var e = D.A;
      return ((D.A = yg), e);
    }
    function di() {
      ((ue = 4),
        ua || ((B & 4194048) !== B && Fe.current !== null) || (ql = !0),
        ((Ra & 134217727) === 0 && (Ha & 134217727) === 0) ||
          F === null ||
          oa(F, B, Xe, !1));
    }
    function Vu(e, t, a) {
      var l = q;
      q |= 2;
      var n = Bh(),
        r = Yh();
      ((F !== e || B !== t) && ((fi = null), Ll(e, t)), (t = !1));
      var i = ue;
      e: do
        try {
          if (Q !== 0 && H !== null) {
            var u = H,
              o = ke;
            switch (Q) {
              case 8:
                (Lc(), (i = 6));
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                Fe.current === null && (t = !0);
                var c = Q;
                if (((Q = 0), (ke = null), gl(e, u, o, c), a && ql)) {
                  i = 0;
                  break e;
                }
                break;
              default:
                ((c = Q), (Q = 0), (ke = null), gl(e, u, o, c));
            }
          }
          (gg(), (i = ue));
          break;
        } catch (d) {
          Hh(e, d);
        }
      while (!0);
      return (
        t && e.shellSuspendCounter++,
        (Bt = Za = null),
        (q = l),
        (D.H = n),
        (D.A = r),
        H === null && ((F = null), (B = 0), Ai()),
        i
      );
    }
    function gg() {
      for (; H !== null; ) kh(H);
    }
    function bg(e, t) {
      var a = q;
      q |= 2;
      var l = Bh(),
        n = Yh();
      F !== e || B !== t
        ? ((fi = null), (si = Ve() + 500), Ll(e, t))
        : (ql = Kn(e, t));
      e: do
        try {
          if (Q !== 0 && H !== null) {
            t = H;
            var r = ke;
            t: switch (Q) {
              case 1:
                ((Q = 0), (ke = null), gl(e, t, r, 1));
                break;
              case 2:
              case 9:
                if (Cf(r)) {
                  ((Q = 0), (ke = null), ed(t));
                  break;
                }
                ((t = function () {
                  ((Q !== 2 && Q !== 9) || F !== e || (Q = 7), Et(e));
                }),
                  r.then(t, t));
                break e;
              case 3:
                Q = 7;
                break e;
              case 4:
                Q = 5;
                break e;
              case 7:
                Cf(r)
                  ? ((Q = 0), (ke = null), ed(t))
                  : ((Q = 0), (ke = null), gl(e, t, r, 7));
                break;
              case 5:
                var i = null;
                switch (H.tag) {
                  case 26:
                    i = H.memoizedState;
                  case 5:
                  case 27:
                    var u = H;
                    if (i ? iy(i) : u.stateNode.complete) {
                      ((Q = 0), (ke = null));
                      var o = u.sibling;
                      if (o !== null) H = o;
                      else {
                        var c = u.return;
                        c !== null ? ((H = c), Ui(c)) : (H = null);
                      }
                      break t;
                    }
                }
                ((Q = 0), (ke = null), gl(e, t, r, 5));
                break;
              case 6:
                ((Q = 0), (ke = null), gl(e, t, r, 6));
                break;
              case 8:
                (Lc(), (ue = 6));
                break e;
              default:
                throw Error(g(462));
            }
          }
          Sg();
          break;
        } catch (d) {
          Hh(e, d);
        }
      while (!0);
      return (
        (Bt = Za = null),
        (D.H = l),
        (D.A = n),
        (q = a),
        H !== null ? 0 : ((F = null), (B = 0), Ai(), ue)
      );
    }
    function Sg() {
      for (; H !== null && !Xv(); ) kh(H);
    }
    function kh(e) {
      var t = mh(e.alternate, e, Zt);
      ((e.memoizedProps = e.pendingProps), t === null ? Ui(e) : (H = t));
    }
    function ed(e) {
      var t = e,
        a = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Kf(a, t, t.pendingProps, t.type, void 0, B);
          break;
        case 11:
          t = Kf(a, t, t.pendingProps, t.type.render, t.ref, B);
          break;
        case 5:
          bc(t);
        default:
          (hh(a, t), (t = H = hm(t, Zt)), (t = mh(a, t, Zt)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Ui(e) : (H = t));
    }
    function gl(e, t, a, l) {
      ((Bt = Za = null), bc(t), (wl = null), (jn = 0));
      var n = t.return;
      try {
        if (og(e, n, t, a, B)) {
          ((ue = 1), ui(e, lt(a, e.current)), (H = null));
          return;
        }
      } catch (r) {
        if (n !== null) throw ((H = n), r);
        ((ue = 1), ui(e, lt(a, e.current)), (H = null));
        return;
      }
      t.flags & 32768
        ? (Y || l === 1
            ? (e = !0)
            : ql || (B & 536870912) !== 0
              ? (e = !1)
              : ((ua = e = !0),
                (l === 2 || l === 9 || l === 3 || l === 6) &&
                  ((l = Fe.current),
                  l !== null && l.tag === 13 && (l.flags |= 16384))),
          qh(t, e))
        : Ui(t);
    }
    function Ui(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          qh(t, ua);
          return;
        }
        e = t.return;
        var a = fg(t.alternate, t, Zt);
        if (a !== null) {
          H = a;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          H = t;
          return;
        }
        H = t = e;
      } while (t !== null);
      ue === 0 && (ue = 5);
    }
    function qh(e, t) {
      do {
        var a = dg(e.alternate, e);
        if (a !== null) {
          ((a.flags &= 32767), (H = a));
          return;
        }
        if (
          ((a = e.return),
          a !== null &&
            ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          H = e;
          return;
        }
        H = e = a;
      } while (e !== null);
      ((ue = 6), (H = null));
    }
    function td(e, t, a, l, n, r, i, u, o) {
      e.cancelPendingCommit = null;
      do Hi();
      while (ye !== 0);
      if ((q & 6) !== 0) throw Error(g(327));
      if (t !== null) {
        if (t === e.current) throw Error(g(177));
        if (
          ((r = t.lanes | t.childLanes),
          (r |= rc),
          Iv(e, a, r, i, u, o),
          e === F && ((H = F = null), (B = 0)),
          (_l = t),
          (ya = e),
          (qt = a),
          (_o = r),
          (Lo = n),
          (_h = l),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              xg($r, function () {
                return (Zh(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (l = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || l)
        ) {
          ((l = D.T), (D.T = null), (n = G.p), (G.p = 2), (i = q), (q |= 4));
          try {
            mg(e, t, a);
          } finally {
            ((q = i), (G.p = n), (D.T = l));
          }
        }
        ((ye = 1), Gh(), Xh(), Vh());
      }
    }
    function Gh() {
      if (ye === 1) {
        ye = 0;
        var e = ya,
          t = _l,
          a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          ((a = D.T), (D.T = null));
          var l = G.p;
          G.p = 2;
          var n = q;
          q |= 4;
          try {
            Th(t, e);
            var r = Yo,
              i = im(e.containerInfo),
              u = r.focusedElem,
              o = r.selectionRange;
            if (
              i !== u &&
              u &&
              u.ownerDocument &&
              rm(u.ownerDocument.documentElement, u)
            ) {
              if (o !== null && nc(u)) {
                var c = o.start,
                  d = o.end;
                if ((d === void 0 && (d = c), 'selectionStart' in u))
                  ((u.selectionStart = c),
                    (u.selectionEnd = Math.min(d, u.value.length)));
                else {
                  var m = u.ownerDocument || document,
                    h = (m && m.defaultView) || window;
                  if (h.getSelection) {
                    var v = h.getSelection(),
                      b = u.textContent.length,
                      S = Math.min(o.start, b),
                      E = o.end === void 0 ? S : Math.min(o.end, b);
                    !v.extend && S > E && ((i = E), (E = S), (S = i));
                    var f = wf(u, S),
                      s = wf(u, E);
                    if (
                      f &&
                      s &&
                      (v.rangeCount !== 1 ||
                        v.anchorNode !== f.node ||
                        v.anchorOffset !== f.offset ||
                        v.focusNode !== s.node ||
                        v.focusOffset !== s.offset)
                    ) {
                      var y = m.createRange();
                      (y.setStart(f.node, f.offset),
                        v.removeAllRanges(),
                        S > E
                          ? (v.addRange(y), v.extend(s.node, s.offset))
                          : (y.setEnd(s.node, s.offset), v.addRange(y)));
                    }
                  }
                }
              }
              for (m = [], v = u; (v = v.parentNode); )
                v.nodeType === 1 &&
                  m.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
              for (
                typeof u.focus == 'function' && u.focus(), u = 0;
                u < m.length;
                u++
              ) {
                var p = m[u];
                ((p.element.scrollLeft = p.left),
                  (p.element.scrollTop = p.top));
              }
            }
            ((Si = !!Bo), (Yo = Bo = null));
          } finally {
            ((q = n), (G.p = l), (D.T = a));
          }
        }
        ((e.current = t), (ye = 2));
      }
    }
    function Xh() {
      if (ye === 2) {
        ye = 0;
        var e = ya,
          t = _l,
          a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          ((a = D.T), (D.T = null));
          var l = G.p;
          G.p = 2;
          var n = q;
          q |= 4;
          try {
            Sh(e, t.alternate, t);
          } finally {
            ((q = n), (G.p = l), (D.T = a));
          }
        }
        ye = 3;
      }
    }
    function Vh() {
      if (ye === 4 || ye === 3) {
        ((ye = 0), Vv());
        var e = ya,
          t = _l,
          a = qt,
          l = _h;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? (ye = 5)
          : ((ye = 0), (_l = ya = null), Qh(e, e.pendingLanes));
        var n = e.pendingLanes;
        if (
          (n === 0 && (ha = null),
          Po(a),
          (t = t.stateNode),
          Qe && typeof Qe.onCommitFiberRoot == 'function')
        )
          try {
            Qe.onCommitFiberRoot(
              Zn,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {}
        if (l !== null) {
          ((t = D.T), (n = G.p), (G.p = 2), (D.T = null));
          try {
            for (var r = e.onRecoverableError, i = 0; i < l.length; i++) {
              var u = l[i];
              r(u.value, { componentStack: u.stack });
            }
          } finally {
            ((D.T = t), (G.p = n));
          }
        }
        ((qt & 3) !== 0 && Hi(),
          Et(e),
          (n = e.pendingLanes),
          (a & 261930) !== 0 && (n & 42) !== 0
            ? e === Uo
              ? On++
              : ((On = 0), (Uo = e))
            : (On = 0),
          er(0, !1));
      }
    }
    function Qh(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), Pn(t)));
    }
    function Hi() {
      return (Gh(), Xh(), Vh(), Zh());
    }
    function Zh() {
      if (ye !== 5) return !1;
      var e = ya,
        t = _o;
      _o = 0;
      var a = Po(qt),
        l = D.T,
        n = G.p;
      try {
        ((G.p = 32 > a ? 32 : a), (D.T = null), (a = Lo), (Lo = null));
        var r = ya,
          i = qt;
        if (((ye = 0), (_l = ya = null), (qt = 0), (q & 6) !== 0))
          throw Error(g(331));
        var u = q;
        if (
          ((q |= 4),
          Ch(r.current),
          Nh(r, r.current, i, a),
          (q = u),
          er(0, !1),
          Qe && typeof Qe.onPostCommitFiberRoot == 'function')
        )
          try {
            Qe.onPostCommitFiberRoot(Zn, r);
          } catch {}
        return !0;
      } finally {
        ((G.p = n), (D.T = l), Qh(e, t));
      }
    }
    function ad(e, t, a) {
      ((t = lt(a, t)),
        (t = Do(e.stateNode, t, 2)),
        (e = ma(e, t, 2)),
        e !== null && (Jn(e, 2), Et(e)));
    }
    function Z(e, t, a) {
      if (e.tag === 3) ad(e, e, a);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            ad(t, e, a);
            break;
          } else if (t.tag === 1) {
            var l = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == 'function' ||
              (typeof l.componentDidCatch == 'function' &&
                (ha === null || !ha.has(l)))
            ) {
              ((e = lt(a, e)),
                (a = uh(2)),
                (l = ma(t, a, 2)),
                l !== null && (oh(a, l, t, e), Jn(l, 2), Et(l)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Qu(e, t, a) {
      var l = e.pingCache;
      if (l === null) {
        l = e.pingCache = new vg();
        var n = new Set();
        l.set(t, n);
      } else ((n = l.get(t)), n === void 0 && ((n = new Set()), l.set(t, n)));
      n.has(a) ||
        ((zc = !0), n.add(a), (e = Eg.bind(null, e, t, a)), t.then(e, e));
    }
    function Eg(e, t, a) {
      var l = e.pingCache;
      (l !== null && l.delete(t),
        (e.pingedLanes |= e.suspendedLanes & a),
        (e.warmLanes &= ~a),
        F === e &&
          (B & a) === a &&
          (ue === 4 || (ue === 3 && (B & 62914560) === B && 300 > Ve() - _i)
            ? (q & 2) === 0 && Ll(e, 0)
            : (_c |= a),
          zl === B && (zl = 0)),
        Et(e));
    }
    function Kh(e, t) {
      (t === 0 && (t = Bd()), (e = Qa(e, t)), e !== null && (Jn(e, t), Et(e)));
    }
    function Rg(e) {
      var t = e.memoizedState,
        a = 0;
      (t !== null && (a = t.retryLane), Kh(e, a));
    }
    function wg(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var l = e.stateNode,
            n = e.memoizedState;
          n !== null && (a = n.retryLane);
          break;
        case 19:
          l = e.stateNode;
          break;
        case 22:
          l = e.stateNode._retryCache;
          break;
        default:
          throw Error(g(314));
      }
      (l !== null && l.delete(t), Kh(e, a));
    }
    function xg(e, t) {
      return Fo(e, t);
    }
    var mi = null,
      il = null,
      Ho = !1,
      hi = !1,
      Zu = !1,
      ca = 0;
    function Et(e) {
      (e !== il &&
        e.next === null &&
        (il === null ? (mi = il = e) : (il = il.next = e)),
        (hi = !0),
        Ho || ((Ho = !0), Ag()));
    }
    function er(e, t) {
      if (!Zu && hi) {
        Zu = !0;
        do
          for (var a = !1, l = mi; l !== null; ) {
            if (!t)
              if (e !== 0) {
                var n = l.pendingLanes;
                if (n === 0) var r = 0;
                else {
                  var i = l.suspendedLanes,
                    u = l.pingedLanes;
                  ((r = (1 << (31 - Ze(42 | e) + 1)) - 1),
                    (r &= n & ~(i & ~u)),
                    (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
                }
                r !== 0 && ((a = !0), ld(l, r));
              } else
                ((r = B),
                  (r = Ri(
                    l,
                    l === F ? r : 0,
                    l.cancelPendingCommit !== null || l.timeoutHandle !== -1
                  )),
                  (r & 3) === 0 || Kn(l, r) || ((a = !0), ld(l, r)));
            l = l.next;
          }
        while (a);
        Zu = !1;
      }
    }
    function Tg() {
      Jh();
    }
    function Jh() {
      hi = Ho = !1;
      var e = 0;
      ca !== 0 && Lg() && (e = ca);
      for (var t = Ve(), a = null, l = mi; l !== null; ) {
        var n = l.next,
          r = Fh(l, t);
        (r === 0
          ? ((l.next = null),
            a === null ? (mi = n) : (a.next = n),
            n === null && (il = a))
          : ((a = l), (e !== 0 || (r & 3) !== 0) && (hi = !0)),
          (l = n));
      }
      ((ye !== 0 && ye !== 5) || er(e, !1), ca !== 0 && (ca = 0));
    }
    function Fh(e, t) {
      for (
        var a = e.suspendedLanes,
          l = e.pingedLanes,
          n = e.expirationTimes,
          r = e.pendingLanes & -62914561;
        0 < r;

      ) {
        var i = 31 - Ze(r),
          u = 1 << i,
          o = n[i];
        (o === -1
          ? ((u & a) === 0 || (u & l) !== 0) && (n[i] = Wv(u, t))
          : o <= t && (e.expiredLanes |= u),
          (r &= ~u));
      }
      if (
        ((t = F),
        (a = B),
        (a = Ri(
          e,
          e === t ? a : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (l = e.callbackNode),
        a === 0 ||
          (e === t && (Q === 2 || Q === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          l !== null && l !== null && Eu(l),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if ((a & 3) === 0 || Kn(e, a)) {
        if (((t = a & -a), t === e.callbackPriority)) return t;
        switch ((l !== null && Eu(l), Po(a))) {
          case 2:
          case 8:
            a = Hd;
            break;
          case 32:
            a = $r;
            break;
          case 268435456:
            a = jd;
            break;
          default:
            a = $r;
        }
        return (
          (l = $h.bind(null, e)),
          (a = Fo(a, l)),
          (e.callbackPriority = t),
          (e.callbackNode = a),
          t
        );
      }
      return (
        l !== null && l !== null && Eu(l),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function $h(e, t) {
      if (ye !== 0 && ye !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var a = e.callbackNode;
      if (Hi() && e.callbackNode !== a) return null;
      var l = B;
      return (
        (l = Ri(
          e,
          e === F ? l : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        l === 0
          ? null
          : (Uh(e, l, t),
            Fh(e, Ve()),
            e.callbackNode != null && e.callbackNode === a
              ? $h.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hi()) return null;
      Uh(e, t, !0);
    }
    function Ag() {
      Hg(function () {
        (q & 6) !== 0 ? Fo(Ud, Tg) : Jh();
      });
    }
    function Uc() {
      if (ca === 0) {
        var e = Ol;
        (e === 0 && ((e = yr), (yr <<= 1), (yr & 261888) === 0 && (yr = 256)),
          (ca = e));
      }
      return ca;
    }
    function nd(e) {
      return e == null || typeof e == 'symbol' || typeof e == 'boolean'
        ? null
        : typeof e == 'function'
          ? e
          : _r('' + e);
    }
    function rd(e, t) {
      var a = t.ownerDocument.createElement('input');
      return (
        (a.name = t.name),
        (a.value = t.value),
        e.id && a.setAttribute('form', e.id),
        t.parentNode.insertBefore(a, t),
        (e = new FormData(e)),
        a.parentNode.removeChild(a),
        e
      );
    }
    function Ng(e, t, a, l, n) {
      if (t === 'submit' && a && a.stateNode === n) {
        var r = nd((n[He] || null).action),
          i = l.submitter;
        i &&
          ((t = (t = i[He] || null)
            ? nd(t.formAction)
            : i.getAttribute('formAction')),
          t !== null && ((r = t), (i = null)));
        var u = new wi('action', 'action', null, l, n);
        e.push({
          event: u,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (l.defaultPrevented) {
                  if (ca !== 0) {
                    var o = i ? rd(n, i) : new FormData(n);
                    Ao(
                      a,
                      { pending: !0, data: o, method: n.method, action: r },
                      null,
                      o
                    );
                  }
                } else
                  typeof r == 'function' &&
                    (u.preventDefault(),
                    (o = i ? rd(n, i) : new FormData(n)),
                    Ao(
                      a,
                      { pending: !0, data: o, method: n.method, action: r },
                      r,
                      o
                    ));
              },
              currentTarget: n,
            },
          ],
        });
      }
    }
    for (Nr = 0; Nr < ho.length; Nr++)
      ((Dr = ho[Nr]),
        (id = Dr.toLowerCase()),
        (ud = Dr[0].toUpperCase() + Dr.slice(1)),
        mt(id, 'on' + ud));
    var Dr, id, ud, Nr;
    mt(om, 'onAnimationEnd');
    mt(cm, 'onAnimationIteration');
    mt(sm, 'onAnimationStart');
    mt('dblclick', 'onDoubleClick');
    mt('focusin', 'onFocus');
    mt('focusout', 'onBlur');
    mt(Qp, 'onTransitionRun');
    mt(Zp, 'onTransitionStart');
    mt(Kp, 'onTransitionCancel');
    mt(fm, 'onTransitionEnd');
    Nl('onMouseEnter', ['mouseout', 'mouseover']);
    Nl('onMouseLeave', ['mouseout', 'mouseover']);
    Nl('onPointerEnter', ['pointerout', 'pointerover']);
    Nl('onPointerLeave', ['pointerout', 'pointerover']);
    Ga(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    );
    Ga(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    );
    Ga('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
    Ga(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    );
    Ga(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    );
    Ga(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
    var kn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      Dg = new Set(
        'beforetoggle cancel close invalid load scroll scrollend toggle'
          .split(' ')
          .concat(kn)
      );
    function Ph(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var l = e[a],
          n = l.event;
        l = l.listeners;
        e: {
          var r = void 0;
          if (t)
            for (var i = l.length - 1; 0 <= i; i--) {
              var u = l[i],
                o = u.instance,
                c = u.currentTarget;
              if (((u = u.listener), o !== r && n.isPropagationStopped()))
                break e;
              ((r = u), (n.currentTarget = c));
              try {
                r(n);
              } catch (d) {
                Wr(d);
              }
              ((n.currentTarget = null), (r = o));
            }
          else
            for (i = 0; i < l.length; i++) {
              if (
                ((u = l[i]),
                (o = u.instance),
                (c = u.currentTarget),
                (u = u.listener),
                o !== r && n.isPropagationStopped())
              )
                break e;
              ((r = u), (n.currentTarget = c));
              try {
                r(n);
              } catch (d) {
                Wr(d);
              }
              ((n.currentTarget = null), (r = o));
            }
        }
      }
    }
    function U(e, t) {
      var a = t[ro];
      a === void 0 && (a = t[ro] = new Set());
      var l = e + '__bubble';
      a.has(l) || (Wh(t, e, 2, !1), a.add(l));
    }
    function Ku(e, t, a) {
      var l = 0;
      (t && (l |= 4), Wh(a, e, l, t));
    }
    var Or = '_reactListening' + Math.random().toString(36).slice(2);
    function Hc(e) {
      if (!e[Or]) {
        ((e[Or] = !0),
          Xd.forEach(function (a) {
            a !== 'selectionchange' &&
              (Dg.has(a) || Ku(a, !1, e), Ku(a, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Or] || ((t[Or] = !0), Ku('selectionchange', !1, t));
      }
    }
    function Wh(e, t, a, l) {
      switch (fy(t)) {
        case 2:
          var n = ab;
          break;
        case 8:
          n = lb;
          break;
        default:
          n = kc;
      }
      ((a = n.bind(null, t, a, e)),
        (n = void 0),
        !so ||
          (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
          (n = !0),
        l
          ? n !== void 0
            ? e.addEventListener(t, a, { capture: !0, passive: n })
            : e.addEventListener(t, a, !0)
          : n !== void 0
            ? e.addEventListener(t, a, { passive: n })
            : e.addEventListener(t, a, !1));
    }
    function Ju(e, t, a, l, n) {
      var r = l;
      if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
        e: for (;;) {
          if (l === null) return;
          var i = l.tag;
          if (i === 3 || i === 4) {
            var u = l.stateNode.containerInfo;
            if (u === n) break;
            if (i === 4)
              for (i = l.return; i !== null; ) {
                var o = i.tag;
                if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                  return;
                i = i.return;
              }
            for (; u !== null; ) {
              if (((i = cl(u)), i === null)) return;
              if (((o = i.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
                l = r = i;
                continue e;
              }
              u = u.parentNode;
            }
          }
          l = l.return;
        }
      Pd(function () {
        var c = r,
          d = ec(a),
          m = [];
        e: {
          var h = dm.get(e);
          if (h !== void 0) {
            var v = wi,
              b = e;
            switch (e) {
              case 'keypress':
                if (Ur(a) === 0) break e;
              case 'keydown':
              case 'keyup':
                v = wp;
                break;
              case 'focusin':
                ((b = 'focus'), (v = Au));
                break;
              case 'focusout':
                ((b = 'blur'), (v = Au));
                break;
              case 'beforeblur':
              case 'afterblur':
                v = Au;
                break;
              case 'click':
                if (a.button === 2) break e;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                v = hf;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                v = fp;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                v = Ap;
                break;
              case om:
              case cm:
              case sm:
                v = hp;
                break;
              case fm:
                v = Dp;
                break;
              case 'scroll':
              case 'scrollend':
                v = cp;
                break;
              case 'wheel':
                v = Cp;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                v = vp;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                v = vf;
                break;
              case 'toggle':
              case 'beforetoggle':
                v = zp;
            }
            var S = (t & 4) !== 0,
              E = !S && (e === 'scroll' || e === 'scrollend'),
              f = S ? (h !== null ? h + 'Capture' : null) : h;
            S = [];
            for (var s = c, y; s !== null; ) {
              var p = s;
              if (
                ((y = p.stateNode),
                (p = p.tag),
                (p !== 5 && p !== 26 && p !== 27) ||
                  y === null ||
                  f === null ||
                  ((p = zn(s, f)), p != null && S.push(qn(s, p, y))),
                E)
              )
                break;
              s = s.return;
            }
            0 < S.length &&
              ((h = new v(h, b, null, a, d)),
              m.push({ event: h, listeners: S }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((h = e === 'mouseover' || e === 'pointerover'),
              (v = e === 'mouseout' || e === 'pointerout'),
              h &&
                a !== co &&
                (b = a.relatedTarget || a.fromElement) &&
                (cl(b) || b[jl]))
            )
              break e;
            if (
              (v || h) &&
              ((h =
                d.window === d
                  ? d
                  : (h = d.ownerDocument)
                    ? h.defaultView || h.parentWindow
                    : window),
              v
                ? ((b = a.relatedTarget || a.toElement),
                  (v = c),
                  (b = b ? cl(b) : null),
                  b !== null &&
                    ((E = Qn(b)),
                    (S = b.tag),
                    b !== E || (S !== 5 && S !== 27 && S !== 6)) &&
                    (b = null))
                : ((v = null), (b = c)),
              v !== b)
            ) {
              if (
                ((S = hf),
                (p = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (s = 'mouse'),
                (e === 'pointerout' || e === 'pointerover') &&
                  ((S = vf),
                  (p = 'onPointerLeave'),
                  (f = 'onPointerEnter'),
                  (s = 'pointer')),
                (E = v == null ? h : yn(v)),
                (y = b == null ? h : yn(b)),
                (h = new S(p, s + 'leave', v, a, d)),
                (h.target = E),
                (h.relatedTarget = y),
                (p = null),
                cl(d) === c &&
                  ((S = new S(f, s + 'enter', b, a, d)),
                  (S.target = y),
                  (S.relatedTarget = E),
                  (p = S)),
                (E = p),
                v && b)
              )
                t: {
                  for (S = Og, f = v, s = b, y = 0, p = f; p; p = S(p)) y++;
                  p = 0;
                  for (var w = s; w; w = S(w)) p++;
                  for (; 0 < y - p; ) ((f = S(f)), y--);
                  for (; 0 < p - y; ) ((s = S(s)), p--);
                  for (; y--; ) {
                    if (f === s || (s !== null && f === s.alternate)) {
                      S = f;
                      break t;
                    }
                    ((f = S(f)), (s = S(s)));
                  }
                  S = null;
                }
              else S = null;
              (v !== null && od(m, h, v, S, !1),
                b !== null && E !== null && od(m, E, b, S, !0));
            }
          }
          e: {
            if (
              ((h = c ? yn(c) : window),
              (v = h.nodeName && h.nodeName.toLowerCase()),
              v === 'select' || (v === 'input' && h.type === 'file'))
            )
              var _ = Sf;
            else if (bf(h))
              if (lm) _ = Gp;
              else {
                _ = kp;
                var x = Yp;
              }
            else
              ((v = h.nodeName),
                !v ||
                v.toLowerCase() !== 'input' ||
                (h.type !== 'checkbox' && h.type !== 'radio')
                  ? c && Io(c.elementType) && (_ = Sf)
                  : (_ = qp));
            if (_ && (_ = _(e, c))) {
              am(m, _, a, d);
              break e;
            }
            (x && x(e, h, c),
              e === 'focusout' &&
                c &&
                h.type === 'number' &&
                c.memoizedProps.value != null &&
                oo(h, 'number', h.value));
          }
          switch (((x = c ? yn(c) : window), e)) {
            case 'focusin':
              (bf(x) || x.contentEditable === 'true') &&
                ((dl = x), (fo = c), (Sn = null));
              break;
            case 'focusout':
              Sn = fo = dl = null;
              break;
            case 'mousedown':
              mo = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ((mo = !1), xf(m, a, d));
              break;
            case 'selectionchange':
              if (Vp) break;
            case 'keydown':
            case 'keyup':
              xf(m, a, d);
          }
          var O;
          if (lc)
            e: {
              switch (e) {
                case 'compositionstart':
                  var N = 'onCompositionStart';
                  break e;
                case 'compositionend':
                  N = 'onCompositionEnd';
                  break e;
                case 'compositionupdate':
                  N = 'onCompositionUpdate';
                  break e;
              }
              N = void 0;
            }
          else
            fl
              ? em(e, a) && (N = 'onCompositionEnd')
              : e === 'keydown' &&
                a.keyCode === 229 &&
                (N = 'onCompositionStart');
          (N &&
            (Id &&
              a.locale !== 'ko' &&
              (fl || N !== 'onCompositionStart'
                ? N === 'onCompositionEnd' && fl && (O = Wd())
                : ((ia = d),
                  (tc = 'value' in ia ? ia.value : ia.textContent),
                  (fl = !0))),
            (x = yi(c, N)),
            0 < x.length &&
              ((N = new yf(N, e, null, a, d)),
              m.push({ event: N, listeners: x }),
              O ? (N.data = O) : ((O = tm(a)), O !== null && (N.data = O)))),
            (O = Lp ? Up(e, a) : Hp(e, a)) &&
              ((N = yi(c, 'onBeforeInput')),
              0 < N.length &&
                ((x = new yf('onBeforeInput', 'beforeinput', null, a, d)),
                m.push({ event: x, listeners: N }),
                (x.data = O))),
            Ng(m, e, c, a, d));
        }
        Ph(m, t);
      });
    }
    function qn(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function yi(e, t) {
      for (var a = t + 'Capture', l = []; e !== null; ) {
        var n = e,
          r = n.stateNode;
        if (
          ((n = n.tag),
          (n !== 5 && n !== 26 && n !== 27) ||
            r === null ||
            ((n = zn(e, a)),
            n != null && l.unshift(qn(e, n, r)),
            (n = zn(e, t)),
            n != null && l.push(qn(e, n, r))),
          e.tag === 3)
        )
          return l;
        e = e.return;
      }
      return [];
    }
    function Og(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function od(e, t, a, l, n) {
      for (var r = t._reactName, i = []; a !== null && a !== l; ) {
        var u = a,
          o = u.alternate,
          c = u.stateNode;
        if (((u = u.tag), o !== null && o === l)) break;
        ((u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((o = c),
          n
            ? ((c = zn(a, r)), c != null && i.unshift(qn(a, c, o)))
            : n || ((c = zn(a, r)), c != null && i.push(qn(a, c, o)))),
          (a = a.return));
      }
      i.length !== 0 && e.push({ event: t, listeners: i });
    }
    var Cg = /\r\n?/g,
      Mg = /\u0000|\uFFFD/g;
    function cd(e) {
      return (typeof e == 'string' ? e : '' + e)
        .replace(
          Cg,
          `
`
        )
        .replace(Mg, '');
    }
    function Ih(e, t) {
      return ((t = cd(t)), cd(e) === t);
    }
    function K(e, t, a, l, n, r) {
      switch (a) {
        case 'children':
          typeof l == 'string'
            ? t === 'body' || (t === 'textarea' && l === '') || Dl(e, l)
            : (typeof l == 'number' || typeof l == 'bigint') &&
              t !== 'body' &&
              Dl(e, '' + l);
          break;
        case 'className':
          gr(e, 'class', l);
          break;
        case 'tabIndex':
          gr(e, 'tabindex', l);
          break;
        case 'dir':
        case 'role':
        case 'viewBox':
        case 'width':
        case 'height':
          gr(e, a, l);
          break;
        case 'style':
          $d(e, l, r);
          break;
        case 'data':
          if (t !== 'object') {
            gr(e, 'data', l);
            break;
          }
        case 'src':
        case 'href':
          if (l === '' && (t !== 'a' || a !== 'href')) {
            e.removeAttribute(a);
            break;
          }
          if (
            l == null ||
            typeof l == 'function' ||
            typeof l == 'symbol' ||
            typeof l == 'boolean'
          ) {
            e.removeAttribute(a);
            break;
          }
          ((l = _r('' + l)), e.setAttribute(a, l));
          break;
        case 'action':
        case 'formAction':
          if (typeof l == 'function') {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof r == 'function' &&
              (a === 'formAction'
                ? (t !== 'input' && K(e, t, 'name', n.name, n, null),
                  K(e, t, 'formEncType', n.formEncType, n, null),
                  K(e, t, 'formMethod', n.formMethod, n, null),
                  K(e, t, 'formTarget', n.formTarget, n, null))
                : (K(e, t, 'encType', n.encType, n, null),
                  K(e, t, 'method', n.method, n, null),
                  K(e, t, 'target', n.target, n, null)));
          if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
            e.removeAttribute(a);
            break;
          }
          ((l = _r('' + l)), e.setAttribute(a, l));
          break;
        case 'onClick':
          l != null && (e.onclick = jt);
          break;
        case 'onScroll':
          l != null && U('scroll', e);
          break;
        case 'onScrollEnd':
          l != null && U('scrollend', e);
          break;
        case 'dangerouslySetInnerHTML':
          if (l != null) {
            if (typeof l != 'object' || !('__html' in l)) throw Error(g(61));
            if (((a = l.__html), a != null)) {
              if (n.children != null) throw Error(g(60));
              e.innerHTML = a;
            }
          }
          break;
        case 'multiple':
          e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
          break;
        case 'muted':
          e.muted = l && typeof l != 'function' && typeof l != 'symbol';
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'defaultValue':
        case 'defaultChecked':
        case 'innerHTML':
        case 'ref':
          break;
        case 'autoFocus':
          break;
        case 'xlinkHref':
          if (
            l == null ||
            typeof l == 'function' ||
            typeof l == 'boolean' ||
            typeof l == 'symbol'
          ) {
            e.removeAttribute('xlink:href');
            break;
          }
          ((a = _r('' + l)),
            e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
          break;
        case 'contentEditable':
        case 'spellCheck':
        case 'draggable':
        case 'value':
        case 'autoReverse':
        case 'externalResourcesRequired':
        case 'focusable':
        case 'preserveAlpha':
          l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(a, '' + l)
            : e.removeAttribute(a);
          break;
        case 'inert':
        case 'allowFullScreen':
        case 'async':
        case 'autoPlay':
        case 'controls':
        case 'default':
        case 'defer':
        case 'disabled':
        case 'disablePictureInPicture':
        case 'disableRemotePlayback':
        case 'formNoValidate':
        case 'hidden':
        case 'loop':
        case 'noModule':
        case 'noValidate':
        case 'open':
        case 'playsInline':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'itemScope':
          l && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(a, '')
            : e.removeAttribute(a);
          break;
        case 'capture':
        case 'download':
          l === !0
            ? e.setAttribute(a, '')
            : l !== !1 &&
                l != null &&
                typeof l != 'function' &&
                typeof l != 'symbol'
              ? e.setAttribute(a, l)
              : e.removeAttribute(a);
          break;
        case 'cols':
        case 'rows':
        case 'size':
        case 'span':
          l != null &&
          typeof l != 'function' &&
          typeof l != 'symbol' &&
          !isNaN(l) &&
          1 <= l
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
          break;
        case 'rowSpan':
        case 'start':
          l == null ||
          typeof l == 'function' ||
          typeof l == 'symbol' ||
          isNaN(l)
            ? e.removeAttribute(a)
            : e.setAttribute(a, l);
          break;
        case 'popover':
          (U('beforetoggle', e), U('toggle', e), zr(e, 'popover', l));
          break;
        case 'xlinkActuate':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
          break;
        case 'xlinkArcrole':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
          break;
        case 'xlinkRole':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
          break;
        case 'xlinkShow':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
          break;
        case 'xlinkTitle':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
          break;
        case 'xlinkType':
          Ot(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
          break;
        case 'xmlBase':
          Ot(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
          break;
        case 'xmlLang':
          Ot(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
          break;
        case 'xmlSpace':
          Ot(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
          break;
        case 'is':
          zr(e, 'is', l);
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          (!(2 < a.length) ||
            (a[0] !== 'o' && a[0] !== 'O') ||
            (a[1] !== 'n' && a[1] !== 'N')) &&
            ((a = up.get(a) || a), zr(e, a, l));
      }
    }
    function jo(e, t, a, l, n, r) {
      switch (a) {
        case 'style':
          $d(e, l, r);
          break;
        case 'dangerouslySetInnerHTML':
          if (l != null) {
            if (typeof l != 'object' || !('__html' in l)) throw Error(g(61));
            if (((a = l.__html), a != null)) {
              if (n.children != null) throw Error(g(60));
              e.innerHTML = a;
            }
          }
          break;
        case 'children':
          typeof l == 'string'
            ? Dl(e, l)
            : (typeof l == 'number' || typeof l == 'bigint') && Dl(e, '' + l);
          break;
        case 'onScroll':
          l != null && U('scroll', e);
          break;
        case 'onScrollEnd':
          l != null && U('scrollend', e);
          break;
        case 'onClick':
          l != null && (e.onclick = jt);
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'innerHTML':
        case 'ref':
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          if (!Vd.hasOwnProperty(a))
            e: {
              if (
                a[0] === 'o' &&
                a[1] === 'n' &&
                ((n = a.endsWith('Capture')),
                (t = a.slice(2, n ? a.length - 7 : void 0)),
                (r = e[He] || null),
                (r = r != null ? r[a] : null),
                typeof r == 'function' && e.removeEventListener(t, r, n),
                typeof l == 'function')
              ) {
                (typeof r != 'function' &&
                  r !== null &&
                  (a in e
                    ? (e[a] = null)
                    : e.hasAttribute(a) && e.removeAttribute(a)),
                  e.addEventListener(t, l, n));
                break e;
              }
              a in e
                ? (e[a] = l)
                : l === !0
                  ? e.setAttribute(a, '')
                  : zr(e, a, l);
            }
      }
    }
    function xe(e, t, a) {
      switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'img':
          (U('error', e), U('load', e));
          var l = !1,
            n = !1,
            r;
          for (r in a)
            if (a.hasOwnProperty(r)) {
              var i = a[r];
              if (i != null)
                switch (r) {
                  case 'src':
                    l = !0;
                    break;
                  case 'srcSet':
                    n = !0;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    throw Error(g(137, t));
                  default:
                    K(e, t, r, i, a, null);
                }
            }
          (n && K(e, t, 'srcSet', a.srcSet, a, null),
            l && K(e, t, 'src', a.src, a, null));
          return;
        case 'input':
          U('invalid', e);
          var u = (r = i = n = null),
            o = null,
            c = null;
          for (l in a)
            if (a.hasOwnProperty(l)) {
              var d = a[l];
              if (d != null)
                switch (l) {
                  case 'name':
                    n = d;
                    break;
                  case 'type':
                    i = d;
                    break;
                  case 'checked':
                    o = d;
                    break;
                  case 'defaultChecked':
                    c = d;
                    break;
                  case 'value':
                    r = d;
                    break;
                  case 'defaultValue':
                    u = d;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    if (d != null) throw Error(g(137, t));
                    break;
                  default:
                    K(e, t, l, d, a, null);
                }
            }
          Kd(e, r, u, o, c, i, n, !1);
          return;
        case 'select':
          (U('invalid', e), (l = i = r = null));
          for (n in a)
            if (a.hasOwnProperty(n) && ((u = a[n]), u != null))
              switch (n) {
                case 'value':
                  r = u;
                  break;
                case 'defaultValue':
                  i = u;
                  break;
                case 'multiple':
                  l = u;
                default:
                  K(e, t, n, u, a, null);
              }
          ((t = r),
            (a = i),
            (e.multiple = !!l),
            t != null ? Sl(e, !!l, t, !1) : a != null && Sl(e, !!l, a, !0));
          return;
        case 'textarea':
          (U('invalid', e), (r = n = l = null));
          for (i in a)
            if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
              switch (i) {
                case 'value':
                  l = u;
                  break;
                case 'defaultValue':
                  n = u;
                  break;
                case 'children':
                  r = u;
                  break;
                case 'dangerouslySetInnerHTML':
                  if (u != null) throw Error(g(91));
                  break;
                default:
                  K(e, t, i, u, a, null);
              }
          Fd(e, l, n, r);
          return;
        case 'option':
          for (o in a)
            if (a.hasOwnProperty(o) && ((l = a[o]), l != null))
              switch (o) {
                case 'selected':
                  e.selected =
                    l && typeof l != 'function' && typeof l != 'symbol';
                  break;
                default:
                  K(e, t, o, l, a, null);
              }
          return;
        case 'dialog':
          (U('beforetoggle', e), U('toggle', e), U('cancel', e), U('close', e));
          break;
        case 'iframe':
        case 'object':
          U('load', e);
          break;
        case 'video':
        case 'audio':
          for (l = 0; l < kn.length; l++) U(kn[l], e);
          break;
        case 'image':
          (U('error', e), U('load', e));
          break;
        case 'details':
          U('toggle', e);
          break;
        case 'embed':
        case 'source':
        case 'link':
          (U('error', e), U('load', e));
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'track':
        case 'wbr':
        case 'menuitem':
          for (c in a)
            if (a.hasOwnProperty(c) && ((l = a[c]), l != null))
              switch (c) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(g(137, t));
                default:
                  K(e, t, c, l, a, null);
              }
          return;
        default:
          if (Io(t)) {
            for (d in a)
              a.hasOwnProperty(d) &&
                ((l = a[d]), l !== void 0 && jo(e, t, d, l, a, void 0));
            return;
          }
      }
      for (u in a)
        a.hasOwnProperty(u) &&
          ((l = a[u]), l != null && K(e, t, u, l, a, null));
    }
    function zg(e, t, a, l) {
      switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'input':
          var n = null,
            r = null,
            i = null,
            u = null,
            o = null,
            c = null,
            d = null;
          for (v in a) {
            var m = a[v];
            if (a.hasOwnProperty(v) && m != null)
              switch (v) {
                case 'checked':
                  break;
                case 'value':
                  break;
                case 'defaultValue':
                  o = m;
                default:
                  l.hasOwnProperty(v) || K(e, t, v, null, l, m);
              }
          }
          for (var h in l) {
            var v = l[h];
            if (((m = a[h]), l.hasOwnProperty(h) && (v != null || m != null)))
              switch (h) {
                case 'type':
                  r = v;
                  break;
                case 'name':
                  n = v;
                  break;
                case 'checked':
                  c = v;
                  break;
                case 'defaultChecked':
                  d = v;
                  break;
                case 'value':
                  i = v;
                  break;
                case 'defaultValue':
                  u = v;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (v != null) throw Error(g(137, t));
                  break;
                default:
                  v !== m && K(e, t, h, v, l, m);
              }
          }
          uo(e, i, u, o, c, d, r, n);
          return;
        case 'select':
          v = i = u = h = null;
          for (r in a)
            if (((o = a[r]), a.hasOwnProperty(r) && o != null))
              switch (r) {
                case 'value':
                  break;
                case 'multiple':
                  v = o;
                default:
                  l.hasOwnProperty(r) || K(e, t, r, null, l, o);
              }
          for (n in l)
            if (
              ((r = l[n]),
              (o = a[n]),
              l.hasOwnProperty(n) && (r != null || o != null))
            )
              switch (n) {
                case 'value':
                  h = r;
                  break;
                case 'defaultValue':
                  u = r;
                  break;
                case 'multiple':
                  i = r;
                default:
                  r !== o && K(e, t, n, r, l, o);
              }
          ((t = u),
            (a = i),
            (l = v),
            h != null
              ? Sl(e, !!a, h, !1)
              : !!l != !!a &&
                (t != null ? Sl(e, !!a, t, !0) : Sl(e, !!a, a ? [] : '', !1)));
          return;
        case 'textarea':
          v = h = null;
          for (u in a)
            if (
              ((n = a[u]),
              a.hasOwnProperty(u) && n != null && !l.hasOwnProperty(u))
            )
              switch (u) {
                case 'value':
                  break;
                case 'children':
                  break;
                default:
                  K(e, t, u, null, l, n);
              }
          for (i in l)
            if (
              ((n = l[i]),
              (r = a[i]),
              l.hasOwnProperty(i) && (n != null || r != null))
            )
              switch (i) {
                case 'value':
                  h = n;
                  break;
                case 'defaultValue':
                  v = n;
                  break;
                case 'children':
                  break;
                case 'dangerouslySetInnerHTML':
                  if (n != null) throw Error(g(91));
                  break;
                default:
                  n !== r && K(e, t, i, n, l, r);
              }
          Jd(e, h, v);
          return;
        case 'option':
          for (var b in a)
            if (
              ((h = a[b]),
              a.hasOwnProperty(b) && h != null && !l.hasOwnProperty(b))
            )
              switch (b) {
                case 'selected':
                  e.selected = !1;
                  break;
                default:
                  K(e, t, b, null, l, h);
              }
          for (o in l)
            if (
              ((h = l[o]),
              (v = a[o]),
              l.hasOwnProperty(o) && h !== v && (h != null || v != null))
            )
              switch (o) {
                case 'selected':
                  e.selected =
                    h && typeof h != 'function' && typeof h != 'symbol';
                  break;
                default:
                  K(e, t, o, h, l, v);
              }
          return;
        case 'img':
        case 'link':
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'embed':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'source':
        case 'track':
        case 'wbr':
        case 'menuitem':
          for (var S in a)
            ((h = a[S]),
              a.hasOwnProperty(S) &&
                h != null &&
                !l.hasOwnProperty(S) &&
                K(e, t, S, null, l, h));
          for (c in l)
            if (
              ((h = l[c]),
              (v = a[c]),
              l.hasOwnProperty(c) && h !== v && (h != null || v != null))
            )
              switch (c) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (h != null) throw Error(g(137, t));
                  break;
                default:
                  K(e, t, c, h, l, v);
              }
          return;
        default:
          if (Io(t)) {
            for (var E in a)
              ((h = a[E]),
                a.hasOwnProperty(E) &&
                  h !== void 0 &&
                  !l.hasOwnProperty(E) &&
                  jo(e, t, E, void 0, l, h));
            for (d in l)
              ((h = l[d]),
                (v = a[d]),
                !l.hasOwnProperty(d) ||
                  h === v ||
                  (h === void 0 && v === void 0) ||
                  jo(e, t, d, h, l, v));
            return;
          }
      }
      for (var f in a)
        ((h = a[f]),
          a.hasOwnProperty(f) &&
            h != null &&
            !l.hasOwnProperty(f) &&
            K(e, t, f, null, l, h));
      for (m in l)
        ((h = l[m]),
          (v = a[m]),
          !l.hasOwnProperty(m) ||
            h === v ||
            (h == null && v == null) ||
            K(e, t, m, h, l, v));
    }
    function sd(e) {
      switch (e) {
        case 'css':
        case 'script':
        case 'font':
        case 'img':
        case 'image':
        case 'input':
        case 'link':
          return !0;
        default:
          return !1;
      }
    }
    function _g() {
      if (typeof performance.getEntriesByType == 'function') {
        for (
          var e = 0, t = 0, a = performance.getEntriesByType('resource'), l = 0;
          l < a.length;
          l++
        ) {
          var n = a[l],
            r = n.transferSize,
            i = n.initiatorType,
            u = n.duration;
          if (r && u && sd(i)) {
            for (i = 0, u = n.responseEnd, l += 1; l < a.length; l++) {
              var o = a[l],
                c = o.startTime;
              if (c > u) break;
              var d = o.transferSize,
                m = o.initiatorType;
              d &&
                sd(m) &&
                ((o = o.responseEnd),
                (i += d * (o < u ? 1 : (u - c) / (o - c))));
            }
            if ((--l, (t += (8 * (r + i)) / (n.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == 'number')
        ? e
        : 5;
    }
    var Bo = null,
      Yo = null;
    function vi(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function fd(e) {
      switch (e) {
        case 'http://www.w3.org/2000/svg':
          return 1;
        case 'http://www.w3.org/1998/Math/MathML':
          return 2;
        default:
          return 0;
      }
    }
    function ey(e, t) {
      if (e === 0)
        switch (t) {
          case 'svg':
            return 1;
          case 'math':
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === 'foreignObject' ? 0 : e;
    }
    function ko(e, t) {
      return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        typeof t.children == 'bigint' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Fu = null;
    function Lg() {
      var e = window.event;
      return e && e.type === 'popstate'
        ? e === Fu
          ? !1
          : ((Fu = e), !0)
        : ((Fu = null), !1);
    }
    var ty = typeof setTimeout == 'function' ? setTimeout : void 0,
      Ug = typeof clearTimeout == 'function' ? clearTimeout : void 0,
      dd = typeof Promise == 'function' ? Promise : void 0,
      Hg =
        typeof queueMicrotask == 'function'
          ? queueMicrotask
          : typeof dd < 'u'
            ? function (e) {
                return dd.resolve(null).then(e).catch(jg);
              }
            : ty;
    function jg(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function xa(e) {
      return e === 'head';
    }
    function md(e, t) {
      var a = t,
        l = 0;
      do {
        var n = a.nextSibling;
        if ((e.removeChild(a), n && n.nodeType === 8))
          if (((a = n.data), a === '/$' || a === '/&')) {
            if (l === 0) {
              (e.removeChild(n), Hl(t));
              return;
            }
            l--;
          } else if (
            a === '$' ||
            a === '$?' ||
            a === '$~' ||
            a === '$!' ||
            a === '&'
          )
            l++;
          else if (a === 'html') Cn(e.ownerDocument.documentElement);
          else if (a === 'head') {
            ((a = e.ownerDocument.head), Cn(a));
            for (var r = a.firstChild; r; ) {
              var i = r.nextSibling,
                u = r.nodeName;
              (r[Fn] ||
                u === 'SCRIPT' ||
                u === 'STYLE' ||
                (u === 'LINK' && r.rel.toLowerCase() === 'stylesheet') ||
                a.removeChild(r),
                (r = i));
            }
          } else a === 'body' && Cn(e.ownerDocument.body);
        a = n;
      } while (a);
      Hl(t);
    }
    function hd(e, t) {
      var a = e;
      e = 0;
      do {
        var l = a.nextSibling;
        if (
          (a.nodeType === 1
            ? t
              ? ((a._stashedDisplay = a.style.display),
                (a.style.display = 'none'))
              : ((a.style.display = a._stashedDisplay || ''),
                a.getAttribute('style') === '' && a.removeAttribute('style'))
            : a.nodeType === 3 &&
              (t
                ? ((a._stashedText = a.nodeValue), (a.nodeValue = ''))
                : (a.nodeValue = a._stashedText || '')),
          l && l.nodeType === 8)
        )
          if (((a = l.data), a === '/$')) {
            if (e === 0) break;
            e--;
          } else (a !== '$' && a !== '$?' && a !== '$~' && a !== '$!') || e++;
        a = l;
      } while (a);
    }
    function qo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (((t = t.nextSibling), a.nodeName)) {
          case 'HTML':
          case 'HEAD':
          case 'BODY':
            (qo(a), Wo(a));
            continue;
          case 'SCRIPT':
          case 'STYLE':
            continue;
          case 'LINK':
            if (a.rel.toLowerCase() === 'stylesheet') continue;
        }
        e.removeChild(a);
      }
    }
    function Bg(e, t, a, l) {
      for (; e.nodeType === 1; ) {
        var n = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
        } else if (l) {
          if (!e[Fn])
            switch (t) {
              case 'meta':
                if (!e.hasAttribute('itemprop')) break;
                return e;
              case 'link':
                if (
                  ((r = e.getAttribute('rel')),
                  r === 'stylesheet' && e.hasAttribute('data-precedence'))
                )
                  break;
                if (
                  r !== n.rel ||
                  e.getAttribute('href') !==
                    (n.href == null || n.href === '' ? null : n.href) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin) ||
                  e.getAttribute('title') !== (n.title == null ? null : n.title)
                )
                  break;
                return e;
              case 'style':
                if (e.hasAttribute('data-precedence')) break;
                return e;
              case 'script':
                if (
                  ((r = e.getAttribute('src')),
                  (r !== (n.src == null ? null : n.src) ||
                    e.getAttribute('type') !==
                      (n.type == null ? null : n.type) ||
                    e.getAttribute('crossorigin') !==
                      (n.crossOrigin == null ? null : n.crossOrigin)) &&
                    r &&
                    e.hasAttribute('async') &&
                    !e.hasAttribute('itemprop'))
                )
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === 'input' && e.type === 'hidden') {
          var r = n.name == null ? null : '' + n.name;
          if (n.type === 'hidden' && e.getAttribute('name') === r) return e;
        } else return e;
        if (((e = it(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function Yg(e, t, a) {
      if (t === '') return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== 'INPUT' ||
            e.type !== 'hidden') &&
            !a) ||
          ((e = it(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function ay(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== 'INPUT' ||
            e.type !== 'hidden') &&
            !t) ||
          ((e = it(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function Go(e) {
      return e.data === '$?' || e.data === '$~';
    }
    function Xo(e) {
      return (
        e.data === '$!' ||
        (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
      );
    }
    function kg(e, t) {
      var a = e.ownerDocument;
      if (e.data === '$~') e._reactRetry = t;
      else if (e.data !== '$?' || a.readyState !== 'loading') t();
      else {
        var l = function () {
          (t(), a.removeEventListener('DOMContentLoaded', l));
        };
        (a.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
      }
    }
    function it(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === '$' ||
              t === '$!' ||
              t === '$?' ||
              t === '$~' ||
              t === '&' ||
              t === 'F!' ||
              t === 'F')
          )
            break;
          if (t === '/$' || t === '/&') return null;
        }
      }
      return e;
    }
    var Vo = null;
    function yd(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === '/$' || a === '/&') {
            if (t === 0) return it(e.nextSibling);
            t--;
          } else
            (a !== '$' &&
              a !== '$!' &&
              a !== '$?' &&
              a !== '$~' &&
              a !== '&') ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function vd(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (
            a === '$' ||
            a === '$!' ||
            a === '$?' ||
            a === '$~' ||
            a === '&'
          ) {
            if (t === 0) return e;
            t--;
          } else (a !== '/$' && a !== '/&') || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ly(e, t, a) {
      switch (((t = vi(a)), e)) {
        case 'html':
          if (((e = t.documentElement), !e)) throw Error(g(452));
          return e;
        case 'head':
          if (((e = t.head), !e)) throw Error(g(453));
          return e;
        case 'body':
          if (((e = t.body), !e)) throw Error(g(454));
          return e;
        default:
          throw Error(g(451));
      }
    }
    function Cn(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Wo(e);
    }
    var ut = new Map(),
      pd = new Set();
    function pi(e) {
      return typeof e.getRootNode == 'function'
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var Kt = G.d;
    G.d = { f: qg, r: Gg, D: Xg, C: Vg, L: Qg, m: Zg, X: Jg, S: Kg, M: Fg };
    function qg() {
      var e = Kt.f(),
        t = Li();
      return e || t;
    }
    function Gg(e) {
      var t = Bl(e);
      t !== null && t.tag === 5 && t.type === 'form' ? $m(t) : Kt.r(e);
    }
    var Gl = typeof document > 'u' ? null : document;
    function ny(e, t, a) {
      var l = Gl;
      if (l && typeof t == 'string' && t) {
        var n = at(t);
        ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
          typeof a == 'string' && (n += '[crossorigin="' + a + '"]'),
          pd.has(n) ||
            (pd.add(n),
            (e = { rel: e, crossOrigin: a, href: t }),
            l.querySelector(n) === null &&
              ((t = l.createElement('link')),
              xe(t, 'link', e),
              ge(t),
              l.head.appendChild(t))));
      }
    }
    function Xg(e) {
      (Kt.D(e), ny('dns-prefetch', e, null));
    }
    function Vg(e, t) {
      (Kt.C(e, t), ny('preconnect', e, t));
    }
    function Qg(e, t, a) {
      Kt.L(e, t, a);
      var l = Gl;
      if (l && e && t) {
        var n = 'link[rel="preload"][as="' + at(t) + '"]';
        t === 'image' && a && a.imageSrcSet
          ? ((n += '[imagesrcset="' + at(a.imageSrcSet) + '"]'),
            typeof a.imageSizes == 'string' &&
              (n += '[imagesizes="' + at(a.imageSizes) + '"]'))
          : (n += '[href="' + at(e) + '"]');
        var r = n;
        switch (t) {
          case 'style':
            r = Ul(e);
            break;
          case 'script':
            r = Xl(e);
        }
        ut.has(r) ||
          ((e = ae(
            {
              rel: 'preload',
              href: t === 'image' && a && a.imageSrcSet ? void 0 : e,
              as: t,
            },
            a
          )),
          ut.set(r, e),
          l.querySelector(n) !== null ||
            (t === 'style' && l.querySelector(tr(r))) ||
            (t === 'script' && l.querySelector(ar(r))) ||
            ((t = l.createElement('link')),
            xe(t, 'link', e),
            ge(t),
            l.head.appendChild(t)));
      }
    }
    function Zg(e, t) {
      Kt.m(e, t);
      var a = Gl;
      if (a && e) {
        var l = t && typeof t.as == 'string' ? t.as : 'script',
          n =
            'link[rel="modulepreload"][as="' +
            at(l) +
            '"][href="' +
            at(e) +
            '"]',
          r = n;
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            r = Xl(e);
        }
        if (
          !ut.has(r) &&
          ((e = ae({ rel: 'modulepreload', href: e }, t)),
          ut.set(r, e),
          a.querySelector(n) === null)
        ) {
          switch (l) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
              if (a.querySelector(ar(r))) return;
          }
          ((l = a.createElement('link')),
            xe(l, 'link', e),
            ge(l),
            a.head.appendChild(l));
        }
      }
    }
    function Kg(e, t, a) {
      Kt.S(e, t, a);
      var l = Gl;
      if (l && e) {
        var n = bl(l).hoistableStyles,
          r = Ul(e);
        t = t || 'default';
        var i = n.get(r);
        if (!i) {
          var u = { loading: 0, preload: null };
          if ((i = l.querySelector(tr(r)))) u.loading = 5;
          else {
            ((e = ae({ rel: 'stylesheet', href: e, 'data-precedence': t }, a)),
              (a = ut.get(r)) && jc(e, a));
            var o = (i = l.createElement('link'));
            (ge(o),
              xe(o, 'link', e),
              (o._p = new Promise(function (c, d) {
                ((o.onload = c), (o.onerror = d));
              })),
              o.addEventListener('load', function () {
                u.loading |= 1;
              }),
              o.addEventListener('error', function () {
                u.loading |= 2;
              }),
              (u.loading |= 4),
              Xr(i, t, l));
          }
          ((i = { type: 'stylesheet', instance: i, count: 1, state: u }),
            n.set(r, i));
        }
      }
    }
    function Jg(e, t) {
      Kt.X(e, t);
      var a = Gl;
      if (a && e) {
        var l = bl(a).hoistableScripts,
          n = Xl(e),
          r = l.get(n);
        r ||
          ((r = a.querySelector(ar(n))),
          r ||
            ((e = ae({ src: e, async: !0 }, t)),
            (t = ut.get(n)) && Bc(e, t),
            (r = a.createElement('script')),
            ge(r),
            xe(r, 'link', e),
            a.head.appendChild(r)),
          (r = { type: 'script', instance: r, count: 1, state: null }),
          l.set(n, r));
      }
    }
    function Fg(e, t) {
      Kt.M(e, t);
      var a = Gl;
      if (a && e) {
        var l = bl(a).hoistableScripts,
          n = Xl(e),
          r = l.get(n);
        r ||
          ((r = a.querySelector(ar(n))),
          r ||
            ((e = ae({ src: e, async: !0, type: 'module' }, t)),
            (t = ut.get(n)) && Bc(e, t),
            (r = a.createElement('script')),
            ge(r),
            xe(r, 'link', e),
            a.head.appendChild(r)),
          (r = { type: 'script', instance: r, count: 1, state: null }),
          l.set(n, r));
      }
    }
    function gd(e, t, a, l) {
      var n = (n = sa.current) ? pi(n) : null;
      if (!n) throw Error(g(446));
      switch (e) {
        case 'meta':
        case 'title':
          return null;
        case 'style':
          return typeof a.precedence == 'string' && typeof a.href == 'string'
            ? ((t = Ul(a.href)),
              (a = bl(n).hoistableStyles),
              (l = a.get(t)),
              l ||
                ((l = { type: 'style', instance: null, count: 0, state: null }),
                a.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null };
        case 'link':
          if (
            a.rel === 'stylesheet' &&
            typeof a.href == 'string' &&
            typeof a.precedence == 'string'
          ) {
            e = Ul(a.href);
            var r = bl(n).hoistableStyles,
              i = r.get(e);
            if (
              (i ||
                ((n = n.ownerDocument || n),
                (i = {
                  type: 'stylesheet',
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                r.set(e, i),
                (r = n.querySelector(tr(e))) &&
                  !r._p &&
                  ((i.instance = r), (i.state.loading = 5)),
                ut.has(e) ||
                  ((a = {
                    rel: 'preload',
                    as: 'style',
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy,
                  }),
                  ut.set(e, a),
                  r || $g(n, e, a, i.state))),
              t && l === null)
            )
              throw Error(g(528, ''));
            return i;
          }
          if (t && l !== null) throw Error(g(529, ''));
          return null;
        case 'script':
          return (
            (t = a.async),
            (a = a.src),
            typeof a == 'string' &&
            t &&
            typeof t != 'function' &&
            typeof t != 'symbol'
              ? ((t = Xl(a)),
                (a = bl(n).hoistableScripts),
                (l = a.get(t)),
                l ||
                  ((l = {
                    type: 'script',
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  a.set(t, l)),
                l)
              : { type: 'void', instance: null, count: 0, state: null }
          );
        default:
          throw Error(g(444, e));
      }
    }
    function Ul(e) {
      return 'href="' + at(e) + '"';
    }
    function tr(e) {
      return 'link[rel="stylesheet"][' + e + ']';
    }
    function ry(e) {
      return ae({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function $g(e, t, a, l) {
      e.querySelector('link[rel="preload"][as="style"][' + t + ']')
        ? (l.loading = 1)
        : ((t = e.createElement('link')),
          (l.preload = t),
          t.addEventListener('load', function () {
            return (l.loading |= 1);
          }),
          t.addEventListener('error', function () {
            return (l.loading |= 2);
          }),
          xe(t, 'link', a),
          ge(t),
          e.head.appendChild(t));
    }
    function Xl(e) {
      return '[src="' + at(e) + '"]';
    }
    function ar(e) {
      return 'script[async]' + e;
    }
    function bd(e, t, a) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case 'style':
            var l = e.querySelector('style[data-href~="' + at(a.href) + '"]');
            if (l) return ((t.instance = l), ge(l), l);
            var n = ae({}, a, {
              'data-href': a.href,
              'data-precedence': a.precedence,
              href: null,
              precedence: null,
            });
            return (
              (l = (e.ownerDocument || e).createElement('style')),
              ge(l),
              xe(l, 'style', n),
              Xr(l, a.precedence, e),
              (t.instance = l)
            );
          case 'stylesheet':
            n = Ul(a.href);
            var r = e.querySelector(tr(n));
            if (r) return ((t.state.loading |= 4), (t.instance = r), ge(r), r);
            ((l = ry(a)),
              (n = ut.get(n)) && jc(l, n),
              (r = (e.ownerDocument || e).createElement('link')),
              ge(r));
            var i = r;
            return (
              (i._p = new Promise(function (u, o) {
                ((i.onload = u), (i.onerror = o));
              })),
              xe(r, 'link', l),
              (t.state.loading |= 4),
              Xr(r, a.precedence, e),
              (t.instance = r)
            );
          case 'script':
            return (
              (r = Xl(a.src)),
              (n = e.querySelector(ar(r)))
                ? ((t.instance = n), ge(n), n)
                : ((l = a),
                  (n = ut.get(r)) && ((l = ae({}, a)), Bc(l, n)),
                  (e = e.ownerDocument || e),
                  (n = e.createElement('script')),
                  ge(n),
                  xe(n, 'link', l),
                  e.head.appendChild(n),
                  (t.instance = n))
            );
          case 'void':
            return null;
          default:
            throw Error(g(443, t.type));
        }
      else
        t.type === 'stylesheet' &&
          (t.state.loading & 4) === 0 &&
          ((l = t.instance), (t.state.loading |= 4), Xr(l, a.precedence, e));
      return t.instance;
    }
    function Xr(e, t, a) {
      for (
        var l = a.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]'
          ),
          n = l.length ? l[l.length - 1] : null,
          r = n,
          i = 0;
        i < l.length;
        i++
      ) {
        var u = l[i];
        if (u.dataset.precedence === t) r = u;
        else if (r !== n) break;
      }
      r
        ? r.parentNode.insertBefore(e, r.nextSibling)
        : ((t = a.nodeType === 9 ? a.head : a),
          t.insertBefore(e, t.firstChild));
    }
    function jc(e, t) {
      (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title));
    }
    function Bc(e, t) {
      (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity));
    }
    var Vr = null;
    function Sd(e, t, a) {
      if (Vr === null) {
        var l = new Map(),
          n = (Vr = new Map());
        n.set(a, l);
      } else ((n = Vr), (l = n.get(a)), l || ((l = new Map()), n.set(a, l)));
      if (l.has(e)) return l;
      for (
        l.set(e, null), a = a.getElementsByTagName(e), n = 0;
        n < a.length;
        n++
      ) {
        var r = a[n];
        if (
          !(
            r[Fn] ||
            r[Ee] ||
            (e === 'link' && r.getAttribute('rel') === 'stylesheet')
          ) &&
          r.namespaceURI !== 'http://www.w3.org/2000/svg'
        ) {
          var i = r.getAttribute(t) || '';
          i = e + i;
          var u = l.get(i);
          u ? u.push(r) : l.set(i, [r]);
        }
      }
      return l;
    }
    function Ed(e, t, a) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          a,
          t === 'title' ? e.querySelector('head > title') : null
        ));
    }
    function Pg(e, t, a) {
      if (a === 1 || t.itemProp != null) return !1;
      switch (e) {
        case 'meta':
        case 'title':
          return !0;
        case 'style':
          if (
            typeof t.precedence != 'string' ||
            typeof t.href != 'string' ||
            t.href === ''
          )
            break;
          return !0;
        case 'link':
          if (
            typeof t.rel != 'string' ||
            typeof t.href != 'string' ||
            t.href === '' ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case 'stylesheet':
              return (
                (e = t.disabled),
                typeof t.precedence == 'string' && e == null
              );
            default:
              return !0;
          }
        case 'script':
          if (
            t.async &&
            typeof t.async != 'function' &&
            typeof t.async != 'symbol' &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == 'string'
          )
            return !0;
      }
      return !1;
    }
    function iy(e) {
      return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function Wg(e, t, a, l) {
      if (
        a.type === 'stylesheet' &&
        (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
        (a.state.loading & 4) === 0
      ) {
        if (a.instance === null) {
          var n = Ul(l.href),
            r = t.querySelector(tr(n));
          if (r) {
            ((t = r._p),
              t !== null &&
                typeof t == 'object' &&
                typeof t.then == 'function' &&
                (e.count++, (e = gi.bind(e)), t.then(e, e)),
              (a.state.loading |= 4),
              (a.instance = r),
              ge(r));
            return;
          }
          ((r = t.ownerDocument || t),
            (l = ry(l)),
            (n = ut.get(n)) && jc(l, n),
            (r = r.createElement('link')),
            ge(r));
          var i = r;
          ((i._p = new Promise(function (u, o) {
            ((i.onload = u), (i.onerror = o));
          })),
            xe(r, 'link', l),
            (a.instance = r));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(a, t),
          (t = a.state.preload) &&
            (a.state.loading & 3) === 0 &&
            (e.count++,
            (a = gi.bind(e)),
            t.addEventListener('load', a),
            t.addEventListener('error', a)));
      }
    }
    var $u = 0;
    function Ig(e, t) {
      return (
        e.stylesheets && e.count === 0 && Qr(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (a) {
              var l = setTimeout(function () {
                if ((e.stylesheets && Qr(e, e.stylesheets), e.unsuspend)) {
                  var r = e.unsuspend;
                  ((e.unsuspend = null), r());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $u === 0 && ($u = 62500 * _g());
              var n = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Qr(e, e.stylesheets), e.unsuspend))
                  ) {
                    var r = e.unsuspend;
                    ((e.unsuspend = null), r());
                  }
                },
                (e.imgBytes > $u ? 50 : 800) + t
              );
              return (
                (e.unsuspend = a),
                function () {
                  ((e.unsuspend = null), clearTimeout(l), clearTimeout(n));
                }
              );
            }
          : null
      );
    }
    function gi() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Qr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var bi = null;
    function Qr(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (bi = new Map()),
          t.forEach(eb, e),
          (bi = null),
          gi.call(e)));
    }
    function eb(e, t) {
      if (!(t.state.loading & 4)) {
        var a = bi.get(e);
        if (a) var l = a.get(null);
        else {
          ((a = new Map()), bi.set(e, a));
          for (
            var n = e.querySelectorAll(
                'link[data-precedence],style[data-precedence]'
              ),
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r];
            (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
              (a.set(i.dataset.precedence, i), (l = i));
          }
          l && a.set(null, l);
        }
        ((n = t.instance),
          (i = n.getAttribute('data-precedence')),
          (r = a.get(i) || l),
          r === l && a.set(null, n),
          a.set(i, n),
          this.count++,
          (l = gi.bind(this)),
          n.addEventListener('load', l),
          n.addEventListener('error', l),
          r
            ? r.parentNode.insertBefore(n, r.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(n, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Gn = {
      $$typeof: Ht,
      Provider: null,
      Consumer: null,
      _currentValue: za,
      _currentValue2: za,
      _threadCount: 0,
    };
    function tb(e, t, a, l, n, r, i, u, o) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ru(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ru(0)),
        (this.hiddenUpdates = Ru(null)),
        (this.identifierPrefix = l),
        (this.onUncaughtError = n),
        (this.onCaughtError = r),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map()));
    }
    function uy(e, t, a, l, n, r, i, u, o, c, d, m) {
      return (
        (e = new tb(e, t, a, i, o, c, d, m, u)),
        (t = 1),
        r === !0 && (t |= 24),
        (r = Ge(3, null, null, t)),
        (e.current = r),
        (r.stateNode = e),
        (t = sc()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (r.memoizedState = { element: l, isDehydrated: a, cache: t }),
        mc(r),
        e
      );
    }
    function oy(e) {
      return e ? ((e = yl), e) : yl;
    }
    function cy(e, t, a, l, n, r) {
      ((n = oy(n)),
        l.context === null ? (l.context = n) : (l.pendingContext = n),
        (l = da(t)),
        (l.payload = { element: a }),
        (r = r === void 0 ? null : r),
        r !== null && (l.callback = r),
        (a = ma(e, l, t)),
        a !== null && (Ue(a, e, t), Rn(a, e, t)));
    }
    function Rd(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Yc(e, t) {
      (Rd(e, t), (e = e.alternate) && Rd(e, t));
    }
    function sy(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Qa(e, 67108864);
        (t !== null && Ue(t, e, 67108864), Yc(e, 67108864));
      }
    }
    function wd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ke();
        t = $o(t);
        var a = Qa(e, t);
        (a !== null && Ue(a, e, t), Yc(e, t));
      }
    }
    var Si = !0;
    function ab(e, t, a, l) {
      var n = D.T;
      D.T = null;
      var r = G.p;
      try {
        ((G.p = 2), kc(e, t, a, l));
      } finally {
        ((G.p = r), (D.T = n));
      }
    }
    function lb(e, t, a, l) {
      var n = D.T;
      D.T = null;
      var r = G.p;
      try {
        ((G.p = 8), kc(e, t, a, l));
      } finally {
        ((G.p = r), (D.T = n));
      }
    }
    function kc(e, t, a, l) {
      if (Si) {
        var n = Qo(l);
        if (n === null) (Ju(e, t, l, Ei, a), xd(e, l));
        else if (rb(n, e, t, a, l)) l.stopPropagation();
        else if ((xd(e, l), t & 4 && -1 < nb.indexOf(e))) {
          for (; n !== null; ) {
            var r = Bl(n);
            if (r !== null)
              switch (r.tag) {
                case 3:
                  if (
                    ((r = r.stateNode), r.current.memoizedState.isDehydrated)
                  ) {
                    var i = Oa(r.pendingLanes);
                    if (i !== 0) {
                      var u = r;
                      for (u.pendingLanes |= 2, u.entangledLanes |= 2; i; ) {
                        var o = 1 << (31 - Ze(i));
                        ((u.entanglements[1] |= o), (i &= ~o));
                      }
                      (Et(r), (q & 6) === 0 && ((si = Ve() + 500), er(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((u = Qa(r, 2)), u !== null && Ue(u, r, 2), Li(), Yc(r, 2));
              }
            if (((r = Qo(l)), r === null && Ju(e, t, l, Ei, a), r === n)) break;
            n = r;
          }
          n !== null && l.stopPropagation();
        } else Ju(e, t, l, null, a);
      }
    }
    function Qo(e) {
      return ((e = ec(e)), qc(e));
    }
    var Ei = null;
    function qc(e) {
      if (((Ei = null), (e = cl(e)), e !== null)) {
        var t = Qn(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (((e = Cd(t)), e !== null)) return e;
            e = null;
          } else if (a === 31) {
            if (((e = Md(t)), e !== null)) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((Ei = e), null);
    }
    function fy(e) {
      switch (e) {
        case 'beforetoggle':
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'toggle':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 2;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 8;
        case 'message':
          switch (Qv()) {
            case Ud:
              return 2;
            case Hd:
              return 8;
            case $r:
            case Zv:
              return 32;
            case jd:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Zo = !1,
      va = null,
      pa = null,
      ga = null,
      Xn = new Map(),
      Vn = new Map(),
      na = [],
      nb =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
          ' '
        );
    function xd(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          va = null;
          break;
        case 'dragenter':
        case 'dragleave':
          pa = null;
          break;
        case 'mouseover':
        case 'mouseout':
          ga = null;
          break;
        case 'pointerover':
        case 'pointerout':
          Xn.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          Vn.delete(t.pointerId);
      }
    }
    function fn(e, t, a, l, n, r) {
      return e === null || e.nativeEvent !== r
        ? ((e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: r,
            targetContainers: [n],
          }),
          t !== null && ((t = Bl(t)), t !== null && sy(t)),
          e)
        : ((e.eventSystemFlags |= l),
          (t = e.targetContainers),
          n !== null && t.indexOf(n) === -1 && t.push(n),
          e);
    }
    function rb(e, t, a, l, n) {
      switch (t) {
        case 'focusin':
          return ((va = fn(va, e, t, a, l, n)), !0);
        case 'dragenter':
          return ((pa = fn(pa, e, t, a, l, n)), !0);
        case 'mouseover':
          return ((ga = fn(ga, e, t, a, l, n)), !0);
        case 'pointerover':
          var r = n.pointerId;
          return (Xn.set(r, fn(Xn.get(r) || null, e, t, a, l, n)), !0);
        case 'gotpointercapture':
          return (
            (r = n.pointerId),
            Vn.set(r, fn(Vn.get(r) || null, e, t, a, l, n)),
            !0
          );
      }
      return !1;
    }
    function dy(e) {
      var t = cl(e.target);
      if (t !== null) {
        var a = Qn(t);
        if (a !== null) {
          if (((t = a.tag), t === 13)) {
            if (((t = Cd(a)), t !== null)) {
              ((e.blockedOn = t),
                uf(e.priority, function () {
                  wd(a);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = Md(a)), t !== null)) {
              ((e.blockedOn = t),
                uf(e.priority, function () {
                  wd(a);
                }));
              return;
            }
          } else if (
            t === 3 &&
            a.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Zr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Qo(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var l = new a.constructor(a.type, a);
          ((co = l), a.target.dispatchEvent(l), (co = null));
        } else return ((t = Bl(a)), t !== null && sy(t), (e.blockedOn = a), !1);
        t.shift();
      }
      return !0;
    }
    function Td(e, t, a) {
      Zr(e) && a.delete(t);
    }
    function ib() {
      ((Zo = !1),
        va !== null && Zr(va) && (va = null),
        pa !== null && Zr(pa) && (pa = null),
        ga !== null && Zr(ga) && (ga = null),
        Xn.forEach(Td),
        Vn.forEach(Td));
    }
    function Cr(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Zo ||
          ((Zo = !0),
          ve.unstable_scheduleCallback(ve.unstable_NormalPriority, ib)));
    }
    var Mr = null;
    function Ad(e) {
      Mr !== e &&
        ((Mr = e),
        ve.unstable_scheduleCallback(ve.unstable_NormalPriority, function () {
          Mr === e && (Mr = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t],
              l = e[t + 1],
              n = e[t + 2];
            if (typeof l != 'function') {
              if (qc(l || a) === null) continue;
              break;
            }
            var r = Bl(a);
            r !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ao(
                r,
                { pending: !0, data: n, method: a.method, action: l },
                l,
                n
              ));
          }
        }));
    }
    function Hl(e) {
      function t(o) {
        return Cr(o, e);
      }
      (va !== null && Cr(va, e),
        pa !== null && Cr(pa, e),
        ga !== null && Cr(ga, e),
        Xn.forEach(t),
        Vn.forEach(t));
      for (var a = 0; a < na.length; a++) {
        var l = na[a];
        l.blockedOn === e && (l.blockedOn = null);
      }
      for (; 0 < na.length && ((a = na[0]), a.blockedOn === null); )
        (dy(a), a.blockedOn === null && na.shift());
      if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
        for (l = 0; l < a.length; l += 3) {
          var n = a[l],
            r = a[l + 1],
            i = n[He] || null;
          if (typeof r == 'function') i || Ad(a);
          else if (i) {
            var u = null;
            if (r && r.hasAttribute('formAction')) {
              if (((n = r), (i = r[He] || null))) u = i.formAction;
              else if (qc(n) !== null) continue;
            } else u = i.action;
            (typeof u == 'function'
              ? (a[l + 1] = u)
              : (a.splice(l, 3), (l -= 3)),
              Ad(a));
          }
        }
    }
    function my() {
      function e(r) {
        r.canIntercept &&
          r.info === 'react-transition' &&
          r.intercept({
            handler: function () {
              return new Promise(function (i) {
                return (n = i);
              });
            },
            focusReset: 'manual',
            scroll: 'manual',
          });
      }
      function t() {
        (n !== null && (n(), (n = null)), l || setTimeout(a, 20));
      }
      function a() {
        if (!l && !navigation.transition) {
          var r = navigation.currentEntry;
          r &&
            r.url != null &&
            navigation.navigate(r.url, {
              state: r.getState(),
              info: 'react-transition',
              history: 'replace',
            });
        }
      }
      if (typeof navigation == 'object') {
        var l = !1,
          n = null;
        return (
          navigation.addEventListener('navigate', e),
          navigation.addEventListener('navigatesuccess', t),
          navigation.addEventListener('navigateerror', t),
          setTimeout(a, 100),
          function () {
            ((l = !0),
              navigation.removeEventListener('navigate', e),
              navigation.removeEventListener('navigatesuccess', t),
              navigation.removeEventListener('navigateerror', t),
              n !== null && (n(), (n = null)));
          }
        );
      }
    }
    function Gc(e) {
      this._internalRoot = e;
    }
    ji.prototype.render = Gc.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(g(409));
      var a = t.current,
        l = Ke();
      cy(a, l, e, t, null, null);
    };
    ji.prototype.unmount = Gc.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (cy(e.current, 2, null, e, null, null), Li(), (t[jl] = null));
      }
    };
    function ji(e) {
      this._internalRoot = e;
    }
    ji.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Gd();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < na.length && t !== 0 && t < na[a].priority; a++);
        (na.splice(a, 0, e), a === 0 && dy(e));
      }
    };
    var Nd = Dd.version;
    if (Nd !== '19.2.0') throw Error(g(527, Nd, '19.2.0'));
    G.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(g(188))
          : ((e = Object.keys(e).join(',')), Error(g(268, e)));
      return (
        (e = Bv(t)),
        (e = e !== null ? zd(e) : null),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var ub = {
      bundleType: 0,
      version: '19.2.0',
      rendererPackageName: 'react-dom',
      currentDispatcherRef: D,
      reconcilerVersion: '19.2.0',
    };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      ((dn = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !dn.isDisabled && dn.supportsFiber)
    )
      try {
        ((Zn = dn.inject(ub)), (Qe = dn));
      } catch {}
    var dn;
    Bi.createRoot = function (e, t) {
      if (!Od(e)) throw Error(g(299));
      var a = !1,
        l = '',
        n = nh,
        r = rh,
        i = ih;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = uy(e, 1, !1, null, null, a, l, null, n, r, i, my)),
        (e[jl] = t.current),
        Hc(e),
        new Gc(t)
      );
    };
    Bi.hydrateRoot = function (e, t, a) {
      if (!Od(e)) throw Error(g(299));
      var l = !1,
        n = '',
        r = nh,
        i = rh,
        u = ih,
        o = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (r = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (u = a.onRecoverableError),
          a.formState !== void 0 && (o = a.formState)),
        (t = uy(e, 1, !0, t, a ?? null, l, n, o, r, i, u, my)),
        (t.context = oy(null)),
        (a = t.current),
        (l = Ke()),
        (l = $o(l)),
        (n = da(l)),
        (n.callback = null),
        ma(a, n, l),
        (a = l),
        (t.current.lanes = a),
        Jn(t, a),
        Et(t),
        (e[jl] = t.current),
        Hc(e),
        new ji(t)
      );
    };
    Bi.version = '19.2.0';
  });
  var py = Nt((aS, vy) => {
    'use strict';
    function yy() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy);
        } catch (e) {
          console.error(e);
        }
    }
    (yy(), (vy.exports = hy()));
  });
  function xy(e = {}) {
    function t(l, n) {
      let { pathname: r, search: i, hash: u } = l.location;
      return Qc(
        '',
        { pathname: r, search: i, hash: u },
        (n.state && n.state.usr) || null,
        (n.state && n.state.key) || 'default'
      );
    }
    function a(l, n) {
      return typeof n == 'string' ? n : Vl(n);
    }
    return cb(t, a, null, e);
  }
  function W(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
  }
  function Be(e, t) {
    if (!e) {
      typeof console < 'u' && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function ob() {
    return Math.random().toString(36).substring(2, 10);
  }
  function by(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Qc(e, t, a = null, l) {
    return {
      pathname: typeof e == 'string' ? e : e.pathname,
      search: '',
      hash: '',
      ...(typeof t == 'string' ? Ka(t) : t),
      state: a,
      key: (t && t.key) || l || ob(),
    };
  }
  function Vl({ pathname: e = '/', search: t = '', hash: a = '' }) {
    return (
      t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
      a && a !== '#' && (e += a.charAt(0) === '#' ? a : '#' + a),
      e
    );
  }
  function Ka(e) {
    let t = {};
    if (e) {
      let a = e.indexOf('#');
      a >= 0 && ((t.hash = e.substring(a)), (e = e.substring(0, a)));
      let l = e.indexOf('?');
      (l >= 0 && ((t.search = e.substring(l)), (e = e.substring(0, l))),
        e && (t.pathname = e));
    }
    return t;
  }
  function cb(e, t, a, l = {}) {
    let { window: n = document.defaultView, v5Compat: r = !1 } = l,
      i = n.history,
      u = 'POP',
      o = null,
      c = d();
    c == null && ((c = 0), i.replaceState({ ...i.state, idx: c }, ''));
    function d() {
      return (i.state || { idx: null }).idx;
    }
    function m() {
      u = 'POP';
      let E = d(),
        f = E == null ? null : E - c;
      ((c = E), o && o({ action: u, location: S.location, delta: f }));
    }
    function h(E, f) {
      u = 'PUSH';
      let s = Qc(S.location, E, f);
      (a && a(s, E), (c = d() + 1));
      let y = by(s, c),
        p = S.createHref(s);
      try {
        i.pushState(y, '', p);
      } catch (w) {
        if (w instanceof DOMException && w.name === 'DataCloneError') throw w;
        n.location.assign(p);
      }
      r && o && o({ action: u, location: S.location, delta: 1 });
    }
    function v(E, f) {
      u = 'REPLACE';
      let s = Qc(S.location, E, f);
      (a && a(s, E), (c = d()));
      let y = by(s, c),
        p = S.createHref(s);
      (i.replaceState(y, '', p),
        r && o && o({ action: u, location: S.location, delta: 0 }));
    }
    function b(E) {
      return sb(E);
    }
    let S = {
      get action() {
        return u;
      },
      get location() {
        return e(n, i);
      },
      listen(E) {
        if (o) throw new Error('A history only accepts one active listener');
        return (
          n.addEventListener(gy, m),
          (o = E),
          () => {
            (n.removeEventListener(gy, m), (o = null));
          }
        );
      },
      createHref(E) {
        return t(n, E);
      },
      createURL: b,
      encodeLocation(E) {
        let f = b(E);
        return { pathname: f.pathname, search: f.search, hash: f.hash };
      },
      push: h,
      replace: v,
      go(E) {
        return i.go(E);
      },
    };
    return S;
  }
  function sb(e, t = !1) {
    let a = 'http://localhost';
    (typeof window < 'u' &&
      (a =
        window.location.origin !== 'null'
          ? window.location.origin
          : window.location.href),
      W(a, 'No window.location.(origin|href) available to create URL'));
    let l = typeof e == 'string' ? e : Vl(e);
    return (
      (l = l.replace(/ $/, '%20')),
      !t && l.startsWith('//') && (l = a + l),
      new URL(l, a)
    );
  }
  function Fc(e, t, a = '/') {
    return db(e, t, a, !1);
  }
  function db(e, t, a, l) {
    let n = typeof t == 'string' ? Ka(t) : t,
      r = Rt(n.pathname || '/', a);
    if (r == null) return null;
    let i = Ty(e);
    hb(i);
    let u = null;
    for (let o = 0; u == null && o < i.length; ++o) {
      let c = Tb(r);
      u = wb(i[o], c, l);
    }
    return u;
  }
  function mb(e, t) {
    let { route: a, pathname: l, params: n } = e;
    return {
      id: a.id,
      pathname: l,
      params: n,
      data: t[a.id],
      loaderData: t[a.id],
      handle: a.handle,
    };
  }
  function Ty(e, t = [], a = [], l = '', n = !1) {
    let r = (i, u, o = n, c) => {
      let d = {
        relativePath: c === void 0 ? i.path || '' : c,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: u,
        route: i,
      };
      if (d.relativePath.startsWith('/')) {
        if (!d.relativePath.startsWith(l) && o) return;
        (W(
          d.relativePath.startsWith(l),
          `Absolute route path "${d.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        ),
          (d.relativePath = d.relativePath.slice(l.length)));
      }
      let m = Jt([l, d.relativePath]),
        h = a.concat(d);
      (i.children &&
        i.children.length > 0 &&
        (W(
          i.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
        ),
        Ty(i.children, t, h, m, o)),
        !(i.path == null && !i.index) &&
          t.push({ path: m, score: Eb(m, i.index), routesMeta: h }));
    };
    return (
      e.forEach((i, u) => {
        if (i.path === '' || !i.path?.includes('?')) r(i, u);
        else for (let o of Ay(i.path)) r(i, u, !0, o);
      }),
      t
    );
  }
  function Ay(e) {
    let t = e.split('/');
    if (t.length === 0) return [];
    let [a, ...l] = t,
      n = a.endsWith('?'),
      r = a.replace(/\?$/, '');
    if (l.length === 0) return n ? [r, ''] : [r];
    let i = Ay(l.join('/')),
      u = [];
    return (
      u.push(...i.map((o) => (o === '' ? r : [r, o].join('/')))),
      n && u.push(...i),
      u.map((o) => (e.startsWith('/') && o === '' ? '/' : o))
    );
  }
  function hb(e) {
    e.sort((t, a) =>
      t.score !== a.score
        ? a.score - t.score
        : Rb(
            t.routesMeta.map((l) => l.childrenIndex),
            a.routesMeta.map((l) => l.childrenIndex)
          )
    );
  }
  function Eb(e, t) {
    let a = e.split('/'),
      l = a.length;
    return (
      a.some(Sy) && (l += Sb),
      t && (l += pb),
      a
        .filter((n) => !Sy(n))
        .reduce((n, r) => n + (yb.test(r) ? vb : r === '' ? gb : bb), l)
    );
  }
  function Rb(e, t) {
    return e.length === t.length && e.slice(0, -1).every((l, n) => l === t[n])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function wb(e, t, a = !1) {
    let { routesMeta: l } = e,
      n = {},
      r = '/',
      i = [];
    for (let u = 0; u < l.length; ++u) {
      let o = l[u],
        c = u === l.length - 1,
        d = r === '/' ? t : t.slice(r.length) || '/',
        m = nr(
          { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
          d
        ),
        h = o.route;
      if (
        (!m &&
          c &&
          a &&
          !l[l.length - 1].route.index &&
          (m = nr(
            { path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 },
            d
          )),
        !m)
      )
        return null;
      (Object.assign(n, m.params),
        i.push({
          params: n,
          pathname: Jt([r, m.pathname]),
          pathnameBase: Ob(Jt([r, m.pathnameBase])),
          route: h,
        }),
        m.pathnameBase !== '/' && (r = Jt([r, m.pathnameBase])));
    }
    return i;
  }
  function nr(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [a, l] = xb(e.path, e.caseSensitive, e.end),
      n = t.match(a);
    if (!n) return null;
    let r = n[0],
      i = r.replace(/(.)\/+$/, '$1'),
      u = n.slice(1);
    return {
      params: l.reduce((c, { paramName: d, isOptional: m }, h) => {
        if (d === '*') {
          let b = u[h] || '';
          i = r.slice(0, r.length - b.length).replace(/(.)\/+$/, '$1');
        }
        let v = u[h];
        return (
          m && !v ? (c[d] = void 0) : (c[d] = (v || '').replace(/%2F/g, '/')),
          c
        );
      }, {}),
      pathname: r,
      pathnameBase: i,
      pattern: e,
    };
  }
  function xb(e, t = !1, a = !0) {
    Be(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
    );
    let l = [],
      n =
        '^' +
        e
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (i, u, o) => (
              l.push({ paramName: u, isOptional: o != null }),
              o ? '/?([^\\/]+)?' : '/([^\\/]+)'
            )
          )
          .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
    return (
      e.endsWith('*')
        ? (l.push({ paramName: '*' }),
          (n += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : a
          ? (n += '\\/*$')
          : e !== '' && e !== '/' && (n += '(?:(?=\\/|$))'),
      [new RegExp(n, t ? void 0 : 'i'), l]
    );
  }
  function Tb(e) {
    try {
      return e
        .split('/')
        .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
        .join('/');
    } catch (t) {
      return (
        Be(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
        ),
        e
      );
    }
  }
  function Rt(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let a = t.endsWith('/') ? t.length - 1 : t.length,
      l = e.charAt(a);
    return l && l !== '/' ? null : e.slice(a) || '/';
  }
  function Ny(e, t = '/') {
    let {
        pathname: a,
        search: l = '',
        hash: n = '',
      } = typeof e == 'string' ? Ka(e) : e,
      r;
    if (a)
      if (Nb(a)) r = a;
      else {
        if (a.includes('//')) {
          let i = a;
          ((a = a.replace(/\/\/+/g, '/')),
            Be(
              !1,
              `Pathnames cannot have embedded double slashes - normalizing ${i} -> ${a}`
            ));
        }
        a.startsWith('/') ? (r = Ey(a.substring(1), '/')) : (r = Ey(a, t));
      }
    else r = t;
    return { pathname: r, search: Cb(l), hash: Mb(n) };
  }
  function Ey(e, t) {
    let a = t.replace(/\/+$/, '').split('/');
    return (
      e.split('/').forEach((n) => {
        n === '..' ? a.length > 1 && a.pop() : n !== '.' && a.push(n);
      }),
      a.length > 1 ? a.join('/') : '/'
    );
  }
  function Xc(e, t, a, l) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Db(e) {
    return e.filter(
      (t, a) => a === 0 || (t.route.path && t.route.path.length > 0)
    );
  }
  function $c(e) {
    let t = Db(e);
    return t.map((a, l) => (l === t.length - 1 ? a.pathname : a.pathnameBase));
  }
  function Pc(e, t, a, l = !1) {
    let n;
    typeof e == 'string'
      ? (n = Ka(e))
      : ((n = { ...e }),
        W(
          !n.pathname || !n.pathname.includes('?'),
          Xc('?', 'pathname', 'search', n)
        ),
        W(
          !n.pathname || !n.pathname.includes('#'),
          Xc('#', 'pathname', 'hash', n)
        ),
        W(!n.search || !n.search.includes('#'), Xc('#', 'search', 'hash', n)));
    let r = e === '' || n.pathname === '',
      i = r ? '/' : n.pathname,
      u;
    if (i == null) u = a;
    else {
      let m = t.length - 1;
      if (!l && i.startsWith('..')) {
        let h = i.split('/');
        for (; h[0] === '..'; ) (h.shift(), (m -= 1));
        n.pathname = h.join('/');
      }
      u = m >= 0 ? t[m] : '/';
    }
    let o = Ny(n, u),
      c = i && i !== '/' && i.endsWith('/'),
      d = (r || i === '.') && a.endsWith('/');
    return (!o.pathname.endsWith('/') && (c || d) && (o.pathname += '/'), o);
  }
  function Dy(e) {
    return (
      e != null &&
      typeof e.status == 'number' &&
      typeof e.statusText == 'string' &&
      typeof e.internal == 'boolean' &&
      'data' in e
    );
  }
  function My(e, { relative: t } = {}) {
    W(
      Fa(),
      'useHref() may be used only in the context of a <Router> component.'
    );
    let { basename: a, navigator: l } = T.useContext(Ye),
      { hash: n, pathname: r, search: i } = Kl(e, { relative: t }),
      u = r;
    return (
      a !== '/' && (u = r === '/' ? a : Jt([a, r])),
      l.createHref({ pathname: u, search: i, hash: n })
    );
  }
  function Fa() {
    return T.useContext(Zl) != null;
  }
  function ht() {
    return (
      W(
        Fa(),
        'useLocation() may be used only in the context of a <Router> component.'
      ),
      T.useContext(Zl).location
    );
  }
  function _y(e) {
    T.useContext(Ye).static || T.useLayoutEffect(e);
  }
  function es() {
    let { isDataRoute: e } = T.useContext(ot);
    return e ? Vb() : Lb();
  }
  function Lb() {
    W(
      Fa(),
      'useNavigate() may be used only in the context of a <Router> component.'
    );
    let e = T.useContext(Ja),
      { basename: t, navigator: a } = T.useContext(Ye),
      { matches: l } = T.useContext(ot),
      { pathname: n } = ht(),
      r = JSON.stringify($c(l)),
      i = T.useRef(!1);
    return (
      _y(() => {
        i.current = !0;
      }),
      T.useCallback(
        (o, c = {}) => {
          if ((Be(i.current, zy), !i.current)) return;
          if (typeof o == 'number') {
            a.go(o);
            return;
          }
          let d = Pc(o, JSON.parse(r), n, c.relative === 'path');
          (e == null &&
            t !== '/' &&
            (d.pathname = d.pathname === '/' ? t : Jt([t, d.pathname])),
            (c.replace ? a.replace : a.push)(d, c.state, c));
        },
        [t, a, r, n, e]
      )
    );
  }
  function Ly(e) {
    let t = T.useContext(ot).outlet;
    return T.useMemo(
      () => t && T.createElement(Ub.Provider, { value: e }, t),
      [t, e]
    );
  }
  function Kl(e, { relative: t } = {}) {
    let { matches: a } = T.useContext(ot),
      { pathname: l } = ht(),
      n = JSON.stringify($c(a));
    return T.useMemo(() => Pc(e, JSON.parse(n), l, t === 'path'), [e, n, l, t]);
  }
  function Uy(e, t) {
    return Hy(e, t);
  }
  function Hy(e, t, a, l, n) {
    W(
      Fa(),
      'useRoutes() may be used only in the context of a <Router> component.'
    );
    let { navigator: r } = T.useContext(Ye),
      { matches: i } = T.useContext(ot),
      u = i[i.length - 1],
      o = u ? u.params : {},
      c = u ? u.pathname : '/',
      d = u ? u.pathnameBase : '/',
      m = u && u.route;
    if (Zc) {
      let s = (m && m.path) || '';
      Yy(
        c,
        !m || s.endsWith('*') || s.endsWith('*?'),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${s}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${s}"> to <Route path="${s === '/' ? '*' : `${s}/*`}">.`
      );
    }
    let h = ht(),
      v;
    if (t) {
      let s = typeof t == 'string' ? Ka(t) : t;
      (W(
        d === '/' || s.pathname?.startsWith(d),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${s.pathname}" was given in the \`location\` prop.`
      ),
        (v = s));
    } else v = h;
    let b = v.pathname || '/',
      S = b;
    if (d !== '/') {
      let s = d.replace(/^\//, '').split('/');
      S = '/' + b.replace(/^\//, '').split('/').slice(s.length).join('/');
    }
    let E = Fc(e, { pathname: S });
    Zc &&
      (Be(
        m || E != null,
        `No routes matched location "${v.pathname}${v.search}${v.hash}" `
      ),
      Be(
        E == null ||
          E[E.length - 1].route.element !== void 0 ||
          E[E.length - 1].route.Component !== void 0 ||
          E[E.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      ));
    let f = kb(
      E &&
        E.map((s) =>
          Object.assign({}, s, {
            params: Object.assign({}, o, s.params),
            pathname: Jt([
              d,
              r.encodeLocation
                ? r.encodeLocation(
                    s.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')
                  ).pathname
                : s.pathname,
            ]),
            pathnameBase:
              s.pathnameBase === '/'
                ? d
                : Jt([
                    d,
                    r.encodeLocation
                      ? r.encodeLocation(
                          s.pathnameBase
                            .replace(/\?/g, '%3F')
                            .replace(/#/g, '%23')
                        ).pathname
                      : s.pathnameBase,
                  ]),
          })
        ),
      i,
      a,
      l,
      n
    );
    return t && f
      ? T.createElement(
          Zl.Provider,
          {
            value: {
              location: {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
                ...v,
              },
              navigationType: 'POP',
            },
          },
          f
        )
      : f;
  }
  function Hb() {
    let e = By(),
      t = Dy(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      a = e instanceof Error ? e.stack : null,
      l = 'rgba(200,200,200, 0.5)',
      n = { padding: '0.5rem', backgroundColor: l },
      r = { padding: '2px 4px', backgroundColor: l },
      i = null;
    return (
      Zc &&
        (console.error(
          'Error handled by React Router default ErrorBoundary:',
          e
        ),
        (i = T.createElement(
          T.Fragment,
          null,
          T.createElement('p', null, '\u{1F4BF} Hey developer \u{1F44B}'),
          T.createElement(
            'p',
            null,
            'You can provide a way better UX than this when your app throws errors by providing your own ',
            T.createElement('code', { style: r }, 'ErrorBoundary'),
            ' or',
            ' ',
            T.createElement('code', { style: r }, 'errorElement'),
            ' prop on your route.'
          )
        ))),
      T.createElement(
        T.Fragment,
        null,
        T.createElement('h2', null, 'Unexpected Application Error!'),
        T.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        a ? T.createElement('pre', { style: n }, a) : null,
        i
      )
    );
  }
  function Yb({ routeContext: e, match: t, children: a }) {
    let l = T.useContext(Ja);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (t.route.errorElement || t.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = t.route.id),
      T.createElement(ot.Provider, { value: e }, a)
    );
  }
  function kb(e, t = [], a = null, l = null, n = null) {
    if (e == null) {
      if (!a) return null;
      if (a.errors) e = a.matches;
      else if (t.length === 0 && !a.initialized && a.matches.length > 0)
        e = a.matches;
      else return null;
    }
    let r = e,
      i = a?.errors;
    if (i != null) {
      let d = r.findIndex((m) => m.route.id && i?.[m.route.id] !== void 0);
      (W(
        d >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
      ),
        (r = r.slice(0, Math.min(r.length, d + 1))));
    }
    let u = !1,
      o = -1;
    if (a)
      for (let d = 0; d < r.length; d++) {
        let m = r[d];
        if (
          ((m.route.HydrateFallback || m.route.hydrateFallbackElement) &&
            (o = d),
          m.route.id)
        ) {
          let { loaderData: h, errors: v } = a,
            b =
              m.route.loader &&
              !h.hasOwnProperty(m.route.id) &&
              (!v || v[m.route.id] === void 0);
          if (m.route.lazy || b) {
            ((u = !0), o >= 0 ? (r = r.slice(0, o + 1)) : (r = [r[0]]));
            break;
          }
        }
      }
    let c =
      a && l
        ? (d, m) => {
            l(d, {
              location: a.location,
              params: a.matches?.[0]?.params ?? {},
              errorInfo: m,
            });
          }
        : void 0;
    return r.reduceRight((d, m, h) => {
      let v,
        b = !1,
        S = null,
        E = null;
      a &&
        ((v = i && m.route.id ? i[m.route.id] : void 0),
        (S = m.route.errorElement || jb),
        u &&
          (o < 0 && h === 0
            ? (Yy(
                'route-fallback',
                !1,
                'No `HydrateFallback` element provided to render during initial hydration'
              ),
              (b = !0),
              (E = null))
            : o === h &&
              ((b = !0), (E = m.route.hydrateFallbackElement || null))));
      let f = t.concat(r.slice(0, h + 1)),
        s = () => {
          let y;
          return (
            v
              ? (y = S)
              : b
                ? (y = E)
                : m.route.Component
                  ? (y = T.createElement(m.route.Component, null))
                  : m.route.element
                    ? (y = m.route.element)
                    : (y = d),
            T.createElement(Yb, {
              match: m,
              routeContext: { outlet: d, matches: f, isDataRoute: a != null },
              children: y,
            })
          );
        };
      return a && (m.route.ErrorBoundary || m.route.errorElement || h === 0)
        ? T.createElement(Bb, {
            location: a.location,
            revalidation: a.revalidation,
            component: S,
            error: v,
            children: s(),
            routeContext: { outlet: null, matches: f, isDataRoute: !0 },
            onError: c,
          })
        : s();
    }, null);
  }
  function ts(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function qb(e) {
    let t = T.useContext(Ja);
    return (W(t, ts(e)), t);
  }
  function as(e) {
    let t = T.useContext(Ql);
    return (W(t, ts(e)), t);
  }
  function Gb(e) {
    let t = T.useContext(ot);
    return (W(t, ts(e)), t);
  }
  function ls(e) {
    let t = Gb(e),
      a = t.matches[t.matches.length - 1];
    return (
      W(
        a.route.id,
        `${e} can only be used on routes that contain a unique "id"`
      ),
      a.route.id
    );
  }
  function Xb() {
    return ls('useRouteId');
  }
  function jy() {
    return as('useNavigation').navigation;
  }
  function ns() {
    let { matches: e, loaderData: t } = as('useMatches');
    return T.useMemo(() => e.map((a) => mb(a, t)), [e, t]);
  }
  function By() {
    let e = T.useContext(Ic),
      t = as('useRouteError'),
      a = ls('useRouteError');
    return e !== void 0 ? e : t.errors?.[a];
  }
  function Vb() {
    let { router: e } = qb('useNavigate'),
      t = ls('useNavigate'),
      a = T.useRef(!1);
    return (
      _y(() => {
        a.current = !0;
      }),
      T.useCallback(
        async (n, r = {}) => {
          (Be(a.current, zy),
            a.current &&
              (typeof n == 'number'
                ? e.navigate(n)
                : await e.navigate(n, { fromRouteId: t, ...r })));
        },
        [e, t]
      )
    );
  }
  function Yy(e, t, a) {
    !t && !Ry[e] && ((Ry[e] = !0), Be(!1, a));
  }
  function Qb({ routes: e, future: t, state: a, unstable_onError: l }) {
    return Hy(e, void 0, a, l, t);
  }
  function rs({ to: e, replace: t, state: a, relative: l }) {
    W(
      Fa(),
      '<Navigate> may be used only in the context of a <Router> component.'
    );
    let { static: n } = $.useContext(Ye);
    Be(
      !n,
      '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
    );
    let { matches: r } = $.useContext(ot),
      { pathname: i } = ht(),
      u = es(),
      o = Pc(e, $c(r), i, l === 'path'),
      c = JSON.stringify(o);
    return (
      $.useEffect(() => {
        u(JSON.parse(c), { replace: t, state: a, relative: l });
      }, [u, c, l, t, a]),
      null
    );
  }
  function is(e) {
    return Ly(e.context);
  }
  function Ft(e) {
    W(
      !1,
      'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
    );
  }
  function us({
    basename: e = '/',
    children: t = null,
    location: a,
    navigationType: l = 'POP',
    navigator: n,
    static: r = !1,
  }) {
    W(
      !Fa(),
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
    let i = e.replace(/^\/*/, '/'),
      u = $.useMemo(
        () => ({ basename: i, navigator: n, static: r, future: {} }),
        [i, n, r]
      );
    typeof a == 'string' && (a = Ka(a));
    let {
        pathname: o = '/',
        search: c = '',
        hash: d = '',
        state: m = null,
        key: h = 'default',
      } = a,
      v = $.useMemo(() => {
        let b = Rt(o, i);
        return b == null
          ? null
          : {
              location: { pathname: b, search: c, hash: d, state: m, key: h },
              navigationType: l,
            };
      }, [i, o, c, d, m, h, l]);
    return (
      Be(
        v != null,
        `<Router basename="${i}"> is not able to match the URL "${o}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
      ),
      v == null
        ? null
        : $.createElement(
            Ye.Provider,
            { value: u },
            $.createElement(Zl.Provider, { children: t, value: v })
          )
    );
  }
  function os({ children: e, location: t }) {
    return Uy(Xi(e), t);
  }
  function Xi(e, t = []) {
    let a = [];
    return (
      $.Children.forEach(e, (l, n) => {
        if (!$.isValidElement(l)) return;
        let r = [...t, n];
        if (l.type === $.Fragment) {
          a.push.apply(a, Xi(l.props.children, r));
          return;
        }
        (W(
          l.type === Ft,
          `[${typeof l.type == 'string' ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        ),
          W(
            !l.props.index || !l.props.children,
            'An index route cannot have child routes.'
          ));
        let i = {
          id: l.props.id || r.join('-'),
          caseSensitive: l.props.caseSensitive,
          element: l.props.element,
          Component: l.props.Component,
          index: l.props.index,
          path: l.props.path,
          middleware: l.props.middleware,
          loader: l.props.loader,
          action: l.props.action,
          hydrateFallbackElement: l.props.hydrateFallbackElement,
          HydrateFallback: l.props.HydrateFallback,
          errorElement: l.props.errorElement,
          ErrorBoundary: l.props.ErrorBoundary,
          hasErrorBoundary:
            l.props.hasErrorBoundary === !0 ||
            l.props.ErrorBoundary != null ||
            l.props.errorElement != null,
          shouldRevalidate: l.props.shouldRevalidate,
          handle: l.props.handle,
          lazy: l.props.lazy,
        };
        (l.props.children && (i.children = Xi(l.props.children, r)), a.push(i));
      }),
      a
    );
  }
  function Vi(e) {
    return e != null && typeof e.tagName == 'string';
  }
  function Zb(e) {
    return Vi(e) && e.tagName.toLowerCase() === 'button';
  }
  function Kb(e) {
    return Vi(e) && e.tagName.toLowerCase() === 'form';
  }
  function Jb(e) {
    return Vi(e) && e.tagName.toLowerCase() === 'input';
  }
  function Fb(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function $b(e, t) {
    return e.button === 0 && (!t || t === '_self') && !Fb(e);
  }
  function Pb() {
    if (Yi === null)
      try {
        (new FormData(document.createElement('form'), 0), (Yi = !1));
      } catch {
        Yi = !0;
      }
    return Yi;
  }
  function Vc(e) {
    return e != null && !Wb.has(e)
      ? (Be(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gi}"`
        ),
        null)
      : e;
  }
  function Ib(e, t) {
    let a, l, n, r, i;
    if (Kb(e)) {
      let u = e.getAttribute('action');
      ((l = u ? Rt(u, t) : null),
        (a = e.getAttribute('method') || qi),
        (n = Vc(e.getAttribute('enctype')) || Gi),
        (r = new FormData(e)));
    } else if (
      Zb(e) ||
      (Jb(e) && (e.type === 'submit' || e.type === 'image'))
    ) {
      let u = e.form;
      if (u == null)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let o = e.getAttribute('formaction') || u.getAttribute('action');
      if (
        ((l = o ? Rt(o, t) : null),
        (a = e.getAttribute('formmethod') || u.getAttribute('method') || qi),
        (n =
          Vc(e.getAttribute('formenctype')) ||
          Vc(u.getAttribute('enctype')) ||
          Gi),
        (r = new FormData(u, e)),
        !Pb())
      ) {
        let { name: c, type: d, value: m } = e;
        if (d === 'image') {
          let h = c ? `${c}.` : '';
          (r.append(`${h}x`, '0'), r.append(`${h}y`, '0'));
        } else c && r.append(c, m);
      }
    } else {
      if (Vi(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      ((a = qi), (l = null), (n = Gi), (i = e));
    }
    return (
      r && n === 'text/plain' && ((i = r), (r = void 0)),
      { action: l, method: a.toLowerCase(), encType: n, formData: r, body: i }
    );
  }
  function ss(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
  }
  function t1(e, t, a) {
    let l =
      typeof e == 'string'
        ? new URL(
            e,
            typeof window > 'u'
              ? 'server://singlefetch/'
              : window.location.origin
          )
        : e;
    return (
      l.pathname === '/'
        ? (l.pathname = `_root.${a}`)
        : t && Rt(l.pathname, t) === '/'
          ? (l.pathname = `${t.replace(/\/$/, '')}/_root.${a}`)
          : (l.pathname = `${l.pathname.replace(/\/$/, '')}.${a}`),
      l
    );
  }
  async function a1(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let a = await import(e.module);
      return ((t[e.id] = a), a);
    } catch (a) {
      if (
        (console.error(
          `Error loading route module \`${e.module}\`, reloading page...`
        ),
        console.error(a),
        window.__reactRouterContext &&
          window.__reactRouterContext.isSpaMode &&
          R1.hot)
      )
        throw a;
      return (window.location.reload(), new Promise(() => {}));
    }
  }
  function l1(e) {
    return e != null && typeof e.page == 'string';
  }
  function n1(e) {
    return e == null
      ? !1
      : e.href == null
        ? e.rel === 'preload' &&
          typeof e.imageSrcSet == 'string' &&
          typeof e.imageSizes == 'string'
        : typeof e.rel == 'string' && typeof e.href == 'string';
  }
  async function r1(e, t, a) {
    let l = await Promise.all(
      e.map(async (n) => {
        let r = t.routes[n.route.id];
        if (r) {
          let i = await a1(r, a);
          return i.links ? i.links() : [];
        }
        return [];
      })
    );
    return c1(
      l
        .flat(1)
        .filter(n1)
        .filter((n) => n.rel === 'stylesheet' || n.rel === 'preload')
        .map((n) =>
          n.rel === 'stylesheet'
            ? { ...n, rel: 'prefetch', as: 'style' }
            : { ...n, rel: 'prefetch' }
        )
    );
  }
  function wy(e, t, a, l, n, r) {
    let i = (o, c) => (a[c] ? o.route.id !== a[c].route.id : !0),
      u = (o, c) =>
        a[c].pathname !== o.pathname ||
        (a[c].route.path?.endsWith('*') && a[c].params['*'] !== o.params['*']);
    return r === 'assets'
      ? t.filter((o, c) => i(o, c) || u(o, c))
      : r === 'data'
        ? t.filter((o, c) => {
            let d = l.routes[o.route.id];
            if (!d || !d.hasLoader) return !1;
            if (i(o, c) || u(o, c)) return !0;
            if (o.route.shouldRevalidate) {
              let m = o.route.shouldRevalidate({
                currentUrl: new URL(
                  n.pathname + n.search + n.hash,
                  window.origin
                ),
                currentParams: a[0]?.params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: o.params,
                defaultShouldRevalidate: !0,
              });
              if (typeof m == 'boolean') return m;
            }
            return !0;
          })
        : [];
  }
  function i1(e, t, { includeHydrateFallback: a } = {}) {
    return u1(
      e
        .map((l) => {
          let n = t.routes[l.route.id];
          if (!n) return [];
          let r = [n.module];
          return (
            n.clientActionModule && (r = r.concat(n.clientActionModule)),
            n.clientLoaderModule && (r = r.concat(n.clientLoaderModule)),
            a &&
              n.hydrateFallbackModule &&
              (r = r.concat(n.hydrateFallbackModule)),
            n.imports && (r = r.concat(n.imports)),
            r
          );
        })
        .flat(1)
    );
  }
  function u1(e) {
    return [...new Set(e)];
  }
  function o1(e) {
    let t = {},
      a = Object.keys(e).sort();
    for (let l of a) t[l] = e[l];
    return t;
  }
  function c1(e, t) {
    let a = new Set(),
      l = new Set(t);
    return e.reduce((n, r) => {
      if (t && !l1(r) && r.as === 'script' && r.href && l.has(r.href)) return n;
      let u = JSON.stringify(o1(r));
      return (a.has(u) || (a.add(u), n.push({ key: u, link: r })), n);
    }, []);
  }
  function qy() {
    let e = X.useContext(Ja);
    return (
      ss(
        e,
        'You must render this element inside a <DataRouterContext.Provider> element'
      ),
      e
    );
  }
  function m1() {
    let e = X.useContext(Ql);
    return (
      ss(
        e,
        'You must render this element inside a <DataRouterStateContext.Provider> element'
      ),
      e
    );
  }
  function Gy() {
    let e = X.useContext(rr);
    return (
      ss(e, 'You must render this element inside a <HydratedRouter> element'),
      e
    );
  }
  function h1(e, t) {
    let a = X.useContext(rr),
      [l, n] = X.useState(!1),
      [r, i] = X.useState(!1),
      {
        onFocus: u,
        onBlur: o,
        onMouseEnter: c,
        onMouseLeave: d,
        onTouchStart: m,
      } = t,
      h = X.useRef(null);
    (X.useEffect(() => {
      if ((e === 'render' && i(!0), e === 'viewport')) {
        let S = (f) => {
            f.forEach((s) => {
              i(s.isIntersecting);
            });
          },
          E = new IntersectionObserver(S, { threshold: 0.5 });
        return (
          h.current && E.observe(h.current),
          () => {
            E.disconnect();
          }
        );
      }
    }, [e]),
      X.useEffect(() => {
        if (l) {
          let S = setTimeout(() => {
            i(!0);
          }, 100);
          return () => {
            clearTimeout(S);
          };
        }
      }, [l]));
    let v = () => {
        n(!0);
      },
      b = () => {
        (n(!1), i(!1));
      };
    return a
      ? e !== 'intent'
        ? [r, h, {}]
        : [
            r,
            h,
            {
              onFocus: lr(u, v),
              onBlur: lr(o, b),
              onMouseEnter: lr(c, v),
              onMouseLeave: lr(d, b),
              onTouchStart: lr(m, v),
            },
          ]
      : [!1, h, {}];
  }
  function lr(e, t) {
    return (a) => {
      (e && e(a), a.defaultPrevented || t(a));
    };
  }
  function Xy({ page: e, ...t }) {
    let { router: a } = qy(),
      l = X.useMemo(
        () => Fc(a.routes, e, a.basename),
        [a.routes, e, a.basename]
      );
    return l ? X.createElement(v1, { page: e, matches: l, ...t }) : null;
  }
  function y1(e) {
    let { manifest: t, routeModules: a } = Gy(),
      [l, n] = X.useState([]);
    return (
      X.useEffect(() => {
        let r = !1;
        return (
          r1(e, t, a).then((i) => {
            r || n(i);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, a]),
      l
    );
  }
  function v1({ page: e, matches: t, ...a }) {
    let l = ht(),
      { manifest: n, routeModules: r } = Gy(),
      { basename: i } = qy(),
      { loaderData: u, matches: o } = m1(),
      c = X.useMemo(() => wy(e, t, o, n, l, 'data'), [e, t, o, n, l]),
      d = X.useMemo(() => wy(e, t, o, n, l, 'assets'), [e, t, o, n, l]),
      m = X.useMemo(() => {
        if (e === l.pathname + l.search + l.hash) return [];
        let b = new Set(),
          S = !1;
        if (
          (t.forEach((f) => {
            let s = n.routes[f.route.id];
            !s ||
              !s.hasLoader ||
              ((!c.some((y) => y.route.id === f.route.id) &&
                f.route.id in u &&
                r[f.route.id]?.shouldRevalidate) ||
              s.hasClientLoader
                ? (S = !0)
                : b.add(f.route.id));
          }),
          b.size === 0)
        )
          return [];
        let E = t1(e, i, 'data');
        return (
          S &&
            b.size > 0 &&
            E.searchParams.set(
              '_routes',
              t
                .filter((f) => b.has(f.route.id))
                .map((f) => f.route.id)
                .join(',')
            ),
          [E.pathname + E.search]
        );
      }, [i, u, l, n, c, t, e, r]),
      h = X.useMemo(() => i1(d, n), [d, n]),
      v = y1(d);
    return X.createElement(
      X.Fragment,
      null,
      m.map((b) =>
        X.createElement('link', {
          key: b,
          rel: 'prefetch',
          as: 'fetch',
          href: b,
          ...a,
        })
      ),
      h.map((b) =>
        X.createElement('link', { key: b, rel: 'modulepreload', href: b, ...a })
      ),
      v.map(({ key: b, link: S }) =>
        X.createElement('link', { key: b, nonce: a.nonce, ...S })
      )
    );
  }
  function p1(...e) {
    return (t) => {
      e.forEach((a) => {
        typeof a == 'function' ? a(t) : a != null && (a.current = t);
      });
    };
  }
  function fs({ basename: e, children: t, window: a }) {
    let l = A.useRef();
    l.current == null && (l.current = xy({ window: a, v5Compat: !0 }));
    let n = l.current,
      [r, i] = A.useState({ action: n.action, location: n.location }),
      u = A.useCallback(
        (o) => {
          A.startTransition(() => i(o));
        },
        [i]
      );
    return (
      A.useLayoutEffect(() => n.listen(u), [n, u]),
      A.createElement(us, {
        basename: e,
        children: t,
        location: r.location,
        navigationType: r.action,
        navigator: n,
      })
    );
  }
  function Qy({ basename: e, children: t, history: a }) {
    let [l, n] = A.useState({ action: a.action, location: a.location }),
      r = A.useCallback(
        (i) => {
          A.startTransition(() => n(i));
        },
        [n]
      );
    return (
      A.useLayoutEffect(() => a.listen(r), [a, r]),
      A.createElement(us, {
        basename: e,
        children: t,
        location: l.location,
        navigationType: l.action,
        navigator: a,
      })
    );
  }
  function Jy({ getKey: e, storageKey: t, ...a }) {
    let l = A.useContext(rr),
      { basename: n } = A.useContext(Ye),
      r = ht(),
      i = ns();
    Iy({ getKey: e, storageKey: t });
    let u = A.useMemo(() => {
      if (!l || !e) return null;
      let c = Jc(r, i, n, e);
      return c !== r.key ? c : null;
    }, []);
    if (!l || l.isSpaMode) return null;
    let o = ((c, d) => {
      if (!window.history.state || !window.history.state.key) {
        let m = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: m }, '');
      }
      try {
        let h = JSON.parse(sessionStorage.getItem(c) || '{}')[
          d || window.history.state.key
        ];
        typeof h == 'number' && window.scrollTo(0, h);
      } catch (m) {
        (console.error(m), sessionStorage.removeItem(c));
      }
    }).toString();
    return A.createElement('script', {
      ...a,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${o})(${JSON.stringify(t || Kc)}, ${JSON.stringify(u)})`,
      },
    });
  }
  function Fy(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function ds(e) {
    let t = A.useContext(Ja);
    return (W(t, Fy(e)), t);
  }
  function g1(e) {
    let t = A.useContext(Ql);
    return (W(t, Fy(e)), t);
  }
  function $y(
    e,
    {
      target: t,
      replace: a,
      state: l,
      preventScrollReset: n,
      relative: r,
      viewTransition: i,
    } = {}
  ) {
    let u = es(),
      o = ht(),
      c = Kl(e, { relative: r });
    return A.useCallback(
      (d) => {
        if ($b(d, t)) {
          d.preventDefault();
          let m = a !== void 0 ? a : Vl(o) === Vl(c);
          u(e, {
            replace: m,
            state: l,
            preventScrollReset: n,
            relative: r,
            viewTransition: i,
          });
        }
      },
      [o, u, c, a, l, t, e, n, r, i]
    );
  }
  function Py() {
    let { router: e } = ds('useSubmit'),
      { basename: t } = A.useContext(Ye),
      a = Xb();
    return A.useCallback(
      async (l, n = {}) => {
        let {
          action: r,
          method: i,
          encType: u,
          formData: o,
          body: c,
        } = Ib(l, t);
        if (n.navigate === !1) {
          let d = n.fetcherKey || S1();
          await e.fetch(d, a, n.action || r, {
            preventScrollReset: n.preventScrollReset,
            formData: o,
            body: c,
            formMethod: n.method || i,
            formEncType: n.encType || u,
            flushSync: n.flushSync,
          });
        } else
          await e.navigate(n.action || r, {
            preventScrollReset: n.preventScrollReset,
            formData: o,
            body: c,
            formMethod: n.method || i,
            formEncType: n.encType || u,
            replace: n.replace,
            state: n.state,
            fromRouteId: a,
            flushSync: n.flushSync,
            viewTransition: n.viewTransition,
          });
      },
      [e, t, a]
    );
  }
  function Wy(e, { relative: t } = {}) {
    let { basename: a } = A.useContext(Ye),
      l = A.useContext(ot);
    W(l, 'useFormAction must be used inside a RouteContext');
    let [n] = l.matches.slice(-1),
      r = { ...Kl(e || '.', { relative: t }) },
      i = ht();
    if (e == null) {
      r.search = i.search;
      let u = new URLSearchParams(r.search),
        o = u.getAll('index');
      if (o.some((d) => d === '')) {
        (u.delete('index'),
          o.filter((m) => m).forEach((m) => u.append('index', m)));
        let d = u.toString();
        r.search = d ? `?${d}` : '';
      }
    }
    return (
      (!e || e === '.') &&
        n.route.index &&
        (r.search = r.search ? r.search.replace(/^\?/, '?index&') : '?index'),
      a !== '/' && (r.pathname = r.pathname === '/' ? a : Jt([a, r.pathname])),
      Vl(r)
    );
  }
  function Jc(e, t, a, l) {
    let n = null;
    return (
      l &&
        (a !== '/'
          ? (n = l({ ...e, pathname: Rt(e.pathname, a) || e.pathname }, t))
          : (n = l(e, t))),
      n == null && (n = e.key),
      n
    );
  }
  function Iy({ getKey: e, storageKey: t } = {}) {
    let { router: a } = ds('useScrollRestoration'),
      { restoreScrollPosition: l, preventScrollReset: n } = g1(
        'useScrollRestoration'
      ),
      { basename: r } = A.useContext(Ye),
      i = ht(),
      u = ns(),
      o = jy();
    (A.useEffect(
      () => (
        (window.history.scrollRestoration = 'manual'),
        () => {
          window.history.scrollRestoration = 'auto';
        }
      ),
      []
    ),
      E1(
        A.useCallback(() => {
          if (o.state === 'idle') {
            let c = Jc(i, u, r, e);
            ki[c] = window.scrollY;
          }
          try {
            sessionStorage.setItem(t || Kc, JSON.stringify(ki));
          } catch (c) {
            Be(
              !1,
              `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${c}).`
            );
          }
          window.history.scrollRestoration = 'auto';
        }, [o.state, e, r, i, u, t])
      ),
      typeof document < 'u' &&
        (A.useLayoutEffect(() => {
          try {
            let c = sessionStorage.getItem(t || Kc);
            c && (ki = JSON.parse(c));
          } catch {}
        }, [t]),
        A.useLayoutEffect(() => {
          let c = a?.enableScrollRestoration(
            ki,
            () => window.scrollY,
            e ? (d, m) => Jc(d, m, r, e) : void 0
          );
          return () => c && c();
        }, [a, r, e]),
        A.useLayoutEffect(() => {
          if (l !== !1) {
            if (typeof l == 'number') {
              window.scrollTo(0, l);
              return;
            }
            try {
              if (i.hash) {
                let c = document.getElementById(
                  decodeURIComponent(i.hash.slice(1))
                );
                if (c) {
                  c.scrollIntoView();
                  return;
                }
              }
            } catch {
              Be(
                !1,
                `"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`
              );
            }
            n !== !0 && window.scrollTo(0, 0);
          }
        }, [i, l, n])));
  }
  function E1(e, t) {
    let { capture: a } = t || {};
    A.useEffect(() => {
      let l = a != null ? { capture: a } : void 0;
      return (
        window.addEventListener('pagehide', e, l),
        () => {
          window.removeEventListener('pagehide', e, l);
        }
      );
    }, [e, a]);
  }
  function e0(e, { relative: t } = {}) {
    let a = A.useContext(Wc);
    W(
      a != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: l } = ds('useViewTransitionState'),
      n = Kl(e, { relative: t });
    if (!a.isTransitioning) return !1;
    let r = Rt(a.currentLocation.pathname, l) || a.currentLocation.pathname,
      i = Rt(a.nextLocation.pathname, l) || a.nextLocation.pathname;
    return nr(n.pathname, i) != null || nr(n.pathname, r) != null;
  }
  var $e,
    T,
    $,
    cs,
    ky,
    X,
    s1,
    f1,
    d1,
    A,
    t0,
    R1,
    gy,
    fb,
    yb,
    vb,
    pb,
    gb,
    bb,
    Sb,
    Sy,
    Ab,
    Nb,
    Jt,
    Ob,
    Cb,
    Mb,
    lS,
    nS,
    Oy,
    rS,
    zb,
    iS,
    uS,
    Ja,
    Ql,
    oS,
    Wc,
    Cy,
    _b,
    Ye,
    Zl,
    ot,
    Ic,
    Zc,
    zy,
    Ub,
    jb,
    Bb,
    Ry,
    cS,
    qi,
    Gi,
    Yi,
    Wb,
    sS,
    e1,
    rr,
    Vy,
    Zy,
    Ta,
    Qi,
    Ky,
    b1,
    S1,
    Kc,
    ki,
    a0 = C(() => {
      (($e = V(k(), 1)),
        (T = V(k(), 1)),
        ($ = V(k(), 1)),
        (cs = V(k(), 1)),
        (ky = V(k(), 1)),
        (X = V(k(), 1)),
        (s1 = V(k(), 1)),
        (f1 = V(k(), 1)),
        (d1 = V(k(), 1)),
        (A = V(k(), 1)),
        (t0 = V(k(), 1)),
        (R1 = {}));
      gy = 'popstate';
      fb = new WeakMap();
      ((yb = /^:[\w-]+$/),
        (vb = 3),
        (pb = 2),
        (gb = 1),
        (bb = 10),
        (Sb = -2),
        (Sy = (e) => e === '*'));
      ((Ab = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i), (Nb = (e) => Ab.test(e)));
      ((Jt = (e) => e.join('/').replace(/\/\/+/g, '/')),
        (Ob = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/')),
        (Cb = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e)),
        (Mb = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)));
      ((lS = Symbol('Uninstrumented')),
        (nS = Object.getOwnPropertyNames(Object.prototype).sort().join('\0')),
        (Oy = ['POST', 'PUT', 'PATCH', 'DELETE']),
        (rS = new Set(Oy)),
        (zb = ['GET', ...Oy]),
        (iS = new Set(zb)),
        (uS = Symbol('ResetLoaderData')),
        (Ja = $e.createContext(null)));
      Ja.displayName = 'DataRouter';
      Ql = $e.createContext(null);
      Ql.displayName = 'DataRouterState';
      ((oS = $e.createContext(!1)),
        (Wc = $e.createContext({ isTransitioning: !1 })));
      Wc.displayName = 'ViewTransition';
      Cy = $e.createContext(new Map());
      Cy.displayName = 'Fetchers';
      _b = $e.createContext(null);
      _b.displayName = 'Await';
      Ye = $e.createContext(null);
      Ye.displayName = 'Navigation';
      Zl = $e.createContext(null);
      Zl.displayName = 'Location';
      ot = $e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      ot.displayName = 'Route';
      Ic = $e.createContext(null);
      Ic.displayName = 'RouteError';
      Zc = !0;
      zy =
        'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
      Ub = T.createContext(null);
      ((jb = T.createElement(Hb, null)),
        (Bb = class extends T.Component {
          constructor(e) {
            (super(e),
              (this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }));
          }
          static getDerivedStateFromError(e) {
            return { error: e };
          }
          static getDerivedStateFromProps(e, t) {
            return t.location !== e.location ||
              (t.revalidation !== 'idle' && e.revalidation === 'idle')
              ? {
                  error: e.error,
                  location: e.location,
                  revalidation: e.revalidation,
                }
              : {
                  error: e.error !== void 0 ? e.error : t.error,
                  location: t.location,
                  revalidation: e.revalidation || t.revalidation,
                };
          }
          componentDidCatch(e, t) {
            this.props.onError
              ? this.props.onError(e, t)
              : console.error(
                  'React Router caught the following error during render',
                  e
                );
          }
          render() {
            return this.state.error !== void 0
              ? T.createElement(
                  ot.Provider,
                  { value: this.props.routeContext },
                  T.createElement(Ic.Provider, {
                    value: this.state.error,
                    children: this.props.component,
                  })
                )
              : this.props.children;
          }
        }));
      Ry = {};
      cS = $.memo(Qb);
      ((qi = 'get'), (Gi = 'application/x-www-form-urlencoded'));
      Yi = null;
      Wb = new Set([
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ]);
      sS = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
      e1 = Symbol('SingleFetchRedirect');
      rr = X.createContext(void 0);
      rr.displayName = 'FrameworkContext';
      Vy =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u';
      try {
        Vy && (window.__reactRouterVersion = '7.9.6');
      } catch {}
      Qy.displayName = 'unstable_HistoryRouter';
      ((Zy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
        (Ta = A.forwardRef(function (
          {
            onClick: t,
            discover: a = 'render',
            prefetch: l = 'none',
            relative: n,
            reloadDocument: r,
            replace: i,
            state: u,
            target: o,
            to: c,
            preventScrollReset: d,
            viewTransition: m,
            ...h
          },
          v
        ) {
          let { basename: b } = A.useContext(Ye),
            S = typeof c == 'string' && Zy.test(c),
            E,
            f = !1;
          if (typeof c == 'string' && S && ((E = c), Vy))
            try {
              let N = new URL(window.location.href),
                L = c.startsWith('//') ? new URL(N.protocol + c) : new URL(c),
                st = Rt(L.pathname, b);
              L.origin === N.origin && st != null
                ? (c = st + L.search + L.hash)
                : (f = !0);
            } catch {
              Be(
                !1,
                `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
              );
            }
          let s = My(c, { relative: n }),
            [y, p, w] = h1(l, h),
            _ = $y(c, {
              replace: i,
              state: u,
              target: o,
              preventScrollReset: d,
              relative: n,
              viewTransition: m,
            });
          function x(N) {
            (t && t(N), N.defaultPrevented || _(N));
          }
          let O = A.createElement('a', {
            ...h,
            ...w,
            href: E || s,
            onClick: f || r ? t : x,
            ref: p1(v, p),
            target: o,
            'data-discover': !S && a === 'render' ? 'true' : void 0,
          });
          return y && !S
            ? A.createElement(
                A.Fragment,
                null,
                O,
                A.createElement(Xy, { page: s })
              )
            : O;
        })));
      Ta.displayName = 'Link';
      Qi = A.forwardRef(function (
        {
          'aria-current': t = 'page',
          caseSensitive: a = !1,
          className: l = '',
          end: n = !1,
          style: r,
          to: i,
          viewTransition: u,
          children: o,
          ...c
        },
        d
      ) {
        let m = Kl(i, { relative: c.relative }),
          h = ht(),
          v = A.useContext(Ql),
          { navigator: b, basename: S } = A.useContext(Ye),
          E = v != null && e0(m) && u === !0,
          f = b.encodeLocation ? b.encodeLocation(m).pathname : m.pathname,
          s = h.pathname,
          y =
            v && v.navigation && v.navigation.location
              ? v.navigation.location.pathname
              : null;
        (a ||
          ((s = s.toLowerCase()),
          (y = y ? y.toLowerCase() : null),
          (f = f.toLowerCase())),
          y && S && (y = Rt(y, S) || y));
        let p = f !== '/' && f.endsWith('/') ? f.length - 1 : f.length,
          w = s === f || (!n && s.startsWith(f) && s.charAt(p) === '/'),
          _ =
            y != null &&
            (y === f || (!n && y.startsWith(f) && y.charAt(f.length) === '/')),
          x = { isActive: w, isPending: _, isTransitioning: E },
          O = w ? t : void 0,
          N;
        typeof l == 'function'
          ? (N = l(x))
          : (N = [
              l,
              w ? 'active' : null,
              _ ? 'pending' : null,
              E ? 'transitioning' : null,
            ]
              .filter(Boolean)
              .join(' '));
        let L = typeof r == 'function' ? r(x) : r;
        return A.createElement(
          Ta,
          {
            ...c,
            'aria-current': O,
            className: N,
            ref: d,
            style: L,
            to: i,
            viewTransition: u,
          },
          typeof o == 'function' ? o(x) : o
        );
      });
      Qi.displayName = 'NavLink';
      Ky = A.forwardRef(
        (
          {
            discover: e = 'render',
            fetcherKey: t,
            navigate: a,
            reloadDocument: l,
            replace: n,
            state: r,
            method: i = qi,
            action: u,
            onSubmit: o,
            relative: c,
            preventScrollReset: d,
            viewTransition: m,
            ...h
          },
          v
        ) => {
          let b = Py(),
            S = Wy(u, { relative: c }),
            E = i.toLowerCase() === 'get' ? 'get' : 'post',
            f = typeof u == 'string' && Zy.test(u);
          return A.createElement('form', {
            ref: v,
            method: E,
            action: S,
            onSubmit: l
              ? o
              : (y) => {
                  if ((o && o(y), y.defaultPrevented)) return;
                  y.preventDefault();
                  let p = y.nativeEvent.submitter,
                    w = p?.getAttribute('formmethod') || i;
                  b(p || y.currentTarget, {
                    fetcherKey: t,
                    method: w,
                    navigate: a,
                    replace: n,
                    state: r,
                    relative: c,
                    preventScrollReset: d,
                    viewTransition: m,
                  });
                },
            ...h,
            'data-discover': !f && e === 'render' ? 'true' : void 0,
          });
        }
      );
      Ky.displayName = 'Form';
      Jy.displayName = 'ScrollRestoration';
      ((b1 = 0), (S1 = () => `__${String(++b1)}__`));
      ((Kc = 'react-router-scroll-positions'), (ki = {}));
    });
  var l0 = C(() => {
    'use client';
    a0();
  });
  var Jl = C(() => {
    l0();
  });
  var wt,
    n0,
    Aa,
    r0,
    ir = C(() => {
      ((wt = V(k())),
        (n0 = (0, wt.createContext)()),
        (Aa = () => {
          let e = (0, wt.useContext)(n0);
          if (!e)
            throw new Error(
              'useLanguage must be used within a LanguageProvider'
            );
          return e;
        }),
        (r0 = ({ children: e, content: t }) => {
          let [a, l] = (0, wt.useState)('zh');
          (0, wt.useEffect)(() => {
            try {
              let u = localStorage.getItem('language');
              if (u) {
                l(u);
                return;
              }
              let o = navigator.language || navigator.userLanguage;
              o && o.toLowerCase().startsWith('en') ? l('en') : l('zh');
            } catch (u) {
              (console.warn('Failed to access localStorage or navigator:', u),
                l('zh'));
            }
          }, []);
          let n = t ? t[a] : null,
            i = {
              language: a,
              setLanguage: l,
              toggleLanguage: () => {
                l((u) => {
                  let o = u === 'zh' ? 'en' : 'zh';
                  try {
                    localStorage.setItem('language', o);
                  } catch (c) {
                    console.warn('Failed to save language to localStorage:', c);
                  }
                  return o;
                });
              },
              content: n,
            };
          return wt.default.createElement(n0.Provider, { value: i }, e);
        }));
    });
  var $t,
    w1,
    i0,
    u0 = C(() => {
      $t = V(k());
      Jl();
      ir();
      ((w1 = () => {
        let { content: e } = Aa(),
          t = e?.nav || [];
        return $t.default.createElement(
          'nav',
          {
            className:
              'flex flex-wrap items-center gap-8 text-base font-medium text-gray-600 dark:text-gray-300',
          },
          t.map((a, l) =>
            $t.default.createElement(
              $t.default.Fragment,
              { key: a.href },
              l > 0 &&
                $t.default.createElement(
                  'span',
                  { className: 'text-gray-300 dark:text-gray-600 select-none' },
                  '/'
                ),
              $t.default.createElement(
                Qi,
                {
                  to: a.href,
                  className: ({ isActive: n }) =>
                    `relative group transition-colors py-1 ${n ? 'text-black dark:text-white font-bold' : 'hover:text-black dark:hover:text-white'}`,
                },
                ({ isActive: n }) =>
                  $t.default.createElement(
                    $t.default.Fragment,
                    null,
                    a.label,
                    $t.default.createElement('span', {
                      className: `absolute bottom-0 left-0 h-[2px] bg-black dark:bg-white transition-all duration-300 ease-out ${n ? 'w-full' : 'w-0 group-hover:w-full'}`,
                    })
                  )
              )
            )
          )
        );
      }),
        (i0 = w1));
    });
  var o0,
    x1,
    c0,
    s0 = C(() => {
      o0 = V(k());
      ir();
      ((x1 = () => {
        let { language: e, toggleLanguage: t } = Aa();
        return o0.default.createElement(
          'button',
          {
            onClick: t,
            className:
              'ml-4 px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-full transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-gray-500',
            'aria-label': 'Switch Language',
          },
          e === 'zh' ? 'EN' : '\u4E2D'
        );
      }),
        (c0 = x1));
    });
  var xt,
    f0,
    d0,
    m0,
    ms = C(() => {
      ((xt = V(k())),
        (f0 = (0, xt.createContext)()),
        (d0 = ({ children: e }) => {
          console.log('ThemeProvider rendering');
          let [t, a] = (0, xt.useState)('light');
          (0, xt.useEffect)(() => {
            try {
              let n = localStorage.getItem('theme');
              n
                ? (a(n),
                  n === 'dark'
                    ? document.documentElement.classList.add('dark')
                    : document.documentElement.classList.remove('dark'))
                : window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? (a('dark'), document.documentElement.classList.add('dark'))
                  : (a('light'),
                    document.documentElement.classList.remove('dark'));
            } catch (n) {
              (console.warn('Failed to access localStorage or matchMedia:', n),
                a('light'),
                document.documentElement.classList.remove('dark'));
            }
          }, []);
          let l = () => {
            let n = t === 'light' ? 'dark' : 'light';
            a(n);
            try {
              localStorage.setItem('theme', n);
            } catch (r) {
              console.warn('Failed to save theme to localStorage:', r);
            }
            n === 'dark'
              ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark');
          };
          return xt.default.createElement(
            f0.Provider,
            { value: { theme: t, toggleTheme: l } },
            e
          );
        }),
        (m0 = () => {
          let e = (0, xt.useContext)(f0);
          if (e === void 0)
            throw (
              console.error('useTheme must be used within a ThemeProvider'),
              new Error('useTheme must be used within a ThemeProvider')
            );
          return e;
        }));
    });
  var Fl,
    T1,
    h0,
    y0 = C(() => {
      Fl = V(k());
      ms();
      ((T1 = () => {
        let { theme: e, toggleTheme: t } = m0();
        return Fl.default.createElement(
          'button',
          {
            onClick: t,
            className:
              'p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none',
            'aria-label': 'Toggle Dark Mode',
          },
          e === 'light'
            ? Fl.default.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-5 w-5 text-gray-600 dark:text-gray-300',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  stroke: 'currentColor',
                },
                Fl.default.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
                })
              )
            : Fl.default.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-5 w-5 text-yellow-400',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  stroke: 'currentColor',
                },
                Fl.default.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
                })
              )
        );
      }),
        (h0 = T1));
    });
  var Tt,
    A1,
    v0,
    p0 = C(() => {
      Tt = V(k());
      u0();
      s0();
      y0();
      ((A1 = ({ header: e }) =>
        Tt.default.createElement(
          'header',
          {
            className:
              'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 sm:mb-16 md:mb-20 animate-fade-in',
          },
          Tt.default.createElement(
            'div',
            { className: 'flex items-center' },
            Tt.default.createElement('img', {
              src: e.avatar,
              alt: e.name,
              className:
                'w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 shadow-sm',
              loading: 'lazy',
            }),
            Tt.default.createElement(
              'span',
              {
                className:
                  'font-medium text-gray-900 dark:text-white text-lg tracking-tight',
              },
              e.name
            )
          ),
          Tt.default.createElement(
            'div',
            { className: 'flex items-center gap-4 sm:gap-8' },
            Tt.default.createElement(i0, null),
            Tt.default.createElement(
              'div',
              { className: 'flex items-center gap-2' },
              Tt.default.createElement(h0, null),
              Tt.default.createElement(c0, null)
            )
          )
        )),
        (v0 = A1));
    });
  var Zi,
    N1,
    g0,
    b0 = C(() => {
      ((Zi = V(k())),
        (N1 = ({ link: e }) =>
          Zi.default.createElement(
            'a',
            {
              href: e.url,
              className:
                'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors social-icon text-xl',
              title: e.title || '',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            e.imageUrl
              ? Zi.default.createElement('img', {
                  src: e.imageUrl,
                  alt: e.title || 'social-icon',
                  className: 'w-full h-full object-contain',
                  loading: 'lazy',
                })
              : Zi.default.createElement('i', { className: e.icon })
          )),
        (g0 = N1));
    });
  var At,
    D1,
    S0,
    E0 = C(() => {
      At = V(k());
      Jl();
      p0();
      b0();
      ir();
      ((D1 = () => {
        let { content: e } = Aa(),
          { header: t, footer: a } = e;
        return At.default.createElement(
          'div',
          {
            className:
              'max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 animate-fade-in',
          },
          At.default.createElement(v0, { header: t }),
          At.default.createElement(
            'main',
            null,
            At.default.createElement(is, null)
          ),
          At.default.createElement(
            'footer',
            {
              className:
                'pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-200 dark:border-gray-800',
            },
            At.default.createElement(
              'div',
              {
                className:
                  'flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0',
              },
              At.default.createElement(
                'p',
                {
                  className:
                    'text-gray-600 dark:text-gray-400 text-base sm:text-lg text-center md:text-left',
                },
                a.copyright
              ),
              At.default.createElement(
                'div',
                { className: 'flex space-x-4 sm:space-x-6' },
                a.socialLinks.map((l) =>
                  At.default.createElement(g0, { key: l.url, link: l })
                )
              )
            )
          )
        );
      }),
        (S0 = D1));
    });
  var ur,
    O1,
    $l,
    Ki = C(() => {
      ((ur = V(k())),
        (O1 = ({ subtitle: e, title: t, description: a }) =>
          ur.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            ur.default.createElement(
              'h1',
              {
                className:
                  'text-red-500 dark:text-red-400 text-sm font-bold mb-4 sm:mb-6 tracking-[0.2em] uppercase',
              },
              e
            ),
            ur.default.createElement('h2', {
              className:
                'text-6xl font-bold mb-8 sm:mb-10 leading-tight display-font tracking-tight rich-text',
              dangerouslySetInnerHTML: { __html: t },
              style: { fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 700 },
            }),
            ur.default.createElement('p', {
              className:
                'text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed rich-text',
              dangerouslySetInnerHTML: { __html: a },
            })
          )),
        ($l = O1));
    });
  var Pl,
    hs = C(() => {
      Pl = (e) => {
        e && window.open(e, '_blank', 'noopener,noreferrer');
      };
    });
  var $a,
    C1,
    R0,
    w0 = C(() => {
      $a = V(k());
      hs();
      ((C1 = ({ item: e }) =>
        $a.default.createElement(
          'div',
          {
            className:
              'relative overflow-hidden rounded-lg shadow-md card-hover portfolio-item website-item',
            onClick: () => Pl(e.url),
            role: 'button',
            tabIndex: 0,
            onKeyDown: (t) => {
              (t.key === 'Enter' || t.key === ' ') &&
                (t.preventDefault(), Pl(e.url));
            },
          },
          $a.default.createElement('img', {
            src: e.image,
            alt: e.title,
            className: 'w-full h-64 object-cover',
            loading: 'lazy',
          }),
          $a.default.createElement(
            'div',
            {
              className:
                'absolute inset-0 bg-black bg-opacity-40 card-overlay transition-all duration-300 flex flex-col p-6',
            },
            $a.default.createElement(
              'div',
              null,
              $a.default.createElement(
                'h3',
                { className: 'text-white text-2xl font-bold mb-2' },
                e.title
              ),
              $a.default.createElement(
                'p',
                {
                  className:
                    'text-white text-sm opacity-0 transition-opacity duration-300 website-description-text transform translate-y-2 transition-transform duration-300',
                },
                e.description
              )
            )
          )
        )),
        (R0 = C1));
    });
  var Pa,
    M1,
    x0,
    T0 = C(() => {
      Pa = V(k());
      hs();
      ((M1 = ({ item: e }) =>
        Pa.default.createElement(
          'div',
          {
            className:
              'relative overflow-hidden rounded-lg shadow-md card-hover featured-post-item website-item',
            onClick: () => Pl(e.url),
            role: 'button',
            tabIndex: 0,
            onKeyDown: (t) => {
              (t.key === 'Enter' || t.key === ' ') &&
                (t.preventDefault(), Pl(e.url));
            },
          },
          Pa.default.createElement('img', {
            src: e.image,
            alt: e.title,
            className: 'w-full h-64 object-cover',
            loading: 'lazy',
          }),
          Pa.default.createElement(
            'div',
            {
              className: `absolute inset-0 ${e.overlayColor} ${e.overlayOpacity} card-overlay transition-all duration-300 flex flex-col p-6`,
            },
            Pa.default.createElement(
              'div',
              null,
              Pa.default.createElement(
                'h3',
                { className: 'text-white text-xl font-bold mb-2' },
                e.title
              ),
              Pa.default.createElement(
                'p',
                {
                  className:
                    'text-white text-sm opacity-0 transition-opacity duration-300 website-description-text transform translate-y-2 transition-transform duration-300',
                },
                e.description
              )
            )
          )
        )),
        (x0 = M1));
    });
  var Ce,
    z1,
    ys,
    A0 = C(() => {
      Ce = V(k());
      Jl();
      Ki();
      w0();
      T0();
      ((z1 = ({ content: e }) => {
        let { hero: t, websites: a, featuredPosts: l } = e;
        return Ce.default.createElement(
          Ce.default.Fragment,
          null,
          Ce.default.createElement($l, {
            subtitle: t.subtitle,
            title: t.title,
            description: t.description,
          }),
          Ce.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            Ce.default.createElement(
              'h2',
              {
                className:
                  'text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 display-font',
              },
              a.title
            ),
            Ce.default.createElement(
              'div',
              {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8',
              },
              a.items.map((n) =>
                Ce.default.createElement(R0, { key: n.id || n.title, item: n })
              )
            )
          ),
          Ce.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            Ce.default.createElement(
              'h2',
              {
                className:
                  'text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 display-font',
              },
              l.title
            ),
            Ce.default.createElement(
              'div',
              {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8',
              },
              l.items.map((n) =>
                Ce.default.createElement(x0, { key: n.id || n.title, item: n })
              )
            ),
            Ce.default.createElement(
              'div',
              { className: 'flex justify-end mt-8 sm:mt-10' },
              Ce.default.createElement(
                Ta,
                {
                  to: l.seeAllUrl,
                  className:
                    'text-pink-500 font-medium flex items-center hover:text-pink-600 transition-colors text-base sm:text-lg',
                },
                l.seeAllText,
                ' ',
                Ce.default.createElement('i', {
                  className: 'fas fa-arrow-right ml-2',
                })
              )
            )
          )
        );
      }),
        (ys = z1));
    });
  var j,
    _1,
    N0,
    D0 = C(() => {
      j = V(k());
      Jl();
      Ki();
      ((_1 = ({ content: e }) => {
        let { about: t } = e,
          { hero: a, timeline: l, values: n, philosophy: r } = t;
        return j.default.createElement(
          j.default.Fragment,
          null,
          j.default.createElement($l, {
            subtitle: a.subtitle,
            title: a.title,
            description: a.description,
          }),
          j.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            j.default.createElement(
              'div',
              { className: 'flex items-center justify-between mb-8' },
              j.default.createElement(
                'div',
                null,
                j.default.createElement(
                  'p',
                  {
                    className:
                      'text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400',
                  },
                  l.subtitle
                ),
                j.default.createElement(
                  'h3',
                  { className: 'text-3xl font-semibold display-font' },
                  l.title
                )
              ),
              j.default.createElement(
                'span',
                { className: 'text-gray-400 dark:text-gray-500 text-sm' },
                l.period
              )
            ),
            j.default.createElement(
              'div',
              { className: 'space-y-6' },
              l.items.map((i, u) =>
                j.default.createElement(
                  'article',
                  {
                    key: u,
                    className:
                      'p-6 rounded-2xl border border-gray-200 dark:border-gray-700 card-hover',
                  },
                  j.default.createElement(
                    'p',
                    {
                      className:
                        'text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.35em] mb-2',
                    },
                    i.period
                  ),
                  j.default.createElement(
                    'h4',
                    { className: 'text-2xl font-semibold mb-3' },
                    i.title
                  ),
                  j.default.createElement(
                    'p',
                    { className: 'text-gray-600 dark:text-gray-300' },
                    i.description
                  )
                )
              )
            )
          ),
          j.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            j.default.createElement(
              'div',
              { className: 'grid md:grid-cols-2 gap-10' },
              j.default.createElement(
                'div',
                { className: 'text-center md:text-left' },
                j.default.createElement(
                  'p',
                  {
                    className:
                      'text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-3',
                  },
                  n.subtitle
                ),
                j.default.createElement(
                  'h3',
                  { className: 'text-3xl font-semibold display-font mb-6' },
                  n.title
                ),
                j.default.createElement(
                  'ul',
                  {
                    className:
                      'space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed',
                  },
                  n.items.map((i, u) =>
                    j.default.createElement(
                      'li',
                      {
                        key: u,
                        className: 'flex flex-col items-center md:block',
                      },
                      j.default.createElement(
                        'span',
                        {
                          className:
                            'font-semibold text-gray-900 dark:text-gray-100 md:mr-2 mb-1 md:mb-0',
                        },
                        i.label,
                        '\uFF1A'
                      ),
                      j.default.createElement('span', null, i.text)
                    )
                  )
                )
              ),
              j.default.createElement(
                'div',
                {
                  className:
                    'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 card-hover',
                },
                j.default.createElement(
                  'p',
                  {
                    className:
                      'text-sm text-pink-500 dark:text-pink-400 font-semibold tracking-[0.35em] mb-4',
                  },
                  n.product.subtitle
                ),
                j.default.createElement(
                  'h4',
                  { className: 'text-2xl font-semibold mb-3' },
                  n.product.title
                ),
                j.default.createElement(
                  'p',
                  { className: 'text-gray-600 dark:text-gray-300' },
                  n.product.description
                ),
                j.default.createElement(
                  Ta,
                  {
                    to: n.product.linkUrl,
                    className:
                      'inline-flex items-center text-pink-500 dark:text-pink-400 font-medium underline mt-4',
                  },
                  n.product.linkText,
                  ' ',
                  j.default.createElement('i', {
                    className: 'fas fa-arrow-right ml-2',
                  })
                )
              )
            )
          ),
          j.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            j.default.createElement(
              'div',
              {
                className:
                  'bg-black dark:bg-gray-800 text-white rounded-3xl p-10 md:p-14 card-hover',
              },
              j.default.createElement(
                'p',
                {
                  className:
                    'uppercase text-sm tracking-[0.4em] text-gray-300 dark:text-gray-400 mb-4',
                },
                r.subtitle
              ),
              j.default.createElement(
                'h3',
                { className: 'display-font text-4xl font-semibold mb-6' },
                r.title
              ),
              j.default.createElement(
                'p',
                { className: 'text-lg text-gray-200 dark:text-gray-300 mb-8' },
                r.description
              ),
              j.default.createElement(
                Ta,
                {
                  to: r.ctaUrl,
                  className:
                    'inline-flex items-center text-black bg-white dark:text-white dark:bg-gray-700 px-5 py-3 rounded-full font-semibold',
                },
                r.ctaText,
                ' ',
                j.default.createElement('i', {
                  className: 'fas fa-arrow-right ml-3',
                })
              )
            )
          )
        );
      }),
        (N0 = _1));
    });
  var ct,
    Wl = C(() => {
      ct = class {
        constructor(t = 0, a = 'Network Error') {
          ((this.status = t), (this.text = a));
        }
      };
    });
  var O0,
    C0 = C(() => {
      O0 = () => {
        if (!(typeof localStorage > 'u'))
          return {
            get: (e) => Promise.resolve(localStorage.getItem(e)),
            set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
            remove: (e) => Promise.resolve(localStorage.removeItem(e)),
          };
      };
    });
  var se,
    or = C(() => {
      C0();
      se = {
        origin: 'https://api.emailjs.com',
        blockHeadless: !1,
        storageProvider: O0(),
      };
    });
  var Il,
    Ji = C(() => {
      Il = (e) =>
        e
          ? typeof e == 'string'
            ? { publicKey: e }
            : e.toString() === '[object Object]'
              ? e
              : {}
          : {};
    });
  var M0,
    z0 = C(() => {
      or();
      Ji();
      M0 = (e, t = 'https://api.emailjs.com') => {
        if (!e) return;
        let a = Il(e);
        ((se.publicKey = a.publicKey),
          (se.blockHeadless = a.blockHeadless),
          (se.storageProvider = a.storageProvider),
          (se.blockList = a.blockList),
          (se.limitRate = a.limitRate),
          (se.origin = a.origin || t));
      };
    });
  var Fi,
    vs = C(() => {
      Wl();
      or();
      Fi = async (e, t, a = {}) => {
        let l = await fetch(se.origin + e, {
            method: 'POST',
            headers: a,
            body: t,
          }),
          n = await l.text(),
          r = new ct(l.status, n);
        if (l.ok) return r;
        throw r;
      };
    });
  var $i,
    ps = C(() => {
      $i = (e, t, a) => {
        if (!e || typeof e != 'string')
          throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
        if (!t || typeof t != 'string')
          throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
        if (!a || typeof a != 'string')
          throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
      };
    });
  var _0,
    L0 = C(() => {
      _0 = (e) => {
        if (e && e.toString() !== '[object Object]')
          throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
      };
    });
  var Pi,
    gs = C(() => {
      Pi = (e) => e.webdriver || !e.languages || e.languages.length === 0;
    });
  var Wi,
    bs = C(() => {
      Wl();
      Wi = () => new ct(451, 'Unavailable For Headless Browser');
    });
  var U0,
    H0 = C(() => {
      U0 = (e, t) => {
        if (!Array.isArray(e)) throw 'The BlockList list has to be an array';
        if (typeof t != 'string')
          throw 'The BlockList watchVariable has to be a string';
      };
    });
  var L1,
    U1,
    Ii,
    Ss = C(() => {
      H0();
      ((L1 = (e) => !e.list?.length || !e.watchVariable),
        (U1 = (e, t) => (e instanceof FormData ? e.get(t) : e[t])),
        (Ii = (e, t) => {
          if (L1(e)) return !1;
          U0(e.list, e.watchVariable);
          let a = U1(t, e.watchVariable);
          return typeof a != 'string' ? !1 : e.list.includes(a);
        }));
    });
  var eu,
    Es = C(() => {
      Wl();
      eu = () => new ct(403, 'Forbidden');
    });
  var j0,
    B0 = C(() => {
      j0 = (e, t) => {
        if (typeof e != 'number' || e < 0)
          throw 'The LimitRate throttle has to be a positive number';
        if (t && typeof t != 'string')
          throw 'The LimitRate ID has to be a non-empty string';
      };
    });
  var H1,
    tu,
    Rs = C(() => {
      B0();
      ((H1 = async (e, t, a) => {
        let l = Number((await a.get(e)) || 0);
        return t - Date.now() + l;
      }),
        (tu = async (e, t, a) => {
          if (!t.throttle || !a) return !1;
          j0(t.throttle, t.id);
          let l = t.id || e;
          return (await H1(l, t.throttle, a)) > 0
            ? !0
            : (await a.set(l, Date.now().toString()), !1);
        }));
    });
  var au,
    ws = C(() => {
      Wl();
      au = () => new ct(429, 'Too Many Requests');
    });
  var Y0,
    k0 = C(() => {
      or();
      vs();
      Ji();
      ps();
      L0();
      gs();
      bs();
      Ss();
      Es();
      Rs();
      ws();
      Y0 = async (e, t, a, l) => {
        let n = Il(l),
          r = n.publicKey || se.publicKey,
          i = n.blockHeadless || se.blockHeadless,
          u = n.storageProvider || se.storageProvider,
          o = { ...se.blockList, ...n.blockList },
          c = { ...se.limitRate, ...n.limitRate };
        return i && Pi(navigator)
          ? Promise.reject(Wi())
          : ($i(r, e, t),
            _0(a),
            a && Ii(o, a)
              ? Promise.reject(eu())
              : (await tu(location.pathname, c, u))
                ? Promise.reject(au())
                : Fi(
                    '/api/v1.0/email/send',
                    JSON.stringify({
                      lib_version: '4.4.1',
                      user_id: r,
                      service_id: e,
                      template_id: t,
                      template_params: a,
                    }),
                    { 'Content-type': 'application/json' }
                  ));
      };
    });
  var q0,
    G0 = C(() => {
      q0 = (e) => {
        if (!e || e.nodeName !== 'FORM')
          throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
      };
    });
  var j1,
    X0,
    V0 = C(() => {
      or();
      vs();
      Ji();
      G0();
      ps();
      gs();
      bs();
      Ss();
      Es();
      Rs();
      ws();
      ((j1 = (e) => (typeof e == 'string' ? document.querySelector(e) : e)),
        (X0 = async (e, t, a, l) => {
          let n = Il(l),
            r = n.publicKey || se.publicKey,
            i = n.blockHeadless || se.blockHeadless,
            u = se.storageProvider || n.storageProvider,
            o = { ...se.blockList, ...n.blockList },
            c = { ...se.limitRate, ...n.limitRate };
          if (i && Pi(navigator)) return Promise.reject(Wi());
          let d = j1(a);
          ($i(r, e, t), q0(d));
          let m = new FormData(d);
          return Ii(o, m)
            ? Promise.reject(eu())
            : (await tu(location.pathname, c, u))
              ? Promise.reject(au())
              : (m.append('lib_version', '4.4.1'),
                m.append('service_id', e),
                m.append('template_id', t),
                m.append('user_id', r),
                Fi('/api/v1.0/email/send-form', m));
        }));
    });
  var Q0,
    Z0 = C(() => {
      Wl();
      z0();
      k0();
      V0();
      Q0 = { init: M0, send: Y0, sendForm: X0, EmailJSResponseStatus: ct };
    });
  var R,
    B1,
    K0,
    J0 = C(() => {
      R = V(k());
      Z0();
      Ki();
      ((B1 = ({ content: e }) => {
        let { contact: t } = e,
          {
            hero: a,
            cards: l,
            form: n,
            services: r,
            actions: i,
            formLabels: u,
            formPlaceholders: o,
            formOptions: c,
            formSubmit: d,
          } = t,
          m = (0, R.useRef)(),
          [h, v] = (0, R.useState)('idle'),
          [b, S] = (0, R.useState)(!1),
          E = (s) => {
            (s.preventDefault(),
              navigator.clipboard.writeText(l.email.address),
              S(!0),
              setTimeout(() => S(!1), 2e3));
          },
          f = (s) => {
            (s.preventDefault(), v('sending'));
            let y = 'service_0lfalzb',
              p = 'template_i9db1eh',
              w = '8pXW3q8wUysHPFhxR';
            if (!y || !p || !w) {
              (console.error(
                'EmailJS \u73AF\u5883\u53D8\u91CF\u672A\u914D\u7F6E'
              ),
                v('error'));
              return;
            }
            Q0.sendForm(y, p, m.current, { publicKey: w }).then(
              () => {
                (v('success'),
                  m.current.reset(),
                  setTimeout(() => v('idle'), 5e3));
              },
              (_) => {
                (console.error('FAILED...', _.text),
                  v('error'),
                  setTimeout(() => v('idle'), 5e3));
              }
            );
          };
        return R.default.createElement(
          R.default.Fragment,
          null,
          R.default.createElement($l, {
            subtitle: a.subtitle,
            title: a.title,
            description: a.description,
          }),
          R.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20 grid md:grid-cols-2 gap-8' },
            R.default.createElement(
              'div',
              {
                className:
                  'p-8 border border-gray-200 dark:border-gray-700 rounded-3xl card-hover flex flex-col justify-between h-full group bg-white dark:bg-gray-800 relative overflow-hidden',
              },
              R.default.createElement(
                'div',
                {
                  className:
                    'absolute -right-6 -top-6 text-9xl text-gray-50 dark:text-gray-700 opacity-50 group-hover:opacity-100 group-hover:text-gray-100 dark:group-hover:text-gray-600 transition-all duration-500 pointer-events-none select-none',
                },
                R.default.createElement('i', { className: 'far fa-envelope' })
              ),
              R.default.createElement(
                'div',
                { className: 'relative z-10' },
                R.default.createElement(
                  'div',
                  { className: 'flex justify-between items-center mb-8' },
                  R.default.createElement(
                    'p',
                    {
                      className:
                        'text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500',
                    },
                    l.email.subtitle
                  ),
                  R.default.createElement(
                    'span',
                    {
                      className:
                        'inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium border border-green-100 dark:border-green-800',
                    },
                    R.default.createElement('span', {
                      className:
                        'w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse',
                    }),
                    'Open to Connect'
                  )
                ),
                R.default.createElement(
                  'div',
                  { className: 'mb-6' },
                  R.default.createElement(
                    'h3',
                    {
                      className:
                        'text-2xl sm:text-3xl font-semibold break-all mb-3 text-gray-900 dark:text-gray-100',
                    },
                    l.email.address.split('@')[0],
                    R.default.createElement(
                      'span',
                      { className: 'text-gray-300 dark:text-gray-600' },
                      '@'
                    ),
                    l.email.address.split('@')[1]
                  ),
                  R.default.createElement(
                    'p',
                    {
                      className:
                        'text-gray-500 dark:text-gray-400 text-sm leading-relaxed',
                    },
                    l.email.note
                  )
                )
              ),
              R.default.createElement(
                'div',
                {
                  className:
                    'relative z-10 flex items-center gap-3 pt-6 border-t border-gray-100 dark:border-gray-700',
                },
                R.default.createElement(
                  'a',
                  {
                    href: `mailto:${l.email.address}`,
                    className:
                      'flex-1 bg-black dark:bg-gray-700 text-white text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-sm hover:shadow-md',
                  },
                  i?.writeEmail || '\u5199\u90AE\u4EF6'
                ),
                R.default.createElement(
                  'button',
                  {
                    onClick: E,
                    className:
                      'flex-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600',
                  },
                  b
                    ? R.default.createElement(
                        'span',
                        { className: 'text-green-600 dark:text-green-400' },
                        R.default.createElement('i', {
                          className: 'fas fa-check mr-2',
                        }),
                        i?.copied || '\u5DF2\u590D\u5236'
                      )
                    : R.default.createElement(
                        'span',
                        null,
                        R.default.createElement('i', {
                          className: 'far fa-copy mr-2',
                        }),
                        i?.copy || '\u590D\u5236'
                      )
                )
              )
            ),
            R.default.createElement(
              'div',
              {
                className:
                  'p-8 border border-gray-200 dark:border-gray-700 rounded-3xl card-hover bg-white dark:bg-gray-800',
              },
              R.default.createElement(
                'p',
                {
                  className:
                    'text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 mb-6',
                },
                l.social.subtitle
              ),
              R.default.createElement(
                'ul',
                { className: 'space-y-3' },
                l.social.items.map((s) =>
                  R.default.createElement(
                    'li',
                    { key: s.label },
                    R.default.createElement(
                      'a',
                      {
                        href: s.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'flex items-center justify-between p-3 -mx-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group',
                      },
                      R.default.createElement(
                        'div',
                        { className: 'flex items-center space-x-4' },
                        R.default.createElement(
                          'div',
                          {
                            className:
                              'w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-gray-600 group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100 dark:group-hover:border-gray-500',
                          },
                          R.default.createElement('i', {
                            className: `${s.icon || 'fas fa-link'} text-lg text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors`,
                          })
                        ),
                        R.default.createElement(
                          'div',
                          null,
                          R.default.createElement(
                            'h4',
                            {
                              className:
                                'font-medium text-gray-900 dark:text-gray-100',
                            },
                            s.label
                          ),
                          s.handle &&
                            R.default.createElement(
                              'p',
                              {
                                className:
                                  'text-xs text-gray-500 dark:text-gray-400',
                              },
                              s.handle
                            )
                        )
                      ),
                      R.default.createElement('i', {
                        className:
                          'fas fa-arrow-up-right-from-square text-gray-300 dark:text-gray-600 text-sm group-hover:text-black dark:group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300',
                      })
                    )
                  )
                )
              )
            )
          ),
          R.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            R.default.createElement(
              'div',
              { className: 'flex items-center justify-between mb-8' },
              R.default.createElement(
                'div',
                null,
                R.default.createElement(
                  'p',
                  {
                    className:
                      'text-xs uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500',
                  },
                  n.subtitle
                ),
                R.default.createElement(
                  'h2',
                  { className: 'text-3xl font-semibold display-font' },
                  n.title
                )
              ),
              R.default.createElement('span', {
                className: 'text-sm text-gray-400 dark:text-gray-500',
                dangerouslySetInnerHTML: { __html: n.note },
              })
            ),
            R.default.createElement(
              'form',
              {
                ref: m,
                onSubmit: f,
                className:
                  'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 space-y-6',
              },
              R.default.createElement(
                'div',
                null,
                R.default.createElement(
                  'label',
                  {
                    htmlFor: 'name',
                    className:
                      'block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2',
                  },
                  u?.name || '\u79F0\u547C'
                ),
                R.default.createElement('input', {
                  id: 'name',
                  name: 'user_name',
                  type: 'text',
                  required: !0,
                  className:
                    'w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500',
                  placeholder:
                    o?.name ||
                    '\u4F8B\u5982\uFF1A\u674E\u96F7 / \u5C0F\u56E2\u961F / \u54C1\u724C\u65B9',
                })
              ),
              R.default.createElement(
                'div',
                null,
                R.default.createElement(
                  'label',
                  {
                    htmlFor: 'email',
                    className:
                      'block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2',
                  },
                  u?.email || '\u90AE\u7BB1'
                ),
                R.default.createElement('input', {
                  id: 'email',
                  name: 'user_email',
                  type: 'email',
                  required: !0,
                  className:
                    'w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500',
                  placeholder: o?.email || 'you@example.com',
                })
              ),
              R.default.createElement(
                'div',
                null,
                R.default.createElement(
                  'label',
                  {
                    htmlFor: 'topic',
                    className:
                      'block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2',
                  },
                  u?.topic || '\u9879\u76EE\u7C7B\u578B'
                ),
                R.default.createElement(
                  'select',
                  {
                    id: 'topic',
                    name: 'topic',
                    className:
                      'w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500',
                  },
                  R.default.createElement(
                    'option',
                    { value: 'consulting' },
                    c?.consulting || '\u4EA7\u54C1 / \u4F53\u9A8C\u54A8\u8BE2'
                  ),
                  R.default.createElement(
                    'option',
                    { value: 'content' },
                    c?.content || '\u5185\u5BB9\u5171\u521B'
                  ),
                  R.default.createElement(
                    'option',
                    { value: 'friend' },
                    c?.friend || '\u751F\u6D3B\u4EA4\u53CB'
                  ),
                  R.default.createElement(
                    'option',
                    { value: 'other' },
                    c?.other || '\u5176\u4ED6\u60F3\u6CD5'
                  )
                )
              ),
              R.default.createElement(
                'div',
                null,
                R.default.createElement(
                  'label',
                  {
                    htmlFor: 'message',
                    className:
                      'block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2',
                  },
                  u?.message || '\u7B80\u8981\u8BF4\u660E'
                ),
                R.default.createElement('textarea', {
                  id: 'message',
                  name: 'message',
                  rows: '5',
                  required: !0,
                  className:
                    'w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500',
                  placeholder:
                    o?.message ||
                    '\u76EE\u6807\u3001\u65F6\u95F4\u3001\u4F60\u671F\u5F85\u7684\u6210\u679C...',
                })
              ),
              R.default.createElement(
                'button',
                {
                  type: 'submit',
                  disabled: h === 'sending' || h === 'success',
                  className: `w-full py-4 rounded-2xl font-semibold text-lg transition-all ${h === 'success' ? 'bg-green-600 text-white' : h === 'error' ? 'bg-red-600 text-white' : 'bg-black dark:bg-gray-700 text-white card-hover'} disabled:opacity-70 disabled:cursor-not-allowed`,
                },
                h === 'sending'
                  ? d?.sending || '\u53D1\u9001\u4E2D...'
                  : h === 'success'
                    ? d?.success ||
                      '\u53D1\u9001\u6210\u529F\uFF01\u6211\u4F1A\u5C3D\u5FEB\u56DE\u590D'
                    : h === 'error'
                      ? d?.error ||
                        '\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5'
                      : d?.default || '\u53D1\u9001\u7ED9 Wenjie'
              )
            )
          ),
          R.default.createElement(
            'section',
            { className: 'mb-12 sm:mb-16 md:mb-20' },
            R.default.createElement(
              'div',
              { className: 'grid md:grid-cols-3 gap-6' },
              r.items.map((s) =>
                R.default.createElement(
                  'article',
                  {
                    key: s.title,
                    className:
                      'p-6 border border-gray-200 dark:border-gray-700 rounded-3xl card-hover',
                  },
                  R.default.createElement(
                    'p',
                    {
                      className:
                        'text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] mb-2',
                    },
                    s.subtitle
                  ),
                  R.default.createElement(
                    'h3',
                    { className: 'text-xl font-semibold mb-2' },
                    s.title
                  ),
                  R.default.createElement(
                    'p',
                    { className: 'text-gray-600 dark:text-gray-300 text-sm' },
                    s.description
                  )
                )
              )
            )
          )
        );
      }),
        (K0 = B1));
    });
  var F0,
    Y1,
    xs,
    $0 = C(() => {
      ((F0 = V(k())),
        (Y1 = () =>
          F0.default.createElement(
            'div',
            {
              className:
                'flex justify-center items-center h-screen text-gray-600 dark:text-gray-400',
            },
            '\u5185\u5BB9\u52A0\u8F7D\u4E2D...'
          )),
        (xs = Y1));
    });
  var P0,
    W0 = C(() => {
      P0 = (e = {}) => {
        if (typeof document > 'u') return;
        document
          .querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]')
          .forEach((l) => l.remove());
        let a = document.head;
        if (e.ico) {
          let l = document.createElement('link');
          ((l.rel = 'icon'),
            (l.type = 'image/x-icon'),
            (l.href = e.ico),
            a.appendChild(l));
        }
        if (e.appleTouchIcon) {
          let l = document.createElement('link');
          ((l.rel = 'apple-touch-icon'),
            (l.sizes = '180x180'),
            (l.href = e.appleTouchIcon),
            a.appendChild(l));
        }
      };
    });
  var k1,
    I0,
    Ts,
    q1,
    Ae,
    en,
    ev,
    G1,
    X1,
    tv,
    av = C(() => {
      ((k1 = 'content.json'),
        (I0 = {
          site: {
            title: 'Wenjie Xu - Personal Website',
            author: '\u5F90\u6587\u6770',
            favicon: {
              ico: 'favicon.ico',
              appleTouchIcon: 'apple-touch-icon.png',
            },
          },
          nav: [
            { label: '\u9996\u9875', href: 'index.html' },
            { label: '\u5173\u4E8E', href: 'about.html' },
            { label: '\u8054\u7CFB', href: 'contact.html' },
          ],
          header: {
            avatar: 'https://picsum.photos/seed/avatar123/50/50.jpg',
            name: '\u5F90\u6587\u6770',
          },
          hero: {
            subtitle: 'WENJIE XU',
            title: '\u4FDD\u6301\u597D\u5947 \u4E5F\u4FDD\u6301\u81EA\u5728',
            description: `Collaborating with diverse people is something I truly enjoy.<br />If you want to <a href="mailto:wenjie.xu.cn@outlook.com" class="underline">contact me</a>, I'll be happy to connect!`,
          },
          websites: { title: 'Websites', items: [] },
          featuredPosts: {
            title: 'Featured Posts',
            items: [],
            seeAllText: 'See All Posts',
            seeAllUrl: '#',
          },
          footer: {
            copyright: '\xA9 2025 All Rights Reserved.',
            socialLinks: [],
          },
          about: {
            hero: {
              subtitle: 'STORY',
              title: 'About Me',
              description: 'My Story',
            },
            timeline: {
              subtitle: 'TIMELINE',
              title: 'Timeline',
              period: '2015 - Now',
              items: [],
            },
            values: {
              subtitle: 'VALUES',
              title: 'Values',
              items: [],
              product: {
                subtitle: 'Product',
                title: 'Product Title',
                description: 'Product Description',
                linkText: 'Link',
                linkUrl: '#',
              },
            },
            philosophy: {
              subtitle: 'PHILOSOPHY',
              title: 'Philosophy',
              description: 'Philosophy Description',
              ctaText: 'Contact',
              ctaUrl: 'contact.html',
            },
          },
          contact: {
            hero: {
              subtitle: 'CONTACT',
              title: 'Contact Me',
              description: 'Get in touch',
            },
            cards: {
              email: {
                subtitle: 'EMAIL',
                address: 'email@example.com',
                note: 'Note',
              },
              social: { subtitle: 'SOCIAL', items: [] },
            },
            form: { subtitle: 'FORM', title: 'Form Title', note: 'Note' },
            actions: {
              writeEmail: 'Write Email',
              copy: 'Copy',
              copied: 'Copied',
            },
            formLabels: {
              name: 'Name',
              email: 'Email',
              topic: 'Project Type',
              message: 'Brief Description',
            },
            formPlaceholders: {
              name: 'Name',
              email: 'Email',
              message: 'Message',
            },
            formOptions: {
              consulting: 'Consulting',
              content: 'Content',
              friend: 'Friend',
              other: 'Other',
            },
            formSubmit: {
              default: 'Send',
              sending: 'Sending...',
              success: 'Sent!',
              error: 'Error',
            },
            services: { items: [] },
          },
        }),
        (Ts = { zh: I0, en: I0 }),
        (q1 = (e) =>
          typeof structuredClone == 'function'
            ? structuredClone(e)
            : JSON.parse(JSON.stringify(e))),
        (Ae = (e = {}, t = {}) => ({ ...t, ...e })),
        (en = (e = {}, t = {}) => ({
          ...Ae(e, t),
          items: Array.isArray(e?.items) ? e.items : t.items,
        })),
        (ev = (e = {}, t = {}) => {
          let a = Ae(e.site, t.site),
            l = Array.isArray(e.nav) ? e.nav : t.nav,
            n = Ae(e.header, t.header),
            r = Ae(e.hero, t.hero),
            i = en(e.websites, t.websites),
            u = {
              ...en(e.featuredPosts, t.featuredPosts),
              seeAllText:
                e.featuredPosts?.seeAllText ?? t.featuredPosts.seeAllText,
              seeAllUrl:
                e.featuredPosts?.seeAllUrl ?? t.featuredPosts.seeAllUrl,
            },
            o = {
              ...Ae(e.footer, t.footer),
              socialLinks: Array.isArray(e.footer?.socialLinks)
                ? e.footer.socialLinks
                : t.footer.socialLinks,
            },
            c = {
              hero: Ae(e.about?.hero, t.about.hero),
              timeline: en(e.about?.timeline, t.about.timeline),
              values: {
                ...en(e.about?.values, t.about.values),
                product: Ae(e.about?.values?.product, t.about.values.product),
              },
              philosophy: Ae(e.about?.philosophy, t.about.philosophy),
            },
            d = {
              hero: Ae(e.contact?.hero, t.contact.hero),
              cards: {
                email: Ae(e.contact?.cards?.email, t.contact.cards.email),
                social: en(e.contact?.cards?.social, t.contact.cards.social),
              },
              form: Ae(e.contact?.form, t.contact.form),
              actions: Ae(e.contact?.actions, t.contact.actions),
              formLabels: Ae(e.contact?.formLabels, t.contact.formLabels),
              formPlaceholders: Ae(
                e.contact?.formPlaceholders,
                t.contact.formPlaceholders
              ),
              formOptions: Ae(e.contact?.formOptions, t.contact.formOptions),
              formSubmit: Ae(e.contact?.formSubmit, t.contact.formSubmit),
              services: en(e.contact?.services, t.contact.services),
            };
          return {
            site: a,
            nav: l,
            header: n,
            hero: r,
            websites: i,
            featuredPosts: u,
            footer: o,
            about: c,
            contact: d,
          };
        }),
        (G1 = (e = {}) => ({ zh: ev(e.zh, Ts.zh), en: ev(e.en, Ts.en) })),
        (X1 = async () => {
          try {
            let e = await fetch(k1, { cache: 'no-cache' });
            if (!e.ok)
              throw new Error(`\u8BF7\u6C42\u5931\u8D25\uFF1A${e.status}`);
            return await e.json();
          } catch (e) {
            return (
              console.error(
                '\u52A0\u8F7D\u5185\u5BB9\u65F6\u53D1\u751F\u9519\u8BEF\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u526F\u672C\uFF1A',
                e
              ),
              q1(Ts)
            );
          }
        }),
        (tv = async () => {
          let e = await X1();
          return G1(e);
        }));
    });
  var lv,
    nv = C(() => {
      lv = (e, t) => {
        if (!e) return;
        (e.title && (document.title = e.title),
          t && (document.documentElement.lang = t === 'zh' ? 'zh-CN' : 'en'));
        let a = (n, r) => {
          if (!r) return;
          let i = document.querySelector(`meta[name="${n}"]`);
          (i ||
            ((i = document.createElement('meta')),
            (i.name = n),
            document.head.appendChild(i)),
            i.setAttribute('content', r));
        };
        (a('description', e.description),
          a('keywords', e.keywords),
          a('author', e.author));
        let l = (n, r) => {
          if (!r) return;
          let i = document.querySelector(`meta[property="${n}"]`);
          (i ||
            ((i = document.createElement('meta')),
            i.setAttribute('property', n),
            document.head.appendChild(i)),
            i.setAttribute('content', r));
        };
        (l('og:title', e.title),
          l('og:description', e.description),
          l('og:locale', t === 'zh' ? 'zh_CN' : 'en_US'),
          e.favicon?.appleTouchIcon && l('og:image', e.favicon.appleTouchIcon));
      };
    });
  var re,
    V1,
    Q1,
    rv,
    iv = C(() => {
      re = V(k());
      Jl();
      E0();
      A0();
      D0();
      J0();
      $0();
      W0();
      av();
      ir();
      ms();
      nv();
      ((V1 = () => {
        let { content: e, language: t } = Aa();
        return (
          re.default.useEffect(() => {
            e?.site && (lv(e.site, t), e.site.favicon && P0(e.site.favicon));
          }, [e, t]),
          e
            ? re.default.createElement(
                os,
                null,
                re.default.createElement(
                  Ft,
                  { element: re.default.createElement(S0, null) },
                  re.default.createElement(Ft, {
                    path: '/',
                    element: re.default.createElement(ys, { content: e }),
                  }),
                  re.default.createElement(Ft, {
                    path: '/index.html',
                    element: re.default.createElement(ys, { content: e }),
                  }),
                  re.default.createElement(Ft, {
                    path: '/about.html',
                    element: re.default.createElement(N0, { content: e }),
                  }),
                  re.default.createElement(Ft, {
                    path: '/contact.html',
                    element: re.default.createElement(K0, { content: e }),
                  }),
                  re.default.createElement(Ft, {
                    path: '*',
                    element: re.default.createElement(rs, {
                      to: '/',
                      replace: !0,
                    }),
                  })
                )
              )
            : re.default.createElement(xs, null)
        );
      }),
        (Q1 = () => {
          let [e, t] = re.default.useState(null);
          return (
            re.default.useEffect(() => {
              let a = !0;
              return (
                (async () => {
                  let n = await tv();
                  a && t(n);
                })(),
                () => {
                  a = !1;
                }
              );
            }, []),
            e
              ? re.default.createElement(
                  fs,
                  null,
                  re.default.createElement(
                    r0,
                    { content: e },
                    re.default.createElement(
                      d0,
                      null,
                      re.default.createElement(V1, null)
                    )
                  )
                )
              : re.default.createElement(xs, null)
          );
        }),
        (rv = Q1));
    });
  var K1 = Nt(() => {
    var uv = V(k()),
      ov = V(py());
    iv();
    var cv = document.getElementById('root');
    if (!cv)
      throw (
        console.error(
          '\u672A\u627E\u5230 id \u4E3A root \u7684\u5BB9\u5668\u8282\u70B9'
        ),
        new Error(
          '\u672A\u627E\u5230 id \u4E3A root \u7684\u5BB9\u5668\u8282\u70B9'
        )
      );
    var Z1 = (0, ov.createRoot)(cv);
    Z1.render(uv.default.createElement(rv, null));
  });
  K1();
})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-4WY6JWTD.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.9.6
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.9.6
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=app.bundle.js.map
