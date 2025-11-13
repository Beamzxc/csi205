const AppFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        borderTop: "1px solid #ccc",
        padding: "16px 0",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#555",
        marginTop: "auto", // สำคัญ! ดัน footer ลงล่าง
      }}
    >
      <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>
        มหาวิทยาลัยศรีปทุม<br />
        คณะเทคโนโลยีสารสนเทศ สาขา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </h4>
      <div>
        ติดต่อเรา:{" "}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#1877f2" }}>
          Facebook
        </a>{" "}
        |{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#e4405f" }}>
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;