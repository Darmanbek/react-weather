import { useCallback, useEffect, useRef, useState } from "react"

type QueryOptions<T> = {
	queryKey: (string | number | unknown)[]
	queryFn: () => Promise<T>
	refetchInterval?: number // в миллисекундах
}

type QueryResult<T> = {
	data: T | null
	isLoading: boolean
	isError: boolean
	error: unknown
	refetch: () => void
}

const cache = new Map<string, unknown>()

export function useQuery<T>({
	queryKey,
	queryFn,
	refetchInterval,
}: QueryOptions<T>): QueryResult<T> {
	const [data, setData] = useState<T | null>((cache.get(queryKey.join(".")) as T) ?? null)
	const [isLoading, setIsLoading] = useState(!cache.has(queryKey.join(".")))
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState<unknown>(null)

	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const isMountedRef = useRef(true)

	const fetchData = useCallback(() => {
		setIsLoading(true)
		setIsError(false)
		setError(null)

		queryFn()
			.then((result) => {
				if (!isMountedRef.current) return
				cache.set(queryKey.join("."), result)
				setData(result)
			})
			.catch((err) => {
				if (!isMountedRef.current) return
				setIsError(true)
				setError(err)
			})
			.finally(() => {
				if (!isMountedRef.current) return
				setIsLoading(false)
			})
	}, [queryKey, queryFn])

	// Запуск при монтировании и на смену ключа
	useEffect(() => {
		isMountedRef.current = true
		fetchData()

		return () => {
			isMountedRef.current = false
		}
	}, [queryKey, fetchData])

	// Повторный запрос через интервал
	useEffect(() => {
		if (refetchInterval) {
			intervalRef.current = setInterval(() => {
				fetchData()
			}, refetchInterval)
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [refetchInterval, fetchData])

	const refetch = () => fetchData()

	return {
		data,
		isLoading,
		isError,
		error,
		refetch,
	}
}
