import en from "./lang/en"
import ru from "./lang/ru"
import uz from "./lang/uz"

export default defineI18nConfig(() => ({
    legacy: true,
    locale: 'en',
    messages: {
      en,
      ru,
      uz
    }
  }))
  