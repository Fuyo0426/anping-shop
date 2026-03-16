'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MagnifyingGlass, Funnel } from '@phosphor-icons/react'
import { categories, products, getCategoriesWithProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)

  const activeCats = getCategoriesWithProducts()

  const filtered = useMemo(() => {
    let result = products
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
      )
    }
    return result
  }, [selectedCategory, searchQuery])

  const selectedCatName = selectedCategory
    ? categories.find(c => c.id === selectedCategory)?.name
    : null

  return (
    <div className="min-h-[100dvh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold">
          {selectedCatName || '所有商品'}
        </h1>
        <p className="text-stone-500 mt-2 text-sm">{filtered.length} 件商品</p>
      </div>

      <div className="flex gap-8">
        {/* Left sidebar - desktop */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="搜尋商品..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)]"
              />
            </div>

            {/* Category filters */}
            <div>
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">分類</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedCategory ? 'bg-[var(--color-accent)] text-white' : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  全部商品
                </button>
                {activeCats.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.id ? 'bg-[var(--color-accent)] text-white' : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile filter toggle */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg active:scale-95 transition-transform"
          >
            <Funnel size={20} />
          </button>
        </div>

        {/* Mobile filter panel */}
        <AnimatePresence>
          {filterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setFilterOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/30 z-40"
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg)] z-50 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto"
              >
                <div className="relative mb-4">
                  <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="搜尋商品..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setSelectedCategory(null); setFilterOpen(false) }}
                    className={`px-3 py-1.5 rounded-full text-sm ${!selectedCategory ? 'bg-[var(--color-accent)] text-white' : 'bg-stone-100 text-stone-600'}`}
                  >
                    全部
                  </button>
                  {activeCats.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setFilterOpen(false) }}
                      className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === cat.id ? 'bg-[var(--color-accent)] text-white' : 'bg-stone-100 text-stone-600'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Products grid - asymmetric */}
        <div className="flex-1">
          {/* Mobile search */}
          <div className="lg:hidden relative mb-6">
            <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="搜尋商品..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400">沒有找到符合的商品</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery('') }}
                className="mt-4 text-sm text-[var(--color-accent)] font-medium"
              >
                清除篩選
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
