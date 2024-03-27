import { NavBar } from "./(component)/nav";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row gap-6">
			<NavBar />
			<div>{children}</div>
		</div>
	);
}
