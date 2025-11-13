import studentImage from '../img/student.jpg';

const Home = () => {
  return (
    <div className="text-center" style={{ marginTop: '40px' }}>
      <img
        src={studentImage}
        alt="Student"
        style={{
          width: '200px',
          borderRadius: '50%',
          display: 'block',
          margin: '0 auto 20px',
        }}
      />
      <p><strong>รหัสนักศึกษา:</strong> 67109320</p>
      <p><strong>ชื่อ-สกุล:</strong> นายธีรเดช ม้าจีน</p>
      <p><strong>ชั้นปี/สาขา/คณะ/มหาวิทยาลัย:</strong> ปี 2/วิทยาการคอม/คณะเทคโนโลยีสารสนเทศ/มหาวิทยาลัยศรีปทุม</p>
      <p>สวัสดีครับ ผมเป็นนักศึกษาที่สนใจการเขียนโค้ดและพัฒนาเว็บไซต์ ชอบเรียนรู้เทคโนโลยีใหม่ๆ</p>
    </div>
  );
};

export default Home;
