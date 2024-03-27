import { NavBar } from "./(component)/nav";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row gap-6">
			<div className="w-1/12">
				<NavBar />
			</div>
			<div className="w-11/12">{children}</div>
		</div>
	);
}
