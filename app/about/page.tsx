import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[var(--color-accent)] tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl font-bold leading-tight">
              關於安平平安
            </h1>
            <p className="text-stone-500 mt-6 leading-relaxed">
              安平平安以台南安平在地文化為核心，將劍獅守護精神融入現代文創設計。
              我們相信，每一件手工藝品都是一段故事的傳承，每一次購買都是對在地文化的支持。
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://appa99.com/store/images/appa99/s_products/2054_5.jpg"
                alt="劍獅曼陀羅"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold mb-12">我們的理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '文化傳承',
                desc: '劍獅是安平最具代表性的守護象徵。我們致力於將這份四百年的文化底蘊，透過現代設計語彙重新詮釋，讓更多人認識安平的獨特魅力。',
              },
              {
                title: '手作溫度',
                desc: '每一件商品都經過精心設計與製作。從石載平安系列到十二劍獅磁鐵，我們堅持品質與細節，讓每位收藏者都能感受到手作的溫暖。',
              },
              {
                title: '在地連結',
                desc: '我們的實體門市位於台南安平，歡迎旅人到訪體驗。除了商品，我們也提供劍獅塔羅占卜、文創課程等豐富的在地文化體驗。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold mb-4">探索安平平安的世界</h2>
        <p className="text-stone-500 max-w-lg mx-auto mb-8">
          從十二劍獅到石載平安，每一件作品都是安平文化的縮影。
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[var(--color-accent-light)] transition-colors active:scale-[0.97]"
        >
          前往商城 &rarr;
        </Link>
      </section>
    </div>
  )
}
