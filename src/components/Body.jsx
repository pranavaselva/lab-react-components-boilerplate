export default function(props){
    const body = props.image 
    return (
        body.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
    )
}
