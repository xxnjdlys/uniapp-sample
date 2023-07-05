import {defineStore} from 'pinia';
export const useAccountStore = defineStore('account', {
    unistorage: true, // 是否持久化
    // id: 必须的，在所有 Store 中唯一
    id: "accountState",
    // state: 返回对象的函数
    state: () => {
        return {
            account: '测试'
        }
    },
    actions: {
        login(account) {
            this.account = account
        }
    }
})
