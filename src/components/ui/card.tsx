import { type FC, type PropsWithChildren } from "react"

const Card: FC<PropsWithChildren> = ({ children }) => (
	<article className={"bg-card p-5 rounded-2xl shadow-container h-full"}>{children}</article>
)

export { Card }
