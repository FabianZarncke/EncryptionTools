const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

//tabLayout functionality
tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        //remove "active" class from all tabContent's
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        //remove "active" class from all tab's
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        //add "active" class to the chosen tab and tabContent
        tab.classList.add('active')
        target.classList.add('active')
        //set the document title accordingly
        const str = target.id
        const str2 = str.charAt(0).toUpperCase() + str.slice(1)
        document.title = "Zencrypt | " + str2
    })
})