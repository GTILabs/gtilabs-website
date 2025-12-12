export const manifest = (() => {
    function __memo(fn) {
        let value;
        return () => value ??= (value = fn());
    }

    return {
        appDir: "_app",
        appPath: "_app",
        assets: new Set(["favicon.png", "images/aji.png", "images/eko.jpeg", "images/endy.jpeg", "images/firly.jpeg", "images/hasan.jpeg", "images/hendi.jpeg", "images/ilal.jpeg", "images/irsyad.jpg", "images/kendy.jpeg", "images/logo.png", "images/raden.jpeg"]),
        mimeTypes: {".png": "image/png", ".jpeg": "image/jpeg", ".jpg": "image/jpeg"},
        _: {
            client: {
                start: "_app/immutable/entry/start.BDxt4X_T.js",
                app: "_app/immutable/entry/app.sXy-EEmD.js",
                imports: ["_app/immutable/entry/start.BDxt4X_T.js", "_app/immutable/chunks/DMjeX9A2.js", "_app/immutable/chunks/DS7VdxVw.js", "_app/immutable/entry/app.sXy-EEmD.js", "_app/immutable/chunks/DS7VdxVw.js", "_app/immutable/chunks/BCrIPWsQ.js", "_app/immutable/chunks/D4zD50dN.js", "_app/immutable/chunks/BzKJnAxa.js"],
                stylesheets: [],
                fonts: [],
                uses_env_dynamic_public: false
            },
            nodes: [
                __memo(() => import('./nodes/0.js')),
                __memo(() => import('./nodes/1.js')),
                __memo(() => import('./nodes/2.js'))
            ],
            remotes: {},
            routes: [
                {
                    id: "/",
                    pattern: /^\/$/,
                    params: [],
                    page: {layouts: [0,], errors: [1,], leaf: 2},
                    endpoint: null
                }
            ],
            prerendered_routes: new Set([]),
            matchers: async () => {

                return {};
            },
            server_assets: {}
        }
    }
})();
