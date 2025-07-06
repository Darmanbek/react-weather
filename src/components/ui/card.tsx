import { type FC, type PropsWithChildren } from "react"
import { twx } from "src/lib/utils.tsx"

interface CardProps {
	className?: string
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className }) => (
	<article className={twx("bg-card p-5 rounded-2xl shadow-container h-full", className)}>
		{children}
	</article>
)

export { Card }
