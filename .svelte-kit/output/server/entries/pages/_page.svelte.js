import {
    F as clsx,
    G as ensure_array_like,
    J as element,
    K as bind_props,
    N as spread_props,
    O as attr,
    P as head,
    w as slot,
    x as sanitize_props,
    y as rest_props,
    z as attributes
} from "../../chunks/index2.js";
import "clsx";
import "../../chunks/theme.js";
import {m as escape_html, p as fallback} from "../../chunks/context.js";

/**
 * @license lucide-svelte v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};

function Icon($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    const $$restProps = rest_props($$sanitized_props, [
        "name",
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "iconNode"
    ]);
    $$renderer.component(($$renderer2) => {
        let name2 = fallback($$props["name"], void 0);
        let color = fallback($$props["color"], "currentColor");
        let size = fallback($$props["size"], 24);
        let strokeWidth = fallback($$props["strokeWidth"], 2);
        let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
        let iconNode = fallback($$props["iconNode"], () => [], true);
        const mergeClasses = (...classes) => classes.filter((className, index, array) => {
            return Boolean(className) && array.indexOf(className) === index;
        }).join(" ");
        $$renderer2.push(`<svg${attributes(
            {
                ...defaultAttributes,
                ...$$restProps,
                width: size,
                height: size,
                stroke: color,
                "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
                class: clsx(mergeClasses("lucide-icon", "lucide", name2 ? `lucide-${name2}` : "", $$sanitized_props.class))
            },
            void 0,
            void 0,
            void 0,
            3
        )}><!--[-->`);
        const each_array = ensure_array_like(iconNode);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let [tag, attrs] = each_array[$$index];
            element($$renderer2, tag, () => {
                $$renderer2.push(`${attributes({...attrs}, void 0, void 0, void 0, 3)}`);
            });
        }
        $$renderer2.push(`<!--]--><!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]--></svg>`);
        bind_props($$props, {
            name: name2,
            color,
            size,
            strokeWidth,
            absoluteStrokeWidth,
            iconNode
        });
    });
}

function Arrow_up($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    /**
     * @license lucide-svelte v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const iconNode = [
        ["path", {"d": "m5 12 7-7 7 7"}],
        ["path", {"d": "M12 19V5"}]
    ];
    Icon($$renderer, spread_props([
        {name: "arrow-up"},
        $$sanitized_props,
        {
            /**
             * @component @name ArrowUp
             * @description Lucide SVG icon component, renders SVG Element with children.
             *
             * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSAxMiA3LTcgNyA3IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOVY1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-up
             * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
             *
             * @param {Object} props - Lucide icons props and any valid SVG attribute
             * @returns {FunctionalComponent} Svelte component
             *
             */
            iconNode,
            children: ($$renderer2) => {
                $$renderer2.push(`<!--[-->`);
                slot($$renderer2, $$props, "default", {});
                $$renderer2.push(`<!--]-->`);
            },
            $$slots: {default: true}
        }
    ]));
}

function Github($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    /**
     * @license lucide-svelte v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const iconNode = [
        [
            "path",
            {
                "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            }
        ],
        ["path", {"d": "M9 18c-4.51 2-5-2-7-2"}]
    ];
    Icon($$renderer, spread_props([
        {name: "github"},
        $$sanitized_props,
        {
            /**
             * @component @name Github
             * @description Lucide SVG icon component, renders SVG Element with children.
             *
             * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
             * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
             *
             * @param {Object} props - Lucide icons props and any valid SVG attribute
             * @returns {FunctionalComponent} Svelte component
             * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
             */
            iconNode,
            children: ($$renderer2) => {
                $$renderer2.push(`<!--[-->`);
                slot($$renderer2, $$props, "default", {});
                $$renderer2.push(`<!--]-->`);
            },
            $$slots: {default: true}
        }
    ]));
}

