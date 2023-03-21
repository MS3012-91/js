const cardContainer = document.createElement('div');
cardContainer.classList.add ('cardContainer');

const imgContainer = document.createElement ('div')
imgContainer.classList.add ('imgContainer');
imgContainer.setAttribute ('src', '#');
imgContainer.setAttribute ('alt', 'img');
cardContainer.appendChild (imgContainer);

const infoContainer = document.createElement('div')
infoContainer.classList.add ('infoContainer')
cardContainer.appendChild (infoContainer)

const pap = document.createElement('p')
pap.classList = ('userFullname')
pap.innerText = ('Maria Sheinyk')
infoContainer.appendChild(pap)

const btnContainer = document.createElement('div')
btnContainer.classList.add ('btnContainer')
infoContainer.appendChild (btnContainer)

const statFb = document.createElement ('div')
statFb.classList.add = ('statFb')
statFb.innerText = ('1250')
btnContainer.appendChild (statFb)

const statInsta = document.createElement ('div')
statFb.classList.add = ('statInsta')
statFb.innerText = ('520')
btnContainer.appendChild (statInsta)

const statTel = document.createElement ('div')
statFb.classList.add = ('statTel')
statFb.innerText = ('520')
btnContainer.appendChild (statTel)

console.log (cardContainer)