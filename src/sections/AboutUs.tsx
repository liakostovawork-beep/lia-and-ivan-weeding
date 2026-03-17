import weddingImg from "../assets/wedding-photo.jpg";
import heImg from "../assets/Groom.jpg";
import sheImg from "../assets/bride.jpg";

export const AboutUs = () => {
  const calculateDaysPassed = () => {
    const startDate = new Date("2020-08-08");
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);

    const difference = today.getTime() - startDate.getTime();
    return Math.round(difference / (1000 * 60 * 60 * 24));
  };

  const daysTogether = calculateDaysPassed();

  return (
    <section id="about" className="about-section">
      <div className="classic-frame">
        <h2 className="header-subtext">И тези двамата ще се женят!</h2>

        <div className="couple-container">
          <div className="person-card">
            <div className="person-image-wrapper">
              <img src={sheImg} alt="Булката" className="person-img" />
            </div>
            <h3 className="person-name">Булката</h3>
            <ul className="facts-list left-fact-list">
              <li>Жизнерадостна и експресивна.</li>
              <li>Пее повече от феноменално.</li>
              <li>Най-голямата фенка на Агата Кристи.</li>
              <li>Поддържа нездравословен култ към СМГ.</li>
            </ul>
          </div>

          <div className="person-card">
            <div className="person-image-wrapper">
              <img src={heImg} alt="Младоженецът" className="person-img" />
            </div>
            <h3 className="person-name">Младоженецът</h3>
            <ul className="facts-list rigth-fact-list">
              <li>Сладур от малък.</li>
              <li>Винаги засмян... и му отива.</li>
              <li>Най-големият фен на Тери Пратчет.</li>
              <li>Федерер има толкова титли, защото не е играл срещу него.</li>
            </ul>
          </div>
        </div>

        <div className="story-container">
          <div className="story-image-wrapper">
            <img src={weddingImg} alt="Ние двамата" className="story-img" />
          </div>
          <div className="story-content">
            <h3 className="story-header">Заедно</h3>
            <ul className="facts-list story-fact-list">
              <li>Гонили сме залезите в 12 държави.</li>
              <li>Имаме над 20 бордови игри.</li>
              <li>Той готви мусаката, а тя - мръвките.</li>
              <li>
                Обичаме тапаси, портокалови дръвчета, залези, вино, музика...
              </li>
              <li>Смеем се заедно вече {daysTogether} дни.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
