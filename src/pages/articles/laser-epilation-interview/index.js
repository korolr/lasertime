import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import QuestionBlock from '../../../components/QuestionBlock'
import ArticleAuthorBlock from '../../../components/ArticleAuthor'
import InfoBlock from '../../../components/InfoBlock'
import Heading from '../../../components/Heading'

export default function LaserEpilationInterview({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet
                data={data}
                title="Всё, что нужно знать о лазерной эпиляции"
                description=""
            />
            <Heading
                titleH1="Всё, что нужно знать о лазерной эпиляции"
                type="underline"
            />

            <ArticleAuthorBlock />

            <InfoBlock color="orange">
                <p>
                    Данная тема стала чрезвычайно актуальна с появлением
                    большого количества разнообразного оборудования для
                    эпиляции: фотосистемы, различные по своей природе лазеры и
                    другие методы борьбы с нежелательными волосами. К сожалению,
                    большое количество аппаратов, применяемых сегодня в
                    косметологии не имеет сертификата соответствия и
                    регистрационного удостоверения и не может быть использовано
                    в Российской федерации (ввиду большого количества рисков для
                    пациента). В большинстве случаев, персонал, который работает
                    на данном оборудовании не имеет даже медицинского
                    образования, что ведёт к появлению побочных эффектов и
                    негативного реакции со стороны пациента. Мы постараемся
                    донести до вас то, что вы наиболее часто спрашиваете у врача
                    и какие эффекты вы должны получить от данной процедуры.
                </p>
            </InfoBlock>

            <QuestionBlock question="Что такое лазерная эпиляция?">
                <p>
                    Лазерная эпиляция - это новейший метод избавления от
                    нежелательных волос. Показаниями к лазерному удалению волос
                    являются частое воспаление после бритья, вросшие волосы,
                    гипертрихоз. Чаще всего волосы бывают настолько плотные, что
                    нарушают архитектонику кожи и растут неправильно, не в том
                    направлении. Возникают подкожные очаги воспаления из-за
                    вросших под кожу волос.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Какие виды эпиляции бывают? Можно же удалять волосы воском или чем-то еще?">
                <p>
                    Существуют разные виды эпиляции: воском, сахаром - это всё
                    называется биоэпиляция. Биоэпиляция – это механическое
                    вырывание волос с повреждением фолликулов. Некоторые люди
                    варят определённые смеси для удаления волос, в общем, всё
                    это прошлый век. Восковая и сахарная эпиляция - это удаление
                    волос с помощью тёплого или горячего воска, или сахара (
                    массу наносят по линии роста, вырывают против линии роста).
                    Если неправильно нанести или вырвать, то возникает
                    воспалительная реакция в виде врастания волос либо нарушения
                    кожного покрова с занесением инфекции. Биоэпиляция
                    достаточно болезненна. То, что она горячая, повреждает кожу.
                    Важно, что одним из противопоказаний являются расширенные
                    сосуды и звёздочки на ногах, что в принципе бывает у 70%
                    населения, особенно женского. Когда неправильно вырывают
                    волос с помощью воска или сахара, лопаются сосуды, возникает
                    синяк(гематома), внутреннее микро- или макрокровоизлияния.
                    И, вообще, не очень интересно, когда ты весь в сахаре и тебе
                    после этого нужно ещё и мыться. Еще раз подчеркиваю, все
                    виды биоэпиляции болезненны.
                </p>
            </QuestionBlock>
            <QuestionBlock question="А может так получиться, что вырвут неправильно, и потом не восстановишь?">
                <p>
                    Да, бывает. Случаются разные последствия, вплоть до
                    образования растяжек, особенно в области бикини.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Если вырывается волос, когда он потом начинает расти?">
                <p>Через одну - две недели.</p>
            </QuestionBlock>
            <QuestionBlock question="То есть не разрушается волосяная луковица?">
                <p>
                    Нет. На луковицу практически нет воздействия, вырывается
                    только волос и повреждается кожа.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Хорошо, волос вырвали, а как вырастает новый волос на том же месте?">
                <p>
                    У волоса есть определённый цикл роста, соответственно
                    существуют стадия роста, стадия покоя, стадия выпадения.
                    Цикл роста волос на теле - 30-35 дней, на лице - 21-25 дней.
                    Рост и структура волоса зависит от национальности,
                    эндокринных факторов, цвета волос, цвета кожи, зоны роста.
                </p>
            </QuestionBlock>
            <QuestionBlock question="То есть волосы и так сами по себе выпадают с определённой периодичностью на разных участках тела? Они выпадают, а тут мы этот цикл ускоряем.">
                <p>
                    Все верно, биоэпиляция не удаляет волос радикально, а лишь
                    временно. Есть ещё минус, например, человек должен прийти на
                    эпиляцию с отросшими волосами (отращивать нужно примерно 2
                    недели). Затем сам процесс биоэпиляции, болевые ощущения,
                    воспаления и раздражение, а потом ты только 1 неделю ходишь
                    без волос и дальше последующие две недели растишь волосы для
                    того, чтобы пойти на следующую процедуру биоэпиляции! И так
                    всю жизнь!
                </p>
            </QuestionBlock>
            <QuestionBlock question="Каково распространение этого метода удаления волос?">
                <p>
                    Повсеместное, но в основной своей массе, биоэпиляция
                    используется на смуглой коже, потому что для нее не
                    придумано по-настоящему эффективного лазера. То есть лазеры,
                    которые созданы для смуглой кожи малоэффективны, к
                    сожалению.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Следующий вид эпиляции  - фотоэпиляция.">
                <p>
                    Фотоэпиляция - это один из способов удаления волос при
                    помощи высокоинтенсивного света определенной длины волны.
                    Методика основана на том, что волос содержит пигмент
                    меланин, который способен поглощать световые волны и
                    разрушаться.
                </p>
            </QuestionBlock>
            <QuestionBlock question="То есть именно меланин придаёт цвет волосу?">
                <p>
                    Да, меланин – это пигмент, который придает цвет волосу и
                    коже. Цвет кожи зависит от количества меланина. Он
                    содержится в волосе, волосяном фолликуле, в коже и при
                    поглощении определенной длины волны идёт разрушение и
                    волоса, и фолликула.
                </p>
            </QuestionBlock>
            <QuestionBlock question="А как женщине бороться с тёмными волосами над верхней губой, &quot;усиками&quot;? Эпиляция в таких зонах влияет на гормональный фон?">
                <p>
                    Эпиляция никак не влияет на гормональный фон! А с усиками
                    нужно бороться также как и с волосками в любой другой зоне.
                    Между прочим, самый лучший клиент для фото и лазерной
                    эпиляции - это человек со светлой кожей и тёмными волосами.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Что скажете по поводу болезненности фотоэпиляции?">
                <p>
                    Весьма болезненная процедура. Часто возникают осложнения в
                    виде ожогов даже при имеющейся системе охлаждения. Большими
                    насадками обрабатывать зону бикини неудобно, так как насадку
                    нужно достаточно плотно прижимать к коже (размер насадки 5-6
                    см2). На лице ее тоже практически невозможно нормально
                    выставить. Обязательно будут зоны, где фотоэлемент прилегает
                    хуже, и вероятность ожога очень высокая. Так что
                    фотоэпиляция может вызвать ожог, большую чувствительность,
                    болезненность.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Для каких зон фотоэпиляция является наиболее подходящим методом?">
                <p>Для плоских мест: живота, спины, бёдер.</p>
            </QuestionBlock>
            <QuestionBlock question="А руки? Или пальцы тоже можно обрабатывать фотоэпиляцией?">
                <p>
                    Естественно пальцы не подходят. Мы где-то обжигаем кожу,
                    где-то возникает болезненность, где-то нам не нужно
                    воздействовать, а насадка же большая. Конечно, можно в жизни
                    ко всему приспособиться, но, в общем, это не самый
                    комфортный метод для данной зоны. Тоже самое можно сказать
                    про бикини, голени.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Возможно это некорректный вопрос, делает ли кто-нибудь эпиляцию головы? Лысые?">
                <p>Нет.</p>
            </QuestionBlock>
            <QuestionBlock question="Какова приблизительная стоимость?">
                <p>
                    От 2 до 10-15 тысяч в зависимости от области. Если делать
                    качественно, то выходит гораздо дороже, чем биоэпиляция.
                    Цена сопоставима с лазерной эпиляцией, потому что
                    фотоэлементы, фотолампы дорогие. Стоимость биоэпиляции -
                    разная, зависит от квалификации специалиста, уровня салона.
                    В некоторых местах цена доходит до 100 долларов за бикини. И
                    это биоэпиляция! Сразу оговорюсь, очень сложно найти
                    хорошего специалиста по фотоэпиляции.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Сколько стоит эпиляция бикини лазером?">
                <p>
                    Тоже зависит от аппарата или акции. На сегодня цена
                    колеблется от 3 000 до 15 000.
                </p>
            </QuestionBlock>
            <QuestionBlock question="А если сравнить цену этих трех видов эпиляции подмышек?">
                <p>
                    Будет стоить примерно одинаково. Био - от 500 до 2000
                    рублей, фото - от 1000 до 5000, то, что касается лазера - от
                    1000 до 6000 рублей за обе подмышки.
                </p>
            </QuestionBlock>
            <QuestionBlock question="В чём заключается основная разница лазерной и фотоэпиляции? Что придумали нового? Кстати, уничтожает ли фотоэпиляция фолликул?">
                <p>
                    Аппараты фотоэпиляции излучают спектр света от 500 до 1200
                    нанометров. Это большое количество длин волн, даже если
                    взять отсекатель (линзу), которая отсекает определённую
                    длину волны, то всё равно практически невозможно получить
                    монохромную длину волны. При методе фотоэпиляции большое
                    количество потерь энергии идёт за счёт полихромности.
                </p>
            </QuestionBlock>
            <QuestionBlock question="В свою очередь лазером очень чётко контролируется поток излучения?">
                <p>
                    У лазера одна длина волны. Александритовый лазер
                    воздействует только на меланин.
                </p>
            </QuestionBlock>
            <QuestionBlock question="А специалист видит, где он сделал, где нет? Кожа краснеет?">
                <p>
                    Если при фотоэпиляции волос не сгорает, то во время лазерной
                    эпиляции видно, как сгорает волос полностью. Он прямо
                    взрывается под кожей и возникает перифолликулярный отёк при
                    качественной эпиляции. Естественно, если ты поставишь
                    небольшую мощность, ты не увидишь перифолликулярного отёка и
                    понятно, что волос сгорел только с поверхности.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Велики ли риски навредить, если не умеешь проводить лазерную эпиляцию?">
                <p>
                    Конечно, навредить можно. Например, если выставишь для
                    пигментированной кожи большую мощность.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Что может произойти в этих случаях?">
                <p>
                    Есть опасность обжечь, удалить пигмент с кожи, будет белое
                    пятно.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Какие основные проблемы возникают при неумелом обращении с лазером?">
                <p>
                    Чаще всего это ожог либо не эффективность. Очень важно
                    выставить индивидуально ту мощность и тот поток энергии,
                    который необходим именно данному человеку.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Клиника даёт какую-то гарантию на отсутствие роста волос после процедуры?">
                <p>
                    Дело в том, что в данном случае сложно что-то гарантировать,
                    потому что 70% населения страдает от эндокринной патологии и
                    принимает какие-либо определённые лекарства для роста волос
                    или, например, гормональные контрацептивы, либо применяют
                    препараты с тестостероном. Очень сложно давать какую-то
                    гарантию, но результаты очень хорошие. Вообще, я считаю, в
                    медицине давать гарантию - это очень не правильно,
                    неблагодарное это дело.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Сколько длится эффект от правильно сделанной эпиляции, те волосы не растут?">
                <p>
                    Я знаю людей, которые приходят раз в полгода-год и удаляют
                    20, 30, может, 100 волос на всем теле. Это очень маленькое
                    количество, они более светлые, просто вырастают в результате
                    каких-то изменений. Но, это очень маленькое количество, если
                    бы их там было миллион, несколько миллионов, а тут выросло
                    100. Мы за 20 минут их удаляем.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Сколько у людей обычно на теле волос не считая головы?">
                <p>
                    Это зависит от человека. Очень много, иногда из одного
                    фолликула вырастает пять волос.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Насколько болезненна процедура?">
                <p>
                    Лазерная эпиляция менее болезненна, чем фото- или
                    биоэпиляция. Лазерная эпиляция - самая качественная за счёт
                    именно монохромности, за счёт точечной энергии поступающей
                    именно в тот хромофор, на который мы воздействуем.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Эту процедуру удобно делать абсолютно на всех частях тела, в отличии от фото?">
                <p>
                    Удобно за счёт пятна - не квадратного, не треугольного, а
                    именно круглого пятна. Можно выставить пятно от наименьшего
                    к наибольшему, например, от 5 до 15 мм.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Чего больше всего боятся люди в этой процедуре? Боятся обжечься, боли, того, что не удалятся волосы?">
                <p>Ожогов и боли. </p>
            </QuestionBlock>
            <QuestionBlock question="Как им не боятся ожогов? Идти в салоны, где всё сертифицировано?">
                <p>
                    Не загорать и правильно готовиться к процедуре. Бритьё -
                    обязательно, потому что если волос выступает над кожей, кожа
                    сильнее обожжется при удалении. Чтобы не было механического
                    повреждения за счёт волос, чтобы сам волос, сгорая, не
                    повреждал кожу, нужна оставить небольшую длину до 2 мм.
                    Иногда мы даже используем гель, для того, чтобы не повредить
                    кожу, особенно чаще всего это происходит в области бикини.
                    Если прижать насадку с сапфировым стеклом и дать
                    определённый разряд, то весь этот разряд без потери энергии
                    плотности потока полностью попадает туда, куда нужно, не
                    обжигая кожу, даже если она пигментированная в области
                    бикини.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Как готовиться к процедуре? Есть ли противопоказания?">
                <p>
                    Гигиена и бритьё. Если это первая процедура, то за 3 дня,
                    если уже повторная, то примерно за 5-6 дней. Есть серьезные
                    противопоказания к данной процедуре: онкология, эпилепсия,
                    обострение герпеса и воспалительные заболевания на коже в
                    месте воздействия, сахарный диабет, инфекционные
                    заболевания, смуглая кожа или свежий загар. Также
                    противопоказанием являются светлые, седые, рыжие волосы.
                </p>
                <p>
                    Преимущества лазерной эпиляции в том, что не нарушается
                    целостность кожного покрова, высокая результативность, не
                    остаётся рубцов и сильного длительного раздражения.
                    Достаточно высокий комфорт процедуры по сравнению с другими,
                    безопасность и безболезненность процедуры.
                </p>
            </QuestionBlock>
            <QuestionBlock question="А из чего складывается такая относительно высокая цена? Дорогая аппаратура?">
                <p>
                    У человека, делающего эту процедуру, портится зрение.
                    Специализация человека, квалификация должны оплачиваться.
                    Плюс дороговизна аппарата и расходных материалов.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Интересно, срок службы александритового лазера дольше, чем у лампы фотоэпилятора?">
                <p>
                    Примерно одинаковый. Александритовый лазер состоит из ламп,
                    александритовой среды, линзы, которые являются заменным
                    материалом.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Расскажите, пожалуйста, нужна ли какая-нибудь особая лицензия, чтобы делать именно лазерную эпиляцию?">
                <p>
                    Необходимы врачебное образование и диплом, что ты имеешь
                    право делать именно лазерные процедуры. То есть
                    государственная лицензия, а не та, что выдают, когда продают
                    аппарат, что ты имеешь право делать, потому что ты прослушал
                    курс. Именно диплом лазерного центра. И обязательно должна
                    быть оформлена медицинская лицензия у клиники.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Сколько длится сеанс лазерной процедуры, допустим подмышек?">
                <p>
                    Достаточно быстро. На подмышки нужно пять минут. На бикини
                    уходит примерно полчаса, учитывая, что в этой зоне делают
                    медленно.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Сколько же нужно таких процедур сделать?">
                <p>
                    От 4 до 10, в зависимости от того, как часто человек будет
                    ходить на процедуры, существует определённая цикличность
                    посещения. Для лица это 20-25 дней, для тела это 30-35 дней.
                    Если человек соблюдает цикличность процедур, не загорает, то
                    волосы уходят через 6-10 процедур полностью.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Расскажите немного подробнее именно про ваш лазер, и чем он хорош? Почему именно этот лазер?">
                <p>
                    Он архинадёжен. Называется «Трайпл», на нем стоит сапфировое
                    стекло, лучшее охлаждение. Им можно делать эпиляцию как с
                    гелем, так и без геля, например, бикини получается более
                    безболезненно, если делать с гелем. Поэтому процедуры именно
                    на этом аппарате менее болезненны и более эффективны, нет
                    рассеивания потока излучения. Этот аппарат совместная
                    разработка производителей США и Швеции.
                </p>
            </QuestionBlock>
            <QuestionBlock question="В каких странах производятся наилучшая лазерная аппаратура для эпиляции?">
                <p>Я бы сказала, Италия и США.</p>
            </QuestionBlock>
            <QuestionBlock question="Существуют четыре вида лазеров: рубиновый, александритовый, диодный и неодимовый. Что можно сказать о них? В чём разница?">
                <p>
                    Рубиновый лазер сейчас практически не используется, очень
                    низкий КПД. Эффективность неодимового лазера примерно 40%
                    если сравнивать с александритовым, у диодного лазера - 70%.
                    Самый эффективный - александритовый лазер.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Как выполняется сама процедура?">
                <p>
                    Поверхность обрабатывается антисептиком, после этого
                    наносится либо не наносится гель в зависимости от цвета
                    волос, надеваются очки, и делается лазерная эпиляция. После
                    процедуры наносится Пантенол – это противовоспалительное
                    регенерирующее средство.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Получается, тело делят на участки - сначала обработали антисептиком одну зону, сделали эпиляцию, Пантенол, затем следующий участок?">
                <p>Именно так.</p>
            </QuestionBlock>
            <QuestionBlock question="Какова средняя площадь участка? Если человек хочет всю спину себе сделать, на сколько участков делят спину?">
                <p>Ни на сколько, спина - это одна зона.</p>
            </QuestionBlock>
            <QuestionBlock question="Какие ощущения могут быть после процедуры?">
                <p>
                    Неприятные ощущения могут возникнуть: покалывание, небольшое
                    жжение, которые проходят в течение двух часов.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Будет ли покраснение на следующий день?">
                <p>
                    Нет, чаще всего остаются тёмные точки. Это норма, так как в
                    фолликуле остаются отмершие волоски. После первой процедуры
                    они отшелушиваются в течение двух недель.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Можно ли загорать после процедуры?">
                <p>7 дней нельзя.</p>
            </QuestionBlock>
            <QuestionBlock question="В солярии в том числе?">
                <p>
                    Да, любая инсоляция противопоказана, будь то солярий или
                    солнце.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Что-нибудь нужно предусмотреть, есть ли какие тонкости? Или это достаточно простая процедура для человека?">
                <p>
                    Ничего особенного. Если почувствуете жжение, нанесите
                    «Бутадион-мазь». Определённая цикличность процедур
                    способствует быстрому избавлению от волос, в противном
                    случае волосяной покров восстанавливается.
                </p>
            </QuestionBlock>
            <QuestionBlock question="Если не решить проблему лазерным эпилятором до конца, то так и придется все время тратить время и деньги на эпиляцию?">
                <p>
                    Да, волосы регенерируются. Нельзя после процедуры удалять
                    волосы электроэпилятором, потому что потом не на что будет
                    воздействовать. Например, если человек делал биоэпиляцию,
                    процедура лазерной эпиляции откладывается на месяц, пока не
                    отрастут все волосы. После электроэпилятора эффективную
                    лазерную процедуру возможно провести через 2-3 недели.
                </p>
            </QuestionBlock>
        </div>
    )
}

export const pageQuery = graphql`
    query LaserEpilationInterviewQuery {
        ...Helmet
    }
`
