'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Storefront } from '@phosphor-icons/react'
import { categories, products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const featuredCategories = [
  { ...categories[0], span: 'col-span-2 row-span-2' },
  { ...categories[2], span: 'col-span-1 row-span-1' },
  { ...categories[4], span: 'col-span-1 row-span-1' },
  { ...categories[12], span: 'col-span-1 row-span-2' },
  { ...categories[8], span: 'col-span-1 row-span-1' },
  { ...categories[5], span: 'col-span-1 row-span-1' },
]

const hotProducts = products.slice(0, 6)

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      {/* Hero - Split Screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-medium text-[var(--color-accent)] tracking-widest uppercase mb-4">Since Anping</p>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-text)]">
              安平平安
            </h1>
            <p className="text-lg text-stone-500 mt-6 leading-relaxed max-w-md">
              傳承安平在地文化，以劍獅守護精神，打造獨特文創商品。
              每一件作品都承載著安平四百年的歷史記憶。
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
              >
                <Storefront size={20} />
                逛商城
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-stone-300 text-stone-600 px-6 py-3 rounded-lg font-medium hover:border-stone-400 hover:text-stone-800 transition-colors"
              >
                品牌故事
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right - product image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 row-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/3713_1.jpg"
                  alt="綠巨人劍獅"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 40vw"
                  priority
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/2943_1.jpg"
                  alt="五行平安石組"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/2809_1.jpg"
                  alt="劍獅塔羅占卜"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid - Asymmetric */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold mb-8">
          探索分類
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {featuredCategories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/shop/${cat.id}`}
              className={`${cat.span} relative rounded-xl overflow-hidden group`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
              />
              <div className="absolute inset-0 bg-stone-200">
                {products.filter(p => p.category === cat.id)[0] && (
                  <Image
                    src={products.filter(p => p.category === cat.id)[0].img}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-[family-name:var(--font-outfit)] font-semibold text-lg">{cat.name}</h3>
                <p className="text-white/70 text-xs mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hot Products - Horizontal scroll */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold">
              熱銷商品
            </h2>
            <Link href="/shop" className="text-sm text-[var(--color-accent)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto">
            {hotProducts.map((product, i) => (
              <div key={product.id} className="w-[200px] sm:w-[240px] shrink-0">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story - Full width, left image right text */}
      <section className="bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://appa99.com/store/images/appa99/s_products/2153_1.jpg"
                alt="劍獅曼陀羅"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <p className="text-sm font-medium text-[var(--color-accent)] tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold mb-6">
                安平的守護者
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                劍獅是安平最具代表性的守護神獸。傳說鄭成功的士兵將盾牌與寶劍懸掛於門口，
                形成劍獅的形象，用以驅邪避凶、守護家宅平安。
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                安平平安以這份四百年的文化底蘊為靈感，結合現代設計思維，
                將劍獅的守護精神轉化為每一件精心製作的文創商品。
                從石載平安到十二劍獅系列，每一件作品都是安平文化的當代詮釋。
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:gap-3 transition-all"
              >
                探索商品 <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold mb-4">
            帶一份平安回家
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto mb-8">
            探索安平劍獅文創系列，為生活注入守護的力量。
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
          >
            <Storefront size={24} />
            前往商城
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
