import { gql } from '@apollo/client';

export const QUERY_ORDERS = gql`
query TodayOrders($restaurantId: ID!) {
  todayOrders(restaurantID: $restaurantId) {
    items {
      id
      name
      price
      orderItemInfo {
        quantity
        note
        state
      }
    }
    tableNo
    time
    id
  }
}
`;

export const QUERY_ITEMS = gql`
query Items($restaurantId: ID!) {
  items(restaurantID: $restaurantId) {
    id
    name
    price
    description
    comments {
      name
      content
    }
  }
}`;
