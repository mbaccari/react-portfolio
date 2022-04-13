

function Footer() {
    return (
        <footer className="navbar navbar-light bg-light d-flex justify-content-center" >

            <div className="justify-content-end">
                <ul className="navbar-nav list-group-horizontal">
                    <li className="nav-item px-4">
                        <a className="navbar-brand" href="https://github.com/mbaccari" target='_blank'>
                            <i className="bi bi-github" />
                        </a>
                    </li>

                    <li className="nav-item px-4">
                        <a className="navbar-brand" href="https://www.linkedin.com/in/marshall-baccari-3b0238222/" target='_blank'>
                            <i className="bi bi-linkedin" />
                        </a>
                    </li>

                    <li className="nav-item px-4">
                        <a className="navbar-brand" href="https://www.reddit.com/user/i_can_do_6_pull_ups" target='_blank'>
                            <i className="bi bi-reddit" />
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;