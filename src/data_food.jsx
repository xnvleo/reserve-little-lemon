import greekSalad from "./assets/greek-salad.jpg";
import bruchetta from "./assets/bruchetta.svg";
import lemonDessert from "./assets/lemon-dessert.jpg";

export default [
  {
    id: 1,
    foodname: "Greek Salad",
    // image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
    our Chicago style feta cheese, garnished with crunchy garlic and rosemary
    croutons.`,
    img: greekSalad,
  },
  {
    id: 2,
    foodname: "Bruschetta",
    // image: bruschettaImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been
    smeared with garlic and seasoned with salt and olive oil.`,
    img: bruchetta,
  },
  {
    id: 3,
    foodname: "Lemon Dessert",
    // image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last
    ingredient has been sourced and is as authentic as can be imagined.`,
    img: lemonDessert,
  },

];