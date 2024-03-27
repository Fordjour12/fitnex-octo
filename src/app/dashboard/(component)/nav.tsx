import { UserButton } from "@clerk/nextjs";
import { CogIcon, HomeIcon, PieChartIcon } from "lucide-react";
import Link from "next/link";

export function NavBar() {
	return (
		<nav className="flex flex-col items-start justify-between h-full text-white p-4">
			<ul className="space-y-4">
				<Link href="/dashboard" className="flex gap-3 items-center hover:text-blue-500">
					<HomeIcon />
					<span> Dashboard </span>
				</Link>
				<Link href="/settings" className="flex gap-3 items-center hover:text-blue-500">
					<CogIcon />
					<span>Settings</span>
				</Link>
				<Link href="/analytics" className="flex gap-3 items-center hover:text-blue-500">
					<PieChartIcon />
					<span>Analytics</span>
				</Link>
			</ul>

			<div className="mt-auto">
				<UserButton />
			</div>
		</nav>
	);
}
