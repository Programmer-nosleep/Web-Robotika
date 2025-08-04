import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RobotModel: React.FC = () => {
  const gltf = useGLTF("/assets/robot.glb")
  return <primitive object={gltf.scene} scale={2.5} />
};

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200/50">
      <Navbar />

      <div className="flex min-h-screen items-center">
        <main className="relative z-10 pt-24 px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Selamat Datang <br /> Robotics Community
            </h1>

            <p className="text-gray-500 text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>

            <div className="flex space-x-4">
              <Button asChild>
                <Link to="/information">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-md aspect-square">
              <img
                src={import.meta.env.VITE_3D_MASCOT}
                alt="Logo"
                className="absolute top-0 w-auto h-12/12"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
