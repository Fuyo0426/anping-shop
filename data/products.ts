export interface Category {
  id: string
  name: string
  proType: string
  description: string
}

export interface Product {
  id: string
  name: string
  subtitle: string
  price: number
  category: string
  img: string
}

export const categories: Category[] = [
  { id: "jianshi-12", name: "十二劍獅", proType: "3700", description: "安平守護神十二款冰箱貼磁鐵系列" },
  { id: "shengxiao-12", name: "十二生肖", proType: "3661", description: "十二生肖文創商品" },
  { id: "shizai-peace", name: "石載平安", proType: "1402", description: "安平平安系列石載系列" },
  { id: "clothing", name: "衣帽系列", proType: "1497", description: "安平平安系列衣帽" },
  { id: "tarot", name: "劍獅塔羅牌", proType: "2806", description: "劍獅塔羅牌及塔羅諮詢" },
  { id: "snake-peace", name: "捨得平安（蛇）", proType: "3643", description: "2025蛇年捨得平安系列" },
  { id: "dragon-2024", name: "龍平安 2024", proType: "3362", description: "2024龍年平安系列" },
  { id: "anping-400", name: "安平400年", proType: "3002", description: "安平建城400年主題商品" },
  { id: "creative-goods", name: "文創商品", proType: "1552", description: "安平平安系列文創商品" },
  { id: "wood-frame", name: "木製平安框", proType: "1587", description: "安平平安系列木製平安框" },
  { id: "zheng400", name: "鄭成功400", proType: "3337", description: "鄭成功入台400年紀念系列" },
  { id: "rabbit-2023", name: "平安兔 2023", proType: "3072", description: "2023平安兔You系列" },
  { id: "jianshi-creative", name: "劍獅文創", proType: "1543", description: "劍獅系列文創商品" },
  { id: "stone-dagua", name: "大學八目石", proType: "2880", description: "大學八目石系列" },
  { id: "jianshi-clothing", name: "劍獅衣服", proType: "1546", description: "劍獅系列服裝" },
  { id: "confucius-temple", name: "全台首學孔廟", proType: "2359", description: "全台首學孔廟文創系列" },
  { id: "ferris-wheel", name: "劍獅摩天輪", proType: "2432", description: "劍獅摩天輪特色商品" },
  { id: "snail-creative", name: "蝸牛文創", proType: "2813", description: "牛轉乾坤蝸牛文創系列" },
  { id: "memorial-frame", name: "紀念框", proType: "1549", description: "安平平安紀念框系列" },
]

export const products: Product[] = [
  // 十二劍獅系列
  { id: "3713", name: "綠巨人劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3713_1.jpg" },
  { id: "3712", name: "鈴鼓劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3712_1.jpg" },
  { id: "3711", name: "糖果劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3711_1.jpg" },
  { id: "3710", name: "捲毛劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3710_1.jpg" },
  { id: "3709", name: "大鼻孔劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3709_1.jpg" },
  { id: "3708", name: "大眼劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3708_1.jpg" },
  { id: "3707", name: "劍獅伊娘", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3707_1.jpg" },
  { id: "3706", name: "金剛劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3706_1.jpg" },
  { id: "3705", name: "奶瓶劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3705_1.jpg" },
  { id: "3704", name: "有擋頭劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3704_1.jpg" },
  { id: "3703", name: "達摩劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3703_1.jpg" },
  { id: "3702", name: "法力劍獅", subtitle: "冰箱貼磁鐵", price: 110, category: "jianshi-12", img: "https://appa99.com/store/images/appa99/s_products/3702_3.jpg" },

  // 石載平安系列
  { id: "2943", name: "風生水起五行平安石組", subtitle: "五行石組套裝", price: 1540, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/2943_1.jpg" },
  { id: "1888", name: "石載有緣（藍紫色）", subtitle: "結緣平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1888_1.jpg" },
  { id: "1883", name: "石載有緣（紅色）", subtitle: "結緣平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1883_1.jpg" },
  { id: "1574", name: "石載有緣（綠色）", subtitle: "結緣平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1574_1.jpg" },
  { id: "1432", name: "石載平安（黃色）", subtitle: "結平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1432_1.jpg" },
  { id: "1431", name: "石載平安（藍色）", subtitle: "結平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1431_1.jpg" },
  { id: "1430", name: "石載平安（紅色）", subtitle: "結平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1430_1.jpg" },
  { id: "1429", name: "石載平安（白色）", subtitle: "結平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1429_1.jpg" },
  { id: "1428", name: "石載平安（綠色）", subtitle: "結平安石", price: 390, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1428_1.jpg" },
  { id: "1427", name: "石載平安（聚財黃色）", subtitle: "昇能量平安石", price: 225, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1427_1.jpg" },
  { id: "1426", name: "石載平安（背有靠山藍色）", subtitle: "平安石", price: 225, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1426_1.jpg" },
  { id: "1425", name: "石載平安（招財紅色）", subtitle: "延年益壽平安石", price: 225, category: "shizai-peace", img: "https://appa99.com/store/images/appa99/s_products/1425_1.jpg" },

  // 劍獅塔羅牌
  { id: "2931", name: "劍獅塔羅師初階課程", subtitle: "線下課程", price: 10000, category: "tarot", img: "https://appa99.com/store/images/appa99/s_products/2931_5.jpg" },
  { id: "2809", name: "劍獅塔羅占卜諮詢", subtitle: "門市服務", price: 330, category: "tarot", img: "https://appa99.com/store/images/appa99/s_products/2809_1.jpg" },

  // 劍獅文創
  { id: "2153", name: "劍獅曼陀羅-大紅白", subtitle: "2016得獎作品", price: 730, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/2153_1.jpg" },
  { id: "2152", name: "劍獅曼陀羅-大紅金", subtitle: "2016得獎作品", price: 1080, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/2152_1.jpg" },
  { id: "2054", name: "劍獅曼陀羅-丈青金", subtitle: "2016得獎作品", price: 1080, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/2054_5.jpg" },
  { id: "1958", name: "劍獅曼陀羅-帆布袋", subtitle: "2016得獎作品", price: 280, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1958_5.jpg" },
  { id: "1956", name: "劍獅曼陀羅-丈青白", subtitle: "2016得獎作品", price: 730, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1956_1.jpg" },
  { id: "1613", name: "安平平安冰箱貼", subtitle: "磁鐵收藏", price: 50, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1613_1.jpg" },
  { id: "1594", name: "空白劍獅面具", subtitle: "DIY 創作道具", price: 82, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1594_1.jpg" },
  { id: "1565", name: "爽！不爽！筆記本", subtitle: "劍獅插畫文具", price: 100, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1565_4.jpg" },
  { id: "1482", name: "法力劍獅別針", subtitle: "配件", price: 50, category: "jianshi-creative", img: "https://appa99.com/store/images/appa99/s_products/1482_1.jpg" },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getCategoriesWithProducts(): Category[] {
  const categoriesWithProducts = new Set(products.map(p => p.category))
  return categories.filter(c => categoriesWithProducts.has(c.id))
}
