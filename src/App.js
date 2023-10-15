import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="page-heading bg-light">
        <Navbar />
        <div className="px-4 py-16 text-center">
          <h1 className="display-message display-4 fw-bold text-dark">Find Your Perfect Pet</h1>
          <p className="mt-4 lead text-secondary">Matching people with their ideal pets</p>
          <div className="mt-5">
            <a href="#" className="btn btn-primary btn-lg">Take Quiz</a>
            <a href="#" className="btn btn-link text-dark">Learn more <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="bg-primary py-5">
        <div className="container text-center text-light">
          <h2 className="display-5 fw-bold">Give Them The Home They Deserve</h2>
          <p className="mt-2 lead">Features to help you find your ideal companion</p>
          <p className="mt-4 text-light">Discover the features that make our platform the best choice for matching people with their perfect pets.</p>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="icon bg-primary text-white">
                      <i className="bi bi-search"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="text-dark">Comprehensive Pet Search</h3>
                      <p className="text-secondary">Easily search for your ideal pet based on various criteria such as breed, age, and location.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="icon bg-primary text-white">
                      <i className="bi bi-heart"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="text-dark">Adoption Process</h3>
                      <p className="text-secondary">Learn about the adoption process and get step-by-step guidance on how to bring your new pet home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="icon bg-primary text-white">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="text-dark">Pet Care Tips</h3>
                      <p className="text-secondary">Access a wealth of information on pet care, training, and health to ensure your pet is happy and healthy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="icon bg-primary text-white">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="text-dark">Community Support</h3>
                      <p className="text-secondary">Join our community of pet lovers to get advice, share experiences, and find support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  
      <div className="container faq-container">
	  	<div className="faq-info">
	  		<h3>Frequently Asked Questions</h3>
	  		<p>Cannot find what you are looking for? Reach out</p>
	  	</div>
	  	<div className="faq-questions">
	  		<h6>Question</h6>
	  		<p className="faq-question">Our animal shelter match making service uses a sophisticated algorithm to match you with the perfect pet based on your preferences and lifestyle. We take into account factors such as your living situation, activity level, and previous pet experience to ensure a successful match.</p>
	  		<h6>Question</h6>
	  		<p className="faq-question">Our animal shelter match making service uses a sophisticated algorithm to match you with the perfect pet based on your preferences and lifestyle. We take into account factors such as your living situation, activity level, and previous pet experience to ensure a successful match.</p>
	  		<h6>Question</h6>
	  		<p className="faq-question">Our animal shelter match making service uses a sophisticated algorithm to match you with the perfect pet based on your preferences and lifestyle. We take into account factors such as your living situation, activity level, and previous pet experience to ensure a successful match.</p>
	  	</div>
	  </div>
    <Footer />
	</>
  );
}

export default App;
