import { useCallback, useEffect, useMemo, useState } from "react"
import { weatherService } from "./weather.service.ts"
import type { Weather } from "./weather.types.ts"

const cache = new Map<string, Weather>()

const useGetWeatherQuery = (params: Record<string, unknown> = {}) => {
	const [data, setData] = useState<Weather>()
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState<unknown>(null)

	const queryKey = useMemo(
		() => ["weather", ...Object.values(params)].join(", "),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...Object.values(params)]
	)

	const getData = useCallback(() => {
		setIsLoading(true)
		weatherService
			.get(params)
			.then((result) => {
				cache.set(queryKey, result)
				setIsError(false)
				setError(null)
				setData(result)
			})
			.catch((error) => {
				cache.clear()
				setIsError(true)
				setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...Object.values(params)])

	useEffect(() => {
		const data = cache.get(queryKey)
		if (data) {
			return setData(data)
		}
		getData()
	}, [queryKey, getData])

	return {
		data,
		isLoading,
		isError,
		error,
	}
}

export { useGetWeatherQuery }
