import { type FC, type PropsWithChildren } from "react"

const Container: FC<PropsWithChildren> = ({ children }) => (
	<div className={"max-w-screen-xl w-full mx-auto"}>{children}</div>
)

export { Container }
