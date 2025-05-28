import React from 'react'
import "./HeroSectionNavbar.scss"
import HeroSectionNavbarApi from './HeroSectionNavbar'

function HeroSectionNavbar() {
  return (
    <div className="hero-section-navbar">
      {HeroSectionNavbarApi.map((heroSecitonNavbarApi) =>
        <div className="hero-section-navbar-box">
          <div className="hero-section-navbar-title">
            {heroSecitonNavbarApi.title.map((heroSectionNavbarTitle) =>
              <h1 key={heroSectionNavbarTitle.id}>{heroSectionNavbarTitle.title}</h1>
            )}
          </div>
          <div className="hero-section-navbar-language-login">
            <div className="hero-section-navbar-language">
              {heroSecitonNavbarApi.language.map((HeroSectionNavbarLanguage) =>
                <p key={HeroSectionNavbarLanguage.id}>{HeroSectionNavbarLanguage.language}</p>
              )}
              {heroSecitonNavbarApi.language.map((heroSectionLanguageIcon) =>
                <img src={heroSectionLanguageIcon.languageIcon} alt="" key={heroSectionLanguageIcon.id} />
              )}
            </div>
            <div className="hero-section-navbar-border"></div>
            {heroSecitonNavbarApi.login.map((heroSectionNavbarLogin) =>
              <div className="hero-section-navbar-login">
                <p>{heroSectionNavbarLogin.login}</p>
                <p>{heroSectionNavbarLogin.or}</p>
                <p>{heroSectionNavbarLogin.signUp}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSectionNavbar