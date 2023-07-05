export const LOG_TAG_DEF = "xxnjdlys"
export class Log {

    i(obj, tag = LOG_TAG_DEF) {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        console.info(tag, obj)
    }

    w(obj, tag = LOG_TAG_DEF) {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        console.warn(tag, obj)
    }

    e(obj, tag = LOG_TAG_DEF) {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        console.error(tag, obj)
    }

    d(obj, tag = LOG_TAG_DEF) {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        console.debug(tag, obj)
    }

}

const log = new Log();
export default log