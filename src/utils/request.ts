import { API_PREFIX, httpCode } from '@/config'
import type { BaseResponse } from '@/models/base'
import { Message } from '@arco-design/web-vue'

const TIMEOUT = 100 * 1000

const baseFetchOptions = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  redirect: 'follow',
}

type FetchOptions = Omit<RequestInit, 'body'> & {
  params?: Record<string, string | number | boolean>
  body?: BodyInit | Record<string, unknown> | null
  timeout?: number
}

const baseFetch = async <T>(url: string, fetchOptions: FetchOptions): Promise<T> => {
  const controller = new AbortController()
  const options = { ...baseFetchOptions, ...fetchOptions, signal: controller.signal }
  let urlWithPrefix = `${API_PREFIX}${url.startsWith('/') ? url : `/${url}`}`

  const { method, params, body } = options

  if (method === 'GET' && params) {
    const searchParams = []
    for (const key in params) {
      searchParams.push(`${key}=${encodeURIComponent(params[ key ])}`)
    }
    if (urlWithPrefix.includes('?')) {
      urlWithPrefix += `&${searchParams.join('&')}`
    } else {
      urlWithPrefix += `?${searchParams.join('&')}`
    }

    delete options.params
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  try {
    const timeout = options.timeout || TIMEOUT;
    const id = setTimeout(() => controller.abort(), timeout);
    const res = await fetch(urlWithPrefix, options as RequestInit)
    clearTimeout(id)
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result: BaseResponse<unknown> = await res.json();
    if (result.code !== httpCode.success) {
      Message.error(result.message)
      throw new Error(result.message);
    }
    return (result.data) as T;
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw new Error('Request Timeout');
    }
    throw err;
  }

}

export const request = <T>(url: string, options: FetchOptions = {}): Promise<T> => baseFetch(url, options)


export const get = <T>(url: string, options: FetchOptions = {}): Promise<T> => baseFetch(url, { ...options, method: 'GET' })


export const post = <T>(url: string, options: FetchOptions = {}): Promise<T> => baseFetch(url, { ...options, method: 'POST' })


export const put = <T>(url: string, options: FetchOptions = {}): Promise<T> => baseFetch(url, { ...options, method: 'PUT' })


export const del = <T>(url: string, options: FetchOptions = {}): Promise<T> => baseFetch(url, { ...options, method: 'DELETE' })

