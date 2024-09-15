(() => {
var exports = {};
exports.id = 731;
exports.ids = [731];
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

/***/ 96997:
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
/* harmony import */ var _mnt_metrodeploy_client_src_app_client_loan_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90549);
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
        'loan',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90549)), "/mnt/metrodeploy/client/src/app/(client)/loan/page.js"],
          
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
const pages = ["/mnt/metrodeploy/client/src/app/(client)/loan/page.js"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/(client)/loan/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/(client)/loan/page",
        pathname: "/loan",
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

/***/ 47471:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73840));


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

/***/ 73840:
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
/* harmony import */ var _barrel_optimize_names_FaArrowLeft_FaMoneyBillWave_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90622);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35047);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9684);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80235);
/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9546);
/* harmony import */ var _app_app_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46322);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const RequestLoan = ()=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)({
        middleware: "auth"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user) {
            router.push("/login");
        } else if (user.role !== "Client") {
            router.push("/login");
        }
    }, [
        user,
        router
    ]);
    if (!user) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_app_Loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    const [loanData, setLoanData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        projet: "",
        description: "",
        duree: "",
        montant_voulue: ""
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setLoanData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("/api/loan-request", loanData);
            if (response.status === 200) {
                alert(response.data.success);
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            alert("Erreur lors de la soumission de la demande.");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-white text-black p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaMoneyBillWave_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaArrowLeft */ .x_l, {
                            className: "text-xl",
                            onClick: ()=>router.back()
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl font-semibold",
                        children: "Request a Loan"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "bg-white rounded-3xl p-6 mb-6 shadow-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "projet",
                                    className: "block text-lg font-bold mb-2",
                                    children: "Project"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    id: "projet",
                                    name: "projet",
                                    value: loanData.projet,
                                    onChange: handleInputChange,
                                    className: "w-full py-1 border-b-2 border-red-700 text-black outline-none",
                                    placeholder: "Enter project name"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "description",
                                    className: "block text-lg font-bold mb-2",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    id: "description",
                                    name: "description",
                                    value: loanData.description,
                                    onChange: handleInputChange,
                                    className: "w-full py-1 border-b-2 border-red-700 text-black outline-none",
                                    placeholder: "Enter project description"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "duree",
                                    className: "block text-lg font-bold mb-2",
                                    children: "Duration (in years)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    id: "duree",
                                    name: "duree",
                                    value: loanData.duree,
                                    onChange: handleInputChange,
                                    className: "w-full py-1 border-b-2 border-red-700 text-black outline-none",
                                    placeholder: "Enter duration"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "montant_voulue",
                                    className: "block text-lg font-bold mb-2",
                                    children: "Loan Amount"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center border-b-2 border-red-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_FaArrowLeft_FaMoneyBillWave_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaMoneyBillWave */ .l80, {
                                            className: "text-xl text-red-700 mr-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            id: "montant_voulue",
                                            name: "montant_voulue",
                                            value: loanData.montant_voulue,
                                            onChange: handleInputChange,
                                            className: "w-full py-1 text-black outline-none",
                                            placeholder: "Enter loan amount"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "bg-red-700 text-white w-full py-2 rounded-full mt-4",
                            children: "Submit Loan Request"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestLoan);


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

/***/ 90549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(client)/loan/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(client)/loan/page.js#default`));


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
var __webpack_exports__ = __webpack_require__.X(0, [948,495,99,35,622,781], () => (__webpack_exec__(96997)));
module.exports = __webpack_exports__;

})();