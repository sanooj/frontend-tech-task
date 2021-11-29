import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from "@emotion/react";

import ArticleList from 'containers/ArticleList/index';
import GlobalStyles from 'GlobalStyles';


ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ArticleList />
  </React.StrictMode>,
  document.getElementById('root')
)
