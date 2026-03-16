import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold mb-3">安平平安</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              傳承安平在地文化，以劍獅守護精神，打造獨特文創商品。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">快速連結</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">商城</Link>
              <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-800 transition-colors">關於我們</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">聯絡資訊</h4>
            <p className="text-sm text-stone-500">台南市安平區</p>
            <p className="text-sm text-stone-500 mt-1">
              <a href="https://appa99.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 transition-colors">
                appa99.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-stone-200 text-center">
          <p className="text-xs text-stone-400">Copyright 安平平安. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
