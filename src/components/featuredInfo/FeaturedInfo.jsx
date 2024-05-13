import React from 'react';
import './featuredInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function FeaturedInfo(props) {
    return (
       <>
           <div className="featured">
               <div className="featureditem">
                   <span className="featuredTitle">Revenge</span>
                   <div className="featuredmoneyContainer">
                       <span className="featuredMoney">$2,415</span>
                       <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
                   </div>
                   <span className="featuredSub">Compared to Last Month</span>
               </div>
               <div className="featureditem">
                   <span className="featuredTitle">Revenge</span>
                   <div className="featuredmoneyContainer">
                       <span className="featuredMoney">$2,415</span>
                       <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon "/></span>
                   </div>
                   <span className="featuredSub">Compared to Last Month</span>
               </div>
               <div className="featureditem">
                   <span className="featuredTitle">Revenge</span>
                   <div className="featuredmoneyContainer">
                       <span className="featuredMoney">$2,415</span>
                       <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
                   </div>
                   <span className="featuredSub">Compared to Last Month</span>
               </div>
           </div>
       </>
    );
}

export default FeaturedInfo;
