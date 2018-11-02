import React from 'react';
import {Element} from "react-scroll";

import Ecommerce from '../../images/home/icons/ecommerce.svg';
import Screen from '../../images/home/icons/screenprinting.svg';
import Assembly from '../../images/home/icons/assembly.svg';
import Fill from '../../images/home/icons/fulfillment.svg';
import Inventory from '../../images/home/icons/inventorymanagement.svg';
import Sourcing from '../../images/home/icons/international.svg';
import Design from '../../images/home/icons/graphicdesign.svg';
import Embroidery from '../../images/home/icons/embroidery.svg';
import Packing from '../../images/home/icons/packaging.svg';
import Warehouse from '../../images/home/icons/warehouse.svg';
import Reporting from '../../images/home/icons/reportinganalytics.svg';
import Shipping from '../../images/home/icons/domestic.svg';

import '../../styles/Home.css';

const Icons = () => {
    return (
        <div>
            <div className="words-overlay">
                <span className='big-words' name="wordsOverlay">control freaks.</span>
                <div className="container green-words-box">
                    <span className="small-orange-words">End-to-End in-house services.</span>
                    <p className="home-descriptions">Which gives us greater supply chain control, lower costs and faster turnaround.</p>
                </div>
            </div>
            <div className="container icon-div">
                <div className="row">
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Ecommerce} alt="ecommerce" className="home-icon" />
                        <p className="icon-description">Ecommerce</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Screen} alt="screen-printing" className="home-icon" />
                        <p className="icon-description">Screen Printing</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Assembly} alt="assembly" className="home-icon" />
                        <p className="icon-description">Assembly</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Fill} alt="fill" className="home-icon" />
                        <p className="icon-description">Fulfillment</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Inventory} alt="inventory" className="home-icon" />
                        <p className="icon-description">Inventory Management</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Sourcing} alt="sourcing" className="home-icon" />
                        <p className="icon-description">Global Sourcing</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Design} alt="design" className="home-icon" />
                        <p className="icon-description">Graphic Design</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Embroidery} alt="embroidery" className="home-icon" />
                        <p className="icon-description">Embroidery</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Packing} alt="packing" className="home-icon" />
                        <p className="icon-description">Packaging</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Warehouse} alt="warehouse" className="home-icon" />
                        <p className="icon-description">Warehouse</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Reporting} alt="reporting" className="home-icon" />
                        <p className="icon-description">Reporting & Analytics</p>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                        <img src={Shipping} alt="shipping" className="home-icon" />
                        <p className="icon-description">Global Shipping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Icons;