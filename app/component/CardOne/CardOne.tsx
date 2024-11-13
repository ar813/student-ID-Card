"use client";
import { useState } from "react";
import { jsPDF } from 'jspdf';

// npm install jspdf

export default function Home() {

  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [level, setLevel] = useState('')
  const [pic, setPic] = useState('')
  const [startingyear, setStartingyear] = useState('')
  const [lastyear, setLastyear] = useState('')

  if (level == '1') {
    setLevel('level-1')
  } else if (level == '2') {
    setLevel('level-2')
  } else if (level == '3') {
    setLevel('level-3')
  } else if (level == '4') {
    setLevel('level-4')
  } else if (level == '5') {
    setLevel('level-5')
  } else if (level == '6') {
    setLevel('level-6')
  } else if (level == '7') {
    setLevel('level-7')
  } else if (level == '8') {
    setLevel('level-8')
  } else if (level == '9') {
    setLevel('SSC I')
  } else if (level == '10') {
    setLevel('SSC II')
  }

  function handleImageUpload(e: any) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function forPdf() {
    let doc = new jsPDF()
    if (name && fatherName && rollNo && startingyear && lastyear && level) {

      doc.rect(20, 30, 120, 70);
      doc.setFillColor(220, 220, 220);
      doc.setDrawColor(0, 0, 0);
      doc.rect(103, 54, 28, 28, 'FD');

      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('Al Ghazali High School', 38, 41);

      doc.setDrawColor(0, 0, 0);
      doc.line(25, 47, 133, 47);

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text(`Name: ${name}`, 25, 60);
      doc.text(`Father Name: ${fatherName}`, 25, 66);
      doc.text(`Roll No: ${rollNo}`, 25, 72);
      doc.text(`Class: ${level}`, 25, 78);
      doc.text(`Date of Expiry: ${startingyear} to ${lastyear}`, 25, 84);

      if (pic) {
        doc.addImage(pic, 'PNG', 103, 54, 28, 28);
      }

      doc.line(103, 90, 132, 90)
      doc.setFontSize(12)
      doc.text("Signature", 108, 96)

      // doc.setTextColor(255, 0, 0);
      // e:React.ChangeEvent<HTMLInputElement>

      doc.save('document-with-image.pdf')

    } else {
      alert('Please enter all the details')
    }

  }

  return (
    <div className="w-full h-screen flex justify-center items-center ">

      <div className="w-[470px] h-[455px] p-7 m-3 overflow-scroll	overflow-x-hidden rounded shadow-[0px_0px_10px_gray]">

        <h1 className="text-lg mb-[7px]">User Name</h1>
        <input type="text" placeholder="Enter Your Name" maxLength={27} onChange={(e) => { setName(e.target.value) }} className="block w-full border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

        <h1 className="text-lg my-[7px]">Father Name</h1>
        <input type="text" placeholder="Enter Your Father Name " maxLength={20} onChange={(e) => { setFatherName(e.target.value) }} className="block w-full border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

        <h1 className="text-lg my-[7px]">Roll No</h1>
        <input type="number" placeholder="Enter Your Roll no" onChange={(e) => { setRollNo(e.target.value) }} className="block w-full border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

        <h1 className="text-lg my-[7px]">Class</h1>
        <input type="number" placeholder="Enter Your Class" onChange={(e) => { setLevel(e.target.value) }} className="block w-full border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

        <h1 className="text-lg my-[7px] mt-[10px]">Date of Expiry</h1>

        <div className="flex justify-between">
          <input type="date" placeholder="Starting year" onChange={(e) => { setStartingyear(e.target.value) }} className=" w-1/3 border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

          <h1 className="text-lg my-[7px] inline">to</h1>
          <input type="date" placeholder="Last year" onChange={(e) => { setLastyear(e.target.value) }} className=" w-1/3 border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />
        </div>

        <h1 className="text-lg my-[8px] mt-[12px]">{`Picture (Optional)`}</h1>
        <input type="file" onChange={handleImageUpload} className="block w-full border-[1px] border-[#ccc] p-2 focus:border-[green] outline-none" />

        <button className="w-full text-xl bg-[green] text-white mt-[30px] h-[40px] hover:bg-[darkgreen]" onClick={forPdf}>Download PDF</button>

      </div>

    </div>

  )
}
