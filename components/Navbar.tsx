'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, X, List, Plus, Minus, Trash } from '@phosphor-icons/react'
import { useCart } from '@/lib/cart'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { items, totalItems, totalPrice, updateQty, removeItem } = useCart()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - seal image */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 relative shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="安平平安印章"
                  fill
                  className="object-contain rounded-sm"
                  sizes="36px"
                />
              </div>
              <span className="font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                安平平安
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-stone-600 hover:text-[var(--color-text)] transition-colors">
                首頁
              </Link>
              <Link href="/shop" className="text-sm font-medium text-stone-600 hover:text-[var(--color-text)] transition-colors">
                商城
              </Link>
              <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-[var(--color-text)] transition-colors">
                關於我們
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {/* Cart button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-stone-600 hover:text-[var(--color-text)] transition-colors"
                aria-label="購物車"
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-accent)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-stone-600"
                aria-label="選單"
              >
                <List size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2">
                <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-stone-600">首頁</Link>
                <Link href="/shop" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-stone-600">商城</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-stone-600">關於我們</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart slide-in panel */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/30 z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--color-bg)] z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-stone-200">
                <h2 className="font-[family-name:var(--font-outfit)] text-lg font-semibold">購物車</h2>
                <button onClick={() => setCartOpen(false)} className="p-1 text-stone-500 hover:text-stone-800">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <p className="text-stone-400 text-sm text-center mt-12">購物車是空的</p>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <div key={item.product.id} className="flex gap-3 p-3 bg-white rounded-lg">
                        <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                          <Image
                            src={item.product.img}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.product.name}</p>
                          <p className="text-xs text-stone-400">{item.product.subtitle}</p>
                          <p className="text-sm font-semibold text-[var(--color-accent)] mt-1">NT$ {item.product.price}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button onClick={() => removeItem(item.product.id)} className="text-stone-400 hover:text-red-500">
                            <Trash size={16} />
                          </button>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center rounded bg-stone-100 text-stone-600 hover:bg-stone-200"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center rounded bg-stone-100 text-stone-600 hover:bg-stone-200"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="p-4 border-t border-stone-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-stone-600">合計</span>
                    <span className="text-lg font-bold">NT$ {totalPrice.toLocaleString()}</span>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={() => setCartOpen(false)}
                    className="block w-full bg-[var(--color-accent)] text-white text-center py-3 rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
                  >
                    前往結帳
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
