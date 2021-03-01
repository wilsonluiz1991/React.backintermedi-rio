import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

const CartModal = () => {
    
  const dispatch = useDispatch ();
  const value = useSelector (state => state.cart.value)
  const produtos = useSelector(state => state.cart.Carts)

  let totalPrice = 0;
  for (let i = 0; i < produtos.length; i++) {
      totalPrice += produtos[i].precofinal * produtos[i].quantity
  }
  console.log(produtos)
  
  return(
      
<div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="cartModalLabel">Cart</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
              <table class="table">
              <thead>
              <tr>
              <th scope="col">Produtos</th>
              <th scope="col">Quantidade</th>
              <th></th>
              <th scope="col">Preço unitário</th>
              <th scope="col">Total</th>
              </tr>
          </thead>
          <tbody>
                        {produtos.map(produto=>{
                            const total = (produto.precofinal * produto.quantity).toFixed(2)
                            return(
                                <tr key={produto.id}>
                                    <td>
                                        <button onClick={() => dispatch(cartActions.Delete(value, produto))} className="badge badge-pill badge-danger"><i className="fas fa-window-close"></i></button>
                                    </td>
                                    <td>{produto.name}</td>
                                    <td>{produto.quantity}</td>
                                    <td>
                                        <button onClick={() => dispatch(cartActions.AddItem(value, produto))} className="badge badge-pill badge-success"><i className="far fa-plus-square"></i></button>
                                        <button onClick={() => dispatch(cartActions.Remove(value, produto))} className="badge badge-pill badge-warning"><i className="far fa-minus-square"></i></button>
                                    </td>
                                    <td>R$ {produto.precofinal.toFixed(2)}</td>
                                    <td>R$ {total}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <th colSpan="4" scope="row">Total</th>
                            <td>{value}</td>
                            <td>R$ {totalPrice.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
    </div>
  </div>
</div>
    )}

export default CartModal; 