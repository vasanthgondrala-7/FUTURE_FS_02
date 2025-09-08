'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface HeaderProps {
  onCartClick: () => void
}

export default function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { state } = useCart()

  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Nxt Mart
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a
              whileHover={{ y: -2 }}
              href="#home"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#products"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Products
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#about"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#contact"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Contact
            </motion.a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
