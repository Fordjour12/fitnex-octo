import NavBar from "./(component)/nav"

export default function DexLayout({ children }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className="flex max-h-screen m-4">
				<div>
					<NavBar />
				</div>

				<div className="flex-grow overflow-auto">
					{children}
				</div>
			</div>
		</>

	)
}
