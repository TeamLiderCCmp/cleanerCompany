document.addEventListener("DOMContentLoaded", function () {
  const prices = {
    standardApartment: 50,
    deepApartment: 100,
    standardOffice: 70,
    deepOffice: 150,
    windowSingle: 80,
    windowMulti: 120,
    carpetCleaning: 60,
    furnitureCleaning: 90,
  };

  function calculateTotal() {
    let total = 0;

    for (const service in prices) {
      const input = document.getElementById(service);
      const area = parseFloat(input?.value) || 0; // Защита от ошибок
      total += area * prices[service];
    }

    document.getElementById("totalCost").textContent = total.toFixed(2);
  }

  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("input", calculateTotal);
  });
});
