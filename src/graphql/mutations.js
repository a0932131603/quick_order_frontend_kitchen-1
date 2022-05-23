import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
mutation CreateOrder($order: inputOrder) {
  createOrder(order: $order)
}
`;

export const CREATE_ITEM = gql`
mutation createItem($data: CreateItemInput!) {
  createItem(data: $data) {
    id
    name
    description
    price
  }
}
`;

export const UPDATE_ITEM = gql`
mutation Mutation($updateItemId: String!, $data: UpdateItemInput!, $file: Upload) {
  updateItem(id: $updateItemId, data: $data, file: $file) {
    id
    name
    price
    description
  }
}
`;

export const DELETE_ITEM = gql`
mutation DeleteItem($deleteItemId: String!) {
  deleteItem(id: $deleteItemId) {
    id
    name
    description
  }
}
`;

export const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!){
        singleUpload(file: $file){
            url
        }
    }
`