<script setup lang="ts">
const { locale, t } = useI18n()
const router = useRouter()
const services:any = [
  {
    img: "/images/service/Layer_1.svg",
    title_uz: "Katta ma’lumotlar",
    title_ru: "Большие данные",
    title_en: "Big data",
    text_uz: `Bizning
            katta ma'lumotlar bo'yicha konsalting va muhandislik xizmatlarimiz sizning kompaniyangizga qaror qabul
            qilishni yaxshilashga, innovatsiyalarni tezlashtirishga, mijozlar tajribasini oshirishga va operatsion
            samaradorlikni oshirishga yordam beradi.`,
    text_ru: `Наши консалтинговые и инженерные услуги по работе с большими данными помогут вашей компании улучшить процесс принятия решений, ускорить внедрение инноваций, улучшить качество обслуживания клиентов и повысить операционную эффективность.`,
    text_en: `Our big data consulting and engineering services help your company improve decision-making, accelerate innovation, improve customer experience and improve operational efficiency.`,
  },
  {
    img: "/images/service/Layer_2.svg",
    title_uz: "Android & IOS",
    title_ru: "Android & IOS",
    title_en: "Android & IOS",
    text_uz: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`,
    text_ru: "Мы разрабатываем приложения для Android, которые помогают компаниям сделать следующий большой шаг и быстро подняться на вершину рейтинга Google Play. Мы создаем нативные приложения для iOS с беспрецедентным пользовательским интерфейсом.",
    text_en: "We develop Android apps that help businesses take the next big step and quickly climb the top Google Play charts. We create native iOS apps with unparalleled user experience."
  },
  {
    img: "/images/service/Layer_3.svg",
    title_uz: "Veb rivojlantirish",
    title_ru:"Веб-разработка",
    title_en:"Web development",
    text_uz: `SuniyX-dan  maxsus veb-ishlab chiqish xizmatlari bilan biznesni rivojlantirish uchun endi internetda noyob ta'sir o'tkazing.Biz korporativ veb-saytlardan veb-ilovalarga qadar yuqori sifatli veb-sytlarni ishlab chiqamiz.
`,
    text_ru: "Окажите уникальное влияние на Интернет прямо сейчас, чтобы развивать свой бизнес с помощью индивидуальных услуг веб-разработки от SuniyX. Мы разрабатываем высококачественные веб-сайты, от корпоративных веб-сайтов до веб-приложений.",
    text_en: "Make a unique impact on the web now to grow your business with custom web development services from SuniyX. We develop high-quality websites from corporate websites to web applications."
  },
  {
    img: "/images/service/Layer_4.svg",
    title_uz: "AI muhandisligi",
    title_ru:"AI-инжиниринг",
    title_en:"AI engineering",
    text_uz: `Korxonalarga keyingi katta qadam tashlashga va tezda Google Play-ning eng yaxshi jadvallariga ko'tarilishga yordam beradigan Android ilovalarini ishlab chiqamiz.Biz tengsiz foydalanuvchi tajribasi bilan ajralib turadigan mahalliy iOS ilovalarini yaratamiz.
`,
    text_ru: "Мы разрабатываем приложения для Android, которые помогают компаниям сделать следующий большой шаг и быстро подняться на вершину рейтинга Google Play. Мы создаем нативные приложения для iOS с беспрецедентным пользовательским интерфейсом.",
    text_en: "We develop Android apps that help businesses take the next big step and quickly climb the top Google Play charts. We create native iOS apps with unparalleled user experience."
  },
];

const partfoliyo = [
  {
    title: "Suniy TV",
    description: `SuniyX jamoasi Suniy TV loyihasini omaga taqdim etishga tayorlanmoqda. Bu loyihamiz anchadan beri o'zgartirish
     kiritilmagan media uchun yangilik hisoblanadi. Smart TV va Suniy intelect texnalogiyasini birlashtiradi`,
    img: "/partfoliyo_1.webp",
  },
  {
    title: "Suniy TV",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img: "/partfoliyo_2.webp",
  },
  {
    title: "Suniy TV",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img: "/partfoliyo_2.webp",
  },
  {
    title: "Suniy TV",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis possimus doloremque quae! Aliquid, quasi! Reprehenderit,
            impedit eius similique repudiandae facere a excepturi quas totam
            nulla amet est provident maxime?`,
    img: "/partfoliyo_3.webp",
  },
];

