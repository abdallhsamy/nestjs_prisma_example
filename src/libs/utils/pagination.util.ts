import config from "../../config";

export class Pagination {
  static generateLinks(
    uri: string,
    currentPage: number,
    lastPage: number
  ): any {

    const baseUrl = `${config.app.baseUrl}/${uri}`;

    const parts = baseUrl.split("://"); // Split URL into protocol and the rest
    const protocol = parts.shift(); // Get the protocol (http or https)
    const path = parts.join("://"); // Join back the remaining parts

    const cleanPath = path.replace(/\/{2,}/g, "/"); // Replace consecutive slashes

    const cleanUrl = `${protocol}://${cleanPath}`;

    const url = cleanUrl;

    return {
      first: `${url}?page=1`,
      last: `${url}?page=${lastPage}`,
      prev: currentPage > 1 ? `${url}?page=${currentPage - 1}` : null,
      next: currentPage < lastPage ? `${url}?page=${currentPage + 1}` : null
    };
  }

  static generateMeta(
    currentPage: number,
    perPage: number,
    total: number
  ): any {
    const lastPage = Math.ceil(total / perPage);

    return {
      current_page: +currentPage,
      from: (currentPage - 1) * perPage + 1,
      last_page: lastPage,
      per_page: perPage,
      to: Math.min(currentPage * perPage, total),
      total: total
    };
  }
}
