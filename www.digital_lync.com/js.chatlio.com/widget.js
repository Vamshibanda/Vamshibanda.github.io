(() => {
    var o = class extends HTMLElement {
        constructor() {
            super()
        }
        connectedCallback() {
            this.widgetID = this.getAttribute("widgetid"), this.widgetType = this.getAttribute("widgettype") || "standard", this.disableFaviconBadge = this.hasAttribute("disablefaviconbadge") || this.hasAttribute("disable-favicon-badge"), this.disableCookies = this.hasAttribute("data-disable-cookies"), this.chatlioDebug = this.hasAttribute("data-chatlio-debug"), this.skipRequireLoad = this.hasAttribute("data-skip-require-load"), this.startHidden = this.hasAttribute("data-start-hidden"), this.widgetSrc = this.getAttribute("widgetsrc") || "https://w.chatlio.com/v5/w.chatlio-widget.js", this.loadChatlio()
        }
        disconnectedCallback() {
            this.unmountChatlio()
        }
        static get observedAttributes() {
            return ["widgetid", "widgetsrc"]
        }
        attributeChangedCallback(a, s, i) {
            a === "widgetid" && i !== s && s !== null && (this.widgetID = i, document.getElementById("chatlio-widget-embed").setAttribute("data-widget-id", this.widgetID), _chatlio.switchToWidget(this.widgetID))
        }
        unmountChatlio() {
            window._chatlio && typeof window._chatlio.unmount < "u" && window._chatlio.unmount()
        }
        loadChatlio() {
            this.unmountChatlio(), window._chatlio = window._chatlio || [];
            var a = document.getElementById("chatlio-widget-embed");
            if (a && window.ChatlioReact && _chatlio.init) return void _chatlio.init(a, ChatlioReact);
            for (var s = function(h) {
                    return function() {
                        _chatlio.push([h].concat(arguments))
                    }
                }, i = ["configure", "identify", "track", "show", "hide", "isShown", "isOnline", "page", "open", "showOrHide"], d = 0; d < i.length; d++) _chatlio[i[d]] || (_chatlio[i[d]] = s(i[d]));
            var t = document.createElement("script");
            t.id = "chatlio-widget-embed", t.src = this.widgetSrc, t.async = !0, t.setAttribute("data-embed-version", "3.0-wc");
            let e = {};
            this.widgetType === "sidebar" && (e.embedSidebar = !0), this.widgetType === "inline" && (e.embedInline = !0), this.disableFaviconBadge && (e.disableFaviconBadge = !0), this.skipRequireLoad && (e.skipRequireLoad = !0), Object.entries(e).length > 0 && t.setAttribute("data-widget-options", JSON.stringify(e)), this.disableCookies && t.setAttribute("data-disable-cookies", !0), this.chatlioDebug && t.setAttribute("data-chatlio-debug", !0), this.startHidden && t.setAttribute("data-start-hidden", !0), t.setAttribute("data-widget-id", this.widgetID), document.body.appendChild(t)
        }
    };
    customElements.define("chatlio-widget", o);
})();