import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function page() {
	return (
		<div>
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				Workouts
			</h1>

			<div>
				<div>
					<Card>
						<CardHeader>
							<CardTitle>Workout 1</CardTitle>
							<CardDescription>Workout description</CardDescription>
						</CardHeader>
						<div>
							<Button>Start</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
