/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '~/core/http'

// 控制器名称
const controller = 'apiDemand'

export const ApiDemandController = {
    // all
    all: {
        controller,
        action: 'all',
        type: RequestMethod.Get
    },
    // create
    create: {
        controller,
        action: 'create',
        type: RequestMethod.Post
    }
}
