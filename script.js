clicks();
const add = document.querySelector('.add-button');

add.addEventListener('click', () => {
    const wrapper = document.querySelector(".wrapper");
    if (wrapper.classList.contains('hidden')) {
        wrapper.classList.remove("hidden");
    }
    const close = wrapper.querySelector('.close');
    close.addEventListener('click', () => {
        wrapper.classList.add('hidden');
    })
})

document.forms.addCard.onsubmit = function () {
    const title = this.title.value;
    const author = this.author.value;
    const company = this.company.value;
    const card = document.querySelector('.card');
    const newCard = card.cloneNode(true);
    newCard.querySelector(".card__title").innerText = title;
    newCard.querySelector(".card__author").innerText = author;
    newCard.querySelector(".card__company").innerText = company;
    newCard.querySelector(".card__like").classList.remove("card__like_fill");
    newCard.querySelector(".card__like span").textContent = 0;
    document.querySelector('.cards').append(newCard);
    clicks();
    document.querySelector(".wrapper").classList.add('hidden');
    return false;
};

function clicks() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const like = card.querySelector('.card__like');
        const deleteButton = card.querySelector('.card__delete');
        const counterElement = like.querySelector('span');

        let counter = counterElement.textContent;

        like.addEventListener('click', () => {
            if (like.querySelector('svg.card__like_fill')) {
                render(--counter, counterElement);
                like.querySelector('svg').classList.remove("card__like_fill");
                return;
            }
            render(++counter, counterElement);
            like.querySelector('svg').classList.add("card__like_fill");
        });


        if (like.querySelector('svg.card__like_fill')) {
            like.addEventListener('click', () => {
                render(--counter, counterElement);
                like.querySelector('svg').classList.remove("card__like_fill");
            });
        }

        deleteButton.addEventListener('click', () => {
            card.remove();
        });
    });

    const render = (counter, counterElement) => counterElement.innerText = counter;
}