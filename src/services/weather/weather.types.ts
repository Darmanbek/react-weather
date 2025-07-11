export interface Weather {
	cod: string
	message: number
	cnt: number
	list: List[]
	city: WeatherCity
}

export interface List {
	dt: number
	main: Main
	weather: ListWeather[]
	clouds: Clouds
	wind: Wind
	visibility: number
	pop: number
	sys: Sys
	dt_txt: string
}

export interface WeatherCity {
	id: number
	name: string
	coord: Coord
	country: string
	population: number
	timezone: number
	sunrise: number
	sunset: number
}

export interface Coord {
	lon: number
	lat: number
}

export interface ListWeather {
	id: number
	main: string
	description: string
	icon: string
}

export interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	humidity: number
	sea_level: number
	grnd_level: number
}

export interface Wind {
	speed: number
	deg: number
	gust: number
}

export interface Clouds {
	all: number
}

export interface Sys {
	pod: string
}
