const shopBtn = document.querySelectorAll('.shop__btn');
const shopItem = document.querySelectorAll('.shop-item');

let active = 'shop__btn--active';

shopBtn.forEach((item) => {
    item.addEventListener('click', () => {
        resetActiveBtn();
        showItem(item.id);
        item.classList.add('shop__btn--active');
    });
})

function resetActiveBtn(){
    shopBtn.forEach((item) => {
        item.classList.remove('shop__btn--active');
    });
}

function showItem(newBtn){
    active = newBtn;
    shopItem.forEach((item) => {
        if(item.classList.contains(active)){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide')
        }
    });
}