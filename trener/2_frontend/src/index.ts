console.log("Hello jQuery");

// $('#title').text('Hello jQuery')

function add(x: any, y: any) {
  return x + y;
}

// document.getElementById("test")!.textContent = "123";

class Person {
  // name:string

//   #secret = "tajne";

  constructor(public name: string) {
    // this.name = name
    debugger
  }

  probujemy(){
    throw new Error('ups...')
  }

  get costam() {
    return "";
  }

  static DRIVING_AGE = 18;
}

new Person('Baska!').probujemy()