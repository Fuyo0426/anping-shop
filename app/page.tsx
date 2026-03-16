'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Storefront, ArrowUpRight } from '@phosphor-icons/react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

// Category cards with accent colors — no dependency on low-res images
const featuredCategories = [
  {
    id: 'jianshi-12',
    name: '十二劍獅',
    sub: '冰箱貼磁鐵系列',
    span: 'md:col-span-2 md:row-span-2',
    bg: 'bg-zinc-900',
    accent: 'text-red-400',
    imgId: '3711',
    external: false,
  },
  {
    id: 'shizai-peace',
    name: '石載平安',
    sub: '平安石系列',
    span: 'md:col-span-1 md:row-span-1',
    bg: 'bg-stone-800',
    accent: 'text-amber-300',
    imgId: '1432',
    external: false,
  },
  {
    id: 'tarot',
    name: '劍獅塔羅牌',
    sub: '占卜諮詢服務',
    span: 'md:col-span-1 md:row-span-1',
    bg: 'bg-red-950',
    accent: 'text-red-300',
    imgId: '2809',
    external: true,
    href: 'https://jianshi-tarot.vercel.app/',
  },
  {
    id: 'jianshi-creative',
    name: '劍獅文創',
    sub: '曼陀羅得獎系列',
    span: 'md:col-span-1 md:row-span-2',
    bg: 'bg-stone-700',
    accent: 'text-stone-300',
    imgId: '2153',
    external: false,
  },
  {
    id: 'anping-400',
    name: '安平400年',
    sub: '建城紀念商品',
    span: 'md:col-span-1 md:row-span-1',
    bg: 'bg-zinc-800',
    accent: 'text-zinc-300',
    imgId: '3711',
    external: false,
  },
  {
    id: 'creative-goods',
    name: '文創商品',
    sub: '安平在地文化',
    span: 'md:col-span-1 md:row-span-1',
    bg: 'bg-red-900',
    accent: 'text-red-200',
    imgId: '1613',
    external: false,
  },
]

const hotProducts = products.slice(0, 8)

