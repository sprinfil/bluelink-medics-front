"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import background from "./img/pexels-karolina-grabowska-4386464.jpg";
import bluelink from "./img/blue-link.jpg";
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute z-10 w-full h-full bg-black opacity-10"></div>
        <div className="absolute z-20 w-full h-full flex items-center justify-center">
          <div className="w-[40%] h-[70vh] bg-black opacity-50 shadow-lg relative"></div>
        </div>
        <div className="absolute z-50 top-0 left-0 w-full h-full items-center justify-center overflow-auto xl:flex hidden">
          <div className="flex flex-col gap-2 text-white">
            <div>
              <p className="text-[25px]">Bluelink Medics</p>
            </div>
            <div>
              <p>Usuario</p>
              <input type="text" className="text-white bg-transparent shadow-md px-2 h-[100px] w-[600px] outline-none  " placeholder="Usuario" />
            </div>

            <div className="mt-[20px]">
              <p>Contraseña</p>
              <input type="password" className="text-white bg-transparent shadow-md px-2 h-[100px] w-[600px] outline-none" placeholder="Contraseña" />
            </div>

            <div className="mt-[20px]">
              <Button className="w-[600px] h-[60px] hover:h-[80px] transition-all duration-200" onClick={() => { router.push("/dashboard") }}>Iniciar</Button>
              <p className="text-slate-300 mt-[20px]">Olvidaste tu contraseña? Contacta al administrador del sistema.</p>
            </div>
            <Image
              src={bluelink}
              alt="BlueLink"
              width={50} // Ancho fijo
              height={50} // Alto fijo
              quality={100}
              objectFit="contain"
              className="rounded-md shadow-md" // Ajusta la imagen sin recortar
            />
          </div>
        </div>
      </div>
    </div>
  );
}
