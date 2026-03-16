'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Minus, Plus, Trash, CheckCircle } from '@phosphor-icons/react'
import { useCart } from '@/lib/cart'
import { motion } from 'framer-motion'

type PaymentMethod = 'linepay' | 'cod' | 'transfer'

interface FormData {
  name: string
  phone: string
  email: string
  address: string
  note: string
  payment: PaymentMethod
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  address?: string
}

export default function CheckoutPage() {
  const { items, totalPrice, updateQty, removeItem, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    note: '',
    payment: 'transfer',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = '請輸入姓名'
    if (!form.phone.trim()) newErrors.phone = '請輸入電話'
    if (!form.email.trim()) newErrors.email = '請輸入 Email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email 格式不正確'
    if (!form.address.trim()) newErrors.address = '請輸入收件地址'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    clearCart()
  }

  const updateField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle size={64} weight="fill" className="text-green-600 mx-auto mb-4" />
          <h1 className="font-[family-name:var(--font-outfit)] text-2xl font-bold mb-2">訂單已送出</h1>
          <p className="text-stone-500 mb-6">
            感謝您的訂購！我們將盡快處理您的訂單。如有任何問題，歡迎與我們聯繫。
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors"
          >
            繼續購物
          </Link>
        </motion.div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-stone-400 text-lg mb-4">購物車是空的</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium"
          >
            <ArrowLeft size={16} /> 前往購物
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[100dvh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-8">
        <ArrowLeft size={16} /> 繼續購物
      </Link>

      <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold mb-8">結帳</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left - Cart items */}
        <div className="lg:col-span-7">
          <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">購物車商品</h2>
          <div className="space-y-3">
            {items.map(item => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-white rounded-xl border border-stone-100">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={item.product.img}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.product.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{item.product.subtitle}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQty(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-stone-100 text-stone-600 hover:bg-stone-200"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-stone-100 text-stone-600 hover:bg-stone-200"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-[var(--color-accent)]">
                        NT$ {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <button onClick={() => removeItem(item.product.id)} className="text-stone-400 hover:text-red-500">
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-stone-200">
            <span className="text-stone-600">訂單總計</span>
            <span className="text-2xl font-bold">NT$ {totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:col-span-5">
          <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">訂購資訊</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">姓名 *</label>
              <input
                type="text"
                value={form.name}
                onChange={e => updateField('name', e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] ${errors.name ? 'border-red-400' : 'border-stone-200'}`}
                placeholder="您的姓名"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">電話 *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => updateField('phone', e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] ${errors.phone ? 'border-red-400' : 'border-stone-200'}`}
                placeholder="0912-345-678"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={e => updateField('email', e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] ${errors.email ? 'border-red-400' : 'border-stone-200'}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">收件地址 *</label>
              <input
                type="text"
                value={form.address}
                onChange={e => updateField('address', e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] ${errors.address ? 'border-red-400' : 'border-stone-200'}`}
                placeholder="完整收件地址"
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">備註</label>
              <textarea
                value={form.note}
                onChange={e => updateField('note', e.target.value)}
                rows={3}
                className="w-full px-3 py-2.5 border border-stone-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] resize-none"
                placeholder="特殊需求或備註..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">付款方式</label>
              <div className="space-y-2">
                {([
                  { value: 'linepay' as PaymentMethod, label: 'LINE Pay', note: '即將開放' },
                  { value: 'cod' as PaymentMethod, label: '貨到付款', note: '' },
                  { value: 'transfer' as PaymentMethod, label: '銀行轉帳', note: '' },
                ]).map(option => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      form.payment === option.value
                        ? 'border-[var(--color-accent)] bg-red-50/50'
                        : 'border-stone-200 hover:border-stone-300'
                    } ${option.value === 'linepay' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={option.value}
                      checked={form.payment === option.value}
                      onChange={e => option.value !== 'linepay' && updateField('payment', e.target.value)}
                      disabled={option.value === 'linepay'}
                      className="accent-[var(--color-accent)]"
                    />
                    <span className="text-sm">{option.label}</span>
                    {option.note && <span className="text-xs text-stone-400 ml-auto">{option.note}</span>}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] text-white py-3.5 rounded-lg font-medium text-lg hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97] mt-6"
            >
              送出訂單 - NT$ {totalPrice.toLocaleString()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
