const products = [
    {
        id:'1',
        name: 'Top Lycra',
        price: 20000,
        category: 'Mujer',
        img: './toplila.jpeg',
        stock: 2,
        description: 'Top lycra Dual Power'
    },
    {id: '2', name:'Top Ehren', price: 15000,stock:2, category:'Mujer',description:'Top Ehren lycra de alta calidad', img:'./toplycra.jpeg'},
    {id: '3', name:'Top Ehren', price: 15000,stock:3, category:'Mujer',description:'Top Ehren lycra de alta calidad', img:'./topLycralila.jpeg'},
    {id: '4', name:'Remera Dual', price: 20000,stock:4, category:'Hombre',description:'Remera lycra de alta calidad', img:'./hombre2.jpeg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}