import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import UtilsBar from "./components/UtilBar";

import ukDark from './assets/images/united-kingdom-lightMode.svg';
import ukLight from './assets/images/united-kingdom-darkMode.svg';
import ancientWoodland from './assets/images/ancient-woodland.webp';
import logs from './assets/images/tree-logs.webp';

export default function App() {
  const [map, setMap] = useState(ukDark);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setMap(ukLight);
    };
  }, [])

  return (
    <main className="bg-bgLight dark:bg-bgDark">
      <Hero />

    <div className="w-full">

      <div className="flex flex-col mt-28">
        <h1 className="text-darkGreen1 dark:text-lightGreen1 text-center">What Is The Woodland Trust?</h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-around mt-10">
          <section className="text-section">
            <h2 className="ts-head">Who They Are</h2>
            <p className="ts-content">
              Founded in Devon in 1972, they have grown from a small group of friends to the UK’s largest woodland conservation charity.
              <br /><br />Starting with saving Ancient Avon woods from clear-felling and replanting with conifers, the Woodland Trust now cares for over 1000 woods covering 189 hectares across six counties.</p>
          </section>
          <section className="text-section">
            <h2 className="ts-head">What They Do</h2>
            <p className="ts-content">
              For over 50 years, the Woodland Trust has strived to protect and restore the UK’s forests.
              <br /><br />Through campaigns, advocacy, and education, they have fought to safeguard forests all over the United Kingdom. Forests are a vital part of the ecosystem so it is crucial they are respected and cared for. </p>
          </section>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-evenly mx-4 mt-10 sm:mt-36">

        <section className="text-section">
          <div className="flex flex-col sm:flex-row gap-1 items-center">
            <svg className="h-10 fill-black dark:fill-white" viewBox="0 0 35 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 43.75C12.4323 42.474 8.2487 39.5664 4.94922 35.0273C1.64974 30.4883 0 25.4479 0 19.9062V6.5625L17.5 0L35 6.5625V19.9062C35 25.4479 33.3503 30.4883 30.0508 35.0273C26.7513 39.5664 22.5677 42.474 17.5 43.75ZM17.5 39.1562C21.2917 37.9531 24.4271 35.5469 26.9062 31.9375C29.3854 28.3281 30.625 24.3177 30.625 19.9062V9.57031L17.5 4.64844L4.375 9.57031V19.9062C4.375 24.3177 5.61458 28.3281 8.09375 31.9375C10.5729 35.5469 13.7083 37.9531 17.5 39.1562Z"/>
            </svg>
            <svg className="w-10 hidden sm:flex fill-black dark:fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
              <path d="M160-440v-80h640v80H160Z"/>
            </svg>
            <h2 className="ts-head">Protect</h2>
          </div>
          <p className="ts-content">
            Nature constantly faces threats such as climate change, urban growth, pollution, and disease.
            <br /><br />The UK's ancient forests are no exception to this, they are invaluable and precious, yet they are at risk of being lost, are irreplaceable and house habitats not possible in other areas of the United Kingdom. The Woodland Trust endeavours to protect the UK's native forests and animals.</p>
        </section>

        <section className="text-section">
          <div className="flex flex-col sm:flex-row gap-1 items-center">
            <svg className="w-10 fill-black dark:fill-white" viewBox="0 0 60 53" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.0939 17.0733V17.7325C31.2462 16.043 32.589 14.71 34.1417 13.6504C36.6319 11.9415 39.6153 10.9649 43.1505 10.3399C43.7169 10.2422 44.2589 10.6182 44.3566 11.1895C44.4542 11.7559 44.0782 12.2979 43.5069 12.3956C40.2501 12.9669 37.5304 13.8506 35.3136 15.3692C33.5265 16.5948 32.0421 18.2549 30.8409 20.5254C39.3224 21.3751 44.3419 20.545 47.9894 17.8936C51.6026 15.2618 54.0441 10.7159 57.2325 4.17291C56.295 4.22662 55.3185 4.27545 54.3273 4.31939C47.9015 4.61724 40.8605 4.94439 36.4659 8.81158C35.3429 9.80279 34.2442 10.9893 33.1749 12.3809C32.1349 13.7237 31.1095 15.2862 30.0939 17.0733ZM26.9396 11.7315C26.5831 11.253 26.1827 10.8721 25.7433 10.5645C24.879 9.96392 23.8146 9.61236 22.5499 9.33404C21.9884 9.21197 21.6271 8.65533 21.7491 8.0938C21.8712 7.53228 22.4278 7.17095 22.9894 7.29302C24.4982 7.62505 25.797 8.05962 26.92 8.83599C26.837 8.58209 26.7442 8.32818 26.6466 8.08404C26.1144 6.77544 25.3331 5.57916 24.254 4.63189C23.0089 3.53814 21.4122 3.33795 19.9523 3.1524L19.9181 3.14752L12.2569 2.67877L14.2394 6.77056C15.6261 9.25591 17.506 10.6377 19.8058 11.3067C21.8321 11.8926 24.2296 11.9561 26.9396 11.7315ZM27.755 14.2169C24.5226 14.5294 21.6271 14.4854 19.0978 13.7481C16.1388 12.8887 13.7413 11.1211 11.9884 7.95709C11.9786 7.93755 11.964 7.91314 11.9542 7.89361L9.01475 1.82427C8.70714 1.18951 8.97569 0.427789 9.61046 0.125054C9.81554 0.0273981 10.0304 -0.0116644 10.2403 0.002984L20.0792 0.608453C20.1329 0.613336 20.1866 0.618218 20.2403 0.627984L20.2648 0.632867C22.1007 0.862359 24.1124 1.11627 25.9337 2.72271C27.3253 3.9483 28.3312 5.47173 29.005 7.13189C29.7423 8.9483 30.0743 10.9258 30.0743 12.8253C30.0743 12.9669 30.0499 13.1036 30.0108 13.2305C30.5089 12.4835 31.0118 11.7803 31.5196 11.1211C32.6915 9.59283 33.8829 8.30865 35.0792 7.25396C40.0206 2.90826 47.4523 2.56158 54.2296 2.24908C55.797 2.17584 57.3253 2.10748 58.8634 1.97564C59.0441 1.96099 59.2296 1.99029 59.4005 2.0733C59.9181 2.32232 60.1378 2.94732 59.8839 3.4649C56.1583 11.1602 53.5216 16.4336 49.2003 19.5782C44.9864 22.6446 39.3468 23.5626 29.8351 22.5225V30.877C33.8097 25.335 37.6964 25.2422 44.0441 25.0909C45.4015 25.0567 46.8859 25.0225 48.5753 24.92C48.7462 24.9102 48.922 24.9395 49.088 25.0225C49.6056 25.2715 49.8253 25.8965 49.5714 26.4141C46.9786 31.7754 45.2989 35.1006 42.4327 36.9805C39.6886 38.7823 36.0753 39.1094 29.8302 38.4356V52.1026H27.7403V38.7286C19.171 39.6612 13.9708 38.8751 10.0401 36.1407C6.02159 33.3331 3.49229 28.5821 0.103622 21.585C-0.145402 21.0674 0.0694421 20.4424 0.58702 20.1934C0.757919 20.1104 0.938583 20.0811 1.11925 20.0909C2.51085 20.1983 3.93175 20.2569 5.39171 20.3155C11.6612 20.5645 18.7316 20.8428 23.1896 24.7637C25.2794 26.5997 26.7491 28.128 27.7501 29.8126L27.755 14.2169ZM25.465 36.8536C24.0392 34.9786 22.5353 33.5723 20.9337 32.4737C18.9659 31.126 16.8224 30.2227 14.4737 29.4805C13.922 29.3096 13.6192 28.7188 13.795 28.1719C13.9708 27.6202 14.5567 27.3174 15.1036 27.4883C17.628 28.2842 19.9474 29.2657 22.1105 30.7501C23.9952 32.0391 25.7433 33.7042 27.3888 35.9405C27.2667 34.1045 26.92 32.6788 26.256 31.3995C25.3966 29.7344 23.9757 28.2256 21.8126 26.3262C17.9015 22.8887 11.2316 22.6251 5.3087 22.3907C4.43468 22.3565 3.58018 22.3223 2.75987 22.2784C5.6212 28.0987 7.91612 32.1075 11.2462 34.4219C14.4249 36.6338 18.6778 37.3956 25.465 36.8536ZM30.6896 33.3721C31.4708 32.6788 32.3497 32.0928 33.2872 31.5948C35.4454 30.4473 37.9259 29.7637 40.2208 29.3633C40.7872 29.2657 41.3292 29.6417 41.4269 30.2129C41.5245 30.7794 41.1485 31.3213 40.5773 31.419C38.4728 31.7901 36.2071 32.4102 34.2638 33.4405C32.8478 34.1924 31.6075 35.169 30.7433 36.4288C36.0558 36.961 39.1222 36.6729 41.3048 35.2422C43.4386 33.8409 44.9181 31.209 46.9396 27.0879C45.9483 27.127 45.0011 27.1514 44.1026 27.171C38.0138 27.3126 34.4542 27.4004 30.6896 33.3721Z" />
            </svg>
            <svg className="w-10 hidden sm:flex fill-black dark:fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
              <path d="M160-440v-80h640v80H160Z"/>
            </svg>
            <h2 className="ts-head">Restore</h2>
          </div>
          <p className="ts-content">
            Nature constantly faces threats such as climate change, urban growth, pollution, and disease.
            <br /><br />The UK's ancient forests are no exception to this, they are  invaluable and precious, yet they are at risk of being lost, are irreplaceable and house habitats not possible in other areas of the United Kingdom. The Woodland Trust endeavours to protect the UK's native forests and animals.</p>
        </section>

        <section className="text-section">
          <div className="flex flex-col sm:flex-row gap-1 items-center">
            <svg className="w-10 fill-black dark:fill-white" viewBox="0 0 55 56" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9741 14.2639C20.4325 13.6418 19.8998 13.0241 19.3761 12.4019L19.309 12.3168C18.9912 11.8692 18.7002 11.453 18.4406 11.0412C12.2279 16.3721 7.1879 22.379 4.59628 28.7125C2.26874 34.3926 1.93304 40.3502 4.53809 46.2944C4.63776 46.5192 4.67378 46.7671 4.64221 47.011C4.61063 47.2549 4.51269 47.4854 4.35905 47.6775C3.62946 48.5727 3.4907 49.4679 3.7145 50.1035C3.80489 50.3769 3.95821 50.6252 4.1621 50.8286C4.37256 51.0368 4.6307 51.1905 4.91408 51.2762C5.29237 51.3653 5.68736 51.3544 6.06016 51.2446C6.43296 51.1347 6.77072 50.9296 7.04019 50.6495C7.22796 50.4765 7.46118 50.3606 7.7125 50.3154C7.96381 50.2702 8.2228 50.2976 8.45909 50.3944C14.3093 52.7712 20.231 53.0442 26.2423 50.7928C32.0343 48.6174 37.9471 44.1056 44.0032 36.8858C42.9284 36.2217 41.8996 35.486 40.9237 34.6836C39.1289 33.1774 37.4208 31.571 35.8076 29.8718C33.9142 28.1486 31.9896 26.291 30.1231 24.4245C26.8992 21.2027 23.8496 17.811 20.9875 14.2639H20.9741ZM54.5174 3.13204C54.0886 6.39692 52.4083 9.36755 49.831 11.4172C49.2157 11.9119 48.565 12.3607 47.8839 12.76C49.5067 14.8661 50.8922 17.1447 52.0153 19.5546C53.2283 22.1373 54.6651 25.8747 54.9471 29.4018C55.1664 32.0875 54.7323 34.6746 53.1075 36.6754C51.3439 38.8418 49.0208 39.0163 46.5098 38.0764C40.0016 45.9587 33.5696 50.8912 27.2047 53.2949C20.7637 55.7074 14.4301 55.5329 8.195 53.1651C7.61962 53.5687 6.96196 53.8399 6.2693 53.9591C5.57663 54.0782 4.86616 54.0425 4.18896 53.8544C3.49516 53.6597 2.85716 53.3039 2.32693 52.8159C1.79257 52.3149 1.38849 51.6912 1.14974 50.9987C0.916938 50.2797 0.850766 49.5172 0.956232 48.7688C1.0617 48.0205 1.33604 47.3059 1.75848 46.6793C-0.842094 40.2294 -0.412396 33.8152 2.0897 27.701C4.92303 20.7676 10.433 14.2639 17.1694 8.56594C16.9994 8.12986 16.8647 7.68081 16.7666 7.22313C16.5709 6.46635 16.5561 5.67415 16.7233 4.91056C16.8904 4.14698 17.2349 3.43346 17.7289 2.82767C19.5954 0.553852 22.3482 -0.135456 25.2889 0.0212051C29.2681 0.231578 33.6054 2.01304 36.2955 3.35137C39.6484 5.00028 42.7039 7.1951 45.3371 9.84608C45.4445 9.72971 45.5519 9.61333 45.6549 9.49248C47.3307 7.56673 48.5134 5.26262 49.1014 2.77844C49.1683 2.41214 49.3202 2.06664 49.5449 1.76969C49.7695 1.47274 50.0607 1.23261 50.395 1.0686C50.8116 0.858158 51.271 0.74636 51.7378 0.741845C52.2012 0.735827 52.66 0.833714 53.0806 1.02831C53.4444 1.19025 53.7637 1.43756 54.0115 1.74925C54.2593 2.06094 54.4282 2.42781 54.504 2.81872C54.5241 2.92521 54.5241 3.03451 54.504 3.141L54.5174 3.13204ZM45.4087 14.0088C43.7515 14.6924 42.0363 15.2257 40.2836 15.6023C40.0462 15.6812 39.7872 15.6626 39.5634 15.5505C39.3397 15.4385 39.1697 15.2421 39.0908 15.0047C39.0118 14.7673 39.0304 14.5082 39.1425 14.2845C39.2546 14.0608 39.4509 13.8908 39.6883 13.8118C40.9782 13.2239 42.2012 12.4991 43.3363 11.6499C40.9258 9.25604 38.1391 7.2737 35.087 5.78185C32.6117 4.54647 28.646 2.90824 25.1502 2.72473C23.0062 2.60835 21.0457 3.05595 19.8192 4.53752C19.5914 4.83707 19.4365 5.18552 19.3665 5.5553C19.2966 5.92508 19.3137 6.30606 19.4164 6.6681C19.5404 7.22818 19.7328 7.77088 19.9893 8.28395C20.9312 9.73794 21.9456 11.1437 23.0286 12.4959C24.3863 14.0625 25.7634 15.5888 27.1599 17.0749C29.0995 19.1637 31.1331 21.2361 33.2607 23.2921C33.7084 23.7128 34.3484 24.42 35.1452 25.266C35.8658 26.0403 36.7073 26.9356 37.6249 27.88C40.5118 30.5675 43.5839 33.0488 46.8186 35.3057C48.5374 36.0845 50.0369 36.1606 50.9903 34.9834C52.1093 33.6093 52.3958 31.6846 52.2302 29.6122C51.975 26.4521 50.6635 23.0504 49.5445 20.6602C48.4352 18.2631 47.0405 16.0088 45.3908 13.9461L45.4087 14.0088Z" />
            </svg>
            <svg className="w-10 hidden sm:flex fill-black dark:fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
              <path d="M160-440v-80h640v80H160Z"/>
            </svg>
            <h2 className="ts-head">Create</h2>
          </div>
          <p className="ts-content">
            Nature constantly faces threats such as climate change, urban growth, pollution, and disease.
            <br /><br />The UK's ancient forests are no exception to this, they are  invaluable and precious, yet they are at risk of being lost, are irreplaceable and house habitats not possible in other areas of the United Kingdom. The Woodland Trust endeavours to protect the UK's native forests and animals.</p>
        </section>

      </div>

      <div className="flex flex-col">
        <section className="flex flex-col">
          <h1 className="text-darkGreen1 dark:text-lightGreen1 text-center mt-20 sm:mt-36">The UK's Ancient Woodland</h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-around mt-10">
            <img
              className="w-56 sm:w-54"
              src={map}
              alt="A solid green map of the United Kingdom"
            />
            <p className="w-5/6 sm:w-1/3 text-[3rem] font-amatic-sc">Ancient woodland used to be abundant in the United Kingdom. Today, only <span className="font-bold text-darkGreen1 dark:text-lightGreen1">2.5%</span> of it remains.</p>
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="mt-24 sm:mt-36 text-center">What Are Ancient Woodlands?</h2>
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 items-center justify-around mt-10">
            <p className="w-5/6 sm:w-1/3">
            They are areas of forestry that have continued to exist since 1600 in England, Wales, and Northern Ireland, and 1750 in Scotland. Tree planting was uncommon back then, so trees that old are likely natural. Historically, many trees were mainly coppiced or pollarded, particularly ash, hazel, and oak trees, which can be seen as a potential sign of ancient woodland. However, ancient woodlands are classified by their long-term continuity and indicator species such as bluebells or primroses. Historical records are also very useful for determining ancient woodlands.
            </p>
            <img
              className="w-56 sm:w-96"
              src={ancientWoodland}
              alt="Dense ancient woodland with lots of plants on the floor"
            />
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="mt-16 sm:mt-28 text-center">Deforestation</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-around mt-10">
            <img
              className="w-56 sm:w-96"
              src={logs}
              alt="A large pile of tree logs"
            />
            <p className="w-5/6 sm:w-1/3">
            Since the 1930s in the interwar period, our ancient woodlands have diminished at an alarming rate. Almost half of the broadleaved woodland within England and Wales has been lost to agricultural use or has been replaced with conifer plantations. The remaining ancient woodlands cover a very small area and are at risk of complete loss.
            <br /><br />Not only does this pose a risk of losing an ancient and sparse biome, but the impact would be damaging to the climate. When trees respire, they intake carbon dioxide and output oxygen, according to the State of the UK's Woods and Trees 2021 report, ancient woodlands hold an estimated 77 million tonnes of carbon dioxide, 37% of all carbon stored in wood and trees in the United Kingdom.
            </p>
          </div>
        </section>

        <section className="mt-16 sm:mt-36">
          <h1 className="text-darkGreen1 dark:text-lightGreen1 text-center">Want To Get Involved?</h1>
          <div className="flex flex-col sm:flex-row items-center justify-evenly mt-5 sm:mt-10 mb-28">
            <p className="w-5/6 sm:w-1/3">
              The Woodland Trust has a vision of a world where trees and woodlands help to combat climate change and the loss of nature, but it cannot be achieved without your help.
              <br /> <br />Although donations are hugely appreciated, they aren't the only way to help, you can get directly involved by campaigning or volunteering for the Woodland Trust.
              <br /> <br />More information is available on the Woodland Trust website.
            </p>

            <div className="w-5/6 sm:w-64 flex flex-col gap-10 mt-12 sm:mt-0">
              <a
                className="px-10 py-2 border border-darkGreen1 dark:border-lightGreen1 hover:border-darkGreen2 focus:border-darkGreen2 dark:hover:border-lightGreen2 dark:focus:border-lightGreen2 rounded-md bg-darkGreen1 dark:bg-lightGreen1 hover:bg-darkGreen2 focus:bg-darkGreen2 dark:hover:bg-lightGreen2 dark:focus:bg-lightGreen2 text-3xl text-white text-center transition-colors duration-300"
                href="https://www.woodlandtrust.org.uk/support-us/give/donations/"
                rel="noreferrer"
                target="_blank">
                Donate
              </a>

              <a
                className="px-10 py-2 border border-darkGreen1 dark:border-lightGreen1 hover:border-darkGreen2 focus:border-darkGreen2 dark:hover:border-lightGreen2 dark:focus:border-lightGreen2 rounded-md text-3xl text-darkGreen1 dark:text-lightGreen1 hover:text-darkGreen2 focus:text-darkGreen2 dark:hover:text-lightGreen2 dark:focus:text-lightGreen2 text-center hover:shadow-[0px_0px_0px_1px_#044412] focus:shadow-[0px_0px_0px_1px_#044412] dark:hover:shadow-[0px_0px_0px_1px_#2B5E36] dark:focus:shadow-[0px_0px_0px_1px_#2B5E36] transition-all duration-300"
                href="https://www.woodlandtrust.org.uk/support-us/act/volunteer-with-us/"
                rel="noreferrer"
                target="_blank">
                Volunteer
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

      <UtilsBar />
    </main>
  );
};