function Instagram($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    /**
     * @license lucide-svelte v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const iconNode = [
        [
            "rect",
            {
                "width": "20",
                "height": "20",
                "x": "2",
                "y": "2",
                "rx": "5",
                "ry": "5"
            }
        ],
        [
            "path",
            {"d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}
        ],
        [
            "line",
            {"x1": "17.5", "x2": "17.51", "y1": "6.5", "y2": "6.5"}
        ]
    ];
    Icon($$renderer, spread_props([
        {name: "instagram"},
        $$sanitized_props,
        {
            /**
             * @component @name Instagram
             * @description Lucide SVG icon component, renders SVG Element with children.
             *
             * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIgLz4KICA8cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIgLz4KICA8bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/instagram
             * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
             *
             * @param {Object} props - Lucide icons props and any valid SVG attribute
             * @returns {FunctionalComponent} Svelte component
             * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0
             */
            iconNode,
            children: ($$renderer2) => {
                $$renderer2.push(`<!--[-->`);
                slot($$renderer2, $$props, "default", {});
                $$renderer2.push(`<!--]-->`);
            },
            $$slots: {default: true}
        }
    ]));
}

function Linkedin($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    /**
     * @license lucide-svelte v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const iconNode = [
        [
            "path",
            {
                "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }
        ],
        ["rect", {"width": "4", "height": "12", "x": "2", "y": "9"}],
        ["circle", {"cx": "4", "cy": "4", "r": "2"}]
    ];
    Icon($$renderer, spread_props([
        {name: "linkedin"},
        $$sanitized_props,
        {
            /**
             * @component @name Linkedin
             * @description Lucide SVG icon component, renders SVG Element with children.
             *
             * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiIC8+CiAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/linkedin
             * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
             *
             * @param {Object} props - Lucide icons props and any valid SVG attribute
             * @returns {FunctionalComponent} Svelte component
             * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=linkedin instead. This icon will be removed in v1.0
             */
            iconNode,
            children: ($$renderer2) => {
                $$renderer2.push(`<!--[-->`);
                slot($$renderer2, $$props, "default", {});
                $$renderer2.push(`<!--]-->`);
            },
            $$slots: {default: true}
        }
    ]));
}

function Twitter($$renderer, $$props) {
    const $$sanitized_props = sanitize_props($$props);
    /**
     * @license lucide-svelte v0.469.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const iconNode = [
        [
            "path",
            {
                "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            }
        ]
    ];
    Icon($$renderer, spread_props([
        {name: "twitter"},
        $$sanitized_props,
        {
            /**
             * @component @name Twitter
             * @description Lucide SVG icon component, renders SVG Element with children.
             *
             * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/twitter
             * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
             *
             * @param {Object} props - Lucide icons props and any valid SVG attribute
             * @returns {FunctionalComponent} Svelte component
             * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=twitter instead. This icon will be removed in v1.0
             */
            iconNode,
            children: ($$renderer2) => {
                $$renderer2.push(`<!--[-->`);
                slot($$renderer2, $$props, "default", {});
                $$renderer2.push(`<!--]-->`);
            },
            $$slots: {default: true}
        }
    ]));
}

const footerNav = {
    "services": [{"label": "Custom Software", "href": "#services"}, {
        "label": "Cloud Solutions",
        "href": "#services"
    }, {"label": "Mobile Development", "href": "#services"}, {"label": "IT Consulting", "href": "#services"}],
    "company": [{"label": "About Us", "href": "#about"}, {"label": "Our Team", "href": "#team"}, {
        "label": "Portfolio",
        "href": "#portfolio"
    }, {"label": "Careers", "href": "/careers"}],
    "resources": [{"label": "Blog", "href": "/blog"}, {
        "label": "Case Studies",
        "href": "/case-studies"
    }, {"label": "Documentation", "href": "/docs"}]
};
const navigation = {
    footerNav
};
const name = "GTI Labs";
const tagline = "Transforming Ideas into Digital Excellence";
const social = {
    "linkedin": "https://linkedin.com/company/gtilabs",
    "github": "https://github.com/gtilabs",
    "twitter": "https://twitter.com/gtilabs",
    "instagram": "https://instagram.com/gtilabs.id"
};
const company = {
    name,
    tagline,
    social
};

function Navbar($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
    });
}

function Hero($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section class="relative min-h-screen flex items-center justify-center overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute top-1/4 -left-32 w-96 h-96 rounded-full dark:bg-accent-pink/20 bg-accent-pink/30 blur-[120px] animate-float"></div> <div class="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full dark:bg-accent-purple/20 bg-accent-purple/30 blur-[120px] animate-float animation-delay-400"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full dark:bg-accent-teal/10 bg-accent-teal/20 blur-[150px] animate-pulse-slow"></div></div> <div class="container-custom relative z-10 pt-20">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></section>`);
    });
}

