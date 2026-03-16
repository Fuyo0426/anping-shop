'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Minus, Plus, ShoppingBag, Lightning } from '@phosphor-icons/react'
import { getProductById, getCategoryById, getProductsByCategory } from '@/data/products'
import { useCart } from '@/lib/cart'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 text-lg">找不到此商品</p>
          <Link href="/shop" className="mt-4 inline-flex items-center gap-2 text-[var(--color-accent)] font-medium">
            <ArrowLeft size={16} /> 返回商城
          </Link>
        </div>
      </div>
    )
  }

  const category = getCategoryById(product.category)
  const related = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const handleBuyNow = () => {
    addItem(product, qty)
    window.location.href = '/checkout'
  }

  return (
    <div className="min-h-[100dvh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href={category ? `/shop/${category.id}` : '/shop'} className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-8">
        <ArrowLeft size={16} /> {category ? category.name : '返回商城'}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-7"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </motion.div>

        {/* Right - Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5"
        >
          {category && (
            <Link href={`/shop/${category.id}`} className="text-xs font-medium text-[var(--color-accent)] tracking-wider uppercase">
              {category.name}
            </Link>
          )}
          <h1 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold mt-2">
            {product.name}
          </h1>
          <p className="text-stone-400 mt-1">{product.subtitle}</p>

          <div className="mt-6">
            <span className="text-3xl font-bold text-[var(--color-accent)]">
              NT$ {product.price.toLocaleString()}
            </span>
          </div>

          {/* Quantity selector */}
          <div className="mt-8">
            <p className="text-sm font-medium text-stone-600 mb-3">數量</p>
            <div className="inline-flex items-center border border-stone-200 rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors rounded-l-lg"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors rounded-r-lg"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 space-y-3">
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-medium transition-all active:scale-[0.97] ${
                added
                  ? 'bg-green-600 text-white'
                  : 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white'
              }`}
            >
              <ShoppingBag size={20} />
              {added ? '已加入購物車' : '加入購物車'}
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white py-3.5 rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
            >
              <Lightning size={20} weight="fill" />
              立即購買
            </button>
          </div>

          {/* Product info */}
          <div className="mt-10 pt-8 border-t border-stone-200">
            <h3 className="text-sm font-semibold mb-3">商品資訊</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone-400">商品編號</dt>
                <dd className="font-medium">{product.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">分類</dt>
                <dd className="font-medium">{category?.name || '-'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">類型</dt>
                <dd className="font-medium">{product.subtitle}</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold mb-6">同系列商品</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