function strCut(count: number, text: string = "") {
  return count ? text.split(" ").slice(0, count).join(" ") + "..." : text;
}
function capitalizeFirstLetter(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}
</script>

<template>
  <!-- HERO SECTION  -->
  <section id="home"
    class="flex items-center flex-col sm:flex-col md:flex-col xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C] bg-[url('baseBg.svg')]">
    <div
      class="px-4 sm:px-9 md:px-10 xl:px-10 md:pl-10 xl:pl-10 pt-20 sm:pt-20 md:pt-20 xl:pt-0 flex flex-col space-y-3 w-[100%] sm:w-[100%] md:[100%] xl:w-[50%]">
      <h1
        class="home__title text-white text-[34px] sm:text-[34px] md:text-[46px] xl:text-[46px] leading-[36px] sm:leading-[46px] md:leading-[56px] xl:leading-[56px] font-medium font-['Overpass'] mt-10">
        {{ t("title") }}
      </h1>
      <p
        class="w-full text-white text-opacity-90 text-[16px] sm:text-[16px] md:text-[20px] xl:text-[20px] md:text-md xl:text-md font-normal font-['Inter'] leading-relaxed">
        {{ t("subtitle") }}
      </p>
      <div class="w-[90vw] sm:w-[90vw] md:w-[40vw] xl:w-[40vw] h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-800"></div>
      <div class="pt-[10px] flex space-x-4">
        <div @click="router.push('#partfoliyo')"><BorderedBtn :title="t('partfolio')"><img class="ml-2" src="/arrow.svg" alt="Suniy arrow" /></BorderedBtn></div>
        <BorderedBtn :title="t('call')"><img class="ml-2" src="/call.svg" alt="Suniy call" /></BorderedBtn>
      </div>
    </div>
    <NuxtImg src="/HomeHande.svg" width="100%" height="100%" alt="suniyx, SuniyX"
      class="w-[100vw] sm:w-[100vw] md:w-[100vw] xl:w-[50%] mt-10" />
  </section>

  <!-- About start-->
  <section id="about"
    class="flex items-center flex-col sm:flex-col md:flex-col xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C]">
    <div
      class="flex md:justify-start lg:justify-start xl:justify-start ml-1 sm:ml-1 md:ml-1 xl:ml-10 w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[50%] xl:w-[50%]">
      <!-- About IMG -->
      <NuxtImg src="/about.webp" alt="SuniyX About"
        class="w-full h-auto sm:h-auto md:h-[440px] xl:h-[460px] mt-10 sm:mt-10 md:mt-16 lg:mt-1 xl:mt-1" />
    </div>

    <div
      class="flex flex-col space-y-2 w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[50%] xl:w-[50%] mx-3 sm:mx-3 md:mx-8 xl:mx-8 -order-1 sm:-order-1 md:-order-1 lg:order-2 xl:order-2">
      <h1
        class="text-[32px] sm:text-[32px] md:text-[44px] xl:text-[54px] leading-[40px] text-center sm:text-center md:text-start xl:text-start font-semibold font-['Overpass']">
        {{ capitalizeFirstLetter(t("navbar.about")) }}
      </h1>
      <p class="text-opacity-90 text-xl font-medium font-['Inter'] leading-[41.20px] text-justify tracking-wider">
        {{ t('about_one_line') }}
      </p>
      <p
        class="text-opacity-90 text-xl font-medium font-['Inter'] leading-[31.20px] pb-[10px] text-justify tracking-wider">
        {{ t('about_two_line') }}
      </p>
      <div class="h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-800"></div>
      <div class="pt-[10px] flex space-x-4">
        <div @click="router.push('#partfoliyo')"><BorderedBtn :title="t('partfolio')"><img class="ml-2" src="/arrow.svg" alt="Suniy arrow" /></BorderedBtn></div>
        <BorderedBtn :title="t('call')"><img class="ml-2" src="/call.svg" alt="Suniy call" /></BorderedBtn>
      </div>
    </div>
  </section>
  <!-- About end-->

  <!-- Srvices start -->
  <section id="services" class="services p-2 sm:p-2 md:p-8 xl:p-8 bg-[#1E212C] h-fit">
    <div class="text-white text-center pt-6 pb-10 text-[40px] font-semibold font-['Overpass']">
      {{ t("services") }}
    </div>
    <div class="flex justify-center flex-wrap">
      <div
        class="rounded-[20px] flex w-[38em] flex-col items-center p-6 sm:p-6 md:p-10 xl:p-10 px-6 sm:px-6 md:px-5 xl:px-5 border border-blue-600 m-3"
        v-for="item in services" :key="item?.img">
        <img :src="item?.img" alt="logo" />
        <div class="text-white text-3xl font-semibold font-['Inter']">
          {{ item[`title_${locale}`] }}
        </div>
        <p class="text-white text-opacity-90 text-xl font-normal font-['Inter'] leading-[30px] tracking-wider">
          {{ item[`text_${locale}`] }}
        </p>
      </div>
    </div>
  </section>
  <!-- Srvices end-->

  <!-- Partfoliyo start-->
  <section id="partfoliyo" class="p-2 sm:p-2 md:p-4 xl:p-4 py-2 md:py-12 lg:py-12 xl:py-12 bg-[#1E212C] h-fit">
    <div class="text-white text-center py-12 sm:py-12 md:py-6 xl:py-6 text-[40px] font-semibold font-['Overpass']">
      {{ capitalizeFirstLetter(t("navbar.partfolio")) }}
    </div>

    <!-- Card group -->
    <div class="flex justify-center flex-wrap">
      <!-- Card -->
      <div v-for="item in partfoliyo" :key="item.title"
        class="card w-[300px] relative rounded-xl overflow-hidden border m-3 border-gray-600">
        <div class="h-[200px]">
          <NuxtImg :src="item.img" class="h-full" />
        </div>
        <div class="p-4">
          <h2 class="font-bold text-xl pb-2">{{ item.title }}</h2>
          <p class="text-gray-300 text-justify">
            {{ strCut(35, item.description) }}
          </p>
        </div>
      </div>
      <div
        class="w-full p-2 sm:p-2 md:p-4 xl:p-12 py-2 md:py-16 lg:py-16 xl:py-16 px-2 md:px-5 lg:px-5 xl:px-5 bg-[#1E212C] h-fit">
        <div
          class="w-full min-h-[259px] flex flex-wrap bg-gray-800 rounded-[20px] border border-teal-400 py-4 md:py-10 lg:py-10 xl:py-10 px-4 md:px-16 lg:px-16 xl:px-16">
          <div class="w-[100%] sm:w-[100%] md:w-[58%] xl:w-[58%]">
            <h2
              class="text-white text-[30px] sm:text-[30px] md:text-[40px] xl:text-[40px] font-semibold font-['Overpass']">
              {{ t('join') }}
            </h2>
            <div class="text-white text-xl font-normal font-['Inter'] leading-relaxed">
              {{ t('join_title') }}
            </div>
          </div>
          <div
            class="w-auto flex flex-col space-y-4 justify-center items-start md:items-center lg:items-start xl:items-start ml-0 md:ml-0 lg:ml-24 xl:ml-24 my-10 sm:my-10 md:my-0 xl:my-0">
            <div class="flex items-center space-x-2 h-[35px] sm:h-[35px] md:h-auto xl:h-auto">
              <div class="w-[50px] h-0.5 bg-zinc-300 rotate-90 sm:rotate-90 md:rotate-0 xl:rotate-0"></div>
              <div class="text-white text-xl font-semibold font-['Inter']">
                {{ services[0][`title_${locale}`] }}
              </div>
            </div>
            <div class="flex items-center space-x-2 h-[35px] sm:h-[35px] md:h-auto xl:h-auto">
              <div class="w-[50px] h-0.5 bg-zinc-300 rotate-90 sm:rotate-90 md:rotate-0 xl:rotate-0"></div>
              <div class="text-white text-xl font-semibold font-['Inter']">
                {{ services[1][`title_${locale}`] }}
              </div>
            </div>
            <div class="flex items-center space-x-2 h-[35px] sm:h-[35px] md:h-auto xl:h-auto">
              <div class="w-[50px] h-0.5 bg-zinc-300 rotate-90 sm:rotate-90 md:rotate-0 xl:rotate-0"></div>
              <div class="text-white text-xl font-semibold font-['Inter']">
                {{ services[2][`title_${locale}`] }}
              </div>
            </div>
            <div class="flex items-center space-x-2 h-[35px] sm:h-[35px] md:h-auto xl:h-auto">
              <div class="w-[50px] h-0.5 bg-zinc-300 rotate-90 sm:rotate-90 md:rotate-0 xl:rotate-0"></div>
              <div class="text-white text-xl font-semibold font-['Inter']">
                {{ services[3][`title_${locale}`] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Partfoliyo end-->

  <!-- Footer start-->
  <footer id="footer" class="flex-col sm:flex-col md:flex-row xl:flex-row gap-4 bg-[#1E212C]">
    <div class="w-full shadow border border-gray-800"></div>
    <div class="flex flex-wrap px-10">
      <div class="w-[100%] sm:w-[100%] md:w-[40%] xl:w-[40%] h-auto py-5">
        <NuxtImg src="/logo.svg" width="180" />
        <div
          class="w-[100%] sm:w-[100%] md:w-[100%] xl:w-[400px] h-[71.90px] text-white text-3xl mt-5 font-semibold font-['Inter']">
          {{ t('problem_solve') }}
        </div>
        <div class="w-[100%] sm:w-[100%] md:w-[100%] xl:w-[370px] h-0.5 bg-neutral-400 my-5"></div>
        <div class="w-[100%] sm:w-[100%] md:w-[100%] xl:w-[370px] flex space-x-2">
          <span
            class="text-white text-[20px] sm:text-[20px] md:text-[20px] xl:text-[26px] font-bold font-['Inter']">El-pochta:</span>
          <NuxtLink
            class="text-white text-[20px] sm:text-[20px] md:text-[20px] xl:text-[26px] font-medium font-['Inter']"
            to="mailto:SuniyX@mail.uz" target="_blank">SuniyX@mail.uz</NuxtLink>
        </div>
        <div class="w-auto flex space-x-2">
          <span class="text-white text-[20px] sm:text-[20px] md:text-[20px] xl:text-[26px] font-bold font-['Inter']">
            {{ t('number') }}:</span>
          <NuxtLink
            class="text-white text-[20px] sm:text-[20px] md:text-[20px] xl:text-[26px] font-medium font-['Inter']" to="tel:+998 90
            123 45 67" target="_blank">+998 90 123 45 67</NuxtLink>
          <span
            class="text-white text-[20px] sm:text-[20px] md:text-[26px] xl:text-[26px] font-medium font-['Inter']"></span>
        </div>

        <!-- icons group -->
        <div class="flex space-x-12 mt-5">
          <div class="flex items-center space-x-2">
            <img src="/telegram.svg" class="w-11 h-11" />
            <span
              class="text-white text-[16px] sm:text-[16px] md:text-[22px] xl:text-[22px] font-semibold font-['Inter']">Telegram</span>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/instagram.svg" class="w-11 h-11" />
            <span
              class="text-white text-[16px] sm:text-[16px] md:text-[22px] xl:text-[22px] font-semibold font-['Inter']">Instagram</span>
          </div>
        </div>
        <!-- icons group -->
        <div class="flex space-x-12 mt-5">
          <div class="flex items-center space-x-2">
            <img src="/facebook.svg" class="w-11 h-11" />
            <span
              class="text-white text-[16px] sm:text-[16px] md:text-[22px] font-semibold font-['Inter']">Facebook</span>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/youtube.svg" class="w-11 h-11" />
            <span class="text-white text-[16px] sm:text-[16px] md:text-[22px] font-semibold font-['Inter']">You
              Tube</span>
          </div>
        </div>
      </div>

      <!-- Input group -->
      <div class="w-[100%] sm:w-[100%] md:w-[60%] xl:w-[60%] pl-0 sm:pl-0 md:pl-20 xl:pl-20 py-5">
        <div class="text-white text-[30px] sm:text-[30px] md:text-[40px] xl:text-[40px] font-bold font-['Overpass']">
          {{ t('connect') }}
        </div>
        <div class="flex space-x-4 py-2 mt-5">
          <UInput color="cyan" class="w-[50%]" size="xl" variant="outline" :placeholder="`${t('name')}...`" />
          <UInput color="cyan" class="w-[50%]" size="xl" variant="outline" :placeholder="`${t('surname')}...`" />
        </div>
        <UInput color="cyan" class="w-[100%] py-2" size="xl" variant="outline" placeholder="Test@mail.com..." />
        <div class="py-2 h-[250px]">
          <UTextarea color="cyan" size="xl" :rows="7" variant="outline" :placeholder="`${t('comment')}...`" />
        </div>
        <div class="w-full flex justify-end">
          <BorderedBtn :title="t('send')" />
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer end-->
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@500&family=Overpass&family=Space+Grotesk:wght@500&display=swap");

.home__title {
  font-family: "Bangers", system-ui;
  font-family: "Inter", sans-serif;
  font-family: "Overpass", sans-serif;
  font-family: "Space Grotesk", sans-serif;
}
</style>
