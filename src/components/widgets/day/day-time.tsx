import { type FC, useEffect, useState } from "react"

const getDateTime = () => {
	const date = new Date()
	let hour: string | number = date.getHours()
	if (hour < 10) {
		hour = `0${hour}`
	}
	let min: string | number = date.getMinutes()
	if (min < 10) {
		min = `0${min}`
	}
	let sec: string | number = date.getSeconds()
	if (sec < 10) {
		sec = `0${sec}`
	}
	return `${hour}:${min}:${sec}`
}

const DayTime: FC = () => {
	const [time, setTime] = useState("__:__:__")

	useEffect(() => {
		setInterval(() => {
			const timeNow = getDateTime()
			setTime(timeNow)
		}, 1000)
	}, [])
	return (
		<>
			<span>{time}</span>
		</>
	)
}

export { DayTime }
