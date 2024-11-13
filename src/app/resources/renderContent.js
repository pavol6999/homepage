// import { person, newsletter, social, home, about, blog, work, gallery } from './content-';
import { createI18nContent } from './content-i18n';

const renderContent = (t) => {
    return createI18nContent(t);
};

export { renderContent };