function About($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section id="about" class="section-padding relative"><div class="container-custom">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function Services($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section id="services" class="section-padding relative dark:bg-dark-900/30 bg-light-100/50"><div class="container-custom">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

const projects = [{
    "id": "fintech-platform",
    "title": "FinanceHub Platform",
    "category": "Fintech",
    "description": "A comprehensive financial management platform serving over 100,000 users with real-time transaction processing and analytics.",
    "technologies": ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    "image": "/images/projects/fintech.jpg",
    "color": "#10b981"
}, {
    "id": "logistics-system",
    "title": "LogiTrack System",
    "category": "Logistics",
    "description": "End-to-end logistics management system with real-time tracking, route optimization, and automated dispatch.",
    "technologies": ["Node.js", "React", "MongoDB", "AWS", "IoT"],
    "image": "/images/projects/logistics.jpg",
    "color": "#f59e0b"
}, {
    "id": "healthcare-app",
    "title": "MediCare Mobile",
    "category": "Healthcare",
    "description": "Telemedicine application connecting patients with healthcare providers, featuring video consultations and e-prescriptions.",
    "technologies": ["React Native", "Firebase", "Node.js", "WebRTC"],
    "image": "/images/projects/healthcare.jpg",
    "color": "#ec4899"
}, {
    "id": "ecommerce-platform",
    "title": "ShopEase Platform",
    "category": "E-Commerce",
    "description": "Multi-vendor e-commerce platform handling millions of transactions with advanced inventory management.",
    "technologies": ["Next.js", "Go", "PostgreSQL", "Elasticsearch", "Kubernetes"],
    "image": "/images/projects/ecommerce.jpg",
    "color": "#8b5cf6"
}, {
    "id": "hr-management",
    "title": "PeopleFirst HRMS",
    "category": "Enterprise",
    "description": "Complete human resource management system with payroll, attendance, recruitment, and performance modules.",
    "technologies": ["Java", "Spring Boot", "MySQL", "Vue.js", "Docker"],
    "image": "/images/projects/hr.jpg",
    "color": "#06b6d4"
}, {
    "id": "iot-dashboard",
    "title": "SmartFactory IoT",
    "category": "Manufacturing",
    "description": "Industrial IoT platform for smart manufacturing with predictive maintenance and real-time monitoring.",
    "technologies": ["Python", "React", "InfluxDB", "MQTT", "TensorFlow"],
    "image": "/images/projects/iot.jpg",
    "color": "#f97316"
}];
const portfolio = {
    projects
};

function Portfolio($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        ["All", ...new Set(portfolio.projects.map((p) => p.category))];
        $$renderer2.push(`<section id="portfolio" class="section-padding relative"><div class="container-custom">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function TechStack($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section id="techstack" class="section-padding relative dark:bg-dark-900/30 bg-light-100/50"><div class="container-custom">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function Team($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section id="team" class="section-padding relative"><div class="container-custom">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function Testimonials($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section class="section-padding relative dark:bg-dark-900/30 bg-light-100/50 overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full dark:bg-primary-500/5 bg-primary-500/10 blur-[150px]"></div> <div class="container-custom relative">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function Contact($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        $$renderer2.push(`<section id="contact" class="section-padding relative"><div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full dark:bg-primary-500/10 bg-primary-500/20 blur-[150px]"></div> <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full dark:bg-accent-purple/10 bg-accent-purple/20 blur-[150px]"></div> <div class="container-custom relative">`);
        {
            $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></section>`);
    });
}

