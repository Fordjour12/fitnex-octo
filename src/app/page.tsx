import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Root() {
	const { userId } = auth()

	return (

		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

			<div
				className="relative p-4 rounded-md h-screen w-screen">
				<div className="float-end">
					<Button asChild>
						<Link href={userId ? "/dashboard" : "/sign-up"}>{userId ? "Dashboard" : "Get Started"}</Link>
					</Button>
				</div>

				<div className="flex flex-col justify-center items-center h-[90vh] w-[90vw]">
					<div>
						<small className="text-base">Fitnex</small>
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-7xl">Workout with us</h1>
					</div>
					<small className="text-base underline underline-offset-4"> A Fitness Regimine For Everyone</small>
				</div>
			</div>
		</div>
	);
}

