import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import "../static/css/payment.css";
import "../static/js/payment.js";

export default function Payment({ onCartClick, onClose, counter, setCounter }) {
	const [showQrPopup, setShowQrPopup] = useState(false);
	const [nama, setNama] = useState("");
	const [noTelp, setNoTelp] = useState("");

	const handleCounterChange = (e) => {
		const val = e.target.value.replace(/[^0-9]/g, "");
		setCounter(val === "" ? "" : Math.max(1, parseInt(val)));
	};
	const handleCounterPlus = () => {
		setCounter(prev => (prev === "" ? 1 : prev + 1));
	};
	const handleCounterMinus = () => {
		setCounter(prev => (prev === "" ? 1 : Math.max(1, prev - 1)));
	};

	function formatHarga(val) {
		const harga = val * 7000;
		if (harga >= 1000000) {
			return `Rp. ${(harga/1000000).toFixed(2)} JT`;
		} else {
			return `Rp. ${harga.toLocaleString("id-ID")}`;
		}
	}

	const handlePayNow = async () => {
		// supabase client is imported at top-level
		// Simpan ke Supabase
		const { error } = await supabase.from('orders').insert({
			nama: nama.trim(),
			no_telp: noTelp.trim(),
			jumlah_beli: counter === "" ? 1 : counter
		});
		// Forward ke WhatsApp
		const nomorWa = "6282138619754";
		const namaValue = nama.trim();
		const pesananValue = (counter === "" ? 1 : counter) + " Sop Buah SIGMA BWANG!!";
		const pesan = `Halo, GuE maw order.%0A%0ANama: ${encodeURIComponent(namaValue)}%0APesanan: ${encodeURIComponent(pesananValue)}%0AAlamat:`;
		const url = `https://wa.me/${nomorWa}?text=${pesan}`;
		window.open(url, '_blank');
	};

	return (
		<>
		<div className="payment-form-container">
			<div className="payment-form-box">
				<div className="payment-form-header">
					<span className="payment-title">SOP BUAH SIGMA</span>
					<button className="payment-close" onClick={onClose}>&#10005;</button>
				</div>
				<div className="payment-form-inputs">
					<div className="payment-input-group">
						<div className="payment-input-label">Nama</div>
						<input type="text" className="payment-input" placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
					</div>
					<div className="payment-input-row">
						<div className="payment-input-group" style={{flex: 1}}>
							<div className="payment-input-label">No. Telp</div>
							<input type="text" className="payment-input" placeholder="No. Telp" value={noTelp} onChange={e => setNoTelp(e.target.value)} />
						</div>
						<div className="payment-counter-group">
							<div className="payment-input-label" style={{marginBottom: 4}}>Beli Berapa?</div>
							<div className="payment-counter-box">
								<button className="payment-counter-btn" onClick={handleCounterPlus}>+</button>
								<input type="text" className="payment-counter-value" value={counter} onChange={handleCounterChange} />
								<button className="payment-counter-btn" onClick={handleCounterMinus}>-</button>
							</div>
						</div>
					</div>
				</div>
				<div className="payment-form-bottom">
					<div className="payment-payhere-row">
						<img src="/payHere.svg" alt="Pay Here" className="payment-arrow-svg" />
						<div className="payment-qr-column">
							<img src="/qr.png" alt="QR Code" className="payment-qr-svg qr-clickable" onClick={() => setShowQrPopup(true)} />
							<div className="payment-total-harga">{formatHarga(counter === "" ? 1 : counter)}</div>
						</div>
					</div>
					<div className="payment-btn-row">
						<button className="payment-pay-btn" onClick={handlePayNow}>Pay Now!</button>
						<span className="payment-cart-icon" onClick={onCartClick} style={{cursor: "pointer"}}>
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
						</span>
					</div>
				</div>
			</div>
		</div>
		{showQrPopup && (
			<div className="qr-popup-overlay">
				<div className="qr-popup-box">
					<button className="qr-popup-close" onClick={()=>setShowQrPopup(false)}>&#10005;</button>
					<div className="qr-popup-download-row">
						<svg className="qr-popup-download-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
						<span className="qr-popup-download-label">Download QR</span>
					</div>
					<img src="/qr.png" alt="QR Besar" className="qr-popup-qr-img" />
					<div className="qr-popup-total-harga">{formatHarga(counter === "" ? 1 : counter)}</div>
					<button className="qr-popup-download-btn" onClick={() => {
						const link = document.createElement('a');
						link.href = '/qr.png';
						link.download = 'qr-code.png';
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					}}>Download QR</button>
				</div>
			</div>
		)}
		</>
	);
}
