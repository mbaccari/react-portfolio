import portfolioItems from "../../data/portfolio.json"

const PortfolioGrid = () => {


    return (
        <section className="h-100 bg-primary mt-3">
            <div className="constainer p-3">
                <div className="row g-3">
                    {portfolioItems.map(({id, title, url, image}) => (
                        <div className="col-md-6" key={id}>
                            <div className="card card-body">
                            <img src={image} className="card-img-top" alt={title} />
                                <div>
                                    {title}
                                </div>
                                <div>
                                    <a href={url} className="btn btn-primary">Go to {title}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioGrid