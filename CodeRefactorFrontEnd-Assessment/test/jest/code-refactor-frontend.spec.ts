import { Item, CodeRefactorFrontEnd } from '@/code-refactor-frontend';

describe('CodeRefactorFrontEnd', () => {

  // ============================================
  // ÖRNEK TEST - Bu testi düzeltmeniz gerekiyor
  // ============================================
  it('should decrease quality by 1 for normal items', () => {
    const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 20)]);
    const items = codeRefactor.updateQuality();
    expect(items[0].quality).toBe('fixme'); // Bu değeri düzeltin
  });

  // ============================================
  // NORMAL ÜRÜN TESTLERİ
  // ============================================
  describe('Normal Items', () => {
    it.todo('should decrease sellIn by 1 each day');
    it.todo('should decrease quality by 1 each day');
    it.todo('should decrease quality twice as fast after sellIn date passes');
    it.todo('should never have negative quality');
  });

  // ============================================
  // VINTAGE FRAMEWORK TESTLERİ
  // ============================================
  describe('Vintage Framework', () => {
    it.todo('should increase quality as it gets older');
    it.todo('should never have quality more than 50');
    it.todo('should increase quality twice as fast after sellIn date');
  });

  // ============================================
  // ETERNAL CODE LICENSE TESTLERİ
  // ============================================
  describe('Eternal Code License', () => {
    it.todo('should never decrease in quality');
    it.todo('should never change sellIn value');
    it.todo('should always have quality of 80');
  });

  // ============================================
  // CONFERENCE PASS TESTLERİ
  // ============================================
  describe('Conference Pass for DevDays 2025', () => {
    it.todo('should increase quality by 1 when more than 10 days left');
    it.todo('should increase quality by 2 when 10 days or less left');
    it.todo('should increase quality by 3 when 5 days or less left');
    it.todo('should drop quality to 0 after the conference');
    it.todo('should never have quality more than 50');
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
