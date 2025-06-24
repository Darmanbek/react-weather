import { type FC } from "react"
import { PrecipitationIcon, PressureIcon, TempIcon, WindIcon } from "src/assets"
import { Card } from "src/components/ui/card.tsx"
import { InfoItem } from "./info-item.tsx"

const infoData = [
	{
		icon: TempIcon,
		label: "Температура",
		value: "20° - ощущается как 17°",
	},
	{
		icon: PressureIcon,
		label: "Давление",
		value: "765 мм ртутного столба - нормальное",
	},
	{
		icon: PrecipitationIcon,
		label: "Осадки",
		value: "Без осадков",
	},
	{
		icon: WindIcon,
		label: "Ветер",
		value: "3 м/с юго-запад - легкий ветер",
	},
]

const DayInfo: FC = () => {
	return (
		<>
			<Card>
				<ul className={"flex flex-col gap-5 justify-center h-full py-5 px-2"}>
					{infoData.map((info, index) => (
						<InfoItem
							key={index}
							icon={info.icon}
							label={info.label}
							value={info.value}
						/>
					))}
				</ul>
			</Card>
		</>
	)
}

export { DayInfo }
