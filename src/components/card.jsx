import '../styles/card.scss'
import CTA from './cta'

const Card = ({ category, title, teacher, subtitle, btn, image, link, diskon }) => {
    return (
        <div className='card'>
            <div className="card-image">
                {image && <img className='img-fluid' src={image} alt=""/>}
            </div>
            <div className="card-body">
                {diskon && <div className="card-diskon">{diskon}%</div>}
                {category && <div className="card-category">{category}</div>}
                {title && <div className="card-title">{title}</div>}
                {teacher && <div className="card-author">{teacher}</div>}
                {subtitle && <div className="card-subtitle">{subtitle}</div>}
                {btn && <CTA
                variantValue='outline-secondary'
                classValue='d-block card-cta'
                btnvalue={btn}
                linkValue={link}
                />}
            </div>
        </div>
    )
}

export default Card