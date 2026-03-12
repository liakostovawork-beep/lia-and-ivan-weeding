import dressCodeImg from "../assets/colors.jpg";

export const Dresscode = () => {
  return (
    <section id="dressCode" className="dresscode-section">
      <div className="classic-frame responsive-container">
        <h2 className="program-title titelsNames">Облекло</h2>

        <div className="dresscode-content">
          <div className="dresscode-text">
            Белите сватбарски ризи вкъщи оставете,
          </div>
          <div className="dresscode-text">черно и червено също не носете,</div>
          <div className="dresscode-text">но от там на сетне,</div>
          <div className="dresscode-text">
            нека всеки в щур пастелен цвят да блесне!
          </div>
        </div>

        <div className="dress-image-wrapper">
          <img src={dressCodeImg} alt="Dresscode" className="dress-img-full" />
        </div>
      </div>
    </section>
  );
};
