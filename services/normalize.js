const unmask = (value) => {
  const unmask = value.replace(/[^+\d]/g, "");
  return unmask;
};

export default unmask;
