import "./App.css";
export default function Photo(props) {
  if (props.photo) {
    return (
      <section className="Photo">
        <h3>Photo Gallery</h3>
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div className="col-sm-4" key={index}>
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt={photo.src.id}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <footer className="text-center">
          Photos provided by{" "}
          <a href="https://www.pexels.com" rel="noreferrer" target="_blank">
            Pexels
          </a>
        </footer>
      </section>
    );
  } else {
    return null;
  }
}
