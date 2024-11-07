import IfishDish from './IfishDish.png'
import IfishSalad from './IfishSalad.png'
import IfriedCrab from './IfriedCrab.png'
import IfriedRiceEgg from './IfriedRiceEgg.png'
import Iseabeas from './Iseabeas.png'
import Isommelierwine from './Isommelierwine.png'
import Itofustir from './Itofustir.png'
import NegwusiEba from './NegwusiEba.png'
import Newedu from './Newedu.png'
import NfishPepperSoup from './NfishPepperSoup.png'
import NfriedRice from './NfriedRice.png'
import NgrilledMeatChicken from './NgrilledMeatChicken.png'
import Njollof from './Njollof.png'
import Nnkwobi from './Nnkwobi.png'
import Nogbono from './Nogbono.png'
import NokroSoup from './NokroSoup.png'
import NricceBeans from './NricceBeans.png'
import NricePlantain from './NricePlantain.png'
import NwhiteSoup from './NwhiteSoup.png'
import NyamAfang from './NyamAfang.png'
import vegetableSoup from './vegetableSoup.png'
import waiters from './waiters.png'
import brownies from './brownies.png'
import Burger from './Burger.png'
import chips from './chips.png'
import chocolateBiscuits from './chocolateBiscuits.png'
import cookies from './cookies.png'
import donouts from './donouts.png'
import pizza from './pizza.png'
import Risoles from './Risoles.png'
import snackCover from './snackCover.png'
import waitress from './waitress.png'
import backgroundImage from './backgroundImage.png'

export const assets = {
    IfishDish, IfishSalad,IfriedCrab,IfriedRiceEgg,Iseabeas,Isommelierwine,Itofustir, NegwusiEba, Newedu, NfishPepperSoup, NfriedRice, NgrilledMeatChicken, Njollof, Nnkwobi, Nogbono, NokroSoup, NricceBeans, NricePlantain, NwhiteSoup, NyamAfang, vegetableSoup, waiters, brownies, Burger, chips, chocolateBiscuits, cookies, donouts, pizza, Risoles, snackCover, waitress, backgroundImage
}

export const menu_list = [
    {
        name: "Nigerian",
        image: NyamAfang
    },
    {
        name: "Inter-continental",
        image: IfriedCrab
    },
    {
        name: "Snacks",
        image: snackCover
    }
]

