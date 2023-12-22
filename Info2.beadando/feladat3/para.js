class Parallelogram {
    constructor() {}

    calculateAreaWithHeightAndSide(height, side) {
        return height * side;
    }

    calculateAreaWithAngleAndSides(angle, side1, side2) {
        const radians = angle * (Math.PI / 180);
        return side1 * side2 * Math.sin(radians);
    }
}

function promptForParallelogramProperties() {
    let height, side, angle, otherSide;
  
    do {
        height = parseFloat(prompt("Kérem, adja meg a paralelogramma magasságát:") || "0");
    } while (height <= 0 || isNaN(height));
  
    do {
        side = parseFloat(prompt("Kérem, adja meg a paralelogramma egyik oldalát:") || "0");
    } while (side <= 0 || isNaN(side));
  
    do {
        angle = parseFloat(prompt("Kérem, adja meg a paralelogramma szögét fokban:") || "0");
    } while (angle <= 0 || isNaN(angle));
  
    do {
        otherSide = parseFloat(prompt("Kérem, adja meg a paralelogramma másik oldalát:") || "0");
    } while (otherSide <= 0 || isNaN(otherSide));
  
    return [height, side, angle, otherSide];
}

function runParallelogramCalculation() {
    const parallelogram = new Parallelogram();

    const [height, side, angle, otherSide] = promptForParallelogramProperties();

    const areaWithHeightAndSide = parallelogram.calculateAreaWithHeightAndSide(height, side);
    console.log('Terület magassággal és oldallal:', areaWithHeightAndSide);

    const areaWithAngleAndSides = parallelogram.calculateAreaWithAngleAndSides(angle, side, otherSide);
    console.log('Terület szöggel és két oldallal:', areaWithAngleAndSides);
}

// Elindítja a paralelogramma kalkulációt
runParallelogramCalculation();
