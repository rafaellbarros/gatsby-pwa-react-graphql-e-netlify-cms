import PropTypes from "prop-types"
import React from "react"
import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import * as S from './styled'


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
        <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
