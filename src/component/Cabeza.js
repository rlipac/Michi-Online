import React from 'react'

function Cabeza(props) {
    return <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <a className="navbar-brand ml-2 mr-5" href="https://www.linkedin.com/in/richard-lipa-394140b8/">
                            <img className="rounded-circle mx-auto" src="https://media.licdn.com/dms/image/C4D03AQFso6hPitsdiQ/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=cdYhpyBSm6gFQJ93NsdcWwqcu56Ed140X53-YqXf0EI" width="80" />
                        </a>
                        <h3 className="text-white  mt-4">Node.js & React.js</h3>
                    </ul>

                    {/* <form className="form-inline my-2 my-lg-0"> */}
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" /> */}
                    <a href="https://github.com/rlipac" className="btn btn-outline-success mr-4 ">Richard  Rene Lipa Cochachi</a>
                    {/* </form> */}
                </div>
            </nav>
        </header>

    </div>
}

export default Cabeza;