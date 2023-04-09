import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="flex flex-col gap-4 p-4">
			<Link href="/subdir/modal-in-subdir">Modal in subdir</Link>
			<Link href="/">Home</Link>
		</main>
	);
}
