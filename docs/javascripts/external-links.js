// Open External Links in New Tab

document.addEventListener('DOMContentLoaded', domContentLoaded)

const observer = new MutationObserver(mutationObserver)

function domContentLoaded() {
    for (const el of document.querySelectorAll('a')) {
        processLink(el)
    }
    observer.observe(document, {
        childList: true,
        subtree: true,
    })
}

function mutationObserver(mutationList) {
    // console.debug('mutationList:', mutationList)
    for (const mutation of mutationList) {
        // console.debug('mutation:', mutation)
        mutation.addedNodes.forEach((el) => {
            // console.debug('el:', el)
            if (el.classList?.contains('md-container')) {
                // console.debug('md-container:', el)
                for (const el of document.querySelectorAll('a')) {
                    processLink(el)
                }
            }
        })
    }
}

function processLink(el) {
    // console.debug('checking el:', el)
    if (el.host !== window.location.host) {
        // console.debug('updating el:', el)
        el.target = '_blank'
        el.rel = 'noopener'
    }
}
