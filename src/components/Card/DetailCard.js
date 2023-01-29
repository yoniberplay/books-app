import './DetailCard.scss'


const DetailCard = (props) => {
  return (
    <div className="slide-container">
      {/* <div class="wrapper"> */}
        <div className="clash-cards ">
          <div className="clash-card__level clash-card__level--barbarian">
          {props.Datos.Author}
          </div>
          <div className="clash-card__unit-name">{props.Datos.Title}</div>
          <div className="clash-card__unit-description">
          {props.Datos.Details}
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">
              {props.Datos.Year}
              </div>
              <div className="stat-value">Year</div>
            </div>

            <div className="one-third">
              <div className="stat">{props.Datos.Category}</div>
              <div className="stat-value">Category</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">{props.Datos.Category}</div>
              <div className="stat-value">ItemId</div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default DetailCard;
