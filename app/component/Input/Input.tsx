"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { IoEyeSharp } from "react-icons/io5";


type InputProps = {
    setSchoolname: (value: string) => void;
    setSchoolAddress: (value: string) => void;
    setStudentName: (value: string) => void;
    setFatherName: (value: string) => void;
    setRollNo: (value: string) => void;
    setDateOfBirth: (value: string) => void;
    setLevel: (value: string) => void;
    level: string;
    setPhoneNo: (value: string) => void;
    setStartingDate: (value: string) => void;
    setExpiryDate: (value: string) => void;
    setLogoo: (value: string | null) => void;
    setProfilPicture: (value: string | null) => void;
    setShowInput: (value: boolean) => void;
    setShowCard: (value: boolean) => void;
  };  
  
const Input: React.FC<InputProps>  = ({ setSchoolname, setSchoolAddress, setStudentName, setFatherName, setRollNo, setDateOfBirth, setLevel, level, setPhoneNo, setStartingDate, setExpiryDate, setLogoo, setProfilPicture, setShowInput, setShowCard }) => {

    useEffect(()=>{
        AOS.init({
            duration: 700,
            offset: 50,
        });
    })


    const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a URL for the selected file
            const objectUrl = URL.createObjectURL(file);
            setLogoo(objectUrl);
        }
    }

    const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a URL for the selected file
            const objectUrl = URL.createObjectURL(file);
            setProfilPicture(objectUrl);
        }
    }

    function showing() {
        setShowCard(true)
        setShowInput(false)
    }

    if (level == '1') {
        setLevel("Level-1")
    } else if (level == '2') {
        setLevel("Level-2")
    } else if (level == '3') {
        setLevel("Level-3")
    } else if (level == '4') {
        setLevel("Level-4")
    } else if (level == '5') {
        setLevel("Level-5")
    } else if (level == '6') {
        setLevel("Level-6")
    } else if (level == '7') {
        setLevel("Level-7")
    } else if (level == '8') {
        setLevel("Level-8")
    } else if (level == '9') {
        setLevel("SSC I")
    } else if (level == "10") {
        setLevel("SSC II")
    } else if (level == "11") {
        setLevel("HSC I")
    } else if (level == "12") {
        setLevel("HSC II")
    }

    return (
        <div className={`flex justify-center items-center`}>
            <div className='p-5 sm:my-10 w-[500px] sm:shadow-[0px_0px_4px_gray] sm:hover:shadow-[0px_0px_10px_gray] bg-white sm:rounded-[10px]'>

                <h1 className='text-center text-[20px] sm:text-[25px] font-bold font-Roboto mb-[25px]'>Student ID Card</h1>

                <h1  data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>School Name:</h1>
                <input data-aos="fade-down" type="text" onChange={(e) => { setSchoolname(e.target.value) }} placeholder='Enter Your School Name' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2'/>

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>School Address:</h1>
                <input data-aos="fade-down" type="text" onChange={(e) => { setSchoolAddress(e.target.value) }} placeholder='Enter Your School Address' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Student Name:</h1>
                <input data-aos="fade-down" type="text" onChange={(e) => { setStudentName(e.target.value) }} placeholder='Enter Your Name' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Father Name:</h1>
                <input data-aos="fade-down" type="text" onChange={(e) => { setFatherName(e.target.value) }} placeholder='Enter Your Father Name' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Roll Number:</h1>
                <input data-aos="fade-down" type="number" onChange={(e) => { setRollNo(e.target.value) }} placeholder='Enter Your Roll Number' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Date of Birth:</h1>
                <input data-aos="fade-down" type="date" onChange={(e) => { setDateOfBirth(e.target.value) }} placeholder='Enter Your Date of Birth' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Class:</h1>
                <input data-aos="fade-down" type="number" onChange={(e) => { setLevel(e.target.value) }} placeholder='Enter Your Class' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Phone Number:</h1>
                <input data-aos="fade-down" type="number" onChange={(e) => { setPhoneNo(e.target.value) }} placeholder='Enter Your Phone Number' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Starting Date:</h1>
                <input data-aos="fade-down" type="date" onChange={(e) => { setStartingDate(e.target.value) }} placeholder='Enter Your Joining Date' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Expiry Date:</h1>
                <input data-aos="fade-down" type="date" onChange={(e) => { setExpiryDate(e.target.value) }} placeholder='Enter Your Expiry Date' className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Logo:</h1>
                <input data-aos="fade-down" type="file" onChange={handleLogo} className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <h1 data-aos="fade-up" className='sm:text-[19px] text-[17px] sm:mb-[10px] mb-[5px]'>Profile Picture:</h1>
                <input data-aos="fade-down" type="file" onChange={handleProfilePicture} className='w-full outline-none border border-[#ccc] sm:p-2 p-[3px] pl-[5px] sm:mb-[10px] mb-[5px] hover:border-[green] focus:border-[green] focus:border-2' />

                <button data-aos="zoom-out" onClick={showing} className="bg-[green] p-1 text-white w-full text-lg sm:text-xl mt-7 mb-2 hover:bg-[white] hover:text-[green] hover:border hover:border-[green] rounded-[5px] transition-colors">Live Preview <IoEyeSharp className="inline ml-2 text-xl sm:text-2xl" /></button>
            </div>
        </div>
    )
}

export default Input