import { type FC, type PropsWithChildren } from "react"
import { twx } from "src/lib/utils.tsx"

export type ButtonProps = PropsWithChildren<{
	isActive?: boolean
	onClick?: () => void
	className?: string
}>

const Button: FC<ButtonProps> = ({ children, className, isActive, onClick }) => {
	return (
		<button
			className={twx(
				"bg-card shadow-container px-5 py-2 rounded-md text-base md:text-lg transition-colors hover:bg-primary hover:text-white",
				{
					"bg-primary text-white": isActive,
				},
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export { Button }
