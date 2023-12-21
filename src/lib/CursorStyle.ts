import type { Action } from "svelte/action";

/** Injects `--mouse-x` & `--mouse-y` variables into element style. */
export const cursorStyle: Action<HTMLElement> = (node) => {

    const handleMouseMove = (ev: MouseEvent) => {
        if(ev.defaultPrevented) return;
        if(!node) return;
        const nodeRect = node.getBoundingClientRect();
        node.style.setProperty('--mouse-x', `${ev.clientX - nodeRect.x}px`);
        node.style.setProperty('--mouse-y', `${ev.clientY - nodeRect.y}px`);
    }

    node.addEventListener('mousemove', handleMouseMove);

    return {
        destroy() {
            node.removeEventListener('mousemove', handleMouseMove);
        }
    }

}
