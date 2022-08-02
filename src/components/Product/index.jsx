import { Card } from "./style"

function Product({id, name, category, price, img, products, carrinho, setCarrinho}){
    
    function HandleClick(ide){
        let find = products.find((elem) => elem.id === ide)

        setCarrinho([...carrinho, find])

        
        }
    return( 
        <Card>
            <img src={img}></img>
            <h1>{name}</h1>
            <p>{category}</p>
            <span>R${price},00</span>
            <button onClick={() => HandleClick(id)}>Adicionar</button>
        </Card>
    )

}
export default Product