import { ExtendService, RequestParams } from '~/core/http'
// import store from '~/store'

// 认证信息服务
export class TokenService extends ExtendService {
    public before = params => {
        // const { token } = store.state
        // if (token) {
        //     params.options.header = params.options.header || {}
        //     params.options.header['X-UserToken'] = token
        // }
    }
}
