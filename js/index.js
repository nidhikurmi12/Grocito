   //data of card
        const items = [ 
            {
                image: './image/noodles-images/1.jpg',
                title: 'Egg Noodles',
                weight: '149 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/2.jpg',
                title: ' Soba Noodles',
                weight: '150 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/3.jpg',
                title: 'Ramen Noodles',
                weight: '140 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/4.jpg',
                title: 'Rice Stick Noodles',
                weight: '147 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/5.jpg',
                title: 'Udon Noodles',
                weight: '144 g',
                price: '₹125',
                link: '#'
            },
            {
                image: './image/noodles-images/6.jpg',
                title: ' Shirataki Noodles',
                weight: '145 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/7.jpg',
                title: ' Somen Noodles',
                weight: '146 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/8.jpg',
                title: ' Harusame Noodles',
                weight: '149 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/9.jpg',
                title: ' Tokoroten Noodles',
                weight: '146 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/10.jpg',
                title: 'Hiyamugi NoodlesUdon Noodles',
                weight: '148 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/1.jpg',
                title: 'Egg Noodles',
                weight: '149 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/2.jpg',
                title: ' Soba Noodles',
                weight: '150 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/3.jpg',
                title: 'Ramen Noodles',
                weight: '140 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/4.jpg',
                title: 'Rice Stick Noodles',
                weight: '147 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/5.jpg',
                title: 'Udon Noodles',
                weight: '144 g',
                price: '₹125',
                link: '#'
            },
            {
                image: './image/noodles-images/6.jpg',
                title: ' Shirataki Noodles',
                weight: '145 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/7.jpg',
                title: ' Somen Noodles',
                weight: '146 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/8.jpg',
                title: ' Harusame Noodles',
                weight: '149 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/9.jpg',
                title: ' Tokoroten Noodles',
                weight: '146 g',
                price: '₹125',
                link: '#'
            },
             {
                image: './image/noodles-images/10.jpg',
                title: 'Hiyamugi NoodlesUdon Noodles',
                weight: '148 g',
                price: '₹125',
                link: '#'
            },
        ];

        // Get the element where we want to rander a card
        const container = document.querySelector('.product-list');

        // Loop through the items array
        items.forEach(item => {
            // Create a new div element
            const cardElement = document.createElement('div');

          cardElement.classList.add("card");


            // Set the innerHTML of the new div element to the card HTML
            cardElement.innerHTML = `
              
                <div class="card-img">
                 <img src="${item.image}" alt="">
                 </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.weight}</p>
                        <div class="card-footer">
                            <p>${item.price}</p>
                            <a href="${item.link}">ADD</a>
                        </div>
                    </div>
    
            `;

            // Append the new div element to the container
            container.appendChild(cardElement);
        });