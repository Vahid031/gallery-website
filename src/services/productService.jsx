import apiClient from "../apiClient";

export async function getProducts() {

    const res = await apiClient.get('api/product/get', {
        params: {
            // title: title
        }
    });

}