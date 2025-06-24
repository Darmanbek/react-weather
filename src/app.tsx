import { type FC } from "react"
import { Header, Layout } from "src/components/layout"
import { Container } from "src/components/ui"
import { Day, DayInfo, DaysInfo } from "src/components/widgets"

const App: FC = () => {
	return (
		<>
			<Layout>
				<Header />
				<section className={"mt-4 md:mt-6"}>
					<Container>
						<div className={"grid gap-12 grid-cols-1 md:grid-cols-10 md:justify-between"}>
							<div className={"md:col-span-4"}>
								<Day />
							</div>
							<div className={"md:col-span-6"}>
								<DayInfo />
							</div>
						</div>
					</Container>
				</section>
				<section>
					<Container>
						<DaysInfo />
					</Container>
				</section>
			</Layout>
		</>
	)
}

export { App }
