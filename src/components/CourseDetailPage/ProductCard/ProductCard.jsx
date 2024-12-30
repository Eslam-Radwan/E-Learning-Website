import React from 'react';
import styles from './productCard.module.css'
function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__container}>
                <div className={styles.productCard__heading}>
                    <div className={styles.productCard__heading__mainImage}>
                        <img src={product.imageSource} alt="" />
                    </div>
                    <div className={styles.productCard__heading__price}>
                        <h2 className={styles.productCard__heading__currPrice}>${product.currPrice}</h2>
                        <h2 className={styles.productCard__heading__prevPrice}><del>${product.prevPrice}</del></h2>
                    </div>
                    <button>buy now</button>
                </div>
                <div className={styles.productCard__features}>
                    <h3 className={styles.productCard__features__heading}>This Course includes</h3>
                    <ul>
                        {product.features.map((feature) => {
                            return (<li>{feature}</li>)
                        })}
                    </ul>
                </div>
                <div className={styles.productCard__shareProduct}>
                    <h3 className={styles.productCard__shareProduct__heading}>share this course</h3>
                    <ul>
                        <li>facebook</li>
                        <li>youtube</li>
                        <li>twitter</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;