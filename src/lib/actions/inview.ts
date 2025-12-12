export function inview(
    node: HTMLElement,
    options: IntersectionObserverInit = {}
): { destroy: () => void } {
    let observer: IntersectionObserver;

    const defaultOptions: IntersectionObserverInit = {
        rootMargin: '-100px',
        threshold: 0,
        ...options
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                node.dispatchEvent(new CustomEvent('inview'));
                observer.unobserve(node);
            }
        });
    }, defaultOptions);

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
