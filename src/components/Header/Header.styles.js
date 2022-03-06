import styled from "styled-components";


export const HeaderWrapper = styled.header`
  &.home-header {
    position: absolute;
    width: 100%;
  }
  
`;
export const NavContainer = styled.nav`


  .nav-center {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 210px;
      height: 120px;

      @media (max-width:768px) {
        width: 159px;
        height: 98px
      }
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #F39200;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-content {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width:1024px) {
      position: initial;
    }
  }
  .nav-links {
      display: flex;
      justify-content: center;

      li {
        display: flex;
        align-items: center;
      }
      a {
        position: relative;
        color: #fff;
        font-size: 24px;
        text-transform: capitalize;
        line-height: 37px;
        margin: 0 25px;
        @media (max-width:1440px) {
          margin: 0 18px;
        }
        @media (max-width:1440px) {
          font-size: 16px;
        }
      }
      span {
        display: inline-block;
        width: 5px;
        height: 100%;
        background-color: #F39200;
        
      }
      @media (max-width:1024px) {
          display: none;
        }
    }
    .nav-dropdown.active {
      display: block;
    }
    .nav-dropdown {
      display: none;
      position: absolute;
      width: 100%;
      max-width: 250px;
      background-color: #000;
      border-radius: 28px;
      border: 3px solid #F7A118;
      padding: 8px 0px 10px 12px;
      right: 0;
      top: 100%;
      z-index: 1;
      &-icon {
        display: block;
        width: 100%;
        background-color: transparent;
        border: none;
        text-align: right;
        padding-right: 10px;
        svg {
          font-size: 28px;
          cursor: pointer;
        }
        svg path {
          color: #fff;
        } 
      }
      ul {
        padding: 0;
        margin: 0;
        width: 100%;
      }
      ul li {
        padding: 5px 0px;
      }
      ul li a {
        font-family: 'Poppins', sans-serif;
        font-size: 19px;
        font-weight: 500;
        color: #fff;
        text-transform: capitalize;

      }
      @media (max-width: 1024px) {
        right: 3%;
        top: 80%;
        max-width: 222px;
      }
    }
    .nav-lg-lo {
      display: flex;
      align-items: center;
      button {
        padding: 0;
        margin: 0;
        font-size: 0;
        background-color: transparent;
        border: none;
      }
      svg {
        font-size: 18px;
        margin-left: 8px;
        
      }
      svg path {
        color:#fff;
      }
    }

`;