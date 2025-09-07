'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, ShoppingCart, Heart } from 'lucide-react'
import { Product } from '@/context/CartContext'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: (product: Product) => void
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null

  const handleAddToCart = () => {
    onAddToCart(product)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
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
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center hidden">
                      <span className="text-6xl font-bold text-white">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(product.rating || 0)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium text-gray-700">
                      {product.rating || 4.5} out of 5
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Price</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-primary-600">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₹{(product.price * 1.2).toLocaleString()}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        20% OFF
                      </span>
                    </div>
                  </div>

                  {/* Specifications */}
                  {product.specifications && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Customizable Options */}
                  {product.customizableOptions && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Customization Options</h3>
                      <div className="space-y-2">
                        {product.customizableOptions.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-gray-600">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAddToCart}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 border-2 border-gray-300 hover:border-primary-500 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <Heart size={20} className="text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
