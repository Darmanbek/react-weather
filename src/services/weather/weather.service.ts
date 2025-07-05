import { api } from "src/api"
import type { Weather } from "./weather.types.ts"

class WeatherService {
	get = async (params: Record<string, unknown>): Promise<Weather> => {
		const response = await api.get<Weather>(`/data/2.5/forecast`, {
			params,
		})
		return response.data
	}
}

export const weatherService = new WeatherService()
