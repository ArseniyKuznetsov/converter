import type { ProductCardProps } from "./model";
import './ProductCard.scss';

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    origin,
    price,
    currency,
    imageUrl
}) => {
    const formattedPrice = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);

    return (
        <div className="product-card">
            <div className="product-card__image-container">
                <img
                    src={imageUrl}
                    alt={title}
                    className="product-card__image"
                />
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__origin">Страна: {origin}</p>
                <p className="product-card__price">{formattedPrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;