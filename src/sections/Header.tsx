export type HeaderNavItem = {
  id: string;
  label: string;
  href: string;
  imageName: string;
};

export const Header = () => {
  const headerLinks: HeaderNavItem[] = [
    {
      id: "start",
      label: "Начало",
      href: "#start",
      imageName: "bookmark_heart",
    },
    {
      id: "about",
      label: "Ние",
      href: "#about",
      imageName: "partner_heart",
    },
    {
      id: "program",
      label: "Програма",
      href: "#program",
      imageName: "article",
    },
    {
      id: "dressCode",
      label: "Облекло",
      href: "#dressCode",
      imageName: "apparel",
    },
    {
      id: "gifts",
      label: "Подаръци",
      href: "#gifts",
      imageName: "featured_seasonal_and_gifts",
    },
    {
      id: "cause",
      label: "Кауза",
      href: "#cause",
      imageName: "volunteer_activism",
    },
    {
      id: "infoForm",
      label: "Потвърждение",
      href: "#infoForm",
      imageName: "edit_square",
    },
  ];

  return (
    <div className="hero-wrapper" id="start">
      <div className="hero-header-content">
        <div className="hero-header">
          <div className="name">Лия</div>
          <div className="ampersand">&</div>
          <div className="name">Иван</div>
        </div>
        <div className="header-subtext">
          Ще се радваме да отпразнуваме нашата сватба заедно!
        </div>
      </div>

      <nav className="header-nav">
        <ul className="header-list">
          {headerLinks.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="header-link">
                <span className="material-symbols-outlined">
                  {item.imageName}
                </span>
                <div className="header-link-text">{item.label}</div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
