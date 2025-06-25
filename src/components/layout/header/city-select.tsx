import { type FC, useEffect, useRef, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { cityData } from "src/data"
import { twx } from "src/lib/utils.tsx"
import { useCityStore } from "src/store"

const CitySelect: FC = () => {
	const [open, setOpen] = useState(false)
	const { city, setCity } = useCityStore()
	const listRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.addEventListener("click", (e: MouseEvent) => {
			const { current } = listRef
			if (!current) return
			if (!e.composedPath().includes(current)) {
				setOpen(false)
			}
		})

		return () => {
			document.removeEventListener("click", () => {})
		}
	}, [])
	return (
		<>
			<div
				className={"relative"}
				ref={listRef}
			>
				<button
					className={
						"inline-flex items-center gap-3 bg-secondary py-2 px-5 rounded-xl text-ellipsis overflow-hidden whitespace-nowrap text-sm md:text-base dark:bg-card dark:shadow-container min-w-52"
					}
					onClick={() => setOpen((prev) => !prev)}
				>
					<span className={"w-full"}>{city?.name || "Выбрать город"}</span>
					<FaChevronDown
						className={twx("transform transition-transform", {
							"rotate-180": open,
							"rotate-0": !open,
						})}
					/>
				</button>
				<div
					className={twx(
						"absolute min-w-48 w-full top-full mt-1 right-0 bg-secondary rounded-xl dark:bg-card dark:shadow-container overflow-hidden origin-top transition-transform",
						{
							"animate-open rotate-0": open,
							"rotate-x-90": !open,
						}
					)}
				>
					<div
						className={
							"h-64 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-primary dark:scrollbar-card"
						}
					>
						<ul>
							{cityData.map((city, index) => (
								<li
									className={
										"cursor-pointer text-base font-medium px-5 py-2 hover:bg-secondary-hover transition-colors"
									}
									onClick={() => {
										setCity(city)
										setOpen(false)
									}}
									key={index}
								>
									{city.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export { CitySelect }
