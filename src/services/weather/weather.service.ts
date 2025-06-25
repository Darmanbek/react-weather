import { api } from "src/api"
import type { Weather } from "./weather.types.ts"

class WeatherService {
	get = async (params: Record<string, unknown>): Promise<Weather> => {
		const response = await api.get<Weather>(`/data/3.0/onecall`, {
			params,
		})
		return response.data
	}
}

export const weatherService = new WeatherService()
