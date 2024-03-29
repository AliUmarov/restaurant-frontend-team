import React from 'react';
import cl from '../About/aboutUs.module.css'


const AboutUs = () => {
   return (
     <>
       <p className={cl.title}>  О ресторанном проекте Halal </p>
       <p className={cl.underTitle}>за гастрономический вкус отвечает </p>
       <p className={cl.nameTitle}> Шабаев Магомед </p>

       <div className={cl.AboutUs}>
         <div className={cl.textBlock}>
           <p>
             Известный и титулованный шеф-повар. Специализируется на современной русской, северной и азиатской кухнях
             В послужном списке Рустама Тангирова работа в лучших гастрономических ресторанах: от самого высокого ресторана
             Европы Sixty до небольшого ресторанчика Saimaa Life Gastrocafe в Финляндии. Сегодня Рустам является бренд-шефом
             одного из ключевых ресторанов Эмина Агаларова – Lesnoy.
             Рустам Тангиров является лучшим поваром Крыма 2020/21 гг, GEO арктического гастрокэмпа UNDER ARCTIC,
             а также судьей WACS международной Категории B. Рустам стажировался и оттачивал мастерство в легендарных
             ресторанах Испании, Франции, Скандинавии и Тайланда. А затем и сам стал тренером: в 2017 году тренировал
             серебряного кандидата Российского отбора конкурса Bocuse d’Or, а в двумя годами спустя - золотого.
             Сам же Рустам Тангиров – обладатель многочисленных кулинарных наград, полученных на российских и международных
             конкурсах. Является фуд-дизайнером и постоянным ведущим передач «Красивая подача» на канале «Еда»
             и «Секреты шеф-повара» на «Пятом» и «Литература на вкус» на 78 канале.
             Еще одна глава в биографии шефа – это книги. В 2018 году Рустам Тангиров выпустил книгу «Красивая Подача»
             тиражом 2000 штук, которая была распродана полностью всего за пару месяцев. В конце 2019 года вышла вторая
             книга «Дикая Кухня», состоящая из рецептов блюд из продуктов, добытых лично шефом, и приготовленных на костре
             или в русской печи.
           </p>
         </div>
         <div className={cl.imageBlock}>
           <img  className={cl.image} src="https://lesnoy-rest.ru/gallery/chef_L.jpg"/>
         </div>

       </div>


     </>

  );
};

export default AboutUs;