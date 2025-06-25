import { useEffect, useState } from "react"
import { weatherService } from "./weather.service.ts"
import type { Weather } from "./weather.types.ts"

const useGetWeatherQuery = (params: Record<string, unknown> = {}) => {
	const [data, setData] = useState<Weather>()
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState<unknown>(null)

	useEffect(() => {
		setIsLoading(true)
		weatherService
			.get(params)
			.then((result) => {
				setData(result)
			})
			.catch((error) => {
				setIsError(true)
				setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [params])

	return {
		data,
		isLoading,
		isError,
		error,
	}
}

export { useGetWeatherQuery }
