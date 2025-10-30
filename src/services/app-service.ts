import { post } from "@/utils/request"

export const debugApp = async (appId: string, query: string) => post<{content: string}>(`/apps/${appId}/debug`, { body: { query } })