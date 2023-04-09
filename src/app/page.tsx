import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col gap-4 p-4">
			<Link href="/modal-in-root">Modal in root</Link>
			<Link href="/subdir">Subdir</Link>
		</main>
	);
}
