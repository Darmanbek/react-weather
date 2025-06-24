import { type FC, type PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className={"p-3 md:p-5"}>{children}</div>
		</>
	)
}

export { Layout }
