import React from 'react'
import Helmet from '../../components/HelmetWrapper'

export default function ContourCorrectionArticle({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet
                data={data}
                title="Контурная пластика – современный метод борьбы с морщинами"
                description=""
            />
            <h1>Контурная пластика – современный метод борьбы с морщинами</h1>

            <p>
                С возрастом у каждого человека появляются на лице нежеланные
                морщины. Как бы она не ухаживала за своим лицом, увы, это
                неизбежно. В этом весьма важном деле милым женщинам не обойтись
                без помощи специалиста-косметолога. Пару десятков лет назад были
                изобретены биосовместимые гели, которые используют сейчас для
                нового направления в косметологии - контурной пластики.
            </p>

            <p>
                Суть процедуры состоит в том, что филлер с гиалуроновой кислотой
                вводят под кожу, тем самым разглаживая морщины.
            </p>

            <p>
                Результат от процедуры заметен сразу. Он держится от 6 до 24
                месяцев. Это зависит от концентрации геля, а также от
                особенностей каждого в отдельности женского организма. Когда
                гель рассосется, морщины начнут возвращаться. Но, тем не менее,
                после контурной пластики кожа насыщается эластином, что позволит
                коже надолго оставаться гладкой.
            </p>

            <p>
                Процедура контурной пластики практически безболезненная, но если
                потребуется, косметолог может нанести обезболивающий крем.
            </p>

            <p>
                Плюс контурной пластики состоит в том, что она прекрасно
                сочетается с любыми косметологическими процедурами.
                Профессионалы подберут для вас самый подходящий путь к гладкому
                и посвежевшему лицу.
            </p>

            <p>
                Не пугайтесь, если после пластики ваше лицо немного опухло или
                остались следы от инъекции. Это вполне нормальная реакция
                организма на такого рода мероприятия. Лучше всего после данной
                процедуры дать лицу отдохнуть хотя бы пару дней, тогда на вашем
                лице не останется ни единого следа от хирургического
                вмешательства.
            </p>

            <p>
                В течение первых дней после контурной пластики запрещается
                заниматься физическими упражнениями, трогать лицо руками,
                пользоваться косметикой и умывать лицо проточной водой. Сауну
                или солярий не стоит посещать после процедур на протяжении двух
                недель. Желательно также много не находиться на солнце.
            </p>

            <h3 id="">
                Существуют некоторые противопоказания для контурной пластики:
            </h3>

            <ul>
                <li>Воспалительные процессы, идущие в организме;</li>

                <li>аутоиммунные болезни;</li>

                <li>аллергия на отдельные составляющие геля;</li>

                <li>беременность, период лактации;</li>

                <li>Простудные заболевания;</li>

                <li>
                    Сахарный диабет.Также процедуру контурной пластики нельзя
                    проводить детям, не достигшим совершеннолетия. В любом
                    случае, перед процедурой вы должны посоветоваться с лечащим
                    врачом на предмет заболеваний, не допустимых с процедурой.
                </li>
            </ul>
        </div>
    )
}

export const pageQuery = graphql`
    query ContourCorrectionArticleQuery {
        ...Helmet
    }
`
