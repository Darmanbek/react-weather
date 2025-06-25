import { BASE_URL, CITY_CODE, LANG, WEATHER_API } from "src/config/url.config.ts"

export type ApiConfig = {
	params?: Record<string, unknown>
}

class Api {
	private readonly API_URL = BASE_URL

	public async get<T>(url: string, config: ApiConfig = {}): Promise<{ data: T }> {
		return this.fetch<T>(url, config)
	}

	private async fetch<T>(url: string, config: ApiConfig): Promise<{ data: T }> {
		const searchParams = {
			appid: WEATHER_API,
			uz: CITY_CODE,
			lang: LANG,
			...config.params,
		}

		const queryString = new URLSearchParams(
			Object.entries(searchParams).reduce(
				(acc, [key, value]) => {
					if (value != null) acc[key] = String(value)
					return acc
				},
				{} as Record<string, string>
			)
		).toString()

		const fullUrl = `${this.API_URL}${url}${queryString ? `?${queryString}` : ""}`

		const response = await fetch(fullUrl)

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data?.message || response.statusText || "Unknown API error")
		}

		return { data }
	}
}

export const api = new Api()
