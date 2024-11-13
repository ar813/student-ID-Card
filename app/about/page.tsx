"use client"

import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a URL for the selected file
      const objectUrl = URL.createObjectURL(file);
      setImageSrc(objectUrl);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/png, image/jpeg" />
      {imageSrc && (
        <div>
          <Image src={imageSrc} alt="Selected image" width={500} height={500} />
        </div>
      )}
    </div>
  )
}

export default Page;
