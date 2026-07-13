const panels = document.querySelectorAll('.panel')



const colors = ['#4a1f9b', '#e41627', '#18e018', '#b14114', '#000000']

panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active')


                        const h3 = panel.querySelector('h3');
        h3.style.color = colors[index];


    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}