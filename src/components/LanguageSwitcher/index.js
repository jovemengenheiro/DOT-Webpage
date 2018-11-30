import React, { Component } from "react";
import classNames from "classnames";
import { translate } from "react-i18next";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code,
    });

    return (
      <button
        key={code}
        className={buttonClass+" btn btn-outline-primary"}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    );
  }

  render() {

    if (this.state.language === "en")
    {
        var languages = [{ code: "de", label: "Deutsch" }];
    }
    else
    {
        var languages = [{ code: "en", label: "English" }];
    }
    
    return (
      <div className="LanguageSwitcher">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    );
  }
}

export default translate("LanguageSwitcher")(LanguageSwitcher);