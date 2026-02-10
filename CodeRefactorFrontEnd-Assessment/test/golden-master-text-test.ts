import { Item, CodeRefactorFrontEnd } from '../app/code-refactor-frontend';

console.log("OMGHAI!")

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Vintage Framework", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Eternal Code License", 0, 80), //
  new Item("Eternal Code License", -1, 80),
  new Item("Conference Pass for DevDays 2025", 15, 20),
  new Item("Conference Pass for DevDays 2025", 10, 49),
  new Item("Conference Pass for DevDays 2025", 5, 49),
  // TODO: "Deprecated Library" desteği henüz implement edilmedi
  new Item("Deprecated Library", 3, 6)];


const codeRefactor = new CodeRefactorFrontEnd(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  codeRefactor.updateQuality();
}
