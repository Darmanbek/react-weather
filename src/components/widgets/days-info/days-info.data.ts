import { SmallRainIcon, SmallRainSunIcon } from "src/assets"

export type DayInfo = {
	label: string
	date: string
	icon: string
	temp: {
		before: string | number
		after: string | number
	}
	type: string
}
export const daysInfoData = [
	{
		label: "Сегодня",
		date: "28 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
	{
		label: "Завтра",
		date: "29 авг",
		icon: SmallRainIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Небольшой дождь",
	},
	{
		label: "Пн",
		date: "30 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
	{
		label: "Вт",
		date: "31 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
	{
		label: "Ср",
		date: "31 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
	{
		label: "Чт",
		date: "31 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
	{
		label: "Пт",
		date: "31 авг",
		icon: SmallRainSunIcon,
		temp: {
			before: "+18°",
			after: "+15°",
		},
		type: "Облачно",
	},
]
