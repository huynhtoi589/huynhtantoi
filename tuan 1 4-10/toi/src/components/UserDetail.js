import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!user) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      <p><strong>Tên:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Điện thoại:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <button onClick={() => navigate(-1)}>⬅️ Quay lại</button>
    </div>
  );
}

export default UserDetail;
