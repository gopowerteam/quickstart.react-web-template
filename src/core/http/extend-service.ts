import { RequestParams } from './request-params'
import { IExtendServiceResult } from '.'
export abstract class ExtendService {
    public before!: (params: RequestParams) => void

    public after!: (
        option,
        params: RequestParams
    ) => IExtendServiceResult | void
}
