Scope Document
— Simple Calculator


Objective
สร้างเครื่องคิดเลขพื้นฐานที่สามารถคำนวณการบวก ลบ คูณ หาร ได้อย่างถูกต้อง มีการจัดการข้อผิดพลาดพื้นฐาน เช่น หารด้วยศูนย์ และมี UI ที่แสดงสถานะการคำนวณ เพื่อให้ผู้ใช้ทราบว่าเลขใดทำอะไรกับเลขใด ก่อนกด =


Features (IN)
- ปุ่มตัวเลข 0–9
- จุดทศนิยม '.'
- Operators: +, −, ×, ÷
- ปุ่ม '=' เพื่อคำนวณ
- ปุ่ม 'C' (Clear) และ Backspace (←)
- Expression display: แสดง `previousValue operator` ก่อนกด = และแสดง `a op b =` หลังกด =
- UI responsive พอสมควร (desktop & mobile)
- สามารถรันได้ทันทีใน browser (index.html)


out of Scope (OUT)
- Scientific functions (sin, cos, tan, log, ฯลฯ)
- Expression parser ขั้นสูง (เช่น operator precedence ที่ซับซ้อน) — ระบบนี้คำนวณแบบ immediate-execution ตาม flow ที่กำหนด
- Multi-user, Database, Authentication


## Non-Functional Requirements
- รันบน modern browsers (Chrome, Firefox, Edge)
- โหลดเร็ว (ไฟล์เดียว หรือแยก css/js แต่ขนาดเล็ก)
