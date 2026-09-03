import { expect, type Page } from "@playwright/test";

import { PaginationComponent } from "./components/PaginationComponent";
import { ProductsCatalogComponent } from "./components/ProductsCatalogComponent";
import { SiteHeaderComponent } from "./components/SiteHeaderComponent";
import { SubscriptionFooterComponent } from "./components/SubscriptionFooterComponent";
import { xPage } from "../framework/core/xPage";

export class SearchResultsPage extends xPage {
  readonly header = new SiteHeaderComponent(this.$("header"));
  readonly pagination = new PaginationComponent(this.$(".pagination"));
  readonly path: string;
  readonly results = new ProductsCatalogComponent(this.$(".features_items"));
  readonly subscription = new SubscriptionFooterComponent(this.$("footer"));

  constructor(page: Page, readonly query: string) {
    super(page);
    this.path = `/products?search=${encodeURIComponent(this.query)}`;
  }

  async isOpened(): Promise<void> {
    await expect(this.results.title).toHaveText("Searched Products");
    await expect(this.results.cards.first()).toBeVisible();
    await expect(this.page).toHaveURL(new RegExp(`/products\\?search=${encodeURIComponent(this.query)}$`));
  }
}