// components/ScrollArea.tsx
import { type FC, type HTMLAttributes, type ReactNode, useEffect, useRef, useState } from "react"
import { twx } from "src/lib/utils.tsx"

type ScrollAreaProps = {
	children: ReactNode
	className?: string
} & HTMLAttributes<HTMLDivElement>

const ScrollArea: FC<ScrollAreaProps> = ({ children, className, ...props }) => {
	const viewportRef = useRef<HTMLDivElement>(null)
	const thumbRef = useRef<HTMLDivElement>(null)
	const trackRef = useRef<HTMLDivElement>(null)

	const [thumbHeight, setThumbHeight] = useState(0)
	const [thumbTop, setThumbTop] = useState(0)
	const [isDragging, setIsDragging] = useState(false)

	// Resize thumb height based on content
	useEffect(() => {
		const viewport = viewportRef.current
		if (!viewport) return

		const updateThumb = () => {
			const { scrollHeight, clientHeight, scrollTop } = viewport
			const ratio = clientHeight / scrollHeight
			setThumbHeight(ratio * clientHeight)
			setThumbTop((scrollTop / scrollHeight) * clientHeight)
		}

		updateThumb()
		viewport.addEventListener("scroll", updateThumb)
		window.addEventListener("resize", updateThumb)

		return () => {
			viewport.removeEventListener("scroll", updateThumb)
			window.removeEventListener("resize", updateThumb)
		}
	}, [])

	// Drag scroll logic
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging || !viewportRef.current || !trackRef.current) return

			const trackRect = trackRef.current.getBoundingClientRect()
			const offsetY = e.clientY - trackRect.top
			const scrollRatio = offsetY / trackRect.height
			const scrollPosition = scrollRatio * viewportRef.current.scrollHeight

			viewportRef.current.scrollTop = scrollPosition
		}

		const stopDrag = () => setIsDragging(false)

		window.addEventListener("mousemove", handleMouseMove)
		window.addEventListener("mouseup", stopDrag)

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("mouseup", stopDrag)
		}
	}, [isDragging])

	return (
		<div
			className={twx("relative", className)}
			{...props}
		>
			<div
				ref={viewportRef}
				className={"overflow-y-hidden pr-2 max-h-64"}
			>
				{children}
			</div>

			<div
				ref={trackRef}
				className={"absolute top-0 right-0 w-2 h-full bg-transparent"}
			>
				<div
					ref={thumbRef}
					style={{ height: `${thumbHeight}px`, top: `${thumbTop}px` }}
					className={
						"absolute w-full bg-slate-400 rounded-full cursor-pointer transition-colors hover:bg-slate-500"
					}
					onMouseDown={() => setIsDragging(true)}
				/>
			</div>
		</div>
	)
}

export default ScrollArea
