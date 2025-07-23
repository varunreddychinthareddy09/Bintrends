import React from "react";
import { IoTelescope } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { PiCellSignalHigh } from "react-icons/pi";
import { TfiTimer } from "react-icons/tfi";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="main-container">
      {/* <IoTelescope /> */}
      <div>
        <img src="Group 1000005252.svg" />
      </div>

      <div className="searchBarcontainer">
        <div>
          <img src="Vector.svg" className="searchicon" />
        </div>
        <div className="searchbarsection">
          <input
            type="search"
            className="border-none searchtext"
            placeholder="Search Key Word"
          />

          <img src="Line 261.svg" />

          <div className="Keywordblock">
            <p>Key Word</p>

            <img src="iconamoon_arrow-up-2-bold.svg" />
          </div>
        </div>
      </div>

      <div className="Layout-section">
        <div className="keyword-suggestion-section">
          <p>Key Word Suggestion:</p>

          <div className="keywords-list">
            <p className="keywords" style={{ height: "14px", width: "37px" }}>
              Fiber
            </p>
            <p className="keywords" style={{ height: "14px", width: "52px" }}>
              Protien
            </p>
            <p className="keywords" style={{ height: "20px", width: "121px" }}>
              Funtional Drinks
            </p>
            <p className="keywords" style={{ height: "14px", width: "114px" }}>
              Himalayan Salt
            </p>
            <p className="keywords" style={{ height: "20px", width: "47px" }}>
              Vegan
            </p>
            <p className="keywords" style={{ height: "20px", width: "74px" }}>
              Electrolyte
            </p>
            <p className="keywords" style={{ height: "20px", width: "45px" }}>
              Muesli
            </p>
            <p className="keywords" style={{ height: "14px", width: "137px" }}>
              Plant Based Protein
            </p>
          </div>
        </div>

        <div className="category-section">
          <p>category:</p>

          <div className="category-list">
            <p>
              <IoIosArrowBack />
            </p>
            <p className="keywords" style={{ height: "14px", width: "43px" }}>
              FMCG
            </p>
            <p className="keywords" style={{ height: "14px", width: "79px" }}>
              Bevarages
            </p>
            <p className="keywords" style={{ height: "20px", width: "175px" }}>
              Snacks & Branded Foods
            </p>
            <p className="keywords" style={{ height: "14px", width: "185px" }}>
              Foodgrains, Oil & Masala
            </p>
            <p className="keywords" style={{ height: "20px", width: "99px" }}>
              Personal Care
            </p>
            <p className="keywords" style={{ height: "20px", width: "158px" }}>
              Cleaning and HouseHold
            </p>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
        </div>

        <div className="products-section">
          <div className="products-header">
            <h4>Trending Products</h4>
            <div className="time-filter">
              <div className="timer-section">
                <TfiTimer />
                <p>6 months</p>
              </div>
              <div className="filter-section">
                <IoFilterOutline />
                <p>Filters</p>
              </div>
            </div>
          </div>

          <div className="product-cards">
            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>

            <div>
              <div className="product-card">
                <div className="inner-card">
                  <h4>Leaf & Dust Tea</h4>
                </div>
                <div className="inner-card-content">
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                  <img src="Line 261.svg" />
                  <div className="left-values">
                    <div className="left-value">
                      <div className="left-inner-values">
                        <PiCellSignalHigh />
                        <p>+1.7%</p>
                      </div>
                      <p>Per Change</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="subcategory-text">
                Sub Category: <span>Tea</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
