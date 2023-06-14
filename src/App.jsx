import "./App.css";
import React from "react";
import logo from "./assets/logo.svg";
import p1 from "./assets/p1.svg";
import icon from "./assets/in.svg";
import icon2 from "./assets/i2.svg";
import MyBtn from "./components/MyBtn.jsx";
import MyCard from "./components/MyCard.jsx";
import MyCard2 from "./components/MyCard2.jsx";

import icon1 from "./assets/icon1.svg";
import vk from "./assets/vk.svg";
import icon4 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import f1 from "./assets/f1.svg";
import f2 from "./assets/f2.svg";
import f3 from "./assets/f3.svg";
import h1 from "./assets/h1.svg";
import h2 from "./assets/h2.svg";
import t1 from "./assets/t1.svg";
import t2 from "./assets/t32.svg";
import t3 from "./assets/t3.svg";
import t4 from "./assets/t4.svg";



const App = () => {
  return (
    <div className="general overflow-hidden">
      <div className="section1 bg-[black] text-[white]">
        <header className="py-[30px]">
          <div className="container w-[80%] m-auto">
            <nav className="m-auto flex justify-between items-center">
              <div>
                <ul className="text-[18px] flex gap-[20%]">
                  <li>Главная</li>
                  <li>Тариф</li>
                  <li>Контакты</li>
                </ul>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <ul className="text-[18px]  flex gap-[20%]">
                  <li>Регистрация</li>
                  <li>Вход </li>
                  <li>Robokassa</li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="container w-[80%] pb-[30px] flex justify-center items-center">
          <div className=" mt-[80px] w-[60%]">
            <h1 className="text-[white] text-[50px] pt-[30px] font-semibold leading-[60px] ">
              Современное решение рутинных задач бизнеса
            </h1>
            <p className="text-[#6A7C95] text-[26px] py-[20px] ">
              Создай свою страницу сайта и начни принимать оплаты в 1 клик
            </p>
            <MyBtn
              title="Создать страницу"
              className=" bg-[#5CA35B] py-2 px-4"
            />
          </div>
          <div>
            <img src={p1} alt="" />
          </div>
        </div>
        <div className="container w-[80%] flex gap-[20px] py-[10%]">
          <p className="flex items-center gap-[10px]">
            <img src={icon} alt="" />
            +7 (706) 420-21-01
          </p>
          <p className="flex items-center gap-[10px]">
            <img src={icon2} alt="" />
            <p>info@daru.link</p>
          </p>
        </div>
      </div>

      {/* section2 */}
      <section>
        <div className="section2 bg-[#181F29] py-[8%]">
          <div className="container w-[80%] m-auto">
            <div className="pb-[5%]">
              <h1 className="text-[white] text-[32px]">Daru Link</h1>
              <p className="text-[#6A7C95] w-[65%]">
                Daru Link — это единое место, где вы можете создать собственный
                сайт, выбрав ему категорию бизнеса, подключить к нему
                онлайн-оплату или календарь записи всего 1 клик, не волноваться
                о налоговых отчетностях и прочих бюрократичных моментах
              </p>
            </div>
            <div className="flex justify-evenly gap-[20px] ">
              <div className="bg-[#273140] rounded-2xl">
                <MyCard
                  img={icon1}
                  title="Экономия"
                  para="Не переплачивай другим, создайте свою страницу от $40 в месяц"
                />
              </div>
              <div className="bg-[#273140]  rounded-2xl">
                <MyCard
                  img={icon4}
                  title="Удобство"
                  para="Понятный и простой интерфейс не затруднит работу с сервисом"
                />
              </div>
              <div className="bg-[#273140]  rounded-2xl">
                <MyCard
                  img={icon3}
                  title="Возможность"
                  para="Подключайте свой сайт к Kaspi.kz , 1C и Kazpost и контролируйте все в Daru"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="bg-[black] py-[5%]">
        <div className="container w-[80%] m-auto">
          <div className="pb-[5%]">
            <h1 className="text-[white] text-[32px]">Возможность</h1>
            <p className="text-[#6A7C95] w-[65%]">
              Интегрируйте свой сайт с магазином Kaspi.kz, 1C и Kazpost для
              автоматизации всех процессов в одном месте. На основе 1С ваш
              интернет-магазин будет подгружать данные о товаре
            </p>
          </div>
          <div className="flex justify-start gap-[10px]">
            <img src={f1} alt="" />
            <img src={f2} alt="" />
            <img src={f3} alt="" />
          </div>
        </div>
      </section>

      {/* section5 */}
      <section className="bg-[#181F29] py-[5%]">
        <div className="container w-[80%] m-auto flex justify-evenly items-center">
          <div className="pb-[5%] w-[70%]">
            <h1 className="text-[white] text-[32px]">Удобство</h1>
            <p className="text-[#6A7C95]  py-[20px]">
              Создавайте индивидуальный дизайн страницы. Фантазируйте и
              вооплощайте задуманное в реальность. Удобный и понтный интерфейс
              не затруднит работу с сервисом
            </p>

            <MyBtn
              title="Дизайн в 1 клик"
              className="text-[#6A7C95] mt-[5%] border-2 py-2 px-4"
            />
          </div>

          <div className="flex w-[80%] mt-[10%]">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[black] py-[10%]">
        <div className="container w-[80%] m-auto">
          <div className="pb-[5%] w-[70%]">
            <h1 className="text-[white] text-[32px]">Удобство</h1>
            <p className="text-[#6A7C95]  py-[20px]">
              Создавайте индивидуальный дизайн страницы. Фантазируйте и
              вооплощайте задуманное в реальность. Удобный и понтный интерфейс
              не затруднит работу с сервисом
            </p>
           
          </div>
          <div className="flex justify-evenly gap-[10%] ">
          <div className="bg-[#273140]  h-fit rounded-2xl py-4">
                <MyCard2
                
                  title="“Альт”"
                  para1 ="тариф"
                  para2="Собственная страница
                  Редактирование дизайна 
                  Подключение соц.сети 
                  Форма для заявок клиентов
                  Поддержка 24/7 
                  Прием платежей 
                  Интеграция 1С и Kazpost 
                  Интеграция Kaspi" 
                />
                <div className="text-center py-2">
                <MyBtn title="$29/месяц" className="bg-[#6A7395] py-2 px-4"/>
                </div>
                
              </div>
              <div className="bg-[#273140]  h-fit rounded-2xl ">
                <MyCard2
                
                  title="“Альт”"
                  para1 ="тариф"
                  para2="Собственная страница
                  Редактирование дизайна 
                  Подключение соц.сети 
                  Форма для заявок клиентов
                  Поддержка 24/7 
                  Прием платежей 
                  Интеграция 1С и Kazpost 
                  Интеграция Kaspi" 
                />
                <div className="text-center">
                <MyBtn title="$29/месяц" className="bg-[#6A9590] py-2 px-4"/>
                </div>
                
              </div>
              <div className="bg-[#273140]  h-fit rounded-2xl p-[10px]">
                <MyCard2
                
                  title="“Альт”"
                  para1 ="тариф"
                  para2="Собственная страница
                  Редактирование дизайна 
                  Подключение соц.сети 
                  Форма для заявок клиентов
                  Поддержка 24/7 
                  Прием платежей 
                  Интеграция 1С и Kazpost 
                  Интеграция Kaspi" 
                />
                <div className="text-center">
                <MyBtn title="$29/месяц" className="bg-[#95936A] py-2 px-4"/>
                </div>
                
              </div>
            </div>
        </div>
      </section>

      <section className="bg-[#181F29] py-[5%]">
        <div className="container w-[80%] m-auto">
          <div className="pb-[5%]">
            <h1 className="text-[white] text-[32px]">Обновления</h1>
            <p className="text-[#6A7C95] w-[65%]">
            Следите за свежими обновлениями сервиса в социальных сетях и на официальных страницах Daru Link
            </p>
          </div>
          <div className="flex justify-start gap-[10px]">
            <img src={t1} alt="" />
            <img src={vk} alt="" />
            <img src={t3} alt="" />
            <img src={t4} alt="" />
          </div>
        </div>
      </section>
      <footer className="bg-[black] text-[#2D3746]">
        <div className="container w-[80%] flex justify-between items-center py-[10%]">
          <div>
            <p>Политика конфедациальности</p>
          </div>
          <div className="flex items-center gap-[20px] ">
            <img src={logo} alt="" />
            <p className="w-[70%]">© TOO “Дару Линк” все права защищены</p>
          </div>
          <div>
            <p>Пользовательское соглашение</p>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default App;
