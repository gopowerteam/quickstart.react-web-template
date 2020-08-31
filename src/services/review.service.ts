/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '~/core/http'
import { Observable } from 'rxjs'
import { ReviewController } from '~/config/services/review.controller'

export class ReviewService {
    /**
     * all
     */
    @Request({
        server: ReviewController.all
    })
    public all(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 审批review的接口
     */
    @Request({
        server: ReviewController.status
    })
    public status(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}