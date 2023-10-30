const { lots } = require("./my-lots");

// Current price of the stock in USD
const currentPrice = 41.23;

// Change the amount to sell in USD
const amountToSell = 10000;

const sharesToSell = Math.floor(amountToSell / currentPrice);

function offsetGainsWithLosses(lots, sharesToSell) {
  // Calculate the gain or loss for each lot
  const lotsWithGainOrLoss = lots.map((lot) => {
    return {
      ...lot,
      gainOrLoss: (currentPrice - lot.cost) * lot.quantity,
    };
  });

  // Separate gains and losses
  const gains = lotsWithGainOrLoss.filter((lot) => lot.gainOrLoss > 0);
  const losses = lotsWithGainOrLoss.filter((lot) => lot.gainOrLoss < 0);

  // Sort gains in descending order and losses in ascending order
  gains.sort((a, b) => b.gainOrLoss - a.gainOrLoss);
  losses.sort((a, b) => a.gainOrLoss - b.gainOrLoss);

  const selectedLots = [];
  const totalGainOrLossArray = [];

  let totalGainOrLoss = 0;

  while (sharesToSell > 0 && (gains.length > 0 || losses.length > 0)) {
    if ((totalGainOrLoss > 0 || gains.length <= 0) && losses.length > 0) {
      selectedLots.push(losses[0]);
      sharesToSell -= losses[0].quantity;
      totalGainOrLoss += losses[0].gainOrLoss;
      losses.shift();
    } else if (gains.length > 0) {
      if (losses.length <= 0) {
        selectedLots.push(gains[gains.length - 1]);
        sharesToSell -= gains[gains.length - 1].quantity;
        totalGainOrLoss += gains[gains.length - 1].gainOrLoss;
        gains.pop();
      } else {
        selectedLots.push(gains[0]);
        sharesToSell -= gains[0].quantity;
        totalGainOrLoss += gains[0].gainOrLoss;
        gains.shift();
      }
    }
    totalGainOrLossArray.push(totalGainOrLoss);
    console.log({
      sharesToSell,
      totalGainOrLoss,
      selectedLot: selectedLots[selectedLots.length - 1],
    });
  }

  return { selectedLots, totalGainOrLossArray };
}

const { selectedLots, totalGainOrLossArray } = offsetGainsWithLosses(
  lots,
  sharesToSell
);

// Print the selected lots to sell
console.log("Selected Lots to Minimize Total Gain:");
selectedLots.forEach((lot, index) => {
  console.log(
    `Share #${index + 1} - Date: ${lot.date}, Quantity: ${
      lot.quantity
    }, Gain or Loss: ${lot.gainOrLoss}, Total Gain or Loss: ${
      totalGainOrLossArray[index]
    }`
  );
});

// Calculate the total gain or loss after selling the selected lots
const totalGainOrLoss = selectedLots.reduce((total, lot) => {
  return total + lot.gainOrLoss;
}, 0);

const totalAmount = selectedLots.reduce((total, lot) => {
  return total + lot.quantity * currentPrice;
}, 0);

console.log(
  `Total Gain or Loss: ${totalGainOrLoss}, Total Amount: ${totalAmount}`
);
