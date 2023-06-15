import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Header() {
  let NavItems = [
    {
      id: 1,
      icon: "./images/homeNav icon.svg",
      linkto: "/",
      item: "Home",
    },
    {
      id: 2,
      icon: "./images/whatwedoNav icon.svg",
      linkto: "/whatWeDo",
      item: "What We Do",
    },
    {
      id: 3,
      icon: "./images/aboutusNav icon.svg",
      linkto: "/aboutUs",
      item: "About Us",
    },
    {
      id: 4,
      icon: "./images/teamNav icon.svg",
      linkto: "/team",
      item: "Our Team",
    },
    {
      id: 5,
      icon: "./images/planNav icon.svg",
      linkto: "/pricing",
      item: "Plans",
    },
  ];

  // const [expanded, setExpanded] = useState(false);
  const id = localStorage.getItem('id')
  let isLoggedIn = 0;

  let navigate = useNavigate();
  isLoggedIn =
    localStorage.getItem("isLoggedIn") != undefined
      ? localStorage.getItem("isLoggedIn")
      : 0;

  const handleLogout = () => {
    // localStorage.removeItem("isLoggedIn");
    localStorage.clear();
    localStorage.setItem("isLoggedIn", 0);
    navigate("/signIn");
    window.scrollTo(0, 0);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="header-main  bg-light  "
      // expanded={expanded}
    >
      <Container className="px-md-5 px-3" fluid>
        <Navbar.Brand href="/" className=" text-color brand">
          <div className="brand-img">
            <img
              // src="../images/brand 2.png"
              src="../images/brandimg.png"
              className="img-fluid fw-light fs-6"
              alt="brand"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggle"
          aria-controls="responsive-navbar-nav "
          // ref={menuRef}
          // onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-4 my-md-2">
            {NavItems.map((item) => (
              <div key={item.id}>
                <Nav.Link
                  href={item.linkto}
                  className="text-color fw-bold pe-md-3 pe-xl-5 pb-3 pb-lg-1 nav-item"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="d-inline d-lg-none pe-3 align-items-end"
                  />
                  {item.item}
                </Nav.Link>
              </div>
            ))}
          </Nav>
          <div className="ms-auto">
            {isLoggedIn == 1 ? (
              <div className="d-flex">
                <div className="select-wrapper-logout">
                  <Dropdown className="d-flex ">
                    <Dropdown.Toggle
                      className="d-flex align-items-center border-0 drop-down fw-bold ps-0 pt-0"
                      variant="bg-light"
                    >
                      <div className="pe-4">
                        <img
                          src="../images/profile.png"
                          alt="Profile Image"
                          className="img-fluid img-class"
                          // onClick={() => setExpanded(expanded ? false : "expanded")}
                        />
                      </div>
                      Account{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu py-0" sty>
                      <Dropdown.Item
                        onClick={() => {
                          navigate(`/profile/${id}`);
                          window.scrollTo(0, 0);
                        }}
                        className="NavItem font6 py-2 border-bottom"
                      >
                        <img
                          src="../images/profile icon.svg"
                          className="pe-2 "
                          alt="profile"
                        />
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          navigate("/profileSettings");
                          window.scrollTo(0, 0);
                        }}
                        className="NavItem font6 py-2 border-bottom"
                      >
                        <img
                          src="../images/settings icon.svg"
                          className="pe-2"
                          alt="settings"
                        />
                        Profile settings
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={handleLogout}
                        className="NavItem font6 py-2"
                      >
                        <img
                          src="../images/signout icon.svg"
                          className="pe-2"
                          alt="signout"
                        />
                        Sign out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <Nav.Link href="/signIn">
                  <button
                    className=" me-4 btn signUp-button text-light "
                    // onClick={() => setExpanded(expanded)}
                  >
                    Sign In
                  </button>
                </Nav.Link>

                <Nav.Link href="/registration">
                  <button
                    className=" me-4  btn signUp-button1 "
                    // onClick={() => setExpanded(expanded)}
                  >
                    Sign Up
                  </button>
                </Nav.Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
