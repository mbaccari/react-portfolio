import me from '../../assets/me.jpg'

function MainBio() {
    return (
       <main className=' mt-3'> 

            <h1 className="display-4 mb-4 text-center"> About me </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />

        <div className='container'>
          <div className="row text-center text-dark">
            <div className="col-xs-12">
              <img className="img-fluid w-50" src={me} alt=" Meee"/>
            </div>
            <div className="col">
              <p className="h1">
                Hey, I'm Marshall
              </p>

              <p>
                I'm a Full Stack Developer working in Seattle, Washington
              </p>
              <p>
                When I'm not working, I spend as much time as possible working
                <br />
                on personal coding projects, growing my knowledge and experience, and of course,
                <br />
                Always Improving
              </p>
            </div>
          </div>
        </div>
      </main>
    )
}

export default MainBio;