import { useSelector } from 'react-redux';
import CartModal from './CartModal'

const CartButton = () => {

        const value = useSelector(state => state.cart.value);

        return(
            <>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cartModal">
                     Cart {value}
                </button>
        <CartModal/>
        </>
    )
    }

    export default CartButton;