import { Item, CodeRefactorFrontEnd } from '@/code-refactor-frontend';

describe('CodeRefactorFrontEnd', () => {

  // ============================================
  // ÖRNEK TEST - Bu testi düzeltmeniz gerekiyor
  // ============================================
  it('should decrease quality by 1 for normal items', () => {
    const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 20)]);
    const items = codeRefactor.updateQuality();
    expect(items[0].quality).toBe(19);  // Beklenti: Kalite 19 olmalı (20 - 1)
  });

  // ============================================
  // NORMAL ÜRÜN TESTLERİ
  // ============================================
  describe('Normal Items', () => {

    it('should decrease sellIn by 1 each day', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].sellIn).toBe(9); // 10'dan 9'a düşmeli
    });

    it('should decrease quality by 1 each day', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(19); // 20'den 19'a düşmeli
    });

    it('should decrease quality twice as fast after sellIn date passes', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 0, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(18); // Tarih geçtiği için 2 puan birden düşmeli (20 - 2)
    });

    it('should never have negative quality', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 0)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(0); // 0'ın altına düşmemeli
    });
  });

  // ============================================
  // VINTAGE FRAMEWORK TESTLERİ
  // ============================================
  describe('Vintage Framework', () => {
    it('should increase quality as it gets older', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Vintage Framework', 10, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(21); // Değeri artmalı
    });
    it('should never have quality more than 50', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Vintage Framework', 10, 50)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(50); // 50'yi geçemez
    });
    it('should increase quality twice as fast after sellIn date', () => {
      // Süresi geçmiş bir vintage ürün (sellIn <= 0)
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Vintage Framework', 0, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(22); // Süresi geçmiş bir vintage ürün 20 + 2 artmalı
    });
  });

  // ============================================
  // ETERNAL CODE LICENSE TESTLERİ
  // ============================================
  describe('Eternal Code License', () => {
    it('should never decrease in quality', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Eternal Code License', 10, 80)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(80); // Kalitenin hem 80 olduğu, hem de düşmediğini karşılar
    });

    it('should never change sellIn value', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Eternal Code License', 10, 80)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].sellIn).toBe(10); // Sabit
    });
  });

  // ============================================
  // CONFERENCE PASS TESTLERİ
  // ============================================
  describe('Conference Pass for DevDays 2025', () => {
    it('should increase quality by 1 when more than 10 days left', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Conference Pass for DevDays 2025', 11, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(21);
    });
    it('should increase quality by 2 when 10 days or less left', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Conference Pass for DevDays 2025', 10, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(22); // +2 artış
    });
    it('should increase quality by 3 when 5 days or less left', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Conference Pass for DevDays 2025', 5, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(23); // +3 artış
    });
    it('should drop quality to 0 after the conference', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Conference Pass for DevDays 2025', 0, 20)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    it('should never have quality more than 50', () => {
      const codeRefactor = new CodeRefactorFrontEnd([new Item('Conference Pass for DevDays 2025', 5, 49)]);
      const items = codeRefactor.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  // ============================================
  // DEPRECATED LIBRARY TESTLERİ (YENİ ÖZELLİK)
  // ============================================
  describe('Deprecated Library', () => {
    it.todo('should decrease quality twice as fast as normal items');
    it.todo('should decrease quality 4x as fast after sellIn date');
    it.todo('should never have negative quality');
  });

});
