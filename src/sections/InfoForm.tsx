export const InfoForm = () => {
  return (
    <section className="program-section" id="infoForm">
      <div className="classic-frame">
        <div className="program-header">
          <h2 className="program-title">Потвърди присъствие</h2>
        </div>

        <div className="program-elements" style={{ marginTop: "4rem" }}>
          <div
            className="dresscode-text"
            style={{ textAlign: "center", padding: "0 40px" }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.4",
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              Моля, потвърдете вашето присъствие най-късно до <b>1 май</b>, като
              попълните нашата анкета. Благодарим ви!
            </p>

            <a
              href="for-the-link"
              target="_blank"
              rel="noopener noreferrer"
              className="rsvp-button"
            >
              АНКЕТАТА
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
