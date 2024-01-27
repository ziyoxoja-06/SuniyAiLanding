<script setup lang="ts">
const services = [
  {
    img: "/images/service/Layer_1.svg",
    title: "Katta ma’lumotlar",
    text: `Bizning
            katta ma'lumotlar bo'yicha konsalting va muhandislik xizmatlarimiz sizning kompaniyangizga qaror qabul
            qilishni yaxshilashga, innovatsiyalarni tezlashtirishga, mijozlar tajribasini oshirishga va operatsion
            samaradorlikni oshirishga yordam beradi.`,
  },
  {
    img: "/images/service/Layer_2.svg",
    title: "Android & IOS",
    text: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`,
  },
  {
    img: "/images/service/Layer_3.svg",
    title: "Veb rivojlantirish",
    text: `SuniyX-dan  maxsus veb-ishlab chiqish xizmatlari bilan biznesni rivojlantirish uchun endi internetda noyob ta'sir o'tkazing.Biz korporativ veb-saytlardan veb-ilovalarga qadar yuqori sifatli veb-sytlarni ishlab chiqamiz.
`,
  },
  {
    img: "/images/service/Layer_4.svg",
    title: "AI muhandisligi",
    text: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`,
  },
];

const partfoliyo = [
  {
    title:'Suniy TV',
    description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img:'/partfoliyo_1.jpg',
  },
  {
    title:'Suniy TV',
    description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img:'/partfoliyo_2.jpg',
  },
  {
    title:'Suniy TV',
    description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img:'/partfoliyo_2.jpg',
  },
  {
    title:'Suniy TV',
    description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img:'/partfoliyo_3.jpeg',
  },
]

function strCut(count:number, text:string='' ) {  
  return count? text.split(' ').slice(0, count).join(' ')+'...':text
}
</script>

