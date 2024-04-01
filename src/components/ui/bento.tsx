import { cn } from "@/lib/utils";

type BentoLayoutProps = {
	className?: string;
	children: React.ReactNode;
};


export const BentoLayout = ({
	className,
	children,
}: BentoLayoutProps) => {

	return (
		<div className={cn(
			"grid grid-cols-3 grid-rows-3 gap-4 p-4 h-screen w-screen overflow-auto",
			className,
		)} >
			{children}
		</div>
	)

}
