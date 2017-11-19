import React, { Component } from 'react'

import './menu.css'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    formattedMenus = (menus) => {
        var menuList = []
        for (var i = 0; i < menus.length; i++) {
            var e = menus[i]
            var className = i === 0 ? 'menu-active' : ''
            var o = {
                text: e,
                className: className,
            }
            menuList.push(o)
        }
        return menuList
    }
    toggleMenus = (menus, key) => {
        var menus = this.props.menus
        var menuList = this.formattedMenus(menus)
        for (var i = 0; i < menuList.length; i++) {
            var m = menuList[i]
            if (key === i) {
                m.className = 'menu-active'
            } else {
                m.className = ''
            }
        }
        return menuList
    }
    actionClick = (key) => {
        var menus = this.props.menus
        var ms = this.toggleMenus(menus, key)
        this.setState({
            menuList: ms,
        })
    }
    render() {
        var menus = this.props.menus
        var menuList = this.state.menuList || this.formattedMenus(menus)
        return (
            <div className="nav">
                <h3>这里是导航栏</h3>
                {
                    menuList.map((v, k) => {
                        return (
                            <a href="#" className={v.className}
                                    onClick={this.actionClick.bind(this, k)}
                                    key={k}>
                                {v.text}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Menu
