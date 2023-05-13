

function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img className="logo" src="/image/logo.png" width={40} height={40} alt="logo" />
          <div className="header__left-info">
            <h1 className="header__left-title m-0 text-uppercase">React Sneakers</h1>
            <p className="header__left-text m-0">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right d-flex">
          <div className="header__right-item">
            <img src="/image/cart.svg" width={20} height={20} alt="icon" />
            <span className="header__right-price">1205 руб.</span>
          </div>
          <div className="header__right-item">
            <img src="/image/favorite.svg" width={20} height={20} alt="icon" />
          </div>
          <div className="header__right-item">
            <img src="/image/user.svg" width={20} height={20} alt="icon" />
          </div>
        </div>
      </header>
      <div className="content p-40">
        <h2 className="content__title">Все кроссовки</h2>
        <div className="sneakers d-flex justify-between align-center">
          <div className="card">
            <img className="card__sneakers" src="/image/sneakers/1.jpg" alt="Sneakers" width={133} height={112} />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/image/plus.svg" alt="icon" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card__sneakers" src="/image/sneakers/2.jpg" alt="Sneakers" width={133} height={112} />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/image/plus.svg" alt="icon" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card__sneakers" src="/image/sneakers/3.jpg" alt="Sneakers" width={133} height={112} />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/image/plus.svg" alt="icon" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card__sneakers" src="/image/sneakers/4.jpg" alt="Sneakers" width={133} height={112} />
            <p className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <span>12 999 руб.</span>
              </div>
              <button>
                <img src="/image/plus.svg" alt="icon" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
