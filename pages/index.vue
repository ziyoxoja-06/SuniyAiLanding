<script setup>
const services = [
  {
    img: "/images/service/Layer_1.svg",
    title: "Katta ma’lumotlar",
    text: `Bizning
            katta ma'lumotlar bo'yicha konsalting va muhandislik xizmatlarimiz sizning kompaniyangizga qaror qabul
            qilishni yaxshilashga, innovatsiyalarni tezlashtirishga, mijozlar tajribasini oshirishga va operatsion
            samaradorlikni oshirishga yordam beradi.`  
  },
  {
    img: "/images/service/Layer_2.svg",
    title: "Android & IOS",
    text: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`  
  },
  {
    img: "/images/service/Layer_3.svg",
    title: "Veb rivojlantirish",
    text: `SuniyX-dan  maxsus veb-ishlab chiqish xizmatlari bilan biznesni rivojlantirish uchun endi internetda noyob ta'sir o'tkazing.Biz korporativ veb-saytlardan veb-ilovalarga qadar yuqori sifatli veb-sytlarni ishlab chiqamiz.
`  
  },
  {
    img: "/images/service/Layer_4.svg",
    title: "AI muhandisligi",
    text: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`  
  }
]


</script>

<template>
  <div class="container-full">
    <section class="home bg-zinc-800 flex h-[100vh]">
      <nav class="w-full  fixed h-auto">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          </NuxtLink>
          <button data-collapse-toggle="navbar-default" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class=" w-full md:block md:w-auto h-full flex items-center " id="navbar-default">
            <ul
              class="font-medium flex flex-col  md:p-0  md:items-center md:justify-center  md:flex-row md:space-x-8 rtl:space-x-reverse ">
              <li>
                <a href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li class="flex items-center">
                <BorderedBtn title="Buyurtma berish" />
                <div>
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="text-white font-medium text-sm px-5 text-center inline-flex items-center "
                    type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                    </svg>
                  </button>

                  <!-- Dropdown menu -->
                  <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                          out</a>
                      </li>
                    </ul>
                  </div>
                </div>


              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="w-[40%] flex flex-col justify-center ml-12 pt-5">
        <h1 class="text-white text-[40px]  font-medium">Orzularingiz orzuligicha qolmaydi. Endi <span
            class="text-cyan-400 text-[50px] font-medium"> Suniy Ai</span> bilan noyob
          g'oyalaringizni amalga oshirish imkoni bor.</h1>
        <p class="w-[584px] text-white text-opacity-90 text-xl font-normal leading-relaxed">Biz eng
          yaxshi amaliyot jarayonlari va ishlab chiqish metodologiyalarini zamonaviy texnologik echimlarni tizimli va
          uslubiy jihatdan tezkor qurish uchun asos sifatida ishlatamiz.</p>
        <div class="w-[100%] mt-4 mb-5 h-0.5 bg-gradient-to-l from-cyan-400 to-blue-600"></div>
        <div>
          <BorderedBtn class="text-[24px]" :id="'btn_right'" :title="'Portfolio'" />
          <BorderedBtn class="text-[24px] ml-10" :id="'btn_full'" :title="'Qo’ng’iroq'" />
        </div>
      </div>
      <div class="w-[57%] flex items-end ">
        <img src="/images/HomeHande.svg" class="h-[85%]" width="90%" alt="handle">
      </div>
    </section>
    <section class="about pt-20   bg-zinc-800 flex h-[100vh]">
      <div class="p-12">
        <img src="/images/about_img.svg" alt="about">
      </div>
      <div class="w-[50%] pt-11">
        <div class="text-white text-[40px] font-semibold font-['Overpass']">Biz haqimizda</div>
        <div class="w-[615px] text-white text-opacity-90 text-2xl font-medium font-['Inter'] leading-[31.20px]">Har bir
          yirik kompaniya nafaqat o'ziga, balki uning yonida turgan va unga ishonganlarga ham minnatdorchilik bildirishi
          kerak. Axir, bizning ishimizdagi eng muhim tamoyil-bu ishonch.</div>
        <div class="w-[615px] text-white text-opacity-90 text-2xl font-medium font-['Inter'] leading-[31.20px]">Ishonch
          nafaqat mijozlar va sheriklarning sodiqligini ta'minlaydi, balki o'zimizga bo'lgan talabimizni oshiradi. Biz
          ming yillik insoniy an'analarga asoslangan munosabatlar asosida hamkorlik qilamiz.</div>
        <div class="w-[100%] mt-4 mb-5 h-0.5 bg-gradient-to-l from-cyan-400 to-blue-600"></div>
        <div>
          <BorderedBtn class="text-[24px]" :id="'btn_right'" :title="'Portfolio'" />
          <BorderedBtn class="text-[24px] ml-10" :id="'btn_full'" :title="'Qo’ng’iroq'" />
        </div>
      </div>
    </section>
    <section class="services p-12 bg-zinc-800  h-fit">
      <div class="text-white text-center py-6 text-[40px] font-semibold font-['Overpass']">Bizning xizmatlar</div>
      <div class="flex justify-center flex-wrap">
        <div class="rounded-[20px] flex w-[35em] flex-col items-center p-10 border border-blue-600 m-3" v-for="item in services" :key="item?.img">
          <img :src="item?.img" alt="logo">
          <div class="text-white text-3xl font-semibold font-['Inter']">{{ item?.title }}</div>
          <p class=" text-white text-opacity-90 text-xl font-normal font-['Inter'] leading-[30px]  tracking-wider">
            {{ item?.text }}
          </p>
        </div>
      </div>
    </section>
    <section class="services p-12 bg-zinc-800  h-fit">
      <div class="text-white text-[40px] font-semibold font-['Overpass'] text-center">Bizning loyixalarimiz</div>
      <div class="flex justify-center flex-wrap">
        <div class="services__img w-[15em] h-[25em]" >
sdfsdf
        </div>
      </div>
    </section>
    
  </div>
</template>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url('/images/baseBg.svg');
}

</style>
