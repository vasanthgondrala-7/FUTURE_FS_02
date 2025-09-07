'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react'
import { Product } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
  }

  const handleProductClick = () => {
    onProductClick(product)
  }

  return (
    <motion.div
      className="card group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={handleProductClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          {/* Fallback Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center hidden">
            <span className="text-4xl font-bold text-white">
              {product.name.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
        >
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                setIsWishlisted(!isWishlisted)
              }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart
                size={20}
                className={isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Eye size={20} className="text-gray-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-gray-700">{product.rating || 4.5}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{(product.price * 1.2).toLocaleString()}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="w-10 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-100"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Free shipping</span>
            <span className="text-green-600 font-medium">In stock</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
