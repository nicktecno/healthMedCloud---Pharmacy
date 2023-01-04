import api from "./api";

import { saveToken } from "./auth";
import storageBrowser from "./storage";

async function setStatusUser() {
  try {
    let response = await api.get("/customer/get");

    storageBrowser("setItem", "anonymous", response.data.anonymous);
  } catch (err) {
  } finally {
    return false;
  }
}

/**
 * Get data cart in storage and save on API
 */

async function handleCartStoraged() {
  let cart = JSON.parse(storageBrowser("getItem", "cart"));

  if (cart) {
    cart.map((seller) =>
      seller.items.map(async (item) => {
        try {
          await api.post("/customer/checkout/cart/add", {
            product: item.product,
            quantity: item.quantity,
            seller_info: seller.seller_info,
          });
        } catch {
        } finally {
        }
      })
    );

    storageBrowser("removeItem", "cart");
  }
}

/**
 *
 * @param {Object} fields fields to login (email, password)
 * @param {Text} redirect path to redirect after login
 * @param {Bolean} cart If true, get cart in sessionStorage and send to API
 */

export default async function loginService(fields, redirect, cart) {
  try {
    const response = await api.post("/customer/login", fields);

    saveToken(response.data.token);

    if (cart) {
      await handleCartStoraged();
    }

    await setStatusUser();

    if (redirect) {
      window.location.href = { redirect };
    }
  } catch (err) {
  } finally {
    return false;
  }
}
