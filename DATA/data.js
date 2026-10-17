/* Данные меню. Файл подключается обычным <script>, поэтому страница работает и при открытии с диска (file://).
   Каждый ключ с массивом (кроме owner) — это курс. В массиве: category, title, URL. */
window.TRAINERS_DATA = {
  owner: "Oksana Khomenko",
  URLpath: `${location.href}`,
  FCE: [
    {
      category: "vocabulary",
      title: "Clothes & Moving Abroad + vocabulary",
      name: "clothes-trainer_cover.html",
    },
    {
      category: "grammar",
      title: "Clothes & Moving Abroad + grammar",
      name: "clothes-trainer_cover.html",
    },
    {
      category: "revision",
      title: "Clothes & Moving Abroad + Revision",
      name: "clothes-trainer_cover.html",
    },
  ],
  "SpeakOut C1": [
    {
      category: "vocabulary",
      title: "SpeakOut C1 (Unit 1A/B) vocabulary",
      name: "speakout-c1-unit1ab-revision.html",
    },
    {
      category: "grammar",
      title: "SpeakOut C1 (Unit 1A/B) grammar",
      name: "speakout-c1-unit1ab-revision.html",
    },
    {
      category: "revision",
      title: "SpeakOut C1 (Unit 1A/B) Revision",
      name: "speakout-c1-unit1ab-revision.html",
    },
  ],
};
