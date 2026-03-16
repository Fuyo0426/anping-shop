'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* Image container — fixed aspect, neutral bg fallback */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-100 border border-stone-100">
          {!imgError ? (
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain p-3 group-hover:scale-[1.06] transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            /* Fallback: styled placeholder */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 gap-2">
              <div className="w-10 h-10 relative opacity-30">
                <Image src="/logo.jpg" alt="" fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-[10px] text-stone-400 text-center px-2 leading-tight">{product.name}</span>
            </div>
          )}

          {/* Price badge on hover */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-semibold bg-[var(--color-accent)] text-white px-2 py-0.5 rounded-full">
              NT$ {product.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-2.5 px-0.5">
          <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-snug truncate">
            {product.name}
          </p>
          <p className="text-xs text-stone-400 mt-0.5 truncate">{product.subtitle}</p>
          <p className="text-sm font-bold text-[var(--color-accent)] mt-1">
            NT$ {product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
