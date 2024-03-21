import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://cts.ssru.ac.th/File/EN/EnrollmentDocument/tft5aozt.jpg" />

        <Title title="ชื่อ-นามสกุล : นายณัฐวุฒิ หินโน ">
          <h3>ชื่อเล่น : ฮาร์ท</h3>
        </Title>

        <Title title="ข้อมูลติดต่อ">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/08/21").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : 0971961428
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : heartjaja45@gmail.com</p>
          <p>Line  : 0832933635</p>
        </Title>
    
        <Title title="การศึกษา">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
          <p>GPA:3.69</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="โปรไฟล์">
          <p>สวัสดีครับผมชื่อนายณัฐวุฒิ หินโนทัศนะคติผมเป็นคนเฮฮาสนุกแต่เมื่อเวลาได้รับงานที่มอบหมายผมจะจริงจังและ</p>
          <p>ตั้งใจทำให้งานเสร็จสมบูรณ์ตรงตามเวลาที่กำหนดผมเชื่อว่าทุกอย่างเราต้องใส่ใจรายละเอียดเสมอและพร้อมที่จะเรียนรู้สิ่งใหม่ๆ</p>
        </Title>

        <Title title="ประสบการณ์/คุณสมบัติ">
          <p>-ผ่านการทำ โปรเจคเรื่องการศึกษาและพัฒนาเว็บเพื่อให้ความรู้เกี่ยวกับการออกแบบที่ถูกต้องและการศึกษาการเกิดก๊าซเรือนกระจกจากการใช้ไฟฟ้า</p>
          <p>-เว็บไซต์ที่ให้ความรู้เกี่ยวการออกแบบเว็บไซต์และสามารถคำนวณค่าก๊าซเรือนกระจกจากการใช้ไฟฟ้า</p>
          <p>-พนักงานพาสไทม์ บริษัท ซีพีออลล์ จำกัด(มหาชน)</p>
          <p>HTML/CSS/JS</p>
          <p>React.js -Photoshop</p>
          <p>Next.js  -Capcut</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>

        <Title title="การฝึกอบรม">
        <p>
        <p>-ออกแบบการเขียนเว็บไซต์หัวข้อการขายของออนไลน์</p>
        <p>-อบรมกราฟฟิกหัวข้อออกแบบโมเดล 3D</p>
        <p>-อบรมเตรียมความพร้อมทางด้านไอที</p>
        </p>
        </Title>

      </div>
    </main>
  )
}

export default App
