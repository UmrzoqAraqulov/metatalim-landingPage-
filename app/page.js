import CustomAccordion from "@/components/accordion/customAccordion";
import LearnCard from "@/components/cards/learn-card";
import ResultCard from "@/components/cards/result-card";
import CustomCarusel from "@/components/customCarusel/customCarusel";
import Image from "next/image";

const learnInfo = [
  {
    title: "Speaking ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi recusandae minus explicabo beatae! Numquam a temporibus iste. Veniam, odit!",
  },
  {
    title: " Listening ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi recusandae minus explicabo beatae! Numquam a temporibus iste. Veniam, odit!",
  },
  {
    title: " Reading ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi recusandae minus explicabo beatae! Numquam a temporibus iste. Veniam, odit!",
  },
  {
    title: " Writing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi recusandae minus explicabo beatae! Numquam a temporibus iste. Veniam, odit!",
  },
  {
    title: "A1, A2, B1, B2, C1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi recusandae minus explicabo beatae! Numquam a temporibus iste. Veniam, odit!",
  },
];

const resultInfo = [
  "B2 yoki C1 sertifikat",
  "Turk tilidan gaplasha olasiz",
  "B2 yoki C1 sertifikat",
  "Turk tilidan gaplasha olasiz",
  "B2 yoki C1 sertifikat",
  "Turk tilidan gaplasha olasiz",
];

