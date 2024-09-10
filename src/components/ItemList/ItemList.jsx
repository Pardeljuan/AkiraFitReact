import { Item } from "../Item/Item"
import './ItemList.scss'

export const ItemList = ({products}) => {
    return(
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}