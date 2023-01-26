import './css/style.css';
import './css/icon-font.css';
import Logo from './icons/Icon-logo.svg'

function App() {
  return (
    <div className="container">
    <div className="navigation">
        <input id="toggle" type="checkbox" className="navigation__toggle" />
        <label htmlFor="toggle" className="navigation__button">
            <span className="navigation__icon"></span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#" className="navigation__link">о нас</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link">скидки</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link">лучшие туры</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link">калькулятор цены</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link">связаться с нами</a></li>
            </ul>
        </nav>
    </div>
    <header className="header">
        <img className="header__logo" src={Logo} alt="logo-icon"  />
        <div className="header__box">
            <h1 className="title-first">
                <span className="title-first__main">ТУРЫ НА ВОЗДУШНОМ ШАРЕ</span>
                <span className="title-first__secondary">незабываемое приключение ждет вас</span>
            </h1>
            <a href="#" className="btn btn_animated">наш каталог</a>
        </div>
    </header>

    <main>
        <section className="section-about">
            <div className="text-align-center margin-bottom-80px">
                <h2 className="title-secondary">
                    невероятное ощущение свободы
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="title-third margin-bottom-10px">
                        ПОЗВОЛЬТЕ СЕБЕ ПРИКЛЮЧЕНИЕ
                    </h3>
                    <p className="paragraph margin-bottom-30px">
                        Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрениям и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.
                    </p>
                    <h3 className="title-third margin-bottom-10px">
                        ВВЕРХ НА 6000 МЕТРОВ НАД УРОВНЕМ МОРЯ
                    </h3>
                    <p className="paragraph margin-bottom-30px">
                        Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрениям и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.
                    </p>
                    <a href="#" className="btn-text">Узнать больше &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={require('./img/photo-ballons-1.png')} alt="Photo-ballons-1" className="composition__photo composition__photo__n1" />
                        <img src={require('./img/photo-ballons-2.png')} alt="Photo-ballons-2" className="composition__photo composition__photo__n2" />
                        <img src={require('./img/photo-ballons-3.png')} alt="Photo-ballons-3" className="composition__photo composition__photo__n3" />
                    </div>
                </div>
            </div>
        </section>

        <section className="section-adventure">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="adventure-card">
                        <i className="adventure-card__icon icon-Vector-3 margin-bottom-30px"></i>
                        <h3 className="title-third margin-bottom-10px">приключения</h3>
                        <p className="paragraph">Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных</p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="adventure-card">
                        <i className="adventure-card__icon icon-Vector-2 margin-bottom-30px"></i>
                        <h3 className="title-third margin-bottom-10px">приключения</h3>
                        <p className="paragraph">Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных</p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="adventure-card">
                        <i className="adventure-card__icon icon-Vector margin-bottom-30px"></i>
                        <h3 className="title-third margin-bottom-10px">приключения</h3>
                        <p className="paragraph">Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных</p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="adventure-card">
                        <i className="adventure-card__icon icon-Vector-1 margin-bottom-30px"></i>
                        <h3 className="title-third margin-bottom-10px">приключения</h3>
                        <p className="paragraph">Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-tour">
            <div className="text-align-center margin-bottom-80px">
                <h2 className="title-secondary">
                    НАИБОЛЕЕ ПОПУЛЯРНЫЕ ТУРЫ
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card-tour">
                        <div className="card-tour__side card-tour__side_front">
                            <div className="card-tour__img margin-bottom-50px"></div>
                            <h4 className="card-tour__title">
                                <span className="card-tour__span card-tour__span_1">ГРУППОВЫЕ</span>
                                <br />
                                <span className="card-tour__span card-tour__span_2">ТУРЫ</span>
                            </h4>
                            <div className="card-tour__descr">
                                <ul>
                                    <li>Группы от 6 человек</li>
                                    <li>Продолжительность 2 час</li>
                                    <li>В группе 1 гид</li>
                                    <li>Дальность полета 6км</li>
                                    <li>Бесплатные сувениры</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-tour__side card-tour__side_back">
                            <div className="card-tour__backSide-box">
                                <p className="card-tour__text card-tour__text_1">ПОЛНАЯ СТОИМОСТЬ:</p>
                                <p className="card-tour__text card-tour__text_2">5990₽</p>
                                <a href="#" className="btn btn_animated">забронировать</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card-tour">
                        <div className="card-tour__side card-tour__side_front">
                            <div className="card-tour__img margin-bottom-50px"></div>
                            <h4 className="card-tour__title">
                                <span className="card-tour__span card-tour__span_1">ГРУППОВЫЕ</span>
                                <br />
                                <span className="card-tour__span card-tour__span_2">ТУРЫ</span>
                            </h4>
                            <div className="card-tour__descr">
                                <ul>
                                    <li>Группы от 6 человек</li>
                                    <li>Продолжительность 2 час</li>
                                    <li>В группе 1 гид</li>
                                    <li>Дальность полета 6км</li>
                                    <li>Бесплатные сувениры</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-tour__side card-tour__side_back">
                            <div className="card-tour__backSide-box">
                                <p className="card-tour__text card-tour__text_1">ПОЛНАЯ СТОИМОСТЬ:</p>
                                <p className="card-tour__text card-tour__text_2">5990₽</p>
                                <a href="#" className="btn btn_animated">забронировать</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card-tour">
                        <div className="card-tour__side card-tour__side_front">
                            <div className="card-tour__img margin-bottom-50px"></div>
                            <h4 className="card-tour__title">
                                <span className="card-tour__span card-tour__span_1">ГРУППОВЫЕ</span>
                                <br />
                                <span className="card-tour__span card-tour__span_2">ТУРЫ</span>
                            </h4>
                            <div className="card-tour__descr">
                                <ul>
                                    <li>Группы от 6 человек</li>
                                    <li>Продолжительность 2 час</li>
                                    <li>В группе 1 гид</li>
                                    <li>Дальность полета 6км</li>
                                    <li>Бесплатные сувениры</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-tour__side card-tour__side_back">
                            <div className="card-tour__backSide-box">
                                <p className="card-tour__text card-tour__text_1">ПОЛНАЯ СТОИМОСТЬ:</p>
                                <p className="card-tour__text card-tour__text_2">5990₽</p>
                                <a href="#" className="btn btn_animated">забронировать</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-feedback">
            <div className="bg-gradient"></div>
            <video className="bg-video" autoplay muted loop>
                <source src={require('./img/Hot air balloons-2.webm')} />
            </video>
            <div className="text-align-center margin-bottom-80px">
                <h2 className="title-secondary title-secondary_white">
                    ОТЗЫВЫ НАШИХ КЛИЕНТОВ
                </h2>
            </div>
            <div className="row">
                <div className="feedback-card">
                    <figure className="feedback-card__img">
                        <img src={require('./img/feedBack-1.jpg')} alt="alt" />
                        <figcaption className="feedback-card__name">Алимов Санжар</figcaption>
                    </figure>
                    <div className="feedback-card__box">
                        <h3 className="title-third margin-bottom-10px">
                            Я ПОЛУЧИЛ МАССУ ВПЕЧАТЛЕНИЙ
                        </h3>
                        <p className="paragraph">
                            Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="feedback-card">
                    <figure className="feedback-card__img">
                        <img src={require('./img/feedBack-2.jpg')} alt="dsdc" />
                        <figcaption className="feedback-card__name">Кемелова Ясмин</figcaption>
                    </figure>
                    <div className="feedback-card__box">
                        <h3 className="title-third margin-bottom-10px">
                            Я ПОЛУЧИЛ МАССУ ВПЕЧАТЛЕНИЙ
                        </h3>
                        <p className="paragraph">
                            Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-align-center">
                <a href="#" className="btn btn_animated">забронировать</a>
            </div>
        </section>
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="text-align-center margin-bottom-30px">
                                <h2 className="title-secondary">
                                    Забронировать Тур
                                </h2>
                            </div>
                            <div className="form__group">
                                <input id="name" type="text" className="form__input form__input" placeholder="Имя Фамилия" required />
                                <label htmlFor="name" className="form__label form__label">Ваше Имя и Фамилия</label>
                            </div>
                            <div className="form__group">
                                <input id="email" type="email" className="form__input" placeholder="Ваш email" required />
                                <label htmlFor="email" className="form__label">Ваш email</label>
                            </div>
                            <div className="form__group">
                                <div className="form__group-radio">
                                    <input type="radio" className="form__input-radio" id="tour-1" name="checked" />
                                    <label htmlFor="tour-1" className="form__label-radio">
                                        <span className="form__button-radio"></span>Групповой тур</label>
                                </div>
                                <div className="form__group-radio">
                                    <input type="radio" className="form__input-radio" id="tour-2" name="checked" />
                                    <label htmlFor="tour-2" className="form__label-radio">
                                        <span className="form__button-radio"></span>Индивидуальный тур</label>
                                </div>
                            </div>
                            <div className="form__group">
                                <button type="submit" className="btn btn_brown">Забронировать</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer">
        <div className="row text-align-center">
            <a href="#">
                <img src={Logo} alt="logo" className="footer__logo" />
            </a>
        </div>
        <div className="row">
            <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">о нас</a></li>
                <li className="footer__item"><a href="#" className="footer__link">скидки</a></li>
                <li className="footer__item"><a href="#" className="footer__link">лучшие туры</a></li>
                <li className="footer__item"><a href="#" className="footer__link">калькулятор цены</a></li>
                <li className="footer__item"><a href="#" className="footer__link">связаться с нами</a></li>
            </ul>
        </div>
    </footer>
</div>

  );
}

export default App;
