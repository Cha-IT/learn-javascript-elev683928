function makePrinter() {
  const outputEl = (typeof document !== 'undefined') ? document.getElementById('output') : null;

  function write(line = '') {
    if (outputEl) {
      outputEl.innerText += line + "\n";
    } else {
      console.log(line);
    }
  }

  return function printAll() {
    for (let i = 0; i < 1; i++) {
      write("");
    }

    let navn = "Malte";
    write("Hei " + navn);

    let tall1 = 4;
    let tall2 = 3;
    write(tall1 + " + " + tall2 + " = " + (tall1 + tall2));
    write(tall1 + " - " + tall2 + " = " + (tall1 - tall2));
    write(tall1 + " * " + tall2 + " = " + (tall1 * tall2));
    write(tall1 + " / " + tall2 + " = " + (tall1 / tall2));

  let alder = 16;
    if (alder < 18) {
      write("Du får ikke kjøpe øl");
    } else {
      write("Du får kjøpe øl");
    }

    if (alder < 18) {
      write("Du kan kjøpe barnebillett");
    } else if (alder < 67) {
      write("Du skal kjøpe voksenbillett");
    } else {
      write("Du kan kjøpe honnørbillett");
    }
  };
}

const printAll = makePrinter();
setTimeout(printAll, 1);
