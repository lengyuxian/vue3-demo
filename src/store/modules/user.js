import { login } from '@/request/api.js'
const user = {

    state: {
        userNo: {},
        count: 0
    },
    getters: {
        // getUserInfo: state => {
        //     console.log('getters:', state)
        //     return state.count
        // }
    },
    mutations: {
        SETUSERNO(state, value) {
            // console.log(state, value)
            this.userNo = value
            console.log(this.userNo)
        }
    },
    actions: {
        queryLogin(context) {
            login(res => {
                context.commit('SETUSERNO', res)
            })
        }
    }
}
export default user