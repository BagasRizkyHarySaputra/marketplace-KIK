import Background from "../component/background";
import Header from "../component/header";
import "./static/css/faq.css";

export default function FAQ() {
  return (
    <>
      <Background />
      <Header />
      <div className="faq-content">
        {/* <h1 className="faq-title">FAQ</h1> */}
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">Apa itu SOP Buah SIGMA?</div>
            <div className="faq-answer">SOP Buah SIGMA itu bukan cuma minuman—ini buff potion buat jiwa kamu. Sekali minum, aura kamu langsung berubah dari NPC background character jadi protagonis season final. Buah segar? Ada. Es creamy? Ada. Rasa enak? Lebih dari itu bro… ini rasa kemenangan.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Bagaimana cara order?</div>
            <div className="faq-answer">Order itu gampang banget sampai kucing kamu pun bisa. Kamu tinggal klik tombol “Buy Now!” kayak kamu nembak crush kamu dengan confidence unshakable, terus isi data, lanjut bayar sesuai instruksi.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Apakah bisa COD?</div>
            <div className="faq-answer">Bisa dong, kita fleksibel kayak hati kamu saat dia ngetik “hehe”. Mau COD? Gas. Mau QRIS? Ez.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Dimana lokasi pengambilan?</div>
            <div className="faq-answer">SOP Buah SIGMA datang ke kamu, bukan kamu yang ngejar—karena di hubungan ini, kamu yang jadi prize. Tapi kalau kamu pengen ambil sendiri biar keliatan cool, mysterious, dan penuh cold aura, kita kasih lokasi setelah pembayaran selesai. Karena yang ambil sendiri itu bukan pelanggan… itu boss move.</div>
          </div>
        </div>
      </div>
    </>
  );
}