function Footer($$renderer, $$props) {
    $$renderer.component(($$renderer2) => {
        const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
        $$renderer2.push(`<footer class="relative dark:bg-dark-900/50 bg-light-100/80 border-t dark:border-dark-800 border-light-300"><div class="container-custom py-16"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"><div class="lg:col-span-1"><a href="/" class="flex items-center gap-3 mb-6"><img src="/images/logo.png"${attr("alt", company.name)} class="w-12 h-12 object-contain"/> <span class="text-xl font-display font-bold dark:text-white text-light-900">${escape_html(company.name)}</span></a> <p class="dark:text-dark-400 text-light-500 text-sm mb-6 leading-relaxed">${escape_html(company.tagline)}. Building the future of digital experiences, one project at a time.</p> <div class="flex gap-3"><a${attr("href", company.social.github)} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all">`);
        Github($$renderer2, {class: "w-4 h-4"});
        $$renderer2.push(`<!----></a> <a${attr("href", company.social.linkedin)} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all">`);
        Linkedin($$renderer2, {class: "w-4 h-4"});
        $$renderer2.push(`<!----></a> <a${attr("href", company.social.twitter)} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all">`);
        Twitter($$renderer2, {class: "w-4 h-4"});
        $$renderer2.push(`<!----></a> <a${attr("href", company.social.instagram)} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all">`);
        Instagram($$renderer2, {class: "w-4 h-4"});
        $$renderer2.push(`<!----></a></div></div> <div><h4 class="dark:text-white text-light-900 font-semibold mb-4">Services</h4> <ul class="space-y-3"><!--[-->`);
        const each_array = ensure_array_like(navigation.footerNav.services);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer2.push(`<li><a${attr("href", item.href)} class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">${escape_html(item.label)}</a></li>`);
        }
        $$renderer2.push(`<!--]--></ul></div> <div><h4 class="dark:text-white text-light-900 font-semibold mb-4">Company</h4> <ul class="space-y-3"><!--[-->`);
        const each_array_1 = ensure_array_like(navigation.footerNav.company);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let item = each_array_1[$$index_1];
            $$renderer2.push(`<li><a${attr("href", item.href)} class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">${escape_html(item.label)}</a></li>`);
        }
        $$renderer2.push(`<!--]--></ul></div> <div><h4 class="dark:text-white text-light-900 font-semibold mb-4">Resources</h4> <ul class="space-y-3"><!--[-->`);
        const each_array_2 = ensure_array_like(navigation.footerNav.resources);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let item = each_array_2[$$index_2];
            $$renderer2.push(`<li><a${attr("href", item.href)} class="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">${escape_html(item.label)}</a></li>`);
        }
        $$renderer2.push(`<!--]--></ul></div></div> <div class="pt-8 border-t dark:border-dark-800 border-light-300 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="dark:text-dark-500 text-light-500 text-sm">© ${escape_html(currentYear)}
				${escape_html(company.name)}. All rights reserved.</p> <div class="flex items-center gap-6"><a href="/privacy" class="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors">Privacy Policy</a> <a href="/terms" class="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors">Terms of Service</a></div></div></div> <button class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:bg-primary-400 hover:scale-110 active:scale-90 transition-all z-40">`);
        Arrow_up($$renderer2, {class: "w-5 h-5"});
        $$renderer2.push(`<!----></button></footer>`);
    });
}

function _page($$renderer) {
    head("1uha8ag", $$renderer, ($$renderer2) => {
        $$renderer2.title(($$renderer3) => {
            $$renderer3.push(`<title>GTI Labs - Transforming Ideas into Digital Excellence</title>`);
        });
        $$renderer2.push(`<meta name="description" content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."/> <meta name="keywords" content="software development, IT company, Indonesia, cloud solutions, digital transformation, enterprise software"/> <meta name="author" content="GTI Labs"/> <meta property="og:title" content="GTI Labs - Transforming Ideas into Digital Excellence"/> <meta property="og:description" content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."/> <meta property="og:url" content="https://gtilabs.id"/> <meta property="og:site_name" content="GTI Labs"/> <meta property="og:image" content="/images/logo.png"/> <meta property="og:locale" content="en_US"/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="GTI Labs - Transforming Ideas into Digital Excellence"/> <meta name="twitter:description" content="GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation."/> <meta name="twitter:image" content="/images/logo.png"/>`);
    });
    $$renderer.push(`<main class="relative overflow-hidden"><div class="fixed inset-0 grid-background pointer-events-none"></div> <div class="fixed inset-0 bg-gradient-to-b dark:from-primary-950/20 from-primary-100/30 via-transparent to-transparent pointer-events-none"></div> `);
    Navbar($$renderer);
    $$renderer.push(`<!----> `);
    Hero($$renderer);
    $$renderer.push(`<!----> `);
    About($$renderer);
    $$renderer.push(`<!----> `);
    Services($$renderer);
    $$renderer.push(`<!----> `);
    Portfolio($$renderer);
    $$renderer.push(`<!----> `);
    TechStack($$renderer);
    $$renderer.push(`<!----> `);
    Team($$renderer);
    $$renderer.push(`<!----> `);
    Testimonials($$renderer);
    $$renderer.push(`<!----> `);
    Contact($$renderer);
    $$renderer.push(`<!----> `);
    Footer($$renderer);
    $$renderer.push(`<!----></main>`);
}

export {
    _page as default
};
