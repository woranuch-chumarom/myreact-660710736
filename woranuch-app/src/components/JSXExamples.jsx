import React from "react";

function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!</h1>
    const name = 'สมชาย';
    const age = 25;

    const currentYear = new Date().getFullYear;

    const user = {
        firstName: 'วรนุช',
        lastName: 'ชุ่มอารมณ์',
        age: 20 ,
        hobbies: ['อ่านนส', 'ฟังเพลง', 'เล่นเกม']

    };
    
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;
    return(
        <div className = "jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>
            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>

            <section>
                <h2>Attribute ใน JSX</h2>
                <div className="card">
                    <p classname="text-primary">ใช้ classname แทน class</p>
                </div>

                <button 
                    onClick={() => alert('คลิกแล้ว!')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    hover me or Click me!
                </button>

                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px',
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>

                </div>
            </section>

            <section>
                <h2> Conditional Rendering</h2>

                <p>
                    สถานะ: {isLoggedIn ? 'ออนไลน์' : 'ออฟไลน์'}
                </p>
                {hasNotification > 0 && (
                    <div className="notification">
                         คุณมีการแจ้งเตือน {hasNotification} รายการ
                    </div>
                )}
                
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p> {formatName(user)} คุณเป็นผู้ใหญ่</p>;
                    } else {
                        return <p> {formatName(user)} คุณยังไม่บรรลุนิติภาวะ</p>;
                    }
                })()}

            </section>

        </div>
    )
}
export default JSXExamples;