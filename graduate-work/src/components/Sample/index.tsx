import style from  './style.module.css';
import {peachy, orange, lemon} from '../../assets';
import { Button } from '../Button';

export const Sample= () => {
    return(
        <div className={style.blogSambler}>
                <div className={style.container}>
                    <h2 className={style.blogHealthyTitle}>The Sampler</h2>
                    <div className={style.blogSamblerContent}> 
                        <div className={style.blogSamblerRight}>
                        <img src={peachy} alt="" className={style.peachy} />
                        </div>
                        <div className={style.blogSamblerLeft}>
                            <div className={style.blogSamblerPic}>
                                <img src={orange} alt="" className={style.girls} />
                                <img src={lemon} alt="" className={style.girls} />
                                <h5 className={style.blogSamblerText}>Our Sampler gives you, and your tastebuds,
                                    a chance to experience six of our flavors.
                                    Inside you’ll find the following assortment:</h5>
                                <h5 className={style.blogSamblerTextFruits}>2x Lime<br/>
                                    2x Lemon<br/>
                                    2x Ogange<br/>
                                    2x Grapefrait</h5>
                                    <Button type="primary" text={"Shop Now"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}