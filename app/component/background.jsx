import "../static/css/background.css";

export default function Background() {
	return (
		<div className="background">
			{/* Layer 2: Kotak transparan dengan border */}
			<div className="background-box"></div>
			{/* Layer 3: Sidebar putih */}
			<div className="background-sidebar"></div>
			{/* Layer 4: Gambar sopBuah.svg */}
			<img src="/sopBuah.svg" alt="Sop Buah" className="background-image" />
		</div>
	);
}
