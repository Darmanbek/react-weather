import { type FC, useState } from "react"
import { Button } from "src/components/ui/button.tsx"
import { Card } from "src/components/ui/card.tsx"
import { DayInfoItem } from "./day-info-item.tsx"
import { daysInfoData } from "./days-info.data.ts"

const DaysInfo: FC = () => {
	const [tab, setTab] = useState("1")

	return (
		<>
			<div className={"py-4 md:py-6 flex gap-4 flex-col md:flex-row md:justify-between"}>
				<div className={"flex gap-4 max-sm:flex-col"}>
					<Button
						isActive={tab === "1"}
						className={"max-md:w-full"}
						onClick={() => setTab("1")}
					>
						На неделю
					</Button>
					<Button
						isActive={tab === "2"}
						className={"max-md:w-full"}
						onClick={() => setTab("2")}
					>
						На месяц
					</Button>
					<Button
						isActive={tab === "3"}
						className={"max-md:w-full"}
						onClick={() => setTab("3")}
					>
						На 10 дней
					</Button>
				</div>
				<div>
					<Button
						onClick={() => setTab("1")}
						className={"max-md:w-full"}
					>
						Отменить
					</Button>
				</div>
			</div>
			<Card>
				<ul
					className={
						"grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 w-full"
					}
				>
					{daysInfoData.map((dayInfo, index) => (
						<DayInfoItem
							key={index}
							data={dayInfo}
						/>
					))}
				</ul>
			</Card>
		</>
	)
}

export { DaysInfo }
