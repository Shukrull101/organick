import { img } from '../../shared/assets/img'

const P = (id, name, cat, price, emoji, pic) => ({ id, name, cat, price, old: 20, emoji, img: pic })
export const products = [
  P(1,'Calabrese Broccoli','Vegetable',13,'🥦',img.broccoli), P(2,'Fresh Banana Fruites','Fresh',14,'🍌',img.banana),
  P(3,'White Nuts','Millets',15,'🥜',img.pistachios), P(4,'Vegan Red Tomato','Vegetable',17,'🍅',img.tomato),
  P(5,'Mung Bean','Health',11,'🫘',img.mung), P(6,'Brown Hazelnut','Nuts',12,'🌰',img.hazelnut),
  P(7,'Eggs','Fresh',17,'🥚'), P(8,'Zelco Suji Elaichi Rusk','Fresh',19,'🍞',img.bread),
  P(9,'Fresh Corn','Fresh',17,'🌽'), P(10,'Organic Almonds','Nuts',15,'🥜'),
  P(11,'Health Pistachios','Nuts',13,'🌰',img.pistachios), P(12,'Green Cucumber','Vegetable',11,'🥒'),
]
