import { titleToSlug } from "../utils/strings/titleToSlug";
import { TypeBlog } from "../types/typesBlog";

const dataBlog: TypeBlog[] = [
  {
    id: 1,
    imgUrl: "/img/blog/1.jpg",
    imgAlt:
      "Man in beige t-shirt and navy shorts performing a running drill, lifting one knee with arms extended.",
    categories: ["Clothes", "Shoes"],
    title: "What kind of jogging clothes to choose?",
    subtitle: "Finding the right outfit for all weathers",
    readMore: "",
    description: [
      {
        descriptionText:
          "Можно ли убежать от проблем? Вопрос философский, но с тем, что пробежка имеет целый ряд преимуществ, поспорить трудно. Отличный способ поддерживать свою форму, возможность чаще бывать на свежем воздухе, действенный метод опустошить голову от тревог или завести новых друзей – каждый выбирает для себя.",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Чтобы тренировка прошла идеально, важно смотреть прогноз и выбирать подходящую под погоду одежду. Неправильно подобранный аутфит может привести не только дискомфорту во время тренировки, но даже к травмам и тепловому удару.",
        descriptionImage: "",
      },
      {
        descriptionText: "Какая самая комфортная погода для бега?",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Помните сказку про трех медведей? Одна каша слишком холодная, вторая – слишком горячая, а третья, теплая, – в самый раз. Этот «сказочный» подход еще называют принципом Златовласки. Бегуны, как и девочка из сказки, предпочитают не бросаться в крайности и выбирают «золотую середину», когда на улице не слишком жарко и не холодно. Считается, что оптимальная температура для бега находится в диапазоне 7-15 градусов.",
        descriptionImage: "/img/blog/blog-desc-img/1/1.png",
      },
      {
        descriptionText:
          "Это конечно же не значит, что более жаркие (или холодные) дни станут помехой для отличной пробежки. Не зря говорится: нет плохой погоды – есть неподходящая одежда. Ниже мы расскажем о том, как подобрать максимально комфортную одежду для тренировки в любую погоду.",
        descriptionImage: "",
      },
      {
        descriptionText: "Что влияет на выбор одежды?",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Главным фактором при выборе одежды является температура за окном. Тут стоит ориентироваться не только на прогноз и цифру на термометре, но и на свои ощущения, ведь восприятие тепла и холода достаточно субъективно.",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Не стоит также игнорировать показатель влажности. Так, при повышенной влажности температура тоже будет казаться выше. Создается эффект парника: тело нагревается быстрее, пот выходит хуже и организму становится труднее охладиться. Сухой же воздух, наоборот, может привести к повышенному потоотделению.",
        descriptionImage: "/img/blog/blog-desc-img/1/2.png",
      },
      {
        descriptionText: "Что надеть в -1°C",
        descriptionImage: "",
      },
      {
        descriptionText:
          "При небольшом минусе нужно найти деликатный баланс, чтобы не замерзнуть в начале и не перегреться во время бега. На помощь придет многослойность: термобелье с длинным рукавом будет поддерживать комфортную температуру и выводить лишнюю влагу, а верхний слой с защитой от ветра прикроет от капризов погоды.",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Утепленные леггинсы или тайтсы помогут сохранить тепло, не сковывая движения. Не забывай про защиту рук и ушей: пара теплых перчаток, шапка и даже балаклава помогут в поддержании климат-контроля.",
        descriptionImage: "/img/blog/blog-desc-img/1/3.png",
      },
      {
        descriptionText: "Что надеть в +4°C",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Холод уступил место приятной прохладе и мягкому солнцу, так что можно сбросить слой или два. Термобелье можно заменить на лонгслив, а утепленную куртку на ветровку. Вместо утепленных леггинсов можно перейти на базовые и выбрать более тонкие перчатки, чтобы защитить пальцы от свежего утреннего воздуха.",
        descriptionImage: "",
      },
      {
        descriptionText:
          "Упор теперь нужно сделать не на утеплении, а на дышащих свойствах: особое внимание на одежду с мембраной, вентиляцией и перфорированными вставками, которые помогут выпустить жар и регулировать температуру тела.",
        descriptionImage: "/img/blog/blog-desc-img/1/4.png",
      },
    ],
  },
  {
    id: 2,
    imgUrl: "/img/blog/2.jpg",
    imgAlt:
      "Man in a black jacket, cap, and green sneakers walking on the sidewalk with a skateboard, urban background with cars and trees.",
    categories: ["Clothes", "Lifestyle"],
    title: "How to Style Casual Streetwear with a Skateboard?",
    subtitle:
      "Discover how to create a stylish, laid-back look with urban streetwear and a skateboard.",
    readMore: "",
    description: [
      {
        descriptionText: "",
        descriptionImage: "",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "/img/blog/3.jpg",
    imgAlt:
      "Two people, one in a bright green ski jacket in deep snow, and another in a black waterproof jacket standing under a tropical rain, showcasing clothing for extreme weather conditions.",
    categories: ["Clothes", "Guide"],
    title: "How to Choose Weatherproof Clothing for Any Condition?",
    subtitle:
      "Learn how to select the best clothing for staying dry and comfortable in snow or heavy rain.",
    readMore: "",
    description: [
      {
        descriptionText: "",
        descriptionImage: "",
      },
    ],
  },
];

dataBlog.forEach((blog) => {
  blog.readMore = `/blog/${titleToSlug(blog.title)}`;
});

export default dataBlog;
