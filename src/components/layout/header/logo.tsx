import { type FC } from "react"

const Logo: FC = () => {
	return (
		<>
			<div className={"flex items-center gap-5 flex-shrink-0"}>
				<img
					className={"flex-shrink-0 size-12 lg:size-14 xl:size-16"}
					width={64}
					height={64}
					src={"/logo.svg"}
					alt={"Logo"}
				/>
				<h1
					className={
						"uppercase hidden sm:block font-bold text-lg lg:text-xl xl:text-2xl text-primary"
					}
				>
					React weather
				</h1>
			</div>
		</>
	)
}

export { Logo }
