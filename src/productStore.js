
const productsArray = [
    {
        id: "1",
        title: "Caffe",
        price: 3.99
    },
    {
        id: "2",
        title: "Fanta",
        price: 5.99
    },
    {
        id: "3",
        title: "Cola",
        price: 8.99
    },
    {
        id: "4",
        title: "Pepsi",
        price: 7.99
    },

    
]

function getProductData(id) {

    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Il prodotto non esiste con ID: " + id);
        return undefined; 

    }

    return productData;
}

export { productsArray, getProductData} ;