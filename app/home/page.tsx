import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
       
        {/* Aquí se inserta la imagen */}
        <div className="mt-8">
          <Image src="https://editorial.uefa.com/resources/0275-15415832f216-7c7b8180589c-1000/16x9_uclf_winner_rm_noconfetti.jpeg" alt="Descripcion de la imagen" width={500} height={500} />
          <p className="text-center text-xl mt-4">Real Madrid 2021 </p>
        </div>
        
      </div>
     
    </div>
  );
}