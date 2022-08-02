import Product from "../Product"
import { Lista } from "./style"



function ProductList({products, carrinho, setCarrinho, search}){

    function showProducts(){
        return products.map(({id, name, category, price, img}) => {
            return <Product key={id} name={name} category={category} price={price} img={img} products={products} id={id} carrinho={carrinho} setCarrinho={setCarrinho}></Product>
         })
    }

    function showFilteredProducts(){
         return products.filter(({name, category, price}) => {
            return name.includes(search) || category.includes(search) || price.toString().includes(search)
        }).map(({id, name, category, price, img}) => {
            return <Product key={id} name={name} category={category} price={price} img={img} products={products} id={id} carrinho={carrinho} setCarrinho={setCarrinho}></Product>
         })
        
             
    }

    return(
        <Lista>
            {
                search !== ''
                ? showFilteredProducts()
                : showProducts()
            }
        </Lista>
    )
}

export default ProductList