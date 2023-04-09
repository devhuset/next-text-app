export default function SubLayout({
	children,
	submodal,
}: {
	children: React.ReactNode;
	submodal: React.ReactNode;
}) {
	return (
		<>
			{children}
			{submodal}
		</>
	);
}
