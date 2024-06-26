import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../lib/env";
import "./globals.css";

const lato = Lato({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
	title: "Fitnex",
	description: "A Fitness Regimen For Everyone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lato.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ClerkProvider>{children}</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
