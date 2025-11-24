"use client";

import config from "@/config";
import { certificatesData } from "@/data/certificates";
import { hover, motion } from "framer-motion";
import Card from "@/components/ui/card";
import Image from "next/image";
import {
  TopSecret,
  TopSecretTrigger,
  TopSecretContent,
  TopSecretHeader,
  TopSecretTitle,
  TopSecretDescription,
  TopSecretClose,
} from "@/components/ui/top-secret";
import { useState } from "react";
import ButtonBasic from "@/components/buttons/ButtonBasic";

export function Certificate() {
  const lang = "ES";
  const totalCertificates = certificatesData.ES.length;
  const mainCards = certificatesData.ES.slice(0, 4).map((cert, index) => ({
    id: index + 1,
    content: (
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        {/* Imagen - mitad superior */}
        <div className="h-1/2 w-full overflow-hidden relative bg-slate-950">
          <Image
            src={cert.img}
            alt={cert.name}
            fill
            className="object-cover"
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
        </div>

        {/* Textos - mitad inferior */}
        <div className="h-1/2 w-full bg-linear-to-b from-slate-900 to-slate-800 p-4 flex flex-col justify-center overflow-y-auto">
          <h3 className="text-sm sm:text-lg font-bold mb-2 text-(--text-muted)">
            {cert.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {cert.resume}
          </p>
          {cert.date && (
            <p className="text-xs text-(--secondary-accent) mt-2">
              {new Date(cert.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
              })}
            </p>
          )}
        </div>
      </div>
    ),
  }));
  const restCards = certificatesData.ES.slice(5, totalCertificates).map(
    (cert, index) => ({
      id: index + 1,
      content: (
        <div className="relative w-full h-full overflow-hidden flex flex-col">
          {/* Imagen - mitad superior */}
          <div className="h-1/2 w-full overflow-hidden relative bg-slate-950">
            <Image
              src={cert.img}
              alt={cert.name}
              fill
              className="object-cover"
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
          </div>

          {/* Textos - mitad inferior */}
          <div className="h-1/2 w-full bg-linear-to-b from-slate-900 to-slate-800 p-4 flex flex-col justify-center overflow-y-auto">
            <h3 className="text-sm sm:text-lg font-bold mb-2 text-(--text-muted)">
              {cert.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {cert.resume}
            </p>
            {cert.date && (
              <p className="text-xs text-(--secondary-accent) mt-2">
                {new Date(cert.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            )}
          </div>
        </div>
      ),
    })
  );

  return (
    <motion.section
      id="experience"
      className="w-full py-20 bg-(--background-contrast)"
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
          Certificados ({totalCertificates})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {mainCards.map((card) => (
            <div key={card.id} className="h-[400px] w-full">
              <Card content={card.content} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <TopSecret size="100" direction="bottom">
            <TopSecretTrigger asChild>
              <ButtonBasic
                title={`Ver más (${totalCertificates - 4})`}
                typeButton={1}
                size={2}
              />
            </TopSecretTrigger>
            <TopSecretContent>
              {/* Botón de cerrar arriba a la derecha */}
              <TopSecretClose asChild>
                <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TopSecretClose>

              <TopSecretHeader>
                <TopSecretTitle>Todos los Certificados</TopSecretTitle>
                <TopSecretDescription>
                  {totalCertificates - 4} certificados
                </TopSecretDescription>
              </TopSecretHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-4">
                {restCards.map((card) => (
                  <div key={card.id} className="h-[400px] w-full">
                    <Card content={card.content} />
                  </div>
                ))}
              </div>
            </TopSecretContent>
          </TopSecret>
        </div>
      </div>
    </motion.section>
  );
}
