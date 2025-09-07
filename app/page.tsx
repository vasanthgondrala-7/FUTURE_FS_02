'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CartProvider, useCart } from '@/context/CartContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import Cart from '@/components/Cart'
import ProductModal from '@/components/ProductModal'
import Footer from '@/components/Footer'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/context/CartContext'

function HomeContent() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const { addItem } = useCart()

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
  }

  const handleAddToCart = (product: Product) => {
    addItem(product)
    // Optionally close the modal after adding to cart
    // setIsProductModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <ProductGrid onProductClick={handleProductClick} />
      </main>

      <Footer />

      {/* Floating Cart Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
      >
        <ShoppingCart size={24} />
      </motion.button>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default function Home() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  )
}
