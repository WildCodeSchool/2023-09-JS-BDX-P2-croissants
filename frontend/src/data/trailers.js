const trailers = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    trailerName: "Castle-in-the-sky",
    source: "https://www.youtube.com/embed/8ykEy-yPBFc?si=-gl2V34Pp8IsCnxx",
  },
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    trailerName: "Grave-of-the-fireflies",
    source: "https://www.youtube.com/embed/4vPeTSRd580?si=WisuWrhi8AyJ5V-B",
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    trailerName: "My-Neighbor-Totoro",
    source: "https://www.youtube.com/embed/92a7Hj0ijLs?si=ZkRojWlCUHrCsD6s",
  },
  {
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    trailerName: "Kiki's-Delivery-Service",
    source: "https://www.youtube.com/embed/4bG17OYs-GA?si=Gm0KcEcVJlgyFP5N",
  },
  {
    id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    trailerName: "Only-Yesterday",
    source: "https://www.youtube.com/embed/OfkQlZArxw0?si=7lES77EPs-A7rLCE",
  },
  {
    id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    trailerName: "Porco Rosso",
    source: "https://www.youtube.com/embed/awEC-aLDzjs?si=e_Rb4jjdYJlelMZJ",
  },
  {
    id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    trailerName: "Pom-poko",
    source: "https://www.youtube.com/embed/_7cowIHjCD4?si=vS4EfO91NuiVdii4",
  },
  {
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    trailerName: "Whisper-of-the-Heart",
    source: "https://www.youtube.com/embed/0pVkiod6V0U?si=gc_K9IFITQHfO-9_",
  },
  {
    id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    trailerName: "Princess-Mononoke",
    source: "https://www.youtube.com/embed/4OiMOHRDs14?si=sVhsTIOEGraLYXDV",
  },
  {
    id: "45204234-adfd-45cb-a505-a8e7a676b114",
    trailerName: "My-neighbors-the-Yamadas",
    source: "https://www.youtube.com/embed/1C9ujuCPlnY?si=nCnZhGbPWFbUZAi8",
  },
  {
    id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    trailerName: "Spirited-Away",
    source: "https://www.youtube.com/embed/ByXuk9QqQkk?si=lY4EqGoDmTM057r-",
  },
  {
    id: "90b72513-afd4-4570-84de-a56c312fdf81",
    trailerName: "The-Cat-Returns",
    source: "https://www.youtube.com/embed/Gp-H_YOcYTM?si=bk3jgsSMXG6UVujb",
  },
  {
    id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    trailerName: "Howl's-moving-Castle",
    source: "https://www.youtube.com/embed/iwROgK94zcM?si=Xjav87jeHk3yY9te",
  },
  {
    id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
    trailerName: "Tales-from-Earthsea",
    source: "https://www.youtube.com/embed/8hxYx3Jq3kI?si=g0dZZvAChqoDMEMa",
  },
  {
    id: "758bf02e-3122-46e0-884e-67cf83df1786",
    trailerName: "Ponyo",
    source: "https://www.youtube.com/embed/CsR3KVgBzSM?si=yet-vEHXNwgGoCb7",
  },
  {
    id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    trailerName: "Arrietty",
    source: "https://www.youtube.com/embed/9CtIXPhPo0g?si=0_YYjDTBGYfG3qLm",
  },
  {
    id: "45db04e4-304a-4933-9823-33f389e8d74d",
    trailerName: "From-up-On-Poppy-Hill",
    source: "https://www.youtube.com/embed/9nzpk_Br6yo?si=8mHHPI1-aKF55b3A",
  },
  {
    id: "67405111-37a5-438f-81cc-4666af60c800",
    trailerName: "The-Wind-Rises",
    source: "https://www.youtube.com/embed/RzSpDgiF5y8?si=zSO_tykLcYFnUEy7",
  },
  {
    id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    trailerName: "The-Tale-Of-The-Princess-Kaguya",
    source: "https://www.youtube.com/embed/W71mtorCZDw?si=w-fJzYPhyrcMhUdP",
  },
  {
    id: "https://www.youtube.com/embed/jjmrxqcQdYg?si=xQYNaS0sTO_oBamt",
    trailerName: "When-Marnie-was-there",
    source: "https://www.youtube.com/watch?v=jjmrxqcQdYg",
  },
  {
    id: "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
    trailerName: "The-red-turtle",
    source: "https://www.youtube.com/embed/Sw7BggqBpTk?si=ULWuvAJElcwZM8G5",
  },
  {
    id: "790e0028-a31c-4626-a694-86b7a8cada40",
    trailerName: "Earwig-and-the-witch",
    source: "https://www.youtube.com/embed/V--UCVHLzAY?si=HbgMvjir8fnnb1Ef",
  },
];

export default trailers;
