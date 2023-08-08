import { useTranslation } from 'react-i18next';
import scss from './Filtration.module.scss'
import Button from '../button/Button'
import FilterExpandsds from '../FilterExpands/FilterExpansds'
import { CardData } from '../../constants/CardData';
function Filtration() {
    const { t } = useTranslation();
    return (
        <div className={scss.wrapper}>
            <div className={scss.wrapper__left}>
                <div className={scss.left__add}>
                    <Button text={t("filtation.soiscatel")}></Button>
                    <button>{t("filtation.resume")}</button>
                    <button>{t("filtation.razdel")}</button>
                    <button>{t("filtation.kompanii")}</button>
                </div>
                <div className={scss.left__resume}>
                    <Button text={t("filtation.rabotadatel")}></Button>
                    <button>{t("filtation.dobavitRezume")}</button>
                    <button>{t("filtation.razdelbolueme")}</button>
                </div>
                <div className={scss.left__filters}>
                    <button>{t("filtation.button")}</button>
                </div>
                <FilterExpandsds cardData={CardData} />
            </div>
            <div className={scss.wrapper_right}>
            </div>
        </div>
    )
}

export default Filtration