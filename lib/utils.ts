import { TITLES_ENUM } from "@/types/constants/titles-enum";

export function generateTitle(title: string, loadGeneralTitle = true) {
  return `${title && title + " |"} ${loadGeneralTitle && TITLES_ENUM.GENERAL}`;
}
