import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${name}, chúng tôi đã nhận tin nhắn: "${msg}"`);
    setName("");
    setMsg("");
  };

  return (
    <div>
      <h2>Liên hệ</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ margin: "5px" }}
        />
        <br />
        <textarea
          placeholder="Tin nhắn..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          style={{ margin: "5px" }}
        />
        <br />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default Contact;
