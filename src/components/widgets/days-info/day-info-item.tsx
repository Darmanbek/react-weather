import { type FC } from "react"
import type { DayInfo } from "./days-info.data.ts"

interface DayInfoItemProps {
	data: DayInfo
}

const DayInfoItem: FC<DayInfoItemProps> = ({ data }) => {
	return (
		<>
			<li
				className={
					"bg-secondary rounded-lg col-span-1 w-full p-3 shadow-secondary cursor-pointer transition-transform hover:scale-105 flex max-sm:justify-between max-sm:items-center sm:flex-col"
				}
			>
				<div className={"hidden sm:block"}>
					<h2 className={"text-lg font-medium"}>{data.label}</h2>
					<p className={"text-tertiary text-sm"}>{data.date}</p>
				</div>

				<div className={"size-12 my-3 flex-shrink-0"}>
					<img
						src={data.icon}
						alt={"Icon"}
					/>
				</div>

				<div className={"block sm:hidden"}>
					<h2 className={"text-lg font-medium"}>{data.label}</h2>
					<p className={"text-tertiary text-sm"}>{data.date}</p>
				</div>

				<div className={"data-temp"}>
					<h4 className={"text-lg"}>{data.temp.before}</h4>
					<h5 className={"text-tertiary text-sm"}>{data.temp.after}</h5>
				</div>

				<div className={"text-tertiary text-xs mt-2"}>
					<p>{data.type}</p>
				</div>
			</li>
		</>
	)
}

export { DayInfoItem }
