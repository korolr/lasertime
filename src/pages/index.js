import React from 'react'
import Helmet from 'react-helmet'
import mainCollage from './lasertime-main-collage.jpg'


class IndexPage extends React.Component {

    render() {

        return (
            <div className="PageContent__wrapper">
                <Helmet
                    title={this.props.data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content: 'Добро пожаловать в клинику красоты "Знак Качества"! Мы качественно проводим процедуры фракционного лазерного омоложения, лазерной эпиляции, пластической хирургии.'
                        },
                        {name: 'keywords', content: 'Знак Качества'},
                    ]}
                />
                <p>Медицинский центр «Знак качества» - команда молодых, энергичных и увлеченных своим делом
                    специалистов-профессионалов в области лазерной и инъекционной косметологии.</p>

                <img style={{width: '100%'}} src={mainCollage} alt="Клиника Красоты Знак Качества"
                     title="Клиника Красоты Знак Качества"/>

                <p>Центр открыт в 2013 году, однако в кратчайшие сроки завоевал заслуженную популярность, благодаря
                    использованию новейшего оборудования, высокому профессионализму врачей и доступным ценам.</p>
                <p>Центр находится в самом центре Москвы – Рыбников переулок, дом 4.</p>
                <p>Специализация центра – anti-aging терапия, лазерная эпиляция александритовым лазером, лазерное
                    удаление
                    сосудов и сосудистых звездочек на лице и на теле, контурная пластика, нитевой и плазмолифтинг,
                    пилинги и
                    уходы за кожей лица и тела.</p>

                <p>Инновационные методики омоложения в медицинском центре - это:</p>
                <ul>
                    <li>Лазерная эпиляция на новейшем оборудовании ведущих европейских и американских производителей;
                    </li>
                    <li>Преимущества фракционного СО2 омоложения</li>
                    <li>Инъекции красоты – модная и эффективная процедура</li>
                    <li>Плазмолифтинг</li>
                    <li>Биоревитализация</li>
                    <li>Контурная пластика – современный метод борьбы с морщинами</li>
                    <li>Нитевой лифтинг APTOS</li>
                    <li>Удаление татуировок, сосудов</li>
                    <li>Мезотерапия: молодость и свежесть</li>
                </ul>

                <p>Медицинский центр «Знак качества» предлагает консультацию врача и индивидуальный комплексный подход к
                    каждому пациенту, что выражается в индивидуальном подборе и использовании комплекса процедур и
                    препаратов, нацеленных на решение конкретной проблемы. Наши врачи, устраняя имеющиеся у пациента
                    проблемы,
                    используют наиболее щадящие, безболезненные и эффективные методики, а также стремятся задействовать
                    превентивные
                    меры для устранения проблем, возникающих в будущем.</p>
                <p>Вместе с демократичными ценами, акциями и скидками постоянным клиентам наш медицинский центр
                    обеспечивает
                    индивидуальный подход к каждому клиенту.</p>
                <p>Эффективность работы медицинского центра «Знак качества» определяется нацеленностью на результат, что
                    в
                    свою очередь достигается тремя основополагающими принципами работы центра:</p>
                <ul>
                    <li>подход к пациенту и его проблемам, предполагающий индивидуальное и комплексное использование
                        доказавших свою эффективность методик;
                    </li>
                    <li>жесткие требования к используемому оборудованию и препаратам;</li>
                    <li>высокая квалификация врачей.</li>
                </ul>
                <p>Наилучший результат обеспечивается комплексным подходом к решению конкретной проблемы. Так,
                    использование
                    ботулинотерапии не обеспечивает молодость, ухоженный вид и резкий anti-aging эффект, однако вместе с
                    другими аппаратными и инъекционными методиками обеспечивает решение многих проблем.</p>
                <p>Главный врач клиники – врач-дерматолог с мировым именем Алла Александровна Легун.</p>
            </div>
        )
    }
}

export default IndexPage

export const indexQuery = graphql`
query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`