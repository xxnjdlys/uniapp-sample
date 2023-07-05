import { defineStore } from 'pinia';
import log from "@/common/log"
export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
            log.i(`counter store increment: ${this.count}`)
        },
        decrement() {
            this.count--;
            log.i(`counter store decrement: ${this.count}`)
        },
    },
});