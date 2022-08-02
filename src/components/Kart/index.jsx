import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import { Carrinho } from "./style"


function Kart({carrinho, setCarrinho}){

    function showCartProducts(){
        return carrinho.map(({id, name, category, price, img, index}) => {
                return <CartProduct key={index} name={name} category={category} img={img} id={id} carrinho={carrinho} setCarrinho={setCarrinho}></CartProduct>
        })
    }
    
    return(
        <div>
        <Carrinho>
            <h2>Carrinho de compras</h2>
        {
            carrinho[0] === undefined
            ? <><h1>Seu carrinho está vazio</h1> 
                <span>Adicione item</span></>
            : showCartProducts()
        }
        </Carrinho>
        <CartTotal carrinho={carrinho} setCarrinho={setCarrinho}></CartTotal>
        </div>
    )
}

export default Kart