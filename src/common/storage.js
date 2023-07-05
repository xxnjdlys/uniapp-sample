export default {

    setParam(key,value) {
        if (!key || !value) {
            return;
        }
        uni.setStorage({
            key: `mz_${key}`,
            data: value,
            success: () => {

            }
        });
    },

    getParam(key) {
        if (!key){
            return null;
        }
        try {
            const value = uni.getStorageSync(`mz_${key}`);
            if (value) {
                return value
            }
        } catch (e) {
        }
        return null
    },

    removeParam(key) {
        uni.removeStorage({
            key: `mz_${key}`,
        })
    },


}