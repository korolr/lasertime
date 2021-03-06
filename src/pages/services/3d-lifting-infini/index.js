import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import InfoPanel from '../../../components/InfoPanel/index'
import List from '../../../components/List/index'
import InfoBlock from '../../../components/InfoBlock/index'
import CollapsiblePanel from '../../../components/CollapsiblePanel/index'
import TOC from '../../../components/TOC'
import FloatBlock from '../../../components/FloatBlock/index'
import ServiceStats from '../../../components/ServiceStats'
import ArticleHeaderImage from '../../../components/ArticleHeaderImage'
import Anchor from '../../../components/Anchor'

function LiftingInfiniService({ data }) {
    return (
        <div>
            <Helmet data={data} title="3D лифтинг INFINI" description="" />

            <ArticleHeaderImage title="3D лифтинг INFINI®" imgSizes={data.liftingInfiniServiceHeader.sizes} />

            <div className="PageContent__wrapper">
                <FloatBlock right oneThird>
                    <TOC title="Содержание">
                        <a href="#intro">Введение</a>
                        <a href="#stats">Статистика и цены</a>
                        <a href="#theory">Принцип действия</a>
                        <a href="#advantages">Преимущества процедуры</a>
                        <a href="#indications">Показания к процедуре</a>
                        <a href="#contraindications">Противопоказания</a>
                        <a href="#side-effects">Побочные эффекты</a>
                        <a href="#order">Порядок выполнения процедуры</a>
                        <a href="#preparation">Как подготовиться к процедуре?</a>
                        <a href="#memo">Памятка по процедуре</a>
                    </TOC>
                </FloatBlock>

                <Anchor id="intro" />
                <p>Первая в мире RF система Infini® сочетает в себе преимущество двух технологий: фракционной радиочастотной микроиглы (MFR) и поверхностной радиочастоты (SFR).</p>
                <p>Микроиглы толщиной 200мкм, имеющие золотое покрытие и силиконовую изоляцию до кончика иглы, проникают вовнутрь тканей на заданную глубину и воздействуют RF излучением в области кончиков игл. Такого рода воздействия усиливают регенерацию кожных структур: коллагена, эластина и дермального матрикса. RF терапия стимулирует синтез нового коллагена, эластина и гиалуроновой кислоты, стимулирует процесс неоангиогенеза (образование новых сосудов).</p>
                <p>Аппарат Infini (США) - воздействует на глубинные слои кожи, но при этом мало травмирует эпидермис, стимулирует и нормализует все метаболические процессы в нем.</p>
                <p>Результат после Infini очень яркий и сопоставим с фракционным лазерным омоложением, но с минимальным периодом реабилитации.</p>

                <Anchor id="stats" />
                <ServiceStats durationText="от 60 до 120 мин." priceText="от 10 000 до 30 000 руб." priceLink="/prices/infini-lifting" quantityText="2 - 6 (1 раз в 3 - 4 недели)" />
                <Anchor id="theory" />
                <CollapsiblePanel title="Принцип работы 3D омоложения Infini®">
                    <p>Что такое RF-терапия - ток очень высокой частоты, преобразованный в тканях в RF энергию. Воздействует на ткань через микро-иглы покрытые золотом, которые контактируют с кожей. RF энергия, проходящая через живые ткани оказывает на них тепловое воздействие. Таким образом, RF терапия позволяет оказывать контролируемое тепловое воздействие на заданном участке кожи с целью улучшения регенеративных свойств кожи.</p>

                    <p>
                        <b>Технология порядного ввода игл</b>: автоматический ввод микроигл осуществляется порядно, что позволяет снизить болевые ощущения и кровоточивость.
                    </p>
                    <p>
                        <b>Теория трехмерного фракционного омоложения</b>: Многоуровневое радиочастотное воздействие на разные слои кожи с последовательным погружением микроигл на разную глубину оказывает тройной клинический эффект (3-х рядовое прохождение с разными мощностными характеристиками).
                    </p>
                    <h3>Что представляет собой фракционное RF омоложение кожи?</h3>
                    <p>Данная процедура проходит с применением микроигл. Микроиглы излучают RF энергию в течение разного времени и на разной глубине дермы, что вызывает подтяжку кожи за счет стимуляции неоколлагенагенеза и ремоделирования дермы. Стало возможным избирательное воздействие на глубокие слои дермы – это основной метод для процедур омоложения (подтяжки кожи), сглаживанию морщин и восстановления эластичности кожи.</p>
                    <p>
                        ОДНОРАЗОВАЯ ИНДИВИДУАЛЬНАЯ Насадка для аппарата представляет собой 49 изолированных силиконом микроигл с золотым напылением диаметром 0,2 мм. Они поэтапно проникают в кожу на глубину от 0,5 до 3,5 мм. (что в несколько раза глубже, чем при фракционном лазерном омоложении СО<sub>2</sub>). Кожа получает сигнал активировать факторы роста, запустить механизмы восстановления кожи. При этом эпидермис почти не повреждается: тысячи крошечных проколов заживают уже через несколько минут, но стимулируется процессы кератинизации и выравнивается цвет и рельеф кожных покровов.
                    </p>
                </CollapsiblePanel>

                <Anchor id="advantages" />
                <InfoPanel title="Преимущества Infini®" color="green" shadow>
                    <InfoBlock color="green">
                        <p>Достижение видимых результатов через месяц (при условии прохождения процедуры не реже 1 раза в 2 недели.</p>
                    </InfoBlock>

                    <List marker="plus">
                        <ul>
                            <li>Многоуровневая объемная подтяжка кожи</li>
                            <li>Сужение пор</li>
                            <li>Улучшение цвета обрабатываемых тканей</li>
                            <li>Улучшение рельефа тканей</li>
                            <li>Уменьшение глубины морщин</li>
                            <li>Увеличение плотности кожи (показано для тонкой морщинистой кожи)</li>
                            <li>Улучшение тургора и тонуса тканей</li>
                            <li>Разглаживание рубцов</li>
                            <li>Быстрый реабилитационный период (2 дня, другие методы фракционного омоложение проходят с реабилитацией до 7 дней)</li>
                            <li>Восстановление оптических свойств кожи</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="indications" />
                <InfoPanel title="Показания к процедуре Infini®" color="green" shadow>
                    <List marker="check">
                        <ul>
                            <li>Хроно (временное) и фотостарение (от солнца) кожи</li>
                            <li>Изменение рельефа (морщины) и цвета кожи (нарушение микроциркуляции)</li>
                            <li>Снижение упругости кожи (тургора и тонуса)</li>
                            <li>Морщины: носогубные складки, мимические морщины на лбу, морщины вокруг глаз, ухудшение состояния кожи под глазами, увядание кожи</li>
                            <li>Опущение тканей (умеренный птоз), изменяющее архитектонику лица</li>
                            <li>Сморщенная, морщинистая, обвисшая или дряблая кожа</li>
                            <li>Постакне - шрамы после угрей</li>
                            <li>Обвисшая кожа, излишки кожи после родов и похудения, растяжки после родов и похудения</li>
                            <li>Расширенные поры, повышенное саловыделение</li>
                            <li>Гипердридроз - повышенное потоотделение</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="contraindications" />
                <InfoPanel title="Противопоказания к процедуре Infini®" color="red" shadow>
                    <List marker="cross" titleH3="Строгие противопоказания">
                        <ul>
                            <li>Острые воспалительные заболевания кожи (фолликуты, угревая болезнь, герпес)</li>
                            <li>Геморрагическая (нарушение свёртываемости крови) болезнь</li>
                            <li>Осложнения при диабете или другие осложнения тяжелых хронических заболеваний</li>
                            <li>Тенденция к образованию келоидов и гипертрофических рубцов</li>
                            <li>Наличие у пациента кардиостимулятора</li>
                            <li>Наличие у пациента вживленного дефибриллятора</li>
                        </ul>
                    </List>
                    <List marker="cross" titleH3="Требуется консультация врача">
                        <ul>
                            <li>Беременность</li>
                            <li>Бесконтрольная гипертония</li>
                            <li>Онконастороженность</li>
                            <li>Родимые пятна в области обработки, склонные к образованию злокачественных опухолей или с иными патологиями (невусы)</li>
                        </ul>
                    </List>
                    <List marker="cross" titleH3="Требуется письменное согласие пациента">
                        <ul>
                            <li>Наличие каких-либо конструкций в зоне обработки: металлических штифтов, имплантатов или протезов (пациент может ощущать покалывание в этих местах)</li>
                            <li>Аллергия на препараты предназначенные для после процедурного ухода</li>
                            <li>Аллергия кожи на металлы (микроиглы покрыты золотом)</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="side-effects" />
                <InfoPanel title="Побочные эффекты" color="orange" shadow>
                    <List marker="check" titleH3="Нормальные реакции кожи на INFINI®">
                        <ul>
                            <li>
                                <b>Эритема</b> – является нормальной реакцией кожи после терапии с использованием аппарата ИНФИНИ и обычно проходит за 1-2 дня. Эритему можно уменьшить с помощью охлаждения после процедуры.
                            </li>
                            <li>
                                <b>Отек</b> – может наблюдаться временный отек тканей в месте лечения. Уменьшение отека происходит за 1-2 дня.
                            </li>
                            <li>
                                <b>Жжение и стянутость кожи</b> – в области лечения могут ощущаться. Нанесение охлаждающих масок и ранозаживляющих, увлажняющих средств сведут эти неприятные ощущения на нет.
                            </li>
                            <li>
                                <b>Тонкая корочка</b> – у некоторых пациентов наблюдаются образование еле заметных микрочешуек на поверхности кожи, которые будут отшелушиваться с поверхности кожи в течение недели.
                            </li>
                            <li>
                                <b>Капиллярное кровотечение</b> – при введение микроигл во внутрь кожи это возможно, но кровь достаточно быстро коагулируется без дополнительных вмешательств.
                            </li>
                            <li>
                                <b>Шелушение омертвевшей кожи</b> – при проведении данной процедуры мы стимулируем процессы кератинизации (отшелушивания), после чего омертвевшая кожа отшелушивается в течение 3-5 дней при нормальном течении реабилитационного периода!
                            </li>
                        </ul>
                    </List>
                    <List marker="minus" titleH3="Возможные негативные последствия">
                        <ul>
                            <li>
                                <b>Гиперпигментация</b> (наличие пигментных пятен на коже) - в следствие неправильного постпроцедурного ухода
                            </li>
                            <li>
                                <b>Появление точечных рубцов</b> - в следствие преждевременного отшелушевания пациентом корочек от микроповреждений
                            </li>
                            <li>
                                <b>Воспаления</b> - в следствии нарушении постпроцедурного ухода и правил личной гигиены
                            </li>
                            <li>
                                <b>Образование гематом (синяков)</b> - при сокрытии факта приёма НПВС, аспирина, кардио-магнила, антикоагулянтов и антиагрегантов
                            </li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="order" />
                <InfoPanel title="Порядок процедуры" shadow>
                    <InfoBlock color="red">
                        <p>Одноразовая индивидуальная насадка неможет использоваться повторно из-за высокой степени риска заражения любыми воспалительными заболеваниями.</p>
                    </InfoBlock>
                    <List>
                        <ol>
                            <li>Очищение обрабатываемой поверхности/области</li>
                            <li>Нанесение анестетика</li>
                            <li>Удаление анестетика через 40 мин</li>
                            <li>Обработка стерильными растворами/кожными антисептиками</li>
                            <li>Начало процедуры: врач подбирает параметры индивидуально для каждого пациента (уровень мощности, длительность воздействия, глубина проникновения)</li>
                            <li>Индивидуально подбираем количество проходов: от 1 до 3</li>
                            <li>После охлаждения лица специальной маской(после лазерных процедур) на кожу наносятся крем с антибиотиком и возможно увлажняющий спрей(на основе гиалуроновой кислоты)</li>
                            <li>Через сутки после процедуры возможно умывание под проточной водой</li>
                            <li>Предоставляется памятка пациенту для после процедурного ухода.</li>
                        </ol>
                    </List>
                </InfoPanel>

                <Anchor id="preparation" />
                <InfoPanel title="Как подготовиться к процедуре" shadow color="gray">
                    <List>
                        <ol>
                            <li>В течение двух недель до процедуры, нежелательно введение филлеров, ботокса, а также проведения агрессивных процедур (лазерной шлифовки, срединных пилингов, постановки нитей) в обрабатываемых зонах.</li>
                            <li>За неделю до процедуры нежелательно принятие НПВС, аспирина, кардио-магнила, антикоагулянтов и антиагрегантов, иначе возможно образование гематом.</li>
                            <li>В день процедуры не наносить косметические средства в области обрабатываемых зон.</li>
                            <li>Мужчинам необходимо бритье за 1 день до процедуры.</li>
                            <li>В течение двух недель до процедуры исключить любой загар.</li>
                            <li>Запрещено выполнение процедуры при наличие заболеваний (ОРЗ, ОРВИ и герпеса).</li>
                            <li>При носительстве вируса герпеса рекомендован профилактический приём противогерпетических препаратов.</li>
                        </ol>
                    </List>
                </InfoPanel>

                <Anchor id="memo" />
                <InfoPanel title="Памятка по процедуре" color="gray" shadow>
                    <List>
                        <ol>
                            <li>Не принимайте горячий душ и не посещайте сауну в течение трёх суток после процедуры. Допускается бережное умывание.</li>
                            <li>В течение 1 – 3 часов после процедуры может ощущаться жжение. Чтобы снять неприятные ощущения, применяйте контактное охлаждение льдом. Убедитесь, что лед обернут сухой и стерильной марлей, чтобы избежать намокания и воспаления кожи. Используйте охлажденные тканевые маски (можно купить в медицинском центре), либо использовать специальные силиконовые маски для охлаждения кожи лица (есть в продаже в интернете и ортеках).</li>
                            <li>Капиллярное кровотечение в течение суток после процедуры является нормальной реакцией кожи. Чтобы его остановить, осторожно прижмите к месту капиллярного кровотечения сухую стерильную марлевую повязку.</li>
                            <li>В день процедуры нельзя на обработанную область наносить макияж, бриться и принимать душ. Применение ранозаживляющего крема с антибиотиками (Оксикорт спрей и Д-пантенол) утром и вечером поможет сократить реабилитационный период и быстро избавить от отека и эритемы (покраснения). Два раза в день необходимо проводить обеззараживание кожи раствором мирамистина.</li>
                            <li>На 2 - 3 день кожа может немного потемнеть из-за образовавшейся на ее поверхности корочки. Это нормальный процесс и беспокоится не следует.</li>
                            <li>Омертвевшая кожа в области места входа иглы (столбик коагуляции) должна отслаиваться сама собой. Не растирайте и не удаляйте ее с помощью скрабов и эксфолиантов.</li>
                            <li>В течение 2 недель не используйте спиртсодержащую косметику. Регулярно используйте увлажняющие средства.</li>
                            <li>В течении 2 - 3 дней, а в некоторых случаях 4 дней воздержитесь от интенсивных физических нагрузок, чрезмерного употребления алкоголя и посещения сауны (игнорируя данные рекомендации вы пролонгируете (удлиняете) процесс регенерации (восстановления) заживления тканей).</li>
                            <li>Перед выходом на солнце регулярно используйте крем с фотозащитными свойствами – SPF не менее 50. Не забывайте, когда кожа восстанавливается после любой процедуры она требует к себе более бережного отношения!</li>
                        </ol>
                    </List>
                    <InfoBlock color="green">
                        <p>После окончания курса проводятся контрольные проверки: через неделю и месяц. Такой подход позволяет предотвратить возникновение осложнений и проследить за правильным восстановлением кожи. Продолжительность эффекта зависит от индивидуальных особенностей организма.</p>
                    </InfoBlock>
                </InfoPanel>
            </div>
        </div>
    )
}

export default LiftingInfiniService

export const pageQuery = graphql`
    query LiftingInfiniServiceQuery {
        ...Helmet
        liftingInfiniServiceHeader: imageSharp(id: { regex: "/lifting-infini-service-header/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
