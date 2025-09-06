// Currency conversion utility
export class CurrencyConverter {
  private static exchangeRates: { [key: string]: number } = {
    'USD_TO_EUR': 0.85,
    'EUR_TO_USD': 1.18,
    'USD_TO_GBP': 0.79,
    'GBP_TO_USD': 1.27,
    'EUR_TO_GBP': 0.93,
    'GBP_TO_EUR': 1.08
  };

  static convert(amount: number, fromCurrency: string, toCurrency: string): number {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    const rateKey = `${fromCurrency}_TO_${toCurrency}`;
    const rate = this.exchangeRates[rateKey];
    
    if (!rate) {
      console.warn(`Exchange rate not found for ${rateKey}`);
      return amount;
    }

    return Math.round(amount * rate * 100) / 100; // Round to 2 decimal places
  }

  static formatPrice(amount: number, currency: string): string {
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£'
    };

    const symbol = symbols[currency] || currency;
    return `${symbol} ${amount.toFixed(2)}`;
  }

  static getDisplayPrice(amount: number, originalCurrency: string, displayCurrency: string): string {
    const convertedAmount = this.convert(amount, originalCurrency, displayCurrency);
    return this.formatPrice(convertedAmount, displayCurrency);
  }
}
