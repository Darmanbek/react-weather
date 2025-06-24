import { type FC } from "react"
import { Container } from "src/components/ui"
import { CitySelect } from "./city-select.tsx"
import { Logo } from "./logo.tsx"
import { ThemeSwitch } from "./theme-switch.tsx"

const Header: FC = () => {
	return (
		<>
			<header className={"min-h-16"}>
				<Container>
					<div className={"flex gap-5 items-center justify-between"}>
						<Logo />

						<div className={"flex items-center gap-5"}>
							<div className={"hidden sm:block"}>
								<ThemeSwitch />
							</div>
							<CitySelect />
							<div className={"block sm:hidden"}>
								<ThemeSwitch />
							</div>
						</div>
					</div>
				</Container>
			</header>
		</>
	)
}

export { Header }
