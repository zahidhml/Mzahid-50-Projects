// NodeList of all content panes (images in this demo)
const contents = document.querySelectorAll('.content')

// NodeList of navigation items (tab buttons). Selector matches your HTML structure.
const listItems = document.querySelectorAll('nav li')

// Attach a click handler to each tab item.
// `idx` is used to show the corresponding content pane at the same index.
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        // diagnostic: report which tab was clicked and counts
        console.log('mobile-tab-navigation: tab clicked', idx, 'contents:', contents.length, 'nav items:', listItems.length)
        // hide any currently visible content and active tab
        hideAllContents()
        hideAllItems()

        // mark this tab as active
        item.classList.add('active')

        // safety: ensure a matching content element exists before accessing it
        if (contents[idx]) {
            contents[idx].classList.add('show')
        }
    })
})

// Helper: hide all content panes
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

// Helper: deactivate all nav items
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}