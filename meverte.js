const carddata = [{
    img: 'products/1.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/2.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'

},
{
    img: 'products/3.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/4.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/5.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/6.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/7.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'

},
{
    img: 'products/8.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/9.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
},
{
    img: 'products/10.jpg',
    title: 'Vase',
    text: '45$',
    button: 'Add to Basket'
}];

const parentCard = document.getElementById('my-card');

function cardImage(img) {
    return `<img src=${img} class="card-img-top"  alt="..."/>`
}

function cardtitle(title) {
    return `<h3 class="card-title">${title}</h3>`
}

function cardtext(text) {
    return `<p class="card-text">${text}</p> `
}

function cardbutton(button) {
    return `<a href=${button} class="btn btn-primary">Add to Basket</a>`
}

function card(data) {
    return `
    <div class="card">
    ${cardImage(data.img)}

    <div class="card-body">

    ${cardtitle(data.title)}
    ${cardtext(data.text)}
    ${cardbutton(data.button)}


    </div>
    </div>


    `
}

function addcard(data) {
    parentCard.innerHTML+= card(data); 

} 
carddata.forEach(addcard)




    
        
                
                
                