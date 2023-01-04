import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($url_key: String!, $id: Int!) {
    children(url_key: $url_key) {
      id
      name
      status
      images {
        path
      }
      attribute_group {
        name
        attributes {
          code
          admin_name
          swatch_type
          options_exist(parent_id: $id) {
            id
            code
            admin_name
            url_image
            swatch_value
          }
        }
      }
      attributes {
        id
        value
        text_value
        configurable
        attribute {
          code
          admin_name
          options {
            id
            code
            admin_name
            url_image
            swatch_value
          }
        }
      }
      parent {
        id
        name
        product_id
        attributes {
          text_value
          id
          value
          configurable
          attribute {
            code
            admin_name
            options {
              id
              code
              admin_name
            }
          }
        }
        attribute_group {
          name
          attributes {
            code
            admin_name
            options {
              id
              code
              admin_name
              url_image
            }
          }
        }
      }
      related {
        id
        name
        url_key
        product_id
        min_price
        max_price
        images {
          id
          type
          path
        }
      }
    }
  }
`;

export const GET_PRODUCT_RELATED = gql`
  query ProductRelated(
    $id: Int!
    $productId: Int!
    $lat: String
    $lng: String
  ) {
    related(id: $id) {
      product_id
      name
      url_key
      featured
      min_price
      max_price
      images {
        id
        type
        path
      }
      offer(lat: $lat, lng: $lng, productId: $productId) {
        id
        sku_vendor
        price
        stock
        status
        promotional_price
        promotional_percentage
        date_initial
        date_final
        marketplace_seller_id
        marketplace_seller {
          url
          shop_title
          service_radius
        }
        company_id
        distance
      }
    }
  }
`;

export const GET_OFFERS = gql`
  query GetOffers($lat: String, $lng: String, $id: Int!) {
    offers(lat: $lat, lng: $lng, productId: $id) {
      id
      sku_vendor
      price
      stock
      status
      marketplace_seller_id
      company_id
      distance
      marketplace_seller {
        shop_title
        url
      }
    }
  }
`;

export const GET_PRODUCTID = gql`
  query GetProduct($url_key: String!) {
    children(url_key: $url_key) {
      parent {
        product_id
      }
    }
  }
`;

export const GET_VARIANTS = gql`
  query GetVariantes($id: Int!) {
    variants(id: $id) {
      id
      url_key

      attributes {
        value
        configurable
        attribute {
          admin_name
          code
        }
      }
    }
  }
`;

export const GET_PRODUCT_SELLER = gql`
  query GetProduct(
    $url_key: String!
    $postcode: String
    $seller_id: Int
    $id: Int!
  ) {
    children(url_key: $url_key) {
      id
      name
      status
      images {
        path
      }
      attribute_group {
        name
        attributes {
          code
          admin_name
          swatch_type
          options_exist(parent_id: $id) {
            id
            code
            admin_name
            url_image
            swatch_value
          }
        }
      }
      attributes {
        id
        value
        text_value
        configurable
        attribute {
          code
          admin_name
          options {
            id
            code
            admin_name
            url_image
            swatch_value
          }
        }
      }
      parent {
        id
        name
        product_id
        attributes {
          text_value
          id
          value
          configurable
          attribute {
            code
            admin_name
            options {
              id
              code
              admin_name
            }
          }
        }
        attribute_group {
          name
          attributes {
            code
            admin_name
            options {
              id
              code
              admin_name
              url_image
            }
          }
        }
      }
      offers(postcode: $postcode, seller_id: $seller_id) {
        id
        sku_vendor
        price
        stock
        status
        marketplace_seller_id
        company_id
        distance
        marketplace_seller {
          shop_title
          url
        }
      }
    }
  }
`;
