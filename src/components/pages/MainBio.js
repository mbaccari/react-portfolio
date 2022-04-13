function MainBio() {
    return (
       <main className=' mt-3'> 

            <h1 className="display-4 mb-4 text-center"> About me </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />

        <div className='container'>
          <div className="row text-center">
            <div className="col-xs-12">
              <img src="https://placekitten.com/g/200/200" alt=" Meee"/>
            </div>
            <div className="col">
              <p className="h1">
                Hey, I'm Marshall
              </p>

              <p className="lead">
                I'm a Full Stack Developer working in the Pacific Northwest.
              </p>
            </div>
          </div>
        </div>
      </main>
    )
}

export default MainBio;