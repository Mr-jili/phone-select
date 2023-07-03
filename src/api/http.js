import Request from 'luch-request'

const baseURL = ``
const http = new Request()
http.setConfig((config) => {
    config = {
        baseURL: baseURL,
        header: {}
    }
    return config
})
http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
http.interceptors.response.use(async (res) => {
    if (res.statusCode === 400 || res.statusCode === 404) {
        uni.showToast({
            title: res.data.message,
            icon: "none",
            mask: true,
        })
        return Promise.reject(new Error())
    } else if (res.statusCode === 503 || res.statusCode === 500) {
        uni.showToast({
            title: "服务不可用，请稍后再试！",
            icon: "none",
            mask: true,
        })
        return Promise.reject(new Error())
    } else if (res.statusCode === 504) {
        uni.showToast({
            title: "连接超时，请稍后再试！",
            icon: "none",
            mask: true,
        })
        return Promise.reject(new Error())
    }
    return res
}, (error) => {
    if (error.statusCode === 400) {
        uni.showToast({
            title: error.data.message,
            icon: "none",
            mask: true,
        })
    } else if (error.statusCode === 503) {
        uni.showToast({
            title: "服务不可用，请稍后再试！",
            icon: "none",
            mask: true,
        })
    } else if (error.statusCode === 504) {
        uni.showToast({
            title: "连接超时，请稍后再试！",
            icon: "none",
            mask: true,
        })
    }
    return Promise.reject(error)
})

export default http
