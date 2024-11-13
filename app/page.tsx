"use client";

import CartTwo from "./component/CardTwo/CardTwo";
import Input from "./component/Input/Input";
import { useState } from "react";

const Home = () => {
  const [schoolName, setSchoolname] = useState('');
  const [schoolAddress, setSchoolAddress] = useState('');
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [level, setLevel] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [logoo, setlogoo] = useState<string | null>(null);
  const [profilPicture, setProfilPicture] = useState<string | null>(null);

  const [showInput, setShowInput] = useState(true);
  const [showCard, setShowCard] = useState(false);


  return (
    <div>
      <div  className={` ${showInput ? "block" : "hidden"} `}>
        <Input
          setSchoolname={setSchoolname}
          setSchoolAddress={setSchoolAddress}
          setStudentName={setStudentName}
          setFatherName={setFatherName}
          setRollNo={setRollNo}
          setDateOfBirth={setDateOfBirth}
          setLevel={setLevel}
          level = {level}
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
        <CartTwo
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
