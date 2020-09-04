import { ExtendService, RequestParams } from '~/core/http'

/**
 * 数据分页服务
 */
export class PageService extends ExtendService {
    // 默认分页配置
    public default = {
        pageSize: 10,
        pageIndex: 1,
        total: 0,
        pageSizeOpts: [20, 50, 100, 200]
    }

    // 当前分页配置
    public pageSize: number
    public pageIndex: number
    public total: number
    public pageSizeOpts: number[]

    constructor(data?: any) {
        super()

        // 设置分页配置
        if (data) this.default = { ...this.default, ...data }

        this.pageSize = this.default.pageSize
        this.pageIndex = this.default.pageIndex || 1
        this.total = this.default.total
        this.pageSizeOpts = this.default.pageSizeOpts
    }

    /**
     * 分页完成状态
     */
    public get finished() {
        return this.total > 0 && this.total <= this.pageIndex * this.pageSize
    }

    /**
     * 分页前置操作
     */
    public before = params => {
        params.data = {
            ...params.data,
            size: this.pageSize,
            page: this.pageIndex - 1
        }
    }

    /**
     * 分页后置操作
     */
    public after = (response: any, params) => {
        this.total = response.totalElements
    }

    /**
     * 重置分页信息
     */
    public reset() {
        this.pageIndex = this.default.pageIndex
        this.pageSize = this.default.pageSize
        this.total = 0
    }

    /**
     * 分页前进操作
     * @param callback
     */
    public next(callback) {
        if (!this.finished) {
            this.pageIndex++
            callback()
        }
    }

    /**
     * 更新分页配置
     * @param pageIndex
     * @param pageSize
     */
    public update(pageIndex, pageSize) {
        this.pageIndex = pageIndex
        this.pageSize = pageSize
        return Promise.resolve()
    }
}
