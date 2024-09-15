(() => {
var exports = {};
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 47849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 72934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 55403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 54580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 94749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 45869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 20399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 57821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _mnt_metrodeploy_client_src_app_client_dash_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77833);
/* harmony import */ var _mnt_metrodeploy_client_src_app_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68295);
/* harmony import */ var _mnt_metrodeploy_client_src_app_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99287);
/* harmony import */ var _mnt_metrodeploy_client_src_app_not_found_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54864);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23191);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88716);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37922);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95231);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '(client)',
        {
        children: [
        'dash',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77833)), "/mnt/metrodeploy/client/src/app/(client)/dash/page.js"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68295)), "/mnt/metrodeploy/client/src/app/layout.js"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99287)), "/mnt/metrodeploy/client/src/app/loading.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54864)), "/mnt/metrodeploy/client/src/app/not-found.js"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/mnt/metrodeploy/client/src/app/(client)/dash/page.js"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/(client)/dash/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/(client)/dash/page",
        pathname: "/dash",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 77183:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 78409));


/***/ }),

/***/ 46322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex min-h-screen w-full items-center justify-center bg-gray-100",
        children: "Loading..."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 78409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9684);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90622);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35047);
/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9546);
/* harmony import */ var _app_app_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46322);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80235);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Home = ()=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)({
        middleware: "auth"
    });
    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user) {
            router.push("/login");
        } else if (user.role !== "Client") {
            router.push("/login");
        } else {
            // Récupérer les informations du client via l'API
            _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.get("/api/client-info").then((response)=>{
                const { client, transactions } = response.data;
                setBalance(client.solde);
                setTransactions(transactions);
                setLoading(false);
            }).catch((error)=>{
                console.error("Error fetching client info:", error);
                setLoading(false);
                if (error.response && error.response.status === 403) {
                    // Si le compte n'est pas activé
                    alert("Votre compte n'est pas encore activ\xe9. Veuillez contacter l'administrateur.");
                    router.push("/activation-pending"); // Rediriger vers une page d'activation en attente
                }
            });
        }
    }, [
        user,
        router
    ]);
    if (loading || !user) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_app_Loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    const handleSendMoney = ()=>{
        router.push("/retrait");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-white text-black p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaArrowLeft */ .x_l, {
                            className: "text-xl",
                            onClick: ()=>router.back()
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "text-xl font-semibold",
                        children: [
                            "Welcome Back, ",
                            user.name,
                            "!"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "bg-white rounded-3xl p-6 mb-6 shadow-lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-center text-2xl font-extrabold mb-1 text-black",
                        children: "Your Balance"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center text-4xl font-bold text-red-700 mb-4",
                        children: [
                            "$",
                            balance.toLocaleString()
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-around mt-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: handleSendMoney,
                            className: "bg-red-700 text-white rounded-full p-3 flex flex-col items-center shadow-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaArrowRight */ .Z1Y, {
                                    className: "text-2xl mb-2"
                                }),
                                "Retrait"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "bg-white p-4 rounded-2xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-lg font-bold text-black",
                                children: "History"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setTransactions([
                                        ...transactions
                                    ].reverse()),
                                className: "text-sm text-red-500 flex items-center",
                                children: [
                                    "Sort ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaSortAmountDown */ .r_, {
                                        className: "ml-1"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: transactions.map((transaction)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "flex justify-between items-center py-2 border-b border-gray-200",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-medium text-black",
                                        children: transaction.beneficiary_name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `text-sm ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`,
                                        children: transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount
                                    })
                                ]
                            }, transaction.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-2xl shadow-md flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>router.push("/dash"),
                        className: "flex flex-col items-center text-red-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaHome */ .xng, {
                                className: "text-2xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Accueil"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>router.push("/codetransaction"),
                        className: "flex flex-col items-center text-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaWallet */ .OZg, {
                                className: "text-2xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Entrer codes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>router.push("/historique"),
                        className: "flex flex-col items-center text-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaMoneyBillWave */ .l80, {
                                className: "text-2xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Historique"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>router.push("/loan"),
                        className: "flex flex-col items-center text-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaChartPie */ .yQE, {
                                className: "text-2xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Demande de pr\xeat"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>router.push("/profil"),
                        className: "flex flex-col items-center text-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaArrowRight_FaChartPie_FaHome_FaMoneyBillWave_FaSortAmountDown_FaUser_FaWallet_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaUser */ .Xws, {
                                className: "text-2xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Profile"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4040);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80235);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35047);




const useAuth = ({ middleware, redirectIfAuthenticated } = {})=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();
    const { data: user, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)("/api/user", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/api/user").then((res)=>res.data).catch((error)=>{
            if (error.response.status !== 409) throw error;
            router.push("/verify-email");
        }));
    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/sanctum/csrf-cookie");
    const register = async ({ setErrors, ...props })=>{
        await csrf();
        setErrors([]);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/register", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const login = async ({ setErrors, setStatus, ...props })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/login", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const registerClient = async ({ setErrors, ...props })=>{
        await csrf();
        if (typeof setErrors === "function") setErrors([]);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/api/client-register", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const loginClient = async ({ setErrors, setStatus, ...props })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/api/client-login", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const forgotPassword = async ({ setErrors, setStatus, email })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/forgot-password", {
            email
        }).then((response)=>setStatus(response.data.status)).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const resetPassword = async ({ setErrors, setStatus, ...props })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/reset-password", {
            token: params.token,
            ...props
        }).then((response)=>{
            // Rediriger en fonction du rôle de l'utilisateur
            if (response.data.role === "Admin") {
                router.push("/admin/login?reset=" + btoa(response.data.status));
            } else {
                router.push("/login?reset=" + btoa(response.data.status));
            }
        }).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(error.response.data.errors);
        });
    };
    const resendEmailVerification = ({ setStatus })=>{
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/email/verification-notification").then((response)=>setStatus(response.data.status));
    };
    const logout = async ()=>{
        if (!error) {
            await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/logout").then(()=>mutate());
        }
        window.location.pathname = "/admin/login";
    };
    const logoutClient = async ()=>{
        if (!error) {
            await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/api/client-logout").then(()=>mutate());
        }
        window.location.pathname = "/login";
    };
    // Nouvelle fonction handleLogout pour déterminer quelle fonction de déconnexion appeler
    const handleLogout = ()=>{
        const adminRoutes = [
            "/admin/login",
            "/admin/register",
            "/dashboard",
            "/valider",
            "/admin-profil",
            "/crediter",
            "/listeclient",
            "/user-info",
            "/update-dette"
        ];
        // Vérification si l'utilisateur est sur une des routes admin
        if (adminRoutes.includes(window.location.pathname)) {
            logout() // Appelle la fonction de déconnexion de l'admin
            ;
        } else {
            logoutClient() // Appelle la fonction de déconnexion du client
            ;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (middleware === "guest" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);
        if (window.location.pathname === "/verify-email" && user?.email_verified_at) router.push(redirectIfAuthenticated);
        if (middleware === "auth" && error) handleLogout() // Utilise handleLogout ici
        ;
    }, [
        user,
        error
    ]);
    return {
        user,
        register,
        login,
        registerClient,
        loginClient,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout: handleLogout
    };
};


/***/ }),

/***/ 80235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44099);

const axios = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "http://api.metrobanque.com",
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true,
    withXSRFToken: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ 77833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(client)/dash/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(client)/dash/page.js#default`));


/***/ }),

/***/ 9684:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [948,495,99,35,622,781], () => (__webpack_exec__(57821)));
module.exports = __webpack_exports__;

})();