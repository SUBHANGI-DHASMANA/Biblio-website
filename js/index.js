const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", function () {
  document.querySelector("body").style.overflow = "scroll";
  loader.style.display = "none";
});

// data

const product = [
    {
        id: 1,
        title: "The Monk who sold his Ferrari",
        category: "Self-Help",
        price: 350,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/Book1.jpg",
                type: "image/jpeg",
                thumbnails: {
                    small: {
                        img: "../img/Book1.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/Book1.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/Book1.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 2,
        title: "The 5 AM Club",
        category: "Self-Help",
        price: 400,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book2.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book2.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book2.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book2.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 3,
        title: "The Psychology of Money",
        category: "Self-Help",
        price: 430,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book3.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book3.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book3.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book3.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 4,
        title: "Deep Work",
        category: "Self-Help",
        price: 640,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book4.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book4.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book4.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book4.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 5,
        title: "Harry Potter",
        category: "Fantasy",
        price: 720,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book5.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book5.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book5.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book5.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 6,
        title: "The Alchemist",
        category: "Fantasy",
        price: 250,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book6.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book6.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book6.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book6.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 7,
        title: "Attitude Everything",
        category: "Self-Help",
        price: 200,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book7.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book7.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book7.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book7.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 8,
        title: "Ikigai",
        category: "Self-Help",
        price: 400,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book8.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book8.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book8.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book8.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 9,
        title: "Diary of a Wimpy kid",
        category: "Fantasy",
        price: 900,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book9.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book9.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book9.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book9.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 10,
        title: "The daughter from the wishing tree",
        category: "Fantasy",
        price: 1000,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book10.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book10.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book10.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book10.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 11,
        title: "Doctor Sleep",
        category: "Mystery",
        price: 300,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book11.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book11.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book11.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book11.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 12,
        title: "One of Us is Lying",
        category: "Mystery",
        price: 500,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book12.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book12.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book12.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book12.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 13,
        title: "Book Lovers",
        category: "Romance",
        price: 100,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book13.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book13.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book13.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book13.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 14,
        title: "House of Sky and breath",
        category: "Fantasy",
        price: 800,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book14.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book14.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book14.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book14.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    },
    {
        id: 15,
        title: "Abandonded in Death",
        category: "Mystery",
        price: 600,
        image: [
            {
                width: 1000,
                height: 639,
                img: "../img/book15.jpg",
                thumbnails: {
                    small: {
                        img: "../img/book15.jpg",
                        width: 56,
                        height: 36
                    },
                    large: {
                        img: "../img/book15.jpg",
                        width: 801,
                        height: 512
                    },
                    full: {
                        img: "../img/book15.jpg",
                        width: 3000,
                        height: 3000
                    }
                }
            }
        ]
    }
]

// data

const sectionCenter = document.querySelector(".products-container");
const container = document.querySelector(".genres");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(product);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="product col">
    <div class="product-container">
      <img src="${item.image[0].img}" class="product-img img"/>
     
      <div class="product-icons prod-page-icons">
        <button class="product-cart-btn product-icon" data-id="${item.id}">
          <i class="fas fa-shopping-cart prod-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${item.title}</p>
      <h4 class="product-price">₹${item.price}</h4>
    </footer>
  </article>`;
    });
    document.querySelector("body").style.display = "grid";
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
    const categories = product.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
        ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="genres-btn" data-id=${category}>
      ${category}
      </button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".genres-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = product.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(product);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}


const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) return element
    throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2))
    return formattedPrice
}

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item)
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
    } else {
        storageItem = []
    }
    return storageItem
}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}


const addToCartDOM = ({ id, name, price, image, amount }) => {
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);
    article.innerHTML = `
      <img src="${image}"
                class="cart-item-img"
                alt="${name}"
              />    
              <div>
                <h4 class="cart-item-name">${name}</h4>
                <p class="cart-item-price">${formatPrice(price)}</p>
                <button class="cart-item-remove-btn" data-id="${id}">remove</button>
              </div>
            
              <div>
                <button class="cart-item-increase-btn" data-id="${id}">
                  <i class="fas fa-chevron-up"></i>
                </button>
                <p class="cart-item-amount" data-id="${id}">${amount}</p>
                <button class="cart-item-decrease-btn" data-id="${id}">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>
    `;
    cartItemsDOM.appendChild(article);
};

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);

    if (!item) {
        let product = findProduct(id);
        // add item to the the
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        // add item to the DOM;
        addToCartDOM(product);
    } else {
        // update values
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
        const newAmount = items.find((value) => value.dataset.id === id);
        newAmount.textContent = amount;
    }
    // add one to the item count
    displayCartItemCount();
    // display cart totals
    displayCartTotal();
    // set cart in local storage

    setStorageItem('cart', cart);
    //more stuff coming up
    openCart();
};
function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);
    cartItemCountDOM.textContent = amount;
}
function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount);
    }, 0);
    cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}
function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
}
function removeItem(id) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
}
function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}
function decreaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}

function setupCartFunctionality() {
    cartItemsDOM.addEventListener('click', function (e) {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id;
        // remove
        if (element.classList.contains('cart-item-remove-btn')) {
            removeItem(id);
            // parent.parentElement.remove();
            element.parentElement.parentElement.remove();
        }
        // increase
        if (parent.classList.contains('cart-item-increase-btn')) {
            const newAmount = increaseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }
        // decrease
        if (parent.classList.contains('cart-item-decrease-btn')) {
            const newAmount = decreaseAmount(parentID);
            if (newAmount === 0) {
                removeItem(parentID);
                parent.parentElement.parentElement.remove();
            } else {
                parent.previousElementSibling.textContent = newAmount;
            }
        }
        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart', cart);
    });
}
const init = () => {
    // display amount of cart items
    displayCartItemCount();
    // display total
    displayCartTotal();
    // add all cart items to the dom
    displayCartItemsDOM();
    // setup cart functionality
    setupCartFunctionality();
};
init();

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');

toggleCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('show');
});

const openCart = () => {
    cartOverlay.classList.add('show');
};

const display = (products, element, filters) => {
    // display products
    element.innerHTML = products
      .map((product) => {
        const { id, name, image, price } = product;
        return ` <article class="product">
            <div class="product-container">
              <img src="${image}" class="product-img img" alt="${name}" />
             
              <div class="product-icons">
                <a href="product.html?id=${id}" class="product-icon">
                  <i class="fas fa-search"></i>
                </a>
                <button class="product-cart-btn product-icon" data-id="${id}">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <footer>
              <p class="product-name">${name}</p>
              <h4 class="product-price">${formatPrice(price)}</h4>
            </footer>
          </article> `;
      })
      .join('');
  
    if (filters) return;
  
    element.addEventListener('click', function (e) {
      const parent = e.target.parentElement;
      if (parent.classList.contains('product-cart-btn')) {
        addToCart(parent.dataset.id);
      }
    });
  };