export default function Home() {
  return (
    <div className="min-h-[100dvh]">

      {/* ── Hero ── Split Screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: text + logo stamp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 relative shrink-0">
                <Image src="/logo.jpg" alt="安平平安" fill className="object-contain" sizes="56px" priority />
              </div>
              <span className="text-xs tracking-[0.3em] text-stone-400 uppercase font-medium">
                Since Anping · 1999
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)]">
              安平
              <br />
              <span className="text-[var(--color-accent)]">平安</span>
            </h1>

            <p className="text-base text-stone-500 mt-6 leading-relaxed max-w-sm">
              傳承安平在地文化，以劍獅守護精神，<br />
              打造獨特文創商品。每一件作品都承載著<br />
              安平四百年的歷史記憶。
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 font-medium hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97] rounded-lg text-sm"
              >
                <Storefront size={18} weight="fill" />
                逛商城
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-stone-300 text-stone-600 px-6 py-3 font-medium hover:border-stone-500 hover:text-stone-900 transition-colors rounded-lg text-sm"
              >
                品牌故事
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-stone-200">
              {[
                { num: '1999', label: '創立年份' },
                { num: '400+', label: '年安平文化' },
                { num: '35+', label: '文創商品' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-text)]">{s.num}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: product image collage — asymmetric grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: '2fr 1fr', gridTemplateRows: '260px 160px' }}
            >
              {/* Main large image */}
              <div className="row-span-2 relative rounded-2xl overflow-hidden bg-stone-100 group">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/2153_1.jpg"
                  alt="劍獅曼陀羅"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 60vw, 35vw"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white/80 text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">劍獅曼陀羅 — 台南文化局十大得獎</span>
                </div>
              </div>

              {/* Top right */}
              <div className="relative rounded-xl overflow-hidden bg-stone-100 group">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/3713_1.jpg"
                  alt="十二劍獅"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 30vw, 18vw"
                  unoptimized
                />
              </div>

              {/* Bottom right */}
              <div className="relative rounded-xl overflow-hidden bg-stone-100 group">
                <Image
                  src="https://appa99.com/store/images/appa99/s_products/2943_1.jpg"
                  alt="五行平安石組"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 30vw, 18vw"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Grid ── Dark cards, text-first design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold">
            探索分類
          </h2>
          <Link href="/shop" className="text-sm text-[var(--color-accent)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
            全部商品 <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-3">
          {featuredCategories.map((cat, i) => {
            const imgUrl = `https://appa99.com/store/images/appa99/s_products/${cat.imgId}_1.jpg`
            const href = cat.external ? cat.href! : `/shop/${cat.id}`
            const isExternal = cat.external

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={cat.span}
              >
                <Link
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`relative h-full rounded-2xl overflow-hidden group flex flex-col justify-between p-5 ${cat.bg}`}
                >
                  {/* Background image — low opacity, texture only */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <Image
                      src={imgUrl}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>

                  {/* Top: external badge */}
                  {isExternal && (
                    <div className="relative z-10 flex justify-end">
                      <span className="flex items-center gap-1 text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">
                        <ArrowUpRight size={10} />
                        前往專站
                      </span>
                    </div>
                  )}
                  {!isExternal && <div />}

                  {/* Bottom: text */}
                  <div className="relative z-10">
                    <p className={`text-[10px] font-medium tracking-widest uppercase mb-1.5 ${cat.accent}`}>
                      {cat.sub}
                    </p>
                    <h3 className="font-[family-name:var(--font-outfit)] text-white font-bold text-xl leading-tight group-hover:text-[var(--color-accent-light)] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2 text-white/40 text-xs group-hover:text-white/70 transition-colors">
                      <span>探索</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Hot Products ── Horizontal scroll */}
      <section className="py-16 bg-stone-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold">
                熱銷商品
              </h2>
              <p className="text-stone-400 text-sm mt-1">安平文創精選，守護你的每一天</p>
            </div>
            <Link href="/shop" className="text-sm text-[var(--color-accent)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div
            className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4"
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            {hotProducts.map((product, i) => (
              <div key={product.id} className="w-[200px] sm:w-[220px] shrink-0">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Story ── Left image, right text */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-zinc-800"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src="https://appa99.com/store/images/appa99/s_products/2809_1.jpg"
                alt="劍獅塔羅"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
                unoptimized
              />
              {/* Logo watermark */}
              <div className="absolute bottom-5 right-5 w-14 h-14 relative opacity-60">
                <Image src="/logo.jpg" alt="" fill className="object-contain" sizes="56px" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-medium text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                安平的<br />
                <span className="text-[var(--color-accent)]">守護者</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4 text-base">
                劍獅是安平最具代表性的守護神獸。傳說鄭成功的士兵將盾牌與寶劍懸掛於門口，
                形成劍獅的形象，用以驅邪避凶、守護家宅平安。
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8 text-base">
                安平平安以這份四百年的文化底蘊為靈感，結合現代設計思維，
                將劍獅的守護精神轉化為每一件精心製作的文創商品。
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
                >
                  探索商品 <ArrowRight size={14} />
                </Link>
                <Link
                  href="https://jianshi-tarot.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg font-medium text-sm hover:border-zinc-400 hover:text-white transition-colors"
                >
                  劍獅塔羅 <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 lg:p-10 rounded-2xl border border-stone-200 bg-stone-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative shrink-0">
              <Image src="/logo.jpg" alt="安平平安" fill className="object-contain" sizes="48px" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-xl sm:text-2xl font-bold">
                帶一份平安回家
              </h2>
              <p className="text-stone-400 text-sm mt-0.5">安平劍獅文創 · 台南在地守護</p>
            </div>
          </div>
          <Link
            href="/shop"
            className="shrink-0 inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97] text-sm"
          >
            <Storefront size={18} weight="fill" />
            前往商城
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
