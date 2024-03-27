import { UserButton } from "@clerk/nextjs";

export function NavBar() {
	return (
		<div>
			<h1>Navigation bar</h1>
			<UserButton />
		</div>
	);
}
