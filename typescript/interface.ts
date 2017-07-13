interface sticker{
  lable: string;
}

let printLable = function(stick: sticker): void {
  console.log(stick.lable);
}

let stickOne = {
  "lable": "This is my first sticker."
}

printLable(stickOne);

interface searchSub{
  (orig: string, target: string): boolean;
}

let mysearch: searchSub = function(orig: string, target: string): boolean {
  return orig.search(target) !== -1;
}

console.log(mysearch("wonderful", "won"));

/*
 * a car
 */

interface wheel{
  wheelInch: number,
  wheelColor?: string
}

interface lamp{
  lampColor: string
}

interface car extends wheel, lamp{
  name: string,
  maker: string,
  year: number
}

export class carObject implements car{
  name: string;
  maker: string;
  year: number;

  wheelInch: number;
  wheelColor: string;

  lampColor: string;

  constructor(name: string = "noName", maker: string = "BMW", year: number = 2000){
    this.name = name;
    this.maker = maker;
    this.year = year;
  }

  print(): void {
    console.log("This car is: $this.name , it made by $this.maker in $this.year.");
  }
}

let myCar = new carObject("Tiger", "Benz" , 2008);
myCar.print();