import { Product } from '@/context/CartContext'

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 7499,
    image: "/images/headphones.png",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    rating: 4.2,
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Noise Cancellation": "Active",
      "Weight": "250g"
    },
    customizableOptions: ["Color: Black, White, Blue", "Ear Pad Material: Leather, Memory Foam"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 11999,
    image: "/images/smartwatch.png",
    description: "Advanced fitness tracking with heart rate monitor and GPS navigation.",
    category: "Electronics",
    rating: 4.7,
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      "GPS": "Built-in"
    },
    customizableOptions: ["Strap Color: Black, Silver, Gold", "Watch Face: Digital, Analog"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 999,
    image: "/images/tshirt.png",
    description: "Comfortable and sustainable cotton t-shirt available in multiple colors.",
    category: "Clothing",
    rating: 4.5,
    specifications: {
      "Material": "100% Organic Cotton",
      "Fit": "Regular",
      "Care": "Machine washable",
      "Weight": "180 GSM"
    },
    customizableOptions: ["Size: S, M, L, XL", "Color: White, Black, Navy, Gray"]
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 1099,
    image: "/images/bottle.png",
    description: "Insulated water bottle that keeps drinks cold for 24 hours.",
    category: "Home & Garden",
    rating: 4.3,
    specifications: {
      "Capacity": "750ml",
      "Material": "Stainless Steel",
      "Insulation": "24 hours cold",
      "Lid Type": "Screw top"
    },
    customizableOptions: ["Color: Silver, Black, Blue", "Size: 500ml, 750ml, 1L"]
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 2999,
    image: "/images/chargingpad.png",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics",
    rating: 4.6,
    specifications: {
      "Power Output": "15W",
      "Compatibility": "Qi-enabled devices",
      "LED Indicator": "Yes",
      "Material": "Silicone"
    },
    customizableOptions: ["Color: Black, White", "Power: 10W, 15W"]
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 549,
    image: "/images/yogamat.png",
    description: "Non-slip yoga mat with carrying strap, perfect for home workouts.",
    category: "Sports",
    rating: 4.4,
    specifications: {
      "Thickness": "6mm",
      "Material": "PVC",
      "Size": "183 x 61 cm",
      "Weight": "2.5kg"
    },
    customizableOptions: ["Thickness: 3mm, 6mm, 8mm", "Color: Purple, Blue, Green"]
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    price: 1999,
    image: "/images/mugs.png",
    description: "Set of 4 beautiful ceramic coffee mugs, microwave and dishwasher safe.",
    category: "Home & Garden",
    rating: 4.8,
    specifications: {
      "Capacity": "350ml each",
      "Material": "Ceramic",
      "Set Size": "4 mugs",
      "Microwave Safe": "Yes"
    },
    customizableOptions: ["Color: White, Cream, Gray", "Pattern: Solid, Floral, Geometric"]
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    price: 5999,
    image: "/images/speaker.png",
    description: "Waterproof portable speaker with 360-degree sound and 12-hour battery.",
    category: "Electronics",
    rating: 4.1,
    specifications: {
      "Power": "20W",
      "Battery Life": "12 hours",
      "Water Resistance": "IPX7",
      "Connectivity": "Bluetooth 5.0"
    },
    customizableOptions: ["Color: Black, Red, Blue", "Power: 15W, 20W, 25W"]
  }
]

export const categories = ["All", "Electronics", "Clothing", "Home & Garden", "Sports"]
