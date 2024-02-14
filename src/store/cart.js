import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions:{
        addItem(item) {
            const existingItem = this.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({...item, quantity: 1});
            }
        },

        removeItem(itemId) {
            console.log('removeItem',JSON.stringify(itemId));
            const index = this.items.findIndex((item) => item.id === itemId);

            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
        plus(){
            this.items.count++;

        }
    }
});