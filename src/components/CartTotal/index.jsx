import { Valor } from "./style"

function CartTotal({carrinho, setCarrinho}){
    
    
    return(
        <Valor>
            <div className="primeiraLinha">
                <p>Total</p>
                <p>R${carrinho.map((elem) => {
                    return elem.price
                }).reduce((acumulador, valorAtual) => {
                    return acumulador + valorAtual
                },0).toFixed(2)}</p>
            </div>
            <button onClick={() => setCarrinho([])}>Remover Todos</button>
        </Valor>
    )
}

export default CartTotal