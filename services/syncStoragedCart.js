import api from "./api";

export async function syncStoragedCart(callback) {
  if (cart) {
    await cart.map(async (seller) => {
      const { seller_id, store } = seller.seller_info;
      const itemsLength = seller.items.length;

      await seller.items.map(async (item, index) => {
        index += 1;
        try {
          await api.post("/customer/checkout/cart/add", {
            product: item.product,
            quantity: item.quantity,
            seller_info: {
              seller_id,
              offer: item.offer_id,
              store,
            },
          });
        } catch {
        } finally {
          if (itemsLength === index) {
            if (callback) {
              await callback();
            }
          }
        }
      });
    });
  }
}
