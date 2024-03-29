import React from 'react'
import logo from './logo.png';
import './style.css';
import './responsive.css';
import './utils.css';

export default function Main() {
    return (
        <>
            <div className='main'>
                <header>
                    <nav>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <ul>
                                <li><a href="home.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="search">
                            <input type="text" name="" id="" placeholder="Search Here" />
                            <button className="btn">Search</button>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="container">
                        <div className="slider">
                            <img src="https://source.unsplash.com/1600x500/?shopping,ecommerce" alt="" />
                        </div>

                        <div className="card">
                            <h2 className="my-2">Join the cricket fun</h2>
                            <div className="cards">
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,keeping" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,gloves" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,stumps" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,ball" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,bat" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,bat,ball" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,bat,boundary" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?bat,pad" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h2 className="my-2">Furniture Bestsellers</h2>
                            <div className="cards">
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?furniture" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?furniture,wood" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?wood,stumps" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?sofa" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?chair" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?dining,chair" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,bat" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?cricket,bat" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h2 className="my-2">Best Battery Phones</h2>
                            <div className="cards">
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?phone,battery" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?battery,mobile" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?mobile,phone" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?phone" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>

                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?phone,cable" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?phone,charging" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?mobile" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <img src="https://source.unsplash.com/160x160/?telephone" alt="" width="200px" />
                                    <div className="lines">
                                        <p className="text-center my-1">Cricket Bats</p>
                                        <p className="text-center my-1">Min 20% off</p>
                                        <p className="text-center my-1">Grab Now!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="flex-all-center">
                    <p>Copyright &copy; MyCart.com </p>
                </footer>
            </div>
        </>
    )
}

