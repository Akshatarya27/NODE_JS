//object property shorthand

const namei = 'Akshat'
const userage = 27

const user = {
    namei,
    age:userage,
    location:'India'
}
console.log(user)


//object destruction

const product = {
    label:"Red Notebook",
    price:3,
    location:'India'
}

// const {label,price,location} = product
// const label = product.label
// console.log(label)

const {label:prodectlabel,price,rating=675} = product
console.log(prodectlabel)
console.log(price)
console.log(rating)