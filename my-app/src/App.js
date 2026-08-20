import React from 'react';
import Header from './components/Header';
import MovieList from './components/Movielist';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'พัทธดนย์ บุญศรีทอง', nickname: 'เฟิร์ส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['นมกล้วย', 'หมา'] },
  { id: 1, name: 'ธมนวรรณ พานสัมฤทธิ๊', nickname: 'วิว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'หมา'] },
  { id: 1, name: 'วัศพล ก๋อยสุวรรณ', nickname: 'ฮัต',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โค้ก', 'แมว'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;