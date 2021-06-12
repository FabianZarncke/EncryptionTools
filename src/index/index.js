const tabs = document.querySelectorAll('[data-tab-target]') //loading tabs
const tabContents = document.querySelectorAll('[data-tab-content]') //loading tab contents
const tabButtons = document.querySelectorAll('[data-tab-button]') //loading tab buttons
const homeInfoModal = document.getElementById('homeInfoModal') //loading homeInfoModal
const homeInfoModalOpenBTB = document.getElementById('homeInfoModalOpenBTB') //loading homeInfoModalOpenBTN
const homeInfoModalCloseBTN = document.getElementById('homeInfoModalCloseBTN') //loading homeInfoModalCloseBTN

//tabLayout functionality
tabs.forEach(tab => {
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

//---

//tabButtons functionality
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        //trigger click event on corresponding tab
        document.querySelector('[data-tab-target=' + CSS.escape(btn.dataset.tabButton) + ']').click()
    })
})

//---

//homeInfoModal functionality
homeInfoModalOpenBTB.onclick = function() {
    homeInfoModal.style.display = "block"
}

homeInfoModalCloseBTN.onclick = function() {
    homeInfoModal.style.display = "none"
}

window.onclick = function() {
    if (event.target == homeInfoModal) {
        homeInfoModal.style.display = "none"
    }
}