export default function Home() {
  return (
    <main>
      <section
        style={{
          background: `linear-gradient(rgba(255, 0, 0, 0.5),rgba(255, 0, 0, 0.6)),url(/logoWithText.svg) no-repeat center`,
        }}
        className="w-full h-screen bg flex items-center justify-center hero"
      >
        <h1>
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
          <h2>{"Nega Turk tilini o'rganish kerak?"}</h2>
          <div className="card-status py-2">
            <Image
              src="/check-icon.svg"
              alt="check icon"
              width={20}
              height={20}
            />
            <p>
              Chet el davlatlarida{" "}
              <span className="font-bold"> Magistraturaga </span> kirish uchun
            </p>
          </div>
          <div className="card-status py-2">
            <Image
              src="/check-icon.svg"
              alt="check icon"
              width={20}
              height={20}
            />
            <p>
              Chet el davlatlarida{" "}
              <span className="font-bold"> Doktaranturaga </span> kirish uchun
            </p>
          </div>
          <div className="card-status py-2">
            <Image
              src="/check-icon.svg"
              alt="check icon"
              width={20}
              height={20}
            />
            <p>
              Turkiy davlatlarda rohatlanib{" "}
              <span className="font-bold">sayohat</span> qilish
            </p>
          </div>
        </div>
      </section>

      {/*Kurs haqida o’quvchilarimizning fikri */}
      <section className="container">
        <h2>Kurs haqida {"o'quvchilarimizning"} fikri</h2>
        <div className="py-5">
          <CustomCarusel />
        </div>
      </section>

      {/* Kursda davomida barcha narsalarni o’rganasiz */}
      <section className="container py-8">
        <h2>Kursda davomida barcha narsalarni {"o’rganasiz"}</h2>
        <div className="flex flex-wrap justify-between gap-5 py-3">
          {learnInfo.map((el, id) => (
            <LearnCard key={id} {...el} />
          ))}
        </div>
      </section>

      {/* Kurs afzalliklari  */}
      <section className="container">
        <h2 className="py-5">Kurs afzalliklari:</h2>
        <div className="flex flex-col gap-5 items-center">
          <div className="course-box">
            <h3>Sifatli videolar</h3>
            <p>
              {
                "Qo'lay tushunarli har xil formatdagi siz xohlagandek ko'rinishdagi videolar!"
              }
            </p>
          </div>
          <div className="course-box">
            <h3>Erkin vaqt va grafikda {"ta'lim"} olish</h3>
            <p>
              {
                "Kurs onlayn tarzda bo'lgani uchun siz istalgan vaqt va manzilda, o'zingizga qulay sharoitni tanlagan holda ta'lim olishingiz mumkin."
              }
            </p>
          </div>

          <div className="course-box">
            <h3>Erkin vaqt va grafikda {"ta'lim"} olish</h3>
            <p>
              {
                "Kurs onlayn tarzda bo'lgani uchun siz istalgan vaqt va manzilda, o'zingizga qulay sharoitni tanlagan holda ta'lim olishingiz mumkin."
              }
            </p>
          </div>
          <button className="register-btn">
            Maxsus chegirmaga ega {"bo'ling"}
          </button>
        </div>
      </section>

      {/* Kurs Mentori */}
      <section className="py-5 container">
        <h2>Kurs Mentori:</h2>
        <div className="flex items-center justify-between my-6 max-sm:my-2 flex-wrap gap-3">
          <div className="w-[45%] max-md:w-[100%]">
            <h3 className="text-red-500">Kamola Ergashova</h3>
            <p className="py-4">Turk tili Katta {"o'qituvchisi"}</p>
            <p className="teacher-info">
              <span>500 ga yaqin</span> {"o'quvchilarga"} ushbu sohadan{" "}
              {"ta'lim"} berib kelayotgan mentor.
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
        <h2 className="w-[70%] m-auto max-md:w-full">Kurs Dasturi</h2>
        <div className="py-4">
          <CustomAccordion />
        </div>
      </section>

      {/* Kursdan lavhalar */}
      <section className="container py-8">
        <h2>Kursdan lavhalar qiziqmi? Marhamat:</h2>
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
        <h2>Kursni bitirib, qanday natijaga erishasiz?</h2>
        <div className="flex flex-wrap justify-between gap-8 py-8">
          {resultInfo.map((el, id) => (
            <ResultCard key={id} title={el} />
          ))}
        </div>
      </section>

      <section className="container flex flex-col items-center gap-5">
        <h2 className="my-4">
          Sizga <span>kerakli</span> {"qo'shimcha"} darslarni
          <span> bepul </span>
          taqdim qilamiz
        </h2>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="gift-card__info">
            <h3>{`"Ads manager"`} kursi</h3>
            <p>
              <del>1,000,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="flex flex-col">
            <h3>{`"Kompyuter savodxonligi"`} kursi</h3>
            <p>
              <del>1,000,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="flex flex-col">
            <h3>Stories bilan ishlash {"bo'yicha"} minikurs</h3>
            <p>
              <del>300,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="flex flex-col">
            <h3>Maxsus premium darslar</h3>
            <p>
              <del>1,000,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <button className="register-btn">
          Maxsus chegirmaga ega {"bo'ling"}
        </button>
      </section>

      <section className="container py-8">
        <h2 className="py-8">
          Kursni xarid qilganingizda ushbu
          <span>imkoniyatlarni barchasiga</span> ega {"bo'lasiz"}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="card-course w-[45%] max-md:w-full">
            <h2>Basic</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>
                  1 yil saqlanib qoluvchi {"o'quv"} materiallari va video
                  darsliklari
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Barcha taqdimotlarning pdf fayllari</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Kursni muvaffaqiyatli bitirganini bildiruvchi sertifikat</p>
              </div>
            </div>
            <div className="font-bold text-3xl max-sm:text-xl text-center">
              3,5 mln {"so'm"}
            </div>
            <button className="register-btn">
              Maxsus chegirmaga ega {"bo'ling"}
            </button>
          </div>
          <div className="card-course w-[45%] max-md:w-full">
            <h2>Standart</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>
                  1 yil saqlanib qoluvchi {"o'quv"} materiallari va video
                  darsliklari
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Barcha taqdimotlarning pdf fayllari</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Kursni muvaffaqiyatli bitirganini bildiruvchi sertifikat</p>
              </div>
            </div>
            <div className="font-bold text-3xl max-sm:text-xl text-center">
              3,5 mln {"so'm"}
            </div>
            <button className="register-btn">
              Maxsus chegirmaga ega {"bo'ling"}
            </button>
          </div>
          <div className="card-course w-[45%] max-md:w-full">
            <h2>Premum</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>
                  1 yil saqlanib qoluvchi {"o'quv"} materiallari va video
                  darsliklari
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Barcha taqdimotlarning pdf fayllari</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/check-icon.svg"
                  alt="check icon"
                  width={20}
                  height={20}
                />
                <p>Kursni muvaffaqiyatli bitirganini bildiruvchi sertifikat</p>
              </div>
            </div>
            <div className="font-bold text-3xl max-sm:text-xl text-center">
              3,5 mln {"so'm"}
            </div>
            <button className="register-btn">
              Maxsus chegirmaga ega {"bo'ling"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
