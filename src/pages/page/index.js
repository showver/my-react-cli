import React, {PureComponent} from 'react';
import style from './index.less';
import pic from 'images/logo192.png'


export default class Page extends PureComponent {
    render() {
        return (
            <div className={style["page-box"]}>
                this is Page~
                <img src={pic}/>
            </div>
        )
    }
}
