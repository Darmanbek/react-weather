import { type FC, useMemo } from "react"
import { SunIcon } from "src/assets"
import { Card } from "src/components/ui"
import { useGetWeatherQuery } from "src/services/weather"
import { useCityStore } from "src/store"
import { DayTime } from "./day-time.tsx"

const Day: FC = () => {
	const city = useCityStore((state) => state.city)
	const date = useMemo(() => Date.now(), [])

	const {
		data: weather,
		error,
		isError,
		isLoading,
	} = useGetWeatherQuery({
		q: city.slug,
		cnt: 1,
		dt: date,
	})

	// eslint-disable-next-line no-console
	console.log({
		weather,
		error,
		isError,
		isLoading,
	})
	return (
		<>
			<Card>
				<div className={"flex flex-col justify-between h-full"}>
					<div className={"flex justify-between items-center"}>
						<div>
							<h1 className={"text-primary font-medium text-6xl lg:text-7xl xl:text-8xl le"}>
								{Math.round((Number(weather?.list?.[0]?.main?.temp) || 273.15) - 273.15)}°
							</h1>
							<p className={"text-2xl lg:text-3xl xl:text-4xl"}>Сегодня</p>
						</div>
						<div className={"p-2 size-24 lg:size-28 xl:size-32"}>
							<img
								width={120}
								height={120}
								className={"animate-breathe animation-duration-5000"}
								src={SunIcon}
								alt={"Icon"}
							/>
						</div>
					</div>
					<div className={"mt-4 lg:mt-5 xl:mt-6"}>
						<p className={"text-tertiary text-lg lg:text-xl xl:text-2xl"}>
							Время: <DayTime />
						</p>
						<p className={"text-tertiary text-lg lg:text-xl xl:text-2xl mt-1 lg:mt-2 xl:mt-3"}>
							Город: {city?.name || "Город не выбран"}
						</p>
					</div>
				</div>
			</Card>
		</>
	)
}

export { Day }
