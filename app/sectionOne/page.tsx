"use client";

import { useState } from "react";
import html2pdf from "html2pdf.js";

export default function Home() {

  const [students, setStudents] = useState<any>([]);
  const [name, setName] = useState<any>("");
  const [fatherName, setFatherName] = useState<any>("");
  const [rollNo, setRollNo] = useState<any>("");

  const addStudent = () => {
    setStudents([...students, { name, fatherName, rollNo }]);
    setName("");
    setFatherName("");
    setRollNo("");
  };

  const generatePDF = () => {
    const element = document.getElementById("pdf-content");
    const options = {
      margin: 1,
      filename: "students.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Form</h1>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input type="text"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Father's Name</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Roll No</label>
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={addStudent}
      >
        Next Student
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={generatePDF}
      >
        Generate PDF
      </button>

      <div id="pdf-content" className="mt-6">
        {students.map((student:any, index:any) => (
          <div key={index} className="page-break mb-4 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">Student {index + 1}</h2>
            <p>Name: {student.name}</p>
            <p>Father's Name: {student.fatherName}</p>
            <p>Roll No: {student.rollNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
