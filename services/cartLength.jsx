const [cartLength, setCartLength] = useState(0);

useEffect(() => {
  setarCarrinho();
}, []);

async function setarCarrinho() {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem(process.env.NEXT_PUBLIC_REACT_APP_NAME)) {
      const { data: responseCustomer } = await api.get(
        "/customer/checkout/cart"
      );
      if (responseCustomer.data !== null) {
        setCartLength(responseCustomer.data.items_qty);
      }
    } else {
      let countItensCart = sessionStorage.getItem("cart")
        ? JSON.parse(sessionStorage.getItem("cart"))
        : [];

      let count = 0;
      let valorTotal = 0;
      // eslint-disable-next-line array-callback-return
      countItensCart.map((item) => {
        // eslint-disable-next-line array-callback-return
        Object.values(item).map((p, i) => {
          // eslint-disable-next-line array-callback-return
          p.map((pq, iq) => {
            count = count + pq.quantity;
            valorTotal = valorTotal + pq.valor * pq.quantity;
          });
        });
      });

      setCartLength(count);
    }
  }
}
