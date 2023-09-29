let Card = (props) => {
  return (
    <>
        <div className="card" >
              <img src = {props.img} className="card-img-top" alt="..." />
              <div className="card-body">
                  <p className="card-text">{props.text}</p>
                  <h5 className="card-title">{props.title}</h5>
                  <a href = {props.link} className="btn btn-outline-secondary">WATCH NOW</a>
              </div>
        </div>
    </>
  )
} 

export default Card;