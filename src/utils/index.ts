export function formatCurrency(amount: number) {
  if (isNaN(amount)) {
    console.warn('Valor no numérico recibido en formatCurrency:', amount);
    return 'RD$0.00';
  }

  try {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    console.error('Error al formatear moneda:', error);
    return 'RD$' + amount.toFixed(2);
  }
}
