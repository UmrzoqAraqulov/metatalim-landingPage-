import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        style={{
          background: `linear-gradient(rgba(255, 0, 0, 0.5),rgba(255, 0, 0, 0.6)),url(/logoWithText.svg) no-repeat center`,
        }}
        className="w-full h-screen bg flex items-center justify-center hero"
      >
        <h1 className="text-white font-bold -translate-y-4 text-6xl text-center max-md:text-4xl max-sm:text-3xl px-3">
          {"Turk tilini qisqa vaqt ichida o'rganing"}, <br /> B2 darajali
          {"sertificateni qo'lga kiriting !"}
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
      {/* <section className="w-full">
        <marquee behavior="" direction="">
          <ul className="flex gap-3">
            <li>Qisqa muddatda kasb o'rganing</li>
            <li>Qisqa muddatda kasb o'rganing</li>
            <li>Qisqa muddatda kasb o'rganing</li>
          </ul>
        </marquee>
      </section> */}
      <section className="container" id="turk-language">
        <div className="my-14 p-10 bg-[#8e8e8e3e] max-md:p-4">
          <h2>{"Nega Turk tilini o'rganish kerak?"}</h2>
          <p className="py-5">
            {`Istalgan biznes ko'proq savdo qilishni xohlaydi. Savdoni oshirish`}
            <span className="font-bold"> {"marketingga bog'liq."}</span>
          </p>
          <p>
            {
              "SMM - marketingdagi samarali qurollardan biri hisoblanadi. Sababi O'zbekistonda"
            }
            <span className="font-bold">6 mln</span> ga yaqin inson ijtimoiy
            tarmoqlardan faol foydalanadi.
          </p>
          <p className="pt-5">
            Shu sohada <span className="font-bold">mutaxassis</span>
            {"bo'ldingiz"} degani - hamma
            <span className="font-bold"> biznesga kerakli kadrsiz</span> degani.
          </p>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-5">
        <h2 className="my-4">
          Sizga <span>kerakli</span> {"qo'shimcha"} darslarni
          <span>bepul </span>
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
          <div className="flex flex-col gap-2">
            <h3>{`"Kompyuter savodxonligi"`} kursi</h3>
            <p>
              <del>1,000,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <h3>Stories bilan ishlash {"bo'yicha"} minikurs</h3>
            <p>
              <del>300,000 {"so'm"} </del> Bepul
            </p>
          </div>
        </div>
        <div className="gift-card">
          <Image src="/gift-icon.svg" alt="gift icon" width={50} height={50} />
          <div className="flex flex-col gap-2">
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
      <section className="container">
        <h2 className="py-5">Kurs afzalliklari:</h2>
        <div className="flex flex-col gap-5 items-center">
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
      <section className="container"></section>
    </main>
  );
}
