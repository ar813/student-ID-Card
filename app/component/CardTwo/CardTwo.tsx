"use client"
// @ts-ignore
import QRCode from "qrcode";
// @ts-ignore
import html2pdf from "html2pdf.js"
import { IoBackspaceSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useRef, useState } from "react";
import Image from "next/image"
import shapeOne from "../../../public/images/Shape 1.png"
import profilPic from "../../../public/images/profilPic.png"
import logo from "../../../public/images/h.png"
import shapeTwo from "../../../public/images/Shape 2.png"
import shapeThree from "../../../public/images/Shape 1 (1).png"
import qrcode from "../../../public/images/qrcode.png"



// npm i html2pdf.js@0.9.0

const page = ({ schoolName, schoolAddress, studentName, fatherName, rollNo, dateOfBirth, level, phoneNo, startingDate, expiryDate, logoo, profilPicture, setShowCard, setShowInput }: any) => {

  const slidesRef = useRef(null)
  const handleGeneratePdf = () => {
    if (schoolName && schoolAddress && studentName && fatherName && rollNo && dateOfBirth && level && phoneNo && startingDate && expiryDate) {
      const opt = {
        margin: 1,
        filename: "student_card",
        image: { type: "jpeg", quality: 0.981 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      }
      html2pdf().from(slidesRef.current).set(opt).save();
    }else{
      alert("Data is required")
    }
  }


  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  const handleGenerateQRCode = () => {
    const combinedText = `Name: ${studentName}\nFather Name: ${fatherName}\nRoll No: ${rollNo}\nClass: ${level}\nSchool: ${schoolName} \nPhone No: ${phoneNo}`;
    QRCode.toDataURL(combinedText)
      .then((url: any) => {
        setQrCodeData(url);
      })
      .catch((err: any) => {
        console.error("Error generating QR Code", err);
      });

  };

  function showing() {
    setShowCard(false)
    setShowInput(true)
  }



  return (
    <div className={`flex flex-col items-center justify-center sm:h-screen `} >

      <div ref={slidesRef} className="sm:p-5 sm:my-10 w-full sm:w-[500px] sm:shadow-[0px_0px_4px_gray] bg-white sm:rounded-[10px] flex flex-col sm:flex-row items-center justify-center  py-10">

        <div className="w-[204px] h-[322px] border-green-800 border-[1px] flex flex-col items-center">

          <Image src={shapeOne} alt="shape one"></Image>

          <h1 className="absolute text-white mt-[20px]  uppercase text-[12px] font-Kameron">{schoolName ? schoolName : 'SCHOOL NAME'}</h1>
          <p className="absolute text-white mt-[38px] text-[8px] uppercase font-Roboto">{schoolAddress ? schoolAddress : 'SCHOOL ADDRESS'}</p>

          <Image src={profilPicture ? profilPicture : profilPic} width={100} height={100} alt="Arsalan Pic" className="w-[80px] h-[80px] border-4 border-[#FFCC3B] absolute mt-[75px]"></Image>

          <h1 className="mt-[51px] text-[12px] font-Kameron uppercase font-bold text-[#FFA10B]">{studentName ? studentName : 'ARSALAN KHAN'}</h1>
          <h1 className="text-[10px] text-[#FFCC3B] font-semibold uppercase font-Roboto">STUDENT</h1>

          <div className="mt-[220px] absolute">
            <p className="text-[8px] font-Roboto capitalize font-medium"><span className="mr-[4px] text-[#FFCC3B] font-bold">F.Name</span> :{fatherName ? fatherName : 'Father Name'}</p>
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[4px] text-[#FFCC3B] font-bold">Roll No</span> :{rollNo ? rollNo : "00000"}</p>
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[14px] text-[#FFCC3B] font-bold">DOB</span> :{dateOfBirth ? dateOfBirth : 'DD/MM/YEAR'}</p>
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[10px] text-[#FFCC3B] font-bold">Class</span> :{level ? level : "Level-1"}</p>
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[7px] text-[#FFCC3B] font-bold">Phone</span> :{phoneNo ? phoneNo : "03093678739"}</p>
          </div>

          <Image src={shapeTwo} alt="shape two" className="mt-[64px]"></Image>

        </div>

        <div className="w-[204px] h-[322px] border-green-800 border-[1px] mt-10 sm:mt-0 sm:ml-10">
          <Image src={shapeThree} alt="Arsalan Pic" className="absolute w-[202px]"></Image>

          <Image src={logoo ? logoo : logo} alt="logo" width={100} height={100} className="absolute mt-[14px] size-[50px] ml-3"></Image>
          <Image src={qrCodeData ? qrCodeData : qrcode} width={100} height={100} alt='qrcode' className="w-[100px] mt-[100px] ml-[50px]"></Image>

          <div className="mt-[15px] ml-[50px] absolute">
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[4px] text-[#FFCC3B] font-bold">Starting Date</span> :{startingDate ? startingDate : "DD/MM/YEAR"}</p>
            <p className="text-[8px] font-Roboto font-medium"><span className="mr-[11px] text-[#FFCC3B] font-bold">Expiry Date</span> :{expiryDate ? expiryDate : "DD/MM/YEAR"}</p>
            <div className="w-[100px] border border-solid border-black mt-[25px] mb-[5px]"></div>
            <p className="text-[10px] text-center font-Roboto font-bold">Signature</p>
          </div>

          <Image src={shapeTwo} alt="shape two" className="mt-[67px]"></Image>

        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white w-full pb-10 sm:bg-transparent">
        <button onClick={handleGeneratePdf} className="bg-[green] sm:w-[500px] w-[205px] p-1 text-white text-sm sm:text-lg hover:bg-[white] hover:text-[green] hover:border hover:border-[green] rounded-[5px] transition-colors">Generate PDF <FaFilePdf className="inline text-lg sm:text-xl ml-2" /></button>
        <button className="bg-[green] sm:w-[500px] w-[205px] p-1 text-white mt-[10px] text-sm sm:text-lg hover:bg-[white] hover:text-[green] hover:border hover:border-[green] rounded-[5px] transition-colors" onClick={handleGenerateQRCode}>Generate QR Code <MdOutlineQrCodeScanner className="inline text-lg sm:text-2xl" /></button>
        <button className="bg-[green] sm:w-[500px] w-[205px] p-1 text-white mt-[10px] text-sm sm:text-lg hover:bg-[white] hover:text-[green] hover:border hover:border-[green] rounded-[5px] transition-colors" onClick={showing}><IoBackspaceSharp className="inline text-lg sm:text-2xl" /> Go Back</button>
      </div>
    </div>
  );
}

export default page