export const foodList = [
    {
        _id: "1",
        name: "Fish Dish",
        image: IfishDish,
        price: "20,000",
        description: "Indulge in the rich flavors of our expertly crafted fish dishes, featuring tender, perfectly seasoned fillets cooked to perfection.",
        category: "Inter-continental"
    },
    {
        _id: "2",
        name: "Fish Salad",
        image: IfishSalad,
        price: "22,500",
        description: "Perfect for those seeking a light yet satisfying meal, our Fish Salad brings together flavors from the sea and garden to create a harmonious, wholesome bite that’s bursting with taste and health benefits.",
        category: "Inter-continental"
    },
    {
        _id: "3",
        name: "Fried Crab",
        image: IfriedCrab,
        price: "26,500",
        description: "Dive into the rich, savory world of fried crab—delicately seasoned, perfectly crispy on the outside, and tender on the inside.",
        category: "Inter-continental"
    },
    {
        _id: "4",
        name: "Egwusi and Eba",
        image: NegwusiEba,
        price: "6,500",
        description: "Experience the rich, savory delight of Egwusi paired with the smooth, hearty texture of Eba—a timeless duo that brings warmth and tradition to every bite.",
        category: "Nigerian delicacy",
    },
    {
        _id: "5",
        name: "Ewedu Soup",
        image: Newedu,
        price: "4,300",
        description: "a luscious, nutrient-rich delight that complements any dish with its unique texture and irresistible flavor. Savory, fresh, and unforgettable.",
        category: "Nigerian delicacy"
    },
    {
        _id: "6",
        name: "Fish Pepper-soup",
        image: NfishPepperSoup,
        price: "6,000",
        description: "A fiery, flavorful delight, Fish Pepper-soup is the perfect balance of spice and satisfaction, guaranteed to warm both your heart and your soul.",
        category: "Nigerian delicacy"
    },
    {
        _id: "7",
        name: "Fried rice",
        image: NfriedRice,
        price: "5,000",
        description: "Fried Rice is a delightful explosion of flavors in every bite—savor the perfect blend of spices, tender veggies, and a satisfying kick that makes every meal memorable.",
        category: "Nigerian delicacy"
    },
    {
        _id: "8",
        name: "Risoles",
        image: Risoles,
        price: "2,000",
        description: " the perfect bite-sized treat, bursting with delicious fillings that deliver a satisfying crunch and a burst of flavor with every bite.",
        category: "Snack"
    },
    {
        _id: "9",
        name: "Pizza",
        image: pizza,
        price: "9,000",
        description: "A crispy, cheesy masterpiece topped with irresistible flavors in every bite.",
        category: "Snack"
    },
    {
        _id: "10",
        name: "Donout",
        image: donouts,
        price: "3,300",
        description: "Soft, sweet, and irresistibly indulgent, each bite of this delightful treat offers a perfect balance of fluffy texture and sugary bliss.",
        category: "Snack"
    },
    {
        _id: "11",
        name: "Cookies",
        image: cookies,
        price: "2,800",
        description: "Warm, sweet, and irresistibly crunchy, these cookies are the perfect treat to satisfy your cravings and add a little sweetness to your day.",
        category: "Snack"
    },
    {
        _id: "12",
        name: "Grilled Chicken",
        image: NgrilledMeatChicken,
        price: "15,500",
        description: "the perfect combination of crispy on the outside, tender on the inside, and irresistibly delicious with every bite.",
        category: "Nigerian delicacy"
    },
    {
        _id: "13",
        name: "Jollof rice",
        image: Njollof,
        price: "4,000",
        description: "A tantalizing burst of bold, smoky flavors in every bite, Jollof Rice is the ultimate comfort food that brings people together with its irresistible taste and vibrant, mouthwatering appeal.",
        category: "Nigerian delicacy"
    },
    {
        _id: "14",
        name: "Nkwobi",
        image: Nnkwobi,
        price: "10,000",
        description: "Nkwobi is the perfect indulgence for those who crave a taste of authentic Nigerian spice and tradition.",
        category: "Nigerian delicacy"
    },
    {
        _id: "15",
        name: "Rice & Egg",
        image: IfriedRiceEgg,
        price: "3,500",
        description: "A simple yet satisfying combination, Rice & Egg is the ultimate comfort food, offering a deliciously smooth and fulfilling experience in every bite.",
        category: "Inter-continental"
    },
    {
        _id: "16",
        name: "Sea Beans",
        image: Iseabeas,
        price: "11,000",
        description: "A crunchy, irresistible snack packed with bold flavors that tease the taste buds and leave you craving more",
        category: "Inter-continental"
    },
    {
        _id: "17",
        name: "Sommelier Wine",
        image: Isommelierwine,
        price: "200,000",
        description: "Indulge in the elegance of Sommelier Wine, where every sip offers a refined burst of flavor and sophistication, perfect for elevating any occasion.",
        category: "Inter-continental"
    },
    {
        _id: "19",
        name: "Chocolate Biscuit",
        image: chocolateBiscuits,
        price: "1,500",
        description: "A delightful treat that’s the perfect balance of crisp and creamy",
        category: "Snack"
    },
    {
        _id: "20",
        name: "Chips",
        image: chips,
        price: "3,000",
        description: "Crispy, crunchy, and irresistibly addictive, Chips are the perfect snack to satisfy your cravings with every bite.",
        category: "Snack"
    },
    {
        _id: "21",
        name: "Burger",
        image: Burger,
        price: "6,500",
        description: "Juicy, flavorful, and packed with all the right toppings, a Burger is the perfect bite of indulgence, bringing together bold flavors in every mouthwatering layer",
        category: "Snack"
    },
    {
        _id: "22",
        name: "Brownies",
        image: brownies,
        price: "6,500",
        description: "Decadently rich, perfectly fudgy, and irresistibly chocolaty—every bite of these brownies is a moment of pure indulgence",
        category: "Snack"
    },
    {
        _id: "23",
        name: "Ogbono Soup",
        image: Nogbono,
        price: "6,500",
        description: "Indulge in the rich, hearty goodness of Ogbono Soup—packed with bold flavors and a silky texture that will leave you craving more with every bite.",
        category: "Nigerian delicacy"
    },

    {
        _id: "24",
        name: "Okro Soup",
        image: NokroSoup,
        price: "5,500",
        description: "A deliciously satisfying blend of rich flavors and silky textures, Okro Soup is the perfect harmony of spice and comfort in every bit.",
        category: "Nigerian delicacy"
    },

    {
        _id: "25",
        name: "Rice & Beans",
        image: NricceBeans,
        price: "2,000",
        description: "Rice & Beans is the perfect balance of rich textures and bold taste, ideal for those craving a wholesome, fulfilling meal.",
        category: "Nigerian delicacy"
    },

    {
        _id: "26",
        name: "Rice & Plantain",
        image: NricePlantain,
        price: "4,000",
        description: "A dynamic duo that blends the savory goodness of perfectly cooked rice with the sweet, crispy allure of golden plantains",
        category: "Nigerian delicacy"
    },

    {
        _id: "27",
        name: "White Soup",
        image: NwhiteSoup,
        price: "8,000",
        description: "White Soup is the perfect comfort dish, bursting with rich flavors that leave you craving more.",
        category: "Nigerian delicacy"
    },

    {
        _id: "28",
        name: "Afang Soup",
        image: NyamAfang,
        price: "6,000",
        description: "A luscious, hearty masterpiece that packs bold flavors and an irresistible richness,",
        category: "Nigerian delicacy"
    },

    {
        _id: "29",
        name: "Vegetable Soup",
        image: vegetableSoup,
        price: "7,000",
        description: "A wholesome, hearty delight packed with vibrant flavors and nourishing goodness, Vegetable Soup is the perfect balance of freshness and comfort in every bowl.",
        category: "Nigerian delicacy"
    },

    {
        _id: "30",
        name: "Tofu Stir",
        image: Itofustir,
        price: "10,000",
        description: "A mouthwatering mix of crispy, golden tofu tossed in a medley of bold flavors and fresh veggies—Tofu Stir is a satisfying, guilt-free delight for every bite",
        category: "Inter-continental"
    },

]