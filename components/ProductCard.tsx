'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
            {product.name}
          </p>
          <p className="text-xs text-stone-400 mt-0.5">{product.subtitle}</p>
          <p className="text-sm font-semibold text-[var(--color-accent)] mt-1">
            NT$ {product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
