export function formatHarga(val) {
	const harga = val * 7000;
	if (harga >= 1000000) {
		return `Rp. ${(harga/1000000).toFixed(2)} JT`;
	} else {
		return `Rp. ${harga.toLocaleString("id-ID")}`;
	}
}
