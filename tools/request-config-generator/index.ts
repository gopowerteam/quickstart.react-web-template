#!/usr/bin/env node

import fetch from 'node-fetch'
import { compile, registerHelper } from 'handlebars'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import mkdirp from 'mkdirp'
import * as config from './config.json'
import yargs from 'yargs'
const TEMPLATE_FOLDER = resolve(__dirname, 'templates')
const PROJECT_FOLDER = resolve(__dirname, '..', '..', 'src')

export const ENCODING = 'utf8'
export const controllerTemplatePath = `${TEMPLATE_FOLDER}/controller.template.hbs`
export const serviceTemplatePath = `${TEMPLATE_FOLDER}/service.template.hbs`
export const controllerDirectionPath = `${PROJECT_FOLDER}/config/services/`
export const serviceDirectionPath = `${PROJECT_FOLDER}/services/`

registerHelper('toUpperCase', function (str) {
    return str.toUpperCase()
})

registerHelper('toLowerCase', function (str) {
    return str.toLowerCase()
})

export function generateServiceFiles(controllers) {
    controllers.forEach(generateServiceFile)
}

export function generateServiceFile(controller) {
    let templateSource = readFileSync(serviceTemplatePath, ENCODING)
    let template = compile(templateSource)
    let serviceFileContent = template(controller)
    writeServiceFile(controller, serviceFileContent).then(filename => {
        console.log(`${filename}-生成完成`)
    })
}

export async function writeServiceFile({ controller, filename }, content) {
    const path = resolve(serviceDirectionPath, `${filename}.service.ts`)
    await mkdirp(dirname(path))
    await writeFileSync(path, content, ENCODING)
    return path
}

export function generateControllerFiles(controllers) {
    controllers.forEach(generateControllerFile)
}

export function generateControllerFile(controller) {
    let templateSource = readFileSync(controllerTemplatePath, ENCODING)
    let template = compile(templateSource)
    let controllerFileContent = template(controller)
    writeControllerFile(controller, controllerFileContent).then(filename => {
        console.log(`${filename}-生成完成`)
    })
}

export async function writeControllerFile({ controller, filename }, content) {
    const path = resolve(controllerDirectionPath, `${filename}.controller.ts`)
    await mkdirp(dirname(path))
    await writeFileSync(path, content, ENCODING)
    return path
}

export function generate(includes: string[]) {
    fetch(config.swagger, { method: 'GET' })
        .then(res => res.json()) // expecting a json response
        .then(data => data.paths)
        .then((paths: { [keys: string]: any }) => {
            const controllers: any = []

            Object.entries(paths).forEach(
                ([key, config]: [string, { [keys: string]: any }]) => {
                    const [controller, action] = key.split('/').filter(x => x)
                    const className = controller
                        .replace(/^\S/, $ => $.toUpperCase())
                        .replace(/-(\w)/g, ($, $1) => $1.toUpperCase())

                    if (includes.length && !includes.includes(controller)) {
                        return
                    }

                    let target = controllers.find(
                        x => x.controller === controller
                    )

                    if (!target) {
                        target = {
                            controller,
                            filename: controller
                                .replace(/([A-Z])/g, '-$1')
                                .toLowerCase(),
                            controllerClass: `${className}Controller`,
                            serviceClass: `${className}Service`,
                            actions: []
                        }
                        controllers.push(target)
                    }

                    Object.entries(config).forEach(([method, { summary }]) => {
                        target.actions.push({
                            controller,
                            action: (action || method).replace(
                                /-(\w)/g,
                                ($, $1) => $1.toUpperCase()
                            ),
                            defaultAction: !action,
                            method: method.replace(/^\S/, s => s.toUpperCase()),
                            summary
                        })
                    })
                }
            )

            generateControllerFiles(controllers)
            generateServiceFiles(controllers)
        })
}

const argv = yargs
    .option('controller', {
        alias: 'c',
        describe: '指定生成的控制器'
    })
    .default('controller', [], 'empty list').argv

generate(argv.controller)
