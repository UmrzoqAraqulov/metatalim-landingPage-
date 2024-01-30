"use client";
import CustomAccordion from "@/components/accordion/customAccordion";
import Button from "@/components/button/button";
import CourseCard from "@/components/cards/course-card";
import LearnCard from "@/components/cards/learn-card";
import ResultCard from "@/components/cards/result-card";
import CustomCarusel from "@/components/customCarusel/customCarusel";
import {
  learnInfo,
  turkLangInfo,
  resultInfo,
  courseData,
  courseModulData,
  giftsData,
  statusData,
} from "@/mocks/cards-data";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import Image from "next/image";
import { Fragment, useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = () => {};

  return (
    <main>
      {/* hero */}
      <section
        style={{
          background: `linear-gradient(rgba(255, 0, 0, 0.5),rgba(255, 0, 0, 0.6)),url(/logoWithText.svg) no-repeat center`,
        }}
        className="w-full h-screen flex items-center justify-center hero"
      >
        <h1 className="hero-title text-white">
          {"Turk tilini qisqa vaqt ichida o'rganing"}, <br /> B2 darajali
          {" sertificateni qo'lga kiriting !"}
        </h1>
        <div className="animation__button">
          <a href="#turk-language">
            <Image
              src="/down-icon.svg"
              alt="down-icon"
              width={40}
              height={30}
            />
          </a>
        </div>
      </section>

      {/* nega turk tili */}
      <section className="container" id="turk-language">
        <div className="my-14 p-10 bg-[#8e8e8e3e] max-md:p-4">
          <h1 className="text-4xl max-md:text-2xl  font-bold pb-4 max-md:pb-2">
            {"Nega Turk tilini o'rganish kerak?"}
          </h1>
          {turkLangInfo.map((el, id) => (
            <div key={id} className="card-status py-2">
              <Image
                src="/check-icon.svg"
                alt="check icon"
                width={20}
                height={20}
              />
              <p>
                {el?.desc1}
                <span className="primary"> {el?.descPrimary} </span>
                {el?.desc2}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*Kurs haqida o’quvchilarimizning fikri */}
      <section className="container">
        <h1 className="section-title">
          Kurs haqida {"o'quvchilarimizning"} fikri
        </h1>
        <div className="py-5">
          <CustomCarusel />
        </div>
      </section>

      {/* Kursda davomida barcha narsalarni o’rganasiz */}
      <section className="container py-8">
        <h1 className="section-title">
          Kursda davomida barcha narsalarni {"o’rganasiz"}
        </h1>
        <div className="flex flex-wrap justify-between gap-5 py-3">
          {learnInfo.map((el, id) => (
            <LearnCard key={id} {...el} />
          ))}
        </div>
      </section>

      {/* Kurs afzalliklari  */}
      <section className="container">
        <h1 className="py-5 section-title">Kurs afzalliklari:</h1>
        <div className="flex flex-col gap-5">
          {courseData.map((el, id) => (
            <CourseCard key={id} {...el} />
          ))}
        </div>
        <div className="text-center py-5">
          <Button onClick={onOpen} text="Maxsus chegirmaga ega bo'ling" />
        </div>
      </section>

      {/* Kurs Mentori */}
      <section className="py-5 container">
        <h1 className="section-title">Kurs Mentori:</h1>
        <div className="flex items-center justify-between my-6 max-sm:my-2 flex-wrap gap-3">
          <div className="w-[45%] max-md:w-[100%]">
            <h3 className="text-red-500 text-5xl font-bold max-md:text-2xl">
              Kamola Ergashova
            </h3>
            <p className="py-4 text-lg max-md:text-base">
              Turk tili Katta {"o'qituvchisi"}
            </p>
            <p className="teacher-info text-lg max-md:text-base">
              <span className="primary">500 ga yaqin</span> {"o'quvchilarga"}{" "}
              ushbu sohadan {"ta'lim"} berib kelayotgan mentor.
            </p>
          </div>
          <div className="w-[45%] max-md:w-[80%] max-md:mx-auto max-sm:w-[100%]">
            <Image
              src="/mentor.svg"
              alt="mentor img"
              width="100"
              height="100"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Kurs dasturi */}
      <section className="container">
        <h2 className="section-title">Kurs Dasturi</h2>
        <div className="flex justify-between flex-wrap py-3 gap-3">
          {courseModulData.map((el, id) => (
            <div
              key={id}
              className="w-[20%] max-lg:w-[45%] max-sm:w-full flex flex-col gap-6 max-sm:gap-3 max-sm:border-b-2 max-sm:py-2"
            >
              <h3 className="text-4xl max-sm:text-3xl">{el.title}</h3>
              <span className="w-[80%] h-1 bg-[#ff0000]"></span>
              <h2 className="text-3xl max-sm:text-2xl font-bold">
                {el.count} ta
              </h2>
            </div>
          ))}
        </div>
        <div className="py-4">
          <CustomAccordion />
        </div>
      </section>

      {/* Kursdan lavhalar */}
      <section className="container py-8">
        <h1 className="section-title">Kursdan lavhalar qiziqmi? Marhamat:</h1>
        <div className="w-[100%] h-[500px] py-4 max-md:h-[350px] max-sm:h-[300px]">
          <iframe
            src="https://www.youtube.com/embed/8612RfUoDQ4?si=ob3OWqTR2Hr8F_E4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-full rounded-sm"
          ></iframe>
        </div>
      </section>

      {/* Kursni bitirib, qanday natijaga erishasiz */}
      <section className="container">
        <h1 className="section-title">
          Kursni bitirib, qanday natijaga erishasiz?
        </h1>
        <div className="flex flex-wrap justify-between gap-8 py-8">
          {resultInfo.map((el, id) => (
            <ResultCard key={id} title={el} />
          ))}
        </div>
      </section>

      {/* Sizga qo'shimcha darslar,bepul  */}
      <section className="container flex flex-col items-center gap-5">
        <h2 className="my-4 section-title">
          Sizga <span>kerakli</span> {"qo'shimcha"} darslarni
          <span className="primary"> bepul </span>
          taqdim qilamiz
        </h2>
        {giftsData.map((el, id) => (
          <div key={id} className="gift-card">
            <Image
              src="/gift-icon.svg"
              alt="gift icon"
              width={50}
              height={50}
            />
            <div className="gift-card__info">
              <h3 className="box-title">{el.title}</h3>
              <p>
                <del className="pr-2">
                  {el.cost}
                  {" so'm"}
                </del>
                <span className="primary">Bepul</span>
              </p>
            </div>
          </div>
        ))}

        <Button onClick={onOpen} text="Maxsus chegirmaga ega bo'ling" />
      </section>

      {/* Kursni xarid qilish */}

      <section className="container py-8">
        <h2 className="section-title py-8">
          Kursni xarid qilganingizda ushbu
          <span className="primary"> imkoniyatlarni barchasiga</span> ega{" "}
          {"bo'lasiz"}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {statusData.map((el, id) => (
            <div
              key={id}
              className="card-course w-[45%] max-lg:w-[70%] max-sm:w-[100%]"
            >
              <h2 className="section-title">{el.title}</h2>
              <div className="flex flex-col gap-3">
                {el.infoList.map((info, info_id) => (
                  <div key={info_id} className="flex gap-2 items-center">
                    <Image
                      src="/check-icon.svg"
                      alt="check icon"
                      width={20}
                      height={20}
                    />
                    <p>{info}</p>
                  </div>
                ))}
              </div>
              <div className="font-bold text-3xl max-sm:text-xl text-center">
                {el.cost} mln {"so'm"}
              </div>
              <Button onClick={onOpen} text="Maxsus chegirmaga ega bo'ling" />
            </div>
          ))}
        </div>
      </section>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="bg-[#ff0000] text-white rounded-sm p-4 max-md:p-1" size="xl">
        <ModalContent>
          {(onClose) => (
            <Fragment>
              <ModalHeader className="text-3xl max-md:text-2xl">{"Ro'yhatdan O'tish"}</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis modi recusandae non ex fugit consequuntur repellat
                omnis iure placeat ad. Id sit sunt aliquam placeat fuga optio ad
                esse illo, inventore quas, vero harum et? Ad animi, nihil ea
                facilis a saepe sit natus nemo excepturi fugit officiis eos
                mollitia!
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose}>a</button>
              </ModalFooter>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
