# CodeRefactorFrontEnd - Teknik Değerlendirme

Bu proje, yazılım geliştirici adayları için hazırlanmış bir kod refactoring değerlendirmesidir.

## 🎯 Görev

Bu projede bir envanter yönetim sistemi bulunmaktadır. `CodeRefactorFrontEnd` sınıfı, farklı ürünlerin kalite ve satış süresi (sellIn) değerlerini günlük olarak güncellemektedir.

**Sizden beklenen:**
1. Mevcut kodu anlamak
2. Kodu daha okunabilir ve sürdürülebilir hale getirmek (refactor)
3. Yeni özellik eklemek: **"Deprecated Library"** desteği
4. Kapsamlı unit testler yazmak

---

## 📋 İş Kuralları

Sistemdeki tüm ürünler için geçerli kurallar:

### Genel Kurallar
- Her gün `sellIn` değeri 1 azalır
- Her gün `quality` değeri 1 azalır
- `sellIn` tarihi geçtikten sonra `quality` **2 kat hızlı** azalır
- `quality` asla negatif olamaz
- `quality` asla 50'den fazla olamaz

### Özel Ürünler

| Ürün Adı | Özel Davranış |
|----------|---------------|
| **Vintage Framework** | Zamanla kalitesi **artar** (eskidikçe değerlenir) |
| **Eternal Code License** | Asla satılmaz, kalitesi **hiç değişmez** (her zaman 80) |
| **Conference Pass for DevDays 2025** | Etkinliğe yaklaştıkça değeri artar: <br>• 10 gün kala: +2 kalite/gün <br>• 5 gün kala: +3 kalite/gün <br>• Etkinlik sonrası: kalite = 0 |

### 🆕 Yeni Özellik: Deprecated Library

**"Deprecated Library"** ürünü için destek eklemeniz gerekmektedir:

- Normal ürünler gibi davranır **AMA**
- Kalitesi **2 kat hızlı** düşer (günde -2)
- `sellIn` geçtikten sonra **4 kat hızlı** düşer (günde -4)

⚠️ **Not:** Bu özellik henüz implement edilmemiştir. Testlerde bu ürün için yorum satırı bulunmaktadır.

---

## 🚀 Başlangıç

### Kurulum

```sh
npm install
```

### Testleri Çalıştırma

Jest ile:
```sh
npm run test:jest
```

Watch modunda:
```sh
npm run test:jest:watch
```

Vitest ile:
```sh
npm run test:vitest
```

Mocha ile:
```sh
npm run test:mocha
```

### Golden Master Test

```sh
npx ts-node test/golden-master-text-test.ts
```

Belirli gün sayısı ile:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

---

## ✅ Değerlendirme Kriterleri

Çalışmanız aşağıdaki kriterlere göre değerlendirilecektir:

1. **Kod Kalitesi**: Okunabilirlik, temiz kod prensipleri
2. **Refactoring**: Mevcut kodun iyileştirilmesi
3. **Test Coverage**: Yazılan testlerin kapsamlılığı
4. **Yeni Özellik**: "Deprecated Library" implementasyonu
5. **TypeScript**: Tip güvenliği ve doğru tip kullanımı

---

## ⚠️ Önemli Kurallar

1. `Item` sınıfını **DEĞİŞTİRMEYİN** (legacy sistem kısıtlaması)
2. `items` property'sini **DEĞİŞTİRMEYİN**
3. Mevcut iş mantığını **BOZMADAN** refactor yapın

---

## 📁 Proje Yapısı

```
├── app/
│   └── code-refactor-frontend.ts    # Ana sınıf (refactor edilecek)
├── test/
│   ├── jest/                        # Jest test dosyaları
│   ├── vitest/                      # Vitest test dosyaları
│   ├── mocha/                       # Mocha test dosyaları
│   └── golden-master-text-test.ts   # Onay testi
└── README.md
```

Başarılar! 🍀


