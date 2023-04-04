import './globals.css'

export const metadata = {
	title: 'Noxy - next',
	description: 'Proyecto de Next 13 con Upstash (Redis)',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="favicon.ico" />
			</head>
			<body className="bg-[#181818] text-neutral-50">{children}</body>
		</html>
	)
}
