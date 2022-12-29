import { Link } from "gatsby";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { menuData } from "../../data/menuData";
import MenyButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltop";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document clicked");
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenyButton
              item={item}
              key={index}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenyButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenyButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={(event) => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 760px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 760px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
