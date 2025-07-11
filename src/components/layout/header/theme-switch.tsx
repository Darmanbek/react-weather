import { type FC, useEffect } from "react"
import { useThemePersistStore } from "src/store"

const ThemeSwitch: FC = () => {
	const { theme, toggleTheme } = useThemePersistStore()

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark")
		} else {
			document.body.classList.remove("dark")
		}
	}, [theme])
	return (
		<>
			<button
				className={"size-9 inline-flex items-center justify-center"}
				onClick={toggleTheme}
			>
				<svg
					width={"24"}
					height={"28"}
					viewBox={"0 0 24 28"}
					fill={"none"}
					xmlns={"http://www.w3.org/2000/svg"}
				>
					<path
						d={
							"M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z"
						}
						className={"text-primary"}
						fill={"currentColor"}
					/>
				</svg>
			</button>
		</>
	)
}

export { ThemeSwitch }
