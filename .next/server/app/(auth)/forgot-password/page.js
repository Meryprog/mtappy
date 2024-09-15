(() => {
var exports = {};
exports.id = 985;
exports.ids = [985];
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

/***/ 78956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _mnt_metrodeploy_client_src_app_auth_forgot_password_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50929);
/* harmony import */ var _mnt_metrodeploy_client_src_app_auth_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23180);
/* harmony import */ var _mnt_metrodeploy_client_src_app_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68295);
/* harmony import */ var _mnt_metrodeploy_client_src_app_loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99287);
/* harmony import */ var _mnt_metrodeploy_client_src_app_not_found_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54864);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23191);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88716);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37922);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95231);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '(auth)',
        {
        children: [
        'forgot-password',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50929)), "/mnt/metrodeploy/client/src/app/(auth)/forgot-password/page.js"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23180)), "/mnt/metrodeploy/client/src/app/(auth)/layout.js"],
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
const pages = ["/mnt/metrodeploy/client/src/app/(auth)/forgot-password/page.js"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/(auth)/forgot-password/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_5__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_6__/* .RouteKind */ .x.APP_PAGE,
        page: "/(auth)/forgot-password/page",
        pathname: "/forgot-password",
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

/***/ 66976:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79404, 23));


/***/ }),

/***/ 47594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58054));


/***/ }),

/***/ 13446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AuthSessionStatus = ({ status, className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${className} font-medium text-sm text-green-600`,
            ...props,
            children: status
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthSessionStatus);


/***/ }),

/***/ 58054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39649);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19859);
/* harmony import */ var _components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18132);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59849);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9684);
/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_global_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9546);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_auth_AuthSessionStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13446);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Page = ()=>{
    const { forgotPassword } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard"
    });
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const submitForm = (event)=>{
        event.preventDefault();
        forgotPassword({
            email,
            setErrors,
            setStatus
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4 text-sm text-gray-600",
                children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_auth_AuthSessionStatus__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: "mb-4",
                status: status
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitForm,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Label__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                htmlFor: "email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: "email",
                                type: "email",
                                name: "email",
                                value: email,
                                className: "block mt-1 w-full",
                                onChange: (event)=>setEmail(event.target.value),
                                required: true,
                                autoFocus: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                messages: errors.email,
                                className: "mt-2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-end mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            children: "Email Password Reset Link"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 39649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ type = "submit", className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${className} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,
        ...props
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 19859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Input = ({ disabled = false, className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        disabled: disabled,
        className: `${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,
        ...props
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 18132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const InputError = ({ messages = [], className = "" })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: messages.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `${className} text-sm text-red-600`,
                    children: message
                }, index))
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputError);


/***/ }),

/***/ 59849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Label = ({ className, children, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: `${className} block font-medium text-sm text-gray-700`,
        ...props,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


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

/***/ 50929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(auth)/forgot-password/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/metrodeploy/client/src/app/(auth)/forgot-password/page.js#default`));


/***/ }),

/***/ 23180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(19510);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(57371);
;// CONCATENATED MODULE: ./src/app/(auth)/AuthCard.js

const AuthCard = ({ logo, children })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                children: logo
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                children: children
            })
        ]
    });
/* harmony default export */ const _auth_AuthCard = (AuthCard);

;// CONCATENATED MODULE: ./src/components/ApplicationLogo.js

const ApplicationLogo = (props)=>/*#__PURE__*/ react_jsx_runtime.jsx("svg", {
        viewBox: "0 0 316 316",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
            d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"
        })
    });
/* harmony default export */ const components_ApplicationLogo = (ApplicationLogo);

;// CONCATENATED MODULE: ./src/app/(auth)/layout.js




const metadata = {
    title: "Laravel"
};
const Layout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "text-gray-900 antialiased",
            children: /*#__PURE__*/ react_jsx_runtime.jsx(_auth_AuthCard, {
                logo: /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(components_ApplicationLogo, {
                        className: "w-20 h-20 fill-current text-gray-500"
                    })
                }),
                children: children
            })
        })
    });
};
/* harmony default export */ const layout = (Layout);


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
var __webpack_exports__ = __webpack_require__.X(0, [948,495,99,35,781], () => (__webpack_exec__(78956)));
module.exports = __webpack_exports__;

})();