<template>
  <!-- HERO SECTION  -->
  <section
    id="home"
    class="flex items-center flex-col sm:flex-col md:flex-row xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C] bg-[url('baseBg.svg')]"
  >
    <div
      class="px-4 sm:pl-2 md:pl-10 xl:pl-10 pt-20 sm:pt-20 md:pt-0 xl:pt-0 flex flex-col space-y-3 w-[100vw] sm:w-[100vw] md:w-[50%] xl:w-[50%]"
    >
      <h1
        class="home__title text-white text-[34px] sm:text-[34px] md:text-[46px] xl:text-[46px] leading-[36px] sm:leading-[46px] md:leading-[56px] xl:leading-[56px] font-medium font-['Overpass'] mt-10"
      >
        Orzularingiz orzuligicha qolmaydi. Endi
        <span
          class="text-cyan-400 text-[34px] sm:text-[34px] md:text-[46px] xl:text-[56px] font-medium font-['Overpass']"
          >Suniy Ai</span
        >
        bilan noyob g'oyalaringizni amalga oshirish imkoni bor.
      </h1>
      <div
        class="w-[100%] text-white text-opacity-90 text-[20px] sm:text-[20px] md:text-md xl:text-md font-normal font-['Inter'] leading-relaxed"
      >
        Biz eng yaxshi amaliyot jarayonlari va ishlab chiqish metodologiyalarini
        zamonaviy texnologik echimlarni tizimli va uslubiy jihatdan tezkor
        qurish uchun asos sifatida ishlatamiz.
      </div>
      <div
        class="w-[90vw] sm:w-[90vw] md:w-[40vw] xl:w-[40vw] h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-800"
      ></div>
      <div class="pt-[10px] flex space-x-4">
        <BorderedBtn :title="'Portfolio'" />
        <BorderedBtn :title="'Qo’ng’iroq'" />
      </div>
    </div>
    <NuxtImg
      src="/HomeHande.svg"
      class="w-[100vw] sm:w-[100vw] md:w-[50%] xl:w-[50%] mt-10"
    />
  </section>
  <section
    id="about"
    class="flex items-center  flex-col sm:flex-col md:flex-row xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C]"
  >
  <div class="flex md:justify-end lg:justify-end xl:justify-end ml-1 sm:ml-1 md:ml-8 xl:ml-8 w-[90vw] sm:w-[90vw] md:w-[50%] xl:w-[50%] ">
    <NuxtImg
      src="/about.png"
      class="w-[90%] h-[450px]"
    />
  </div>
    
    <div
      class="flex flex-col space-y-2 w-[90vw] sm:w-[90vw] md:w-[50%] xl:w-[40%] mx-3 sm:mx-3 md:mx-8 xl:mx-8 -order-1 sm:-order-1 md:order-2 xl:order-2"
    >
      <h1
        class="text-[34px] sm:text-[34px] md:text-[46px] xl:text-[56px] leading-[40px] font-semibold font-['Overpass']"
      >
        Biz haqimizda
      </h1>
      <p
        class="text-opacity-90 text-2xl font-medium font-['Inter'] leading-[41.20px] text-justify tracking-wider"
      >
        Har bir yirik kompaniya nafaqat o'ziga, balki uning yonida turgan va
        unga ishonganlarga ham minnatdorchilik bildirishi kerak. Axir, bizning
        ishimizdagi eng muhim tamoyil-bu ishonch.
      </p>
      <p
        class="text-opacity-90 text-2xl font-medium font-['Inter'] leading-[31.20px] pb-[10px] text-justify tracking-wider"
      >
        Ishonch nafaqat mijozlar va sheriklarning sodiqligini ta'minlaydi, balki
        o'zimizga bo'lgan talabimizni oshiradi. Biz ming yillik insoniy
        an'analarga asoslangan munosabatlar asosida hamkorlik qilamiz.
      </p>
      <div class="h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-800"></div>
      <div class="pt-[10px] flex space-x-4">
        <BorderedBtn :title="'Portfolio'" />
        <BorderedBtn :title="'Qo’ng’iroq'" />
      </div>
    </div>
  </section>
  <section
    id="services"
    class="services p-2 sm:p-2 md:p-12 xl:p-12 bg-[#1E212C] h-fit"
  >
    <div
      class="text-white text-center py-6 text-[40px] font-semibold font-['Overpass']"
    >
      Bizning xizmatlar
    </div>
    <div class="flex justify-center flex-wrap">
      <div
        class="rounded-[20px] flex w-[35em] flex-col items-center p-6 sm:p-6 md:p-10 xl:p-10 border border-blue-600 m-3"
        v-for="item in services"
        :key="item?.img"
      >
        <img :src="item?.img" alt="logo" />
        <div class="text-white text-3xl font-semibold font-['Inter']">
          {{ item?.title }}
        </div>
        <p
          class="text-white text-opacity-90 text-xl font-normal font-['Inter'] leading-[30px] tracking-wider"
        >
          {{ item?.text }}
        </p>
      </div>
    </div>
  </section>
  <section
    id="partfoliyo"
    class="p-2 sm:p-2 md:p-4 xl:p-4 py-2 md:py-12 lg:py-12 xl:py-12 bg-[#1E212C] h-fit"
  >
  <!-- Card group -->
    <div
      class="text-white text-center py-12 sm:py-12 md:py-6 xl:py-6 text-[40px] font-semibold font-['Overpass']"
    >
      Bizning xizmatlar
    </div>
    <div
      class=" flex justify-center flex-wrap"
    >

  <!-- Card -->
      <div
      v-for="item in partfoliyo" :key="item.title"
        class="card w-[264px] relative rounded-xl overflow-hidden border m-3 border-gray-600"
      >
      <div class="h-[200px]">
        <NuxtImg :src="item.img" class="h-full"/>
      </div>
        <div class="p-4">
          <h2 class="font-bold text-xl pb-2">{{ item.title }}</h2>
          <p class="text-gray-300 text-justify ">
            {{ strCut(35,item.description) }}
          </p>
        </div>
      </div>
      <div class="w-full p-2 sm:p-2 md:p-4 xl:p-12 py-2 md:py-12 lg:py-12 xl:py-12 px-2 md:px-24 lg:px-24 xl:px-24 bg-[#1E212C] h-fit">
        <div class="w-full h-[259px] flex bg-gray-800 rounded-[20px] border border-teal-400 py-2 md:py-10 lg:py-10 xl:py-10 px-2 md:px-16 lg:px-16 xl:px-16">
         <div class="w-[58%]">
          <h2 class=" text-white text-[40px] font-semibold font-['Overpass']">Siz ham ushbu jamoa orasida bo'lishingiz mumkin...</h2>
          <div class=" text-white text-xl font-normal font-['Inter'] leading-relaxed">Biz bilan o'sishni xohlaysizmi? Endi sizga kerakligini isbotlang! Jamoaning ajralmas qismiga aylaning</div>
         </div>
         <div class="w-[42%] flex flex-col space-y-4 justify-center items-center ml-24">
          <div class="flex items-center space-x-2">
            <div class="w-[50px] h-0.5 bg-zinc-300"></div>
            <div class="text-white text-xl font-semibold font-['Inter']">Big data</div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-[50px] h-0.5 bg-zinc-300"></div>
            <div class="text-white text-xl font-semibold font-['Inter']">Ved development</div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-[50px] h-0.5 bg-zinc-300"></div>
            <div class="text-white text-xl font-semibold font-['Inter']">AI ingineering</div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-[50px] h-0.5 bg-zinc-300"></div>
            <div class="text-white text-xl font-semibold font-['Inter']">Android & IOS</div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="footer"
    class="  flex-col sm:flex-col md:flex-row xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C]"
  >
  
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@500&family=Overpass&family=Space+Grotesk:wght@500&display=swap');

.home__title{
  font-family: 'Bangers', system-ui;
font-family: 'Inter', sans-serif;
font-family: 'Overpass', sans-serif;
font-family: 'Space Grotesk', sans-serif;
}

</style>
