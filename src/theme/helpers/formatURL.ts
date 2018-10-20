import * as Handlebars from 'handlebars';
import { ThemeService } from '../theme.service';

/**
 * Formats URL based on options
 * @param options
 */
export function formatURL(url: string) {
  const options = ThemeService.getOptions();
  if (options.mdAbsoluteURLs) {
    if (options.mdAbsoluteURLPrefix) {
      return options.mdAbsoluteURLPrefix + url;
    }
    return url;
  } else {
    return Handlebars.helpers.relativeURL(url);
  }
}
