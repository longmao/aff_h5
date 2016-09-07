import React, { Component, PropTypes } from 'react'




class LangCtrl extends React.Component {
   render() {
      return (
         <div>
             <div id="languageShow" className="lang_text">
                 <p><span data-trans="language">Language</span>:</p>
             </div>
             <div id="languageContent" className="lang_content">
                 <div className="dropdown">
                     <button id="dLabel" onClick = {(e)  => this.handleClick(e)} className="lang_btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <p className="languageValue"><span data-trans="language_name">English</span><i className="icon-Spread"></i></p>
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dLabel">
                         <li value="en" className="lang_choice">English</li>
                         <li value="jp" className="lang_choice">日本語</li>
                         <li value="ch" className="lang_choice">简体中文</li>
                     </ul>
                 </div>
             </div>
         </div>
      )
   }
}

export default LangCtrl;