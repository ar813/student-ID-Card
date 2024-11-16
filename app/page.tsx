"use client";

import dynamic from 'next/dynamic';

const InputComponent = dynamic(() => import('./component/Input/Input'), { ssr: false });
const CardComponent = dynamic(() => import('./component/Card/Card'), { ssr: false });
import { useState } from "react";

const Home = () => {
  const [schoolName, setSchoolname] = useState<string>('');
  const [schoolAddress, setSchoolAddress] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [fatherName, setFatherName] = useState<string>('');
  const [rollNo, setRollNo] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [startingDate, setStartingDate] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [logoo, setlogoo] = useState<string | null>(null);
  const [profilPicture, setProfilPicture] = useState<string | null>(null);

  const [showInput, setShowInput] = useState<boolean>(true);
  const [showCard, setShowCard] = useState<boolean>(false);


  return (
    <div>
      <div  className={` ${showInput ? "block" : "hidden"} `}>
        <InputComponent
          setSchoolname={setSchoolname}
          setSchoolAddress={setSchoolAddress}
          setStudentName={setStudentName}
          setFatherName={setFatherName}
          setRollNo={setRollNo}
          setDateOfBirth={setDateOfBirth}
          setLevel={setLevel}
          setPhoneNo={setPhoneNo}
          setStartingDate={setStartingDate}
          setExpiryDate={setExpiryDate}
          setLogoo={setlogoo}
          setProfilPicture={setProfilPicture}
          setShowInput={setShowInput}
          setShowCard={setShowCard}
        />
      </div>
      <div className={` ${showCard ? "block" : "hidden"} `}>
        <CardComponent
          schoolName={schoolName}
          schoolAddress={schoolAddress}
          studentName={studentName}
          fatherName={fatherName}
          rollNo={rollNo}
          dateOfBirth={dateOfBirth}
          level={level}
          phoneNo={phoneNo}
          startingDate={startingDate}
          expiryDate={expiryDate}
          logoo={logoo}
          profilPicture={profilPicture}
          setShowCard={setShowCard}
          setShowInput={setShowInput}
        />
      </div>
    </div>
  );
};

export default Home;
