import Link from "next/link";
import "../static/css/header.css";
import "../static/js/header.js";

export default function Header() {
	return (
		<header className="header">
			<div className="header-left">
				<img src="/logoSigma.svg" alt="Logo Sigma" className="header-logo" />
			</div>
			<div className="header-right">
                <Link href="/" className="header-link">Home</Link>
				<Link href="/faq" className="header-link">FAQ</Link>
				<a href="https://wa.me/6282138619754" className="header-link" target="_blank" rel="noopener noreferrer">Contact</a>
                
			</div>
		</header>
	);
}
