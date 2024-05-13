import React from 'react'
import Layout from '../components/Layouts/Layout'

const Home = () => {
  return (
    <Layout>
      <div>
        {/* header top section start */}
        <div className="header_top_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="header_top_main">
                  <div className="call_text"><a href="#"><i className="fa fa-phone" aria-hidden="true" /> +01-40-114-6855</a></div>
                  <div className="call_text_2"><a href="#"><i className="fa fa-envelope" aria-hidden="true" /> demo@gmail.com</a></div>
                  <div className="call_text_1"><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /> Mordern Tawon Mosco</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header top section start */}
        {/* header section start */}
        <div className="header_section">
          <div className="container-fluid">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
              {/* <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div> */}
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
            </nav> */}
          </div>
          {/* banner section start */}
          <div className="banner_section layout_padding" style={{paddingTop:"400px"}}>
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="banner_taital_main">
                          <h1 className="banner_taital">TRANSFORMING IDEAS INTO DIGITAL REALITY</h1>
                          <p className="banner_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                          <div className="btn_main">
                            <div className="started_text active"><a href="#">Contact US</a></div>
                            <div className="started_text"><a href="#">About Us</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="banner_taital_main">
                          <h1 className="banner_taital">BUILDER CONSTRUCTION SERVICES</h1>
                          <p className="banner_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                          <div className="btn_main">
                            <div className="started_text active"><a href="#">Contact US</a></div>
                            <div className="started_text"><a href="#">About Us</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right" />
              </a> */}
            </div>
          </div>
          {/* banner section end */}
        </div>
        {/* header section end */}
        {/* services section start */}
        <div className="services_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="services_taital">Our Services</h1>
                <p className="services_text_1">ssages of Lorem Ipsum available, but the majority have suffered alteration</p>
              </div>
            </div>
            <div className="services_section_2">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="box_main active">
                    <div className="service_img"><img src="images/icon-1.png" /></div>
                    <h4 className="development_text">APP DEVELOPMENT</h4>
                    <p className="services_text">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                    <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box_main">
                    <div className="service_img"><img src="images/icon-2.png" /></div>
                    <h4 className="development_text">DIGITAL MARKETING</h4>
                    <p className="services_text">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                    <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box_main">
                    <div className="service_img"><img src="images/icon-4.jpg" /></div>
                    <h4 className="development_text">SOFTWARE TESTING </h4>
                    <p className="services_text">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                    <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="box_main">
                    <div className="service_img"><img src="images/icon-4.jpg" /></div>
                    <h4 className="development_text">WEB DEVELOPMENT</h4>
                    <p className="services_text">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                    <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services section end */}
        {/* about sectuion start */}
        <div className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="about_taital">About Us</h1>
                <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                <div className="read_bt_1"><a href="#">Read More</a></div>
              </div>
              <div className="col-md-6">
                <div className="about_img">
                  <div className="video_bt">
                    <div className=""><img src="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about sectuion end */}
        {/* projects section start */}
        <div className="projects_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="projects_taital text-center">COLLAB VISION INFO SOLUTIONS</h1>
                {/* <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <ul className="nav " data-tabs="tabs">
                      <li className="nav-item">
                        <a className="nav-link active" href="#" data-toggle="tab">Category  filter</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" data-toggle="tab">All</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" data-toggle="tab">Paintingl</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" data-toggle="tab">Reconstructionl</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" data-toggle="tab">Repairsl</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" data-toggle="tab">Residentall</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="projects_section_2 layout_padding">
            <div className="container">
              <div className="pets_section">
                <div className="pets_section_2">
                  <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/img-1.jpeg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Branding</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/istockphoto2.jpg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Consulting</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/istockphoto2.jpg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Designing</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/istockphoto.jpg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Branding</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/istockphoto2.jpg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Consulting</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="container_main">
                              <img src="images/istockphoto.jpg" alt className="image" />
                              <div className="overlay">
                                <div className="text">
                                  <h4 className="some_text"><i className="fa fa-link" aria-hidden="true" /></h4>
                                </div>
                              </div>
                            </div>
                            <div className="project_main">
                              <h2 className="work_text">Designing</h2>
                              <p className="dummy_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                           
                           
                          </div>
                          <div className="col-md-4">
                            
                           
                          </div>
                          <div className="col-md-4">
                         
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects section end */}
        {/* testimonial section start */}
        <div className="testimonial_section layout_padding">
          <div className="container">
            <div id="costum_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="testimonial_taital">Testimonial</h1>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text">Molik <span style={{ float: 'right' }}><img src="images/quick-icon.png" /></span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text"><img src="images/quick-icon.png" /> <span style={{ float: 'right' }}>jeaanson</span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="testimonial_taital">Testimonial</h1>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text">Molik <span style={{ float: 'right' }}><img src="images/quick-icon.png" /></span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text"><img src="images/quick-icon.png" /> <span style={{ float: 'right' }}>jeaanson</span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="testimonial_taital">Testimonial</h1>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text">Molik <span style={{ float: 'right' }}><img src="images/quick-icon.png" /></span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                      <div className="testimonial_section_2">
                        <h2 className="client_name_text"><img src="images/quick-icon.png" /> <span style={{ float: 'right' }}>jeaanson</span></h2>
                        <p className="textimonial_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* testimonial section end */}
        {/* contact section start */}
        <div className="contact_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="contact_taital">Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-6">
                  <form action>
                    <div className="mail_section_1">
                      <input type="text" className="mail_text" placeholder="Name" name="Name" />
                      <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" />
                      <input type="text" className="mail_text" placeholder="Email" name="Email" />
                      <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
                      <div className="send_bt"><a href="#">SEND</a></div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 padding_left_15">
                  <div className="contact_img"><img src="images/contact-img.jpg" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="map_main mb-5">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={600} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
            </div>
          </div>
        </div>
        {/* contact section end */}
        {/* footer section start */}
        
        {/* footer section end */}
        {/* copyright section start */}
        <div className="copyright_section">
        
        </div>
        {/* copyright section end */}
        {/* Javascript files*/}
      </div>


    </Layout>
  )
}

export default Home