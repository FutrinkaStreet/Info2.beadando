document.getElementById('productsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Az alapértelmezett űrlap küldésének megakadályozása
  
    // Feltöltjük az adatokat egy JavaScript tömbbe
    const products = [
      { name: document.getElementById('product1Name').value, price: parseFloat(document.getElementById('product1Price').value) },
      { name: document.getElementById('product2Name').value, price: parseFloat(document.getElementById('product2Price').value) },
      { name: document.getElementById('product3Name').value, price: parseFloat(document.getElementById('product3Price').value) },
      { name: document.getElementById('product4Name').value, price: parseFloat(document.getElementById('product4Price').value) },
      { name: document.getElementById('product5Name').value, price: parseFloat(document.getElementById('product5Price').value) },
      { name: document.getElementById('product6Name').value, price: parseFloat(document.getElementById('product6Price').value) },
      { name: document.getElementById('product7Name').value, price: parseFloat(document.getElementById('product7Price').value) }
    ];
  
    // Legolcsóbb termékek kiválasztása és rendezése ár szerint
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    const cheapestProducts = sortedProducts.slice(0, 3);
  
    // Véletlenszerűen választunk a legolcsóbb termékek közül
    const randomIndex = Math.floor(Math.random() * cheapestProducts.length);
    const selectedProduct = cheapestProducts[randomIndex];
  
    // Kiválasztott véletlenszerű legolcsóbb termék megjelenítése
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Véletlenszerűen választott legolcsóbb termék:</h2><p>${selectedProduct.name} - Ár: ${selectedProduct.price}</p>`;
// Átlag kiszámítása és megjelenítése
function calculateAverage() {
  const prices = [
      parseFloat(document.getElementById('product1Price').value),
      parseFloat(document.getElementById('product2Price').value),
      parseFloat(document.getElementById('product3Price').value),
      parseFloat(document.getElementById('product4Price').value),
      parseFloat(document.getElementById('product5Price').value),
      parseFloat(document.getElementById('product6Price').value),
      parseFloat(document.getElementById('product7Price').value)
  ];

  let totalPrice = 0;
  let validPricesCount = 0;

  prices.forEach(price => {
      if (!isNaN(price)) {
          totalPrice += price;
          validPricesCount++;
      }
  });

  const averagePrice = validPricesCount > 0 ? totalPrice / validPricesCount : NaN;

  const resultElement = document.getElementById('result');
  const averageParagraph = document.createElement('p');
  averageParagraph.innerHTML = `Átlagár: ${isNaN(averagePrice) ? 'N/A' : averagePrice.toFixed(2)}`;

  resultElement.innerHTML = ''; // Előző eredmények törlése
  resultElement.appendChild(averageParagraph);
}

// Szórás kiszámítása és megjelenítése
function calculateStandardDeviation() {
  const prices = [
      parseFloat(document.getElementById('product1Price').value),
      parseFloat(document.getElementById('product2Price').value),
      parseFloat(document.getElementById('product3Price').value),
      parseFloat(document.getElementById('product4Price').value),
      parseFloat(document.getElementById('product5Price').value),
      parseFloat(document.getElementById('product6Price').value),
      parseFloat(document.getElementById('product7Price').value)
  ];

  // Számítás csak akkor, ha van legalább 1 szám
  if (prices.some(isNaN)) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = '<p>Legalább egy érvénytelen ár!</p>';
      return;
  }

  const averagePrice = prices.reduce((acc, val) => acc + val, 0) / prices.length;

  const squaredDifferences = prices.map(price => Math.pow(price - averagePrice, 2));
  const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / prices.length;
  const standardDeviation = Math.sqrt(variance);

  const resultElement = document.getElementById('result');
  const standardDeviationParagraph = document.createElement('p');
  standardDeviationParagraph.innerHTML = `Szórás: ${isNaN(standardDeviation) ? 'N/A' : standardDeviation.toFixed(2)}`;

  resultElement.innerHTML = ''; // Előző eredmények törlése
  resultElement.appendChild(standardDeviationParagraph);
}

// Átlag gomb eseménykezelője
document.getElementById('calculateAverageButton').addEventListener('click', function() {
  calculateAverage();
});

// Szórás gomb eseménykezelője
document.getElementById('calculateStandardDeviationButton').addEventListener('click', function() {
  calculateStandardDeviation();
});
});
  