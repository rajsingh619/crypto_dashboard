const loadingELement = document.createElement('div');
loadingELement.className = 'h-[169px] w-[674px] bg-[#CFDBFE]'

const loadingElementText = document.createElement('div')
loadingElementText = 'Please Wait...'

loadingELement.appendChild(loadingElementText)

document.getElementById('main_content').appendChild(loadingELement)