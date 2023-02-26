import React, { FunctionComponent } from "react";
import { ROUTE } from "./../constants/routes";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface INavProps {
  history: any,
  navigate: NavigateFunction
};

class Nav extends React.Component<INavProps> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      mobileMenuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.navigate = this.navigate.bind(this);
  }


  toggleMenu(_event: any) {
    this.setState({
      mobileMenuActive: !(this.state as any).mobileMenuActive,
    });
  }


  // Using a custom method to navigate because we
  // need to close the mobile menu if we navigate to
  // another page
  navigate(url: ROUTE) {
    this.setState(
      {
        mobileMenuActive: false,
      },
       () => {
        (this.props as any).navigate(url);
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger ${
              (this.state as any).mobileMenuActive ? "is-active" : ""
            }`}
            data-target="navbarBasicExample"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${
            (this.state as any).mobileMenuActive ? "is-active" : ""
          }`}>
          <div className="navbar-start">
            <a
              className="navbar-item"
              onClick={() => this.navigate(ROUTE.DASH)}>
              Dashboard
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

interface Props {
  history: any
};

const WithNavigate: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return <Nav {...props} navigate={navigate} />
}

export default WithNavigate;
