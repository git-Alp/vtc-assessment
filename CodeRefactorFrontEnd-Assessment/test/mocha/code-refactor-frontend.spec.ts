import { expect } from 'chai';
import { Item, CodeRefactorFrontEnd } from '@/code-refactor-frontend';

describe('CodeRefactorFrontEnd', () => {

  // ============================================
  // ÖRNEK TEST - Bu testi düzeltmeniz gerekiyor
  // ============================================
  it('should decrease quality by 1 for normal items', () => {
    const codeRefactor = new CodeRefactorFrontEnd([new Item('Normal Item', 10, 20)]);
    const items = codeRefactor.updateQuality();
    expect(items[0].quality).to.equal('fixme'); // Bu değeri düzeltin
  });

  // ============================================
  // NORMAL ÜRÜN TESTLERİ
  // ============================================
  describe('Normal Items', () => {
    it('should decrease sellIn by 1 each day');
    it('should decrease quality by 1 each day');
    it('should decrease quality twice as fast after sellIn date passes');
    it('should never have negative quality');
  });

  // ============================================
  // VINTAGE FRAMEWORK TESTLERİ
  // ============================================
  describe('Vintage Framework', () => {
    it('should increase quality as it gets older');
    it('should never have quality more than 50');
    it('should increase quality twice as fast after sellIn date');
  });

  // ============================================
  // ETERNAL CODE LICENSE TESTLERİ
  // ============================================
  describe('Eternal Code License', () => {
    it('should never decrease in quality');
    it('should never change sellIn value');
    it('should always have quality of 80');
  });

  // ============================================
  // CONFERENCE PASS TESTLERİ
  // ============================================
  describe('Conference Pass for DevDays 2025', () => {
    it('should increase quality by 1 when more than 10 days left');
    it('should increase quality by 2 when 10 days or less left');
    it('should increase quality by 3 when 5 days or less left');
    it('should drop quality to 0 after the conference');
    it('should never have quality more than 50');
  });

  // ============================================
  // DEPRECATED LIBRARY TESTLERİ (YENİ ÖZELLİK)
  // ============================================
  describe('Deprecated Library', () => {
    it('should decrease quality twice as fast as normal items');
    it('should decrease quality 4x as fast after sellIn date');
    it('should never have negative quality');
  });

});
