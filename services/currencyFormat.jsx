// eslint-disable-next-line import/no-anonymous-default-export
export default (num) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
    .format(num)
    .replace(/\xA0/g, " "); //remover o nbsp automarico que vem do Intl
};
