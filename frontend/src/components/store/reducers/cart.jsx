import produtos from './produtos';

const INITIAL_STATE = {
    value: 0,
    produtos,
    Carts: [],
    produtos_cart: []
}

export default function cart(state= INITIAL_STATE , action){
    switch(action.type){
        case 'ADD_TO_CART':
                if(state.value === 0){
                    let cart = {
                        id: action.produto.idproduto,
                        descricao: action.produto.descricao,
                        preco: action.produto.preco,
                        precofinal: action.produto.precofinal,
                        imagem: action.produto.imagem,
                        quantity: 1
                    }
                    state.Carts.push(cart)
                } else {
                    let check = false;
                    state.Carts.map((item, key) => {
                        if(item.id === action.produto.idproduto){
                            state.Carts[key].quantity++;
                            check = true;
                        }
                    })
                    if(!check){
                        let cart = {
                            id: action.produto.idproduto,
                            descricao: action.produto.descricao,
                            preco: action.produto.preco,
                            precofinal: action.produto.precofinal,
                            imagem: action.produto.imagem,
                            quantity: 1
                    }
                    state.Carts.push(cart)}
                }
                state.value = state.value + 1;
                return state;
        case 'REMOVE_TO_CART':
                if(action.produto.quantity > 1){
                    action.produto.quantity--;
                    state.value = state.value - 1;
                }
                return state;
        case 'ADD_ITEM':
            action.produto.quantity++;
            state.value = state.value + 1;
            return state;
        case 'DELETE':
            return{
                    ...state,
                    value: (action.value - action.produto.quantity),
                    Carts: state.Carts.filter(item=>{
                        return item.id !== action.produto.id;
                    })
                }   
            default:
                return state;
    }   
}