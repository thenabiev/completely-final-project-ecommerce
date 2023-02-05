import { createSlice } from "@reduxjs/toolkit";
import { ItemsData } from "../../Data";

const initialState={
    allItems: ItemsData,
    cartItems:[],
    favorites:[],
    amount:0,
    filterTerm:'',
    searchTerm:''
};

export const ShopSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.amount+=1;

            const cartItem=state.cartItems.find(item=>item.id===action.payload.id);

            cartItem? (cartItem.amount+=1)
                : state.cartItems.push({...action.payload, amount: 1})
        },
        increment:(state, action)=>{
            state.amount+=1;
            const itemIndex=state.cartItems.findIndex((cartItem)=>cartItem.id===action.payload.id);

            state.cartItems[itemIndex].amount+=1
        },
        decrement:(state, action)=>{
            const itemIndex=state.cartItems.findIndex((cartItem)=>cartItem.id===action.payload.id);
            state.cartItems[itemIndex].amount>0 && state.cartItems[itemIndex].amount-- && state.amount--;
            if(state.cartItems[itemIndex].amount==0){
                state.cartItems=state.cartItems.filter(item=>item.id!==state.cartItems[itemIndex].id)
            }
        },
        removeFromCart:(state, action)=>{
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload);

        },
        filterCategory:(state, action)=>{
            state.filterTerm=action.payload;
            if(action.payload==='all'){
                state.filterTerm="all"
            }
            
        },
        addToFavorites:(state, action)=>{
            const favItem=state.favorites.find(item=>item.id===action.payload.id);
            const isIncludes=state.favorites.includes(favItem)
            if(isIncludes==false){
                state.favorites.push({...action.payload})
            }
            
                
        },
        removeFromFavorites:(state, action)=>{
            state.favorites=state.favorites.filter(item=>item.id!==action.payload)
        },

        filterDiscount:(state)=>{
            state.filterTerm="discount";

        },
        handleSearch:(state, action)=>{
            state.filterTerm=''
            state.searchTerm=action.payload;

        }
    }
})


export const {addToCart, increment, decrement, removeFromCart, filterCategory, addToFavorites, removeFromFavorites, filterDiscount, handleSearch}=ShopSlice.actions;
export default ShopSlice.reducer;