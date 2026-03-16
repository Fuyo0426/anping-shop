'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'
import { getCategoryById, getProductsByCategory, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params)
  const cat = getCategoryById(category)
  const categoryProducts = getProductsByCategory(category)

  if (!cat) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 text-lg">找不到此分類</p>
          <Link href="/shop" className="mt-4 inline-flex items-center gap-2 text-[var(--color-accent)] font-medium">
            <ArrowLeft size={16} /> 返回商城
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[100dvh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-6">
        <ArrowLeft size={16} /> 返回商城
      </Link>

      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold">{cat.name}</h1>
        <p className="text-stone-500 mt-2">{cat.description}</p>
        <p className="text-stone-400 text-sm mt-1">{categoryProducts.length} 件商品</p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-400">此分類尚無商品</p>
          <Link href="/shop" className="mt-4 inline-block text-sm text-[var(--color-accent)] font-medium">
            瀏覽其他分類
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}

      {/* Other categories */}
      <div className="mt-16">
        <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold mb-4">其他分類</h2>
        <div className="flex flex-wrap gap-2">
          {categories.filter(c => c.id !== category).slice(0, 8).map(c => (
            <Link
              key={c.id}
              href={`/shop/${c.id}`}
              className="px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 hover:bg-stone-200 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
