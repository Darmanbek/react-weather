import { type FC } from "react"

interface InfoItemProps {
	icon: string
	label: string
	value: string | number
}

const InfoItem: FC<InfoItemProps> = ({ icon, value, label }) => {
	return (
		<>
			<li className={"grid gap-5 grid-cols-10 items-center"}>
				<div
					className={
						"size-9 bg-white rounded-full inline-flex items-center justify-center shadow-icon col-span-2 sm:col-span-1"
					}
				>
					<img
						src={icon}
						className={"size-6"}
						width={24}
						height={24}
						alt={"Icon"}
					/>
				</div>
				<h2 className={"text-sm text-tertiary col-span-8 sm:col-span-2"}>{label}</h2>
				<h3 className={"text-sm col-span-10 sm:col-span-7"}>{value}</h3>
			</li>
		</>
	)
}

export { InfoItem }
