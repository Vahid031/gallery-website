import { getProducts } from "../../services/productService";



const TheProduct = () => {

    getProducts().then(result => {
        console.log(result);
    }
    );
    return <div>Product</div>
}

export default TheProduct
