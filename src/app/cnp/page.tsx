import { BentoLayout } from "@/components/ui/bento";
import { buttonVariants } from "@/components/ui/button";
import {
	Clock12Icon,
	DumbbellIcon,
	FlowerIcon,
	PieChartIcon,
} from "lucide-react";
import Link from "next/link";

export default function Cnp() {
	const datetime = new Date().toLocaleString();

	return (
		<BentoLayout>
			<div className="bg-red-500 p-4 text-white text-center font-bold border rounded-xl">
				<Link href="#">
					<div className="flex gap-3 items-center align-middle">
						<PieChartIcon width={30} />
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							Analytics
						</h4>
					</div>
					<div className="flex justify-start py-2">
						<small>Accurate data on your training sessions</small>
					</div>
				</Link>
			</div>
			<div className="flex flex-col gap-y-4 h-full">
				<div className="bg-green-500 p-4 text text- text-white text-center font-bold flex-grow">
					<Link href="#">
						<div>
							<p>Completed Workouts</p>
						</div>
					</Link>
				</div>

				<div className="col-span-2 border rounded-xl bg-yellow-500 p-4 text-white font-bold flex-grow">
					<Link href="/cnp/datetime">
						<div className="flex gap-3 items-center align-middle">
							<Clock12Icon width={30} />
							<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
								Date & Time
							</h4>
						</div>

						<div className="text-black flex justify-end items-center align-middle h-full">
							{datetime}
						</div>
					</Link>
				</div>
			</div>

			<div className="row-span-2 bg-purple-500 rounded-xl border p-4 text-white font-bold">
				<Link href="/cnp/workouts" className="w-full h-full">
					<div className="flex gap-3 items-center align-middle">
						<DumbbellIcon width={30} />
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							Workouts
						</h4>
					</div>
					<div>
						<p className="text-sm text-gray-300">
							We are motivated by the desire to achieve the best possible
							results for our clients.
						</p>
					</div>
					<ul>
						<li>Workouts</li>
						<li>Workouts</li>
						<li>Workouts</li>
						<li>Workouts</li>
						<li>Workouts</li>
						<li>Workouts</li>
						<li>Workouts</li>
					</ul>
				</Link>
			</div>

			<div className="col-span-2 row-span-2 bg-blue-500 p-4 text-white text-center font-bold rounded-xl border bg-[url('../../public/pexels-mister-mister-3490348.jpg')] bg-cover bg-center">
				<Link href="/cnp" className={buttonVariants({ variant: "ghost" })}>
					Main Area
				</Link>
			</div>

			<div className="bg-red-500 p-4 rounded-xl border text-white font-bold">
				<Link href="/cnp/motivations">
					<div className="flex gap-3 items-center align-middle">
						<FlowerIcon width={30} />
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							Motivations
						</h4>
					</div>
					<div className="flex flex-col justify-center  items-center align-middle">
						<p className="text-sm text-gray-300">
							We are motivated by the desire to achieve the best possible
							results for our clients.
						</p>
						<span className="py-4">&quot;Strive for the best ...&quot; </span>
					</div>
				</Link>
			</div>
		</BentoLayout>
	);
}
