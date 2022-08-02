import { Item } from "./style"

function CartProduct({id, name, category, price, img, carrinho, setCarrinho}){

    function removerDaLista(ide){
        let idx = carrinho.findIndex((elem) => {
            return elem.id === ide
        })
        
        setCarrinho(carrinho.filter((elem, index, array) => {
            return index !== idx
        }))
    }

    return(
        <Item>
            <img src={img}></img>
            <div className="container">
                <div className="nameERemove">
                    <h3>{name}</h3>
                    <p onClick={() => removerDaLista(id)}>Remover</p>
                </div>
                <span>{category}</span>
            </div>
        </Item>
    )
}

export default CartProduct