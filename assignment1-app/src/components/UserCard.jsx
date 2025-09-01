import React from 'react';
import cat from '../cat.png';


// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={cat} 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '90px',
            height: '60px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h2 style={{ color: '#667eea', margin: '10px 0' }}>
        วรนุช ชุ่มอารมณ์
    </h2>
);

const UserNickname = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        ชื่อเล่น แอล
    </p>
);

const UserBirthdate = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        เกิดวันที่ 27 ธันวาคม 2547
    </p>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักพัฒนา React มือใหม่ที่กำลังเรียนรู้ <br />
        <br /> My hobbies : ฟังเพลง
    </p>
);



// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserNickname />
            <UserBirthdate />
            <UserBio />
            
        </div>
    );
};

export default UserCard;