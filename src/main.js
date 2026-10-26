// Keep the copyright year current without a rebuild
document.querySelectorAll( `[data-year]` ).forEach( el => el.textContent = new Date().getFullYear() )

// Pause artwork when offscreen or the tab is hidden, resumes where it left off
const art = document.querySelector( `.art` )
let art_visible = true

const sync_art = () => art.classList.toggle( `paused`, !art_visible || document.hidden )

new IntersectionObserver( ( [ entry ] ) => {
    art_visible = entry.isIntersecting
    sync_art()
} ).observe( art )

document.addEventListener( `visibilitychange`, sync_art )
