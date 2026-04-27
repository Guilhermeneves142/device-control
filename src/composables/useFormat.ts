export default function useFormat() {
  function formatNumberToReal(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return {
    formatNumberToReal,
  };
}
