export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class CodeRefactorFrontEnd {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {

      const isVintage = item.name === 'Vintage Framework';
      const isPass = item.name === 'Conference Pass for DevDays 2025';
      const isLegendary = item.name === 'Eternal Code License';

      // SellIn öncesi
      if (!isVintage && !isPass) {
        // Normal ürünler ve diğerleri
        if (!isLegendary && item.quality > 0) {
          item.quality--;
        }
      } else {
        // Değeri artan ürünler (Vintage ve Pass)
        if (item.quality < 50) {
          item.quality++;

          if (isPass) {
            if (item.sellIn < 11 && item.quality < 50) {
              item.quality++;
            }
            if (item.sellIn < 6 && item.quality < 50) {
              item.quality++;
            }
          }
        }
      }

      // Gün Eksilmesi
      if (!isLegendary) {
        item.sellIn--;
      }

      // Süresi Dolmuş Ürünler
      if (item.sellIn < 0) {
        if (isVintage) {
          if (item.quality < 50) {
            item.quality++;
          }
        } else if (isPass) {
          item.quality = 0;
        } else if (!isLegendary) {
          if (item.quality > 0) {
            item.quality--;
          }
        }
      }
    }

    return this.items;
  }
}