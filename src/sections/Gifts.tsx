import giftsPhoto from "../assets/letter.jpg";

export const Gifts = () => {
  return (
    <section className="program-section" id="gifts">
      <div className="classic-frame">
        <div className="program-header">
          <h2 className="program-title">Подаръци</h2>
        </div>

        <div className="program-elements">
          <div className="dresscode-text">
            <div className="dresscode-content">
              <div className="dresscode-text" style={{ fontSize: "30px" }}>
                Посуда, вещи и неща,
              </div>
              <div className="dresscode-text" style={{ fontSize: "30px" }}>
                да <b>НЕ</b> ви идват на ума!
              </div>
              <div className="dresscode-text" style={{ fontSize: "30px" }}>
                Подаръкът в пликче поставете
              </div>
              <div className="dresscode-text" style={{ fontSize: "30px" }}>
                и повече не го мислете!
              </div>
            </div>
          </div>
          <div className="dress-image-wrapper" style={{ border: "0px" }}>
            <img
              src={giftsPhoto}
              alt="Wedding Gifts"
              className="dress-img-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
