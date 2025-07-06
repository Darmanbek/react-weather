import { type FC, useEffect, useState } from "react"
import { SunIcon } from "src/assets"
import { Card } from "src/components/ui"
import { twx } from "src/lib/utils.tsx"

interface LoadingProps {
	loading?: boolean
}

const Loading: FC<LoadingProps> = ({ loading }) => {
	const [isHidden, setIsHidden] = useState(false)

	useEffect(() => {
		if (loading) {
			setIsHidden(false)
			return
		}
		const timer = setTimeout(() => {
			setIsHidden(true)
		}, 2000)
		return () => {
			clearTimeout(timer)
		}
	}, [loading])
	return (
		<>
			<div
				className={twx(
					"w-screen h-screen absolute top-0 left-0 right-0 bottom-0 inset-0 bg-background overflow-hidden z-50 flex justify-center items-center",
					{
						"opacity-0 pointer-events-none animate-hidden": !loading,
						"opacity-1 pointer-events-auto animate-show": loading,
						hidden: isHidden,
					}
				)}
			>
				<Card className={"w-48 md:w-64 h-48 md:h-64 p-12"}>
					<img
						src={SunIcon}
						className={"animate-spin w-full animation-duration-5000"}
						alt={"Загрузка..."}
					/>
				</Card>
			</div>
		</>
	)
}

export { Loading }
