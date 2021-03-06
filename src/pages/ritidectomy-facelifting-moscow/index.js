import React from 'react'
import Helmet from '../../components/HelmetWrapper'
import Heading from '../../components/Heading'

export default function RitidectomyFaceliftingArticle({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet
                data={data}
                title="Ритидэктомия - фейслифтинг, подтяжка лица и шеи"
                description=""
            />
            <Heading titleH1="Ритидэктомия - фейслифтинг, подтяжка лица и шеи" type="underline" />
            <p>
                Теперь каждая женщина в стране, находясь в определенном
                возрасте, мечтает о подтяжке кожи на лице. Данную операцию
                специалисты считают пластической, омолаживающей, которая
                устраняет возрастные изменения. При ее выполнении специалисты
                удаляют с лица обвислую кожу, разглаживают морщины. В результате
                к женщине могут вернуться четкие очертания лица, разгладятся ее
                морщины, устранится дряблость кожи. Выполненная операция
                устранит все дефекты.
            </p>

            <h2>Предварительная подготовка при подтяжке лица</h2>

            <p>
                Для качественной подтяжки к ней следует подготовиться.
                Обговорить подробно ситуацию с пластическим хирургом. Объяснить
                ему, что желала бы женщина видеть на своем лице после проведения
                операции. При обсуждении следует врачу подробно изложить, что не
                устраивает женщину, и какая кожа у нее должна быть после
                операции.
            </p>

            <p>
                Пластическому хирургу надо объяснить женщине, какие изменения в
                коже ее ожидают после операции. Затем женщине надо сдать
                необходимые анализы, которых требует пластическая операция. Врач
                выносит решение о методе выполнения пластики лица. При этом он
                учитывает особенности женского организма, возраста, перенесенных
                заболеваний, начиная с момента ее жизненного пути.
            </p>

            <p>
                Пациентка должна внимательно прислушиваться к врачебным
                рекомендациям, которые для нее представляют в предоперационный
                период. Это во многом поможет ей снизить осложнения, которые
                могут у нее возникнуть. Операция, выполненная хирургом, не
                остается без его надзора. Поэтому о послеоперационном периоде
                беспокоиться не стоит, надо только внимательно исполнять все
                рекомендации. Дальнейшие советы врача будут способствовать
                заживлению кожи. Их следует выполнить!
            </p>

            <h2>Обезболивание перед пластикой</h2>

            <p>
                Перед проведением операции для обезболивания применяют местную
                анестезию или общий наркоз. Если врач выполняет круговую
                подтяжку лица, то применяет местный наркоз, иногда внутривенную
                седацию.
            </p>

            <h2>Выполнение операции</h2>

            <p>
                Перед выполнением круговой подтяжки лица схему размещения
                разрезов на лице оговаривают заранее. Метод проведения разрезов
                зависит от выбора врача, состояния кожи пациентки. При данной
                операции обычно разрез кожи начинают от височной области. Потом
                его проводят спереди уха. Он идет по направлению естественных
                складок клиентки. Разрез завершают в заушной части головы. Этот
                разрез будет почти не заметным на лице. Успехов Вам и
                омоложения! Будьте красивыми и счастливыми!
            </p>
        </div>
    )
}

export const pageQuery = graphql`
    query RitidectomyFaceliftingArticleQuery {
        ...Helmet
    }
`
